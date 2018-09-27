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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(arrayOfHTML) {\n    this.array = arrayOfHTML;\n  }\n}\n\nDOMNodeCollection.prototype.html = function(str) {\n  if (str === undefined) {\n    return this.array[0].innerHTML;\n  }\n  this.array.forEach(node => node.innerHTML = str);\n};\n\nDOMNodeCollection.prototype.empty = function(){\n  this.array.forEach(node => node.innerHTML = \"\");\n  this.array = [];\n};\n\nDOMNodeCollection.prototype.append = function(element){\n  this.array.forEach(el => {\n    if (typeof element === 'string') {\n      el.innerHTML += element;\n    } else if (element instanceof HTMLElement)\n      el.innerHTML += element.outerHTML;\n    else {\n      element.array.forEach(el2 => {\n        el.innerHTML += el2.outerHTML;\n      });\n    }\n  });\n};\n\nDOMNodeCollection.prototype.children = function(){\n  const resArr = this.array.map(node => node.children);\n  return new DOMNodeCollection(resArr);\n};\n\nDOMNodeCollection.prototype.parent = function () {\n  const resArr = this.array.map(node => node.parent);\n  return new DOMNodeCollection(resArr);\n};\n\nDOMNodeCollection.prototype.attr = function (attribute, toAssign) {\n  if (toAssign === undefined) {\n    return this.array[0].attribute;\n  } else {\n    this.array[0].attribute = toAssign;\n    return this.array[0].attribute;\n  }\n};\n\nDOMNodeCollection.prototype.addClass = function (className) {\n  this.array.forEach(el => {\n    el.className += ` ${className}`;\n  });\n};\n\nDOMNodeCollection.prototype.removeClass = function (className) {\n  this.array.forEach(el => {\n    el.className.replace(className, '');\n  });\n};\n\nDOMNodeCollection.prototype.find = function (selector) {\n  const collection = this.array.filter(el => {\n    el.attributes.values\n  });\n};\n\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\nfunction $l(selector) {\n  if (selector instanceof HTMLElement ) {\n    const arr = Array.from(selector);\n    const collection = new DOMNodeCollection(arr);\n    return collection;\n  }\n  const nodeList = document.querySelectorAll(selector);\n  const array = Array.from(nodeList);\n  return new DOMNodeCollection(array);\n}\n\nwindow.$l = $l;\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });