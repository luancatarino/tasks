"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/List/ListFooter.tsx":
/*!********************************************!*\
  !*** ./src/components/List/ListFooter.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ListFooter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ListButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListButton */ \"./src/components/List/ListButton.tsx\");\n\n\nfunction ListFooter(props) {\n    const { tasks , changed  } = props;\n    const renderQuantityItems = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-gray-300 hidden lg:inline\",\n                    children: [\n                        tasks.quantity,\n                        tasks.quantity === 0 ? \" No Task Found\" : tasks.quantity === 1 ? \" Task Found\" : \" Tasks Found\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luancatarinocurupana/Documents/Coding/Cod3r/tasks/src/components/List/ListFooter.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex-1 hidden lg:inline\"\n                }, void 0, false, {\n                    fileName: \"/Users/luancatarinocurupana/Documents/Coding/Cod3r/tasks/src/components/List/ListFooter.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true);\n    };\n    const renderButtonFilter = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    selected: tasks.showAll(),\n                    onClick: ()=>changed(tasks.removeFilter()),\n                    className: \"hidden md:inline\",\n                    children: \"All\"\n                }, void 0, false, {\n                    fileName: \"/Users/luancatarinocurupana/Documents/Coding/Cod3r/tasks/src/components/List/ListFooter.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    selected: tasks.showOnlyActives(),\n                    onClick: ()=>changed(tasks.filterActives()),\n                    className: \"mx-4\",\n                    children: \"Actives\"\n                }, void 0, false, {\n                    fileName: \"/Users/luancatarinocurupana/Documents/Coding/Cod3r/tasks/src/components/List/ListFooter.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    selected: tasks.showOnlyCompleted(),\n                    onClick: ()=>changed(tasks.filterCompleted()),\n                    children: \"Completed\"\n                }, void 0, false, {\n                    fileName: \"/Users/luancatarinocurupana/Documents/Coding/Cod3r/tasks/src/components/List/ListFooter.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true);\n    };\n    const renderDeleteCompleted = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/luancatarinocurupana/Documents/Coding/Cod3r/tasks/src/components/List/ListFooter.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"flex p-5\",\n        children: [\n            renderQuantityItems(),\n            renderButtonFilter(),\n            renderDeleteCompleted()\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luancatarinocurupana/Documents/Coding/Cod3r/tasks/src/components/List/ListFooter.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_c = ListFooter;\nvar _c;\n$RefreshReg$(_c, \"ListFooter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MaXN0L0xpc3RGb290ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNzQztBQU92QixTQUFTQyxXQUFXQyxLQUFzQixFQUFFO0lBQ3ZELE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR0Y7SUFFM0IsTUFBTUcsc0JBQXNCLElBQU07UUFDOUIscUJBQ0k7OzhCQUNJLDhEQUFDQztvQkFBS0MsV0FBVTs7d0JBQ1hKLE1BQU1LLFFBQVE7d0JBQ2RMLE1BQU1LLFFBQVEsS0FBSyxJQUFJLG1CQUFtQkwsTUFBTUssUUFBUSxLQUFLLElBQUksZ0JBQWdCLGNBQWM7Ozs7Ozs7OEJBRXBHLDhEQUFDRjtvQkFBS0MsV0FBVTs7Ozs7Ozs7SUFHNUI7SUFFQSxNQUFNRSxxQkFBcUIsSUFBTTtRQUM3QixxQkFDSTs7OEJBQ0ksOERBQUNULG1EQUFVQTtvQkFBQ1UsVUFBVVAsTUFBTVEsT0FBTztvQkFBSUMsU0FBUyxJQUFNUixRQUFRRCxNQUFNVSxZQUFZO29CQUFLTixXQUFVOzhCQUFtQjs7Ozs7OzhCQUdsSCw4REFBQ1AsbURBQVVBO29CQUFDVSxVQUFVUCxNQUFNVyxlQUFlO29CQUFJRixTQUFTLElBQU1SLFFBQVFELE1BQU1ZLGFBQWE7b0JBQUtSLFdBQVU7OEJBQU87Ozs7Ozs4QkFHL0csOERBQUNQLG1EQUFVQTtvQkFBQ1UsVUFBVVAsTUFBTWEsaUJBQWlCO29CQUFJSixTQUFTLElBQU1SLFFBQVFELE1BQU1jLGVBQWU7OEJBQUs7Ozs7Ozs7O0lBSzlHO0lBRUEsTUFBTUMsd0JBQXdCLElBQU07UUFDaEMscUJBQU87c0JBQ1AsNEVBQUNsQixtREFBVUE7Ozs7OztJQUNmO0lBRUEscUJBQ0ksOERBQUNtQjtRQUFHWixXQUFZOztZQUNYRjtZQUNBSTtZQUNBUzs7Ozs7OztBQUdiLENBQUM7S0EzQ3VCakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGlzdC9MaXN0Rm9vdGVyLnRzeD9mOWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrc0xpc3QgZnJvbSBcIi4uLy4uL21vZGVsL1Rhc2tzTGlzdFwiO1xuaW1wb3J0IExpc3RCdXR0b24gZnJvbSBcIi4vTGlzdEJ1dHRvblwiO1xuXG5pbnRlcmZhY2UgTGlzdEZvb3RlclByb3BzIHtcbiAgICB0YXNrczogVGFza3NMaXN0O1xuICAgIGNoYW5nZWQ6ICh0YXNrczogVGFza3NMaXN0KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0Rm9vdGVyKHByb3BzOiBMaXN0Rm9vdGVyUHJvcHMpIHtcbiAgICBjb25zdCB7IHRhc2tzLCBjaGFuZ2VkIH0gPSBwcm9wcztcblxuICAgIGNvbnN0IHJlbmRlclF1YW50aXR5SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaGlkZGVuIGxnOmlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICB7dGFza3MucXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICAgIHt0YXNrcy5xdWFudGl0eSA9PT0gMCA/IFwiIE5vIFRhc2sgRm91bmRcIiA6IHRhc2tzLnF1YW50aXR5ID09PSAxID8gXCIgVGFzayBGb3VuZFwiIDogXCIgVGFza3MgRm91bmRcIn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleC0xIGhpZGRlbiBsZzppbmxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyQnV0dG9uRmlsdGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8TGlzdEJ1dHRvbiBzZWxlY3RlZD17dGFza3Muc2hvd0FsbCgpfSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VkKHRhc2tzLnJlbW92ZUZpbHRlcigpKX0gY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICBBbGxcbiAgICAgICAgICAgICAgICA8L0xpc3RCdXR0b24+XG4gICAgICAgICAgICAgICAgPExpc3RCdXR0b24gc2VsZWN0ZWQ9e3Rhc2tzLnNob3dPbmx5QWN0aXZlcygpfSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VkKHRhc2tzLmZpbHRlckFjdGl2ZXMoKSl9IGNsYXNzTmFtZT1cIm14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgQWN0aXZlc1xuICAgICAgICAgICAgICAgIDwvTGlzdEJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGlzdEJ1dHRvbiBzZWxlY3RlZD17dGFza3Muc2hvd09ubHlDb21wbGV0ZWQoKX0gb25DbGljaz17KCkgPT4gY2hhbmdlZCh0YXNrcy5maWx0ZXJDb21wbGV0ZWQoKSl9PlxuICAgICAgICAgICAgICAgICAgICBDb21wbGV0ZWRcbiAgICAgICAgICAgICAgICA8L0xpc3RCdXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyRGVsZXRlQ29tcGxldGVkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgPExpc3RCdXR0b24+PC9MaXN0QnV0dG9uPjwvPjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17YGZsZXggcC01YH0+XG4gICAgICAgICAgICB7cmVuZGVyUXVhbnRpdHlJdGVtcygpfVxuICAgICAgICAgICAge3JlbmRlckJ1dHRvbkZpbHRlcigpfVxuICAgICAgICAgICAge3JlbmRlckRlbGV0ZUNvbXBsZXRlZCgpfVxuICAgICAgICA8L2xpPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiTGlzdEJ1dHRvbiIsIkxpc3RGb290ZXIiLCJwcm9wcyIsInRhc2tzIiwiY2hhbmdlZCIsInJlbmRlclF1YW50aXR5SXRlbXMiLCJzcGFuIiwiY2xhc3NOYW1lIiwicXVhbnRpdHkiLCJyZW5kZXJCdXR0b25GaWx0ZXIiLCJzZWxlY3RlZCIsInNob3dBbGwiLCJvbkNsaWNrIiwicmVtb3ZlRmlsdGVyIiwic2hvd09ubHlBY3RpdmVzIiwiZmlsdGVyQWN0aXZlcyIsInNob3dPbmx5Q29tcGxldGVkIiwiZmlsdGVyQ29tcGxldGVkIiwicmVuZGVyRGVsZXRlQ29tcGxldGVkIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/List/ListFooter.tsx\n"));

/***/ })

});