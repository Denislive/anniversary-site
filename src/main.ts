import Typed from "typed.js";

// Audio handling
const audio = document.getElementById("bg-audio") as HTMLAudioElement;
const overlay = document.getElementById("audio-permission-overlay") as HTMLDivElement;
const allowBtn = document.getElementById("allow-audio-btn") as HTMLButtonElement;
const musicBtn = document.getElementById("music-toggle-btn") as HTMLButtonElement;
const musicIcon = musicBtn.querySelector("i") as HTMLElement;

const startAudio = () => {
  audio.play().then(() => {
    overlay.style.display = "none";
    musicBtn.classList.remove("hidden");
    if (musicIcon) musicIcon.className = "pi pi-volume-up";
  }).catch(err => {
    console.warn("Autoplay blocked, waiting for interaction:", err);
    overlay.style.display = "flex";
  });
};

// Try autoplay on load
window.addEventListener("load", () => startAudio());

// Overlay button
allowBtn.addEventListener("click", () => startAudio());

// Toggle button
musicBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    if (musicIcon) musicIcon.className = "pi pi-volume-up";
  } else {
    audio.pause();
    if (musicIcon) musicIcon.className = "pi pi-volume-off";
  }
});

// Cards with typed.js
const cards = document.querySelectorAll<HTMLDivElement>(".card");

cards.forEach(card => {
  const btn = card.querySelector<HTMLButtonElement>("button");
  const text = card.querySelector<HTMLParagraphElement>(".text");
  if (btn && text) {
    btn.addEventListener("click", () => {
      text.classList.toggle("hidden");
      if (!text.classList.contains("hidden")) {
        const content = text.textContent || "";
        text.textContent = "";
        new Typed(text, { strings: [content], typeSpeed: 40, showCursor: false });
      }
    });
  }
});