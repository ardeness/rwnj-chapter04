"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/04/users/[user]";
exports.ids = ["pages/api/04/users/[user]"];
exports.modules = {

/***/ "./pages/api/04/users/[user].js":
/*!**************************************!*\
  !*** ./pages/api/04/users/[user].js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    console.log(req);\n    const { query: { user  }  } = req;\n    res.status(200).json({\n        text: user\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvMDQvdXNlcnMvW3VzZXJdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZ0IsQ0FBQUEsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUMxQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUc7SUFDZixLQUFLLENBQUMsQ0FBQyxDQUNISSxLQUFLLEVBQUUsQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFDLEVBQ2pCLENBQUMsR0FBR0wsR0FBRztJQUNQQyxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDQztRQUFBQSxJQUFJLEVBQUVILElBQUk7SUFBQSxDQUFDO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25zdW1pbmctcmVzdC1hcGlzLW9uLXRoZS1jbGllbnQtc2lkZS8uL3BhZ2VzL2FwaS8wNC91c2Vycy9bdXNlcl0uanM/ZTBjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXEpXG4gICAgY29uc3Qge1xuICAgICAgICBxdWVyeToge3VzZXJ9XG4gICAgfSA9IHJlcTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7dGV4dDogdXNlcn0pXG59Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsInVzZXIiLCJzdGF0dXMiLCJqc29uIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/04/users/[user].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/04/users/[user].js"));
module.exports = __webpack_exports__;

})();