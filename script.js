"use strict";

// Cambia a false para desactivar rápidamente el overlay de pétalos.
const ENABLE_PETALS = true;
const PETAL_IMAGE_PATH = "assets/gallery/gold-petal.png";

/*
  Configuración principal del sitio.
  Cambia aquí:
  - Fecha/hora: eventStartISO y eventEndISO
  - Palacete y mapas: eventLocationName, eventAddress, mapUrl, palaceWebsiteUrl
  - Formularios Google: rsvpEmbedUrl/rsvpViewUrl y qnaEmbedUrl/qnaViewUrl
  - Imágenes: galleryImages[*].src y services[*].image
*/
const weddingConfig = {
  coupleNames: "Vic & Cris",
  eventTitle: "Boda de Vic & Cris",
  eventDescription: "Ceremonia y celebración de boda de Vic & Cris.",
  eventStartISO: "2027-06-26T19:00:00+02:00",
  eventEndISO: "2027-06-27T14:00:00+02:00",
  heroDateLabel: "Sábado, 26 de Junio de 2027",
  calendarTimezone: "Europe/Madrid",
  eventLocationName: "Hotel Palacete De La Ochava",
  eventAddress: "Calle Alcalá, 65, C. Miguel de Cervantes, 11, 28511 Valdilecha, Madrid",
  mapUrl: "https://maps.app.goo.gl/fYbpdiKATBsvNCby6",
  palaceWebsiteUrl: "https://www.hotelpalaceteochava.com/el-palacete-de-la-ochava/#hotel",
  checkinInfo: "Consulta disponibilidad y detalles de habitaciones en la web oficial del palacete.",
  iban: "ES__ ____ ____ ____ ____ ____",
  bizum: "+34 685 255 645",
  rsvpEmbedUrl: "https://forms.gle/LdHmKisjTYQd3Kzw9",
  rsvpViewUrl: "https://forms.gle/LdHmKisjTYQd3Kzw9",
  qnaEmbedUrl: "https://forms.gle/TtG5hD8NcPTPccYA8",
  qnaViewUrl: "https://forms.gle/TtG5hD8NcPTPccYA8",
  schedule: {
    saturday: [
      {
        time: "15:00h",
        title: "Check-in Hotel",
        description: "Recepción de los invitados y asignación de llaves de habitaciones."
      },
      {
        time: "18:30h",
        title: "Ceremonia",
        description: "Intercambio de votos en la terraza cubierta del fondo lateral derecho del patio principal del palacete."
      },
      {
        time: "19:00h",
        title: "Cóctel",
        description: "Brindis y aperitivos en el jardín de la fuente."
      },
      {
        time: "21:00h",
        title: "Cena",
        description: "El banquete y la cena se celebrará en el cenador de cristal que se encuentra en el patio principal del palacete."
      },
      {
        time: "23:30h",
        title: "Fiesta",
        description: "Música, baile y barra hasta la madrugada en la discoteca del interior del palacete."
      }
    ],
    sunday: [
      {
        time: "09:00",
        title: "Desayuno buffet",
        description: "Empieza el desayuno tipo buffet a las 9:00h hasta las 12:00h"
      },
      {
        time: "10:00 a 12:30h",
        title: "Piscina",
        description: "Piscina de 10:00 a 12:30h."
      },
      {
        time: "14:00",
        title: "Check-out",
        description: "Check-out y desalojo de habitaciones."
      }
    ]
  },
  faqs: [
    {
      question: "¿Tengo que pagar algo para hospedarme en el palacete?",
      answer: "No, hemos querido tener un detalle con todos vosotros y estáis todos invitados con una habitación incluida."
    },
    {
      question: "¿Cuál es el horario de entrada al palacete y la salida?",
      answer: "La entrada al palacete es a partir de las 15:00h del sábado 26 de junio de 2027. La salida es al día siguiente a las 14:00h del domingo 27 de junio de 2027."
    },
    {
      question: "¿Como se cuál es la habitación que tendré asignada?",
      answer: "Una vez sepamos quiénes venís, os asignaremos habitación y os haremos llegar la información. No obstante, al llegar al palacete os acompañarán a vuestra habitación y os darán la llave, así que no os preocupéis por nada. Si tenéis alguna petición especial para la habitación, podéis indicárnoslo en el RSVP."
    },
    {
      question: "¿Hay dress code?",
      answer: "Sí, elegante clásico. Recomendamos tonos neutros y calzado cómodo para exteriores."
    },
    {
      question: "¿Puedo ir con acompañante?",
      answer: "Sí. Indícalo en el RSVP para organizar mesas y catering."
    },
    {
      question: "¿Habrá opciones para alergias o intolerancias?",
      answer: "Sí. Déjanos el detalle en el formulario RSVP y lo coordinamos."
    },
    {
      question: "¿Hay aparcamiento en el palacete?",
      answer: "Sí, hay zona de aparcamiento reservada para invitados."
    },
    {
      question: "¿Como funciona el servicio de peluquería y maquillaje?",
      answer: "El servicio de peluquería y maquillaje está disponible en el palacete. Puedes reservar tu cita en el formulario RSVP. En el mismo palacete tienen peluquería y una vez sepamos quienes están interesados, os pondremos en contacto con ellos para coordinar horarios, servicios y precios."
    },
    {
      question: "¿Cómo funciona el servicio de guardería de niños?",
      answer: "El servicio de guardería de niños está disponible en el palacete de forma gratuíta para vosotros. Puedes reservar tu cita en el formulario RSVP. En el mismo palacete tienen sala de juegos, colchonetas inchables y cine con la cuidadora profesional que hemos contratado para la ocasión. El servicio de guardería estará disponible durante la cena y durante la fiesta hasta las 4:00AM."
    },
    {
      question: "¿Cómo funciona el servicio de cuidador de mascotas?",
      answer: "El palacete ha puesto a nuestra disposición una persona que podrá cuidar durante nuestra estancia en el palacete de nuestras mascotas. Si estáis interesados, por favor, indicádnoslo en el formulario RSVP para que podamos coordinarlo con el palacete y con la persona encargada del cuidado de mascotas. El servicio de cuidador de mascotas estará disponible hasta que finalice la boda el domingo 27/06/2027."
    }
  ],
  galleryImages: [
    {
      src: "assets/gallery/palace-main.jpg",
      alt: "Fachada principal del palacete",
      caption: "Patio principal, lugar de celebración del cóctel"
    },
    {
      src: "assets/gallery/palace-garden.jpg",
      alt: "Jardines del palacete al atardecer",
      caption: "Jardines del palacete al atardecer"
    },
    {
      src: "assets/gallery/palace-hall.jpg",
      alt: "Salón clásico iluminado",
      caption: "Salón principal del palacete"
    },
    {
      src: "assets/gallery/palace-terrace.jpg",
      alt: "Terraza de piedra con vistas",
      caption: "Terraza exterior con vistas"
    },
    {
      src: "assets/gallery/palace-courtyard.jpg",
      alt: "Patio interior con arcos",
      caption: "Zona acristalada de celebración de la cena"
    },
    {
      src: "assets/gallery/palace-night.jpg",
      alt: "Palacete iluminado de noche",
      caption: "Discoteca y zona de fiesta"
    }
  ],
  services: [
    {
      id: "beauty",
      image: "assets/gallery/peluqueria.png",
      title: "Peluquería y maquillaje",
      description: "Servicio previo a la ceremonia para invitadas e invitados.",
      price: "Desde 35 €",
      details: {
        kicker: "Preparación beauty en el palacete",
        lead: "Podrás reservar peinado y maquillaje profesional antes de la ceremonia sin salir del recinto.",
        paragraphs: [
          "Trabajaremos con una agenda por tramos para que cada invitada o invitado llegue a tiempo y con total tranquilidad.",
          "El equipo adapta el servicio al estilo que prefieras: natural, clásico o más sofisticado para la fiesta."
        ],
        highlights: [
          "Servicio en sala privada dentro del palacete.",
          "Opción de prueba previa para quien lo solicite.",
          "Kit de retoque rápido incluido para la noche."
        ],
        images: [
          {
            src: "assets/gallery/peluqueria.png",
            alt: "Zona de peluquería y maquillaje",
            caption: "Espacio de peinado y maquillaje"
          },
          {
            src: "assets/gallery/palace-hall.jpg",
            alt: "Detalle de trabajo de peluquería",
            caption: "Ejemplos de acabado (placeholder)"
          }
        ],
        links: [
          {
            type: "instagram",
            label: "Instagram",
            description: "Ver trabajos recientes de la estilista",
            url: "https://www.instagram.com/"
          },
          {
            type: "web",
            label: "Web",
            description: "Portfolio y servicios completos",
            url: "https://example.com/"
          }
        ]
      }
    },
    {
      id: "photos",
      image: "assets/gallery/cuidadora-ninos.png",
      title: "GUARDERÍA NIÑOS 0-12 AÑOS",
      description: "Servicio gratuito de guardería de los niños durante la cena y durante la fiesta hasta las 4:00AM.",
      price: "Servicio gratuito",
      details: {
        kicker: "Cuidado infantil durante la boda",
        lead: "Un equipo profesional se encargará de los peques para que mayores y niños disfruten del evento.",
        paragraphs: [
          "La guardería estará activa durante la cena y la fiesta, con control de entrada y salida para cada familia.",
          "Habrá actividades tranquilas, zona de juego y espacio de descanso para distintos tramos de edad."
        ],
        highlights: [
          "Supervisión profesional en todo momento.",
          "Juegos, cine infantil y dinámicas adaptadas por edad.",
          "Servicio gratuito para invitadas e invitados."
        ],
        images: [
          {
            src: "assets/gallery/cuidadora-ninos.png",
            alt: "Sala principal de guardería infantil",
            caption: "Sala principal de actividades"
          },
          {
            src: "assets/gallery/palace-courtyard.jpg",
            alt: "Zona de juegos infantiles",
            caption: "Zona de juegos y descanso (placeholder)"
          }
        ]
      }
    },
    {
      id: "brunch",
      image: "assets/gallery/perros.png",
      title: "CUIDADOR DE MASCOTAS",
      description: "Servicio de cuidador de mascotas durante el fin de semana.",
      price: "Consultar precio",
      details: {
        kicker: "Atención para tus mascotas",
        lead: "Si vienes con mascota, tendremos una persona de apoyo para cubrir paseos, agua y cuidados básicos.",
        paragraphs: [
          "Podremos coordinar horarios de paseo y cuidados con antelación para que la mascota también esté cómoda durante la celebración.",
          "Indícanos en el RSVP cualquier necesidad especial: medicación, alimentación o pautas de comportamiento."
        ],
        highlights: [
          "Atención personalizada según cada mascota.",
          "Coordinación previa con cada familia.",
          "Disponible hasta el cierre del evento."
        ]
      }
    }
  ]
};

const appState = {
  audioEnabled: false,
  gateIsOpening: false,
  heroVideoGateClickAt: 0,
  lightboxIndex: 0,
  lightboxOpen: false,
  lightboxLastFocus: null,
  serviceModalOpen: false,
  serviceModalLastFocus: null,
  countdownTimer: null
};

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const countdownPulseTimers = new WeakMap();
const AMBIENT_UNLOCK_EVENT = "ambient-unlock-request";
const AMBIENT_START_EVENT = "ambient-start-request";
const HERO_VIDEO_START_EVENT = "hero-video-start-request";
const HERO_VIDEO_PLAYING_EVENT = "hero-video-playing";
const HERO_VIDEO_DELAY_AFTER_GATE_CLICK_MS = 6000;

document.addEventListener("DOMContentLoaded", () => {
  // Capa de ambiente global y progreso superior.
  setupGlobalLightLayer();
  setupScrollProgressIndicator();
  setupHandCursor();
  setupPetalsOverlay();
  hydrateStaticContent();
  setupVideoFallback("heroVideo", "inicio");
  setupHeroVideoPlayback("heroVideo");
  setupIntroStatueVideoLoop();
  setupVideoFallback("doorVideo", "page-thanks");

  const gateEffects = initGateEffects();
  createDustParticles("thanksDust", 18);

  renderSchedule();
  setupScheduleInteractions();
  setupProgramCarousel();
  renderGallery();
  setupFloatingGalleryDeck();
  setupGalleryCascadeAnimations();
  setupLightbox();
  renderServices();
  setupServicesCarousel();
  setupServiceDetailsModal();
  renderFaq();
  setupFaqSectionToggle();

  setupLetterGate(gateEffects);
  setupBurgerMenu();
  setupAmbientScrollAudio();
  setupCountdown();
  setupStopwatchSecondHand();
  setupDecorReveal();
  setupInviteMotion();
  setupInviteFlameAlignment();
  setupLoveStoryToggle();
  setupCopyButtons();
  setupForms();
  setupCalendarButton();
  setupScrollReveal();
  // Microinteracciones cinematográficas.
  setupHeroCinematicEffects();
  setupDepthTiltEffects();
  setupThanksMagic();
  attachStaticImageFallbacks();
  setupTitleCardFrameLoop();
  setupTitleCardWritingEffect();
});

function hydrateStaticContent() {
  const formattedDate = formatEventDate(weddingConfig.eventStartISO);
  const heroDateLabel = weddingConfig.heroDateLabel || formattedDate;

  setText("eventDateLabel", heroDateLabel);
  setText("eventDateLabelThanks", formattedDate);
  setText("venueName", weddingConfig.eventLocationName);
  setText("venueAddress", weddingConfig.eventAddress);
  setText("venueAddressCard", weddingConfig.eventAddress);
  setText("checkinInfo", weddingConfig.checkinInfo);
  setText("ibanValue", weddingConfig.iban);
  setText("bizumValue", weddingConfig.bizum);

  setHref("mapsLink", weddingConfig.mapUrl);
  setHref("palaceWebsiteLink", weddingConfig.palaceWebsiteUrl);
  setHref("palaceMapsLink", weddingConfig.mapUrl);
}

// Crea una capa de luz cálida global muy sutil para aportar ambiente.
function setupGlobalLightLayer() {
  if (reducedMotionQuery.matches) {
    return;
  }

  const mobileLike = window.matchMedia("(max-width: 900px)").matches
    || window.matchMedia("(pointer: coarse)").matches;
  if (mobileLike) {
    return;
  }

  if (document.getElementById("global-warm-light")) {
    return;
  }

  const layer = document.createElement("div");
  layer.id = "global-warm-light";
  layer.setAttribute("aria-hidden", "true");
  document.body.prepend(layer);
}

// Barra de progreso superior sincronizada con el scroll.
function setupScrollProgressIndicator() {
  let progress = document.getElementById("scroll-progress");
  if (!progress) {
    progress = document.createElement("div");
    progress.id = "scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.append(progress);
  }

  let rafId = 0;
  const update = () => {
    rafId = 0;
    const maxScrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progressValue = clamp(window.scrollY / maxScrollable, 0, 1);
    progress.style.transform = `scaleX(${progressValue.toFixed(4)})`;
  };

  const scheduleUpdate = () => {
    if (!rafId) {
      rafId = window.requestAnimationFrame(update);
    }
  };

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate, { passive: true });
  window.addEventListener("load", scheduleUpdate, { once: true });
  scheduleUpdate();
}

function setupHandCursor() {
  const handCursor = document.getElementById("handCursor");
  if (!(handCursor instanceof HTMLElement)) {
    document.body.classList.remove("is-hand-cursor-active");
    return;
  }

  const desktopCursorQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
  if (!desktopCursorQuery.matches) {
    document.body.classList.remove("is-hand-cursor-active");
    return;
  }

  document.body.classList.add("is-hand-cursor-active");

  const offsetX = -6;
  const offsetY = -5;
  let visible = false;

  const setPosition = (x, y) => {
    handCursor.style.transform = `translate3d(${(x + offsetX).toFixed(2)}px, ${(y + offsetY).toFixed(2)}px, 0)`;
  };

  const showCursor = () => {
    if (visible) {
      return;
    }

    visible = true;
    handCursor.classList.add("is-visible");
  };

  const hideCursor = () => {
    visible = false;
    handCursor.classList.remove("is-visible");
  };

  const handleMouseMove = (event) => {
    setPosition(event.clientX, event.clientY);
    showCursor();
  };

  const handleMouseDown = () => {
    handCursor.style.opacity = "0.9";
  };

  const handleMouseUp = () => {
    handCursor.style.opacity = visible ? "0.98" : "0";
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      hideCursor();
    }
  };

  document.addEventListener("mousemove", handleMouseMove, { passive: true });
  document.addEventListener("mousedown", handleMouseDown, { passive: true });
  document.addEventListener("mouseup", handleMouseUp, { passive: true });
  document.addEventListener("mouseleave", hideCursor, { passive: true });
  document.addEventListener("visibilitychange", handleVisibilityChange, { passive: true });
  window.addEventListener("blur", hideCursor, { passive: true });

  window.addEventListener("pagehide", () => {
    document.body.classList.remove("is-hand-cursor-active");
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mousedown", handleMouseDown);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("mouseleave", hideCursor);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    window.removeEventListener("blur", hideCursor);
  }, { once: true });
}

// Entrada en cascada para miniaturas de galería.
function setupGalleryCascadeAnimations() {
  const items = [...document.querySelectorAll(".gallery-item")];
  if (!items.length) {
    return;
  }

  items.forEach((item, index) => {
    item.classList.add("is-cascade-ready");
    item.style.setProperty("--gallery-stagger", String(index));
  });

  const floatingGallery = document.querySelector(".gallery-grid--floating");
  if (floatingGallery) {
    items.forEach((item) => item.classList.add("is-in-view"));
    return;
  }

  if (reducedMotionQuery.matches || typeof window.IntersectionObserver !== "function") {
    items.forEach((item) => item.classList.add("is-in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  items.forEach((item) => observer.observe(item));
}

// Efectos cinematográficos del hero: parallax de capas y luz radial al cursor.
function setupHeroCinematicEffects() {
  const hero = document.getElementById("inicio");
  const media = hero ? hero.querySelector(".hero-video") : null;
  const overlay = hero ? hero.querySelector(".hero-overlay") : null;

  if (!hero || !(media instanceof HTMLElement) || !(overlay instanceof HTMLElement)) {
    return;
  }

  if (reducedMotionQuery.matches) {
    return;
  }

  const mobileLike = window.matchMedia("(max-width: 900px)").matches
    || window.matchMedia("(pointer: coarse)").matches;
  if (mobileLike) {
    return;
  }

  const pointerFine = window.matchMedia("(pointer: fine)").matches
    && window.matchMedia("(hover: hover)").matches;

  let cursorLight = null;
  let targetX = 0.5;
  let targetY = 0.38;
  let currentX = 0.5;
  let currentY = 0.38;
  let cursorVisible = false;
  let rafId = 0;

  if (pointerFine) {
    cursorLight = document.createElement("div");
    cursorLight.className = "hero-cursor-light";
    cursorLight.setAttribute("aria-hidden", "true");
    hero.appendChild(cursorLight);

    hero.addEventListener("pointermove", (event) => {
      const bounds = hero.getBoundingClientRect();
      if (bounds.width <= 0 || bounds.height <= 0) {
        return;
      }

      targetX = clamp((event.clientX - bounds.left) / bounds.width, 0, 1);
      targetY = clamp((event.clientY - bounds.top) / bounds.height, 0, 1);
      cursorVisible = true;
    }, { passive: true });

    hero.addEventListener("pointerleave", () => {
      cursorVisible = false;
    });
  }

  const tick = () => {
    const rect = hero.getBoundingClientRect();
    const progress = clamp(-rect.top / Math.max(rect.height, 1), 0, 1.2);
    const mediaShift = clamp(progress * 30, 0, 34);
    const overlayShift = clamp(progress * 16, 0, 20);

    media.style.transform = `translate3d(0, ${mediaShift.toFixed(2)}px, 0) scale(1.05)`;
    overlay.style.transform = `translate3d(0, ${overlayShift.toFixed(2)}px, 0)`;

    if (cursorLight) {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      const lightWidth = Math.min(window.innerWidth * 0.48, 440);
      const lightX = currentX * rect.width - lightWidth / 2;
      const lightY = currentY * rect.height - lightWidth / 2;

      cursorLight.style.transform = `translate3d(${lightX.toFixed(2)}px, ${lightY.toFixed(2)}px, 0)`;
      cursorLight.style.opacity = cursorVisible ? "0.54" : "0";
    }

    rafId = window.requestAnimationFrame(tick);
  };

  rafId = window.requestAnimationFrame(tick);
  window.addEventListener("pagehide", () => {
    window.cancelAnimationFrame(rafId);
  }, { once: true });
}

// Tilt 3D suave para aportar profundidad en cards/sections.
function setupDepthTiltEffects() {
  if (reducedMotionQuery.matches) {
    return;
  }

  if (window.matchMedia("(pointer: coarse)").matches || !window.matchMedia("(hover: hover)").matches) {
    return;
  }

  const targets = [...document.querySelectorAll(".section, .palace-card, .service-card, .gallery-item")];
  if (!targets.length) {
    return;
  }

  targets.forEach((target) => {
    if (!(target instanceof HTMLElement)) {
      return;
    }

    target.classList.add("tilt-depth");

    let pointerX = 0;
    let pointerY = 0;
    let rafId = 0;

    const applyTilt = () => {
      rafId = 0;
      const bounds = target.getBoundingClientRect();
      if (bounds.width <= 0 || bounds.height <= 0) {
        return;
      }

      const nx = clamp((pointerX - bounds.left) / bounds.width, 0, 1) - 0.5;
      const ny = clamp((pointerY - bounds.top) / bounds.height, 0, 1) - 0.5;
      const rotateY = clamp(nx * 6, -3, 3);
      const rotateX = clamp(-ny * 6, -3, 3);

      target.style.setProperty("--tilt-rotate-x", `${rotateX.toFixed(2)}deg`);
      target.style.setProperty("--tilt-rotate-y", `${rotateY.toFixed(2)}deg`);
      target.style.setProperty("--tilt-lift", "-1px");
    };

    const scheduleTilt = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(applyTilt);
      }
    };

    const resetTilt = () => {
      target.style.setProperty("--tilt-rotate-x", "0deg");
      target.style.setProperty("--tilt-rotate-y", "0deg");
      target.style.setProperty("--tilt-lift", "0px");
    };

    const handleMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      scheduleTilt();
    };

    target.addEventListener("pointermove", handleMove, { passive: true });
    target.addEventListener("pointerenter", handleMove, { passive: true });
    target.addEventListener("pointerleave", resetTilt);
    target.addEventListener("pointercancel", resetTilt);
  });
}

function setupTitleCardFrameLoop() {
  const image = document.getElementById("titleCardImage");
  const section = document.getElementById("titleCard");
  if (!(image instanceof HTMLImageElement)) {
    return;
  }

  const frameCount = 12;
  const frameDurationMs = 120;
  const frameBasePath = "assets/gallery/hiedras_loop_frames";
  const frameUrls = Array.from({ length: frameCount }, (_, index) => {
    const paddedIndex = String(index).padStart(2, "0");
    return `${frameBasePath}/frame_${paddedIndex}.png`;
  });

  if (!frameUrls.length) {
    return;
  }

  const initialFrame = frameUrls[0];
  if (image.getAttribute("src") !== initialFrame) {
    image.src = initialFrame;
  }

  if (reducedMotionQuery.matches || frameUrls.length < 2) {
    return;
  }

  const preloadedFrames = frameUrls.map((url) => {
    const frame = new Image();
    frame.decoding = "async";
    frame.src = url;
    return frame;
  });

  let frameIndex = 0;
  let rafId = 0;
  let lastTimestamp = 0;
  let isRunning = false;
  let isInViewport = true;
  let visibilityObserver = null;

  const renderFrame = (timestamp) => {
    if (!isRunning) {
      rafId = 0;
      return;
    }

    if (!lastTimestamp) {
      lastTimestamp = timestamp;
    }

    const elapsed = timestamp - lastTimestamp;
    if (elapsed >= frameDurationMs) {
      const steps = Math.max(1, Math.floor(elapsed / frameDurationMs));
      frameIndex = (frameIndex + steps) % frameUrls.length;
      lastTimestamp += steps * frameDurationMs;
      const nextFrame = preloadedFrames[frameIndex];
      image.src = (nextFrame && nextFrame.complete && nextFrame.naturalWidth > 0)
        ? nextFrame.src
        : frameUrls[frameIndex];
    }

    rafId = window.requestAnimationFrame(renderFrame);
  };

  const start = () => {
    if (isRunning) {
      return;
    }

    isRunning = true;
    lastTimestamp = 0;
    if (!rafId) {
      rafId = window.requestAnimationFrame(renderFrame);
    }
  };

  const stop = () => {
    isRunning = false;
    lastTimestamp = 0;
    if (rafId) {
      window.cancelAnimationFrame(rafId);
      rafId = 0;
    }
  };

  const syncPlaybackState = () => {
    if (document.hidden || !isInViewport) {
      stop();
      return;
    }

    start();
  };

  if (typeof window.IntersectionObserver === "function" && section instanceof HTMLElement) {
    isInViewport = false;
    visibilityObserver = new IntersectionObserver((entries) => {
      isInViewport = entries.some((entry) => entry.isIntersecting);
      syncPlaybackState();
    }, {
      threshold: 0.14
    });

    visibilityObserver.observe(section);
  } else {
    isInViewport = true;
  }

  document.addEventListener("visibilitychange", syncPlaybackState);
  window.addEventListener("pagehide", () => {
    stop();
    if (visibilityObserver) {
      visibilityObserver.disconnect();
      visibilityObserver = null;
    }
  }, { once: true });

  syncPlaybackState();
}

function setupTitleCardWritingEffect() {
  const section = document.getElementById("titleCard");
  const mainContent = document.getElementById("mainContent");
  const gate = document.getElementById("letterGate");
  const image = document.getElementById("titleCardImage");
  const canvas = document.getElementById("titleCardWritingCanvas");

  if (
    !(section instanceof HTMLElement)
    || !(image instanceof HTMLImageElement)
    || !(canvas instanceof HTMLCanvasElement)
  ) {
    return;
  }

  if (reducedMotionQuery.matches) {
    section.classList.remove("is-writing-active");
    return;
  }

  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  const analysisCanvas = document.createElement("canvas");
  const analysisContext = analysisCanvas.getContext("2d", { willReadFrequently: true });
  const letterMaskCanvas = document.createElement("canvas");
  const letterMaskContext = letterMaskCanvas.getContext("2d");
  const revealCanvas = document.createElement("canvas");
  const revealContext = revealCanvas.getContext("2d");

  if (!analysisContext || !letterMaskContext || !revealContext) {
    return;
  }

  const writingDurationMs = 6200;
  const fillSettleStart = 0.86;
  const easeInOutCubic = (value) => (value < 0.5)
    ? (4 * value * value * value)
    : (1 - ((-2 * value + 2) ** 3) / 2);
  const smoothstep = (edgeStart, edgeEnd, value) => {
    if (edgeStart === edgeEnd) {
      return value < edgeStart ? 0 : 1;
    }

    const normalized = clamp((value - edgeStart) / (edgeEnd - edgeStart), 0, 1);
    return normalized * normalized * (3 - (2 * normalized));
  };
  const writingGuideStops = [
    { x: 0.16, y: 0.64, t: 0.0 },
    { x: 0.19, y: 0.36, t: 0.08 },
    { x: 0.25, y: 0.52, t: 0.16 },
    { x: 0.31, y: 0.44, t: 0.24 },
    { x: 0.41, y: 0.43, t: 0.33 },
    { x: 0.53, y: 0.43, t: 0.42 },
    { x: 0.39, y: 0.56, t: 0.48 },
    { x: 0.45, y: 0.57, t: 0.54 },
    { x: 0.47, y: 0.67, t: 0.62 },
    { x: 0.5, y: 0.5, t: 0.69 },
    { x: 0.6, y: 0.6, t: 0.79 },
    { x: 0.75, y: 0.59, t: 0.9 },
    { x: 0.89, y: 0.58, t: 1.0 }
  ];
  const isInsideEllipse = (x, y, cx, cy, rx, ry) => {
    if (rx <= 0 || ry <= 0) {
      return false;
    }

    const dx = (x - cx) / rx;
    const dy = (y - cy) / ry;
    return ((dx * dx) + (dy * dy)) <= 1;
  };
  const isInsideNamesZone = (x, y, width, height) => {
    const normalizedX = x / Math.max(1, width);
    const normalizedY = y / Math.max(1, height);
    if (normalizedY < 0.22 || normalizedY > 0.82) {
      return false;
    }

    return (
      isInsideEllipse(normalizedX, normalizedY, 0.23, 0.47, 0.17, 0.24)
      || isInsideEllipse(normalizedX, normalizedY, 0.4, 0.44, 0.2, 0.14)
      || isInsideEllipse(normalizedX, normalizedY, 0.39, 0.56, 0.1, 0.1)
      || isInsideEllipse(normalizedX, normalizedY, 0.5, 0.62, 0.16, 0.21)
      || isInsideEllipse(normalizedX, normalizedY, 0.73, 0.6, 0.27, 0.17)
    );
  };
  const projectPointToWritingPath = (x, y, width, height) => {
    const normalizedX = x / Math.max(1, width);
    const normalizedY = y / Math.max(1, height);
    let bestDistanceSquared = Number.POSITIVE_INFINITY;
    let bestProgress = clamp(normalizedX, 0, 1);

    for (let index = 0; index < writingGuideStops.length - 1; index += 1) {
      const from = writingGuideStops[index];
      const to = writingGuideStops[index + 1];
      const segmentX = to.x - from.x;
      const segmentY = to.y - from.y;
      const segmentLengthSquared = (segmentX * segmentX) + (segmentY * segmentY);
      if (segmentLengthSquared <= 0.0000001) {
        continue;
      }

      const projected = clamp(
        (((normalizedX - from.x) * segmentX) + ((normalizedY - from.y) * segmentY)) / segmentLengthSquared,
        0,
        1
      );
      const nearestX = from.x + (segmentX * projected);
      const nearestY = from.y + (segmentY * projected);
      const distanceX = normalizedX - nearestX;
      const distanceY = normalizedY - nearestY;
      const distanceSquared = (distanceX * distanceX) + (distanceY * distanceY);

      if (distanceSquared < bestDistanceSquared) {
        bestDistanceSquared = distanceSquared;
        bestProgress = from.t + ((to.t - from.t) * projected);
      }
    }

    return {
      progress: clamp(bestProgress, 0, 1),
      distancePx: Math.sqrt(bestDistanceSquared) * Math.max(width, height)
    };
  };
  const getWritingPenPoint = (progress, width, height) => {
    const clampedProgress = clamp(progress, 0, 1);

    if (clampedProgress <= writingGuideStops[0].t) {
      return {
        x: writingGuideStops[0].x * width,
        y: writingGuideStops[0].y * height
      };
    }

    for (let index = 0; index < writingGuideStops.length - 1; index += 1) {
      const from = writingGuideStops[index];
      const to = writingGuideStops[index + 1];
      if (clampedProgress > to.t) {
        continue;
      }

      const localProgress = clamp((clampedProgress - from.t) / Math.max(0.00001, to.t - from.t), 0, 1);
      const eased = localProgress * localProgress * (3 - (2 * localProgress));
      return {
        x: (from.x + ((to.x - from.x) * eased)) * width,
        y: (from.y + ((to.y - from.y) * eased)) * height
      };
    }

    const last = writingGuideStops[writingGuideStops.length - 1];
    return {
      x: last.x * width,
      y: last.y * height
    };
  };
  const estimateBackgroundColor = (pixels, width, height) => {
    const points = [
      [1, 1],
      [width - 2, 1],
      [1, height - 2],
      [width - 2, height - 2],
      [Math.round(width * 0.08), Math.round(height * 0.08)],
      [Math.round(width * 0.92), Math.round(height * 0.08)],
      [Math.round(width * 0.08), Math.round(height * 0.92)],
      [Math.round(width * 0.92), Math.round(height * 0.92)],
      [Math.round(width * 0.5), 1],
      [Math.round(width * 0.5), height - 2]
    ];

    let red = 0;
    let green = 0;
    let blue = 0;
    let count = 0;

    points.forEach(([rawX, rawY]) => {
      const x = clamp(Math.round(rawX), 0, width - 1);
      const y = clamp(Math.round(rawY), 0, height - 1);
      const index = ((y * width) + x) * 4;
      const alpha = pixels[index + 3];
      if (alpha < 4) {
        return;
      }

      red += pixels[index];
      green += pixels[index + 1];
      blue += pixels[index + 2];
      count += 1;
    });

    if (!count) {
      return { r: 244, g: 237, b: 224 };
    }

    return {
      r: red / count,
      g: green / count,
      b: blue / count
    };
  };
  const isLetterPixel = (r, g, b, a, bgColor) => {
    if (a < 12) {
      return false;
    }

    const maxChannel = Math.max(r, g, b);
    const minChannel = Math.min(r, g, b);
    const saturation = maxChannel === 0 ? 0 : (maxChannel - minChannel) / maxChannel;
    const luminance = ((0.2126 * r) + (0.7152 * g) + (0.0722 * b)) / 255;
    const colorDistance = Math.hypot(r - bgColor.r, g - bgColor.g, b - bgColor.b);

    if (a > 180 && colorDistance > 14) {
      return true;
    }

    if (colorDistance > 28) {
      return true;
    }

    if (saturation > 0.16 && luminance < 0.91) {
      return true;
    }

    if (luminance < 0.74 && colorDistance > 12) {
      return true;
    }

    return false;
  };
  const countNeighbors = (mask, x, y, width, height) => {
    let count = 0;

    for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
      for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
        if (offsetX === 0 && offsetY === 0) {
          continue;
        }

        const sampleX = x + offsetX;
        const sampleY = y + offsetY;
        if (sampleX < 0 || sampleX >= width || sampleY < 0 || sampleY >= height) {
          continue;
        }

        if (mask[(sampleY * width) + sampleX]) {
          count += 1;
        }
      }
    }

    return count;
  };

  let started = false;
  let completed = false;
  let sourceReady = false;
  let startRequested = false;
  let rafId = 0;
  let startTimestamp = 0;
  let resizeFrameId = 0;
  let currentProgress = 0;
  let observer = null;
  let resizeObserver = null;
  let gateUnlockObserver = null;
  let hasIntersected = false;
  let hasLetterMask = false;
  let canAnalyzeSourcePixels = true;
  let letterRows = [];
  let rowStepPx = 3;
  let cachedCssWidth = 0;
  let cachedCssHeight = 0;
  let cachedDpr = 0;

  const isGateBlockingAnimation = () => {
    const bodyLocked = document.body.classList.contains("is-locked");
    const mainHidden = (mainContent instanceof HTMLElement) ? mainContent.hidden : false;
    const gateVisible = (gate instanceof HTMLElement)
      ? (!gate.hidden && !gate.classList.contains("is-opened"))
      : false;
    return bodyLocked || mainHidden || gateVisible;
  };

  const buildLetterGeometry = (width, height) => {
    if (!canAnalyzeSourcePixels) {
      hasLetterMask = false;
      letterRows = [];
      letterMaskContext.clearRect(0, 0, width, height);
      return;
    }

    analysisContext.clearRect(0, 0, width, height);
    analysisContext.drawImage(image, 0, 0, width, height);
    let imageData;

    try {
      imageData = analysisContext.getImageData(0, 0, width, height);
    } catch {
      canAnalyzeSourcePixels = false;
      hasLetterMask = false;
      letterRows = [];
      letterMaskContext.clearRect(0, 0, width, height);
      return;
    }

    const source = imageData.data;
    const backgroundColor = estimateBackgroundColor(source, width, height);
    const rawMask = new Uint8Array(width * height);
    const cleanedMask = new Uint8Array(width * height);
    const maskImageData = letterMaskContext.createImageData(width, height);
    const maskPixels = maskImageData.data;
    const totalPixels = width * height;
    let transparentPixels = 0;

    for (let pixelIndex = 0; pixelIndex < totalPixels; pixelIndex += 1) {
      const sourceIndex = (pixelIndex * 4) + 3;
      if (source[sourceIndex] < 8) {
        transparentPixels += 1;
      }
    }

    const usesTransparentBackdrop = transparentPixels > (totalPixels * 0.18);

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const pixelIndex = (y * width) + x;
        const sourceIndex = pixelIndex * 4;
        const red = source[sourceIndex];
        const green = source[sourceIndex + 1];
        const blue = source[sourceIndex + 2];
        const alpha = source[sourceIndex + 3];
        const visibleByAlpha = alpha > 8;
        rawMask[pixelIndex] = usesTransparentBackdrop
          ? (visibleByAlpha ? 1 : 0)
          : (isLetterPixel(red, green, blue, alpha, backgroundColor) ? 1 : 0);
      }
    }

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const pixelIndex = (y * width) + x;
        const neighbors = countNeighbors(rawMask, x, y, width, height);
        if (rawMask[pixelIndex]) {
          cleanedMask[pixelIndex] = neighbors >= 2 ? 1 : 0;
        } else {
          cleanedMask[pixelIndex] = neighbors >= 7 ? 1 : 0;
        }
      }
    }

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const pixelIndex = (y * width) + x;
        if (!cleanedMask[pixelIndex]) {
          continue;
        }

        if (!isInsideNamesZone(x, y, width, height)) {
          cleanedMask[pixelIndex] = 0;
        }
      }
    }

    letterRows = [];
    rowStepPx = Math.max(2, Math.round(height / 270));
    const minRunLength = Math.max(1, Math.round(width * 0.0018));

    for (let pixelIndex = 0; pixelIndex < cleanedMask.length; pixelIndex += 1) {
      if (!cleanedMask[pixelIndex]) {
        continue;
      }

      const maskIndex = pixelIndex * 4;
      maskPixels[maskIndex] = 255;
      maskPixels[maskIndex + 1] = 255;
      maskPixels[maskIndex + 2] = 255;
      maskPixels[maskIndex + 3] = 255;
    }

    letterMaskContext.clearRect(0, 0, width, height);
    letterMaskContext.putImageData(maskImageData, 0, 0);

    for (let y = 0; y < height; y += rowStepPx) {
      const segments = [];
      let x = 0;

      while (x < width) {
        while (x < width && !cleanedMask[(y * width) + x]) {
          x += 1;
        }

        if (x >= width) {
          break;
        }

        const start = x;

        while (x < width && cleanedMask[(y * width) + x]) {
          x += 1;
        }

        const end = x - 1;
        const runLength = end - start + 1;
        if (runLength >= minRunLength) {
          const segmentCenter = (start + end) * 0.5;
          const projection = projectPointToWritingPath(segmentCenter, y + 0.5, width, height);
          segments.push({
            start,
            end,
            center: segmentCenter,
            width: runLength,
            revealT: projection.progress,
            pathDistance: projection.distancePx
          });
        }
      }

      if (segments.length) {
        letterRows.push({
          y: y + 0.5,
          segments
        });
      }
    }

    hasLetterMask = letterRows.length > 0;
  };

  const syncCanvasSize = () => {
    const fallbackRect = image.getBoundingClientRect();
    const cssWidth = Math.max(1, Math.round(image.clientWidth || fallbackRect.width || image.naturalWidth || 1));
    const cssHeight = Math.max(1, Math.round(image.clientHeight || fallbackRect.height || image.naturalHeight || 1));
    const dpr = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
    const pixelWidth = Math.max(1, Math.round(cssWidth * dpr));
    const pixelHeight = Math.max(1, Math.round(cssHeight * dpr));

    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;

    if (
      canvas.width !== pixelWidth
      || canvas.height !== pixelHeight
    ) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }

    if (
      cssWidth !== cachedCssWidth
      || cssHeight !== cachedCssHeight
      || dpr !== cachedDpr
      || analysisCanvas.width !== cssWidth
      || analysisCanvas.height !== cssHeight
    ) {
      cachedCssWidth = cssWidth;
      cachedCssHeight = cssHeight;
      cachedDpr = dpr;

      analysisCanvas.width = cssWidth;
      analysisCanvas.height = cssHeight;
      letterMaskCanvas.width = cssWidth;
      letterMaskCanvas.height = cssHeight;
      revealCanvas.width = cssWidth;
      revealCanvas.height = cssHeight;

      if (sourceReady) {
        buildLetterGeometry(cssWidth, cssHeight);
      }
    }

    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { width: cssWidth, height: cssHeight };
  };

  const renderLetterRevealMask = (progress, width, height) => {
    revealContext.clearRect(0, 0, width, height);
    if (!hasLetterMask) {
      return;
    }

    const clampedProgress = clamp(progress, 0, 1);
    const penPoint = getWritingPenPoint(clampedProgress, width, height);
    const guideDistanceLimit = clamp(width * 0.14, 52, 120);

    revealContext.save();
    revealContext.strokeStyle = "#fff";
    revealContext.fillStyle = "#fff";
    revealContext.lineCap = "round";
    revealContext.lineJoin = "round";

    letterRows.forEach((row) => {
      row.segments.forEach((segment) => {
        const distanceWeight = 1 - clamp(segment.pathDistance / guideDistanceLimit, 0, 1);
        if (distanceWeight <= 0) {
          return;
        }

        const timelineReveal = smoothstep(segment.revealT - 0.085, segment.revealT + 0.034, clampedProgress);
        const closePulse = 1 - clamp(Math.abs(clampedProgress - segment.revealT) / 0.12, 0, 1);
        const revealStrength = clamp(
          (timelineReveal * (0.58 + (0.42 * distanceWeight))) + (closePulse * 0.38 * distanceWeight),
          0,
          1
        );

        if (revealStrength <= 0.001) {
          return;
        }

        const lineWidth = Math.max(1.2, segment.width * (0.42 + (0.52 * revealStrength)));
        revealContext.globalAlpha = (0.1 + (0.82 * revealStrength)) * (0.45 + (0.55 * distanceWeight));
        revealContext.lineWidth = lineWidth;
        revealContext.beginPath();
        revealContext.moveTo(segment.start, row.y);
        revealContext.lineTo(segment.end, row.y);
        revealContext.stroke();

        const tipDistance = Math.hypot(penPoint.x - segment.center, penPoint.y - row.y);
        const tipProximity = 1 - clamp(tipDistance / (segment.width * 1.35 + 42), 0, 1);
        if (tipProximity <= 0) {
          return;
        }

        const tipRadius = Math.max(2.2, segment.width * (0.3 + (0.56 * tipProximity)));
        const tipX = segment.start + (segment.width * clamp((penPoint.x - segment.start) / Math.max(1, segment.width), 0, 1));
        revealContext.globalAlpha = (0.08 + (0.3 * tipProximity)) * (0.6 + (0.4 * distanceWeight));
        revealContext.beginPath();
        revealContext.arc(tipX, row.y, tipRadius, 0, Math.PI * 2);
        revealContext.fill();
      });
    });

    revealContext.restore();
    revealContext.save();
    revealContext.globalCompositeOperation = "destination-in";
    revealContext.drawImage(letterMaskCanvas, 0, 0, width, height);
    revealContext.restore();
  };

  const renderFrame = (progress) => {
    const { width, height } = syncCanvasSize();
    context.clearRect(0, 0, width, height);

    if (!sourceReady || width <= 0 || height <= 0) {
      return;
    }

    renderLetterRevealMask(progress, width, height);

    // Base muy tenue para evitar cortes bruscos durante la escritura.
    context.save();
    context.globalAlpha = 0.03 + (progress * 0.07);
    context.drawImage(image, 0, 0, width, height);
    context.restore();

    if (hasLetterMask) {
      // Revelado principal usando la máscara real de las letras.
      context.save();
      context.drawImage(image, 0, 0, width, height);
      context.globalCompositeOperation = "destination-in";
      context.drawImage(revealCanvas, 0, 0, width, height);
      context.restore();

      if (progress < 1) {
        const clampedProgress = clamp(progress, 0, 1);
        const penPoint = getWritingPenPoint(clampedProgress, width, height);
        const glowRadius = clamp(width * 0.13, 82, 170);
        const glowGradient = context.createRadialGradient(
          penPoint.x,
          penPoint.y,
          glowRadius * 0.04,
          penPoint.x,
          penPoint.y,
          glowRadius
        );
        glowGradient.addColorStop(0, "rgba(255, 252, 236, 0.98)");
        glowGradient.addColorStop(0.16, "rgba(255, 243, 203, 0.9)");
        glowGradient.addColorStop(0.46, "rgba(255, 223, 151, 0.44)");
        glowGradient.addColorStop(1, "rgba(255, 223, 151, 0)");

        context.save();
        context.globalAlpha = 0.78 * (1 - smoothstep(0.9, 1, progress));
        context.fillStyle = glowGradient;
        context.fillRect(
          penPoint.x - glowRadius,
          penPoint.y - glowRadius,
          glowRadius * 2,
          glowRadius * 2
        );
        context.globalCompositeOperation = "source-in";
        context.drawImage(image, 0, 0, width, height);
        context.globalCompositeOperation = "destination-in";
        context.drawImage(letterMaskCanvas, 0, 0, width, height);
        context.restore();

        const sparkAlpha = 0.62 * (1 - smoothstep(0.88, 1, progress));
        if (sparkAlpha > 0.01) {
          context.save();
          context.globalCompositeOperation = "screen";
          context.fillStyle = "rgba(255, 245, 206, 1)";
          for (let index = 0; index < 5; index += 1) {
            const phase = (clampedProgress * 9.8) + (index * 0.93);
            const orbit = 11 + (7 * Math.sin((clampedProgress * Math.PI * 4.2) + index));
            const sparkX = penPoint.x + (Math.cos(phase * Math.PI * 2) * orbit);
            const sparkY = penPoint.y + (Math.sin((phase * 1.21) * Math.PI * 2) * (orbit * 0.72));
            const sparkRadius = 1.2 + (1.6 * (0.5 + (0.5 * Math.sin((phase * Math.PI * 2) + 0.4))));
            context.globalAlpha = sparkAlpha * (0.44 + (0.54 * ((index + 1) / 5)));
            context.beginPath();
            context.arc(sparkX, sparkY, sparkRadius, 0, Math.PI * 2);
            context.fill();
          }
          context.restore();
        }
      }
    } else {
      // Fallback simple en caso de no detectar bien el texto.
      const revealX = clamp(width * progress, 0, width);
      context.save();
      context.beginPath();
      context.rect(0, 0, revealX, height);
      context.clip();
      context.drawImage(image, 0, 0, width, height);
      context.restore();
    }

    // Termina de asentar la textura completa al final para evitar huecos.
    const settleReveal = smoothstep(fillSettleStart, 1, progress);
    if (settleReveal > 0) {
      context.save();
      context.globalAlpha = settleReveal * 0.96;
      context.drawImage(image, 0, 0, width, height);
      context.restore();
    }

    const flicker = progress < 1 ? (0.02 * Math.sin(progress * Math.PI * 11.3)) : 0;
    if (flicker > 0) {
      context.save();
      context.globalAlpha = flicker;
      context.drawImage(image, 0, 0, width, height);
      context.restore();
    }
  };

  const scheduleResizeRender = () => {
    if (resizeFrameId) {
      return;
    }

    resizeFrameId = window.requestAnimationFrame(() => {
      resizeFrameId = 0;
      if (completed) {
        return;
      }

      renderFrame(currentProgress);
    });
  };

  const completeAnimation = () => {
    completed = true;
    section.classList.remove("is-writing-active");
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    analysisContext.setTransform(1, 0, 0, 1, 0, 0);
    analysisContext.clearRect(0, 0, analysisCanvas.width, analysisCanvas.height);
    letterMaskContext.setTransform(1, 0, 0, 1, 0, 0);
    letterMaskContext.clearRect(0, 0, letterMaskCanvas.width, letterMaskCanvas.height);
    revealContext.setTransform(1, 0, 0, 1, 0, 0);
    revealContext.clearRect(0, 0, revealCanvas.width, revealCanvas.height);
  };

  const animate = (timestamp) => {
    if (!startTimestamp) {
      startTimestamp = timestamp;
    }

    const linearProgress = clamp((timestamp - startTimestamp) / writingDurationMs, 0, 1);
    currentProgress = easeInOutCubic(linearProgress);
    renderFrame(currentProgress);

    if (linearProgress < 1) {
      rafId = window.requestAnimationFrame(animate);
      return;
    }

    rafId = 0;
    completeAnimation();
  };

  const startAnimation = () => {
    if (started || completed) {
      return true;
    }

    if (!sourceReady) {
      startRequested = true;
      return false;
    }

    if (isGateBlockingAnimation()) {
      startRequested = true;
      return false;
    }

    started = true;
    startRequested = false;
    startTimestamp = 0;
    currentProgress = 0;
    section.classList.add("is-writing-active");
    renderFrame(0);
    rafId = window.requestAnimationFrame(animate);
    return true;
  };

  const onImageReady = () => {
    sourceReady = image.naturalWidth > 0;
    if (!sourceReady) {
      return;
    }

    const fallbackRect = image.getBoundingClientRect();
    const initialWidth = Math.max(1, Math.round(image.clientWidth || fallbackRect.width || image.naturalWidth || 1));
    const initialHeight = Math.max(1, Math.round(image.clientHeight || fallbackRect.height || image.naturalHeight || 1));
    analysisCanvas.width = initialWidth;
    analysisCanvas.height = initialHeight;
    letterMaskCanvas.width = initialWidth;
    letterMaskCanvas.height = initialHeight;
    revealCanvas.width = initialWidth;
    revealCanvas.height = initialHeight;
    buildLetterGeometry(initialWidth, initialHeight);

    if (startRequested && (hasIntersected || !observer)) {
      startAnimation();
    }
  };

  if (image.complete && image.naturalWidth > 0) {
    onImageReady();
  } else {
    image.addEventListener("load", onImageReady, { once: true });
  }

  image.addEventListener("error", () => {
    section.classList.remove("is-writing-active");
    completed = true;
  }, { once: true });

  if (typeof window.IntersectionObserver === "function") {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          hasIntersected = true;
          const startedNow = startAnimation();
          if (startedNow && observer) {
            observer.disconnect();
            observer = null;
          }
        }
      });
    }, {
      threshold: 0.38
    });

    observer.observe(section);
  } else {
    hasIntersected = true;
    startAnimation();
  }

  gateUnlockObserver = new MutationObserver(() => {
    if (!startRequested || started || completed) {
      return;
    }

    if (observer && !hasIntersected) {
      return;
    }

    const startedNow = startAnimation();
    if (startedNow && observer) {
      observer.disconnect();
      observer = null;
    }
  });

  gateUnlockObserver.observe(document.body, {
    attributes: true,
    attributeFilter: ["class"]
  });

  if (mainContent instanceof HTMLElement) {
    gateUnlockObserver.observe(mainContent, {
      attributes: true,
      attributeFilter: ["hidden", "class"]
    });
  }

  if (gate instanceof HTMLElement) {
    gateUnlockObserver.observe(gate, {
      attributes: true,
      attributeFilter: ["class", "hidden", "style"]
    });
  }

  if (typeof window.ResizeObserver === "function") {
    resizeObserver = new ResizeObserver(() => {
      scheduleResizeRender();
    });
    resizeObserver.observe(image);
  } else {
    window.addEventListener("resize", scheduleResizeRender, { passive: true });
  }

  window.addEventListener("pagehide", () => {
    if (rafId) {
      window.cancelAnimationFrame(rafId);
    }

    if (resizeFrameId) {
      window.cancelAnimationFrame(resizeFrameId);
    }

    if (observer) {
      observer.disconnect();
      observer = null;
    }

    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    } else {
      window.removeEventListener("resize", scheduleResizeRender);
    }

    if (gateUnlockObserver) {
      gateUnlockObserver.disconnect();
      gateUnlockObserver = null;
    }

    letterRows = [];
    hasLetterMask = false;
  }, { once: true });
}

function setupPetalsOverlay() {
  if (!ENABLE_PETALS || reducedMotionQuery.matches) {
    return;
  }

  const overlay = getOrCreatePetalsOverlay();
  if (!overlay) {
    return;
  }

  let spawnTimeoutId = 0;

  const clearSpawnTimer = () => {
    if (spawnTimeoutId) {
      window.clearTimeout(spawnTimeoutId);
      spawnTimeoutId = 0;
    }
  };

  const scheduleNextPetal = () => {
    clearSpawnTimer();

    const delay = getPetalSpawnDelay();
    spawnTimeoutId = window.setTimeout(() => {
      spawnTimeoutId = 0;
      createPetal(overlay);
      scheduleNextPetal();
    }, delay);
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      clearSpawnTimer();
      return;
    }

    if (!spawnTimeoutId) {
      scheduleNextPetal();
    }
  };

  document.addEventListener("visibilitychange", handleVisibilityChange, { passive: true });
  window.addEventListener("pagehide", clearSpawnTimer, { once: true });
  scheduleNextPetal();
}

function getOrCreatePetalsOverlay() {
  let overlay = document.getElementById("petals-overlay");
  if (overlay) {
    return overlay;
  }

  overlay = document.createElement("div");
  overlay.id = "petals-overlay";
  overlay.setAttribute("aria-hidden", "true");
  document.body.prepend(overlay);
  return overlay;
}

function getPetalSpawnDelay() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches
    || window.matchMedia("(pointer: coarse)").matches;

  const minDelay = isMobile ? 700 : 350;
  const maxDelay = isMobile ? 1200 : 700;
  return Math.round(randomBetween(minDelay, maxDelay));
}

function createPetal(overlay) {
  if (!(overlay instanceof HTMLElement)) {
    return;
  }

  const petal = document.createElement("div");
  petal.className = "petal";
  petal.style.backgroundImage = `url("${PETAL_IMAGE_PATH}")`;

  const size = randomBetween(38, 120);
  const aspectRatio = randomBetween(0.84, 1.2);
  const duration = randomBetween(8, 17);
  const drift = randomBetween(34, 185) * (Math.random() < 0.5 ? -1 : 1);
  const rotationStart = randomBetween(0, 360);
  const rotationDelta = randomBetween(-170, 170);
  const opacity = randomBetween(0.48, 0.95);
  const blur = randomBetween(0, 0.35);
  const startX = randomBetween(-40, window.innerWidth + 40);

  petal.style.left = `${startX}px`;
  petal.style.width = `${size.toFixed(2)}px`;
  petal.style.height = `${(size * aspectRatio).toFixed(2)}px`;
  petal.style.setProperty("--dur", `${duration.toFixed(2)}s`);
  petal.style.setProperty("--drift", `${drift.toFixed(2)}px`);
  petal.style.setProperty("--drift-1", `${(drift * 0.28).toFixed(2)}px`);
  petal.style.setProperty("--drift-2", `${(drift * 0.52).toFixed(2)}px`);
  petal.style.setProperty("--drift-3", `${(drift * 0.8).toFixed(2)}px`);
  petal.style.setProperty("--rot-start", `${rotationStart.toFixed(2)}deg`);
  petal.style.setProperty("--rot-mid-1", `${(rotationStart + rotationDelta * 0.35).toFixed(2)}deg`);
  petal.style.setProperty("--rot-mid-2", `${(rotationStart + rotationDelta * 0.62).toFixed(2)}deg`);
  petal.style.setProperty("--rot-mid-3", `${(rotationStart + rotationDelta * 0.82).toFixed(2)}deg`);
  petal.style.setProperty("--rot-end", `${(rotationStart + rotationDelta).toFixed(2)}deg`);
  petal.style.setProperty("--petal-opacity", opacity.toFixed(3));
  petal.style.setProperty("--petal-opacity-soft", (opacity * 0.72).toFixed(3));
  petal.style.setProperty("--petal-blur", `${blur.toFixed(2)}px`);

  overlay.appendChild(petal);

  if (overlay.childElementCount > 70) {
    overlay.firstElementChild?.remove();
  }

  const removePetal = () => {
    petal.remove();
  };

  petal.addEventListener("animationend", removePetal, { once: true });
  window.setTimeout(removePetal, duration * 1000 + 420);
}

function initGateEffects() {
  const gate = document.getElementById("letterGate");
  const gatePanel = gate ? gate.querySelector(".gate-panel") : null;
  const envelopeStage = gate ? gate.querySelector(".envelope-stage") : null;
  const particleLayer = document.getElementById("gateParticleLayer");
  const canvas = document.getElementById("gateParticlesCanvas");

  if (!gate || !gatePanel || !envelopeStage || !particleLayer || !canvas) {
    return null;
  }

  const reducedMotion = reducedMotionQuery.matches;
  const isMobile = window.matchMedia("(max-width: 860px)").matches
    || window.matchMedia("(pointer: coarse)").matches;

  const effectConfig = {
    // Ajuste rápido: número máximo de partículas.
    desktopParticleCount: 56,
    mobileParticleCount: 24,
    // Ajuste rápido: intensidad de parallax.
    parallaxMaxShiftPx: 8,
    parallaxMaxTiltDeg: 1.45,
    panelShiftPx: 3.1,
    backgroundShiftPx: 4.8,
    // Ajuste rápido: color y opacidad de partículas.
    particleColors: ["#d2ab65", "#e3c483"],
    particleMinAlpha: 0.05,
    particleMaxAlpha: 0.18,
    particleMinSize: 0.6,
    particleMaxSize: 2.2,
    // En móvil puedes poner true para un parallax idle muy suave.
    mobileIdleParallax: false
  };

  const context = canvas.getContext("2d");
  const particlesEnabled = !reducedMotion && Boolean(context);
  const parallaxEnabled = !reducedMotion && (!isMobile || effectConfig.mobileIdleParallax);
  const pointerDrivenParallax = parallaxEnabled && !isMobile;
  const idleParallax = parallaxEnabled && isMobile && effectConfig.mobileIdleParallax;

  let running = true;
  let rafId = 0;
  let lastTimestamp = 0;
  let viewportWidth = 0;
  let viewportHeight = 0;
  let devicePixelRatio = 1;
  let particles = [];

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  const resetParallax = () => {
    gatePanel.style.transform = "";
    envelopeStage.style.transform = "";
    particleLayer.style.transform = "";
  };

  const setCanvasSize = () => {
    if (!context) {
      return;
    }

    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    devicePixelRatio = Math.min(2, window.devicePixelRatio || 1);

    canvas.width = Math.round(viewportWidth * devicePixelRatio);
    canvas.height = Math.round(viewportHeight * devicePixelRatio);
    canvas.style.width = `${viewportWidth}px`;
    canvas.style.height = `${viewportHeight}px`;
    context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  };

  const spawnParticle = (fromBottom) => ({
    x: Math.random() * viewportWidth,
    y: fromBottom ? viewportHeight + Math.random() * 30 : Math.random() * viewportHeight,
    vx: randomBetween(-2.8, 2.8),
    vy: randomBetween(-10.5, -3.8),
    size: randomBetween(effectConfig.particleMinSize, effectConfig.particleMaxSize),
    alpha: randomBetween(effectConfig.particleMinAlpha, effectConfig.particleMaxAlpha),
    color: effectConfig.particleColors[Math.floor(Math.random() * effectConfig.particleColors.length)],
    wobbleSpeed: randomBetween(0.35, 0.95),
    wobbleStrength: randomBetween(1.3, 4.4),
    wobbleOffset: randomBetween(0, Math.PI * 2)
  });

  const rebuildParticles = () => {
    if (!particlesEnabled) {
      return;
    }

    const count = isMobile ? effectConfig.mobileParticleCount : effectConfig.desktopParticleCount;
    particles = Array.from({ length: count }, () => spawnParticle(false));
  };

  const updateParticles = (dt, timeSeconds) => {
    if (!context) {
      return;
    }

    context.clearRect(0, 0, viewportWidth, viewportHeight);

    particles.forEach((particle) => {
      particle.x += particle.vx * dt + Math.sin(timeSeconds * particle.wobbleSpeed + particle.wobbleOffset) * particle.wobbleStrength * dt;
      particle.y += particle.vy * dt;

      if (particle.y < -18 || particle.x < -18 || particle.x > viewportWidth + 18) {
        const recycled = spawnParticle(true);
        Object.assign(particle, recycled);
      }

      context.globalAlpha = particle.alpha;
      context.fillStyle = particle.color;
      context.shadowBlur = particle.size * 3.4;
      context.shadowColor = particle.color;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fill();
    });

    context.globalAlpha = 1;
    context.shadowBlur = 0;
  };

  const applyParallax = (timeSeconds, dt) => {
    if (!parallaxEnabled) {
      return;
    }

    if (idleParallax) {
      targetX = Math.sin(timeSeconds * 0.22) * 0.18;
      targetY = Math.cos(timeSeconds * 0.2) * 0.12;
    }

    const smoothing = Math.min(0.18, dt * 6.2);
    currentX += (targetX - currentX) * smoothing;
    currentY += (targetY - currentY) * smoothing;

    const envelopeX = currentX * effectConfig.parallaxMaxShiftPx;
    const envelopeY = currentY * effectConfig.parallaxMaxShiftPx;
    const rotateY = currentX * effectConfig.parallaxMaxTiltDeg;
    const rotateX = -currentY * effectConfig.parallaxMaxTiltDeg;

    const panelX = -currentX * effectConfig.panelShiftPx;
    const panelY = -currentY * effectConfig.panelShiftPx;

    const backgroundX = -currentX * effectConfig.backgroundShiftPx;
    const backgroundY = -currentY * effectConfig.backgroundShiftPx;

    envelopeStage.style.transform = `translate3d(${envelopeX.toFixed(2)}px, ${envelopeY.toFixed(2)}px, 0) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    gatePanel.style.transform = `translate3d(${panelX.toFixed(2)}px, ${panelY.toFixed(2)}px, 0)`;
    particleLayer.style.transform = `translate3d(${backgroundX.toFixed(2)}px, ${backgroundY.toFixed(2)}px, 0)`;
  };

  const handlePointerMove = (event) => {
    if (!pointerDrivenParallax) {
      return;
    }

    const bounds = gate.getBoundingClientRect();
    const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;

    targetX = Math.max(-0.5, Math.min(0.5, normalizedX));
    targetY = Math.max(-0.5, Math.min(0.5, normalizedY));
  };

  const handlePointerLeave = () => {
    targetX = 0;
    targetY = 0;
  };

  const tick = (timestamp) => {
    if (!running) {
      return;
    }

    if (!lastTimestamp) {
      lastTimestamp = timestamp;
    }

    const dt = Math.min(0.05, (timestamp - lastTimestamp) / 1000);
    lastTimestamp = timestamp;
    const timeSeconds = timestamp / 1000;

    if (particlesEnabled) {
      updateParticles(dt, timeSeconds);
    }

    if (parallaxEnabled) {
      applyParallax(timeSeconds, dt);
    }

    rafId = window.requestAnimationFrame(tick);
  };

  const handleResize = () => {
    if (!particlesEnabled) {
      return;
    }

    setCanvasSize();
    rebuildParticles();
  };

  if (particlesEnabled) {
    gate.classList.add("has-canvas-particles");
    setCanvasSize();
    rebuildParticles();
  }

  if (pointerDrivenParallax) {
    gate.addEventListener("pointermove", handlePointerMove);
    gate.addEventListener("pointerleave", handlePointerLeave);
  }

  const hasActiveEffects = particlesEnabled || parallaxEnabled;

  if (hasActiveEffects) {
    window.addEventListener("resize", handleResize, { passive: true });
    rafId = window.requestAnimationFrame(tick);
  }

  const destroy = () => {
    if (!running) {
      return;
    }

    running = false;
    window.cancelAnimationFrame(rafId);
    if (hasActiveEffects) {
      window.removeEventListener("resize", handleResize);
    }

    if (pointerDrivenParallax) {
      gate.removeEventListener("pointermove", handlePointerMove);
      gate.removeEventListener("pointerleave", handlePointerLeave);
    }

    resetParallax();

    if (context) {
      context.clearRect(0, 0, viewportWidth, viewportHeight);
    }

    canvas.remove();
  };

  return { destroy };
}

function setupAmbientScrollAudio() {
  const ambientAudio = document.getElementById("ambientAudio");
  if (!(ambientAudio instanceof HTMLAudioElement)) {
    return;
  }

  const gate = document.getElementById("letterGate");
  const targetVolume = 0.25;
  const fadeInMs = 650;
  const fadeOutMs = 350;
  let userInteracted = false;
  let ambientRequested = !(gate instanceof HTMLElement);
  let fadeRafId = 0;
  let playPromise = null;
  let warmupPromise = null;

  const unlockEvents = [
    { name: "click", options: { passive: true } },
    { name: "pointerdown", options: { passive: true } },
    { name: "touchstart", options: { passive: true } },
    { name: "keydown", options: undefined }
  ];

  const clearFade = () => {
    if (!fadeRafId) {
      return;
    }

    window.cancelAnimationFrame(fadeRafId);
    fadeRafId = 0;
  };

  const fadeAmbientVolume = (target, durationMs, onComplete) => {
    const clampedTarget = clamp(target, 0, 1);
    const safeDuration = Math.max(1, Number(durationMs) || 1);
    const startVolume = clamp(ambientAudio.volume || 0, 0, 1);
    const delta = clampedTarget - startVolume;

    clearFade();

    if (Math.abs(delta) < 0.001) {
      ambientAudio.volume = clampedTarget;
      if (typeof onComplete === "function") {
        onComplete();
      }
      return;
    }

    const startTime = performance.now();
    const step = (timestamp) => {
      const progress = clamp((timestamp - startTime) / safeDuration, 0, 1);
      ambientAudio.volume = clamp(startVolume + (delta * progress), 0, 1);

      if (progress < 1) {
        fadeRafId = window.requestAnimationFrame(step);
        return;
      }

      fadeRafId = 0;
      if (typeof onComplete === "function") {
        onComplete();
      }
    };

    fadeRafId = window.requestAnimationFrame(step);
  };

  const canPlayAmbient = () => userInteracted && ambientRequested && Boolean(appState.audioEnabled);

  const pauseAmbient = () => {
    if (ambientAudio.paused) {
      clearFade();
      ambientAudio.volume = 0;
      return;
    }

    fadeAmbientVolume(0, fadeOutMs, () => {
      ambientAudio.pause();
    });
  };

  const warmupAmbient = () => {
    if (warmupPromise || !ambientAudio.paused) {
      return;
    }

    ambientAudio.volume = 0;
    warmupPromise = ambientAudio.play()
      .then(() => {
        if (ambientRequested) {
          return;
        }

        ambientAudio.pause();
        ambientAudio.currentTime = 0;
      })
      .catch(() => {
        // La activación puede fallar hasta el primer gesto válido; se reintentará en playAmbient.
      })
      .finally(() => {
        warmupPromise = null;
      });
  };

  const playAmbient = () => {
    if (playPromise) {
      return;
    }

    if (!ambientAudio.paused) {
      fadeAmbientVolume(targetVolume, fadeInMs);
      return;
    }

    ambientAudio.volume = 0;
    playPromise = ambientAudio.play()
      .then(() => {
        if (!canPlayAmbient()) {
          ambientAudio.pause();
          return;
        }

        fadeAmbientVolume(targetVolume, fadeInMs);
      })
      .catch((err) => {
        console.warn("[ambientAudio] No se pudo reproducir el audio ambiental.", err);
      })
      .finally(() => {
        playPromise = null;
      });
  };

  const syncAmbientState = () => {
    if (canPlayAmbient()) {
      playAmbient();
      return;
    }

    pauseAmbient();
  };

  const removeUnlockListeners = () => {
    unlockEvents.forEach(({ name, options }) => {
      window.removeEventListener(name, unlockAudio, options);
    });
  };

  const unlockAudio = () => {
    if (userInteracted) {
      return;
    }

    userInteracted = true;
    removeUnlockListeners();
    warmupAmbient();
    syncAmbientState();
  };

  const requestAmbientStart = () => {
    ambientRequested = true;
    syncAmbientState();
  };

  unlockEvents.forEach(({ name, options }) => {
    window.addEventListener(name, unlockAudio, options);
  });
  window.addEventListener(AMBIENT_UNLOCK_EVENT, unlockAudio);
  window.addEventListener(AMBIENT_START_EVENT, requestAmbientStart);

  ambientAudio.loop = true;
  ambientAudio.preload = "auto";
  ambientAudio.volume = 0;
  ambientAudio.load();

  window.addEventListener("pagehide", () => {
    removeUnlockListeners();
    window.removeEventListener(AMBIENT_UNLOCK_EVENT, unlockAudio);
    window.removeEventListener(AMBIENT_START_EVENT, requestAmbientStart);
    clearFade();
    ambientAudio.pause();
    ambientAudio.currentTime = 0;
  }, { once: true });
}

function resolveIntroSection() {
  const existingIntro = document.querySelector("#letterGate, .letter-gate, #intro, .intro, #envelope-screen, #hero, .hero");
  if (existingIntro instanceof HTMLElement) {
    return existingIntro;
  }

  const firstScreen = document.querySelector("#letterGate, .letter-gate, body > section, body > header, body > div");
  if (!(firstScreen instanceof HTMLElement) || !firstScreen.parentElement) {
    return null;
  }

  const wrapper = document.createElement("div");
  wrapper.id = "intro";
  firstScreen.parentElement.insertBefore(wrapper, firstScreen);
  wrapper.appendChild(firstScreen);
  return wrapper;
}

function setupBurgerMenu() {
  const navWrapper = document.getElementById("burgerNav");
  const toggleButton = document.getElementById("burgerToggle");
  const menuPanel = document.getElementById("burgerMenuPanel");
  if (
    !(navWrapper instanceof HTMLElement)
    || !(toggleButton instanceof HTMLButtonElement)
    || !(menuPanel instanceof HTMLElement)
  ) {
    return;
  }

  const desktopHoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
  let isOpen = false;
  let closeTimerId = 0;

  const isDesktopHoverMode = () => desktopHoverQuery.matches;

  const setMenuOpen = (nextOpen) => {
    const normalized = Boolean(nextOpen);
    if (isOpen === normalized) {
      return;
    }

    isOpen = normalized;
    navWrapper.classList.toggle("is-open", normalized);
    toggleButton.setAttribute("aria-expanded", String(normalized));
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const clearCloseTimer = () => {
    if (!closeTimerId) {
      return;
    }

    window.clearTimeout(closeTimerId);
    closeTimerId = 0;
  };

  const scheduleCloseForHover = () => {
    clearCloseTimer();
    closeTimerId = window.setTimeout(() => {
      closeMenu();
    }, 220);
  };

  toggleButton.addEventListener("click", (event) => {
    if (isDesktopHoverMode()) {
      event.preventDefault();
      openMenu();
      return;
    }

    setMenuOpen(!isOpen);
  });

  const onHoverEnter = () => {
    if (!isDesktopHoverMode()) {
      return;
    }

    clearCloseTimer();
    openMenu();
  };

  const onHoverLeave = () => {
    if (!isDesktopHoverMode()) {
      return;
    }

    scheduleCloseForHover();
  };

  toggleButton.addEventListener("mouseenter", onHoverEnter);
  menuPanel.addEventListener("mouseenter", onHoverEnter);
  toggleButton.addEventListener("mouseleave", onHoverLeave);
  menuPanel.addEventListener("mouseleave", onHoverLeave);

  menuPanel.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    if (!target.closest("a[href]")) {
      return;
    }

    if (!isDesktopHoverMode()) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !isDesktopHoverMode()) {
      return;
    }

    closeMenu();
  });

  const onInputModeChange = () => {
    closeMenu();
  };

  if (typeof desktopHoverQuery.addEventListener === "function") {
    desktopHoverQuery.addEventListener("change", onInputModeChange);
  } else if (typeof desktopHoverQuery.addListener === "function") {
    desktopHoverQuery.addListener(onInputModeChange);
  }

  window.addEventListener("pagehide", () => {
    clearCloseTimer();
    closeMenu();

    if (typeof desktopHoverQuery.removeEventListener === "function") {
      desktopHoverQuery.removeEventListener("change", onInputModeChange);
    } else if (typeof desktopHoverQuery.removeListener === "function") {
      desktopHoverQuery.removeListener(onInputModeChange);
    }
  }, { once: true });
}

function setupLetterGate(gateEffects) {
  const gate = document.getElementById("letterGate");
  const mainContent = document.getElementById("mainContent");
  const gateEnvelope = document.getElementById("gateEnvelope");
  const gateSealHitArea = document.getElementById("gateSealHitArea");
  const gateSealHint = document.getElementById("gateSealHint");
  const audioHintTrigger = document.getElementById("audioHint");
  const paperAudioElement = document.getElementById("paperAudio");
  const gateTooltip = document.getElementById("gateSealTooltip") || document.getElementById("gateEnvelopeTooltip");

  const frameMap = {
    closed: gateEnvelope ? gateEnvelope.querySelector('[data-frame="closed"]') : null,
    opening: gateEnvelope ? gateEnvelope.querySelector('[data-frame="opening"]') : null,
    open: gateEnvelope ? gateEnvelope.querySelector('[data-frame="open"]') : null
  };

  const paperCrinkleAudio = createAudioResource(paperAudioElement);
  const sequenceTimers = [];
  let isOpening = false;
  const phase1Duration = 1000;
  const phase2Duration = 1000;
  const phase3HoldDuration = 4000;
  let hintAppearTimer = 0;

  if (!mainContent) {
    return;
  }

  if (!gate || !gateEnvelope || !(gateSealHitArea instanceof HTMLElement) || !frameMap.closed || !frameMap.opening || !frameMap.open) {
    mainContent.hidden = false;
    mainContent.classList.add("is-visible");
    document.body.classList.remove("is-locked");
    document.body.classList.remove("is-gate-active", "is-gate-cursor-active");
    requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent(HERO_VIDEO_START_EVENT));
    });
    return;
  }

  if (gateTooltip instanceof HTMLElement) {
    gateSealHitArea.setAttribute("aria-describedby", gateTooltip.id);
  }

  preloadGateFrames(Object.values(frameMap).map((frame) => frame.src));
  showGateFrame("closed", frameMap);

  const isGateVisible = () => {
    if (gate.hidden || gate.classList.contains("is-opened")) {
      return false;
    }

    const gateStyles = window.getComputedStyle(gate);
    return gateStyles.display !== "none" && gateStyles.visibility !== "hidden";
  };

  const syncGateStateClass = () => {
    const gateActive = document.body.classList.contains("is-locked") && isGateVisible();
    document.body.classList.toggle("is-gate-active", gateActive);
  };

  const gateStateObserver = new MutationObserver(() => {
    syncGateStateClass();
  });
  gateStateObserver.observe(gate, {
    attributes: true,
    attributeFilter: ["class", "style", "hidden"]
  });

  const bodyStateObserver = new MutationObserver(() => {
    syncGateStateClass();
  });
  bodyStateObserver.observe(document.body, {
    attributes: true,
    attributeFilter: ["class"]
  });

  syncGateStateClass();

  const clearSequenceTimers = () => {
    while (sequenceTimers.length) {
      window.clearTimeout(sequenceTimers.pop());
    }
  };

  const schedule = (callback, delay) => {
    const timerId = window.setTimeout(callback, delay);
    sequenceTimers.push(timerId);
  };

  const clearHintAppearTimer = () => {
    if (!hintAppearTimer) {
      return;
    }

    window.clearTimeout(hintAppearTimer);
    hintAppearTimer = 0;
  };

  const hideGateHint = () => {
    clearHintAppearTimer();

    if (gateSealHint instanceof HTMLElement) {
      gateSealHint.classList.remove("is-visible");
      gateSealHint.setAttribute("aria-hidden", "true");
    }

    if (gateTooltip instanceof HTMLElement) {
      gateTooltip.setAttribute("aria-hidden", "true");
    }
  };

  const showGateHint = () => {
    if (!(gateSealHint instanceof HTMLElement)) {
      return;
    }

    if (isOpening || gate.classList.contains("is-opened")) {
      return;
    }

    gateSealHint.classList.add("is-visible");
    gateSealHint.setAttribute("aria-hidden", "false");
    if (gateTooltip instanceof HTMLElement) {
      gateTooltip.setAttribute("aria-hidden", "false");
    }
  };

  const scheduleHintAppearance = () => {
    clearHintAppearTimer();
    hintAppearTimer = window.setTimeout(() => {
      showGateHint();
    }, 1000);
  };

  appState.audioEnabled = paperCrinkleAudio.available;
  if (paperCrinkleAudio.audio instanceof HTMLAudioElement) {
    paperCrinkleAudio.audio.load();
  }

  const paperPeakVolume = 0.46;
  const paperFadeInMs = 180;
  const paperFadeOutMs = 260;
  let paperFadeRafId = 0;
  let gateAudioTransitionDone = false;

  const clearPaperFade = () => {
    if (!paperFadeRafId) {
      return;
    }

    window.cancelAnimationFrame(paperFadeRafId);
    paperFadeRafId = 0;
  };

  const fadePaperVolume = (target, durationMs, onComplete) => {
    if (!(paperCrinkleAudio.audio instanceof HTMLAudioElement)) {
      if (typeof onComplete === "function") {
        onComplete();
      }
      return;
    }

    const audio = paperCrinkleAudio.audio;
    const clampedTarget = clamp(target, 0, 1);
    const startVolume = clamp(audio.volume || 0, 0, 1);
    const delta = clampedTarget - startVolume;
    const safeDuration = Math.max(1, Number(durationMs) || 1);

    clearPaperFade();

    if (Math.abs(delta) < 0.001) {
      audio.volume = clampedTarget;
      if (typeof onComplete === "function") {
        onComplete();
      }
      return;
    }

    const startTime = performance.now();
    const step = (timestamp) => {
      const progress = clamp((timestamp - startTime) / safeDuration, 0, 1);
      audio.volume = clamp(startVolume + (delta * progress), 0, 1);

      if (progress < 1) {
        paperFadeRafId = window.requestAnimationFrame(step);
        return;
      }

      paperFadeRafId = 0;
      if (typeof onComplete === "function") {
        onComplete();
      }
    };

    paperFadeRafId = window.requestAnimationFrame(step);
  };

  function startPaperAudio() {
    if (!appState.audioEnabled || !(paperCrinkleAudio.audio instanceof HTMLAudioElement)) {
      return Promise.resolve(false);
    }

    const paperAudio = paperCrinkleAudio.audio;
    clearPaperFade();
    paperAudio.loop = false;
    paperAudio.pause();
    paperAudio.currentTime = 0;
    paperAudio.volume = 0;

    return paperAudio.play()
      .then(() => {
        fadePaperVolume(paperPeakVolume, paperFadeInMs);
        paperCrinkleAudio.available = true;
        return true;
      })
      .catch((err) => {
        appState.audioEnabled = false;
        paperCrinkleAudio.available = false;
        console.warn("[paperAudio] No se pudo reproducir el audio del pergamino.", err);
        return false;
      });
  }

  function stopPaperAudioAndStartAmbient() {
    if (gateAudioTransitionDone) {
      return;
    }

    gateAudioTransitionDone = true;

    const startAmbient = () => {
      if (!appState.audioEnabled) {
        return;
      }

      window.dispatchEvent(new CustomEvent(AMBIENT_START_EVENT));
    };

    if (!(paperCrinkleAudio.audio instanceof HTMLAudioElement)) {
      startAmbient();
      return;
    }

    const paperAudio = paperCrinkleAudio.audio;
    const finishPaper = () => {
      clearPaperFade();
      paperAudio.pause();
      paperAudio.currentTime = 0;
      paperAudio.volume = 0;
      startAmbient();
    };

    if (paperAudio.paused || paperAudio.volume <= 0.001) {
      finishPaper();
      return;
    }

    fadePaperVolume(0, paperFadeOutMs, finishPaper);
  }

  const resetEnvelopePhases = () => {
    gateEnvelope.classList.remove("is-phase-1", "is-phase-2", "is-phase-3");
  };

  const openInvitationSequence = () => {
    if (isOpening || gate.classList.contains("is-opened")) {
      return;
    }

    hideGateHint();
    isOpening = true;
    appState.gateIsOpening = true;
    appState.heroVideoGateClickAt = performance.now();
    gateAudioTransitionDone = false;
    window.dispatchEvent(new CustomEvent(AMBIENT_UNLOCK_EVENT));
    clearSequenceTimers();

    resetEnvelopePhases();
    gateEnvelope.style.setProperty("--frame-duration", `${phase1Duration}ms`);
    gateEnvelope.classList.add("is-phase-1");

    if (gateEffects && typeof gateEffects.destroy === "function") {
      gateEffects.destroy();
    }

    gate.classList.add("is-opening");

    if (appState.audioEnabled) {
      startPaperAudio().then((isAvailable) => {
        if (!isAvailable) {
          appState.audioEnabled = false;
        }
      });
    }

    if (reducedMotionQuery.matches) {
      showGateFrame("open", frameMap);
      resetEnvelopePhases();
      window.setTimeout(() => {
        clearSequenceTimers();
        revealMainContent(gate, mainContent, {
          onGateHidden: stopPaperAudioAndStartAmbient
        });
      }, 180);
      return;
    }

    // Fase 1: 1000ms (closed -> opening).
    showGateFrame("opening", frameMap);

    // Fase 2: 1000ms (opening -> open).
    schedule(() => {
      gateEnvelope.style.setProperty("--frame-duration", `${phase2Duration}ms`);
      gateEnvelope.classList.remove("is-phase-1");
      gateEnvelope.classList.add("is-phase-2");
      showGateFrame("open", frameMap);
    }, phase1Duration);

    // Fase 3: imagen abierta visible durante 4000ms.
    schedule(() => {
      gateEnvelope.classList.remove("is-phase-2");
      gateEnvelope.classList.add("is-phase-3");
    }, phase1Duration + phase2Duration);

    // Salida del gate tras la secuencia completa.
    schedule(() => {
      clearSequenceTimers();
      revealMainContent(gate, mainContent, {
        onGateHidden: stopPaperAudioAndStartAmbient
      });
    }, phase1Duration + phase2Duration + phase3HoldDuration);
  };

  const onSealHitAreaKeydown = (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    openInvitationSequence();
  };

  const onSealHitAreaClick = (event) => {
    event.preventDefault();
    openInvitationSequence();
  };

  const onSealHitAreaPointerUp = (event) => {
    event.preventDefault();
    openInvitationSequence();
  };

  if (gateSealHitArea.dataset.gateListenersAttached !== "true") {
    gateSealHitArea.addEventListener("click", onSealHitAreaClick);
    gateSealHitArea.addEventListener("pointerup", onSealHitAreaPointerUp);
    gateSealHitArea.addEventListener("keydown", onSealHitAreaKeydown);

    if (audioHintTrigger instanceof HTMLElement) {
      audioHintTrigger.addEventListener("click", openInvitationSequence);
    }

    window.addEventListener("pagehide", () => {
      clearHintAppearTimer();
      hideGateHint();
      clearPaperFade();
      if (paperCrinkleAudio.audio instanceof HTMLAudioElement) {
        paperCrinkleAudio.audio.pause();
        paperCrinkleAudio.audio.currentTime = 0;
        paperCrinkleAudio.audio.volume = 0;
      }
      gateStateObserver.disconnect();
      bodyStateObserver.disconnect();
    }, { once: true });

    gateSealHitArea.dataset.gateListenersAttached = "true";
  }

  scheduleHintAppearance();
}

function showGateFrame(name, frameMap) {
  if (!frameMap || !name) {
    return;
  }

  Object.entries(frameMap).forEach(([key, node]) => {
    if (node) {
      node.classList.toggle("is-visible", key === name);
    }
  });
}

function preloadGateFrames(frameUrls) {
  if (!Array.isArray(frameUrls)) {
    return;
  }

  frameUrls.forEach((url) => {
    if (!url) {
      return;
    }

    const image = new Image();
    image.src = url;
  });
}

function revealMainContent(gate, mainContent, options = {}) {
  const onGateHidden = typeof options.onGateHidden === "function"
    ? options.onGateHidden
    : null;
  let gateHiddenNotified = false;
  let gateTransitionFallbackTimer = 0;

  const notifyGateHidden = () => {
    if (gateHiddenNotified) {
      return;
    }

    gateHiddenNotified = true;
    if (gateTransitionFallbackTimer) {
      window.clearTimeout(gateTransitionFallbackTimer);
      gateTransitionFallbackTimer = 0;
    }

    gate.removeEventListener("transitionend", onGateTransitionEnd);
    if (typeof onGateHidden === "function") {
      onGateHidden();
    }
  };

  const onGateTransitionEnd = (event) => {
    if (event.target !== gate || event.propertyName !== "opacity") {
      return;
    }

    notifyGateHidden();
  };

  appState.gateIsOpening = false;
  gate.addEventListener("transitionend", onGateTransitionEnd);
  gate.classList.add("is-opened");
  mainContent.hidden = false;
  document.body.classList.remove("is-locked", "is-gate-active", "is-gate-cursor-active");

  const transitionTotalMs = getElementTransitionTotalMs(gate);
  const fallbackMs = transitionTotalMs > 0 ? transitionTotalMs + 80 : 80;
  gateTransitionFallbackTimer = window.setTimeout(notifyGateHidden, fallbackMs);

  requestAnimationFrame(() => {
    mainContent.classList.add("is-visible");
    window.dispatchEvent(new CustomEvent(HERO_VIDEO_START_EVENT));
  });
}

function createAudioResource(source) {
  let audio = null;

  if (source instanceof HTMLAudioElement) {
    audio = source;
  } else if (typeof source === "string" && source) {
    audio = new Audio(source);
  }

  if (!(audio instanceof HTMLAudioElement)) {
    return {
      audio: null,
      available: false
    };
  }

  audio.preload = "auto";

  const resource = {
    audio,
    available: true
  };

  audio.addEventListener("error", (event) => {
    resource.available = false;
    console.warn("[paperAudio] Error al cargar el audio del pergamino.", event);
  });

  return resource;
}

async function playAudioResource(resource, options = {}) {
  if (!resource || !(resource.audio instanceof HTMLAudioElement)) {
    return false;
  }

  const audio = resource.audio;
  const peakVolume = Math.min(1, Math.max(0, Number(options.peakVolume ?? 0.45)));
  const fadeInMs = Math.max(100, Number(options.fadeInMs ?? 150));
  const fadeOutMs = Math.max(100, Number(options.fadeOutMs ?? 170));

  try {
    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0;
    await audio.play();
    resource.available = true;

    const defaultOutStart = 760;
    const computedOutStart = Number.isFinite(audio.duration) && audio.duration > 0
      ? Math.max(fadeInMs + 120, audio.duration * 1000 - fadeOutMs)
      : defaultOutStart;

    const startTime = performance.now();
    let frameId = 0;

    const fadeStep = (timestamp) => {
      const elapsed = timestamp - startTime;

      if (elapsed <= fadeInMs) {
        audio.volume = peakVolume * (elapsed / fadeInMs);
      } else if (elapsed < computedOutStart) {
        audio.volume = peakVolume;
      } else if (elapsed < computedOutStart + fadeOutMs) {
        const progress = (elapsed - computedOutStart) / fadeOutMs;
        audio.volume = peakVolume * (1 - progress);
      } else {
        audio.volume = 0;
        return;
      }

      frameId = window.requestAnimationFrame(fadeStep);
    };

    frameId = window.requestAnimationFrame(fadeStep);
    audio.addEventListener("ended", () => {
      window.cancelAnimationFrame(frameId);
      audio.volume = 0;
    }, { once: true });

    return true;
  } catch (error) {
    resource.available = false;
    throw error;
  }
}

function setupVideoFallback(videoId, classTarget) {
  const video = document.getElementById(videoId);
  if (!video) {
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

function setupVisibilityDrivenVideoPlayback({
  video,
  activationEventName = null,
  getActivationDelayMs = null,
  playingEventName = "",
  threshold = 0.35,
  rootMargin = "0px 0px -12% 0px"
}) {
  if (!(video instanceof HTMLVideoElement)) {
    return;
  }

  let activationTimerId = 0;
  let activationReady = activationEventName === null;
  let isInViewport = false;
  let hasBroadcastPlaying = false;

  const clearActivationTimer = () => {
    if (!activationTimerId) {
      return;
    }

    window.clearTimeout(activationTimerId);
    activationTimerId = 0;
  };

  const applyPlaybackDefaults = () => {
    video.loop = false;
    video.removeAttribute("loop");
    video.autoplay = false;
    video.removeAttribute("autoplay");
    video.defaultPlaybackRate = 1;
    video.playbackRate = 1;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
  };

  const safePause = () => {
    if (!video.paused) {
      video.pause();
    }
  };

  const setCurrentTimeSafely = (time) => {
    try {
      if (!Number.isFinite(video.currentTime) || Math.abs(video.currentTime - time) > 0.04) {
        video.currentTime = time;
      }
    } catch (_error) {
      // Algunos navegadores bloquean el seek antes de tener metadata.
    }
  };

  const getVideoEndTime = () => {
    if (!Number.isFinite(video.duration) || video.duration <= 0) {
      return video.currentTime;
    }

    return Math.max(0, video.duration - 0.05);
  };

  const isVideoFinished = () => (
    video.ended
    || (Number.isFinite(video.duration) && video.duration > 0 && video.currentTime >= getVideoEndTime())
  );

  const freezeAtStart = () => {
    applyPlaybackDefaults();
    safePause();
    setCurrentTimeSafely(0);
  };

  const safePlay = () => {
    applyPlaybackDefaults();

    if (!video.paused || isVideoFinished()) {
      return;
    }

    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(() => {
        // Reintentamos al siguiente cambio de visibilidad/interaccion.
      });
    }
  };

  const refreshPlayback = () => {
    if (!activationReady) {
      freezeAtStart();
      return;
    }

    if (!isInViewport) {
      freezeAtStart();
      return;
    }

    if (document.hidden || document.body.classList.contains("is-locked")) {
      safePause();
      return;
    }

    if (isVideoFinished()) {
      safePause();
      return;
    }

    safePlay();
  };

  const updateViewportState = (nextVisible) => {
    if (isInViewport === nextVisible) {
      if (nextVisible) {
        refreshPlayback();
      }
      return;
    }

    isInViewport = nextVisible;

    if (!isInViewport) {
      freezeAtStart();
      return;
    }

    refreshPlayback();
  };

  const updateViewportStateFromRect = () => {
    const rect = video.getBoundingClientRect();
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 0;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;

    if (rect.width <= 0 || rect.height <= 0 || viewportWidth <= 0 || viewportHeight <= 0) {
      updateViewportState(false);
      return;
    }

    const visibleWidth = Math.max(0, Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0));
    const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
    const visibleArea = visibleWidth * visibleHeight;
    const totalArea = rect.width * rect.height;
    const visibleRatio = totalArea > 0 ? visibleArea / totalArea : 0;

    updateViewportState(visibleRatio >= threshold);
  };

  const armActivation = () => {
    const activationDelayMs = typeof getActivationDelayMs === "function"
      ? Math.max(0, Number(getActivationDelayMs()) || 0)
      : 0;

    clearActivationTimer();
    activationReady = false;
    freezeAtStart();

    if (activationDelayMs <= 0) {
      activationReady = true;
      refreshPlayback();
      return;
    }

    activationTimerId = window.setTimeout(() => {
      activationTimerId = 0;
      activationReady = true;
      refreshPlayback();
    }, activationDelayMs);
  };

  video.addEventListener("loadeddata", refreshPlayback);
  video.addEventListener("loadedmetadata", refreshPlayback);
  video.addEventListener("canplay", refreshPlayback);
  video.addEventListener("ended", refreshPlayback);
  video.addEventListener("ratechange", () => {
    if (Math.abs(video.playbackRate - 1) > 0.001) {
      video.playbackRate = 1;
    }

    if (Math.abs(video.defaultPlaybackRate - 1) > 0.001) {
      video.defaultPlaybackRate = 1;
    }
  });
  video.addEventListener("playing", () => {
    if (playingEventName && !hasBroadcastPlaying) {
      hasBroadcastPlaying = true;
      window.dispatchEvent(new CustomEvent(playingEventName));
    }
  });

  if (activationEventName) {
    window.addEventListener(activationEventName, armActivation);
  }

  document.addEventListener("visibilitychange", refreshPlayback);
  window.addEventListener("pointerup", refreshPlayback, { passive: true });

  if (typeof window.IntersectionObserver === "function") {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target !== video) {
            return;
          }

          updateViewportState(entry.isIntersecting && entry.intersectionRatio >= threshold);
        });
      },
      {
        threshold: [0, threshold, 1],
        rootMargin
      }
    );

    observer.observe(video);
    window.addEventListener("pagehide", () => {
      observer.disconnect();
    }, { once: true });
  } else {
    updateViewportStateFromRect();
    window.addEventListener("scroll", updateViewportStateFromRect, { passive: true });
    window.addEventListener("resize", updateViewportStateFromRect, { passive: true });
  }

  window.addEventListener("pagehide", clearActivationTimer, { once: true });

  applyPlaybackDefaults();
  freezeAtStart();

  if (!activationEventName) {
    refreshPlayback();
  }
}

function setupHeroVideoPlayback(videoId) {
  const video = document.getElementById(videoId);
  if (!(video instanceof HTMLVideoElement)) {
    return;
  }

  setupVisibilityDrivenVideoPlayback({
    video,
    activationEventName: HERO_VIDEO_START_EVENT,
    getActivationDelayMs: () => {
      const clickTimestamp = appState.heroVideoGateClickAt;
      const elapsedSinceClick = clickTimestamp > 0
        ? (performance.now() - clickTimestamp)
        : HERO_VIDEO_DELAY_AFTER_GATE_CLICK_MS;

      return Math.max(0, HERO_VIDEO_DELAY_AFTER_GATE_CLICK_MS - elapsedSinceClick);
    },
    playingEventName: HERO_VIDEO_PLAYING_EVENT,
    threshold: 0.26,
    rootMargin: "0px 0px -10% 0px"
  });
}

function setupIntroStatueVideoLoop() {
  const section = document.getElementById("bienvenidaFotos");
  const vicVideo = document.getElementById("introVideoVic");
  let crisVideo = document.getElementById("introVideoCris");
  const crisPreview = document.getElementById("introVideoCrisPreview");

  if (
    !(section instanceof HTMLElement)
    || !(vicVideo instanceof HTMLVideoElement)
    || !(crisVideo instanceof HTMLVideoElement)
  ) {
    return;
  }

  const vicTriggerSeconds = 10;
  const crisPreviewSeconds = 0;
  const visibilityThreshold = 0.22;
  const visibilityRootMargin = "0px 0px -10% 0px";
  const prefersAggressiveCrisRestart = typeof window.matchMedia === "function"
    && window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  const crisStallNearEndThreshold = 0.22;
  const crisStallTimeoutMs = 520;
  const cycleRestartDelayMs = prefersAggressiveCrisRestart ? 220 : 120;
  let sectionIsVisible = false;
  let cycleRunning = false;
  let activePhase = "vic-only";
  let vicEndedInCycle = false;
  let vicNeedsRestart = true;
  let crisNeedsRestart = true;
  let vicStartPending = false;
  let crisStartPending = false;
  let vicStartRequestId = 0;
  let crisStartRequestId = 0;
  let cycleRestartPending = false;
  let cycleRestartTimerId = 0;
  let crisLoopWatchdogId = 0;
  let lastCrisObservedTime = -1;
  let lastCrisProgressAt = 0;
  let crisPreviewReady = Boolean(
    crisPreview instanceof HTMLElement
    && crisPreview.style.backgroundImage
  );
  let crisPreviewPromise = null;

  const safePause = (video) => {
    if (!video.paused) {
      video.pause();
    }
  };

  const applyPlaybackDefaults = (video) => {
    video.loop = false;
    video.removeAttribute("loop");
    video.autoplay = false;
    video.removeAttribute("autoplay");
    video.defaultPlaybackRate = 1;
    video.playbackRate = 1;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
  };

  const safePlay = (video) => {
    applyPlaybackDefaults(video);

    if (!video.paused) {
      return;
    }

    queuePlayAttempt(video);
  };

  const getVicTriggerTime = () => {
    if (!Number.isFinite(vicVideo.duration) || vicVideo.duration <= 0) {
      return vicTriggerSeconds;
    }

    return Math.min(vicTriggerSeconds, Math.max(0, vicVideo.duration - 0.08));
  };

  const getVideoEndTime = (video) => {
    if (!Number.isFinite(video.duration) || video.duration <= 0) {
      return video.currentTime;
    }

    return Math.max(0, video.duration - 0.05);
  };

  const getPreviewTime = (video, time) => {
    if (!Number.isFinite(time) || time <= 0) {
      return 0;
    }

    if (!Number.isFinite(video.duration) || video.duration <= 0) {
      return time;
    }

    return Math.min(time, Math.max(0, video.duration - 0.08));
  };

  const getCrisStartTime = () => getPreviewTime(crisVideo, crisPreviewSeconds);

  const setCurrentTimeSafely = (video, time) => {
    try {
      if (!Number.isFinite(video.currentTime) || Math.abs(video.currentTime - time) > 0.04) {
        video.currentTime = time;
      }
    } catch (_error) {
      // Algunos navegadores bloquean el seek antes de tener metadata.
    }
  };

  const isCurrentTimeNear = (video, time, tolerance = 0.08) => (
    Number.isFinite(video.currentTime)
    && Math.abs(video.currentTime - time) <= tolerance
  );

  const queuePlayAttempt = (video) => {
    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(() => {
        // Reintentamos al siguiente cambio de visibilidad o interaccion.
      });
    }
  };

  const beginPendingStartRequest = (video) => {
    if (video === vicVideo) {
      vicStartRequestId += 1;
      vicStartPending = true;
      return vicStartRequestId;
    }

    if (video === crisVideo) {
      crisStartRequestId += 1;
      crisStartPending = true;
      return crisStartRequestId;
    }

    return 0;
  };

  const invalidatePendingStartRequest = (video) => {
    if (video === vicVideo) {
      vicStartRequestId += 1;
      vicStartPending = false;
      return;
    }

    if (video === crisVideo) {
      crisStartRequestId += 1;
      crisStartPending = false;
    }
  };

  const isPendingStartRequestCurrent = (video, requestId) => {
    if (video === vicVideo) {
      return vicStartPending && vicStartRequestId === requestId;
    }

    if (video === crisVideo) {
      return crisStartPending && crisStartRequestId === requestId;
    }

    return false;
  };

  const clearPendingStartRequest = (video, requestId) => {
    if (video === vicVideo && vicStartRequestId === requestId) {
      vicStartPending = false;
      return;
    }

    if (video === crisVideo && crisStartRequestId === requestId) {
      crisStartPending = false;
    }
  };

  const isStartPending = (video) => (
    video === vicVideo
      ? vicStartPending
      : (video === crisVideo ? crisStartPending : false)
  );

  const clearCycleRestartTimer = () => {
    if (!cycleRestartTimerId) {
      return;
    }

    window.clearTimeout(cycleRestartTimerId);
    cycleRestartTimerId = 0;
  };

  const clearCrisLoopWatchdog = () => {
    if (crisLoopWatchdogId) {
      window.clearInterval(crisLoopWatchdogId);
      crisLoopWatchdogId = 0;
    }

    lastCrisObservedTime = -1;
    lastCrisProgressAt = 0;
  };

  const recordCrisPlaybackProgress = () => {
    if (!Number.isFinite(crisVideo.currentTime)) {
      return;
    }

    lastCrisObservedTime = crisVideo.currentTime;
    lastCrisProgressAt = performance.now();
  };

  const syncCrisPlaybackProgress = () => {
    const currentTime = Number.isFinite(crisVideo.currentTime) ? crisVideo.currentTime : -1;
    if (currentTime < 0) {
      return;
    }

    if (lastCrisObservedTime < 0 || Math.abs(currentTime - lastCrisObservedTime) > 0.02) {
      lastCrisObservedTime = currentTime;
      lastCrisProgressAt = performance.now();
    }
  };

  const reloadVideoElement = (video, { forceSourceReset = false } = {}) => {
    if (!(video instanceof HTMLVideoElement)) {
      return;
    }

    if (forceSourceReset) {
      const sourceNodes = Array.from(video.querySelectorAll("source"));
      sourceNodes.forEach((source) => {
        if (!(source instanceof HTMLSourceElement)) {
          return;
        }

        const originalSrc = source.dataset.originalSrc || source.getAttribute("src") || source.src;
        if (!originalSrc) {
          return;
        }

        source.dataset.originalSrc = originalSrc;
        source.removeAttribute("src");
      });

      const directSrc = video.dataset.originalSrc || video.getAttribute("src") || "";
      if (directSrc) {
        video.dataset.originalSrc = directSrc;
        video.removeAttribute("src");
      }

      try {
        video.load();
      } catch (_error) {
        // Algunos navegadores pueden bloquear load() en ciertos estados.
      }

      sourceNodes.forEach((source) => {
        if (!(source instanceof HTMLSourceElement)) {
          return;
        }

        const originalSrc = source.dataset.originalSrc;
        if (!originalSrc) {
          return;
        }

        source.setAttribute("src", originalSrc);
      });

      const restoredDirectSrc = video.dataset.originalSrc || "";
      if (restoredDirectSrc) {
        video.setAttribute("src", restoredDirectSrc);
      }
    }

    try {
      video.load();
    } catch (_error) {
      // Algunos navegadores pueden bloquear load() en ciertos estados.
    }
  };

  const seekVideoReliably = (
    video,
    time,
    {
      requestId = 0,
      allowReloadFallback = false,
      preferReload = false,
      onSettled = null
    } = {}
  ) => {
    const targetTime = Math.max(0, Number.isFinite(time) ? time : 0);
    let isSettled = false;
    let attemptCount = 0;
    let didFallbackReload = false;

    const isRequestStillValid = () => (
      requestId === 0 || isPendingStartRequestCurrent(video, requestId)
    );

    const finalize = (didReachTarget) => {
      if (isSettled) {
        return;
      }

      isSettled = true;

      if (typeof onSettled === "function") {
        onSettled(didReachTarget);
      }
    };

    const reloadAndRetry = () => {
      if (didFallbackReload || isSettled || !isRequestStillValid()) {
        return;
      }

      didFallbackReload = true;

      const rerunAfterReload = () => {
        if (isSettled || !isRequestStillValid()) {
          return;
        }

        attemptCount = 0;
        window.setTimeout(runAttempt, 30);
      };

      reloadVideoElement(video, {
        forceSourceReset: video === crisVideo && prefersAggressiveCrisRestart
      });

      video.addEventListener("loadedmetadata", rerunAfterReload, { once: true });
      window.setTimeout(rerunAfterReload, 280);
    };

    const runAttempt = () => {
      if (isSettled || !isRequestStillValid()) {
        return;
      }

      attemptCount += 1;
      setCurrentTimeSafely(video, targetTime);

      if (isCurrentTimeNear(video, targetTime, 0.14)) {
        finalize(true);
        return;
      }

      if (attemptCount < 4) {
        window.setTimeout(runAttempt, 70 * attemptCount);
        return;
      }

      if (allowReloadFallback && !didFallbackReload) {
        reloadAndRetry();
        return;
      }

      finalize(false);
    };

    const startAttempts = () => {
      if (preferReload) {
        reloadAndRetry();
        return;
      }

      runAttempt();
      window.requestAnimationFrame(runAttempt);
    };

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      startAttempts();
      return;
    }

    video.addEventListener("loadedmetadata", startAttempts, { once: true });
    window.setTimeout(startAttempts, 240);
  };

  const playFromTime = (video, time) => {
    applyPlaybackDefaults(video);

    const targetTime = Math.max(0, Number.isFinite(time) ? time : 0);
    const shouldSeekBeforePlay = video.ended || !isCurrentTimeNear(video, targetTime);

    if (video === crisVideo) {
      setCrisPreviewVisible(true);
      recordCrisPlaybackProgress();
    }

    if (!shouldSeekBeforePlay) {
      if (!video.paused) {
        return;
      }

      queuePlayAttempt(video);
      return;
    }

    safePause(video);
    const requestId = beginPendingStartRequest(video);

    let didAttemptPlay = false;
    const attemptPlay = () => {
      if (didAttemptPlay || !isPendingStartRequestCurrent(video, requestId)) {
        return;
      }

      didAttemptPlay = true;
      clearPendingStartRequest(video, requestId);

      if (!shouldRun()) {
        return;
      }

      queuePlayAttempt(video);
    };

    seekVideoReliably(video, targetTime, {
      requestId,
      allowReloadFallback: video === crisVideo,
      preferReload: (
        video === crisVideo
        && (video.ended || (Number.isFinite(video.currentTime) && video.currentTime > targetTime + 0.25))
      ),
      onSettled: (didReachTarget) => {
        if (!isPendingStartRequestCurrent(video, requestId)) {
          return;
        }

        if (!didReachTarget && video === crisVideo) {
          clearPendingStartRequest(video, requestId);
          setCrisPreviewVisible(true);
          scheduleCycleRestart();
          return;
        }

        attemptPlay();
      }
    });

    window.setTimeout(() => {
      if (
        isPendingStartRequestCurrent(video, requestId)
        && isCurrentTimeNear(video, targetTime, 0.14)
      ) {
        attemptPlay();
      }
    }, video === crisVideo ? 280 : 180);
  };

  const setCrisPreviewVisible = (isVisible) => {
    if (!(crisPreview instanceof HTMLElement)) {
      return;
    }

    crisPreview.classList.toggle("is-visible", isVisible);
  };

  const applyCrisPreviewImage = (dataUrl) => {
    if (!(crisPreview instanceof HTMLElement) || !dataUrl) {
      return;
    }

    crisPreview.style.backgroundImage = `url("${dataUrl}")`;
    crisPreviewReady = true;
    crisVideo.poster = dataUrl;
  };

  const buildCrisPreviewFrame = () => {
    if (!(crisPreview instanceof HTMLElement)) {
      return Promise.resolve(false);
    }

    if (crisPreviewReady && crisPreview.style.backgroundImage) {
      return Promise.resolve(true);
    }

    if (crisPreviewPromise) {
      return crisPreviewPromise;
    }

    crisPreviewPromise = new Promise((resolve) => {
      let isSettled = false;

      const finalize = (didSucceed) => {
        if (isSettled) {
          return;
        }

        isSettled = true;

        if (!didSucceed && (!cycleRunning || activePhase === "vic-only" || crisVideo.paused)) {
          setCurrentTimeSafely(crisVideo, getCrisStartTime());
        }

        crisPreviewPromise = null;
        resolve(didSucceed);
      };

      const captureCurrentFrame = () => {
        window.requestAnimationFrame(() => {
          try {
            const width = crisVideo.videoWidth || 0;
            const height = crisVideo.videoHeight || 0;

            if (width <= 0 || height <= 0) {
              finalize(false);
              return;
            }

            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            const context = canvas.getContext("2d");

            if (!context) {
              finalize(false);
              return;
            }

            context.drawImage(crisVideo, 0, 0, width, height);
            applyCrisPreviewImage(canvas.toDataURL("image/jpeg", 0.9));
            finalize(true);
          } catch (_error) {
            finalize(false);
          }
        });
      };

      const captureAtPreviewTime = () => {
        if (cycleRunning && activePhase !== "vic-only" && !crisVideo.paused) {
          finalize(false);
          return;
        }

        const previewTime = getCrisStartTime();

        if (Math.abs(crisVideo.currentTime - previewTime) <= 0.04) {
          captureCurrentFrame();
          return;
        }

        crisVideo.addEventListener("seeked", captureCurrentFrame, { once: true });
        setCurrentTimeSafely(crisVideo, previewTime);
      };

      if (
        crisVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA
        && crisVideo.videoWidth > 0
        && crisVideo.videoHeight > 0
      ) {
        captureAtPreviewTime();
        return;
      }

      const tryCaptureLater = () => {
        captureAtPreviewTime();
      };

      crisVideo.addEventListener("loadeddata", tryCaptureLater, { once: true });
      crisVideo.addEventListener("canplay", tryCaptureLater, { once: true });
      crisVideo.addEventListener("loadedmetadata", tryCaptureLater, { once: true });

      window.setTimeout(() => {
        if (!crisPreviewReady && crisPreviewPromise) {
          finalize(false);
        }
      }, 3000);
    });

    return crisPreviewPromise;
  };

  const freezeAtStart = (video) => {
    applyPlaybackDefaults(video);
    safePause(video);

    if (video === crisVideo) {
      seekVideoReliably(video, getCrisStartTime(), {
        allowReloadFallback: true,
        preferReload: (
          video.ended
          || (Number.isFinite(video.currentTime)
            && video.currentTime > getCrisStartTime() + 0.25)
        )
      });
      setCrisPreviewVisible(true);
      buildCrisPreviewFrame().catch(() => {
        // Si falla la captura seguiremos con el frame nativo del video.
      });
      return;
    }

    seekVideoReliably(video, 0, {
      allowReloadFallback: video.ended
    });
  };

  const freezeAtEnd = (video) => {
    applyPlaybackDefaults(video);
    safePause(video);
    setCurrentTimeSafely(video, getVideoEndTime(video));
  };

  const shouldRun = () => (
    sectionIsVisible
    && !document.hidden
    && !document.body.classList.contains("is-locked")
  );

  const recreateCrisVideoElement = () => {
    const currentVideo = crisVideo;
    if (!(currentVideo instanceof HTMLVideoElement)) {
      return false;
    }

    const parentNode = currentVideo.parentNode;
    if (!(parentNode instanceof Node)) {
      return false;
    }

    invalidatePendingStartRequest(currentVideo);
    safePause(currentVideo);
    clearCrisLoopWatchdog();

    const replacement = currentVideo.cloneNode(true);
    if (!(replacement instanceof HTMLVideoElement)) {
      return false;
    }

    replacement.poster = currentVideo.poster || replacement.getAttribute("poster") || "";
    parentNode.replaceChild(replacement, currentVideo);
    crisVideo = replacement;
    crisPreviewPromise = null;
    crisPreviewReady = Boolean(
      crisPreview instanceof HTMLElement
      && crisPreview.style.backgroundImage
    );

    applyPlaybackDefaults(crisVideo);
    attachCrisVideoListeners();
    reloadVideoElement(crisVideo, {
      forceSourceReset: prefersAggressiveCrisRestart
    });

    freezeAtStart(crisVideo);
    return true;
  };

  const hasCrisReachedLoopEnd = () => {
    if (!Number.isFinite(crisVideo.duration) || crisVideo.duration <= 0) {
      return false;
    }

    return crisVideo.currentTime >= Math.max(0, crisVideo.duration - 0.12);
  };

  const scheduleCycleRestart = () => {
    if (cycleRestartPending) {
      return;
    }

    cycleRestartPending = true;
    clearCycleRestartTimer();
    clearCrisLoopWatchdog();
    invalidatePendingStartRequest(vicVideo);
    invalidatePendingStartRequest(crisVideo);
    safePause(vicVideo);
    reloadVideoElement(vicVideo, {
      forceSourceReset: prefersAggressiveCrisRestart
    });
    freezeAtStart(vicVideo);
    setCrisPreviewVisible(true);
    recreateCrisVideoElement();

    cycleRestartTimerId = window.setTimeout(() => {
      cycleRestartTimerId = 0;
      cycleRestartPending = false;

      if (!shouldRun()) {
        resetCycle();
        return;
      }

      beginVicCycle();
    }, cycleRestartDelayMs);
  };

  const maybeRestartAfterCris = () => {
    if (
      !cycleRunning
      || activePhase !== "both"
      || crisNeedsRestart
      || cycleRestartPending
    ) {
      return;
    }

    if (!hasCrisReachedLoopEnd()) {
      return;
    }

    scheduleCycleRestart();
  };

  const resetCycle = () => {
    cycleRunning = false;
    activePhase = "vic-only";
    vicEndedInCycle = false;
    vicNeedsRestart = true;
    crisNeedsRestart = true;
    cycleRestartPending = false;
    clearCycleRestartTimer();
    clearCrisLoopWatchdog();
    invalidatePendingStartRequest(vicVideo);
    invalidatePendingStartRequest(crisVideo);
    freezeAtStart(vicVideo);
    freezeAtStart(crisVideo);
  };

  const beginVicCycle = () => {
    cycleRunning = true;
    activePhase = "vic-only";
    vicEndedInCycle = false;
    vicNeedsRestart = true;
    crisNeedsRestart = true;
    cycleRestartPending = false;
    clearCycleRestartTimer();
    clearCrisLoopWatchdog();
    invalidatePendingStartRequest(vicVideo);
    invalidatePendingStartRequest(crisVideo);
    freezeAtStart(vicVideo);
    freezeAtStart(crisVideo);
    refreshPlayback();
  };

  const maybeStartCris = () => {
    if (!cycleRunning || activePhase !== "vic-only" || vicEndedInCycle) {
      return;
    }

    if (vicVideo.currentTime < getVicTriggerTime()) {
      return;
    }

    activePhase = "both";
    crisNeedsRestart = true;
    freezeAtStart(crisVideo);
    refreshPlayback();
  };

  const refreshPlayback = () => {
    if (!shouldRun()) {
      resetCycle();
      return;
    }

    if (!cycleRunning) {
      beginVicCycle();
      return;
    }

    if (cycleRestartPending) {
      return;
    }

    if (activePhase === "vic-only") {
      clearCrisLoopWatchdog();
      freezeAtStart(crisVideo);

      if (vicEndedInCycle) {
        freezeAtEnd(vicVideo);
      } else if (vicNeedsRestart) {
        vicNeedsRestart = false;
        playFromTime(vicVideo, 0);
      } else if (isStartPending(vicVideo)) {
        return;
      } else {
        safePlay(vicVideo);
      }

      return;
    }

    if (vicEndedInCycle) {
      freezeAtEnd(vicVideo);
    } else if (vicNeedsRestart) {
      vicNeedsRestart = false;
      playFromTime(vicVideo, 0);
    } else if (!isStartPending(vicVideo)) {
      safePlay(vicVideo);
    }

    if (prefersAggressiveCrisRestart) {
      startCrisLoopWatchdog();
    }

    if (crisNeedsRestart) {
      crisNeedsRestart = false;
      playFromTime(crisVideo, getCrisStartTime());
    } else if (
      crisVideo.paused
      && (
        crisVideo.ended
        || (Number.isFinite(crisVideo.currentTime) && crisVideo.currentTime > getCrisStartTime() + 0.35)
      )
    ) {
      playFromTime(crisVideo, getCrisStartTime());
    } else if (!isStartPending(crisVideo)) {
      safePlay(crisVideo);
    } else {
      return;
    }
  };

  const handleVicEnded = () => {
    if (!cycleRunning) {
      freezeAtStart(vicVideo);
      return;
    }

    vicEndedInCycle = true;
    freezeAtEnd(vicVideo);

    if (activePhase === "vic-only") {
      activePhase = "both";
      crisNeedsRestart = true;
    }

    refreshPlayback();
  };

  const handleCrisEnded = () => {
    if (!cycleRunning) {
      freezeAtStart(crisVideo);
      return;
    }

    setCrisPreviewVisible(true);
    scheduleCycleRestart();
  };

  const updateSectionVisibility = (nextVisible) => {
    if (sectionIsVisible === nextVisible) {
      if (nextVisible) {
        refreshPlayback();
      }
      return;
    }

    sectionIsVisible = nextVisible;

    if (!sectionIsVisible) {
      resetCycle();
      return;
    }

    refreshPlayback();
  };

  const updateSectionVisibilityFromRect = () => {
    const rect = section.getBoundingClientRect();
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 0;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;

    if (rect.width <= 0 || rect.height <= 0 || viewportWidth <= 0 || viewportHeight <= 0) {
      updateSectionVisibility(false);
      return;
    }

    const visibleWidth = Math.max(0, Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0));
    const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
    const visibleArea = visibleWidth * visibleHeight;
    const totalArea = rect.width * rect.height;
    const visibleRatio = totalArea > 0 ? visibleArea / totalArea : 0;

    updateSectionVisibility(visibleRatio >= visibilityThreshold);
  };

  const enforcePlaybackRate = (video) => {
    if (Math.abs(video.playbackRate - 1) > 0.001) {
      video.playbackRate = 1;
    }

    if (Math.abs(video.defaultPlaybackRate - 1) > 0.001) {
      video.defaultPlaybackRate = 1;
    }
  };

  const handleCrisPlaying = () => {
    recordCrisPlaybackProgress();
    if (prefersAggressiveCrisRestart) {
      startCrisLoopWatchdog();
      return;
    }

    setCrisPreviewVisible(false);
  };

  const handleCrisTimeUpdate = () => {
    syncCrisPlaybackProgress();

    if (
      cycleRunning
      && activePhase === "both"
      && Number.isFinite(crisVideo.currentTime)
      && crisVideo.currentTime > getCrisStartTime() + 0.04
    ) {
      setCrisPreviewVisible(false);
    }

    maybeRestartAfterCris();
  };

  const handleCrisPause = () => {
    syncCrisPlaybackProgress();
    maybeRestartAfterCris();
  };

  const handleCrisLoadedData = () => {
    buildCrisPreviewFrame().catch(() => {
      // Si Safari rechaza la captura, mantenemos el comportamiento existente.
    });
  };

  const handleCrisRateChange = () => {
    enforcePlaybackRate(crisVideo);
  };

  const attachCrisVideoListeners = () => {
    crisVideo.addEventListener("timeupdate", handleCrisTimeUpdate);
    crisVideo.addEventListener("pause", handleCrisPause);
    crisVideo.addEventListener("ended", handleCrisEnded);
    crisVideo.addEventListener("playing", handleCrisPlaying);
    crisVideo.addEventListener("loadeddata", handleCrisLoadedData);
    crisVideo.addEventListener("ratechange", handleCrisRateChange);
    crisVideo.addEventListener("loadeddata", refreshPlayback);
    crisVideo.addEventListener("canplay", refreshPlayback);
    crisVideo.addEventListener("loadedmetadata", refreshPlayback);
  };

  vicVideo.addEventListener("timeupdate", maybeStartCris);
  vicVideo.addEventListener("ended", handleVicEnded);
  attachCrisVideoListeners();
  vicVideo.addEventListener("ratechange", () => {
    enforcePlaybackRate(vicVideo);
  });

  vicVideo.addEventListener("loadeddata", refreshPlayback);
  vicVideo.addEventListener("canplay", refreshPlayback);
  vicVideo.addEventListener("loadedmetadata", refreshPlayback);

  document.addEventListener("visibilitychange", refreshPlayback);
  window.addEventListener("pointerup", refreshPlayback, { passive: true });
  window.addEventListener("pagehide", clearCrisLoopWatchdog, { once: true });

  if (typeof window.IntersectionObserver === "function") {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target !== section) {
            return;
          }

          updateSectionVisibility(entry.isIntersecting && entry.intersectionRatio >= visibilityThreshold);
        });
      },
      {
        threshold: [0, visibilityThreshold, 1],
        rootMargin: visibilityRootMargin
      }
    );

    observer.observe(section);
    window.addEventListener("pagehide", () => {
      observer.disconnect();
    }, { once: true });
  } else {
    updateSectionVisibilityFromRect();
    window.addEventListener("scroll", updateSectionVisibilityFromRect, { passive: true });
    window.addEventListener("resize", updateSectionVisibilityFromRect, { passive: true });
  }

  applyPlaybackDefaults(vicVideo);
  applyPlaybackDefaults(crisVideo);
  buildCrisPreviewFrame().catch(() => {
    // La preview es una mejora visual; no debe romper el bucle si falla.
  });
  resetCycle();

  function startCrisLoopWatchdog() {
    if (!prefersAggressiveCrisRestart || crisLoopWatchdogId) {
      return;
    }

    recordCrisPlaybackProgress();
    crisLoopWatchdogId = window.setInterval(() => {
      if (
        !shouldRun()
        || !cycleRunning
        || activePhase !== "both"
        || crisNeedsRestart
        || cycleRestartPending
        || isStartPending(crisVideo)
      ) {
        return;
      }

      if (!Number.isFinite(crisVideo.duration) || crisVideo.duration <= 0) {
        return;
      }

      syncCrisPlaybackProgress();

      if (hasCrisReachedLoopEnd()) {
        scheduleCycleRestart();
        return;
      }

      const timeUntilEnd = getVideoEndTime(crisVideo) - crisVideo.currentTime;
      if (
        timeUntilEnd <= crisStallNearEndThreshold
        && lastCrisProgressAt > 0
        && (performance.now() - lastCrisProgressAt) >= crisStallTimeoutMs
      ) {
        scheduleCycleRestart();
      }
    }, 220);
  }
}

function setupCountdown() {
  const countdown = document.getElementById("countdown");
  if (!countdown) {
    return;
  }

  const targetDate = new Date(weddingConfig.eventStartISO).getTime();
  if (Number.isNaN(targetDate)) {
    return;
  }

  const nodes = {
    days: countdown.querySelector('[data-unit="days"]'),
    hours: countdown.querySelector('[data-unit="hours"]'),
    minutes: countdown.querySelector('[data-unit="minutes"]'),
    seconds: countdown.querySelector('[data-unit="seconds"]')
  };
  const secondsCard = nodes.seconds ? nodes.seconds.closest(".count-card") : null;

  const tick = () => {
    const diff = Math.max(0, targetDate - Date.now());
    const total = Math.floor(diff / 1000);

    const days = Math.floor(total / 86400);
    const hours = Math.floor((total % 86400) / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;

    setAnimatedCount(nodes.days, formatUnit(days));
    setAnimatedCount(nodes.hours, formatUnit(hours));
    setAnimatedCount(nodes.minutes, formatUnit(minutes));
    setAnimatedCount(nodes.seconds, formatUnit(seconds));

    if (secondsCard instanceof HTMLElement && !reducedMotionQuery.matches) {
      triggerCountdownSecondPulse(secondsCard);
    }
  };

  tick();
  clearInterval(appState.countdownTimer);
  appState.countdownTimer = window.setInterval(tick, 1000);
}

function setupStopwatchSecondHand() {
  const secondHand = document.getElementById("countdownStopwatchSecondHand");
  if (!(secondHand instanceof HTMLElement)) {
    return;
  }

  let timerId = 0;

  const tick = () => {
    const now = new Date();
    const angle = now.getSeconds() * 6;
    secondHand.style.setProperty("--stopwatch-second-angle", `${angle}deg`);
    const nextDelayMs = 1000 - (Date.now() % 1000) + 8;
    timerId = window.setTimeout(tick, nextDelayMs);
  };

  tick();

  window.addEventListener("pagehide", () => {
    window.clearTimeout(timerId);
  }, { once: true });
}

// Scroll reveal decor (stopwatch & carriages)
function setupDecorReveal() {
  const decorNodes = [...document.querySelectorAll(".reveal-from-behind")]
    .filter((node) => node instanceof HTMLElement);

  if (!decorNodes.length) {
    return;
  }

  const revealNode = (node) => {
    node.classList.add("is-visible");
  };

  if (reducedMotionQuery.matches || typeof window.IntersectionObserver !== "function") {
    decorNodes.forEach(revealNode);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealNode(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.25,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  decorNodes.forEach((node) => observer.observe(node));
}

function setupInviteMotion() {
  const inviteNodes = [...document.querySelectorAll(".invite")]
    .filter((node) => node instanceof HTMLElement);

  if (!inviteNodes.length) {
    return;
  }

  inviteNodes.forEach((invite) => {
    invite.classList.add("is-paused");
  });

  if (reducedMotionQuery.matches || typeof window.IntersectionObserver !== "function") {
    inviteNodes.forEach((invite) => {
      invite.classList.remove("is-paused");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!(entry.target instanceof HTMLElement)) {
          return;
        }

        entry.target.classList.toggle("is-paused", !entry.isIntersecting);
      });
    },
    { threshold: 0.15 }
  );

  inviteNodes.forEach((invite) => observer.observe(invite));

  window.addEventListener("pagehide", () => {
    observer.disconnect();
  }, { once: true });
}

function setupInviteFlameAlignment() {
  const fig = document.querySelector("figure.welcome-letter");
  const inviteFloat = fig instanceof HTMLElement ? fig.querySelector(".invite__float") : null;
  const img = document.getElementById("welcomeLetterImage");
  const layer = fig instanceof HTMLElement ? fig.querySelector(".invite-candle-flames") : null;

  if (
    !(fig instanceof HTMLElement)
    || !(inviteFloat instanceof HTMLElement)
    || !(img instanceof HTMLImageElement)
    || !(layer instanceof HTMLElement)
  ) {
    return;
  }

  const flameAnchors = [
    {
      selector: ".invite-flame--one",
      fallbackX: 73,
      fallbackY: 890,
      size: 1.74,
      search: { x0: 34, y0: 820, x1: 112, y1: 930 }
    },
    {
      selector: ".invite-flame--two",
      fallbackX: 140,
      fallbackY: 958,
      size: 1.58,
      search: { x0: 98, y0: 900, x1: 190, y1: 1018 }
    },
    {
      selector: ".invite-flame--three",
      fallbackX: 954,
      fallbackY: 924,
      size: 1.72,
      search: { x0: 916, y0: 850, x1: 1004, y1: 972 }
    },
    {
      selector: ".invite-flame--four",
      fallbackX: 886,
      fallbackY: 1020,
      size: 1.58,
      search: { x0: 844, y0: 948, x1: 934, y1: 1078 }
    }
  ];

  const flames = flameAnchors
    .map((anchor) => {
      const node = layer.querySelector(anchor.selector);
      return node instanceof HTMLElement ? { ...anchor, node } : null;
    })
    .filter((item) => item !== null);

  if (!flames.length) {
    return;
  }

  let resizeObserver = null;
  let rafId = 0;
  let detectedAnchors = null;

  const toPx = (value) => {
    const parsed = Number.parseFloat(String(value || "").trim());
    return Number.isFinite(parsed) ? parsed : 0;
  };

  const syncLayerBounds = () => {
    const frameRect = inviteFloat.getBoundingClientRect();
    const imageRect = img.getBoundingClientRect();
    if (!frameRect.width || !frameRect.height || !imageRect.width || !imageRect.height) {
      return;
    }

    const imageStyles = window.getComputedStyle(img);
    const borderLeft = toPx(imageStyles.borderLeftWidth);
    const borderTop = toPx(imageStyles.borderTopWidth);
    const borderRight = toPx(imageStyles.borderRightWidth);
    const borderBottom = toPx(imageStyles.borderBottomWidth);

    const left = imageRect.left - frameRect.left + borderLeft;
    const top = imageRect.top - frameRect.top + borderTop;
    const width = Math.max(0, imageRect.width - borderLeft - borderRight);
    const height = Math.max(0, imageRect.height - borderTop - borderBottom);

    layer.style.left = `${left}px`;
    layer.style.top = `${top}px`;
    layer.style.width = `${width}px`;
    layer.style.height = `${height}px`;
    layer.style.borderRadius = imageStyles.borderRadius;
  };

  const detectAnchorFromImage = (imageData, width, height, anchor) => {
    const x0 = clamp(anchor.search.x0, 0, width - 1);
    const y0 = clamp(anchor.search.y0, 0, height - 1);
    const x1 = clamp(anchor.search.x1, x0 + 1, width);
    const y1 = clamp(anchor.search.y1, y0 + 1, height);
    const candidates = [];

    for (let y = y0; y < y1; y += 1) {
      for (let x = x0; x < x1; x += 1) {
        const index = (y * width + x) * 4;
        const r = imageData[index];
        const g = imageData[index + 1];
        const b = imageData[index + 2];
        const maxChannel = Math.max(r, g, b);
        const minChannel = Math.min(r, g, b);
        const saturation = maxChannel - minChannel;
        const luminance = (r + g + b) / 3;

        // Flame core: warm and bright, but still allows near-white pixels.
        if (
          luminance < 150
          || r < 185
          || g < 135
          || r < g
          || g < b - 12
          || saturation < 10
          || saturation > 150
        ) {
          continue;
        }

        const warmth = r + g - b * 0.65;
        const distance = Math.hypot(x - anchor.fallbackX, y - anchor.fallbackY);
        let score = luminance * 1.35 + warmth * 0.92 + (255 - saturation) * 0.55 - distance * 3.1;

        if (r > 240 && g > 200) {
          score += 85;
        }

        if (r > 235 && g > 235) {
          score += 40;
        }

        if (score > 0) {
          candidates.push({ x, y, score });
        }
      }
    }

    if (!candidates.length) {
      return { x: anchor.fallbackX, y: anchor.fallbackY };
    }

    candidates.sort((a, b) => b.score - a.score);

    // Anchor the effect to the brightest flame core instead of the full glow.
    // Using the centroid of the glow drifts the overlay downward on small screens.
    return {
      x: candidates[0].x,
      y: candidates[0].y
    };
  };

  const getDetectedAnchors = () => {
    if (detectedAnchors) {
      return detectedAnchors;
    }

    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;
    if (!naturalWidth || !naturalHeight || img.dataset.isPlaceholder === "true") {
      return null;
    }

    const canvas = document.createElement("canvas");
    canvas.width = naturalWidth;
    canvas.height = naturalHeight;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) {
      return null;
    }

    context.drawImage(img, 0, 0, naturalWidth, naturalHeight);
    let imageData;

    try {
      imageData = context.getImageData(0, 0, naturalWidth, naturalHeight).data;
    } catch {
      detectedAnchors = flames.map((flame) => ({
        x: flame.fallbackX,
        y: flame.fallbackY,
        size: flame.size
      }));
      return detectedAnchors;
    }

    detectedAnchors = flames.map((flame) => {
      const point = detectAnchorFromImage(imageData, naturalWidth, naturalHeight, flame);
      return {
        x: point.x,
        y: point.y,
        size: flame.size
      };
    });

    return detectedAnchors;
  };

  const syncFlameAnchors = () => {
    if (img.dataset.isPlaceholder === "true") {
      return;
    }

    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;
    if (!naturalWidth || !naturalHeight) {
      return;
    }

    const anchorPoints = getDetectedAnchors();

    flames.forEach((flame, index) => {
      const detected = anchorPoints ? anchorPoints[index] : null;
      const sourceX = detected ? detected.x : flame.fallbackX;
      const sourceY = detected ? detected.y : flame.fallbackY;
      const sourceSize = detected ? detected.size : flame.size;
      const xPercent = (sourceX / naturalWidth) * 100;
      const yPercent = (sourceY / naturalHeight) * 100;
      flame.node.style.setProperty("--x", `${xPercent.toFixed(4)}%`);
      flame.node.style.setProperty("--y", `${yPercent.toFixed(4)}%`);
      flame.node.style.setProperty("--size", `${sourceSize}%`);
    });
  };

  const refreshAlignment = () => {
    rafId = 0;
    syncLayerBounds();
    syncFlameAnchors();
  };

  const scheduleRefresh = () => {
    if (rafId) {
      return;
    }

    rafId = window.requestAnimationFrame(refreshAlignment);
  };

  const onImageLoad = () => {
    detectedAnchors = null;
    scheduleRefresh();
  };

  const onViewportChange = () => {
    scheduleRefresh();
  };

  img.addEventListener("load", onImageLoad);
  window.addEventListener("resize", onViewportChange, { passive: true });

  if (typeof ResizeObserver === "function") {
    resizeObserver = new ResizeObserver(() => {
      scheduleRefresh();
    });
    resizeObserver.observe(inviteFloat);
    resizeObserver.observe(img);
  }

  if (img.complete) {
    scheduleRefresh();
  }

  window.addEventListener("pagehide", () => {
    if (rafId) {
      window.cancelAnimationFrame(rafId);
      rafId = 0;
    }

    img.removeEventListener("load", onImageLoad);
    window.removeEventListener("resize", onViewportChange);

    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    }
  }, { once: true });
}

function setupWelcomeLetterMagnifier() {
  const fig = document.querySelector("figure.welcome-letter");
  const inviteFloat = fig instanceof HTMLElement ? fig.querySelector(".invite__float") : null;
  const imgFromClass = fig instanceof HTMLElement ? fig.querySelector(".invite-img") : null;
  const imgById = document.getElementById("welcomeLetterImage");
  const img = imgFromClass instanceof HTMLImageElement ? imgFromClass : imgById;
  const handle = document.getElementById("welcomeLetterMagnifierHandle");
  const magnifier = fig instanceof HTMLElement ? fig.querySelector(".magnifier") : null;
  const glass = magnifier instanceof HTMLElement ? magnifier.querySelector(".magnifier-glass") : null;

  if (
    !(fig instanceof HTMLElement)
    || !(img instanceof HTMLImageElement)
    || !(magnifier instanceof HTMLElement)
    || !(glass instanceof HTMLElement)
  ) {
    return;
  }

  const KEYBOARD_STEP = 18;
  let dragging = false;
  let keyboardMode = false;
  let activePointerId = null;
  let hideTimerId = 0;
  let lensClientX = 0;
  let lensClientY = 0;
  let resizeObserver = null;
  let lensMetricsCache = null;
  let lensMetricsDirty = true;
  let lensUpdateFrameId = 0;
  let pendingLensClientX = 0;
  let pendingLensClientY = 0;

  const clearHideTimer = () => {
    if (!hideTimerId) {
      return;
    }

    window.clearTimeout(hideTimerId);
    hideTimerId = 0;
  };

  const parseCssLength = (rawValue, fallbackPx, relativePx = 0) => {
    const value = String(rawValue ?? "").trim();
    if (!value) {
      return fallbackPx;
    }

    if (value.endsWith("%")) {
      const percent = Number.parseFloat(value);
      return Number.isFinite(percent) ? (relativePx * percent) / 100 : fallbackPx;
    }

    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : fallbackPx;
  };

  const getZoom = () => {
    const rawZoom = window.getComputedStyle(fig).getPropertyValue("--magnifier-zoom");
    const parsedZoom = Number.parseFloat(String(rawZoom || "").trim());
    return Number.isFinite(parsedZoom) && parsedZoom > 1 ? parsedZoom : 2;
  };

  const getImageRect = () => img.getBoundingClientRect();
  const getFigureRect = () => (inviteFloat instanceof HTMLElement ? inviteFloat.getBoundingClientRect() : fig.getBoundingClientRect());

  const getLensMetrics = (referenceRect = magnifier.getBoundingClientRect()) => {
    const figStyles = window.getComputedStyle(fig);
    const hasDimensions = (
      referenceRect
      && typeof referenceRect.width === "number"
      && typeof referenceRect.height === "number"
    );
    const measuredRect = hasDimensions ? referenceRect : magnifier.getBoundingClientRect();
    const lensWidth = measuredRect.width || magnifier.getBoundingClientRect().width || 0;
    const lensHeight = measuredRect.height || magnifier.getBoundingClientRect().height || 0;

    const offsetXToken = String(figStyles.getPropertyValue("--glass-offset-x") || "").trim();
    const offsetYToken = String(figStyles.getPropertyValue("--glass-offset-y") || "").trim();

    const lensOffsetX = parseCssLength(offsetXToken, 0, lensWidth);
    const lensOffsetY = parseCssLength(offsetYToken, 0, lensHeight);

    return {
      lensOffsetX,
      lensOffsetY,
      lensCenterLocalX: lensWidth / 2 + lensOffsetX,
      lensCenterLocalY: lensHeight / 2 + lensOffsetY
    };
  };

  const refreshLensMetrics = (referenceRect) => {
    lensMetricsCache = getLensMetrics(referenceRect);
    lensMetricsDirty = false;
    return lensMetricsCache;
  };

  const getCachedLensMetrics = (referenceRect) => {
    if (lensMetricsDirty || !lensMetricsCache) {
      return refreshLensMetrics(referenceRect);
    }

    return lensMetricsCache;
  };

  const pointInsideImage = (clientX, clientY) => {
    const rect = getImageRect();
    if (!rect.width || !rect.height) {
      return false;
    }

    return (
      clientX >= rect.left
      && clientX <= rect.right
      && clientY >= rect.top
      && clientY <= rect.bottom
    );
  };

  const clampToImage = (clientX, clientY) => {
    const rect = getImageRect();

    return {
      rect,
      clampedX: clamp(clientX, rect.left, rect.right),
      clampedY: clamp(clientY, rect.top, rect.bottom)
    };
  };

  const syncGlassSource = () => {
    const source = img.currentSrc || img.src;
    if (!source) {
      return;
    }

    glass.style.backgroundImage = `url("${source}")`;
  };

  const updateLens = (clientX, clientY) => {
    const figureRect = getFigureRect();
    const { rect: imageRect, clampedX, clampedY } = clampToImage(clientX, clientY);

    if (!figureRect.width || !figureRect.height || !imageRect.width || !imageRect.height) {
      return;
    }

    lensClientX = clampedX;
    lensClientY = clampedY;

    const {
      lensCenterLocalX,
      lensCenterLocalY
    } = getCachedLensMetrics();
    const localFigureX = clampedX - figureRect.left;
    const localFigureY = clampedY - figureRect.top;

    magnifier.style.left = `${localFigureX - lensCenterLocalX}px`;
    magnifier.style.top = `${localFigureY - lensCenterLocalY}px`;

    const zoom = getZoom();
    const lensCenterX = clampedX;
    const lensCenterY = clampedY;
    const localImageX = clamp(lensCenterX - imageRect.left, 0, imageRect.width);
    const localImageY = clamp(lensCenterY - imageRect.top, 0, imageRect.height);
    glass.style.backgroundSize = `${imageRect.width * zoom}px ${imageRect.height * zoom}px`;

    const bgX = -(localImageX * zoom - lensCenterLocalX);
    const bgY = -(localImageY * zoom - lensCenterLocalY);
    glass.style.backgroundPosition = `${bgX}px ${bgY}px`;
  };

  const scheduleLensUpdate = (clientX, clientY) => {
    pendingLensClientX = clientX;
    pendingLensClientY = clientY;

    if (lensUpdateFrameId) {
      return;
    }

    lensUpdateFrameId = window.requestAnimationFrame(() => {
      lensUpdateFrameId = 0;
      updateLens(pendingLensClientX, pendingLensClientY);
    });
  };

  const cancelScheduledLensUpdate = () => {
    if (!lensUpdateFrameId) {
      return;
    }

    window.cancelAnimationFrame(lensUpdateFrameId);
    lensUpdateFrameId = 0;
  };

  const getDefaultClientPoint = () => {
    if (handle instanceof HTMLButtonElement) {
      const handleRect = handle.getBoundingClientRect();
      const { lensOffsetX, lensOffsetY } = getCachedLensMetrics(handleRect);
      return {
        x: handleRect.left + handleRect.width / 2 + lensOffsetX,
        y: handleRect.top + handleRect.height / 2 + lensOffsetY
      };
    }

    const imageRect = getImageRect();
    return {
      x: imageRect.left + imageRect.width / 2,
      y: imageRect.top + imageRect.height / 2
    };
  };

  const resetLens = () => {
    const { x, y } = getDefaultClientPoint();
    updateLens(x, y);
  };

  const openMagnifier = () => {
    clearHideTimer();
    fig.classList.add("is-magnifying");
  };

  const closeMagnifier = (instant = false) => {
    fig.classList.remove("is-magnifier-dragging");
    clearHideTimer();
    cancelScheduledLensUpdate();

    if (instant) {
      fig.classList.remove("is-magnifying");
      resetLens();
      return;
    }

    hideTimerId = window.setTimeout(() => {
      if (!dragging && !keyboardMode) {
        fig.classList.remove("is-magnifying");
        resetLens();
      }
    }, 150);
  };

  const startTouchDrag = (event) => {
    if (!(event instanceof PointerEvent) || event.pointerType !== "touch") {
      return;
    }

    event.preventDefault();
    keyboardMode = false;
    dragging = true;
    activePointerId = event.pointerId;

    if (typeof fig.setPointerCapture === "function") {
      try {
        fig.setPointerCapture(event.pointerId);
      } catch {
        // Safari puede lanzar en capturas inválidas.
      }
    }

    openMagnifier();
    fig.classList.add("is-magnifier-dragging");
    scheduleLensUpdate(event.clientX, event.clientY);
  };

  const onFigurePointerEnter = (event) => {
    if (!(event instanceof PointerEvent) || dragging || keyboardMode) {
      return;
    }

    if (event.pointerType !== "mouse" && event.pointerType !== "pen") {
      return;
    }

    if (!pointInsideImage(event.clientX, event.clientY)) {
      return;
    }

    openMagnifier();
    scheduleLensUpdate(event.clientX, event.clientY);
  };

  const onFigurePointerMove = (event) => {
    if (!(event instanceof PointerEvent)) {
      return;
    }

    if (dragging) {
      if (activePointerId !== null && event.pointerId !== activePointerId) {
        return;
      }

      event.preventDefault();
      openMagnifier();
      scheduleLensUpdate(event.clientX, event.clientY);
      return;
    }

    if (keyboardMode) {
      return;
    }

    if (event.pointerType !== "mouse" && event.pointerType !== "pen") {
      return;
    }

    if (!pointInsideImage(event.clientX, event.clientY)) {
      closeMagnifier();
      return;
    }

    openMagnifier();
    scheduleLensUpdate(event.clientX, event.clientY);
  };

  const onFigurePointerLeave = (event) => {
    if (!(event instanceof PointerEvent) || dragging || keyboardMode) {
      return;
    }

    if (event.pointerType !== "mouse" && event.pointerType !== "pen") {
      return;
    }

    closeMagnifier();
  };

  const endTouchDrag = (event) => {
    if (!dragging) {
      return;
    }

    if (event instanceof PointerEvent && activePointerId !== null && event.pointerId !== activePointerId) {
      return;
    }

    if (event instanceof PointerEvent && typeof fig.releasePointerCapture === "function") {
      try {
        if (fig.hasPointerCapture(event.pointerId)) {
          fig.releasePointerCapture(event.pointerId);
        }
      } catch {
        // Ignorar errores de release en navegadores sin soporte completo.
      }
    }

    dragging = false;
    activePointerId = null;
    closeMagnifier();
  };

  const startKeyboardMode = () => {
    keyboardMode = true;
    openMagnifier();
    fig.classList.remove("is-magnifier-dragging");
    resetLens();
  };

  const endKeyboardMode = () => {
    if (!keyboardMode) {
      return;
    }

    keyboardMode = false;
    closeMagnifier();
  };

  const onHandleKeydown = (event) => {
    if (!(event instanceof KeyboardEvent)) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (keyboardMode) {
        endKeyboardMode();
      } else {
        startKeyboardMode();
      }
      return;
    }

    if (!keyboardMode) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      endKeyboardMode();
      return;
    }

    if (
      event.key !== "ArrowUp"
      && event.key !== "ArrowDown"
      && event.key !== "ArrowLeft"
      && event.key !== "ArrowRight"
    ) {
      return;
    }

    event.preventDefault();
    const nextX = event.key === "ArrowLeft" ? lensClientX - KEYBOARD_STEP : event.key === "ArrowRight" ? lensClientX + KEYBOARD_STEP : lensClientX;
    const nextY = event.key === "ArrowUp" ? lensClientY - KEYBOARD_STEP : event.key === "ArrowDown" ? lensClientY + KEYBOARD_STEP : lensClientY;
    scheduleLensUpdate(nextX, nextY);
  };

  const onHandlePointerDown = (event) => {
    if (!(event instanceof PointerEvent) || dragging || keyboardMode) {
      return;
    }

    if (event.pointerType === "touch") {
      startTouchDrag(event);
      return;
    }

    if (event.pointerType !== "mouse" && event.pointerType !== "pen") {
      return;
    }

    openMagnifier();
    scheduleLensUpdate(event.clientX, event.clientY);
  };

  const onFigureLostPointerCapture = (event) => {
    if (!(event instanceof PointerEvent) || !dragging) {
      return;
    }

    if (activePointerId !== null && event.pointerId !== activePointerId) {
      return;
    }

    endTouchDrag(event);
  };

  const onViewportChange = () => {
    if (!fig.classList.contains("is-magnifying")) {
      return;
    }

    scheduleLensUpdate(lensClientX, lensClientY);
  };

  const onWindowResize = () => {
    lensMetricsDirty = true;
    onViewportChange();
  };

  const initLens = () => {
    syncGlassSource();
    lensMetricsDirty = true;
    resetLens();
  };

  fig.addEventListener("pointerenter", onFigurePointerEnter);
  fig.addEventListener("pointermove", onFigurePointerMove, { passive: false });
  fig.addEventListener("pointerleave", onFigurePointerLeave);
  fig.addEventListener("lostpointercapture", onFigureLostPointerCapture);

  if (handle instanceof HTMLButtonElement) {
    handle.addEventListener("pointerdown", onHandlePointerDown, { passive: false });
    handle.addEventListener("keydown", onHandleKeydown);
    handle.addEventListener("blur", () => {
      if (!dragging) {
        endKeyboardMode();
      }
    });
  }

  window.addEventListener("pointerup", endTouchDrag);
  window.addEventListener("pointercancel", endTouchDrag);
  window.addEventListener("resize", onWindowResize, { passive: true });
  window.addEventListener("scroll", onViewportChange, { passive: true });

  img.addEventListener("load", initLens);
  img.addEventListener("error", syncGlassSource);

  if (typeof ResizeObserver === "function") {
    resizeObserver = new ResizeObserver(() => {
      lensMetricsDirty = true;
      onViewportChange();
    });
    resizeObserver.observe(fig);
    resizeObserver.observe(img);
  }

  if (img.complete) {
    window.requestAnimationFrame(initLens);
  } else {
    syncGlassSource();
  }

  window.addEventListener("pagehide", () => {
    clearHideTimer();
    cancelScheduledLensUpdate();
    dragging = false;
    keyboardMode = false;
    activePointerId = null;
    fig.removeEventListener("pointerenter", onFigurePointerEnter);
    fig.removeEventListener("pointermove", onFigurePointerMove);
    fig.removeEventListener("pointerleave", onFigurePointerLeave);
    fig.removeEventListener("lostpointercapture", onFigureLostPointerCapture);

    if (handle instanceof HTMLButtonElement) {
      handle.removeEventListener("pointerdown", onHandlePointerDown);
      handle.removeEventListener("keydown", onHandleKeydown);
    }

    window.removeEventListener("pointerup", endTouchDrag);
    window.removeEventListener("pointercancel", endTouchDrag);
    window.removeEventListener("resize", onWindowResize);
    window.removeEventListener("scroll", onViewportChange);

    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    }
  }, { once: true });
}

function triggerCountdownSecondPulse(cardNode) {
  if (!(cardNode instanceof HTMLElement)) {
    return;
  }

  const currentTimer = countdownPulseTimers.get(cardNode);
  if (currentTimer) {
    window.clearTimeout(currentTimer);
  }

  cardNode.classList.remove("is-second-pulse");
  void cardNode.offsetWidth;
  cardNode.classList.add("is-second-pulse");

  const timeoutId = window.setTimeout(() => {
    cardNode.classList.remove("is-second-pulse");
    countdownPulseTimers.delete(cardNode);
  }, 440);

  countdownPulseTimers.set(cardNode, timeoutId);
}

function setAnimatedCount(node, value) {
  if (!node) {
    return;
  }

  const currentValue = node.dataset.value || "00";
  if (currentValue === value) {
    return;
  }

  node.dataset.value = value;

  if (reducedMotionQuery.matches) {
    node.innerHTML = `<span class="count-digit stable">${value}</span>`;
    return;
  }

  const outgoing = document.createElement("span");
  outgoing.className = "count-digit exiting";
  outgoing.textContent = currentValue;

  const incoming = document.createElement("span");
  incoming.className = "count-digit entering";
  incoming.textContent = value;

  node.innerHTML = "";
  node.append(outgoing, incoming);
  node.classList.remove("is-animating");

  requestAnimationFrame(() => {
    node.classList.add("is-animating");
  });

  window.setTimeout(() => {
    node.classList.remove("is-animating");
    node.innerHTML = `<span class="count-digit stable">${value}</span>`;
  }, 460);
}

function renderSchedule() {
  const carouselTrack = document.getElementById("programCarouselTrack");
  if (carouselTrack) {
    renderProgramCarousel(carouselTrack, getScheduleDisplayItems());
    return;
  }

  const saturdayList = document.getElementById("scheduleSaturday");
  const sundayList = document.getElementById("scheduleSunday");

  if (saturdayList && sundayList) {
    renderScheduleList(saturdayList, weddingConfig.schedule.saturday || [], "sat");
    renderScheduleList(sundayList, weddingConfig.schedule.sunday || [], "sun");
    return;
  }

  const legacyScheduleList = document.getElementById("scheduleList");
  if (!legacyScheduleList) {
    return;
  }

  const fallbackItems = Array.isArray(weddingConfig.schedule)
    ? weddingConfig.schedule
    : [...(weddingConfig.schedule.saturday || []), ...(weddingConfig.schedule.sunday || [])];

  renderScheduleList(legacyScheduleList, fallbackItems, "legacy");
}

function getScheduleDisplayItems() {
  const saturdayItems = (weddingConfig.schedule?.saturday || []).map((item) => ({
    ...item,
    dayLabel: "Sábado 26 junio 2027"
  }));
  const sundayItems = (weddingConfig.schedule?.sunday || []).map((item) => ({
    ...item,
    dayLabel: "Domingo 27 junio 2027"
  }));

  return [...saturdayItems, ...sundayItems];
}

function getScheduleVisualMeta(item) {
  const normalizedTitle = String(item?.title || "").trim().toLowerCase();

  if (normalizedTitle === "check-in hotel") {
    return {
      src: "assets/gallery/timbre-campanilla-antigua.png",
      alt: "Campanilla antigua del hotel",
      programClass: "program-slide-image--bell",
      timelineClass: ""
    };
  }

  if (normalizedTitle === "ceremonia") {
    return {
      src: "assets/gallery/anillos-programa.png",
      alt: "Anillos de boda",
      programClass: "program-slide-image--rings",
      timelineClass: ""
    };
  }

  if (normalizedTitle === "cóctel" || normalizedTitle === "coctel") {
    return {
      src: "assets/gallery/brindis-coctel-programa.png",
      alt: "Brindis de cóctel",
      programClass: "program-slide-image--toast",
      timelineClass: "timeline-icon--toast"
    };
  }

  if (normalizedTitle === "cena") {
    return {
      src: "assets/gallery/cena-programa.png",
      alt: "Cena del banquete",
      programClass: "program-slide-image--dinner",
      timelineClass: ""
    };
  }

  if (normalizedTitle === "fiesta") {
    return {
      src: "assets/gallery/fiesta-programa.png",
      alt: "Fiesta y baile",
      programClass: "program-slide-image--party",
      timelineClass: "timeline-icon--party"
    };
  }

  if (normalizedTitle === "check-out" || normalizedTitle === "checkout" || normalizedTitle === "check out") {
    return {
      src: "assets/gallery/maleta-programa.png",
      alt: "Maleta de check-out",
      programClass: "program-slide-image--checkout",
      timelineClass: ""
    };
  }

  if (normalizedTitle === "desayuno buffet" || normalizedTitle === "desayuno") {
    return {
      src: "assets/gallery/desayuno-programa.png",
      alt: "Desayuno buffet",
      programClass: "program-slide-image--breakfast",
      timelineClass: "timeline-icon--breakfast"
    };
  }

  if (normalizedTitle === "piscina") {
    return {
      src: "assets/gallery/piscina-programa.png",
      alt: "Piscina",
      programClass: "program-slide-image--pool",
      timelineClass: "timeline-icon--pool"
    };
  }

  return {
    src: "assets/gallery/centro-mesa-programa.png",
    alt: String(item?.title || "Momento del programa"),
    programClass: "",
    timelineClass: ""
  };
}

function renderProgramCarousel(container, items) {
  if (!(container instanceof HTMLElement)) {
    return;
  }

  container.innerHTML = "";

  items.forEach((item, index) => {
    const visual = getScheduleVisualMeta(item);
    const article = document.createElement("article");
    article.className = "program-slide";
    article.dataset.programIndex = String(index);

    article.innerHTML = `
      <div class="program-slide-card">
        <figure class="program-slide-figure">
          <span class="program-slide-aura" aria-hidden="true"></span>
          <div class="program-slide-image-wrap">
            <img class="program-slide-image ${visual.programClass}" src="${visual.src}" alt="${escapeHtml(visual.alt)}" loading="lazy">
          </div>
        </figure>
        <div class="program-slide-copy">
          <div class="program-slide-meta-line">
            <p class="program-slide-time">${escapeHtml(item.time || "")}</p>
            <p class="program-slide-day-inline">${escapeHtml(item.dayLabel || "")}</p>
          </div>
          <h3 class="program-slide-title">${escapeHtml(item.title || "")}</h3>
          <p class="program-slide-description">${escapeHtml(item.description || "")}</p>
        </div>
      </div>
    `;

    container.appendChild(article);
  });
}

function renderScheduleList(container, items, prefix) {
  if (!container) {
    return;
  }

  container.innerHTML = "";

  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "timeline-item";
    li.tabIndex = 0;
    li.dataset.index = `${prefix}-${index}`;
    const title = escapeHtml(item.title);
    const visual = getScheduleVisualMeta(item);
    const sideIconClass = visual.timelineClass ? ` ${visual.timelineClass}` : "";
    const sideIconMarkup = visual.src
      ? `<img src="${visual.src}" alt="${escapeHtml(visual.alt)}" class="timeline-icon timeline-side-icon${sideIconClass}" loading="lazy">`
      : "";
    const sideIconSlotMarkup = sideIconMarkup
      ? `<span class="timeline-icon-slot">${sideIconMarkup}</span>`
      : "";
    const titleMarkup = `<h3>${title}</h3>`;

    li.innerHTML = `
      <div class="timeline-side">
        <span class="timeline-track" aria-hidden="true"></span>
        <span class="timeline-marker" aria-hidden="true"></span>
        <p class="timeline-hour">${escapeHtml(item.time)}</p>
        ${sideIconSlotMarkup}
      </div>
      <div class="timeline-content">
        ${titleMarkup}
        <p>${escapeHtml(item.description)}</p>
      </div>
    `;

    container.appendChild(li);
  });
}

function setupProgramCarousel() {
  const shell = document.getElementById("programCarousel");
  const viewport = shell?.querySelector(".program-carousel-viewport");
  const track = document.getElementById("programCarouselTrack");
  const prevButton = document.getElementById("programCarouselPrev");
  const nextButton = document.getElementById("programCarouselNext");
  const counter = document.getElementById("programCarouselCounter");

  if (
    !(shell instanceof HTMLElement)
    || !(viewport instanceof HTMLElement)
    || !(track instanceof HTMLElement)
    || !(prevButton instanceof HTMLButtonElement)
    || !(nextButton instanceof HTMLButtonElement)
    || !(counter instanceof HTMLElement)
  ) {
    return;
  }

  const slides = [...track.querySelectorAll(".program-slide")]
    .filter((slide) => slide instanceof HTMLElement);

  if (!slides.length) {
    return;
  }

  let activeIndex = 0;

  const applyState = () => {
    track.style.transform = `translateX(-${activeIndex * 100}%)`;

    slides.forEach((slide, index) => {
      const isActive = index === activeIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", isActive ? "false" : "true");
    });

    counter.textContent = `${activeIndex + 1} de ${slides.length}`;
  };

  const goTo = (index) => {
    activeIndex = normalizeIndex(index, slides.length);
    applyState();
  };

  prevButton.addEventListener("click", () => {
    goTo(activeIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    goTo(activeIndex + 1);
  });

  shell.addEventListener("keydown", (event) => {
    if (!(event instanceof KeyboardEvent)) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
    }
  });

  let touchStartX = 0;
  let touchStartY = 0;

  viewport.addEventListener("touchstart", (event) => {
    const touch = event.changedTouches?.[0];
    if (!touch) {
      return;
    }

    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });

  viewport.addEventListener("touchend", (event) => {
    const touch = event.changedTouches?.[0];
    if (!touch) {
      return;
    }

    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;

    if (Math.abs(deltaX) < 36 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      goTo(activeIndex + 1);
      return;
    }

    goTo(activeIndex - 1);
  }, { passive: true });

  applyState();
}

function setupScheduleInteractions() {
  const timelineItems = [...document.querySelectorAll(".timeline-item")];
  if (!timelineItems.length) {
    return;
  }

  const setActive = (item) => {
    timelineItems.forEach((entry) => {
      entry.classList.toggle("is-active", entry === item);
    });
  };

  timelineItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => setActive(item));
    item.addEventListener("focus", () => setActive(item));

    if (index === 0) {
      setActive(item);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target);
        }
      });
    },
    { threshold: 0.65 }
  );

  timelineItems.forEach((item) => observer.observe(item));
}

function renderGallery() {
  const galleryGrid = document.getElementById("galleryGrid");
  if (!galleryGrid) {
    return;
  }

  galleryGrid.innerHTML = "";

  weddingConfig.galleryImages.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-item";
    button.dataset.galleryIndex = String(index);
    button.dataset.galleryCaption = item.caption;
    button.setAttribute("aria-label", `${item.alt}. ${item.caption}`);
    button.setAttribute("aria-haspopup", "dialog");
    button.setAttribute("aria-controls", "lightbox");

    const image = document.createElement("img");
    image.alt = item.alt;
    image.loading = "lazy";
    image.decoding = "async";
    attachImageFallback(image, item.caption);
    image.src = item.src;

    button.append(image);
    galleryGrid.appendChild(button);
  });
}

function setupFloatingGalleryDeck() {
  const stage = document.querySelector(".gallery-float-stage");
  const galleryGrid = document.getElementById("galleryGrid");
  const prevButton = document.getElementById("galleryCarouselPrev");
  const nextButton = document.getElementById("galleryCarouselNext");
  const counter = document.getElementById("galleryCarouselCounter");
  const caption = document.getElementById("galleryCarouselCaption");

  if (
    !(stage instanceof HTMLElement)
    || !(galleryGrid instanceof HTMLElement)
    || !(prevButton instanceof HTMLButtonElement)
    || !(nextButton instanceof HTMLButtonElement)
  ) {
    return;
  }

  const items = [...galleryGrid.querySelectorAll(".gallery-item")]
    .filter((item) => item instanceof HTMLButtonElement);

  if (!items.length) {
    return;
  }

  let activeIndex = 0;
  let isTransitioning = false;
  let transitionFallbackTimer = 0;

  const clearTransitionFallback = () => {
    if (!transitionFallbackTimer) {
      return;
    }

    window.clearTimeout(transitionFallbackTimer);
    transitionFallbackTimer = 0;
  };

  const clearSlideState = (item, { preservePreparing = false } = {}) => {
    item.classList.remove(
      "is-active",
      "is-entering-from-left",
      "is-entering-from-right",
      "is-leaving-to-left",
      "is-leaving-to-right"
    );

    if (!preservePreparing) {
      item.classList.remove("is-preparing");
    }
  };

  const updateMeta = () => {
    if (counter instanceof HTMLElement) {
      counter.textContent = `${activeIndex + 1} / ${items.length}`;
    }

    if (caption instanceof HTMLElement) {
      caption.textContent = items[activeIndex]?.dataset.galleryCaption || "";
    }
  };

  const applyAccessibilityState = () => {
    items.forEach((item, index) => {
      const isActive = !isTransitioning && index === activeIndex;

      item.dataset.galleryOpenable = isActive ? "true" : "false";
      item.setAttribute("aria-current", index === activeIndex ? "true" : "false");
      item.setAttribute("aria-hidden", index === activeIndex ? "false" : "true");
      item.tabIndex = isActive ? 0 : -1;
    });
  };

  const applyStaticLayout = () => {
    items.forEach((item, index) => {
      clearSlideState(item);

      if (index === activeIndex) {
        item.classList.add("is-active");
      }
    });

    updateMeta();
    applyAccessibilityState();
  };

  const finishTransition = (incoming, outgoing) => {
    clearTransitionFallback();

    items.forEach((item) => {
      item.classList.add("is-preparing");
    });

    if (outgoing instanceof HTMLElement) {
      clearSlideState(outgoing, { preservePreparing: true });
    }

    items.forEach((item) => {
      if (item !== incoming) {
        clearSlideState(item, { preservePreparing: true });
      }
    });

    clearSlideState(incoming, { preservePreparing: true });
    incoming.classList.add("is-active");
    void galleryGrid.offsetWidth;
    items.forEach((item) => {
      item.classList.remove("is-preparing");
    });
    isTransitioning = false;
    applyAccessibilityState();
  };

  const step = (direction) => {
    if (isTransitioning || items.length < 2) {
      return;
    }

    const nextIndex = normalizeIndex(activeIndex + direction, items.length);
    if (nextIndex === activeIndex) {
      return;
    }

    if (reducedMotionQuery.matches) {
      activeIndex = nextIndex;
      applyStaticLayout();
      return;
    }

    const outgoing = items[activeIndex];
    const incoming = items[nextIndex];
    const enterClass = direction > 0 ? "is-entering-from-right" : "is-entering-from-left";
    const leaveClass = direction > 0 ? "is-leaving-to-left" : "is-leaving-to-right";

    clearTransitionFallback();
    items.forEach((item, index) => {
      clearSlideState(item);

      if (index === activeIndex) {
        item.classList.add("is-active");
      }
    });

    isTransitioning = true;
    activeIndex = nextIndex;
    updateMeta();
    applyAccessibilityState();

    incoming.classList.add("is-preparing", enterClass);
    void incoming.offsetWidth;

    const handleTransitionEnd = (event) => {
      if (event.target !== incoming || event.propertyName !== "transform") {
        return;
      }

      incoming.removeEventListener("transitionend", handleTransitionEnd);
      finishTransition(incoming, outgoing);
    };

    incoming.addEventListener("transitionend", handleTransitionEnd);

    requestAnimationFrame(() => {
      outgoing.classList.add(leaveClass);
      incoming.classList.remove("is-preparing", enterClass);
      incoming.classList.add("is-active");
    });

    const transitionTotalMs = Math.max(
      getElementTransitionTotalMs(incoming),
      getElementTransitionTotalMs(outgoing)
    );
    const fallbackMs = transitionTotalMs > 0 ? transitionTotalMs + 80 : 80;

    transitionFallbackTimer = window.setTimeout(() => {
      incoming.removeEventListener("transitionend", handleTransitionEnd);
      finishTransition(incoming, outgoing);
    }, fallbackMs);
  };

  prevButton.addEventListener("click", () => {
    step(-1);
  });

  nextButton.addEventListener("click", () => {
    step(1);
  });

  galleryGrid.addEventListener("keydown", (event) => {
    if (!(event instanceof KeyboardEvent)) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    }
  });

  window.addEventListener("pagehide", clearTransitionFallback, { once: true });

  applyStaticLayout();
}

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const galleryGrid = document.getElementById("galleryGrid");
  const image = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");
  const closeButton = document.getElementById("lightboxClose");
  const prevButton = document.getElementById("lightboxPrev");
  const nextButton = document.getElementById("lightboxNext");

  if (!lightbox || !galleryGrid || !image || !caption || !closeButton || !prevButton || !nextButton) {
    return;
  }

  const open = (index) => {
    appState.lightboxOpen = true;
    appState.lightboxIndex = normalizeIndex(index, weddingConfig.galleryImages.length);
    appState.lightboxLastFocus = document.activeElement;

    lightbox.hidden = false;
    document.body.classList.add("is-modal-open");
    updateLightboxContent(image, caption);
    closeButton.focus();
  };

  const close = () => {
    appState.lightboxOpen = false;
    lightbox.hidden = true;
    document.body.classList.remove("is-modal-open");

    if (appState.lightboxLastFocus instanceof HTMLElement) {
      appState.lightboxLastFocus.focus();
    }
  };

  const goTo = (delta) => {
    appState.lightboxIndex = normalizeIndex(appState.lightboxIndex + delta, weddingConfig.galleryImages.length);
    updateLightboxContent(image, caption);
  };

  galleryGrid.addEventListener("click", (event) => {
    const trigger = event.target instanceof Element
      ? event.target.closest(".gallery-item[data-gallery-openable='true']")
      : null;

    if (!(trigger instanceof HTMLElement)) {
      return;
    }

    const index = Number.parseInt(trigger.dataset.galleryIndex || "", 10);
    if (Number.isNaN(index)) {
      return;
    }

    open(index);
  });

  closeButton.addEventListener("click", close);
  prevButton.addEventListener("click", () => goTo(-1));
  nextButton.addEventListener("click", () => goTo(1));

  lightbox.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.hasAttribute("data-lightbox-close")) {
      close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!appState.lightboxOpen) {
      return;
    }

    if (event.key === "Escape") {
      close();
    }

    if (event.key === "ArrowRight") {
      goTo(1);
    }

    if (event.key === "ArrowLeft") {
      goTo(-1);
    }
  });
}

function updateLightboxContent(imageNode, captionNode) {
  const item = weddingConfig.galleryImages[appState.lightboxIndex];
  if (!item) {
    return;
  }

  attachImageFallback(imageNode, item.caption);
  imageNode.alt = item.alt;
  imageNode.src = item.src;
  captionNode.textContent = item.caption;
}

function renderServices() {
  const servicesGrid = document.getElementById("servicesGrid");
  if (!servicesGrid) {
    return;
  }

  servicesGrid.innerHTML = "";

  weddingConfig.services.forEach((service, index) => {
    const card = document.createElement("article");
    card.className = "service-card service-card--details";
    card.dataset.serviceId = service.id;
    card.dataset.serviceIndex = String(index);

    const image = document.createElement("img");
    image.alt = service.title;
    image.loading = "lazy";
    image.decoding = "async";
    attachImageFallback(image, service.title);
    image.src = service.image;

    const body = document.createElement("div");
    body.className = "service-body";

    const title = document.createElement("h3");
    title.textContent = service.title;

    const description = document.createElement("p");
    description.textContent = service.description;

    const price = document.createElement("p");
    price.className = "service-price";
    price.textContent = service.price;

    const actions = document.createElement("div");
    actions.className = "service-card-actions";

    const detailsButton = document.createElement("button");
    detailsButton.type = "button";
    detailsButton.className = "btn btn-ghost service-details-btn";
    detailsButton.dataset.serviceOpen = service.id;
    detailsButton.setAttribute("aria-label", `Abrir detalles de ${service.title}`);
    detailsButton.setAttribute("aria-haspopup", "dialog");
    detailsButton.setAttribute("aria-controls", "serviceDetailsModal");
    detailsButton.textContent = "Ver más detalles";

    actions.appendChild(detailsButton);
    body.append(title, description, price, actions);
    card.append(image, body);
    servicesGrid.appendChild(card);
  });
}

function setupServicesCarousel() {
  const stage = document.getElementById("servicesCarouselStage");
  const servicesGrid = document.getElementById("servicesGrid");
  const prevButton = document.getElementById("servicesCarouselPrev");
  const nextButton = document.getElementById("servicesCarouselNext");
  const hint = document.getElementById("servicesCarouselHint");

  if (
    !(stage instanceof HTMLElement)
    || !(servicesGrid instanceof HTMLElement)
    || !(prevButton instanceof HTMLButtonElement)
    || !(nextButton instanceof HTMLButtonElement)
    || !(hint instanceof HTMLElement)
  ) {
    return;
  }

  const cards = [...servicesGrid.querySelectorAll(".service-card")]
    .filter((card) => card instanceof HTMLElement);

  if (cards.length <= 1) {
    return;
  }

  stage.classList.add("services-carousel-stage--ready");
  servicesGrid.classList.add("services-grid--carousel-ready");
  prevButton.hidden = false;
  nextButton.hidden = false;
  hint.hidden = false;

  let activeIndex = 0;

  const getWrappedOffset = (index) => {
    let offset = index - activeIndex;
    const half = cards.length / 2;

    if (offset > half) {
      offset -= cards.length;
    } else if (offset < -half) {
      offset += cards.length;
    }

    return offset;
  };

  const updateHeight = () => {
    const tallestCard = cards.reduce((maxHeight, card) => Math.max(maxHeight, card.offsetHeight), 0);
    const minHeight = window.innerWidth <= 760 ? 520 : 460;
    servicesGrid.style.height = `${Math.max(minHeight, Math.ceil(tallestCard + 28))}px`;
  };

  const applyLayout = () => {
    const gridRect = servicesGrid.getBoundingClientRect();
    const gridWidth = Math.max(gridRect.width, 1);

    cards.forEach((card, index) => {
      const offset = getWrappedOffset(index);
      const distance = Math.abs(offset);
      const hidden = distance > 1;
      const x = hidden ? offset * gridWidth * 0.5 : offset * gridWidth * 0.29;
      const y = distance === 0 ? 0 : 24;
      const scale = distance === 0 ? 1 : 0.82;
      const rotate = distance === 0 ? 0 : offset < 0 ? -7 : 7;
      const opacity = hidden ? 0 : distance === 0 ? 1 : 0.72;
      const blur = distance === 0 ? 0 : 0.8;
      const zIndex = hidden ? 1 : distance === 0 ? 4 : 3;
      const detailsButton = card.querySelector("[data-service-open]");

      card.classList.toggle("is-active", offset === 0);
      card.classList.toggle("is-side", distance === 1);
      card.classList.toggle("is-offstage", hidden);
      card.dataset.serviceOpenable = offset === 0 ? "true" : "false";
      card.style.setProperty("--service-float-x", `${x.toFixed(2)}px`);
      card.style.setProperty("--service-float-y", `${y.toFixed(2)}px`);
      card.style.setProperty("--service-float-scale", scale.toFixed(3));
      card.style.setProperty("--service-float-rotate", `${rotate.toFixed(2)}deg`);
      card.style.setProperty("--service-float-opacity", opacity.toFixed(3));
      card.style.setProperty("--service-float-blur", `${blur.toFixed(2)}px`);
      card.style.setProperty("--service-float-z", String(zIndex));
      card.setAttribute("aria-hidden", hidden ? "true" : "false");
      card.tabIndex = offset === 0 ? 0 : -1;

      if (detailsButton instanceof HTMLElement) {
        detailsButton.tabIndex = offset === 0 ? 0 : -1;
      }
    });

    updateHeight();
  };

  const goTo = (index) => {
    activeIndex = normalizeIndex(index, cards.length);
    applyLayout();
  };

  prevButton.addEventListener("click", () => {
    goTo(activeIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    goTo(activeIndex + 1);
  });

  servicesGrid.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const trigger = event.target.closest(".service-card[data-service-id]");
    if (!(trigger instanceof HTMLElement) || trigger.classList.contains("is-active")) {
      return;
    }

    const index = Number(trigger.dataset.serviceIndex);
    if (Number.isNaN(index)) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
    goTo(index);
  }, true);

  servicesGrid.addEventListener("keydown", (event) => {
    if (!(event instanceof KeyboardEvent)) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const card = event.target instanceof Element
      ? event.target.closest(".service-card[data-service-id]")
      : null;

    if (!(card instanceof HTMLElement)) {
      return;
    }

    event.preventDefault();

    if (!card.classList.contains("is-active")) {
      const index = Number(card.dataset.serviceIndex);
      if (!Number.isNaN(index)) {
        goTo(index);
      }
      return;
    }

    const detailsButton = card.querySelector("[data-service-open]");
    if (detailsButton instanceof HTMLButtonElement) {
      detailsButton.click();
    }
  });

  cards.forEach((card) => {
    const image = card.querySelector("img");
    if (image instanceof HTMLImageElement && !image.complete) {
      image.addEventListener("load", applyLayout, { once: true });
      image.addEventListener("error", applyLayout, { once: true });
    }
  });

  window.addEventListener("resize", applyLayout, { passive: true });
  window.addEventListener("pagehide", () => {
    window.removeEventListener("resize", applyLayout);
  }, { once: true });

  requestAnimationFrame(applyLayout);
}

function setupServiceDetailsModal() {
  const servicesGrid = document.getElementById("servicesGrid");
  const modal = document.getElementById("serviceDetailsModal");
  const closeButton = document.getElementById("serviceDetailsClose");
  const kicker = document.getElementById("serviceModalKicker");
  const title = document.getElementById("serviceModalTitle");
  const lead = document.getElementById("serviceModalLead");
  const copy = document.getElementById("serviceModalCopy");
  const highlights = document.getElementById("serviceModalHighlights");
  const mediaGrid = document.getElementById("serviceModalMediaGrid");
  const links = document.getElementById("serviceModalLinks");

  if (!servicesGrid || !modal || !closeButton || !kicker || !title || !lead || !copy || !highlights || !mediaGrid || !links) {
    return;
  }

  const open = (serviceId, triggerElement) => {
    const service = weddingConfig.services.find((entry) => entry.id === serviceId);
    if (!service) {
      return;
    }

    const details = service.details || {};
    let focusTarget = triggerElement instanceof HTMLElement ? triggerElement : null;
    if (focusTarget && !isElementFocusable(focusTarget)) {
      const fallbackButton = focusTarget.querySelector("[data-service-open]");
      if (fallbackButton instanceof HTMLElement) {
        focusTarget = fallbackButton;
      }
    }

    appState.serviceModalOpen = true;
    appState.serviceModalLastFocus = focusTarget || document.activeElement;

    modal.hidden = false;
    document.body.classList.add("is-service-modal-open");

    kicker.textContent = details.kicker || "Servicio en el palacete";
    title.textContent = service.title;
    lead.textContent = details.lead || service.description;

    copy.innerHTML = "";
    const paragraphs = Array.isArray(details.paragraphs) ? details.paragraphs : [];
    paragraphs.forEach((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      copy.appendChild(paragraph);
    });
    copy.hidden = !paragraphs.length;

    highlights.innerHTML = "";
    const points = Array.isArray(details.highlights) ? details.highlights : [];
    points.forEach((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      highlights.appendChild(item);
    });
    highlights.hidden = !points.length;

    mediaGrid.innerHTML = "";
    const images = Array.isArray(details.images) ? details.images : [];
    images.forEach((item) => {
      const figure = document.createElement("figure");
      figure.className = "service-modal-media-card";

      const image = document.createElement("img");
      image.alt = item.alt || service.title;
      image.loading = "lazy";
      image.decoding = "async";
      attachImageFallback(image, item.caption || service.title);
      image.src = item.src || "";

      const caption = document.createElement("figcaption");
      caption.textContent = item.caption || "";

      figure.append(image, caption);
      mediaGrid.appendChild(figure);
    });
    mediaGrid.hidden = !images.length;

    links.innerHTML = "";
    const socialLinks = Array.isArray(details.links) ? details.links : [];
    socialLinks.forEach((item) => {
      const anchor = document.createElement("a");
      anchor.className = "service-modal-link";
      anchor.href = item.url || "#";
      anchor.target = "_blank";
      anchor.rel = "noopener";

      const iconWrap = document.createElement("span");
      iconWrap.className = "service-modal-link-icon";
      iconWrap.setAttribute("aria-hidden", "true");
      iconWrap.appendChild(createServiceLinkIcon(item.type));

      const textWrap = document.createElement("span");
      textWrap.className = "service-modal-link-copy";

      const label = document.createElement("strong");
      label.textContent = item.label || "Enlace";

      const description = document.createElement("small");
      description.textContent = item.description || "";

      textWrap.append(label, description);
      anchor.append(iconWrap, textWrap);
      links.appendChild(anchor);
    });
    links.hidden = !socialLinks.length;

    closeButton.focus();
  };

  const close = () => {
    if (!appState.serviceModalOpen) {
      return;
    }

    appState.serviceModalOpen = false;
    modal.hidden = true;
    document.body.classList.remove("is-service-modal-open");

    if (appState.serviceModalLastFocus instanceof HTMLElement) {
      appState.serviceModalLastFocus.focus();
    }
  };

  servicesGrid.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const buttonTrigger = event.target.closest("[data-service-open]");
    if (buttonTrigger instanceof HTMLElement) {
      open(buttonTrigger.getAttribute("data-service-open"), buttonTrigger);
      return;
    }

    const card = event.target.closest(".service-card[data-service-id]");
    if (card instanceof HTMLElement && card.dataset.serviceOpenable !== "false") {
      open(card.getAttribute("data-service-id"), card);
    }
  });

  closeButton.addEventListener("click", close);

  modal.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.hasAttribute("data-service-modal-close")) {
      close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!appState.serviceModalOpen) {
      return;
    }

    if (event.key === "Escape") {
      close();
      return;
    }

    if (event.key === "Tab") {
      const focusable = getFocusableElements(modal);
      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

function getFocusableElements(container) {
  if (!(container instanceof Element)) {
    return [];
  }

  const selectors = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ];

  return [...container.querySelectorAll(selectors.join(","))]
    .filter((element) => !element.hasAttribute("hidden") && element.getAttribute("aria-hidden") !== "true");
}

function isElementFocusable(element) {
  if (!(element instanceof HTMLElement)) {
    return false;
  }

  const selectors = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ];

  return selectors.some((selector) => element.matches(selector));
}

function createServiceLinkIcon(type) {
  const svgNs = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNs, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("focusable", "false");
  svg.setAttribute("aria-hidden", "true");

  if (type === "instagram") {
    const rect = document.createElementNS(svgNs, "rect");
    rect.setAttribute("x", "3");
    rect.setAttribute("y", "3");
    rect.setAttribute("width", "18");
    rect.setAttribute("height", "18");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "none");
    rect.setAttribute("stroke", "currentColor");
    rect.setAttribute("stroke-width", "1.8");

    const circle = document.createElementNS(svgNs, "circle");
    circle.setAttribute("cx", "12");
    circle.setAttribute("cy", "12");
    circle.setAttribute("r", "4.3");
    circle.setAttribute("fill", "none");
    circle.setAttribute("stroke", "currentColor");
    circle.setAttribute("stroke-width", "1.8");

    const dot = document.createElementNS(svgNs, "circle");
    dot.setAttribute("cx", "17.5");
    dot.setAttribute("cy", "6.7");
    dot.setAttribute("r", "1.1");
    dot.setAttribute("fill", "currentColor");

    svg.append(rect, circle, dot);
    return svg;
  }

  const outerCircle = document.createElementNS(svgNs, "circle");
  outerCircle.setAttribute("cx", "12");
  outerCircle.setAttribute("cy", "12");
  outerCircle.setAttribute("r", "9");
  outerCircle.setAttribute("fill", "none");
  outerCircle.setAttribute("stroke", "currentColor");
  outerCircle.setAttribute("stroke-width", "1.8");

  const meridian = document.createElementNS(svgNs, "path");
  meridian.setAttribute("d", "M12 3.2c2.8 2.5 4.2 5.5 4.2 8.8s-1.4 6.3-4.2 8.8c-2.8-2.5-4.2-5.5-4.2-8.8s1.4-6.3 4.2-8.8z");
  meridian.setAttribute("fill", "none");
  meridian.setAttribute("stroke", "currentColor");
  meridian.setAttribute("stroke-width", "1.6");

  const horizontalTop = document.createElementNS(svgNs, "path");
  horizontalTop.setAttribute("d", "M4 8.5h16");
  horizontalTop.setAttribute("fill", "none");
  horizontalTop.setAttribute("stroke", "currentColor");
  horizontalTop.setAttribute("stroke-width", "1.6");

  const horizontalBottom = document.createElementNS(svgNs, "path");
  horizontalBottom.setAttribute("d", "M4 15.5h16");
  horizontalBottom.setAttribute("fill", "none");
  horizontalBottom.setAttribute("stroke", "currentColor");
  horizontalBottom.setAttribute("stroke-width", "1.6");

  svg.append(outerCircle, meridian, horizontalTop, horizontalBottom);
  return svg;
}

function renderFaq() {
  const faqList = document.getElementById("faqList");
  if (!faqList) {
    return;
  }

  faqList.innerHTML = "";

  weddingConfig.faqs.forEach((item, index) => {
    const article = document.createElement("details");
    article.className = "faq-item";

    const questionId = `faq-question-${index + 1}`;
    const answerId = `faq-answer-${index + 1}`;

    const button = document.createElement("summary");
    button.className = "faq-question";
    button.id = questionId;
    button.textContent = item.question;

    const answer = document.createElement("div");
    answer.className = "faq-answer";
    answer.id = answerId;
    answer.setAttribute("role", "region");
    answer.setAttribute("aria-labelledby", questionId);
    answer.innerHTML = `<p>${escapeHtml(item.answer)}</p>`;

    article.append(button, answer);
    faqList.appendChild(article);
  });
}

function setupFaqSectionToggle() {
  const button = document.getElementById("faqToggleBtn");
  const listWrap = document.getElementById("faqListWrap");
  const faqList = document.getElementById("faqList");
  const collapsedLabel = "Haz clic aquí para desplegar el listado de preguntas frecuentes";
  const expandedLabel = "Haz clic aquí para ocultar el listado de preguntas frecuentes";

  if (
    !(button instanceof HTMLButtonElement)
    || !(listWrap instanceof HTMLElement)
    || !(faqList instanceof HTMLElement)
  ) {
    return;
  }

  if (!faqList.children.length) {
    button.hidden = true;
    return;
  }

  const setExpanded = (expanded) => {
    button.setAttribute("aria-expanded", String(expanded));
    button.textContent = expanded ? expandedLabel : collapsedLabel;
    listWrap.hidden = !expanded;
  };

  setExpanded(false);

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    setExpanded(!isExpanded);
  });
}

function setupLoveStoryToggle() {
  const button = document.getElementById("loveStoryToggle");
  const extendedCopy = document.getElementById("loveStoryExtended");
  if (!button || !extendedCopy) {
    return;
  }

  const setExpanded = (expanded) => {
    button.setAttribute("aria-expanded", String(expanded));
    button.textContent = expanded ? "Leer menos" : "Leer más";
    extendedCopy.hidden = !expanded;
  };

  setExpanded(false);

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    setExpanded(!isExpanded);
  });
}

function setupCopyButtons() {
  const buttons = [...document.querySelectorAll("[data-copy-key]")];
  if (!buttons.length) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      const key = button.getAttribute("data-copy-key");
      const value = key && Object.prototype.hasOwnProperty.call(weddingConfig, key)
        ? weddingConfig[key]
        : "";

      if (!value) {
        showToast("No hay dato para copiar");
        return;
      }

      const copied = await copyToClipboard(value);
      if (!copied) {
        showToast("No se pudo copiar");
        return;
      }

      button.classList.add("is-copied");
      window.setTimeout(() => {
        button.classList.remove("is-copied");
      }, 900);

      showToast("Copiado al portapapeles");
    });
  });
}

function setupForms() {
  const shouldEmbedForms = window.location.protocol !== "file:";
  const rsvpUrls = resolveGoogleFormUrls(weddingConfig.rsvpEmbedUrl, weddingConfig.rsvpViewUrl);
  const qnaUrls = resolveGoogleFormUrls(weddingConfig.qnaEmbedUrl, weddingConfig.qnaViewUrl);

  setEmbedAndLink("rsvpEmbed", shouldEmbedForms ? rsvpUrls.embedUrl : "", "rsvpViewLink", rsvpUrls.viewUrl);
  setEmbedAndLink("qnaEmbed", shouldEmbedForms ? qnaUrls.embedUrl : "", "qnaViewLink", qnaUrls.viewUrl);
}

function setEmbedAndLink(embedId, embedUrl, linkId, linkUrl) {
  const embed = document.getElementById(embedId);
  const link = document.getElementById(linkId);
  const embedWrap = embed instanceof HTMLElement ? embed.closest(".embed-wrap") : null;

  if (embed instanceof HTMLIFrameElement) {
    const hasEmbedUrl = typeof embedUrl === "string" && embedUrl.trim().length > 0;
    embed.src = hasEmbedUrl ? embedUrl : "about:blank";

    if (embedWrap instanceof HTMLElement) {
      embedWrap.hidden = !hasEmbedUrl;
    }
  }

  if (link instanceof HTMLAnchorElement) {
    link.href = linkUrl;
  }
}

function resolveGoogleFormUrls(embedUrl, viewUrl) {
  const rawEmbedUrl = typeof embedUrl === "string" ? embedUrl.trim() : "";
  const rawViewUrl = typeof viewUrl === "string" ? viewUrl.trim() : "";

  const fromView = parseGoogleFormViewUrl(rawViewUrl);
  if (fromView) {
    return fromView;
  }

  const fromEmbed = parseGoogleFormViewUrl(rawEmbedUrl);
  if (fromEmbed) {
    return fromEmbed;
  }

  const fallback = rawViewUrl || rawEmbedUrl || "";
  return { embedUrl: fallback, viewUrl: fallback };
}

function parseGoogleFormViewUrl(rawUrl) {
  if (!rawUrl) {
    return null;
  }

  try {
    const url = new URL(rawUrl);
    if (url.hostname !== "docs.google.com") {
      return null;
    }

    const match = url.pathname.match(/^\/forms(?:\/u\/\d+)?\/d\/e\/([^/]+)\/viewform\/?$/i);
    if (!match) {
      return null;
    }

    const formId = match[1];
    const viewFormUrl = `https://docs.google.com/forms/d/e/${formId}/viewform`;
    const embedFormUrl = `${viewFormUrl}?embedded=true`;

    return {
      embedUrl: embedFormUrl,
      viewUrl: viewFormUrl
    };
  } catch {
    return null;
  }
}

function setupCalendarButton() {
  const button = document.getElementById("addCalendarBtn");
  if (!button) {
    return;
  }

  const start = toGoogleDate(weddingConfig.eventStartISO);
  const end = toGoogleDate(weddingConfig.eventEndISO);

  if (!start || !end) {
    return;
  }

  const calendarUrl = new URL("https://calendar.google.com/calendar/render");
  calendarUrl.searchParams.set("action", "TEMPLATE");
  calendarUrl.searchParams.set("text", weddingConfig.eventTitle);
  calendarUrl.searchParams.set("details", weddingConfig.eventDescription);
  calendarUrl.searchParams.set("location", `${weddingConfig.eventLocationName}, ${weddingConfig.eventAddress}`);
  calendarUrl.searchParams.set("dates", `${start}/${end}`);
  calendarUrl.searchParams.set("ctz", weddingConfig.calendarTimezone);

  button.href = calendarUrl.toString();
}

function setupScrollReveal() {
  const baseRevealItems = [...document.querySelectorAll("[data-reveal]")]
    .filter((item) => item instanceof HTMLElement);
  const fadeOnlySelectors = [
    ".timeline-item",
    ".palace-card",
    ".service-card",
    ".gift-card",
    ".faq-item",
    ".embed-wrap",
    ".count-card",
    ".couple-photo-card"
  ];
  const fadeOnlyItems = [...document.querySelectorAll(fadeOnlySelectors.join(", "))]
    .filter((item) => item instanceof HTMLElement && !item.hasAttribute("data-reveal"));

  fadeOnlyItems.forEach((item) => {
    item.classList.add("scroll-fade-reveal");
  });

  const revealItems = [...new Set([...baseRevealItems, ...fadeOnlyItems])];
  if (!revealItems.length) {
    return;
  }

  const revealNode = (node) => {
    node.classList.add("is-visible");
  };

  if (reducedMotionQuery.matches || typeof window.IntersectionObserver !== "function") {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealNode(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupThanksMagic() {
  const flare = document.getElementById("magicFlare");
  if (!flare) {
    return;
  }

  if (reducedMotionQuery.matches) {
    return;
  }

  window.setTimeout(() => {
    flare.classList.add("is-active");
  }, 180);
}

function createDustParticles(containerId, amount) {
  const container = document.getElementById(containerId);
  if (!container || reducedMotionQuery.matches) {
    return;
  }

  container.innerHTML = "";

  for (let i = 0; i < amount; i += 1) {
    const particle = document.createElement("span");
    particle.className = "dust-particle";
    particle.style.setProperty("--left", `${randomBetween(4, 96)}%`);
    particle.style.setProperty("--top", `${randomBetween(58, 98)}%`);
    particle.style.setProperty("--size", `${randomBetween(1.5, 3.8)}px`);
    particle.style.setProperty("--duration", `${randomBetween(7, 13)}s`);
    particle.style.setProperty("--delay", `${randomBetween(0, 12)}s`);
    particle.style.setProperty("--drift", `${randomBetween(-22, 22)}px`);
    container.appendChild(particle);
  }
}

function attachStaticImageFallbacks() {
  const palaceImage = document.getElementById("palaceImage");
  const countdownStopwatch = document.getElementById("countdownStopwatch");
  const locationCarriages = document.querySelector(".location-deco-carriages");
  const titleCardImage = document.getElementById("titleCardImage");
  const welcomeLetterImage = document.getElementById("welcomeLetterImage");
  const introPhotoOne = document.getElementById("introPhotoOne");
  const introPhotoTwo = document.getElementById("introPhotoTwo");

  if (countdownStopwatch) {
    attachImageFallback(countdownStopwatch, "Cronómetro antiguo");
  }

  if (locationCarriages) {
    attachImageFallback(locationCarriages, "Carrozas");
  }

  if (titleCardImage) {
    attachImageFallback(titleCardImage, "Vic y Cris");
  }

  if (palaceImage) {
    attachImageFallback(palaceImage, "Palacete");
  }

  if (welcomeLetterImage) {
    attachImageFallback(welcomeLetterImage, "Nuestro día más especial");
  }

  if (introPhotoOne) {
    attachImageFallback(introPhotoOne, "Vic y Cris");
  }

  if (introPhotoTwo) {
    attachImageFallback(introPhotoTwo, "Vic y Cris");
  }
}

function attachImageFallback(image, label) {
  if (!(image instanceof HTMLImageElement)) {
    return;
  }

  image.dataset.fallbackLabel = label || "Imagen";
  image.dataset.isPlaceholder = "false";

  if (image.dataset.fallbackBound !== "true") {
    image.dataset.fallbackBound = "true";
    image.addEventListener("error", () => {
      if (image.dataset.isPlaceholder === "true") {
        return;
      }

      image.dataset.isPlaceholder = "true";
      image.src = buildPlaceholderImage(image.dataset.fallbackLabel || "Imagen");
    });
  }

  const hasDefinedSource = Boolean(image.getAttribute("src"));
  if (hasDefinedSource && image.complete && image.naturalWidth === 0) {
    image.dataset.isPlaceholder = "true";
    image.src = buildPlaceholderImage(image.dataset.fallbackLabel || "Imagen");
  }
}

function buildPlaceholderImage(label) {
  const safeLabel = escapeHtml(label || "Imagen");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="640" viewBox="0 0 960 640">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#2e2215"/>
          <stop offset="100%" stop-color="#110d09"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <rect x="18" y="18" width="924" height="604" rx="20" fill="none" stroke="#7f6339" stroke-width="2"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#e3c894" font-size="42" font-family="Cinzel, serif">${safeLabel}</text>
      <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" fill="#bca784" font-size="24" font-family="Crimson Pro, serif" font-style="italic">Añade tu imagen en assets/</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function showToast(message) {
  const toast = document.getElementById("copyToast");
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1450);
}

async function copyToClipboard(value) {
  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch (_error) {
    // Continúa con fallback para navegadores con restricciones.
  }

  const temp = document.createElement("textarea");
  temp.value = value;
  temp.setAttribute("readonly", "");
  temp.style.position = "fixed";
  temp.style.opacity = "0";
  document.body.appendChild(temp);
  temp.focus();
  temp.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch (_error) {
    copied = false;
  }

  document.body.removeChild(temp);
  return copied;
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value;
  }
}

function setHref(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.href = value;
  }
}

function formatEventDate(isoString) {
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
    timeZone: weddingConfig.calendarTimezone
  });

  const value = formatter.format(date);
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function toGoogleDate(isoString) {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function normalizeIndex(index, length) {
  if (!length) {
    return 0;
  }

  return ((index % length) + length) % length;
}

function formatUnit(value) {
  return String(Math.max(0, value)).padStart(2, "0");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function parseCssTimeToMs(rawValue) {
  const value = String(rawValue ?? "").trim();
  if (!value) {
    return 0;
  }

  if (value.endsWith("ms")) {
    const parsedMs = Number.parseFloat(value.slice(0, -2));
    return Number.isFinite(parsedMs) ? Math.max(0, parsedMs) : 0;
  }

  if (value.endsWith("s")) {
    const parsedSeconds = Number.parseFloat(value.slice(0, -1));
    return Number.isFinite(parsedSeconds) ? Math.max(0, parsedSeconds * 1000) : 0;
  }

  const parsedNumeric = Number.parseFloat(value);
  return Number.isFinite(parsedNumeric) ? Math.max(0, parsedNumeric) : 0;
}

function getElementTransitionTotalMs(element) {
  if (!(element instanceof Element)) {
    return 0;
  }

  const styles = window.getComputedStyle(element);
  const durationValues = String(styles.transitionDuration || "0s")
    .split(",")
    .map((entry) => parseCssTimeToMs(entry));
  const delayValues = String(styles.transitionDelay || "0s")
    .split(",")
    .map((entry) => parseCssTimeToMs(entry));
  const durations = durationValues.length ? durationValues : [0];
  const delays = delayValues.length ? delayValues : [0];
  const totalCount = Math.max(durations.length, delays.length);
  let maxTotalMs = 0;

  for (let index = 0; index < totalCount; index += 1) {
    const durationMs = durations[index % durations.length] || 0;
    const delayMs = delays[index % delays.length] || 0;
    maxTotalMs = Math.max(maxTotalMs, durationMs + delayMs);
  }

  return maxTotalMs;
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
