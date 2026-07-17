const header = document.querySelector("[data-header]");
const progress = document.querySelector(".scroll-progress span");
const menuButton = document.querySelector(".menu-toggle");
const menuBackdrop = document.querySelector(".menu-backdrop");
const navigation = document.querySelector(".site-nav");
const motionStory = document.querySelector("[data-motion-story]");
const storyFloats = [...document.querySelectorAll("[data-story-float]")];
const storyWords = [...document.querySelectorAll(".motion-word")];
const storyProgress = document.querySelector(".motion-story-progress i");
const careSequence = document.querySelector("[data-care-sequence]");
const careFrames = [...document.querySelectorAll("[data-care-frame]")];
const careNav = [...document.querySelectorAll("[data-care-nav]")];
const careProgress = document.querySelector(".care-sequence-progress i");
const parallaxItems = [...document.querySelectorAll("[data-parallax]")];
const primaryHeroCTA = document.querySelector(".hero-actions .button");
const fixedCTATrigger = document.querySelector(".decision-strip") || primaryHeroCTA;
const testimonialRail = document.querySelector(".testimonial-rail");
const testimonialCards = [...document.querySelectorAll(".testimonial-card")];
const testimonialCurrent = document.querySelector("[data-testimonial-current]");
const testimonialPrev = document.querySelector("[data-testimonial-prev]");
const testimonialNext = document.querySelector("[data-testimonial-next]");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileQuery = window.matchMedia("(max-width: 860px)");

let prefersReducedMotion = reducedMotionQuery.matches;
let isMobile = mobileQuery.matches;
let motionFrameRequested = false;
let measureFrameRequested = false;
let storyBounds = null;
let careBounds = null;
let pageScrollRange = 1;

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const getSectionBounds = (element) => {
  if (!element) return null;
  const rect = element.getBoundingClientRect();
  const start = window.scrollY + rect.top;
  const height = element.offsetHeight;

  return {
    start,
    end: start + height,
    travel: Math.max(1, height - window.innerHeight),
  };
};

const measureMotion = () => {
  measureFrameRequested = false;
  storyBounds = getSectionBounds(motionStory);
  careBounds = getSectionBounds(careSequence);
  pageScrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
};

const sectionProgress = (bounds, scrollTop) => {
  if (!bounds) return 0;
  return clamp((scrollTop - bounds.start) / bounds.travel);
};

const isSectionNearViewport = (bounds, scrollTop) => {
  if (!bounds) return false;
  return scrollTop >= bounds.start - window.innerHeight && scrollTop <= bounds.end + window.innerHeight;
};

const updateStory = (scrollTop) => {
  if (!motionStory || prefersReducedMotion) return;

  const isActive = isSectionNearViewport(storyBounds, scrollTop);
  motionStory.classList.toggle("is-active", isActive);
  if (!isActive) return;

  const value = sectionProgress(storyBounds, scrollTop);
  const wordCenters = [0, 0.5, 1];
  const wordTravel = isMobile ? 22 : 36;
  const floatAmplitude = isMobile ? 0.32 : 1;
  const floatScale = isMobile ? 0.58 : 1;

  storyWords.forEach((word, index) => {
    const distance = Math.abs(value - wordCenters[index]);
    const opacity = clamp(1 - distance / (isMobile ? 0.34 : 0.3));
    const direction = value < wordCenters[index] ? 1 : -1;
    const translate = direction * (1 - opacity) * wordTravel;
    const scale = (isMobile ? 0.965 : 0.94) + opacity * (isMobile ? 0.035 : 0.06);

    word.style.opacity = opacity.toFixed(3);
    word.style.transform = `translate3d(0, ${translate}px, 0) scale(${scale})`;
  });

  storyFloats.forEach((item) => {
    if (isMobile && item.classList.contains("story-float-d")) return;

    const x = Number(item.dataset.x || 0);
    const y = Number(item.dataset.y || 0);
    const rotation = Number(item.dataset.r || 0);
    const scale = Number(item.dataset.s || 0);
    const centered = value - 0.5;
    const visibility = clamp((isMobile ? 0.3 : 0.18) + Math.sin(Math.PI * value) * 1.05);
    const translateX = x * centered * floatAmplitude;
    const translateY = y * centered * floatAmplitude;
    const rotationValue = rotation * centered * (isMobile ? 0.52 : 1);
    const scaleValue = 1 + scale * Math.sin(Math.PI * value) * floatScale;

    item.style.opacity = visibility.toFixed(3);
    item.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotationValue}deg) scale(${scaleValue})`;
  });

  if (storyProgress) storyProgress.style.transform = `scaleY(${value})`;
};

const updateCareSequence = (scrollTop) => {
  if (!careSequence || prefersReducedMotion) return;

  const isActive = isSectionNearViewport(careBounds, scrollTop);
  careSequence.classList.toggle("is-active", isActive);
  if (!isActive) return;

  const value = sectionProgress(careBounds, scrollTop);
  const activeIndex = Math.min(careFrames.length - 1, Math.floor(value * careFrames.length + 0.0001));
  const frameTravel = isMobile ? 28 : 46;
  const restingScale = isMobile ? 0.988 : 0.975;

  careFrames.forEach((frame, index) => {
    const isActiveFrame = index === activeIndex;
    const direction = index > activeIndex ? 1 : -1;

    frame.classList.toggle("active", isActiveFrame);
    frame.setAttribute("aria-hidden", String(!isActiveFrame));
    frame.style.opacity = isActiveFrame ? "1" : "0";
    frame.style.zIndex = isActiveFrame ? "5" : "0";
    frame.style.transform = isActiveFrame
      ? "translate3d(0, 0, 0) scale(1)"
      : `translate3d(0, ${direction * frameTravel}px, 0) scale(${restingScale})`;
  });

  careNav.forEach((button, index) => {
    const isActiveButton = index === activeIndex;
    button.classList.toggle("active", isActiveButton);
    if (isActiveButton) button.setAttribute("aria-current", "step");
    else button.removeAttribute("aria-current");
  });

  if (careProgress) careProgress.style.transform = `scaleX(${value})`;
};

const clearParallax = () => {
  parallaxItems.forEach((item) => item.style.removeProperty("transform"));
};

const updateParallax = () => {
  if (prefersReducedMotion || isMobile) return;

  parallaxItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.bottom < -window.innerHeight || rect.top > window.innerHeight * 2) return;

    const speed = Number(item.dataset.parallax || 0);
    const distance = rect.top + rect.height / 2 - window.innerHeight / 2;
    item.style.transform = `translate3d(0, ${distance * speed}px, 0) scale(1.04)`;
  });
};

const updateScrollUI = () => {
  motionFrameRequested = false;
  if (document.hidden) return;

  const top = window.scrollY;
  const value = clamp(top / pageScrollRange);

  header?.classList.toggle("scrolled", top > 24);
  if (progress) progress.style.transform = `scaleX(${value})`;

  updateStory(top);
  updateCareSequence(top);
  updateParallax();
};

const requestMotionFrame = () => {
  if (motionFrameRequested) return;
  motionFrameRequested = true;
  window.requestAnimationFrame(updateScrollUI);
};

const scheduleMeasurement = () => {
  if (measureFrameRequested) return;
  measureFrameRequested = true;
  window.requestAnimationFrame(() => {
    measureMotion();
    requestMotionFrame();
  });
};

const handleEnvironmentChange = () => {
  prefersReducedMotion = reducedMotionQuery.matches;
  isMobile = mobileQuery.matches;
  if (prefersReducedMotion || isMobile) clearParallax();
  if (!isMobile) closeMenu(false);
  scheduleMeasurement();
};

document.querySelectorAll("img").forEach((image) => {
  image.decoding = "async";
  if (!image.closest(".hero") && !image.closest(".site-header")) image.loading = "lazy";
});

let lastMenuFocus = null;

const closeMenu = (restoreFocus = true) => {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("open");
  menuBackdrop?.classList.remove("open");
  document.body.classList.remove("menu-open");
  if (restoreFocus && lastMenuFocus instanceof HTMLElement) lastMenuFocus.focus();
};

const openMenu = () => {
  if (!menuButton || !navigation) return;
  lastMenuFocus = document.activeElement;
  menuButton.setAttribute("aria-expanded", "true");
  navigation.classList.add("open");
  menuBackdrop?.classList.add("open");
  document.body.classList.add("menu-open");
  window.requestAnimationFrame(() => navigation.querySelector("a")?.focus());
};

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  if (isOpen) closeMenu();
  else openMenu();
});

navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
menuBackdrop?.addEventListener("click", closeMenu);

document.addEventListener("keydown", (event) => {
  if (menuButton?.getAttribute("aria-expanded") !== "true") return;

  if (event.key === "Escape") {
    event.preventDefault();
    closeMenu();
    return;
  }

  if (event.key !== "Tab" || !navigation) return;
  const focusable = [menuButton, ...navigation.querySelectorAll("a")];
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

if (fixedCTATrigger && "IntersectionObserver" in window) {
  const mobileCTAObserver = new IntersectionObserver(
    ([entry]) => {
      const hasPassedTrigger = !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
      document.body.classList.toggle("show-mobile-cta", hasPassedTrigger);
    },
    { threshold: 0 },
  );
  mobileCTAObserver.observe(fixedCTATrigger);
} else if (!("IntersectionObserver" in window)) {
  document.body.classList.add("show-mobile-cta");
}

const updateTestimonialCounter = () => {
  if (!testimonialRail || !testimonialCards.length || !testimonialCurrent) return;
  const railLeft = testimonialRail.getBoundingClientRect().left;
  const index = testimonialCards.reduce((closest, card, cardIndex) => {
    const distance = Math.abs(card.getBoundingClientRect().left - railLeft);
    return distance < closest.distance ? { index: cardIndex, distance } : closest;
  }, { index: 0, distance: Number.POSITIVE_INFINITY }).index;

  testimonialCurrent.textContent = String(index + 1).padStart(2, "0");
  testimonialPrev?.toggleAttribute("disabled", index === 0);
  testimonialNext?.toggleAttribute("disabled", index === testimonialCards.length - 1);
};

const moveTestimonial = (direction) => {
  if (!testimonialRail || !testimonialCards.length) return;
  const current = Number(testimonialCurrent?.textContent || 1) - 1;
  const next = clamp(current + direction, 0, testimonialCards.length - 1);
  const target = testimonialCards[next];
  const targetLeft = target.offsetLeft;

  if (testimonialCurrent) testimonialCurrent.textContent = String(next + 1).padStart(2, "0");
  testimonialPrev?.toggleAttribute("disabled", next === 0);
  testimonialNext?.toggleAttribute("disabled", next === testimonialCards.length - 1);
  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "nearest",
    inline: "start",
  });

  window.setTimeout(() => {
    if (Math.abs(testimonialRail.scrollLeft - targetLeft) > 8) testimonialRail.scrollLeft = targetLeft;
  }, prefersReducedMotion ? 0 : 520);
};

testimonialPrev?.addEventListener("click", () => moveTestimonial(-1));
testimonialNext?.addEventListener("click", () => moveTestimonial(1));
testimonialRail?.addEventListener("scroll", () => window.requestAnimationFrame(updateTestimonialCounter), { passive: true });
updateTestimonialCounter();

careNav.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (!careSequence || !careBounds) return;

    const target = careBounds.start + careBounds.travel * (index / Math.max(1, careFrames.length - 1));
    window.scrollTo({ top: target, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
});

window.addEventListener("scroll", requestMotionFrame, { passive: true });
window.addEventListener("resize", scheduleMeasurement, { passive: true });
window.visualViewport?.addEventListener("resize", scheduleMeasurement, { passive: true });
window.addEventListener("load", () => {
  scheduleMeasurement();

  if (window.location.hash) {
    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    window.requestAnimationFrame(() => target?.scrollIntoView({ block: "start", behavior: "auto" }));
  }
}, { once: true });
document.addEventListener("load", (event) => {
  if (event.target instanceof HTMLImageElement) scheduleMeasurement();
}, true);
const listenToMediaQuery = (query, handler) => {
  if (query.addEventListener) query.addEventListener("change", handler);
  else query.addListener(handler);
};

listenToMediaQuery(reducedMotionQuery, handleEnvironmentChange);
listenToMediaQuery(mobileQuery, handleEnvironmentChange);
document.fonts?.ready.then(scheduleMeasurement);

measureMotion();
requestMotionFrame();

const revealItems = document.querySelectorAll(".reveal");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8%" },
  );

  revealItems.forEach((item) => observer.observe(item));
}

document.querySelectorAll(".faq-list details").forEach((details) => {
  details.addEventListener("toggle", () => {
    if (!details.open) return;
    document.querySelectorAll(".faq-list details").forEach((other) => {
      if (other !== details) other.removeAttribute("open");
    });
  });
});

const cursor = document.querySelector(".motion-cursor");
const finePointer = window.matchMedia("(pointer: fine)").matches;

if (cursor && finePointer && !prefersReducedMotion) {
  document.body.classList.add("has-motion-cursor");
  let pointerX = -100;
  let pointerY = -100;
  let cursorX = -100;
  let cursorY = -100;
  let cursorAnimating = false;

  const animateCursor = () => {
    cursorX += (pointerX - cursorX) * 0.18;
    cursorY += (pointerY - cursorY) * 0.18;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    if (Math.abs(pointerX - cursorX) > 0.1 || Math.abs(pointerY - cursorY) > 0.1) {
      window.requestAnimationFrame(animateCursor);
    } else {
      cursorAnimating = false;
    }
  };

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    cursor.style.opacity = "1";
    if (!cursorAnimating) {
      cursorAnimating = true;
      window.requestAnimationFrame(animateCursor);
    }
  }, { passive: true });

  document.documentElement.addEventListener("pointerleave", () => {
    cursor.style.opacity = "0";
  });

  document.querySelectorAll("a, button, summary").forEach((element) => {
    element.addEventListener("pointerenter", () => cursor.classList.add("hovering"));
    element.addEventListener("pointerleave", () => cursor.classList.remove("hovering"));
  });
}
