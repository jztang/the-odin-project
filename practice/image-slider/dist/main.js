/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nextImage": () => (/* binding */ nextImage),
/* harmony export */   "prevImage": () => (/* binding */ prevImage),
/* harmony export */   "jumpToImage": () => (/* binding */ jumpToImage)
/* harmony export */ });
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/slider.js");


let sliderTimer = setInterval(_slider__WEBPACK_IMPORTED_MODULE_0__.nextImage, 5000);

function resetTimer() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(_slider__WEBPACK_IMPORTED_MODULE_0__.nextImage, 5000);
}

document.querySelector("#prev-image-btn").addEventListener("click", () => {
  (0,_slider__WEBPACK_IMPORTED_MODULE_0__.prevImage)();
  resetTimer();
});

document.querySelector("#next-image-btn").addEventListener("click", () => {
  (0,_slider__WEBPACK_IMPORTED_MODULE_0__.nextImage)();
  resetTimer();
});

const dots = document.querySelectorAll(".nav-dot");
for (let i = 0; i < dots.length; i += 1) {
  dots[i].addEventListener("click", () => {
    (0,_slider__WEBPACK_IMPORTED_MODULE_0__.jumpToImage)(i);
    resetTimer();
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsZUFBZTtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRTZDOzs7Ozs7O1VDekM3QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjZEOztBQUU3RCw4QkFBOEIsOENBQVM7O0FBRXZDO0FBQ0E7QUFDQSw0QkFBNEIsOENBQVM7QUFDckM7O0FBRUE7QUFDQSxFQUFFLGtEQUFTO0FBQ1g7QUFDQSxDQUFDOztBQUVEO0FBQ0EsRUFBRSxrREFBUztBQUNYO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQSxJQUFJLG9EQUFXO0FBQ2Y7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvc2xpZGVyLmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ltYWdlLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlLXNsaWRlci1pbWFnZXNcIik7XG5jb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtZG90XCIpO1xubGV0IGN1ckltYWdlID0gMDtcblxuZnVuY3Rpb24gcmVzZXROYXZEb3RzKCkge1xuICBkb3RzLmZvckVhY2goKGRvdCkgPT4ge1xuICAgIGRvdC5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LWRvdC1jdXJcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVOYXZEb3QoZG90TnVtKSB7XG4gIGRvdHNbZG90TnVtXS5jbGFzc0xpc3QuYWRkKFwibmF2LWRvdC1jdXJcIik7XG59XG5cbmZ1bmN0aW9uIHNsaWRlSW1hZ2UoKSB7XG4gIHNsaWRlci5zdHlsZS5yaWdodCA9IGAkezUwMCAqIGN1ckltYWdlfXB4YDtcbiAgcmVzZXROYXZEb3RzKCk7XG4gIHNldEFjdGl2ZU5hdkRvdChjdXJJbWFnZSk7XG59XG5cbmZ1bmN0aW9uIG5leHRJbWFnZSgpIHtcbiAgY3VySW1hZ2UgKz0gMTtcbiAgaWYgKGN1ckltYWdlID09PSA3KSB7XG4gICAgY3VySW1hZ2UgPSAwO1xuICB9XG4gIHNsaWRlSW1hZ2UoKTtcbn1cblxuZnVuY3Rpb24gcHJldkltYWdlKCkge1xuICBjdXJJbWFnZSAtPSAxO1xuICBpZiAoY3VySW1hZ2UgPT09IC0xKSB7XG4gICAgY3VySW1hZ2UgPSA2O1xuICB9XG4gIHNsaWRlSW1hZ2UoKTtcbn1cblxuZnVuY3Rpb24ganVtcFRvSW1hZ2UoaW1hZ2VOdW0pIHtcbiAgY3VySW1hZ2UgPSBpbWFnZU51bTtcbiAgc2xpZGVJbWFnZSgpO1xufVxuXG5leHBvcnQgeyBuZXh0SW1hZ2UsIHByZXZJbWFnZSwganVtcFRvSW1hZ2UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbmV4dEltYWdlLCBwcmV2SW1hZ2UsIGp1bXBUb0ltYWdlIH0gZnJvbSBcIi4vc2xpZGVyXCI7XG5cbmxldCBzbGlkZXJUaW1lciA9IHNldEludGVydmFsKG5leHRJbWFnZSwgNTAwMCk7XG5cbmZ1bmN0aW9uIHJlc2V0VGltZXIoKSB7XG4gIGNsZWFySW50ZXJ2YWwoc2xpZGVyVGltZXIpO1xuICBzbGlkZXJUaW1lciA9IHNldEludGVydmFsKG5leHRJbWFnZSwgNTAwMCk7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldi1pbWFnZS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcHJldkltYWdlKCk7XG4gIHJlc2V0VGltZXIoKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHQtaW1hZ2UtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5leHRJbWFnZSgpO1xuICByZXNldFRpbWVyKCk7XG59KTtcblxuY29uc3QgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWRvdFwiKTtcbmZvciAobGV0IGkgPSAwOyBpIDwgZG90cy5sZW5ndGg7IGkgKz0gMSkge1xuICBkb3RzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAganVtcFRvSW1hZ2UoaSk7XG4gICAgcmVzZXRUaW1lcigpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==