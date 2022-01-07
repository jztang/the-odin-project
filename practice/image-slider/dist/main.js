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


document.querySelector("#prev-image-btn").addEventListener("click", () => {
  (0,_slider__WEBPACK_IMPORTED_MODULE_0__.prevImage)();
});

document.querySelector("#next-image-btn").addEventListener("click", () => {
  (0,_slider__WEBPACK_IMPORTED_MODULE_0__.nextImage)();
});

const dots = document.querySelectorAll(".nav-dot");
for (let i = 0; i < dots.length; i += 1) {
  dots[i].addEventListener("click", () => {
    (0,_slider__WEBPACK_IMPORTED_MODULE_0__.jumpToImage)(i);
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsZUFBZTtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRTZDOzs7Ozs7O1VDekM3QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjZEOztBQUU3RDtBQUNBLEVBQUUsa0RBQVM7QUFDWCxDQUFDOztBQUVEO0FBQ0EsRUFBRSxrREFBUztBQUNYLENBQUM7O0FBRUQ7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0EsSUFBSSxvREFBVztBQUNmLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLXNsaWRlci8uL3NyYy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ltYWdlLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1hZ2Utc2xpZGVyLWltYWdlc1wiKTtcbmNvbnN0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1kb3RcIik7XG5sZXQgY3VySW1hZ2UgPSAwO1xuXG5mdW5jdGlvbiByZXNldE5hdkRvdHMoKSB7XG4gIGRvdHMuZm9yRWFjaCgoZG90KSA9PiB7XG4gICAgZG90LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtZG90LWN1clwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZU5hdkRvdChkb3ROdW0pIHtcbiAgZG90c1tkb3ROdW1dLmNsYXNzTGlzdC5hZGQoXCJuYXYtZG90LWN1clwiKTtcbn1cblxuZnVuY3Rpb24gc2xpZGVJbWFnZSgpIHtcbiAgc2xpZGVyLnN0eWxlLnJpZ2h0ID0gYCR7NTAwICogY3VySW1hZ2V9cHhgO1xuICByZXNldE5hdkRvdHMoKTtcbiAgc2V0QWN0aXZlTmF2RG90KGN1ckltYWdlKTtcbn1cblxuZnVuY3Rpb24gbmV4dEltYWdlKCkge1xuICBjdXJJbWFnZSArPSAxO1xuICBpZiAoY3VySW1hZ2UgPT09IDcpIHtcbiAgICBjdXJJbWFnZSA9IDA7XG4gIH1cbiAgc2xpZGVJbWFnZSgpO1xufVxuXG5mdW5jdGlvbiBwcmV2SW1hZ2UoKSB7XG4gIGN1ckltYWdlIC09IDE7XG4gIGlmIChjdXJJbWFnZSA9PT0gLTEpIHtcbiAgICBjdXJJbWFnZSA9IDY7XG4gIH1cbiAgc2xpZGVJbWFnZSgpO1xufVxuXG5mdW5jdGlvbiBqdW1wVG9JbWFnZShpbWFnZU51bSkge1xuICBjdXJJbWFnZSA9IGltYWdlTnVtO1xuICBzbGlkZUltYWdlKCk7XG59XG5cbmV4cG9ydCB7IG5leHRJbWFnZSwgcHJldkltYWdlLCBqdW1wVG9JbWFnZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBuZXh0SW1hZ2UsIHByZXZJbWFnZSwganVtcFRvSW1hZ2UgfSBmcm9tIFwiLi9zbGlkZXJcIjtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2LWltYWdlLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcmV2SW1hZ2UoKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHQtaW1hZ2UtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5leHRJbWFnZSgpO1xufSk7XG5cbmNvbnN0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1kb3RcIik7XG5mb3IgKGxldCBpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgZG90c1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGp1bXBUb0ltYWdlKGkpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==