"use strict";

const thanksConfig = {
  eventTitle: "Boda de Vic & Cris",
  eventDescription: "Ceremonia y celebración de boda de Vic & Cris.",
  eventStartISO: "2027-06-26T19:00:00+02:00",
  eventEndISO: "2027-06-27T13:00:00+02:00",
  calendarTimezone: "Europe/Madrid",
  eventLocationName: "Hotel Palacete De La Ochava",
  eventAddress: "Calle Alcalá, 65, C. Miguel de Cervantes, 11, 28511 Valdilecha, Madrid"
};

const reducedMotionQueryThanks = window.matchMedia("(prefers-reduced-motion: reduce)");

document.addEventListener("DOMContentLoaded", () => {
  hydrateThanksContent();
  setupThanksVideoFallback("doorVideo", "page-thanks");
  createThanksDustParticles("thanksDust", 18);
  setupThanksCalendarButton();
  setupThanksBackLinks();
  setupThanksMagic();
  revealThanksCard();
});

function hydrateThanksContent() {
  const dateLabel = document.getElementById("eventDateLabelThanks");
  if (!(dateLabel instanceof HTMLElement)) {
    return;
  }

  dateLabel.textContent = formatThanksEventDate(thanksConfig.eventStartISO);
}

function formatThanksEventDate(isoString) {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const formatter = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: thanksConfig.calendarTimezone
  });

  const value = formatter.format(date);
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function toThanksGoogleDate(isoString) {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function setupThanksCalendarButton() {
  const button = document.getElementById("addCalendarBtn");
  if (!(button instanceof HTMLAnchorElement)) {
    return;
  }

  const start = toThanksGoogleDate(thanksConfig.eventStartISO);
  const end = toThanksGoogleDate(thanksConfig.eventEndISO);
  if (!start || !end) {
    return;
  }

  const calendarUrl = new URL("https://calendar.google.com/calendar/render");
  calendarUrl.searchParams.set("action", "TEMPLATE");
  calendarUrl.searchParams.set("text", thanksConfig.eventTitle);
  calendarUrl.searchParams.set("details", thanksConfig.eventDescription);
  calendarUrl.searchParams.set("location", `${thanksConfig.eventLocationName}, ${thanksConfig.eventAddress}`);
  calendarUrl.searchParams.set("dates", `${start}/${end}`);
  calendarUrl.searchParams.set("ctz", thanksConfig.calendarTimezone);

  button.href = calendarUrl.toString();
}

function setupThanksBackLinks() {
  const links = [...document.querySelectorAll("[data-history-back]")]
    .filter((link) => link instanceof HTMLAnchorElement);

  links.forEach((link) => {
    const fallbackHref = link.dataset.historyBack || link.getAttribute("href") || "index.html";
    link.addEventListener("click", (event) => {
      const isPrimaryClick = event.button === 0;
      const hasModifierKey = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

      if (!isPrimaryClick || hasModifierKey) {
        return;
      }

      event.preventDefault();

      if (!document.referrer && window.history.length <= 1) {
        window.location.assign(fallbackHref);
        return;
      }

      let fallbackTimer = window.setTimeout(() => {
        fallbackTimer = 0;
        window.location.assign(fallbackHref);
      }, 260);

      window.addEventListener("pagehide", () => {
        if (!fallbackTimer) {
          return;
        }

        window.clearTimeout(fallbackTimer);
        fallbackTimer = 0;
      }, { once: true });

      window.history.back();
    });
  });
}

function setupThanksVideoFallback(videoId, classTarget) {
  const video = document.getElementById(videoId);
  if (!(video instanceof HTMLVideoElement)) {
    return;
  }

  const target = document.getElementById(classTarget) || document.body;
  const fallback = () => {
    target.classList.add("is-video-fallback");
  };
  const clearFallback = () => {
    target.classList.remove("is-video-fallback");
  };

  video.addEventListener("error", fallback, { once: true });
  video.addEventListener("loadeddata", clearFallback);
  video.addEventListener("canplay", clearFallback);
  video.addEventListener("playing", clearFallback);

  window.setTimeout(() => {
    if (video.readyState === 0 && video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
      fallback();
    }
  }, 1200);
}

function createThanksDustParticles(containerId, amount) {
  const container = document.getElementById(containerId);
  if (!(container instanceof HTMLElement) || reducedMotionQueryThanks.matches) {
    return;
  }

  container.innerHTML = "";

  for (let index = 0; index < amount; index += 1) {
    const particle = document.createElement("span");
    particle.className = "dust-particle";
    particle.style.setProperty("--left", `${randomBetweenThanks(4, 96)}%`);
    particle.style.setProperty("--top", `${randomBetweenThanks(58, 98)}%`);
    particle.style.setProperty("--size", `${randomBetweenThanks(1.5, 3.8)}px`);
    particle.style.setProperty("--duration", `${randomBetweenThanks(7, 13)}s`);
    particle.style.setProperty("--delay", `${randomBetweenThanks(0, 12)}s`);
    particle.style.setProperty("--drift", `${randomBetweenThanks(-22, 22)}px`);
    container.appendChild(particle);
  }
}

function setupThanksMagic() {
  const flare = document.getElementById("magicFlare");
  if (!(flare instanceof HTMLElement) || reducedMotionQueryThanks.matches) {
    return;
  }

  window.setTimeout(() => {
    flare.classList.add("is-active");
  }, 180);
}

function revealThanksCard() {
  const revealItems = [...document.querySelectorAll("[data-reveal]")]
    .filter((item) => item instanceof HTMLElement);

  if (!revealItems.length) {
    return;
  }

  window.requestAnimationFrame(() => {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  });
}

function randomBetweenThanks(min, max) {
  return Math.random() * (max - min) + min;
}
