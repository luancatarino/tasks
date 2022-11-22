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

/***/ "./src/model/TasksList.tsx":
/*!*********************************!*\
  !*** ./src/model/TasksList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TasksList; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_class_private_field_get_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_class_private_field_get.mjs */ \"./node_modules/@swc/helpers/src/_class_private_field_get.mjs\");\n/* harmony import */ var _swc_helpers_src_class_private_field_init_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_class_private_field_init.mjs */ \"./node_modules/@swc/helpers/src/_class_private_field_init.mjs\");\n/* harmony import */ var _swc_helpers_src_class_private_field_set_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_class_private_field_set.mjs */ \"./node_modules/@swc/helpers/src/_class_private_field_set.mjs\");\n/* harmony import */ var _FilterType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterType */ \"./src/model/FilterType.tsx\");\n\n\n\n\nvar _all = /*#__PURE__*/ new WeakMap(), _filterUsed = /*#__PURE__*/ new WeakMap();\nclass TasksList {\n    get items() {\n        return this.applyFilterOn((0,_swc_helpers_src_class_private_field_get_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, _all));\n    }\n    get quantity() {\n        return this.items.length;\n    }\n    get filterUsed() {\n        return (0,_swc_helpers_src_class_private_field_get_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, _filterUsed);\n    }\n    filterActives() {\n        if (!this.showOnlyActives()) {\n            return new TasksList((0,_swc_helpers_src_class_private_field_get_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, _all), _FilterType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Actives);\n        } else {\n            return this;\n        }\n    }\n    filterCompleted() {\n        if (!this.showOnlyCompleted()) {\n            return new TasksList((0,_swc_helpers_src_class_private_field_get_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, _all), _FilterType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Completed);\n        } else {\n            return this;\n        }\n    }\n    removeFilter() {\n        if (!this.showAll()) {\n            return new TasksList((0,_swc_helpers_src_class_private_field_get_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, _all), _FilterType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].None);\n        } else {\n            return this;\n        }\n    }\n    deleteCompleted() {\n        const onlyActives = (0,_swc_helpers_src_class_private_field_get_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, _all).filter((task)=>task.active);\n        return new TasksList(onlyActives, _FilterType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].None);\n    }\n    showAll() {\n        return (0,_swc_helpers_src_class_private_field_get_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, _filterUsed) === _FilterType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].None;\n    }\n    showOnlyActives() {\n        return (0,_swc_helpers_src_class_private_field_get_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, _filterUsed) === _FilterType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Actives;\n    }\n    showOnlyCompleted() {\n        return (0,_swc_helpers_src_class_private_field_get_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, _filterUsed) === _FilterType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Completed;\n    }\n    applyFilterOn(tasks) {\n        if (this.showOnlyActives()) {\n            return this.applyFilterActives(tasks);\n        } else if (this.showOnlyCompleted()) {\n            return this.applyFilterCompleted(tasks);\n        } else {\n            return [\n                ...tasks\n            ];\n        }\n    }\n    applyFilterActives(tasks) {\n        return tasks.filter((task)=>task.act);\n    }\n    applyFilterCompleted(tasks) {\n        return tasks.filter((task)=>task.completed);\n    }\n    constructor(all, filterUsed = _FilterType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].None){\n        (0,_swc_helpers_src_class_private_field_init_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, _all, {\n            writable: true,\n            value: void 0\n        });\n        (0,_swc_helpers_src_class_private_field_init_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, _filterUsed, {\n            writable: true,\n            value: void 0\n        });\n        (0,_swc_helpers_src_class_private_field_set_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, _all, all);\n        (0,_swc_helpers_src_class_private_field_set_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, _filterUsed, filterUsed !== null && filterUsed !== void 0 ? filterUsed : _FilterType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].None);\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWwvVGFza3NMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFBc0M7SUFJbEMsb0NBQ0E7QUFGVyxNQUFNQztJQVNqQixJQUFJQyxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUNDLGFBQWEsQ0FBQyw2RkFBSSxFQUFFQztJQUNwQztJQUVBLElBQUlDLFdBQVc7UUFDWCxPQUFPLElBQUksQ0FBQ0gsS0FBSyxDQUFDSSxNQUFNO0lBQzVCO0lBRUEsSUFBSUMsYUFBYTtRQUNiLE9BQU8sNkZBQUksRUFBRUE7SUFDakI7SUFFQUMsZ0JBQWdCO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQ0MsZUFBZSxJQUFJO1lBQ3pCLE9BQU8sSUFBSVIsVUFBVUEsd0ZBQUFBLENBQUEsSUFBSSxFQUFFRyxPQUFLSiwyREFBa0I7UUFDdEQsT0FBTztZQUNILE9BQU8sSUFBSTtRQUNmLENBQUM7SUFDTDtJQUVBVyxrQkFBa0I7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDQyxpQkFBaUIsSUFBSTtZQUMzQixPQUFPLElBQUlYLFVBQVVBLHdGQUFBQSxDQUFBLElBQUksRUFBRUcsT0FBS0osNkRBQW9CO1FBQ3hELE9BQU87WUFDSCxPQUFPLElBQUk7UUFDZixDQUFDO0lBQ0w7SUFFQWMsZUFBZTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUNDLE9BQU8sSUFBSTtZQUNqQixPQUFPLElBQUlkLFVBQVVBLHdGQUFBQSxDQUFBLElBQUksRUFBRUcsT0FBS0osd0RBQWU7UUFDbkQsT0FBTztZQUNILE9BQU8sSUFBSTtRQUNmLENBQUM7SUFDTDtJQUVBaUIsa0JBQWtCO1FBQ2QsTUFBTUMsY0FBYyw2RkFBSSxFQUFFZCxNQUFJZSxNQUFNLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLE1BQU07UUFDeEQsT0FBTyxJQUFJcEIsVUFBVWlCLGFBQWFsQix3REFBZTtJQUNyRDtJQUVBZSxVQUFtQjtRQUNmLE9BQU8sNkZBQUksRUFBRVIsaUJBQWVQLHdEQUFlO0lBQy9DO0lBRUFTLGtCQUEyQjtRQUN2QixPQUFPLDZGQUFJLEVBQUVGLGlCQUFlUCwyREFBa0I7SUFDbEQ7SUFFQVksb0JBQTZCO1FBQ3pCLE9BQU8sNkZBQUksRUFBRUwsaUJBQWVQLDZEQUFvQjtJQUNwRDtJQUVRRyxjQUFjbUIsS0FBYSxFQUFVO1FBQ3pDLElBQUksSUFBSSxDQUFDYixlQUFlLElBQUk7WUFDeEIsT0FBTyxJQUFJLENBQUNjLGtCQUFrQixDQUFDRDtRQUNuQyxPQUFPLElBQUksSUFBSSxDQUFDVixpQkFBaUIsSUFBSTtZQUNqQyxPQUFPLElBQUksQ0FBQ1ksb0JBQW9CLENBQUNGO1FBQ3JDLE9BQU87WUFDSCxPQUFPO21CQUFJQTthQUFNO1FBQ3JCLENBQUM7SUFDTDtJQUVRQyxtQkFBbUJELEtBQWEsRUFBVTtRQUM5QyxPQUFPQSxNQUFNSCxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0ssR0FBRztJQUMxQztJQUVRRCxxQkFBcUJGLEtBQWEsRUFBVTtRQUNoRCxPQUFPQSxNQUFNSCxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS00sU0FBUztJQUNoRDtJQTFFQUMsWUFBWXZCLEdBQVcsRUFBRUcsYUFBYVAsd0RBQWUsQ0FBRTtRQUh2RDs7bUJBQUE7O1FBQ0E7O21CQUFBOzt1R0FHVUksTUFBTUE7dUdBQ05HLGFBQWFBLHVCQUFBQSx3QkFBQUEsYUFBY1Asd0RBQWU7SUFDcEQ7QUF3RUo7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbW9kZWwvVGFza3NMaXN0LnRzeD8zMjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaWx0ZXJUeXBlIGZyb20gXCIuL0ZpbHRlclR5cGVcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza3NMaXN0IHtcbiAgICAjYWxsOiBUYXNrW107XG4gICAgI2ZpbHRlclVzZWQ6IEZpbHRlclR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihhbGw6IFRhc2tbXSwgZmlsdGVyVXNlZCA9IEZpbHRlclR5cGUuTm9uZSkge1xuICAgICAgICB0aGlzLiNhbGwgPSBhbGw7XG4gICAgICAgIHRoaXMuI2ZpbHRlclVzZWQgPSBmaWx0ZXJVc2VkID8/IEZpbHRlclR5cGUuTm9uZTtcbiAgICB9XG5cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5RmlsdGVyT24odGhpcy4jYWxsKTtcbiAgICB9XG5cbiAgICBnZXQgcXVhbnRpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXQgZmlsdGVyVXNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2ZpbHRlclVzZWQ7XG4gICAgfVxuXG4gICAgZmlsdGVyQWN0aXZlcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3dPbmx5QWN0aXZlcygpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRhc2tzTGlzdCh0aGlzLiNhbGwsIEZpbHRlclR5cGUuQWN0aXZlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlckNvbXBsZXRlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3dPbmx5Q29tcGxldGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGFza3NMaXN0KHRoaXMuI2FsbCwgRmlsdGVyVHlwZS5Db21wbGV0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVGaWx0ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zaG93QWxsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGFza3NMaXN0KHRoaXMuI2FsbCwgRmlsdGVyVHlwZS5Ob25lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlQ29tcGxldGVkKCkge1xuICAgICAgICBjb25zdCBvbmx5QWN0aXZlcyA9IHRoaXMuI2FsbC5maWx0ZXIodGFzayA9PiB0YXNrLmFjdGl2ZSk7XG4gICAgICAgIHJldHVybiBuZXcgVGFza3NMaXN0KG9ubHlBY3RpdmVzLCBGaWx0ZXJUeXBlLk5vbmUpO1xuICAgIH1cblxuICAgIHNob3dBbGwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLiNmaWx0ZXJVc2VkID09PSBGaWx0ZXJUeXBlLk5vbmU7XG4gICAgfVxuXG4gICAgc2hvd09ubHlBY3RpdmVzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy4jZmlsdGVyVXNlZCA9PT0gRmlsdGVyVHlwZS5BY3RpdmVzO1xuICAgIH1cblxuICAgIHNob3dPbmx5Q29tcGxldGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy4jZmlsdGVyVXNlZCA9PT0gRmlsdGVyVHlwZS5Db21wbGV0ZWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseUZpbHRlck9uKHRhc2tzOiBUYXNrW10pOiBUYXNrW10ge1xuICAgICAgICBpZiAodGhpcy5zaG93T25seUFjdGl2ZXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHlGaWx0ZXJBY3RpdmVzKHRhc2tzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dPbmx5Q29tcGxldGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGx5RmlsdGVyQ29tcGxldGVkKHRhc2tzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbLi4udGFza3NdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseUZpbHRlckFjdGl2ZXModGFza3M6IFRhc2tbXSk6IFRhc2tbXSB7XG4gICAgICAgIHJldHVybiB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suYWN0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGx5RmlsdGVyQ29tcGxldGVkKHRhc2tzOiBUYXNrW10pOiBUYXNrW10ge1xuICAgICAgICByZXR1cm4gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmNvbXBsZXRlZCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbHRlclR5cGUiLCJUYXNrc0xpc3QiLCJpdGVtcyIsImFwcGx5RmlsdGVyT24iLCJhbGwiLCJxdWFudGl0eSIsImxlbmd0aCIsImZpbHRlclVzZWQiLCJmaWx0ZXJBY3RpdmVzIiwic2hvd09ubHlBY3RpdmVzIiwiQWN0aXZlcyIsImZpbHRlckNvbXBsZXRlZCIsInNob3dPbmx5Q29tcGxldGVkIiwiQ29tcGxldGVkIiwicmVtb3ZlRmlsdGVyIiwic2hvd0FsbCIsIk5vbmUiLCJkZWxldGVDb21wbGV0ZWQiLCJvbmx5QWN0aXZlcyIsImZpbHRlciIsInRhc2siLCJhY3RpdmUiLCJ0YXNrcyIsImFwcGx5RmlsdGVyQWN0aXZlcyIsImFwcGx5RmlsdGVyQ29tcGxldGVkIiwiYWN0IiwiY29tcGxldGVkIiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/model/TasksList.tsx\n"));

/***/ })

});