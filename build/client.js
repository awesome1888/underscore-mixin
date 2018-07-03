/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/deep-equal/index.js":
/*!******************************************!*\
  !*** ./node_modules/deep-equal/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pSlice = Array.prototype.slice;\nvar objectKeys = __webpack_require__(/*! ./lib/keys.js */ \"./node_modules/deep-equal/lib/keys.js\");\nvar isArguments = __webpack_require__(/*! ./lib/is_arguments.js */ \"./node_modules/deep-equal/lib/is_arguments.js\");\n\nvar deepEqual = module.exports = function (actual, expected, opts) {\n  if (!opts) opts = {};\n  // 7.1. All identical values are equivalent, as determined by ===.\n  if (actual === expected) {\n    return true;\n\n  } else if (actual instanceof Date && expected instanceof Date) {\n    return actual.getTime() === expected.getTime();\n\n  // 7.3. Other pairs that do not both pass typeof value == 'object',\n  // equivalence is determined by ==.\n  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {\n    return opts.strict ? actual === expected : actual == expected;\n\n  // 7.4. For all other Object pairs, including Array objects, equivalence is\n  // determined by having the same number of owned properties (as verified\n  // with Object.prototype.hasOwnProperty.call), the same set of keys\n  // (although not necessarily the same order), equivalent values for every\n  // corresponding key, and an identical 'prototype' property. Note: this\n  // accounts for both named and indexed properties on Arrays.\n  } else {\n    return objEquiv(actual, expected, opts);\n  }\n}\n\nfunction isUndefinedOrNull(value) {\n  return value === null || value === undefined;\n}\n\nfunction isBuffer (x) {\n  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;\n  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {\n    return false;\n  }\n  if (x.length > 0 && typeof x[0] !== 'number') return false;\n  return true;\n}\n\nfunction objEquiv(a, b, opts) {\n  var i, key;\n  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))\n    return false;\n  // an identical 'prototype' property.\n  if (a.prototype !== b.prototype) return false;\n  //~~~I've managed to break Object.keys through screwy arguments passing.\n  //   Converting to array solves the problem.\n  if (isArguments(a)) {\n    if (!isArguments(b)) {\n      return false;\n    }\n    a = pSlice.call(a);\n    b = pSlice.call(b);\n    return deepEqual(a, b, opts);\n  }\n  if (isBuffer(a)) {\n    if (!isBuffer(b)) {\n      return false;\n    }\n    if (a.length !== b.length) return false;\n    for (i = 0; i < a.length; i++) {\n      if (a[i] !== b[i]) return false;\n    }\n    return true;\n  }\n  try {\n    var ka = objectKeys(a),\n        kb = objectKeys(b);\n  } catch (e) {//happens when one is a string literal and the other isn't\n    return false;\n  }\n  // having the same number of owned properties (keys incorporates\n  // hasOwnProperty)\n  if (ka.length != kb.length)\n    return false;\n  //the same set of keys (although not necessarily the same order),\n  ka.sort();\n  kb.sort();\n  //~~~cheap key test\n  for (i = ka.length - 1; i >= 0; i--) {\n    if (ka[i] != kb[i])\n      return false;\n  }\n  //equivalent values for every corresponding key, and\n  //~~~possibly expensive deep test\n  for (i = ka.length - 1; i >= 0; i--) {\n    key = ka[i];\n    if (!deepEqual(a[key], b[key], opts)) return false;\n  }\n  return typeof a === typeof b;\n}\n\n\n//# sourceURL=webpack:///./node_modules/deep-equal/index.js?");

/***/ }),

/***/ "./node_modules/deep-equal/lib/is_arguments.js":
/*!*****************************************************!*\
  !*** ./node_modules/deep-equal/lib/is_arguments.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var supportsArgumentsClass = (function(){\n  return Object.prototype.toString.call(arguments)\n})() == '[object Arguments]';\n\nexports = module.exports = supportsArgumentsClass ? supported : unsupported;\n\nexports.supported = supported;\nfunction supported(object) {\n  return Object.prototype.toString.call(object) == '[object Arguments]';\n};\n\nexports.unsupported = unsupported;\nfunction unsupported(object){\n  return object &&\n    typeof object == 'object' &&\n    typeof object.length == 'number' &&\n    Object.prototype.hasOwnProperty.call(object, 'callee') &&\n    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||\n    false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/deep-equal/lib/is_arguments.js?");

/***/ }),

/***/ "./node_modules/deep-equal/lib/keys.js":
/*!*********************************************!*\
  !*** ./node_modules/deep-equal/lib/keys.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports = module.exports = typeof Object.keys === 'function'\n  ? Object.keys : shim;\n\nexports.shim = shim;\nfunction shim (obj) {\n  var keys = [];\n  for (var key in obj) keys.push(key);\n  return keys;\n}\n\n\n//# sourceURL=webpack:///./node_modules/deep-equal/lib/keys.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _underscore = __webpack_require__(/*! underscore */ \"underscore\");\n\nvar _underscore2 = _interopRequireDefault(_underscore);\n\nvar _clone = __webpack_require__(/*! clone */ \"clone\");\n\nvar _clone2 = _interopRequireDefault(_clone);\n\nvar _deepEqual2 = __webpack_require__(/*! deep-equal */ \"./node_modules/deep-equal/index.js\");\n\nvar _deepEqual3 = _interopRequireDefault(_deepEqual2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_underscore2.default.mixin({\n    /**\n     * Check if the argument is a string and it is not empty\n     * @param {*} value\n     * @returns {boolean}\n     */\n    isStringNotEmpty: function isStringNotEmpty(value) {\n        return _underscore2.default.isString(value) && value.length > 0;\n    },\n\n    isStringNotEmptyTrimmed: function isStringNotEmptyTrimmed(value) {\n        if (!_underscore2.default.isString(value)) {\n            return false;\n        }\n\n        value = value.trim();\n\n        return !!value.length;\n    },\n\n    /**\n     * Check if the argument is an array and it is not empty\n     * @param {*} value\n     * @returns {boolean}\n     */\n    isArrayNotEmpty: function isArrayNotEmpty(value) {\n        return _underscore2.default.isArray(value) && value.length > 0;\n    },\n\n    /**\n     * Check if the argument is an object and it has some own keys\n     * @param {*} value\n     * @returns {boolean}\n     */\n    isObjectNotEmpty: function isObjectNotEmpty(value) {\n        return _underscore2.default.isObject(value) && Object.keys(value).length > 0;\n    },\n\n    isPlainObject: function isPlainObject(value) {\n        return _underscore2.default.isObject(value) && value.constructor === Object;\n    },\n    isExist: function isExist(value) {\n        return !_underscore2.default.isUndefined(value) && !_underscore2.default.isNull(value);\n    },\n    makeMap: function makeMap(data, field) {\n        var unsetKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n        if (_underscore2.default.isArrayNotEmpty(data)) {\n            return data.reduce(function (result, item) {\n                var key = item[field];\n                if (unsetKey) {\n                    delete item[field];\n                }\n                result[key] = item;\n                return result;\n            }, {});\n        }\n\n        return {};\n    },\n\n\n    /**\n     * Copyright Flavio Freitas\n     * @param obj\n     * @param path\n     * @returns {*}\n     */\n    getValue: function getValue(obj, path) {\n        if (typeof obj === 'undefined' || obj === null) return;\n\n        path = path.split(/[\\.\\[\\]\\\"\\']{1,2}/); // eslint-disable-line\n        for (var i = 0, l = path.length; i < l; i += 1) {\n            if (path[i] !== '') {\n                obj = obj[path[i]];\n                if (typeof obj === 'undefined' || obj === null) return;\n            }\n        }\n\n        return obj; //eslint-disable-line\n    },\n\n    lCFirst: function lCFirst(value) {\n        if (_underscore2.default.isStringNotEmpty(value)) {\n            return value.substr(0, 1).toLowerCase() + value.substr(1);\n        }\n\n        return '';\n    },\n\n    uCFirst: function uCFirst(value) {\n        if (_underscore2.default.isStringNotEmpty(value)) {\n            return value.substr(0, 1).toUpperCase() + value.substr(1);\n        }\n\n        return '';\n    },\n\n    intersectKeys: function intersectKeys(one, two) {\n        if (!_underscore2.default.isObject(one)) {\n            return one;\n        }\n        if (!_underscore2.default.isObjectNotEmpty(two)) {\n            return {};\n        }\n\n        return _underscore2.default.intersection(Object.keys(one), Object.keys(two)).reduce(function (result, key) {\n            result[key] = one[key];\n            return result;\n        }, {});\n    },\n\n    deepClone: function deepClone(value) {\n        return (0, _clone2.default)(value, false);\n    },\n\n    deepEqual: function deepEqual(one, two) {\n        return (0, _deepEqual3.default)(one, two);\n    }\n});\n\nmodule.exports = _underscore2.default;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "clone":
/*!************************!*\
  !*** external "clone" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = clone;\n\n//# sourceURL=webpack:///external_%22clone%22?");

/***/ }),

/***/ "underscore":
/*!********************!*\
  !*** external "_" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = _;\n\n//# sourceURL=webpack:///external_%22_%22?");

/***/ })

/******/ });