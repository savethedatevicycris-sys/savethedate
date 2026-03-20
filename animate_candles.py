#!/usr/bin/env python3
"""
Animate candle flames in a static image using OpenCV + MoviePy.

Goal:
- Keep the image static except for candle flames.
- Simulate realistic flame motion (shape + brightness + glow).
- Export a seamless loop in MP4 or GIF.

Dependencies:
    pip install numpy opencv-python moviepy

Example:
    python3 animate_candles.py \
      --input assets/gallery/nuestro-dia-mas-especial.png \
      --output assets/gallery/nuestro-dia-mas-especial-animado.mp4 \
      --duration 4 --fps 24

    python3 animate_candles.py \
      --input assets/gallery/centro-mesa-programa.png \
      --output assets/gallery/centro-mesa-programa-animado.mp4 \
      --duration 4 --fps 24

Optional manual flame override (repeat --flame for each candle):
    --flame x,y,rx,ry,phase
Example:
    --flame 226,46,36,62,0.1 --flame 1380,495,34,64,1.9 --flame 1308,836,34,64,3.2
"""

from __future__ import annotations

import argparse
import math
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, List, Sequence

try:
    import cv2
    import numpy as np
except Exception as exc:
    raise SystemExit(
        "Missing dependencies. Install with: pip install numpy opencv-python moviepy"
    ) from exc

try:
    # MoviePy 1.x
    from moviepy.editor import VideoClip
except Exception:
    # MoviePy 2.x
    from moviepy import VideoClip


@dataclass(frozen=True)
class FlameConfig:
    """User-level config for one flame region."""

    cx: int
    cy: int
    rx: int
    ry: int
    phase: float = 0.0


@dataclass
class PreparedFlame:
    """Precomputed arrays for fast per-frame animation."""

    cfg: FlameConfig
    x0: int
    y0: int
    x1: int
    y1: int
    xx: np.ndarray
    yy: np.ndarray
    core: np.ndarray
    tip: np.ndarray
    alpha: np.ndarray
    glow: np.ndarray
    base_roi: np.ndarray


def periodic_mix(
    t: float, duration: float, phase: float, terms: Sequence[tuple[int, float]]
) -> float:
    """
    Blend sine harmonics. Harmonic cycles are integers over `duration`,
    so t=0 and t=duration produce the same value (perfect loop).
    """
    omega = 2.0 * math.pi / duration
    value = 0.0
    for cycles, amp in terms:
        value += amp * math.sin(omega * cycles * t + phase * (1.0 + 0.12 * cycles))
    return value


def parse_flame(text: str) -> FlameConfig:
    parts = [p.strip() for p in text.split(",")]
    if len(parts) not in (4, 5):
        raise argparse.ArgumentTypeError(
            "Each --flame must be x,y,rx,ry or x,y,rx,ry,phase"
        )
    try:
        cx, cy, rx, ry = map(int, parts[:4])
        phase = float(parts[4]) if len(parts) == 5 else 0.0
    except ValueError as exc:
        raise argparse.ArgumentTypeError(
            f"Invalid --flame value '{text}'. Expected numeric values."
        ) from exc
    if rx <= 0 or ry <= 0:
        raise argparse.ArgumentTypeError("rx and ry must be > 0")
    return FlameConfig(cx=cx, cy=cy, rx=rx, ry=ry, phase=phase)


def default_flames(width: int, height: int) -> List[FlameConfig]:
    """
    Defaults tuned for this repo image assets.
    Falls back to relative coordinates for the letter image composition.
    """
    if width == 1536 and height == 1024:
        return [
            FlameConfig(226, 46, 36, 62, 0.1),   # top-left candle
            FlameConfig(1380, 495, 34, 64, 1.9), # right-middle candle
            FlameConfig(1308, 836, 34, 64, 3.2), # bottom-right candle
        ]

    if width == 1498 and height == 533:
        return [
            FlameConfig(652, 74, 30, 44, 0.12),   # top-left tall candle
            FlameConfig(840, 62, 30, 44, 0.88),   # top-right tall candle
            FlameConfig(376, 251, 24, 34, 1.42),  # left-front candle
            FlameConfig(493, 306, 22, 30, 2.05),  # left-front small candle
            FlameConfig(1064, 182, 24, 34, 2.78), # right-middle candle
            FlameConfig(1203, 265, 24, 34, 3.44), # right-front candle
        ]

    rel = [
        (0.147, 0.045, 0.023, 0.060, 0.1),
        (0.898, 0.484, 0.022, 0.063, 1.9),
        (0.852, 0.816, 0.022, 0.063, 3.2),
    ]
    out: List[FlameConfig] = []
    for cxr, cyr, rxr, ryr, phase in rel:
        out.append(
            FlameConfig(
                cx=int(round(cxr * width)),
                cy=int(round(cyr * height)),
                rx=max(10, int(round(rxr * width))),
                ry=max(20, int(round(ryr * height))),
                phase=phase,
            )
        )
    return out


class CandleAnimator:
    def __init__(
        self,
        base_bgr_u8: np.ndarray,
        flames: Iterable[FlameConfig],
        duration: float,
    ) -> None:
        if base_bgr_u8.ndim != 3 or base_bgr_u8.shape[2] != 3:
            raise ValueError("Input image must be a 3-channel color image.")
        self.base = base_bgr_u8.astype(np.float32)
        self.height, self.width = base_bgr_u8.shape[:2]
        self.duration = float(duration)
        self.flames = [self._prepare_flame(f) for f in flames]

    def _prepare_flame(self, cfg: FlameConfig) -> PreparedFlame:
        # Expand ROI around flame to allow deformation without hard edges.
        x0 = max(cfg.cx - 2 * cfg.rx, 0)
        x1 = min(cfg.cx + 2 * cfg.rx + 1, self.width)
        y0 = max(cfg.cy - 2 * cfg.ry, 0)
        y1 = min(cfg.cy + 2 * cfg.ry + 1, self.height)

        roi = self.base[y0:y1, x0:x1]
        h, w = roi.shape[:2]

        yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
        x_abs = xx + float(x0)
        y_abs = yy + float(y0)

        rx = float(max(cfg.rx, 1))
        ry = float(max(cfg.ry, 1))

        xn = (x_abs - float(cfg.cx)) / rx
        yn = (y_abs - float(cfg.cy)) / ry
        dist2 = xn * xn + yn * yn

        # Core deformation weight for flame movement.
        core = np.exp(-2.8 * dist2).astype(np.float32)

        # Tip factor: stronger motion near flame tip (upper area).
        tip = np.clip((float(cfg.cy + cfg.ry) - y_abs) / (2.0 * ry), 0.0, 1.0).astype(
            np.float32
        )

        # Prior limits flame mask mostly to the selected ellipse.
        prior = (dist2 <= 1.3).astype(np.uint8) * 255

        # Auto mask from warm + bright pixels (flame colors).
        roi_u8 = np.clip(roi, 0, 255).astype(np.uint8)
        hsv = cv2.cvtColor(roi_u8, cv2.COLOR_BGR2HSV)
        warm = cv2.inRange(hsv, (5, 60, 120), (45, 255, 255))
        hot = cv2.inRange(hsv, (0, 0, 190), (179, 140, 255))
        mask = cv2.bitwise_or(warm, hot)
        mask = cv2.bitwise_and(mask, prior)
        mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8))

        sigma_x = max(1.0, cfg.rx * 0.20)
        sigma_y = max(1.0, cfg.ry * 0.20)
        mask = cv2.GaussianBlur(mask, (0, 0), sigmaX=sigma_x, sigmaY=sigma_y)
        alpha = (mask.astype(np.float32) / 255.0)

        # Fallback if color mask fails (unusual image/color grading).
        if float(alpha.max()) < 0.12:
            alpha = np.clip(core ** 1.4, 0.0, 1.0)

        alpha = np.clip(alpha * 1.20, 0.0, 1.0)
        glow = cv2.GaussianBlur(
            alpha, (0, 0), sigmaX=max(2.0, cfg.rx * 0.85), sigmaY=max(2.0, cfg.ry * 0.85)
        ).astype(np.float32)

        return PreparedFlame(
            cfg=cfg,
            x0=x0,
            y0=y0,
            x1=x1,
            y1=y1,
            xx=xx,
            yy=yy,
            core=core,
            tip=tip,
            alpha=alpha,
            glow=glow,
            base_roi=roi,
        )

    def make_frame(self, t: float) -> np.ndarray:
        # Keep time in the loop range to avoid floating-point drift.
        t = float(t % self.duration)
        frame = self.base.copy()

        for flame in self.flames:
            cfg = flame.cfg

            # Shape movement (horizontal sway + slight vertical stretch).
            sway = 2.2 * periodic_mix(
                t,
                self.duration,
                cfg.phase,
                terms=[(5, 0.55), (7, 0.30), (11, 0.15)],
            )
            lift = 1.7 * periodic_mix(
                t,
                self.duration,
                cfg.phase + 0.6,
                terms=[(4, 0.60), (8, 0.27), (12, 0.13)],
            )
            flicker = periodic_mix(
                t,
                self.duration,
                cfg.phase + 1.1,
                terms=[(6, 0.55), (9, 0.30), (15, 0.15)],
            )

            dx = sway * flame.core * (0.30 + 0.90 * flame.tip)
            dy = -lift * flame.core * flame.tip

            map_x = (flame.xx + dx).astype(np.float32)
            map_y = (flame.yy + dy).astype(np.float32)

            warped = cv2.remap(
                flame.base_roi,
                map_x,
                map_y,
                interpolation=cv2.INTER_LINEAR,
                borderMode=cv2.BORDER_REFLECT_101,
            )

            # Brightness/saturation flicker for natural flame behavior.
            hsv = cv2.cvtColor(
                np.clip(warped, 0, 255).astype(np.uint8), cv2.COLOR_BGR2HSV
            ).astype(np.float32)
            gain_s = 1.0 + 0.10 * flicker * flame.core
            gain_v = 1.0 + 0.18 * flicker * flame.core + 0.08 * np.maximum(
                0.0, flicker
            ) * flame.tip
            hsv[..., 1] = np.clip(hsv[..., 1] * gain_s, 0, 255)
            hsv[..., 2] = np.clip(hsv[..., 2] * gain_v, 0, 255)
            warped = cv2.cvtColor(hsv.astype(np.uint8), cv2.COLOR_HSV2BGR).astype(
                np.float32
            )

            # Blend only in flame region; the rest of the image stays static.
            alpha = np.clip(
                flame.alpha * (0.76 + 0.24 * (0.5 + 0.5 * flicker)),
                0.0,
                1.0,
            )

            roi = frame[flame.y0 : flame.y1, flame.x0 : flame.x1]
            roi[:] = roi * (1.0 - alpha[..., None]) + warped * alpha[..., None]

            # Add warm glow around the flame.
            warm_glow_color = np.array([35.0, 95.0, 180.0], dtype=np.float32)  # BGR
            glow_gain = 0.60 + 0.40 * (0.5 + 0.5 * flicker)
            roi[:] = np.clip(
                roi + flame.glow[..., None] * glow_gain * warm_glow_color[None, None, :],
                0.0,
                255.0,
            )

        # MoviePy expects RGB uint8.
        return cv2.cvtColor(np.clip(frame, 0, 255).astype(np.uint8), cv2.COLOR_BGR2RGB)

    def write_debug_mask(self, output_path: Path) -> None:
        """
        Optional helper image to tune --flame values.
        White/bright zones are where the script will animate.
        """
        debug = np.zeros((self.height, self.width), dtype=np.float32)
        for flame in self.flames:
            debug[flame.y0 : flame.y1, flame.x0 : flame.x1] = np.maximum(
                debug[flame.y0 : flame.y1, flame.x0 : flame.x1], flame.alpha
            )
        out = np.clip(debug * 255.0, 0, 255).astype(np.uint8)
        cv2.imwrite(str(output_path), out)


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        description="Animate candle flames in a static image (OpenCV + MoviePy)."
    )
    p.add_argument(
        "--input",
        default="assets/gallery/nuestro-dia-mas-especial.png",
        help="Input image path.",
    )
    p.add_argument(
        "--output",
        default="assets/gallery/nuestro-dia-mas-especial-animado.mp4",
        help="Output video path (.mp4/.mov/.gif).",
    )
    p.add_argument(
        "--duration",
        type=float,
        default=4.0,
        help="Loop duration in seconds. Use whole/fractional values (default: 4).",
    )
    p.add_argument(
        "--fps",
        type=int,
        default=24,
        help="Frames per second (default: 24).",
    )
    p.add_argument(
        "--flame",
        action="append",
        default=[],
        metavar="x,y,rx,ry[,phase]",
        help="Manual flame region. Repeat this argument for multiple flames.",
    )
    p.add_argument(
        "--write-mask",
        default="",
        help="Optional path to write a debug mask image of animated flame zones.",
    )
    return p


def main() -> None:
    args = build_parser().parse_args()

    input_path = Path(args.input)
    output_path = Path(args.output)
    if not input_path.exists():
        raise SystemExit(f"Input image not found: {input_path}")

    if args.duration <= 0:
        raise SystemExit("--duration must be > 0")
    if args.fps <= 0:
        raise SystemExit("--fps must be > 0")

    base = cv2.imread(str(input_path), cv2.IMREAD_COLOR)
    if base is None:
        raise SystemExit(f"Could not read image: {input_path}")

    flames = [parse_flame(x) for x in args.flame] if args.flame else default_flames(
        base.shape[1], base.shape[0]
    )

    animator = CandleAnimator(base, flames=flames, duration=float(args.duration))

    if args.write_mask:
        animator.write_debug_mask(Path(args.write_mask))

    clip = VideoClip(animator.make_frame, duration=float(args.duration))
    output_path.parent.mkdir(parents=True, exist_ok=True)

    suffix = output_path.suffix.lower()
    if suffix == ".gif":
        # loop=0 means infinite loop in GIF metadata.
        clip.write_gif(str(output_path), fps=int(args.fps), loop=0)
    elif suffix in {".mp4", ".m4v", ".mov"}:
        clip.write_videofile(
            str(output_path),
            fps=int(args.fps),
            codec="libx264",
            audio=False,
            ffmpeg_params=["-pix_fmt", "yuv420p", "-movflags", "+faststart"],
        )
    else:
        raise SystemExit("Output extension must be .mp4, .mov, .m4v or .gif")

    clip.close()
    print(f"Done: {output_path}")


if __name__ == "__main__":
    main()
