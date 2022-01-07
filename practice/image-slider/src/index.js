import { nextImage, prevImage, jumpToImage } from "./slider";

document.querySelector("#prev-image-btn").addEventListener("click", () => {
  prevImage();
});

document.querySelector("#next-image-btn").addEventListener("click", () => {
  nextImage();
});

const dots = document.querySelectorAll(".nav-dot");
for (let i = 0; i < dots.length; i += 1) {
  dots[i].addEventListener("click", () => {
    jumpToImage(i);
  });
}
