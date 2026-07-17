const header = document.querySelector("[data-header]");
const progress = document.querySelector(".scroll-progress span");
const menuButton = document.querySelector(".menu-toggle");
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
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
let motionFrameRequested = false;

const sectionProgress = (element) => {
  if (!element) return 0;
  const rect = element.getBoundingClientRect();
  const travel = Math.max(1, rect.height - window.innerHeight);
  return clamp(-rect.top / travel);
};

const updateStory = () => {
  if (!motionStory || prefersReducedMotion) return;

  const value = sectionProgress(motionStory);
  const wordCenters = [0, 0.5, 1];

  storyWords.forEach((word, index) => {
    const distance = Math.abs(value - wordCenters[index]);
    const opacity = clamp(1 - distance / 0.3);
    const direction = value < wordCenters[index] ? 1 : -1;
    const translate = direction * (1 - opacity) * 36;

    word.style.opacity = opacity.toFixed(3);
    word.style.transform = `translate3d(0, ${translate}px, 0) scale(${0.94 + opacity * 0.06})`;
  });

  storyFloats.forEach((item) => {
    const x = Number(item.dataset.x || 0);
    const y = Number(item.dataset.y || 0);
    const rotation = Number(item.dataset.r || 0);
    const scale = Number(item.dataset.s || 0);
    const centered = value - 0.5;
    const visibility = clamp(0.18 + Math.sin(Math.PI * value) * 1.05);

    item.style.opacity = visibility.toFixed(3);
    item.style.transform = `translate3d(${x * centered}px, ${y * centered}px, 0) rotate(${rotation * centered}deg) scale(${1 + scale * Math.sin(Math.PI * value)})`;
  });

  if (storyProgress) storyProgress.style.transform = `scaleY(${value})`;
};

const updateCareSequence = () => {
  if (!careSequence || prefersReducedMotion || window.innerWidth <= 860) return;

  const value = sectionProgress(careSequence);
  const activeIndex = Math.min(careFrames.length - 1, Math.floor(value * careFrames.length));

  careFrames.forEach((frame, index) => {
    const isActive = index === activeIndex;
    const direction = index > activeIndex ? 1 : -1;

    frame.classList.toggle("active", isActive);
    frame.style.opacity = isActive ? "1" : "0";
    frame.style.zIndex = isActive ? "5" : "0";
    frame.style.transform = isActive
      ? "translate3d(0, 0, 0) scale(1)"
      : `translate3d(0, ${direction * 46}px, 0) scale(0.975)`;
  });

  careNav.forEach((button, index) => button.classList.toggle("active", index === activeIndex));
  if (careProgress) careProgress.style.transform = `scaleX(${value})`;
};

const updateParallax = () => {
  if (prefersReducedMotion || window.innerWidth <= 860) {
    parallaxItems.forEach((item) => item.style.removeProperty("transform"));
    return;
  }

  parallaxItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.bottom < -window.innerHeight || rect.top > window.innerHeight * 2) return;
    const speed = Number(item.dataset.parallax || 0);
    const distance = rect.top + rect.height / 2 - window.innerHeight / 2;
    const y = distance * speed;
    item.style.transform = `translate3d(0, ${y}px, 0) scale(1.04)`;
  });
};

const updateScrollUI = () => {
  motionFrameRequested = false;
  const top = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? Math.min(100, (top / max) * 100) : 0;

  header?.classList.toggle("scrolled", top > 24);
  if (progress) progress.style.width = `${value}%`;

  updateStory();
  updateCareSequence();
  updateParallax();
};

const requestMotionFrame = () => {
  if (motionFrameRequested) return;
  motionFrameRequested = true;
  window.requestAnimationFrame(updateScrollUI);
};

const closeMenu = () => {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("open");
  document.body.classList.remove("menu-open");
};

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

careNav.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (!careSequence || window.innerWidth <= 860) return;
    const travel = careSequence.offsetHeight - window.innerHeight;
    const target = careSequence.offsetTop + travel * (index / Math.max(1, careFrames.length - 1));
    window.scrollTo({ top: target, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
});

window.addEventListener("scroll", requestMotionFrame, { passive: true });
window.addEventListener("resize", requestMotionFrame);
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
