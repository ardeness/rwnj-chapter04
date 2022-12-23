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
exports.id = "pages/api/singleUser";
exports.ids = ["pages/api/singleUser"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "./pages/api/singleUser.js":
/*!*********************************!*\
  !*** ./pages/api/singleUser.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (!req.query.username) {\n        res.status(403).json({\n            error: 'Missing \"username\" query parameter'\n        });\n        return;\n    }\n    const username = req.query.username;\n    const API_ENDPOINT = process.env.API_ENDPOINT;\n    const API_TOKEN = process.env.API_TOKEN;\n    const userReq = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${API_ENDPOINT}/api/04/users/${username}`, {\n        headers: {\n            authorization: API_TOKEN\n        }\n    });\n    res.status(200).json(userReq.data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2luZ2xlVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFFVixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDL0MsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUssQ0FBQ0MsUUFBUSxFQUFFLENBQUM7UUFDeEJGLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFDcEJDLEtBQUssRUFBRSxDQUFvQztRQUM3QyxDQUFDO1FBQ0QsTUFBTTtJQUNSLENBQUM7SUFFRCxLQUFLLENBQUNILFFBQVEsR0FBR0gsR0FBRyxDQUFDRSxLQUFLLENBQUNDLFFBQVE7SUFDbkMsS0FBSyxDQUFDSSxZQUFZLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixZQUFZO0lBQzdDLEtBQUssQ0FBQ0csU0FBUyxHQUFHRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUztJQUV2QyxLQUFLLENBQUNDLE9BQU8sR0FBRyxLQUFLLENBQUNiLGdEQUFTLElBQUlTLFlBQVksQ0FBQyxjQUFjLEVBQUVKLFFBQVEsSUFBSSxDQUFDO1FBQzNFVSxPQUFPLEVBQUUsQ0FBQztZQUFDQyxhQUFhLEVBQUVKLFNBQVM7UUFBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRFQsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNNLE9BQU8sQ0FBQ0ksSUFBSTtBQUNuQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29uc3VtaW5nLXJlc3QtYXBpcy1vbi10aGUtY2xpZW50LXNpZGUvLi9wYWdlcy9hcGkvc2luZ2xlVXNlci5qcz9lNWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKCFyZXEucXVlcnkudXNlcm5hbWUpIHtcbiAgICByZXMuc3RhdHVzKDQwMykuanNvbih7XG4gICAgICBlcnJvcjogJ01pc3NpbmcgXCJ1c2VybmFtZVwiIHF1ZXJ5IHBhcmFtZXRlcicsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgdXNlcm5hbWUgPSByZXEucXVlcnkudXNlcm5hbWU7XG4gIGNvbnN0IEFQSV9FTkRQT0lOVCA9IHByb2Nlc3MuZW52LkFQSV9FTkRQT0lOVDtcbiAgY29uc3QgQVBJX1RPS0VOID0gcHJvY2Vzcy5lbnYuQVBJX1RPS0VOO1xuXG4gIGNvbnN0IHVzZXJSZXEgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX0VORFBPSU5UfS9hcGkvMDQvdXNlcnMvJHt1c2VybmFtZX1gLCB7XG4gICAgaGVhZGVyczogeyBhdXRob3JpemF0aW9uOiBBUElfVE9LRU4gfSxcbiAgfSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlclJlcS5kYXRhKTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJxdWVyeSIsInVzZXJuYW1lIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiQVBJX0VORFBPSU5UIiwicHJvY2VzcyIsImVudiIsIkFQSV9UT0tFTiIsInVzZXJSZXEiLCJnZXQiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/singleUser.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/singleUser.js"));
module.exports = __webpack_exports__;

})();