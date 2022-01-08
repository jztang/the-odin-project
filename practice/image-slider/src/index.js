import { nextImage, prevImage, jumpToImage } from "./slider";

let sliderTimer = setInterval(nextImage, 5000);

function resetTimer() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(nextImage, 5000);
}

document.querySelector("#prev-image-btn").addEventListener("click", () => {
  prevImage();
  resetTimer();
});

document.querySelector("#next-image-btn").addEventListener("click", () => {
  nextImage();
  resetTimer();
});

const dots = document.querySelectorAll(".nav-dot");
for (let i = 0; i < dots.length; i += 1) {
  dots[i].addEventListener("click", () => {
    jumpToImage(i);
    resetTimer();
  });
}
