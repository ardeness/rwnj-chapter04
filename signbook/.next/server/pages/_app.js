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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/apollo/index.js":
/*!*****************************!*\
  !*** ./lib/apollo/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initApollo\": () => (/* binding */ initApollo),\n/* harmony export */   \"useApollo\": () => (/* binding */ useApollo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet apolloClient;\nfunction createApolloClient() {\n    return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n        ssrMode: \"undefined\" === 'undefined',\n        link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({\n            uri: '/api/graphql'\n        }),\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n    });\n}\nfunction initApollo(initialState = null) {\n    const client = apolloClient || createApolloClient();\n    if (initialState) {\n        const existingCache = client.extract();\n        client.cache.restore({\n            ...existingCache,\n            ...initialState\n        });\n    }\n    if (true) {\n        return client;\n    }\n    if (!apolloClient) {\n        apolloClient = client;\n    }\n    return client;\n}\nfunction useApollo(initialState) {\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initApollo(initialState)\n    , [\n        initialState\n    ]);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBvbGxvL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQjtBQUN1QztBQUV0RSxHQUFHLENBQUNJLFlBQVk7U0FFUEMsa0JBQWtCLEdBQUcsQ0FBQztJQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDSix3REFBWSxDQUFDLENBQUM7UUFDdkJLLE9BQU8sRUFBRSxDQUFhLGVBQUssQ0FBVztRQUN0Q0MsSUFBSSxFQUFFLEdBQUcsQ0FBQ0wsb0RBQVEsQ0FBQyxDQUFDO1lBQ2xCTSxHQUFHLEVBQUUsQ0FBYztRQUNyQixDQUFDO1FBQ0RDLEtBQUssRUFBRSxHQUFHLENBQUNOLHlEQUFhO0lBQzFCLENBQUM7QUFDSCxDQUFDO0FBRU0sU0FBU08sVUFBVSxDQUFDQyxZQUFZLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDL0MsS0FBSyxDQUFDQyxNQUFNLEdBQUdSLFlBQVksSUFBSUMsa0JBQWtCO0lBRWpELEVBQUUsRUFBRU0sWUFBWSxFQUFFLENBQUM7UUFDakIsS0FBSyxDQUFDRSxhQUFhLEdBQUdELE1BQU0sQ0FBQ0UsT0FBTztRQUNwQ0YsTUFBTSxDQUFDSCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxDQUFDO2VBQUlGLGFBQWE7ZUFBS0YsWUFBWTtRQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELEVBQUUsRUFBRSxJQUE2QixFQUFFLENBQUM7UUFDbEMsTUFBTSxDQUFDQyxNQUFNO0lBQ2YsQ0FBQztJQUVELEVBQUUsR0FBR1IsWUFBWSxFQUFFLENBQUM7UUFDbEJBLFlBQVksR0FBR1EsTUFBTTtJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDQSxNQUFNO0FBQ2YsQ0FBQztBQUVNLFNBQVNJLFNBQVMsQ0FBQ0wsWUFBWSxFQUFFLENBQUM7SUFDdkMsTUFBTSxDQUFDWCw4Q0FBTyxLQUFPVSxVQUFVLENBQUNDLFlBQVk7TUFBRyxDQUFDQTtRQUFBQSxZQUFZO0lBQUEsQ0FBQztBQUMvRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2lnbmJvb2svLi9saWIvYXBvbGxvL2luZGV4LmpzP2FmMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSHR0cExpbmssIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmxldCBhcG9sbG9DbGllbnQ7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudCgpIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnLFxuICAgIGxpbms6IG5ldyBIdHRwTGluayh7XG4gICAgICB1cmk6ICcvYXBpL2dyYXBocWwnLFxuICAgIH0pLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBcG9sbG8oaW5pdGlhbFN0YXRlID0gbnVsbCkge1xuICBjb25zdCBjbGllbnQgPSBhcG9sbG9DbGllbnQgfHwgY3JlYXRlQXBvbGxvQ2xpZW50KCk7XG5cbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xuICAgIGNvbnN0IGV4aXN0aW5nQ2FjaGUgPSBjbGllbnQuZXh0cmFjdCgpO1xuICAgIGNsaWVudC5jYWNoZS5yZXN0b3JlKHsgLi4uZXhpc3RpbmdDYWNoZSwgLi4uaW5pdGlhbFN0YXRlIH0pO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGNsaWVudDtcbiAgfVxuXG4gIGlmICghYXBvbGxvQ2xpZW50KSB7XG4gICAgYXBvbGxvQ2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgcmV0dXJuIGNsaWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhpbml0aWFsU3RhdGUpIHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gaW5pdEFwb2xsbyhpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSk7XG59XG4iXSwibmFtZXMiOlsidXNlTWVtbyIsIkFwb2xsb0NsaWVudCIsIkh0dHBMaW5rIiwiSW5NZW1vcnlDYWNoZSIsImFwb2xsb0NsaWVudCIsImNyZWF0ZUFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwidXJpIiwiY2FjaGUiLCJpbml0QXBvbGxvIiwiaW5pdGlhbFN0YXRlIiwiY2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJyZXN0b3JlIiwidXNlQXBvbGxvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/apollo/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/apollo */ \"./lib/apollo/index.js\");\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const apolloClient = (0,_lib_apollo__WEBPACK_IMPORTED_MODULE_3__.useApollo)(pageProps.initialApolloState || {\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: apolloClient,\n        __source: {\n            fileName: \"/Users/ardeness/Development/Real-World-Next.js/04-nextjs-data-flow/signbook/pages/_app.js\",\n            lineNumber: 9,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/Users/ardeness/Development/Real-World-Next.js/04-nextjs-data-flow/signbook/pages/_app.js\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                    href: \"https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css\",\n                    rel: \"stylesheet\",\n                    __source: {\n                        fileName: \"/Users/ardeness/Development/Real-World-Next.js/04-nextjs-data-flow/signbook/pages/_app.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/Users/ardeness/Development/Real-World-Next.js/04-nextjs-data-flow/signbook/pages/_app.js\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNtQjtBQUNOO0FBRTFCLFFBQVEsQ0FBQ0csR0FBRyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckQsS0FBSyxDQUFDQyxZQUFZLEdBQUdKLHNEQUFTLENBQUNHLFNBQVMsQ0FBQ0Usa0JBQWtCLElBQUksQ0FBQztJQUFBLENBQUM7SUFFakUsTUFBTSx1RUFDSE4sMERBQWM7UUFBQ08sTUFBTSxFQUFFRixZQUFZOzs7Ozs7OztpRkFDakNOLGtEQUFJOzs7Ozs7OytGQUNGUyxDQUFJO29CQUFDQyxJQUFJLEVBQUMsQ0FBd0Q7b0JBQUNDLEdBQUcsRUFBQyxDQUFZOzs7Ozs7Ozs7aUZBRXJGUCxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7O0FBRzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWduYm9vay8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tICcuLi9saWIvYXBvbGxvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBhcG9sbG9DbGllbnQgPSB1c2VBcG9sbG8ocGFnZVByb3BzLmluaXRpYWxBcG9sbG9TdGF0ZSB8fCB7fSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS90YWlsd2luZGNzc0BeMi9kaXN0L3RhaWx3aW5kLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJBcG9sbG9Qcm92aWRlciIsInVzZUFwb2xsbyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFwb2xsb0NsaWVudCIsImluaXRpYWxBcG9sbG9TdGF0ZSIsImNsaWVudCIsImxpbmsiLCJocmVmIiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();