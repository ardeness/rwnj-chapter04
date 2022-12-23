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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    console.log(req.headers);\n    const apikey = req.headers['authorization'];\n    if (apikey === undefined || apikey !== \"realwoalrdnextjs\") {\n        res.status(403).json();\n        return;\n    }\n    const { query: { username  }  } = req;\n    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), 'json');\n    const fileContents = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(jsonDirectory + '/users.json', 'utf8');\n    const users = JSON.parse(fileContents);\n    let targetUser = null;\n    users.forEach((user)=>{\n        if (user.username === username) {\n            targetUser = user;\n        }\n    });\n    if (targetUser) {\n        res.status(200).json(targetUser);\n    } else {\n        res.status(404);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvMDQvdXNlcnMvW3VzZXJuYW1lXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QjtBQUNZO0FBRW5DLGlFQUFNLE9BQWdCRyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDSSxPQUFPO0lBQ3ZCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHTCxHQUFHLENBQUNJLE9BQU8sQ0FBQyxDQUFlO0lBQzFDLEVBQUUsRUFBQ0MsTUFBTSxLQUFLQyxTQUFTLElBQUlELE1BQU0sS0FBSyxDQUFrQixtQkFBRSxDQUFDO1FBQ3ZESixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUk7UUFDcEIsTUFBTTtJQUNWLENBQUM7SUFDRCxLQUFLLENBQUMsQ0FBQyxDQUNIQyxLQUFLLEVBQUUsQ0FBQ0MsQ0FBQUEsUUFBUSxHQUFDLEVBQ3JCLENBQUMsR0FBR1YsR0FBRztJQUNQLEtBQUssQ0FBQ1csYUFBYSxHQUFHZCxnREFBUyxDQUFDZ0IsT0FBTyxDQUFDQyxHQUFHLElBQUksQ0FBTTtJQUNyRCxLQUFLLENBQUNDLFlBQVksR0FBRyxLQUFLLENBQUNoQixpREFBVyxDQUFDWSxhQUFhLEdBQUcsQ0FBYSxjQUFFLENBQU07SUFDNUUsS0FBSyxDQUFDTSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixZQUFZO0lBQ3JDLEdBQUcsQ0FBQ0ssVUFBVSxHQUFHLElBQUk7SUFDckJILEtBQUssQ0FBQ0ksT0FBTyxFQUFFQyxJQUFJLEdBQUssQ0FBQztRQUNyQixFQUFFLEVBQUNBLElBQUksQ0FBQ1osUUFBUSxLQUFLQSxRQUFRLEVBQUUsQ0FBQztZQUM1QlUsVUFBVSxHQUFHRSxJQUFJO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBQ0QsRUFBRSxFQUFDRixVQUFVLEVBQUUsQ0FBQztRQUNabkIsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNZLFVBQVU7SUFDbkMsQ0FBQyxNQUFNLENBQUM7UUFDSm5CLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUc7SUFDbEIsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25zdW1pbmctcmVzdC1hcGlzLW9uLXRoZS1zZXJ2ZXItc2lkZS8uL3BhZ2VzL2FwaS8wNC91c2Vycy9bdXNlcm5hbWVdLmpzPzg4NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ2ZzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVxLmhlYWRlcnMpXG4gICAgY29uc3QgYXBpa2V5ID0gcmVxLmhlYWRlcnNbJ2F1dGhvcml6YXRpb24nXVxuICAgIGlmKGFwaWtleSA9PT0gdW5kZWZpbmVkIHx8IGFwaWtleSAhPT0gXCJyZWFsd29hbHJkbmV4dGpzXCIpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oKTtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgICAgcXVlcnk6IHt1c2VybmFtZX1cbiAgICB9ID0gcmVxO1xuICAgIGNvbnN0IGpzb25EaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2pzb24nKTtcbiAgICBjb25zdCBmaWxlQ29udGVudHMgPSBhd2FpdCBmcy5yZWFkRmlsZShqc29uRGlyZWN0b3J5ICsgJy91c2Vycy5qc29uJywgJ3V0ZjgnKTtcbiAgICBjb25zdCB1c2VycyA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnRzKTtcbiAgICBsZXQgdGFyZ2V0VXNlciA9IG51bGw7XG4gICAgdXNlcnMuZm9yRWFjaCgodXNlcikgPT4ge1xuICAgICAgICBpZih1c2VyLnVzZXJuYW1lID09PSB1c2VybmFtZSkge1xuICAgICAgICAgICAgdGFyZ2V0VXNlciA9IHVzZXJcbiAgICAgICAgfVxuICAgIH0pXG4gICAgaWYodGFyZ2V0VXNlcikge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih0YXJnZXRVc2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwNCk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJwYXRoIiwicHJvbWlzZXMiLCJmcyIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXJzIiwiYXBpa2V5IiwidW5kZWZpbmVkIiwic3RhdHVzIiwianNvbiIsInF1ZXJ5IiwidXNlcm5hbWUiLCJqc29uRGlyZWN0b3J5Iiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZSIsInVzZXJzIiwiSlNPTiIsInBhcnNlIiwidGFyZ2V0VXNlciIsImZvckVhY2giLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/04/users/[username].js\n");

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