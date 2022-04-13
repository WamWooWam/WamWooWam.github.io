/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Start/splash-screen.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Start/splash-screen.css ***!
  \***************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\r\n.splash-screen {\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    transition: opacity 0.15s ease-out;\r\n    transform-style: preserve-3d;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n}\r\n\r\n.splash-screen.visible {\r\n    opacity: 1;\r\n    pointer-events: all;\r\n}\r\n\r\n.splash-screen-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow: hidden;\r\n    transform-style: preserve-3d;\r\n}", "",{"version":3,"sources":["webpack://./src/Start/splash-screen.css"],"names":[],"mappings":";;AAEA;IACI,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,kCAAkC;IAClC,4BAA4B;IAC5B,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,4BAA4B;AAChC","sourcesContent":["\r\n\r\n.splash-screen {\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    transition: opacity 0.15s ease-out;\r\n    transform-style: preserve-3d;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n}\r\n\r\n.splash-screen.visible {\r\n    opacity: 1;\r\n    pointer-events: all;\r\n}\r\n\r\n.splash-screen-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow: hidden;\r\n    transform-style: preserve-3d;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Start/tile.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Start/tile.css ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tile-group-header {\r\n    padding: 0 0 8px 0;\r\n    font-size: 22px;\r\n    font-weight: 100;\r\n}\r\n\r\n.tile-group-header-text {\r\n    opacity: 0.75;\r\n}\r\n\r\n.tile-group-tiles {\r\n    display: grid;\r\n    grid-gap: 8px;\r\n    grid-auto-columns: 120px;\r\n    flex: 1;\r\n}\r\n\r\n.tile {\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.tile-container {\r\n    transform-style: preserve-3d;\r\n    transition: transform 0.05s ease-out;\r\n}\r\n\r\n/* \r\n.tile-container:hover:active {\r\n    transform: scale3d(0.985, 0.985, 0.985);\r\n} */\r\n\r\n\r\n.tile-container.top {\r\n    transform-origin: 50% bottom;\r\n}\r\n\r\n.tile-container.bottom {\r\n    transform-origin: 50% top;\r\n}\r\n\r\n.tile-container.left {\r\n    transform-origin: right 50%;\r\n}\r\n\r\n.tile-container.right {\r\n    transform-origin: left 50%;\r\n}\r\n\r\n.tile-container.center {\r\n    transform-origin: initial;\r\n}\r\n\r\n/* square310x310 */\r\n\r\n.tile-container.square310x310.top:active {\r\n    transform: perspective(500px) rotateX(3deg);\r\n}\r\n\r\n.tile-container.square310x310.bottom:active {\r\n    transform: perspective(500px) rotateX(-3deg);\r\n}\r\n\r\n.tile-container.square310x310.left:active {\r\n    transform: perspective(500px) rotateY(-3deg);\r\n}\r\n\r\n.tile-container.square310x310.right:active {\r\n    transform: perspective(500px) rotateY(3deg);\r\n}\r\n\r\n/* wide310x150 */\r\n\r\n.tile-container.wide310x150.top:active {\r\n    transform: perspective(500px) rotateX(6deg);\r\n}\r\n\r\n.tile-container.wide310x150.bottom:active {\r\n    transform: perspective(500px) rotateX(-6deg);\r\n}\r\n\r\n.tile-container.wide310x150.left:active {\r\n    transform: perspective(500px) rotateY(-3deg);\r\n}\r\n\r\n.tile-container.wide310x150.right:active {\r\n    transform: perspective(500px) rotateY(3deg);\r\n}\r\n\r\n/* square150x150 */\r\n\r\n.tile-container.square150x150.top:active {\r\n    transform: perspective(500px) rotateX(6deg);\r\n}\r\n\r\n.tile-container.square150x150.bottom:active {\r\n    transform: perspective(500px) rotateX(-6deg);\r\n}\r\n\r\n.tile-container.square150x150.left:active {\r\n    transform: perspective(500px) rotateY(-6deg);\r\n}\r\n\r\n.tile-container.square150x150.right:active {\r\n    transform: perspective(500px) rotateY(6deg);\r\n}\r\n\r\n/* square70x70 */\r\n\r\n.tile-container.square70x70.top:active {\r\n    transform: perspective(500px) rotateX(16deg);\r\n}\r\n\r\n.tile-container.square70x70.bottom:active {\r\n    transform: perspective(500px) rotateX(-16deg);\r\n}\r\n\r\n.tile-container.square70x70.left:active {\r\n    transform: perspective(500px) rotateY(-16deg);\r\n}\r\n\r\n.tile-container.square70x70.right:active {\r\n    transform: perspective(500px) rotateY(16deg);\r\n}\r\n\r\n\r\n.tile-container.center:active {\r\n    transform: scale3d(0.975, 0.975, 0.975);\r\n}\r\n\r\n.moving>.tile {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.tile-container.wide310x150 {\r\n    grid-column-end: span 2;\r\n}\r\n\r\n.tile-container.square310x310 {\r\n    grid-row-end: span 2;\r\n    grid-column-end: span 2;\r\n}\r\n\r\n.tile-container {\r\n    grid-row-end: span 1;\r\n    grid-column-end: span 1;\r\n    transform-style: preserve-3d;\r\n}\r\n\r\n.fence-tile-container {\r\n    display: grid;\r\n    grid-template-columns: 56px 56px;\r\n    grid-template-rows: 56px 56px;\r\n    grid-gap: 8px;\r\n    grid-row-end: span 1;\r\n    grid-column-end: span 1;\r\n}\r\n\r\n.tile-container:hover:before {\r\n    content: \" \";\r\n    position: absolute;\r\n    top: -3px;\r\n    left: -3px;\r\n    right: -3px;\r\n    bottom: -3px;\r\n    border: 3px solid rgba(43, 6, 128, 1);\r\n}\r\n\r\n.tile-container.flipped {\r\n    border: none !important;\r\n    margin: 0 !important;\r\n    overflow: hidden;\r\n}\r\n\r\n.tile-container.flipped>.tile {\r\n    border: none !important;\r\n    margin: 0 !important;\r\n    overflow: hidden;\r\n}\r\n\r\n.front {\r\n    display: flex;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: calc(100% - 2px);\r\n    height: calc(100% - 2px);\r\n    overflow: hidden;\r\n    flex-direction: column;\r\n}\r\n\r\n.front>* {\r\n    position: absolute;\r\n    top: -1px;\r\n    left: -1px;\r\n    width: calc(100% + 2px);\r\n    height: calc(100% + 2px);\r\n}\r\n\r\n.tile-front-image-container {\r\n    display: flex;\r\n    flex: 1;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n}\r\n\r\n.tile-front-image {\r\n    max-height: 120px;\r\n}\r\n\r\n.tile-front-image.square70x70 {\r\n    max-height: 56px;\r\n}\r\n\r\n.tile-front-image.square310x310 {\r\n    max-height: 246px;\r\n}\r\n\r\n.tile-front-text {\r\n    padding: 0;\r\n    margin: 8px 12px;\r\n    font-size: 12px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n\r\n.tile-visual {\r\n    display: flex;\r\n}\r\n\r\n.back {\r\n    display: flex;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    transform: rotateY(180deg);\r\n}\r\n\r\n.flipped>.tile>.front {\r\n    visibility: hidden;\r\n}\r\n\r\n.flipped>.tile>.back {\r\n    visibility: visible;\r\n}", "",{"version":3,"sources":["webpack://./src/Start/tile.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,OAAO;AACX;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;IAC5B,oCAAoC;AACxC;;AAEA;;;GAGG;;;AAGH;IACI,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA,kBAAkB;;AAElB;IACI,2CAA2C;AAC/C;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,2CAA2C;AAC/C;;AAEA,gBAAgB;;AAEhB;IACI,2CAA2C;AAC/C;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,2CAA2C;AAC/C;;AAEA,kBAAkB;;AAElB;IACI,2CAA2C;AAC/C;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,2CAA2C;AAC/C;;AAEA,gBAAgB;;AAEhB;IACI,4CAA4C;AAChD;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,4CAA4C;AAChD;;;AAGA;IACI,uCAAuC;AAC3C;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,uBAAuB;IACvB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,6BAA6B;IAC7B,aAAa;IACb,oBAAoB;IACpB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,WAAW;IACX,YAAY;IACZ,qCAAqC;AACzC;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,uBAAuB;IACvB,wBAAwB;IACxB,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,OAAO;IACP,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,SAAS;IACT,OAAO;AACX;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":[".tile-group-header {\r\n    padding: 0 0 8px 0;\r\n    font-size: 22px;\r\n    font-weight: 100;\r\n}\r\n\r\n.tile-group-header-text {\r\n    opacity: 0.75;\r\n}\r\n\r\n.tile-group-tiles {\r\n    display: grid;\r\n    grid-gap: 8px;\r\n    grid-auto-columns: 120px;\r\n    flex: 1;\r\n}\r\n\r\n.tile {\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.tile-container {\r\n    transform-style: preserve-3d;\r\n    transition: transform 0.05s ease-out;\r\n}\r\n\r\n/* \r\n.tile-container:hover:active {\r\n    transform: scale3d(0.985, 0.985, 0.985);\r\n} */\r\n\r\n\r\n.tile-container.top {\r\n    transform-origin: 50% bottom;\r\n}\r\n\r\n.tile-container.bottom {\r\n    transform-origin: 50% top;\r\n}\r\n\r\n.tile-container.left {\r\n    transform-origin: right 50%;\r\n}\r\n\r\n.tile-container.right {\r\n    transform-origin: left 50%;\r\n}\r\n\r\n.tile-container.center {\r\n    transform-origin: initial;\r\n}\r\n\r\n/* square310x310 */\r\n\r\n.tile-container.square310x310.top:active {\r\n    transform: perspective(500px) rotateX(3deg);\r\n}\r\n\r\n.tile-container.square310x310.bottom:active {\r\n    transform: perspective(500px) rotateX(-3deg);\r\n}\r\n\r\n.tile-container.square310x310.left:active {\r\n    transform: perspective(500px) rotateY(-3deg);\r\n}\r\n\r\n.tile-container.square310x310.right:active {\r\n    transform: perspective(500px) rotateY(3deg);\r\n}\r\n\r\n/* wide310x150 */\r\n\r\n.tile-container.wide310x150.top:active {\r\n    transform: perspective(500px) rotateX(6deg);\r\n}\r\n\r\n.tile-container.wide310x150.bottom:active {\r\n    transform: perspective(500px) rotateX(-6deg);\r\n}\r\n\r\n.tile-container.wide310x150.left:active {\r\n    transform: perspective(500px) rotateY(-3deg);\r\n}\r\n\r\n.tile-container.wide310x150.right:active {\r\n    transform: perspective(500px) rotateY(3deg);\r\n}\r\n\r\n/* square150x150 */\r\n\r\n.tile-container.square150x150.top:active {\r\n    transform: perspective(500px) rotateX(6deg);\r\n}\r\n\r\n.tile-container.square150x150.bottom:active {\r\n    transform: perspective(500px) rotateX(-6deg);\r\n}\r\n\r\n.tile-container.square150x150.left:active {\r\n    transform: perspective(500px) rotateY(-6deg);\r\n}\r\n\r\n.tile-container.square150x150.right:active {\r\n    transform: perspective(500px) rotateY(6deg);\r\n}\r\n\r\n/* square70x70 */\r\n\r\n.tile-container.square70x70.top:active {\r\n    transform: perspective(500px) rotateX(16deg);\r\n}\r\n\r\n.tile-container.square70x70.bottom:active {\r\n    transform: perspective(500px) rotateX(-16deg);\r\n}\r\n\r\n.tile-container.square70x70.left:active {\r\n    transform: perspective(500px) rotateY(-16deg);\r\n}\r\n\r\n.tile-container.square70x70.right:active {\r\n    transform: perspective(500px) rotateY(16deg);\r\n}\r\n\r\n\r\n.tile-container.center:active {\r\n    transform: scale3d(0.975, 0.975, 0.975);\r\n}\r\n\r\n.moving>.tile {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.tile-container.wide310x150 {\r\n    grid-column-end: span 2;\r\n}\r\n\r\n.tile-container.square310x310 {\r\n    grid-row-end: span 2;\r\n    grid-column-end: span 2;\r\n}\r\n\r\n.tile-container {\r\n    grid-row-end: span 1;\r\n    grid-column-end: span 1;\r\n    transform-style: preserve-3d;\r\n}\r\n\r\n.fence-tile-container {\r\n    display: grid;\r\n    grid-template-columns: 56px 56px;\r\n    grid-template-rows: 56px 56px;\r\n    grid-gap: 8px;\r\n    grid-row-end: span 1;\r\n    grid-column-end: span 1;\r\n}\r\n\r\n.tile-container:hover:before {\r\n    content: \" \";\r\n    position: absolute;\r\n    top: -3px;\r\n    left: -3px;\r\n    right: -3px;\r\n    bottom: -3px;\r\n    border: 3px solid rgba(43, 6, 128, 1);\r\n}\r\n\r\n.tile-container.flipped {\r\n    border: none !important;\r\n    margin: 0 !important;\r\n    overflow: hidden;\r\n}\r\n\r\n.tile-container.flipped>.tile {\r\n    border: none !important;\r\n    margin: 0 !important;\r\n    overflow: hidden;\r\n}\r\n\r\n.front {\r\n    display: flex;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: calc(100% - 2px);\r\n    height: calc(100% - 2px);\r\n    overflow: hidden;\r\n    flex-direction: column;\r\n}\r\n\r\n.front>* {\r\n    position: absolute;\r\n    top: -1px;\r\n    left: -1px;\r\n    width: calc(100% + 2px);\r\n    height: calc(100% + 2px);\r\n}\r\n\r\n.tile-front-image-container {\r\n    display: flex;\r\n    flex: 1;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n}\r\n\r\n.tile-front-image {\r\n    max-height: 120px;\r\n}\r\n\r\n.tile-front-image.square70x70 {\r\n    max-height: 56px;\r\n}\r\n\r\n.tile-front-image.square310x310 {\r\n    max-height: 246px;\r\n}\r\n\r\n.tile-front-text {\r\n    padding: 0;\r\n    margin: 8px 12px;\r\n    font-size: 12px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n\r\n.tile-visual {\r\n    display: flex;\r\n}\r\n\r\n.back {\r\n    display: flex;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    transform: rotateY(180deg);\r\n}\r\n\r\n.flipped>.tile>.front {\r\n    visibility: hidden;\r\n}\r\n\r\n.flipped>.tile>.back {\r\n    visibility: visible;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;    \n  width: 100vw;\n  height: 100vh;\n  perspective: 1600px;\n  transform-style: preserve-3d;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\nbody {\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;EAClC,SAAS;EACT,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE;aACW;AACb;;AAEA;AACA","sourcesContent":["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;    \n  width: 100vw;\n  height: 100vh;\n  perspective: 1600px;\n  transform-style: preserve-3d;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\nbody {\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/start.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/start.css ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_scrollbar_scroll_right_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/scrollbar/scroll-right.svg */ "./static/scrollbar/scroll-right.svg");
/* harmony import */ var _static_scrollbar_scroll_right_hover_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/scrollbar/scroll-right-hover.svg */ "./static/scrollbar/scroll-right-hover.svg");
/* harmony import */ var _static_scrollbar_scroll_right_active_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/scrollbar/scroll-right-active.svg */ "./static/scrollbar/scroll-right-active.svg");
/* harmony import */ var _static_scrollbar_scroll_left_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/scrollbar/scroll-left.svg */ "./static/scrollbar/scroll-left.svg");
/* harmony import */ var _static_scrollbar_scroll_left_hover_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/scrollbar/scroll-left-hover.svg */ "./static/scrollbar/scroll-left-hover.svg");
/* harmony import */ var _static_scrollbar_scroll_left_active_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/scrollbar/scroll-left-active.svg */ "./static/scrollbar/scroll-left-active.svg");
// Imports









var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_scrollbar_scroll_right_svg__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_scrollbar_scroll_right_hover_svg__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_scrollbar_scroll_right_active_svg__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_scrollbar_scroll_left_svg__WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_scrollbar_scroll_left_hover_svg__WEBPACK_IMPORTED_MODULE_7__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_scrollbar_scroll_left_active_svg__WEBPACK_IMPORTED_MODULE_8__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".start-screen {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    top: 0;\r\n    left: 0;\r\n    /* z-index: 2147483645; */\r\n    /* :) */\r\n}\r\n\r\nbody {\r\n    color: white;\r\n    background-color: #180053;\r\n}\r\n\r\n.start-content {\r\n    display: grid;\r\n    grid-template-rows: 120px 1fr 94px;\r\n    height: 100vh;\r\n}\r\n\r\n.start-screen.hiding {\r\n    animation: start-hide 0.25s forwards;\r\n}\r\n\r\n.start-screen.hiding>* {\r\n    animation: start-content-hide 0.25s forwards;\r\n}\r\n\r\n.start-screen.hidden {\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    display: block;\r\n}\r\n\r\n@keyframes start-content-hide {\r\n    0% {\r\n        transform: scale3d(1, 1, 1);\r\n    }\r\n\r\n    100% {\r\n        transform: scale3d(0.33, 0.33, 0.33);\r\n    }\r\n}\r\n\r\n@keyframes start-hide {\r\n    25% {\r\n        opacity: 1;\r\n    }\r\n\r\n    100% {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n.start-header {\r\n    margin-left: 118px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    font-weight: 200;\r\n    z-index: 1;\r\n}\r\n\r\n.start-main-header {\r\n    margin-right: 38px;\r\n    display: grid;\r\n    grid-template-columns: 1fr auto;\r\n}\r\n\r\n.start-title {\r\n    font-family: \"Segoe UI\";\r\n    font-size: 42pt;\r\n    font-weight: 200;\r\n    margin: 0;\r\n    padding-bottom: 8px;\r\n    margin-left: -2px;\r\n}\r\n\r\n.start-header-buttons {\r\n    grid-column: 2;\r\n    display: grid;\r\n    grid-template-columns: 170px 57px 57px;\r\n    column-gap: 2px;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.start-header-button {\r\n    height: 57px;\r\n    transition: transform 0.1s ease-out;\r\n}\r\n\r\n.start-header-button:hover {\r\n    background: #2B0680;\r\n}\r\n\r\n.start-header-button:active {\r\n    background: #2B0680;\r\n    transform: scale3d(0.975, 0.975, 0.975);\r\n}\r\n\r\n.start-header-user-button {\r\n    display: grid;\r\n    text-align: right;\r\n    align-items: center;\r\n    grid-template-columns: 1fr 60px;\r\n}\r\n\r\n.start-header-user-button>.username>p {\r\n    margin: 0;\r\n}\r\n\r\n.start-header-user-button>.username>.primary {\r\n    font-size: 27px;\r\n    line-height: 27px;\r\n}\r\n\r\n.start-header-user-button>.picture {\r\n    width: 40px;\r\n    height: 40px;\r\n    align-self: center;\r\n    justify-self: center;\r\n}\r\n\r\n.start-header-power,\r\n.start-header-search {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-family: \"Segoe UI Symbol\";\r\n    font-size: 28px;\r\n    line-height: 30px;\r\n    width: 57px;\r\n    height: 57px;\r\n}\r\n\r\n.mobile>.start-header,\r\n.mobile>.start-footer {\r\n    display: none;\r\n}\r\n\r\n.start.mobile {\r\n    margin: 8px;\r\n}\r\n\r\n.start-tiles-scroll-container {\r\n    display: flex;\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    overflow-x: overlay;\r\n    grid-row: 2;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.start-tiles-scroll-container::-webkit-scrollbar {\r\n    height: 0px;\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar {\r\n    height: 17px;\r\n    background: rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-thumb {\r\n    box-shadow: inset 0 0 15px 15px #cdcdcd;\r\n    border: solid 1px rgba(255, 255, 255, 0.33);\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-thumb:hover {\r\n    box-shadow: inset 0 0 15px 15px #dadada;\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-thumb:active {\r\n    box-shadow: inset 0 0 15px 15px rgba(0, 0, 0, 0.66);\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:horizontal {\r\n    width: 33px;\r\n    background-repeat: no-repeat;\r\n    background-size: 10px 10px;\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:hover {\r\n    background-color: #dadada;\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:active {\r\n    background-color: rgba(0, 0, 0, 0.66);\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:horizontal:increment {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-position: 25% center;\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:horizontal:increment:hover {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:horizontal:increment:active {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:horizontal:decrement {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n    background-position: 75% center;\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:horizontal:decrement:hover {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:horizontal:decrement:active {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n}\r\n\r\n.start-tiles {\r\n    padding: 24px 118px 0px 62px;\r\n    display: flex;\r\n    align-self: center;\r\n    align-items: center;\r\n    height: calc(100% - 196px);\r\n}\r\n\r\n.mobile>.start-tiles {\r\n    grid-auto-rows: calc(calc(100vw / 6) - 6px);\r\n    grid-auto-columns: calc(calc(100vw / 6) - 6px);\r\n}\r\n\r\n.start-footer {\r\n    margin-left: 118px;\r\n    display: flex;\r\n    align-items: center;\r\n    align-self: center;\r\n    grid-row: 3;\r\n}\r\n\r\n.start-tile-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-left: 56px;\r\n}\r\n\r\n.start-show-all-button {\r\n    transform: rotate(90deg);\r\n    background: transparent;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n}\r\n\r\n.start-hide-all-button {\r\n    transform: rotate(-90deg);\r\n}\r\n\r\n.start-arrow-button {\r\n    font-family: \"Segoe UI Symbol\";\r\n    font-size: 42px;\r\n    display: flex;\r\n    justify-self: flex-start;\r\n}\r\n\r\n.start-show-all-icon {\r\n    width: 32px;\r\n    height: 32px;\r\n}\r\n\r\n.start-show-all-button #arrow {\r\n    fill: white;\r\n}\r\n\r\n.start-show-all-button #circle {\r\n    stroke: white;\r\n    fill: transparent;\r\n}\r\n\r\n.start-show-all-button:hover #circle {\r\n    fill: #2E00A5;\r\n}\r\n\r\n.start-show-all-button:active #circle {\r\n    fill: white;\r\n}\r\n\r\n.start-show-all-button:active #arrow {\r\n    fill: #180053;\r\n}\r\n\r\n.start-hide-all-button #arrow {\r\n    fill: black;\r\n}\r\n\r\n.start-hide-all-button #circle {\r\n    stroke: black;\r\n    fill: transparent;\r\n}\r\n\r\n.start-hide-all-button:hover #arrow {\r\n    fill: white;\r\n}\r\n\r\n.start-hide-all-button:hover #circle {\r\n    fill: #2E00A5;\r\n}\r\n\r\n.start-hide-all-button:active #circle {\r\n    fill: black;\r\n}\r\n\r\n.start-hide-all-button:active #arrow {\r\n    fill: #180053;\r\n}\r\n\r\n.all-apps-text {\r\n    display: grid;\r\n    grid-auto-columns: 450px;\r\n    column-gap: 20px;\r\n}", "",{"version":3,"sources":["webpack://./src/start.css"],"names":[],"mappings":"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","sourcesContent":[".start-screen {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    top: 0;\r\n    left: 0;\r\n    /* z-index: 2147483645; */\r\n    /* :) */\r\n}\r\n\r\nbody {\r\n    color: white;\r\n    background-color: #180053;\r\n}\r\n\r\n.start-content {\r\n    display: grid;\r\n    grid-template-rows: 120px 1fr 94px;\r\n    height: 100vh;\r\n}\r\n\r\n.start-screen.hiding {\r\n    animation: start-hide 0.25s forwards;\r\n}\r\n\r\n.start-screen.hiding>* {\r\n    animation: start-content-hide 0.25s forwards;\r\n}\r\n\r\n.start-screen.hidden {\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    display: block;\r\n}\r\n\r\n@keyframes start-content-hide {\r\n    0% {\r\n        transform: scale3d(1, 1, 1);\r\n    }\r\n\r\n    100% {\r\n        transform: scale3d(0.33, 0.33, 0.33);\r\n    }\r\n}\r\n\r\n@keyframes start-hide {\r\n    25% {\r\n        opacity: 1;\r\n    }\r\n\r\n    100% {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n.start-header {\r\n    margin-left: 118px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    font-weight: 200;\r\n    z-index: 1;\r\n}\r\n\r\n.start-main-header {\r\n    margin-right: 38px;\r\n    display: grid;\r\n    grid-template-columns: 1fr auto;\r\n}\r\n\r\n.start-title {\r\n    font-family: \"Segoe UI\";\r\n    font-size: 42pt;\r\n    font-weight: 200;\r\n    margin: 0;\r\n    padding-bottom: 8px;\r\n    margin-left: -2px;\r\n}\r\n\r\n.start-header-buttons {\r\n    grid-column: 2;\r\n    display: grid;\r\n    grid-template-columns: 170px 57px 57px;\r\n    column-gap: 2px;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.start-header-button {\r\n    height: 57px;\r\n    transition: transform 0.1s ease-out;\r\n}\r\n\r\n.start-header-button:hover {\r\n    background: #2B0680;\r\n}\r\n\r\n.start-header-button:active {\r\n    background: #2B0680;\r\n    transform: scale3d(0.975, 0.975, 0.975);\r\n}\r\n\r\n.start-header-user-button {\r\n    display: grid;\r\n    text-align: right;\r\n    align-items: center;\r\n    grid-template-columns: 1fr 60px;\r\n}\r\n\r\n.start-header-user-button>.username>p {\r\n    margin: 0;\r\n}\r\n\r\n.start-header-user-button>.username>.primary {\r\n    font-size: 27px;\r\n    line-height: 27px;\r\n}\r\n\r\n.start-header-user-button>.picture {\r\n    width: 40px;\r\n    height: 40px;\r\n    align-self: center;\r\n    justify-self: center;\r\n}\r\n\r\n.start-header-power,\r\n.start-header-search {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-family: \"Segoe UI Symbol\";\r\n    font-size: 28px;\r\n    line-height: 30px;\r\n    width: 57px;\r\n    height: 57px;\r\n}\r\n\r\n.mobile>.start-header,\r\n.mobile>.start-footer {\r\n    display: none;\r\n}\r\n\r\n.start.mobile {\r\n    margin: 8px;\r\n}\r\n\r\n.start-tiles-scroll-container {\r\n    display: flex;\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    overflow-x: overlay;\r\n    grid-row: 2;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.start-tiles-scroll-container::-webkit-scrollbar {\r\n    height: 0px;\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar {\r\n    height: 17px;\r\n    background: rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-thumb {\r\n    box-shadow: inset 0 0 15px 15px #cdcdcd;\r\n    border: solid 1px rgba(255, 255, 255, 0.33);\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-thumb:hover {\r\n    box-shadow: inset 0 0 15px 15px #dadada;\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-thumb:active {\r\n    box-shadow: inset 0 0 15px 15px rgba(0, 0, 0, 0.66);\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:horizontal {\r\n    width: 33px;\r\n    background-repeat: no-repeat;\r\n    background-size: 10px 10px;\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:hover {\r\n    background-color: #dadada;\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:active {\r\n    background-color: rgba(0, 0, 0, 0.66);\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:horizontal:increment {\r\n    background-image: url(/static/scrollbar/scroll-right.svg);\r\n    background-position: 25% center;\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:horizontal:increment:hover {\r\n    background-image: url(/static/scrollbar/scroll-right-hover.svg);\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:horizontal:increment:active {\r\n    background-image: url(/static/scrollbar/scroll-right-active.svg);\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:horizontal:decrement {\r\n    background-image: url(/static/scrollbar/scroll-left.svg);\r\n    background-position: 75% center;\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:horizontal:decrement:hover {\r\n    background-image: url(/static/scrollbar/scroll-left-hover.svg);\r\n}\r\n\r\n.start-tiles-scroll-container.scroll-visible::-webkit-scrollbar-button:single-button:horizontal:decrement:active {\r\n    background-image: url(/static/scrollbar/scroll-left-active.svg);\r\n}\r\n\r\n.start-tiles {\r\n    padding: 24px 118px 0px 62px;\r\n    display: flex;\r\n    align-self: center;\r\n    align-items: center;\r\n    height: calc(100% - 196px);\r\n}\r\n\r\n.mobile>.start-tiles {\r\n    grid-auto-rows: calc(calc(100vw / 6) - 6px);\r\n    grid-auto-columns: calc(calc(100vw / 6) - 6px);\r\n}\r\n\r\n.start-footer {\r\n    margin-left: 118px;\r\n    display: flex;\r\n    align-items: center;\r\n    align-self: center;\r\n    grid-row: 3;\r\n}\r\n\r\n.start-tile-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-left: 56px;\r\n}\r\n\r\n.start-show-all-button {\r\n    transform: rotate(90deg);\r\n    background: transparent;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n}\r\n\r\n.start-hide-all-button {\r\n    transform: rotate(-90deg);\r\n}\r\n\r\n.start-arrow-button {\r\n    font-family: \"Segoe UI Symbol\";\r\n    font-size: 42px;\r\n    display: flex;\r\n    justify-self: flex-start;\r\n}\r\n\r\n.start-show-all-icon {\r\n    width: 32px;\r\n    height: 32px;\r\n}\r\n\r\n.start-show-all-button #arrow {\r\n    fill: white;\r\n}\r\n\r\n.start-show-all-button #circle {\r\n    stroke: white;\r\n    fill: transparent;\r\n}\r\n\r\n.start-show-all-button:hover #circle {\r\n    fill: #2E00A5;\r\n}\r\n\r\n.start-show-all-button:active #circle {\r\n    fill: white;\r\n}\r\n\r\n.start-show-all-button:active #arrow {\r\n    fill: #180053;\r\n}\r\n\r\n.start-hide-all-button #arrow {\r\n    fill: black;\r\n}\r\n\r\n.start-hide-all-button #circle {\r\n    stroke: black;\r\n    fill: transparent;\r\n}\r\n\r\n.start-hide-all-button:hover #arrow {\r\n    fill: white;\r\n}\r\n\r\n.start-hide-all-button:hover #circle {\r\n    fill: #2E00A5;\r\n}\r\n\r\n.start-hide-all-button:active #circle {\r\n    fill: black;\r\n}\r\n\r\n.start-hide-all-button:active #arrow {\r\n    fill: #180053;\r\n}\r\n\r\n.all-apps-text {\r\n    display: grid;\r\n    grid-auto-columns: 450px;\r\n    column-gap: 20px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ (function(module) {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./static/scrollbar/scroll-left-active.svg":
/*!*************************************************!*\
  !*** ./static/scrollbar/scroll-left-active.svg ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/2d5713621e857dc47bd5adf503360396.svg");

/***/ }),

/***/ "./static/scrollbar/scroll-left-hover.svg":
/*!************************************************!*\
  !*** ./static/scrollbar/scroll-left-hover.svg ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/22b39bfca26d2ace4572e73ac6767e38.svg");

/***/ }),

/***/ "./static/scrollbar/scroll-left.svg":
/*!******************************************!*\
  !*** ./static/scrollbar/scroll-left.svg ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/e033e5f140de07b688abeb2de9e0aece.svg");

/***/ }),

/***/ "./static/scrollbar/scroll-right-active.svg":
/*!**************************************************!*\
  !*** ./static/scrollbar/scroll-right-active.svg ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/5573b6345d89f13a3fad67a037360aae.svg");

/***/ }),

/***/ "./static/scrollbar/scroll-right-hover.svg":
/*!*************************************************!*\
  !*** ./static/scrollbar/scroll-right-hover.svg ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/ac797d62f33d79d4bb24c3850f2283a1.svg");

/***/ }),

/***/ "./static/scrollbar/scroll-right.svg":
/*!*******************************************!*\
  !*** ./static/scrollbar/scroll-right.svg ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/862b6755e3af5a5753c8d7330e372569.svg");

/***/ }),

/***/ "./static/wam.png":
/*!************************!*\
  !*** ./static/wam.png ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/46cb65a97dc1a70fb7df2fc706b31158.png");

/***/ }),

/***/ "./node_modules/preact/debug/dist/debug.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/debug/dist/debug.module.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetPropWarnings": function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_devtools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/devtools */ "./node_modules/preact/devtools/dist/devtools.module.js");
var o={};function r(){o={}}function a(n){return n.type===preact__WEBPACK_IMPORTED_MODULE_0__.Fragment?"Fragment":"function"==typeof n.type?n.type.displayName||n.type.name:"string"==typeof n.type?n.type:"#text"}var i=[],s=[];function c(){return i.length>0?i[i.length-1]:null}var l=!1;function u(n){return"function"==typeof n.type&&n.type!=preact__WEBPACK_IMPORTED_MODULE_0__.Fragment}function f(n){for(var t=[n],e=n;null!=e.__o;)t.push(e.__o),e=e.__o;return t.reduce(function(n,t){n+="  in "+a(t);var e=t.__source;return e?n+=" (at "+e.fileName+":"+e.lineNumber+")":l||(l=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),n+"\n"},"")}var p="function"==typeof WeakMap,d=preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.setState;preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.setState=function(n,t){return null==this.__v?null==this.state&&console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n'+f(c())):null==this.__P&&console.warn('Can\'t call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+f(this.__v)),d.call(this,n,t)};var h=preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.forceUpdate;function y(n){var t=n.props,e=a(n),o="";for(var r in t)if(t.hasOwnProperty(r)&&"children"!==r){var i=t[r];"function"==typeof i&&(i="function "+(i.displayName||i.name)+"() {}"),i=Object(i)!==i||i.toString?i+"":Object.prototype.toString.call(i),o+=" "+r+"="+JSON.stringify(i)}var s=t.children;return"<"+e+o+(s&&s.length?">..</"+e+">":" />")}preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.forceUpdate=function(n){return null==this.__v?console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n'+f(c())):null==this.__P&&console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+f(this.__v)),h.call(this,n)},function(){!function(){var t=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,e=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,o=preact__WEBPACK_IMPORTED_MODULE_0__.options.__,r=preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode,a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r;preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(n){u(n)&&s.pop(),i.pop(),e&&e(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){u(n)&&i.push(n),t&&t(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__=function(n,t){s=[],o&&o(n,t)},preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode=function(n){n.__o=s.length>0?s[s.length-1]:null,r&&r(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){u(n)&&s.push(n),a&&a(n)}}();var t=!1,e=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,r=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,c=preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode,l=preact__WEBPACK_IMPORTED_MODULE_0__.options.__e,d=preact__WEBPACK_IMPORTED_MODULE_0__.options.__,h=preact__WEBPACK_IMPORTED_MODULE_0__.options.__h,m=p?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,v=[];preact__WEBPACK_IMPORTED_MODULE_0__.options.__e=function(n,t,e,o){if(t&&t.__c&&"function"==typeof n.then){var r=n;n=new Error("Missing Suspense. The throwing component was: "+a(t));for(var i=t;i;i=i.__)if(i.__c&&i.__c.__c){n=r;break}if(n instanceof Error)throw n}try{(o=o||{}).componentStack=f(t),l(n,t,e,o),"function"!=typeof n.then&&setTimeout(function(){throw n})}catch(n){throw n}},preact__WEBPACK_IMPORTED_MODULE_0__.options.__=function(n,t){if(!t)throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");var e;switch(t.nodeType){case 1:case 11:case 9:e=!0;break;default:e=!1}if(!e){var o=a(n);throw new Error("Expected a valid HTML node as a second argument to render.\tReceived "+t+" instead: render(<"+o+" />, "+t+");")}d&&d(n,t)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){var r=n.type,i=function n(t){return t?"function"==typeof t.type?n(t.__):t:{}}(n.__);if(t=!0,void 0===r)throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports"+y(n)+"\n\n"+f(n));if(null!=r&&"object"==typeof r){if(void 0!==r.__k&&void 0!==r.__e)throw new Error("Invalid type passed to createElement(): "+r+"\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My"+a(n)+" = "+y(r)+";\n  let vnode = <My"+a(n)+" />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n"+f(n));throw new Error("Invalid type passed to createElement(): "+(Array.isArray(r)?"array":r))}if("thead"!==r&&"tfoot"!==r&&"tbody"!==r||"table"===i.type?"tr"===r&&"thead"!==i.type&&"tfoot"!==i.type&&"tbody"!==i.type&&"table"!==i.type?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+y(n)+"\n\n"+f(n)):"td"===r&&"tr"!==i.type?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+y(n)+"\n\n"+f(n)):"th"===r&&"tr"!==i.type&&console.error("Improper nesting of table. Your <th> should have a <tr>."+y(n)+"\n\n"+f(n)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+y(n)+"\n\n"+f(n)),void 0!==n.ref&&"function"!=typeof n.ref&&"object"!=typeof n.ref&&!("$$typeof"in n))throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got ['+typeof n.ref+"] instead\n"+y(n)+"\n\n"+f(n));if("string"==typeof n.type)for(var s in n.props)if("o"===s[0]&&"n"===s[1]&&"function"!=typeof n.props[s]&&null!=n.props[s])throw new Error("Component's \""+s+'" property should be a function, but got ['+typeof n.props[s]+"] instead\n"+y(n)+"\n\n"+f(n));if("function"==typeof n.type&&n.type.propTypes){if("Lazy"===n.type.displayName&&m&&!m.lazyPropTypes.has(n.type)){var c="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var l=n.type();m.lazyPropTypes.set(n.type,!0),console.warn(c+"Component wrapped in lazy() is "+a(l))}catch(n){console.warn(c+"We will log the wrapped component's name once it is loaded.")}}var u=n.props;n.type.__f&&delete(u=function(n,t){for(var e in t)n[e]=t[e];return n}({},u)).ref,function(n,t,e,r,a){Object.keys(n).forEach(function(e){var i;try{i=n[e](t,e,r,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(n){i=n}!i||i.message in o||(o[i.message]=!0,console.error("Failed prop type: "+i.message+(a&&"\n"+a()||"")))})}(n.type.propTypes,u,0,a(n),function(){return f(n)})}e&&e(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__h=function(n,e,o){if(!n||!t)throw new Error("Hook can only be invoked from render methods.");h&&h(n,e,o)};var b=function(n,t){return{get:function(){var e="get"+n+t;v&&v.indexOf(e)<0&&(v.push(e),console.warn("getting vnode."+n+" is deprecated, "+t))},set:function(){var e="set"+n+t;v&&v.indexOf(e)<0&&(v.push(e),console.warn("setting vnode."+n+" is not allowed, "+t))}}},w={nodeName:b("nodeName","use vnode.type"),attributes:b("attributes","use vnode.props"),children:b("children","use vnode.props.children")},g=Object.create({},w);preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode=function(n){var t=n.props;if(null!==n.type&&null!=t&&("__source"in t||"__self"in t)){var e=n.props={};for(var o in t){var r=t[o];"__source"===o?n.__source=r:"__self"===o?n.__self=r:e[o]=r}}n.__proto__=g,c&&c(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(n){if(n.__k&&n.__k.forEach(function(t){if(t&&void 0===t.type){delete t.__,delete t.__b;var e=Object.keys(t).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+e+"}.\n\n"+f(n))}}),t=!1,r&&r(n),null!=n.__k)for(var e=[],o=0;o<n.__k.length;o++){var a=n.__k[o];if(a&&null!=a.key){var i=a.key;if(-1!==e.indexOf(i)){console.error('Following component has two or more children with the same key attribute: "'+i+'". This may cause glitches and misbehavior in rendering process. Component: \n\n'+y(n)+"\n\n"+f(n));break}e.push(i)}}}}();
//# sourceMappingURL=debug.module.js.map


/***/ }),

/***/ "./node_modules/preact/devtools/dist/devtools.module.js":
/*!**************************************************************!*\
  !*** ./node_modules/preact/devtools/dist/devtools.module.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addHookName": function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
function t(o,e){return preact__WEBPACK_IMPORTED_MODULE_0__.options.__a&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__a(e),o}"undefined"!=typeof window&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.7.1",preact__WEBPACK_IMPORTED_MODULE_0__.options,{Fragment:preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,Component:preact__WEBPACK_IMPORTED_MODULE_0__.Component});
//# sourceMappingURL=devtools.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": function() { return /* binding */ _; },
/* harmony export */   "Fragment": function() { return /* binding */ d; },
/* harmony export */   "cloneElement": function() { return /* binding */ B; },
/* harmony export */   "createContext": function() { return /* binding */ D; },
/* harmony export */   "createElement": function() { return /* binding */ v; },
/* harmony export */   "createRef": function() { return /* binding */ p; },
/* harmony export */   "h": function() { return /* binding */ v; },
/* harmony export */   "hydrate": function() { return /* binding */ q; },
/* harmony export */   "isValidElement": function() { return /* binding */ i; },
/* harmony export */   "options": function() { return /* binding */ l; },
/* harmony export */   "render": function() { return /* binding */ S; },
/* harmony export */   "toChildArray": function() { return /* binding */ A; }
/* harmony export */ });
var n,l,u,i,t,o,r,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n)}function v(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y(l,f,t,o,null)}function y(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null==r&&null!=l.vnode&&l.vnode(f),f}function p(){return{current:null}}function d(n){return n.children}function _(n,l){this.props=n,this.context=l}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||r!==l.debounceRendering)&&((r=l.debounceRendering)||o)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k(t):o,t.__h),z(u,t),t.__e!=o&&b(t)))})}function w(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null}j(n,_,p=p||e,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k(p))}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h])}function x(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?x(i,l,u):P(u,i,i,t,i.__e,l));return l}function A(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A(n,l)}):l.push(n)),l}function P(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px"}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k)})}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(r=r&&n.call(l.childNodes),a=(y=i.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_||"option"===d&&_!==y.value)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var o,r,f;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!o&&t||i).__k=v(d,null,[u]),r||e,e,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z(f,u)}function q(n,l){S(n,l,q)}function B(l,u,i){var t,o,r,f=a({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y(l.type,f,t||l.key,o||l.ref,null)}function D(n,l){var u={__c:l="__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c.slice,l={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this))},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this))},_.prototype.render=d,t=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,f=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js":
/*!*******************************************************************!*\
  !*** ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fragment": function() { return /* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment; },
/* harmony export */   "jsx": function() { return /* binding */ e; },
/* harmony export */   "jsxDEV": function() { return /* binding */ e; },
/* harmony export */   "jsxs": function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var o=0;function e(_,e,n,t,f){var l,s,u={};for(s in e)"ref"==s?l=e[s]:u[s]=e[s];var a={type:_,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o,__source:f,__self:t};if("function"==typeof _&&(l=_.defaultProps))for(s in l)void 0===u[s]&&(u[s]=l[s]);return preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode&&preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode(a),a}
//# sourceMappingURL=jsxRuntime.module.js.map


/***/ }),

/***/ "./src/Start/splash-screen.css":
/*!*************************************!*\
  !*** ./src/Start/splash-screen.css ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_splash_screen_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./splash-screen.css */ "./node_modules/css-loader/dist/cjs.js!./src/Start/splash-screen.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_splash_screen_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_splash_screen_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/Start/tile.css":
/*!****************************!*\
  !*** ./src/Start/tile.css ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./tile.css */ "./node_modules/css-loader/dist/cjs.js!./src/Start/tile.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/start.css":
/*!***********************!*\
  !*** ./src/start.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_start_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./start.css */ "./node_modules/css-loader/dist/cjs.js!./src/start.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_start_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_start_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Data/Package.ts":
/*!*****************************!*\
  !*** ./src/Data/Package.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageCompatibilityMode": function() { return /* binding */ PackageCompatibilityMode; },
/* harmony export */   "PackageReader": function() { return /* binding */ PackageReader; }
/* harmony export */ });
/* harmony import */ var base32_encode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! base32-encode */ "./node_modules/base32-encode/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var PackageCompatibilityMode;
(function (PackageCompatibilityMode) {
    PackageCompatibilityMode[PackageCompatibilityMode["windows80"] = 0] = "windows80";
    PackageCompatibilityMode[PackageCompatibilityMode["windows81"] = 1] = "windows81";
    PackageCompatibilityMode[PackageCompatibilityMode["windows10"] = 2] = "windows10";
})(PackageCompatibilityMode || (PackageCompatibilityMode = {}));
class PackageReader {
    constructor(packageName) {
        this.packageName = packageName;
    }
    readPackage() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            //let pack = new Package(this.packagePath);
            let pack = { path: "", applications: new Map() };
            // let manifestPath = path.join(this.packagePath, "AppxManifest.xml");
            // let manifestText = fs.readFileSync(manifestPath, 'utf-8');
            let manifestUrl = "/manifests/" + this.packageName + ".appxmanifest";
            let manifestText = yield (yield fetch(manifestUrl)).text();
            let manifestDocument = new DOMParser()
                .parseFromString(manifestText, 'application/xml');
            if (manifestDocument === null) {
                throw new Error("Manifest failed to parse!");
            }
            let identityElement = manifestDocument.querySelector("Identity");
            let propertiesElement = manifestDocument.querySelector("Properties");
            let applicationsElement = manifestDocument.querySelector("Applications");
            let osMinVersion = (_a = manifestDocument.querySelector("OSMinVersion")) === null || _a === void 0 ? void 0 : _a.textContent;
            if (!osMinVersion || osMinVersion.startsWith("6.3")) {
                pack.compatibilityMode = PackageCompatibilityMode.windows81;
            }
            else if (osMinVersion.startsWith("6.2")) {
                pack.compatibilityMode = PackageCompatibilityMode.windows80;
            }
            this.compatibilityMode = pack.compatibilityMode;
            console.log(`loading package ${this.packageName} with mode ${PackageCompatibilityMode[this.compatibilityMode]}`);
            pack.identity = yield this.loadTextResources(this.readIdentity(identityElement));
            pack.properties = this.loadTextResources(this.readProperties(propertiesElement));
            for (const applicationElement of applicationsElement.querySelectorAll("Application")) {
                let application = this.loadTextResources(this.readApplication(applicationElement));
                pack.applications.set(application.id, application);
            }
            return pack;
        });
    }
    readIdentity(element) {
        return __awaiter(this, void 0, void 0, function* () {
            let name = element.getAttribute("Name");
            let publisher = element.getAttribute("Publisher");
            let version = element.getAttribute("Version");
            // compute the PackageFamilyName as base32 crockford of the first 8 bytes of the SHA256
            // hash of the Publisher field.
            const buffer = new ArrayBuffer(publisher.length * 2);
            const bufView = new Uint16Array(buffer);
            for (let i = 0; i < publisher.length; i++) {
                bufView[i] = publisher.charCodeAt(i);
            }
            const hash = yield crypto.subtle.digest('SHA-256', bufView);
            const base32 = (0,base32_encode__WEBPACK_IMPORTED_MODULE_0__["default"])(hash.slice(0, 8), 'Crockford');
            let packageFamilyName = name + "_" + base32.toLowerCase();
            return { name, publisher, version, packageFamilyName };
        });
    }
    readProperties(element) {
        var _a;
        let displayName = element.querySelector("DisplayName").textContent;
        let description = (_a = element.querySelector("Description")) === null || _a === void 0 ? void 0 : _a.textContent;
        let publisherDisplayName = element.querySelector("PublisherDisplayName").textContent;
        let logo = this.fixupUrl(element.querySelector("Logo").textContent);
        return { displayName, description, publisherDisplayName, logo };
    }
    readApplication(element) {
        let id = element.getAttribute("Id");
        let startPage = element.getAttribute("StartPage");
        let visualElementsElement = element.querySelector("VisualElements");
        let visualElements = this.loadTextResources(this.readVisualElements(visualElementsElement));
        // this will become important eventually (share targets, etc.)
        // let extensionsElement = element.querySelector("Extensions");
        // for (const extensionElement of extensionsElement.childNodes) {
        // }
        return { id, startPage, visualElements, extensions: [] };
    }
    readVisualElements(element) {
        let visualElements = {};
        visualElements.displayName = element.getAttribute("DisplayName");
        visualElements.description = element.getAttribute("Description");
        visualElements.foregroundText = element.getAttribute("ForegroundText");
        visualElements.backgroundColor = element.getAttribute("BackgroundColor");
        if (this.compatibilityMode === PackageCompatibilityMode.windows80) {
            visualElements.square150x150Logo = this.fixupUrl(element.getAttribute("Logo"));
            visualElements.square30x30Logo = this.fixupUrl(element.getAttribute("SmallLogo"));
        }
        else {
            visualElements.square150x150Logo = this.fixupUrl(element.getAttribute("Square150x150Logo"));
            visualElements.square30x30Logo = this.fixupUrl(element.getAttribute("Square30x30Logo"));
        }
        let defaultTileElement = element.querySelector("DefaultTile");
        if (defaultTileElement !== null) {
            visualElements.defaultTile = this.loadTextResources(this.readDefaultTile(defaultTileElement));
        }
        else {
            visualElements.defaultTile = { shortName: visualElements.displayName };
        }
        let splashScreenElement = element.querySelector("SplashScreen");
        visualElements.splashScreen = this.readSplashScreen(splashScreenElement);
        return visualElements;
    }
    readSplashScreen(element) {
        //let splashScreen = new ApplicationSplashScreen();
        let backgroundColor = element.getAttribute("BackgroundColor");
        let image = this.fixupUrl(element.getAttribute("Image"));
        return { backgroundColor, image };
    }
    readDefaultTile(element) {
        let defaultTile = { showNameOnTiles: [] };
        defaultTile.shortName = element.getAttribute("ShortName");
        if (this.compatibilityMode == PackageCompatibilityMode.windows80) {
            defaultTile.wide310x150Logo = this.fixupUrl(element.getAttribute("WideLogo"));
            var showName = element.getAttribute("ShowName");
            if (showName === "allLogos") {
                defaultTile.showNameOnTiles.push("square150x150");
                defaultTile.showNameOnTiles.push("wide310x150");
            }
            else if (showName == "logoOnly") {
                defaultTile.showNameOnTiles.push("square150x150");
            }
            else if (showName == "wideLogoOnly") {
                defaultTile.showNameOnTiles.push("wide310x150");
            }
        }
        else {
            defaultTile.square70x70Logo = this.fixupUrl(element.getAttribute("Square70x70Logo"));
            defaultTile.wide310x150Logo = this.fixupUrl(element.getAttribute("Wide310x150Logo"));
            defaultTile.square310x310Logo = this.fixupUrl(element.getAttribute("Square310x310Logo"));
            for (const showOnElement of element.querySelectorAll("ShowOn")) {
                let tile = showOnElement.getAttribute("Tile");
                defaultTile.showNameOnTiles.push(tile.substring(0, tile.length - 4));
            }
        }
        let tileUpdate = element.querySelector("TileUpdate");
        if (tileUpdate) {
            defaultTile.tileUpdateUrl = tileUpdate.getAttribute("UriTemplate");
        }
        return defaultTile;
    }
    fixupUrl(relativeUrl) {
        if (relativeUrl)
            return "/assets/" + this.packageName.toLowerCase() + "/" + relativeUrl;
        return null;
    }
    loadTextResources(object) {
        return object;
    }
}


/***/ }),

/***/ "./src/Data/PackageRegistry.ts":
/*!*************************************!*\
  !*** ./src/Data/PackageRegistry.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageRegistry": function() { return /* binding */ PackageRegistry; }
/* harmony export */ });
class PackageRegistry {
    static getPackage(id) {
        var pack = PackageRegistry.packages.get(id);
        return pack;
    }
    static registerPackage(pack) {
        console.log(pack);
        PackageRegistry.packages.set(pack.identity.packageFamilyName, pack);
    }
}
PackageRegistry.packages = new Map();


/***/ }),

/***/ "./src/Start.tsx":
/*!***********************!*\
  !*** ./src/Start.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Start": function() { return /* binding */ Start; }
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _Start_TileGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Start/TileGroup */ "./src/Start/TileGroup.tsx");
/* harmony import */ var _Start_TileSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Start/TileSize */ "./src/Start/TileSize.tsx");
/* harmony import */ var _static_wam_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../static/wam.png */ "./static/wam.png");
/* harmony import */ var _start_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start.css */ "./src/start.css");






const HeaderButton = (props) => {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ class: "start-header-button " + props.primaryClass }, { children: props.children })));
};
class Start extends preact__WEBPACK_IMPORTED_MODULE_1__.Component {
    componentDidMount() {
        fetch("/dist/StartScreen.xml").then(resp => resp.text())
            .then(text => this.parseLayout(text));
    }
    parseLayout(text) {
        let doc = new DOMParser().parseFromString(text, 'application/xml');
        let root = doc.querySelector("launcher");
        if (root == null) {
            return;
        }
        let tileGroups = [];
        let groups = root.querySelectorAll("group");
        for (const group of groups) {
            let groupProps = {
                title: group.getAttribute("name"),
                tiles: []
            };
            for (const tile of group.querySelectorAll("tile")) {
                let rawAppId = tile.getAttribute("AppID");
                let tileProps = {
                    packageName: null,
                    appId: null,
                    size: _Start_TileSize__WEBPACK_IMPORTED_MODULE_3__.TileSize.square150x150,
                    fence: false
                };
                if (rawAppId !== null) {
                    // parsing windows 8 start screen xml dump
                    console.log(`Parsing AppID ${rawAppId}`);
                    let idx = rawAppId.lastIndexOf("!");
                    if (idx === -1) {
                        tileProps.appId = rawAppId;
                    }
                    else {
                        let packageFamilyName = rawAppId.substring(0, idx);
                        let appId = rawAppId.substring(idx + 1);
                        // idx = packageFamilyName.lastIndexOf("_");
                        // if (idx !== -1) {
                        //     packageFamilyName = packageFamilyName.substring(0, idx);
                        // }
                        tileProps.packageName = packageFamilyName;
                        tileProps.appId = appId;
                    }
                    tileProps.fence = tile.getAttribute("FencePost") === "1";
                    tileProps.size = _Start_TileSize__WEBPACK_IMPORTED_MODULE_3__.TileSize[tile.getAttribute("size")];
                }
                else {
                    tileProps.packageName = tile.getAttribute("packageName");
                    tileProps.appId = tile.getAttribute("appId");
                    tileProps.fence = tile.getAttribute("fence") === "true";
                    tileProps.size = _Start_TileSize__WEBPACK_IMPORTED_MODULE_3__.TileSize[tile.getAttribute("size")];
                }
                groupProps.tiles.push(tileProps);
            }
            tileGroups.push(groupProps);
        }
        this.setState({ tileGroups: tileGroups });
    }
    render() {
        return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ class: "start start-screen" }, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ class: "start-content" }, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ class: "start-header start-main-header" }, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", Object.assign({ class: "start-title" }, { children: "Start" })), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ class: "start-header-buttons" }, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeaderButton, Object.assign({ primaryClass: "start-header-user-button" }, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ class: "username" }, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", Object.assign({ class: "primary" }, { children: "Thomas" })), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", Object.assign({ class: "secondary" }, { children: "May" }))] })), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: _static_wam_png__WEBPACK_IMPORTED_MODULE_4__["default"], class: "picture" })] })), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderButton, Object.assign({ primaryClass: "start-header-power" }, { children: "\uE07D" })), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderButton, Object.assign({ primaryClass: "start-header-search" }, { children: "\uE2FB" }))] }))] })), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ class: "start-tiles-scroll-container" }, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ class: "start-tiles" }, { children: this.state.tileGroups ? this.state.tileGroups.map(m => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Start_TileGroup__WEBPACK_IMPORTED_MODULE_2__.TileGroup, Object.assign({}, m))) : [] })) })), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: "start-footer" })] })) })));
    }
}


/***/ }),

/***/ "./src/Start/CoreWindowSplashScreen.tsx":
/*!**********************************************!*\
  !*** ./src/Start/CoreWindowSplashScreen.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreWindowSplashScreen": function() { return /* binding */ CoreWindowSplashScreen; }
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _splash_screen_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash-screen.css */ "./src/Start/splash-screen.css");



// 
// Represents a CoreWindow's splash screen
//
class CoreWindowSplashScreen extends preact__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ class: "splash-screen" + (this.props.visible ? " visible" : ""), style: { background: this.props.backgroundColour } }, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ class: "splash-screen-container" }, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { class: "splash-screen-image", src: this.props.splashImageUrl }) })) })));
    }
}


/***/ }),

/***/ "./src/Start/FenceTile.tsx":
/*!*********************************!*\
  !*** ./src/Start/FenceTile.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FenceTile": function() { return /* binding */ FenceTile; }
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile */ "./src/Start/Tile.tsx");
/* harmony import */ var _tile_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tile.css */ "./src/Start/tile.css");




class FenceTile extends preact__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
    }
    render(props) {
        return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ class: "fence-tile-container square150x150", style: `grid-row-start: ${props.row + 1}; grid-column-start: ${props.column + 1}` }, { children: [...props.apps.map(a => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tile__WEBPACK_IMPORTED_MODULE_2__.Tile, Object.assign({}, a)))] })));
    }
}


/***/ }),

/***/ "./src/Start/Tile.tsx":
/*!****************************!*\
  !*** ./src/Start/Tile.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tile": function() { return /* binding */ Tile; }
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _TileSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TileSize */ "./src/Start/TileSize.tsx");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _tile_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tile.css */ "./src/Start/tile.css");
/* harmony import */ var _CoreWindowSplashScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CoreWindowSplashScreen */ "./src/Start/CoreWindowSplashScreen.tsx");
/* harmony import */ var _Data_PackageRegistry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Data/PackageRegistry */ "./src/Data/PackageRegistry.ts");







class Tile extends preact__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        let pack = _Data_PackageRegistry__WEBPACK_IMPORTED_MODULE_6__.PackageRegistry.getPackage(props.packageName);
        if (!pack)
            console.warn("Package " + props.packageName + " not found!");
        let app = pack === null || pack === void 0 ? void 0 : pack.applications.get(props.appId);
        if (!app)
            console.warn("App " + props.appId + " in package " + props.packageName + " not found!");
        this.state = { pack, app, pressState: "none", launching: false };
        this.onPointerDown = this.onPointerDown.bind(this);
        this.onPointerUp = this.onPointerUp.bind(this);
    }
    onPointerDown(e) {
        const element = e.target;
        const size = this.getTileSize(this.props.size);
        const offsetX = Math.max(0, Math.min(e.offsetX, size.width));
        const offsetY = Math.max(0, Math.min(e.offsetY, size.height));
        element.setPointerCapture(e.pointerId);
        if ((offsetX >= (size.width * 0.33) && offsetX <= (size.width * 0.66)) && (offsetY >= (size.height * 0.33) && offsetY <= (size.height * 0.66))) {
            this.setState({ pressState: "center" });
        }
        else {
            var distanceToPositive = { x: offsetX, y: offsetY };
            var distanceToNegative = { x: (size.width - offsetX), y: (size.height - offsetY) };
            let smallestX = Math.min(distanceToPositive.x, distanceToNegative.x);
            let smallestY = Math.min(distanceToPositive.y, distanceToNegative.y);
            let smallestDistance = Math.min(smallestX, smallestY);
            if (smallestDistance == distanceToPositive.x)
                this.setState({ pressState: "left" });
            else if (smallestDistance == distanceToNegative.x)
                this.setState({ pressState: "right" });
            else if (smallestDistance == distanceToNegative.y)
                this.setState({ pressState: "bottom" });
            else
                this.setState({ pressState: "top" });
        }
    }
    onPointerUp(e) {
        let element = e.target;
        element.releasePointerCapture(e.pointerId);
        let bodyRect = document.body.getBoundingClientRect();
        let elemRect = this.base.getBoundingClientRect();
        this.setState({
            pressState: "none",
            initialX: elemRect.left - bodyRect.left,
            initialY: elemRect.top - bodyRect.top,
            initialWidth: elemRect.width,
            initialHeight: elemRect.height
        });
        requestAnimationFrame(this.flip.bind(this));
    }
    onFlipComplete() {
        window.location.href = this.state.app.startPage;
    }
    render(props, state) {
        var _a, _b, _c;
        let containerStyle = state.flipStyle;
        if (!containerStyle && props.column !== undefined && props.row !== undefined) {
            containerStyle = `grid-row-start: ${props.row + 1}; grid-column-start: ${props.column + 1}`;
        }
        let tileColour = (_b = (_a = state.app) === null || _a === void 0 ? void 0 : _a.visualElements.backgroundColor) !== null && _b !== void 0 ? _b : "#4617b4";
        let frontStyle = {
            background: `linear-gradient(to right, ${tileColour}, ${(0,_Util__WEBPACK_IMPORTED_MODULE_3__.lightenDarkenColour)(tileColour, 30)})`,
            border: `1px solid ${(0,_Util__WEBPACK_IMPORTED_MODULE_3__.lightenDarkenColour)(tileColour, 40)}`
        };
        let backStyle = { background: tileColour };
        if (!state.pack || !state.app) {
            return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ class: "tile-container " + _TileSize__WEBPACK_IMPORTED_MODULE_2__.TileSize[props.size] + " " + state.pressState, style: containerStyle }, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ class: "tile" }, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: "front", style: frontStyle }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: "back", style: backStyle })] })) })));
        }
        let tileImageUrl = ((_c = this.getTileImageUrl(props.size, state.app)) !== null && _c !== void 0 ? _c : state.app.visualElements.square150x150Logo) + "?scale=80";
        let showTextSizes = state.app.visualElements.defaultTile.showNameOnTiles.map(v => _TileSize__WEBPACK_IMPORTED_MODULE_2__.TileSize[v]);
        let tileVisualText = null;
        if (props.size != _TileSize__WEBPACK_IMPORTED_MODULE_2__.TileSize.square70x70 && showTextSizes.includes(props.size)) {
            tileVisualText = (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", Object.assign({ class: "tile-front-text" + (state.app.visualElements.foregroundText == "dark" ? " black" : "") }, { children: state.app.visualElements.displayName }));
        }
        let size = this.getTileSize(props.size);
        let frontViewBox = `0 0 ${size.width} ${size.height}`;
        // todo: this depends on the target size of the corewindow
        let backViewBox = `0 0 ${window.innerWidth} ${window.innerHeight}`;
        return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ class: "tile-container " + _TileSize__WEBPACK_IMPORTED_MODULE_2__.TileSize[props.size] + " " + state.pressState + (state.flipped ? " flipped" : ""), style: containerStyle, onPointerDown: this.onPointerDown, onPointerUp: this.onPointerUp }, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ class: "tile" }, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ class: "front", style: frontStyle }, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "none", viewBox: frontViewBox }, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("foreignObject", Object.assign({ width: size.width, height: size.height }, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ class: "tile-visual tile-visual-visible" }, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "tile-front-image-container" }, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { draggable: false, src: tileImageUrl, className: "tile-front-image " + _TileSize__WEBPACK_IMPORTED_MODULE_2__.TileSize[props.size] }) })), tileVisualText] })) })) })) })), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ class: "back", style: backStyle }, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "none", viewBox: backViewBox, style: "width: 100%; height:100%;" }, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("foreignObject", Object.assign({ width: "100vw", height: "100vh" }, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CoreWindowSplashScreen__WEBPACK_IMPORTED_MODULE_5__.CoreWindowSplashScreen, { backgroundColour: state.app.visualElements.splashScreen.backgroundColor, splashImageUrl: state.app.visualElements.splashScreen.image, visible: true }) })) })) }))] })) })));
    }
    getTileSize(size) {
        switch (size) {
            case _TileSize__WEBPACK_IMPORTED_MODULE_2__.TileSize.square70x70:
                return { width: 56, height: 56 };
            case _TileSize__WEBPACK_IMPORTED_MODULE_2__.TileSize.square150x150:
                return { width: 120, height: 120 };
            case _TileSize__WEBPACK_IMPORTED_MODULE_2__.TileSize.wide310x150:
                return { width: 248, height: 120 };
            case _TileSize__WEBPACK_IMPORTED_MODULE_2__.TileSize.square310x310:
                return { width: 248, height: 248 };
        }
    }
    getTileImageUrl(size, app) {
        switch (size) {
            case _TileSize__WEBPACK_IMPORTED_MODULE_2__.TileSize.square70x70:
                return app.visualElements.defaultTile.square70x70Logo;
            case _TileSize__WEBPACK_IMPORTED_MODULE_2__.TileSize.square150x150:
                return app.visualElements.square150x150Logo;
            case _TileSize__WEBPACK_IMPORTED_MODULE_2__.TileSize.wide310x150:
                return app.visualElements.defaultTile.wide310x150Logo;
            case _TileSize__WEBPACK_IMPORTED_MODULE_2__.TileSize.square310x310:
                return app.visualElements.defaultTile.square310x310Logo;
        }
    }
    flip(time) {
        if (this.state.start == null) {
            this.setState({ start: time });
            requestAnimationFrame(this.flip.bind(this));
            return;
        }
        // todo: this needs to be the corewindow target
        let bodyRect = document.body.getBoundingClientRect();
        let progress = (time - this.state.start) / 1000;
        let angle = (0,_Util__WEBPACK_IMPORTED_MODULE_3__.circularEase)(progress, 0, 180, 1);
        let width = (0,_Util__WEBPACK_IMPORTED_MODULE_3__.cubicEase)(progress, this.state.initialWidth, bodyRect.width - this.state.initialWidth, 1);
        let height = (0,_Util__WEBPACK_IMPORTED_MODULE_3__.cubicEase)(progress, this.state.initialHeight, bodyRect.height - this.state.initialHeight, 1);
        let targetX = ((bodyRect.width - width) / 2) - (this.state.initialX);
        let targetY = ((bodyRect.height - height) / 2) - (this.state.initialY);
        let x = (0,_Util__WEBPACK_IMPORTED_MODULE_3__.cubicEase)(Math.min(1, progress * 1.1), this.state.initialX, targetX, 1) - this.state.initialX;
        let y = (0,_Util__WEBPACK_IMPORTED_MODULE_3__.cubicEase)(Math.min(1, progress * 1.1), this.state.initialY, targetY, 1) - this.state.initialY;
        let z = -125 + 125 * (0,_Util__WEBPACK_IMPORTED_MODULE_3__.easeInCubic)(Math.min(1, progress * 1.1));
        let element = this.base;
        let flipStyle = `
            position: absolute; 
            top:${this.state.initialY}px;
            left:${this.state.initialX}px;
            width: ${width}px;
            height: ${height}px; 
            transform: translate3d(${x}px, ${y}px, ${z}px) rotate3D(0,1,0,${angle}deg); 
            transform-style: preserve-3d; 
            z-index: 100;`;
        let flipped = this.state.flipped;
        if (angle >= 90 && !this.state.flipped) {
            flipped = true;
            this.setState({ flipped: true });
        }
        if (progress < 1) {
            element.style.cssText = flipStyle;
            requestAnimationFrame(this.flip.bind(this));
        }
        else {
            setTimeout(this.onFlipComplete.bind(this), 500);
        }
    }
}


/***/ }),

/***/ "./src/Start/TileGroup.tsx":
/*!*********************************!*\
  !*** ./src/Start/TileGroup.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TileGroup": function() { return /* binding */ TileGroup; }
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile */ "./src/Start/Tile.tsx");
/* harmony import */ var _TileSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TileSize */ "./src/Start/TileSize.tsx");
/* harmony import */ var _tile_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tile.css */ "./src/Start/tile.css");
/* harmony import */ var _FenceTile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FenceTile */ "./src/Start/FenceTile.tsx");






class TileGroup extends preact__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        this.groupRef = (0,preact__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.headerRef = (0,preact__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    }
    componentDidMount() {
        window.addEventListener("resize", this.onResize.bind(this));
        let startTilesElement = this.groupRef.current.parentElement;
        let headerText = this.headerRef.current;
        this.setState({ availableHeight: startTilesElement.offsetHeight - headerText.offsetHeight });
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize.bind(this));
    }
    onResize() {
        let startTilesElement = this.groupRef.current.parentElement;
        let headerText = this.headerRef.current;
        this.setState({ availableHeight: startTilesElement.offsetHeight - headerText.offsetHeight });
    }
    tileSizeToWidth(size) {
        switch (size) {
            case _TileSize__WEBPACK_IMPORTED_MODULE_3__.TileSize.square150x150:
                return 1;
            case _TileSize__WEBPACK_IMPORTED_MODULE_3__.TileSize.wide310x150:
            case _TileSize__WEBPACK_IMPORTED_MODULE_3__.TileSize.square310x310:
                return 2;
            case _TileSize__WEBPACK_IMPORTED_MODULE_3__.TileSize.square70x70: // handled separately
            default:
                throw new Error("Invalid tile size!");
        }
    }
    tileSizeToHeight(size) {
        switch (size) {
            case _TileSize__WEBPACK_IMPORTED_MODULE_3__.TileSize.square150x150:
            case _TileSize__WEBPACK_IMPORTED_MODULE_3__.TileSize.wide310x150:
                return 1;
            case _TileSize__WEBPACK_IMPORTED_MODULE_3__.TileSize.square310x310:
                return 2;
            case _TileSize__WEBPACK_IMPORTED_MODULE_3__.TileSize.square70x70: // handled separately
            default:
                throw new Error("Invalid tile size!");
        }
    }
    collapseTiles(tiles) {
        let fullTiles = [];
        let currentFence = null;
        let resetFence = (val = null) => {
            if (currentFence && currentFence.length)
                fullTiles.push({ size: _TileSize__WEBPACK_IMPORTED_MODULE_3__.TileSize.square150x150, apps: currentFence });
            currentFence = val;
        };
        for (const tile of tiles) {
            if (tile.fence && tile.size === _TileSize__WEBPACK_IMPORTED_MODULE_3__.TileSize.square70x70) {
                resetFence([]);
                currentFence.push(tile);
                continue;
            }
            if (currentFence) {
                if (tile.size !== _TileSize__WEBPACK_IMPORTED_MODULE_3__.TileSize.square70x70) {
                    resetFence();
                }
                else {
                    if (currentFence.length === 4) {
                        resetFence([]);
                    }
                    currentFence.push(tile);
                    continue;
                }
            }
            fullTiles.push(tile);
        }
        if (currentFence) {
            fullTiles.push(currentFence);
        }
        console.log("collaped tiles");
        return fullTiles;
    }
    render(props, state) {
        let tiles = [];
        let style = {};
        if (state.availableHeight !== undefined) {
            let availableHeight = state.availableHeight;
            let maxRows = Math.floor(availableHeight / 128);
            console.log(`available height: ${availableHeight}, maxRows: ${maxRows}`);
            let row = 0;
            let column = 0;
            let baseColumn = 0;
            style.gridTemplateRows = `repeat(${maxRows}, 120px)`;
            let lastWidth = 0;
            let lastHeight = 0;
            let collapsedTiles = this.collapseTiles(props.tiles);
            for (const tile of collapsedTiles) {
                let tileWidth = this.tileSizeToWidth(tile.size);
                let tileHeight = this.tileSizeToHeight(tile.size);
                if (tile.apps) {
                    tiles.push((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FenceTile__WEBPACK_IMPORTED_MODULE_5__.FenceTile, Object.assign({}, tile, { row: row, column: column })));
                }
                else {
                    tiles.push((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tile__WEBPACK_IMPORTED_MODULE_2__.Tile, Object.assign({}, tile, { row: row, column: column })));
                }
                column += Math.max(lastWidth, tileWidth);
                if ((column - baseColumn) >= 2) {
                    if ((row + Math.max(lastHeight, tileHeight)) >= maxRows) {
                        row = 0;
                        baseColumn += 2;
                    }
                    else {
                        row += lastHeight;
                    }
                    column = baseColumn;
                }
                lastWidth = tileWidth;
                lastHeight = tileHeight;
            }
        }
        return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ class: "start-tile-group", ref: this.groupRef }, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ class: "tile-group-header", ref: this.headerRef }, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ class: "tile-group-header-text" }, { children: props.title && props.title !== "" ? props.title : "\u00A0" })) })), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ class: "tile-group-tiles", style: style }, { children: [...tiles] }))] })));
    }
}


/***/ }),

/***/ "./src/Start/TileSize.tsx":
/*!********************************!*\
  !*** ./src/Start/TileSize.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TileSize": function() { return /* binding */ TileSize; }
/* harmony export */ });
var TileSize;
(function (TileSize) {
    TileSize[TileSize["square70x70"] = 0] = "square70x70";
    TileSize[TileSize["square150x150"] = 1] = "square150x150";
    TileSize[TileSize["wide310x150"] = 2] = "wide310x150";
    TileSize[TileSize["square310x310"] = 3] = "square310x310";
})(TileSize || (TileSize = {}));


/***/ }),

/***/ "./src/Util.ts":
/*!*********************!*\
  !*** ./src/Util.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "circularEase": function() { return /* binding */ circularEase; },
/* harmony export */   "cubicEase": function() { return /* binding */ cubicEase; },
/* harmony export */   "easeInCirc": function() { return /* binding */ easeInCirc; },
/* harmony export */   "easeInCubic": function() { return /* binding */ easeInCubic; },
/* harmony export */   "easeOutCirc": function() { return /* binding */ easeOutCirc; },
/* harmony export */   "easeOutCubic": function() { return /* binding */ easeOutCubic; },
/* harmony export */   "getRGBFromString": function() { return /* binding */ getRGBFromString; },
/* harmony export */   "lightenDarkenColour": function() { return /* binding */ lightenDarkenColour; },
/* harmony export */   "newGuid": function() { return /* binding */ newGuid; }
/* harmony export */ });
function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
}
function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
}
function easeInCirc(x) {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
}
function easeInCubic(x) {
    return x * x * x;
}
function cubicEase(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
}
function circularEase(t, b, c, d) {
    // t /= d;
    // t--;
    // return c * Math.sqrt(1 - t * t) + b;
    return c * easeOutCirc(t) + b;
}
function getRGBFromString(str) {
    if (str[0] == "#") {
        str = str.slice(1);
    }
    var num = parseInt(str, 16);
    return [(num >> 16), ((num >> 8) & 0x00FF), (num & 0x0000FF)];
}
function lightenDarkenColour(col, amt) {
    var usePound = false;
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col, 16);
    var r = (num >> 16) + amt;
    if (r > 255)
        r = 255;
    else if (r < 0)
        r = 0;
    var b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255)
        b = 255;
    else if (b < 0)
        b = 0;
    var g = (num & 0x0000FF) + amt;
    if (g > 255)
        g = 255;
    else if (g < 0)
        g = 0;
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
}
function newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


/***/ }),

/***/ "./node_modules/base32-encode/index.js":
/*!*********************************************!*\
  !*** ./node_modules/base32-encode/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ base32Encode; }
/* harmony export */ });
/* harmony import */ var to_data_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! to-data-view */ "./node_modules/to-data-view/index.js");


const RFC4648 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'
const RFC4648_HEX = '0123456789ABCDEFGHIJKLMNOPQRSTUV'
const CROCKFORD = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'

function base32Encode (data, variant, options) {
  options = options || {}
  let alphabet, defaultPadding

  switch (variant) {
    case 'RFC3548':
    case 'RFC4648':
      alphabet = RFC4648
      defaultPadding = true
      break
    case 'RFC4648-HEX':
      alphabet = RFC4648_HEX
      defaultPadding = true
      break
    case 'Crockford':
      alphabet = CROCKFORD
      defaultPadding = false
      break
    default:
      throw new Error('Unknown base32 variant: ' + variant)
  }

  const padding = (options.padding !== undefined ? options.padding : defaultPadding)
  const view = (0,to_data_view__WEBPACK_IMPORTED_MODULE_0__["default"])(data)

  let bits = 0
  let value = 0
  let output = ''

  for (let i = 0; i < view.byteLength; i++) {
    value = (value << 8) | view.getUint8(i)
    bits += 8

    while (bits >= 5) {
      output += alphabet[(value >>> (bits - 5)) & 31]
      bits -= 5
    }
  }

  if (bits > 0) {
    output += alphabet[(value << (5 - bits)) & 31]
  }

  if (padding) {
    while ((output.length % 8) !== 0) {
      output += '='
    }
  }

  return output
}


/***/ }),

/***/ "./node_modules/to-data-view/index.js":
/*!********************************************!*\
  !*** ./node_modules/to-data-view/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toDataView; }
/* harmony export */ });
function toDataView (data) {
  if (data instanceof Int8Array || data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
    return new DataView(data.buffer, data.byteOffset, data.byteLength)
  }

  if (data instanceof ArrayBuffer) {
    return new DataView(data)
  }

  throw new TypeError('Expected `data` to be an ArrayBuffer, Buffer, Int8Array, Uint8Array or Uint8ClampedArray')
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/debug */ "./node_modules/preact/debug/dist/debug.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _Start__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Start */ "./src/Start.tsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _Data_PackageRegistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Data/PackageRegistry */ "./src/Data/PackageRegistry.ts");
/* harmony import */ var _Data_Package__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Data/Package */ "./src/Data/Package.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const Packages = ['Socials'];
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    for (const packagePath of Packages) {
        let reader = new _Data_Package__WEBPACK_IMPORTED_MODULE_6__.PackageReader(packagePath);
        let pack = yield reader.readPackage();
        _Data_PackageRegistry__WEBPACK_IMPORTED_MODULE_5__.PackageRegistry.registerPackage(pack);
    }
    (0,preact__WEBPACK_IMPORTED_MODULE_2__.render)((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Start__WEBPACK_IMPORTED_MODULE_3__.Start, {}), document.body);
}));

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BELDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ1U7QUFDQztBQUNYO0FBQ29DO0FBQ1Y7QUFFL0MsTUFBTSxRQUFRLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUU3QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBUyxFQUFFO0lBQ3ZELEtBQUssTUFBTSxXQUFXLElBQUksUUFBUSxFQUFFO1FBQ2xDLElBQUksTUFBTSxHQUFHLElBQUksd0RBQWEsQ0FBQyxXQUFXLENBQUM7UUFDM0MsSUFBSSxJQUFJLEdBQUcsTUFBTSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsa0ZBQStCLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkM7SUFFRCw4Q0FBTSxDQUFDLHdEQUFDLHlDQUFLLEtBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZGluZy1wYWdlLy4vc3JjL1N0YXJ0L3NwbGFzaC1zY3JlZW4uY3NzIiwid2VicGFjazovL2xhbmRpbmctcGFnZS8uL3NyYy9TdGFydC90aWxlLmNzcyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2xhbmRpbmctcGFnZS8uL3NyYy9zdGFydC5jc3MiLCJ3ZWJwYWNrOi8vbGFuZGluZy1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2xhbmRpbmctcGFnZS8uL3N0YXRpYy9zY3JvbGxiYXIvc2Nyb2xsLWxlZnQtYWN0aXZlLnN2ZyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9zdGF0aWMvc2Nyb2xsYmFyL3Njcm9sbC1sZWZ0LWhvdmVyLnN2ZyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9zdGF0aWMvc2Nyb2xsYmFyL3Njcm9sbC1sZWZ0LnN2ZyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9zdGF0aWMvc2Nyb2xsYmFyL3Njcm9sbC1yaWdodC1hY3RpdmUuc3ZnIiwid2VicGFjazovL2xhbmRpbmctcGFnZS8uL3N0YXRpYy9zY3JvbGxiYXIvc2Nyb2xsLXJpZ2h0LWhvdmVyLnN2ZyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9zdGF0aWMvc2Nyb2xsYmFyL3Njcm9sbC1yaWdodC5zdmciLCJ3ZWJwYWNrOi8vbGFuZGluZy1wYWdlLy4vc3RhdGljL3dhbS5wbmciLCJ3ZWJwYWNrOi8vbGFuZGluZy1wYWdlLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kZWJ1Zy9kaXN0L2RlYnVnLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvcHJlYWN0L2RldnRvb2xzL2Rpc3QvZGV2dG9vbHMubW9kdWxlLmpzIiwid2VicGFjazovL2xhbmRpbmctcGFnZS8uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwid2VicGFjazovL2xhbmRpbmctcGFnZS8uL25vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvZGlzdC9qc3hSdW50aW1lLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9zcmMvU3RhcnQvc3BsYXNoLXNjcmVlbi5jc3M/ZmQzNyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9zcmMvU3RhcnQvdGlsZS5jc3M/OWQxOSIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vbGFuZGluZy1wYWdlLy4vc3JjL3N0YXJ0LmNzcz82ZjU5Iiwid2VicGFjazovL2xhbmRpbmctcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9zcmMvRGF0YS9QYWNrYWdlLnRzIiwid2VicGFjazovL2xhbmRpbmctcGFnZS8uL3NyYy9EYXRhL1BhY2thZ2VSZWdpc3RyeS50cyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9zcmMvU3RhcnQudHN4Iiwid2VicGFjazovL2xhbmRpbmctcGFnZS8uL3NyYy9TdGFydC9Db3JlV2luZG93U3BsYXNoU2NyZWVuLnRzeCIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9zcmMvU3RhcnQvRmVuY2VUaWxlLnRzeCIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9zcmMvU3RhcnQvVGlsZS50c3giLCJ3ZWJwYWNrOi8vbGFuZGluZy1wYWdlLy4vc3JjL1N0YXJ0L1RpbGVHcm91cC50c3giLCJ3ZWJwYWNrOi8vbGFuZGluZy1wYWdlLy4vc3JjL1N0YXJ0L1RpbGVTaXplLnRzeCIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9zcmMvVXRpbC50cyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvYmFzZTMyLWVuY29kZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvdG8tZGF0YS12aWV3L2luZGV4LmpzIiwid2VicGFjazovL2xhbmRpbmctcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGFuZGluZy1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGFuZGluZy1wYWdlLy4vc3JjL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblxcclxcbi5zcGxhc2gtc2NyZWVuIHtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZS1vdXQ7XFxyXFxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BsYXNoLXNjcmVlbi52aXNpYmxlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwbGFzaC1zY3JlZW4tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9TdGFydC9zcGxhc2gtc2NyZWVuLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOztBQUVBO0lBQ0ksTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcblxcclxcbi5zcGxhc2gtc2NyZWVuIHtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZS1vdXQ7XFxyXFxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BsYXNoLXNjcmVlbi52aXNpYmxlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwbGFzaC1zY3JlZW4tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50aWxlLWdyb3VwLWhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMCA4cHggMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS1ncm91cC1oZWFkZXItdGV4dCB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNzU7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWdyb3VwLXRpbGVzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1nYXA6IDhweDtcXHJcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDEyMHB4O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lciB7XFxyXFxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA1cyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLyogXFxyXFxuLnRpbGUtY29udGFpbmVyOmhvdmVyOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjk4NSwgMC45ODUsIDAuOTg1KTtcXHJcXG59ICovXFxyXFxuXFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLnRvcCB7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSBib3R0b207XFxyXFxufVxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci5ib3R0b20ge1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgdG9wO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXIubGVmdCB7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLnJpZ2h0IHtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCA1MCU7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci5jZW50ZXIge1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBpbml0aWFsO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzcXVhcmUzMTB4MzEwICovXFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLnNxdWFyZTMxMHgzMTAudG9wOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVgoM2RlZyk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci5zcXVhcmUzMTB4MzEwLmJvdHRvbTphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVYKC0zZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLnNxdWFyZTMxMHgzMTAubGVmdDphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKC0zZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLnNxdWFyZTMxMHgzMTAucmlnaHQ6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSgzZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogd2lkZTMxMHgxNTAgKi9cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXIud2lkZTMxMHgxNTAudG9wOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVgoNmRlZyk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci53aWRlMzEweDE1MC5ib3R0b206YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWCgtNmRlZyk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci53aWRlMzEweDE1MC5sZWZ0OmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoLTNkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXIud2lkZTMxMHgxNTAucmlnaHQ6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSgzZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3F1YXJlMTUweDE1MCAqL1xcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci5zcXVhcmUxNTB4MTUwLnRvcDphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVYKDZkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXIuc3F1YXJlMTUweDE1MC5ib3R0b206YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWCgtNmRlZyk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci5zcXVhcmUxNTB4MTUwLmxlZnQ6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSgtNmRlZyk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci5zcXVhcmUxNTB4MTUwLnJpZ2h0OmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNmRlZyk7XFxyXFxufVxcclxcblxcclxcbi8qIHNxdWFyZTcweDcwICovXFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLnNxdWFyZTcweDcwLnRvcDphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVYKDE2ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLnNxdWFyZTcweDcwLmJvdHRvbTphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVYKC0xNmRlZyk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci5zcXVhcmU3MHg3MC5sZWZ0OmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoLTE2ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLnNxdWFyZTcweDcwLnJpZ2h0OmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoMTZkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXIuY2VudGVyOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjk3NSwgMC45NzUsIDAuOTc1KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmluZz4udGlsZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci53aWRlMzEweDE1MCB7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogc3BhbiAyO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXIuc3F1YXJlMzEweDMxMCB7XFxyXFxuICAgIGdyaWQtcm93LWVuZDogc3BhbiAyO1xcclxcbiAgICBncmlkLWNvbHVtbi1lbmQ6IHNwYW4gMjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC1yb3ctZW5kOiBzcGFuIDE7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogc3BhbiAxO1xcclxcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVuY2UtdGlsZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDU2cHggNTZweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1NnB4IDU2cHg7XFxyXFxuICAgIGdyaWQtZ2FwOiA4cHg7XFxyXFxuICAgIGdyaWQtcm93LWVuZDogc3BhbiAxO1xcclxcbiAgICBncmlkLWNvbHVtbi1lbmQ6IHNwYW4gMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyOmhvdmVyOmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IC0zcHg7XFxyXFxuICAgIGxlZnQ6IC0zcHg7XFxyXFxuICAgIHJpZ2h0OiAtM3B4O1xcclxcbiAgICBib3R0b206IC0zcHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoNDMsIDYsIDEyOCwgMSk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci5mbGlwcGVkIHtcXHJcXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXIuZmxpcHBlZD4udGlsZSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZyb250IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJweCk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mcm9udD4qIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IC0xcHg7XFxyXFxuICAgIGxlZnQ6IC0xcHg7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAycHgpO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDJweCk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWZyb250LWltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWZyb250LWltYWdlIHtcXHJcXG4gICAgbWF4LWhlaWdodDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWZyb250LWltYWdlLnNxdWFyZTcweDcwIHtcXHJcXG4gICAgbWF4LWhlaWdodDogNTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtZnJvbnQtaW1hZ2Uuc3F1YXJlMzEweDMxMCB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDI0NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS1mcm9udC10ZXh0IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiA4cHggMTJweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtdmlzdWFsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsaXBwZWQ+LnRpbGU+LmZyb250IHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxpcHBlZD4udGlsZT4uYmFjayB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9TdGFydC90aWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLE9BQU87QUFDWDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLG9DQUFvQztBQUN4Qzs7QUFFQTs7O0dBR0c7OztBQUdIO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLGtCQUFrQjs7QUFFbEI7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUEsZ0JBQWdCOztBQUVoQjtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBLGdCQUFnQjs7QUFFaEI7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7OztBQUdBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpbGUtZ3JvdXAtaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMCAwIDhweCAwO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWdyb3VwLWhlYWRlci10ZXh0IHtcXHJcXG4gICAgb3BhY2l0eTogMC43NTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtZ3JvdXAtdGlsZXMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWdhcDogOHB4O1xcclxcbiAgICBncmlkLWF1dG8tY29sdW1uczogMTIwcHg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi50aWxlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDVzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBcXHJcXG4udGlsZS1jb250YWluZXI6aG92ZXI6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTg1LCAwLjk4NSwgMC45ODUpO1xcclxcbn0gKi9cXHJcXG5cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXIudG9wIHtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLmJvdHRvbSB7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSB0b3A7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci5sZWZ0IHtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXIucmlnaHQge1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLmNlbnRlciB7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGluaXRpYWw7XFxyXFxufVxcclxcblxcclxcbi8qIHNxdWFyZTMxMHgzMTAgKi9cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXIuc3F1YXJlMzEweDMxMC50b3A6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWCgzZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLnNxdWFyZTMxMHgzMTAuYm90dG9tOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVgoLTNkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXIuc3F1YXJlMzEweDMxMC5sZWZ0OmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoLTNkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXIuc3F1YXJlMzEweDMxMC5yaWdodDphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDNkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB3aWRlMzEweDE1MCAqL1xcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci53aWRlMzEweDE1MC50b3A6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWCg2ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLndpZGUzMTB4MTUwLmJvdHRvbTphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVYKC02ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLndpZGUzMTB4MTUwLmxlZnQ6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSgtM2RlZyk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci53aWRlMzEweDE1MC5yaWdodDphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDNkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzcXVhcmUxNTB4MTUwICovXFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLnNxdWFyZTE1MHgxNTAudG9wOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVgoNmRlZyk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci5zcXVhcmUxNTB4MTUwLmJvdHRvbTphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVYKC02ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLnNxdWFyZTE1MHgxNTAubGVmdDphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKC02ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLnNxdWFyZTE1MHgxNTAucmlnaHQ6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg2ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3F1YXJlNzB4NzAgKi9cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXIuc3F1YXJlNzB4NzAudG9wOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVgoMTZkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXIuc3F1YXJlNzB4NzAuYm90dG9tOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVgoLTE2ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLnNxdWFyZTcweDcwLmxlZnQ6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSgtMTZkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXIuc3F1YXJlNzB4NzAucmlnaHQ6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSgxNmRlZyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci5jZW50ZXI6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTc1LCAwLjk3NSwgMC45NzUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aW5nPi50aWxlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLndpZGUzMTB4MTUwIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiBzcGFuIDI7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci5zcXVhcmUzMTB4MzEwIHtcXHJcXG4gICAgZ3JpZC1yb3ctZW5kOiBzcGFuIDI7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogc3BhbiAyO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXIge1xcclxcbiAgICBncmlkLXJvdy1lbmQ6IHNwYW4gMTtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiBzcGFuIDE7XFxyXFxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi5mZW5jZS10aWxlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTZweCA1NnB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDU2cHggNTZweDtcXHJcXG4gICAgZ3JpZC1nYXA6IDhweDtcXHJcXG4gICAgZ3JpZC1yb3ctZW5kOiBzcGFuIDE7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogc3BhbiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS1jb250YWluZXI6aG92ZXI6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLTNweDtcXHJcXG4gICAgbGVmdDogLTNweDtcXHJcXG4gICAgcmlnaHQ6IC0zcHg7XFxyXFxuICAgIGJvdHRvbTogLTNweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSg0MywgNiwgMTI4LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtY29udGFpbmVyLmZsaXBwZWQge1xcclxcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50aWxlLWNvbnRhaW5lci5mbGlwcGVkPi50aWxlIHtcXHJcXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZnJvbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMnB4KTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZyb250Pioge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLTFweDtcXHJcXG4gICAgbGVmdDogLTFweDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDJweCk7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlICsgMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtZnJvbnQtaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtZnJvbnQtaW1hZ2Uge1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUtZnJvbnQtaW1hZ2Uuc3F1YXJlNzB4NzAge1xcclxcbiAgICBtYXgtaGVpZ2h0OiA1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS1mcm9udC1pbWFnZS5zcXVhcmUzMTB4MzEwIHtcXHJcXG4gICAgbWF4LWhlaWdodDogMjQ2cHg7XFxyXFxufVxcclxcblxcclxcbi50aWxlLWZyb250LXRleHQge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDhweCAxMnB4O1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS12aXN1YWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFjayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxpcHBlZD4udGlsZT4uZnJvbnQge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5mbGlwcGVkPi50aWxlPi5iYWNrIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ094eWdlbicsXFxuICAgICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyxcXG4gICAgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIG1hcmdpbjogMDsgICAgXFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGVyc3BlY3RpdmU6IDE2MDBweDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxufVxcblxcbmNvZGUge1xcbiAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdDb3VyaWVyIE5ldycsXFxuICAgIG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSB7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1Q7O2NBRVk7RUFDWixtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRTthQUNXO0FBQ2I7O0FBRUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJyxcXG4gICAgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgbWFyZ2luOiAwOyAgICBcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwZXJzcGVjdGl2ZTogMTYwMHB4O1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG59XFxuXFxuY29kZSB7XFxuICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0NvdXJpZXIgTmV3JyxcXG4gICAgbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5IHtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vc3RhdGljL3Njcm9sbGJhci9zY3JvbGwtcmlnaHQuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uL3N0YXRpYy9zY3JvbGxiYXIvc2Nyb2xsLXJpZ2h0LWhvdmVyLnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuLi9zdGF0aWMvc2Nyb2xsYmFyL3Njcm9sbC1yaWdodC1hY3RpdmUuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gZnJvbSBcIi4uL3N0YXRpYy9zY3JvbGxiYXIvc2Nyb2xsLWxlZnQuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gZnJvbSBcIi4uL3N0YXRpYy9zY3JvbGxiYXIvc2Nyb2xsLWxlZnQtaG92ZXIuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gZnJvbSBcIi4uL3N0YXRpYy9zY3JvbGxiYXIvc2Nyb2xsLWxlZnQtYWN0aXZlLnN2Z1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YXJ0LXNjcmVlbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIC8qIHotaW5kZXg6IDIxNDc0ODM2NDU7ICovXFxyXFxuICAgIC8qIDopICovXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODAwNTM7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCAxZnIgOTRweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXNjcmVlbi5oaWRpbmcge1xcclxcbiAgICBhbmltYXRpb246IHN0YXJ0LWhpZGUgMC4yNXMgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1zY3JlZW4uaGlkaW5nPioge1xcclxcbiAgICBhbmltYXRpb246IHN0YXJ0LWNvbnRlbnQtaGlkZSAwLjI1cyBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXNjcmVlbi5oaWRkZW4ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc3RhcnQtY29udGVudC1oaWRlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMzMsIDAuMzMsIDAuMzMpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc3RhcnQtaGlkZSB7XFxyXFxuICAgIDI1JSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtaGVhZGVyIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDExOHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1tYWluLWhlYWRlciB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMzhweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXRpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDJwdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWhlYWRlci1idXR0b25zIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTcwcHggNTdweCA1N3B4O1xcclxcbiAgICBjb2x1bW4tZ2FwOiAycHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1oZWFkZXItYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA1N3B4O1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWhlYWRlci1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMkIwNjgwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtaGVhZGVyLWJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMkIwNjgwO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45NzUsIDAuOTc1LCAwLjk3NSk7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1oZWFkZXItdXNlci1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWhlYWRlci11c2VyLWJ1dHRvbj4udXNlcm5hbWU+cCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWhlYWRlci11c2VyLWJ1dHRvbj4udXNlcm5hbWU+LnByaW1hcnkge1xcclxcbiAgICBmb250LXNpemU6IDI3cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtaGVhZGVyLXVzZXItYnV0dG9uPi5waWN0dXJlIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWhlYWRlci1wb3dlcixcXHJcXG4uc3RhcnQtaGVhZGVyLXNlYXJjaCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiA1N3B4O1xcclxcbiAgICBoZWlnaHQ6IDU3cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGU+LnN0YXJ0LWhlYWRlcixcXHJcXG4ubW9iaWxlPi5zdGFydC1mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQubW9iaWxlIHtcXHJcXG4gICAgbWFyZ2luOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC10aWxlcy1zY3JvbGwtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93LXg6IG92ZXJsYXk7XFxyXFxuICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC10aWxlcy1zY3JvbGwtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGhlaWdodDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtdGlsZXMtc2Nyb2xsLWNvbnRhaW5lci5zY3JvbGwtdmlzaWJsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBoZWlnaHQ6IDE3cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC10aWxlcy1zY3JvbGwtY29udGFpbmVyLnNjcm9sbC12aXNpYmxlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4IDE1cHggI2NkY2RjZDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXRpbGVzLXNjcm9sbC1jb250YWluZXIuc2Nyb2xsLXZpc2libGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggMTVweCAjZGFkYWRhO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtdGlsZXMtc2Nyb2xsLWNvbnRhaW5lci5zY3JvbGwtdmlzaWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNjYpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtdGlsZXMtc2Nyb2xsLWNvbnRhaW5lci5zY3JvbGwtdmlzaWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOnNpbmdsZS1idXR0b246aG9yaXpvbnRhbCB7XFxyXFxuICAgIHdpZHRoOiAzM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXRpbGVzLXNjcm9sbC1jb250YWluZXIuc2Nyb2xsLXZpc2libGU6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpzaW5nbGUtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXRpbGVzLXNjcm9sbC1jb250YWluZXIuc2Nyb2xsLXZpc2libGU6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpzaW5nbGUtYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42Nik7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC10aWxlcy1zY3JvbGwtY29udGFpbmVyLnNjcm9sbC12aXNpYmxlOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246c2luZ2xlLWJ1dHRvbjpob3Jpem9udGFsOmluY3JlbWVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDI1JSBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC10aWxlcy1zY3JvbGwtY29udGFpbmVyLnNjcm9sbC12aXNpYmxlOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246c2luZ2xlLWJ1dHRvbjpob3Jpem9udGFsOmluY3JlbWVudDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC10aWxlcy1zY3JvbGwtY29udGFpbmVyLnNjcm9sbC12aXNpYmxlOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246c2luZ2xlLWJ1dHRvbjpob3Jpem9udGFsOmluY3JlbWVudDphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtdGlsZXMtc2Nyb2xsLWNvbnRhaW5lci5zY3JvbGwtdmlzaWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOnNpbmdsZS1idXR0b246aG9yaXpvbnRhbDpkZWNyZW1lbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3NSUgY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtdGlsZXMtc2Nyb2xsLWNvbnRhaW5lci5zY3JvbGwtdmlzaWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOnNpbmdsZS1idXR0b246aG9yaXpvbnRhbDpkZWNyZW1lbnQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtdGlsZXMtc2Nyb2xsLWNvbnRhaW5lci5zY3JvbGwtdmlzaWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOnNpbmdsZS1idXR0b246aG9yaXpvbnRhbDpkZWNyZW1lbnQ6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXRpbGVzIHtcXHJcXG4gICAgcGFkZGluZzogMjRweCAxMThweCAwcHggNjJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE5NnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZT4uc3RhcnQtdGlsZXMge1xcclxcbiAgICBncmlkLWF1dG8tcm93czogY2FsYyhjYWxjKDEwMHZ3IC8gNikgLSA2cHgpO1xcclxcbiAgICBncmlkLWF1dG8tY29sdW1uczogY2FsYyhjYWxjKDEwMHZ3IC8gNikgLSA2cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtZm9vdGVyIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDExOHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtcm93OiAzO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtdGlsZS1ncm91cCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtc2hvdy1hbGwtYnV0dG9uIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1oaWRlLWFsbC1idXR0b24ge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtYXJyb3ctYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDQycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXNob3ctYWxsLWljb24ge1xcclxcbiAgICB3aWR0aDogMzJweDtcXHJcXG4gICAgaGVpZ2h0OiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtc2hvdy1hbGwtYnV0dG9uICNhcnJvdyB7XFxyXFxuICAgIGZpbGw6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtc2hvdy1hbGwtYnV0dG9uICNjaXJjbGUge1xcclxcbiAgICBzdHJva2U6IHdoaXRlO1xcclxcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXNob3ctYWxsLWJ1dHRvbjpob3ZlciAjY2lyY2xlIHtcXHJcXG4gICAgZmlsbDogIzJFMDBBNTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXNob3ctYWxsLWJ1dHRvbjphY3RpdmUgI2NpcmNsZSB7XFxyXFxuICAgIGZpbGw6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtc2hvdy1hbGwtYnV0dG9uOmFjdGl2ZSAjYXJyb3cge1xcclxcbiAgICBmaWxsOiAjMTgwMDUzO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtaGlkZS1hbGwtYnV0dG9uICNhcnJvdyB7XFxyXFxuICAgIGZpbGw6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtaGlkZS1hbGwtYnV0dG9uICNjaXJjbGUge1xcclxcbiAgICBzdHJva2U6IGJsYWNrO1xcclxcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWhpZGUtYWxsLWJ1dHRvbjpob3ZlciAjYXJyb3cge1xcclxcbiAgICBmaWxsOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWhpZGUtYWxsLWJ1dHRvbjpob3ZlciAjY2lyY2xlIHtcXHJcXG4gICAgZmlsbDogIzJFMDBBNTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWhpZGUtYWxsLWJ1dHRvbjphY3RpdmUgI2NpcmNsZSB7XFxyXFxuICAgIGZpbGw6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtaGlkZS1hbGwtYnV0dG9uOmFjdGl2ZSAjYXJyb3cge1xcclxcbiAgICBmaWxsOiAjMTgwMDUzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLWFwcHMtdGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiA0NTBweDtcXHJcXG4gICAgY29sdW1uLWdhcDogMjBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0YXJ0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLE1BQU07SUFDTixPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLE9BQU87QUFDWDs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLG9DQUFvQztJQUN4QztBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QywyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx5REFBK0Q7QUFDbkU7O0FBRUE7SUFDSSx5REFBZ0U7QUFDcEU7O0FBRUE7SUFDSSx5REFBd0Q7SUFDeEQsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0kseURBQThEO0FBQ2xFOztBQUVBO0lBQ0kseURBQStEO0FBQ25FOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc3RhcnQtc2NyZWVuIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgLyogei1pbmRleDogMjE0NzQ4MzY0NTsgKi9cXHJcXG4gICAgLyogOikgKi9cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MDA1MztcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IDFmciA5NHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtc2NyZWVuLmhpZGluZyB7XFxyXFxuICAgIGFuaW1hdGlvbjogc3RhcnQtaGlkZSAwLjI1cyBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXNjcmVlbi5oaWRpbmc+KiB7XFxyXFxuICAgIGFuaW1hdGlvbjogc3RhcnQtY29udGVudC1oaWRlIDAuMjVzIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtc2NyZWVuLmhpZGRlbiB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzdGFydC1jb250ZW50LWhpZGUge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zMywgMC4zMywgMC4zMyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzdGFydC1oaWRlIHtcXHJcXG4gICAgMjUlIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1oZWFkZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTE4cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LW1haW4taGVhZGVyIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzOHB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiA0MnB0O1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtaGVhZGVyLWJ1dHRvbnMge1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNzBweCA1N3B4IDU3cHg7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDJweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWhlYWRlci1idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDU3cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtaGVhZGVyLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyQjA2ODA7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1oZWFkZXItYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyQjA2ODA7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjk3NSwgMC45NzUsIDAuOTc1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWhlYWRlci11c2VyLWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtaGVhZGVyLXVzZXItYnV0dG9uPi51c2VybmFtZT5wIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtaGVhZGVyLXVzZXItYnV0dG9uPi51c2VybmFtZT4ucHJpbWFyeSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1oZWFkZXItdXNlci1idXR0b24+LnBpY3R1cmUge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtaGVhZGVyLXBvd2VyLFxcclxcbi5zdGFydC1oZWFkZXItc2VhcmNoIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgd2lkdGg6IDU3cHg7XFxyXFxuICAgIGhlaWdodDogNTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZT4uc3RhcnQtaGVhZGVyLFxcclxcbi5tb2JpbGU+LnN0YXJ0LWZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC5tb2JpbGUge1xcclxcbiAgICBtYXJnaW46IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXRpbGVzLXNjcm9sbC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3cteDogb3ZlcmxheTtcXHJcXG4gICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXRpbGVzLXNjcm9sbC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgaGVpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC10aWxlcy1zY3JvbGwtY29udGFpbmVyLnNjcm9sbC12aXNpYmxlOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGhlaWdodDogMTdweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXRpbGVzLXNjcm9sbC1jb250YWluZXIuc2Nyb2xsLXZpc2libGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggMTVweCAjY2RjZGNkO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzMpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtdGlsZXMtc2Nyb2xsLWNvbnRhaW5lci5zY3JvbGwtdmlzaWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAxNXB4ICNkYWRhZGE7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC10aWxlcy1zY3JvbGwtY29udGFpbmVyLnNjcm9sbC12aXNpYmxlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC42Nik7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC10aWxlcy1zY3JvbGwtY29udGFpbmVyLnNjcm9sbC12aXNpYmxlOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246c2luZ2xlLWJ1dHRvbjpob3Jpem9udGFsIHtcXHJcXG4gICAgd2lkdGg6IDMzcHg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtdGlsZXMtc2Nyb2xsLWNvbnRhaW5lci5zY3JvbGwtdmlzaWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOnNpbmdsZS1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtdGlsZXMtc2Nyb2xsLWNvbnRhaW5lci5zY3JvbGwtdmlzaWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOnNpbmdsZS1idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY2KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXRpbGVzLXNjcm9sbC1jb250YWluZXIuc2Nyb2xsLXZpc2libGU6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpzaW5nbGUtYnV0dG9uOmhvcml6b250YWw6aW5jcmVtZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvc2Nyb2xsYmFyL3Njcm9sbC1yaWdodC5zdmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyNSUgY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtdGlsZXMtc2Nyb2xsLWNvbnRhaW5lci5zY3JvbGwtdmlzaWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOnNpbmdsZS1idXR0b246aG9yaXpvbnRhbDppbmNyZW1lbnQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9zY3JvbGxiYXIvc2Nyb2xsLXJpZ2h0LWhvdmVyLnN2Zyk7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC10aWxlcy1zY3JvbGwtY29udGFpbmVyLnNjcm9sbC12aXNpYmxlOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246c2luZ2xlLWJ1dHRvbjpob3Jpem9udGFsOmluY3JlbWVudDphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9zY3JvbGxiYXIvc2Nyb2xsLXJpZ2h0LWFjdGl2ZS5zdmcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtdGlsZXMtc2Nyb2xsLWNvbnRhaW5lci5zY3JvbGwtdmlzaWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOnNpbmdsZS1idXR0b246aG9yaXpvbnRhbDpkZWNyZW1lbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9zY3JvbGxiYXIvc2Nyb2xsLWxlZnQuc3ZnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNzUlIGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXRpbGVzLXNjcm9sbC1jb250YWluZXIuc2Nyb2xsLXZpc2libGU6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpzaW5nbGUtYnV0dG9uOmhvcml6b250YWw6ZGVjcmVtZW50OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvc2Nyb2xsYmFyL3Njcm9sbC1sZWZ0LWhvdmVyLnN2Zyk7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC10aWxlcy1zY3JvbGwtY29udGFpbmVyLnNjcm9sbC12aXNpYmxlOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246c2luZ2xlLWJ1dHRvbjpob3Jpem9udGFsOmRlY3JlbWVudDphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9zY3JvbGxiYXIvc2Nyb2xsLWxlZnQtYWN0aXZlLnN2Zyk7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC10aWxlcyB7XFxyXFxuICAgIHBhZGRpbmc6IDI0cHggMTE4cHggMHB4IDYycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxOTZweCk7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGU+LnN0YXJ0LXRpbGVzIHtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGNhbGMoY2FsYygxMDB2dyAvIDYpIC0gNnB4KTtcXHJcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IGNhbGMoY2FsYygxMDB2dyAvIDYpIC0gNnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWZvb3RlciB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMThweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBncmlkLXJvdzogMztcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXRpbGUtZ3JvdXAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXNob3ctYWxsLWJ1dHRvbiB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtaGlkZS1hbGwtYnV0dG9uIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWFycm93LWJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiA0MnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1zaG93LWFsbC1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDMycHg7XFxyXFxuICAgIGhlaWdodDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXNob3ctYWxsLWJ1dHRvbiAjYXJyb3cge1xcclxcbiAgICBmaWxsOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXNob3ctYWxsLWJ1dHRvbiAjY2lyY2xlIHtcXHJcXG4gICAgc3Ryb2tlOiB3aGl0ZTtcXHJcXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1zaG93LWFsbC1idXR0b246aG92ZXIgI2NpcmNsZSB7XFxyXFxuICAgIGZpbGw6ICMyRTAwQTU7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1zaG93LWFsbC1idXR0b246YWN0aXZlICNjaXJjbGUge1xcclxcbiAgICBmaWxsOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXNob3ctYWxsLWJ1dHRvbjphY3RpdmUgI2Fycm93IHtcXHJcXG4gICAgZmlsbDogIzE4MDA1MztcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWhpZGUtYWxsLWJ1dHRvbiAjYXJyb3cge1xcclxcbiAgICBmaWxsOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWhpZGUtYWxsLWJ1dHRvbiAjY2lyY2xlIHtcXHJcXG4gICAgc3Ryb2tlOiBibGFjaztcXHJcXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1oaWRlLWFsbC1idXR0b246aG92ZXIgI2Fycm93IHtcXHJcXG4gICAgZmlsbDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1oaWRlLWFsbC1idXR0b246aG92ZXIgI2NpcmNsZSB7XFxyXFxuICAgIGZpbGw6ICMyRTAwQTU7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1oaWRlLWFsbC1idXR0b246YWN0aXZlICNjaXJjbGUge1xcclxcbiAgICBmaWxsOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWhpZGUtYWxsLWJ1dHRvbjphY3RpdmUgI2Fycm93IHtcXHJcXG4gICAgZmlsbDogIzE4MDA1MztcXHJcXG59XFxyXFxuXFxyXFxuLmFsbC1hcHBzLXRleHQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWF1dG8tY29sdW1uczogNDUwcHg7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDIwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvMmQ1NzEzNjIxZTg1N2RjNDdiZDVhZGY1MDMzNjAzOTYuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy8yMmIzOWJmY2EyNmQyYWNlNDU3MmU3M2FjNjc2N2UzOC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2UwMzNlNWYxNDBkZTA3YjY4OGFiZWIyZGU5ZTBhZWNlLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvNTU3M2I2MzQ1ZDg5ZjEzYTNmYWQ2N2EwMzczNjBhYWUuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9hYzc5N2Q2MmYzM2Q3OWQ0YmIyNGMzODUwZjIyODNhMS5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljLzg2MmI2NzU1ZTNhZjVhNTc1M2M4ZDczMzBlMzcyNTY5LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvNDZjYjY1YTk3ZGMxYTcwZmI3ZGYyZmM3MDZiMzExNTgucG5nXCI7IiwiaW1wb3J0e29wdGlvbnMgYXMgbixGcmFnbWVudCBhcyB0LENvbXBvbmVudCBhcyBlfWZyb21cInByZWFjdFwiO2ltcG9ydFwicHJlYWN0L2RldnRvb2xzXCI7dmFyIG89e307ZnVuY3Rpb24gcigpe289e319ZnVuY3Rpb24gYShuKXtyZXR1cm4gbi50eXBlPT09dD9cIkZyYWdtZW50XCI6XCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP24udHlwZS5kaXNwbGF5TmFtZXx8bi50eXBlLm5hbWU6XCJzdHJpbmdcIj09dHlwZW9mIG4udHlwZT9uLnR5cGU6XCIjdGV4dFwifXZhciBpPVtdLHM9W107ZnVuY3Rpb24gYygpe3JldHVybiBpLmxlbmd0aD4wP2lbaS5sZW5ndGgtMV06bnVsbH12YXIgbD0hMTtmdW5jdGlvbiB1KG4pe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZSYmbi50eXBlIT10fWZ1bmN0aW9uIGYobil7Zm9yKHZhciB0PVtuXSxlPW47bnVsbCE9ZS5fX287KXQucHVzaChlLl9fbyksZT1lLl9fbztyZXR1cm4gdC5yZWR1Y2UoZnVuY3Rpb24obix0KXtuKz1cIiAgaW4gXCIrYSh0KTt2YXIgZT10Ll9fc291cmNlO3JldHVybiBlP24rPVwiIChhdCBcIitlLmZpbGVOYW1lK1wiOlwiK2UubGluZU51bWJlcitcIilcIjpsfHwobD0hMCxjb25zb2xlLndhcm4oXCJBZGQgQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tcmVhY3QtanN4LXNvdXJjZSB0byBnZXQgYSBtb3JlIGRldGFpbGVkIGNvbXBvbmVudCBzdGFjay4gTm90ZSB0aGF0IHlvdSBzaG91bGQgbm90IGFkZCBpdCB0byBwcm9kdWN0aW9uIGJ1aWxkcyBvZiB5b3VyIEFwcCBmb3IgYnVuZGxlIHNpemUgcmVhc29ucy5cIikpLG4rXCJcXG5cIn0sXCJcIil9dmFyIHA9XCJmdW5jdGlvblwiPT10eXBlb2YgV2Vha01hcCxkPWUucHJvdG90eXBlLnNldFN0YXRlO2UucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PXRoaXMuX192P251bGw9PXRoaXMuc3RhdGUmJmNvbnNvbGUud2FybignQ2FsbGluZyBcInRoaXMuc2V0U3RhdGVcIiBpbnNpZGUgdGhlIGNvbnN0cnVjdG9yIG9mIGEgY29tcG9uZW50IGlzIGEgbm8tb3AgYW5kIG1pZ2h0IGJlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uIEluc3RlYWQsIHNldCBcInRoaXMuc3RhdGUgPSB7fVwiIGRpcmVjdGx5LlxcblxcbicrZihjKCkpKTpudWxsPT10aGlzLl9fUCYmY29uc29sZS53YXJuKCdDYW5cXCd0IGNhbGwgXCJ0aGlzLnNldFN0YXRlXCIgb24gYW4gdW5tb3VudGVkIGNvbXBvbmVudC4gVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgaW5kaWNhdGVzIGEgbWVtb3J5IGxlYWsgaW4geW91ciBhcHBsaWNhdGlvbi4gVG8gZml4LCBjYW5jZWwgYWxsIHN1YnNjcmlwdGlvbnMgYW5kIGFzeW5jaHJvbm91cyB0YXNrcyBpbiB0aGUgY29tcG9uZW50V2lsbFVubW91bnQgbWV0aG9kLlxcblxcbicrZih0aGlzLl9fdikpLGQuY2FsbCh0aGlzLG4sdCl9O3ZhciBoPWUucHJvdG90eXBlLmZvcmNlVXBkYXRlO2Z1bmN0aW9uIHkobil7dmFyIHQ9bi5wcm9wcyxlPWEobiksbz1cIlwiO2Zvcih2YXIgciBpbiB0KWlmKHQuaGFzT3duUHJvcGVydHkocikmJlwiY2hpbGRyZW5cIiE9PXIpe3ZhciBpPXRbcl07XCJmdW5jdGlvblwiPT10eXBlb2YgaSYmKGk9XCJmdW5jdGlvbiBcIisoaS5kaXNwbGF5TmFtZXx8aS5uYW1lKStcIigpIHt9XCIpLGk9T2JqZWN0KGkpIT09aXx8aS50b1N0cmluZz9pK1wiXCI6T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGkpLG8rPVwiIFwiK3IrXCI9XCIrSlNPTi5zdHJpbmdpZnkoaSl9dmFyIHM9dC5jaGlsZHJlbjtyZXR1cm5cIjxcIitlK28rKHMmJnMubGVuZ3RoP1wiPi4uPC9cIitlK1wiPlwiOlwiIC8+XCIpfWUucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsPT10aGlzLl9fdj9jb25zb2xlLndhcm4oJ0NhbGxpbmcgXCJ0aGlzLmZvcmNlVXBkYXRlXCIgaW5zaWRlIHRoZSBjb25zdHJ1Y3RvciBvZiBhIGNvbXBvbmVudCBpcyBhIG5vLW9wIGFuZCBtaWdodCBiZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLlxcblxcbicrZihjKCkpKTpudWxsPT10aGlzLl9fUCYmY29uc29sZS53YXJuKCdDYW5cXCd0IGNhbGwgXCJ0aGlzLmZvcmNlVXBkYXRlXCIgb24gYW4gdW5tb3VudGVkIGNvbXBvbmVudC4gVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgaW5kaWNhdGVzIGEgbWVtb3J5IGxlYWsgaW4geW91ciBhcHBsaWNhdGlvbi4gVG8gZml4LCBjYW5jZWwgYWxsIHN1YnNjcmlwdGlvbnMgYW5kIGFzeW5jaHJvbm91cyB0YXNrcyBpbiB0aGUgY29tcG9uZW50V2lsbFVubW91bnQgbWV0aG9kLlxcblxcbicrZih0aGlzLl9fdikpLGguY2FsbCh0aGlzLG4pfSxmdW5jdGlvbigpeyFmdW5jdGlvbigpe3ZhciB0PW4uX19iLGU9bi5kaWZmZWQsbz1uLl9fLHI9bi52bm9kZSxhPW4uX19yO24uZGlmZmVkPWZ1bmN0aW9uKG4pe3UobikmJnMucG9wKCksaS5wb3AoKSxlJiZlKG4pfSxuLl9fYj1mdW5jdGlvbihuKXt1KG4pJiZpLnB1c2gobiksdCYmdChuKX0sbi5fXz1mdW5jdGlvbihuLHQpe3M9W10sbyYmbyhuLHQpfSxuLnZub2RlPWZ1bmN0aW9uKG4pe24uX19vPXMubGVuZ3RoPjA/c1tzLmxlbmd0aC0xXTpudWxsLHImJnIobil9LG4uX19yPWZ1bmN0aW9uKG4pe3UobikmJnMucHVzaChuKSxhJiZhKG4pfX0oKTt2YXIgdD0hMSxlPW4uX19iLHI9bi5kaWZmZWQsYz1uLnZub2RlLGw9bi5fX2UsZD1uLl9fLGg9bi5fX2gsbT1wP3t1c2VFZmZlY3Q6bmV3IFdlYWtNYXAsdXNlTGF5b3V0RWZmZWN0Om5ldyBXZWFrTWFwLGxhenlQcm9wVHlwZXM6bmV3IFdlYWtNYXB9Om51bGwsdj1bXTtuLl9fZT1mdW5jdGlvbihuLHQsZSxvKXtpZih0JiZ0Ll9fYyYmXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50aGVuKXt2YXIgcj1uO249bmV3IEVycm9yKFwiTWlzc2luZyBTdXNwZW5zZS4gVGhlIHRocm93aW5nIGNvbXBvbmVudCB3YXM6IFwiK2EodCkpO2Zvcih2YXIgaT10O2k7aT1pLl9fKWlmKGkuX19jJiZpLl9fYy5fX2Mpe249cjticmVha31pZihuIGluc3RhbmNlb2YgRXJyb3IpdGhyb3cgbn10cnl7KG89b3x8e30pLmNvbXBvbmVudFN0YWNrPWYodCksbChuLHQsZSxvKSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnRoZW4mJnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBufSl9Y2F0Y2gobil7dGhyb3cgbn19LG4uX189ZnVuY3Rpb24obix0KXtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJVbmRlZmluZWQgcGFyZW50IHBhc3NlZCB0byByZW5kZXIoKSwgdGhpcyBpcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxcbkNoZWNrIGlmIHRoZSBlbGVtZW50IGlzIGF2YWlsYWJsZSBpbiB0aGUgRE9NL2hhcyB0aGUgY29ycmVjdCBpZC5cIik7dmFyIGU7c3dpdGNoKHQubm9kZVR5cGUpe2Nhc2UgMTpjYXNlIDExOmNhc2UgOTplPSEwO2JyZWFrO2RlZmF1bHQ6ZT0hMX1pZighZSl7dmFyIG89YShuKTt0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBhIHZhbGlkIEhUTUwgbm9kZSBhcyBhIHNlY29uZCBhcmd1bWVudCB0byByZW5kZXIuXFx0UmVjZWl2ZWQgXCIrdCtcIiBpbnN0ZWFkOiByZW5kZXIoPFwiK28rXCIgLz4sIFwiK3QrXCIpO1wiKX1kJiZkKG4sdCl9LG4uX19iPWZ1bmN0aW9uKG4pe3ZhciByPW4udHlwZSxpPWZ1bmN0aW9uIG4odCl7cmV0dXJuIHQ/XCJmdW5jdGlvblwiPT10eXBlb2YgdC50eXBlP24odC5fXyk6dDp7fX0obi5fXyk7aWYodD0hMCx2b2lkIDA9PT1yKXRocm93IG5ldyBFcnJvcihcIlVuZGVmaW5lZCBjb21wb25lbnQgcGFzc2VkIHRvIGNyZWF0ZUVsZW1lbnQoKVxcblxcbllvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBvciBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHNcIit5KG4pK1wiXFxuXFxuXCIrZihuKSk7aWYobnVsbCE9ciYmXCJvYmplY3RcIj09dHlwZW9mIHIpe2lmKHZvaWQgMCE9PXIuX19rJiZ2b2lkIDAhPT1yLl9fZSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHR5cGUgcGFzc2VkIHRvIGNyZWF0ZUVsZW1lbnQoKTogXCIrcitcIlxcblxcbkRpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBKU1ggbGl0ZXJhbCBhcyBKU1ggdHdpY2U/XFxuXFxuICBsZXQgTXlcIithKG4pK1wiID0gXCIreShyKStcIjtcXG4gIGxldCB2bm9kZSA9IDxNeVwiK2EobikrXCIgLz47XFxuXFxuVGhpcyB1c3VhbGx5IGhhcHBlbnMgd2hlbiB5b3UgZXhwb3J0IGEgSlNYIGxpdGVyYWwgYW5kIG5vdCB0aGUgY29tcG9uZW50LlxcblxcblwiK2YobikpO3Rocm93IG5ldyBFcnJvcihcIkludmFsaWQgdHlwZSBwYXNzZWQgdG8gY3JlYXRlRWxlbWVudCgpOiBcIisoQXJyYXkuaXNBcnJheShyKT9cImFycmF5XCI6cikpfWlmKFwidGhlYWRcIiE9PXImJlwidGZvb3RcIiE9PXImJlwidGJvZHlcIiE9PXJ8fFwidGFibGVcIj09PWkudHlwZT9cInRyXCI9PT1yJiZcInRoZWFkXCIhPT1pLnR5cGUmJlwidGZvb3RcIiE9PWkudHlwZSYmXCJ0Ym9keVwiIT09aS50eXBlJiZcInRhYmxlXCIhPT1pLnR5cGU/Y29uc29sZS5lcnJvcihcIkltcHJvcGVyIG5lc3Rpbmcgb2YgdGFibGUuIFlvdXIgPHRyPiBzaG91bGQgaGF2ZSBhIDx0aGVhZC90Ym9keS90Zm9vdC90YWJsZT4gcGFyZW50LlwiK3kobikrXCJcXG5cXG5cIitmKG4pKTpcInRkXCI9PT1yJiZcInRyXCIhPT1pLnR5cGU/Y29uc29sZS5lcnJvcihcIkltcHJvcGVyIG5lc3Rpbmcgb2YgdGFibGUuIFlvdXIgPHRkPiBzaG91bGQgaGF2ZSBhIDx0cj4gcGFyZW50LlwiK3kobikrXCJcXG5cXG5cIitmKG4pKTpcInRoXCI9PT1yJiZcInRyXCIhPT1pLnR5cGUmJmNvbnNvbGUuZXJyb3IoXCJJbXByb3BlciBuZXN0aW5nIG9mIHRhYmxlLiBZb3VyIDx0aD4gc2hvdWxkIGhhdmUgYSA8dHI+LlwiK3kobikrXCJcXG5cXG5cIitmKG4pKTpjb25zb2xlLmVycm9yKFwiSW1wcm9wZXIgbmVzdGluZyBvZiB0YWJsZS4gWW91ciA8dGhlYWQvdGJvZHkvdGZvb3Q+IHNob3VsZCBoYXZlIGEgPHRhYmxlPiBwYXJlbnQuXCIreShuKStcIlxcblxcblwiK2YobikpLHZvaWQgMCE9PW4ucmVmJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnJlZiYmXCJvYmplY3RcIiE9dHlwZW9mIG4ucmVmJiYhKFwiJCR0eXBlb2ZcImluIG4pKXRocm93IG5ldyBFcnJvcignQ29tcG9uZW50XFwncyBcInJlZlwiIHByb3BlcnR5IHNob3VsZCBiZSBhIGZ1bmN0aW9uLCBvciBhbiBvYmplY3QgY3JlYXRlZCBieSBjcmVhdGVSZWYoKSwgYnV0IGdvdCBbJyt0eXBlb2Ygbi5yZWYrXCJdIGluc3RlYWRcXG5cIit5KG4pK1wiXFxuXFxuXCIrZihuKSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4udHlwZSlmb3IodmFyIHMgaW4gbi5wcm9wcylpZihcIm9cIj09PXNbMF0mJlwiblwiPT09c1sxXSYmXCJmdW5jdGlvblwiIT10eXBlb2Ygbi5wcm9wc1tzXSYmbnVsbCE9bi5wcm9wc1tzXSl0aHJvdyBuZXcgRXJyb3IoXCJDb21wb25lbnQncyBcXFwiXCIrcysnXCIgcHJvcGVydHkgc2hvdWxkIGJlIGEgZnVuY3Rpb24sIGJ1dCBnb3QgWycrdHlwZW9mIG4ucHJvcHNbc10rXCJdIGluc3RlYWRcXG5cIit5KG4pK1wiXFxuXFxuXCIrZihuKSk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlJiZuLnR5cGUucHJvcFR5cGVzKXtpZihcIkxhenlcIj09PW4udHlwZS5kaXNwbGF5TmFtZSYmbSYmIW0ubGF6eVByb3BUeXBlcy5oYXMobi50eXBlKSl7dmFyIGM9XCJQcm9wVHlwZXMgYXJlIG5vdCBzdXBwb3J0ZWQgb24gbGF6eSgpLiBVc2UgcHJvcFR5cGVzIG9uIHRoZSB3cmFwcGVkIGNvbXBvbmVudCBpdHNlbGYuIFwiO3RyeXt2YXIgbD1uLnR5cGUoKTttLmxhenlQcm9wVHlwZXMuc2V0KG4udHlwZSwhMCksY29uc29sZS53YXJuKGMrXCJDb21wb25lbnQgd3JhcHBlZCBpbiBsYXp5KCkgaXMgXCIrYShsKSl9Y2F0Y2gobil7Y29uc29sZS53YXJuKGMrXCJXZSB3aWxsIGxvZyB0aGUgd3JhcHBlZCBjb21wb25lbnQncyBuYW1lIG9uY2UgaXQgaXMgbG9hZGVkLlwiKX19dmFyIHU9bi5wcm9wcztuLnR5cGUuX19mJiZkZWxldGUodT1mdW5jdGlvbihuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn0oe30sdSkpLnJlZixmdW5jdGlvbihuLHQsZSxyLGEpe09iamVjdC5rZXlzKG4pLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIGk7dHJ5e2k9bltlXSh0LGUscixcInByb3BcIixudWxsLFwiU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRURcIil9Y2F0Y2gobil7aT1ufSFpfHxpLm1lc3NhZ2UgaW4gb3x8KG9baS5tZXNzYWdlXT0hMCxjb25zb2xlLmVycm9yKFwiRmFpbGVkIHByb3AgdHlwZTogXCIraS5tZXNzYWdlKyhhJiZcIlxcblwiK2EoKXx8XCJcIikpKX0pfShuLnR5cGUucHJvcFR5cGVzLHUsMCxhKG4pLGZ1bmN0aW9uKCl7cmV0dXJuIGYobil9KX1lJiZlKG4pfSxuLl9faD1mdW5jdGlvbihuLGUsbyl7aWYoIW58fCF0KXRocm93IG5ldyBFcnJvcihcIkhvb2sgY2FuIG9ubHkgYmUgaW52b2tlZCBmcm9tIHJlbmRlciBtZXRob2RzLlwiKTtoJiZoKG4sZSxvKX07dmFyIGI9ZnVuY3Rpb24obix0KXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7dmFyIGU9XCJnZXRcIituK3Q7diYmdi5pbmRleE9mKGUpPDAmJih2LnB1c2goZSksY29uc29sZS53YXJuKFwiZ2V0dGluZyB2bm9kZS5cIituK1wiIGlzIGRlcHJlY2F0ZWQsIFwiK3QpKX0sc2V0OmZ1bmN0aW9uKCl7dmFyIGU9XCJzZXRcIituK3Q7diYmdi5pbmRleE9mKGUpPDAmJih2LnB1c2goZSksY29uc29sZS53YXJuKFwic2V0dGluZyB2bm9kZS5cIituK1wiIGlzIG5vdCBhbGxvd2VkLCBcIit0KSl9fX0sdz17bm9kZU5hbWU6YihcIm5vZGVOYW1lXCIsXCJ1c2Ugdm5vZGUudHlwZVwiKSxhdHRyaWJ1dGVzOmIoXCJhdHRyaWJ1dGVzXCIsXCJ1c2Ugdm5vZGUucHJvcHNcIiksY2hpbGRyZW46YihcImNoaWxkcmVuXCIsXCJ1c2Ugdm5vZGUucHJvcHMuY2hpbGRyZW5cIil9LGc9T2JqZWN0LmNyZWF0ZSh7fSx3KTtuLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4ucHJvcHM7aWYobnVsbCE9PW4udHlwZSYmbnVsbCE9dCYmKFwiX19zb3VyY2VcImluIHR8fFwiX19zZWxmXCJpbiB0KSl7dmFyIGU9bi5wcm9wcz17fTtmb3IodmFyIG8gaW4gdCl7dmFyIHI9dFtvXTtcIl9fc291cmNlXCI9PT1vP24uX19zb3VyY2U9cjpcIl9fc2VsZlwiPT09bz9uLl9fc2VsZj1yOmVbb109cn19bi5fX3Byb3RvX189ZyxjJiZjKG4pfSxuLmRpZmZlZD1mdW5jdGlvbihuKXtpZihuLl9fayYmbi5fX2suZm9yRWFjaChmdW5jdGlvbih0KXtpZih0JiZ2b2lkIDA9PT10LnR5cGUpe2RlbGV0ZSB0Ll9fLGRlbGV0ZSB0Ll9fYjt2YXIgZT1PYmplY3Qua2V5cyh0KS5qb2luKFwiLFwiKTt0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBjaGlsZC4gRW5jb3VudGVyZWQgYW4gb2JqZWN0IHdpdGggdGhlIGtleXMge1wiK2UrXCJ9LlxcblxcblwiK2YobikpfX0pLHQ9ITEsciYmcihuKSxudWxsIT1uLl9faylmb3IodmFyIGU9W10sbz0wO288bi5fX2subGVuZ3RoO28rKyl7dmFyIGE9bi5fX2tbb107aWYoYSYmbnVsbCE9YS5rZXkpe3ZhciBpPWEua2V5O2lmKC0xIT09ZS5pbmRleE9mKGkpKXtjb25zb2xlLmVycm9yKCdGb2xsb3dpbmcgY29tcG9uZW50IGhhcyB0d28gb3IgbW9yZSBjaGlsZHJlbiB3aXRoIHRoZSBzYW1lIGtleSBhdHRyaWJ1dGU6IFwiJytpKydcIi4gVGhpcyBtYXkgY2F1c2UgZ2xpdGNoZXMgYW5kIG1pc2JlaGF2aW9yIGluIHJlbmRlcmluZyBwcm9jZXNzLiBDb21wb25lbnQ6IFxcblxcbicreShuKStcIlxcblxcblwiK2YobikpO2JyZWFrfWUucHVzaChpKX19fX0oKTtleHBvcnR7ciBhcyByZXNldFByb3BXYXJuaW5nc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWJ1Zy5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBuLEZyYWdtZW50IGFzIG8sQ29tcG9uZW50IGFzIGV9ZnJvbVwicHJlYWN0XCI7ZnVuY3Rpb24gdChvLGUpe3JldHVybiBuLl9fYSYmbi5fX2EoZSksb31cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuX19QUkVBQ1RfREVWVE9PTFNfXyYmd2luZG93Ll9fUFJFQUNUX0RFVlRPT0xTX18uYXR0YWNoUHJlYWN0KFwiMTAuNy4xXCIsbix7RnJhZ21lbnQ6byxDb21wb25lbnQ6ZX0pO2V4cG9ydHt0IGFzIGFkZEhvb2tOYW1lfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRldnRvb2xzLm1vZHVsZS5qcy5tYXBcbiIsInZhciBuLGwsdSxpLHQsbyxyLGYsZT17fSxjPVtdLHM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBhKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGgobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gdihsLHUsaSl7dmFyIHQsbyxyLGY9e307Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IociBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW3JdJiYoZltyXT1sLmRlZmF1bHRQcm9wc1tyXSk7cmV0dXJuIHkobCxmLHQsbyxudWxsKX1mdW5jdGlvbiB5KG4saSx0LG8scil7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpvLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PXI/Kyt1OnJ9O3JldHVybiBudWxsPT1yJiZudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24gcCgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIGQobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gXyhuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBrKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9rKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP2sobik6bnVsbH1mdW5jdGlvbiBiKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gYihuKX19ZnVuY3Rpb24gbShuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxyIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigocj1sLmRlYm91bmNlUmVuZGVyaW5nKXx8bykoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LG8scjtuLl9fZCYmKG89KHQ9KGw9bikuX192KS5fX2UsKHI9bC5fX1ApJiYodT1bXSwoaT1hKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKHIsdCxpLGwuX19uLHZvaWQgMCE9PXIub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tvXTpudWxsLHUsbnVsbD09bz9rKHQpOm8sdC5fX2gpLHoodSx0KSx0Ll9fZSE9byYmYih0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQsbyxyLGYscyxhKXt2YXIgaCx2LHAsXyxiLG0sZyx3PWkmJmkuX19rfHxjLEE9dy5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oXz11Ll9fa1toXT1udWxsPT0oXz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBfP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIF98fFwibnVtYmVyXCI9PXR5cGVvZiBffHxcImJpZ2ludFwiPT10eXBlb2YgXz95KG51bGwsXyxudWxsLG51bGwsXyk6QXJyYXkuaXNBcnJheShfKT95KGQse2NoaWxkcmVuOl99LG51bGwsbnVsbCxudWxsKTpfLl9fYj4wP3koXy50eXBlLF8ucHJvcHMsXy5rZXksbnVsbCxfLl9fdik6Xykpe2lmKF8uX189dSxfLl9fYj11Ll9fYisxLG51bGw9PT0ocD13W2hdKXx8cCYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpd1toXT12b2lkIDA7ZWxzZSBmb3Iodj0wO3Y8QTt2Kyspe2lmKChwPXdbdl0pJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl7d1t2XT12b2lkIDA7YnJlYWt9cD1udWxsfWoobixfLHA9cHx8ZSx0LG8scixmLHMsYSksYj1fLl9fZSwodj1fLnJlZikmJnAucmVmIT12JiYoZ3x8KGc9W10pLHAucmVmJiZnLnB1c2gocC5yZWYsbnVsbCxfKSxnLnB1c2godixfLl9fY3x8YixfKSksbnVsbCE9Yj8obnVsbD09bSYmKG09YiksXCJmdW5jdGlvblwiPT10eXBlb2YgXy50eXBlJiZfLl9faz09PXAuX19rP18uX19kPXM9eChfLHMsbik6cz1QKG4sXyxwLHcsYixzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKSk6cyYmcC5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9ayhwKSl9Zm9yKHUuX19lPW0saD1BO2gtLTspbnVsbCE9d1toXSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmbnVsbCE9d1toXS5fX2UmJndbaF0uX19lPT11Ll9fZCYmKHUuX19kPWsoaSxoKzEpKSxOKHdbaF0sd1toXSkpO2lmKGcpZm9yKGg9MDtoPGcubGVuZ3RoO2grKylNKGdbaF0sZ1srK2hdLGdbKytoXSl9ZnVuY3Rpb24geChuLGwsdSl7Zm9yKHZhciBpLHQ9bi5fX2ssbz0wO3QmJm88dC5sZW5ndGg7bysrKShpPXRbb10pJiYoaS5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgaS50eXBlP3goaSxsLHUpOlAodSxpLGksdCxpLl9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24gQShuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe0EobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBQKG4sbCx1LGksdCxvKXt2YXIgcixmLGU7aWYodm9pZCAwIT09bC5fX2Qpcj1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1vfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1vfHxvLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCkscj1udWxsO2Vsc2V7Zm9yKGY9byxlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MilpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxvKSxyPW99cmV0dXJuIHZvaWQgMCE9PXI/cjp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgbztmb3IobyBpbiB1KVwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxvIGluIGx8fEgobixvLG51bGwsdVtvXSxpKTtmb3IobyBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxIKG4sbyxsW29dLHVbb10saSl9ZnVuY3Rpb24gJChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8cy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciBvO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8JChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHwkKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKW89bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtvXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwsbz9UOkksbyk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsbz9UOkksbyk7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGluayhIfDpoKS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxvLHIsZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLHI9W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQsbyxyLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PXImJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LG8scixmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1yKSYmKHUuX19lPWUsdS5fX2g9ISFjLHJbci5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxvLHIsZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihvPSEwKSxudWxsIT1yKWZvcig7XzxyLmxlbmd0aDtfKyspaWYoKHM9cltfXSkmJlwic2V0QXR0cmlidXRlXCJpbiBzPT0hIWQmJihkP3MubG9jYWxOYW1lPT09ZDozPT09cy5ub2RlVHlwZSkpe2w9cyxyW19dPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9bz9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxyPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKHI9ciYmbi5jYWxsKGwuY2hpbGROb2RlcyksYT0oeT1pLnByb3BzfHxlKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPXIpZm9yKHk9e30sXz0wO188bC5hdHRyaWJ1dGVzLmxlbmd0aDtfKyspeVtsLmF0dHJpYnV0ZXNbX10ubmFtZV09bC5hdHRyaWJ1dGVzW19dLnZhbHVlOyh2fHxhKSYmKHYmJihhJiZ2Ll9faHRtbD09YS5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LG8sYyksdil1Ll9faz1bXTtlbHNlIGlmKF89dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShfKT9fOltfXSx1LGksdCxvJiZcImZvcmVpZ25PYmplY3RcIiE9PWQscixmLHI/clswXTppLl9fayYmayhpLDApLGMpLG51bGwhPXIpZm9yKF89ci5sZW5ndGg7Xy0tOyludWxsIT1yW19dJiZoKHJbX10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLnZhbHVlKSYmKF8hPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1kJiYhX3x8XCJvcHRpb25cIj09PWQmJl8hPT15LnZhbHVlKSYmSChsLFwidmFsdWVcIixfLHkudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gcCYmdm9pZCAwIT09KF89cC5jaGVja2VkKSYmXyE9PWwuY2hlY2tlZCYmSChsLFwiY2hlY2tlZFwiLF8seS5jaGVja2VkLCExKSl9cmV0dXJuIGx9ZnVuY3Rpb24gTShuLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih1KTpuLmN1cnJlbnQ9dX1jYXRjaChuKXtsLl9fZShuLGkpfX1mdW5jdGlvbiBOKG4sdSxpKXt2YXIgdCxvO2lmKGwudW5tb3VudCYmbC51bm1vdW50KG4pLCh0PW4ucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bi5fX2V8fE0odCxudWxsLHUpKSxudWxsIT0odD1uLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfXQuYmFzZT10Ll9fUD1udWxsfWlmKHQ9bi5fX2spZm9yKG89MDtvPHQubGVuZ3RoO28rKyl0W29dJiZOKHRbb10sdSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnR5cGUpO2l8fG51bGw9PW4uX19lfHxoKG4uX19lKSxuLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gTyhuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBTKHUsaSx0KXt2YXIgbyxyLGY7bC5fXyYmbC5fXyh1LGkpLHI9KG89XCJmdW5jdGlvblwiPT10eXBlb2YgdCk/bnVsbDp0JiZ0Ll9fa3x8aS5fX2ssZj1bXSxqKGksdT0oIW8mJnR8fGkpLl9faz12KGQsbnVsbCxbdV0pLHJ8fGUsZSx2b2lkIDAhPT1pLm93bmVyU1ZHRWxlbWVudCwhbyYmdD9bdF06cj9udWxsOmkuZmlyc3RDaGlsZD9uLmNhbGwoaS5jaGlsZE5vZGVzKTpudWxsLGYsIW8mJnQ/dDpyP3IuX19lOmkuZmlyc3RDaGlsZCxvKSx6KGYsdSl9ZnVuY3Rpb24gcShuLGwpe1MobixsLHEpfWZ1bmN0aW9uIEIobCx1LGkpe3ZhciB0LG8scixmPWEoe30sbC5wcm9wcyk7Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSkseShsLnR5cGUsZix0fHxsLmtleSxvfHxsLnJlZixudWxsKX1mdW5jdGlvbiBEKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK2YrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LGk7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwoaT17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKG0pfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49Yy5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsLHUsaSl7Zm9yKHZhciB0LG8scjtsPWwuX187KWlmKCh0PWwuX19jKSYmIXQuX18pdHJ5e2lmKChvPXQuY29uc3RydWN0b3IpJiZudWxsIT1vLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHQuc2V0U3RhdGUoby5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHI9dC5fX2QpLG51bGwhPXQuY29tcG9uZW50RGlkQ2F0Y2gmJih0LmNvbXBvbmVudERpZENhdGNoKG4saXx8e30pLHI9dC5fX2QpLHIpcmV0dXJuIHQuX19FPXR9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sXy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9YSh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKGEoe30sdSksdGhpcy5wcm9wcykpLG4mJmEodSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksbSh0aGlzKSl9LF8ucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUucmVuZGVyPWQsdD1bXSxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGcuX19yPTAsZj0wO2V4cG9ydHtTIGFzIHJlbmRlcixxIGFzIGh5ZHJhdGUsdiBhcyBjcmVhdGVFbGVtZW50LHYgYXMgaCxkIGFzIEZyYWdtZW50LHAgYXMgY3JlYXRlUmVmLGkgYXMgaXNWYWxpZEVsZW1lbnQsXyBhcyBDb21wb25lbnQsQiBhcyBjbG9uZUVsZW1lbnQsRCBhcyBjcmVhdGVDb250ZXh0LEEgYXMgdG9DaGlsZEFycmF5LGwgYXMgb3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgcixGcmFnbWVudCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtGcmFnbWVudH1mcm9tXCJwcmVhY3RcIjt2YXIgbz0wO2Z1bmN0aW9uIGUoXyxlLG4sdCxmKXt2YXIgbCxzLHU9e307Zm9yKHMgaW4gZSlcInJlZlwiPT1zP2w9ZVtzXTp1W3NdPWVbc107dmFyIGE9e3R5cGU6Xyxwcm9wczp1LGtleTpuLHJlZjpsLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Oi0tbyxfX3NvdXJjZTpmLF9fc2VsZjp0fTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBfJiYobD1fLmRlZmF1bHRQcm9wcykpZm9yKHMgaW4gbCl2b2lkIDA9PT11W3NdJiYodVtzXT1sW3NdKTtyZXR1cm4gci52bm9kZSYmci52bm9kZShhKSxhfWV4cG9ydHtlIGFzIGpzeCxlIGFzIGpzeHMsZSBhcyBqc3hERVZ9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anN4UnVudGltZS5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NwbGFzaC1zY3JlZW4uY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90aWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdGFydC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IFBhY2thZ2VBcHBsaWNhdGlvbiwgQXBwbGljYXRpb25WaXN1YWxFbGVtZW50cywgQXBwbGljYXRpb25EZWZhdWx0VGlsZSwgRm9yZWdyb3VuZFRleHQsIEFwcGxpY2F0aW9uU3BsYXNoU2NyZWVuIH0gZnJvbSBcIi4vUGFja2FnZUFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCBiYXNlMzJFbmNvZGUgZnJvbSAnYmFzZTMyLWVuY29kZSdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFja2FnZSB7XHJcbiAgICBwYXRoOiBzdHJpbmc7XHJcbiAgICBpZGVudGl0eT86IFBhY2thZ2VJZGVudGl0eTtcclxuICAgIHByb3BlcnRpZXM/OiBQYWNrYWdlUHJvcGVydGllcztcclxuICAgIGFwcGxpY2F0aW9ucz86IE1hcDxzdHJpbmcsIFBhY2thZ2VBcHBsaWNhdGlvbj47XHJcbiAgICBjb21wYXRpYmlsaXR5TW9kZT86IFBhY2thZ2VDb21wYXRpYmlsaXR5TW9kZTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGFja2FnZUNvbXBhdGliaWxpdHlNb2RlIHtcclxuICAgIHdpbmRvd3M4MCxcclxuICAgIHdpbmRvd3M4MSxcclxuICAgIHdpbmRvd3MxMCxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWNrYWdlSWRlbnRpdHkge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdmVyc2lvbjogc3RyaW5nO1xyXG4gICAgcHVibGlzaGVyOiBzdHJpbmc7XHJcblxyXG4gICAgcGFja2FnZUZhbWlseU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWNrYWdlUHJvcGVydGllcyB7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHB1Ymxpc2hlckRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICBsb2dvOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWNrYWdlUmVhZGVyIHtcclxuXHJcbiAgICBwcml2YXRlIHBhY2thZ2VOYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNvbXBhdGliaWxpdHlNb2RlOiBQYWNrYWdlQ29tcGF0aWJpbGl0eU1vZGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFja2FnZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucGFja2FnZU5hbWUgPSBwYWNrYWdlTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZWFkUGFja2FnZSgpOiBQcm9taXNlPFBhY2thZ2U+IHtcclxuICAgICAgICAvL2xldCBwYWNrID0gbmV3IFBhY2thZ2UodGhpcy5wYWNrYWdlUGF0aCk7XHJcblxyXG4gICAgICAgIGxldCBwYWNrOiBQYWNrYWdlID0geyBwYXRoOiBcIlwiLCBhcHBsaWNhdGlvbnM6IG5ldyBNYXAoKSB9O1xyXG4gICAgICAgIC8vIGxldCBtYW5pZmVzdFBhdGggPSBwYXRoLmpvaW4odGhpcy5wYWNrYWdlUGF0aCwgXCJBcHB4TWFuaWZlc3QueG1sXCIpO1xyXG4gICAgICAgIC8vIGxldCBtYW5pZmVzdFRleHQgPSBmcy5yZWFkRmlsZVN5bmMobWFuaWZlc3RQYXRoLCAndXRmLTgnKTtcclxuXHJcbiAgICAgICAgbGV0IG1hbmlmZXN0VXJsID0gXCIvbWFuaWZlc3RzL1wiICsgdGhpcy5wYWNrYWdlTmFtZSArIFwiLmFwcHhtYW5pZmVzdFwiO1xyXG4gICAgICAgIGxldCBtYW5pZmVzdFRleHQgPSBhd2FpdCAoYXdhaXQgZmV0Y2gobWFuaWZlc3RVcmwpKS50ZXh0KCk7XHJcbiAgICAgICAgbGV0IG1hbmlmZXN0RG9jdW1lbnQgPSBuZXcgRE9NUGFyc2VyKClcclxuICAgICAgICAgICAgLnBhcnNlRnJvbVN0cmluZyhtYW5pZmVzdFRleHQsICdhcHBsaWNhdGlvbi94bWwnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYgKG1hbmlmZXN0RG9jdW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWFuaWZlc3QgZmFpbGVkIHRvIHBhcnNlIVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpZGVudGl0eUVsZW1lbnQgPSBtYW5pZmVzdERvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJJZGVudGl0eVwiKTtcclxuICAgICAgICBsZXQgcHJvcGVydGllc0VsZW1lbnQgPSBtYW5pZmVzdERvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJQcm9wZXJ0aWVzXCIpO1xyXG4gICAgICAgIGxldCBhcHBsaWNhdGlvbnNFbGVtZW50ID0gbWFuaWZlc3REb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiQXBwbGljYXRpb25zXCIpO1xyXG4gICAgICAgIGxldCBvc01pblZlcnNpb24gPSBtYW5pZmVzdERvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJPU01pblZlcnNpb25cIik/LnRleHRDb250ZW50O1xyXG5cclxuICAgICAgICBpZiAoIW9zTWluVmVyc2lvbiB8fCBvc01pblZlcnNpb24uc3RhcnRzV2l0aChcIjYuM1wiKSkge1xyXG4gICAgICAgICAgICBwYWNrLmNvbXBhdGliaWxpdHlNb2RlID0gUGFja2FnZUNvbXBhdGliaWxpdHlNb2RlLndpbmRvd3M4MTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3NNaW5WZXJzaW9uLnN0YXJ0c1dpdGgoXCI2LjJcIikpIHtcclxuICAgICAgICAgICAgcGFjay5jb21wYXRpYmlsaXR5TW9kZSA9IFBhY2thZ2VDb21wYXRpYmlsaXR5TW9kZS53aW5kb3dzODA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbXBhdGliaWxpdHlNb2RlID0gcGFjay5jb21wYXRpYmlsaXR5TW9kZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYGxvYWRpbmcgcGFja2FnZSAke3RoaXMucGFja2FnZU5hbWV9IHdpdGggbW9kZSAke1BhY2thZ2VDb21wYXRpYmlsaXR5TW9kZVt0aGlzLmNvbXBhdGliaWxpdHlNb2RlXX1gKTtcclxuXHJcbiAgICAgICAgcGFjay5pZGVudGl0eSA9IGF3YWl0IHRoaXMubG9hZFRleHRSZXNvdXJjZXModGhpcy5yZWFkSWRlbnRpdHkoaWRlbnRpdHlFbGVtZW50KSk7XHJcbiAgICAgICAgcGFjay5wcm9wZXJ0aWVzID0gdGhpcy5sb2FkVGV4dFJlc291cmNlcyh0aGlzLnJlYWRQcm9wZXJ0aWVzKHByb3BlcnRpZXNFbGVtZW50KSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYXBwbGljYXRpb25FbGVtZW50IG9mIGFwcGxpY2F0aW9uc0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIkFwcGxpY2F0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgIGxldCBhcHBsaWNhdGlvbiA9IHRoaXMubG9hZFRleHRSZXNvdXJjZXModGhpcy5yZWFkQXBwbGljYXRpb24oYXBwbGljYXRpb25FbGVtZW50KSk7XHJcbiAgICAgICAgICAgIHBhY2suYXBwbGljYXRpb25zLnNldChhcHBsaWNhdGlvbi5pZCwgYXBwbGljYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyByZWFkSWRlbnRpdHkoZWxlbWVudDogRWxlbWVudCk6IFByb21pc2U8UGFja2FnZUlkZW50aXR5PiB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcIk5hbWVcIik7XHJcbiAgICAgICAgbGV0IHB1Ymxpc2hlciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiUHVibGlzaGVyXCIpO1xyXG4gICAgICAgIGxldCB2ZXJzaW9uID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJWZXJzaW9uXCIpO1xyXG5cclxuICAgICAgICAvLyBjb21wdXRlIHRoZSBQYWNrYWdlRmFtaWx5TmFtZSBhcyBiYXNlMzIgY3JvY2tmb3JkIG9mIHRoZSBmaXJzdCA4IGJ5dGVzIG9mIHRoZSBTSEEyNTZcclxuICAgICAgICAvLyBoYXNoIG9mIHRoZSBQdWJsaXNoZXIgZmllbGQuXHJcblxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihwdWJsaXNoZXIubGVuZ3RoICogMilcclxuICAgICAgICBjb25zdCBidWZWaWV3ID0gbmV3IFVpbnQxNkFycmF5KGJ1ZmZlcik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdWJsaXNoZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYnVmVmlld1tpXSA9IHB1Ymxpc2hlci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KCdTSEEtMjU2JywgYnVmVmlldyk7XHJcbiAgICAgICAgY29uc3QgYmFzZTMyID0gYmFzZTMyRW5jb2RlKGhhc2guc2xpY2UoMCwgOCksICdDcm9ja2ZvcmQnKTtcclxuICAgICAgICBsZXQgcGFja2FnZUZhbWlseU5hbWUgPSBuYW1lICsgXCJfXCIgKyBiYXNlMzIudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgbmFtZSwgcHVibGlzaGVyLCB2ZXJzaW9uLCBwYWNrYWdlRmFtaWx5TmFtZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZFByb3BlcnRpZXMoZWxlbWVudDogRWxlbWVudCk6IFBhY2thZ2VQcm9wZXJ0aWVzIHtcclxuICAgICAgICBsZXQgZGlzcGxheU5hbWUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJEaXNwbGF5TmFtZVwiKS50ZXh0Q29udGVudDtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJEZXNjcmlwdGlvblwiKT8udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgbGV0IHB1Ymxpc2hlckRpc3BsYXlOYW1lID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiUHVibGlzaGVyRGlzcGxheU5hbWVcIikudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgbGV0IGxvZ28gPSB0aGlzLmZpeHVwVXJsKGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIkxvZ29cIikudGV4dENvbnRlbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBkaXNwbGF5TmFtZSwgZGVzY3JpcHRpb24sIHB1Ymxpc2hlckRpc3BsYXlOYW1lLCBsb2dvIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkQXBwbGljYXRpb24oZWxlbWVudDogRWxlbWVudCk6IFBhY2thZ2VBcHBsaWNhdGlvbiB7XHJcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJJZFwiKTtcclxuICAgICAgICBsZXQgc3RhcnRQYWdlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJTdGFydFBhZ2VcIik7XHJcblxyXG4gICAgICAgIGxldCB2aXN1YWxFbGVtZW50c0VsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJWaXN1YWxFbGVtZW50c1wiKTtcclxuICAgICAgICBsZXQgdmlzdWFsRWxlbWVudHMgPSB0aGlzLmxvYWRUZXh0UmVzb3VyY2VzKHRoaXMucmVhZFZpc3VhbEVsZW1lbnRzKHZpc3VhbEVsZW1lbnRzRWxlbWVudCkpO1xyXG5cclxuICAgICAgICAvLyB0aGlzIHdpbGwgYmVjb21lIGltcG9ydGFudCBldmVudHVhbGx5IChzaGFyZSB0YXJnZXRzLCBldGMuKVxyXG4gICAgICAgIC8vIGxldCBleHRlbnNpb25zRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIkV4dGVuc2lvbnNcIik7XHJcbiAgICAgICAgLy8gZm9yIChjb25zdCBleHRlbnNpb25FbGVtZW50IG9mIGV4dGVuc2lvbnNFbGVtZW50LmNoaWxkTm9kZXMpIHtcclxuXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICByZXR1cm4geyBpZCwgc3RhcnRQYWdlLCB2aXN1YWxFbGVtZW50cywgZXh0ZW5zaW9uczogW10gfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRWaXN1YWxFbGVtZW50cyhlbGVtZW50OiBFbGVtZW50KTogQXBwbGljYXRpb25WaXN1YWxFbGVtZW50cyB7XHJcbiAgICAgICAgbGV0IHZpc3VhbEVsZW1lbnRzOiBQYXJ0aWFsPEFwcGxpY2F0aW9uVmlzdWFsRWxlbWVudHM+ID0ge307XHJcbiAgICAgICAgdmlzdWFsRWxlbWVudHMuZGlzcGxheU5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcIkRpc3BsYXlOYW1lXCIpO1xyXG4gICAgICAgIHZpc3VhbEVsZW1lbnRzLmRlc2NyaXB0aW9uID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJEZXNjcmlwdGlvblwiKTtcclxuICAgICAgICB2aXN1YWxFbGVtZW50cy5mb3JlZ3JvdW5kVGV4dCA9IDxGb3JlZ3JvdW5kVGV4dD5lbGVtZW50LmdldEF0dHJpYnV0ZShcIkZvcmVncm91bmRUZXh0XCIpO1xyXG4gICAgICAgIHZpc3VhbEVsZW1lbnRzLmJhY2tncm91bmRDb2xvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiQmFja2dyb3VuZENvbG9yXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb21wYXRpYmlsaXR5TW9kZSA9PT0gUGFja2FnZUNvbXBhdGliaWxpdHlNb2RlLndpbmRvd3M4MCkge1xyXG4gICAgICAgICAgICB2aXN1YWxFbGVtZW50cy5zcXVhcmUxNTB4MTUwTG9nbyA9IHRoaXMuZml4dXBVcmwoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJMb2dvXCIpKTtcclxuICAgICAgICAgICAgdmlzdWFsRWxlbWVudHMuc3F1YXJlMzB4MzBMb2dvID0gdGhpcy5maXh1cFVybChlbGVtZW50LmdldEF0dHJpYnV0ZShcIlNtYWxsTG9nb1wiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2aXN1YWxFbGVtZW50cy5zcXVhcmUxNTB4MTUwTG9nbyA9IHRoaXMuZml4dXBVcmwoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJTcXVhcmUxNTB4MTUwTG9nb1wiKSk7XHJcbiAgICAgICAgICAgIHZpc3VhbEVsZW1lbnRzLnNxdWFyZTMweDMwTG9nbyA9IHRoaXMuZml4dXBVcmwoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJTcXVhcmUzMHgzMExvZ29cIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRlZmF1bHRUaWxlRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIkRlZmF1bHRUaWxlXCIpO1xyXG4gICAgICAgIGlmIChkZWZhdWx0VGlsZUVsZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdmlzdWFsRWxlbWVudHMuZGVmYXVsdFRpbGUgPSB0aGlzLmxvYWRUZXh0UmVzb3VyY2VzKHRoaXMucmVhZERlZmF1bHRUaWxlKGRlZmF1bHRUaWxlRWxlbWVudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmlzdWFsRWxlbWVudHMuZGVmYXVsdFRpbGUgPSB7IHNob3J0TmFtZTogdmlzdWFsRWxlbWVudHMuZGlzcGxheU5hbWUgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzcGxhc2hTY3JlZW5FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiU3BsYXNoU2NyZWVuXCIpO1xyXG4gICAgICAgIHZpc3VhbEVsZW1lbnRzLnNwbGFzaFNjcmVlbiA9IHRoaXMucmVhZFNwbGFzaFNjcmVlbihzcGxhc2hTY3JlZW5FbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxBcHBsaWNhdGlvblZpc3VhbEVsZW1lbnRzPnZpc3VhbEVsZW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZFNwbGFzaFNjcmVlbihlbGVtZW50OiBFbGVtZW50KTogQXBwbGljYXRpb25TcGxhc2hTY3JlZW4ge1xyXG4gICAgICAgIC8vbGV0IHNwbGFzaFNjcmVlbiA9IG5ldyBBcHBsaWNhdGlvblNwbGFzaFNjcmVlbigpO1xyXG4gICAgICAgIGxldCBiYWNrZ3JvdW5kQ29sb3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcIkJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICBsZXQgaW1hZ2UgPSB0aGlzLmZpeHVwVXJsKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiSW1hZ2VcIikpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBiYWNrZ3JvdW5kQ29sb3IsIGltYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkRGVmYXVsdFRpbGUoZWxlbWVudDogRWxlbWVudCk6IEFwcGxpY2F0aW9uRGVmYXVsdFRpbGUge1xyXG4gICAgICAgIGxldCBkZWZhdWx0VGlsZTogUGFydGlhbDxBcHBsaWNhdGlvbkRlZmF1bHRUaWxlPiA9IHsgc2hvd05hbWVPblRpbGVzOiBbXSB9O1xyXG4gICAgICAgIGRlZmF1bHRUaWxlLnNob3J0TmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiU2hvcnROYW1lXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb21wYXRpYmlsaXR5TW9kZSA9PSBQYWNrYWdlQ29tcGF0aWJpbGl0eU1vZGUud2luZG93czgwKSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRUaWxlLndpZGUzMTB4MTUwTG9nbyA9IHRoaXMuZml4dXBVcmwoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJXaWRlTG9nb1wiKSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2hvd05hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcIlNob3dOYW1lXCIpO1xyXG4gICAgICAgICAgICBpZiAoc2hvd05hbWUgPT09IFwiYWxsTG9nb3NcIikge1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRpbGUuc2hvd05hbWVPblRpbGVzLnB1c2goXCJzcXVhcmUxNTB4MTUwXCIpO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRpbGUuc2hvd05hbWVPblRpbGVzLnB1c2goXCJ3aWRlMzEweDE1MFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzaG93TmFtZSA9PSBcImxvZ29Pbmx5XCIpIHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRUaWxlLnNob3dOYW1lT25UaWxlcy5wdXNoKFwic3F1YXJlMTUweDE1MFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzaG93TmFtZSA9PSBcIndpZGVMb2dvT25seVwiKSB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGlsZS5zaG93TmFtZU9uVGlsZXMucHVzaChcIndpZGUzMTB4MTUwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkZWZhdWx0VGlsZS5zcXVhcmU3MHg3MExvZ28gPSB0aGlzLmZpeHVwVXJsKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiU3F1YXJlNzB4NzBMb2dvXCIpKTtcclxuICAgICAgICAgICAgZGVmYXVsdFRpbGUud2lkZTMxMHgxNTBMb2dvID0gdGhpcy5maXh1cFVybChlbGVtZW50LmdldEF0dHJpYnV0ZShcIldpZGUzMTB4MTUwTG9nb1wiKSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHRUaWxlLnNxdWFyZTMxMHgzMTBMb2dvID0gdGhpcy5maXh1cFVybChlbGVtZW50LmdldEF0dHJpYnV0ZShcIlNxdWFyZTMxMHgzMTBMb2dvXCIpKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2hvd09uRWxlbWVudCBvZiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJTaG93T25cIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gc2hvd09uRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJUaWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRpbGUuc2hvd05hbWVPblRpbGVzLnB1c2godGlsZS5zdWJzdHJpbmcoMCwgdGlsZS5sZW5ndGggLSA0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0aWxlVXBkYXRlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiVGlsZVVwZGF0ZVwiKTtcclxuICAgICAgICBpZiAodGlsZVVwZGF0ZSkge1xyXG4gICAgICAgICAgICBkZWZhdWx0VGlsZS50aWxlVXBkYXRlVXJsID0gdGlsZVVwZGF0ZS5nZXRBdHRyaWJ1dGUoXCJVcmlUZW1wbGF0ZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8QXBwbGljYXRpb25EZWZhdWx0VGlsZT5kZWZhdWx0VGlsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpeHVwVXJsKHJlbGF0aXZlVXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVVybClcclxuICAgICAgICAgICAgcmV0dXJuIFwiL2Fzc2V0cy9cIiArIHRoaXMucGFja2FnZU5hbWUudG9Mb3dlckNhc2UoKSArIFwiL1wiICsgcmVsYXRpdmVVcmw7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkVGV4dFJlc291cmNlczxUPihvYmplY3Q6IFQpOiBUIHtcclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGFja2FnZSB9IGZyb20gXCIuL1BhY2thZ2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWNrYWdlUmVnaXN0cnkge1xyXG4gICAgc3RhdGljIHBhY2thZ2VzOiBNYXA8c3RyaW5nLCBQYWNrYWdlPiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0UGFja2FnZShpZDogc3RyaW5nKTogUGFja2FnZSB7XHJcbiAgICAgICAgdmFyIHBhY2sgPSBQYWNrYWdlUmVnaXN0cnkucGFja2FnZXMuZ2V0KGlkKTtcclxuICAgICAgICByZXR1cm4gcGFjaztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVnaXN0ZXJQYWNrYWdlKHBhY2s6IFBhY2thZ2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYWNrKTtcclxuICAgICAgICBQYWNrYWdlUmVnaXN0cnkucGFja2FnZXMuc2V0KHBhY2suaWRlbnRpdHkucGFja2FnZUZhbWlseU5hbWUsIHBhY2spO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJhYmxlUHJvcHMgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IFRpbGVHcm91cCB9IGZyb20gXCIuL1N0YXJ0L1RpbGVHcm91cFwiO1xyXG5pbXBvcnQgeyBUaWxlU2l6ZSB9IGZyb20gXCIuL1N0YXJ0L1RpbGVTaXplXCI7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9TdGFydC9UaWxlXCI7XHJcbmltcG9ydCB7IFBhY2thZ2UgfSBmcm9tIFwiLi9EYXRhL1BhY2thZ2VcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiL3N0YXRpYy93YW0ucG5nXCJcclxuaW1wb3J0IFwiLi9zdGFydC5jc3NcIlxyXG5cclxuaW50ZXJmYWNlIFN0YXJ0SGVhZGVyQnV0dG9uUHJvcHMge1xyXG4gICAgcHJpbWFyeUNsYXNzOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgSGVhZGVyQnV0dG9uID0gKHByb3BzOiBSZW5kZXJhYmxlUHJvcHM8U3RhcnRIZWFkZXJCdXR0b25Qcm9wcz4pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzcz17XCJzdGFydC1oZWFkZXItYnV0dG9uIFwiICsgcHJvcHMucHJpbWFyeUNsYXNzfT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhcnRTdGF0ZSB7XHJcbiAgICB0aWxlR3JvdXBzOiBBcnJheTxhbnk+XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFydCBleHRlbmRzIENvbXBvbmVudDxhbnksIFN0YXJ0U3RhdGU+IHtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBmZXRjaChcIi9kaXN0L1N0YXJ0U2NyZWVuLnhtbFwiKS50aGVuKHJlc3AgPT4gcmVzcC50ZXh0KCkpXHJcbiAgICAgICAgICAgIC50aGVuKHRleHQgPT4gdGhpcy5wYXJzZUxheW91dCh0ZXh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VMYXlvdXQodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcodGV4dCwgJ2FwcGxpY2F0aW9uL3htbCcpO1xyXG4gICAgICAgIGxldCByb290ID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJsYXVuY2hlclwiKTtcclxuXHJcbiAgICAgICAgaWYgKHJvb3QgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGlsZUdyb3VwcyA9IFtdO1xyXG4gICAgICAgIGxldCBncm91cHMgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCJncm91cFwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGdyb3Vwcykge1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXBQcm9wcyA9IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBncm91cC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgdGlsZXM6IFtdXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRpbGUgb2YgZ3JvdXAucXVlcnlTZWxlY3RvckFsbChcInRpbGVcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCByYXdBcHBJZCA9IHRpbGUuZ2V0QXR0cmlidXRlKFwiQXBwSURcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGlsZVByb3BzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhY2thZ2VOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcElkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFRpbGVTaXplLnNxdWFyZTE1MHgxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmVuY2U6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyYXdBcHBJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcnNpbmcgd2luZG93cyA4IHN0YXJ0IHNjcmVlbiB4bWwgZHVtcFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQYXJzaW5nIEFwcElEICR7cmF3QXBwSWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkeCA9IHJhd0FwcElkLmxhc3RJbmRleE9mKFwiIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlUHJvcHMuYXBwSWQgPSByYXdBcHBJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYWNrYWdlRmFtaWx5TmFtZSA9IHJhd0FwcElkLnN1YnN0cmluZygwLCBpZHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXBwSWQgPSByYXdBcHBJZC5zdWJzdHJpbmcoaWR4ICsgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZHggPSBwYWNrYWdlRmFtaWx5TmFtZS5sYXN0SW5kZXhPZihcIl9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwYWNrYWdlRmFtaWx5TmFtZSA9IHBhY2thZ2VGYW1pbHlOYW1lLnN1YnN0cmluZygwLCBpZHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlUHJvcHMucGFja2FnZU5hbWUgPSBwYWNrYWdlRmFtaWx5TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVByb3BzLmFwcElkID0gYXBwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aWxlUHJvcHMuZmVuY2UgPSB0aWxlLmdldEF0dHJpYnV0ZShcIkZlbmNlUG9zdFwiKSA9PT0gXCIxXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZVByb3BzLnNpemUgPSBUaWxlU2l6ZVt0aWxlLmdldEF0dHJpYnV0ZShcInNpemVcIildO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZVByb3BzLnBhY2thZ2VOYW1lID0gdGlsZS5nZXRBdHRyaWJ1dGUoXCJwYWNrYWdlTmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlUHJvcHMuYXBwSWQgPSB0aWxlLmdldEF0dHJpYnV0ZShcImFwcElkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVQcm9wcy5mZW5jZSA9IHRpbGUuZ2V0QXR0cmlidXRlKFwiZmVuY2VcIikgPT09IFwidHJ1ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVQcm9wcy5zaXplID0gVGlsZVNpemVbdGlsZS5nZXRBdHRyaWJ1dGUoXCJzaXplXCIpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBncm91cFByb3BzLnRpbGVzLnB1c2godGlsZVByb3BzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGlsZUdyb3Vwcy5wdXNoKGdyb3VwUHJvcHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpbGVHcm91cHM6IHRpbGVHcm91cHMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGFydCBzdGFydC1zY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGFydC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXJ0LWhlYWRlciBzdGFydC1tYWluLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzdGFydC10aXRsZVwiPlN0YXJ0PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXJ0LWhlYWRlci1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQnV0dG9uIHByaW1hcnlDbGFzcz1cInN0YXJ0LWhlYWRlci11c2VyLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VybmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByaW1hcnlcIj5UaG9tYXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2Vjb25kYXJ5XCI+TWF5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBdmF0YXJ9IGNsYXNzPVwicGljdHVyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRlckJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJCdXR0b24gcHJpbWFyeUNsYXNzPVwic3RhcnQtaGVhZGVyLXBvd2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4RTA3RDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckJ1dHRvbiBwcmltYXJ5Q2xhc3M9XCJzdGFydC1oZWFkZXItc2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4RTJGQjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXJ0LXRpbGVzLXNjcm9sbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXJ0LXRpbGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50aWxlR3JvdXBzID8gdGhpcy5zdGF0ZS50aWxlR3JvdXBzLm1hcChtID0+IDxUaWxlR3JvdXAgey4uLm19IC8+KSA6IFtdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXJ0LWZvb3RlclwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCBcIi4vc3BsYXNoLXNjcmVlbi5jc3NcIlxyXG5cclxuaW50ZXJmYWNlIENvcmVXaW5kb3dTcGxhc2hTY3JlZW5Qcm9wcyB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3VyOiBzdHJpbmc7XHJcbiAgICBzcGxhc2hJbWFnZVVybDogc3RyaW5nO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuLy8gXHJcbi8vIFJlcHJlc2VudHMgYSBDb3JlV2luZG93J3Mgc3BsYXNoIHNjcmVlblxyXG4vL1xyXG5leHBvcnQgY2xhc3MgQ29yZVdpbmRvd1NwbGFzaFNjcmVlbiBleHRlbmRzIENvbXBvbmVudDxDb3JlV2luZG93U3BsYXNoU2NyZWVuUHJvcHM+IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPXtcInNwbGFzaC1zY3JlZW5cIiArICh0aGlzLnByb3BzLnZpc2libGUgPyBcIiB2aXNpYmxlXCIgOiBcIlwiKX0gc3R5bGU9e3sgYmFja2dyb3VuZDogdGhpcy5wcm9wcy5iYWNrZ3JvdW5kQ29sb3VyIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwbGFzaC1zY3JlZW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInNwbGFzaC1zY3JlZW4taW1hZ2VcIiBzcmM9e3RoaXMucHJvcHMuc3BsYXNoSW1hZ2VVcmx9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgVGlsZSwgVGlsZVByb3BzIH0gZnJvbSBcIi4vVGlsZVwiO1xyXG5pbXBvcnQgXCIuL3RpbGUuY3NzXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVuY2VUaWxlUHJvcHMge1xyXG4gICAgYXBwczogVGlsZVByb3BzW11cclxuICAgIHJvdz86IG51bWJlcixcclxuICAgIGNvbHVtbj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZlbmNlVGlsZSBleHRlbmRzIENvbXBvbmVudDxGZW5jZVRpbGVQcm9wcz4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBGZW5jZVRpbGVQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocHJvcHM6IEZlbmNlVGlsZVByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlbmNlLXRpbGUtY29udGFpbmVyIHNxdWFyZTE1MHgxNTBcIiBzdHlsZT17YGdyaWQtcm93LXN0YXJ0OiAke3Byb3BzLnJvdyArIDF9OyBncmlkLWNvbHVtbi1zdGFydDogJHtwcm9wcy5jb2x1bW4gKyAxfWB9PlxyXG4gICAgICAgICAgICAgICAgey4uLnByb3BzLmFwcHMubWFwKGEgPT4gPFRpbGUgey4uLmF9Lz4pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IFRpbGVTaXplIH0gZnJvbSBcIi4vVGlsZVNpemVcIjtcclxuaW1wb3J0IHsgY2lyY3VsYXJFYXNlLCBjdWJpY0Vhc2UsIGxpZ2h0ZW5EYXJrZW5Db2xvdXIsIGVhc2VJbkN1YmljIH0gZnJvbSBcIi4uL1V0aWxcIjtcclxuaW1wb3J0IFwiLi90aWxlLmNzc1wiXHJcbmltcG9ydCB7IENvcmVXaW5kb3dTcGxhc2hTY3JlZW4gfSBmcm9tIFwiLi9Db3JlV2luZG93U3BsYXNoU2NyZWVuXCI7XHJcbmltcG9ydCB7IFBhY2thZ2VBcHBsaWNhdGlvbiB9IGZyb20gXCIuLi9EYXRhL1BhY2thZ2VBcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBQYWNrYWdlIH0gZnJvbSBcIi4uL0RhdGEvUGFja2FnZVwiO1xyXG5pbXBvcnQgeyBQYWNrYWdlUmVnaXN0cnkgfSBmcm9tIFwiLi4vRGF0YS9QYWNrYWdlUmVnaXN0cnlcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZVByb3BzIHtcclxuICAgIHBhY2thZ2VOYW1lPzogc3RyaW5nO1xyXG4gICAgYXBwSWQ6IHN0cmluZztcclxuICAgIHNpemU6IFRpbGVTaXplO1xyXG4gICAgZmVuY2U/OiBib29sZWFuO1xyXG4gICAgcm93PzogbnVtYmVyLFxyXG4gICAgY29sdW1uPzogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVGlsZVN0YXRlIHtcclxuICAgIHBhY2s6IFBhY2thZ2U7XHJcbiAgICBhcHA6IFBhY2thZ2VBcHBsaWNhdGlvbjtcclxuICAgIGxhdW5jaGluZzogYm9vbGVhbjtcclxuICAgIHByZXNzU3RhdGU/OiBcIm5vbmVcIiB8IFwidG9wXCIgfCBcImJvdHRvbVwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImNlbnRlclwiO1xyXG5cclxuICAgIHN0YXJ0PzogbnVtYmVyO1xyXG4gICAgZmxpcHBlZD86IGJvb2xlYW47XHJcbiAgICBpbml0aWFsWD86IG51bWJlcjtcclxuICAgIGluaXRpYWxZPzogbnVtYmVyO1xyXG4gICAgaW5pdGlhbFdpZHRoPzogbnVtYmVyO1xyXG4gICAgaW5pdGlhbEhlaWdodD86IG51bWJlcjtcclxuICAgIGZsaXBTdHlsZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGUgZXh0ZW5kcyBDb21wb25lbnQ8VGlsZVByb3BzLCBUaWxlU3RhdGU+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVGlsZVByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICBsZXQgcGFjayA9IFBhY2thZ2VSZWdpc3RyeS5nZXRQYWNrYWdlKHByb3BzLnBhY2thZ2VOYW1lKTtcclxuICAgICAgICBpZiAoIXBhY2spXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlBhY2thZ2UgXCIgKyBwcm9wcy5wYWNrYWdlTmFtZSArIFwiIG5vdCBmb3VuZCFcIik7XHJcblxyXG4gICAgICAgIGxldCBhcHAgPSBwYWNrPy5hcHBsaWNhdGlvbnMuZ2V0KHByb3BzLmFwcElkKTtcclxuICAgICAgICBpZiAoIWFwcClcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQXBwIFwiICsgcHJvcHMuYXBwSWQgKyBcIiBpbiBwYWNrYWdlIFwiICsgcHJvcHMucGFja2FnZU5hbWUgKyBcIiBub3QgZm91bmQhXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0geyBwYWNrLCBhcHAsIHByZXNzU3RhdGU6IFwibm9uZVwiLCBsYXVuY2hpbmc6IGZhbHNlIH1cclxuICAgICAgICB0aGlzLm9uUG9pbnRlckRvd24gPSB0aGlzLm9uUG9pbnRlckRvd24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUG9pbnRlclVwID0gdGhpcy5vblBvaW50ZXJVcC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUG9pbnRlckRvd24oZTogUG9pbnRlckV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0VGlsZVNpemUodGhpcy5wcm9wcy5zaXplKTtcclxuICAgICAgICBjb25zdCBvZmZzZXRYID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oZS5vZmZzZXRYLCBzaXplLndpZHRoKSk7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IE1hdGgubWF4KDAsIE1hdGgubWluKGUub2Zmc2V0WSwgc2l6ZS5oZWlnaHQpKTtcclxuICAgICAgICBlbGVtZW50LnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcclxuXHJcbiAgICAgICAgaWYgKChvZmZzZXRYID49IChzaXplLndpZHRoICogMC4zMykgJiYgb2Zmc2V0WCA8PSAoc2l6ZS53aWR0aCAqIDAuNjYpKSAmJiAob2Zmc2V0WSA+PSAoc2l6ZS5oZWlnaHQgKiAwLjMzKSAmJiBvZmZzZXRZIDw9IChzaXplLmhlaWdodCAqIDAuNjYpKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc3NTdGF0ZTogXCJjZW50ZXJcIiB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGRpc3RhbmNlVG9Qb3NpdGl2ZSA9IHsgeDogb2Zmc2V0WCwgeTogb2Zmc2V0WSB9XHJcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZVRvTmVnYXRpdmUgPSB7IHg6IChzaXplLndpZHRoIC0gb2Zmc2V0WCksIHk6IChzaXplLmhlaWdodCAtIG9mZnNldFkpIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBzbWFsbGVzdFggPSBNYXRoLm1pbihkaXN0YW5jZVRvUG9zaXRpdmUueCwgZGlzdGFuY2VUb05lZ2F0aXZlLngpO1xyXG4gICAgICAgICAgICBsZXQgc21hbGxlc3RZID0gTWF0aC5taW4oZGlzdGFuY2VUb1Bvc2l0aXZlLnksIGRpc3RhbmNlVG9OZWdhdGl2ZS55KTtcclxuICAgICAgICAgICAgbGV0IHNtYWxsZXN0RGlzdGFuY2UgPSBNYXRoLm1pbihzbWFsbGVzdFgsIHNtYWxsZXN0WSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc21hbGxlc3REaXN0YW5jZSA9PSBkaXN0YW5jZVRvUG9zaXRpdmUueClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzc1N0YXRlOiBcImxlZnRcIiB9KVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzbWFsbGVzdERpc3RhbmNlID09IGRpc3RhbmNlVG9OZWdhdGl2ZS54KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNzU3RhdGU6IFwicmlnaHRcIiB9KVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzbWFsbGVzdERpc3RhbmNlID09IGRpc3RhbmNlVG9OZWdhdGl2ZS55KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNzU3RhdGU6IFwiYm90dG9tXCIgfSlcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNzU3RhdGU6IFwidG9wXCIgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Qb2ludGVyVXAoZTogUG9pbnRlckV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xyXG4gICAgICAgIGVsZW1lbnQucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHlSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBsZXQgZWxlbVJlY3QgPSAodGhpcy5iYXNlIGFzIEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcHJlc3NTdGF0ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIGluaXRpYWxYOiBlbGVtUmVjdC5sZWZ0IC0gYm9keVJlY3QubGVmdCxcclxuICAgICAgICAgICAgaW5pdGlhbFk6IGVsZW1SZWN0LnRvcCAtIGJvZHlSZWN0LnRvcCxcclxuICAgICAgICAgICAgaW5pdGlhbFdpZHRoOiBlbGVtUmVjdC53aWR0aCxcclxuICAgICAgICAgICAgaW5pdGlhbEhlaWdodDogZWxlbVJlY3QuaGVpZ2h0XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZmxpcC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZsaXBDb21wbGV0ZSgpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuc3RhdGUuYXBwLnN0YXJ0UGFnZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocHJvcHM6IFRpbGVQcm9wcywgc3RhdGU6IFRpbGVTdGF0ZSkge1xyXG4gICAgICAgIGxldCBjb250YWluZXJTdHlsZSA9IHN0YXRlLmZsaXBTdHlsZTtcclxuICAgICAgICBpZiAoIWNvbnRhaW5lclN0eWxlICYmIHByb3BzLmNvbHVtbiAhPT0gdW5kZWZpbmVkICYmIHByb3BzLnJvdyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlID0gYGdyaWQtcm93LXN0YXJ0OiAke3Byb3BzLnJvdyArIDF9OyBncmlkLWNvbHVtbi1zdGFydDogJHtwcm9wcy5jb2x1bW4gKyAxfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGlsZUNvbG91ciA9IHN0YXRlLmFwcD8udmlzdWFsRWxlbWVudHMuYmFja2dyb3VuZENvbG9yID8/IFwiIzQ2MTdiNFwiO1xyXG4gICAgICAgIGxldCBmcm9udFN0eWxlID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke3RpbGVDb2xvdXJ9LCAke2xpZ2h0ZW5EYXJrZW5Db2xvdXIodGlsZUNvbG91ciwgMzApfSlgLFxyXG4gICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtsaWdodGVuRGFya2VuQ29sb3VyKHRpbGVDb2xvdXIsIDQwKX1gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYmFja1N0eWxlID0geyBiYWNrZ3JvdW5kOiB0aWxlQ29sb3VyIH1cclxuXHJcbiAgICAgICAgaWYgKCFzdGF0ZS5wYWNrIHx8ICFzdGF0ZS5hcHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9e1widGlsZS1jb250YWluZXIgXCIgKyBUaWxlU2l6ZVtwcm9wcy5zaXplXSArIFwiIFwiICsgc3RhdGUucHJlc3NTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcm9udFwiIHN0eWxlPXtmcm9udFN0eWxlfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhY2tcIiBzdHlsZT17YmFja1N0eWxlfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRpbGVJbWFnZVVybCA9ICh0aGlzLmdldFRpbGVJbWFnZVVybChwcm9wcy5zaXplLCBzdGF0ZS5hcHApID8/IHN0YXRlLmFwcC52aXN1YWxFbGVtZW50cy5zcXVhcmUxNTB4MTUwTG9nbykgKyBcIj9zY2FsZT04MFwiXHJcbiAgICAgICAgbGV0IHNob3dUZXh0U2l6ZXMgPSBzdGF0ZS5hcHAudmlzdWFsRWxlbWVudHMuZGVmYXVsdFRpbGUuc2hvd05hbWVPblRpbGVzLm1hcCh2ID0+IFRpbGVTaXplW3ZdKTtcclxuICAgICAgICBsZXQgdGlsZVZpc3VhbFRleHQgPSBudWxsO1xyXG4gICAgICAgIGlmIChwcm9wcy5zaXplICE9IFRpbGVTaXplLnNxdWFyZTcweDcwICYmIHNob3dUZXh0U2l6ZXMuaW5jbHVkZXMocHJvcHMuc2l6ZSkpIHtcclxuICAgICAgICAgICAgdGlsZVZpc3VhbFRleHQgPSA8cCBjbGFzcz17XCJ0aWxlLWZyb250LXRleHRcIiArIChzdGF0ZS5hcHAudmlzdWFsRWxlbWVudHMuZm9yZWdyb3VuZFRleHQgPT0gXCJkYXJrXCIgPyBcIiBibGFja1wiIDogXCJcIil9PntzdGF0ZS5hcHAudmlzdWFsRWxlbWVudHMuZGlzcGxheU5hbWV9PC9wPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLmdldFRpbGVTaXplKHByb3BzLnNpemUpXHJcbiAgICAgICAgbGV0IGZyb250Vmlld0JveCA9IGAwIDAgJHtzaXplLndpZHRofSAke3NpemUuaGVpZ2h0fWBcclxuXHJcbiAgICAgICAgLy8gdG9kbzogdGhpcyBkZXBlbmRzIG9uIHRoZSB0YXJnZXQgc2l6ZSBvZiB0aGUgY29yZXdpbmRvd1xyXG4gICAgICAgIGxldCBiYWNrVmlld0JveCA9IGAwIDAgJHt3aW5kb3cuaW5uZXJXaWR0aH0gJHt3aW5kb3cuaW5uZXJIZWlnaHR9YFxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPXtcInRpbGUtY29udGFpbmVyIFwiICsgVGlsZVNpemVbcHJvcHMuc2l6ZV0gKyBcIiBcIiArIHN0YXRlLnByZXNzU3RhdGUgKyAoc3RhdGUuZmxpcHBlZCA/IFwiIGZsaXBwZWRcIiA6IFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e2NvbnRhaW5lclN0eWxlfVxyXG4gICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17dGhpcy5vblBvaW50ZXJEb3dufVxyXG4gICAgICAgICAgICAgICAgb25Qb2ludGVyVXA9e3RoaXMub25Qb2ludGVyVXB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnJvbnRcIiBzdHlsZT17ZnJvbnRTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCIgdmlld0JveD17ZnJvbnRWaWV3Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JlaWduT2JqZWN0IHdpZHRoPXtzaXplLndpZHRofSBoZWlnaHQ9e3NpemUuaGVpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGlsZS12aXN1YWwgdGlsZS12aXN1YWwtdmlzaWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUtZnJvbnQtaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGRyYWdnYWJsZT17ZmFsc2V9IHNyYz17dGlsZUltYWdlVXJsfSBjbGFzc05hbWU9e1widGlsZS1mcm9udC1pbWFnZSBcIiArIFRpbGVTaXplW3Byb3BzLnNpemVdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbGVWaXN1YWxUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JlaWduT2JqZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja1wiIHN0eWxlPXtiYWNrU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiIHZpZXdCb3g9e2JhY2tWaWV3Qm94fSBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6MTAwJTtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JlaWduT2JqZWN0IHdpZHRoPVwiMTAwdndcIiBoZWlnaHQ9XCIxMDB2aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3JlV2luZG93U3BsYXNoU2NyZWVuIGJhY2tncm91bmRDb2xvdXI9e3N0YXRlLmFwcC52aXN1YWxFbGVtZW50cy5zcGxhc2hTY3JlZW4uYmFja2dyb3VuZENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwbGFzaEltYWdlVXJsPXtzdGF0ZS5hcHAudmlzdWFsRWxlbWVudHMuc3BsYXNoU2NyZWVuLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZvcmVpZ25PYmplY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRpbGVTaXplKHNpemU6IFRpbGVTaXplKSB7XHJcbiAgICAgICAgc3dpdGNoIChzaXplKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGlsZVNpemUuc3F1YXJlNzB4NzA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB3aWR0aDogNTYsIGhlaWdodDogNTYgfTtcclxuICAgICAgICAgICAgY2FzZSBUaWxlU2l6ZS5zcXVhcmUxNTB4MTUwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IDEyMCwgaGVpZ2h0OiAxMjAgfTtcclxuICAgICAgICAgICAgY2FzZSBUaWxlU2l6ZS53aWRlMzEweDE1MDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHdpZHRoOiAyNDgsIGhlaWdodDogMTIwIH07XHJcbiAgICAgICAgICAgIGNhc2UgVGlsZVNpemUuc3F1YXJlMzEweDMxMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHdpZHRoOiAyNDgsIGhlaWdodDogMjQ4IH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGlsZUltYWdlVXJsKHNpemU6IFRpbGVTaXplLCBhcHA6IFBhY2thZ2VBcHBsaWNhdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoc2l6ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRpbGVTaXplLnNxdWFyZTcweDcwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwcC52aXN1YWxFbGVtZW50cy5kZWZhdWx0VGlsZS5zcXVhcmU3MHg3MExvZ287XHJcbiAgICAgICAgICAgIGNhc2UgVGlsZVNpemUuc3F1YXJlMTUweDE1MDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcHAudmlzdWFsRWxlbWVudHMuc3F1YXJlMTUweDE1MExvZ287XHJcbiAgICAgICAgICAgIGNhc2UgVGlsZVNpemUud2lkZTMxMHgxNTA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBwLnZpc3VhbEVsZW1lbnRzLmRlZmF1bHRUaWxlLndpZGUzMTB4MTUwTG9nbztcclxuICAgICAgICAgICAgY2FzZSBUaWxlU2l6ZS5zcXVhcmUzMTB4MzEwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwcC52aXN1YWxFbGVtZW50cy5kZWZhdWx0VGlsZS5zcXVhcmUzMTB4MzEwTG9nbztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmbGlwKHRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnN0YXJ0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0OiB0aW1lIH0pO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mbGlwLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0b2RvOiB0aGlzIG5lZWRzIHRvIGJlIHRoZSBjb3Jld2luZG93IHRhcmdldFxyXG4gICAgICAgIGxldCBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIGxldCBwcm9ncmVzcyA9ICh0aW1lIC0gdGhpcy5zdGF0ZS5zdGFydCkgLyAxMDAwO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IGNpcmN1bGFyRWFzZShwcm9ncmVzcywgMCwgMTgwLCAxKTtcclxuICAgICAgICBsZXQgd2lkdGggPSBjdWJpY0Vhc2UocHJvZ3Jlc3MsIHRoaXMuc3RhdGUuaW5pdGlhbFdpZHRoLCBib2R5UmVjdC53aWR0aCAtIHRoaXMuc3RhdGUuaW5pdGlhbFdpZHRoLCAxKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY3ViaWNFYXNlKHByb2dyZXNzLCB0aGlzLnN0YXRlLmluaXRpYWxIZWlnaHQsIGJvZHlSZWN0LmhlaWdodCAtIHRoaXMuc3RhdGUuaW5pdGlhbEhlaWdodCwgMSk7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRYID0gKChib2R5UmVjdC53aWR0aCAtIHdpZHRoKSAvIDIpIC0gKHRoaXMuc3RhdGUuaW5pdGlhbFgpO1xyXG4gICAgICAgIGxldCB0YXJnZXRZID0gKChib2R5UmVjdC5oZWlnaHQgLSBoZWlnaHQpIC8gMikgLSAodGhpcy5zdGF0ZS5pbml0aWFsWSk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gY3ViaWNFYXNlKE1hdGgubWluKDEsIHByb2dyZXNzICogMS4xKSwgdGhpcy5zdGF0ZS5pbml0aWFsWCwgdGFyZ2V0WCwgMSkgLSB0aGlzLnN0YXRlLmluaXRpYWxYO1xyXG4gICAgICAgIGxldCB5ID0gY3ViaWNFYXNlKE1hdGgubWluKDEsIHByb2dyZXNzICogMS4xKSwgdGhpcy5zdGF0ZS5pbml0aWFsWSwgdGFyZ2V0WSwgMSkgLSB0aGlzLnN0YXRlLmluaXRpYWxZO1xyXG4gICAgICAgIGxldCB6ID0gLTEyNSArIDEyNSAqIGVhc2VJbkN1YmljKE1hdGgubWluKDEsIHByb2dyZXNzICogMS4xKSk7XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5iYXNlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGxldCBmbGlwU3R5bGUgPSBgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgICAgICAgIHRvcDoke3RoaXMuc3RhdGUuaW5pdGlhbFl9cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6JHt0aGlzLnN0YXRlLmluaXRpYWxYfXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogJHt3aWR0aH1weDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAke2hlaWdodH1weDsgXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weCkgcm90YXRlM0QoMCwxLDAsJHthbmdsZX1kZWcpOyBcclxuICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsgXHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtgO1xyXG5cclxuICAgICAgICBsZXQgZmxpcHBlZCA9IHRoaXMuc3RhdGUuZmxpcHBlZDtcclxuICAgICAgICBpZiAoYW5nbGUgPj0gOTAgJiYgIXRoaXMuc3RhdGUuZmxpcHBlZCkge1xyXG4gICAgICAgICAgICBmbGlwcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZsaXBwZWQ6IHRydWUgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gZmxpcFN0eWxlO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mbGlwLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5vbkZsaXBDb21wbGV0ZS5iaW5kKHRoaXMpLCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiwgUmVmT2JqZWN0LCBSZW5kZXJhYmxlUHJvcHMgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IFRpbGUsIFRpbGVQcm9wcyB9IGZyb20gXCIuL1RpbGVcIjtcclxuaW1wb3J0IHsgVGlsZVNpemUgfSBmcm9tIFwiLi9UaWxlU2l6ZVwiO1xyXG5pbXBvcnQgXCIuL3RpbGUuY3NzXCJcclxuaW1wb3J0IHsgRmVuY2VUaWxlIH0gZnJvbSBcIi4vRmVuY2VUaWxlXCI7XHJcblxyXG5pbnRlcmZhY2UgVGlsZUdyb3VwUHJvcHMge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHRpbGVzOiBUaWxlUHJvcHNbXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFRpbGVHcm91cFN0YXRlIHtcclxuICAgIGF2YWlsYWJsZUhlaWdodD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVHcm91cCBleHRlbmRzIENvbXBvbmVudDxUaWxlR3JvdXBQcm9wcywgVGlsZUdyb3VwU3RhdGU+IHtcclxuXHJcbiAgICBncm91cFJlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PlxyXG4gICAgaGVhZGVyUmVmOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRpbGVHcm91cFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmdyb3VwUmVmID0gY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJSZWYgPSBjcmVhdGVSZWYoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpXHJcblxyXG4gICAgICAgIGxldCBzdGFydFRpbGVzRWxlbWVudCA9IHRoaXMuZ3JvdXBSZWYuY3VycmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGxldCBoZWFkZXJUZXh0ID0gdGhpcy5oZWFkZXJSZWYuY3VycmVudDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYXZhaWxhYmxlSGVpZ2h0OiBzdGFydFRpbGVzRWxlbWVudC5vZmZzZXRIZWlnaHQgLSBoZWFkZXJUZXh0Lm9mZnNldEhlaWdodCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNpemUoKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0VGlsZXNFbGVtZW50ID0gdGhpcy5ncm91cFJlZi5jdXJyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGhlYWRlclRleHQgPSB0aGlzLmhlYWRlclJlZi5jdXJyZW50O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhdmFpbGFibGVIZWlnaHQ6IHN0YXJ0VGlsZXNFbGVtZW50Lm9mZnNldEhlaWdodCAtIGhlYWRlclRleHQub2Zmc2V0SGVpZ2h0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbGVTaXplVG9XaWR0aChzaXplOiBUaWxlU2l6ZSk6IG51bWJlciB7XHJcbiAgICAgICAgc3dpdGNoIChzaXplKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGlsZVNpemUuc3F1YXJlMTUweDE1MDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICBjYXNlIFRpbGVTaXplLndpZGUzMTB4MTUwOlxyXG4gICAgICAgICAgICBjYXNlIFRpbGVTaXplLnNxdWFyZTMxMHgzMTA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICAgICAgY2FzZSBUaWxlU2l6ZS5zcXVhcmU3MHg3MDogLy8gaGFuZGxlZCBzZXBhcmF0ZWx5XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRpbGUgc2l6ZSFcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGlsZVNpemVUb0hlaWdodChzaXplOiBUaWxlU2l6ZSk6IG51bWJlciB7XHJcbiAgICAgICAgc3dpdGNoIChzaXplKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGlsZVNpemUuc3F1YXJlMTUweDE1MDpcclxuICAgICAgICAgICAgY2FzZSBUaWxlU2l6ZS53aWRlMzEweDE1MDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICBjYXNlIFRpbGVTaXplLnNxdWFyZTMxMHgzMTA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICAgICAgY2FzZSBUaWxlU2l6ZS5zcXVhcmU3MHg3MDogLy8gaGFuZGxlZCBzZXBhcmF0ZWx5XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRpbGUgc2l6ZSFcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGFwc2VUaWxlcyh0aWxlczogVGlsZVByb3BzW10pOiBBcnJheTxhbnk+IHtcclxuICAgICAgICBsZXQgZnVsbFRpbGVzID0gW107XHJcbiAgICAgICAgbGV0IGN1cnJlbnRGZW5jZTogQXJyYXk8YW55PiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJlc2V0RmVuY2UgPSAodmFsOiBbXSA9IG51bGwpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRGZW5jZSAmJiBjdXJyZW50RmVuY2UubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgZnVsbFRpbGVzLnB1c2goeyBzaXplOiBUaWxlU2l6ZS5zcXVhcmUxNTB4MTUwLCBhcHBzOiBjdXJyZW50RmVuY2UgfSlcclxuICAgICAgICAgICAgY3VycmVudEZlbmNlID0gdmFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCB0aWxlIG9mIHRpbGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aWxlLmZlbmNlICYmIHRpbGUuc2l6ZSA9PT0gVGlsZVNpemUuc3F1YXJlNzB4NzApIHtcclxuICAgICAgICAgICAgICAgIHJlc2V0RmVuY2UoW10pO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEZlbmNlLnB1c2godGlsZSk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRGZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpbGUuc2l6ZSAhPT0gVGlsZVNpemUuc3F1YXJlNzB4NzApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNldEZlbmNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEZlbmNlLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldEZlbmNlKFtdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGZW5jZS5wdXNoKHRpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdWxsVGlsZXMucHVzaCh0aWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50RmVuY2UpIHtcclxuICAgICAgICAgICAgZnVsbFRpbGVzLnB1c2goY3VycmVudEZlbmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29sbGFwZWQgdGlsZXNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBmdWxsVGlsZXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcihwcm9wczogVGlsZUdyb3VwUHJvcHMsIHN0YXRlOiBUaWxlR3JvdXBTdGF0ZSkge1xyXG4gICAgICAgIGxldCB0aWxlcyA9IFtdO1xyXG4gICAgICAgIGxldCBzdHlsZTogYW55ID0ge307XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHN0YXRlLmF2YWlsYWJsZUhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBhdmFpbGFibGVIZWlnaHQgPSBzdGF0ZS5hdmFpbGFibGVIZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBtYXhSb3dzID0gTWF0aC5mbG9vcihhdmFpbGFibGVIZWlnaHQgLyAxMjgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgYXZhaWxhYmxlIGhlaWdodDogJHthdmFpbGFibGVIZWlnaHR9LCBtYXhSb3dzOiAke21heFJvd3N9YCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcm93ID0gMDtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IDA7XHJcbiAgICAgICAgICAgIGxldCBiYXNlQ29sdW1uID0gMDtcclxuICAgICAgICAgICAgc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHttYXhSb3dzfSwgMTIwcHgpYFxyXG5cclxuICAgICAgICAgICAgbGV0IGxhc3RXaWR0aCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBsYXN0SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBjb2xsYXBzZWRUaWxlcyA9IHRoaXMuY29sbGFwc2VUaWxlcyhwcm9wcy50aWxlcyk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiBjb2xsYXBzZWRUaWxlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbGVXaWR0aCA9IHRoaXMudGlsZVNpemVUb1dpZHRoKHRpbGUuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGlsZUhlaWdodCA9IHRoaXMudGlsZVNpemVUb0hlaWdodCh0aWxlLnNpemUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aWxlLmFwcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlcy5wdXNoKDxGZW5jZVRpbGUgey4uLnRpbGV9IHJvdz17cm93fSBjb2x1bW49e2NvbHVtbn0gLz4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlcy5wdXNoKDxUaWxlIHsuLi50aWxlfSByb3c9e3Jvd30gY29sdW1uPXtjb2x1bW59IC8+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbHVtbiArPSBNYXRoLm1heChsYXN0V2lkdGgsIHRpbGVXaWR0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChjb2x1bW4gLSBiYXNlQ29sdW1uKSA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyb3cgKyBNYXRoLm1heChsYXN0SGVpZ2h0LCB0aWxlSGVpZ2h0KSkgPj0gbWF4Um93cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3cgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlQ29sdW1uICs9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3cgKz0gbGFzdEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IGJhc2VDb2x1bW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGFzdFdpZHRoID0gdGlsZVdpZHRoO1xyXG4gICAgICAgICAgICAgICAgbGFzdEhlaWdodCA9IHRpbGVIZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGFydC10aWxlLWdyb3VwXCIgcmVmPXt0aGlzLmdyb3VwUmVmfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlLWdyb3VwLWhlYWRlclwiIHJlZj17dGhpcy5oZWFkZXJSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlLWdyb3VwLWhlYWRlci10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBhIG5vbiBicmVha2luZyBzcGFjZSBpcyBpbnNlcnRlZCBoZXJlIHRvIGVuc3VyZSB0aGUgbGF5b3V0IHJlbWFpbnMgdGhlIHNhbWUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZSAmJiBwcm9wcy50aXRsZSAhPT0gXCJcIiA/IHByb3BzLnRpdGxlIDogXCJcXHUwMEEwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGlsZS1ncm91cC10aWxlc1wiIHN0eWxlPXtzdHlsZX0+ey4uLnRpbGVzfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGVudW0gVGlsZVNpemUge1xyXG4gICAgc3F1YXJlNzB4NzAsXHJcbiAgICBzcXVhcmUxNTB4MTUwLFxyXG4gICAgd2lkZTMxMHgxNTAsXHJcbiAgICBzcXVhcmUzMTB4MzEwXHJcbn1cclxuIiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBlYXNlT3V0Q3ViaWMoeDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAxIC0gTWF0aC5wb3coMSAtIHgsIDMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWFzZU91dENpcmMoeDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCAyKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlYXNlSW5DaXJjKHg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCwgMikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWFzZUluQ3ViaWMoeDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB4ICogeCAqIHg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjdWJpY0Vhc2UodCwgYiwgYywgZCkge1xyXG4gICAgdCAvPSBkO1xyXG4gICAgdC0tO1xyXG4gICAgcmV0dXJuIGMgKiAodCAqIHQgKiB0ICsgMSkgKyBiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2lyY3VsYXJFYXNlKHQsIGIsIGMsIGQpIHtcclxuICAgIC8vIHQgLz0gZDtcclxuICAgIC8vIHQtLTtcclxuICAgIC8vIHJldHVybiBjICogTWF0aC5zcXJ0KDEgLSB0ICogdCkgKyBiO1xyXG5cclxuICAgIHJldHVybiBjICogZWFzZU91dENpcmModCkgKyBiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UkdCRnJvbVN0cmluZyhzdHIpIHtcclxuICAgIGlmIChzdHJbMF0gPT0gXCIjXCIpIHtcclxuICAgICAgICBzdHIgPSBzdHIuc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG51bSA9IHBhcnNlSW50KHN0ciwgMTYpO1xyXG4gICAgcmV0dXJuIFsobnVtID4+IDE2KSwgKChudW0gPj4gOCkgJiAweDAwRkYpLCAobnVtICYgMHgwMDAwRkYpXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpZ2h0ZW5EYXJrZW5Db2xvdXIoY29sLCBhbXQpIHtcclxuXHJcbiAgICB2YXIgdXNlUG91bmQgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoY29sWzBdID09IFwiI1wiKSB7XHJcbiAgICAgICAgY29sID0gY29sLnNsaWNlKDEpO1xyXG4gICAgICAgIHVzZVBvdW5kID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbnVtID0gcGFyc2VJbnQoY29sLCAxNik7XHJcblxyXG4gICAgdmFyIHIgPSAobnVtID4+IDE2KSArIGFtdDtcclxuXHJcbiAgICBpZiAociA+IDI1NSkgciA9IDI1NTtcclxuICAgIGVsc2UgaWYgKHIgPCAwKSByID0gMDtcclxuXHJcbiAgICB2YXIgYiA9ICgobnVtID4+IDgpICYgMHgwMEZGKSArIGFtdDtcclxuXHJcbiAgICBpZiAoYiA+IDI1NSkgYiA9IDI1NTtcclxuICAgIGVsc2UgaWYgKGIgPCAwKSBiID0gMDtcclxuXHJcbiAgICB2YXIgZyA9IChudW0gJiAweDAwMDBGRikgKyBhbXQ7XHJcblxyXG4gICAgaWYgKGcgPiAyNTUpIGcgPSAyNTU7XHJcbiAgICBlbHNlIGlmIChnIDwgMCkgZyA9IDA7XHJcblxyXG4gICAgcmV0dXJuICh1c2VQb3VuZCA/IFwiI1wiIDogXCJcIikgKyAoZyB8IChiIDw8IDgpIHwgKHIgPDwgMTYpKS50b1N0cmluZygxNikucGFkU3RhcnQoNiwgJzAnKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdHdWlkKCkge1xyXG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcclxuICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHRvRGF0YVZpZXcgZnJvbSAndG8tZGF0YS12aWV3J1xuXG5jb25zdCBSRkM0NjQ4ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMjM0NTY3J1xuY29uc3QgUkZDNDY0OF9IRVggPSAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVYnXG5jb25zdCBDUk9DS0ZPUkQgPSAnMDEyMzQ1Njc4OUFCQ0RFRkdISktNTlBRUlNUVldYWVonXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJhc2UzMkVuY29kZSAoZGF0YSwgdmFyaWFudCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICBsZXQgYWxwaGFiZXQsIGRlZmF1bHRQYWRkaW5nXG5cbiAgc3dpdGNoICh2YXJpYW50KSB7XG4gICAgY2FzZSAnUkZDMzU0OCc6XG4gICAgY2FzZSAnUkZDNDY0OCc6XG4gICAgICBhbHBoYWJldCA9IFJGQzQ2NDhcbiAgICAgIGRlZmF1bHRQYWRkaW5nID0gdHJ1ZVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdSRkM0NjQ4LUhFWCc6XG4gICAgICBhbHBoYWJldCA9IFJGQzQ2NDhfSEVYXG4gICAgICBkZWZhdWx0UGFkZGluZyA9IHRydWVcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnQ3JvY2tmb3JkJzpcbiAgICAgIGFscGhhYmV0ID0gQ1JPQ0tGT1JEXG4gICAgICBkZWZhdWx0UGFkZGluZyA9IGZhbHNlXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gYmFzZTMyIHZhcmlhbnQ6ICcgKyB2YXJpYW50KVxuICB9XG5cbiAgY29uc3QgcGFkZGluZyA9IChvcHRpb25zLnBhZGRpbmcgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMucGFkZGluZyA6IGRlZmF1bHRQYWRkaW5nKVxuICBjb25zdCB2aWV3ID0gdG9EYXRhVmlldyhkYXRhKVxuXG4gIGxldCBiaXRzID0gMFxuICBsZXQgdmFsdWUgPSAwXG4gIGxldCBvdXRwdXQgPSAnJ1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmlldy5ieXRlTGVuZ3RoOyBpKyspIHtcbiAgICB2YWx1ZSA9ICh2YWx1ZSA8PCA4KSB8IHZpZXcuZ2V0VWludDgoaSlcbiAgICBiaXRzICs9IDhcblxuICAgIHdoaWxlIChiaXRzID49IDUpIHtcbiAgICAgIG91dHB1dCArPSBhbHBoYWJldFsodmFsdWUgPj4+IChiaXRzIC0gNSkpICYgMzFdXG4gICAgICBiaXRzIC09IDVcbiAgICB9XG4gIH1cblxuICBpZiAoYml0cyA+IDApIHtcbiAgICBvdXRwdXQgKz0gYWxwaGFiZXRbKHZhbHVlIDw8ICg1IC0gYml0cykpICYgMzFdXG4gIH1cblxuICBpZiAocGFkZGluZykge1xuICAgIHdoaWxlICgob3V0cHV0Lmxlbmd0aCAlIDgpICE9PSAwKSB7XG4gICAgICBvdXRwdXQgKz0gJz0nXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRhVmlldyAoZGF0YSkge1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIEludDhBcnJheSB8fCBkYXRhIGluc3RhbmNlb2YgVWludDhBcnJheSB8fCBkYXRhIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXkpIHtcbiAgICByZXR1cm4gbmV3IERhdGFWaWV3KGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aClcbiAgfVxuXG4gIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gbmV3IERhdGFWaWV3KGRhdGEpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBgZGF0YWAgdG8gYmUgYW4gQXJyYXlCdWZmZXIsIEJ1ZmZlciwgSW50OEFycmF5LCBVaW50OEFycmF5IG9yIFVpbnQ4Q2xhbXBlZEFycmF5Jylcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwicHJlYWN0L2RlYnVnXCJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJwcmVhY3RcIlxuaW1wb3J0IHsgU3RhcnQgfSBmcm9tICcuL1N0YXJ0JztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHsgUGFja2FnZVJlZ2lzdHJ5IH0gZnJvbSBcIi4vRGF0YS9QYWNrYWdlUmVnaXN0cnlcIjtcbmltcG9ydCB7IFBhY2thZ2VSZWFkZXIgfSBmcm9tIFwiLi9EYXRhL1BhY2thZ2VcIjtcblxuY29uc3QgUGFja2FnZXMgPSBbJ1NvY2lhbHMnXTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuICBmb3IgKGNvbnN0IHBhY2thZ2VQYXRoIG9mIFBhY2thZ2VzKSB7XG4gICAgbGV0IHJlYWRlciA9IG5ldyBQYWNrYWdlUmVhZGVyKHBhY2thZ2VQYXRoKVxuICAgIGxldCBwYWNrID0gYXdhaXQgcmVhZGVyLnJlYWRQYWNrYWdlKCk7XG4gICAgUGFja2FnZVJlZ2lzdHJ5LnJlZ2lzdGVyUGFja2FnZShwYWNrKTtcbiAgfVxuXG4gIHJlbmRlcig8U3RhcnQgLz4sIGRvY3VtZW50LmJvZHkpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=