"use strict";
(self["webpackChunkthreejs_minecraft"] = self["webpackChunkthreejs_minecraft"] || []).push([[826],{

/***/ "./src/index/FirstPage.js":
/*!********************************!*\
  !*** ./src/index/FirstPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_TextBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/TextBoard */ "./src/index/util/TextBoard.js");
/* harmony import */ var _util_RemoveEl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/RemoveEl */ "./src/index/util/RemoveEl.js");
/* harmony import */ var _util_CheckTool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/CheckTool */ "./src/index/util/CheckTool.js");




window.onload = function () {
    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        let now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    document.addEventListener('gesturestart', function (event) {
        event.preventDefault();
    });
};

let tipEL = (0,_util_TextBoard__WEBPACK_IMPORTED_MODULE_0__.default)(undefined, "Loading...");
let CanPlay;
/*禁止ios缩放，双击和双指*/
try {
    (0,_util_CheckTool__WEBPACK_IMPORTED_MODULE_2__.checkEnvironment)();
    CanPlay = true;
} catch (e) {
    CanPlay = false;
    if (Object.prototype.toString.call(e) === "[object Array]") {
        (0,_util_TextBoard__WEBPACK_IMPORTED_MODULE_0__.default)(tipEL, ...e);
    }
}
try {
    /*  非入口，第一个模块打包后名称name默认为index
        import()引入的懒加载模块引入时
        不自定名称：打包分割，个人代码叫2，依赖包代码叫3。
        自定义名称后，打包分割，个人代码叫mc，依赖包叫vendor~mc（vendor~xx这种格式是webpack默认配置）*/
    Promise.all(/*! import() | mc */[__webpack_require__.e(284), __webpack_require__.e(814)]).then(__webpack_require__.bind(__webpack_require__, /*! ../mc/mc */ "./src/mc/mc.js")).then(() => {
        if (CanPlay) {
            (0,_util_TextBoard__WEBPACK_IMPORTED_MODULE_0__.default)(tipEL, "Done :)")
            ;(0,_util_RemoveEl__WEBPACK_IMPORTED_MODULE_1__.default)(tipEL);
        }
    });
} catch (e) {
    (0,_util_TextBoard__WEBPACK_IMPORTED_MODULE_0__.default)(tipEL, "error :(")
    console.log('try chrome');
}



/***/ }),

/***/ "./src/index/util/CheckTool.js":
/*!*************************************!*\
  !*** ./src/index/util/CheckTool.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkEnvironment": () => (/* binding */ checkEnvironment)
/* harmony export */ });
/* harmony import */ var _WebGL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebGL */ "./src/index/util/WebGL.js");


// 检查浏览器
function checkEnvironment() {
    checkBrowser();
    checkDevice();
    checkWebGL();
}

// 检查浏览器
function checkBrowser() {
    let explorer = window.navigator.userAgent,
        compare = function (s) {
            return (explorer.indexOf(s) >= 0);
        },
        ie11 = (function () {
            return ("ActiveXObject" in window)
        })();
    if (compare("MSIE") || ie11) {
        throw ["不要用IE或浏览器的兼容模式 :(", "IE or browser compatibility mode is not OK :("];
    }
};

// 检查设备
function checkDevice() {
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
        throw ["手机尚不支持 :(", "Mobile phone is not supported :(", "还是用电脑打开试试吧 :)", "Let's try it with computer :)"]
    }
};

// 检查webgl支持
function checkWebGL() {
    let isWebGLAvailable = false;
    try {
        var canvas = document.createElement('canvas');
        isWebGLAvailable = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
    }
    if (!isWebGLAvailable) {
        throw [
            "这个浏览器不太行 :(",
            "This browser doesn't work well :(",
            "还是用流行的浏览器试试吧 :)",
            "Let's try it with a popular browser :)",
            '',
            "ERROR: " + _WebGL__WEBPACK_IMPORTED_MODULE_0__.WEBGL.getWebGLErrorMessage().innerText]
    }
};


/***/ }),

/***/ "./src/index/util/RemoveEl.js":
/*!************************************!*\
  !*** ./src/index/util/RemoveEl.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

//移除dom
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(dom) {
    setTimeout(()=>{
        let loadingStyleInterval = setInterval(function () {
            if (dom.style.opacity === undefined || dom.style.opacity.length === 0) {
                dom.style.opacity = '1'
            } else {
                let loadingOpacityValue = Number.parseFloat(dom.style.opacity) - 0.1;
                dom.style.opacity = (loadingOpacityValue).toString();
                if (loadingOpacityValue <= 0) {
                    clearInterval(loadingStyleInterval);
                    dom.style.display = "none";
                    dom.parentNode.removeChild(dom);
                }
            }
        }, 16);
    }, 1000);
};



/***/ }),

/***/ "./src/index/util/TextBoard.js":
/*!*************************************!*\
  !*** ./src/index/util/TextBoard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(el, ...nodeArr) {
    let divEl = el;
    if (!divEl||!divEl.getAttribute("tip-el")) {
        divEl = document.createElement('div');
        divEl.style.position = "absolute";
        divEl.style.top = "35%";
        divEl.style.width = "100%";
        divEl.style.zIndex = "1000";
        divEl.style.textAlign = 'center';
        divEl.style.fontWeight = 'bold';
        divEl.style.color = 'white';
        divEl.style.fontSize = '1em';
        divEl.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        divEl.setAttribute('tip-el','1');
        document.body.appendChild(divEl);
    }
    divEl.innerHTML = '';
    let spanElArr = [];
    if (nodeArr !== undefined) {
        for (let node of nodeArr) {
            if (node instanceof HTMLElement) {
                spanElArr.push(node);
                spanElArr.push(document.createElement('br'));
            } else {
                let spanEl1 = document.createElement('span');
                spanEl1.style.fontSize = '1.5em';
                spanEl1.innerText = node;
                spanElArr.push(spanEl1);
                spanElArr.push(document.createElement('br'));
            }
        }
    }
    for(let spanEl of spanElArr){
        divEl.appendChild(spanEl);
    }
    return divEl;
}

/***/ }),

/***/ "./src/index/util/WebGL.js":
/*!*********************************!*\
  !*** ./src/index/util/WebGL.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WEBGL": () => (/* binding */ WEBGL)
/* harmony export */ });
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */



var WEBGL = {

	isWebGLAvailable: function () {

		try {

			var canvas = document.createElement( 'canvas' );
			return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );

		} catch ( e ) {

			return false;

		}

	},

	isWebGL2Available: function () {

		try {

			var canvas = document.createElement( 'canvas' );
			return !! ( window.WebGL2RenderingContext && canvas.getContext( 'webgl2' ) );

		} catch ( e ) {

			return false;

		}

	},

	getWebGLErrorMessage: function () {

		return this.getErrorMessage( 1 );

	},

	getWebGL2ErrorMessage: function () {

		return this.getErrorMessage( 2 );

	},

	getErrorMessage: function ( version ) {

		var names = {
			1: 'WebGL',
			2: 'WebGL 2'
		};

		var contexts = {
			1: window.WebGLRenderingContext,
			2: window.WebGL2RenderingContext
		};

		var message = 'Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';

		var element = document.createElement( 'div' );
		element.id = 'webglmessage';
		element.style.fontFamily = 'monospace';
		element.style.fontSize = '13px';
		element.style.fontWeight = 'normal';
		element.style.textAlign = 'center';
		element.style.background = '#fff';
		element.style.color = '#000';
		element.style.padding = '1.5em';
		element.style.width = '400px';
		element.style.margin = '5em auto 0';

		if ( contexts[ version ] ) {

			message = message.replace( '$0', 'graphics card' );

		} else {

			message = message.replace( '$0', 'browser' );

		}

		message = message.replace( '$1', names[ version ] );

		element.innerHTML = message;

		return element;

	}

};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index/FirstPage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2FnZS9qcy9pbmRleC42OTYxMDA5ZGY0NWQ3MjkyNGFjMy5lbnRyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0Y7QUFDVTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWSx3REFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFnQjtBQUNwQjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsUUFBUSx3REFBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0tBQTJDO0FBQy9DO0FBQ0EsWUFBWSx3REFBUztBQUNyQixZQUFZLHdEQUFRO0FBQ3BCO0FBQ0EsS0FBSztBQUNMLEVBQUU7QUFDRixJQUFJLHdEQUFTO0FBQ2I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEQ4QjtBQUM5QjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhEQUEwQjtBQUNsRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBLDZCQUFlLG9DQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25CQSw2QkFBZSxvQ0FBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlanMtbWluZWNyYWZ0Ly4vc3JjL2luZGV4L0ZpcnN0UGFnZS5qcyIsIndlYnBhY2s6Ly90aHJlZWpzLW1pbmVjcmFmdC8uL3NyYy9pbmRleC91dGlsL0NoZWNrVG9vbC5qcyIsIndlYnBhY2s6Ly90aHJlZWpzLW1pbmVjcmFmdC8uL3NyYy9pbmRleC91dGlsL1JlbW92ZUVsLmpzIiwid2VicGFjazovL3RocmVlanMtbWluZWNyYWZ0Ly4vc3JjL2luZGV4L3V0aWwvVGV4dEJvYXJkLmpzIiwid2VicGFjazovL3RocmVlanMtbWluZWNyYWZ0Ly4vc3JjL2luZGV4L3V0aWwvV2ViR0wuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRleHRCb2FyZCBmcm9tIFwiLi91dGlsL1RleHRCb2FyZFwiO1xyXG5pbXBvcnQgcmVtb3ZlRWwgZnJvbSBcIi4vdXRpbC9SZW1vdmVFbFwiO1xyXG5pbXBvcnQge2NoZWNrRW52aXJvbm1lbnR9IGZyb20gJy4vdXRpbC9DaGVja1Rvb2wnXHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGxldCBsYXN0VG91Y2hFbmQgPSAwO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBsZXQgbm93ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgICAgICBpZiAobm93IC0gbGFzdFRvdWNoRW5kIDw9IDMwMCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsYXN0VG91Y2hFbmQgPSBub3c7XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnZXN0dXJlc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5sZXQgdGlwRUwgPSB0ZXh0Qm9hcmQodW5kZWZpbmVkLCBcIkxvYWRpbmcuLi5cIik7XHJcbmxldCBDYW5QbGF5O1xyXG4vKuemgeatomlvc+e8qeaUvu+8jOWPjOWHu+WSjOWPjOaMhyovXHJcbnRyeSB7XHJcbiAgICBjaGVja0Vudmlyb25tZW50KCk7XHJcbiAgICBDYW5QbGF5ID0gdHJ1ZTtcclxufSBjYXRjaCAoZSkge1xyXG4gICAgQ2FuUGxheSA9IGZhbHNlO1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiKSB7XHJcbiAgICAgICAgdGV4dEJvYXJkKHRpcEVMLCAuLi5lKTtcclxuICAgIH1cclxufVxyXG50cnkge1xyXG4gICAgLyogIOmdnuWFpeWPo++8jOesrOS4gOS4quaooeWdl+aJk+WMheWQjuWQjeensG5hbWXpu5jorqTkuLppbmRleFxyXG4gICAgICAgIGltcG9ydCgp5byV5YWl55qE5oeS5Yqg6L295qih5Z2X5byV5YWl5pe2XHJcbiAgICAgICAg5LiN6Ieq5a6a5ZCN56ew77ya5omT5YyF5YiG5Ymy77yM5Liq5Lq65Luj56CB5Y+rMu+8jOS+nei1luWMheS7o+eggeWPqzPjgIJcclxuICAgICAgICDoh6rlrprkuYnlkI3np7DlkI7vvIzmiZPljIXliIblibLvvIzkuKrkurrku6PnoIHlj6ttY++8jOS+nei1luWMheWPq3ZlbmRvcn5tY++8iHZlbmRvcn54eOi/meenjeagvOW8j+aYr3dlYnBhY2vpu5jorqTphY3nva7vvIkqL1xyXG4gICAgaW1wb3J0KC8qd2VicGFja0NodW5rTmFtZTonbWMnKi8nLi4vbWMvbWMnKS50aGVuKCgpID0+IHtcclxuICAgICAgICBpZiAoQ2FuUGxheSkge1xyXG4gICAgICAgICAgICB0ZXh0Qm9hcmQodGlwRUwsIFwiRG9uZSA6KVwiKVxyXG4gICAgICAgICAgICByZW1vdmVFbCh0aXBFTCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0gY2F0Y2ggKGUpIHtcclxuICAgIHRleHRCb2FyZCh0aXBFTCwgXCJlcnJvciA6KFwiKVxyXG4gICAgY29uc29sZS5sb2coJ3RyeSBjaHJvbWUnKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHtXRUJHTH0gZnJvbSBcIi4vV2ViR0xcIjtcclxuXHJcbi8vIOajgOafpea1j+iniOWZqFxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbnZpcm9ubWVudCgpIHtcclxuICAgIGNoZWNrQnJvd3NlcigpO1xyXG4gICAgY2hlY2tEZXZpY2UoKTtcclxuICAgIGNoZWNrV2ViR0woKTtcclxufVxyXG5cclxuLy8g5qOA5p+l5rWP6KeI5ZmoXHJcbmZ1bmN0aW9uIGNoZWNrQnJvd3NlcigpIHtcclxuICAgIGxldCBleHBsb3JlciA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LFxyXG4gICAgICAgIGNvbXBhcmUgPSBmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICByZXR1cm4gKGV4cGxvcmVyLmluZGV4T2YocykgPj0gMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpZTExID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcIkFjdGl2ZVhPYmplY3RcIiBpbiB3aW5kb3cpXHJcbiAgICAgICAgfSkoKTtcclxuICAgIGlmIChjb21wYXJlKFwiTVNJRVwiKSB8fCBpZTExKSB7XHJcbiAgICAgICAgdGhyb3cgW1wi5LiN6KaB55SoSUXmiJbmtY/op4jlmajnmoTlhbzlrrnmqKHlvI8gOihcIiwgXCJJRSBvciBicm93c2VyIGNvbXBhdGliaWxpdHkgbW9kZSBpcyBub3QgT0sgOihcIl07XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyDmo4Dmn6Xorr7lpIdcclxuZnVuY3Rpb24gY2hlY2tEZXZpY2UoKSB7XHJcbiAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQaG9uZXxpUG9kfEFuZHJvaWR8aW9zKS9pKSkge1xyXG4gICAgICAgIHRocm93IFtcIuaJi+acuuWwmuS4jeaUr+aMgSA6KFwiLCBcIk1vYmlsZSBwaG9uZSBpcyBub3Qgc3VwcG9ydGVkIDooXCIsIFwi6L+Y5piv55So55S16ISR5omT5byA6K+V6K+V5ZCnIDopXCIsIFwiTGV0J3MgdHJ5IGl0IHdpdGggY29tcHV0ZXIgOilcIl1cclxuICAgIH1cclxufTtcclxuXHJcbi8vIOajgOafpXdlYmds5pSv5oyBXHJcbmZ1bmN0aW9uIGNoZWNrV2ViR0woKSB7XHJcbiAgICBsZXQgaXNXZWJHTEF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgaXNXZWJHTEF2YWlsYWJsZSA9ICEhKHdpbmRvdy5XZWJHTFJlbmRlcmluZ0NvbnRleHQgJiYgKGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIHx8IGNhbnZhcy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnKSkpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc1dlYkdMQXZhaWxhYmxlKSB7XHJcbiAgICAgICAgdGhyb3cgW1xyXG4gICAgICAgICAgICBcIui/meS4qua1j+iniOWZqOS4jeWkquihjCA6KFwiLFxyXG4gICAgICAgICAgICBcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHdvcmsgd2VsbCA6KFwiLFxyXG4gICAgICAgICAgICBcIui/mOaYr+eUqOa1geihjOeahOa1j+iniOWZqOivleivleWQpyA6KVwiLFxyXG4gICAgICAgICAgICBcIkxldCdzIHRyeSBpdCB3aXRoIGEgcG9wdWxhciBicm93c2VyIDopXCIsXHJcbiAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICBcIkVSUk9SOiBcIiArIFdFQkdMLmdldFdlYkdMRXJyb3JNZXNzYWdlKCkuaW5uZXJUZXh0XVxyXG4gICAgfVxyXG59O1xyXG4iLCJcclxuLy/np7vpmaRkb21cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGRvbSkge1xyXG4gICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgIGxldCBsb2FkaW5nU3R5bGVJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGRvbS5zdHlsZS5vcGFjaXR5ID09PSB1bmRlZmluZWQgfHwgZG9tLnN0eWxlLm9wYWNpdHkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBkb20uc3R5bGUub3BhY2l0eSA9ICcxJ1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvYWRpbmdPcGFjaXR5VmFsdWUgPSBOdW1iZXIucGFyc2VGbG9hdChkb20uc3R5bGUub3BhY2l0eSkgLSAwLjE7XHJcbiAgICAgICAgICAgICAgICBkb20uc3R5bGUub3BhY2l0eSA9IChsb2FkaW5nT3BhY2l0eVZhbHVlKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvYWRpbmdPcGFjaXR5VmFsdWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobG9hZGluZ1N0eWxlSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9tLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDE2KTtcclxuICAgIH0sIDEwMDApO1xyXG59O1xyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVsLCAuLi5ub2RlQXJyKSB7XHJcbiAgICBsZXQgZGl2RWwgPSBlbDtcclxuICAgIGlmICghZGl2RWx8fCFkaXZFbC5nZXRBdHRyaWJ1dGUoXCJ0aXAtZWxcIikpIHtcclxuICAgICAgICBkaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdkVsLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIGRpdkVsLnN0eWxlLnRvcCA9IFwiMzUlXCI7XHJcbiAgICAgICAgZGl2RWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBkaXZFbC5zdHlsZS56SW5kZXggPSBcIjEwMDBcIjtcclxuICAgICAgICBkaXZFbC5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICBkaXZFbC5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xyXG4gICAgICAgIGRpdkVsLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICAgICAgICBkaXZFbC5zdHlsZS5mb250U2l6ZSA9ICcxZW0nO1xyXG4gICAgICAgIGRpdkVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjMpXCI7XHJcbiAgICAgICAgZGl2RWwuc2V0QXR0cmlidXRlKCd0aXAtZWwnLCcxJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXZFbCk7XHJcbiAgICB9XHJcbiAgICBkaXZFbC5pbm5lckhUTUwgPSAnJztcclxuICAgIGxldCBzcGFuRWxBcnIgPSBbXTtcclxuICAgIGlmIChub2RlQXJyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVBcnIpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgc3BhbkVsQXJyLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBzcGFuRWxBcnIucHVzaChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBzcGFuRWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgc3BhbkVsMS5zdHlsZS5mb250U2l6ZSA9ICcxLjVlbSc7XHJcbiAgICAgICAgICAgICAgICBzcGFuRWwxLmlubmVyVGV4dCA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICBzcGFuRWxBcnIucHVzaChzcGFuRWwxKTtcclxuICAgICAgICAgICAgICAgIHNwYW5FbEFyci5wdXNoKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yKGxldCBzcGFuRWwgb2Ygc3BhbkVsQXJyKXtcclxuICAgICAgICBkaXZFbC5hcHBlbmRDaGlsZChzcGFuRWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpdkVsO1xyXG59IiwiLyoqXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICogQGF1dGhvciBtci5kb29iIC8gaHR0cDovL21yZG9vYi5jb20vXG4gKi9cblxuXG5cbnZhciBXRUJHTCA9IHtcblxuXHRpc1dlYkdMQXZhaWxhYmxlOiBmdW5jdGlvbiAoKSB7XG5cblx0XHR0cnkge1xuXG5cdFx0XHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcblx0XHRcdHJldHVybiAhISAoIHdpbmRvdy5XZWJHTFJlbmRlcmluZ0NvbnRleHQgJiYgKCBjYW52YXMuZ2V0Q29udGV4dCggJ3dlYmdsJyApIHx8IGNhbnZhcy5nZXRDb250ZXh0KCAnZXhwZXJpbWVudGFsLXdlYmdsJyApICkgKTtcblxuXHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR9XG5cblx0fSxcblxuXHRpc1dlYkdMMkF2YWlsYWJsZTogZnVuY3Rpb24gKCkge1xuXG5cdFx0dHJ5IHtcblxuXHRcdFx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XG5cdFx0XHRyZXR1cm4gISEgKCB3aW5kb3cuV2ViR0wyUmVuZGVyaW5nQ29udGV4dCAmJiBjYW52YXMuZ2V0Q29udGV4dCggJ3dlYmdsMicgKSApO1xuXG5cdFx0fSBjYXRjaCAoIGUgKSB7XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdGdldFdlYkdMRXJyb3JNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFcnJvck1lc3NhZ2UoIDEgKTtcblxuXHR9LFxuXG5cdGdldFdlYkdMMkVycm9yTWVzc2FnZTogZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXJyb3JNZXNzYWdlKCAyICk7XG5cblx0fSxcblxuXHRnZXRFcnJvck1lc3NhZ2U6IGZ1bmN0aW9uICggdmVyc2lvbiApIHtcblxuXHRcdHZhciBuYW1lcyA9IHtcblx0XHRcdDE6ICdXZWJHTCcsXG5cdFx0XHQyOiAnV2ViR0wgMidcblx0XHR9O1xuXG5cdFx0dmFyIGNvbnRleHRzID0ge1xuXHRcdFx0MTogd2luZG93LldlYkdMUmVuZGVyaW5nQ29udGV4dCxcblx0XHRcdDI6IHdpbmRvdy5XZWJHTDJSZW5kZXJpbmdDb250ZXh0XG5cdFx0fTtcblxuXHRcdHZhciBtZXNzYWdlID0gJ1lvdXIgJDAgZG9lcyBub3Qgc2VlbSB0byBzdXBwb3J0IDxhIGhyZWY9XCJodHRwOi8va2hyb25vcy5vcmcvd2ViZ2wvd2lraS9HZXR0aW5nX2FfV2ViR0xfSW1wbGVtZW50YXRpb25cIiBzdHlsZT1cImNvbG9yOiMwMDBcIj4kMTwvYT4nO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRcdGVsZW1lbnQuaWQgPSAnd2ViZ2xtZXNzYWdlJztcblx0XHRlbGVtZW50LnN0eWxlLmZvbnRGYW1pbHkgPSAnbW9ub3NwYWNlJztcblx0XHRlbGVtZW50LnN0eWxlLmZvbnRTaXplID0gJzEzcHgnO1xuXHRcdGVsZW1lbnQuc3R5bGUuZm9udFdlaWdodCA9ICdub3JtYWwnO1xuXHRcdGVsZW1lbnQuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG5cdFx0ZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmZmYnO1xuXHRcdGVsZW1lbnQuc3R5bGUuY29sb3IgPSAnIzAwMCc7XG5cdFx0ZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzEuNWVtJztcblx0XHRlbGVtZW50LnN0eWxlLndpZHRoID0gJzQwMHB4Jztcblx0XHRlbGVtZW50LnN0eWxlLm1hcmdpbiA9ICc1ZW0gYXV0byAwJztcblxuXHRcdGlmICggY29udGV4dHNbIHZlcnNpb24gXSApIHtcblxuXHRcdFx0bWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSggJyQwJywgJ2dyYXBoaWNzIGNhcmQnICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCAnJDAnLCAnYnJvd3NlcicgKTtcblxuXHRcdH1cblxuXHRcdG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoICckMScsIG5hbWVzWyB2ZXJzaW9uIF0gKTtcblxuXHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gbWVzc2FnZTtcblxuXHRcdHJldHVybiBlbGVtZW50O1xuXG5cdH1cblxufTtcblxuZXhwb3J0IHsgV0VCR0wgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==