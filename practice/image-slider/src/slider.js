const slider = document.querySelector("#image-slider-images");
const dots = document.querySelectorAll(".nav-dot");
let curImage = 0;

function resetNavDots() {
  dots.forEach((dot) => {
    dot.classList.remove("nav-dot-cur");
  });
}

function setActiveNavDot(dotNum) {
  dots[dotNum].classList.add("nav-dot-cur");
}

function slideImage() {
  slider.style.right = `${500 * curImage}px`;
  resetNavDots();
  setActiveNavDot(curImage);
}

function nextImage() {
  curImage += 1;
  if (curImage === 7) {
    curImage = 0;
  }
  slideImage();
}

function prevImage() {
  curImage -= 1;
  if (curImage === -1) {
    curImage = 6;
  }
  slideImage();
}

function jumpToImage(imageNum) {
  curImage = imageNum;
  slideImage();
}

export { nextImage, prevImage, jumpToImage };
