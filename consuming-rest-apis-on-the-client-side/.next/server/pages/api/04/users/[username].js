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
exports.id = "pages/api/04/users/[username]";
exports.ids = ["pages/api/04/users/[username]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./pages/api/04/users/[username].js":
/*!******************************************!*\
  !*** ./pages/api/04/users/[username].js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { query: { username  }  } = req;\n    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), 'json');\n    const fileContents = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(jsonDirectory + '/users.json', 'utf8');\n    const users = JSON.parse(fileContents);\n    console.log(users);\n    let targetUser = null;\n    users.forEach((user)=>{\n        console.log(user);\n        if (user.username === username) {\n            targetUser = user;\n        }\n    });\n    if (targetUser) {\n        res.status(200).json(targetUser);\n    } else {\n        res.status(404).json({\n            notFound: true\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvMDQvdXNlcnMvW3VzZXJuYW1lXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QjtBQUNZO0FBRW5DLGlFQUFNLE9BQWdCRyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ2hDLEtBQUssQ0FBQyxDQUFDLENBQ0hDLEtBQUssRUFBRSxDQUFDQyxDQUFBQSxRQUFRLEdBQUMsRUFDckIsQ0FBQyxHQUFHSCxHQUFHO0lBQ1AsS0FBSyxDQUFDSSxhQUFhLEdBQUdQLGdEQUFTLENBQUNTLE9BQU8sQ0FBQ0MsR0FBRyxJQUFJLENBQU07SUFDckQsS0FBSyxDQUFDQyxZQUFZLEdBQUcsS0FBSyxDQUFDVCxpREFBVyxDQUFDSyxhQUFhLEdBQUcsQ0FBYSxjQUFFLENBQU07SUFDNUUsS0FBSyxDQUFDTSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixZQUFZO0lBQ3JDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osS0FBSztJQUNqQixHQUFHLENBQUNLLFVBQVUsR0FBRyxJQUFJO0lBQ3JCTCxLQUFLLENBQUNNLE9BQU8sRUFBRUMsSUFBSSxHQUFLLENBQUM7UUFDckJKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxJQUFJO1FBQ2hCLEVBQUUsRUFBQ0EsSUFBSSxDQUFDZCxRQUFRLEtBQUtBLFFBQVEsRUFBRSxDQUFDO1lBQzVCWSxVQUFVLEdBQUdFLElBQUk7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFDRCxFQUFFLEVBQUNGLFVBQVUsRUFBRSxDQUFDO1FBQ1pkLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0osVUFBVTtJQUNuQyxDQUFDLE1BQU0sQ0FBQztRQUNKZCxHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQ0M7WUFBQUEsUUFBUSxFQUFDLElBQUk7UUFBQSxDQUFDO0lBQ3hDLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29uc3VtaW5nLXJlc3QtYXBpcy1vbi10aGUtY2xpZW50LXNpZGUvLi9wYWdlcy9hcGkvMDQvdXNlcnMvW3VzZXJuYW1lXS5qcz84ODY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgcXVlcnk6IHt1c2VybmFtZX1cbiAgICB9ID0gcmVxO1xuICAgIGNvbnN0IGpzb25EaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2pzb24nKTtcbiAgICBjb25zdCBmaWxlQ29udGVudHMgPSBhd2FpdCBmcy5yZWFkRmlsZShqc29uRGlyZWN0b3J5ICsgJy91c2Vycy5qc29uJywgJ3V0ZjgnKTtcbiAgICBjb25zdCB1c2VycyA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnRzKTtcbiAgICBjb25zb2xlLmxvZyh1c2VycylcbiAgICBsZXQgdGFyZ2V0VXNlciA9IG51bGw7XG4gICAgdXNlcnMuZm9yRWFjaCgodXNlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgICAgICBpZih1c2VyLnVzZXJuYW1lID09PSB1c2VybmFtZSkge1xuICAgICAgICAgICAgdGFyZ2V0VXNlciA9IHVzZXJcbiAgICAgICAgfVxuICAgIH0pXG4gICAgaWYodGFyZ2V0VXNlcikge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih0YXJnZXRVc2VyKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtub3RGb3VuZDp0cnVlfSlcbiAgICB9XG59Il0sIm5hbWVzIjpbInBhdGgiLCJwcm9taXNlcyIsImZzIiwicmVxIiwicmVzIiwicXVlcnkiLCJ1c2VybmFtZSIsImpzb25EaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImZpbGVDb250ZW50cyIsInJlYWRGaWxlIiwidXNlcnMiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0VXNlciIsImZvckVhY2giLCJ1c2VyIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/04/users/[username].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/04/users/[username].js"));
module.exports = __webpack_exports__;

})();