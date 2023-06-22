"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/workspace",{

/***/ "./pages/workspace/index.tsx":
/*!***********************************!*\
  !*** ./pages/workspace/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Workspace; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var components_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/sidebar */ \"./components/sidebar.tsx\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/navbar */ \"./components/navbar.tsx\");\n//@ts-nocheck\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Workspace() {\n    _s();\n    const backendUrl = \"http://localhost:8080/\";\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [forms, setForms] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    async function fetchForms() {\n        let token = null;\n        let username = null;\n        if (true) {\n            token = localStorage.getItem(\"token\");\n            username = localStorage.getItem(\"username\");\n        }\n        try {\n            const response = await fetch(\"\".concat(backendUrl, \"yourforms\"), {\n                method: \"POST\",\n                headers: {\n                    \"Authorization\": \"Bearer \".concat(token),\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    username: username\n                })\n            });\n            const data = await response.json();\n            console.log(data);\n            setForms(data);\n        } catch (error) {\n            console.error(error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!forms) {\n            fetchForms();\n        }\n    }, [\n        fetchForms\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"GraphForms\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontFamily: \"'Poppins', sans-serif\"\n                },\n                className: \"bg-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_sidebar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"body\",\n                        className: \"mt-[10vh] text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center font-bold text-4xl\",\n                                children: \"My forms\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center text-[#444444] mb-25 font-regular text-xl\",\n                                children: \"Create new forms or view older forms here.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>router.push(\"/workspace/createform\"),\n                                className: \"bg-black px-2 py-5 rounded-xl text-white w-1/2 font-semibold mb-5\",\n                                children: \"Create a new form.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center\",\n                                children: forms && forms.forms && forms.forms.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-2 grid grid-cols-1 md:grid-cols-3 gap-4 w-1/2\",\n                                    children: forms.forms.reverse().map((form)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"border border-gray-300 p-4 mb-4 rounded-xl\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-bold\",\n                                                    children: form.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    onClick: ()=>router.push(\"/viewform/\".concat(form.id)),\n                                                    className: \"rounded text-sm bg-blue-500 text-white inline-block px-2 py-1\",\n                                                    children: \"View\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    onClick: ()=>router.push(\"/workspace/settings/\".concat(form.id)),\n                                                    className: \"rounded text-sm bg-slate-800 text-white inline-block px-2 py-1\",\n                                                    children: \"Settings\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, form.id, true, {\n                                            fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 23\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 19\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-2 grid grid-cols-1 md:grid-cols-3 gap-4 w-1/2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"border-2 border-dotted border-blue-300 p-4 mb-4 rounded-xl text-center font-semibold text-lg\",\n                                        children: \"You have no forms. Create one!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\workspace\\\\index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Workspace, \"6/VoqVhRDvVbB6Sc7t5jMwa1Uvk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Workspace;\nvar _c;\n$RefreshReg$(_c, \"Workspace\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFRixXQUFVO2tEQUErRjs7Ozs7Ozs7Ozt3Q0FFL0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWQsQ0FBQztHQWxGb0JuQzs7UUFFUEosa0RBQVNBOzs7S0FGRkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29ya3NwYWNlL2luZGV4LnRzeD85MTRkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vQHRzLW5vY2hlY2tcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnY29tcG9uZW50cy9zaWRlYmFyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICdAL2NvbXBvbmVudHMvbmF2YmFyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtzcGFjZSgpIHtcclxuICBjb25zdCBiYWNrZW5kVXJsOiBzdHJpbmcgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMITtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZm9ybXMsIHNldEZvcm1zXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoRm9ybXMoKSB7XHJcbiAgbGV0IHRva2VuID0gbnVsbDtcclxuICBsZXQgdXNlcm5hbWUgPSBudWxsO1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIHVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJyk7XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2JhY2tlbmRVcmx9eW91cmZvcm1zYCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lXHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHNldEZvcm1zKGRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gIH1cclxufVxyXG5cclxudXNlRWZmZWN0KCgpPT57XHJcbiAgaWYgKCFmb3Jtcykge1xyXG4gICAgZmV0Y2hGb3JtcygpXHJcbiAgfVxyXG59LCBbZmV0Y2hGb3Jtc10pXHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkdyYXBoRm9ybXM8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiJ1BvcHBpbnMnLCBzYW5zLXNlcmlmXCIgfX0gY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cclxuICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8ZGl2IGlkPVwiYm9keVwiIGNsYXNzTmFtZT1cIm10LVsxMHZoXSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtNHhsXCI+TXkgZm9ybXM8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LVsjNDQ0NDQ0XSBtYi0yNSBmb250LXJlZ3VsYXIgdGV4dC14bFwiPlxyXG4gICAgICAgICAgICBDcmVhdGUgbmV3IGZvcm1zIG9yIHZpZXcgb2xkZXIgZm9ybXMgaGVyZS5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy93b3Jrc3BhY2UvY3JlYXRlZm9ybScpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjayBweC0yIHB5LTUgcm91bmRlZC14bCB0ZXh0LXdoaXRlIHctMS8yIGZvbnQtc2VtaWJvbGQgbWItNVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENyZWF0ZSBhIG5ldyBmb3JtLlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybXMgJiYgZm9ybXMuZm9ybXMgJiYgZm9ybXMuZm9ybXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIGdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTQgdy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybXMuZm9ybXMucmV2ZXJzZSgpLm1hcCgoZm9ybTogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Zm9ybS5pZH0gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTQgbWItNCByb3VuZGVkLXhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPntmb3JtLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3ZpZXdmb3JtLyR7Zm9ybS5pZH1gKX0gY2xhc3NOYW1lPSdyb3VuZGVkIHRleHQtc20gYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBpbmxpbmUtYmxvY2sgcHgtMiBweS0xJz5WaWV3PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC93b3Jrc3BhY2Uvc2V0dGluZ3MvJHtmb3JtLmlkfWApfSBjbGFzc05hbWU9J3JvdW5kZWQgdGV4dC1zbSBiZy1zbGF0ZS04MDAgdGV4dC13aGl0ZSBpbmxpbmUtYmxvY2sgcHgtMiBweS0xJz5TZXR0aW5nczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIGdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTQgdy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZG90dGVkIGJvcmRlci1ibHVlLTMwMCBwLTQgbWItNCByb3VuZGVkLXhsIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgdGV4dC1sZ1wiPllvdSBoYXZlIG5vIGZvcm1zLiBDcmVhdGUgb25lITwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgIDwvPlxyXG4gICl9Il0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlRvYXN0Q29udGFpbmVyIiwiU2lkZWJhciIsIk5hdmJhciIsIldvcmtzcGFjZSIsImJhY2tlbmRVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInJvdXRlciIsImZvcm1zIiwic2V0Rm9ybXMiLCJmZXRjaEZvcm1zIiwidG9rZW4iLCJ1c2VybmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiZGl2Iiwic3R5bGUiLCJmb250RmFtaWx5IiwiY2xhc3NOYW1lIiwiaWQiLCJwIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giLCJsZW5ndGgiLCJyZXZlcnNlIiwibWFwIiwiZm9ybSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/workspace/index.tsx\n"));

/***/ })

});