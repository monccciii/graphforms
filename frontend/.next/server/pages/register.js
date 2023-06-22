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
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register.tsx":
/*!****************************!*\
  !*** ./pages/register.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Register)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction Register() {\n    const backendUrl = \"http://localhost:8080/\";\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isRegistered, setIsRegistered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    async function register(username, password) {\n        const backendUrl = \"http://localhost:8080/\";\n        try {\n            const response = await fetch(`${backendUrl}register`, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    Username: username,\n                    Password: password\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                console.log(data);\n                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(\"Account successfully created!\", {\n                    position: react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.POSITION.TOP_RIGHT\n                });\n                setTimeout(()=>setIsRegistered(true), 1000);\n            } else {\n                console.error(response.status);\n                if (response.status == 400) {\n                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Account already exists!\", {\n                        position: react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.POSITION.TOP_RIGHT\n                    });\n                } else {\n                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"An unknown error occurred, please try again.\", {\n                        position: react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.POSITION.TOP_RIGHT\n                    });\n                }\n            }\n        } catch (error) {\n            console.error(error);\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"An unknown error occurred, please try again.\", {\n                position: react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.POSITION.TOP_RIGHT\n            });\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isRegistered) {\n            router.push(\"/login\");\n        }\n    }, [\n        isRegistered,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Register to GraphForms\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontFamily: \"'Poppins', sans-serif\"\n                },\n                className: \"bg-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"navbar\",\n                        className: \"flex text-center py-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            onClick: ()=>router.push(\"/\"),\n                            className: \"mx-auto font-medium text-xl\",\n                            children: \"GraphForms\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"body\",\n                        className: \"mt-[10vh] text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-semibold text-5xl\",\n                                children: \"Register an account.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"form\",\n                                    className: \"mx-auto mt-[10vh]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"bg-[#F2F2F2] border-b border-black p-2 rounded-xl w-[25vw]\",\n                                            placeholder: \"Username\",\n                                            value: username,\n                                            onChange: (e)=>setUsername(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"mt-[5vh] border-b border-black bg-[#F2F2F2] p-2 rounded-xl w-[25vw]\",\n                                            placeholder: \"Password\",\n                                            type: \"password\",\n                                            value: password,\n                                            onChange: (e)=>setPassword(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>register(username, password),\n                                            className: \"mt-[8vh] bg-black text-white text-[18px] rounded-xl py-1 px-10\",\n                                            children: \"Register.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-[1vh] font-medium text-center\",\n                                children: \"or\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>router.push(\"/login\"),\n                                className: \"mt-[1vh] border border-black text-[15px] rounded-2xl py-1 px-6\",\n                                children: \"Login to your account.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sook3\\\\Desktop\\\\graphforms\\\\frontend\\\\pages\\\\register.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7c0RBQzNDLDhEQUFDSTs7Ozs7c0RBQ0gsOERBQUNOOzRDQUNDSixXQUFVOzRDQUNWSyxhQUFZOzRDQUNaTSxNQUFLOzRDQUNMTCxPQUFPM0M7NENBQ1A0QyxVQUFVLENBQUNDLElBQU01QyxZQUFZNEMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7c0RBQzNDLDhEQUFDSTs7Ozs7c0RBQ0QsOERBQUNFOzRDQUFPVCxTQUFTLElBQUlwQyxTQUFTTixVQUFVRTs0Q0FBV3FDLFdBQVU7c0RBQWlFOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHbEksOERBQUNFO2dDQUFFRixXQUFVOzBDQUFtQzs7Ozs7OzBDQUNoRCw4REFBQ1k7Z0NBQU9ULFNBQVMsSUFBSTNDLE9BQU82QixJQUFJLENBQUM7Z0NBQVVXLFdBQVU7MENBQWlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdDIvLi9wYWdlcy9yZWdpc3Rlci50c3g/YTZjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XHJcbiAgY29uc3QgYmFja2VuZFVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkw7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbaXNSZWdpc3RlcmVkLCBzZXRJc1JlZ2lzdGVyZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiByZWdpc3Rlcih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBiYWNrZW5kVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFja2VuZFVybH1yZWdpc3RlcmAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBVc2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgICBQYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCdBY2NvdW50IHN1Y2Nlc3NmdWxseSBjcmVhdGVkIScsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfUklHSFRcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT5zZXRJc1JlZ2lzdGVyZWQodHJ1ZSksIDEwMDApXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXM9PTQwMCl7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcignQWNjb3VudCBhbHJlYWR5IGV4aXN0cyEnLCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfUklHSFRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKCdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLCBwbGVhc2UgdHJ5IGFnYWluLicsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHRvYXN0LlBPU0lUSU9OLlRPUF9SSUdIVFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgdG9hc3QuZXJyb3IoJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQsIHBsZWFzZSB0cnkgYWdhaW4uJywge1xyXG4gICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfUklHSFRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzUmVnaXN0ZXJlZCkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICB9XHJcbiAgfSwgW2lzUmVnaXN0ZXJlZCwgcm91dGVyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UmVnaXN0ZXIgdG8gR3JhcGhGb3JtczwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tmb250RmFtaWx5OlwiJ1BvcHBpbnMnLCBzYW5zLXNlcmlmXCJ9fSBjbGFzc05hbWU9J2JnLXdoaXRlJz5cclxuICAgICAgICA8VG9hc3RDb250YWluZXIvPlxyXG4gICAgICAgIDxkaXYgaWQ9J25hdmJhcicgY2xhc3NOYW1lPSdmbGV4IHRleHQtY2VudGVyIHB5LTUnPlxyXG4gICAgICAgICAgPHAgb25DbGljaz17KCk9PnJvdXRlci5wdXNoKCcvJyl9IGNsYXNzTmFtZT0nbXgtYXV0byBmb250LW1lZGl1bSB0ZXh0LXhsJz5HcmFwaEZvcm1zPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9J2JvZHknIGNsYXNzTmFtZT0nbXQtWzEwdmhdIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCB0ZXh0LTV4bCc+UmVnaXN0ZXIgYW4gYWNjb3VudC48L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J2Zvcm0nIGNsYXNzTmFtZT0nbXgtYXV0byBtdC1bMTB2aF0nPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLVsjRjJGMkYyXSBib3JkZXItYiBib3JkZXItYmxhY2sgcC0yIHJvdW5kZWQteGwgdy1bMjV2d10nXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJ1xyXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz48YnI+PC9icj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtdC1bNXZoXSBib3JkZXItYiBib3JkZXItYmxhY2sgYmctWyNGMkYyRjJdIHAtMiByb3VuZGVkLXhsIHctWzI1dnddJ1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCdcclxuICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+cmVnaXN0ZXIodXNlcm5hbWUsIHBhc3N3b3JkKX0gY2xhc3NOYW1lPSdtdC1bOHZoXSBiZy1ibGFjayB0ZXh0LXdoaXRlIHRleHQtWzE4cHhdIHJvdW5kZWQteGwgcHktMSBweC0xMCc+UmVnaXN0ZXIuPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J210LVsxdmhdIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyJz5vcjwvcD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnJvdXRlci5wdXNoKCcvbG9naW4nKX1jbGFzc05hbWU9J210LVsxdmhdIGJvcmRlciBib3JkZXItYmxhY2sgdGV4dC1bMTVweF0gcm91bmRlZC0yeGwgcHktMSBweC02Jz5Mb2dpbiB0byB5b3VyIGFjY291bnQuPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiUmVnaXN0ZXIiLCJiYWNrZW5kVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlzUmVnaXN0ZXJlZCIsInNldElzUmVnaXN0ZXJlZCIsInJlZ2lzdGVyIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIlVzZXJuYW1lIiwiUGFzc3dvcmQiLCJvayIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsIlBPU0lUSU9OIiwiVE9QX1JJR0hUIiwic2V0VGltZW91dCIsImVycm9yIiwic3RhdHVzIiwicHVzaCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJkaXYiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJjbGFzc05hbWUiLCJpZCIsInAiLCJvbkNsaWNrIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnIiLCJ0eXBlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.tsx\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/register.tsx"));
module.exports = __webpack_exports__;

})();