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
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "graphql-type-json":
/*!************************************!*\
  !*** external "graphql-type-json" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("graphql-type-json");

/***/ }),

/***/ "./pages/api/graphql.js":
/*!******************************!*\
  !*** ./pages/api/graphql.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler),\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_type_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-type-json */ \"graphql-type-json\");\n/* harmony import */ var graphql_type_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_type_json__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst sign_db = [];\nconst typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`\n    scalar JSON\n    input InsertSign {\n        nickname: String!,\n        content: String!,\n        country: String\n    }\n    type Query {\n        sign(offset: Int!, limit: Int!, order_by: JSON): [Sign]!,\n    }\n    type Mutation {\n        insert_sign(objects: InsertSign): NewSign,\n    }\n    type NewSign {\n        returning: Sign,\n    }\n    type Sign {\n        uuid: ID,\n        created_at: String\n        content: String,\n        nickname: String,\n        country: String\n    }\n`;\nconst resolvers = {\n    Query: {\n        sign (_, args) {\n            const variable = JSON.parse(JSON.stringify(args));\n            console.log(variable);\n            const offset = variable.offset;\n            const limit = variable.limit;\n            const order_by = variable.order_by.created_at;\n            console.log(order_by);\n            const sort_func = order_by.created_at === 'desc' ? (a, b)=>Number(a.created_at) - Number(b.created_at)\n             : (a, b)=>Number(b.created_at) - Number(a.created_at)\n            ;\n            const signlist = sign_db.sort(sort_func).slice(offset, offset + limit);\n            return signlist;\n        }\n    },\n    Mutation: {\n        insert_sign (_, objects) {\n            const contents = JSON.parse(JSON.stringify(objects));\n            const created_at = Date.now();\n            const newSign = {\n                ...contents.objects,\n                created_at\n            };\n            sign_db.push(newSign);\n            return {\n                returning: newSign\n            };\n        }\n    }\n};\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n    typeDefs,\n    resolvers\n});\nconst startServer = apolloServer.start();\nasync function handler(req, res) {\n    await startServer;\n    await apolloServer.createHandler({\n        path: \"/api/graphql\"\n    })(req, res);\n};\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ3JhcGhxbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUQ7QUFDWjtBQUUzQyxLQUFLLENBQUNHLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFFbEIsS0FBSyxDQUFDQyxRQUFRLEdBQUdILG9EQUFHLENBQUM7QUF5QnJCLEtBQUssQ0FBQ0ksU0FBUztJQUNYQyxLQUFLLEVBQUUsQ0FBQztRQUNKQyxJQUFJLEVBQUNDLENBQUMsRUFBRUMsSUFBSSxFQUFFLENBQUM7WUFDWCxLQUFLLENBQUNDO1lBQ05JLE9BQU8sQ0FBQ0MsR0FBRzs7WUFFWDtZQUNBLEtBQUssQ0FBQ0csUUFBUSxHQUFHUixRQUFRLENBQUNRLFFBQVEsQ0FBQ0MsVUFBVTs7WUFFN0MsS0FBSyxDQUFDQztnQkFFQ0MsQ0FBQyxFQUFFQyxDQUFDLEdBQUtDLE1BQU0sQ0FBQ0QsQ0FBQyxDQUFDSCxVQUFVLElBQUlJOztZQUN2QyxLQUFLLENBQUNDO1lBQ04sTUFBTSxDQUFDQTs7SUFFZixDQUFDO0lBQ0RHLFFBQVEsRUFBRSxDQUFDO1FBQ1BDLFdBQVcsRUFBQ3BCLENBQUMsRUFBRXFCO1lBQ1gsS0FBSyxDQUFDQztZQUNOLEtBQUssQ0FBQ1g7WUFDTixLQUFLLENBQUNjOzs7WUFHTixDQUFDO1lBQ0Q5QjtZQUNBLE1BQU0sQ0FBQyxDQUFDZ0M7Z0JBQUFBLFNBQVMsRUFBRUYsT0FBTztZQUFBLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDO0FBRUQsS0FBSyxDQUFDRyxZQUFZLEdBQUcsR0FBRyxDQUFDcEM7SUFBZUksUUFBUTtJQUFFQyxTQUFTO0FBQUMsQ0FBQztBQUM3RCxLQUFLLENBQUNnQyxXQUFXLEdBQUdELFlBQVksQ0FBQ0UsS0FBSztBQUV0QyxNQUFNO0lBQ0YsS0FBSztJQUNMO1FBQ0VLLElBQUksRUFBRSxDQUFjO0lBQ3RCLENBQUMsRUFBRUgsR0FBRyxFQUFFQyxHQUFHO0FBQ2YsQ0FBQztBQUVELE1BQU0sQ0FBQyxLQUFLLENBQUNHLE1BQU0sR0FBRyxDQUFDO0lBQ25CQyxHQUFHLEVBQUUsQ0FBQztRQUNGQyxVQUFVLEVBQUUsS0FBSztJQUNyQixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpZ25ib29rLy4vcGFnZXMvYXBpL2dyYXBocWwuanM/NzY2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9TZXJ2ZXIsIGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbWljcm8nO1xuaW1wb3J0IEdyYXBoUUxKU09OIGZyb20gJ2dyYXBocWwtdHlwZS1qc29uJztcblxuY29uc3Qgc2lnbl9kYiA9IFtdXG5cbmNvbnN0IHR5cGVEZWZzID0gZ3FsYFxuICAgIHNjYWxhciBKU09OXG4gICAgaW5wdXQgSW5zZXJ0U2lnbiB7XG4gICAgICAgIG5pY2tuYW1lOiBTdHJpbmchLFxuICAgICAgICBjb250ZW50OiBTdHJpbmchLFxuICAgICAgICBjb3VudHJ5OiBTdHJpbmdcbiAgICB9XG4gICAgdHlwZSBRdWVyeSB7XG4gICAgICAgIHNpZ24ob2Zmc2V0OiBJbnQhLCBsaW1pdDogSW50ISwgb3JkZXJfYnk6IEpTT04pOiBbU2lnbl0hLFxuICAgIH1cbiAgICB0eXBlIE11dGF0aW9uIHtcbiAgICAgICAgaW5zZXJ0X3NpZ24ob2JqZWN0czogSW5zZXJ0U2lnbik6IE5ld1NpZ24sXG4gICAgfVxuICAgIHR5cGUgTmV3U2lnbiB7XG4gICAgICAgIHJldHVybmluZzogU2lnbixcbiAgICB9XG4gICAgdHlwZSBTaWduIHtcbiAgICAgICAgdXVpZDogSUQsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IFN0cmluZ1xuICAgICAgICBjb250ZW50OiBTdHJpbmcsXG4gICAgICAgIG5pY2tuYW1lOiBTdHJpbmcsXG4gICAgICAgIGNvdW50cnk6IFN0cmluZ1xuICAgIH1cbmA7XG5cbmNvbnN0IHJlc29sdmVycyA9IHtcbiAgICBRdWVyeToge1xuICAgICAgICBzaWduKF8sIGFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhcmdzKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YXJpYWJsZSk7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSB2YXJpYWJsZS5vZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBsaW1pdCA9IHZhcmlhYmxlLmxpbWl0O1xuICAgICAgICAgICAgY29uc3Qgb3JkZXJfYnkgPSB2YXJpYWJsZS5vcmRlcl9ieS5jcmVhdGVkX2F0O1xuICAgICAgICAgICAgY29uc29sZS5sb2cob3JkZXJfYnkpO1xuICAgICAgICAgICAgY29uc3Qgc29ydF9mdW5jID0gb3JkZXJfYnkuY3JlYXRlZF9hdCA9PT0gJ2Rlc2MnXG4gICAgICAgICAgICAgICAgPyAoYSwgYikgPT4gTnVtYmVyKGEuY3JlYXRlZF9hdCkgLSBOdW1iZXIoYi5jcmVhdGVkX2F0KVxuICAgICAgICAgICAgICAgIDogKGEsIGIpID0+IE51bWJlcihiLmNyZWF0ZWRfYXQpIC0gTnVtYmVyKGEuY3JlYXRlZF9hdClcbiAgICAgICAgICAgIGNvbnN0IHNpZ25saXN0ID0gc2lnbl9kYi5zb3J0KHNvcnRfZnVuYykuc2xpY2Uob2Zmc2V0LCBvZmZzZXQrbGltaXQpXG4gICAgICAgICAgICByZXR1cm4gc2lnbmxpc3RcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIE11dGF0aW9uOiB7XG4gICAgICAgIGluc2VydF9zaWduKF8sIG9iamVjdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmplY3RzKSk7XG4gICAgICAgICAgICBjb25zdCBjcmVhdGVkX2F0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NpZ24gPSB7XG4gICAgICAgICAgICAgICAgLi4uY29udGVudHMub2JqZWN0cyxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2F0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaWduX2RiLnB1c2gobmV3U2lnbik7XG4gICAgICAgICAgICByZXR1cm4ge3JldHVybmluZzogbmV3U2lnbn07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuY29uc3QgYXBvbGxvU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7IHR5cGVEZWZzLCByZXNvbHZlcnMgfSk7XG5jb25zdCBzdGFydFNlcnZlciA9IGFwb2xsb1NlcnZlci5zdGFydCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgYXdhaXQgc3RhcnRTZXJ2ZXI7XG4gICAgYXdhaXQgYXBvbGxvU2VydmVyLmNyZWF0ZUhhbmRsZXIoe1xuICAgICAgcGF0aDogXCIvYXBpL2dyYXBocWxcIixcbiAgICB9KShyZXEsIHJlcyk7ICAgIFxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGFwaToge1xuICAgICAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgICB9LFxufTsiXSwibmFtZXMiOlsiQXBvbGxvU2VydmVyIiwiZ3FsIiwiR3JhcGhRTEpTT04iLCJzaWduX2RiIiwidHlwZURlZnMiLCJyZXNvbHZlcnMiLCJRdWVyeSIsInNpZ24iLCJfIiwiYXJncyIsInZhcmlhYmxlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsIm9mZnNldCIsImxpbWl0Iiwib3JkZXJfYnkiLCJjcmVhdGVkX2F0Iiwic29ydF9mdW5jIiwiYSIsImIiLCJOdW1iZXIiLCJzaWdubGlzdCIsInNvcnQiLCJzbGljZSIsIk11dGF0aW9uIiwiaW5zZXJ0X3NpZ24iLCJvYmplY3RzIiwiY29udGVudHMiLCJEYXRlIiwibm93IiwibmV3U2lnbiIsInB1c2giLCJyZXR1cm5pbmciLCJhcG9sbG9TZXJ2ZXIiLCJzdGFydFNlcnZlciIsInN0YXJ0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNyZWF0ZUhhbmRsZXIiLCJwYXRoIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/graphql.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/graphql.js"));
module.exports = __webpack_exports__;

})();