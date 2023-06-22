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

/***/ "./components/simpleauth.tsx":
/*!***********************************!*\
  !*** ./components/simpleauth.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SimpleAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n//@ts-nocheck\n\n\n\nfunction SimpleAuth({ children  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const backendUrl = \"http://localhost:8080/\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkToken = async ()=>{\n            if (router.pathname === \"/\" || router.pathname === \"/login\" || router.pathname === \"/register\" || router.pathname === \"/viewform/[form]\" || router.pathname === \"/test\") {\n                return;\n            }\n            const token = localStorage.getItem(\"token\");\n            if (!token) {\n                router.push(\"/login\");\n                return;\n            }\n            try {\n                const response = await fetch(`${backendUrl}protectedconntest`, {\n                    method: \"GET\",\n                    headers: {\n                        \"Authorization\": `Bearer ${token}`\n                    }\n                });\n                if (!response.ok) {\n                    localStorage.removeItem(\"token\");\n                    router.push(\"/login\");\n                }\n            } catch (error) {\n                console.error(error);\n                localStorage.removeItem(\"token\");\n                router.push(\"/login\");\n            }\n        };\n        if (false) {}\n    }, [\n        backendUrl,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\components\\\\simpleauth.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpbXBsZWF1dGgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxhQUFhOztBQUNxQjtBQUNNO0FBRXpCLFNBQVNFLFdBQVcsRUFBRUMsU0FBUSxFQUFFLEVBQUU7SUFDL0MsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU1JLGFBQWFDLHdCQUErQjtJQUVsRE4sZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1TLGFBQWEsVUFBWTtZQUM3QixJQUFJTCxPQUFPTSxRQUFRLEtBQUssT0FBT04sT0FBT00sUUFBUSxLQUFLLFlBQVlOLE9BQU9NLFFBQVEsS0FBSyxlQUFlTixPQUFPTSxRQUFRLEtBQUssc0JBQXNCTixPQUFPTSxRQUFRLEtBQUssU0FBUztnQkFDdks7WUFDRixDQUFDO1lBRUQsTUFBTUMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1lBQ25DLElBQUksQ0FBQ0YsT0FBTztnQkFDVlAsT0FBT1UsSUFBSSxDQUFDO2dCQUNaO1lBQ0YsQ0FBQztZQUVELElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLENBQUMsRUFBRVgsV0FBVyxpQkFBaUIsQ0FBQyxFQUFFO29CQUM3RFksUUFBUTtvQkFDUkMsU0FBUzt3QkFDUCxpQkFBaUIsQ0FBQyxPQUFPLEVBQUVQLE1BQU0sQ0FBQztvQkFDcEM7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDSSxTQUFTSSxFQUFFLEVBQUU7b0JBQ2hCUCxhQUFhUSxVQUFVLENBQUM7b0JBQ3hCaEIsT0FBT1UsSUFBSSxDQUFDO2dCQUNkLENBQUM7WUFDSCxFQUFFLE9BQU9PLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7Z0JBQ2RULGFBQWFRLFVBQVUsQ0FBQztnQkFDeEJoQixPQUFPVSxJQUFJLENBQUM7WUFDZDtRQUNGO1FBRUEsSUFBSSxLQUFrQixFQUFhLEVBRWxDO0lBQ0gsR0FBRztRQUFDVDtRQUFZRDtLQUFPO0lBRXZCLHFCQUNFO2tCQUNFLDRFQUFDbUI7c0JBQU1wQjs7Ozs7OztBQUdiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Mi8uL2NvbXBvbmVudHMvc2ltcGxlYXV0aC50c3g/ODgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0B0cy1ub2NoZWNrXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltcGxlQXV0aCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBiYWNrZW5kVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNoZWNrVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyB8fCByb3V0ZXIucGF0aG5hbWUgPT09ICcvbG9naW4nIHx8IHJvdXRlci5wYXRobmFtZSA9PT0gJy9yZWdpc3RlcicgfHwgcm91dGVyLnBhdGhuYW1lID09PSAnL3ZpZXdmb3JtL1tmb3JtXScgfHwgcm91dGVyLnBhdGhuYW1lID09PSAnL3Rlc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2JhY2tlbmRVcmx9cHJvdGVjdGVkY29ubnRlc3RgLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICBcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNoZWNrVG9rZW4oKTtcclxuICAgIH1cclxuICB9LCBbYmFja2VuZFVybCwgcm91dGVyXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJTaW1wbGVBdXRoIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJiYWNrZW5kVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJjaGVja1Rva2VuIiwicGF0aG5hbWUiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJvayIsInJlbW92ZUl0ZW0iLCJlcnJvciIsImNvbnNvbGUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/simpleauth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store */ \"./store/store.ts\");\n/* harmony import */ var _components_simpleauth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/simpleauth */ \"./components/simpleauth.tsx\");\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_simpleauth__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\_app.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVE7QUFHSjtBQUNjO0FBRWpDLFNBQVNHLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksRUFBRTtJQUNoRSxxQkFDRSw4REFBQ0wsaURBQVFBO1FBQUNDLE9BQU9BLG9EQUFLQTtrQkFDcEIsNEVBQUNDLDhEQUFVQTtzQkFDVCw0RUFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdDIvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgU2ltcGxlQXV0aCBmcm9tICdAL2NvbXBvbmVudHMvc2ltcGxlYXV0aCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFNpbXBsZUF1dGg+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvU2ltcGxlQXV0aD5cbiAgICA8L1Byb3ZpZGVyPlxuICApXG59Il0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJTaW1wbGVBdXRoIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./store/reducers/authSlice.ts":
/*!*************************************!*\
  !*** ./store/reducers/authSlice.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearToken\": () => (/* binding */ clearToken),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"setToken\": () => (/* binding */ setToken),\n/* harmony export */   \"viewToken\": () => (/* binding */ viewToken)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nlet initialState = {\n    token: null\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        setToken (state, action) {\n            state.token = action.payload;\n            console.log(state.token);\n        },\n        clearToken (state) {\n            state.token = null;\n            console.log(state.token);\n        },\n        viewToken (state) {\n            console.log(state.token);\n        }\n    }\n});\nconst { setToken , clearToken , viewToken  } = authSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9hdXRoU2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThDO0FBRTlDLElBQUlDLGVBQWU7SUFDakJDLE9BQU8sSUFBSTtBQUNiO0FBRUEsTUFBTUMsWUFBWUgsNkRBQVdBLENBQUM7SUFDNUJJLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNSQyxVQUFTQyxLQUFLLEVBQUVDLE1BQU0sRUFBRTtZQUN0QkQsTUFBTUwsS0FBSyxHQUFHTSxPQUFPQyxPQUFPO1lBQzVCQyxRQUFRQyxHQUFHLENBQUNKLE1BQU1MLEtBQUs7UUFDekI7UUFDQVUsWUFBV0wsS0FBSyxFQUFFO1lBQ2hCQSxNQUFNTCxLQUFLLEdBQUcsSUFBSTtZQUNsQlEsUUFBUUMsR0FBRyxDQUFDSixNQUFNTCxLQUFLO1FBQ3pCO1FBQ0FXLFdBQVVOLEtBQUssRUFBRTtZQUNmRyxRQUFRQyxHQUFHLENBQUNKLE1BQU1MLEtBQUs7UUFDekI7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUFFSSxTQUFRLEVBQUVNLFdBQVUsRUFBRUMsVUFBUyxFQUFFLEdBQUdWLFVBQVVXLE9BQU87QUFFcEUsaUVBQWVYLFVBQVVZLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Mi8uL3N0b3JlL3JlZHVjZXJzL2F1dGhTbGljZS50cz9kM2E1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuXHJcbmxldCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdG9rZW46IG51bGwsXHJcbn1cclxuXHJcbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnYXV0aCcsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRUb2tlbihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIHN0YXRlLnRva2VuID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgY29uc29sZS5sb2coc3RhdGUudG9rZW4pXHJcbiAgICB9LFxyXG4gICAgY2xlYXJUb2tlbihzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS50b2tlbiA9IG51bGxcclxuICAgICAgY29uc29sZS5sb2coc3RhdGUudG9rZW4pXHJcbiAgICB9LFxyXG4gICAgdmlld1Rva2VuKHN0YXRlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnRva2VuKVxyXG4gICAgfVxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRUb2tlbiwgY2xlYXJUb2tlbiwgdmlld1Rva2VuIH0gPSBhdXRoU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aFNsaWNlLnJlZHVjZXJcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidG9rZW4iLCJhdXRoU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRUb2tlbiIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRva2VuIiwidmlld1Rva2VuIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/authSlice.ts\n");

/***/ }),

/***/ "./store/reducers/userSlice.ts":
/*!*************************************!*\
  !*** ./store/reducers/userSlice.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearUsername\": () => (/* binding */ clearUsername),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"setUsername\": () => (/* binding */ setUsername)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nlet initialState = {\n    username: null\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        setUsername (state, action) {\n            state.username = action.payload;\n            console.log(state.username);\n        },\n        clearUsername (state) {\n            state.username = null;\n            console.log(state.username);\n        }\n    }\n});\nconst { setUsername , clearUsername  } = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy91c2VyU2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEM7QUFFOUMsSUFBSUMsZUFBZTtJQUNqQkMsVUFBVSxJQUFJO0FBQ2hCO0FBRUEsTUFBTUMsWUFBWUgsNkRBQVdBLENBQUM7SUFDNUJJLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNSQyxhQUFZQyxLQUFLLEVBQUVDLE1BQU0sRUFBRTtZQUN6QkQsTUFBTUwsUUFBUSxHQUFHTSxPQUFPQyxPQUFPO1lBQy9CQyxRQUFRQyxHQUFHLENBQUNKLE1BQU1MLFFBQVE7UUFDNUI7UUFDQVUsZUFBY0wsS0FBSyxFQUFFO1lBQ25CQSxNQUFNTCxRQUFRLEdBQUcsSUFBSTtZQUNyQlEsUUFBUUMsR0FBRyxDQUFDSixNQUFNTCxRQUFRO1FBQzVCO0lBQ0Y7QUFDRjtBQUVPLE1BQU0sRUFBRUksWUFBVyxFQUFFTSxjQUFhLEVBQUUsR0FBR1QsVUFBVVUsT0FBTztBQUUvRCxpRUFBZVYsVUFBVVcsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QyLy4vc3RvcmUvcmVkdWNlcnMvdXNlclNsaWNlLnRzP2NiYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxubGV0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VybmFtZTogbnVsbCxcclxufVxyXG5cclxuY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICd1c2VyJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFVzZXJuYW1lKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUudXNlcm5hbWUgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZS51c2VybmFtZSlcclxuICAgIH0sXHJcbiAgICBjbGVhclVzZXJuYW1lKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnVzZXJuYW1lID0gbnVsbFxyXG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZS51c2VybmFtZSlcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldFVzZXJuYW1lLCBjbGVhclVzZXJuYW1lIH0gPSB1c2VyU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXJcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidXNlcm5hbWUiLCJ1c2VyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRVc2VybmFtZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclVzZXJuYW1lIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/userSlice.ts\n");

/***/ }),

/***/ "./store/store.ts":
/*!************************!*\
  !*** ./store/store.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"makeStore\": () => (/* binding */ makeStore)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_authSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/authSlice */ \"./store/reducers/authSlice.ts\");\n/* harmony import */ var _reducers_userSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/userSlice */ \"./store/reducers/userSlice.ts\");\n\n\n\nfunction makeStore() {\n    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: {\n            auth: _reducers_authSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n            user: _reducers_userSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n        }\n    });\n}\nconst store = makeStore();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0U7QUFFeEI7QUFDSTtBQUUzQyxTQUFTRyxZQUFZO0lBQzFCLE9BQU9ILGdFQUFjQSxDQUFDO1FBQ3BCSSxTQUFTO1lBQ1BDLE1BQU1KLDJEQUFXQTtZQUNqQkssTUFBTUosMkRBQWVBO1FBQ3ZCO0lBQ0Y7QUFDRixDQUFDO0FBRUQsTUFBTUssUUFBUUo7QUFhZCxpRUFBZUksS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QyLy4vc3RvcmUvc3RvcmUudHM/MTJlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgVGh1bmtBY3Rpb24sIEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9hdXRoU2xpY2UnXHJcbmltcG9ydCB1c2VybmFtZVJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy91c2VyU2xpY2UnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN0b3JlKCkge1xyXG4gIHJldHVybiBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7XHJcbiAgICAgIGF1dGg6IGF1dGhSZWR1Y2VyLFxyXG4gICAgICB1c2VyOiB1c2VybmFtZVJlZHVjZXIsXHJcbiAgICB9LFxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IHN0b3JlID0gbWFrZVN0b3JlKClcclxuXHJcbmV4cG9ydCB0eXBlIEFwcFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+XHJcblxyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaFxyXG5cclxuZXhwb3J0IHR5cGUgQXBwVGh1bms8UmV0dXJuVHlwZSA9IHZvaWQ+ID0gVGh1bmtBY3Rpb248XHJcbiAgUmV0dXJuVHlwZSxcclxuICBBcHBTdGF0ZSxcclxuICB1bmtub3duLFxyXG4gIEFjdGlvbjxzdHJpbmc+XHJcbj5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlXHJcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImF1dGhSZWR1Y2VyIiwidXNlcm5hbWVSZWR1Y2VyIiwibWFrZVN0b3JlIiwicmVkdWNlciIsImF1dGgiLCJ1c2VyIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/store.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();