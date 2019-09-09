/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = common;
function common(){
	return "common";
}



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__damu_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hsp_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tg_js__ = __webpack_require__(4);



window.onload=function(){
	__WEBPACK_IMPORTED_MODULE_0__damu_js__["a" /* A */]();
	__WEBPACK_IMPORTED_MODULE_0__damu_js__["b" /* B */]();
	__WEBPACK_IMPORTED_MODULE_0__damu_js__["c" /* C */]();
	
	__WEBPACK_IMPORTED_MODULE_1__hsp_js__["a" /* A */]();
	__WEBPACK_IMPORTED_MODULE_1__hsp_js__["b" /* B */]();
	__WEBPACK_IMPORTED_MODULE_1__hsp_js__["c" /* C */]();
	
	__WEBPACK_IMPORTED_MODULE_2__tg_js__["a" /* A */]();
	__WEBPACK_IMPORTED_MODULE_2__tg_js__["b" /* B */]();
	__WEBPACK_IMPORTED_MODULE_2__tg_js__["c" /* C */]();
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = A;
/* harmony export (immutable) */ __webpack_exports__["b"] = B;
/* harmony export (immutable) */ __webpack_exports__["c"] = C;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_common_js__ = __webpack_require__(0);


function A(){
	//require函数的返回值：define中的module.exports
	console.log("A from damu&"+ __WEBPACK_IMPORTED_MODULE_0__common_common_js__["a" /* common */]());
}

function B(){
	console.log("B from damu&"+ __WEBPACK_IMPORTED_MODULE_0__common_common_js__["a" /* common */]());
}

function C(){
	console.log("C from damu&"+ __WEBPACK_IMPORTED_MODULE_0__common_common_js__["a" /* common */]());
}






/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = A;
/* harmony export (immutable) */ __webpack_exports__["b"] = B;
/* harmony export (immutable) */ __webpack_exports__["c"] = C;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_common_js__ = __webpack_require__(0);


function A(){
	//require函数的返回值：define中的module.exports
	console.log("A from hsp&"+ __WEBPACK_IMPORTED_MODULE_0__common_common_js__["a" /* common */]());
}

function B(){
	console.log("B from hsp&"+ __WEBPACK_IMPORTED_MODULE_0__common_common_js__["a" /* common */]());
}

function C(){
	console.log("C from hsp&"+ __WEBPACK_IMPORTED_MODULE_0__common_common_js__["a" /* common */]());
}





/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return C; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_common_js__ = __webpack_require__(0);


 function A(){
	//require函数的返回值：define中的module.exports
	console.log("A from tg&"+ __WEBPACK_IMPORTED_MODULE_0__common_common_js__["a" /* common */]());
}

 function B(){
	console.log("B from tg&"+ __WEBPACK_IMPORTED_MODULE_0__common_common_js__["a" /* common */]());
}

 function C(){
	console.log("C from tg&"+ __WEBPACK_IMPORTED_MODULE_0__common_common_js__["a" /* common */]());
}





/***/ })
/******/ ]);