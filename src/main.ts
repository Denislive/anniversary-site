import Typed from "typed.js";

// Reveal messages on button click
const cards = document.querySelectorAll<HTMLDivElement>(".card");

cards.forEach((card) => {
  const btn = card.querySelector<HTMLButtonElement>("button");
  const text = card.querySelector<HTMLParagraphElement>(".text");

  if (btn && text) {
    btn.addEventListener("click", () => {
      text.classList.toggle("hidden");

      // Animate typing effect using Typed.js when revealed
      if (!text.classList.contains("hidden")) {
        new Typed(text, {
          strings: [text.textContent || ""],
          typeSpeed: 60,
          showCursor: false,
        });
      }
    });
  }
});