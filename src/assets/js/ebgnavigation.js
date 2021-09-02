(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ebgnavigation", [], factory);
	else if(typeof exports === 'object')
		exports["ebgnavigation"] = factory();
	else
		root["ebgnavigation"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/components/guidance/index.js":
/*!******************************************!*\
  !*** ./src/components/guidance/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(__webpack_require__(/*! ../../utils/http */ "./src/utils/http.js"));

var _utils = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");

var _img = __webpack_require__(/*! ../../utils/img */ "./src/utils/img.js");

// 图片base64地址
var guidanceEntry = function guidanceEntry(user, hosturl) {
  if (user && user.id && localStorage.getItem("isGuidance-".concat(user.id)) === 'true') return false;
  (0, _http.default)({
    type: 'GET',
    jsonp: 'jsonpCallback5',
    url: "".concat(hosturl, "/desktop/backend/indexPage/getHasNavigationLog.do"),
    success: function success(res) {
      // 返回结果 === false 显示新手指引
      if (!res.success) {
        renderGuidance(user, hosturl);
      }
    },
    error: function error() {}
  });
}; // /ebgnavigation/img/guidance-step-2.gif /ebgnavigation/img/guidance-step-1.gif


var renderGuidance = function renderGuidance(user, hosturl) {
  var guidance = document.querySelector('.guidance-container');
  guidance && (0, _utils.removeElement)(guidance);
  var p1 = document.querySelector('.ebgnav-operation-appentry');
  var p2 = document.querySelector('.ebgnav-operation-userinfo');
  if (!p1 || !p2) return false;
  var dom = "\n  <div class=\"guidance-container\">\n    <div class=\"step-guidance step1\" style=\"right: ".concat(p2.offsetWidth + 24, "px; top: 0; display:block;\">\n      <div class=\"box\">\n        <img class=\"img-gif\" src=\"/ebgnavigation/img/guidance-step-1.gif\" />\n        <div class=\"discription\">\n          <h3>\u5FEB\u6377\u5E94\u7528\u5165\u53E3\u4E0E\u641C\u7D22\u5165\u53E3</h3>\n          <p>\u70B9\u51FB\u5E94\u7528\u5FEB\u6377\u5165\u53E3\uFF0C\u53EF\u4EE5\u67E5\u770B\u7BA1\u7406\u5458\u8BBE\u7F6E\u7684\u5E38\u7528\u5E94\u7528\uFF0C\u539F\u6765\u5BFC\u822A\u680F\u4E0A\u7684\u5E94\u7528\u5165\u53E3\u4E0E\u641C\u7D22\u5165\u53E3\u8FC1\u79FB\u81F3\u6B64\u5904\uFF01</p>\n        </div>\n        <div>\n          <a class=\"btn el-button--text\" href=\"javascript:\" id=\"guidance-jump\">\u8DF3\u8FC7</a>\n          <button class=\"btn guidance-btn fr\">\u4E0B\u4E00\u6B65</button>\n        </div>\n      </div>\n      <div class=\"guidance-arrow\" style=\"width: 40px\"><i class=\"ebginav inav-app-entry\"></i></div>\n    </div>\n    <div class=\"step-guidance step2\" style=\"right: 24px; top: 0; display:none;\">\n      <div class=\"box\">\n        <img class=\"img-gif\" src=\"/ebgnavigation/img/guidance-step-2.gif\" />\n        <div class=\"discription\">\n          <h3>\u6211\u7684\u6D88\u606F\u8FC1\u79FB\u81F3\u6B64\u5904\u5566~</h3>\n        </div>\n        <div class=\"btn-box\">\n          <button class=\"btn guidance-btn fr\">\u77E5\u9053\u4E86</button>\n        </div>\n      </div>\n      <div class=\"guidance-arrow\">\n        <img class=\"avatar\" src=\"").concat(user.userPhotos || _img.avatar, "\" />\n        <span class=\"name text-ellipsis\">").concat(user.name, "</span>\n      </div>\n    </div>\n  </div>\n  ");
  var g = document.querySelector('.guidance-container');
  g && (0, _utils.removeElement)(g);
  document.body.insertAdjacentHTML('beforeend', dom);
  addEvent(user, hosturl);
};

var addEvent = function addEvent(user, hosturl) {
  var guidance = document.querySelector('.guidance-container');
  var btns = guidance.querySelectorAll('button');

  for (var i = 0; i < btns.length; i++) {
    var item = btns[i];
    item.addEventListener('click', function (e) {
      if (e.target.innerText === '下一步') {
        document.querySelector('.step1').style.display = 'none';
        document.querySelector('.step2').style.display = 'block';
      } else {
        guidanceComplete(user, hosturl);
      }
    });
  }

  var jump = document.querySelector('#guidance-jump');
  jump && jump.addEventListener('click', function () {
    guidanceComplete(user, hosturl);
  });
};

var guidanceComplete = function guidanceComplete(user, hosturl) {
  var guidance = document.querySelector('.guidance-container');
  (0, _http.default)({
    type: 'GET',
    jsonp: 'callback',
    url: "".concat(hosturl, "/desktop/backend/indexPage/insertNavigationLog.do"),
    success: function success(res) {
      console.log(res);
      localStorage.setItem("isGuidance-".concat(user.id), 'true');
      (0, _utils.removeElement)(guidance);
    },
    error: function error() {
      (0, _utils.removeElement)(guidance);
    }
  });
};

var _default = guidanceEntry;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/components/privacy/index.js":
/*!*****************************************!*\
  !*** ./src/components/privacy/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.argee = exports.privacy = void 0;

var _http = _interopRequireDefault(__webpack_require__(/*! ../../utils/http */ "./src/utils/http.js"));

var _logout = __webpack_require__(/*! ../../utils/logout */ "./src/utils/logout.js");

// import { getCookie } from '../../utils/utils'
// 同意
var argee = function argee(hosturl, data) {
  var dom = document.getElementById('lzxNavBar-privacy-agree');
  dom.addEventListener('click', function () {
    (0, _http.default)({
      type: 'GET',
      url: hosturl + '/desktop/backend/api/portal/agreeSensitive.do',
      jsonp: 'jsonp',
      success: function success() {
        localStorage.setItem("".concat(data.user.id, "Privacy"), 'true');
        document.getElementById('lzxNavBar-privacy-bg').remove();
        document.documentElement.style.overflowY = 'scroll';
      }
    });
  });
}; // 拒绝


exports.argee = argee;

var refuse = function refuse(data) {
  var refuse = document.getElementById('lzxNavBar-privacy-refuse'); // var ssoUrl = refuse.getAttribute('ssoUrl') // $('.lzxNavBar-privacy-refuse').attr('ssoUrl');

  refuse.addEventListener('click', function () {
    console.log(data);
    var logoutUrl; // 获取到退出url

    data.settings && data.settings.some(function (item) {
      if (item.key === 'user-logout') {
        logoutUrl = item.url;
        return true;
      }
    }); // ajax({
    //   type: 'GET',
    //   url: ssoUrl,
    //   jsonp: 'jsonp',
    //   success: function () {
    //     console.log(getCookie('ecsLoginUrl'))
    //     window.location.href = decodeURIComponent(getCookie('ecsLoginUrl'))
    //     document.documentElement.style.overflowY = 'scroll'
    //   }
    // })

    logoutUrl && (0, _logout.bindLogout)(logoutUrl);
  });
};

var renderPrivacy = function renderPrivacy(url, hosturl, data) {
  var privacyTips = '<div id="lzxNavBar-privacy-bg" class="lzxNavBar-privacy-bg">' + '<div class="lzxNavBar-privacy-box">' + '<h3>用户隐私协议声明</h3>' + '<div class="lzxNavBar-privacy-header">感谢您信任并使用本服务，为了能够更加全面的保障您的权益，请务必在使用前仔细阅读。</div>' + '<div class="lzxNavBar-privacy-content">' + '<h4>科大讯飞隐私权政策</h4>' + '<div class="lzxNavBar-privacy-content-text"><h4>引言</h4><p>隐私信息是指公民个人生活中不愿意为他人公开或者知悉的秘密，科大讯飞股份有限公司（以下简称“讯飞”）深知个人信息对您的重要性，并会尽力保护您的个人信息安全可靠，讯飞致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则，目的明确原则，选择同意原则，最少够用原则，确保安全原则，主体参与原则，公开透明原则。鉴此，特制定本《科大讯飞隐私权政策》并承诺，我们将按业界成熟的安全解决方案，采取相应的安全保护措施来保护您的个人信息。请您在使用我们的产品或服务前，仔细阅读并了解本隐私政策。</p><h4>适用范围</h4><p>本政策适用于讯飞产品或服务。如讯飞关联公司（说明：讯飞关联公司包括“讯飞全资子公司、讯飞合资子公司，讯飞商业合作伙伴公司等等与讯飞产生商业关联的公司”）的产品或服务中使用了讯飞提供的产品或服务但未设独立隐私权政策的，则讯飞会着力要求关联公司悉知本隐私权政策，并确保由讯飞提供的产品或服务部分同样遵守本政策。</p><p>需要特别说明的是，本政策不适用于其他第三方向您提供的服务，本协议作为讯飞基线版本隐私协议存在，也不适用于讯飞中已另行独立设置隐私权政策的产品或服务，如果本政策内容与其他已另行独立设置隐私权政策的产品或者服务出现内容差异性，以其他独立设置了隐私权政策的产品或服务内容为准，独立产品或服务的条款可能会在该基线版本上根据业务需要进行补充；在使用讯飞各项产品或服务前，请您务必仔细阅读并透彻理解本政策，在确认充分理解并同意后使用相关产品或服务。一旦您选择使用或在讯飞公司更新本隐私政策后（讯飞公司会及时提示您更新的情况）继续使用讯飞公司产品或服务，即表示您认可并接受本政策（含更新版本）的所有内容，并同意讯飞公司按本政策收集、使用、保存和共享您的相关信息。如您不同意本隐私协议中的任何条款，您应立即停止使用我们的产品或服务，如对本政策内容有任何疑问、意见或建议，您可通过我们提供的各种联系方式与我们联系。</p><h4>政策概述</h4><p>我们希望通过本政策向您说明讯飞在向您提供产品或服务过程中可能会收集的信息（包括收集方式）、收集这些信息的用途、讯飞及您如何保护这些信息的安全等，您使用我们的产品或服务时，我们有权用数字代码、通用唯一标识符、cookies或其他技术确定进入服务的计算机以及其他智能或非智能终端设备。我们有可能利用所得信息对产品或服务的使用进行总体性及匿名的数据统计及分析，所得数据可供我们或其合作人或讯飞关联公司使用。计算机识别技术也会用于执行相关的服务条款。我们可能会与讯飞关联公司等第三方合作向用户提供相关的服务，如该第三方为合法经营的公司且提供同等的用户隐私保护（如电信运营商），我们有权将您的注册资料以及在为您提供服务时所必须采集的信息等支撑服务正常进行的信息提供给该第三方。</p><h4>本隐私权政策内容将帮助您了解到以下信息：</h4><ul><li>1、我们可能收集的信息</li><li>2、我们如何使用Cookie、Beacon等以及同类技术</li><li>3、我们如何存储信息</li><li>4、我们如何保护个人信息</li><li>5、我们如何使用收集的个人信息</li><li>5、我们如何使用收集的个人信息</li><li>6、我们如何对外共享、转让、披露使用您的个人信息</li><li>7、我们如何处理未成年人的个人信息</li><li>8、您如何管理自己的个人信息</li><li>9、您的个人信息如何在全球范围转移</li><li>10、关于第三方责任的声明</li><li>11、本隐私权政策如何更新</li><li>12、本隐私权政策中的关键词说明</li><li>13、如何联系我们</li></ul>' + '<h3>一、我们可能收集的信息</h3><p>我们收集信息是为了向所有用户提供更好的产品或服务，我们根据合法、正当、必要的原则，仅收集实现产品功能所必要的信息，我们所收集的信息类型主要包括以下几种：</p><h4>1.1您在注册、登陆或者使用我们产品或服务时主动提供的信息</h4><h4>（1）您在注册帐户时填写的信息</h4><p>您在注册账户或者使用我们的产品或服务时，由于有的产品或服务可能需要您提供一些必要信息才能正常使用或带去更好的使用体验，所以在经您的同意和确认后，我们可能会收集您所提供的相关个人信息，包括姓名、性别、年龄、出生日期、电子邮件地址、电话号码、国家、母语、职业、上传的头像、分享的内容，如果您提供额外信息补全个人资料，将有助于我们给您提供更好的服务和体验。</p><p>您提供的上述信息将在您使用我们提供的服务期间持续授权我们使用。在您主动注销账号时，我们将根据适用法律法规的要求尽快使其匿名或删除您的个人信息。</p><h4>（2）您通过我们的客服或参加讯飞举办的活动时所提交的信息</h4><p>例如，您参与讯飞线上活动时填写的调查问卷中可能包含您的姓名、电话、家庭地址等信息。</p><h4>（3）您通过其他方式向讯飞所提交的信息</h4><p>例如，您通过邮寄或传真方式提供的证明文件中可能包含您的姓名、电话、家庭地址等信息。</p><h4>1.2我们在您使用服务时获取的信息</h4><p>(1)服务日志信息</p><p>们将这类非个人信息与其他信息结合用于识别特定自然人身份，或者将其与个人信息结合使用，则在结合使用期间，这类非个人信息将被视为个人信息，除取得您授权或法律法规另有规定外，会将该类个人信息做匿名化、去标识化处理。</p><h4>（2）通讯日志信息</h4><p>您在使用我们的产品或服务时曾经通讯的账户、通讯时间和时长，包括您与我们联系时，我们可能会保存您的通信/通话记录和语音、声纹特征值等信息或您留下的联系方式等信息，以便与您联系或帮助您解决问题，或记录相关问题的处理方案及结果。</p><h4>1.3从讯飞关联公司获取的信息</h4><p>我们可能会获得您在使用讯飞关联公司产品或服务时所产生或分享的信息。例如，您使用讯飞产品帐户登录讯飞关联公司产品或服务时，我们会获得您登录讯飞关联公司产品或服务的名称、登录时间，方便您进行授权管理等 。</p>' + '<h4>1.4根据法律法规的依法收集与使用</h4><p>根据相关法律法规及国家标准，在以下情形中，我们可能会依法收集并使用您的个人信息无需征得您的同意:</p><ul><li>（1）与国家安全、国防安全直接相关的；</li><li>（2）与公共安全、公共卫生、重大公共利益直接相关的；</li><li>（3）与犯罪侦查、起诉、审判和判决执行等直接相关的；</li><li>（4）出于维护您或他人的生命、财产等重大合法权益但又很难得到您本人同意的；</li><li>（5）所收集的个人信息是您自行向社会公众公开的；</li><li>（6）从合法公开披露的信息中收集个人信息，例如：合法的新闻报道、政府信息公开等渠道；</li><li>（7）根据您的要求签订和履行合同所必需的；</li><li>（8）用于维护所提供的服务的安全稳定运行所必需的，例如：发现、处置产品或服务的故障；</li><li>（9）学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；</li><li>（10）法律法规规定的其他情形。</li></ul><h4>补充说明：</h4><p>我们在向您提供其他业务功能时，可能会另行向您说明信息收集的范围与目的，并征得您的同意后方收集提供相应服务所必要的您的信息。我们会按照本政策以及相应的用户协议约定使用、存储、对外提供及保护您的信息；</p><h3>二、我们如何使用Cookie、Beacon等以及同类技术</h3><p>为使您获得更轻松的访问体验，包括但不限于您在PC电脑端访问我们的产品或享受我们提供的服务时，我们或我们的关联公司，可能会通过放置安全的Cookie、Beacon及相关技术收集您的信息，目的是为您提供更个性化的用户体验和服务。我们会严格要求讯飞关联公司遵守本政策的相关规定。您也可以通过浏览器设置管理Cookie。但请注意，如果停用Cookie，您可能无法享受最佳的服务体验，某些产品或服务也可能无法正常使用。</p><h3>三、我们如何存储信息</h3><h4>3.1存储信息的地点</h4><p>我们遵守法律法规的规定，收集的有关您的信息和资料将保存在我们及（或）我们的关联公司的服务器上，这些信息和资料可能传送至您所在的地区或收集信息和资料所在地并在该地被访问、存储和展示。</p><h4>3.2存储信息的期限</h4><p>一般而言，我们仅为实现目的所必需的最短时间保留您的个人信息。用于识别您个人身份以及反映相关活动的个人信息将留存至用户注销账户时，除非法律要求或允许在更长的期间内保留这些信息。但在下列情况下，我们有可能因需符合法律要求，更改个人信息的存储时间：</p><ul><li>1、为遵守适用的法律法规等有关规定；</li><li>2、为遵守法院判决、裁定或其他法律程序的规定；</li><li>3、为遵守相关政府机关或法定授权组织的要求；</li><li>4、我们有理由确信需要遵守法律法规等有关规定；</li><li>5、为执行相关服务协议或本政策、维护社会公共利益，为保护我们的客户、我们或我们的关联公司、其他用户或雇员的人身财产安全或其他合法权益所合理必需的用途。</li></ul><p>在您终止使用我们的产品或服务后，我们会停止对您的信息的收集和使用，法律法规或监管部门另有规定的除外。</p><p>当我们的产品或服务发生停止运营的情形时，我们将采取推送通知、公告等形式通知您，并在合理的期限内删除服务器中留存的您的个人信息。</p><h3>四、我们如何保护个人信息</h3><h4>4.1数据安全技术措施</h4><ul><li>1、我们会采用符合业界标准的安全防护措施，包括建立合理的制度规范、安全技术来防止您的个人信息遭到未经授权的访问使用、修改,避免数据的损坏或丢失。</li><li>2、我们的网络服务采取了传输层安全协议等加密技术，通过https等方式提供浏览服务，确保用户数据在传输过程中的安全。</li><li>3、我们采取加密技术对用户个人信息进行加密保存，并通过隔离技术进行隔离，例如，使用加密技术（例如，TLS、SSL）、匿名化处理等手段来保护您的个人信息。</li><li>4、在个人信息使用时，例如个人信息展示、个人信息关联计算，我们会采用包括内容替换、SHA256在内多种数据脱敏技术增强个人信息在使用中安全性。</li><li>5、我们采用严格的数据访问权限控制和多重身份认证技术保护个人信息，避免数据被违规使用。</li><li>6、我们采用代码安全自动检查、数据访问日志分析技术进行个人信息安全审计。</li></ul>' + '<h4>4.2保护个人信息实行的其他安全措施</h4><ul><li>1、我们通过建立数据分类分级制度、数据安全管理规范、数据安全开发规范来管理规范个人信息的存储和使用。</li><li>2、我们通过信息接触者保密协议等方式，仅允许有必要知晓这些信息的讯飞及讯飞关联方的员工、合作伙伴访问个人信息，并为此设置了严格的访问权限控制和监控机制。</li><li>3、我们同时要求可能接触到您个人信息的所有人员履行相应的保密义务。如果未能履行这些义务，可能会被追究法律责任或被中止与讯飞的合作关系。</li><li>4、加强安全意识，讯飞会举办安全和隐私保护培训课程，加强员工对于保护个人信息重要性的认识。</li></ul><h4>4.3互联网并非绝对安全的环境，而且电子邮件、即时通讯、社交软件等与其他用户的交流方式无法确定是否完全加密，我们建议您使用此类工具时请使用复杂密码，并注意保护您的个人信息安全。</h4><h4>4.4互联网环境并非百分之百安全，我们将尽力确保或担保您发送给我们的任何信息的安全性。如果讯飞的物理、技术、或管理防护设施遭到破坏，导致信息被非授权访问、公开披露、篡改、或毁坏，导致您的合法权益受损，我们将承担相应的法律责任。</h4><h4>4.5安全事件处置</h4><p>在不幸发生个人信息安全事件后，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。我们将及时将事件相关情况以邮件、信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况。</p><h3>五、我们如何使用收集的个人信息</h3><p>因收集您的信息是为了向您提供产品或服务同时以提升服务质量为目的，为了实现这一目的，我们会把您的信息用于下列用途。若我们超出以下用途使用您的信息，我们将再次向您进行说明，并征得您的同意。</p><h4>5.1服务提供</h4><p>在我们提供产品或服务时，用于身份验证、客户服务、安全防范、存档和备份等用途，确保我们向您提供产品或服务的安全性，并维护、改进这些服务。</p><h4>5.2满足您的个性化需求</h4><p>向您推荐您可能感兴趣的内容，包括但不限于向您发出产品以及服务信息或通过系统向您展示个性化的第三方推广信息，例如广告、资讯等，或者在征得您同意的情况下与我们的关联公司共享信息以便他们向您发送有关其产品或服务的信息。</p><h4>5.3产品开发和优化</h4><p>当我们的系统发生故障时，我们会记录和分析系统故障时产生的信息，优化我们的产品或服务。</p><h4>5.4安全保障</h4><p>我们会将您的信息用于身份验证、安全防范、反诈骗监测、存档备份、客户的安全服务等用途。您下载或安装的安全软件会对恶意程序或病毒进行检测，或为您识别诈骗信息。</p><h4>5.5软件认证或管理软件升级</h4><h4>5.6对于从您的各种设备上收集到的信息，我们可能会将它们进行关联，以便能在这些设备上为您提供一致的服务。</h4><h4>5.7邀请您参与有关我们服务的调查</h4><h4>5.8帮助讯飞设计新产品或改进服务模式</h4><p>我们在提供某些产品或服务中，可能会请用户参与“用户体验改进计划”，加入用户体验改进计划的用户，我们会根据需要对产品或服务的各项功能使用情况进行统计，这样可以通过分析统计数据提高产品或服务质量，推出对用户有帮助的创新产品或服务提升。如您不想参与该计划，可以选择关闭相关产品/服务中的相关功能。</p><h4>5.9经用户许可前提下，合理的依据业务诉求将信息与合规关联公司共享。</h4><h4>5.10经您许可的其他用途</h4><h3>六、我们如何对外共享、转让、披露使用您的个人信息</h3><h4>6.1信息的共享</h4><ul><li>（1）我们不会与讯飞服务提供者以外的公司、组织和个人共享您的个人信息，但以下情况除外：<ul><li>a)事先获得您明确的同意或授权，我们会与其他方共享您的个人信息；</li><li>b)在法定情形下根据适用的法律法规、法律程序的要求、强制性的行政或司法要求所必须的情况下进行提供；</li><li>c)在法律法规允许的范围内，为维护讯飞或合作伙伴、您或其他讯飞用户或社会公众利益、财产或安全免遭损害而有必要提供；</li><li>d)只有共享您的信息，才能实现我们的产品与/或服务的核心功能或提供您需要的服务；</li><li>e)符合与您签署的相关协议（包括在线签署的电子协议以及相应的平台规则）或其他的法律文件约定所提供；</li><li>f)应您需求为您处理您与他人的纠纷或争议；</li><li>g)基于学术研究而使用；</li><li>h)基于符合法律法规的社会公共利益而使用；</li></ul></li><li>（2）我们可能会将您的个人信息与我们的关联方共享。但只会共享必要的个人信息，且受本隐私政策的约束，如果我们共享您的个人敏感信息或关联公司改变个人信息的使用及处理目的，将再次征求您的授权同意。</li><li>（3） 我们的某些服务将由我们和授权关联公司共同提供，可能会向关联公司等第三方共享您的信息，以保障为您提供的服务顺利完成。我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的个人信息。我们的关联公司无权将共享的个人信息用于与产品或服务无关的其他用途。</li><li>（4）为了遵守法律、执行或适用我们的使用条件和其他协议，或者为了保护讯飞、您或其他讯飞客户的权利及其财产或安全，比如为防止欺诈等违法活动和减少信用风险，而与其他公司和组织交换信息。但是，这并不包括违反本隐私政策中所作的承诺而为获利目的出售、出租、共享或以其它方式披露的个人信息。</li></ul>' + '<h4>6.2信息的转让</h4><p>我们不会将您的个人信息转让给任何公司、组织和个人，但以下情况除外：</p><ul><li>1、事先获得您明确的同意或授权，我们会向其他方转让您的个人信息；</li><li>2、根据适用的法律法规、法律程序的要求、强制性的行政或司法要求所必须的情况下进行提供；</li><li>3、符合与您签署的相关协议（包括在线签署的电子协议以及相应的平台规则）或其他的法律文件约定所提供；</li><li>4、在涉及合并、收购或破产清算情形，或其他涉及合并、收购或破产清算情形时，如涉及到个人信息转让，我们会要求新的持有您个人信息的公司、组织继续受本政策的约束，否则我们将要求该公司、组织和个人重新向您征求授权同意；<li></ul><h4>6.3信息的披露</h4><p>我们仅会在以下情况下，公开披露您的个人信息：</p><ul><li>1、获得您明确同意或基于您的主动选择，我们可能会公开披露您的个人信息；</li><li>2、如果我们确定您出现违反法律法规或严重违反我们的相关协议规则的情况或其他可能的紧急情况下，为了保护我们及其关联公司用户或公众的人身财产安全免遭侵害，我们可能依据法律法规或我们的相关协议规则征得您同意的情况下披露关于您的个人信息，包括相关违规行为以及我们已对您采取的措施；</li><li>3、您使用共享功能的；</li><li>4、符合我们的相关产品或服务的用户协议或其他类似协议的规定；</li></ul><h4>6.4共享、转让、披露个人信息时事先征得授权同意的例外</h4><p>以下情形中，共享、转让、公开披露您的个人信息无需事先征得您的授权同意：</p><ul><li>1、与国家安全、国防安全有关的；</li><li>2、与公共安全、公共卫生、重大公共利益有关的；</li><li>3、与犯罪侦查、起诉、审判和判决执行等有关的；</li><li>4、出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；</li><li>5、您自行向社会公众公开的个人信息；</li><li>6、从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。</li><li>7、根据法律规定，共享、转让经去标识化处理的个人信息，且确保数据接收方无法复原并重新识别个人信息主体的，不属于个人信息的对外共享、转让及公开披露行为，对此类数据的保存及处理将无需另行向您通知并征得您的同意。</li></ul><h3>七、我们如何处理未成年人的个人信息</h3><p>1、我们非常重视对未成年人个人信息的保护</p><p>根据国家相关法律法规，收集年满14周岁的未成年人的个人信息前，应征得未成年人或其法定监护人的明示同意； 不满14周岁的，应征得其法定监护人的明示同意。（尽管各地法律和习俗对未成年人（儿童）的定义不同， 但我们将不满14 周岁的任何人均视为未成年人（儿童）。）如果没有家长或法定监护人的同意，未成年人不得创建自己的用户帐号。如您为未成年人，请在父母或监护人的陪同和帮助下仔细阅读本隐私权政策，并在征得您的父母或监护人同意的前提下使用我们的服务或向我们提供信息。对于经父母或法定监护人同意而收集未成年人个人信息的情况，我们只会在受到法律允许、家长或法定监护人明确同意或者保护未成年人所必要的情况下使用或公开披露此信息。如果我们发现自己在未事先获得可证实的父母同意的情况下收集了未成年人的个人信息，则会设法尽快删除相关数据。</p><p>2、如果我们发现自己在未事先获得可证实的父母同意的情况下收集了未成年人的个人信息，则会设法尽快删除相关数据。</p><h3>八、您如何管理自己的个人信息</h3><p>1、您有权访问、更正、删除您的个人信息,但相关信息的删除或修改可能会影响您对相关产品或服务的使用或导致部分功能的实现。您可以通过登录后查看个人中心来访问、更正您的个人信息，可以通过客服电话4000199199联系我们来删除您的个人信息。</p><p>2、您有权改变您授权同意的范围或撤回您的授权，您可以通过删除信息、关闭设备功能、在网站或软件中进行隐私设置等方式改变您授权我们继续收集个人信息的范围或撤回您的授权。您也可以通过客服电话4000199199联系我们，撤回我们继续收集您个人信息的全部授权。请您理解，每个业务功能需要一些基本的个人信息才能得以完成，当您撤回同意或授权后，我们无法继续为您提供撤回同意或授权所对应的服务，也不再处理您相应的个人信息。但您撤回同意或授权的决定，不会影响此前基于您的授权而开展的个人信息处理。</p><p>3、您也可以在满足相关产品或服务约定条件的情况下，联系我们申请注销相关产品账户。您注销账户后，我们将停止为您提供产品与/或服务，并依据您的要求，除法律法规另有规定外，我们将删除您的个人信息。</p><p>4、我们将采取适当的技术手段，保证您对于自己的个人资料可进行查询、补充、更正或删除，或通过讯飞相关产品或服务发布的反馈或投诉渠道申请我们对相关信息进行补充、更正或删除；我们收到您的申请后将按流程予以处理，为保障安全， 按照流程，您可能需要提供书面请求， 或以其他方式证明您的身份。我们可能会先要求您验证自己的身份，然后再处理您的请求。 我们将在15天内做出答复，对于您合理的请求， 我们原则上不收取费用， 但对多次重复、 超出合理限度的请求， 我们将视情况收取一定成本费用。 对于那些无端重复、 需要过多技术手段（例如，需要开发新系统或从根本上改变现行惯例）、给他人合法权益带来风险或者非常不切实际（例如， 涉及备份磁带上存放的信息）的请求，我们可能会予以拒绝。</p><p>在以下情形中，按照法律法规要求，我们将无法响应您的请求：</p><ul><li>a)与国家安全、国防安全直接相关的；</li><li>b)与公共安全、公共卫生、重大公共利益直接相关的；</li><li>c)与犯罪侦查、起诉、审判和判决执行等直接相关的；</li><li>d)有充分证据表情您存在主观恶意或滥用权力的；</li><li>e)响应您的请求将导致您或其他个人、 组织的合法权益受到严重损害的；</li><li>f)涉及商业秘密的；</li></ul><p>5、如果您无法访问、更正或删除您的个人信息，或您需要访问、更正或删除您在使用我们的产品或服务时所产生的其他个人信息，或您认为我们存在任何违反法律法规或与您关于个人信息的收集或使用的约定，您可通过我们对外公布的相关产品或服务的官方反馈渠道与我们联系。</p>' + '<h3>九、您的个人信息如何在全球范围转移</h3><h4>我们在中华人民共和国境内收集产生的个人信息，存储在中国境内，以下情形除外：</h4><p>1、法律法规有明确规定；</p><p>2、获得您的明确授权；</p><p>3、您通过互联网进行跨境直播/发布动态等个人主动行为。</p><p>针对以上情形，我们会确保依据本隐私权政策对您的个人信息提供足够的保护。</p><h3>十、关于第三方责任的声明</h3><h4>除本政策已列明的免责情况外，下列情况我们也无须承担任何责任：</h4><p>1. 由于您将用户密码告知他人、与他人共享注册账户或其他因您个人保管不善，由此导致的任何个人资料泄露、丢失、被盗用或被篡改等。</p><p>2. 任何由于黑客政击、计算机病毒侵入或发作、因政府管制而造成的暂时性关闭等影响网络正常经营之不可抗力而造成的个人资料泄露、丢失、被盗用或被篡改等。</p><p>3. 由于与我们链接的其他网站所造成的个人信息的泄露及由此产生的任何法律争议和后果。</p><p>4. 其它非我们原因导致的个人信息的泄露及由此产生的任何法律争议和后果。</p><h3>十一、本隐私权政策如何更新</h3><h4>我们的隐私权政策可能变更。</h4><p>（1）未经您明确同意，我们不会削减您按照本隐私权政策所应享有的权利。我们会在专门页面上发布对隐私权政策所做的任何变更。同时我们会将本政策的旧版本存档，供您查阅。</p><p>（2）对于重大变更，我们还会提供更为显著的通知，包括我们会通过网站公示的方式进行通知甚至向您提供弹窗提示。</p><h4>本政策所指的重大变更包括但不限于：</h4><ul><li>（1）我们的服务模式发生重大变化。如处理个人信息的目的、处理的个人信息类型、个人信息的使用方式等；</li><li>（2）我们在控制权等方面发生重大变化。如并购重组等引起的所有者变更等；</li><li>（3）个人信息共享、转让或公开披露的主要对象发生变化；</li><li>（4）您参与个人信息处理方面的权利及其行使方式发生重大变化；</li><li>（5）我们负责处理个人信息安全的责任部门、联络方式及投诉渠道发生变化时；</li><li>（6）个人信息安全影响评估报告表明存在高风险时；</li><li>（7）伴随政策或法律发布实施，为响应国家政策或者法律规范，做出变更；</li></ul><h3>十二、本隐私权政策中的关键词说明</h3><h4>个人信息</h4><p>个人信息是指以电子或者其他方式记录的能够单独或者与其他信息结合识别自然人个人身份的各种信息，包括但不限于自然人的姓名、出生日期、身份证件号码、个人生物识别信息、住址、电话号码等。</p><h4>个人敏感信息</h4><p>个人敏感信息是指一旦泄露、非法提供或滥用可能危害人身和财产安全，极易导致个人名誉、身心健康受到损害或歧视性待遇等的个人信息。例如，个人敏感信息包括身份证件号码、个人生物识别信息、银行账号、通信内容、健康生理信息等。</p><h4>设备</h4><p>设备是指可用于访问服务的装置，例如台式计算机、笔记本电脑、平板电脑或智能手机。</p><h4>唯一设备标识符</h4><p>唯一设备标识符（专属ID 或UUID）是指由设备制造商编入到设备中的一串字符，可用于以独有方式标识相应设备（例如手机的IMEI 号）。唯一设备标识符有多种用途，其中可在不能使用cookies（例如在移动应用程序中）时用以提供广告。</p><h4>IP地址</h4><p>每台上网的设备都会指定一个编号，称为互联网协议 (IP) 地址。这些编号通常都是根据地理区域指定的。IP 地址通常可用于识别设备连接至互联网时所在的位置。</p><h4>GPS</h4><p>Global Positioning System（全球定位系统）的简称。您使用的设备上的GPS信号接收器可以从GPS卫星收到信号并利用传来的信息计算您的位置。</p><h4>WIFI</h4><p>Wi-Fi是一种允许电子设备连接到一个无线局域网（WLAN）的技术，通常我们所说的无线网络。</p><h4>基站</h4><p>基站，即公用移动通信基站，是无线电台站的一种形式，是指在一定的无线电覆盖区中，通过移动通信交换中心，与移动电话终端之间进行信息传递的无线电收发信电台。</p><h4>SSL</h4><p>SSL（Secure Socket Layer）又称为安全套接层，是在传输通信协议（TCP/IP）上实现的一种安全协议。SSL支持各种类型的网络，同时提供三种基本的安全服务，均通过使用公开密钥和对称密钥技术以达到信息保密的效果。</p><h4>信息收集技术</h4><p>我们在《隐私权政策》中所述的“自动收集”包括以下方式：</p><p>（1）Cookie</p><p>Cookie是您浏览网页时，网站服务器放在客户端（您的计算机、移动电话或其他智能终端内）里面的一个小小的文本文件，可用于改善您的使用体验。</p><p>（2）Web beacon（网络信标）</p><p>Web beacon是装嵌在网站或电邮内的电子图像文件案或其他技术，可用于计算访客数目、记录您是否及何时阅览电邮或网站，或用以使用某些Cookie。</p><p>（3）Log files（日志文件）</p><p>Log files储存自动收集的若干数据。该等数据包括互联网协议（IP）地址、浏览器类型、互联网服务提供商（ISP）、引用/退出页面、操作系统、日期/时间戳和点击流数据等。</p><p>（4）ET Tag（实体标签）</p><p>ET Tag是在互联网浏览器与互联网服务器之间背后传送的HTTP协议标头，可代替Cookie，用以追踪个别使用者，使我们可更深入地了解和改善我们的服务。</p><p>（5）JavaScript</p><p>JavaScript是一种编程语言，用于制作更具互动性和动态的网页。JavaScript可以设定Cookie、阅读Cookie及删除Cookie。</p><h3>十三、如何联系我们</h3><h4>您可以通过以下方式与我们联系，我们将在15天内回复您的请求：</h4><p>（1）如对本政策内容有任何疑问、意见或建议，或者需要注销您的账户，您可以通过客服电话4000199199与我们联系。</p><p>（2） 如果您对我们的回复不满意，特别是您认为我们的个人信息处理行为损害了您的合法权益，您还可以向网信、电信、公安及工商等监管部门进行投诉或举报。</p><p>*注：本《科大讯飞隐私权政策》版本号为20200421。</p>' + '</div>' + '</div>' + '<div class="lzxNavBar-privacy-content-text-check">点击同意即代表您已阅读并同意我们的《用户隐私协议》。</div>' + '<div class="lzxNavBar-privacy-footer"><span id="lzxNavBar-privacy-agree" class="lzxNavBar-privacy-agree">同意并继续</span><span id="lzxNavBar-privacy-refuse" class="lzxNavBar-privacy-refuse" ssoUrl="' + url + '">拒绝</span></div>' + '</div>' + '</div>'; // document.body.append(privacyTips)

  document.body.insertAdjacentHTML('afterbegin', privacyTips);
  document.documentElement.style.overflowY = 'hidden';
  argee(hosturl, data);
  refuse(data);
};

var privacy = function privacy(data, hosturl) {
  if (data && data.user && data.user.id && localStorage.getItem("".concat(data.user.id, "Privacy")) === 'true') return false; // 走到这里说明用户已经同意过了，不需要在显示隐私弹框

  (0, _http.default)({
    type: 'GET',
    url: "".concat(hosturl, "/desktop/backend/api/portal/sensitiveConfig"),
    jsonp: 'jsonp1',
    success: function success(res) {
      if (res.sensitiveAgreed === true) {
        return false;
      }

      renderPrivacy("".concat(data.ssoServerUrl, "/logout"), hosturl, data);
    }
  });
};

exports.privacy = privacy;

/***/ }),

/***/ "./src/components/search/index.js":
/*!****************************************!*\
  !*** ./src/components/search/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllAppsData = void 0;

var _http = _interopRequireDefault(__webpack_require__(/*! ../../utils/http */ "./src/utils/http.js"));

var _appAuth = __webpack_require__(/*! ../../utils/app-auth */ "./src/utils/app-auth.js");

var _utils = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");

var _this = void 0;

var dom = "<div class=\"ebgnav__app_search-container hide\">\n              <div id=\"data\" style=\"display:none\"></div>\n              <span class=\"close__searh__box\" id=\"close__searh__box\"></span>\n              <div class=\"search-input-box\">\n                <input id=\"search-input\" class=\"form-input\" type=\"text\" placeholder=\"\u67E5\u627E\u5E94\u7528\" />\n                <button id=\"searchBtn\" class=\"form-search-btn\">\u641C\u7D22</button>\n              </div>\n              <div class=\"ebgnav__app_search-box\">\n                <div class=\"serach-app-sub-con\">\n                  <div class=\"result hide\">\u4EE5\u4E0B\u662F\u201C<strong id=\"serachText\"></strong>\u201D\u76F8\u5173\u7684\u5E94\u7528</div>\n                  <ul id=\"app-list\" class=\"app-list clearfix\">\n                    \n                  </ul>\n                  <div id=\"loader\" class=\"loader-box show\"><div class=\"loader\"></div><p>\u6570\u636E\u52A0\u8F7D\u4E2D\u2026</p></div>\n                  <div class=\"no-data hide\">\n                    <p>\u6682\u65E0\u641C\u7D22\u6570\u636E</p>\n                  </div>\n                </div>\n              </div>\n             </div>\n            ";

var showLoader = function showLoader() {
  var loader = document.querySelector('#loader');

  if (loader) {
    loader.className = 'loader-box show';
  }
};

var hideLoader = function hideLoader() {
  var loader = document.querySelector('#loader');

  if (loader) {
    loader.className = 'loader-box hide';
  }
};

var appDatas = {};

var hideSearchContainer = function hideSearchContainer() {
  console.log('hideSearchContainer');
  var search = document.querySelector('.ebgnav__app_search-container'); // search.classList = 'ebgnav__app_search-container hide'

  (0, _utils.handleClass)(search, 'add', 'hide');
  document.getElementById('search-input').value = ''; // document.querySelector('.result').className = 'result hide'

  (0, _utils.handleClass)(document.querySelector('.result'), 'add', 'hide');
};

var showSearchContainer = function showSearchContainer(apiUrl, jsonpHost) {
  (0, _utils.handleClass)(document.querySelector('.ebgnav__app_search-container'), 'delete', 'hide');
  renderSearchData(appDatas.classifies, apiUrl, jsonpHost);
};

var filterApps = function filterApps(e, apiUrl, jsonpHost) {
  if (appDatas.classifies && appDatas.classifies.length) {
    var value = e.value;
    var arr = [];
    var obj = {};
    var serachText = document.getElementById('serachText');
    document.getElementsByClassName('no-data')[0].className = 'no-data hide';

    if (!value) {
      renderSearchData(appDatas.classifies, apiUrl, jsonpHost);
      document.getElementsByClassName('result')[0].className = 'result hide';
      return;
    }

    if (value) {
      serachText.innerText = value;
      document.getElementsByClassName('result')[0].className = 'result';
    }

    appDatas.classifies.forEach(function (item) {
      console.log(item.kind);
      obj[item.id] = {
        kind: item.kind,
        id: item.id,
        items: []
      };
      item.items && item.items.forEach(function (sub) {
        if (sub.name.indexOf(value) !== -1) {
          obj[item.id].items.push({
            appTerminalStr: sub.appTerminalStr,
            fav: sub.fav,
            id: sub.id,
            name: sub.name,
            url: sub.url
          });
        }
      });
    });

    for (var key in obj) {
      if (obj[key].items.length) {
        arr.push(obj[key]);
      }
    }

    renderSearchData(arr, apiUrl, jsonpHost);

    if (!arr.length) {
      document.getElementsByClassName('no-data')[0].className = 'no-data';
    }
  }
};

var addEvent = function addEvent(apiUrl, jsonpHost) {
  // 关闭弹框
  var close = document.querySelector('#close__searh__box');
  close.addEventListener('click', hideSearchContainer);
  var searchBtn = document.getElementById('searchBtn');
  var inputEvent = document.getElementById('search-input');
  searchBtn.onclick = filterApps.bind(_this, inputEvent, apiUrl, jsonpHost);
  var dd = document.getElementsByClassName('item-list');
  var len = dd.length;

  var _loop = function _loop(i) {
    var item = dd[i];
    item.addEventListener('click', function () {
      var name = item.getAttribute('title');
      var id = item.getAttribute('id');
      var url = item.getAttribute('url');
      console.log(jsonpHost, apiUrl);
      (0, _appAuth.appClick)({
        name: name,
        id: id,
        url: url,
        item: item,
        target: '_blank',
        hosturl: jsonpHost,
        apiUrl: apiUrl
      });
    });
  };

  for (var i = 0; i < len; i++) {
    _loop(i);
  }
};

var searchTemplate = "\n<% for(var i = 0; i < this.length; i++) { \n  var item = this[i];\n%>\n<li class=\"app-list-column\">\n  <dl class=\"column-box\">\n    <dt class=\"title\"><% item.kind %></dt>\n    <% for(var j = 0; j < item.items.length; j++) {\n      var sub = item.items[j];\n    %>\n    <dd class=\"item-list\" url=\"<% sub.url %>\" title=\"<% sub.name %>\" id=\"<% sub.id %>\">\n      <span><% sub.name %></span>\n    </dd>\n    <%\n    }\n    %>\n  </dl>\n</li> \n<%\n}\n%>";

var renderSearchData = function renderSearchData(data, apiUrl, jsonpHost) {
  var appListDom = document.getElementById('app-list');

  if (appListDom) {
    appListDom.innerHTML = (0, _utils.templateRender)((0, _utils.templateFilter)(searchTemplate), data);
  }

  hideLoader(); // 隐藏loading

  addEvent(apiUrl, jsonpHost); // 添加事件
}; // 获取应用数据


var getAllAppsData = function getAllAppsData(apiUrl, jsonpHost) {
  var searchContainer = document.querySelector('.ebgnav__app_search-container');

  if (!searchContainer) {
    document.body.insertAdjacentHTML('afterbegin', dom);
  }

  showLoader(); // 显示Loading
  // 先从sessionStorage里取

  appDatas = JSON.parse(sessionStorage.getItem('searchData')) || {};

  if (appDatas && appDatas.classifies) {
    hideLoader();
    showSearchContainer(apiUrl, jsonpHost);
  } else {
    var url = apiUrl.menus + '?t=' + new Date().getTime();
    (0, _http.default)({
      url: jsonpHost + url,
      jsonp: 'jsonp',
      data: {
        isSaas: true
      },
      success: function success(res) {
        appDatas = res.apps[0];
        sessionStorage.setItem('searchData', JSON.stringify(appDatas)); // 临时存储数据

        showSearchContainer(apiUrl, jsonpHost);
      },
      error: function error(err) {
        console.log(err);
        hideLoader();
      }
    });
  }
};

exports.getAllAppsData = getAllAppsData;

/***/ }),

/***/ "./src/components/user-setting/index.js":
/*!**********************************************!*\
  !*** ./src/components/user-setting/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderUserSetting = void 0;

var _utils = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");

var _http = _interopRequireDefault(__webpack_require__(/*! ../../utils/http */ "./src/utils/http.js"));

// import { renderElement } from '../search/index'
var activeItem;
var userSettingList; // 渲染未读消息

var renderMessageUnreadNum = function renderMessageUnreadNum(unreadNum) {
  // debugger
  unreadNum = Number(unreadNum); // 消息数量，防止传进来的是个字体串

  var elMse = (0, _utils.$)('#ebgnav-messageUnreadNum'); // 判断是否有未读消息

  if (!unreadNum) {
    // 如果没有未读消息，并且红点dom存在，则隐藏红点dom
    if (elMse) elMse.style.display = 'none';
    return false;
  } // 有未读消息，则判断下红点dom是否存在，不存在则创建


  if (!elMse) {
    // 获取到父级元素
    var ele = (0, _utils.$)('#ebgnav-inav-message'); // 往父级元素插入红点dom

    ele && ele.insertAdjacentHTML('afterbegin', "<span class=\"ebginav-message\" id=\"ebgnav-messageUnreadNum\">".concat(unreadNum, "</span>")); // $('#ebgnav-messageUnreadNum').style.display = 'inline-block'
  } else {
    // 显示红点
    elMse.innerHTML = unreadNum;
    elMse.style.display = 'inline-block';
  }
}; // 渲染用户中心setting列表


var renderUserSetting = function renderUserSetting(data, base) {
  if (data && data.settings) {
    userSettingList = document.getElementById('user-setting-list');
    userSettingList.innerHTML = renderSettingDom(data.settings);
    settingEvent(base.hosturl); // dom渲染完成后，添加事件

    getMessage(base.hosturl); // 获取未读消息红点数量

    setTimeout(function () {
      setIdentity(data.identityList); // 默认派发事件，告诉当前选中的身份
    }, 1000);
  }
};

exports.renderUserSetting = renderUserSetting;

var renderSettingDom = function renderSettingDom(data) {
  var dom = '';
  data.forEach(function (item) {
    if (item.key === 'user-logout') return false;
    dom += "\n    <li class=\"clearfix personal-center ebgnav-".concat(item.key, "-list\" url=\"").concat(item.url, "\">\n      <a href=\"javascript:;\">\n        <span class=\"ebgnav-left\"><i class=\"ebginav ").concat(item.key, "\"></i><span class=\"name\">").concat(item.name, "</span></span>\n        <span class=\"ebgnav-right\" id=\"ebgnav-").concat(item.key, "\"><i class=\"ebginav ebginav inav-user-right\"></i></span>\n      </a>\n    </li>\n    ");
  });
  return dom;
}; // 添加消息和个人中心跳转事件


var settingEvent = function settingEvent(url) {
  var li = userSettingList.getElementsByTagName('li');

  var _loop = function _loop(i) {
    var item = li[i];
    item.addEventListener('click', function () {
      emitEvent(item, url);
    });
  };

  for (var i = 0; i < li.length; i++) {
    _loop(i);
  }
}; // 消息和个人中心跳转事件


var emitEvent = function emitEvent(item, hosturl) {
  var url = item.getAttribute('url');
  console.log(url.indexOf('http'));
  url = url.indexOf('http') !== -1 ? url : "".concat(hosturl).concat(url);
  url && window.open(url);
}; // 身份切换下拉菜单派发全局事件 （导航加载完成，这里是默认派发事件，无需用户点击）


var setIdentity = function setIdentity(data) {
  if (!(Array.isArray(data) && data.length)) return false;
  var portal = document.getElementById('workbench');
  if (!portal) return false;
  var a = portal.getElementsByTagName('a')[0];
  if (!a) return false;
  activeItem = getDefaultActive(data); // 获取当前选中的身份标签

  if (activeItem) {
    window.ebgnavigation.emit('changeIdentity', activeItem);
  } // 临时隐藏身份切换
  // a.insertAdjacentHTML(
  //   'beforeend',
  //   `<span class="header-portal-tag header-tag" id="header-portal-tag">${activeItem.name}</span>`
  // )
  // 当前身份列表小于2个，就不渲染（>=2才能身份切换）
  // data.length > 1, 暂时隐藏


  if (false) {}
}; // 获取当前选中的身份标签


var getDefaultActive = function getDefaultActive(data) {
  var active;
  active = JSON.parse(sessionStorage.getItem('identityActive'));

  if (!active) {
    active = data[0];
  }

  return active;
}; // 身份切换下拉菜单派发全局事件


var emitIdentityEvent = function emitIdentityEvent(identityLi) {
  Array.from(identityLi).forEach(function (el) {
    el.addEventListener('click', function (e) {
      var obj = getAttributes(el.attributes);
      if (activeItem.name === obj.name) return false; // 如果点击的是自身，就直接return

      e.preventDefault();
      sessionStorage.setItem('identityActive', JSON.stringify(obj)); // 将选中的标签保存到sessionStorage里

      showActiveName(obj);
      window.ebgnavigation.emit('changeIdentity', obj);
    });
  });
  return true;
};

var renderUlHtml = function renderUlHtml(el, data) {
  if (!el) return false;
  var dom = '';
  data.forEach(function (item) {
    dom += "<li identity=\"".concat(item.identity, "\" phase=\"").concat(item.phase, "\" name=\"").concat(item.name, "\">\u95E8\u6237<span class=\"phase\">").concat(item.name, "</span></li>");
  });
  el.insertAdjacentHTML('beforeend', "<ul class=\"dropdown-identity-ul\" id=\"dropdown-identity-ul\">".concat(dom, "</ul>"));
  var identityUl = document.getElementById('dropdown-identity-ul');
  var identityLi = identityUl.getElementsByTagName('li');
  emitIdentityEvent(identityLi); // 对外派发事件
};

var getAttributes = function getAttributes(attr) {
  if (!attr) return false;
  var obj = {};
  Array.from(attr).forEach(function (item) {
    obj[item.name] = item.value;
  });
  return obj;
};

var showActiveName = function showActiveName(data) {
  var tag = document.getElementById('header-portal-tag');
  activeItem = data;
  tag.innerHTML = data.name;
};
/**
 * 设置未读消息
 * @param {*} mesArray 各种类型的未读消息
 */


var setMessageUnreadNum = function setMessageUnreadNum(mesArray) {
  console.log('setMessageUnreadNum', mesArray);

  if (mesArray && mesArray.length > 0) {
    var _unreadNum = 0;
    mesArray.forEach(function (item) {
      _unreadNum += item.unreadNum;
    });
    renderMessageUnreadNum(_unreadNum); // 渲染消息红点数量
  }
}; // 获取消息


var getMessage = function getMessage(hosturl) {
  // 未读消息
  (0, _http.default)({
    type: 'GET',
    jsonp: 'jsonpCallback4',
    url: hosturl + '/desktop/backend/navigation/getMessageUnreadNum',
    data: {
      messagesTypes: '1,2,3,4'
    },
    success: function success(res) {
      console.log('getMessageUnreadNum success res', res);
      setMessageUnreadNum(res);
    },
    error: function error(err) {
      console.log('getMessageUnreadNum error res', err);
    }
  });
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var utils = _interopRequireWildcard(__webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js"));

var old = _interopRequireWildcard(__webpack_require__(/*! ./utils/old */ "./src/utils/old.js"));

var _template = _interopRequireDefault(__webpack_require__(/*! ./template */ "./src/template.js"));

var _http = _interopRequireDefault(__webpack_require__(/*! ./utils/http */ "./src/utils/http.js"));

var _oldNav = _interopRequireDefault(__webpack_require__(/*! ./oldNav */ "./src/oldNav.js"));

var _index = __webpack_require__(/*! ./components/privacy/index */ "./src/components/privacy/index.js");

var _appAuth = __webpack_require__(/*! ./utils/app-auth */ "./src/utils/app-auth.js");

var _index2 = __webpack_require__(/*! ./components/search/index */ "./src/components/search/index.js");

var _logout = __webpack_require__(/*! ./utils/logout */ "./src/utils/logout.js");

var _feedback = __webpack_require__(/*! ./utils/feedback */ "./src/utils/feedback.js");

var _index3 = __webpack_require__(/*! ./components/user-setting/index */ "./src/components/user-setting/index.js");

var _img = __webpack_require__(/*! ./utils/img */ "./src/utils/img.js");

var _index4 = _interopRequireDefault(__webpack_require__(/*! ./components/guidance/index */ "./src/components/guidance/index.js"));

/*
 * @Desc: 统一导航SDK
 * @Author: jhxia
 * @Date: 2020-07-07 12:36:12
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-09-07 14:23:46
 */

/**
 * 更新日志：
 * 1.0.0 基础渲染数据功能 @20200707
 * 1.0.1 增加动态渲染资源位、动态设置高亮、菜单项自定义事件等功能 @20200904
 * 1.0.2 增加用户隐私、应用搜索、部分接口改造、门户身份切换，集成用户退出，右则浮动菜单等功能。
 */
// import '@babel/polyfill'
// 老导航
// 用户隐私
// 应用权限
// 搜索
// 退出
// 右侧浮动菜单
// 渲染右侧用户中心相关模块
// 图片base64地址
// import NavBarError from './utils/NavBarError'
// 兼容ie
if (!window.console) {
  window.console = {
    log: function log(msg) {},
    err: function err(msg) {}
  };
}

if (typeof Object.assign !== 'function') {
  Object.assign = function (target) {
    'use strict';

    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];

      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }

    return target;
  };
}
/**
 *.ebgnav-secondary-navlist > ul > li {
  min-width: 120px;
  position: relative;
  float: left;
}
 */


var menuMinWidth = 120; // 涉及到了css修改
// const MENU_APPLIST = 1 // 应用菜单
// const MENU_PRIMARYLIST = 2 // 一级菜单
// const MENU_SECONDLIST = 3 // 二级菜单
// const MENU_SETTINGLIST = 4 // 设置菜单
// const MENU_ROLELIST = 5 // 设置角色菜单

var realJsonpHost = '';
var apiPrefix = '/desktop/backend/api/portal'; // 老导航逻辑需要的数据（具体用处不详）

var apiUrl = {
  navbar: apiPrefix + '/navbar.do',
  menus: apiPrefix + '/menus.do',
  forceTodo: apiPrefix + '/force_todo.do',
  message: '/openapi/site/message.do',
  loginStatu: '/desktop/backend/login/getLoginStatus',
  appStatus: '/desktop/backend/appInfo/status',
  iflytekCollectorConfig: '/desktop/backend/get/iflyCollectorConfig.do',
  appEnterable: '/desktop/backend/indexPage/appEnterable.do',
  navMessage: '/desktop/appMessage/#/?messageTypeId=' // 配置参数

};
var config = {
  type: 'platform',
  // platform 平台 application 应用
  theme: '',
  primaryNav: {
    platformLogo: '',
    platformName: '',
    platformIcon: '',
    platformNavList: [],
    appNavList: [],
    appList: [],
    appName: '',
    appLogo: ''
  },
  secondaryNav: {},
  operation: {
    roleList: []
  } // 模板缓存

};
var tpl = {
  baseTemp: utils.templateFilter(_template.default.getBaseTemplate),
  primaryTemp: utils.templateFilter(_template.default.getPrimaryTemplate),
  listTemp: utils.templateFilter(_template.default.getListTemplate),
  moreTemp: utils.templateFilter(_template.default.getMoreTemplate),
  secondaryNameTemp: utils.templateFilter(_template.default.getSecondaryNameTemplate),
  platformLogoTemp: utils.templateFilter(_template.default.getPlatformLogoTemplate),
  applicationLogoTemp: utils.templateFilter(_template.default.getApplicationLogoTemplate),
  appListTemp: utils.templateFilter(_template.default.getAppListTemplate),
  appIconListTemp: utils.templateFilter(_template.default.getAppIconListTemplate),
  navUserTemp: utils.templateFilter(_template.default.getNavUserTemplate),
  detailUserTemp: utils.templateFilter(_template.default.getUserinfoTemplate),
  loginBtnTemp: utils.templateFilter(_template.default.getLoginBtnTemplate),
  settingListTemp: utils.templateFilter(_template.default.getSettingListTemplate) // 基础参数

};
var base = {
  hosturl: '',
  // hosturl: 'http://udptest.ledc.changyan.cn/',
  defaultNavList: [],
  platformNavList: [],
  noLoginShow: 1,
  themeList: [],
  themeDefault: '2',
  theme: '',
  user: {},
  unreadNum: 0,
  applicationsList: [],
  loginstatus: false,
  isGuidance: false,
  defaultAvatar: _img.avatar // 默认头像,当前用户未设置头像时显示

};

var setOptions = function setOptions(options) {
  if (options && (0, _typeof2.default)(options) === 'object') {
    // Object.assign(config, options);
    if (options.type) {
      config.type = options.type;
    }

    if (options.theme) {
      config.theme = options.theme;
    }

    if (options.primaryNav && options.primaryNav.platformLogo) {
      config.primaryNav.platformLogo = options.primaryNav.platformLogo;
    }

    if (options.primaryNav && options.primaryNav.platformName) {
      config.primaryNav.platformName = options.primaryNav.platformName;
    }

    if (options.primaryNav && options.primaryNav.platformIcon) {
      config.primaryNav.platformIcon = options.primaryNav.platformIcon;
    }

    if (options.primaryNav && options.primaryNav.logoLink) {
      config.primaryNav.logoLink = options.primaryNav.logoLink;
    }

    if (options.primaryNav && options.primaryNav.platformNavList) {
      config.primaryNav.platformNavList = options.primaryNav.platformNavList;
    }

    if (options.primaryNav && options.primaryNav.appName) {
      config.primaryNav.appName = options.primaryNav.appName;
    }

    if (options.primaryNav && options.primaryNav.appLogo) {
      config.primaryNav.appLogo = options.primaryNav.appLogo;
    }

    if (options.primaryNav && options.primaryNav.appList) {
      config.primaryNav.appList = options.primaryNav.appList;
    }

    if (options.primaryNav && options.primaryNav.appNavList) {
      config.primaryNav.appNavList = options.primaryNav.appNavList;
    }

    if (options.secondaryNav && options.secondaryNav.secondaryName) {
      config.secondaryNav.secondaryName = options.secondaryNav.secondaryName;
    }

    if (options.secondaryNav && options.secondaryNav.secondaryNavList) {
      config.secondaryNav.secondaryNavList = options.secondaryNav.secondaryNavList;
    }

    if (options.operation && options.operation.settingList) {
      config.operation.settingList = options.operation.settingList;
    }

    if (options.operation && options.operation.roleList) {
      config.operation.roleList = options.operation.roleList;
    }
  } else {// throw new Error('options can not be void');
  }
};
/**
 * 渲染logo区域
 * 区分平台和应用
 */


var renderLogo = function renderLogo() {
  var delOldDom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  console.log('renderLogo', config.type, config.primaryNav); // 删除原来有的class，如果是初始化我们可以选择不做删除动作

  if (delOldDom) {
    utils.deleteDomByClassName('ebgnav-app-logo');
  } // 获取导航配置


  var _theme;

  base.themeList.some(function (item) {
    if (item.id === base.themeDefault) {
      _theme = item;
      return true;
    }
  });

  if (_theme) {
    config.primaryNav.platformLogo = config.primaryNav.platformLogo || _theme.platformLogo;
    config.primaryNav.platformIcon = config.primaryNav.platformIcon || _theme.platformIcon;
    config.primaryNav.logoLink = config.primaryNav.logoLink || _theme.logoLink;
  } // config.primaryNav.platformLogo = base.


  if (config.type === 'application') {
    // 应用logo
    (0, utils.$)('#ebgnav-ebgnavLogobox').insertAdjacentHTML('afterbegin', utils.templateRender(tpl.applicationLogoTemp, {
      logoSrc: config.primaryNav.appLogo || config.primaryNav.platformIcon,
      appName: config.primaryNav.appName ? config.primaryNav.appName : '未设置应用名称',
      logoLink: config.primaryNav.logoLink || 'javascript:;'
    }));
  } else {
    // 平台logo
    (0, utils.$)('#ebgnav-ebgnavLogobox').innerHTML = utils.templateRender(tpl.platformLogoTemp, {
      logoSrc: config.primaryNav.platformLogo,
      name: config.primaryNav.platformName,
      logoLink: config.primaryNav.logoLink || 'javascript:;'
    });
  }
}; // 计算可显示导航数量


var calcPrimaryNumber = function calcPrimaryNumber(primaryNavList, primaryNavWidthMax) {
  if (primaryNavList.length < 1) return false;
  var primaryNavWidth = 0;

  for (var i = 0; i < primaryNavList.length; i++) {
    primaryNavWidth = primaryNavWidth + primaryNavList[i].width;

    if (primaryNavWidth > primaryNavWidthMax) {
      return i;
    }
  }

  return false;
};
/**
 * 渲染一级导航列表
 * 渲染逻辑：
 * 1、先不显示渲染出所有菜单记录菜单宽度，并计算可显示数量
 * 2、根据可显示数量重新渲染，并显示出来
 */


var renderPrimaryNavList = function renderPrimaryNavList(len) {
  // console.log(
  //   'spaceWidth = ',
  //   (document.body.clientWidth || document.documentElement.clientWidth) -
  //     $('.ebgnav-logobox')[0].offsetWidth -
  //     $('.ebgnav-operation')[0].offsetWidth -
  //     112
  // )
  // console.log('renderPrimaryNavList', config.primaryNav.platformNavList)
  // let primaryNavList = config.primaryNav.platformNavList
  var primaryNavList = [];

  if (config.type === 'application') {
    // 应用数据
    primaryNavList = config.primaryNav.appNavList;
  } else {
    /*
      * 平台需要将几处数据合并一起
      * config.primaryNav.platformNavList => 接口menus数据
      * base.platformNavList  => 接口navigationConfig.platformMoudles数据（通过管理后台配置菜单，包括二级菜单）
      * base.defaultNavList 接入方配置的菜单
    */
    primaryNavList = utils.arrUnique(base.defaultNavList.concat(config.primaryNav.platformNavList, base.platformNavList)); // 根据当前页面网址id,匹配高亮的菜单项

    utils.getBrowseUrlIdActiveMenu(primaryNavList);
    config.primaryNav.platformNavList = utils.arrUnique(primaryNavList);
  }

  if (len || len === 0) {
    // 正式渲染
    var renderArray = primaryNavList.slice(0, len - 1);
    (0, utils.$)('#ebgnav-primaryNavList').innerHTML = utils.renderNavbarDom(renderArray); // debugger
    // $('#ebgnav-primaryNavList').innerHTML = utils.templateRender(
    //   tpl.listTemp,
    //   renderArray,
    //   MENU_PRIMARYLIST
    // )
    // 插入更多

    (0, utils.$)('#ebgnav-primaryNavList').insertAdjacentHTML('beforeend', tpl.moreTemp); // setTimeout(()=>{

    var moreData = utils.arrUnique(primaryNavList);
    var renderMoreArray = moreData.slice(len - 1, primaryNavList.length); // $('.more-children')[0].innerHTML = utils.templateRender(
    //   tpl.listTemp,
    //   renderMoreArray,
    //   MENU_PRIMARYLIST
    // )

    (0, utils.$)('.more-children')[0].innerHTML = utils.renderNavbarDom(renderMoreArray);
    utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'render');
    traverseDomArr('#ebgnav-primaryNavList'); // }, 20);
  } else {
    // 存在且大于则渲染
    if (primaryNavList && primaryNavList.length > 0) {
      (0, utils.$)('#ebgnav-primaryNavList').innerHTML = utils.renderNavbarDom(primaryNavList); // debugger
      // $('#ebgnav-primaryNavList').innerHTML = utils.templateRender(
      //   tpl.listTemp,
      //   primaryNavList,
      //   MENU_PRIMARYLIST
      // )

      setTimeout(function () {
        var childrenNode = (0, utils.$)('#ebgnav-primaryNavList').children;

        for (var i = 0; i < primaryNavList.length; i++) {
          var CNode = childrenNode[i];
          primaryNavList[i].width = CNode ? CNode.offsetWidth + 1 : 0;
        }

        var winWidth = document.body.clientWidth || document.documentElement.clientWidth;
        var primaryNavWidthMax = winWidth - (0, utils.$)('.ebgnav-logobox')[0].offsetWidth - 362;
        var index = calcPrimaryNumber(primaryNavList, primaryNavWidthMax);

        if (index !== false && primaryNavList.length !== index) {
          renderPrimaryNavList(index);
        } else {
          utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'render');
        }

        traverseDomArr('#ebgnav-primaryNavList');
      }, 30);
    } else {
      utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'render');
    }
  }
};

var renderPrimaryNavListNew = function renderPrimaryNavListNew(len) {
  var spaceWidth = (document.body.clientWidth || document.documentElement.clientWidth) - (0, utils.$)('.ebgnav-logobox')[0].offsetWidth - (0, utils.$)('.ebgnav-operation')[0].offsetWidth - 112;
  console.log('@@@@@@@@@@@@@@spaceWidth = ', spaceWidth); // 首先获取当前可以显示多少宽度，然后默认设置每个栏目的大小为100px，如果小于这个数，表示我们需要设置more

  console.log('renderPrimaryNavList', config.primaryNav.platformNavList);
  var primaryNavList = config.primaryNav.platformNavList;

  if (config.type === 'application') {
    primaryNavList = config.primaryNav.appNavList;
  } else {
    console.log('base', base);
    primaryNavList = utils.arrUnique(base.defaultNavList.concat(config.primaryNav.platformNavList, base.platformNavList));
    config.primaryNav.platformNavList = primaryNavList;
  }

  var maxPutSize = parseInt(spaceWidth / menuMinWidth, 0); // 除以menuMinWidth判断有多少

  if (len >= maxPutSize) {
    // 正式渲染
    var renderArray = primaryNavList.slice(0, len - 1); // $('#ebgnav-primaryNavList').innerHTML = utils.templateRender(
    //   tpl.listTemp,
    //   renderArray,
    //   MENU_PRIMARYLIST
    // )

    (0, utils.$)('#ebgnav-primaryNavList').innerHTML = utils.renderNavbarDom(renderArray); // 插入更多

    (0, utils.$)('#ebgnav-primaryNavList').insertAdjacentHTML('beforeend', tpl.moreTemp); // setTimeout(()=>{

    var renderMoreArray = primaryNavList.slice(len - 1, primaryNavList.length); // $('.more-children')[0].innerHTML = utils.templateRender(
    //   tpl.listTemp,
    //   renderMoreArray,
    //   MENU_PRIMARYLIST
    // )

    (0, utils.$)('.more-children')[0].innerHTML = utils.renderNavbarDom(renderMoreArray);
    utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'render'); // }, 20);
  } else {
    // 存在且大于则渲染
    if (primaryNavList && primaryNavList.length > 0) {
      // $('#ebgnav-primaryNavList').innerHTML = utils.templateRender(
      //   tpl.listTemp,
      //   primaryNavList,
      //   MENU_PRIMARYLIST
      // )
      (0, utils.$)('#ebgnav-primaryNavList').innerHTML = utils.renderNavbarDom(primaryNavList);
      setTimeout(function () {
        var childrenNode = (0, utils.$)('#ebgnav-primaryNavList').children;

        for (var i = 0; i < primaryNavList.length; i++) {
          var CNode = childrenNode[i];
          primaryNavList[i].width = CNode ? CNode.offsetWidth + 1 : 0;
        }

        var index = calcPrimaryNumber(primaryNavList, spaceWidth);

        if (index !== false && primaryNavList.length !== index) {
          renderPrimaryNavList(index);
        } else {
          utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'render');
        }

        traverseDomArr('#ebgnav-primaryNavList');
      }, 30);
    } else {
      utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'render');
    }
  }
};
/**
 * 渲染应用副列表
 */


var renderAppList = function renderAppList() {
  var delOldDom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  console.log('renderAppList', config.primaryNav.appList); // 删除原来有的class，如果是初始化我们可以选择不做删除动作

  if (delOldDom) {
    utils.deleteDomByClassName('ebgnav-app-list');
  }

  if (config.type === 'application' && config.primaryNav && config.primaryNav.appList && config.primaryNav.appList.length) {
    // 获取当前项
    var appList = config.primaryNav.appList;
    var currentName = '';

    for (var i = 0; i < appList.length; i++) {
      if (appList[i].current) {
        currentName = appList[i].title;
        break;
      }
    } // currentName 如果没有获取到值，就默认取第一位name


    if (!currentName && appList && appList.length) {
      currentName = appList[0].title;
      appList[0].current = true;
    } // $('#ebgnav-ebgnavLogobox').insertAdjacentHTML(
    //   'beforeend',
    //   utils.templateRender(tpl.appListTemp, {
    //     currentName: currentName,
    //     appList: config.primaryNav.appList,
    //     type: MENU_APPLIST
    //   })
    // )
    // 渲染副应用名称


    (0, utils.$)('#ebgnav-ebgnavLogobox').insertAdjacentHTML('beforeend', utils.renderApplicationNavbar(currentName)); // 渲染应用副列表下拉菜单

    renderAppListDropdownList(currentName);
  }
}; // 渲染应用副列表下拉菜单


var renderAppListDropdownList = function renderAppListDropdownList(currentName) {
  var ebgnavAppListSeparatorUl = (0, utils.$)('#ebgnav-app-list-separator-ul');
  ebgnavAppListSeparatorUl && (ebgnavAppListSeparatorUl.innerHTML = '');
  ebgnavAppListSeparatorUl.insertAdjacentHTML('beforeend', utils.renderApplicationNavbarUlList(config.primaryNav.appList)); // 添加事件

  addRenderAppListEvent(currentName);
}; // 应用副列表添加列表点击事件


var addRenderAppListEvent = function addRenderAppListEvent(currentName) {
  var li = document.querySelector('#ebgnav-app-list-separator-ul').children;

  var _loop = function _loop(i) {
    var el = li[i];
    el.addEventListener('click', function () {
      var data = JSON.parse(el.querySelector(".custom_navbar__content_data").innerText);
      if (data.title === currentName) return false;
      commonNavEvent(data, el);
      (0, utils.$)('#ebgnav-app-current-name').innerText = data.title;
      var cruName = '';
      config.primaryNav.appList.forEach(function (sub) {
        if (data.title === sub.title) {
          sub.current = true;
          cruName = sub.title;
        } else {
          sub.current = false;
        }
      });
      renderAppListDropdownList(cruName);
    });
  };

  for (var i = 0; i < li.length; i++) {
    _loop(i);
  }
}; // 导航公共事件派发方法


var commonNavEvent = function commonNavEvent(data, el) {
  // debugger
  // 获取数据
  if (Object.prototype.toString.call(data) !== '[object Object]') {
    data = JSON.parse(el.querySelector(".custom_navbar__content_data").innerText);
  }

  var invalidStr = ['#', 'undefined', 'unll', '#', 'javascript:;'];

  if (data.url && invalidStr.indexOf(data.url) === -1) {
    // data.url 不等于空或者不等于#,说明是一个正常的url，按照正常链接跳转
    window.open(data.url, data.target || '_blank');
  } else {
    if (!data.funcname || invalidStr.indexOf(data.funcname) !== -1) {
      throw new Error('url和funcname不能同时为空,或者值无效，请检查配置数据!');
    }

    window.ebgnavigation.emit(data.funcname, data);
  }
};
/**
 * 渲染应用二级导航名称
 */


var renderSecondaryName = function renderSecondaryName() {
  var delOldDom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  console.log('renderSecondaryName', config.secondaryNav.secondaryName); // 删除原来有的class，如果是初始化我们可以选择不做删除动作

  if (delOldDom) {
    utils.deleteDomByClassName('inav-secondary-name');
  }

  if (config.type === 'application' && config.secondaryNav && config.secondaryNav.secondaryName) {
    (0, utils.$)('#ebgnav-secondaryName').innerHTML = utils.templateRender(tpl.secondaryNameTemp, config.secondaryNav.secondaryName);
    (0, utils.$)('#ebgnav-secondaryName').style.display = 'block';
  } else {
    (0, utils.$)('#ebgnav-secondaryName').style.display = 'none';
  }
};
/**
 * 渲染应用二级导航列表
 * 渲染逻辑：
 * 1、先不显示渲染出所有菜单记录菜单宽度，并计算可显示数量
 * 2、根据可显示数量重新渲染，并显示出来
 */


var renderSecondaryNavList = function renderSecondaryNavList(len) {
  console.log('renderSecondaryNavList', config.secondaryNav.secondaryNavList);
  var secondaryNavList = config.secondaryNav ? config.secondaryNav.secondaryNavList : null;

  if (len || len === 0) {
    // 正式渲染
    // console.log('二级', len);
    var renderArray = secondaryNavList.slice(0, len - 1); // $('#ebgnav-secondaryNavList').innerHTML = utils.templateRender(
    //   tpl.listTemp,
    //   renderArray,
    //   MENU_SECONDLIST
    // )

    (0, utils.$)('#ebgnav-secondaryNavList').innerHTML = utils.renderNavbarDom(renderArray); // 插入更多

    (0, utils.$)('#ebgnav-secondaryNavList').insertAdjacentHTML('beforeend', tpl.moreTemp); // setTimeout(()=>{

    var renderMoreArray = secondaryNavList.slice(len - 1, secondaryNavList.length); // console.log('.more-children', $('.more-children').length);
    // $('.more-children')[
    //   $('.more-children').length - 1
    // ].innerHTML = utils.templateRender(
    //   tpl.listTemp,
    //   renderMoreArray,
    //   MENU_SECONDLIST
    // )

    (0, utils.$)('.more-children')[(0, utils.$)('.more-children').length - 1].innerHTML = utils.renderNavbarDom(renderMoreArray);
    traverseDomArr('#ebgnav-secondaryNavList');
  } else {
    if (config.type === 'application' && secondaryNavList && secondaryNavList.length > 0) {
      // $('#ebgnav-secondaryNavList').innerHTML = utils.templateRender(
      //   tpl.listTemp,
      //   secondaryNavList,
      //   MENU_SECONDLIST
      // )
      (0, utils.$)('#ebgnav-secondaryNavList').innerHTML = utils.renderNavbarDom(secondaryNavList); // 添加事件

      setTimeout(function () {
        var ebgnavSecondaryNavListDom = (0, utils.$)('#ebgnav-secondaryNavList');
        var childrenNode = ebgnavSecondaryNavListDom && ebgnavSecondaryNavListDom.children;

        if (secondaryNavList && secondaryNavList.length && childrenNode && childrenNode.length) {
          for (var i = 0; i < secondaryNavList.length; i++) {
            secondaryNavList[i].width = childrenNode[i].offsetWidth;
          }
        } // eslint-disable-next-line max-len


        var secondaryNavWidthMax = (0, utils.$)('.ebgnav-secondary-warp')[0].offsetWidth - (0, utils.$)('.secondary-name')[0].offsetWidth - 20; // console.log('secondaryNavWidthMax', secondaryNavWidthMax);
        // console.log($('.ebgnav-secondary-warp')[0].offsetWidth, $('.secondary-name')[0].offsetWidth);

        var index = calcPrimaryNumber(secondaryNavList, secondaryNavWidthMax); // console.log('2可以放下', index);

        if (index !== false && secondaryNavList.length !== index) {
          renderSecondaryNavList(index);
        } // 给当前dom添加自定义事件


        traverseDomArr('#ebgnav-secondaryNavList');
      }, 30);
    }
  }
}; // 给当前dom下每个li标签添加事件


var traverseDomArr = function traverseDomArr(el) {
  var parent = document.querySelector(el); // 获取当前dom下面的所有li标签

  var children = parent && parent.querySelectorAll('li');
  if (!children) return false;

  for (var i = 0; i < children.length; i++) {
    traverseNavListEvent(children[i]);
  }
};

var traverseNavListEvent = function traverseNavListEvent(el) {
  el.addEventListener('click', function (e) {
    // 阻止冒泡
    if (e && e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    } else {
      window.event.cancelBubble = true;
    } // 获取当前标签是否有子菜单的状态


    var haschildrenmodules = el.getAttribute('haschildrenmodules');
    /*
      * 当前元素有子下拉菜单，将不执行后面的事件 "1的 2没有"
      * 当前元素下面有ul标签，说明有子菜单，将不执行事件 (自定义配置菜单没有haschildrenmodules字段)
    */

    if (haschildrenmodules === '1' || el.querySelector('ul')) return false;
    var data = JSON.parse(el.querySelector(".custom_navbar__content_data").innerText);
    commonNavEvent(data, el); // 执行事件
  });
};
/**
 * 渲染应用二级导航列表
 * 渲染逻辑：
 * 1、先不显示渲染出所有菜单记录菜单宽度，并计算可显示数量
 * 2、根据可显示数量重新渲染，并显示出来  默认设置一个最小宽度
 */


var renderSecondaryNavListNew = function renderSecondaryNavListNew(len) {
  var secondaryNavWidthMax = (0, utils.$)('.ebgnav-secondary-warp')[0].offsetWidth - (0, utils.$)('.secondary-name')[0].offsetWidth;
  console.log('renderSecondaryNavList', config.secondaryNav.secondaryNavList);
  var secondaryNavList = config.secondaryNav ? config.secondaryNav.secondaryNavList : null;
  var maxPutSize = parseInt(secondaryNavWidthMax / menuMinWidth, 0);

  if (len >= maxPutSize) {
    // 正式渲染
    var renderArray = secondaryNavList.slice(0, len - 1); // $('#ebgnav-secondaryNavList').innerHTML = utils.templateRender(
    //   tpl.listTemp,
    //   renderArray,
    //   MENU_SECONDLIST
    // )

    var a = utils.renderNavbarDom(renderArray);
    (0, utils.$)('#ebgnav-secondaryNavList').innerHTML = a; // 插入更多

    (0, utils.$)('#ebgnav-secondaryNavList').insertAdjacentHTML('beforeend', tpl.moreTemp); // setTimeout(()=>{

    var renderMoreArray = secondaryNavList.slice(len - 1, secondaryNavList.length); // $('.more-children')[
    //   $('.more-children').length - 1
    // ].innerHTML = utils.templateRender(
    //   tpl.listTemp,
    //   renderMoreArray,
    //   MENU_SECONDLIST
    // )

    (0, utils.$)('.more-children')[(0, utils.$)('.more-children').length - 1].innerHTML = utils.renderNavbarDom(renderMoreArray); // }, 20);
  } else {
    if (config.type === 'application' && secondaryNavList && secondaryNavList.length > 0) {
      // $('#ebgnav-secondaryNavList').innerHTML = utils.templateRender(
      //   tpl.listTemp,
      //   secondaryNavList,
      //   MENU_SECONDLIST
      // )
      (0, utils.$)('#ebgnav-secondaryNavList').innerHTML = utils.renderNavbarDom(secondaryNavList);
      setTimeout(function () {
        var childrenNode = (0, utils.$)('#ebgnav-secondaryNavList').children;

        for (var i = 0; i < secondaryNavList.length; i++) {
          secondaryNavList[i].width = childrenNode[i].offsetWidth;
        }

        console.log(config.secondaryNav.secondaryNavList);
        var index = calcPrimaryNumber(secondaryNavList, secondaryNavWidthMax);

        if (index !== false && secondaryNavList.length !== index) {
          renderSecondaryNavList(index);
        } // 给当前dom添加自定义事件


        traverseDomArr('#ebgnav-secondaryNavList');
      }, 30);
    }
  }
};
/**
 * 渲染应用自定义入口
 */


var renderSettingList = function renderSettingList() {
  var delOldDom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  // console.log('renderSettingList', config.operation.settingList)
  // 删除原来有的class，如果是初始化我们可以选择不做删除动作
  if (delOldDom) {
    utils.clearInnerHtmlById('ebgnav-ebgnavSetting');
  }

  if (config.type === 'application' && config.operation && config.operation.settingList && config.operation.settingList.length > 0) {
    (function () {
      // $('#ebgnav-ebgnavSetting').innerHTML = utils.templateRender(
      //   tpl.settingListTemp,
      //   config.operation.settingList,
      //   MENU_SETTINGLIST
      // )
      (0, utils.$)('#ebgnav-ebgnavSetting').innerHTML = utils.renderNavbarDom(config.operation.settingList);
      (0, utils.$)('.ebgnav-operation-setting')[0].style.display = 'block';
      var name = utils.getCurrentName(config.operation.settingList);
      var lis = document.querySelector('#ebgnav-ebgnavSetting');
      var lisChildren = lis.querySelectorAll('li');

      if (lisChildren) {
        var _loop2 = function _loop2(i) {
          var el = lisChildren[i];
          el.addEventListener('click', function () {
            var data = JSON.parse(el.querySelector(".custom_navbar__content_data").innerText);
            commonNavEvent(data, el);
            name = data.title;
            utils.setCurrentName(config.operation.settingList, name);
            renderSettingList();
          });
        };

        for (var i = 0; i < lisChildren.length; i++) {
          _loop2(i);
        }
      }
    })();
  } else {
    (0, utils.$)('.ebgnav-operation-setting')[0].style.display = 'none';
  }
};
/**
 * 渲染应用自定义入口
 */


var renderRolesList = function renderRolesList() {
  var delOldDom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var total = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!config.operation.roleList.length) return false;
  console.log('renderRolesList', config.operation.roleList, name); // 删除原来有的class，如果是初始化我们可以选择不做删除动作

  if (delOldDom) {
    utils.clearInnerHtmlById('ebgnav-ebgnavRoleList');
  }

  if (config.type === 'application' && config.operation && config.operation.roleList && config.operation.roleList.length > 0) {
    // $('#ebgnav-ebgnavRoleList').innerHTML = utils.templateRender(
    //   tpl.listTemp,
    //   config.operation.roleList,
    //   MENU_ROLELIST
    // )
    var ebgnavEbgnavRoleList = (0, utils.$)('#ebgnav-ebgnavRoleList'); // 当前dom可能获取不到，需要等下一个event loop

    if (!ebgnavEbgnavRoleList) {
      if (total > 3) return false;
      setTimeout(function () {
        total++;
        renderRolesList(false, '', total);
      }, 1000);
    } else {
      ebgnavEbgnavRoleList && ((0, utils.$)('#ebgnav-ebgnavRoleList').innerHTML = utils.renderNavbarDom(config.operation.roleList)); // 更新角色的名称

      if (!name) {
        var showCurItem = config.operation.roleList.filter(function (item) {
          return item.current;
        });

        if (showCurItem && showCurItem.length > 0) {
          name = showCurItem[0].name;
        } else {
          // 如果什么都没选中，我们显示提示信息
          name = '请选择身份';
        }
      } else {
        // 解决点击之后收起菜单不生效的问题，如果鼠标还是悬浮在a标签，会收起之后再次展开，这个是正常现象
        (0, utils.$)('#ebgnav-ebgnavRoleList').style.display = 'none';
        setTimeout(function () {
          (0, utils.$)('#ebgnav-ebgnavRoleList').style.display = '';
        }, 300);
      }

      (0, utils.$)('#ebginav-roleName').innerHTML = name;
    }
  }
}; // 用户中心消息和退出点击事件方法


var renderMsgAndLogoutBtn = function renderMsgAndLogoutBtn(data) {
  var meassageUrl, logoutUrl;
  data && data.forEach(function (item) {
    if (item.key === 'inav-user-set') {
      meassageUrl = item.url; // 获取消息中心url
    }

    if (item.key === 'user-logout') {
      logoutUrl = item.url; // 获取退出url
    }
  });
  settingEvent('.personal-center', meassageUrl);
  settingEvent('.ebgnav-logout', logoutUrl);
}; // 添加消息和个人中心跳转事件


var settingEvent = function settingEvent(el, url) {
  var event = (0, utils.$)(el)[0];
  event && event.addEventListener('click', function () {
    if (url) {
      if (el === '.ebgnav-logout') {
        (0, _logout.bindLogout)(url); // 退出
      } else {
        window.open(url);
      }
    }
  });
}; // 显示搜索


var showSearch = function showSearch() {
  (0, _index2.getAllAppsData)(apiUrl, base.hosturl);
}; // 应用访问权限


var addAppEvent = function addAppEvent() {
  var showSearchBtn = document.getElementById('show-search');
  var dom = document.getElementById('ebgnav-defalutApplications');
  var ul = dom.getElementsByTagName('ul')[0];
  var li = ul && ul.getElementsByTagName('li'),
      len = li && li.length;

  if (len) {
    var _loop3 = function _loop3(i) {
      var item = li[i].getElementsByTagName('a')[0];
      var id = item.getAttribute('data-appid'),
          name = item.getAttribute('title'),
          url = item.getAttribute('href'),
          target = item.getAttribute('target'),
          appendParam = item.getAttribute('append-param');

      item.onclick = function (e) {
        e.preventDefault();
        (0, _appAuth.appClick)({
          id: id,
          name: name,
          url: url,
          target: target,
          hosturl: base.hosturl,
          apiUrl: apiUrl,
          appendParam: appendParam
        });
      };
    };

    for (var i = 0; i < len; i++) {
      _loop3(i);
    }
  }

  showSearchBtn.addEventListener('click', showSearch);
};
/**
 * 渲染默认推荐应用
 */


var renderApplications = function renderApplications() {
  console.log('renderApplications', base.applicationsList); // base.applicationsList = [] base.loginstatus

  if (base.applicationsList && base.applicationsList.length > 0) {
    (0, utils.$)('.ebgnav-operation-appentry')[0].style.display = 'block';
    (0, utils.$)('#ebgnav-defalutApplications').innerHTML = utils.templateRender(tpl.appIconListTemp, base.applicationsList);
    utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'render'); // renderSearchDom() // 渲染搜索模块
    // getAllAppsData(apiUrl, base.hosturl) // 获取搜索应用列表
  } else {
    // 渲染暂无数据
    (0, utils.$)('.ebgnav-operation-appentry')[0].style.display = 'block';
    (0, utils.$)('#ebgnav-defalutApplications').innerHTML = "<div class=\"no-app-data\"><img src=\"".concat(_img.noData, "\" /><p class=\"text\">\u7BA1\u7406\u5458\u8FD8\u6CA1\u6709\u8BBE\u7F6E\u5E38\u7528\u5E94\u7528\uFF0C\u8BF7\u7A0D\u7B49~</p></div>");
  }

  addAppEvent(); // 应用访问权限
};
/**
 * 渲染用户信息
 */


var renderUserInfo = function renderUserInfo() {
  console.log('renderUserInfo', base.user);

  if (base.user.userId) {
    (0, utils.$)('#ebgnav-navUserinfo').innerHTML = utils.templateRender(tpl.navUserTemp, base.user);
    (0, utils.$)('#ebgnav-detailUserinfo').innerHTML = utils.templateRender(tpl.detailUserTemp, base.user);
    utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'render');
  }
};
/**
 * 渲染登录按钮
 */


var renderLoginBtn = function renderLoginBtn() {
  (0, utils.$)('.ebgnav-operation-loginbtn')[0].innerHTML = utils.templateRender(tpl.loginBtnTemp, null);
};
/**
 * 渲染设置皮肤
 */


var renderTheme = function renderTheme() {
  console.log('renderTheme', config.theme, base.theme); // 用户没有设置，接口处也没有获取到，则使用默认主题

  var _theme = base.theme || 'default';

  switch (_theme) {
    case 'themeblue':
      utils.handleClass((0, utils.$)('#ebgnav-box'), 'add', 'themeblue');
      utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'themedark');
      utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'themegreen');
      break;

    case 'themedark':
      utils.handleClass((0, utils.$)('#ebgnav-box'), 'add', 'themedark');
      utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'themegreen');
      utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'themeblue');
      break;

    case 'themegreen':
      utils.handleClass((0, utils.$)('#ebgnav-box'), 'add', 'themegreen');
      utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'themeblue');
      utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'themedark');
      break;

    default:
      utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'themegreen');
      utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'themeblue');
      utils.handleClass((0, utils.$)('#ebgnav-box'), 'delete', 'themedark');
  }
};
/**
 *
 * @param {*} type 菜单的类型
 * @param {*} index  菜单点击的index，如果是有二级菜单我们需要做区分 ，此时传递过来的index是一级和二级的组合'2|1'（2 和 3类型都有这种情况）
 * @param {*} url 跳转的url，如果没有，做function事件的发送到应用
 * @param {*} funcName 需要发送给应用处理的事件，由各个应用自行处理
 * @param {*} args  发送应用处理事件带的参数 a=1&b=2 以这样的形式发送出去
 */


function commonClick(type, index, url, funcName, args) {
  var MENU_APPLIST = 1,
      // 应用菜单
  MENU_PRIMARYLIST = 2,
      // 一级菜单
  MENU_SECONDLIST = 3,
      // 二级菜单
  MENU_SETTINGLIST = 4,
      // 设置菜单
  MENU_ROLELIST = 5; // 设置角色菜单

  console.log('type=', type, 'index=', index); // window['testapp'][funcName].apply(null,arguments);

  var config = window.ebgnavigation.config; // window.$eventBus.$emit('myevent','hello world');
  // 1.将appList中的current的flag切换为clickItem，然后渲染,如果点击的就是当前，则什么都不做

  var appList = [];
  var refreshFlag = '';
  var otherParam = '';

  switch (type) {
    case MENU_APPLIST:
      appList = config.primaryNav.appList;
      refreshFlag = 'renderAppList';
      break;

    case MENU_PRIMARYLIST:
      // 一级应用菜单
      if (config.type === 'application') {
        appList = config.primaryNav.appNavList;
      } else {
        appList = config.primaryNav.platformNavList;
      }

      refreshFlag = 'renderPrimaryNavListNew';
      break;

    case MENU_SECONDLIST:
      appList = config.secondaryNav.secondaryNavList;
      refreshFlag = 'renderSecondaryNavListNew';
      break;

    case MENU_SETTINGLIST:
      // 设置切换
      appList = config.operation.settingList;
      refreshFlag = 'renderSettingList';
      break;

    case MENU_ROLELIST:
      appList = config.operation.roleList;
      refreshFlag = 'renderRolesList';
      break;

    default:
      break;
  }

  var parentIndex, childrenIndex;

  if (typeof index === 'string' && index.indexOf('|') !== -1) {
    var indexBuf = index.split('|');
    parentIndex = parseInt(indexBuf[0], 0); // 大的菜单选中

    childrenIndex = parseInt(indexBuf[1], 0); // 小的菜单选中
  } else {
    parentIndex = index;
    childrenIndex = -1; // 表示没有子菜单

    if (type === MENU_ROLELIST) {
      otherParam = appList[index].name; // 获取我们点击之后的名称，我们需要更新界面
    }
  } // if(appList && appList.length>0 && ) {


  if (appList && appList.length > 0) {
    var totalList = appList[parentIndex];
    appList.forEach(function (item) {
      item.current = false;

      if (childrenIndex !== -1 && item.children && item.children.length > 0) {
        item.children.forEach(function (cItem) {
          cItem.current = false;
        });
        item.children[childrenIndex].current = true;
      }
    });
    totalList.current = true;
    console.log('appList = ', JSON.stringify(appList));

    if (refreshFlag) {
      // 对外暴露了一个刷新appList的接口,第一个参数是需要调用的渲染函数，第二个参数是是否强制删除原来的dom
      window.ebgnavigation.handOutFunc(refreshFlag, true, otherParam);
    } // 只有有的时候我们才处理


    if (url && url !== '#') {
      // 做跳转动作，TODO  这里测试了
      window.open(url, '_blank');
    } else if (funcName) {
      // 如果是jsonname我们转换为string，如果不是，我们直接传递
      if (Object.prototype.toString.call(args) === '[object Object]') {
        args = JSON.stringify(args);
      }

      window.ebgnavigation.emit(funcName, args);
    }
  }
}
/**
 * 渲染框架到页面中
 */


var render = function render() {
  console.log('render config', config);
  document.body.insertAdjacentHTML('afterbegin', utils.templateRender(tpl.baseTemp, config));

  if (config.type === 'platform') {
    (0, utils.$)('.ebgnav-secondary')[0].style.display = 'none';
    (0, utils.$)('#ebgnav-isPlatform').style.display = 'none';
  } else {
    (0, utils.$)('#ebgnav-isPlatform').style.display = 'block';

    if (config.secondaryNav && (config.secondaryNav.secondaryName || config.secondaryNav.secondaryNavList && config.secondaryNav.secondaryNavList.length > 0)) {
      (0, utils.$)('.ebgnav-secondary')[0].style.display = 'block';
    } else {
      (0, utils.$)('.ebgnav-secondary')[0].style.display = 'none';
    }
  }

  utils.loadStyle( // 域名需要配置成动态的
  "".concat(base.hosturl, "/ebgnavigation/ebgnavigation.min.css"), // '../lib/ebgnavigation.min.css',
  function () {
    utils.loadStyle('//at.alicdn.com/t/font_1955713_5mmgbrlyhl9.css'); // 渲染应用副列表 (应用导航)

    renderAppList(); // 渲染应用二级导航名称

    renderSecondaryName(); // 齿轮图标下拉菜单(应用导航)

    renderSettingList(); // renderSearch('.ebgnav-operation')

    if (!base.loginstatus) {
      // 渲染登录按钮
      renderLoginBtn();
    } else {
      // 登录之后才渲染角色
      renderRolesList(); // 是否受到其他条件控制，这个暂时还不知道TODO
    }

    utils.loadScriptString(commonClick.toString());
  });
};
/**
 * 防抖
 * @param {*} operate 操作
 * @param {*} delay 延时
 */


var debounce = function debounce(operate, delay) {
  var time = null;
  var timer = null;
  var newTime = null;

  function task() {
    newTime = +new Date();

    if (newTime - time < delay) {
      timer = setTimeout(task, delay);
    } else {
      operate();
      timer = null;
    }

    time = newTime;
  }

  return function () {
    // 更新时间戳
    time = +new Date();

    if (!timer) {
      timer = setTimeout(task, delay);
    }
  };
};

var setThemeLogo = function setThemeLogo(res, id) {
  var data = res.navigationConfig && res.navigationConfig.themes || [];

  if (id && data.length) {
    base.themeDefault = id;
    setThemeConfig(res, data);
  }
};
/**
 * 设置默认皮肤名称
 * @param {*} value 值
 */


var setThemeName = function setThemeName(value) {
  var _theme = 'default'; // 用户设置的主题类型

  if (config.theme) {
    _theme = config.theme;
  } else {
    // 如果用户没有设置主题，则从接口获取主题类型
    switch (value) {
      case '1':
        _theme = 'themedark';
        base.themeDefault = value;
        break;

      case '2':
        _theme = 'default';
        base.themeDefault = value;
        break;

      case '3':
        _theme = 'themeblue';
        base.themeDefault = value;
        break;

      case '4':
        _theme = 'themegreen';
        base.themeDefault = value;
        break;

      default:
        _theme = 'default';
    }
  }

  base.theme = _theme;
  renderTheme(); // 渲染主题
};
/**
 * 设置自定义导航
 * @param {*} list 导航列表
 */


var setPlatformNavList = function setPlatformNavList(list) {
  console.log('setPlatformNavList', list);

  if (list && list.length > 0) {
    var _list = list;
    var newNavList = [];

    for (var i = 0; i < _list.length; i++) {
      var item = {};
      item.title = _list[i].moduleName;
      item.url = _list[i].moduleUrl;
      item.hasChildrenModules = _list[i].hasChildrenModules;

      if (_list[i].childrenModules && _list[i].childrenModules.length > 0) {
        item.children = [];
        var _childrens = _list[i].childrenModules;

        for (var j = 0; j < _childrens.length; j++) {
          item.children[j] = {};
          item.children[j].title = _childrens[j].moduleName;
          item.children[j].url = _childrens[j].moduleUrl;
        }
      }

      newNavList.push(item);
    }

    base.platformNavList = newNavList;
  }

  renderPrimaryNavList();
};
/**
 * 未登录是否显示导航
 * @param {*} flag 1 0
 */
// const setNoLoginShow = (flag) => {
//   console.log('setNoLoginShow', flag)
//   if (flag === '1') {
//     base.noLoginShow = 1
//   } else {
//     base.noLoginShow = 0
//   }
// }

/**
 * 设置皮肤数据
 * @param {*} themelist 皮肤列表
 */


var setThemeConfig = function setThemeConfig(res, themelist) {
  console.log('setThemeConfig', themelist);
  var logoLink = '';
  res.menus && res.menus.some(function (item) {
    if (item.menuKey === 'index') {
      logoLink = item.url;
      return true;
    }
  });

  if (themelist && themelist.length > 0) {
    var _list = themelist;
    var newList = [];

    for (var i = 0; i < _list.length; i++) {
      var item = {};
      item.id = _list[i].id;
      item.name = _list[i].name;
      item.platformLogo = _list[i].platformLogoUrl;
      item.platformIcon = _list[i].appLogoUrl;
      item.logoLink = "".concat(base.hosturl).concat(logoLink);
      newList.push(item);
    }

    base.themeList = newList;
  }

  renderLogo();
};
/**
 * 设置默认应用
 * @param {*} applicationslist 应用列表
 */


var setApplicationsList = function setApplicationsList(data) {
  console.log('setApplicationsList', data.cloudNavApps);

  if (data.cloudNavApps && data.cloudNavApps.length > 0) {
    var _array = [];
    data.cloudNavApps.forEach(function (item) {
      var _item = {};
      _item.appName = item.short_name;
      _item.url = item.url;
      _item.id = item.id;
      _item.src = item.icon;

      _array.push(_item);
    });
    base.applicationsList = _array;
  }

  renderApplications();
};
/**
 * 设置用户信息
 * @param {*} userinfo 用户信息
 */


var setUserInfo = function setUserInfo(userinfo) {
  console.log('setUserInfo', userinfo);

  if (userinfo) {
    base.user.userName = userinfo.name;
    base.user.userPhoto = userinfo.userPhoto || base.defaultAvatar; // 用户未设置头像就用默认头像

    base.user.loginName = userinfo.username;
    base.user.userId = userinfo.id;
    renderUserInfo();
  }
};

var renderAppBtn = function renderAppBtn(data) {
  var count = 0;
  var platform = '';
  data && data.forEach(function (item) {
    if (item.menuKey === 'index' || item.menuKey === 'workbench') {
      count++;
      platform += "<li><a href=\"".concat(base.hosturl).concat(item.url, "\" target=\"_blank\">").concat(item.name, "</a></li>");
    }
  });
  var el = (0, utils.$)('#ebgnav-isPlatform');
  if (el && platform) el.insertAdjacentHTML('afterbegin', "<ul class=\"clearfix ".concat(count > 1 ? 'two' : 'one', "\">").concat(platform, "</ul>"));
};
/**
 * 请求接口获取其他配置
 */


var ajaxGetOtherConfig = function ajaxGetOtherConfig() {
  // 初始化渲染
  // render()
  // 应用列表
  (0, _http.default)({
    type: 'GET',
    jsonp: 'jsonpCallback2',
    data: {
      platformSet: true
    },
    url: base.hosturl + '/desktop/backend/api/portal/navbarConfig',
    success: function success(res) {
      renderSecondaryNavList();

      if (res && res.navigationConfig && res.navigationConfig.positionTheme) {
        // 设置主题
        setThemeName(res.navigationConfig.positionTheme); // 根据主题获取对应的Logo

        setThemeLogo(res, res.navigationConfig.positionTheme);
      }

      config.navbarConfig = res; // 追加menus菜单

      if (res.menus && res.menus.length) {
        var _config$primaryNav$pl;

        (_config$primaryNav$pl = config.primaryNav.platformNavList).push.apply(_config$primaryNav$pl, (0, _toConsumableArray2.default)(res.menus));
      } // 追加带二级菜单的数据(平台配置的导航)


      var pm = res && res.navigationConfig && res.navigationConfig.platformMoudles;
      setPlatformNavList(pm || []); // 以下模块只有登录后才需要加载, 并且需要依赖当前接口返回的数据

      if (base.loginstatus) {
        // 加载feedback模块
        (0, _feedback.setLoadFeedback)(res, base.hosturl); // 隐私协议

        (0, _index.privacy)(res, base.hosturl); // 设置应用 个人门户、平台首页按钮跳转

        res.menus && renderAppBtn(res.menus); // 用户信息设置

        setUserInfo(res.user); // 用户中心消息和退出点击事件方法

        renderMsgAndLogoutBtn(res.settings); // 渲染用户设置信息列表

        (0, _index3.renderUserSetting)(res, base); // 新手指引

        (0, _index4.default)(res.user, base.hosturl); // 获取推荐应用

        ajaxGetDefaultApp();
      }
    },
    error: function error() {
      // 如果走到这里，说明不支持新导航，加载老导航
      utils.removeElement(document.getElementById('ebgnav-box'));
      (0, _oldNav.default)(base.hosturl);
      return false;
    }
  });
};

var ajaxGetDefaultApp = function ajaxGetDefaultApp() {
  (0, _http.default)({
    type: 'GET',
    jsonp: 'jsonpCallback8',
    url: "".concat(base.hosturl, "/desktop/backend/api/portal/navAppVos"),
    success: function success(res) {
      setApplicationsList(res);
    }
  });
};
/**
 * 请求接口获取配置
 */


var ajaxGetConfig = function ajaxGetConfig() {
  // 获取导航主要信息
  ajaxGetOtherConfig();
  render(); // 初始化渲染
};
/**
 * 监听浏览器窗口大小变化并作出响应
 */


var _onresize = function _onresize() {
  var winWidth = document.body.clientWidth || document.documentElement.clientWidth;
  window.addEventListener('resize', debounce(function () {
    console.log('debounce');

    var _winWidth = document.body.clientWidth || document.documentElement.clientWidth;

    if (_winWidth !== winWidth) {
      winWidth = _winWidth; // console.log('宽度发生了变化', _winWidth);
      // renderPrimaryNavListNew()

      renderPrimaryNavList(); // renderSecondaryNavListNew()

      renderSecondaryNavList();
    }
  }, 100), false);
};

function getHiddenProp() {
  var prefixes = ['webkit', 'moz', 'ms', 'o']; // 如果hidden 属性是原生支持的，我们就直接返回

  if ('hidden' in document) {
    return 'hidden';
  } // 其他的情况就循环现有的浏览器前缀，拼接我们所需要的属性


  for (var i = 0; i < prefixes.length; i++) {
    // 如果当前的拼接的前缀在 document对象中存在 返回即可
    if (prefixes[i] + 'Hidden' in document) {
      return prefixes[i] + 'Hidden';
    }
  } // 其他的情况 直接返回null


  return null;
}

function getVisibilityState() {
  var prefixes = ['webkit', 'moz', 'ms', 'o'];

  if ('visibilityState' in document) {
    return 'visibilityState';
  }

  for (var i = 0; i < prefixes.length; i++) {
    if (prefixes[i] + 'VisibilityState' in document) {
      return prefixes[i] + 'VisibilityState';
    }
  } // 找不到返回 null


  return null;
}

var _visibilitychange = function _visibilitychange() {
  var visProp = getHiddenProp();

  if (visProp) {
    // 有些浏览器也需要对这个事件加前缀以便识别。
    var evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
    document.addEventListener(evtname, function () {
      if (document[getVisibilityState()] === 'visible') {
        renderPrimaryNavList();
      }
    }, false);
  }
};

var getJsonpHostUrl = function getJsonpHostUrl(cb) {
  var currentScript = old.getCurrentScript();
  var _src = currentScript.src;
  old.getJsonpHost(_src, null, function (url) {
    if (url) {
      if (window.location.protocol === 'https:' && url.substr(0, 5) === 'http:') {
        // 真实的hosts，为了后续导航头跳转到真正的项目上使用
        realJsonpHost = url;
        console.log('realJsonpHost=', realJsonpHost);
      }
    }

    var hosturl = url.replace(/^http(s?):/, window.location.protocol);
    var isPlatform = !!hosturl; // 强制使用https访问
    // hosturl = hosturl.replace('http://', 'https://')

    base.hosturl = hosturl;

    if (!hosturl) {
      // 根据url的域名请求config判断 TODO:
      base.hosturl = old.getJsonpHostInScript(_src);
      base.loginstatus = false;
    } else {
      // 已登录
      base.loginstatus = true;
    } // 取url最后一位，看是否带/


    var t = base.hosturl.charAt(hosturl.length - 1);
    var len = base.hosturl.length; // 如果带/，统一删除处理

    base.hosturl = t === '/' ? base.hosturl.substring(0, len - 1) : base.hosturl; // TODO 用于显示用户信息，调试专用DELETE
    // base.loginstatus = true

    if (cb && typeof cb === 'function') {
      cb(isPlatform);
    }
  });
};

var changeListCurrentItem = function changeListCurrentItem(list, title) {
  for (var index = 0; index < list.length; index++) {
    var element = list[index];

    if (element.title === title) {
      element.current = true;
    } else {
      element.current = false;
    }
  }
};

var Ebgnavigation =
/*#__PURE__*/
function () {
  function Ebgnavigation(events) {
    (0, _classCallCheck2.default)(this, Ebgnavigation);
    this.name = 'ebgnavigation';
    this.version = '1.0.0';
    this.events = events || {};

    _onresize();

    _visibilitychange();
  }
  /**
   * 订阅者
   * @param {*} name 名称
   * @param {*} cb 回调
   */


  (0, _createClass2.default)(Ebgnavigation, [{
    key: "on",
    value: function on(name, cb) {
      var _this = this;

      ;
      (this.events[name] || (this.events[name] = [])).push(cb);
      return {
        unon: function unon() {
          return _this.events[name] && _this.events[name].splice(_this.events[name].indexOf(cb) >>> 0, 1);
        }
      };
    }
    /**
     * 发布者
     * @param {*} name 名称
     * @param  {...any} args 参数
     */

  }, {
    key: "emit",
    value: function emit(name) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      ;
      (this.events[name] || []).forEach(function (fn) {
        return fn.apply(void 0, args);
      });
    }
    /**
     * 获取配置信息
     */

  }, {
    key: "getPlatform",

    /**
     * 获取平台信息
     */
    value: function getPlatform(cb) {
      getJsonpHostUrl(cb);
    }
    /**
     * 初始化导航方法
     * @param {*} options 初始化参数
     */

  }, {
    key: "init",
    value: function init(options) {
      // ie兼容处理
      var head = document.getElementsByTagName("head")[0];
      var httpEquiv = '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">';

      if (head.innerHTML.indexOf(httpEquiv) === -1) {
        head.insertAdjacentHTML('beforeend', httpEquiv);
      }

      setOptions(options);

      if (!base.hosturl) {
        getJsonpHostUrl(function () {
          // /desktop/backend/login/getLoginStatus
          // 开始进行接口请求
          ajaxGetConfig(); // ajaxGetOtherConfig()
        });
      } else {
        // /desktop/backend/login/getLoginStatus
        // 开始进行接口请求
        ajaxGetConfig(); // ajaxGetOtherConfig()
      }
    }
    /**
     * 5.1、动态设置应用名称
     * @param {*} name  应用名称
     */

  }, {
    key: "setHighlight",
    value: function setHighlight(newConfig) {
      var appNavList = newConfig.appNavList;
      var secondaryNavList = newConfig.secondaryNavList;
      var tempTitle, tempTitleSecond;
      var list = config.primaryNav.appNavList;
      var secondList = config.secondaryNav.secondaryNavList;

      if ((0, _typeof2.default)(appNavList) === 'object') {
        // 设置的是对象,通过title判断对象
        if (appNavList) {
          tempTitle = appNavList.title || '';
        } // 如果有二级应用


        if (secondaryNavList) {
          tempTitleSecond = secondaryNavList.title || '';
        }
      } else if (typeof appNavList === 'number' || typeof secondaryNavList === 'number') {
        // 设置的是索引，因此我们需要修改索引高亮，取消其他
        if (appNavList && appNavList >= list.length) {
          console.error('主应用修改索引长度超过最大长度', list.length);
          return;
        }

        if (secondaryNavList && secondaryNavList >= secondList.length) {
          console.error('二级应用修改索引长度超过最大长度', secondList.length);
          return;
        }

        if (appNavList) {
          tempTitle = list[appNavList].title;
        }

        if (secondaryNavList) {
          tempTitleSecond = secondList[secondaryNavList].title;
        }
      }

      if (tempTitle) {
        changeListCurrentItem(list, tempTitle);
        renderPrimaryNavListNew(list.length);
      }

      if (tempTitleSecond) {
        changeListCurrentItem(secondList, tempTitleSecond);
        renderSecondaryNavListNew();
      }
    }
    /**
     * 5.2、动态设置应用名称
     * @param {*} name  应用名称
     */

  }, {
    key: "setAppName",
    value: function setAppName(name) {
      if (config.type === 'application') {
        // 应用logo
        config.primaryNav.appName = name;
      } else {
        // 平台logo
        config.primaryNav.platformName = name;
      }

      renderLogo(true);
    }
    /**
     * 5.3、动态设置应用筛选
     * @param {*} name  应用名称
     */

  }, {
    key: "setAppList",
    value: function setAppList(applist) {
      if (config.type === 'application') {
        config.primaryNav.appList = applist;
      }

      renderAppList(true);
    }
    /**
     * 5.4、动态设置主导航
     * @param {*} name
     */

  }, {
    key: "setAppNavList",
    value: function setAppNavList(array) {
      if (config.type === 'application' && config.primaryNav && config.primaryNav.appNavList) {
        config.primaryNav.appNavList = array;
      } else {
        base.defaultNavList = array;
      }

      renderPrimaryNavList(); // array.length
    }
    /**
     * 5.5、动态设置次导航名称
     */

  }, {
    key: "setSecondaryName",
    value: function setSecondaryName(name) {
      config.secondaryNav.secondaryName = name;
      renderSecondaryName(true);
    }
    /**
     * 5.6、动态设置次导航
     * @param {*} array 次导航菜单
     */

  }, {
    key: "setSecondaryNavList",
    value: function setSecondaryNavList(array) {
      if (config.secondaryNav && config.secondaryNav.secondaryNavList) {
        config.secondaryNav.secondaryNavList = array;
      }

      renderSecondaryNavList(array.length);
    }
    /**
     * 5.7、动态设置自定义入口
     * @param {*} name
     */

  }, {
    key: "setSettingList",
    value: function setSettingList(array) {
      if (config.type === 'application' && config.operation && config.operation.settingList) {
        config.operation.settingList = array;
      }

      renderSettingList(true);
    } // 隐藏导航栏

  }, {
    key: "hideNavBar",
    value: function hideNavBar() {
      document.getElementById('ebgnav-box').style.display = 'none';
    } // 显示导航栏

  }, {
    key: "showNavBar",
    value: function showNavBar() {
      document.getElementById('ebgnav-box').style.display = 'block';
    }
    /*
     * 对外暴露了一个刷新appList的接口
     */

  }, {
    key: "refreshAppList",
    value: function refreshAppList(flag) {
      renderAppList(flag);
    }
  }, {
    key: "handOutFunc",
    value: function handOutFunc(funcName, param, otherParam) {
      // eslint-disable-next-line no-eval
      eval(funcName + '(param,otherParam);');
    }
  }, {
    key: "appItemClick",
    value: function appItemClick(i) {
      alert(i);
    }
  }, {
    key: "switch",
    value: function _switch() {
      var options = {
        url: 'sdddd2',
        name: 'adsfasdf3'
      };
      this.renderBaseTemp(options);
      this.switchTheme();
    }
  }, {
    key: "switchTheme",
    value: function switchTheme() {
      // $('.ebgnav').item(0).classList.add('red');
      utils.handleClass((0, utils.$)('.ebgnav')[0], 'add', 'red');
      this.emit('changeTheme', 'white');
    }
    /**
     * 可以对外暴露的切换主题
     * @param {*} theme 主题参数支持 'default，themedark，themeblue，themegreen，1，2，3，4'
     */

  }, {
    key: "switchTheme",
    value: function switchTheme(theme) {
      debugger; // 默认default:纯白，themedark:雅黑，themeblue:天蓝

      if (theme !== 'default' && theme !== 'themedark' && theme !== 'themeblue' && theme !== 'themegreen') {
        var type = ['1', '2', '3', '4'];
        var obj = {
          '1': 'themedark',
          '2': 'default',
          '3': 'themeblue',
          '4': 'themegreen'
        };
        var t = type.find(function (item) {
          return item === theme;
        });
        if (!t) return false;
        config.theme = obj[t];
      } else {
        config.theme = theme;
      } // 触发平台下发的换肤操作


      window.ebgnavigation.emit('switchTheme', theme);
      window.ebgnavigation.handOutFunc('renderTheme');
    }
  }, {
    key: "renderBaseTemp",
    value: function renderBaseTemp(options) {
      var baseTemp = utils.templateRender(tpl.baseTemp, options);
      var $ebgnav = (0, utils.$)('.ebgnav').item(0);
      $ebgnav.parentNode.removeChild($ebgnav);
      document.body.insertAdjacentHTML('afterbegin', baseTemp);
    }
  }, {
    key: "config",
    get: function get() {
      return config;
    }
  }]);
  return Ebgnavigation;
}();

var _default = new Ebgnavigation();

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/oldNav.js":
/*!***********************!*\
  !*** ./src/oldNav.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");

/*
 * 加载老导航
 */
var loadScript = function loadScript(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  document.body.appendChild(script);

  if (script.readyState) {
    // IE
    script.onreadystatechange = function () {
      if (script.readyState === 'complete' || script.readyState === 'loaded') {
        script.onreadystatechange = null;
        callback && callback();
      }
    };
  } else {
    // 非IE
    script.onload = function () {
      callback && callback();
    };
  }
};

var loadOldNav = function loadOldNav(hosturl) {
  var body = document.body;

  if (!body) {
    setTimeout(function () {
      loadOldNav(hosturl);
    }, 20);
  }

  (0, _utils.loadStyle)("".concat(hosturl, "/common-static/js/common/common.navbar.css"));
  var url = '//cdn.bootcdn.net/ajax/libs/jquery/1.10.0/jquery.min.js';
  var oldNavUrl = "".concat(hosturl, "/common-static/js/common/common.navbar.js");

  if (!window.jQuery) {
    // 判断下当前页面是否引入的jQuery, 老导航需要依赖jQuery
    loadScript(url, function () {
      console.log('completed');
      loadScript(oldNavUrl);
    });
  } else {
    loadScript(oldNavUrl);
  }
};

var _default = loadOldNav;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 导航整体框架模板
var getBaseTemplate = "\n<div class=\"ebgnav render\" id=\"ebgnav-box\">\n  <div class=\"ebgnav-primary clearfix\">\n    <div class=\"ebgnav-logobox\" id=\"ebgnav-ebgnavLogobox\"></div>\n    <div class=\"ebgnav-primary-navlist\">\n      <ul id=\"ebgnav-primaryNavList\" class=\"clearfix\">\n      </ul>\n    </div>\n    <div class=\"ebgnav-operation\">\n      <ul class=\"clearfix\">\n        <li class=\"ebgnav-operation-setting\">\n          <a href=\"javascript:;\"><i class=\"ebginav inav-setting\"></i></a>\n          <ul class=\"children\" id=\"ebgnav-ebgnavSetting\">\n          </ul>\n        </li>\n        <li class=\"ebgnav-operation-appentry\">\n          <a href=\"javascript:;\"><i class=\"ebginav inav-app-entry\"></i></a>\n          <div class=\"ebgnav-appentry-box\">\n            <div class=\"ebgnav-appentry-application\" id=\"ebgnav-isPlatform\">\n            </div>\n            <div class=\"ebgnav-appentry-search\" style=\"display:none;\">\n              <input type=\"text\" placeholder=\"\u67E5\u627E\u5E94\u7528\" class=\"search-keyword\">\n              <button class=\"search-button\"><i class=\"ebginav inav-search\"></i></button>\n            </div>\n            <div class=\"ebgnav-appentry-list\" id=\"ebgnav-defalutApplications\">\n            </div>\n            <div class=\"ebgnav-appentry-btnmore\">\n              <a id=\"show-search\" href=\"javascript:;\">\u66F4\u591A\u5E94\u7528</a>\n            </div>\n          </div>\n        </li>\n        <li class=\"ebgnav-operation-userinfo\">\n          <a href=\"javascript:;\" class=\"userinfo-link\" id=\"ebgnav-navUserinfo\">\n          </a>\n          <div class=\"ebgnav-userinfo-box\">\n            <div class=\"ebgnav-userinfo-userinfo\" id=\"ebgnav-detailUserinfo\" >\n            </div>\n            <ul class=\"ebgnav-userinfo-list\" id=\"user-setting-list\">\n              <li class=\"clearfix ebgnav-userinfo-list-role\" style=\"display: none\">\n                <a href=\"javascript:;\">\n                  <span class=\"ebgnav-left\">\n                    <i class=\"ebginav inav-switch-identity\"></i>\n                    \u8EAB\u4EFD\u5207\u6362\n                  </span>\n                  <span class=\"ebgnav-right\">\n                    <em class=\"ebginav-identity\" id=\"ebginav-roleName\"><%this.currentName%></em>\n                    <i class=\"ebginav inav-user-right\">\n                    </i>\n                  </span>\n                </a>\n                <ul class=\"children ebgnav-dentity-list\" id=\"ebgnav-ebgnavRoleList\">\n                </ul>\n              </li>\n              <li class=\"clearfix personal-center\" style=\"display: none\">\n                <a href=\"javascript:;\">\n                  <span class=\"ebgnav-left\">\n                    <i class=\"ebginav inav-user-center\"></i>\n                    \u4E2A\u4EBA\u4E2D\u5FC3\n                  </span>\n                  <span class=\"ebgnav-right\">\n                    <i class=\"ebginav inav-user-right\"></i>\n                  </span>\n                </a>\n              </li>\n              <li class=\"clearfix message\" style=\"display: none\">\n                <a href=\"javascript:;\">\n                  <span class=\"ebgnav-left\">\n                    <i class=\"ebginav inav-message-center\"></i>\n                    \u6D88\u606F\u4E2D\u5FC3\n                  </span>\n                  <span class=\"ebgnav-right\">\n                    <em class=\"ebginav-message\" id=\"ebgnav-messageUnreadNum\">8</em>\n                    <i class=\"ebginav inav-user-right\"></i>\n                  </span>\n                </a>\n              </li>\n            </ul>\n            <div class=\"ebgnav-logout\">\n              <a href=\"javascript:;\">\u9000\u51FA\u767B\u5F55</a>\n            </div>\n          </div>\n        </li>\n        <li class=\"ebgnav-operation-loginbtn\"></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"ebgnav-secondary\">\n    <div class=\"ebgnav-secondary-warp clearfix\">\n      <div class=\"secondary-name\" id=\"ebgnav-secondaryName\"></div>\n      <div class=\"ebgnav-secondary-navlist\">\n        <ul id=\"ebgnav-secondaryNavList\" class=\"clearfix\">\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>";
var getPrimaryTemplate = "\n<div class=\"ebgnav1\">\n  <button onclick=\"ebgnavigation.switch()\">switch</button>\n</div>"; // 导航菜单列表模板,支持二级菜单

var getListTemplate = "\n<% for(var i = 0; i < this.length; i++) { \n  var item = this[i];\n  var menuType = this.type;\n  var listObj = item.params||\"\";\n  let listFlag = (listObj.indexOf('{') === 0);\n%>\n<li type=\"<% menuType %>\" <% if(item.current) {%>class=\"current\"<% } %> \n <% if(item.property) {%>data-property=\"<% item.property %>\"<% } %>>\n  <% \n  if(item.children && item.children.length != 0){\n    var children = item.children;\n  %>\n  <% if(!item.funcname) {%>\n    <a href='<% item.url%>' target='<% item.target %>'>\n  <% } else {%> \n    <% if(listFlag){%>\n      <a onclick=\"commonClick(<% menuType %>,<% i %>,'<% item.url %>','<% item.funcname %>',<% item.params %>)\">\n    <% } else {%> \n      <a onclick=\"commonClick(<% menuType %>,<% i %>,'<% item.url %>','<% item.funcname %>','<% item.params %>)'\">\n      <% } %>\n  <% } %>\n  <i class=\"ebginav inav-right\"></i>\n  <% item.title %>\n  <i class=\"ebginav inav-down\"></i>\n  </a>\n  <ul class=\"children\">\n    <% \n    for(var j = 0; j < children.length; j++) {\n      var childrenListObj = children[j].params || \"\";\n      let childListFlag = (childrenListObj.indexOf('{') === 0);\n    %>\n    <li <% if(children[j].current) {%>class=\"current\"<% } %> \n      <% if(children[j].property) {%>data-property=\"<% children[j].property %>\"<% } %>>\n        <% if(!children[j].funcname) {%><a href='<% children[j].url%>' target='<% children[j].target %>'>\n      <% } else {%> \n            <% if(childListFlag){%>\n              <a <% if(children[j].current) {%>style='color:<%children[j].currentColor%> !important;' <% } %> \n              onclick=\"commonClick(<% menuType %>,'<% i+\"|\"+j %>', '<% children[j].url %>',\n              '<% children[j].funcname %>',<% children[j].params %>)\" >\n            <% } else {%> \n              <a <% if(children[j].current) {%>style='color:<%children[j].currentColor%> !important;' <% } %> \n              onclick=\"commonClick(<% menuType %>,'<% i+\"|\"+j %>', '<% children[j].url %>',\n              '<% children[j].funcname %>','<% children[j].params %>')\" >\n            <% } %>\n        <% } %>\n          <% children[j].title %>\n      </a>\n    </li>\n    <%\n    }\n    %>\n  </ul>\n  <%\n  } else {\n  %>\n    <% if(item.title) {%>\n      <% if(!item.funcname) {%>\n        <a href='<% item.url%>' target='<% item.target %>'>\n      <% } else {%> \n        <% if(listFlag) {%>\n        <a onclick=\"commonClick(<% menuType %>,<% i %>,'<% item.url %>','<% item.funcname %>',<% item.params %>)\">\n        <% } else {%> \n          <a onclick=\"commonClick(<% menuType %>,<% i %>,'<% item.url %>','<% item.funcname %>','<% item.params %>')\">\n        <% } %>\n      <% } %>\n        <% item.title %>\n      </a>\n    <% } else {%>\n      <% if(!item.funcname) {%><a href='<% item.url%>' target='<% item.target %>'>\n      <% } else {%> \n        <% if(listFlag) {%>\n        <a onclick=\"commonClick(<% menuType %>,<% i %>,'<% item.url %>','<% item.funcname %>',<% item.params %>)\">\n        <% } else {%> \n          <a onclick=\"commonClick(<% menuType %>,<% i %>,'<% item.url %>','<% item.funcname %>','<% item.params %>')\">\n        <% } %>\n      <% } %>\n        <% item.name %>\n      </a>\n    <%}%>\n  <% } %>\n</li>\n<%}%>\n"; // 导航菜单列表模板,支持二级菜单

var getSettingListTemplate = "\n<% for(var i = 0; i < this.length; i++) { \n  var item = this[i];\n  var menuType = this.type;\n  var listObj = item.params||\"\";\n  let listFlag = (listObj.indexOf('{') === 0);\n%>\n<li type=\"<% menuType %>\" <% if(item.current) {%>class=\"current\"<% } %> \n <% if(item.property) {%>data-property=\"<% item.property %>\"<% } %>>\n  <% \n  if(item.children && item.children.length != 0){\n    var children = item.children;\n  %>\n  <% if(!item.funcname) {%>\n    <a href='<% item.url%>' target='<% item.target %>'>\n  <% } else {%> \n    <% if(listFlag){%>\n      <a onclick=\"commonClick(<% menuType %>,<% i %>,'<% item.url %>','<% item.funcname %>',<% item.params %>)\">\n    <% } else {%> \n      <a onclick=\"commonClick(<% menuType %>,<% i %>,'<% item.url %>','<% item.funcname %>','<% item.params %>)'\">\n      <% } %>\n  <% } %>\n  <i class=\"ebginav inav-right\"></i>\n  <% item.title %>\n  <i class=\"ebginav inav-down-setting\"></i>\n  </a>\n  <ul class=\"children-setting\">\n    <% \n    for(var j = 0; j < children.length; j++) {\n      var childrenListObj = children[j].params || \"\";\n      let childListFlag = (childrenListObj.indexOf('{') === 0);\n    %>\n    <li <% if(children[j].current) {%>class=\"current\"<% } %> \n      <% if(children[j].property) {%>data-property=\"<% children[j].property %>\"<% } %>>\n        <% if(!children[j].funcname) {%><a href='<% children[j].url%>' target='<% children[j].target %>'>\n      <% } else {%> \n            <% if(childListFlag){%>\n              <a <% if(children[j].current) {%>style='color:<%children[j].currentColor%> !important;' <% } %> \n              onclick=\"commonClick(<% menuType %>,'<% i+\"|\"+j %>', '<% children[j].url %>',\n              '<% children[j].funcname %>',<% children[j].params %>)\" >\n            <% } else {%> \n              <a <% if(children[j].current) {%>style='color:<%children[j].currentColor%> !important;' <% } %> \n              onclick=\"commonClick(<% menuType %>,'<% i+\"|\"+j %>', '<% children[j].url %>',\n              '<% children[j].funcname %>','<% children[j].params %>')\" >\n            <% } %>\n        <% } %>\n          <% children[j].title %>\n      </a>\n    </li>\n    <%\n    }\n    %>\n  </ul>\n  <%\n  } else {\n  %>\n    <% if(item.title) {%>\n      <% if(!item.funcname) {%>\n        <a href='<% item.url%>' target='<% item.target %>'>\n      <% } else {%> \n            <% if(listFlag) {%>\n            <a onclick=\"commonClick(<% menuType %>,<% i %>,'<% item.url %>',\n            '<% item.funcname %>',<% item.params %>)\">\n            <% } else {%> \n              <a onclick=\"commonClick(<% menuType %>,<% i %>,'<% item.url %>',\n              '<% item.funcname %>','<% item.params %>')\">\n            <% } %>\n      <% } %>\n        <% item.title %>\n      </a>\n    <% } else {%>\n      <% if(!item.funcname) {%><a href='<% item.url%>' target='<% item.target %>'>\n      <% } else {%> \n            <% if(listFlag) {%>\n            <a onclick=\"commonClick(<% menuType %>,<% i %>,'<% item.url %>','<% item.funcname %>',<% item.params %>)\">\n            <% } else {%> \n              <a onclick=\"commonClick(<% menuType %>,<% i %>,'<% item.url %>',\n              '<% item.funcname %>','<% item.params %>')\">\n            <% } %>\n      <% } %>\n        <% item.name %>\n      </a>\n    <%}%>\n  <% } %>\n</li>\n<% \n}\n%>\n"; // 导航菜单列表中的更多模板

var getMoreTemplate = "\n<li>\n  <a href=\"JavaScript:;\">\u66F4\u591A<i class=\"ebginav inav-down\"></i></a>\n  <ul class=\"children more-children\"></ul>\n</li>\n"; // 二级菜单名称模板

var getSecondaryNameTemplate = "\n<i class=\"ebginav inav-secondary-name\"></i><span><% this %></span>\n"; // 平台logo区模板

var getPlatformLogoTemplate = "\n<a href=\"<% this.logoLink %>\" class=\"ebgnav-logo-a\" target=\"_self\">\n  <% if(this.logoSrc) { %>\n    <img class=\"ebgnav-logo-img\" alt=\"\" src=\"<% this.logoSrc %>\">\n  <% } \n  if(this.name) { %>\n  <span class=\"ebgnav-logo-title\"><% this.name %></span>\n  <% } %>\n</a>\n"; // 应用logo区模板

var getApplicationLogoTemplate = "\n<div class=\"ebgnav-app-logo\">\n  <a href=\"<% this.logoLink %>\" target=\"_self\">\n    <span class=\"ebgnav-app-logo-a\"><img src=\"<% this.logoSrc %>\" alt=\"\"></span>\n    <span class=\"ebgnav-app-name\"><% this.appName %></span>\n  </a>\n</div>\n"; // 应用副导航下拉列表模板

var getAppListTemplate = "\n<div class=\"ebgnav-app-list\">\n  <span class=\"ebgnav-app-list-separator\"></span>\n  <a href=\"javascript:;\" class=\"ebgnav-app-list-current\">\n    <span><% this.currentName %></span><i class=\"ebginav inav-down\"></i>\n  </a>\n  <ul class=\"children\">\n    <% \n    for(var i = 0; i < this.appList.length; i++) { \n      var item = this.appList[i];\n      var menuType = this.type;\n      var appObj = item.params || '';\n      let flag = (appObj.indexOf('{') === 0);\n    %>\n    <li \n      <% if(item.current) {%>class=\"current\"<% } %> \n      <% if(item.property) {%>data-property=\"<% item.property %>\"<% } %>>\n      <% if(!item.funcname) {%><a href='<% item.url%>' target='<% item.target %>'><% item.title %></a>\n      <% } else {%> \n        <% if(flag) {%>\n        <a onclick=\"commonClick(<% menuType %>,<% i %>,'<% item.url %>','<% item.funcname %>',\n        <% item.params %>)\">\n        <% } else {%> \n          <a onclick=\"commonClick(<% menuType %>,<% i %>,'<% item.url %>','<% item.funcname %>',\n          <% item.params %>)\">\n          <% } %>\n      <% item.title %></a>\n      <% } %>\n      </li>\n    <%\n    }\n    %>\n  </ul>\n</div>\n"; // 推荐应用带icon列表模板

var getAppIconListTemplate = "\n<ul class=\"clearfix\">\n  <% for(var i = 0; i < this.length; i++) { \n    var item = this[i];\n  %>\n  <li><a href=\"<% item.url %>\" target=\"_blank\" title=\"<% item.appName %>\" data-appid=\"<% item.id %>\">\n    <img src=\"<% item.src %>\" alt=\"<% item.appName %>\">\n    <span><% item.appName %></span>\n  </a></li>\n  <%\n  }\n  %>\n</ul>\n"; // 导航上用户信息模板

var getNavUserTemplate = "\n<span class=\"ebgnav-userface\" id=\"ebgnav-hasNewMsg\">\n<img src=\"<% this.userPhoto %>\" alt=\"<% this.userName %>\">\n</span>\n<span class=\"ebgnav-username\" data-userId=\"<% this.userId %>\"><% this.userName %></span>\n<span class=\"ebgnav-userdown\"><i class=\"ebginav inav-arrow-down\"></i></span>\n"; // 用户详情中的用户信息模板

var getUserinfoTemplate = "\n<span>\n<img src=\"<% this.userPhoto %>\" alt=\"<% this.userName %>\">\n</span>\n<span class=\"ebgnav-userinfo-username text-ellipsis\" title=\"<% this.userName %>\" data-userId=\"<% this.userId %>\"><% this.userName %></span>\n<span class=\"ebgnav-userinfo-loginname text-ellipsis\"><% this.loginName %></span>\n";
var getLoginBtnTemplate = "\n<a href=\"/desktop/login\">\u6B22\u8FCE\u767B\u5F55</a>\n";
var _default = {
  getBaseTemplate: getBaseTemplate,
  getPrimaryTemplate: getPrimaryTemplate,
  getListTemplate: getListTemplate,
  getMoreTemplate: getMoreTemplate,
  getSecondaryNameTemplate: getSecondaryNameTemplate,
  getPlatformLogoTemplate: getPlatformLogoTemplate,
  getApplicationLogoTemplate: getApplicationLogoTemplate,
  getAppListTemplate: getAppListTemplate,
  getAppIconListTemplate: getAppIconListTemplate,
  getNavUserTemplate: getNavUserTemplate,
  getUserinfoTemplate: getUserinfoTemplate,
  getLoginBtnTemplate: getLoginBtnTemplate,
  getSettingListTemplate: getSettingListTemplate
};
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/app-auth.js":
/*!*******************************!*\
  !*** ./src/utils/app-auth.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appClick = void 0;

var _http = _interopRequireDefault(__webpack_require__(/*! ./http */ "./src/utils/http.js"));

var _utils = __webpack_require__(/*! ./utils */ "./src/utils/utils.js");

var strAssert = function strAssert(str) {
  return !(str == null || str.length < 1);
};

var alertErrorIfStrEmpty = function alertErrorIfStrEmpty(str, errorMsg) {
  if (!strAssert(str)) {
    (0, _utils.alertTips)({
      title: '提示',
      msg: errorMsg,
      eventType: 'hideTips',
      btnMsg: '确定'
    });
    return false;
  }

  return true;
}; // 是否可以进入应用


var appEnterable = function appEnterable(storeAppid, hosturl, apiUrl, callback) {
  // 0 敏感数据授权
  var enable = false;
  (0, _http.default)({
    type: 'GET',
    url: hosturl + apiUrl.appEnterable,
    jsonp: 'jsonp',
    async: false,
    // 同步
    data: {
      appId: storeAppid
    },
    success: function success(result) {
      if (result['success'] === true) {
        var data = result['data'];

        if (data['enable'] === false) {
          // 因敏感数据授权缺失，应用不可访问
          var msg = '';

          if (data['isAdmin'] === true) {
            msg = '应用数据权限发生变化，为了保护学校的数据安全，该应用暂时停止访问，请到应用管理-已添加应用-数据权限管理中进行应用数据权限审核。';
          } else {
            msg = '应用数据权限发生变化，为了保护学校的数据安全，该应用暂时停止访问，需要学校管理员审核后才能正常使用，如需使用请联系学校管理员。';
          }

          (0, _utils.alertTips)({
            title: '提示',
            msg: msg,
            eventType: 'hideTips',
            btnMsg: '确定'
          });
        } else {
          // 接口正常且应用敏感数据授权正常
          enable = true;
        }

        if (callback) {
          callback();
        }
      } else {
        (0, _utils.alertTips)({
          title: '提示',
          msg: result['msg'],
          eventType: 'hideTips',
          btnMsg: '确定'
        });
      }
    },
    error: function error() {}
  });
  return enable;
}; // 实现对前端字符串进行GET编码的函数


function appEncodeURL(s) {
  var reg = /^[\u0391-\uFFE5%]+$/;
  var urlLength = s.length;
  var newS = '';

  for (var i = 0; i < urlLength; i++) {
    if (reg.test(s.charAt(i))) {
      newS += escape(s.charAt(i));
    } else {
      newS += s.charAt(i);
    }
  }

  if (newS.indexOf('_app_encoding_tag_=') === -1) {
    if (newS.indexOf('?') >= 0) {
      newS = newS + '&_app_encoding_tag_=1';
    } else {
      newS = newS + '?_app_encoding_tag_=1';
    }
  }

  return encodeURI(newS);
}

var appClick = function appClick(data) {
  if (!alertErrorIfStrEmpty(data.url, '应用正在紧张开发中')) return;
  if (!alertErrorIfStrEmpty(data.name, '应用名称错误')) return;
  if (!alertErrorIfStrEmpty(data.id, '应用标识错误')) return;
  if (!alertErrorIfStrEmpty(data.target, '跳转方式错误')) return;
  (0, _http.default)({
    url: data.hosturl + data.apiUrl.appStatus,
    type: 'post',
    // async: false, //使用同步的方式,true为异步方式
    data: {
      appId: data.id
    },
    // 这里使用json对象
    jsonp: 'jsonp',
    // jsonp
    success: function success(res) {
      if (res['code']) {
        (0, _utils.alertTips)({
          title: '提示',
          msg: res['code'] !== '-5101' ? res['msg'] : '应用未授权,请联系管理员',
          eventType: 'hideTips',
          btnMsg: '确定'
        });
        return;
      }

      if (res['expired'] === 1) {
        // layer.alert('此应用已过期,请联系管理员');
        (0, _utils.alertTips)({
          title: '提示',
          msg: '此应用已过期,请联系管理员',
          eventType: 'hideTips',
          btnMsg: '确定'
        });
        return;
      } // 3) 如果URL不是/开头，则表示第三方应用，判断是否有http:如果没有，则拼接上。


      var isThirdApp = data.url.indexOf('/') !== 0;

      if (isThirdApp) {
        if (!/^http(s)?/gi.test(data.url)) {
          data.url = 'http://' + data.url;
        } // 0 敏感数据授权


        appEnterable(data.id, data.hosturl, data.apiUrl, function () {
          // 1) 获取url，如果没有url，表示应用正在紧张开发中。
          if (!data.url) {
            // layer.alert('应用正在紧张开发中');
            (0, _utils.alertTips)({
              title: '提示',
              msg: '应用正在紧张开发中',
              eventType: 'hideTips',
              btnMsg: '确定'
            });
            return;
          } // appClickCollectorLog($this);


          var windowOpen = window.open(data.url, data.target);

          if (windowOpen === null || typeof windowOpen === 'undefined') {
            (0, _utils.alertTips)({
              title: '提示',
              msg: '弹窗被浏览器拦截，请设置浏览器权限',
              eventType: 'hideTips',
              btnMsg: '确定'
            });
          }
        });
        return;
      } // 是否是append-param


      if (data.appendParam) {
        data.url = '/app/getInto.do?url=' + encodeURIComponent(data.url);
        data.url += '&appendParams=' + data.appendParam;
        window.open(data.url, data.target);
        return;
      } // 4）内部应用跳转需要拼接参数，需要判断应用地址中是否存在参数appendText2Param=false，如果存在则去掉，否则拼接如下内容：
      //   '&_app_encoding_tag_=1&text=' + text + '


      if (data.url.indexOf('&appendText2Param=false') > 0) {
        data.url = data.url.replace('&appendText2Param=false', '');
      } else {
        if (data.url.indexOf('?') === -1) {
          data.url = data.url + appEncodeURL('?_app_encoding_tag_=1&text=' + data.name + '&__time__=' + new Date().getTime());
        } else {
          data.url = data.url + appEncodeURL('&_app_encoding_tag_=1&text=' + data.name + '&__time__=' + new Date().getTime());
        }
      }

      window.open(data.url, data.target);
    }
  });
};

exports.appClick = appClick;

/***/ }),

/***/ "./src/utils/feedback.js":
/*!*******************************!*\
  !*** ./src/utils/feedback.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLoadFeedback = void 0;
var feedbackScript;
var rnAuthScript;

function loadFeedback() {
  var script = document.createElement('script');
  script.setAttribute('src', feedbackScript);

  if (document.body) {
    // 判断body是否存在，如果不存在，等3s后重新判断
    document.body.appendChild(script);
  } else {
    setTimeout(function () {
      loadFeedback();
    }, 3000);
  }
}

function loadRNAuth() {
  var script = document.createElement('script');
  script.setAttribute('src', rnAuthScript);

  if (document.body) {
    // 判断body是否存在，如果不存在，等3s后重新判断
    document.body.appendChild(script);
  } else {
    setTimeout(function () {
      loadRNAuth();
    }, 3000);
  }
}

var setLoadFeedback = function setLoadFeedback(data, jsonpHost) {
  feedbackScript = "".concat(jsonpHost, "/common-static/js/common/feedback.js?t=").concat(new Date().getTime()); // 在线反馈JS地址

  rnAuthScript = "".concat(jsonpHost, "/common-static/js/RNAuth/index.js?t=").concat(new Date().getTime()); // 实名认证地址

  if (data.feedbackUrl) {
    loadFeedback(jsonpHost);
    var feedbackUserInfo = {
      school: data.school,
      user: data.user,
      feedbackTitle: data.feedbackTitle,
      xiaoxinTitle: data.xiaoxinTitle,
      xiaoxinUrl: data.xiaoxinUrl,
      feedbackHelpUrl: data.feedbackHelpUrl,
      feedbackHelpTitle: data.feedbackHelpTitle
    };
    sessionStorage.setItem('feedback-user-info', JSON.stringify(feedbackUserInfo));
  } // 如果没有进行实名认证，切需要实名认证


  if (data.ifRealNameAuthed === false) {
    sessionStorage.setItem('__jsonp_csrf', data.authLink);
    loadRNAuth();
  } // 未登录


  if (!data.user) {}
};

exports.setLoadFeedback = setLoadFeedback;

/***/ }),

/***/ "./src/utils/http.js":
/*!***************************!*\
  !*** ./src/utils/http.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ajax(params) {
  params = params || {};
  params.data = params.data || {}; // 获取随机数

  function random() {
    return Math.floor(Math.random() * 10000 + 500);
  } // 格式化参数


  function formatParams(data) {
    var arr = [];

    for (var name in data) {
      // encodeURIComponent() ：用于对 URI 中的某一部分进行编码
      arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    } // 添加一个随机数参数，防止缓存


    arr.push('v=' + random());
    return arr.join('&');
  } // ajax请求


  function json(params) {
    // 请求方式，默认是GET
    params.type = (params.type || 'GET').toUpperCase(); // 避免有特殊字符，必须格式化传输数据

    params.data = formatParams(params.data);
    var xhr = null; // 实例化XMLHttpRequest对象

    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      // IE6及其以下版本
      // eslint-disable-next-line no-undef
      xhr = new ActiveXObjcet('Microsoft.XMLHTTP');
    } // 监听事件，只要 readyState 的值变化，就会调用 readystatechange 事件


    xhr.onreadystatechange = function () {
      // readyState属性表示请求/响应过程的当前活动阶段，4为完成，已经接收到全部响应数据
      if (xhr.readyState === 4) {
        var status = xhr.status; // status：响应的HTTP状态码，以2开头的都是成功

        if (status >= 200 && status < 300) {
          var response = ''; // 判断接受数据的内容类型

          var type = xhr.getResponseHeader('Content-type');

          if (type.indexOf('xml') !== -1 && xhr.responseXML) {
            response = xhr.responseXML; // Document对象响应
          } else if (type === 'application/json') {
            response = JSON.parse(xhr.responseText); // JSON响应
          } else {
            response = xhr.responseText; // 字符串响应
          } // 成功回调函数


          params.success && params.success(response);
        } else {
          params.error && params.error(status);
        }
      }
    }; // 连接和传输数据


    if (params.type === 'GET') {
      // 三个参数：请求方式、请求地址(get方式时，传输数据是加在地址后的)、是否异步请求(同步请求的情况极少)；
      xhr.open(params.type, params.url + '?' + params.data, true);
      xhr.send(null);
    } else {
      xhr.open(params.type, params.url, true); // 必须，设置提交时的内容类型

      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'); // 传输数据

      xhr.send(params.data);
    }
  } // jsonp请求


  function jsonp(params) {
    // 创建script标签并加入到页面中
    var callbackName = params.jsonp;
    var head = document.getElementsByTagName('head')[0]; // 设置传递给后台的回调参数名

    params.data['callback'] = callbackName;
    var data = formatParams(params.data);
    var script = document.createElement('script'); // let responseData

    head.appendChild(script); // 创建jsonp回调函数

    window[callbackName] = function (json) {
      head.removeChild(script);
      clearTimeout(script.timer);
      window[callbackName] = null; // responseData = json

      params.success && params.success(json);
    }; // 发送请求


    script.src = params.url + '?' + data; // 给script元素添加load和error事件

    document.addEventListener('error', function (event) {
      if (event) {
        var target = event.target;

        if (target === script) {
          script.timer && clearTimeout(script.timer);
          params.error && params.error(Object.assign({
            message: 'js加载出错'
          }, params));
        }
      }
    }, true); // 为了得知此次请求是否成功，设置超时处理

    if (params.time) {
      script.timer = setTimeout(function () {
        window[callbackName] = null;
        head.removeChild(script);
        params.error && params.error({
          message: '超时'
        });
      }, params.time);
    }
  } // 判断是ajax请求还是jsonp请求


  params.jsonp ? jsonp(params) : json(params);
}

var _default = ajax;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/img.js":
/*!**************************!*\
  !*** ./src/utils/img.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noData = exports.avatar = void 0;
// 默认头像
var avatar = 'data:image/png;base64,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'; // 暂无数据

exports.avatar = avatar;
var noData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAItElEQVR4Xu2cfUxTVxTA72tpYVAorRVGQxAlMGYiTmWZZpLgF3GZi8BEcEb/MDHxD/3DxPiVANUmRFMT/zBBjYEYEseiwxATswp+NIYEiKUmKExhYsUBFrCUamSVtm85b96sK/14r/e9UZr3kqaF3nPuub937rn3nntfKSReRAQoImlRGIkACZ1ABCgCJCRAKC56oAiQkAChuOiBIkBCAoTiogdGK0CapiWEtvEiTlGUlxdFQZTw6oEVFRXSkpKSrxISEnJomo4T0nC2uuPi4lw2m63/8OHDv7OV4VKOV4DV1dXr8vLy1uTn588mJSXNuwfSNE1PTU3RQ0NDcV1dXffr6+t5h8gbwOzs7IRjx45Vbdy4UZaXlwc3kTfdXDwiQFnabDZL7t69O3nixIkWQl1zxHlr5OLFixU6nW7Xzp07JRqNhubbUBJ9VqtV2tTU5KytrW1GCPEaE3kFWFtbW1VZWSmNNoBDQ0PSa9euTdfU1PwiAozAFUWAEUDzFREBigARstlsaGpqihBFaPGMjAykVCrnFIoJD3zy5AkaHx9HMplMEIizs7No2bJlaOnSpbEJsK+vD7158wZJJMLMr71eL8rNzUVZWVmxCfD9+/fo3bt3ggJUq9UoPj4+NgEK0m9ZKo2JGMiyrYIUEwESYhUBigAREgeRMF4A2ZhQyQRxGkMIUJxIhwGo1WoTT548+VOwdFaULOV+Jgyn/CdUMzMzP/N6vZBXBICl0ZoPbG5udl64cKHVZrN5tVotNTo66kIIeUiBEiVUDQZDcWJiYq7H4/FQFEXJ5XLp9u3bUXp6OqldvMo/e/YM3bt3D3S6PymWxMfH2y9dumTs6en5QFJZxAArKio+LysrK09KSqLlcrkXFvNjY2N0tAJ8+PAhrJOZ9sK62el0xlsslg6DwWCZF4B6vX5jbm7u8rS0tI9gAAC0Wq0omgFCsgFfdrtdarfbpy5fvtzS09MzGynEiDxwzZo1ykOHDu1QqVSy5ORkZpMmHED4Hl5CXgkJCQGTFdCFwQNzcnKY6iEjBLZMTEzI2tra2puamgYitSsigNXV1d/k5+d/nZ6e/hGnp8IBHBgYEDSdBfWDh2VmZs5h4Q8QQwSAExMTfx48ePAWQiiinUTOAGH/t6amZkdKSkqyWq32QDzBdzRUF4Z54OTkJJJKpZHe7JByHo8HZWdnB0yoBgM4MzNDOZ1OqrGx8VZ7e/toJIZxBrh79+7l27Zt26BWq2chu8wW4MuXL5mMtJAJVQAYaAYQCKBPLJT39/c/0+l0d/8PgJKLFy+WaTSa9EWLFrkBnm9MifZBBMdADApuJnig0+l0NzY2tphMJgdXiJw8cM+ePVlbt279HrouZH5jASC0wWazyQcHB806na5LUIDnzp37LisrK0ej0XzE8BayB2LbHQ6HxOFwvD99+vSvVqv1Ly4QWXtgcXGxZt++fWWpqakShUJBxxJAGMEnJyfl9+/fNzU0NDwVBGBdXV3RkiVLVsLUxb8CNqMwF6P4LhtqEMFe+Pbt2ziHwzG+f//+m1zOz7DywIKCgqQjR45UKJXKBDxx9m8kngeWl5cjjUbDNwMifTAHNZlMzDwx2OVyuajp6Wnp9evXb9+8efMV2wpZATxw4MCqoqKib5VK5Uc8dfGtAHvgyMgI2rRpE2uAMCdUKBRsbZ1Tbnp6mpXsixcvkNlsDrhn7KvA4XDIXr16NXT8+PHfWClmeQhSfuXKlR8RQqmQ/vGNfYG6cqjvA5UvKSkJ27BAjenu7kYWi4X1xBxuMgvbKYjvZ8+ebe3t7R1nAzGsB2o0mmS9Xl9VWFgoSUlJ+c/gwaaCYGWgQdgr1q9fz0kVgGhpaUHJyclMt+RjjY170dOnT+ONRqPx6tWrg2yMCgsQ9jpOnTpVtXnzZqlKpaJhycTHBd23s7OTOUkAXsjlAmA3btxgkgN8AQR7QG9HR4fcZDIZ6+vr/2BjE2uAGzZsYABy6aKhDIBYCuvjsbExVFVVxWmJB2vq1tZWtG7dOibe8mUTOEdnZ+fCAAhdBgYBGB23bNkSMAkQ7AZAamp4eJgZsPi8FhRAPP+COAjnBmH6k5iYGJYHgDMajWjVqlUMdD7iH650QQJ0uVzowYMHDDyIhYEOSOIGAry2tjYEBykLCwt567oLFiD2Qji1ANMS8KaVK1cynoVBQnyz2+0IVhMQM+H83+rVq5mYyVfsW9AAMUSA9/z5cya2wQUeiacWHz58QJCuhxEXcn5w8Q0PdC64Luwb8AAWTCUAFoyy4JXQIBitwRtVKhUDkc+Y5x9wFzRA3BgM0rdx0DAhPC4mAYYdhgUsEBMeKCCfsKoxwDt37hgbGhqieyUStjXzUAADPHPmjNFisYgAud4DESBXYn7lRYAiQEIChOKiB4oACQkQigvmgXq9vrKoqCguLS2NFnIpRdh+YnFo26NHj2QGg6Gtu7sbT2NCntoKlpGGRyrhRWm1WtnRo0d/KCgoWLRixQo3Xyl94tbyrADW3K9fv6Z6e3u958+fv/348eMJhBAcJQOAcAgI9jLg83+A+gMEaPCDOb7PpLp37dr1RWlpaXFGRgYc0OZnU4RnAKTq4HjH8PCw3Gw2P6mrq+v4BM9fLcCD9uOz1v/+tgtN03BOfO6zov+o8Ozdu/fLtWvXFigUCsWnU/mkNkeNvEQiod1ut6uvr+9Fc3OzeXR0FAAFe7CZ0ul0szqdjoHo74HyEIJutVqdCNucHo9HmKem5wkpRVH0zMzMzMjICOzU4/AVzBr6E0DmbF+gGAj9Hl6BIIEQrz9cM0/MAlUbDhxuO46FjI5Q25rwHTOQ+LyH3QaNIiAkpuDBAr8HdRyuQDBQDB97KdYTTB/8P6JD3CQUwsj6jqj+wOaMtsF0cQUYyiZ/iPB3ILD+dZLa4H9jfP/Gn8O9R3yfSI2PuOKgEZqmQ9oEAZ/3SgkURh1AgrbMi6gIkBC7CFAESEiAUPxvrvienOAS6EYAAAAASUVORK5CYII=';
exports.noData = noData;

/***/ }),

/***/ "./src/utils/logout.js":
/*!*****************************!*\
  !*** ./src/utils/logout.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindLogout = void 0;

var _http = _interopRequireDefault(__webpack_require__(/*! ./http */ "./src/utils/http.js"));

var createJsonpLogout = function createJsonpLogout(url, callback) {
  (0, _http.default)({
    url: url,
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'callback',
    crossDomain: true,
    cache: false,
    success: function success(html) {
      if (typeof callback === 'function') {
        callback();
      }
    },
    error: function error(data) {
      if (typeof callback === 'function') {
        callback();
      }
    }
  });
};

var desktop_logout = function desktop_logout(__logoutUrl) {
  var logoutUrls = __logoutUrl.split(';');

  var clearCookieUrl = logoutUrls[0]; // 清除cookie的地址

  logoutUrls = logoutUrls.splice(1, logoutUrls.length);
  var redirectUrl = logoutUrls[logoutUrls.length - 1]; // 后端接口最后一个默认为区平台地址

  var invoked = 0;
  createJsonpLogout(clearCookieUrl, function () {
    logoutUrls.forEach(function (logoutUrl, idx) {
      console.log(logoutUrl, idx);
      createJsonpLogout(logoutUrl);
      invoked++;

      if (invoked === logoutUrls.length - 1) {
        setTimeout(function () {
          window.location.href = redirectUrl;
        }, 1000);
      }
    });
  });
};

var bindLogout = function bindLogout(url) {
  desktop_logout(url);
};

exports.bindLogout = bindLogout;

/***/ }),

/***/ "./src/utils/old.js":
/*!**************************!*\
  !*** ./src/utils/old.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJsonpHostInScript = exports.getCurrentScript = exports.getCookie = exports.getJsonpHost = void 0;

var _http = _interopRequireDefault(__webpack_require__(/*! ./http */ "./src/utils/http.js"));

// import loadOldNav from '../oldNav'
var getCookie = function getCookie(key) {
  var cks = document.cookie.split('; ');

  for (var i = 0; i < cks.length; i++) {
    var kv = cks[i].split('=');
    if (kv[0] === key) return kv[1];
  }

  return '';
};

exports.getCookie = getCookie;

var getJsonpHostInScript = function getJsonpHostInScript(src) {
  var reg = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
  var matches = src.match(reg);
  var url;

  if (matches && matches[1]) {
    url = matches[1] + '://' + matches[3];

    if (matches[4] && matches[4] !== '80') {
      url = url + ':' + matches[4];
    }
  } else {
    url = window.location.protocol + '//' + window.location.host;

    if (window.location.port) {
      url = url + ':' + window.location.port;
    }
  }

  return url;
};

exports.getJsonpHostInScript = getJsonpHostInScript;

var getCurrentScript = function getCurrentScript() {
  if (document.currentScript && document.currentScript.src) {
    var script = document.currentScript;

    if (script.readyState === 'interactive') {
      return script;
    }

    if (script.src && script.src.indexOf('ebgnavigation') !== -1 && script.src.indexOf('http') === 0) {
      return script;
    }
  } // For IE6-9 browsers, the script onload event may not fire right
  // after the script is evaluated. Kris Zyp found that it
  // could query the script nodes and the one that is in "interactive"
  // mode indicates the current script
  // ref: http://goo.gl/JHfFW


  var scripts = document.getElementsByTagName('script');

  for (var i = scripts.length - 1; i >= 0; i--) {
    var _script = scripts[i];

    if (_script.readyState === 'interactive') {
      var interactiveScript = _script;
      return interactiveScript;
    }

    if (_script.src && _script.src.indexOf('ebgnavigation') !== -1 && _script.src.indexOf('http') === 0) {
      return _script;
    }
  }

  return {
    src: ''
  };
}; // 根据script的URL地址获取其host


exports.getCurrentScript = getCurrentScript;

var getJsonpHost = function getJsonpHost(src, tarDomain, callback) {
  // 先从cookie中取
  var serverUrl = getCookie('ecsDesktopServer'); // TODO 提交的时候不要带上去，仅仅调试的时候使用

  serverUrl = 'http://jkqxx.udptest.ledc.changyan.cn';

  if (serverUrl !== '') {
    serverUrl = decodeURIComponent(serverUrl);
    if (callback) callback(serverUrl);
  } else {
    // 从cookie中取不到，则向本一级导航栏所在域名申请获取
    serverUrl = getJsonpHostInScript(src); // 这里要改成https

    var url = (tarDomain === undefined || tarDomain == null || tarDomain.length < 1 ? serverUrl : tarDomain) + '/desktop/backend/login/operInCloud.do'; // 强制使用https访问

    if (url) {// url = url.replace('http://', 'https://')
    }

    (0, _http.default)({
      type: 'GET',
      jsonp: 'jsonpCallbackoperInCloud',
      url: url,
      data: {
        getDesktopServer: true
      },
      success: function success(ret) {
        var data = ret['data'];
        var redirDomain = '';

        if (data != null && data['redirDomain'] != null) {
          redirDomain = data['redirDomain'];
        } // 需要向云平台获取


        if (redirDomain.length > 0) {
          // 向云平台获取
          getJsonpHost(src, redirDomain, function (url) {
            if (url != null && url.length > 0) serverUrl = url;else serverUrl = getJsonpHostInScript(src); // 取不到，则返回默认的

            if (callback) callback(serverUrl);
          });
        } else {
          // 已经获取到，返回即可
          if (callback) callback(data);
        }
      },
      error: function error(err) {
        console.log('getJsonpHost error res', err);
      }
    });
  }
};

exports.getJsonpHost = getJsonpHost;

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadScript = loadScript;
exports.renderApplicationNavbarUlList = exports.getBrowseUrlIdActiveMenu = exports.renderApplicationNavbar = exports.renderNavbarDom = exports.setCurrentName = exports.getCurrentName = exports.removeElement = exports.arrUnique = exports.loadStyleCss = exports.alertTips = exports.clearInnerHtmlById = exports.loadScriptString = exports.deleteDomByClassName = exports.getCookie = exports.getHostUrl = exports.handleClass = exports.$ = exports.templateRender = exports.templateFilter = exports.loadStyle = exports.easyXss = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

/**
 * 简易Xss过滤
 * @param {*} str 被过滤的字符串
 */
var easyXss = function easyXss(str) {
  var lt = /</g;
  var gt = />/g;
  var ap = /'/g;
  var ic = /"/g;
  return str.replace(lt, '&lt;').replace(gt, '&gt;').replace(ap, '&#39;').replace(ic, '&#34;');
};
/**
 * 模板过滤
 * @param {*} template 模板字符串
 * @param {*} data 数据
 */


exports.easyXss = easyXss;

var templateFilter = function templateFilter(template) {
  var tmp = template; // 过滤换行

  tmp = tmp.replace(/\r|\n/g, ''); // 过滤连续空格

  tmp = tmp.replace(/\s+/g, ' '); // 过滤标签间的空格

  tmp = tmp.replace(/\>\s+\</g, '><');
  return tmp;
};

exports.templateFilter = templateFilter;

String.prototype.replaceAll = function (s1, s2) {
  return this.replace(new RegExp(s1, 'gm'), s2);
};
/**
 *处理单引号双引号
 * @param {*} appList 是我们菜单的列表
 */


function formatParams(appList) {
  var type = appList.type;
  var currentName = appList.currentName;
  var newData = JSON.parse(JSON.stringify(appList));
  delete newData.type;
  delete newData.currentName;
  var list = newData; // renderAppList渲染的时候带的参数不是传递过来的数组，特殊处理

  var specialFlag = false;

  if (newData.appList) {
    list = newData.appList;
    specialFlag = true;
  }

  list.forEach(function (item) {
    var parentJson = item.params;

    if (!!parentJson && parentJson.length > 0) {
      item.params = parentJson.replaceAll('"', "'");
    }

    if (item.children && item.children.length > 0) {
      item.children.forEach(function (cItem) {
        var childrenJSonParam = cItem.params;

        if (!!childrenJSonParam && childrenJSonParam.length > 0) {
          cItem.params = childrenJSonParam.replaceAll('"', "'");
        }
      });
    }
  });

  if (specialFlag) {
    return {
      appList: list,
      type: type,
      currentName: currentName
    };
  }

  if (type) {
    list.type = type;
  }

  if (currentName) {
    list.currentName = currentName;
  }

  return list;
}
/**
 * 模板渲染
 * @param {*} tpl 模板
 * @param {*} data 数据
 */


var templateRender = function templateRender(tpl, data, type) {
  var reg = /<%([^%>]+)?%>/g,
      regOut = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
      code = 'var r=[];\n',
      cursor = 0;

  var add = function add(line, js) {
    js ? code += line.match(regOut) ? line + '\n' : 'r.push(' + line + ');\n' : code += line !== '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '';
    return add;
  };

  var match = null;

  while (match = reg.exec(tpl)) {
    add(tpl.slice(cursor, match.index))(match[1], true);
    cursor = match.index + match[0].length;
  }

  add(tpl.substr(cursor, tpl.length - cursor));
  code += 'return r.join("");';

  if (type > 0) {
    data.type = type;
  }

  var newData = data;

  if (data && data.type > 0) {
    newData = formatParams(data);
  } // eslint-disable-next-line no-new-func


  return new Function(code.replace(/[\r\t\n]/g, '')).apply(newData); // return fn
  // eslint-disable-next-line no-new-func
  // try {
  //   const fn = new Function(code.replace(/[\r\t\n]/g, '')).apply(newData)
  //   return fn
  // } catch (error) {
  //   console.log(tpl, data, error)
  // }
  // return template.replace(/\{\{([^\}]*)\}\}/gi, function ($, $1) {
  //   let flatObj = flattenObject(data);
  //   return flatObj[$1] !== undefined ? easyXss(flatObj[$1]) : '';
  // });
};

exports.templateRender = templateRender;

var poll = function poll(node, callback) {
  if (callback.isCalled) {
    return;
  }

  var isLoaded = false;

  if (/webkit/i.test(navigator.userAgent)) {
    // webkit
    if (node['sheet']) {
      isLoaded = true;
    }
  } else if (node['sheet']) {
    // for Firefox
    try {
      if (node['sheet'].cssRules) {
        isLoaded = true;
      }
    } catch (ex) {
      // NS_ERROR_DOM_SECURITY_ERR
      if (ex.code === 1000) {
        isLoaded = true;
      }
    }
  }

  if (isLoaded) {
    // give time to render.
    setTimeout(function () {
      callback();
    }, 1);
  } else {
    setTimeout(function () {
      poll(node, callback);
    }, 1);
  }
};

var styleOnload = function styleOnload(node, callback) {
  // for IE6-9 and Opera
  if (node.attachEvent) {
    // NOTICE:
    // 1. "onload" will be fired in IE6-9 when the file is 404, but in
    // this situation, Opera does nothing, so fallback to timeout.
    // 2. "onerror" doesn't fire in any browsers!
    node.attachEvent('onload', callback);
  } else {
    // polling for Firefox, Chrome, Safari
    setTimeout(function () {
      poll(node, callback);
    }, 0); // for cache
  }
};
/**
 * 动态插入css链接到页面中
 * @param {*} url css链接地址
 */


var loadStyle = function loadStyle(url, cb) {
  var link = document.createElement('link');
  var head = document.getElementsByTagName('head')[0];
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;
  head.appendChild(link);
  styleOnload(link, function () {
    if (typeof cb === 'function') {
      cb(true);
    }
  });
};
/**
 * 加载css工具代码
 * noRendCss 是否渲染js到html中
 * */


exports.loadStyle = loadStyle;

var loadStyleCss = function loadStyleCss(url, cb) {
  var noRendCss = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (noRendCss) {
    cb(true);
    return;
  }

  var link = document.createElement('link');
  var head = document.getElementsByTagName('head')[0];
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;
  head.appendChild(link);
  styleOnload(link, function () {
    if (typeof cb === 'function') {
      cb(true);
    }
  });
};
/**
 * 通过id,class,tagname获取对应得元素
 * @param {*} str 名称#abc/.abc/div
 */


exports.loadStyleCss = loadStyleCss;

var $ = function $(str) {
  var fstr = str.substr(0, 1);

  switch (fstr) {
    case '#':
      return document.getElementById(str.substr(1));

    case '.':
      return document.getElementsByClassName(str.substr(1));

    default:
      return document.getElementsByTagName(str);
  }
};
/**
 * 指定元素添加\删除\修改样式名称
 * @param {*} element 元素节点
 * @param {*} type 类型
 * @param {*} className 新样式名称
 * @param {*} oldClassName  被删除样式名称
 */


exports.$ = $;

var handleClass = function handleClass(element, type, className, oldClassName) {
  var classVal = element.getAttribute('class');

  if (type === 'delete') {
    // 删除
    classVal = classVal.replace(className, '');
  } else if (type === 'add') {
    // 增加
    classVal = classVal.concat(' ' + className);
  } else {
    // 替换
    classVal = classVal.replace(oldClassName, className);
  }

  element.setAttribute('class', classVal);
};

exports.handleClass = handleClass;

var getHostUrl = function getHostUrl() {
  var _hosturl = window.location.protocol + '//' + window.location.host;

  if (window.location.port) {
    _hosturl = _hosturl + ':' + window.location.port;
  }

  return _hosturl;
};

exports.getHostUrl = getHostUrl;

var getCookie = function getCookie(key) {
  var cks = document.cookie.split('; ');

  for (var i = 0; i < cks.length; i++) {
    var kv = cks[i].split('=');
    if (kv[0] === key) return kv[1];
  }

  return '';
};
/**
 * 动态加载点击事件处理方法
 * @param {*} code 需要执行的方法的字符串表达
 */


exports.getCookie = getCookie;

var loadScriptString = function loadScriptString(code) {
  var script = document.createElement('script'); // 创建一个script标签

  script.type = 'text/javascript';

  try {
    // IE浏览器认为script是特殊元素,不能再访问子节点;报错;
    script.appendChild(document.createTextNode(code));
  } catch (ex) {
    script.text = code;
  }

  document.getElementsByTagName('head')[0].appendChild(script);
};
/**
 * 删除需要替换的class
 * @param {*} clsName
 */


exports.loadScriptString = loadScriptString;

var deleteDomByClassName = function deleteDomByClassName(clsName) {
  var paras = document.getElementsByClassName(clsName);

  for (var i = 0; i < paras.length; i++) {
    // 删除元素 元素.parentNode.removeChild(元素);
    if (paras[i] != null) {
      paras[i].parentNode.removeChild(paras[i]);
    }
  }
};
/**
 * 删除需要替换的class
 * @param {*} clsName
 */


exports.deleteDomByClassName = deleteDomByClassName;

var clearInnerHtmlById = function clearInnerHtmlById(id) {
  var paras = document.getElementById(id);
  paras.innerHTML = ''; // 清空
};
/*
  * alert 弹框
*/


exports.clearInnerHtmlById = clearInnerHtmlById;

var alertTips = function alertTips(msg) {
  if (!msg['alertId']) {
    msg['alertId'] = '';
  } else {
    var alertTempList = $('#' + msg['alertId']);

    if (alertTempList && alertTempList.length > 0) {
      return;
    }
  }

  if (!msg['src']) {
    msg['src'] = 'javascript:;';
  }

  var tips = "<div class=\"el-message-box__wrapper\">\n    <div class=\"el-message-box\">\n      <div class=\"el-message-box__header\">".concat(msg.title, "</div>\n      <div class=\"el-message-box__content\">").concat(msg.msg, "</div>\n      <div class=\"el-message-box__btns\">\n        <button class=\"el-message-btn\" id=\"el-message-btn\">\u786E\u5B9A</button>\n      </div>\n    </div>\n  </div>");
  var messageDom = document.getElementsByClassName('el-message-box__wrapper')[0];
  messageDom && document.body.removeChild(messageDom);
  document.body.insertAdjacentHTML('afterbegin', tips);
  document.getElementById('el-message-btn').addEventListener('click', function () {
    var messageDom = document.getElementsByClassName('el-message-box__wrapper')[0];
    document.body.removeChild(messageDom);
  });
};
/**
 * 加载js工具代码
 * noRenderJs 是否渲染js到html中
 * */


exports.alertTips = alertTips;

function loadScript(url, callback) {
  var noRenderJs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (noRenderJs) {
    callback(true);
    return;
  }

  var script = document.createElement('script'),
      fn = callback || function () {};

  script.type = 'text/javascript'; // IE

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        fn();
      }
    };
  } else {
    // 其他浏览器
    script.onload = function () {
      fn();
    };
  }

  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
} // 删除元素

/**
 * 删除元素
 * @param {*} _element 被删除的元素
 */


var removeElement = function removeElement(_element) {
  var _parentElement = _element.parentNode;

  if (_parentElement) {
    _parentElement.removeChild(_element);
  }
}; // 获取current 名称


exports.removeElement = removeElement;

var getCurrentName = function getCurrentName(data) {
  var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var name = '';
  data.some(function (item) {
    if (item.current) {
      name = item.title;
      return true;
    }
  }); // 如果值为空, def判断是否需要取第一位做为默认值

  if (!name && def) name = data[0].title;
  return name;
}; // 设置current 名称


exports.getCurrentName = getCurrentName;

var setCurrentName = function setCurrentName(data, name) {
  if (!name) return '';
  data.forEach(function (item) {
    if (item.title === name) {
      item.current = true;
    } else {
      item.current = false;
    }
  });
}; // 数组去重


exports.setCurrentName = setCurrentName;

var arrUnique = function arrUnique(arr) {
  var obj = {};
  var res = [];
  arr.map(function (item) {
    if (!obj[item.title]) {
      res.push(item);
      obj[item.title] = item.title;
    }
  });
  return res;
}; // 渲染主导航（解决ie浏览器兼容性问题）


exports.arrUnique = arrUnique;

var renderNavbarDom = function renderNavbarDom(data) {
  var dom = '';
  data.forEach(function (item, index) {
    dom += rn(item, index);
  });
  return dom;
}; // 渲染有二级菜单和无二菜单的dom


exports.renderNavbarDom = renderNavbarDom;

var rn = function rn(item, index) {
  var name = item.name || item.title;
  var dom;

  if (item.children) {
    dom = renderApplicationNavbarUlList(item.children);
  }

  var parent = '';

  if (dom) {
    parent = "<li class=\"".concat(item.current ? 'current' : '', "\" hasChildrenModules=\"").concat(item.hasChildrenModules, "\" index=\"").concat(index, "\">\n                <a href=\"javascript:;\">").concat(name, "</a>\n                <span class=\"custom_navbar__content_data\" style=\"display:none\">").concat(JSON.stringify(item), "</span>\n                <ul class=\"children\" index=\"").concat(index, "\">").concat(dom, "</ul>\n              </li>\n              ");
  } else {
    parent = "<li class=\"".concat(item.current ? 'current' : '', "\" hasChildrenModules=\"").concat(item.hasChildrenModules, "\" index=\"").concat(index, "\">\n                <a href=\"javascript:;\">").concat(name, "</a>\n                <span class=\"custom_navbar__content_data\" style=\"display:none\">").concat(JSON.stringify(item), "</span>\n              </li>\n              ");
  }

  return parent;
}; // 渲染application应用二级导航（解决ie浏览器兼容性问题）


var renderApplicationNavbar = function renderApplicationNavbar(currentName) {
  return "<div class=\"ebgnav-app-list\">\n    <span class=\"ebgnav-app-list-separator\"></span>\n    <a href=\"javascript:;\" class=\"ebgnav-app-list-current\">\n      <span id=\"ebgnav-app-current-name\">".concat(currentName, "</span><i class=\"ebginav inav-down\"></i>\n    </a>\n    <ul class=\"children\" id=\"ebgnav-app-list-separator-ul\"></ul>\n    </div>");
};

exports.renderApplicationNavbar = renderApplicationNavbar;

var renderApplicationNavbarUlList = function renderApplicationNavbarUlList(appList) {
  var resDom = '';
  appList && appList.forEach(function (item, index) {
    resDom += "<li\n                class=\"".concat(item.current ? 'current' : '', "\"\n                index=\"").concat(index, "\"\n              >\n                <a href=\"javascript:;\">").concat(item.title, "</a>\n                <span class=\"custom_navbar__content_data\" style=\"display:none\">").concat(JSON.stringify(item), "</span>\n              </li>");
  });
  return resDom;
}; // 根据当前页面栏目地址匹配导航高亮显示


exports.renderApplicationNavbarUlList = renderApplicationNavbarUlList;

var getBrowseUrlIdActiveMenu = function getBrowseUrlIdActiveMenu(navList) {
  var href = window.location.search;
  if (!navList.length || !href) return false;
  /**
   * 获取到参数部分，去除问号，如 ?id=2&menu_id=4b
   * 1、去除? => id=2&menu_id=4b
   * 2、分割字符串 "&" 并取数组中的第一位 => ['id=2', 'menu_id=4b']
   * 3、分割字符串 "id=2" => ['id', '2']
  */

  var _href$slice$split$0$s = href.slice(1).split('&')[0].split('='),
      _href$slice$split$0$s2 = (0, _slicedToArray2.default)(_href$slice$split$0$s, 2),
      id = _href$slice$split$0$s2[0],
      value = _href$slice$split$0$s2[1]; // 判断下最终拿到是否以id开头的数据


  if (!id || id !== 'id' || !value) return false;
  navList.forEach(function (item) {
    if (item.id === value) {
      item.current = true;
    } else {
      item.current = false;
    }
  });
};

exports.getBrowseUrlIdActiveMenu = getBrowseUrlIdActiveMenu;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYmduYXZpZ2F0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9lYmduYXZpZ2F0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ViZ25hdmlnYXRpb24vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL2ViZ25hdmlnYXRpb24vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9lYmduYXZpZ2F0aW9uLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vZWJnbmF2aWdhdGlvbi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2ViZ25hdmlnYXRpb24vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9lYmduYXZpZ2F0aW9uLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL2ViZ25hdmlnYXRpb24vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL2ViZ25hdmlnYXRpb24vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZWJnbmF2aWdhdGlvbi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL2ViZ25hdmlnYXRpb24vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vZWJnbmF2aWdhdGlvbi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL2ViZ25hdmlnYXRpb24vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL2ViZ25hdmlnYXRpb24vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9lYmduYXZpZ2F0aW9uLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL2ViZ25hdmlnYXRpb24vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9lYmduYXZpZ2F0aW9uLy4vc3JjL2NvbXBvbmVudHMvZ3VpZGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWJnbmF2aWdhdGlvbi8uL3NyYy9jb21wb25lbnRzL3ByaXZhY3kvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWJnbmF2aWdhdGlvbi8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9lYmduYXZpZ2F0aW9uLy4vc3JjL2NvbXBvbmVudHMvdXNlci1zZXR0aW5nL2luZGV4LmpzIiwid2VicGFjazovL2ViZ25hdmlnYXRpb24vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWJnbmF2aWdhdGlvbi8uL3NyYy9vbGROYXYuanMiLCJ3ZWJwYWNrOi8vZWJnbmF2aWdhdGlvbi8uL3NyYy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9lYmduYXZpZ2F0aW9uLy4vc3JjL3V0aWxzL2FwcC1hdXRoLmpzIiwid2VicGFjazovL2ViZ25hdmlnYXRpb24vLi9zcmMvdXRpbHMvZmVlZGJhY2suanMiLCJ3ZWJwYWNrOi8vZWJnbmF2aWdhdGlvbi8uL3NyYy91dGlscy9odHRwLmpzIiwid2VicGFjazovL2ViZ25hdmlnYXRpb24vLi9zcmMvdXRpbHMvaW1nLmpzIiwid2VicGFjazovL2ViZ25hdmlnYXRpb24vLi9zcmMvdXRpbHMvbG9nb3V0LmpzIiwid2VicGFjazovL2ViZ25hdmlnYXRpb24vLi9zcmMvdXRpbHMvb2xkLmpzIiwid2VicGFjazovL2ViZ25hdmlnYXRpb24vLi9zcmMvdXRpbHMvdXRpbHMuanMiXSwibmFtZXMiOlsiZ3VpZGFuY2VFbnRyeSIsInVzZXIiLCJob3N0dXJsIiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidHlwZSIsImpzb25wIiwidXJsIiwic3VjY2VzcyIsInJlcyIsInJlbmRlckd1aWRhbmNlIiwiZXJyb3IiLCJndWlkYW5jZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInAxIiwicDIiLCJkb20iLCJvZmZzZXRXaWR0aCIsInVzZXJQaG90b3MiLCJuYW1lIiwiZyIsImJvZHkiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhZGRFdmVudCIsImJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImlubmVyVGV4dCIsInN0eWxlIiwiZGlzcGxheSIsImd1aWRhbmNlQ29tcGxldGUiLCJqdW1wIiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJhcmdlZSIsImRhdGEiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImRvY3VtZW50RWxlbWVudCIsIm92ZXJmbG93WSIsInJlZnVzZSIsImxvZ291dFVybCIsInNldHRpbmdzIiwic29tZSIsImtleSIsInJlbmRlclByaXZhY3kiLCJwcml2YWN5VGlwcyIsInByaXZhY3kiLCJzZW5zaXRpdmVBZ3JlZWQiLCJzc29TZXJ2ZXJVcmwiLCJzaG93TG9hZGVyIiwibG9hZGVyIiwiY2xhc3NOYW1lIiwiaGlkZUxvYWRlciIsImFwcERhdGFzIiwiaGlkZVNlYXJjaENvbnRhaW5lciIsInNlYXJjaCIsInZhbHVlIiwic2hvd1NlYXJjaENvbnRhaW5lciIsImFwaVVybCIsImpzb25wSG9zdCIsInJlbmRlclNlYXJjaERhdGEiLCJjbGFzc2lmaWVzIiwiZmlsdGVyQXBwcyIsImFyciIsIm9iaiIsInNlcmFjaFRleHQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsImtpbmQiLCJpdGVtcyIsInN1YiIsImluZGV4T2YiLCJwdXNoIiwiYXBwVGVybWluYWxTdHIiLCJmYXYiLCJjbG9zZSIsInNlYXJjaEJ0biIsImlucHV0RXZlbnQiLCJvbmNsaWNrIiwiYmluZCIsImRkIiwibGVuIiwiZ2V0QXR0cmlidXRlIiwic2VhcmNoVGVtcGxhdGUiLCJhcHBMaXN0RG9tIiwiaW5uZXJIVE1MIiwiZ2V0QWxsQXBwc0RhdGEiLCJzZWFyY2hDb250YWluZXIiLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsIm1lbnVzIiwiRGF0ZSIsImdldFRpbWUiLCJpc1NhYXMiLCJhcHBzIiwic3RyaW5naWZ5IiwiZXJyIiwiYWN0aXZlSXRlbSIsInVzZXJTZXR0aW5nTGlzdCIsInJlbmRlck1lc3NhZ2VVbnJlYWROdW0iLCJ1bnJlYWROdW0iLCJOdW1iZXIiLCJlbE1zZSIsImVsZSIsInJlbmRlclVzZXJTZXR0aW5nIiwiYmFzZSIsInJlbmRlclNldHRpbmdEb20iLCJzZXR0aW5nRXZlbnQiLCJnZXRNZXNzYWdlIiwic2V0VGltZW91dCIsInNldElkZW50aXR5IiwiaWRlbnRpdHlMaXN0IiwibGkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImVtaXRFdmVudCIsIndpbmRvdyIsIm9wZW4iLCJBcnJheSIsImlzQXJyYXkiLCJwb3J0YWwiLCJhIiwiZ2V0RGVmYXVsdEFjdGl2ZSIsImViZ25hdmlnYXRpb24iLCJlbWl0IiwiYWN0aXZlIiwiZW1pdElkZW50aXR5RXZlbnQiLCJpZGVudGl0eUxpIiwiZnJvbSIsImVsIiwiZ2V0QXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJwcmV2ZW50RGVmYXVsdCIsInNob3dBY3RpdmVOYW1lIiwicmVuZGVyVWxIdG1sIiwiaWRlbnRpdHkiLCJwaGFzZSIsImlkZW50aXR5VWwiLCJhdHRyIiwidGFnIiwic2V0TWVzc2FnZVVucmVhZE51bSIsIm1lc0FycmF5IiwiX3VucmVhZE51bSIsIm1lc3NhZ2VzVHlwZXMiLCJtc2ciLCJPYmplY3QiLCJhc3NpZ24iLCJUeXBlRXJyb3IiLCJpbmRleCIsImFyZ3VtZW50cyIsInNvdXJjZSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm1lbnVNaW5XaWR0aCIsInJlYWxKc29ucEhvc3QiLCJhcGlQcmVmaXgiLCJuYXZiYXIiLCJmb3JjZVRvZG8iLCJtZXNzYWdlIiwibG9naW5TdGF0dSIsImFwcFN0YXR1cyIsImlmbHl0ZWtDb2xsZWN0b3JDb25maWciLCJhcHBFbnRlcmFibGUiLCJuYXZNZXNzYWdlIiwiY29uZmlnIiwidGhlbWUiLCJwcmltYXJ5TmF2IiwicGxhdGZvcm1Mb2dvIiwicGxhdGZvcm1OYW1lIiwicGxhdGZvcm1JY29uIiwicGxhdGZvcm1OYXZMaXN0IiwiYXBwTmF2TGlzdCIsImFwcExpc3QiLCJhcHBOYW1lIiwiYXBwTG9nbyIsInNlY29uZGFyeU5hdiIsIm9wZXJhdGlvbiIsInJvbGVMaXN0IiwidHBsIiwiYmFzZVRlbXAiLCJ1dGlscyIsInRlbXBsYXRlRmlsdGVyIiwiZ2V0QmFzZVRlbXBsYXRlIiwicHJpbWFyeVRlbXAiLCJnZXRQcmltYXJ5VGVtcGxhdGUiLCJsaXN0VGVtcCIsImdldExpc3RUZW1wbGF0ZSIsIm1vcmVUZW1wIiwiZ2V0TW9yZVRlbXBsYXRlIiwic2Vjb25kYXJ5TmFtZVRlbXAiLCJnZXRTZWNvbmRhcnlOYW1lVGVtcGxhdGUiLCJwbGF0Zm9ybUxvZ29UZW1wIiwiZ2V0UGxhdGZvcm1Mb2dvVGVtcGxhdGUiLCJhcHBsaWNhdGlvbkxvZ29UZW1wIiwiZ2V0QXBwbGljYXRpb25Mb2dvVGVtcGxhdGUiLCJhcHBMaXN0VGVtcCIsImdldEFwcExpc3RUZW1wbGF0ZSIsImFwcEljb25MaXN0VGVtcCIsImdldEFwcEljb25MaXN0VGVtcGxhdGUiLCJuYXZVc2VyVGVtcCIsImdldE5hdlVzZXJUZW1wbGF0ZSIsImRldGFpbFVzZXJUZW1wIiwiZ2V0VXNlcmluZm9UZW1wbGF0ZSIsImxvZ2luQnRuVGVtcCIsImdldExvZ2luQnRuVGVtcGxhdGUiLCJzZXR0aW5nTGlzdFRlbXAiLCJnZXRTZXR0aW5nTGlzdFRlbXBsYXRlIiwiZGVmYXVsdE5hdkxpc3QiLCJub0xvZ2luU2hvdyIsInRoZW1lTGlzdCIsInRoZW1lRGVmYXVsdCIsImFwcGxpY2F0aW9uc0xpc3QiLCJsb2dpbnN0YXR1cyIsImlzR3VpZGFuY2UiLCJkZWZhdWx0QXZhdGFyIiwic2V0T3B0aW9ucyIsIm9wdGlvbnMiLCJsb2dvTGluayIsInNlY29uZGFyeU5hbWUiLCJzZWNvbmRhcnlOYXZMaXN0Iiwic2V0dGluZ0xpc3QiLCJyZW5kZXJMb2dvIiwiZGVsT2xkRG9tIiwiZGVsZXRlRG9tQnlDbGFzc05hbWUiLCJfdGhlbWUiLCJ0ZW1wbGF0ZVJlbmRlciIsImxvZ29TcmMiLCJjYWxjUHJpbWFyeU51bWJlciIsInByaW1hcnlOYXZMaXN0IiwicHJpbWFyeU5hdldpZHRoTWF4IiwicHJpbWFyeU5hdldpZHRoIiwid2lkdGgiLCJyZW5kZXJQcmltYXJ5TmF2TGlzdCIsImFyclVuaXF1ZSIsImNvbmNhdCIsImdldEJyb3dzZVVybElkQWN0aXZlTWVudSIsInJlbmRlckFycmF5Iiwic2xpY2UiLCJyZW5kZXJOYXZiYXJEb20iLCJtb3JlRGF0YSIsInJlbmRlck1vcmVBcnJheSIsImhhbmRsZUNsYXNzIiwidHJhdmVyc2VEb21BcnIiLCJjaGlsZHJlbk5vZGUiLCJjaGlsZHJlbiIsIkNOb2RlIiwid2luV2lkdGgiLCJjbGllbnRXaWR0aCIsInJlbmRlclByaW1hcnlOYXZMaXN0TmV3Iiwic3BhY2VXaWR0aCIsIm1heFB1dFNpemUiLCJwYXJzZUludCIsInJlbmRlckFwcExpc3QiLCJjdXJyZW50TmFtZSIsImN1cnJlbnQiLCJ0aXRsZSIsInJlbmRlckFwcGxpY2F0aW9uTmF2YmFyIiwicmVuZGVyQXBwTGlzdERyb3Bkb3duTGlzdCIsImViZ25hdkFwcExpc3RTZXBhcmF0b3JVbCIsInJlbmRlckFwcGxpY2F0aW9uTmF2YmFyVWxMaXN0IiwiYWRkUmVuZGVyQXBwTGlzdEV2ZW50IiwiY29tbW9uTmF2RXZlbnQiLCJjcnVOYW1lIiwidG9TdHJpbmciLCJpbnZhbGlkU3RyIiwiZnVuY25hbWUiLCJFcnJvciIsInJlbmRlclNlY29uZGFyeU5hbWUiLCJyZW5kZXJTZWNvbmRhcnlOYXZMaXN0IiwiZWJnbmF2U2Vjb25kYXJ5TmF2TGlzdERvbSIsInNlY29uZGFyeU5hdldpZHRoTWF4IiwicGFyZW50IiwidHJhdmVyc2VOYXZMaXN0RXZlbnQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJldmVudCIsImNhbmNlbEJ1YmJsZSIsImhhc2NoaWxkcmVubW9kdWxlcyIsInJlbmRlclNlY29uZGFyeU5hdkxpc3ROZXciLCJyZW5kZXJTZXR0aW5nTGlzdCIsImNsZWFySW5uZXJIdG1sQnlJZCIsImdldEN1cnJlbnROYW1lIiwibGlzIiwibGlzQ2hpbGRyZW4iLCJzZXRDdXJyZW50TmFtZSIsInJlbmRlclJvbGVzTGlzdCIsInRvdGFsIiwiZWJnbmF2RWJnbmF2Um9sZUxpc3QiLCJzaG93Q3VySXRlbSIsImZpbHRlciIsInJlbmRlck1zZ0FuZExvZ291dEJ0biIsIm1lYXNzYWdlVXJsIiwic2hvd1NlYXJjaCIsImFkZEFwcEV2ZW50Iiwic2hvd1NlYXJjaEJ0biIsInVsIiwiYXBwZW5kUGFyYW0iLCJyZW5kZXJBcHBsaWNhdGlvbnMiLCJyZW5kZXJVc2VySW5mbyIsInVzZXJJZCIsInJlbmRlckxvZ2luQnRuIiwicmVuZGVyVGhlbWUiLCJjb21tb25DbGljayIsImZ1bmNOYW1lIiwiYXJncyIsIk1FTlVfQVBQTElTVCIsIk1FTlVfUFJJTUFSWUxJU1QiLCJNRU5VX1NFQ09ORExJU1QiLCJNRU5VX1NFVFRJTkdMSVNUIiwiTUVOVV9ST0xFTElTVCIsInJlZnJlc2hGbGFnIiwib3RoZXJQYXJhbSIsInBhcmVudEluZGV4IiwiY2hpbGRyZW5JbmRleCIsImluZGV4QnVmIiwic3BsaXQiLCJ0b3RhbExpc3QiLCJjSXRlbSIsImhhbmRPdXRGdW5jIiwicmVuZGVyIiwibG9hZFN0eWxlIiwibG9hZFNjcmlwdFN0cmluZyIsImRlYm91bmNlIiwib3BlcmF0ZSIsImRlbGF5IiwidGltZSIsInRpbWVyIiwibmV3VGltZSIsInRhc2siLCJzZXRUaGVtZUxvZ28iLCJuYXZpZ2F0aW9uQ29uZmlnIiwidGhlbWVzIiwic2V0VGhlbWVDb25maWciLCJzZXRUaGVtZU5hbWUiLCJzZXRQbGF0Zm9ybU5hdkxpc3QiLCJsaXN0IiwiX2xpc3QiLCJuZXdOYXZMaXN0IiwibW9kdWxlTmFtZSIsIm1vZHVsZVVybCIsImhhc0NoaWxkcmVuTW9kdWxlcyIsImNoaWxkcmVuTW9kdWxlcyIsIl9jaGlsZHJlbnMiLCJqIiwidGhlbWVsaXN0IiwibWVudUtleSIsIm5ld0xpc3QiLCJwbGF0Zm9ybUxvZ29VcmwiLCJhcHBMb2dvVXJsIiwic2V0QXBwbGljYXRpb25zTGlzdCIsImNsb3VkTmF2QXBwcyIsIl9hcnJheSIsIl9pdGVtIiwic2hvcnRfbmFtZSIsInNyYyIsImljb24iLCJzZXRVc2VySW5mbyIsInVzZXJpbmZvIiwidXNlck5hbWUiLCJ1c2VyUGhvdG8iLCJsb2dpbk5hbWUiLCJ1c2VybmFtZSIsInJlbmRlckFwcEJ0biIsImNvdW50IiwicGxhdGZvcm0iLCJhamF4R2V0T3RoZXJDb25maWciLCJwbGF0Zm9ybVNldCIsInBvc2l0aW9uVGhlbWUiLCJuYXZiYXJDb25maWciLCJwbSIsInBsYXRmb3JtTW91ZGxlcyIsImFqYXhHZXREZWZhdWx0QXBwIiwicmVtb3ZlRWxlbWVudCIsImFqYXhHZXRDb25maWciLCJfb25yZXNpemUiLCJfd2luV2lkdGgiLCJnZXRIaWRkZW5Qcm9wIiwicHJlZml4ZXMiLCJnZXRWaXNpYmlsaXR5U3RhdGUiLCJfdmlzaWJpbGl0eWNoYW5nZSIsInZpc1Byb3AiLCJldnRuYW1lIiwicmVwbGFjZSIsImdldEpzb25wSG9zdFVybCIsImNiIiwiY3VycmVudFNjcmlwdCIsIm9sZCIsImdldEN1cnJlbnRTY3JpcHQiLCJfc3JjIiwiZ2V0SnNvbnBIb3N0IiwibG9jYXRpb24iLCJwcm90b2NvbCIsInN1YnN0ciIsImlzUGxhdGZvcm0iLCJnZXRKc29ucEhvc3RJblNjcmlwdCIsInQiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJjaGFuZ2VMaXN0Q3VycmVudEl0ZW0iLCJlbGVtZW50IiwiRWJnbmF2aWdhdGlvbiIsImV2ZW50cyIsInZlcnNpb24iLCJ1bm9uIiwic3BsaWNlIiwiZm4iLCJoZWFkIiwiaHR0cEVxdWl2IiwibmV3Q29uZmlnIiwidGVtcFRpdGxlIiwidGVtcFRpdGxlU2Vjb25kIiwic2Vjb25kTGlzdCIsImFwcGxpc3QiLCJhcnJheSIsImZsYWciLCJwYXJhbSIsImV2YWwiLCJhbGVydCIsInJlbmRlckJhc2VUZW1wIiwic3dpdGNoVGhlbWUiLCJmaW5kIiwiJGViZ25hdiIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImxvYWRTY3JpcHQiLCJjYWxsYmFjayIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInJlYWR5U3RhdGUiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJvbmxvYWQiLCJsb2FkT2xkTmF2Iiwib2xkTmF2VXJsIiwialF1ZXJ5Iiwic3RyQXNzZXJ0Iiwic3RyIiwiYWxlcnRFcnJvcklmU3RyRW1wdHkiLCJlcnJvck1zZyIsImV2ZW50VHlwZSIsImJ0bk1zZyIsInN0b3JlQXBwaWQiLCJlbmFibGUiLCJhc3luYyIsImFwcElkIiwicmVzdWx0IiwiYXBwRW5jb2RlVVJMIiwicyIsInJlZyIsInVybExlbmd0aCIsIm5ld1MiLCJ0ZXN0IiwiZXNjYXBlIiwiZW5jb2RlVVJJIiwiYXBwQ2xpY2siLCJpc1RoaXJkQXBwIiwid2luZG93T3BlbiIsImVuY29kZVVSSUNvbXBvbmVudCIsImZlZWRiYWNrU2NyaXB0Iiwicm5BdXRoU2NyaXB0IiwibG9hZEZlZWRiYWNrIiwic2V0QXR0cmlidXRlIiwibG9hZFJOQXV0aCIsInNldExvYWRGZWVkYmFjayIsImZlZWRiYWNrVXJsIiwiZmVlZGJhY2tVc2VySW5mbyIsInNjaG9vbCIsImZlZWRiYWNrVGl0bGUiLCJ4aWFveGluVGl0bGUiLCJ4aWFveGluVXJsIiwiZmVlZGJhY2tIZWxwVXJsIiwiZmVlZGJhY2tIZWxwVGl0bGUiLCJpZlJlYWxOYW1lQXV0aGVkIiwiYXV0aExpbmsiLCJhamF4IiwicGFyYW1zIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiZm9ybWF0UGFyYW1zIiwiam9pbiIsImpzb24iLCJ0b1VwcGVyQ2FzZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiQWN0aXZlWE9iamNldCIsInN0YXR1cyIsInJlc3BvbnNlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJyZXNwb25zZVhNTCIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiY2FsbGJhY2tOYW1lIiwiY2xlYXJUaW1lb3V0IiwiYXZhdGFyIiwibm9EYXRhIiwiY3JlYXRlSnNvbnBMb2dvdXQiLCJkYXRhVHlwZSIsImNyb3NzRG9tYWluIiwiY2FjaGUiLCJodG1sIiwiZGVza3RvcF9sb2dvdXQiLCJfX2xvZ291dFVybCIsImxvZ291dFVybHMiLCJjbGVhckNvb2tpZVVybCIsInJlZGlyZWN0VXJsIiwiaW52b2tlZCIsImlkeCIsImhyZWYiLCJiaW5kTG9nb3V0IiwiZ2V0Q29va2llIiwiY2tzIiwiY29va2llIiwia3YiLCJtYXRjaGVzIiwibWF0Y2giLCJob3N0IiwicG9ydCIsInNjcmlwdHMiLCJpbnRlcmFjdGl2ZVNjcmlwdCIsInRhckRvbWFpbiIsInNlcnZlclVybCIsImRlY29kZVVSSUNvbXBvbmVudCIsInVuZGVmaW5lZCIsImdldERlc2t0b3BTZXJ2ZXIiLCJyZXQiLCJyZWRpckRvbWFpbiIsImVhc3lYc3MiLCJsdCIsImd0IiwiYXAiLCJpYyIsInRlbXBsYXRlIiwidG1wIiwiU3RyaW5nIiwicmVwbGFjZUFsbCIsInMxIiwiczIiLCJSZWdFeHAiLCJuZXdEYXRhIiwic3BlY2lhbEZsYWciLCJwYXJlbnRKc29uIiwiY2hpbGRyZW5KU29uUGFyYW0iLCJyZWdPdXQiLCJjb2RlIiwiY3Vyc29yIiwiYWRkIiwibGluZSIsImpzIiwiZXhlYyIsIkZ1bmN0aW9uIiwiYXBwbHkiLCJwb2xsIiwibm9kZSIsImlzQ2FsbGVkIiwiaXNMb2FkZWQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJjc3NSdWxlcyIsImV4Iiwic3R5bGVPbmxvYWQiLCJhdHRhY2hFdmVudCIsImxpbmsiLCJyZWwiLCJsb2FkU3R5bGVDc3MiLCJub1JlbmRDc3MiLCIkIiwiZnN0ciIsIm9sZENsYXNzTmFtZSIsImNsYXNzVmFsIiwiZ2V0SG9zdFVybCIsIl9ob3N0dXJsIiwiY3JlYXRlVGV4dE5vZGUiLCJ0ZXh0IiwiY2xzTmFtZSIsInBhcmFzIiwiYWxlcnRUaXBzIiwiYWxlcnRUZW1wTGlzdCIsInRpcHMiLCJtZXNzYWdlRG9tIiwibm9SZW5kZXJKcyIsIl9lbGVtZW50IiwiX3BhcmVudEVsZW1lbnQiLCJkZWYiLCJtYXAiLCJybiIsInJlc0RvbSIsIm5hdkxpc3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FB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USxTQUFMLENBQWUzRSxJQUFmLENBTHZFLGlDQUFOO0FBT0QsR0FSVSxDQUFYO0FBU0EsU0FBT3NqQixNQUFQO0FBQ0QsQ0FaRCxDLENBYUE7Ozs7O0FBQ0EsSUFBTS9WLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ2dXLE9BQUQsRUFBYTtBQUM1QyxNQUFNL0UsSUFBSSxHQUFHelksTUFBTSxDQUFDa1IsUUFBUCxDQUFnQi9VLE1BQTdCO0FBQ0EsTUFBSSxDQUFDcWhCLE9BQU8sQ0FBQ3hqQixNQUFULElBQW1CLENBQUN5ZSxJQUF4QixFQUE4QixPQUFPLEtBQVA7QUFDOUI7Ozs7Ozs7QUFINEMsOEJBU3hCQSxJQUFJLENBQUMvUSxLQUFMLENBQVcsQ0FBWCxFQUFjNkUsS0FBZCxDQUFvQixHQUFwQixFQUF5QixDQUF6QixFQUE0QkEsS0FBNUIsQ0FBa0MsR0FBbEMsQ0FUd0I7QUFBQTtBQUFBLE1BU3JDalUsRUFUcUM7QUFBQSxNQVNqQzhELEtBVGlDLDhCQVU1Qzs7O0FBQ0EsTUFBSSxDQUFDOUQsRUFBRCxJQUFPQSxFQUFFLEtBQUssSUFBZCxJQUFzQixDQUFDOEQsS0FBM0IsRUFBa0MsT0FBTyxLQUFQO0FBQ2xDb2hCLFNBQU8sQ0FBQ3pnQixPQUFSLENBQWdCLFVBQUE5QyxJQUFJLEVBQUk7QUFDdEIsUUFBSUEsSUFBSSxDQUFDM0IsRUFBTCxLQUFZOEQsS0FBaEIsRUFBdUI7QUFDckJuQyxVQUFJLENBQUMwTyxPQUFMLEdBQWUsSUFBZjtBQUNELEtBRkQsTUFFTztBQUNMMU8sVUFBSSxDQUFDME8sT0FBTCxHQUFlLEtBQWY7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDQW5CRCIsImZpbGUiOiJlYmduYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJlYmduYXZpZ2F0aW9uXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImViZ25hdmlnYXRpb25cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZWJnbmF2aWdhdGlvblwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vdXRpbHMvaHR0cCdcclxuaW1wb3J0IHsgcmVtb3ZlRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJ1xyXG5pbXBvcnQgeyBhdmF0YXIgfSBmcm9tICcuLi8uLi91dGlscy9pbWcnIC8vIOWbvueJh2Jhc2U2NOWcsOWdgFxyXG5jb25zdCBndWlkYW5jZUVudHJ5ID0gKHVzZXIsIGhvc3R1cmwpID0+IHtcclxuICBpZiAodXNlciAmJiB1c2VyLmlkICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBpc0d1aWRhbmNlLSR7dXNlci5pZH1gKSA9PT0gJ3RydWUnKSByZXR1cm4gZmFsc2VcclxuICBhamF4KHtcclxuICAgIHR5cGU6ICdHRVQnLFxyXG4gICAganNvbnA6ICdqc29ucENhbGxiYWNrNScsXHJcbiAgICB1cmw6IGAke2hvc3R1cmx9L2Rlc2t0b3AvYmFja2VuZC9pbmRleFBhZ2UvZ2V0SGFzTmF2aWdhdGlvbkxvZy5kb2AsXHJcbiAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgIC8vIOi/lOWbnue7k+aenCA9PT0gZmFsc2Ug5pi+56S65paw5omL5oyH5byVXHJcbiAgICAgIGlmICghcmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICByZW5kZXJHdWlkYW5jZSh1c2VyLCBob3N0dXJsKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6ICgpID0+IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcbi8vIC9lYmduYXZpZ2F0aW9uL2ltZy9ndWlkYW5jZS1zdGVwLTIuZ2lmIC9lYmduYXZpZ2F0aW9uL2ltZy9ndWlkYW5jZS1zdGVwLTEuZ2lmXHJcbmNvbnN0IHJlbmRlckd1aWRhbmNlID0gKHVzZXIsIGhvc3R1cmwpID0+IHtcclxuICBjb25zdCBndWlkYW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWlkYW5jZS1jb250YWluZXInKVxyXG4gIGd1aWRhbmNlICYmIHJlbW92ZUVsZW1lbnQoZ3VpZGFuY2UpXHJcbiAgY29uc3QgcDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWJnbmF2LW9wZXJhdGlvbi1hcHBlbnRyeScpXHJcbiAgY29uc3QgcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWJnbmF2LW9wZXJhdGlvbi11c2VyaW5mbycpXHJcbiAgaWYgKCFwMSB8fCAhcDIpIHJldHVybiBmYWxzZVxyXG4gIGNvbnN0IGRvbSA9IGBcclxuICA8ZGl2IGNsYXNzPVwiZ3VpZGFuY2UtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3RlcC1ndWlkYW5jZSBzdGVwMVwiIHN0eWxlPVwicmlnaHQ6ICR7cDIub2Zmc2V0V2lkdGggKyAyNH1weDsgdG9wOiAwOyBkaXNwbGF5OmJsb2NrO1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+XHJcbiAgICAgICAgPGltZyBjbGFzcz1cImltZy1naWZcIiBzcmM9XCIvZWJnbmF2aWdhdGlvbi9pbWcvZ3VpZGFuY2Utc3RlcC0xLmdpZlwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRpc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICA8aDM+5b+r5o235bqU55So5YWl5Y+j5LiO5pCc57Si5YWl5Y+jPC9oMz5cclxuICAgICAgICAgIDxwPueCueWHu+W6lOeUqOW/q+aNt+WFpeWPo++8jOWPr+S7peafpeeci+euoeeQhuWRmOiuvue9rueahOW4uOeUqOW6lOeUqO+8jOWOn+adpeWvvOiIquagj+S4iueahOW6lOeUqOWFpeWPo+S4juaQnOe0ouWFpeWPo+i/geenu+iHs+atpOWkhO+8gTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJidG4gZWwtYnV0dG9uLS10ZXh0XCIgaHJlZj1cImphdmFzY3JpcHQ6XCIgaWQ9XCJndWlkYW5jZS1qdW1wXCI+6Lez6L+HPC9hPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBndWlkYW5jZS1idG4gZnJcIj7kuIvkuIDmraU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJndWlkYW5jZS1hcnJvd1wiIHN0eWxlPVwid2lkdGg6IDQwcHhcIj48aSBjbGFzcz1cImViZ2luYXYgaW5hdi1hcHAtZW50cnlcIj48L2k+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzdGVwLWd1aWRhbmNlIHN0ZXAyXCIgc3R5bGU9XCJyaWdodDogMjRweDsgdG9wOiAwOyBkaXNwbGF5Om5vbmU7XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cclxuICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWdpZlwiIHNyYz1cIi9lYmduYXZpZ2F0aW9uL2ltZy9ndWlkYW5jZS1zdGVwLTIuZ2lmXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzY3JpcHRpb25cIj5cclxuICAgICAgICAgIDxoMz7miJHnmoTmtojmga/ov4Hnp7voh7PmraTlpITllaZ+PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWJveFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBndWlkYW5jZS1idG4gZnJcIj7nn6XpgZPkuoY8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJndWlkYW5jZS1hcnJvd1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXJcIiBzcmM9XCIke3VzZXIudXNlclBob3RvcyB8fCBhdmF0YXJ9XCIgLz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWUgdGV4dC1lbGxpcHNpc1wiPiR7dXNlci5uYW1lfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgXHJcbiAgY29uc3QgZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWlkYW5jZS1jb250YWluZXInKVxyXG4gIGcgJiYgcmVtb3ZlRWxlbWVudChnKVxyXG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBkb20pXHJcbiAgYWRkRXZlbnQodXNlciwgaG9zdHVybClcclxufVxyXG5cclxuY29uc3QgYWRkRXZlbnQgPSAodXNlciwgaG9zdHVybCkgPT4ge1xyXG4gIGNvbnN0IGd1aWRhbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1aWRhbmNlLWNvbnRhaW5lcicpXHJcbiAgY29uc3QgYnRucyA9IGd1aWRhbmNlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBpdGVtID0gYnRuc1tpXVxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5pbm5lclRleHQgPT09ICfkuIvkuIDmraUnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0ZXAxJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGVwMicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZ3VpZGFuY2VDb21wbGV0ZSh1c2VyLCBob3N0dXJsKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBqdW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2d1aWRhbmNlLWp1bXAnKVxyXG4gIGp1bXAgJiYganVtcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGd1aWRhbmNlQ29tcGxldGUodXNlciwgaG9zdHVybClcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBndWlkYW5jZUNvbXBsZXRlID0gKHVzZXIsIGhvc3R1cmwpID0+IHtcclxuICBjb25zdCBndWlkYW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWlkYW5jZS1jb250YWluZXInKVxyXG4gIGFqYXgoe1xyXG4gICAgdHlwZTogJ0dFVCcsXHJcbiAgICBqc29ucDogJ2NhbGxiYWNrJyxcclxuICAgIHVybDogYCR7aG9zdHVybH0vZGVza3RvcC9iYWNrZW5kL2luZGV4UGFnZS9pbnNlcnROYXZpZ2F0aW9uTG9nLmRvYCxcclxuICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgaXNHdWlkYW5jZS0ke3VzZXIuaWR9YCwgJ3RydWUnKVxyXG4gICAgICByZW1vdmVFbGVtZW50KGd1aWRhbmNlKVxyXG4gICAgfSxcclxuICAgIGVycm9yOiAoKSA9PiB7XHJcbiAgICAgIHJlbW92ZUVsZW1lbnQoZ3VpZGFuY2UpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ3VpZGFuY2VFbnRyeVxyXG4iLCJpbXBvcnQgYWpheCBmcm9tICcuLi8uLi91dGlscy9odHRwJ1xyXG4vLyBpbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi91dGlscy91dGlscydcclxuaW1wb3J0IHsgYmluZExvZ291dCB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ291dCdcclxuLy8g5ZCM5oSPXHJcbmNvbnN0IGFyZ2VlID0gKGhvc3R1cmwsIGRhdGEpID0+IHtcclxuICBjb25zdCBkb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbHp4TmF2QmFyLXByaXZhY3ktYWdyZWUnKVxyXG5cclxuICBkb20uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBhamF4KHtcclxuICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgIHVybDogaG9zdHVybCArICcvZGVza3RvcC9iYWNrZW5kL2FwaS9wb3J0YWwvYWdyZWVTZW5zaXRpdmUuZG8nLFxyXG4gICAgICBqc29ucDogJ2pzb25wJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2RhdGEudXNlci5pZH1Qcml2YWN5YCwgJ3RydWUnKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsenhOYXZCYXItcHJpdmFjeS1iZycpLnJlbW92ZSgpXHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuLy8g5ouS57udXHJcbmNvbnN0IHJlZnVzZSA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgcmVmdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2x6eE5hdkJhci1wcml2YWN5LXJlZnVzZScpXHJcbiAgLy8gdmFyIHNzb1VybCA9IHJlZnVzZS5nZXRBdHRyaWJ1dGUoJ3Nzb1VybCcpIC8vICQoJy5senhOYXZCYXItcHJpdmFjeS1yZWZ1c2UnKS5hdHRyKCdzc29VcmwnKTtcclxuICByZWZ1c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgbGV0IGxvZ291dFVybFxyXG4gICAgLy8g6I635Y+W5Yiw6YCA5Ye6dXJsXHJcbiAgICBkYXRhLnNldHRpbmdzICYmIGRhdGEuc2V0dGluZ3Muc29tZShpdGVtID0+IHtcclxuICAgICAgaWYgKGl0ZW0ua2V5ID09PSAndXNlci1sb2dvdXQnKSB7XHJcbiAgICAgICAgbG9nb3V0VXJsID0gaXRlbS51cmxcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy8gYWpheCh7XHJcbiAgICAvLyAgIHR5cGU6ICdHRVQnLFxyXG4gICAgLy8gICB1cmw6IHNzb1VybCxcclxuICAgIC8vICAganNvbnA6ICdqc29ucCcsXHJcbiAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhnZXRDb29raWUoJ2Vjc0xvZ2luVXJsJykpXHJcbiAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZWNvZGVVUklDb21wb25lbnQoZ2V0Q29va2llKCdlY3NMb2dpblVybCcpKVxyXG4gICAgLy8gICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJ1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KVxyXG4gICAgbG9nb3V0VXJsICYmIGJpbmRMb2dvdXQobG9nb3V0VXJsKVxyXG4gIH0pXHJcbn1cclxuY29uc3QgcmVuZGVyUHJpdmFjeSA9ICh1cmwsIGhvc3R1cmwsIGRhdGEpID0+IHtcclxuICB2YXIgcHJpdmFjeVRpcHMgPVxyXG4gICAgJzxkaXYgaWQ9XCJsenhOYXZCYXItcHJpdmFjeS1iZ1wiIGNsYXNzPVwibHp4TmF2QmFyLXByaXZhY3ktYmdcIj4nICtcclxuICAgICc8ZGl2IGNsYXNzPVwibHp4TmF2QmFyLXByaXZhY3ktYm94XCI+JyArXHJcbiAgICAnPGgzPueUqOaIt+makOengeWNj+iuruWjsOaYjjwvaDM+JyArXHJcbiAgICAnPGRpdiBjbGFzcz1cImx6eE5hdkJhci1wcml2YWN5LWhlYWRlclwiPuaEn+iwouaCqOS/oeS7u+W5tuS9v+eUqOacrOacjeWKoe+8jOS4uuS6huiDveWkn+abtOWKoOWFqOmdoueahOS/nemanOaCqOeahOadg+ebiu+8jOivt+WKoeW/heWcqOS9v+eUqOWJjeS7lOe7humYheivu+OAgjwvZGl2PicgK1xyXG4gICAgJzxkaXYgY2xhc3M9XCJsenhOYXZCYXItcHJpdmFjeS1jb250ZW50XCI+JyArXHJcbiAgICAnPGg0PuenkeWkp+iur+mjnumakOengeadg+aUv+etljwvaDQ+JyArXHJcbiAgICAnPGRpdiBjbGFzcz1cImx6eE5hdkJhci1wcml2YWN5LWNvbnRlbnQtdGV4dFwiPjxoND7lvJXoqIA8L2g0PjxwPumakOengeS/oeaBr+aYr+aMh+WFrOawkeS4quS6uueUn+a0u+S4reS4jeaEv+aEj+S4uuS7luS6uuWFrOW8gOaIluiAheefpeaCieeahOenmOWvhu+8jOenkeWkp+iur+mjnuiCoeS7veaciemZkOWFrOWPuO+8iOS7peS4i+eugOensOKAnOiur+mjnuKAne+8iea3seefpeS4quS6uuS/oeaBr+WvueaCqOeahOmHjeimgeaAp++8jOW5tuS8muWwveWKm+S/neaKpOaCqOeahOS4quS6uuS/oeaBr+WuieWFqOWPr+mdoO+8jOiur+mjnuiHtOWKm+S6jue7tOaMgeaCqOWvueaIkeS7rOeahOS/oeS7u++8jOaBquWuiOS7peS4i+WOn+WIme+8jOS/neaKpOaCqOeahOS4quS6uuS/oeaBr++8muadg+i0o+S4gOiHtOWOn+WIme+8jOebrueahOaYjuehruWOn+WIme+8jOmAieaLqeWQjOaEj+WOn+WIme+8jOacgOWwkeWkn+eUqOWOn+WIme+8jOehruS/neWuieWFqOWOn+WIme+8jOS4u+S9k+WPguS4juWOn+WIme+8jOWFrOW8gOmAj+aYjuWOn+WImeOAgumJtOatpO+8jOeJueWItuWumuacrOOAiuenkeWkp+iur+mjnumakOengeadg+aUv+etluOAi+W5tuaJv+ivuu+8jOaIkeS7rOWwhuaMieS4mueVjOaIkOeGn+eahOWuieWFqOino+WGs+aWueahiO+8jOmHh+WPluebuOW6lOeahOWuieWFqOS/neaKpOaOquaWveadpeS/neaKpOaCqOeahOS4quS6uuS/oeaBr+OAguivt+aCqOWcqOS9v+eUqOaIkeS7rOeahOS6p+WTgeaIluacjeWKoeWJje+8jOS7lOe7humYheivu+W5tuS6huino+acrOmakOengeaUv+etluOAgjwvcD48aDQ+6YCC55So6IyD5Zu0PC9oND48cD7mnKzmlL/nrZbpgILnlKjkuo7orq/po57kuqflk4HmiJbmnI3liqHjgILlpoLorq/po57lhbPogZTlhazlj7jvvIjor7TmmI7vvJrorq/po57lhbPogZTlhazlj7jljIXmi6zigJzorq/po57lhajotYTlrZDlhazlj7jjgIHorq/po57lkIjotYTlrZDlhazlj7jvvIzorq/po57llYbkuJrlkIjkvZzkvJnkvLTlhazlj7jnrYnnrYnkuI7orq/po57kuqfnlJ/llYbkuJrlhbPogZTnmoTlhazlj7jigJ3vvInnmoTkuqflk4HmiJbmnI3liqHkuK3kvb/nlKjkuoborq/po57mj5DkvpvnmoTkuqflk4HmiJbmnI3liqHkvYbmnKrorr7ni6znq4vpmpDnp4HmnYPmlL/nrZbnmoTvvIzliJnorq/po57kvJrnnYDlipvopoHmsYLlhbPogZTlhazlj7jmgonnn6XmnKzpmpDnp4HmnYPmlL/nrZbvvIzlubbnoa7kv53nlLHorq/po57mj5DkvpvnmoTkuqflk4HmiJbmnI3liqHpg6jliIblkIzmoLfpgbXlrojmnKzmlL/nrZbjgII8L3A+PHA+6ZyA6KaB54m55Yir6K+05piO55qE5piv77yM5pys5pS/562W5LiN6YCC55So5LqO5YW25LuW56ys5LiJ5pa55ZCR5oKo5o+Q5L6b55qE5pyN5Yqh77yM5pys5Y2P6K6u5L2c5Li66K6v6aOe5Z+657q/54mI5pys6ZqQ56eB5Y2P6K6u5a2Y5Zyo77yM5Lmf5LiN6YCC55So5LqO6K6v6aOe5Lit5bey5Y+m6KGM54us56uL6K6+572u6ZqQ56eB5p2D5pS/562W55qE5Lqn5ZOB5oiW5pyN5Yqh77yM5aaC5p6c5pys5pS/562W5YaF5a655LiO5YW25LuW5bey5Y+m6KGM54us56uL6K6+572u6ZqQ56eB5p2D5pS/562W55qE5Lqn5ZOB5oiW6ICF5pyN5Yqh5Ye6546w5YaF5a655beu5byC5oCn77yM5Lul5YW25LuW54us56uL6K6+572u5LqG6ZqQ56eB5p2D5pS/562W55qE5Lqn5ZOB5oiW5pyN5Yqh5YaF5a655Li65YeG77yM54us56uL5Lqn5ZOB5oiW5pyN5Yqh55qE5p2h5qy+5Y+v6IO95Lya5Zyo6K+l5Z+657q/54mI5pys5LiK5qC55o2u5Lia5Yqh6ZyA6KaB6L+b6KGM6KGl5YWF77yb5Zyo5L2/55So6K6v6aOe5ZCE6aG55Lqn5ZOB5oiW5pyN5Yqh5YmN77yM6K+35oKo5Yqh5b+F5LuU57uG6ZiF6K+75bm26YCP5b2755CG6Kej5pys5pS/562W77yM5Zyo56Gu6K6k5YWF5YiG55CG6Kej5bm25ZCM5oSP5ZCO5L2/55So55u45YWz5Lqn5ZOB5oiW5pyN5Yqh44CC5LiA5pem5oKo6YCJ5oup5L2/55So5oiW5Zyo6K6v6aOe5YWs5Y+45pu05paw5pys6ZqQ56eB5pS/562W5ZCO77yI6K6v6aOe5YWs5Y+45Lya5Y+K5pe25o+Q56S65oKo5pu05paw55qE5oOF5Ya177yJ57un57ut5L2/55So6K6v6aOe5YWs5Y+45Lqn5ZOB5oiW5pyN5Yqh77yM5Y2z6KGo56S65oKo6K6k5Y+v5bm25o6l5Y+X5pys5pS/562W77yI5ZCr5pu05paw54mI5pys77yJ55qE5omA5pyJ5YaF5a6577yM5bm25ZCM5oSP6K6v6aOe5YWs5Y+45oyJ5pys5pS/562W5pS26ZuG44CB5L2/55So44CB5L+d5a2Y5ZKM5YWx5Lqr5oKo55qE55u45YWz5L+h5oGv44CC5aaC5oKo5LiN5ZCM5oSP5pys6ZqQ56eB5Y2P6K6u5Lit55qE5Lu75L2V5p2h5qy+77yM5oKo5bqU56uL5Y2z5YGc5q2i5L2/55So5oiR5Lus55qE5Lqn5ZOB5oiW5pyN5Yqh77yM5aaC5a+55pys5pS/562W5YaF5a655pyJ5Lu75L2V55aR6Zeu44CB5oSP6KeB5oiW5bu66K6u77yM5oKo5Y+v6YCa6L+H5oiR5Lus5o+Q5L6b55qE5ZCE56eN6IGU57O75pa55byP5LiO5oiR5Lus6IGU57O744CCPC9wPjxoND7mlL/nrZbmpoLov7A8L2g0PjxwPuaIkeS7rOW4jOacm+mAmui/h+acrOaUv+etluWQkeaCqOivtOaYjuiur+mjnuWcqOWQkeaCqOaPkOS+m+S6p+WTgeaIluacjeWKoei/h+eoi+S4reWPr+iDveS8muaUtumbhueahOS/oeaBr++8iOWMheaLrOaUtumbhuaWueW8j++8ieOAgeaUtumbhui/meS6m+S/oeaBr+eahOeUqOmAlOOAgeiur+mjnuWPiuaCqOWmguS9leS/neaKpOi/meS6m+S/oeaBr+eahOWuieWFqOetie+8jOaCqOS9v+eUqOaIkeS7rOeahOS6p+WTgeaIluacjeWKoeaXtu+8jOaIkeS7rOacieadg+eUqOaVsOWtl+S7o+eggeOAgemAmueUqOWUr+S4gOagh+ivhuespuOAgWNvb2tpZXPmiJblhbbku5bmioDmnK/noa7lrprov5vlhaXmnI3liqHnmoTorqHnrpfmnLrku6Xlj4rlhbbku5bmmbrog73miJbpnZ7mmbrog73nu4jnq6/orr7lpIfjgILmiJHku6zmnInlj6/og73liKnnlKjmiYDlvpfkv6Hmga/lr7nkuqflk4HmiJbmnI3liqHnmoTkvb/nlKjov5vooYzmgLvkvZPmgKflj4rljL/lkI3nmoTmlbDmja7nu5/orqHlj4rliIbmnpDvvIzmiYDlvpfmlbDmja7lj6/kvpvmiJHku6zmiJblhbblkIjkvZzkurrmiJborq/po57lhbPogZTlhazlj7jkvb/nlKjjgILorqHnrpfmnLror4bliKvmioDmnK/kuZ/kvJrnlKjkuo7miafooYznm7jlhbPnmoTmnI3liqHmnaHmrL7jgILmiJHku6zlj6/og73kvJrkuI7orq/po57lhbPogZTlhazlj7jnrYnnrKzkuInmlrnlkIjkvZzlkJHnlKjmiLfmj5Dkvpvnm7jlhbPnmoTmnI3liqHvvIzlpoLor6XnrKzkuInmlrnkuLrlkIjms5Xnu4/okKXnmoTlhazlj7jkuJTmj5DkvpvlkIznrYnnmoTnlKjmiLfpmpDnp4Hkv53miqTvvIjlpoLnlLXkv6Hov5DokKXllYbvvInvvIzmiJHku6zmnInmnYPlsIbmgqjnmoTms6jlhozotYTmlpnku6Xlj4rlnKjkuLrmgqjmj5DkvpvmnI3liqHml7bmiYDlv4Xpobvph4fpm4bnmoTkv6Hmga/nrYnmlK/mkpHmnI3liqHmraPluLjov5vooYznmoTkv6Hmga/mj5Dkvpvnu5nor6XnrKzkuInmlrnjgII8L3A+PGg0PuacrOmakOengeadg+aUv+etluWGheWuueWwhuW4ruWKqeaCqOS6huino+WIsOS7peS4i+S/oeaBr++8mjwvaDQ+PHVsPjxsaT4x44CB5oiR5Lus5Y+v6IO95pS26ZuG55qE5L+h5oGvPC9saT48bGk+MuOAgeaIkeS7rOWmguS9leS9v+eUqENvb2tpZeOAgUJlYWNvbuetieS7peWPiuWQjOexu+aKgOacrzwvbGk+PGxpPjPjgIHmiJHku6zlpoLkvZXlrZjlgqjkv6Hmga88L2xpPjxsaT4044CB5oiR5Lus5aaC5L2V5L+d5oqk5Liq5Lq65L+h5oGvPC9saT48bGk+NeOAgeaIkeS7rOWmguS9leS9v+eUqOaUtumbhueahOS4quS6uuS/oeaBrzwvbGk+PGxpPjXjgIHmiJHku6zlpoLkvZXkvb/nlKjmlLbpm4bnmoTkuKrkurrkv6Hmga88L2xpPjxsaT4244CB5oiR5Lus5aaC5L2V5a+55aSW5YWx5Lqr44CB6L2s6K6p44CB5oqr6Zyy5L2/55So5oKo55qE5Liq5Lq65L+h5oGvPC9saT48bGk+N+OAgeaIkeS7rOWmguS9leWkhOeQhuacquaIkOW5tOS6uueahOS4quS6uuS/oeaBrzwvbGk+PGxpPjjjgIHmgqjlpoLkvZXnrqHnkIboh6rlt7HnmoTkuKrkurrkv6Hmga88L2xpPjxsaT4544CB5oKo55qE5Liq5Lq65L+h5oGv5aaC5L2V5Zyo5YWo55CD6IyD5Zu06L2s56e7PC9saT48bGk+MTDjgIHlhbPkuo7nrKzkuInmlrnotKPku7vnmoTlo7DmmI48L2xpPjxsaT4xMeOAgeacrOmakOengeadg+aUv+etluWmguS9leabtOaWsDwvbGk+PGxpPjEy44CB5pys6ZqQ56eB5p2D5pS/562W5Lit55qE5YWz6ZSu6K+N6K+05piOPC9saT48bGk+MTPjgIHlpoLkvZXogZTns7vmiJHku6w8L2xpPjwvdWw+JyArXHJcbiAgICAnPGgzPuS4gOOAgeaIkeS7rOWPr+iDveaUtumbhueahOS/oeaBrzwvaDM+PHA+5oiR5Lus5pS26ZuG5L+h5oGv5piv5Li65LqG5ZCR5omA5pyJ55So5oi35o+Q5L6b5pu05aW955qE5Lqn5ZOB5oiW5pyN5Yqh77yM5oiR5Lus5qC55o2u5ZCI5rOV44CB5q2j5b2T44CB5b+F6KaB55qE5Y6f5YiZ77yM5LuF5pS26ZuG5a6e546w5Lqn5ZOB5Yqf6IO95omA5b+F6KaB55qE5L+h5oGv77yM5oiR5Lus5omA5pS26ZuG55qE5L+h5oGv57G75Z6L5Li76KaB5YyF5ous5Lul5LiL5Yeg56eN77yaPC9wPjxoND4xLjHmgqjlnKjms6jlhozjgIHnmbvpmYbmiJbogIXkvb/nlKjmiJHku6zkuqflk4HmiJbmnI3liqHml7bkuLvliqjmj5DkvpvnmoTkv6Hmga88L2g0PjxoND7vvIgx77yJ5oKo5Zyo5rOo5YaM5biQ5oi35pe25aGr5YaZ55qE5L+h5oGvPC9oND48cD7mgqjlnKjms6jlhozotKbmiLfmiJbogIXkvb/nlKjmiJHku6znmoTkuqflk4HmiJbmnI3liqHml7bvvIznlLHkuo7mnInnmoTkuqflk4HmiJbmnI3liqHlj6/og73pnIDopoHmgqjmj5DkvpvkuIDkupvlv4XopoHkv6Hmga/miY3og73mraPluLjkvb/nlKjmiJbluKbljrvmm7Tlpb3nmoTkvb/nlKjkvZPpqozvvIzmiYDku6XlnKjnu4/mgqjnmoTlkIzmhI/lkoznoa7orqTlkI7vvIzmiJHku6zlj6/og73kvJrmlLbpm4bmgqjmiYDmj5DkvpvnmoTnm7jlhbPkuKrkurrkv6Hmga/vvIzljIXmi6zlp5PlkI3jgIHmgKfliKvjgIHlubTpvoTjgIHlh7rnlJ/ml6XmnJ/jgIHnlLXlrZDpgq7ku7blnLDlnYDjgIHnlLXor53lj7fnoIHjgIHlm73lrrbjgIHmr43or63jgIHogYzkuJrjgIHkuIrkvKDnmoTlpLTlg4/jgIHliIbkuqvnmoTlhoXlrrnvvIzlpoLmnpzmgqjmj5Dkvpvpop3lpJbkv6Hmga/ooaXlhajkuKrkurrotYTmlpnvvIzlsIbmnInliqnkuo7miJHku6znu5nmgqjmj5Dkvpvmm7Tlpb3nmoTmnI3liqHlkozkvZPpqozjgII8L3A+PHA+5oKo5o+Q5L6b55qE5LiK6L+w5L+h5oGv5bCG5Zyo5oKo5L2/55So5oiR5Lus5o+Q5L6b55qE5pyN5Yqh5pyf6Ze05oyB57ut5o6I5p2D5oiR5Lus5L2/55So44CC5Zyo5oKo5Li75Yqo5rOo6ZSA6LSm5Y+35pe277yM5oiR5Lus5bCG5qC55o2u6YCC55So5rOV5b6L5rOV6KeE55qE6KaB5rGC5bC95b+r5L2/5YW25Yy/5ZCN5oiW5Yig6Zmk5oKo55qE5Liq5Lq65L+h5oGv44CCPC9wPjxoND7vvIgy77yJ5oKo6YCa6L+H5oiR5Lus55qE5a6i5pyN5oiW5Y+C5Yqg6K6v6aOe5Li+5Yqe55qE5rS75Yqo5pe25omA5o+Q5Lqk55qE5L+h5oGvPC9oND48cD7kvovlpoLvvIzmgqjlj4LkuI7orq/po57nur/kuIrmtLvliqjml7bloavlhpnnmoTosIPmn6Xpl67ljbfkuK3lj6/og73ljIXlkKvmgqjnmoTlp5PlkI3jgIHnlLXor53jgIHlrrbluq3lnLDlnYDnrYnkv6Hmga/jgII8L3A+PGg0Pu+8iDPvvInmgqjpgJrov4flhbbku5bmlrnlvI/lkJHorq/po57miYDmj5DkuqTnmoTkv6Hmga88L2g0PjxwPuS+i+Wmgu+8jOaCqOmAmui/h+mCruWvhOaIluS8oOecn+aWueW8j+aPkOS+m+eahOivgeaYjuaWh+S7tuS4reWPr+iDveWMheWQq+aCqOeahOWnk+WQjeOAgeeUteivneOAgeWutuW6reWcsOWdgOetieS/oeaBr+OAgjwvcD48aDQ+MS4y5oiR5Lus5Zyo5oKo5L2/55So5pyN5Yqh5pe26I635Y+W55qE5L+h5oGvPC9oND48cD4oMSnmnI3liqHml6Xlv5fkv6Hmga88L3A+PHA+5Lus5bCG6L+Z57G76Z2e5Liq5Lq65L+h5oGv5LiO5YW25LuW5L+h5oGv57uT5ZCI55So5LqO6K+G5Yir54m55a6a6Ieq54S25Lq66Lqr5Lu977yM5oiW6ICF5bCG5YW25LiO5Liq5Lq65L+h5oGv57uT5ZCI5L2/55So77yM5YiZ5Zyo57uT5ZCI5L2/55So5pyf6Ze077yM6L+Z57G76Z2e5Liq5Lq65L+h5oGv5bCG6KKr6KeG5Li65Liq5Lq65L+h5oGv77yM6Zmk5Y+W5b6X5oKo5o6I5p2D5oiW5rOV5b6L5rOV6KeE5Y+m5pyJ6KeE5a6a5aSW77yM5Lya5bCG6K+l57G75Liq5Lq65L+h5oGv5YGa5Yy/5ZCN5YyW44CB5Y675qCH6K+G5YyW5aSE55CG44CCPC9wPjxoND7vvIgy77yJ6YCa6K6v5pel5b+X5L+h5oGvPC9oND48cD7mgqjlnKjkvb/nlKjmiJHku6znmoTkuqflk4HmiJbmnI3liqHml7bmm77nu4/pgJrorq/nmoTotKbmiLfjgIHpgJrorq/ml7bpl7Tlkozml7bplb/vvIzljIXmi6zmgqjkuI7miJHku6zogZTns7vml7bvvIzmiJHku6zlj6/og73kvJrkv53lrZjmgqjnmoTpgJrkv6Ev6YCa6K+d6K6w5b2V5ZKM6K+t6Z+z44CB5aOw57q554m55b6B5YC8562J5L+h5oGv5oiW5oKo55WZ5LiL55qE6IGU57O75pa55byP562J5L+h5oGv77yM5Lul5L6/5LiO5oKo6IGU57O75oiW5biu5Yqp5oKo6Kej5Yaz6Zeu6aKY77yM5oiW6K6w5b2V55u45YWz6Zeu6aKY55qE5aSE55CG5pa55qGI5Y+K57uT5p6c44CCPC9wPjxoND4xLjPku47orq/po57lhbPogZTlhazlj7jojrflj5bnmoTkv6Hmga88L2g0PjxwPuaIkeS7rOWPr+iDveS8muiOt+W+l+aCqOWcqOS9v+eUqOiur+mjnuWFs+iBlOWFrOWPuOS6p+WTgeaIluacjeWKoeaXtuaJgOS6p+eUn+aIluWIhuS6q+eahOS/oeaBr+OAguS+i+Wmgu+8jOaCqOS9v+eUqOiur+mjnuS6p+WTgeW4kOaIt+eZu+W9leiur+mjnuWFs+iBlOWFrOWPuOS6p+WTgeaIluacjeWKoeaXtu+8jOaIkeS7rOS8muiOt+W+l+aCqOeZu+W9leiur+mjnuWFs+iBlOWFrOWPuOS6p+WTgeaIluacjeWKoeeahOWQjeensOOAgeeZu+W9leaXtumXtO+8jOaWueS+v+aCqOi/m+ihjOaOiOadg+euoeeQhuetiSDjgII8L3A+JyArXHJcbiAgICAnPGg0PjEuNOagueaNruazleW+i+azleinhOeahOS+neazleaUtumbhuS4juS9v+eUqDwvaDQ+PHA+5qC55o2u55u45YWz5rOV5b6L5rOV6KeE5Y+K5Zu95a625qCH5YeG77yM5Zyo5Lul5LiL5oOF5b2i5Lit77yM5oiR5Lus5Y+v6IO95Lya5L6d5rOV5pS26ZuG5bm25L2/55So5oKo55qE5Liq5Lq65L+h5oGv5peg6ZyA5b6B5b6X5oKo55qE5ZCM5oSPOjwvcD48dWw+PGxpPu+8iDHvvInkuI7lm73lrrblronlhajjgIHlm73pmLLlronlhajnm7TmjqXnm7jlhbPnmoTvvJs8L2xpPjxsaT7vvIgy77yJ5LiO5YWs5YWx5a6J5YWo44CB5YWs5YWx5Y2r55Sf44CB6YeN5aSn5YWs5YWx5Yip55uK55u05o6l55u45YWz55qE77ybPC9saT48bGk+77yIM++8ieS4jueKr+e9quS+puafpeOAgei1t+ivieOAgeWuoeWIpOWSjOWIpOWGs+aJp+ihjOetieebtOaOpeebuOWFs+eahO+8mzwvbGk+PGxpPu+8iDTvvInlh7rkuo7nu7TmiqTmgqjmiJbku5bkurrnmoTnlJ/lkb3jgIHotKLkuqfnrYnph43lpKflkIjms5XmnYPnm4rkvYblj4jlvojpmr7lvpfliLDmgqjmnKzkurrlkIzmhI/nmoTvvJs8L2xpPjxsaT7vvIg177yJ5omA5pS26ZuG55qE5Liq5Lq65L+h5oGv5piv5oKo6Ieq6KGM5ZCR56S+5Lya5YWs5LyX5YWs5byA55qE77ybPC9saT48bGk+77yINu+8ieS7juWQiOazleWFrOW8gOaKq+mcsueahOS/oeaBr+S4reaUtumbhuS4quS6uuS/oeaBr++8jOS+i+Wmgu+8muWQiOazleeahOaWsOmXu+aKpemBk+OAgeaUv+W6nOS/oeaBr+WFrOW8gOetiea4oOmBk++8mzwvbGk+PGxpPu+8iDfvvInmoLnmja7mgqjnmoTopoHmsYLnrb7orqLlkozlsaXooYzlkIjlkIzmiYDlv4XpnIDnmoTvvJs8L2xpPjxsaT7vvIg477yJ55So5LqO57u05oqk5omA5o+Q5L6b55qE5pyN5Yqh55qE5a6J5YWo56iz5a6a6L+Q6KGM5omA5b+F6ZyA55qE77yM5L6L5aaC77ya5Y+R546w44CB5aSE572u5Lqn5ZOB5oiW5pyN5Yqh55qE5pWF6Zqc77ybPC9saT48bGk+77yIOe+8ieWtpuacr+eglOeptuacuuaehOWfuuS6juWFrOWFseWIqeebiuW8gOWxlee7n+iuoeaIluWtpuacr+eglOeptuaJgOW/heimge+8jOS4lOWvueWkluaPkOS+m+Wtpuacr+eglOeptuaIluaPj+i/sOeahOe7k+aenOaXtu+8jOWvuee7k+aenOS4reaJgOWMheWQq+eahOS4quS6uuS/oeaBr+i/m+ihjOWOu+agh+ivhuWMluWkhOeQhueahO+8mzwvbGk+PGxpPu+8iDEw77yJ5rOV5b6L5rOV6KeE6KeE5a6a55qE5YW25LuW5oOF5b2i44CCPC9saT48L3VsPjxoND7ooaXlhYXor7TmmI7vvJo8L2g0PjxwPuaIkeS7rOWcqOWQkeaCqOaPkOS+m+WFtuS7luS4muWKoeWKn+iDveaXtu+8jOWPr+iDveS8muWPpuihjOWQkeaCqOivtOaYjuS/oeaBr+aUtumbhueahOiMg+WbtOS4juebrueahO+8jOW5tuW+geW+l+aCqOeahOWQjOaEj+WQjuaWueaUtumbhuaPkOS+m+ebuOW6lOacjeWKoeaJgOW/heimgeeahOaCqOeahOS/oeaBr+OAguaIkeS7rOS8muaMieeFp+acrOaUv+etluS7peWPiuebuOW6lOeahOeUqOaIt+WNj+iurue6puWumuS9v+eUqOOAgeWtmOWCqOOAgeWvueWkluaPkOS+m+WPiuS/neaKpOaCqOeahOS/oeaBr++8mzwvcD48aDM+5LqM44CB5oiR5Lus5aaC5L2V5L2/55SoQ29va2ll44CBQmVhY29u562J5Lul5Y+K5ZCM57G75oqA5pyvPC9oMz48cD7kuLrkvb/mgqjojrflvpfmm7Tovbvmnb7nmoTorr/pl67kvZPpqozvvIzljIXmi6zkvYbkuI3pmZDkuo7mgqjlnKhQQ+eUteiEkeerr+iuv+mXruaIkeS7rOeahOS6p+WTgeaIluS6q+WPl+aIkeS7rOaPkOS+m+eahOacjeWKoeaXtu+8jOaIkeS7rOaIluaIkeS7rOeahOWFs+iBlOWFrOWPuO+8jOWPr+iDveS8mumAmui/h+aUvue9ruWuieWFqOeahENvb2tpZeOAgUJlYWNvbuWPiuebuOWFs+aKgOacr+aUtumbhuaCqOeahOS/oeaBr++8jOebrueahOaYr+S4uuaCqOaPkOS+m+abtOS4quaAp+WMlueahOeUqOaIt+S9k+mqjOWSjOacjeWKoeOAguaIkeS7rOS8muS4peagvOimgeaxguiur+mjnuWFs+iBlOWFrOWPuOmBteWuiOacrOaUv+etlueahOebuOWFs+inhOWumuOAguaCqOS5n+WPr+S7pemAmui/h+a1j+iniOWZqOiuvue9rueuoeeQhkNvb2tpZeOAguS9huivt+azqOaEj++8jOWmguaenOWBnOeUqENvb2tpZe+8jOaCqOWPr+iDveaXoOazleS6q+WPl+acgOS9s+eahOacjeWKoeS9k+mqjO+8jOafkOS6m+S6p+WTgeaIluacjeWKoeS5n+WPr+iDveaXoOazleato+W4uOS9v+eUqOOAgjwvcD48aDM+5LiJ44CB5oiR5Lus5aaC5L2V5a2Y5YKo5L+h5oGvPC9oMz48aDQ+My4x5a2Y5YKo5L+h5oGv55qE5Zyw54K5PC9oND48cD7miJHku6zpgbXlrojms5Xlvovms5Xop4TnmoTop4TlrprvvIzmlLbpm4bnmoTmnInlhbPmgqjnmoTkv6Hmga/lkozotYTmlpnlsIbkv53lrZjlnKjmiJHku6zlj4rvvIjmiJbvvInmiJHku6znmoTlhbPogZTlhazlj7jnmoTmnI3liqHlmajkuIrvvIzov5nkupvkv6Hmga/lkozotYTmlpnlj6/og73kvKDpgIHoh7PmgqjmiYDlnKjnmoTlnLDljLrmiJbmlLbpm4bkv6Hmga/lkozotYTmlpnmiYDlnKjlnLDlubblnKjor6XlnLDooqvorr/pl67jgIHlrZjlgqjlkozlsZXnpLrjgII8L3A+PGg0PjMuMuWtmOWCqOS/oeaBr+eahOacn+mZkDwvaDQ+PHA+5LiA6Iis6ICM6KiA77yM5oiR5Lus5LuF5Li65a6e546w55uu55qE5omA5b+F6ZyA55qE5pyA55+t5pe26Ze05L+d55WZ5oKo55qE5Liq5Lq65L+h5oGv44CC55So5LqO6K+G5Yir5oKo5Liq5Lq66Lqr5Lu95Lul5Y+K5Y+N5pig55u45YWz5rS75Yqo55qE5Liq5Lq65L+h5oGv5bCG55WZ5a2Y6Iez55So5oi35rOo6ZSA6LSm5oi35pe277yM6Zmk6Z2e5rOV5b6L6KaB5rGC5oiW5YWB6K645Zyo5pu06ZW/55qE5pyf6Ze05YaF5L+d55WZ6L+Z5Lqb5L+h5oGv44CC5L2G5Zyo5LiL5YiX5oOF5Ya15LiL77yM5oiR5Lus5pyJ5Y+v6IO95Zug6ZyA56ym5ZCI5rOV5b6L6KaB5rGC77yM5pu05pS55Liq5Lq65L+h5oGv55qE5a2Y5YKo5pe26Ze077yaPC9wPjx1bD48bGk+MeOAgeS4uumBteWuiOmAgueUqOeahOazleW+i+azleinhOetieacieWFs+inhOWumu+8mzwvbGk+PGxpPjLjgIHkuLrpgbXlrojms5XpmaLliKTlhrPjgIHoo4HlrprmiJblhbbku5bms5XlvovnqIvluo/nmoTop4TlrprvvJs8L2xpPjxsaT4z44CB5Li66YG15a6I55u45YWz5pS/5bqc5py65YWz5oiW5rOV5a6a5o6I5p2D57uE57uH55qE6KaB5rGC77ybPC9saT48bGk+NOOAgeaIkeS7rOacieeQhueUseehruS/oemcgOimgemBteWuiOazleW+i+azleinhOetieacieWFs+inhOWumu+8mzwvbGk+PGxpPjXjgIHkuLrmiafooYznm7jlhbPmnI3liqHljY/orq7miJbmnKzmlL/nrZbjgIHnu7TmiqTnpL7kvJrlhazlhbHliKnnm4rvvIzkuLrkv53miqTmiJHku6znmoTlrqLmiLfjgIHmiJHku6zmiJbmiJHku6znmoTlhbPogZTlhazlj7jjgIHlhbbku5bnlKjmiLfmiJbpm4flkZjnmoTkurrouqvotKLkuqflronlhajmiJblhbbku5blkIjms5XmnYPnm4rmiYDlkIjnkIblv4XpnIDnmoTnlKjpgJTjgII8L2xpPjwvdWw+PHA+5Zyo5oKo57uI5q2i5L2/55So5oiR5Lus55qE5Lqn5ZOB5oiW5pyN5Yqh5ZCO77yM5oiR5Lus5Lya5YGc5q2i5a+55oKo55qE5L+h5oGv55qE5pS26ZuG5ZKM5L2/55So77yM5rOV5b6L5rOV6KeE5oiW55uR566h6YOo6Zeo5Y+m5pyJ6KeE5a6a55qE6Zmk5aSW44CCPC9wPjxwPuW9k+aIkeS7rOeahOS6p+WTgeaIluacjeWKoeWPkeeUn+WBnOatoui/kOiQpeeahOaDheW9ouaXtu+8jOaIkeS7rOWwhumHh+WPluaOqOmAgemAmuefpeOAgeWFrOWRiuetieW9ouW8j+mAmuefpeaCqO+8jOW5tuWcqOWQiOeQhueahOacn+mZkOWGheWIoOmZpOacjeWKoeWZqOS4reeVmeWtmOeahOaCqOeahOS4quS6uuS/oeaBr+OAgjwvcD48aDM+5Zub44CB5oiR5Lus5aaC5L2V5L+d5oqk5Liq5Lq65L+h5oGvPC9oMz48aDQ+NC4x5pWw5o2u5a6J5YWo5oqA5pyv5o6q5pa9PC9oND48dWw+PGxpPjHjgIHmiJHku6zkvJrph4fnlKjnrKblkIjkuJrnlYzmoIflh4bnmoTlronlhajpmLLmiqTmjqrmlr3vvIzljIXmi6zlu7rnq4vlkIjnkIbnmoTliLbluqbop4TojIPjgIHlronlhajmioDmnK/mnaXpmLLmraLmgqjnmoTkuKrkurrkv6Hmga/pga3liLDmnKrnu4/mjojmnYPnmoTorr/pl67kvb/nlKjjgIHkv67mlLks6YG/5YWN5pWw5o2u55qE5o2f5Z2P5oiW5Lii5aSx44CCPC9saT48bGk+MuOAgeaIkeS7rOeahOe9kee7nOacjeWKoemHh+WPluS6huS8oOi+k+WxguWuieWFqOWNj+iuruetieWKoOWvhuaKgOacr++8jOmAmui/h2h0dHBz562J5pa55byP5o+Q5L6b5rWP6KeI5pyN5Yqh77yM56Gu5L+d55So5oi35pWw5o2u5Zyo5Lyg6L6T6L+H56iL5Lit55qE5a6J5YWo44CCPC9saT48bGk+M+OAgeaIkeS7rOmHh+WPluWKoOWvhuaKgOacr+WvueeUqOaIt+S4quS6uuS/oeaBr+i/m+ihjOWKoOWvhuS/neWtmO+8jOW5tumAmui/h+malOemu+aKgOacr+i/m+ihjOmalOemu++8jOS+i+Wmgu+8jOS9v+eUqOWKoOWvhuaKgOacr++8iOS+i+Wmgu+8jFRMU+OAgVNTTO+8ieOAgeWMv+WQjeWMluWkhOeQhuetieaJi+auteadpeS/neaKpOaCqOeahOS4quS6uuS/oeaBr+OAgjwvbGk+PGxpPjTjgIHlnKjkuKrkurrkv6Hmga/kvb/nlKjml7bvvIzkvovlpoLkuKrkurrkv6Hmga/lsZXnpLrjgIHkuKrkurrkv6Hmga/lhbPogZTorqHnrpfvvIzmiJHku6zkvJrph4fnlKjljIXmi6zlhoXlrrnmm7/mjaLjgIFTSEEyNTblnKjlhoXlpJrnp43mlbDmja7ohLHmlY/mioDmnK/lop7lvLrkuKrkurrkv6Hmga/lnKjkvb/nlKjkuK3lronlhajmgKfjgII8L2xpPjxsaT4144CB5oiR5Lus6YeH55So5Lil5qC855qE5pWw5o2u6K6/6Zeu5p2D6ZmQ5o6n5Yi25ZKM5aSa6YeN6Lqr5Lu96K6k6K+B5oqA5pyv5L+d5oqk5Liq5Lq65L+h5oGv77yM6YG/5YWN5pWw5o2u6KKr6L+d6KeE5L2/55So44CCPC9saT48bGk+NuOAgeaIkeS7rOmHh+eUqOS7o+eggeWuieWFqOiHquWKqOajgOafpeOAgeaVsOaNruiuv+mXruaXpeW/l+WIhuaekOaKgOacr+i/m+ihjOS4quS6uuS/oeaBr+WuieWFqOWuoeiuoeOAgjwvbGk+PC91bD4nICtcclxuICAgICc8aDQ+NC4y5L+d5oqk5Liq5Lq65L+h5oGv5a6e6KGM55qE5YW25LuW5a6J5YWo5o6q5pa9PC9oND48dWw+PGxpPjHjgIHmiJHku6zpgJrov4flu7rnq4vmlbDmja7liIbnsbvliIbnuqfliLbluqbjgIHmlbDmja7lronlhajnrqHnkIbop4TojIPjgIHmlbDmja7lronlhajlvIDlj5Hop4TojIPmnaXnrqHnkIbop4TojIPkuKrkurrkv6Hmga/nmoTlrZjlgqjlkozkvb/nlKjjgII8L2xpPjxsaT4y44CB5oiR5Lus6YCa6L+H5L+h5oGv5o6l6Kem6ICF5L+d5a+G5Y2P6K6u562J5pa55byP77yM5LuF5YWB6K645pyJ5b+F6KaB55+l5pmT6L+Z5Lqb5L+h5oGv55qE6K6v6aOe5Y+K6K6v6aOe5YWz6IGU5pa555qE5ZGY5bel44CB5ZCI5L2c5LyZ5Ly06K6/6Zeu5Liq5Lq65L+h5oGv77yM5bm25Li65q2k6K6+572u5LqG5Lil5qC855qE6K6/6Zeu5p2D6ZmQ5o6n5Yi25ZKM55uR5o6n5py65Yi244CCPC9saT48bGk+M+OAgeaIkeS7rOWQjOaXtuimgeaxguWPr+iDveaOpeinpuWIsOaCqOS4quS6uuS/oeaBr+eahOaJgOacieS6uuWRmOWxpeihjOebuOW6lOeahOS/neWvhuS5ieWKoeOAguWmguaenOacquiDveWxpeihjOi/meS6m+S5ieWKoe+8jOWPr+iDveS8muiiq+i/veeptuazleW+i+i0o+S7u+aIluiiq+S4reatouS4juiur+mjnueahOWQiOS9nOWFs+ezu+OAgjwvbGk+PGxpPjTjgIHliqDlvLrlronlhajmhI/or4bvvIzorq/po57kvJrkuL7lip7lronlhajlkozpmpDnp4Hkv53miqTln7norq3or77nqIvvvIzliqDlvLrlkZjlt6Xlr7nkuo7kv53miqTkuKrkurrkv6Hmga/ph43opoHmgKfnmoTorqTor4bjgII8L2xpPjwvdWw+PGg0PjQuM+S6kuiBlOe9keW5tumdnue7neWvueWuieWFqOeahOeOr+Wig++8jOiAjOS4lOeUteWtkOmCruS7tuOAgeWNs+aXtumAmuiur+OAgeekvuS6pOi9r+S7tuetieS4juWFtuS7lueUqOaIt+eahOS6pOa1geaWueW8j+aXoOazleehruWumuaYr+WQpuWujOWFqOWKoOWvhu+8jOaIkeS7rOW7uuiuruaCqOS9v+eUqOatpOexu+W3peWFt+aXtuivt+S9v+eUqOWkjeadguWvhuegge+8jOW5tuazqOaEj+S/neaKpOaCqOeahOS4quS6uuS/oeaBr+WuieWFqOOAgjwvaDQ+PGg0PjQuNOS6kuiBlOe9keeOr+Wig+W5tumdnueZvuWIhuS5i+eZvuWuieWFqO+8jOaIkeS7rOWwhuWwveWKm+ehruS/neaIluaLheS/neaCqOWPkemAgee7meaIkeS7rOeahOS7u+S9leS/oeaBr+eahOWuieWFqOaAp+OAguWmguaenOiur+mjnueahOeJqeeQhuOAgeaKgOacr+OAgeaIlueuoeeQhumYsuaKpOiuvuaWvemBreWIsOegtOWdj++8jOWvvOiHtOS/oeaBr+iiq+mdnuaOiOadg+iuv+mXruOAgeWFrOW8gOaKq+mcsuOAgeevoeaUueOAgeaIluavgeWdj++8jOWvvOiHtOaCqOeahOWQiOazleadg+ebiuWPl+aNn++8jOaIkeS7rOWwhuaJv+aLheebuOW6lOeahOazleW+i+i0o+S7u+OAgjwvaDQ+PGg0PjQuNeWuieWFqOS6i+S7tuWkhOe9rjwvaDQ+PHA+5Zyo5LiN5bm45Y+R55Sf5Liq5Lq65L+h5oGv5a6J5YWo5LqL5Lu25ZCO77yM5oiR5Lus5bCG5oyJ54Wn5rOV5b6L5rOV6KeE55qE6KaB5rGC77yM5Y+K5pe25ZCR5oKo5ZGK55+l77ya5a6J5YWo5LqL5Lu255qE5Z+65pys5oOF5Ya15ZKM5Y+v6IO955qE5b2x5ZON44CB5oiR5Lus5bey6YeH5Y+W5oiW5bCG6KaB6YeH5Y+W55qE5aSE572u5o6q5pa944CB5oKo5Y+v6Ieq5Li76Ziy6IyD5ZKM6ZmN5L2O6aOO6Zmp55qE5bu66K6u44CB5a+55oKo55qE6KGl5pWR5o6q5pa9562J44CC5oiR5Lus5bCG5Y+K5pe25bCG5LqL5Lu255u45YWz5oOF5Ya15Lul6YKu5Lu244CB5L+h5Ye944CB55S16K+d44CB5o6o6YCB6YCa55+l562J5pa55byP5ZGK55+l5oKo77yM6Zq+5Lul6YCQ5LiA5ZGK55+l5Liq5Lq65L+h5oGv5Li75L2T5pe277yM5oiR5Lus5Lya6YeH5Y+W5ZCI55CG44CB5pyJ5pWI55qE5pa55byP5Y+R5biD5YWs5ZGK44CC5ZCM5pe277yM5oiR5Lus6L+Y5bCG5oyJ54Wn55uR566h6YOo6Zeo6KaB5rGC77yM5Li75Yqo5LiK5oql5Liq5Lq65L+h5oGv5a6J5YWo5LqL5Lu255qE5aSE572u5oOF5Ya144CCPC9wPjxoMz7kupTjgIHmiJHku6zlpoLkvZXkvb/nlKjmlLbpm4bnmoTkuKrkurrkv6Hmga88L2gzPjxwPuWboOaUtumbhuaCqOeahOS/oeaBr+aYr+S4uuS6huWQkeaCqOaPkOS+m+S6p+WTgeaIluacjeWKoeWQjOaXtuS7peaPkOWNh+acjeWKoei0qOmHj+S4uuebrueahO+8jOS4uuS6huWunueOsOi/meS4gOebrueahO+8jOaIkeS7rOS8muaKiuaCqOeahOS/oeaBr+eUqOS6juS4i+WIl+eUqOmAlOOAguiLpeaIkeS7rOi2heWHuuS7peS4i+eUqOmAlOS9v+eUqOaCqOeahOS/oeaBr++8jOaIkeS7rOWwhuWGjeasoeWQkeaCqOi/m+ihjOivtOaYju+8jOW5tuW+geW+l+aCqOeahOWQjOaEj+OAgjwvcD48aDQ+NS4x5pyN5Yqh5o+Q5L6bPC9oND48cD7lnKjmiJHku6zmj5Dkvpvkuqflk4HmiJbmnI3liqHml7bvvIznlKjkuo7ouqvku73pqozor4HjgIHlrqLmiLfmnI3liqHjgIHlronlhajpmLLojIPjgIHlrZjmoaPlkozlpIfku73nrYnnlKjpgJTvvIznoa7kv53miJHku6zlkJHmgqjmj5Dkvpvkuqflk4HmiJbmnI3liqHnmoTlronlhajmgKfvvIzlubbnu7TmiqTjgIHmlLnov5vov5nkupvmnI3liqHjgII8L3A+PGg0PjUuMua7oei2s+aCqOeahOS4quaAp+WMlumcgOaxgjwvaDQ+PHA+5ZCR5oKo5o6o6I2Q5oKo5Y+v6IO95oSf5YW06Laj55qE5YaF5a6577yM5YyF5ous5L2G5LiN6ZmQ5LqO5ZCR5oKo5Y+R5Ye65Lqn5ZOB5Lul5Y+K5pyN5Yqh5L+h5oGv5oiW6YCa6L+H57O757uf5ZCR5oKo5bGV56S65Liq5oCn5YyW55qE56ys5LiJ5pa55o6o5bm/5L+h5oGv77yM5L6L5aaC5bm/5ZGK44CB6LWE6K6v562J77yM5oiW6ICF5Zyo5b6B5b6X5oKo5ZCM5oSP55qE5oOF5Ya15LiL5LiO5oiR5Lus55qE5YWz6IGU5YWs5Y+45YWx5Lqr5L+h5oGv5Lul5L6/5LuW5Lus5ZCR5oKo5Y+R6YCB5pyJ5YWz5YW25Lqn5ZOB5oiW5pyN5Yqh55qE5L+h5oGv44CCPC9wPjxoND41LjPkuqflk4HlvIDlj5HlkozkvJjljJY8L2g0PjxwPuW9k+aIkeS7rOeahOezu+e7n+WPkeeUn+aVhemanOaXtu+8jOaIkeS7rOS8muiusOW9leWSjOWIhuaekOezu+e7n+aVhemanOaXtuS6p+eUn+eahOS/oeaBr++8jOS8mOWMluaIkeS7rOeahOS6p+WTgeaIluacjeWKoeOAgjwvcD48aDQ+NS405a6J5YWo5L+d6ZqcPC9oND48cD7miJHku6zkvJrlsIbmgqjnmoTkv6Hmga/nlKjkuo7ouqvku73pqozor4HjgIHlronlhajpmLLojIPjgIHlj43or4jpqpfnm5HmtYvjgIHlrZjmoaPlpIfku73jgIHlrqLmiLfnmoTlronlhajmnI3liqHnrYnnlKjpgJTjgILmgqjkuIvovb3miJblronoo4XnmoTlronlhajova/ku7bkvJrlr7nmgbbmhI/nqIvluo/miJbnl4Xmr5Lov5vooYzmo4DmtYvvvIzmiJbkuLrmgqjor4bliKvor4jpqpfkv6Hmga/jgII8L3A+PGg0PjUuNei9r+S7tuiupOivgeaIlueuoeeQhui9r+S7tuWNh+e6pzwvaDQ+PGg0PjUuNuWvueS6juS7juaCqOeahOWQhOenjeiuvuWkh+S4iuaUtumbhuWIsOeahOS/oeaBr++8jOaIkeS7rOWPr+iDveS8muWwhuWug+S7rOi/m+ihjOWFs+iBlO+8jOS7peS+v+iDveWcqOi/meS6m+iuvuWkh+S4iuS4uuaCqOaPkOS+m+S4gOiHtOeahOacjeWKoeOAgjwvaDQ+PGg0PjUuN+mCgOivt+aCqOWPguS4juacieWFs+aIkeS7rOacjeWKoeeahOiwg+afpTwvaDQ+PGg0PjUuOOW4ruWKqeiur+mjnuiuvuiuoeaWsOS6p+WTgeaIluaUuei/m+acjeWKoeaooeW8jzwvaDQ+PHA+5oiR5Lus5Zyo5o+Q5L6b5p+Q5Lqb5Lqn5ZOB5oiW5pyN5Yqh5Lit77yM5Y+v6IO95Lya6K+355So5oi35Y+C5LiO4oCc55So5oi35L2T6aqM5pS56L+b6K6h5YiS4oCd77yM5Yqg5YWl55So5oi35L2T6aqM5pS56L+b6K6h5YiS55qE55So5oi377yM5oiR5Lus5Lya5qC55o2u6ZyA6KaB5a+55Lqn5ZOB5oiW5pyN5Yqh55qE5ZCE6aG55Yqf6IO95L2/55So5oOF5Ya16L+b6KGM57uf6K6h77yM6L+Z5qC35Y+v5Lul6YCa6L+H5YiG5p6Q57uf6K6h5pWw5o2u5o+Q6auY5Lqn5ZOB5oiW5pyN5Yqh6LSo6YeP77yM5o6o5Ye65a+555So5oi35pyJ5biu5Yqp55qE5Yib5paw5Lqn5ZOB5oiW5pyN5Yqh5o+Q5Y2H44CC5aaC5oKo5LiN5oOz5Y+C5LiO6K+l6K6h5YiS77yM5Y+v5Lul6YCJ5oup5YWz6Zet55u45YWz5Lqn5ZOBL+acjeWKoeS4reeahOebuOWFs+WKn+iDveOAgjwvcD48aDQ+NS4557uP55So5oi36K645Y+v5YmN5o+Q5LiL77yM5ZCI55CG55qE5L6d5o2u5Lia5Yqh6K+J5rGC5bCG5L+h5oGv5LiO5ZCI6KeE5YWz6IGU5YWs5Y+45YWx5Lqr44CCPC9oND48aDQ+NS4xMOe7j+aCqOiuuOWPr+eahOWFtuS7lueUqOmAlDwvaDQ+PGgzPuWFreOAgeaIkeS7rOWmguS9leWvueWkluWFseS6q+OAgei9rOiuqeOAgeaKq+mcsuS9v+eUqOaCqOeahOS4quS6uuS/oeaBrzwvaDM+PGg0PjYuMeS/oeaBr+eahOWFseS6qzwvaDQ+PHVsPjxsaT7vvIgx77yJ5oiR5Lus5LiN5Lya5LiO6K6v6aOe5pyN5Yqh5o+Q5L6b6ICF5Lul5aSW55qE5YWs5Y+444CB57uE57uH5ZKM5Liq5Lq65YWx5Lqr5oKo55qE5Liq5Lq65L+h5oGv77yM5L2G5Lul5LiL5oOF5Ya16Zmk5aSW77yaPHVsPjxsaT5hKeS6i+WFiOiOt+W+l+aCqOaYjuehrueahOWQjOaEj+aIluaOiOadg++8jOaIkeS7rOS8muS4juWFtuS7luaWueWFseS6q+aCqOeahOS4quS6uuS/oeaBr++8mzwvbGk+PGxpPmIp5Zyo5rOV5a6a5oOF5b2i5LiL5qC55o2u6YCC55So55qE5rOV5b6L5rOV6KeE44CB5rOV5b6L56iL5bqP55qE6KaB5rGC44CB5by65Yi25oCn55qE6KGM5pS/5oiW5Y+45rOV6KaB5rGC5omA5b+F6aG755qE5oOF5Ya15LiL6L+b6KGM5o+Q5L6b77ybPC9saT48bGk+YynlnKjms5Xlvovms5Xop4TlhYHorrjnmoTojIPlm7TlhoXvvIzkuLrnu7TmiqTorq/po57miJblkIjkvZzkvJnkvLTjgIHmgqjmiJblhbbku5borq/po57nlKjmiLfmiJbnpL7kvJrlhazkvJfliKnnm4rjgIHotKLkuqfmiJblronlhajlhY3pga3mjZ/lrrPogIzmnInlv4XopoHmj5DkvpvvvJs8L2xpPjxsaT5kKeWPquacieWFseS6q+aCqOeahOS/oeaBr++8jOaJjeiDveWunueOsOaIkeS7rOeahOS6p+WTgeS4ji/miJbmnI3liqHnmoTmoLjlv4Plip/og73miJbmj5DkvpvmgqjpnIDopoHnmoTmnI3liqHvvJs8L2xpPjxsaT5lKeespuWQiOS4juaCqOetvue9sueahOebuOWFs+WNj+iuru+8iOWMheaLrOWcqOe6v+etvue9sueahOeUteWtkOWNj+iuruS7peWPiuebuOW6lOeahOW5s+WPsOinhOWIme+8ieaIluWFtuS7lueahOazleW+i+aWh+S7tue6puWumuaJgOaPkOS+m++8mzwvbGk+PGxpPmYp5bqU5oKo6ZyA5rGC5Li65oKo5aSE55CG5oKo5LiO5LuW5Lq655qE57qg57q35oiW5LqJ6K6u77ybPC9saT48bGk+Zynln7rkuo7lrabmnK/noJTnqbbogIzkvb/nlKjvvJs8L2xpPjxsaT5oKeWfuuS6juespuWQiOazleW+i+azleinhOeahOekvuS8muWFrOWFseWIqeebiuiAjOS9v+eUqO+8mzwvbGk+PC91bD48L2xpPjxsaT7vvIgy77yJ5oiR5Lus5Y+v6IO95Lya5bCG5oKo55qE5Liq5Lq65L+h5oGv5LiO5oiR5Lus55qE5YWz6IGU5pa55YWx5Lqr44CC5L2G5Y+q5Lya5YWx5Lqr5b+F6KaB55qE5Liq5Lq65L+h5oGv77yM5LiU5Y+X5pys6ZqQ56eB5pS/562W55qE57qm5p2f77yM5aaC5p6c5oiR5Lus5YWx5Lqr5oKo55qE5Liq5Lq65pWP5oSf5L+h5oGv5oiW5YWz6IGU5YWs5Y+45pS55Y+Y5Liq5Lq65L+h5oGv55qE5L2/55So5Y+K5aSE55CG55uu55qE77yM5bCG5YaN5qyh5b6B5rGC5oKo55qE5o6I5p2D5ZCM5oSP44CCPC9saT48bGk+77yIM++8iSDmiJHku6znmoTmn5DkupvmnI3liqHlsIbnlLHmiJHku6zlkozmjojmnYPlhbPogZTlhazlj7jlhbHlkIzmj5DkvpvvvIzlj6/og73kvJrlkJHlhbPogZTlhazlj7jnrYnnrKzkuInmlrnlhbHkuqvmgqjnmoTkv6Hmga/vvIzku6Xkv53pmpzkuLrmgqjmj5DkvpvnmoTmnI3liqHpobrliKnlrozmiJDjgILmiJHku6zku4XkvJrlh7rkuo7lkIjms5XjgIHmraPlvZPjgIHlv4XopoHjgIHnibnlrprjgIHmmI7noa7nmoTnm67nmoTlhbHkuqvmgqjnmoTkuKrkurrkv6Hmga/vvIzlubbkuJTlj6rkvJrlhbHkuqvmj5DkvpvmnI3liqHmiYDlv4XopoHnmoTkuKrkurrkv6Hmga/jgILmiJHku6znmoTlhbPogZTlhazlj7jml6DmnYPlsIblhbHkuqvnmoTkuKrkurrkv6Hmga/nlKjkuo7kuI7kuqflk4HmiJbmnI3liqHml6DlhbPnmoTlhbbku5bnlKjpgJTjgII8L2xpPjxsaT7vvIg077yJ5Li65LqG6YG15a6I5rOV5b6L44CB5omn6KGM5oiW6YCC55So5oiR5Lus55qE5L2/55So5p2h5Lu25ZKM5YW25LuW5Y2P6K6u77yM5oiW6ICF5Li65LqG5L+d5oqk6K6v6aOe44CB5oKo5oiW5YW25LuW6K6v6aOe5a6i5oi355qE5p2D5Yip5Y+K5YW26LSi5Lqn5oiW5a6J5YWo77yM5q+U5aaC5Li66Ziy5q2i5qy66K+I562J6L+d5rOV5rS75Yqo5ZKM5YeP5bCR5L+h55So6aOO6Zmp77yM6ICM5LiO5YW25LuW5YWs5Y+45ZKM57uE57uH5Lqk5o2i5L+h5oGv44CC5L2G5piv77yM6L+Z5bm25LiN5YyF5ous6L+d5Y+N5pys6ZqQ56eB5pS/562W5Lit5omA5L2c55qE5om/6K+66ICM5Li66I635Yip55uu55qE5Ye65ZSu44CB5Ye656ef44CB5YWx5Lqr5oiW5Lul5YW25a6D5pa55byP5oqr6Zyy55qE5Liq5Lq65L+h5oGv44CCPC9saT48L3VsPicgK1xyXG4gICAgJzxoND42LjLkv6Hmga/nmoTovazorqk8L2g0PjxwPuaIkeS7rOS4jeS8muWwhuaCqOeahOS4quS6uuS/oeaBr+i9rOiuqee7meS7u+S9leWFrOWPuOOAgee7hOe7h+WSjOS4quS6uu+8jOS9huS7peS4i+aDheWGtemZpOWklu+8mjwvcD48dWw+PGxpPjHjgIHkuovlhYjojrflvpfmgqjmmI7noa7nmoTlkIzmhI/miJbmjojmnYPvvIzmiJHku6zkvJrlkJHlhbbku5bmlrnovazorqnmgqjnmoTkuKrkurrkv6Hmga/vvJs8L2xpPjxsaT4y44CB5qC55o2u6YCC55So55qE5rOV5b6L5rOV6KeE44CB5rOV5b6L56iL5bqP55qE6KaB5rGC44CB5by65Yi25oCn55qE6KGM5pS/5oiW5Y+45rOV6KaB5rGC5omA5b+F6aG755qE5oOF5Ya15LiL6L+b6KGM5o+Q5L6b77ybPC9saT48bGk+M+OAgeespuWQiOS4juaCqOetvue9sueahOebuOWFs+WNj+iuru+8iOWMheaLrOWcqOe6v+etvue9sueahOeUteWtkOWNj+iuruS7peWPiuebuOW6lOeahOW5s+WPsOinhOWIme+8ieaIluWFtuS7lueahOazleW+i+aWh+S7tue6puWumuaJgOaPkOS+m++8mzwvbGk+PGxpPjTjgIHlnKjmtonlj4rlkIjlubbjgIHmlLbotK3miJbnoLTkuqfmuIXnrpfmg4XlvaLvvIzmiJblhbbku5bmtonlj4rlkIjlubbjgIHmlLbotK3miJbnoLTkuqfmuIXnrpfmg4XlvaLml7bvvIzlpoLmtonlj4rliLDkuKrkurrkv6Hmga/ovazorqnvvIzmiJHku6zkvJropoHmsYLmlrDnmoTmjIHmnInmgqjkuKrkurrkv6Hmga/nmoTlhazlj7jjgIHnu4Tnu4fnu6fnu63lj5fmnKzmlL/nrZbnmoTnuqbmnZ/vvIzlkKbliJnmiJHku6zlsIbopoHmsYLor6Xlhazlj7jjgIHnu4Tnu4flkozkuKrkurrph43mlrDlkJHmgqjlvoHmsYLmjojmnYPlkIzmhI/vvJs8bGk+PC91bD48aDQ+Ni4z5L+h5oGv55qE5oqr6ZyyPC9oND48cD7miJHku6zku4XkvJrlnKjku6XkuIvmg4XlhrXkuIvvvIzlhazlvIDmiqvpnLLmgqjnmoTkuKrkurrkv6Hmga/vvJo8L3A+PHVsPjxsaT4x44CB6I635b6X5oKo5piO56Gu5ZCM5oSP5oiW5Z+65LqO5oKo55qE5Li75Yqo6YCJ5oup77yM5oiR5Lus5Y+v6IO95Lya5YWs5byA5oqr6Zyy5oKo55qE5Liq5Lq65L+h5oGv77ybPC9saT48bGk+MuOAgeWmguaenOaIkeS7rOehruWumuaCqOWHuueOsOi/neWPjeazleW+i+azleinhOaIluS4pemHjei/neWPjeaIkeS7rOeahOebuOWFs+WNj+iuruinhOWImeeahOaDheWGteaIluWFtuS7luWPr+iDveeahOe0p+aApeaDheWGteS4i++8jOS4uuS6huS/neaKpOaIkeS7rOWPiuWFtuWFs+iBlOWFrOWPuOeUqOaIt+aIluWFrOS8l+eahOS6uui6q+i0ouS6p+WuieWFqOWFjemBreS+teWus++8jOaIkeS7rOWPr+iDveS+neaNruazleW+i+azleinhOaIluaIkeS7rOeahOebuOWFs+WNj+iuruinhOWImeW+geW+l+aCqOWQjOaEj+eahOaDheWGteS4i+aKq+mcsuWFs+S6juaCqOeahOS4quS6uuS/oeaBr++8jOWMheaLrOebuOWFs+i/neinhOihjOS4uuS7peWPiuaIkeS7rOW3suWvueaCqOmHh+WPlueahOaOquaWve+8mzwvbGk+PGxpPjPjgIHmgqjkvb/nlKjlhbHkuqvlip/og73nmoTvvJs8L2xpPjxsaT4044CB56ym5ZCI5oiR5Lus55qE55u45YWz5Lqn5ZOB5oiW5pyN5Yqh55qE55So5oi35Y2P6K6u5oiW5YW25LuW57G75Ly85Y2P6K6u55qE6KeE5a6a77ybPC9saT48L3VsPjxoND42LjTlhbHkuqvjgIHovazorqnjgIHmiqvpnLLkuKrkurrkv6Hmga/ml7bkuovlhYjlvoHlvpfmjojmnYPlkIzmhI/nmoTkvovlpJY8L2g0PjxwPuS7peS4i+aDheW9ouS4re+8jOWFseS6q+OAgei9rOiuqeOAgeWFrOW8gOaKq+mcsuaCqOeahOS4quS6uuS/oeaBr+aXoOmcgOS6i+WFiOW+geW+l+aCqOeahOaOiOadg+WQjOaEj++8mjwvcD48dWw+PGxpPjHjgIHkuI7lm73lrrblronlhajjgIHlm73pmLLlronlhajmnInlhbPnmoTvvJs8L2xpPjxsaT4y44CB5LiO5YWs5YWx5a6J5YWo44CB5YWs5YWx5Y2r55Sf44CB6YeN5aSn5YWs5YWx5Yip55uK5pyJ5YWz55qE77ybPC9saT48bGk+M+OAgeS4jueKr+e9quS+puafpeOAgei1t+ivieOAgeWuoeWIpOWSjOWIpOWGs+aJp+ihjOetieacieWFs+eahO+8mzwvbGk+PGxpPjTjgIHlh7rkuo7nu7TmiqTmgqjmiJblhbbku5bkuKrkurrnmoTnlJ/lkb3jgIHotKLkuqfnrYnph43lpKflkIjms5XmnYPnm4rkvYblj4jlvojpmr7lvpfliLDmnKzkurrlkIzmhI/nmoTvvJs8L2xpPjxsaT4144CB5oKo6Ieq6KGM5ZCR56S+5Lya5YWs5LyX5YWs5byA55qE5Liq5Lq65L+h5oGv77ybPC9saT48bGk+NuOAgeS7juWQiOazleWFrOW8gOaKq+mcsueahOS/oeaBr+S4reaUtumbhuS4quS6uuS/oeaBr+eahO+8jOWmguWQiOazleeahOaWsOmXu+aKpemBk+OAgeaUv+W6nOS/oeaBr+WFrOW8gOetiea4oOmBk+OAgjwvbGk+PGxpPjfjgIHmoLnmja7ms5Xlvovop4TlrprvvIzlhbHkuqvjgIHovazorqnnu4/ljrvmoIfor4bljJblpITnkIbnmoTkuKrkurrkv6Hmga/vvIzkuJTnoa7kv53mlbDmja7mjqXmlLbmlrnml6Dms5XlpI3ljp/lubbph43mlrDor4bliKvkuKrkurrkv6Hmga/kuLvkvZPnmoTvvIzkuI3lsZ7kuo7kuKrkurrkv6Hmga/nmoTlr7nlpJblhbHkuqvjgIHovazorqnlj4rlhazlvIDmiqvpnLLooYzkuLrvvIzlr7nmraTnsbvmlbDmja7nmoTkv53lrZjlj4rlpITnkIblsIbml6DpnIDlj6booYzlkJHmgqjpgJrnn6XlubblvoHlvpfmgqjnmoTlkIzmhI/jgII8L2xpPjwvdWw+PGgzPuS4g+OAgeaIkeS7rOWmguS9leWkhOeQhuacquaIkOW5tOS6uueahOS4quS6uuS/oeaBrzwvaDM+PHA+MeOAgeaIkeS7rOmdnuW4uOmHjeinhuWvueacquaIkOW5tOS6uuS4quS6uuS/oeaBr+eahOS/neaKpDwvcD48cD7moLnmja7lm73lrrbnm7jlhbPms5Xlvovms5Xop4TvvIzmlLbpm4blubTmu6ExNOWRqOWygeeahOacquaIkOW5tOS6uueahOS4quS6uuS/oeaBr+WJje+8jOW6lOW+geW+l+acquaIkOW5tOS6uuaIluWFtuazleWumuebkeaKpOS6uueahOaYjuekuuWQjOaEj++8myDkuI3mu6ExNOWRqOWygeeahO+8jOW6lOW+geW+l+WFtuazleWumuebkeaKpOS6uueahOaYjuekuuWQjOaEj+OAgu+8iOWwveeuoeWQhOWcsOazleW+i+WSjOS5oOS/l+WvueacquaIkOW5tOS6uu+8iOWEv+erpe+8ieeahOWumuS5ieS4jeWQjO+8jCDkvYbmiJHku6zlsIbkuI3mu6ExNCDlkajlsoHnmoTku7vkvZXkurrlnYfop4bkuLrmnKrmiJDlubTkurrvvIjlhL/nq6XvvInjgILvvInlpoLmnpzmsqHmnInlrrbplb/miJbms5Xlrprnm5HmiqTkurrnmoTlkIzmhI/vvIzmnKrmiJDlubTkurrkuI3lvpfliJvlu7roh6rlt7HnmoTnlKjmiLfluJDlj7fjgILlpoLmgqjkuLrmnKrmiJDlubTkurrvvIzor7flnKjniLbmr43miJbnm5HmiqTkurrnmoTpmarlkIzlkozluK7liqnkuIvku5Tnu4bpmIXor7vmnKzpmpDnp4HmnYPmlL/nrZbvvIzlubblnKjlvoHlvpfmgqjnmoTniLbmr43miJbnm5HmiqTkurrlkIzmhI/nmoTliY3mj5DkuIvkvb/nlKjmiJHku6znmoTmnI3liqHmiJblkJHmiJHku6zmj5Dkvpvkv6Hmga/jgILlr7nkuo7nu4/niLbmr43miJbms5Xlrprnm5HmiqTkurrlkIzmhI/ogIzmlLbpm4bmnKrmiJDlubTkurrkuKrkurrkv6Hmga/nmoTmg4XlhrXvvIzmiJHku6zlj6rkvJrlnKjlj5fliLDms5XlvovlhYHorrjjgIHlrrbplb/miJbms5Xlrprnm5HmiqTkurrmmI7noa7lkIzmhI/miJbogIXkv53miqTmnKrmiJDlubTkurrmiYDlv4XopoHnmoTmg4XlhrXkuIvkvb/nlKjmiJblhazlvIDmiqvpnLLmraTkv6Hmga/jgILlpoLmnpzmiJHku6zlj5HnjrDoh6rlt7HlnKjmnKrkuovlhYjojrflvpflj6/or4Hlrp7nmoTniLbmr43lkIzmhI/nmoTmg4XlhrXkuIvmlLbpm4bkuobmnKrmiJDlubTkurrnmoTkuKrkurrkv6Hmga/vvIzliJnkvJrorr7ms5XlsL3lv6vliKDpmaTnm7jlhbPmlbDmja7jgII8L3A+PHA+MuOAgeWmguaenOaIkeS7rOWPkeeOsOiHquW3seWcqOacquS6i+WFiOiOt+W+l+WPr+ivgeWunueahOeItuavjeWQjOaEj+eahOaDheWGteS4i+aUtumbhuS6huacquaIkOW5tOS6uueahOS4quS6uuS/oeaBr++8jOWImeS8muiuvuazleWwveW/q+WIoOmZpOebuOWFs+aVsOaNruOAgjwvcD48aDM+5YWr44CB5oKo5aaC5L2V566h55CG6Ieq5bex55qE5Liq5Lq65L+h5oGvPC9oMz48cD4x44CB5oKo5pyJ5p2D6K6/6Zeu44CB5pu05q2j44CB5Yig6Zmk5oKo55qE5Liq5Lq65L+h5oGvLOS9huebuOWFs+S/oeaBr+eahOWIoOmZpOaIluS/ruaUueWPr+iDveS8muW9seWTjeaCqOWvueebuOWFs+S6p+WTgeaIluacjeWKoeeahOS9v+eUqOaIluWvvOiHtOmDqOWIhuWKn+iDveeahOWunueOsOOAguaCqOWPr+S7pemAmui/h+eZu+W9leWQjuafpeeci+S4quS6uuS4reW/g+adpeiuv+mXruOAgeabtOato+aCqOeahOS4quS6uuS/oeaBr++8jOWPr+S7pemAmui/h+WuouacjeeUteivnTQwMDAxOTkxOTnogZTns7vmiJHku6zmnaXliKDpmaTmgqjnmoTkuKrkurrkv6Hmga/jgII8L3A+PHA+MuOAgeaCqOacieadg+aUueWPmOaCqOaOiOadg+WQjOaEj+eahOiMg+WbtOaIluaSpOWbnuaCqOeahOaOiOadg++8jOaCqOWPr+S7pemAmui/h+WIoOmZpOS/oeaBr+OAgeWFs+mXreiuvuWkh+WKn+iDveOAgeWcqOe9keermeaIlui9r+S7tuS4rei/m+ihjOmakOengeiuvue9ruetieaWueW8j+aUueWPmOaCqOaOiOadg+aIkeS7rOe7p+e7reaUtumbhuS4quS6uuS/oeaBr+eahOiMg+WbtOaIluaSpOWbnuaCqOeahOaOiOadg+OAguaCqOS5n+WPr+S7pemAmui/h+WuouacjeeUteivnTQwMDAxOTkxOTnogZTns7vmiJHku6zvvIzmkqTlm57miJHku6znu6fnu63mlLbpm4bmgqjkuKrkurrkv6Hmga/nmoTlhajpg6jmjojmnYPjgILor7fmgqjnkIbop6PvvIzmr4/kuKrkuJrliqHlip/og73pnIDopoHkuIDkupvln7rmnKznmoTkuKrkurrkv6Hmga/miY3og73lvpfku6XlrozmiJDvvIzlvZPmgqjmkqTlm57lkIzmhI/miJbmjojmnYPlkI7vvIzmiJHku6zml6Dms5Xnu6fnu63kuLrmgqjmj5DkvpvmkqTlm57lkIzmhI/miJbmjojmnYPmiYDlr7nlupTnmoTmnI3liqHvvIzkuZ/kuI3lho3lpITnkIbmgqjnm7jlupTnmoTkuKrkurrkv6Hmga/jgILkvYbmgqjmkqTlm57lkIzmhI/miJbmjojmnYPnmoTlhrPlrprvvIzkuI3kvJrlvbHlk43mraTliY3ln7rkuo7mgqjnmoTmjojmnYPogIzlvIDlsZXnmoTkuKrkurrkv6Hmga/lpITnkIbjgII8L3A+PHA+M+OAgeaCqOS5n+WPr+S7peWcqOa7oei2s+ebuOWFs+S6p+WTgeaIluacjeWKoee6puWumuadoeS7tueahOaDheWGteS4i++8jOiBlOezu+aIkeS7rOeUs+ivt+azqOmUgOebuOWFs+S6p+WTgei0puaIt+OAguaCqOazqOmUgOi0puaIt+WQju+8jOaIkeS7rOWwhuWBnOatouS4uuaCqOaPkOS+m+S6p+WTgeS4ji/miJbmnI3liqHvvIzlubbkvp3mja7mgqjnmoTopoHmsYLvvIzpmaTms5Xlvovms5Xop4Tlj6bmnInop4TlrprlpJbvvIzmiJHku6zlsIbliKDpmaTmgqjnmoTkuKrkurrkv6Hmga/jgII8L3A+PHA+NOOAgeaIkeS7rOWwhumHh+WPlumAguW9k+eahOaKgOacr+aJi+aute+8jOS/neivgeaCqOWvueS6juiHquW3seeahOS4quS6uui1hOaWmeWPr+i/m+ihjOafpeivouOAgeihpeWFheOAgeabtOato+aIluWIoOmZpO+8jOaIlumAmui/h+iur+mjnuebuOWFs+S6p+WTgeaIluacjeWKoeWPkeW4g+eahOWPjemmiOaIluaKleiviea4oOmBk+eUs+ivt+aIkeS7rOWvueebuOWFs+S/oeaBr+i/m+ihjOihpeWFheOAgeabtOato+aIluWIoOmZpO+8m+aIkeS7rOaUtuWIsOaCqOeahOeUs+ivt+WQjuWwhuaMiea1geeoi+S6iOS7peWkhOeQhu+8jOS4uuS/nemanOWuieWFqO+8jCDmjInnhafmtYHnqIvvvIzmgqjlj6/og73pnIDopoHmj5DkvpvkuabpnaLor7fmsYLvvIwg5oiW5Lul5YW25LuW5pa55byP6K+B5piO5oKo55qE6Lqr5Lu944CC5oiR5Lus5Y+v6IO95Lya5YWI6KaB5rGC5oKo6aqM6K+B6Ieq5bex55qE6Lqr5Lu977yM54S25ZCO5YaN5aSE55CG5oKo55qE6K+35rGC44CCIOaIkeS7rOWwhuWcqDE15aSp5YaF5YGa5Ye6562U5aSN77yM5a+55LqO5oKo5ZCI55CG55qE6K+35rGC77yMIOaIkeS7rOWOn+WImeS4iuS4jeaUtuWPlui0ueeUqO+8jCDkvYblr7nlpJrmrKHph43lpI3jgIEg6LaF5Ye65ZCI55CG6ZmQ5bqm55qE6K+35rGC77yMIOaIkeS7rOWwhuinhuaDheWGteaUtuWPluS4gOWumuaIkOacrOi0ueeUqOOAgiDlr7nkuo7pgqPkupvml6Dnq6/ph43lpI3jgIEg6ZyA6KaB6L+H5aSa5oqA5pyv5omL5q6177yI5L6L5aaC77yM6ZyA6KaB5byA5Y+R5paw57O757uf5oiW5LuO5qC55pys5LiK5pS55Y+Y546w6KGM5oOv5L6L77yJ44CB57uZ5LuW5Lq65ZCI5rOV5p2D55uK5bim5p2l6aOO6Zmp5oiW6ICF6Z2e5bi45LiN5YiH5a6e6ZmF77yI5L6L5aaC77yMIOa2ieWPiuWkh+S7veejgeW4puS4iuWtmOaUvueahOS/oeaBr++8ieeahOivt+axgu+8jOaIkeS7rOWPr+iDveS8muS6iOS7peaLkue7neOAgjwvcD48cD7lnKjku6XkuIvmg4XlvaLkuK3vvIzmjInnhafms5Xlvovms5Xop4TopoHmsYLvvIzmiJHku6zlsIbml6Dms5Xlk43lupTmgqjnmoTor7fmsYLvvJo8L3A+PHVsPjxsaT5hKeS4juWbveWutuWuieWFqOOAgeWbvemYsuWuieWFqOebtOaOpeebuOWFs+eahO+8mzwvbGk+PGxpPmIp5LiO5YWs5YWx5a6J5YWo44CB5YWs5YWx5Y2r55Sf44CB6YeN5aSn5YWs5YWx5Yip55uK55u05o6l55u45YWz55qE77ybPC9saT48bGk+YynkuI7niq/nvarkvqbmn6XjgIHotbfor4njgIHlrqHliKTlkozliKTlhrPmiafooYznrYnnm7TmjqXnm7jlhbPnmoTvvJs8L2xpPjxsaT5kKeacieWFheWIhuivgeaNruihqOaDheaCqOWtmOWcqOS4u+inguaBtuaEj+aIlua7peeUqOadg+WKm+eahO+8mzwvbGk+PGxpPmUp5ZON5bqU5oKo55qE6K+35rGC5bCG5a+86Ie05oKo5oiW5YW25LuW5Liq5Lq644CBIOe7hOe7h+eahOWQiOazleadg+ebiuWPl+WIsOS4pemHjeaNn+Wus+eahO+8mzwvbGk+PGxpPmYp5raJ5Y+K5ZWG5Lia56eY5a+G55qE77ybPC9saT48L3VsPjxwPjXjgIHlpoLmnpzmgqjml6Dms5Xorr/pl67jgIHmm7TmraPmiJbliKDpmaTmgqjnmoTkuKrkurrkv6Hmga/vvIzmiJbmgqjpnIDopoHorr/pl67jgIHmm7TmraPmiJbliKDpmaTmgqjlnKjkvb/nlKjmiJHku6znmoTkuqflk4HmiJbmnI3liqHml7bmiYDkuqfnlJ/nmoTlhbbku5bkuKrkurrkv6Hmga/vvIzmiJbmgqjorqTkuLrmiJHku6zlrZjlnKjku7vkvZXov53lj43ms5Xlvovms5Xop4TmiJbkuI7mgqjlhbPkuo7kuKrkurrkv6Hmga/nmoTmlLbpm4bmiJbkvb/nlKjnmoTnuqblrprvvIzmgqjlj6/pgJrov4fmiJHku6zlr7nlpJblhazluIPnmoTnm7jlhbPkuqflk4HmiJbmnI3liqHnmoTlrpjmlrnlj43ppojmuKDpgZPkuI7miJHku6zogZTns7vjgII8L3A+JyArXHJcbiAgICAnPGgzPuS5neOAgeaCqOeahOS4quS6uuS/oeaBr+WmguS9leWcqOWFqOeQg+iMg+WbtOi9rOenuzwvaDM+PGg0PuaIkeS7rOWcqOS4reWNjuS6uuawkeWFseWSjOWbveWig+WGheaUtumbhuS6p+eUn+eahOS4quS6uuS/oeaBr++8jOWtmOWCqOWcqOS4reWbveWig+WGhe+8jOS7peS4i+aDheW9oumZpOWklu+8mjwvaDQ+PHA+MeOAgeazleW+i+azleinhOacieaYjuehruinhOWumu+8mzwvcD48cD4y44CB6I635b6X5oKo55qE5piO56Gu5o6I5p2D77ybPC9wPjxwPjPjgIHmgqjpgJrov4fkupLogZTnvZHov5vooYzot6jlooPnm7Tmkq0v5Y+R5biD5Yqo5oCB562J5Liq5Lq65Li75Yqo6KGM5Li644CCPC9wPjxwPumSiOWvueS7peS4iuaDheW9ou+8jOaIkeS7rOS8muehruS/neS+neaNruacrOmakOengeadg+aUv+etluWvueaCqOeahOS4quS6uuS/oeaBr+aPkOS+m+i2s+Wkn+eahOS/neaKpOOAgjwvcD48aDM+5Y2B44CB5YWz5LqO56ys5LiJ5pa56LSj5Lu755qE5aOw5piOPC9oMz48aDQ+6Zmk5pys5pS/562W5bey5YiX5piO55qE5YWN6LSj5oOF5Ya15aSW77yM5LiL5YiX5oOF5Ya15oiR5Lus5Lmf5peg6aG75om/5ouF5Lu75L2V6LSj5Lu777yaPC9oND48cD4xLiDnlLHkuo7mgqjlsIbnlKjmiLflr4bnoIHlkYrnn6Xku5bkurrjgIHkuI7ku5bkurrlhbHkuqvms6jlhozotKbmiLfmiJblhbbku5blm6DmgqjkuKrkurrkv53nrqHkuI3lloTvvIznlLHmraTlr7zoh7TnmoTku7vkvZXkuKrkurrotYTmlpnms4TpnLLjgIHkuKLlpLHjgIHooqvnm5fnlKjmiJbooqvnr6HmlLnnrYnjgII8L3A+PHA+Mi4g5Lu75L2V55Sx5LqO6buR5a6i5pS/5Ye744CB6K6h566X5py655eF5q+S5L615YWl5oiW5Y+R5L2c44CB5Zug5pS/5bqc566h5Yi26ICM6YCg5oiQ55qE5pqC5pe25oCn5YWz6Zet562J5b2x5ZON572R57uc5q2j5bi457uP6JCl5LmL5LiN5Y+v5oqX5Yqb6ICM6YCg5oiQ55qE5Liq5Lq66LWE5paZ5rOE6Zyy44CB5Lii5aSx44CB6KKr55uX55So5oiW6KKr56+h5pS5562J44CCPC9wPjxwPjMuIOeUseS6juS4juaIkeS7rOmTvuaOpeeahOWFtuS7lue9keermeaJgOmAoOaIkOeahOS4quS6uuS/oeaBr+eahOazhOmcsuWPiueUseatpOS6p+eUn+eahOS7u+S9leazleW+i+S6ieiuruWSjOWQjuaenOOAgjwvcD48cD40LiDlhbblroPpnZ7miJHku6zljp/lm6Dlr7zoh7TnmoTkuKrkurrkv6Hmga/nmoTms4TpnLLlj4rnlLHmraTkuqfnlJ/nmoTku7vkvZXms5Xlvovkuonorq7lkozlkI7mnpzjgII8L3A+PGgzPuWNgeS4gOOAgeacrOmakOengeadg+aUv+etluWmguS9leabtOaWsDwvaDM+PGg0PuaIkeS7rOeahOmakOengeadg+aUv+etluWPr+iDveWPmOabtOOAgjwvaDQ+PHA+77yIMe+8ieacque7j+aCqOaYjuehruWQjOaEj++8jOaIkeS7rOS4jeS8muWJiuWHj+aCqOaMieeFp+acrOmakOengeadg+aUv+etluaJgOW6lOS6q+acieeahOadg+WIqeOAguaIkeS7rOS8muWcqOS4k+mXqOmhtemdouS4iuWPkeW4g+WvuemakOengeadg+aUv+etluaJgOWBmueahOS7u+S9leWPmOabtOOAguWQjOaXtuaIkeS7rOS8muWwhuacrOaUv+etlueahOaXp+eJiOacrOWtmOaho++8jOS+m+aCqOafpemYheOAgjwvcD48cD7vvIgy77yJ5a+55LqO6YeN5aSn5Y+Y5pu077yM5oiR5Lus6L+Y5Lya5o+Q5L6b5pu05Li65pi+6JGX55qE6YCa55+l77yM5YyF5ous5oiR5Lus5Lya6YCa6L+H572R56uZ5YWs56S655qE5pa55byP6L+b6KGM6YCa55+l55Sa6Iez5ZCR5oKo5o+Q5L6b5by556qX5o+Q56S644CCPC9wPjxoND7mnKzmlL/nrZbmiYDmjIfnmoTph43lpKflj5jmm7TljIXmi6zkvYbkuI3pmZDkuo7vvJo8L2g0Pjx1bD48bGk+77yIMe+8ieaIkeS7rOeahOacjeWKoeaooeW8j+WPkeeUn+mHjeWkp+WPmOWMluOAguWmguWkhOeQhuS4quS6uuS/oeaBr+eahOebrueahOOAgeWkhOeQhueahOS4quS6uuS/oeaBr+exu+Wei+OAgeS4quS6uuS/oeaBr+eahOS9v+eUqOaWueW8j+etie+8mzwvbGk+PGxpPu+8iDLvvInmiJHku6zlnKjmjqfliLbmnYPnrYnmlrnpnaLlj5HnlJ/ph43lpKflj5jljJbjgILlpoLlubbotK3ph43nu4TnrYnlvJXotbfnmoTmiYDmnInogIXlj5jmm7TnrYnvvJs8L2xpPjxsaT7vvIgz77yJ5Liq5Lq65L+h5oGv5YWx5Lqr44CB6L2s6K6p5oiW5YWs5byA5oqr6Zyy55qE5Li76KaB5a+56LGh5Y+R55Sf5Y+Y5YyW77ybPC9saT48bGk+77yINO+8ieaCqOWPguS4juS4quS6uuS/oeaBr+WkhOeQhuaWuemdoueahOadg+WIqeWPiuWFtuihjOS9v+aWueW8j+WPkeeUn+mHjeWkp+WPmOWMlu+8mzwvbGk+PGxpPu+8iDXvvInmiJHku6zotJ/otKPlpITnkIbkuKrkurrkv6Hmga/lronlhajnmoTotKPku7vpg6jpl6jjgIHogZTnu5zmlrnlvI/lj4rmipXor4nmuKDpgZPlj5HnlJ/lj5jljJbml7bvvJs8L2xpPjxsaT7vvIg277yJ5Liq5Lq65L+h5oGv5a6J5YWo5b2x5ZON6K+E5Lyw5oql5ZGK6KGo5piO5a2Y5Zyo6auY6aOO6Zmp5pe277ybPC9saT48bGk+77yIN++8ieS8tOmaj+aUv+etluaIluazleW+i+WPkeW4g+WunuaWve+8jOS4uuWTjeW6lOWbveWutuaUv+etluaIluiAheazleW+i+inhOiMg++8jOWBmuWHuuWPmOabtO+8mzwvbGk+PC91bD48aDM+5Y2B5LqM44CB5pys6ZqQ56eB5p2D5pS/562W5Lit55qE5YWz6ZSu6K+N6K+05piOPC9oMz48aDQ+5Liq5Lq65L+h5oGvPC9oND48cD7kuKrkurrkv6Hmga/mmK/mjIfku6XnlLXlrZDmiJbogIXlhbbku5bmlrnlvI/orrDlvZXnmoTog73lpJ/ljZXni6zmiJbogIXkuI7lhbbku5bkv6Hmga/nu5PlkIjor4bliKvoh6rnhLbkurrkuKrkurrouqvku73nmoTlkITnp43kv6Hmga/vvIzljIXmi6zkvYbkuI3pmZDkuo7oh6rnhLbkurrnmoTlp5PlkI3jgIHlh7rnlJ/ml6XmnJ/jgIHouqvku73or4Hku7blj7fnoIHjgIHkuKrkurrnlJ/nianor4bliKvkv6Hmga/jgIHkvY/lnYDjgIHnlLXor53lj7fnoIHnrYnjgII8L3A+PGg0PuS4quS6uuaVj+aEn+S/oeaBrzwvaDQ+PHA+5Liq5Lq65pWP5oSf5L+h5oGv5piv5oyH5LiA5pem5rOE6Zyy44CB6Z2e5rOV5o+Q5L6b5oiW5rul55So5Y+v6IO95Y2x5a6z5Lq66Lqr5ZKM6LSi5Lqn5a6J5YWo77yM5p6B5piT5a+86Ie05Liq5Lq65ZCN6KqJ44CB6Lqr5b+D5YGl5bq35Y+X5Yiw5o2f5a6z5oiW5q2n6KeG5oCn5b6F6YGH562J55qE5Liq5Lq65L+h5oGv44CC5L6L5aaC77yM5Liq5Lq65pWP5oSf5L+h5oGv5YyF5ous6Lqr5Lu96K+B5Lu25Y+356CB44CB5Liq5Lq655Sf54mp6K+G5Yir5L+h5oGv44CB6ZO26KGM6LSm5Y+344CB6YCa5L+h5YaF5a6544CB5YGl5bq355Sf55CG5L+h5oGv562J44CCPC9wPjxoND7orr7lpIc8L2g0PjxwPuiuvuWkh+aYr+aMh+WPr+eUqOS6juiuv+mXruacjeWKoeeahOijhee9ru+8jOS+i+WmguWPsOW8j+iuoeeul+acuuOAgeeslOiusOacrOeUteiEkeOAgeW5s+adv+eUteiEkeaIluaZuuiDveaJi+acuuOAgjwvcD48aDQ+5ZSv5LiA6K6+5aSH5qCH6K+G56ymPC9oND48cD7llK/kuIDorr7lpIfmoIfor4bnrKbvvIjkuJPlsZ5JRCDmiJZVVUlE77yJ5piv5oyH55Sx6K6+5aSH5Yi26YCg5ZWG57yW5YWl5Yiw6K6+5aSH5Lit55qE5LiA5Liy5a2X56ym77yM5Y+v55So5LqO5Lul54us5pyJ5pa55byP5qCH6K+G55u45bqU6K6+5aSH77yI5L6L5aaC5omL5py655qESU1FSSDlj7fvvInjgILllK/kuIDorr7lpIfmoIfor4bnrKbmnInlpJrnp43nlKjpgJTvvIzlhbbkuK3lj6/lnKjkuI3og73kvb/nlKhjb29raWVz77yI5L6L5aaC5Zyo56e75Yqo5bqU55So56iL5bqP5Lit77yJ5pe255So5Lul5o+Q5L6b5bm/5ZGK44CCPC9wPjxoND5JUOWcsOWdgDwvaDQ+PHA+5q+P5Y+w5LiK572R55qE6K6+5aSH6YO95Lya5oyH5a6a5LiA5Liq57yW5Y+377yM56ew5Li65LqS6IGU572R5Y2P6K6uIChJUCkg5Zyw5Z2A44CC6L+Z5Lqb57yW5Y+36YCa5bi46YO95piv5qC55o2u5Zyw55CG5Yy65Z+f5oyH5a6a55qE44CCSVAg5Zyw5Z2A6YCa5bi45Y+v55So5LqO6K+G5Yir6K6+5aSH6L+e5o6l6Iez5LqS6IGU572R5pe25omA5Zyo55qE5L2N572u44CCPC9wPjxoND5HUFM8L2g0PjxwPkdsb2JhbCBQb3NpdGlvbmluZyBTeXN0ZW3vvIjlhajnkIPlrprkvY3ns7vnu5/vvInnmoTnroDnp7DjgILmgqjkvb/nlKjnmoTorr7lpIfkuIrnmoRHUFPkv6Hlj7fmjqXmlLblmajlj6/ku6Xku45HUFPljavmmJ/mlLbliLDkv6Hlj7flubbliKnnlKjkvKDmnaXnmoTkv6Hmga/orqHnrpfmgqjnmoTkvY3nva7jgII8L3A+PGg0PldJRkk8L2g0PjxwPldpLUZp5piv5LiA56eN5YWB6K6455S15a2Q6K6+5aSH6L+e5o6l5Yiw5LiA5Liq5peg57q/5bGA5Z+f572R77yIV0xBTu+8ieeahOaKgOacr++8jOmAmuW4uOaIkeS7rOaJgOivtOeahOaXoOe6v+e9kee7nOOAgjwvcD48aDQ+5Z+656uZPC9oND48cD7ln7rnq5nvvIzljbPlhaznlKjnp7vliqjpgJrkv6Hln7rnq5nvvIzmmK/ml6Dnur/nlLXlj7Dnq5nnmoTkuIDnp43lvaLlvI/vvIzmmK/mjIflnKjkuIDlrprnmoTml6Dnur/nlLXopobnm5bljLrkuK3vvIzpgJrov4fnp7vliqjpgJrkv6HkuqTmjaLkuK3lv4PvvIzkuI7np7vliqjnlLXor53nu4jnq6/kuYvpl7Tov5vooYzkv6Hmga/kvKDpgJLnmoTml6Dnur/nlLXmlLblj5Hkv6HnlLXlj7DjgII8L3A+PGg0PlNTTDwvaDQ+PHA+U1NM77yIU2VjdXJlIFNvY2tldCBMYXllcu+8ieWPiOensOS4uuWuieWFqOWll+aOpeWxgu+8jOaYr+WcqOS8oOi+k+mAmuS/oeWNj+iuru+8iFRDUC9JUO+8ieS4iuWunueOsOeahOS4gOenjeWuieWFqOWNj+iuruOAglNTTOaUr+aMgeWQhOenjeexu+Wei+eahOe9kee7nO+8jOWQjOaXtuaPkOS+m+S4ieenjeWfuuacrOeahOWuieWFqOacjeWKoe+8jOWdh+mAmui/h+S9v+eUqOWFrOW8gOWvhumSpeWSjOWvueensOWvhumSpeaKgOacr+S7pei+vuWIsOS/oeaBr+S/neWvhueahOaViOaenOOAgjwvcD48aDQ+5L+h5oGv5pS26ZuG5oqA5pyvPC9oND48cD7miJHku6zlnKjjgIrpmpDnp4HmnYPmlL/nrZbjgIvkuK3miYDov7DnmoTigJzoh6rliqjmlLbpm4bigJ3ljIXmi6zku6XkuIvmlrnlvI/vvJo8L3A+PHA+77yIMe+8iUNvb2tpZTwvcD48cD5Db29raWXmmK/mgqjmtY/op4jnvZHpobXml7bvvIznvZHnq5nmnI3liqHlmajmlL7lnKjlrqLmiLfnq6/vvIjmgqjnmoTorqHnrpfmnLrjgIHnp7vliqjnlLXor53miJblhbbku5bmmbrog73nu4jnq6/lhoXvvInph4zpnaLnmoTkuIDkuKrlsI/lsI/nmoTmlofmnKzmlofku7bvvIzlj6/nlKjkuo7mlLnlloTmgqjnmoTkvb/nlKjkvZPpqozjgII8L3A+PHA+77yIMu+8iVdlYiBiZWFjb27vvIjnvZHnu5zkv6HmoIfvvIk8L3A+PHA+V2ViIGJlYWNvbuaYr+ijheW1jOWcqOe9keermeaIlueUtemCruWGheeahOeUteWtkOWbvuWDj+aWh+S7tuahiOaIluWFtuS7luaKgOacr++8jOWPr+eUqOS6juiuoeeul+iuv+WuouaVsOebruOAgeiusOW9leaCqOaYr+WQpuWPiuS9leaXtumYheiniOeUtemCruaIlue9keerme+8jOaIlueUqOS7peS9v+eUqOafkOS6m0Nvb2tpZeOAgjwvcD48cD7vvIgz77yJTG9nIGZpbGVz77yI5pel5b+X5paH5Lu277yJPC9wPjxwPkxvZyBmaWxlc+WCqOWtmOiHquWKqOaUtumbhueahOiLpeW5suaVsOaNruOAguivpeetieaVsOaNruWMheaLrOS6kuiBlOe9keWNj+iuru+8iElQ77yJ5Zyw5Z2A44CB5rWP6KeI5Zmo57G75Z6L44CB5LqS6IGU572R5pyN5Yqh5o+Q5L6b5ZWG77yISVNQ77yJ44CB5byV55SoL+mAgOWHuumhtemdouOAgeaTjeS9nOezu+e7n+OAgeaXpeacny/ml7bpl7TmiLPlkozngrnlh7vmtYHmlbDmja7nrYnjgII8L3A+PHA+77yINO+8iUVUIFRhZ++8iOWunuS9k+agh+etvu+8iTwvcD48cD5FVCBUYWfmmK/lnKjkupLogZTnvZHmtY/op4jlmajkuI7kupLogZTnvZHmnI3liqHlmajkuYvpl7Tog4zlkI7kvKDpgIHnmoRIVFRQ5Y2P6K6u5qCH5aS077yM5Y+v5Luj5pu/Q29va2ll77yM55So5Lul6L+96Liq5Liq5Yir5L2/55So6ICF77yM5L2/5oiR5Lus5Y+v5pu05rex5YWl5Zyw5LqG6Kej5ZKM5pS55ZaE5oiR5Lus55qE5pyN5Yqh44CCPC9wPjxwPu+8iDXvvIlKYXZhU2NyaXB0PC9wPjxwPkphdmFTY3JpcHTmmK/kuIDnp43nvJbnqIvor63oqIDvvIznlKjkuo7liLbkvZzmm7TlhbfkupLliqjmgKflkozliqjmgIHnmoTnvZHpobXjgIJKYXZhU2NyaXB05Y+v5Lul6K6+5a6aQ29va2ll44CB6ZiF6K+7Q29va2ll5Y+K5Yig6ZmkQ29va2ll44CCPC9wPjxoMz7ljYHkuInjgIHlpoLkvZXogZTns7vmiJHku6w8L2gzPjxoND7mgqjlj6/ku6XpgJrov4fku6XkuIvmlrnlvI/kuI7miJHku6zogZTns7vvvIzmiJHku6zlsIblnKgxNeWkqeWGheWbnuWkjeaCqOeahOivt+axgu+8mjwvaDQ+PHA+77yIMe+8ieWmguWvueacrOaUv+etluWGheWuueacieS7u+S9leeWkemXruOAgeaEj+ingeaIluW7uuiuru+8jOaIluiAhemcgOimgeazqOmUgOaCqOeahOi0puaIt++8jOaCqOWPr+S7pemAmui/h+WuouacjeeUteivnTQwMDAxOTkxOTnkuI7miJHku6zogZTns7vjgII8L3A+PHA+77yIMu+8iSDlpoLmnpzmgqjlr7nmiJHku6znmoTlm57lpI3kuI3mu6HmhI/vvIznibnliKvmmK/mgqjorqTkuLrmiJHku6znmoTkuKrkurrkv6Hmga/lpITnkIbooYzkuLrmjZ/lrrPkuobmgqjnmoTlkIjms5XmnYPnm4rvvIzmgqjov5jlj6/ku6XlkJHnvZHkv6HjgIHnlLXkv6HjgIHlhazlronlj4rlt6XllYbnrYnnm5HnrqHpg6jpl6jov5vooYzmipXor4nmiJbkuL7miqXjgII8L3A+PHA+KuazqO+8muacrOOAiuenkeWkp+iur+mjnumakOengeadg+aUv+etluOAi+eJiOacrOWPt+S4ujIwMjAwNDIx44CCPC9wPicgK1xyXG4gICAgJzwvZGl2PicgK1xyXG4gICAgJzwvZGl2PicgK1xyXG4gICAgJzxkaXYgY2xhc3M9XCJsenhOYXZCYXItcHJpdmFjeS1jb250ZW50LXRleHQtY2hlY2tcIj7ngrnlh7vlkIzmhI/ljbPku6Pooajmgqjlt7LpmIXor7vlubblkIzmhI/miJHku6znmoTjgIrnlKjmiLfpmpDnp4HljY/orq7jgIvjgII8L2Rpdj4nICtcclxuICAgICc8ZGl2IGNsYXNzPVwibHp4TmF2QmFyLXByaXZhY3ktZm9vdGVyXCI+PHNwYW4gaWQ9XCJsenhOYXZCYXItcHJpdmFjeS1hZ3JlZVwiIGNsYXNzPVwibHp4TmF2QmFyLXByaXZhY3ktYWdyZWVcIj7lkIzmhI/lubbnu6fnu608L3NwYW4+PHNwYW4gaWQ9XCJsenhOYXZCYXItcHJpdmFjeS1yZWZ1c2VcIiBjbGFzcz1cImx6eE5hdkJhci1wcml2YWN5LXJlZnVzZVwiIHNzb1VybD1cIicgK1xyXG4gICAgdXJsICtcclxuICAgICdcIj7mi5Lnu508L3NwYW4+PC9kaXY+JyArXHJcbiAgICAnPC9kaXY+JyArXHJcbiAgICAnPC9kaXY+J1xyXG4gIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kKHByaXZhY3lUaXBzKVxyXG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgcHJpdmFjeVRpcHMpXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXHJcbiAgYXJnZWUoaG9zdHVybCwgZGF0YSlcclxuICByZWZ1c2UoZGF0YSlcclxufVxyXG5jb25zdCBwcml2YWN5ID0gKGRhdGEsIGhvc3R1cmwpID0+IHtcclxuICBpZiAoZGF0YSAmJiBkYXRhLnVzZXIgJiYgZGF0YS51c2VyLmlkICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2RhdGEudXNlci5pZH1Qcml2YWN5YCkgPT09ICd0cnVlJykgcmV0dXJuIGZhbHNlIC8vIOi1sOWIsOi/memHjOivtOaYjueUqOaIt+W3sue7j+WQjOaEj+i/h+S6hu+8jOS4jemcgOimgeWcqOaYvuekuumakOengeW8ueahhlxyXG4gIGFqYXgoe1xyXG4gICAgdHlwZTogJ0dFVCcsXHJcbiAgICB1cmw6IGAke2hvc3R1cmx9L2Rlc2t0b3AvYmFja2VuZC9hcGkvcG9ydGFsL3NlbnNpdGl2ZUNvbmZpZ2AsXHJcbiAgICBqc29ucDogJ2pzb25wMScsXHJcbiAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgIGlmIChyZXMuc2Vuc2l0aXZlQWdyZWVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVyUHJpdmFjeShgJHtkYXRhLnNzb1NlcnZlclVybH0vbG9nb3V0YCwgaG9zdHVybCwgZGF0YSlcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgeyBwcml2YWN5LCBhcmdlZSB9XHJcbiIsImltcG9ydCBhamF4IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAnXHJcbmltcG9ydCB7IGFwcENsaWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBwLWF1dGgnXHJcbmltcG9ydCB7IGhhbmRsZUNsYXNzLCB0ZW1wbGF0ZVJlbmRlciwgdGVtcGxhdGVGaWx0ZXIgfSBmcm9tICcuLi8uLi91dGlscy91dGlscydcclxuY29uc3QgZG9tID0gYDxkaXYgY2xhc3M9XCJlYmduYXZfX2FwcF9zZWFyY2gtY29udGFpbmVyIGhpZGVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZGF0YVwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZV9fc2VhcmhfX2JveFwiIGlkPVwiY2xvc2VfX3NlYXJoX19ib3hcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1pbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInNlYXJjaC1pbnB1dFwiIGNsYXNzPVwiZm9ybS1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLmn6Xmib7lupTnlKhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlYXJjaEJ0blwiIGNsYXNzPVwiZm9ybS1zZWFyY2gtYnRuXCI+5pCc57SiPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImViZ25hdl9fYXBwX3NlYXJjaC1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJhY2gtYXBwLXN1Yi1jb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdCBoaWRlXCI+5Lul5LiL5piv4oCcPHN0cm9uZyBpZD1cInNlcmFjaFRleHRcIj48L3N0cm9uZz7igJ3nm7jlhbPnmoTlupTnlKg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHVsIGlkPVwiYXBwLWxpc3RcIiBjbGFzcz1cImFwcC1saXN0IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkZXJcIiBjbGFzcz1cImxvYWRlci1ib3ggc2hvd1wiPjxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj48cD7mlbDmja7liqDovb3kuK3igKY8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuby1kYXRhIGhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD7mmoLml6DmkJzntKLmlbDmja48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYFxyXG5jb25zdCBzaG93TG9hZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkZXInKVxyXG4gIGlmIChsb2FkZXIpIHtcclxuICAgIGxvYWRlci5jbGFzc05hbWUgPSAnbG9hZGVyLWJveCBzaG93J1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGlkZUxvYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZGVyJylcclxuICBpZiAobG9hZGVyKSB7XHJcbiAgICBsb2FkZXIuY2xhc3NOYW1lID0gJ2xvYWRlci1ib3ggaGlkZSdcclxuICB9XHJcbn1cclxuXHJcbmxldCBhcHBEYXRhcyA9IHt9XHJcbmNvbnN0IGhpZGVTZWFyY2hDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2hpZGVTZWFyY2hDb250YWluZXInKVxyXG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYmduYXZfX2FwcF9zZWFyY2gtY29udGFpbmVyJylcclxuICAvLyBzZWFyY2guY2xhc3NMaXN0ID0gJ2ViZ25hdl9fYXBwX3NlYXJjaC1jb250YWluZXIgaGlkZSdcclxuICBoYW5kbGVDbGFzcyhzZWFyY2gsICdhZGQnLCAnaGlkZScpXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pbnB1dCcpLnZhbHVlID0gJydcclxuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0JykuY2xhc3NOYW1lID0gJ3Jlc3VsdCBoaWRlJ1xyXG4gIGhhbmRsZUNsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQnKSwgJ2FkZCcsICdoaWRlJylcclxufVxyXG5jb25zdCBzaG93U2VhcmNoQ29udGFpbmVyID0gKGFwaVVybCwganNvbnBIb3N0KSA9PiB7XHJcbiAgaGFuZGxlQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmViZ25hdl9fYXBwX3NlYXJjaC1jb250YWluZXInKSwgJ2RlbGV0ZScsICdoaWRlJylcclxuICByZW5kZXJTZWFyY2hEYXRhKGFwcERhdGFzLmNsYXNzaWZpZXMsIGFwaVVybCwganNvbnBIb3N0KVxyXG59XHJcblxyXG5jb25zdCBmaWx0ZXJBcHBzID0gKGUsIGFwaVVybCwganNvbnBIb3N0KSA9PiB7XHJcbiAgaWYgKGFwcERhdGFzLmNsYXNzaWZpZXMgJiYgYXBwRGF0YXMuY2xhc3NpZmllcy5sZW5ndGgpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS52YWx1ZVxyXG4gICAgY29uc3QgYXJyID0gW11cclxuICAgIGNvbnN0IG9iaiA9IHt9XHJcbiAgICBjb25zdCBzZXJhY2hUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlcmFjaFRleHQnKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbm8tZGF0YScpWzBdLmNsYXNzTmFtZSA9ICduby1kYXRhIGhpZGUnXHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHJlbmRlclNlYXJjaERhdGEoYXBwRGF0YXMuY2xhc3NpZmllcywgYXBpVXJsLCBqc29ucEhvc3QpXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc3VsdCcpWzBdLmNsYXNzTmFtZSA9ICdyZXN1bHQgaGlkZSdcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgc2VyYWNoVGV4dC5pbm5lclRleHQgPSB2YWx1ZVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXN1bHQnKVswXS5jbGFzc05hbWUgPSAncmVzdWx0J1xyXG4gICAgfVxyXG4gICAgYXBwRGF0YXMuY2xhc3NpZmllcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0ua2luZClcclxuICAgICAgb2JqW2l0ZW0uaWRdID0ge1xyXG4gICAgICAgIGtpbmQ6IGl0ZW0ua2luZCxcclxuICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICBpdGVtczogW11cclxuICAgICAgfVxyXG4gICAgICBpdGVtLml0ZW1zICYmXHJcbiAgICAgICAgaXRlbS5pdGVtcy5mb3JFYWNoKChzdWIpID0+IHtcclxuICAgICAgICAgIGlmIChzdWIubmFtZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgb2JqW2l0ZW0uaWRdLml0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgIGFwcFRlcm1pbmFsU3RyOiBzdWIuYXBwVGVybWluYWxTdHIsXHJcbiAgICAgICAgICAgICAgZmF2OiBzdWIuZmF2LFxyXG4gICAgICAgICAgICAgIGlkOiBzdWIuaWQsXHJcbiAgICAgICAgICAgICAgbmFtZTogc3ViLm5hbWUsXHJcbiAgICAgICAgICAgICAgdXJsOiBzdWIudXJsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgaWYgKG9ialtrZXldLml0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgIGFyci5wdXNoKG9ialtrZXldKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXJTZWFyY2hEYXRhKGFyciwgYXBpVXJsLCBqc29ucEhvc3QpXHJcbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbm8tZGF0YScpWzBdLmNsYXNzTmFtZSA9ICduby1kYXRhJ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYWRkRXZlbnQgPSAoYXBpVXJsLCBqc29ucEhvc3QpID0+IHtcclxuICAvLyDlhbPpl63lvLnmoYZcclxuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZV9fc2VhcmhfX2JveCcpXHJcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlU2VhcmNoQ29udGFpbmVyKVxyXG4gIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCdG4nKVxyXG4gIGNvbnN0IGlucHV0RXZlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0JylcclxuICBzZWFyY2hCdG4ub25jbGljayA9IGZpbHRlckFwcHMuYmluZCh0aGlzLCBpbnB1dEV2ZW50LCBhcGlVcmwsIGpzb25wSG9zdClcclxuXHJcbiAgY29uc3QgZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpdGVtLWxpc3QnKVxyXG4gIGNvbnN0IGxlbiA9IGRkLmxlbmd0aFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgIGxldCBpdGVtID0gZGRbaV1cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBpdGVtLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxyXG4gICAgICBjb25zdCBpZCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdpZCcpXHJcbiAgICAgIGNvbnN0IHVybCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCd1cmwnKVxyXG4gICAgICBjb25zb2xlLmxvZyhqc29ucEhvc3QsIGFwaVVybClcclxuICAgICAgYXBwQ2xpY2soe1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGl0ZW0sXHJcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcclxuICAgICAgICBob3N0dXJsOiBqc29ucEhvc3QsXHJcbiAgICAgICAgYXBpVXJsXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2VhcmNoVGVtcGxhdGUgPSBgXHJcbjwlIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7IFxyXG4gIHZhciBpdGVtID0gdGhpc1tpXTtcclxuJT5cclxuPGxpIGNsYXNzPVwiYXBwLWxpc3QtY29sdW1uXCI+XHJcbiAgPGRsIGNsYXNzPVwiY29sdW1uLWJveFwiPlxyXG4gICAgPGR0IGNsYXNzPVwidGl0bGVcIj48JSBpdGVtLmtpbmQgJT48L2R0PlxyXG4gICAgPCUgZm9yKHZhciBqID0gMDsgaiA8IGl0ZW0uaXRlbXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgdmFyIHN1YiA9IGl0ZW0uaXRlbXNbal07XHJcbiAgICAlPlxyXG4gICAgPGRkIGNsYXNzPVwiaXRlbS1saXN0XCIgdXJsPVwiPCUgc3ViLnVybCAlPlwiIHRpdGxlPVwiPCUgc3ViLm5hbWUgJT5cIiBpZD1cIjwlIHN1Yi5pZCAlPlwiPlxyXG4gICAgICA8c3Bhbj48JSBzdWIubmFtZSAlPjwvc3Bhbj5cclxuICAgIDwvZGQ+XHJcbiAgICA8JVxyXG4gICAgfVxyXG4gICAgJT5cclxuICA8L2RsPlxyXG48L2xpPiBcclxuPCVcclxufVxyXG4lPmBcclxuY29uc3QgcmVuZGVyU2VhcmNoRGF0YSA9IChkYXRhLCBhcGlVcmwsIGpzb25wSG9zdCkgPT4ge1xyXG4gIGNvbnN0IGFwcExpc3REb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLWxpc3QnKVxyXG4gIGlmIChhcHBMaXN0RG9tKSB7XHJcbiAgICBhcHBMaXN0RG9tLmlubmVySFRNTCA9IHRlbXBsYXRlUmVuZGVyKHRlbXBsYXRlRmlsdGVyKHNlYXJjaFRlbXBsYXRlKSwgZGF0YSlcclxuICB9XHJcbiAgaGlkZUxvYWRlcigpIC8vIOmakOiXj2xvYWRpbmdcclxuICBhZGRFdmVudChhcGlVcmwsIGpzb25wSG9zdCkgLy8g5re75Yqg5LqL5Lu2XHJcbn1cclxuXHJcbi8vIOiOt+WPluW6lOeUqOaVsOaNrlxyXG5jb25zdCBnZXRBbGxBcHBzRGF0YSA9IChhcGlVcmwsIGpzb25wSG9zdCkgPT4ge1xyXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYmduYXZfX2FwcF9zZWFyY2gtY29udGFpbmVyJylcclxuICBpZiAoIXNlYXJjaENvbnRhaW5lcikge1xyXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBkb20pXHJcbiAgfVxyXG4gIHNob3dMb2FkZXIoKSAvLyDmmL7npLpMb2FkaW5nXHJcbiAgLy8g5YWI5LuOc2Vzc2lvblN0b3JhZ2Xph4zlj5ZcclxuICBhcHBEYXRhcyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2VhcmNoRGF0YScpKSB8fCB7fVxyXG4gIGlmIChhcHBEYXRhcyAmJiBhcHBEYXRhcy5jbGFzc2lmaWVzKSB7XHJcbiAgICBoaWRlTG9hZGVyKClcclxuICAgIHNob3dTZWFyY2hDb250YWluZXIoYXBpVXJsLCBqc29ucEhvc3QpXHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciB1cmwgPSBhcGlVcmwubWVudXMgKyAnP3Q9JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICBhamF4KHtcclxuICAgICAgdXJsOiBqc29ucEhvc3QgKyB1cmwsXHJcbiAgICAgIGpzb25wOiAnanNvbnAnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaXNTYWFzOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBhcHBEYXRhcyA9IHJlcy5hcHBzWzBdXHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc2VhcmNoRGF0YScsIEpTT04uc3RyaW5naWZ5KGFwcERhdGFzKSkgLy8g5Li05pe25a2Y5YKo5pWw5o2uXHJcbiAgICAgICAgc2hvd1NlYXJjaENvbnRhaW5lcihhcGlVcmwsIGpzb25wSG9zdClcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgaGlkZUxvYWRlcigpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmV4cG9ydCB7XHJcbiAgZ2V0QWxsQXBwc0RhdGFcclxufVxyXG4iLCJpbXBvcnQgeyAkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnXHJcbmltcG9ydCBhamF4IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAnXHJcbi8vIGltcG9ydCB7IHJlbmRlckVsZW1lbnQgfSBmcm9tICcuLi9zZWFyY2gvaW5kZXgnXHJcbmxldCBhY3RpdmVJdGVtXHJcbmxldCB1c2VyU2V0dGluZ0xpc3RcclxuXHJcbi8vIOa4suafk+acquivu+a2iOaBr1xyXG5jb25zdCByZW5kZXJNZXNzYWdlVW5yZWFkTnVtID0gKHVucmVhZE51bSkgPT4ge1xyXG4gIC8vIGRlYnVnZ2VyXHJcbiAgdW5yZWFkTnVtID0gTnVtYmVyKHVucmVhZE51bSkgLy8g5raI5oGv5pWw6YeP77yM6Ziy5q2i5Lyg6L+b5p2l55qE5piv5Liq5a2X5L2T5LiyXHJcbiAgY29uc3QgZWxNc2UgPSAkKCcjZWJnbmF2LW1lc3NhZ2VVbnJlYWROdW0nKVxyXG4gIC8vIOWIpOaWreaYr+WQpuacieacquivu+a2iOaBr1xyXG4gIGlmICghdW5yZWFkTnVtKSB7XHJcbiAgICAvLyDlpoLmnpzmsqHmnInmnKror7vmtojmga/vvIzlubbkuJTnuqLngrlkb23lrZjlnKjvvIzliJnpmpDol4/nuqLngrlkb21cclxuICAgIGlmIChlbE1zZSkgZWxNc2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIC8vIOacieacquivu+a2iOaBr++8jOWImeWIpOaWreS4i+e6oueCuWRvbeaYr+WQpuWtmOWcqO+8jOS4jeWtmOWcqOWImeWIm+W7ulxyXG4gIGlmICghZWxNc2UpIHtcclxuICAgIC8vIOiOt+WPluWIsOeItue6p+WFg+e0oFxyXG4gICAgY29uc3QgZWxlID0gJCgnI2ViZ25hdi1pbmF2LW1lc3NhZ2UnKVxyXG4gICAgLy8g5b6A54i257qn5YWD57Sg5o+S5YWl57qi54K5ZG9tXHJcbiAgICBlbGUgJiYgZWxlLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGA8c3BhbiBjbGFzcz1cImViZ2luYXYtbWVzc2FnZVwiIGlkPVwiZWJnbmF2LW1lc3NhZ2VVbnJlYWROdW1cIj4ke3VucmVhZE51bX08L3NwYW4+YClcclxuICAgIC8vICQoJyNlYmduYXYtbWVzc2FnZVVucmVhZE51bScpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyDmmL7npLrnuqLngrlcclxuICAgIGVsTXNlLmlubmVySFRNTCA9IHVucmVhZE51bVxyXG4gICAgZWxNc2Uuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXHJcbiAgfVxyXG59XHJcblxyXG4vLyDmuLLmn5PnlKjmiLfkuK3lv4NzZXR0aW5n5YiX6KGoXHJcbmNvbnN0IHJlbmRlclVzZXJTZXR0aW5nID0gKGRhdGEsIGJhc2UpID0+IHtcclxuICBpZiAoZGF0YSAmJiBkYXRhLnNldHRpbmdzKSB7XHJcbiAgICB1c2VyU2V0dGluZ0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1zZXR0aW5nLWxpc3QnKVxyXG4gICAgdXNlclNldHRpbmdMaXN0LmlubmVySFRNTCA9IHJlbmRlclNldHRpbmdEb20oZGF0YS5zZXR0aW5ncylcclxuICAgIHNldHRpbmdFdmVudChiYXNlLmhvc3R1cmwpIC8vIGRvbea4suafk+WujOaIkOWQju+8jOa3u+WKoOS6i+S7tlxyXG4gICAgZ2V0TWVzc2FnZShiYXNlLmhvc3R1cmwpIC8vIOiOt+WPluacquivu+a2iOaBr+e6oueCueaVsOmHj1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldElkZW50aXR5KGRhdGEuaWRlbnRpdHlMaXN0KSAvLyDpu5jorqTmtL7lj5Hkuovku7bvvIzlkYror4nlvZPliY3pgInkuK3nmoTouqvku71cclxuICAgIH0sIDEwMDApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZW5kZXJTZXR0aW5nRG9tID0gKGRhdGEpID0+IHtcclxuICBsZXQgZG9tID0gJydcclxuICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBpZiAoaXRlbS5rZXkgPT09ICd1c2VyLWxvZ291dCcpIHJldHVybiBmYWxzZVxyXG4gICAgZG9tICs9IGBcclxuICAgIDxsaSBjbGFzcz1cImNsZWFyZml4IHBlcnNvbmFsLWNlbnRlciBlYmduYXYtJHtpdGVtLmtleX0tbGlzdFwiIHVybD1cIiR7aXRlbS51cmx9XCI+XHJcbiAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImViZ25hdi1sZWZ0XCI+PGkgY2xhc3M9XCJlYmdpbmF2ICR7aXRlbS5rZXl9XCI+PC9pPjxzcGFuIGNsYXNzPVwibmFtZVwiPiR7aXRlbS5uYW1lfTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlYmduYXYtcmlnaHRcIiBpZD1cImViZ25hdi0ke2l0ZW0ua2V5fVwiPjxpIGNsYXNzPVwiZWJnaW5hdiBlYmdpbmF2IGluYXYtdXNlci1yaWdodFwiPjwvaT48L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvbGk+XHJcbiAgICBgXHJcbiAgfSlcclxuICByZXR1cm4gZG9tXHJcbn1cclxuXHJcbi8vIOa3u+WKoOa2iOaBr+WSjOS4quS6uuS4reW/g+i3s+i9rOS6i+S7tlxyXG5jb25zdCBzZXR0aW5nRXZlbnQgPSAodXJsKSA9PiB7XHJcbiAgY29uc3QgbGkgPSB1c2VyU2V0dGluZ0xpc3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJylcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgaXRlbSA9IGxpW2ldXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBlbWl0RXZlbnQoaXRlbSwgdXJsKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbi8vIOa2iOaBr+WSjOS4quS6uuS4reW/g+i3s+i9rOS6i+S7tlxyXG5jb25zdCBlbWl0RXZlbnQgPSAoaXRlbSwgaG9zdHVybCkgPT4ge1xyXG4gIGxldCB1cmwgPSBpdGVtLmdldEF0dHJpYnV0ZSgndXJsJylcclxuICBjb25zb2xlLmxvZyh1cmwuaW5kZXhPZignaHR0cCcpKVxyXG4gIHVybCA9IHVybC5pbmRleE9mKCdodHRwJykgIT09IC0xID8gdXJsIDogYCR7aG9zdHVybH0ke3VybH1gXHJcbiAgdXJsICYmIHdpbmRvdy5vcGVuKHVybClcclxufVxyXG5cclxuLy8g6Lqr5Lu95YiH5o2i5LiL5ouJ6I+c5Y2V5rS+5Y+R5YWo5bGA5LqL5Lu2IO+8iOWvvOiIquWKoOi9veWujOaIkO+8jOi/memHjOaYr+m7mOiupOa0vuWPkeS6i+S7tu+8jOaXoOmcgOeUqOaIt+eCueWHu++8iVxyXG5jb25zdCBzZXRJZGVudGl0eSA9IChkYXRhKSA9PiB7XHJcbiAgaWYgKCEoQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLmxlbmd0aCkpIHJldHVybiBmYWxzZVxyXG4gIGNvbnN0IHBvcnRhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3JrYmVuY2gnKVxyXG4gIGlmICghcG9ydGFsKSByZXR1cm4gZmFsc2VcclxuICBjb25zdCBhID0gcG9ydGFsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJylbMF1cclxuICBpZiAoIWEpIHJldHVybiBmYWxzZVxyXG4gIGFjdGl2ZUl0ZW0gPSBnZXREZWZhdWx0QWN0aXZlKGRhdGEpIC8vIOiOt+WPluW9k+WJjemAieS4reeahOi6q+S7veagh+etvlxyXG4gIGlmIChhY3RpdmVJdGVtKSB7XHJcbiAgICB3aW5kb3cuZWJnbmF2aWdhdGlvbi5lbWl0KCdjaGFuZ2VJZGVudGl0eScsIGFjdGl2ZUl0ZW0pXHJcbiAgfVxyXG4gIC8vIOS4tOaXtumakOiXj+i6q+S7veWIh+aNolxyXG4gIC8vIGEuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gIC8vICAgJ2JlZm9yZWVuZCcsXHJcbiAgLy8gICBgPHNwYW4gY2xhc3M9XCJoZWFkZXItcG9ydGFsLXRhZyBoZWFkZXItdGFnXCIgaWQ9XCJoZWFkZXItcG9ydGFsLXRhZ1wiPiR7YWN0aXZlSXRlbS5uYW1lfTwvc3Bhbj5gXHJcbiAgLy8gKVxyXG4gIC8vIOW9k+WJjei6q+S7veWIl+ihqOWwj+S6jjLkuKrvvIzlsLHkuI3muLLmn5PvvIg+PTLmiY3og73ouqvku73liIfmjaLvvIlcclxuICAvLyBkYXRhLmxlbmd0aCA+IDEsIOaaguaXtumakOiXj1xyXG4gIGlmIChmYWxzZSkge1xyXG4gICAgcmVuZGVyVWxIdG1sKHBvcnRhbCwgZGF0YSlcclxuICB9XHJcbn1cclxuXHJcbi8vIOiOt+WPluW9k+WJjemAieS4reeahOi6q+S7veagh+etvlxyXG5jb25zdCBnZXREZWZhdWx0QWN0aXZlID0gKGRhdGEpID0+IHtcclxuICBsZXQgYWN0aXZlXHJcbiAgYWN0aXZlID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpZGVudGl0eUFjdGl2ZScpKVxyXG4gIGlmICghYWN0aXZlKSB7XHJcbiAgICBhY3RpdmUgPSBkYXRhWzBdXHJcbiAgfVxyXG4gIHJldHVybiBhY3RpdmVcclxufVxyXG5cclxuLy8g6Lqr5Lu95YiH5o2i5LiL5ouJ6I+c5Y2V5rS+5Y+R5YWo5bGA5LqL5Lu2XHJcbmNvbnN0IGVtaXRJZGVudGl0eUV2ZW50ID0gKGlkZW50aXR5TGkpID0+IHtcclxuICBBcnJheS5mcm9tKGlkZW50aXR5TGkpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9iaiA9IGdldEF0dHJpYnV0ZXMoZWwuYXR0cmlidXRlcylcclxuICAgICAgaWYgKGFjdGl2ZUl0ZW0ubmFtZSA9PT0gb2JqLm5hbWUpIHJldHVybiBmYWxzZSAvLyDlpoLmnpzngrnlh7vnmoTmmK/oh6rouqvvvIzlsLHnm7TmjqVyZXR1cm5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2lkZW50aXR5QWN0aXZlJywgSlNPTi5zdHJpbmdpZnkob2JqKSkgLy8g5bCG6YCJ5Lit55qE5qCH562+5L+d5a2Y5Yiwc2Vzc2lvblN0b3JhZ2Xph4xcclxuICAgICAgc2hvd0FjdGl2ZU5hbWUob2JqKVxyXG4gICAgICB3aW5kb3cuZWJnbmF2aWdhdGlvbi5lbWl0KCdjaGFuZ2VJZGVudGl0eScsIG9iailcclxuICAgIH0pXHJcbiAgfSlcclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5jb25zdCByZW5kZXJVbEh0bWwgPSAoZWwsIGRhdGEpID0+IHtcclxuICBpZiAoIWVsKSByZXR1cm4gZmFsc2VcclxuICBsZXQgZG9tID0gJydcclxuICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGRvbSArPSBgPGxpIGlkZW50aXR5PVwiJHtpdGVtLmlkZW50aXR5fVwiIHBoYXNlPVwiJHtpdGVtLnBoYXNlfVwiIG5hbWU9XCIke2l0ZW0ubmFtZX1cIj7pl6jmiLc8c3BhbiBjbGFzcz1cInBoYXNlXCI+JHtpdGVtLm5hbWV9PC9zcGFuPjwvbGk+YFxyXG4gIH0pXHJcbiAgZWwuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgJ2JlZm9yZWVuZCcsXHJcbiAgICBgPHVsIGNsYXNzPVwiZHJvcGRvd24taWRlbnRpdHktdWxcIiBpZD1cImRyb3Bkb3duLWlkZW50aXR5LXVsXCI+JHtkb219PC91bD5gXHJcbiAgKVxyXG5cclxuICBjb25zdCBpZGVudGl0eVVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duLWlkZW50aXR5LXVsJylcclxuICBjb25zdCBpZGVudGl0eUxpID0gaWRlbnRpdHlVbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKVxyXG4gIGVtaXRJZGVudGl0eUV2ZW50KGlkZW50aXR5TGkpIC8vIOWvueWklua0vuWPkeS6i+S7tlxyXG59XHJcblxyXG5jb25zdCBnZXRBdHRyaWJ1dGVzID0gKGF0dHIpID0+IHtcclxuICBpZiAoIWF0dHIpIHJldHVybiBmYWxzZVxyXG4gIGNvbnN0IG9iaiA9IHt9XHJcbiAgQXJyYXkuZnJvbShhdHRyKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBvYmpbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWVcclxuICB9KVxyXG4gIHJldHVybiBvYmpcclxufVxyXG5cclxuY29uc3Qgc2hvd0FjdGl2ZU5hbWUgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IHRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItcG9ydGFsLXRhZycpXHJcbiAgYWN0aXZlSXRlbSA9IGRhdGFcclxuICB0YWcuaW5uZXJIVE1MID0gZGF0YS5uYW1lXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDorr7nva7mnKror7vmtojmga9cclxuICogQHBhcmFtIHsqfSBtZXNBcnJheSDlkITnp43nsbvlnovnmoTmnKror7vmtojmga9cclxuICovXHJcbmNvbnN0IHNldE1lc3NhZ2VVbnJlYWROdW0gPSAobWVzQXJyYXkpID0+IHtcclxuICBjb25zb2xlLmxvZygnc2V0TWVzc2FnZVVucmVhZE51bScsIG1lc0FycmF5KVxyXG4gIGlmIChtZXNBcnJheSAmJiBtZXNBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICBsZXQgX3VucmVhZE51bSA9IDBcclxuICAgIG1lc0FycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgX3VucmVhZE51bSArPSBpdGVtLnVucmVhZE51bVxyXG4gICAgfSlcclxuICAgIHJlbmRlck1lc3NhZ2VVbnJlYWROdW0oX3VucmVhZE51bSkgLy8g5riy5p+T5raI5oGv57qi54K55pWw6YePXHJcbiAgfVxyXG59XHJcblxyXG4vLyDojrflj5bmtojmga9cclxuY29uc3QgZ2V0TWVzc2FnZSA9IChob3N0dXJsKSA9PiB7XHJcbiAgLy8g5pyq6K+75raI5oGvXHJcbiAgYWpheCh7XHJcbiAgICB0eXBlOiAnR0VUJyxcclxuICAgIGpzb25wOiAnanNvbnBDYWxsYmFjazQnLFxyXG4gICAgdXJsOiBob3N0dXJsICsgJy9kZXNrdG9wL2JhY2tlbmQvbmF2aWdhdGlvbi9nZXRNZXNzYWdlVW5yZWFkTnVtJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgbWVzc2FnZXNUeXBlczogJzEsMiwzLDQnXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnZ2V0TWVzc2FnZVVucmVhZE51bSBzdWNjZXNzIHJlcycsIHJlcylcclxuICAgICAgc2V0TWVzc2FnZVVucmVhZE51bShyZXMpXHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2dldE1lc3NhZ2VVbnJlYWROdW0gZXJyb3IgcmVzJywgZXJyKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgcmVuZGVyVXNlclNldHRpbmdcclxufVxyXG4iLCIvKlxyXG4gKiBARGVzYzog57uf5LiA5a+86IiqU0RLXHJcbiAqIEBBdXRob3I6IGpoeGlhXHJcbiAqIEBEYXRlOiAyMDIwLTA3LTA3IDEyOjM2OjEyXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBtaWtleS56aGFvcGVuZ1xyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDIwLTA5LTA3IDE0OjIzOjQ2XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIOabtOaWsOaXpeW/l++8mlxyXG4gKiAxLjAuMCDln7rnoYDmuLLmn5PmlbDmja7lip/og70gQDIwMjAwNzA3XHJcbiAqIDEuMC4xIOWinuWKoOWKqOaAgea4suafk+i1hOa6kOS9jeOAgeWKqOaAgeiuvue9rumrmOS6ruOAgeiPnOWNlemhueiHquWumuS5ieS6i+S7tuetieWKn+iDvSBAMjAyMDA5MDRcclxuICogMS4wLjIg5aKe5Yqg55So5oi36ZqQ56eB44CB5bqU55So5pCc57Si44CB6YOo5YiG5o6l5Y+j5pS56YCg44CB6Zeo5oi36Lqr5Lu95YiH5o2i77yM6ZuG5oiQ55So5oi36YCA5Ye677yM5Y+z5YiZ5rWu5Yqo6I+c5Y2V562J5Yqf6IO944CCXHJcbiAqL1xyXG4vLyBpbXBvcnQgJ0BiYWJlbC9wb2x5ZmlsbCdcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscy91dGlscydcclxuaW1wb3J0IHsgJCB9IGZyb20gJy4vdXRpbHMvdXRpbHMnXHJcbmltcG9ydCAqIGFzIG9sZCBmcm9tICcuL3V0aWxzL29sZCdcclxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnXHJcbmltcG9ydCBhamF4IGZyb20gJy4vdXRpbHMvaHR0cCdcclxuaW1wb3J0IGxvYWRPbGROYXYgZnJvbSAnLi9vbGROYXYnIC8vIOiAgeWvvOiIqlxyXG5pbXBvcnQgeyBwcml2YWN5IH0gZnJvbSAnLi9jb21wb25lbnRzL3ByaXZhY3kvaW5kZXgnIC8vIOeUqOaIt+makOengVxyXG5pbXBvcnQgeyBhcHBDbGljayB9IGZyb20gJy4vdXRpbHMvYXBwLWF1dGgnIC8vIOW6lOeUqOadg+mZkFxyXG5pbXBvcnQgeyBnZXRBbGxBcHBzRGF0YSB9IGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2gvaW5kZXgnIC8vIOaQnOe0olxyXG5pbXBvcnQgeyBiaW5kTG9nb3V0IH0gZnJvbSAnLi91dGlscy9sb2dvdXQnIC8vIOmAgOWHulxyXG5pbXBvcnQgeyBzZXRMb2FkRmVlZGJhY2sgfSBmcm9tICcuL3V0aWxzL2ZlZWRiYWNrJyAvLyDlj7Pkvqfmta7liqjoj5zljZVcclxuaW1wb3J0IHsgcmVuZGVyVXNlclNldHRpbmcgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlci1zZXR0aW5nL2luZGV4JyAvLyDmuLLmn5Plj7PkvqfnlKjmiLfkuK3lv4Pnm7jlhbPmqKHlnZdcclxuaW1wb3J0IHsgYXZhdGFyLCBub0RhdGEgfSBmcm9tICcuL3V0aWxzL2ltZycgLy8g5Zu+54mHYmFzZTY05Zyw5Z2AXHJcbmltcG9ydCBndWlkYW5jZUVudHJ5IGZyb20gJy4vY29tcG9uZW50cy9ndWlkYW5jZS9pbmRleCdcclxuLy8gaW1wb3J0IE5hdkJhckVycm9yIGZyb20gJy4vdXRpbHMvTmF2QmFyRXJyb3InXHJcbi8vIOWFvOWuuWllXHJcbmlmICghd2luZG93LmNvbnNvbGUpIHtcclxuICB3aW5kb3cuY29uc29sZSA9IHtcclxuICAgIGxvZzogZnVuY3Rpb24gKG1zZykge30sXHJcbiAgICBlcnI6IGZ1bmN0aW9uIChtc2cpIHt9XHJcbiAgfVxyXG59XHJcbmlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAndXNlIHN0cmljdCdcclxuICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKVxyXG4gICAgfVxyXG5cclxuICAgIHRhcmdldCA9IE9iamVjdCh0YXJnZXQpXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBsZXQgc291cmNlID0gYXJndW1lbnRzW2luZGV4XVxyXG5cclxuICAgICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNvdXJjZSkge1xyXG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldFxyXG4gIH1cclxufVxyXG4vKipcclxuICouZWJnbmF2LXNlY29uZGFyeS1uYXZsaXN0ID4gdWwgPiBsaSB7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuICovXHJcbmNvbnN0IG1lbnVNaW5XaWR0aCA9IDEyMCAvLyDmtonlj4rliLDkuoZjc3Pkv67mlLlcclxuLy8gY29uc3QgTUVOVV9BUFBMSVNUID0gMSAvLyDlupTnlKjoj5zljZVcclxuLy8gY29uc3QgTUVOVV9QUklNQVJZTElTVCA9IDIgLy8g5LiA57qn6I+c5Y2VXHJcbi8vIGNvbnN0IE1FTlVfU0VDT05ETElTVCA9IDMgLy8g5LqM57qn6I+c5Y2VXHJcbi8vIGNvbnN0IE1FTlVfU0VUVElOR0xJU1QgPSA0IC8vIOiuvue9ruiPnOWNlVxyXG4vLyBjb25zdCBNRU5VX1JPTEVMSVNUID0gNSAvLyDorr7nva7op5LoibLoj5zljZVcclxuXHJcbmxldCByZWFsSnNvbnBIb3N0ID0gJydcclxuY29uc3QgYXBpUHJlZml4ID0gJy9kZXNrdG9wL2JhY2tlbmQvYXBpL3BvcnRhbCdcclxuLy8g6ICB5a+86Iiq6YC76L6R6ZyA6KaB55qE5pWw5o2u77yI5YW35L2T55So5aSE5LiN6K+m77yJXHJcbmNvbnN0IGFwaVVybCA9IHtcclxuICBuYXZiYXI6IGFwaVByZWZpeCArICcvbmF2YmFyLmRvJyxcclxuICBtZW51czogYXBpUHJlZml4ICsgJy9tZW51cy5kbycsXHJcbiAgZm9yY2VUb2RvOiBhcGlQcmVmaXggKyAnL2ZvcmNlX3RvZG8uZG8nLFxyXG4gIG1lc3NhZ2U6ICcvb3BlbmFwaS9zaXRlL21lc3NhZ2UuZG8nLFxyXG4gIGxvZ2luU3RhdHU6ICcvZGVza3RvcC9iYWNrZW5kL2xvZ2luL2dldExvZ2luU3RhdHVzJyxcclxuICBhcHBTdGF0dXM6ICcvZGVza3RvcC9iYWNrZW5kL2FwcEluZm8vc3RhdHVzJyxcclxuICBpZmx5dGVrQ29sbGVjdG9yQ29uZmlnOiAnL2Rlc2t0b3AvYmFja2VuZC9nZXQvaWZseUNvbGxlY3RvckNvbmZpZy5kbycsXHJcbiAgYXBwRW50ZXJhYmxlOiAnL2Rlc2t0b3AvYmFja2VuZC9pbmRleFBhZ2UvYXBwRW50ZXJhYmxlLmRvJyxcclxuICBuYXZNZXNzYWdlOiAnL2Rlc2t0b3AvYXBwTWVzc2FnZS8jLz9tZXNzYWdlVHlwZUlkPSdcclxufVxyXG5cclxuLy8g6YWN572u5Y+C5pWwXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICB0eXBlOiAncGxhdGZvcm0nLCAvLyBwbGF0Zm9ybSDlubPlj7AgYXBwbGljYXRpb24g5bqU55SoXHJcbiAgdGhlbWU6ICcnLFxyXG4gIHByaW1hcnlOYXY6IHtcclxuICAgIHBsYXRmb3JtTG9nbzogJycsXHJcbiAgICBwbGF0Zm9ybU5hbWU6ICcnLFxyXG4gICAgcGxhdGZvcm1JY29uOiAnJyxcclxuICAgIHBsYXRmb3JtTmF2TGlzdDogW10sXHJcbiAgICBhcHBOYXZMaXN0OiBbXSxcclxuICAgIGFwcExpc3Q6IFtdLFxyXG4gICAgYXBwTmFtZTogJycsXHJcbiAgICBhcHBMb2dvOiAnJ1xyXG4gIH0sXHJcbiAgc2Vjb25kYXJ5TmF2OiB7fSxcclxuICBvcGVyYXRpb246IHtcclxuICAgIHJvbGVMaXN0OiBbXVxyXG4gIH1cclxufVxyXG4vLyDmqKHmnb/nvJPlrZhcclxuY29uc3QgdHBsID0ge1xyXG4gIGJhc2VUZW1wOiB1dGlscy50ZW1wbGF0ZUZpbHRlcih0ZW1wbGF0ZS5nZXRCYXNlVGVtcGxhdGUpLFxyXG4gIHByaW1hcnlUZW1wOiB1dGlscy50ZW1wbGF0ZUZpbHRlcih0ZW1wbGF0ZS5nZXRQcmltYXJ5VGVtcGxhdGUpLFxyXG4gIGxpc3RUZW1wOiB1dGlscy50ZW1wbGF0ZUZpbHRlcih0ZW1wbGF0ZS5nZXRMaXN0VGVtcGxhdGUpLFxyXG4gIG1vcmVUZW1wOiB1dGlscy50ZW1wbGF0ZUZpbHRlcih0ZW1wbGF0ZS5nZXRNb3JlVGVtcGxhdGUpLFxyXG4gIHNlY29uZGFyeU5hbWVUZW1wOiB1dGlscy50ZW1wbGF0ZUZpbHRlcih0ZW1wbGF0ZS5nZXRTZWNvbmRhcnlOYW1lVGVtcGxhdGUpLFxyXG4gIHBsYXRmb3JtTG9nb1RlbXA6IHV0aWxzLnRlbXBsYXRlRmlsdGVyKHRlbXBsYXRlLmdldFBsYXRmb3JtTG9nb1RlbXBsYXRlKSxcclxuICBhcHBsaWNhdGlvbkxvZ29UZW1wOiB1dGlscy50ZW1wbGF0ZUZpbHRlcihcclxuICAgIHRlbXBsYXRlLmdldEFwcGxpY2F0aW9uTG9nb1RlbXBsYXRlXHJcbiAgKSxcclxuICBhcHBMaXN0VGVtcDogdXRpbHMudGVtcGxhdGVGaWx0ZXIodGVtcGxhdGUuZ2V0QXBwTGlzdFRlbXBsYXRlKSxcclxuICBhcHBJY29uTGlzdFRlbXA6IHV0aWxzLnRlbXBsYXRlRmlsdGVyKHRlbXBsYXRlLmdldEFwcEljb25MaXN0VGVtcGxhdGUpLFxyXG4gIG5hdlVzZXJUZW1wOiB1dGlscy50ZW1wbGF0ZUZpbHRlcih0ZW1wbGF0ZS5nZXROYXZVc2VyVGVtcGxhdGUpLFxyXG4gIGRldGFpbFVzZXJUZW1wOiB1dGlscy50ZW1wbGF0ZUZpbHRlcih0ZW1wbGF0ZS5nZXRVc2VyaW5mb1RlbXBsYXRlKSxcclxuICBsb2dpbkJ0blRlbXA6IHV0aWxzLnRlbXBsYXRlRmlsdGVyKHRlbXBsYXRlLmdldExvZ2luQnRuVGVtcGxhdGUpLFxyXG4gIHNldHRpbmdMaXN0VGVtcDogdXRpbHMudGVtcGxhdGVGaWx0ZXIodGVtcGxhdGUuZ2V0U2V0dGluZ0xpc3RUZW1wbGF0ZSlcclxufVxyXG4vLyDln7rnoYDlj4LmlbBcclxuY29uc3QgYmFzZSA9IHtcclxuICBob3N0dXJsOiAnJyxcclxuICAvLyBob3N0dXJsOiAnaHR0cDovL3VkcHRlc3QubGVkYy5jaGFuZ3lhbi5jbi8nLFxyXG4gIGRlZmF1bHROYXZMaXN0OiBbXSxcclxuICBwbGF0Zm9ybU5hdkxpc3Q6IFtdLFxyXG4gIG5vTG9naW5TaG93OiAxLFxyXG4gIHRoZW1lTGlzdDogW10sXHJcbiAgdGhlbWVEZWZhdWx0OiAnMicsXHJcbiAgdGhlbWU6ICcnLFxyXG4gIHVzZXI6IHt9LFxyXG4gIHVucmVhZE51bTogMCxcclxuICBhcHBsaWNhdGlvbnNMaXN0OiBbXSxcclxuICBsb2dpbnN0YXR1czogZmFsc2UsXHJcbiAgaXNHdWlkYW5jZTogZmFsc2UsXHJcbiAgZGVmYXVsdEF2YXRhcjogYXZhdGFyIC8vIOm7mOiupOWktOWDjyzlvZPliY3nlKjmiLfmnKrorr7nva7lpLTlg4/ml7bmmL7npLpcclxufVxyXG5cclxuY29uc3Qgc2V0T3B0aW9ucyA9IChvcHRpb25zKSA9PiB7XHJcbiAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAvLyBPYmplY3QuYXNzaWduKGNvbmZpZywgb3B0aW9ucyk7XHJcbiAgICBpZiAob3B0aW9ucy50eXBlKSB7XHJcbiAgICAgIGNvbmZpZy50eXBlID0gb3B0aW9ucy50eXBlXHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy50aGVtZSkge1xyXG4gICAgICBjb25maWcudGhlbWUgPSBvcHRpb25zLnRoZW1lXHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5wcmltYXJ5TmF2ICYmIG9wdGlvbnMucHJpbWFyeU5hdi5wbGF0Zm9ybUxvZ28pIHtcclxuICAgICAgY29uZmlnLnByaW1hcnlOYXYucGxhdGZvcm1Mb2dvID0gb3B0aW9ucy5wcmltYXJ5TmF2LnBsYXRmb3JtTG9nb1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMucHJpbWFyeU5hdiAmJiBvcHRpb25zLnByaW1hcnlOYXYucGxhdGZvcm1OYW1lKSB7XHJcbiAgICAgIGNvbmZpZy5wcmltYXJ5TmF2LnBsYXRmb3JtTmFtZSA9IG9wdGlvbnMucHJpbWFyeU5hdi5wbGF0Zm9ybU5hbWVcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLnByaW1hcnlOYXYgJiYgb3B0aW9ucy5wcmltYXJ5TmF2LnBsYXRmb3JtSWNvbikge1xyXG4gICAgICBjb25maWcucHJpbWFyeU5hdi5wbGF0Zm9ybUljb24gPSBvcHRpb25zLnByaW1hcnlOYXYucGxhdGZvcm1JY29uXHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5wcmltYXJ5TmF2ICYmIG9wdGlvbnMucHJpbWFyeU5hdi5sb2dvTGluaykge1xyXG4gICAgICBjb25maWcucHJpbWFyeU5hdi5sb2dvTGluayA9IG9wdGlvbnMucHJpbWFyeU5hdi5sb2dvTGlua1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMucHJpbWFyeU5hdiAmJiBvcHRpb25zLnByaW1hcnlOYXYucGxhdGZvcm1OYXZMaXN0KSB7XHJcbiAgICAgIGNvbmZpZy5wcmltYXJ5TmF2LnBsYXRmb3JtTmF2TGlzdCA9XHJcbiAgICAgICAgb3B0aW9ucy5wcmltYXJ5TmF2LnBsYXRmb3JtTmF2TGlzdFxyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMucHJpbWFyeU5hdiAmJiBvcHRpb25zLnByaW1hcnlOYXYuYXBwTmFtZSkge1xyXG4gICAgICBjb25maWcucHJpbWFyeU5hdi5hcHBOYW1lID0gb3B0aW9ucy5wcmltYXJ5TmF2LmFwcE5hbWVcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLnByaW1hcnlOYXYgJiYgb3B0aW9ucy5wcmltYXJ5TmF2LmFwcExvZ28pIHtcclxuICAgICAgY29uZmlnLnByaW1hcnlOYXYuYXBwTG9nbyA9IG9wdGlvbnMucHJpbWFyeU5hdi5hcHBMb2dvXHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5wcmltYXJ5TmF2ICYmIG9wdGlvbnMucHJpbWFyeU5hdi5hcHBMaXN0KSB7XHJcbiAgICAgIGNvbmZpZy5wcmltYXJ5TmF2LmFwcExpc3QgPSBvcHRpb25zLnByaW1hcnlOYXYuYXBwTGlzdFxyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMucHJpbWFyeU5hdiAmJiBvcHRpb25zLnByaW1hcnlOYXYuYXBwTmF2TGlzdCkge1xyXG4gICAgICBjb25maWcucHJpbWFyeU5hdi5hcHBOYXZMaXN0ID0gb3B0aW9ucy5wcmltYXJ5TmF2LmFwcE5hdkxpc3RcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLnNlY29uZGFyeU5hdiAmJiBvcHRpb25zLnNlY29uZGFyeU5hdi5zZWNvbmRhcnlOYW1lKSB7XHJcbiAgICAgIGNvbmZpZy5zZWNvbmRhcnlOYXYuc2Vjb25kYXJ5TmFtZSA9IG9wdGlvbnMuc2Vjb25kYXJ5TmF2LnNlY29uZGFyeU5hbWVcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLnNlY29uZGFyeU5hdiAmJiBvcHRpb25zLnNlY29uZGFyeU5hdi5zZWNvbmRhcnlOYXZMaXN0KSB7XHJcbiAgICAgIGNvbmZpZy5zZWNvbmRhcnlOYXYuc2Vjb25kYXJ5TmF2TGlzdCA9XHJcbiAgICAgICAgb3B0aW9ucy5zZWNvbmRhcnlOYXYuc2Vjb25kYXJ5TmF2TGlzdFxyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMub3BlcmF0aW9uICYmIG9wdGlvbnMub3BlcmF0aW9uLnNldHRpbmdMaXN0KSB7XHJcbiAgICAgIGNvbmZpZy5vcGVyYXRpb24uc2V0dGluZ0xpc3QgPSBvcHRpb25zLm9wZXJhdGlvbi5zZXR0aW5nTGlzdFxyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMub3BlcmF0aW9uICYmIG9wdGlvbnMub3BlcmF0aW9uLnJvbGVMaXN0KSB7XHJcbiAgICAgIGNvbmZpZy5vcGVyYXRpb24ucm9sZUxpc3QgPSBvcHRpb25zLm9wZXJhdGlvbi5yb2xlTGlzdFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ29wdGlvbnMgY2FuIG5vdCBiZSB2b2lkJyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICog5riy5p+TbG9nb+WMuuWfn1xyXG4gKiDljLrliIblubPlj7DlkozlupTnlKhcclxuICovXHJcbmNvbnN0IHJlbmRlckxvZ28gPSAoZGVsT2xkRG9tID0gZmFsc2UpID0+IHtcclxuICBjb25zb2xlLmxvZygncmVuZGVyTG9nbycsIGNvbmZpZy50eXBlLCBjb25maWcucHJpbWFyeU5hdilcclxuICAvLyDliKDpmaTljp/mnaXmnInnmoRjbGFzc++8jOWmguaenOaYr+WIneWni+WMluaIkeS7rOWPr+S7pemAieaLqeS4jeWBmuWIoOmZpOWKqOS9nFxyXG4gIGlmIChkZWxPbGREb20pIHtcclxuICAgIHV0aWxzLmRlbGV0ZURvbUJ5Q2xhc3NOYW1lKCdlYmduYXYtYXBwLWxvZ28nKVxyXG4gIH1cclxuICAvLyDojrflj5blr7zoiKrphY3nva5cclxuICBsZXQgX3RoZW1lXHJcbiAgYmFzZS50aGVtZUxpc3Quc29tZSgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0uaWQgPT09IGJhc2UudGhlbWVEZWZhdWx0KSB7XHJcbiAgICAgIF90aGVtZSA9IGl0ZW1cclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9KVxyXG4gIGlmIChfdGhlbWUpIHtcclxuICAgIGNvbmZpZy5wcmltYXJ5TmF2LnBsYXRmb3JtTG9nbyA9IGNvbmZpZy5wcmltYXJ5TmF2LnBsYXRmb3JtTG9nbyB8fCBfdGhlbWUucGxhdGZvcm1Mb2dvXHJcbiAgICBjb25maWcucHJpbWFyeU5hdi5wbGF0Zm9ybUljb24gPSBjb25maWcucHJpbWFyeU5hdi5wbGF0Zm9ybUljb24gfHwgX3RoZW1lLnBsYXRmb3JtSWNvblxyXG4gICAgY29uZmlnLnByaW1hcnlOYXYubG9nb0xpbmsgPSBjb25maWcucHJpbWFyeU5hdi5sb2dvTGluayB8fCBfdGhlbWUubG9nb0xpbmtcclxuICB9XHJcbiAgLy8gY29uZmlnLnByaW1hcnlOYXYucGxhdGZvcm1Mb2dvID0gYmFzZS5cclxuXHJcbiAgaWYgKGNvbmZpZy50eXBlID09PSAnYXBwbGljYXRpb24nKSB7XHJcbiAgICAvLyDlupTnlKhsb2dvXHJcbiAgICAkKCcjZWJnbmF2LWViZ25hdkxvZ29ib3gnKS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICdhZnRlcmJlZ2luJyxcclxuICAgICAgdXRpbHMudGVtcGxhdGVSZW5kZXIodHBsLmFwcGxpY2F0aW9uTG9nb1RlbXAsIHtcclxuICAgICAgICBsb2dvU3JjOiBjb25maWcucHJpbWFyeU5hdi5hcHBMb2dvIHx8IGNvbmZpZy5wcmltYXJ5TmF2LnBsYXRmb3JtSWNvbixcclxuICAgICAgICBhcHBOYW1lOiBjb25maWcucHJpbWFyeU5hdi5hcHBOYW1lXHJcbiAgICAgICAgICA/IGNvbmZpZy5wcmltYXJ5TmF2LmFwcE5hbWVcclxuICAgICAgICAgIDogJ+acquiuvue9ruW6lOeUqOWQjeensCcsXHJcbiAgICAgICAgbG9nb0xpbms6IGNvbmZpZy5wcmltYXJ5TmF2LmxvZ29MaW5rIHx8ICdqYXZhc2NyaXB0OjsnXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIOW5s+WPsGxvZ29cclxuICAgICQoJyNlYmduYXYtZWJnbmF2TG9nb2JveCcpLmlubmVySFRNTCA9IHV0aWxzLnRlbXBsYXRlUmVuZGVyKFxyXG4gICAgICB0cGwucGxhdGZvcm1Mb2dvVGVtcCxcclxuICAgICAge1xyXG4gICAgICAgIGxvZ29TcmM6IGNvbmZpZy5wcmltYXJ5TmF2LnBsYXRmb3JtTG9nbyxcclxuICAgICAgICBuYW1lOiBjb25maWcucHJpbWFyeU5hdi5wbGF0Zm9ybU5hbWUsXHJcbiAgICAgICAgbG9nb0xpbms6IGNvbmZpZy5wcmltYXJ5TmF2LmxvZ29MaW5rIHx8ICdqYXZhc2NyaXB0OjsnXHJcbiAgICAgIH1cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbi8vIOiuoeeul+WPr+aYvuekuuWvvOiIquaVsOmHj1xyXG5jb25zdCBjYWxjUHJpbWFyeU51bWJlciA9IChwcmltYXJ5TmF2TGlzdCwgcHJpbWFyeU5hdldpZHRoTWF4KSA9PiB7XHJcbiAgaWYgKHByaW1hcnlOYXZMaXN0Lmxlbmd0aCA8IDEpIHJldHVybiBmYWxzZVxyXG4gIGxldCBwcmltYXJ5TmF2V2lkdGggPSAwXHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpbWFyeU5hdkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHByaW1hcnlOYXZXaWR0aCA9IHByaW1hcnlOYXZXaWR0aCArIHByaW1hcnlOYXZMaXN0W2ldLndpZHRoXHJcbiAgICBpZiAocHJpbWFyeU5hdldpZHRoID4gcHJpbWFyeU5hdldpZHRoTWF4KSB7XHJcbiAgICAgIHJldHVybiBpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcbi8qKlxyXG4gKiDmuLLmn5PkuIDnuqflr7zoiKrliJfooahcclxuICog5riy5p+T6YC76L6R77yaXHJcbiAqIDHjgIHlhYjkuI3mmL7npLrmuLLmn5Plh7rmiYDmnInoj5zljZXorrDlvZXoj5zljZXlrr3luqbvvIzlubborqHnrpflj6/mmL7npLrmlbDph49cclxuICogMuOAgeagueaNruWPr+aYvuekuuaVsOmHj+mHjeaWsOa4suafk++8jOW5tuaYvuekuuWHuuadpVxyXG4gKi9cclxuY29uc3QgcmVuZGVyUHJpbWFyeU5hdkxpc3QgPSAobGVuKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coXHJcbiAgLy8gICAnc3BhY2VXaWR0aCA9ICcsXHJcbiAgLy8gICAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIC1cclxuICAvLyAgICAgJCgnLmViZ25hdi1sb2dvYm94JylbMF0ub2Zmc2V0V2lkdGggLVxyXG4gIC8vICAgICAkKCcuZWJnbmF2LW9wZXJhdGlvbicpWzBdLm9mZnNldFdpZHRoIC1cclxuICAvLyAgICAgMTEyXHJcbiAgLy8gKVxyXG4gIC8vIGNvbnNvbGUubG9nKCdyZW5kZXJQcmltYXJ5TmF2TGlzdCcsIGNvbmZpZy5wcmltYXJ5TmF2LnBsYXRmb3JtTmF2TGlzdClcclxuICAvLyBsZXQgcHJpbWFyeU5hdkxpc3QgPSBjb25maWcucHJpbWFyeU5hdi5wbGF0Zm9ybU5hdkxpc3RcclxuICBsZXQgcHJpbWFyeU5hdkxpc3QgPSBbXVxyXG4gIGlmIChjb25maWcudHlwZSA9PT0gJ2FwcGxpY2F0aW9uJykge1xyXG4gICAgLy8g5bqU55So5pWw5o2uXHJcbiAgICBwcmltYXJ5TmF2TGlzdCA9IGNvbmZpZy5wcmltYXJ5TmF2LmFwcE5hdkxpc3RcclxuICB9IGVsc2Uge1xyXG4gICAgLypcclxuICAgICAgKiDlubPlj7DpnIDopoHlsIblh6DlpITmlbDmja7lkIjlubbkuIDotbdcclxuICAgICAgKiBjb25maWcucHJpbWFyeU5hdi5wbGF0Zm9ybU5hdkxpc3QgPT4g5o6l5Y+jbWVudXPmlbDmja5cclxuICAgICAgKiBiYXNlLnBsYXRmb3JtTmF2TGlzdCAgPT4g5o6l5Y+jbmF2aWdhdGlvbkNvbmZpZy5wbGF0Zm9ybU1vdWRsZXPmlbDmja7vvIjpgJrov4fnrqHnkIblkI7lj7DphY3nva7oj5zljZXvvIzljIXmi6zkuoznuqfoj5zljZXvvIlcclxuICAgICAgKiBiYXNlLmRlZmF1bHROYXZMaXN0IOaOpeWFpeaWuemFjee9rueahOiPnOWNlVxyXG4gICAgKi9cclxuICAgIHByaW1hcnlOYXZMaXN0ID0gdXRpbHMuYXJyVW5pcXVlKGJhc2UuZGVmYXVsdE5hdkxpc3QuY29uY2F0KFxyXG4gICAgICBjb25maWcucHJpbWFyeU5hdi5wbGF0Zm9ybU5hdkxpc3QsXHJcbiAgICAgIGJhc2UucGxhdGZvcm1OYXZMaXN0XHJcbiAgICApKVxyXG4gICAgLy8g5qC55o2u5b2T5YmN6aG16Z2i572R5Z2AaWQs5Yy56YWN6auY5Lqu55qE6I+c5Y2V6aG5XHJcbiAgICB1dGlscy5nZXRCcm93c2VVcmxJZEFjdGl2ZU1lbnUocHJpbWFyeU5hdkxpc3QpXHJcbiAgICBjb25maWcucHJpbWFyeU5hdi5wbGF0Zm9ybU5hdkxpc3QgPSB1dGlscy5hcnJVbmlxdWUocHJpbWFyeU5hdkxpc3QpXHJcbiAgfVxyXG4gIGlmIChsZW4gfHwgbGVuID09PSAwKSB7XHJcbiAgICAvLyDmraPlvI/muLLmn5NcclxuICAgIGxldCByZW5kZXJBcnJheSA9IHByaW1hcnlOYXZMaXN0LnNsaWNlKDAsIGxlbiAtIDEpXHJcbiAgICAkKCcjZWJnbmF2LXByaW1hcnlOYXZMaXN0JykuaW5uZXJIVE1MID0gdXRpbHMucmVuZGVyTmF2YmFyRG9tKHJlbmRlckFycmF5KVxyXG4gICAgLy8gZGVidWdnZXJcclxuICAgIC8vICQoJyNlYmduYXYtcHJpbWFyeU5hdkxpc3QnKS5pbm5lckhUTUwgPSB1dGlscy50ZW1wbGF0ZVJlbmRlcihcclxuICAgIC8vICAgdHBsLmxpc3RUZW1wLFxyXG4gICAgLy8gICByZW5kZXJBcnJheSxcclxuICAgIC8vICAgTUVOVV9QUklNQVJZTElTVFxyXG4gICAgLy8gKVxyXG4gICAgLy8g5o+S5YWl5pu05aSaXHJcbiAgICAkKCcjZWJnbmF2LXByaW1hcnlOYXZMaXN0JykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0cGwubW9yZVRlbXApXHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICBjb25zdCBtb3JlRGF0YSA9IHV0aWxzLmFyclVuaXF1ZShwcmltYXJ5TmF2TGlzdClcclxuICAgIGxldCByZW5kZXJNb3JlQXJyYXkgPSBtb3JlRGF0YS5zbGljZShsZW4gLSAxLCBwcmltYXJ5TmF2TGlzdC5sZW5ndGgpXHJcblxyXG4gICAgLy8gJCgnLm1vcmUtY2hpbGRyZW4nKVswXS5pbm5lckhUTUwgPSB1dGlscy50ZW1wbGF0ZVJlbmRlcihcclxuICAgIC8vICAgdHBsLmxpc3RUZW1wLFxyXG4gICAgLy8gICByZW5kZXJNb3JlQXJyYXksXHJcbiAgICAvLyAgIE1FTlVfUFJJTUFSWUxJU1RcclxuICAgIC8vIClcclxuICAgICQoJy5tb3JlLWNoaWxkcmVuJylbMF0uaW5uZXJIVE1MID0gdXRpbHMucmVuZGVyTmF2YmFyRG9tKHJlbmRlck1vcmVBcnJheSlcclxuICAgIHV0aWxzLmhhbmRsZUNsYXNzKCQoJyNlYmduYXYtYm94JyksICdkZWxldGUnLCAncmVuZGVyJylcclxuICAgIHRyYXZlcnNlRG9tQXJyKCcjZWJnbmF2LXByaW1hcnlOYXZMaXN0JylcclxuICAgIC8vIH0sIDIwKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8g5a2Y5Zyo5LiU5aSn5LqO5YiZ5riy5p+TXHJcbiAgICBpZiAocHJpbWFyeU5hdkxpc3QgJiYgcHJpbWFyeU5hdkxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAkKCcjZWJnbmF2LXByaW1hcnlOYXZMaXN0JykuaW5uZXJIVE1MID0gdXRpbHMucmVuZGVyTmF2YmFyRG9tKHByaW1hcnlOYXZMaXN0KVxyXG4gICAgICAvLyBkZWJ1Z2dlclxyXG4gICAgICAvLyAkKCcjZWJnbmF2LXByaW1hcnlOYXZMaXN0JykuaW5uZXJIVE1MID0gdXRpbHMudGVtcGxhdGVSZW5kZXIoXHJcbiAgICAgIC8vICAgdHBsLmxpc3RUZW1wLFxyXG4gICAgICAvLyAgIHByaW1hcnlOYXZMaXN0LFxyXG4gICAgICAvLyAgIE1FTlVfUFJJTUFSWUxJU1RcclxuICAgICAgLy8gKVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBsZXQgY2hpbGRyZW5Ob2RlID0gJCgnI2ViZ25hdi1wcmltYXJ5TmF2TGlzdCcpLmNoaWxkcmVuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmltYXJ5TmF2TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGV0IENOb2RlID0gY2hpbGRyZW5Ob2RlW2ldXHJcbiAgICAgICAgICBwcmltYXJ5TmF2TGlzdFtpXS53aWR0aCA9IENOb2RlID8gQ05vZGUub2Zmc2V0V2lkdGggKyAxIDogMFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB3aW5XaWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXHJcbiAgICAgICAgbGV0IHByaW1hcnlOYXZXaWR0aE1heCA9IHdpbldpZHRoIC0gJCgnLmViZ25hdi1sb2dvYm94JylbMF0ub2Zmc2V0V2lkdGggLSAzNjJcclxuICAgICAgICBsZXQgaW5kZXggPSBjYWxjUHJpbWFyeU51bWJlcihwcmltYXJ5TmF2TGlzdCwgcHJpbWFyeU5hdldpZHRoTWF4KVxyXG4gICAgICAgIGlmIChpbmRleCAhPT0gZmFsc2UgJiYgcHJpbWFyeU5hdkxpc3QubGVuZ3RoICE9PSBpbmRleCkge1xyXG4gICAgICAgICAgcmVuZGVyUHJpbWFyeU5hdkxpc3QoaW5kZXgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHV0aWxzLmhhbmRsZUNsYXNzKCQoJyNlYmduYXYtYm94JyksICdkZWxldGUnLCAncmVuZGVyJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJhdmVyc2VEb21BcnIoJyNlYmduYXYtcHJpbWFyeU5hdkxpc3QnKVxyXG4gICAgICB9LCAzMClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHV0aWxzLmhhbmRsZUNsYXNzKCQoJyNlYmduYXYtYm94JyksICdkZWxldGUnLCAncmVuZGVyJylcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlclByaW1hcnlOYXZMaXN0TmV3ID0gKGxlbikgPT4ge1xyXG4gIGxldCBzcGFjZVdpZHRoID1cclxuICAgIChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgLVxyXG4gICAgJCgnLmViZ25hdi1sb2dvYm94JylbMF0ub2Zmc2V0V2lkdGggLVxyXG4gICAgJCgnLmViZ25hdi1vcGVyYXRpb24nKVswXS5vZmZzZXRXaWR0aCAtXHJcbiAgICAxMTJcclxuXHJcbiAgY29uc29sZS5sb2coJ0BAQEBAQEBAQEBAQEBAc3BhY2VXaWR0aCA9ICcsIHNwYWNlV2lkdGgpXHJcbiAgLy8g6aaW5YWI6I635Y+W5b2T5YmN5Y+v5Lul5pi+56S65aSa5bCR5a695bqm77yM54S25ZCO6buY6K6k6K6+572u5q+P5Liq5qCP55uu55qE5aSn5bCP5Li6MTAwcHjvvIzlpoLmnpzlsI/kuo7ov5nkuKrmlbDvvIzooajnpLrmiJHku6zpnIDopoHorr7nva5tb3JlXHJcbiAgY29uc29sZS5sb2coJ3JlbmRlclByaW1hcnlOYXZMaXN0JywgY29uZmlnLnByaW1hcnlOYXYucGxhdGZvcm1OYXZMaXN0KVxyXG4gIGxldCBwcmltYXJ5TmF2TGlzdCA9IGNvbmZpZy5wcmltYXJ5TmF2LnBsYXRmb3JtTmF2TGlzdFxyXG5cclxuICBpZiAoY29uZmlnLnR5cGUgPT09ICdhcHBsaWNhdGlvbicpIHtcclxuICAgIHByaW1hcnlOYXZMaXN0ID0gY29uZmlnLnByaW1hcnlOYXYuYXBwTmF2TGlzdFxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnYmFzZScsIGJhc2UpXHJcbiAgICBwcmltYXJ5TmF2TGlzdCA9IHV0aWxzLmFyclVuaXF1ZShiYXNlLmRlZmF1bHROYXZMaXN0LmNvbmNhdChjb25maWcucHJpbWFyeU5hdi5wbGF0Zm9ybU5hdkxpc3QsIGJhc2UucGxhdGZvcm1OYXZMaXN0KSlcclxuICAgIGNvbmZpZy5wcmltYXJ5TmF2LnBsYXRmb3JtTmF2TGlzdCA9IHByaW1hcnlOYXZMaXN0XHJcbiAgfVxyXG4gIGxldCBtYXhQdXRTaXplID0gcGFyc2VJbnQoc3BhY2VXaWR0aCAvIG1lbnVNaW5XaWR0aCwgMCkgLy8g6Zmk5LulbWVudU1pbldpZHRo5Yik5pat5pyJ5aSa5bCRXHJcblxyXG4gIGlmIChsZW4gPj0gbWF4UHV0U2l6ZSkge1xyXG4gICAgLy8g5q2j5byP5riy5p+TXHJcbiAgICBsZXQgcmVuZGVyQXJyYXkgPSBwcmltYXJ5TmF2TGlzdC5zbGljZSgwLCBsZW4gLSAxKVxyXG5cclxuICAgIC8vICQoJyNlYmduYXYtcHJpbWFyeU5hdkxpc3QnKS5pbm5lckhUTUwgPSB1dGlscy50ZW1wbGF0ZVJlbmRlcihcclxuICAgIC8vICAgdHBsLmxpc3RUZW1wLFxyXG4gICAgLy8gICByZW5kZXJBcnJheSxcclxuICAgIC8vICAgTUVOVV9QUklNQVJZTElTVFxyXG4gICAgLy8gKVxyXG4gICAgJCgnI2ViZ25hdi1wcmltYXJ5TmF2TGlzdCcpLmlubmVySFRNTCA9IHV0aWxzLnJlbmRlck5hdmJhckRvbShyZW5kZXJBcnJheSlcclxuICAgIC8vIOaPkuWFpeabtOWkmlxyXG4gICAgJCgnI2ViZ25hdi1wcmltYXJ5TmF2TGlzdCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdHBsLm1vcmVUZW1wKVxyXG4gICAgLy8gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgbGV0IHJlbmRlck1vcmVBcnJheSA9IHByaW1hcnlOYXZMaXN0LnNsaWNlKGxlbiAtIDEsIHByaW1hcnlOYXZMaXN0Lmxlbmd0aClcclxuXHJcbiAgICAvLyAkKCcubW9yZS1jaGlsZHJlbicpWzBdLmlubmVySFRNTCA9IHV0aWxzLnRlbXBsYXRlUmVuZGVyKFxyXG4gICAgLy8gICB0cGwubGlzdFRlbXAsXHJcbiAgICAvLyAgIHJlbmRlck1vcmVBcnJheSxcclxuICAgIC8vICAgTUVOVV9QUklNQVJZTElTVFxyXG4gICAgLy8gKVxyXG4gICAgJCgnLm1vcmUtY2hpbGRyZW4nKVswXS5pbm5lckhUTUwgPSB1dGlscy5yZW5kZXJOYXZiYXJEb20ocmVuZGVyTW9yZUFycmF5KVxyXG4gICAgdXRpbHMuaGFuZGxlQ2xhc3MoJCgnI2ViZ25hdi1ib3gnKSwgJ2RlbGV0ZScsICdyZW5kZXInKVxyXG4gICAgLy8gfSwgMjApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyDlrZjlnKjkuJTlpKfkuo7liJnmuLLmn5NcclxuICAgIGlmIChwcmltYXJ5TmF2TGlzdCAmJiBwcmltYXJ5TmF2TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vICQoJyNlYmduYXYtcHJpbWFyeU5hdkxpc3QnKS5pbm5lckhUTUwgPSB1dGlscy50ZW1wbGF0ZVJlbmRlcihcclxuICAgICAgLy8gICB0cGwubGlzdFRlbXAsXHJcbiAgICAgIC8vICAgcHJpbWFyeU5hdkxpc3QsXHJcbiAgICAgIC8vICAgTUVOVV9QUklNQVJZTElTVFxyXG4gICAgICAvLyApXHJcbiAgICAgICQoJyNlYmduYXYtcHJpbWFyeU5hdkxpc3QnKS5pbm5lckhUTUwgPSB1dGlscy5yZW5kZXJOYXZiYXJEb20ocHJpbWFyeU5hdkxpc3QpXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGxldCBjaGlsZHJlbk5vZGUgPSAkKCcjZWJnbmF2LXByaW1hcnlOYXZMaXN0JykuY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW1hcnlOYXZMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgQ05vZGUgPSBjaGlsZHJlbk5vZGVbaV1cclxuICAgICAgICAgIHByaW1hcnlOYXZMaXN0W2ldLndpZHRoID0gQ05vZGUgPyBDTm9kZS5vZmZzZXRXaWR0aCArIDEgOiAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbmRleCA9IGNhbGNQcmltYXJ5TnVtYmVyKHByaW1hcnlOYXZMaXN0LCBzcGFjZVdpZHRoKVxyXG5cclxuICAgICAgICBpZiAoaW5kZXggIT09IGZhbHNlICYmIHByaW1hcnlOYXZMaXN0Lmxlbmd0aCAhPT0gaW5kZXgpIHtcclxuICAgICAgICAgIHJlbmRlclByaW1hcnlOYXZMaXN0KGluZGV4KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1dGlscy5oYW5kbGVDbGFzcygkKCcjZWJnbmF2LWJveCcpLCAnZGVsZXRlJywgJ3JlbmRlcicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyYXZlcnNlRG9tQXJyKCcjZWJnbmF2LXByaW1hcnlOYXZMaXN0JylcclxuICAgICAgfSwgMzApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1dGlscy5oYW5kbGVDbGFzcygkKCcjZWJnbmF2LWJveCcpLCAnZGVsZXRlJywgJ3JlbmRlcicpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICog5riy5p+T5bqU55So5Ymv5YiX6KGoXHJcbiAqL1xyXG5jb25zdCByZW5kZXJBcHBMaXN0ID0gKGRlbE9sZERvbSA9IGZhbHNlKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3JlbmRlckFwcExpc3QnLCBjb25maWcucHJpbWFyeU5hdi5hcHBMaXN0KVxyXG4gIC8vIOWIoOmZpOWOn+adpeacieeahGNsYXNz77yM5aaC5p6c5piv5Yid5aeL5YyW5oiR5Lus5Y+v5Lul6YCJ5oup5LiN5YGa5Yig6Zmk5Yqo5L2cXHJcbiAgaWYgKGRlbE9sZERvbSkge1xyXG4gICAgdXRpbHMuZGVsZXRlRG9tQnlDbGFzc05hbWUoJ2ViZ25hdi1hcHAtbGlzdCcpXHJcbiAgfVxyXG4gIGlmIChcclxuICAgIGNvbmZpZy50eXBlID09PSAnYXBwbGljYXRpb24nICYmXHJcbiAgICBjb25maWcucHJpbWFyeU5hdiAmJlxyXG4gICAgY29uZmlnLnByaW1hcnlOYXYuYXBwTGlzdCAmJlxyXG4gICAgY29uZmlnLnByaW1hcnlOYXYuYXBwTGlzdC5sZW5ndGhcclxuICApIHtcclxuICAgIC8vIOiOt+WPluW9k+WJjemhuVxyXG4gICAgbGV0IGFwcExpc3QgPSBjb25maWcucHJpbWFyeU5hdi5hcHBMaXN0XHJcbiAgICBsZXQgY3VycmVudE5hbWUgPSAnJ1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoYXBwTGlzdFtpXS5jdXJyZW50KSB7XHJcbiAgICAgICAgY3VycmVudE5hbWUgPSBhcHBMaXN0W2ldLnRpdGxlXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY3VycmVudE5hbWUg5aaC5p6c5rKh5pyJ6I635Y+W5Yiw5YC877yM5bCx6buY6K6k5Y+W56ys5LiA5L2NbmFtZVxyXG4gICAgaWYgKCFjdXJyZW50TmFtZSAmJiBhcHBMaXN0ICYmIGFwcExpc3QubGVuZ3RoKSB7XHJcbiAgICAgIGN1cnJlbnROYW1lID0gYXBwTGlzdFswXS50aXRsZVxyXG4gICAgICBhcHBMaXN0WzBdLmN1cnJlbnQgPSB0cnVlXHJcbiAgICB9XHJcbiAgICAvLyAkKCcjZWJnbmF2LWViZ25hdkxvZ29ib3gnKS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAvLyAgICdiZWZvcmVlbmQnLFxyXG4gICAgLy8gICB1dGlscy50ZW1wbGF0ZVJlbmRlcih0cGwuYXBwTGlzdFRlbXAsIHtcclxuICAgIC8vICAgICBjdXJyZW50TmFtZTogY3VycmVudE5hbWUsXHJcbiAgICAvLyAgICAgYXBwTGlzdDogY29uZmlnLnByaW1hcnlOYXYuYXBwTGlzdCxcclxuICAgIC8vICAgICB0eXBlOiBNRU5VX0FQUExJU1RcclxuICAgIC8vICAgfSlcclxuICAgIC8vIClcclxuICAgIC8vIOa4suafk+WJr+W6lOeUqOWQjeensFxyXG4gICAgJCgnI2ViZ25hdi1lYmduYXZMb2dvYm94JykuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgdXRpbHMucmVuZGVyQXBwbGljYXRpb25OYXZiYXIoY3VycmVudE5hbWUpXHJcbiAgICApXHJcbiAgICAvLyDmuLLmn5PlupTnlKjlia/liJfooajkuIvmi4noj5zljZVcclxuICAgIHJlbmRlckFwcExpc3REcm9wZG93bkxpc3QoY3VycmVudE5hbWUpXHJcbiAgfVxyXG59XHJcblxyXG4vLyDmuLLmn5PlupTnlKjlia/liJfooajkuIvmi4noj5zljZVcclxuY29uc3QgcmVuZGVyQXBwTGlzdERyb3Bkb3duTGlzdCA9IChjdXJyZW50TmFtZSkgPT4ge1xyXG4gIGNvbnN0IGViZ25hdkFwcExpc3RTZXBhcmF0b3JVbCA9ICQoJyNlYmduYXYtYXBwLWxpc3Qtc2VwYXJhdG9yLXVsJylcclxuICBlYmduYXZBcHBMaXN0U2VwYXJhdG9yVWwgJiYgKGViZ25hdkFwcExpc3RTZXBhcmF0b3JVbC5pbm5lckhUTUwgPSAnJylcclxuICBlYmduYXZBcHBMaXN0U2VwYXJhdG9yVWwuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgJ2JlZm9yZWVuZCcsXHJcbiAgICB1dGlscy5yZW5kZXJBcHBsaWNhdGlvbk5hdmJhclVsTGlzdChjb25maWcucHJpbWFyeU5hdi5hcHBMaXN0KVxyXG4gIClcclxuICAvLyDmt7vliqDkuovku7ZcclxuICBhZGRSZW5kZXJBcHBMaXN0RXZlbnQoY3VycmVudE5hbWUpXHJcbn1cclxuXHJcbi8vIOW6lOeUqOWJr+WIl+ihqOa3u+WKoOWIl+ihqOeCueWHu+S6i+S7tlxyXG5jb25zdCBhZGRSZW5kZXJBcHBMaXN0RXZlbnQgPSAoY3VycmVudE5hbWUpID0+IHtcclxuICBjb25zdCBsaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlYmduYXYtYXBwLWxpc3Qtc2VwYXJhdG9yLXVsJykuY2hpbGRyZW5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBlbCA9IGxpW2ldXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZWwucXVlcnlTZWxlY3RvcihgLmN1c3RvbV9uYXZiYXJfX2NvbnRlbnRfZGF0YWApLmlubmVyVGV4dClcclxuICAgICAgaWYgKGRhdGEudGl0bGUgPT09IGN1cnJlbnROYW1lKSByZXR1cm4gZmFsc2VcclxuICAgICAgY29tbW9uTmF2RXZlbnQoZGF0YSwgZWwpXHJcbiAgICAgICQoJyNlYmduYXYtYXBwLWN1cnJlbnQtbmFtZScpLmlubmVyVGV4dCA9IGRhdGEudGl0bGVcclxuICAgICAgbGV0IGNydU5hbWUgPSAnJ1xyXG4gICAgICBjb25maWcucHJpbWFyeU5hdi5hcHBMaXN0LmZvckVhY2goc3ViID0+IHtcclxuICAgICAgICBpZiAoZGF0YS50aXRsZSA9PT0gc3ViLnRpdGxlKSB7XHJcbiAgICAgICAgICBzdWIuY3VycmVudCA9IHRydWVcclxuICAgICAgICAgIGNydU5hbWUgPSBzdWIudGl0bGVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3ViLmN1cnJlbnQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmVuZGVyQXBwTGlzdERyb3Bkb3duTGlzdChjcnVOYW1lKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbi8vIOWvvOiIquWFrOWFseS6i+S7tua0vuWPkeaWueazlVxyXG5jb25zdCBjb21tb25OYXZFdmVudCA9IChkYXRhLCBlbCkgPT4ge1xyXG4gIC8vIGRlYnVnZ2VyXHJcbiAgLy8g6I635Y+W5pWw5o2uXHJcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcclxuICAgIGRhdGEgPSBKU09OLnBhcnNlKGVsLnF1ZXJ5U2VsZWN0b3IoYC5jdXN0b21fbmF2YmFyX19jb250ZW50X2RhdGFgKS5pbm5lclRleHQpXHJcbiAgfVxyXG4gIGNvbnN0IGludmFsaWRTdHIgPSBbJyMnLCAndW5kZWZpbmVkJywgJ3VubGwnLCAnIycsICdqYXZhc2NyaXB0OjsnXVxyXG4gIGlmIChkYXRhLnVybCAmJiBpbnZhbGlkU3RyLmluZGV4T2YoZGF0YS51cmwpID09PSAtMSkge1xyXG4gICAgLy8gZGF0YS51cmwg5LiN562J5LqO56m65oiW6ICF5LiN562J5LqOIyzor7TmmI7mmK/kuIDkuKrmraPluLjnmoR1cmzvvIzmjInnhafmraPluLjpk77mjqXot7PovaxcclxuICAgIHdpbmRvdy5vcGVuKGRhdGEudXJsLCBkYXRhLnRhcmdldCB8fCAnX2JsYW5rJylcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKCFkYXRhLmZ1bmNuYW1lIHx8IGludmFsaWRTdHIuaW5kZXhPZihkYXRhLmZ1bmNuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd1cmzlkoxmdW5jbmFtZeS4jeiDveWQjOaXtuS4uuepuizmiJbogIXlgLzml6DmlYjvvIzor7fmo4Dmn6XphY3nva7mlbDmja4hJylcclxuICAgIH1cclxuICAgIHdpbmRvdy5lYmduYXZpZ2F0aW9uLmVtaXQoZGF0YS5mdW5jbmFtZSwgZGF0YSlcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmuLLmn5PlupTnlKjkuoznuqflr7zoiKrlkI3np7BcclxuICovXHJcbmNvbnN0IHJlbmRlclNlY29uZGFyeU5hbWUgPSAoZGVsT2xkRG9tID0gZmFsc2UpID0+IHtcclxuICBjb25zb2xlLmxvZygncmVuZGVyU2Vjb25kYXJ5TmFtZScsIGNvbmZpZy5zZWNvbmRhcnlOYXYuc2Vjb25kYXJ5TmFtZSlcclxuICAvLyDliKDpmaTljp/mnaXmnInnmoRjbGFzc++8jOWmguaenOaYr+WIneWni+WMluaIkeS7rOWPr+S7pemAieaLqeS4jeWBmuWIoOmZpOWKqOS9nFxyXG4gIGlmIChkZWxPbGREb20pIHtcclxuICAgIHV0aWxzLmRlbGV0ZURvbUJ5Q2xhc3NOYW1lKCdpbmF2LXNlY29uZGFyeS1uYW1lJylcclxuICB9XHJcbiAgaWYgKFxyXG4gICAgY29uZmlnLnR5cGUgPT09ICdhcHBsaWNhdGlvbicgJiZcclxuICAgIGNvbmZpZy5zZWNvbmRhcnlOYXYgJiZcclxuICAgIGNvbmZpZy5zZWNvbmRhcnlOYXYuc2Vjb25kYXJ5TmFtZVxyXG4gICkge1xyXG4gICAgJCgnI2ViZ25hdi1zZWNvbmRhcnlOYW1lJykuaW5uZXJIVE1MID0gdXRpbHMudGVtcGxhdGVSZW5kZXIoXHJcbiAgICAgIHRwbC5zZWNvbmRhcnlOYW1lVGVtcCxcclxuICAgICAgY29uZmlnLnNlY29uZGFyeU5hdi5zZWNvbmRhcnlOYW1lXHJcbiAgICApXHJcbiAgICAkKCcjZWJnbmF2LXNlY29uZGFyeU5hbWUnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKCcjZWJnbmF2LXNlY29uZGFyeU5hbWUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICog5riy5p+T5bqU55So5LqM57qn5a+86Iiq5YiX6KGoXHJcbiAqIOa4suafk+mAu+i+ke+8mlxyXG4gKiAx44CB5YWI5LiN5pi+56S65riy5p+T5Ye65omA5pyJ6I+c5Y2V6K6w5b2V6I+c5Y2V5a695bqm77yM5bm26K6h566X5Y+v5pi+56S65pWw6YePXHJcbiAqIDLjgIHmoLnmja7lj6/mmL7npLrmlbDph4/ph43mlrDmuLLmn5PvvIzlubbmmL7npLrlh7rmnaVcclxuICovXHJcbmNvbnN0IHJlbmRlclNlY29uZGFyeU5hdkxpc3QgPSAobGVuKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3JlbmRlclNlY29uZGFyeU5hdkxpc3QnLCBjb25maWcuc2Vjb25kYXJ5TmF2LnNlY29uZGFyeU5hdkxpc3QpXHJcbiAgbGV0IHNlY29uZGFyeU5hdkxpc3QgPSBjb25maWcuc2Vjb25kYXJ5TmF2XHJcbiAgICA/IGNvbmZpZy5zZWNvbmRhcnlOYXYuc2Vjb25kYXJ5TmF2TGlzdFxyXG4gICAgOiBudWxsXHJcblxyXG4gIGlmIChsZW4gfHwgbGVuID09PSAwKSB7XHJcbiAgICAvLyDmraPlvI/muLLmn5NcclxuICAgIC8vIGNvbnNvbGUubG9nKCfkuoznuqcnLCBsZW4pO1xyXG4gICAgbGV0IHJlbmRlckFycmF5ID0gc2Vjb25kYXJ5TmF2TGlzdC5zbGljZSgwLCBsZW4gLSAxKVxyXG5cclxuICAgIC8vICQoJyNlYmduYXYtc2Vjb25kYXJ5TmF2TGlzdCcpLmlubmVySFRNTCA9IHV0aWxzLnRlbXBsYXRlUmVuZGVyKFxyXG4gICAgLy8gICB0cGwubGlzdFRlbXAsXHJcbiAgICAvLyAgIHJlbmRlckFycmF5LFxyXG4gICAgLy8gICBNRU5VX1NFQ09ORExJU1RcclxuICAgIC8vIClcclxuICAgICQoJyNlYmduYXYtc2Vjb25kYXJ5TmF2TGlzdCcpLmlubmVySFRNTCA9IHV0aWxzLnJlbmRlck5hdmJhckRvbShyZW5kZXJBcnJheSlcclxuICAgIC8vIOaPkuWFpeabtOWkmlxyXG4gICAgJCgnI2ViZ25hdi1zZWNvbmRhcnlOYXZMaXN0JykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0cGwubW9yZVRlbXApXHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICBsZXQgcmVuZGVyTW9yZUFycmF5ID0gc2Vjb25kYXJ5TmF2TGlzdC5zbGljZShcclxuICAgICAgbGVuIC0gMSxcclxuICAgICAgc2Vjb25kYXJ5TmF2TGlzdC5sZW5ndGhcclxuICAgIClcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnLm1vcmUtY2hpbGRyZW4nLCAkKCcubW9yZS1jaGlsZHJlbicpLmxlbmd0aCk7XHJcbiAgICAvLyAkKCcubW9yZS1jaGlsZHJlbicpW1xyXG4gICAgLy8gICAkKCcubW9yZS1jaGlsZHJlbicpLmxlbmd0aCAtIDFcclxuICAgIC8vIF0uaW5uZXJIVE1MID0gdXRpbHMudGVtcGxhdGVSZW5kZXIoXHJcbiAgICAvLyAgIHRwbC5saXN0VGVtcCxcclxuICAgIC8vICAgcmVuZGVyTW9yZUFycmF5LFxyXG4gICAgLy8gICBNRU5VX1NFQ09ORExJU1RcclxuICAgIC8vIClcclxuICAgICQoJy5tb3JlLWNoaWxkcmVuJylbXHJcbiAgICAgICQoJy5tb3JlLWNoaWxkcmVuJykubGVuZ3RoIC0gMVxyXG4gICAgXS5pbm5lckhUTUwgPSB1dGlscy5yZW5kZXJOYXZiYXJEb20ocmVuZGVyTW9yZUFycmF5KVxyXG4gICAgdHJhdmVyc2VEb21BcnIoJyNlYmduYXYtc2Vjb25kYXJ5TmF2TGlzdCcpXHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChcclxuICAgICAgY29uZmlnLnR5cGUgPT09ICdhcHBsaWNhdGlvbicgJiZcclxuICAgICAgc2Vjb25kYXJ5TmF2TGlzdCAmJlxyXG4gICAgICBzZWNvbmRhcnlOYXZMaXN0Lmxlbmd0aCA+IDBcclxuICAgICkge1xyXG4gICAgICAvLyAkKCcjZWJnbmF2LXNlY29uZGFyeU5hdkxpc3QnKS5pbm5lckhUTUwgPSB1dGlscy50ZW1wbGF0ZVJlbmRlcihcclxuICAgICAgLy8gICB0cGwubGlzdFRlbXAsXHJcbiAgICAgIC8vICAgc2Vjb25kYXJ5TmF2TGlzdCxcclxuICAgICAgLy8gICBNRU5VX1NFQ09ORExJU1RcclxuICAgICAgLy8gKVxyXG4gICAgICAkKCcjZWJnbmF2LXNlY29uZGFyeU5hdkxpc3QnKS5pbm5lckhUTUwgPSB1dGlscy5yZW5kZXJOYXZiYXJEb20oc2Vjb25kYXJ5TmF2TGlzdClcclxuICAgICAgLy8g5re75Yqg5LqL5Lu2XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGViZ25hdlNlY29uZGFyeU5hdkxpc3REb20gPSAkKCcjZWJnbmF2LXNlY29uZGFyeU5hdkxpc3QnKVxyXG4gICAgICAgIGxldCBjaGlsZHJlbk5vZGUgPSBlYmduYXZTZWNvbmRhcnlOYXZMaXN0RG9tICYmIGViZ25hdlNlY29uZGFyeU5hdkxpc3REb20uY2hpbGRyZW5cclxuICAgICAgICBpZiAoc2Vjb25kYXJ5TmF2TGlzdCAmJiBzZWNvbmRhcnlOYXZMaXN0Lmxlbmd0aCAmJiBjaGlsZHJlbk5vZGUgJiYgY2hpbGRyZW5Ob2RlLmxlbmd0aCkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWNvbmRhcnlOYXZMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNlY29uZGFyeU5hdkxpc3RbaV0ud2lkdGggPSBjaGlsZHJlbk5vZGVbaV0ub2Zmc2V0V2lkdGhcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbiAgICAgICAgbGV0IHNlY29uZGFyeU5hdldpZHRoTWF4ID1cclxuICAgICAgICAgICQoJy5lYmduYXYtc2Vjb25kYXJ5LXdhcnAnKVswXS5vZmZzZXRXaWR0aCAtXHJcbiAgICAgICAgICAkKCcuc2Vjb25kYXJ5LW5hbWUnKVswXS5vZmZzZXRXaWR0aCAtIDIwXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWNvbmRhcnlOYXZXaWR0aE1heCcsIHNlY29uZGFyeU5hdldpZHRoTWF4KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkKCcuZWJnbmF2LXNlY29uZGFyeS13YXJwJylbMF0ub2Zmc2V0V2lkdGgsICQoJy5zZWNvbmRhcnktbmFtZScpWzBdLm9mZnNldFdpZHRoKTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gY2FsY1ByaW1hcnlOdW1iZXIoc2Vjb25kYXJ5TmF2TGlzdCwgc2Vjb25kYXJ5TmF2V2lkdGhNYXgpXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCcy5Y+v5Lul5pS+5LiLJywgaW5kZXgpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gZmFsc2UgJiYgc2Vjb25kYXJ5TmF2TGlzdC5sZW5ndGggIT09IGluZGV4KSB7XHJcbiAgICAgICAgICByZW5kZXJTZWNvbmRhcnlOYXZMaXN0KGluZGV4KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnu5nlvZPliY1kb23mt7vliqDoh6rlrprkuYnkuovku7ZcclxuICAgICAgICB0cmF2ZXJzZURvbUFycignI2ViZ25hdi1zZWNvbmRhcnlOYXZMaXN0JylcclxuICAgICAgfSwgMzApXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyDnu5nlvZPliY1kb23kuIvmr4/kuKpsaeagh+etvua3u+WKoOS6i+S7tlxyXG5jb25zdCB0cmF2ZXJzZURvbUFyciA9IChlbCkgPT4ge1xyXG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgLy8g6I635Y+W5b2T5YmNZG9t5LiL6Z2i55qE5omA5pyJbGnmoIfnrb5cclxuICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudCAmJiBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKVxyXG4gIGlmICghY2hpbGRyZW4pIHJldHVybiBmYWxzZVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgIHRyYXZlcnNlTmF2TGlzdEV2ZW50KGNoaWxkcmVuW2ldKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdHJhdmVyc2VOYXZMaXN0RXZlbnQgPSAoZWwpID0+IHtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAvLyDpmLvmraLlhpLms6FcclxuICAgIGlmIChlICYmIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB7XHJcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5ldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICAvLyDojrflj5blvZPliY3moIfnrb7mmK/lkKbmnInlrZDoj5zljZXnmoTnirbmgIFcclxuICAgIGNvbnN0IGhhc2NoaWxkcmVubW9kdWxlcyA9IGVsLmdldEF0dHJpYnV0ZSgnaGFzY2hpbGRyZW5tb2R1bGVzJylcclxuICAgIC8qXHJcbiAgICAgICog5b2T5YmN5YWD57Sg5pyJ5a2Q5LiL5ouJ6I+c5Y2V77yM5bCG5LiN5omn6KGM5ZCO6Z2i55qE5LqL5Lu2IFwiMeeahCAy5rKh5pyJXCJcclxuICAgICAgKiDlvZPliY3lhYPntKDkuIvpnaLmnIl1bOagh+etvu+8jOivtOaYjuacieWtkOiPnOWNle+8jOWwhuS4jeaJp+ihjOS6i+S7tiAo6Ieq5a6a5LmJ6YWN572u6I+c5Y2V5rKh5pyJaGFzY2hpbGRyZW5tb2R1bGVz5a2X5q61KVxyXG4gICAgKi9cclxuICAgIGlmIChoYXNjaGlsZHJlbm1vZHVsZXMgPT09ICcxJyB8fCBlbC5xdWVyeVNlbGVjdG9yKCd1bCcpKSByZXR1cm4gZmFsc2VcclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGVsLnF1ZXJ5U2VsZWN0b3IoYC5jdXN0b21fbmF2YmFyX19jb250ZW50X2RhdGFgKS5pbm5lclRleHQpXHJcbiAgICBjb21tb25OYXZFdmVudChkYXRhLCBlbCkgLy8g5omn6KGM5LqL5Lu2XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOa4suafk+W6lOeUqOS6jOe6p+WvvOiIquWIl+ihqFxyXG4gKiDmuLLmn5PpgLvovpHvvJpcclxuICogMeOAgeWFiOS4jeaYvuekuua4suafk+WHuuaJgOacieiPnOWNleiusOW9leiPnOWNleWuveW6pu+8jOW5tuiuoeeul+WPr+aYvuekuuaVsOmHj1xyXG4gKiAy44CB5qC55o2u5Y+v5pi+56S65pWw6YeP6YeN5paw5riy5p+T77yM5bm25pi+56S65Ye65p2lICDpu5jorqTorr7nva7kuIDkuKrmnIDlsI/lrr3luqZcclxuICovXHJcbmNvbnN0IHJlbmRlclNlY29uZGFyeU5hdkxpc3ROZXcgPSAobGVuKSA9PiB7XHJcbiAgbGV0IHNlY29uZGFyeU5hdldpZHRoTWF4ID1cclxuICAgICQoJy5lYmduYXYtc2Vjb25kYXJ5LXdhcnAnKVswXS5vZmZzZXRXaWR0aCAtXHJcbiAgICAkKCcuc2Vjb25kYXJ5LW5hbWUnKVswXS5vZmZzZXRXaWR0aFxyXG5cclxuICBjb25zb2xlLmxvZygncmVuZGVyU2Vjb25kYXJ5TmF2TGlzdCcsIGNvbmZpZy5zZWNvbmRhcnlOYXYuc2Vjb25kYXJ5TmF2TGlzdClcclxuICBsZXQgc2Vjb25kYXJ5TmF2TGlzdCA9IGNvbmZpZy5zZWNvbmRhcnlOYXZcclxuICAgID8gY29uZmlnLnNlY29uZGFyeU5hdi5zZWNvbmRhcnlOYXZMaXN0XHJcbiAgICA6IG51bGxcclxuICBsZXQgbWF4UHV0U2l6ZSA9IHBhcnNlSW50KHNlY29uZGFyeU5hdldpZHRoTWF4IC8gbWVudU1pbldpZHRoLCAwKVxyXG5cclxuICBpZiAobGVuID49IG1heFB1dFNpemUpIHtcclxuICAgIC8vIOato+W8j+a4suafk1xyXG4gICAgbGV0IHJlbmRlckFycmF5ID0gc2Vjb25kYXJ5TmF2TGlzdC5zbGljZSgwLCBsZW4gLSAxKVxyXG5cclxuICAgIC8vICQoJyNlYmduYXYtc2Vjb25kYXJ5TmF2TGlzdCcpLmlubmVySFRNTCA9IHV0aWxzLnRlbXBsYXRlUmVuZGVyKFxyXG4gICAgLy8gICB0cGwubGlzdFRlbXAsXHJcbiAgICAvLyAgIHJlbmRlckFycmF5LFxyXG4gICAgLy8gICBNRU5VX1NFQ09ORExJU1RcclxuICAgIC8vIClcclxuICAgIGNvbnN0IGEgPSB1dGlscy5yZW5kZXJOYXZiYXJEb20ocmVuZGVyQXJyYXkpXHJcbiAgICAkKCcjZWJnbmF2LXNlY29uZGFyeU5hdkxpc3QnKS5pbm5lckhUTUwgPSBhXHJcbiAgICAvLyDmj5LlhaXmm7TlpJpcclxuICAgICQoJyNlYmduYXYtc2Vjb25kYXJ5TmF2TGlzdCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdHBsLm1vcmVUZW1wKVxyXG4gICAgLy8gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgbGV0IHJlbmRlck1vcmVBcnJheSA9IHNlY29uZGFyeU5hdkxpc3Quc2xpY2UoXHJcbiAgICAgIGxlbiAtIDEsXHJcbiAgICAgIHNlY29uZGFyeU5hdkxpc3QubGVuZ3RoXHJcbiAgICApXHJcblxyXG4gICAgLy8gJCgnLm1vcmUtY2hpbGRyZW4nKVtcclxuICAgIC8vICAgJCgnLm1vcmUtY2hpbGRyZW4nKS5sZW5ndGggLSAxXHJcbiAgICAvLyBdLmlubmVySFRNTCA9IHV0aWxzLnRlbXBsYXRlUmVuZGVyKFxyXG4gICAgLy8gICB0cGwubGlzdFRlbXAsXHJcbiAgICAvLyAgIHJlbmRlck1vcmVBcnJheSxcclxuICAgIC8vICAgTUVOVV9TRUNPTkRMSVNUXHJcbiAgICAvLyApXHJcbiAgICAkKCcubW9yZS1jaGlsZHJlbicpW1xyXG4gICAgICAkKCcubW9yZS1jaGlsZHJlbicpLmxlbmd0aCAtIDFcclxuICAgIF0uaW5uZXJIVE1MID0gdXRpbHMucmVuZGVyTmF2YmFyRG9tKHJlbmRlck1vcmVBcnJheSlcclxuICAgIC8vIH0sIDIwKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKFxyXG4gICAgICBjb25maWcudHlwZSA9PT0gJ2FwcGxpY2F0aW9uJyAmJlxyXG4gICAgICBzZWNvbmRhcnlOYXZMaXN0ICYmXHJcbiAgICAgIHNlY29uZGFyeU5hdkxpc3QubGVuZ3RoID4gMFxyXG4gICAgKSB7XHJcbiAgICAgIC8vICQoJyNlYmduYXYtc2Vjb25kYXJ5TmF2TGlzdCcpLmlubmVySFRNTCA9IHV0aWxzLnRlbXBsYXRlUmVuZGVyKFxyXG4gICAgICAvLyAgIHRwbC5saXN0VGVtcCxcclxuICAgICAgLy8gICBzZWNvbmRhcnlOYXZMaXN0LFxyXG4gICAgICAvLyAgIE1FTlVfU0VDT05ETElTVFxyXG4gICAgICAvLyApXHJcbiAgICAgICQoJyNlYmduYXYtc2Vjb25kYXJ5TmF2TGlzdCcpLmlubmVySFRNTCA9IHV0aWxzLnJlbmRlck5hdmJhckRvbShzZWNvbmRhcnlOYXZMaXN0KVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBsZXQgY2hpbGRyZW5Ob2RlID0gJCgnI2ViZ25hdi1zZWNvbmRhcnlOYXZMaXN0JykuY2hpbGRyZW5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWNvbmRhcnlOYXZMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBzZWNvbmRhcnlOYXZMaXN0W2ldLndpZHRoID0gY2hpbGRyZW5Ob2RlW2ldLm9mZnNldFdpZHRoXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZy5zZWNvbmRhcnlOYXYuc2Vjb25kYXJ5TmF2TGlzdClcclxuICAgICAgICBsZXQgaW5kZXggPSBjYWxjUHJpbWFyeU51bWJlcihzZWNvbmRhcnlOYXZMaXN0LCBzZWNvbmRhcnlOYXZXaWR0aE1heClcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSBmYWxzZSAmJiBzZWNvbmRhcnlOYXZMaXN0Lmxlbmd0aCAhPT0gaW5kZXgpIHtcclxuICAgICAgICAgIHJlbmRlclNlY29uZGFyeU5hdkxpc3QoaW5kZXgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOe7meW9k+WJjWRvbea3u+WKoOiHquWumuS5ieS6i+S7tlxyXG4gICAgICAgIHRyYXZlcnNlRG9tQXJyKCcjZWJnbmF2LXNlY29uZGFyeU5hdkxpc3QnKVxyXG4gICAgICB9LCAzMClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmuLLmn5PlupTnlKjoh6rlrprkuYnlhaXlj6NcclxuICovXHJcbmNvbnN0IHJlbmRlclNldHRpbmdMaXN0ID0gKGRlbE9sZERvbSA9IGZhbHNlKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coJ3JlbmRlclNldHRpbmdMaXN0JywgY29uZmlnLm9wZXJhdGlvbi5zZXR0aW5nTGlzdClcclxuICAvLyDliKDpmaTljp/mnaXmnInnmoRjbGFzc++8jOWmguaenOaYr+WIneWni+WMluaIkeS7rOWPr+S7pemAieaLqeS4jeWBmuWIoOmZpOWKqOS9nFxyXG4gIGlmIChkZWxPbGREb20pIHtcclxuICAgIHV0aWxzLmNsZWFySW5uZXJIdG1sQnlJZCgnZWJnbmF2LWViZ25hdlNldHRpbmcnKVxyXG4gIH1cclxuICBpZiAoXHJcbiAgICBjb25maWcudHlwZSA9PT0gJ2FwcGxpY2F0aW9uJyAmJlxyXG4gICAgY29uZmlnLm9wZXJhdGlvbiAmJlxyXG4gICAgY29uZmlnLm9wZXJhdGlvbi5zZXR0aW5nTGlzdCAmJlxyXG4gICAgY29uZmlnLm9wZXJhdGlvbi5zZXR0aW5nTGlzdC5sZW5ndGggPiAwXHJcbiAgKSB7XHJcbiAgICAvLyAkKCcjZWJnbmF2LWViZ25hdlNldHRpbmcnKS5pbm5lckhUTUwgPSB1dGlscy50ZW1wbGF0ZVJlbmRlcihcclxuICAgIC8vICAgdHBsLnNldHRpbmdMaXN0VGVtcCxcclxuICAgIC8vICAgY29uZmlnLm9wZXJhdGlvbi5zZXR0aW5nTGlzdCxcclxuICAgIC8vICAgTUVOVV9TRVRUSU5HTElTVFxyXG4gICAgLy8gKVxyXG4gICAgJCgnI2ViZ25hdi1lYmduYXZTZXR0aW5nJykuaW5uZXJIVE1MID0gdXRpbHMucmVuZGVyTmF2YmFyRG9tKGNvbmZpZy5vcGVyYXRpb24uc2V0dGluZ0xpc3QpXHJcbiAgICAkKCcuZWJnbmF2LW9wZXJhdGlvbi1zZXR0aW5nJylbMF0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIGxldCBuYW1lID0gdXRpbHMuZ2V0Q3VycmVudE5hbWUoY29uZmlnLm9wZXJhdGlvbi5zZXR0aW5nTGlzdClcclxuICAgIGNvbnN0IGxpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlYmduYXYtZWJnbmF2U2V0dGluZycpXHJcbiAgICBjb25zdCBsaXNDaGlsZHJlbiA9IGxpcy5xdWVyeVNlbGVjdG9yQWxsKCdsaScpXHJcbiAgICBpZiAobGlzQ2hpbGRyZW4pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXNDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGVsID0gbGlzQ2hpbGRyZW5baV1cclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGVsLnF1ZXJ5U2VsZWN0b3IoYC5jdXN0b21fbmF2YmFyX19jb250ZW50X2RhdGFgKS5pbm5lclRleHQpXHJcbiAgICAgICAgICBjb21tb25OYXZFdmVudChkYXRhLCBlbClcclxuICAgICAgICAgIG5hbWUgPSBkYXRhLnRpdGxlXHJcbiAgICAgICAgICB1dGlscy5zZXRDdXJyZW50TmFtZShjb25maWcub3BlcmF0aW9uLnNldHRpbmdMaXN0LCBuYW1lKVxyXG4gICAgICAgICAgcmVuZGVyU2V0dGluZ0xpc3QoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgJCgnLmViZ25hdi1vcGVyYXRpb24tc2V0dGluZycpWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmuLLmn5PlupTnlKjoh6rlrprkuYnlhaXlj6NcclxuICovXHJcbmNvbnN0IHJlbmRlclJvbGVzTGlzdCA9IChkZWxPbGREb20gPSBmYWxzZSwgbmFtZSA9ICcnLCB0b3RhbCA9IDApID0+IHtcclxuICBpZiAoIWNvbmZpZy5vcGVyYXRpb24ucm9sZUxpc3QubGVuZ3RoKSByZXR1cm4gZmFsc2VcclxuICBjb25zb2xlLmxvZygncmVuZGVyUm9sZXNMaXN0JywgY29uZmlnLm9wZXJhdGlvbi5yb2xlTGlzdCwgbmFtZSlcclxuICAvLyDliKDpmaTljp/mnaXmnInnmoRjbGFzc++8jOWmguaenOaYr+WIneWni+WMluaIkeS7rOWPr+S7pemAieaLqeS4jeWBmuWIoOmZpOWKqOS9nFxyXG4gIGlmIChkZWxPbGREb20pIHtcclxuICAgIHV0aWxzLmNsZWFySW5uZXJIdG1sQnlJZCgnZWJnbmF2LWViZ25hdlJvbGVMaXN0JylcclxuICB9XHJcbiAgaWYgKFxyXG4gICAgY29uZmlnLnR5cGUgPT09ICdhcHBsaWNhdGlvbicgJiZcclxuICAgIGNvbmZpZy5vcGVyYXRpb24gJiZcclxuICAgIGNvbmZpZy5vcGVyYXRpb24ucm9sZUxpc3QgJiZcclxuICAgIGNvbmZpZy5vcGVyYXRpb24ucm9sZUxpc3QubGVuZ3RoID4gMFxyXG4gICkge1xyXG4gICAgLy8gJCgnI2ViZ25hdi1lYmduYXZSb2xlTGlzdCcpLmlubmVySFRNTCA9IHV0aWxzLnRlbXBsYXRlUmVuZGVyKFxyXG4gICAgLy8gICB0cGwubGlzdFRlbXAsXHJcbiAgICAvLyAgIGNvbmZpZy5vcGVyYXRpb24ucm9sZUxpc3QsXHJcbiAgICAvLyAgIE1FTlVfUk9MRUxJU1RcclxuICAgIC8vIClcclxuICAgIGNvbnN0IGViZ25hdkViZ25hdlJvbGVMaXN0ID0gJCgnI2ViZ25hdi1lYmduYXZSb2xlTGlzdCcpXHJcblxyXG4gICAgLy8g5b2T5YmNZG9t5Y+v6IO96I635Y+W5LiN5Yiw77yM6ZyA6KaB562J5LiL5LiA5LiqZXZlbnQgbG9vcFxyXG4gICAgaWYgKCFlYmduYXZFYmduYXZSb2xlTGlzdCkge1xyXG4gICAgICBpZiAodG90YWwgPiAzKSByZXR1cm4gZmFsc2VcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdG90YWwrK1xyXG4gICAgICAgIHJlbmRlclJvbGVzTGlzdChmYWxzZSwgJycsIHRvdGFsKVxyXG4gICAgICB9LCAxMDAwKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWJnbmF2RWJnbmF2Um9sZUxpc3QgJiYgKCQoJyNlYmduYXYtZWJnbmF2Um9sZUxpc3QnKS5pbm5lckhUTUwgPSB1dGlscy5yZW5kZXJOYXZiYXJEb20oY29uZmlnLm9wZXJhdGlvbi5yb2xlTGlzdCkpXHJcbiAgICAgIC8vIOabtOaWsOinkuiJsueahOWQjeensFxyXG4gICAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICBsZXQgc2hvd0N1ckl0ZW0gPSBjb25maWcub3BlcmF0aW9uLnJvbGVMaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jdXJyZW50KVxyXG5cclxuICAgICAgICBpZiAoc2hvd0N1ckl0ZW0gJiYgc2hvd0N1ckl0ZW0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbmFtZSA9IHNob3dDdXJJdGVtWzBdLm5hbWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8g5aaC5p6c5LuA5LmI6YO95rKh6YCJ5Lit77yM5oiR5Lus5pi+56S65o+Q56S65L+h5oGvXHJcbiAgICAgICAgICBuYW1lID0gJ+ivt+mAieaLqei6q+S7vSdcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8g6Kej5Yaz54K55Ye75LmL5ZCO5pS26LW36I+c5Y2V5LiN55Sf5pWI55qE6Zeu6aKY77yM5aaC5p6c6byg5qCH6L+Y5piv5oKs5rWu5ZyoYeagh+etvu+8jOS8muaUtui1t+S5i+WQjuWGjeasoeWxleW8gO+8jOi/meS4quaYr+ato+W4uOeOsOixoVxyXG4gICAgICAgICQoJyNlYmduYXYtZWJnbmF2Um9sZUxpc3QnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAkKCcjZWJnbmF2LWViZ25hdlJvbGVMaXN0Jykuc3R5bGUuZGlzcGxheSA9ICcnXHJcbiAgICAgICAgfSwgMzAwKVxyXG4gICAgICB9XHJcbiAgICAgICQoJyNlYmdpbmF2LXJvbGVOYW1lJykuaW5uZXJIVE1MID0gbmFtZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8g55So5oi35Lit5b+D5raI5oGv5ZKM6YCA5Ye654K55Ye75LqL5Lu25pa55rOVXHJcbmNvbnN0IHJlbmRlck1zZ0FuZExvZ291dEJ0biA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IG1lYXNzYWdlVXJsLCBsb2dvdXRVcmxcclxuICBkYXRhICYmIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0ua2V5ID09PSAnaW5hdi11c2VyLXNldCcpIHtcclxuICAgICAgbWVhc3NhZ2VVcmwgPSBpdGVtLnVybCAvLyDojrflj5bmtojmga/kuK3lv4N1cmxcclxuICAgIH1cclxuICAgIGlmIChpdGVtLmtleSA9PT0gJ3VzZXItbG9nb3V0Jykge1xyXG4gICAgICBsb2dvdXRVcmwgPSBpdGVtLnVybCAvLyDojrflj5bpgIDlh7p1cmxcclxuICAgIH1cclxuICB9KVxyXG4gIHNldHRpbmdFdmVudCgnLnBlcnNvbmFsLWNlbnRlcicsIG1lYXNzYWdlVXJsKVxyXG4gIHNldHRpbmdFdmVudCgnLmViZ25hdi1sb2dvdXQnLCBsb2dvdXRVcmwpXHJcbn1cclxuXHJcbi8vIOa3u+WKoOa2iOaBr+WSjOS4quS6uuS4reW/g+i3s+i9rOS6i+S7tlxyXG5jb25zdCBzZXR0aW5nRXZlbnQgPSAoZWwsIHVybCkgPT4ge1xyXG4gIGNvbnN0IGV2ZW50ID0gJChlbClbMF1cclxuICBldmVudCAmJiBldmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgaWYgKGVsID09PSAnLmViZ25hdi1sb2dvdXQnKSB7XHJcbiAgICAgICAgYmluZExvZ291dCh1cmwpIC8vIOmAgOWHulxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHVybClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIOaYvuekuuaQnOe0olxyXG5jb25zdCBzaG93U2VhcmNoID0gKCkgPT4ge1xyXG4gIGdldEFsbEFwcHNEYXRhKGFwaVVybCwgYmFzZS5ob3N0dXJsKVxyXG59XHJcblxyXG4vLyDlupTnlKjorr/pl67mnYPpmZBcclxuY29uc3QgYWRkQXBwRXZlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2hvd1NlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LXNlYXJjaCcpXHJcbiAgY29uc3QgZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ViZ25hdi1kZWZhbHV0QXBwbGljYXRpb25zJylcclxuICBjb25zdCB1bCA9IGRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndWwnKVswXVxyXG4gIGNvbnN0IGxpID0gdWwgJiYgdWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyksXHJcbiAgICBsZW4gPSBsaSAmJiBsaS5sZW5ndGhcclxuICBpZiAobGVuKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgIGxldCBpdGVtID0gbGlbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKVswXVxyXG4gICAgICBsZXQgaWQgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hcHBpZCcpLFxyXG4gICAgICAgIG5hbWUgPSBpdGVtLmdldEF0dHJpYnV0ZSgndGl0bGUnKSxcclxuICAgICAgICB1cmwgPSBpdGVtLmdldEF0dHJpYnV0ZSgnaHJlZicpLFxyXG4gICAgICAgIHRhcmdldCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCd0YXJnZXQnKSxcclxuICAgICAgICBhcHBlbmRQYXJhbSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdhcHBlbmQtcGFyYW0nKVxyXG4gICAgICBpdGVtLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGFwcENsaWNrKHtcclxuICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgbmFtZSxcclxuICAgICAgICAgIHVybCxcclxuICAgICAgICAgIHRhcmdldCxcclxuICAgICAgICAgIGhvc3R1cmw6IGJhc2UuaG9zdHVybCxcclxuICAgICAgICAgIGFwaVVybDogYXBpVXJsLFxyXG4gICAgICAgICAgYXBwZW5kUGFyYW1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNob3dTZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93U2VhcmNoKVxyXG59XHJcblxyXG4vKipcclxuICog5riy5p+T6buY6K6k5o6o6I2Q5bqU55SoXHJcbiAqL1xyXG5jb25zdCByZW5kZXJBcHBsaWNhdGlvbnMgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3JlbmRlckFwcGxpY2F0aW9ucycsIGJhc2UuYXBwbGljYXRpb25zTGlzdClcclxuICAvLyBiYXNlLmFwcGxpY2F0aW9uc0xpc3QgPSBbXSBiYXNlLmxvZ2luc3RhdHVzXHJcbiAgaWYgKGJhc2UuYXBwbGljYXRpb25zTGlzdCAmJiBiYXNlLmFwcGxpY2F0aW9uc0xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgJCgnLmViZ25hdi1vcGVyYXRpb24tYXBwZW50cnknKVswXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgJCgnI2ViZ25hdi1kZWZhbHV0QXBwbGljYXRpb25zJykuaW5uZXJIVE1MID0gdXRpbHMudGVtcGxhdGVSZW5kZXIoXHJcbiAgICAgIHRwbC5hcHBJY29uTGlzdFRlbXAsXHJcbiAgICAgIGJhc2UuYXBwbGljYXRpb25zTGlzdFxyXG4gICAgKVxyXG4gICAgdXRpbHMuaGFuZGxlQ2xhc3MoJCgnI2ViZ25hdi1ib3gnKSwgJ2RlbGV0ZScsICdyZW5kZXInKVxyXG4gICAgLy8gcmVuZGVyU2VhcmNoRG9tKCkgLy8g5riy5p+T5pCc57Si5qih5Z2XXHJcbiAgICAvLyBnZXRBbGxBcHBzRGF0YShhcGlVcmwsIGJhc2UuaG9zdHVybCkgLy8g6I635Y+W5pCc57Si5bqU55So5YiX6KGoXHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIOa4suafk+aaguaXoOaVsOaNrlxyXG4gICAgJCgnLmViZ25hdi1vcGVyYXRpb24tYXBwZW50cnknKVswXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgJCgnI2ViZ25hdi1kZWZhbHV0QXBwbGljYXRpb25zJykuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJuby1hcHAtZGF0YVwiPjxpbWcgc3JjPVwiJHtub0RhdGF9XCIgLz48cCBjbGFzcz1cInRleHRcIj7nrqHnkIblkZjov5jmsqHmnInorr7nva7luLjnlKjlupTnlKjvvIzor7fnqI3nrYl+PC9wPjwvZGl2PmBcclxuICB9XHJcbiAgYWRkQXBwRXZlbnQoKSAvLyDlupTnlKjorr/pl67mnYPpmZBcclxufVxyXG5cclxuLyoqXHJcbiAqIOa4suafk+eUqOaIt+S/oeaBr1xyXG4gKi9cclxuY29uc3QgcmVuZGVyVXNlckluZm8gPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3JlbmRlclVzZXJJbmZvJywgYmFzZS51c2VyKVxyXG4gIGlmIChiYXNlLnVzZXIudXNlcklkKSB7XHJcbiAgICAkKCcjZWJnbmF2LW5hdlVzZXJpbmZvJykuaW5uZXJIVE1MID0gdXRpbHMudGVtcGxhdGVSZW5kZXIoXHJcbiAgICAgIHRwbC5uYXZVc2VyVGVtcCxcclxuICAgICAgYmFzZS51c2VyXHJcbiAgICApXHJcbiAgICAkKCcjZWJnbmF2LWRldGFpbFVzZXJpbmZvJykuaW5uZXJIVE1MID0gdXRpbHMudGVtcGxhdGVSZW5kZXIoXHJcbiAgICAgIHRwbC5kZXRhaWxVc2VyVGVtcCxcclxuICAgICAgYmFzZS51c2VyXHJcbiAgICApXHJcbiAgICB1dGlscy5oYW5kbGVDbGFzcygkKCcjZWJnbmF2LWJveCcpLCAnZGVsZXRlJywgJ3JlbmRlcicpXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICog5riy5p+T55m75b2V5oyJ6ZKuXHJcbiAqL1xyXG5jb25zdCByZW5kZXJMb2dpbkJ0biA9ICgpID0+IHtcclxuICAkKCcuZWJnbmF2LW9wZXJhdGlvbi1sb2dpbmJ0bicpWzBdLmlubmVySFRNTCA9IHV0aWxzLnRlbXBsYXRlUmVuZGVyKFxyXG4gICAgdHBsLmxvZ2luQnRuVGVtcCxcclxuICAgIG51bGxcclxuICApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmuLLmn5Porr7nva7nmq7ogqRcclxuICovXHJcbmNvbnN0IHJlbmRlclRoZW1lID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdyZW5kZXJUaGVtZScsIGNvbmZpZy50aGVtZSwgYmFzZS50aGVtZSlcclxuICAvLyDnlKjmiLfmsqHmnInorr7nva7vvIzmjqXlj6PlpITkuZ/msqHmnInojrflj5bliLDvvIzliJnkvb/nlKjpu5jorqTkuLvpophcclxuICBsZXQgX3RoZW1lID0gYmFzZS50aGVtZSB8fCAnZGVmYXVsdCdcclxuICBzd2l0Y2ggKF90aGVtZSkge1xyXG4gICAgY2FzZSAndGhlbWVibHVlJzpcclxuICAgICAgdXRpbHMuaGFuZGxlQ2xhc3MoJCgnI2ViZ25hdi1ib3gnKSwgJ2FkZCcsICd0aGVtZWJsdWUnKVxyXG4gICAgICB1dGlscy5oYW5kbGVDbGFzcygkKCcjZWJnbmF2LWJveCcpLCAnZGVsZXRlJywgJ3RoZW1lZGFyaycpXHJcbiAgICAgIHV0aWxzLmhhbmRsZUNsYXNzKCQoJyNlYmduYXYtYm94JyksICdkZWxldGUnLCAndGhlbWVncmVlbicpXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICd0aGVtZWRhcmsnOlxyXG4gICAgICB1dGlscy5oYW5kbGVDbGFzcygkKCcjZWJnbmF2LWJveCcpLCAnYWRkJywgJ3RoZW1lZGFyaycpXHJcbiAgICAgIHV0aWxzLmhhbmRsZUNsYXNzKCQoJyNlYmduYXYtYm94JyksICdkZWxldGUnLCAndGhlbWVncmVlbicpXHJcbiAgICAgIHV0aWxzLmhhbmRsZUNsYXNzKCQoJyNlYmduYXYtYm94JyksICdkZWxldGUnLCAndGhlbWVibHVlJylcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ3RoZW1lZ3JlZW4nOlxyXG4gICAgICB1dGlscy5oYW5kbGVDbGFzcygkKCcjZWJnbmF2LWJveCcpLCAnYWRkJywgJ3RoZW1lZ3JlZW4nKVxyXG4gICAgICB1dGlscy5oYW5kbGVDbGFzcygkKCcjZWJnbmF2LWJveCcpLCAnZGVsZXRlJywgJ3RoZW1lYmx1ZScpXHJcbiAgICAgIHV0aWxzLmhhbmRsZUNsYXNzKCQoJyNlYmduYXYtYm94JyksICdkZWxldGUnLCAndGhlbWVkYXJrJylcclxuICAgICAgYnJlYWtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHV0aWxzLmhhbmRsZUNsYXNzKCQoJyNlYmduYXYtYm94JyksICdkZWxldGUnLCAndGhlbWVncmVlbicpXHJcbiAgICAgIHV0aWxzLmhhbmRsZUNsYXNzKCQoJyNlYmduYXYtYm94JyksICdkZWxldGUnLCAndGhlbWVibHVlJylcclxuICAgICAgdXRpbHMuaGFuZGxlQ2xhc3MoJCgnI2ViZ25hdi1ib3gnKSwgJ2RlbGV0ZScsICd0aGVtZWRhcmsnKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gdHlwZSDoj5zljZXnmoTnsbvlnotcclxuICogQHBhcmFtIHsqfSBpbmRleCAg6I+c5Y2V54K55Ye755qEaW5kZXjvvIzlpoLmnpzmmK/mnInkuoznuqfoj5zljZXmiJHku6zpnIDopoHlgZrljLrliIYg77yM5q2k5pe25Lyg6YCS6L+H5p2l55qEaW5kZXjmmK/kuIDnuqflkozkuoznuqfnmoTnu4TlkIgnMnwxJ++8iDIg5ZKMIDPnsbvlnovpg73mnInov5nnp43mg4XlhrXvvIlcclxuICogQHBhcmFtIHsqfSB1cmwg6Lez6L2s55qEdXJs77yM5aaC5p6c5rKh5pyJ77yM5YGaZnVuY3Rpb27kuovku7bnmoTlj5HpgIHliLDlupTnlKhcclxuICogQHBhcmFtIHsqfSBmdW5jTmFtZSDpnIDopoHlj5HpgIHnu5nlupTnlKjlpITnkIbnmoTkuovku7bvvIznlLHlkITkuKrlupTnlKjoh6rooYzlpITnkIZcclxuICogQHBhcmFtIHsqfSBhcmdzICDlj5HpgIHlupTnlKjlpITnkIbkuovku7bluKbnmoTlj4LmlbAgYT0xJmI9MiDku6Xov5nmoLfnmoTlvaLlvI/lj5HpgIHlh7rljrtcclxuICovXHJcbmZ1bmN0aW9uIGNvbW1vbkNsaWNrKHR5cGUsIGluZGV4LCB1cmwsIGZ1bmNOYW1lLCBhcmdzKSB7XHJcbiAgbGV0IE1FTlVfQVBQTElTVCA9IDEsIC8vIOW6lOeUqOiPnOWNlVxyXG4gICAgTUVOVV9QUklNQVJZTElTVCA9IDIsIC8vIOS4gOe6p+iPnOWNlVxyXG4gICAgTUVOVV9TRUNPTkRMSVNUID0gMywgLy8g5LqM57qn6I+c5Y2VXHJcbiAgICBNRU5VX1NFVFRJTkdMSVNUID0gNCwgLy8g6K6+572u6I+c5Y2VXHJcbiAgICBNRU5VX1JPTEVMSVNUID0gNSAvLyDorr7nva7op5LoibLoj5zljZVcclxuXHJcbiAgY29uc29sZS5sb2coJ3R5cGU9JywgdHlwZSwgJ2luZGV4PScsIGluZGV4KVxyXG4gIC8vIHdpbmRvd1sndGVzdGFwcCddW2Z1bmNOYW1lXS5hcHBseShudWxsLGFyZ3VtZW50cyk7XHJcbiAgY29uc3QgeyBjb25maWcgfSA9IHdpbmRvdy5lYmduYXZpZ2F0aW9uXHJcbiAgLy8gd2luZG93LiRldmVudEJ1cy4kZW1pdCgnbXlldmVudCcsJ2hlbGxvIHdvcmxkJyk7XHJcbiAgLy8gMS7lsIZhcHBMaXN05Lit55qEY3VycmVudOeahGZsYWfliIfmjaLkuLpjbGlja0l0ZW3vvIznhLblkI7muLLmn5Ms5aaC5p6c54K55Ye755qE5bCx5piv5b2T5YmN77yM5YiZ5LuA5LmI6YO95LiN5YGaXHJcbiAgbGV0IGFwcExpc3QgPSBbXVxyXG4gIGxldCByZWZyZXNoRmxhZyA9ICcnXHJcbiAgbGV0IG90aGVyUGFyYW0gPSAnJ1xyXG5cclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgTUVOVV9BUFBMSVNUOlxyXG4gICAgICBhcHBMaXN0ID0gY29uZmlnLnByaW1hcnlOYXYuYXBwTGlzdFxyXG4gICAgICByZWZyZXNoRmxhZyA9ICdyZW5kZXJBcHBMaXN0J1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSBNRU5VX1BSSU1BUllMSVNUOiAvLyDkuIDnuqflupTnlKjoj5zljZVcclxuICAgICAgaWYgKGNvbmZpZy50eXBlID09PSAnYXBwbGljYXRpb24nKSB7XHJcbiAgICAgICAgYXBwTGlzdCA9IGNvbmZpZy5wcmltYXJ5TmF2LmFwcE5hdkxpc3RcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhcHBMaXN0ID0gY29uZmlnLnByaW1hcnlOYXYucGxhdGZvcm1OYXZMaXN0XHJcbiAgICAgIH1cclxuICAgICAgcmVmcmVzaEZsYWcgPSAncmVuZGVyUHJpbWFyeU5hdkxpc3ROZXcnXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlIE1FTlVfU0VDT05ETElTVDpcclxuICAgICAgYXBwTGlzdCA9IGNvbmZpZy5zZWNvbmRhcnlOYXYuc2Vjb25kYXJ5TmF2TGlzdFxyXG4gICAgICByZWZyZXNoRmxhZyA9ICdyZW5kZXJTZWNvbmRhcnlOYXZMaXN0TmV3J1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSBNRU5VX1NFVFRJTkdMSVNUOiAvLyDorr7nva7liIfmjaJcclxuICAgICAgYXBwTGlzdCA9IGNvbmZpZy5vcGVyYXRpb24uc2V0dGluZ0xpc3RcclxuICAgICAgcmVmcmVzaEZsYWcgPSAncmVuZGVyU2V0dGluZ0xpc3QnXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlIE1FTlVfUk9MRUxJU1Q6XHJcbiAgICAgIGFwcExpc3QgPSBjb25maWcub3BlcmF0aW9uLnJvbGVMaXN0XHJcbiAgICAgIHJlZnJlc2hGbGFnID0gJ3JlbmRlclJvbGVzTGlzdCdcclxuICAgICAgYnJlYWtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrXHJcbiAgfVxyXG4gIGxldCBwYXJlbnRJbmRleCwgY2hpbGRyZW5JbmRleFxyXG5cclxuICBpZiAodHlwZW9mIGluZGV4ID09PSAnc3RyaW5nJyAmJiBpbmRleC5pbmRleE9mKCd8JykgIT09IC0xKSB7XHJcbiAgICBsZXQgaW5kZXhCdWYgPSBpbmRleC5zcGxpdCgnfCcpXHJcblxyXG4gICAgcGFyZW50SW5kZXggPSBwYXJzZUludChpbmRleEJ1ZlswXSwgMCkgLy8g5aSn55qE6I+c5Y2V6YCJ5LitXHJcbiAgICBjaGlsZHJlbkluZGV4ID0gcGFyc2VJbnQoaW5kZXhCdWZbMV0sIDApIC8vIOWwj+eahOiPnOWNlemAieS4rVxyXG4gIH0gZWxzZSB7XHJcbiAgICBwYXJlbnRJbmRleCA9IGluZGV4XHJcbiAgICBjaGlsZHJlbkluZGV4ID0gLTEgLy8g6KGo56S65rKh5pyJ5a2Q6I+c5Y2VXHJcbiAgICBpZiAodHlwZSA9PT0gTUVOVV9ST0xFTElTVCkge1xyXG4gICAgICBvdGhlclBhcmFtID0gYXBwTGlzdFtpbmRleF0ubmFtZSAvLyDojrflj5bmiJHku6zngrnlh7vkuYvlkI7nmoTlkI3np7DvvIzmiJHku6zpnIDopoHmm7TmlrDnlYzpnaJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGlmKGFwcExpc3QgJiYgYXBwTGlzdC5sZW5ndGg+MCAmJiApIHtcclxuICBpZiAoYXBwTGlzdCAmJiBhcHBMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgIGxldCB0b3RhbExpc3QgPSBhcHBMaXN0W3BhcmVudEluZGV4XVxyXG4gICAgYXBwTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGl0ZW0uY3VycmVudCA9IGZhbHNlXHJcbiAgICAgIGlmIChjaGlsZHJlbkluZGV4ICE9PSAtMSAmJiBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGl0ZW0uY2hpbGRyZW4uZm9yRWFjaCgoY0l0ZW0pID0+IHtcclxuICAgICAgICAgIGNJdGVtLmN1cnJlbnQgPSBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaXRlbS5jaGlsZHJlbltjaGlsZHJlbkluZGV4XS5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgdG90YWxMaXN0LmN1cnJlbnQgPSB0cnVlXHJcbiAgICBjb25zb2xlLmxvZygnYXBwTGlzdCA9ICcsIEpTT04uc3RyaW5naWZ5KGFwcExpc3QpKVxyXG4gICAgaWYgKHJlZnJlc2hGbGFnKSB7XHJcbiAgICAgIC8vIOWvueWkluaatOmcsuS6huS4gOS4quWIt+aWsGFwcExpc3TnmoTmjqXlj6Ms56ys5LiA5Liq5Y+C5pWw5piv6ZyA6KaB6LCD55So55qE5riy5p+T5Ye95pWw77yM56ys5LqM5Liq5Y+C5pWw5piv5piv5ZCm5by65Yi25Yig6Zmk5Y6f5p2l55qEZG9tXHJcbiAgICAgIHdpbmRvdy5lYmduYXZpZ2F0aW9uLmhhbmRPdXRGdW5jKHJlZnJlc2hGbGFnLCB0cnVlLCBvdGhlclBhcmFtKVxyXG4gICAgfVxyXG4gICAgLy8g5Y+q5pyJ5pyJ55qE5pe25YCZ5oiR5Lus5omN5aSE55CGXHJcbiAgICBpZiAodXJsICYmIHVybCAhPT0gJyMnKSB7XHJcbiAgICAgIC8vIOWBmui3s+i9rOWKqOS9nO+8jFRPRE8gIOi/memHjOa1i+ivleS6hlxyXG4gICAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKVxyXG4gICAgfSBlbHNlIGlmIChmdW5jTmFtZSkge1xyXG4gICAgICAvLyDlpoLmnpzmmK9qc29ubmFtZeaIkeS7rOi9rOaNouS4unN0cmluZ++8jOWmguaenOS4jeaYr++8jOaIkeS7rOebtOaOpeS8oOmAklxyXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3MpID09PSAnW29iamVjdCBPYmplY3RdJykge1xyXG4gICAgICAgIGFyZ3MgPSBKU09OLnN0cmluZ2lmeShhcmdzKVxyXG4gICAgICB9XHJcbiAgICAgIHdpbmRvdy5lYmduYXZpZ2F0aW9uLmVtaXQoZnVuY05hbWUsIGFyZ3MpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICog5riy5p+T5qGG5p625Yiw6aG16Z2i5LitXHJcbiAqL1xyXG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3JlbmRlciBjb25maWcnLCBjb25maWcpXHJcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAnYWZ0ZXJiZWdpbicsXHJcbiAgICB1dGlscy50ZW1wbGF0ZVJlbmRlcih0cGwuYmFzZVRlbXAsIGNvbmZpZylcclxuICApXHJcbiAgaWYgKGNvbmZpZy50eXBlID09PSAncGxhdGZvcm0nKSB7XHJcbiAgICAkKCcuZWJnbmF2LXNlY29uZGFyeScpWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICQoJyNlYmduYXYtaXNQbGF0Zm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnI2ViZ25hdi1pc1BsYXRmb3JtJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIGlmIChcclxuICAgICAgY29uZmlnLnNlY29uZGFyeU5hdiAmJlxyXG4gICAgICAoY29uZmlnLnNlY29uZGFyeU5hdi5zZWNvbmRhcnlOYW1lIHx8XHJcbiAgICAgICAgKGNvbmZpZy5zZWNvbmRhcnlOYXYuc2Vjb25kYXJ5TmF2TGlzdCAmJlxyXG4gICAgICAgICAgY29uZmlnLnNlY29uZGFyeU5hdi5zZWNvbmRhcnlOYXZMaXN0Lmxlbmd0aCA+IDApKVxyXG4gICAgKSB7XHJcbiAgICAgICQoJy5lYmduYXYtc2Vjb25kYXJ5JylbMF0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5lYmduYXYtc2Vjb25kYXJ5JylbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXRpbHMubG9hZFN0eWxlKFxyXG4gICAgLy8g5Z+f5ZCN6ZyA6KaB6YWN572u5oiQ5Yqo5oCB55qEXHJcbiAgICBgJHtiYXNlLmhvc3R1cmx9L2ViZ25hdmlnYXRpb24vZWJnbmF2aWdhdGlvbi5taW4uY3NzYCxcclxuICAgIC8vICcuLi9saWIvZWJnbmF2aWdhdGlvbi5taW4uY3NzJyxcclxuICAgICgpID0+IHtcclxuICAgICAgdXRpbHMubG9hZFN0eWxlKCcvL2F0LmFsaWNkbi5jb20vdC9mb250XzE5NTU3MTNfNW1tZ2JybHlobDkuY3NzJylcclxuICAgICAgLy8g5riy5p+T5bqU55So5Ymv5YiX6KGoICjlupTnlKjlr7zoiKopXHJcbiAgICAgIHJlbmRlckFwcExpc3QoKVxyXG4gICAgICAvLyDmuLLmn5PlupTnlKjkuoznuqflr7zoiKrlkI3np7BcclxuICAgICAgcmVuZGVyU2Vjb25kYXJ5TmFtZSgpXHJcbiAgICAgIC8vIOm9v+i9ruWbvuagh+S4i+aLieiPnOWNlSjlupTnlKjlr7zoiKopXHJcbiAgICAgIHJlbmRlclNldHRpbmdMaXN0KClcclxuICAgICAgLy8gcmVuZGVyU2VhcmNoKCcuZWJnbmF2LW9wZXJhdGlvbicpXHJcbiAgICAgIGlmICghYmFzZS5sb2dpbnN0YXR1cykge1xyXG4gICAgICAgIC8vIOa4suafk+eZu+W9leaMiemSrlxyXG4gICAgICAgIHJlbmRlckxvZ2luQnRuKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyDnmbvlvZXkuYvlkI7miY3muLLmn5Pop5LoibJcclxuICAgICAgICByZW5kZXJSb2xlc0xpc3QoKSAvLyDmmK/lkKblj5fliLDlhbbku5bmnaHku7bmjqfliLbvvIzov5nkuKrmmoLml7bov5jkuI3nn6XpgZNUT0RPXHJcbiAgICAgIH1cclxuICAgICAgdXRpbHMubG9hZFNjcmlwdFN0cmluZyhjb21tb25DbGljay50b1N0cmluZygpKVxyXG4gICAgfVxyXG4gIClcclxufVxyXG5cclxuLyoqXHJcbiAqIOmYsuaKllxyXG4gKiBAcGFyYW0geyp9IG9wZXJhdGUg5pON5L2cXHJcbiAqIEBwYXJhbSB7Kn0gZGVsYXkg5bu25pe2XHJcbiAqL1xyXG5jb25zdCBkZWJvdW5jZSA9IChvcGVyYXRlLCBkZWxheSkgPT4ge1xyXG4gIGxldCB0aW1lID0gbnVsbFxyXG4gIGxldCB0aW1lciA9IG51bGxcclxuICBsZXQgbmV3VGltZSA9IG51bGxcclxuXHJcbiAgZnVuY3Rpb24gdGFzaygpIHtcclxuICAgIG5ld1RpbWUgPSArbmV3IERhdGUoKVxyXG4gICAgaWYgKG5ld1RpbWUgLSB0aW1lIDwgZGVsYXkpIHtcclxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KHRhc2ssIGRlbGF5KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3BlcmF0ZSgpXHJcbiAgICAgIHRpbWVyID0gbnVsbFxyXG4gICAgfVxyXG4gICAgdGltZSA9IG5ld1RpbWVcclxuICB9XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIOabtOaWsOaXtumXtOaIs1xyXG4gICAgdGltZSA9ICtuZXcgRGF0ZSgpXHJcbiAgICBpZiAoIXRpbWVyKSB7XHJcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCh0YXNrLCBkZWxheSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHNldFRoZW1lTG9nbyA9IChyZXMsIGlkKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IChyZXMubmF2aWdhdGlvbkNvbmZpZyAmJiByZXMubmF2aWdhdGlvbkNvbmZpZy50aGVtZXMpIHx8IFtdXHJcbiAgaWYgKGlkICYmIGRhdGEubGVuZ3RoKSB7XHJcbiAgICBiYXNlLnRoZW1lRGVmYXVsdCA9IGlkXHJcbiAgICBzZXRUaGVtZUNvbmZpZyhyZXMsIGRhdGEpXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICog6K6+572u6buY6K6k55qu6IKk5ZCN56ewXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUg5YC8XHJcbiAqL1xyXG5jb25zdCBzZXRUaGVtZU5hbWUgPSAodmFsdWUpID0+IHtcclxuICBsZXQgX3RoZW1lID0gJ2RlZmF1bHQnXHJcbiAgLy8g55So5oi36K6+572u55qE5Li76aKY57G75Z6LXHJcbiAgaWYgKGNvbmZpZy50aGVtZSkge1xyXG4gICAgX3RoZW1lID0gY29uZmlnLnRoZW1lXHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIOWmguaenOeUqOaIt+ayoeacieiuvue9ruS4u+mimO+8jOWImeS7juaOpeWPo+iOt+WPluS4u+mimOexu+Wei1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlICcxJzpcclxuICAgICAgICBfdGhlbWUgPSAndGhlbWVkYXJrJ1xyXG4gICAgICAgIGJhc2UudGhlbWVEZWZhdWx0ID0gdmFsdWVcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICcyJzpcclxuICAgICAgICBfdGhlbWUgPSAnZGVmYXVsdCdcclxuICAgICAgICBiYXNlLnRoZW1lRGVmYXVsdCA9IHZhbHVlXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAnMyc6XHJcbiAgICAgICAgX3RoZW1lID0gJ3RoZW1lYmx1ZSdcclxuICAgICAgICBiYXNlLnRoZW1lRGVmYXVsdCA9IHZhbHVlXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAnNCc6XHJcbiAgICAgICAgX3RoZW1lID0gJ3RoZW1lZ3JlZW4nXHJcbiAgICAgICAgYmFzZS50aGVtZURlZmF1bHQgPSB2YWx1ZVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgX3RoZW1lID0gJ2RlZmF1bHQnXHJcbiAgICB9XHJcbiAgfVxyXG4gIGJhc2UudGhlbWUgPSBfdGhlbWVcclxuICByZW5kZXJUaGVtZSgpIC8vIOa4suafk+S4u+mimFxyXG59XHJcblxyXG4vKipcclxuICog6K6+572u6Ieq5a6a5LmJ5a+86IiqXHJcbiAqIEBwYXJhbSB7Kn0gbGlzdCDlr7zoiKrliJfooahcclxuICovXHJcbmNvbnN0IHNldFBsYXRmb3JtTmF2TGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3NldFBsYXRmb3JtTmF2TGlzdCcsIGxpc3QpXHJcbiAgaWYgKGxpc3QgJiYgbGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICBsZXQgX2xpc3QgPSBsaXN0XHJcbiAgICBsZXQgbmV3TmF2TGlzdCA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9saXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBpdGVtID0ge31cclxuICAgICAgaXRlbS50aXRsZSA9IF9saXN0W2ldLm1vZHVsZU5hbWVcclxuICAgICAgaXRlbS51cmwgPSBfbGlzdFtpXS5tb2R1bGVVcmxcclxuICAgICAgaXRlbS5oYXNDaGlsZHJlbk1vZHVsZXMgPSBfbGlzdFtpXS5oYXNDaGlsZHJlbk1vZHVsZXNcclxuICAgICAgaWYgKF9saXN0W2ldLmNoaWxkcmVuTW9kdWxlcyAmJiBfbGlzdFtpXS5jaGlsZHJlbk1vZHVsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXVxyXG4gICAgICAgIGxldCBfY2hpbGRyZW5zID0gX2xpc3RbaV0uY2hpbGRyZW5Nb2R1bGVzXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBfY2hpbGRyZW5zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBpdGVtLmNoaWxkcmVuW2pdID0ge31cclxuICAgICAgICAgIGl0ZW0uY2hpbGRyZW5bal0udGl0bGUgPSBfY2hpbGRyZW5zW2pdLm1vZHVsZU5hbWVcclxuICAgICAgICAgIGl0ZW0uY2hpbGRyZW5bal0udXJsID0gX2NoaWxkcmVuc1tqXS5tb2R1bGVVcmxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbmV3TmF2TGlzdC5wdXNoKGl0ZW0pXHJcbiAgICB9XHJcbiAgICBiYXNlLnBsYXRmb3JtTmF2TGlzdCA9IG5ld05hdkxpc3RcclxuICB9XHJcbiAgcmVuZGVyUHJpbWFyeU5hdkxpc3QoKVxyXG59XHJcbi8qKlxyXG4gKiDmnKrnmbvlvZXmmK/lkKbmmL7npLrlr7zoiKpcclxuICogQHBhcmFtIHsqfSBmbGFnIDEgMFxyXG4gKi9cclxuLy8gY29uc3Qgc2V0Tm9Mb2dpblNob3cgPSAoZmxhZykgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKCdzZXROb0xvZ2luU2hvdycsIGZsYWcpXHJcbi8vICAgaWYgKGZsYWcgPT09ICcxJykge1xyXG4vLyAgICAgYmFzZS5ub0xvZ2luU2hvdyA9IDFcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgYmFzZS5ub0xvZ2luU2hvdyA9IDBcclxuLy8gICB9XHJcbi8vIH1cclxuLyoqXHJcbiAqIOiuvue9ruearuiCpOaVsOaNrlxyXG4gKiBAcGFyYW0geyp9IHRoZW1lbGlzdCDnmq7ogqTliJfooahcclxuICovXHJcbmNvbnN0IHNldFRoZW1lQ29uZmlnID0gKHJlcywgdGhlbWVsaXN0KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3NldFRoZW1lQ29uZmlnJywgdGhlbWVsaXN0KVxyXG4gIGxldCBsb2dvTGluayA9ICcnXHJcbiAgcmVzLm1lbnVzICYmIHJlcy5tZW51cy5zb21lKGl0ZW0gPT4ge1xyXG4gICAgaWYgKGl0ZW0ubWVudUtleSA9PT0gJ2luZGV4Jykge1xyXG4gICAgICBsb2dvTGluayA9IGl0ZW0udXJsXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgfSlcclxuICBpZiAodGhlbWVsaXN0ICYmIHRoZW1lbGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICBsZXQgX2xpc3QgPSB0aGVtZWxpc3RcclxuICAgIGxldCBuZXdMaXN0ID0gW11cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9saXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBpdGVtID0ge31cclxuXHJcbiAgICAgIGl0ZW0uaWQgPSBfbGlzdFtpXS5pZFxyXG4gICAgICBpdGVtLm5hbWUgPSBfbGlzdFtpXS5uYW1lXHJcbiAgICAgIGl0ZW0ucGxhdGZvcm1Mb2dvID0gX2xpc3RbaV0ucGxhdGZvcm1Mb2dvVXJsXHJcbiAgICAgIGl0ZW0ucGxhdGZvcm1JY29uID0gX2xpc3RbaV0uYXBwTG9nb1VybFxyXG4gICAgICBpdGVtLmxvZ29MaW5rID0gYCR7YmFzZS5ob3N0dXJsfSR7bG9nb0xpbmt9YFxyXG4gICAgICBuZXdMaXN0LnB1c2goaXRlbSlcclxuICAgIH1cclxuICAgIGJhc2UudGhlbWVMaXN0ID0gbmV3TGlzdFxyXG4gIH1cclxuICByZW5kZXJMb2dvKClcclxufVxyXG4vKipcclxuICog6K6+572u6buY6K6k5bqU55SoXHJcbiAqIEBwYXJhbSB7Kn0gYXBwbGljYXRpb25zbGlzdCDlupTnlKjliJfooahcclxuICovXHJcbmNvbnN0IHNldEFwcGxpY2F0aW9uc0xpc3QgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdzZXRBcHBsaWNhdGlvbnNMaXN0JywgZGF0YS5jbG91ZE5hdkFwcHMpXHJcbiAgaWYgKGRhdGEuY2xvdWROYXZBcHBzICYmIGRhdGEuY2xvdWROYXZBcHBzLmxlbmd0aCA+IDApIHtcclxuICAgIGxldCBfYXJyYXkgPSBbXVxyXG4gICAgZGF0YS5jbG91ZE5hdkFwcHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBsZXQgX2l0ZW0gPSB7fVxyXG5cclxuICAgICAgX2l0ZW0uYXBwTmFtZSA9IGl0ZW0uc2hvcnRfbmFtZVxyXG4gICAgICBfaXRlbS51cmwgPSBpdGVtLnVybFxyXG4gICAgICBfaXRlbS5pZCA9IGl0ZW0uaWRcclxuICAgICAgX2l0ZW0uc3JjID0gaXRlbS5pY29uXHJcblxyXG4gICAgICBfYXJyYXkucHVzaChfaXRlbSlcclxuICAgIH0pXHJcblxyXG4gICAgYmFzZS5hcHBsaWNhdGlvbnNMaXN0ID0gX2FycmF5XHJcbiAgfVxyXG4gIHJlbmRlckFwcGxpY2F0aW9ucygpXHJcbn1cclxuLyoqXHJcbiAqIOiuvue9rueUqOaIt+S/oeaBr1xyXG4gKiBAcGFyYW0geyp9IHVzZXJpbmZvIOeUqOaIt+S/oeaBr1xyXG4gKi9cclxuY29uc3Qgc2V0VXNlckluZm8gPSAodXNlcmluZm8pID0+IHtcclxuICBjb25zb2xlLmxvZygnc2V0VXNlckluZm8nLCB1c2VyaW5mbylcclxuICBpZiAodXNlcmluZm8pIHtcclxuICAgIGJhc2UudXNlci51c2VyTmFtZSA9IHVzZXJpbmZvLm5hbWVcclxuICAgIGJhc2UudXNlci51c2VyUGhvdG8gPSB1c2VyaW5mby51c2VyUGhvdG8gfHwgYmFzZS5kZWZhdWx0QXZhdGFyIC8vIOeUqOaIt+acquiuvue9ruWktOWDj+WwseeUqOm7mOiupOWktOWDj1xyXG4gICAgYmFzZS51c2VyLmxvZ2luTmFtZSA9IHVzZXJpbmZvLnVzZXJuYW1lXHJcbiAgICBiYXNlLnVzZXIudXNlcklkID0gdXNlcmluZm8uaWRcclxuICAgIHJlbmRlclVzZXJJbmZvKClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlckFwcEJ0biA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IGNvdW50ID0gMFxyXG4gIGxldCBwbGF0Zm9ybSA9ICcnXHJcbiAgZGF0YSAmJiBkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBpZiAoaXRlbS5tZW51S2V5ID09PSAnaW5kZXgnIHx8IGl0ZW0ubWVudUtleSA9PT0gJ3dvcmtiZW5jaCcpIHtcclxuICAgICAgY291bnQrK1xyXG4gICAgICBwbGF0Zm9ybSArPSBgPGxpPjxhIGhyZWY9XCIke2Jhc2UuaG9zdHVybH0ke2l0ZW0udXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7aXRlbS5uYW1lfTwvYT48L2xpPmBcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IGVsID0gJCgnI2ViZ25hdi1pc1BsYXRmb3JtJylcclxuICBpZiAoZWwgJiYgcGxhdGZvcm0pIGVsLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGA8dWwgY2xhc3M9XCJjbGVhcmZpeCAke2NvdW50ID4gMSA/ICd0d28nIDogJ29uZSd9XCI+JHtwbGF0Zm9ybX08L3VsPmApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDor7fmsYLmjqXlj6Pojrflj5blhbbku5bphY3nva5cclxuICovXHJcbmNvbnN0IGFqYXhHZXRPdGhlckNvbmZpZyA9ICgpID0+IHtcclxuICAvLyDliJ3lp4vljJbmuLLmn5NcclxuICAvLyByZW5kZXIoKVxyXG4gIC8vIOW6lOeUqOWIl+ihqFxyXG4gIGFqYXgoe1xyXG4gICAgdHlwZTogJ0dFVCcsXHJcbiAgICBqc29ucDogJ2pzb25wQ2FsbGJhY2syJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgcGxhdGZvcm1TZXQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB1cmw6IGJhc2UuaG9zdHVybCArICcvZGVza3RvcC9iYWNrZW5kL2FwaS9wb3J0YWwvbmF2YmFyQ29uZmlnJyxcclxuICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgcmVuZGVyU2Vjb25kYXJ5TmF2TGlzdCgpXHJcbiAgICAgIGlmIChyZXMgJiYgcmVzLm5hdmlnYXRpb25Db25maWcgJiYgcmVzLm5hdmlnYXRpb25Db25maWcucG9zaXRpb25UaGVtZSkge1xyXG4gICAgICAgIC8vIOiuvue9ruS4u+mimFxyXG4gICAgICAgIHNldFRoZW1lTmFtZShyZXMubmF2aWdhdGlvbkNvbmZpZy5wb3NpdGlvblRoZW1lKVxyXG4gICAgICAgIC8vIOagueaNruS4u+mimOiOt+WPluWvueW6lOeahExvZ29cclxuICAgICAgICBzZXRUaGVtZUxvZ28ocmVzLCByZXMubmF2aWdhdGlvbkNvbmZpZy5wb3NpdGlvblRoZW1lKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbmZpZy5uYXZiYXJDb25maWcgPSByZXNcclxuXHJcbiAgICAgIC8vIOi/veWKoG1lbnVz6I+c5Y2VXHJcbiAgICAgIGlmIChyZXMubWVudXMgJiYgcmVzLm1lbnVzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbmZpZy5wcmltYXJ5TmF2LnBsYXRmb3JtTmF2TGlzdC5wdXNoKC4uLnJlcy5tZW51cylcclxuICAgICAgfVxyXG4gICAgICAvLyDov73liqDluKbkuoznuqfoj5zljZXnmoTmlbDmja4o5bmz5Y+w6YWN572u55qE5a+86IiqKVxyXG4gICAgICBsZXQgcG0gPSByZXMgJiYgcmVzLm5hdmlnYXRpb25Db25maWcgJiYgcmVzLm5hdmlnYXRpb25Db25maWcucGxhdGZvcm1Nb3VkbGVzXHJcbiAgICAgIHNldFBsYXRmb3JtTmF2TGlzdChwbSB8fCBbXSlcclxuXHJcbiAgICAgIC8vIOS7peS4i+aooeWdl+WPquacieeZu+W9leWQjuaJjemcgOimgeWKoOi9vSwg5bm25LiU6ZyA6KaB5L6d6LWW5b2T5YmN5o6l5Y+j6L+U5Zue55qE5pWw5o2uXHJcbiAgICAgIGlmIChiYXNlLmxvZ2luc3RhdHVzKSB7XHJcbiAgICAgICAgLy8g5Yqg6L29ZmVlZGJhY2vmqKHlnZdcclxuICAgICAgICBzZXRMb2FkRmVlZGJhY2socmVzLCBiYXNlLmhvc3R1cmwpXHJcbiAgICAgICAgLy8g6ZqQ56eB5Y2P6K6uXHJcbiAgICAgICAgcHJpdmFjeShyZXMsIGJhc2UuaG9zdHVybClcclxuXHJcbiAgICAgICAgLy8g6K6+572u5bqU55SoIOS4quS6uumXqOaIt+OAgeW5s+WPsOmmlumhteaMiemSrui3s+i9rFxyXG4gICAgICAgIHJlcy5tZW51cyAmJiByZW5kZXJBcHBCdG4ocmVzLm1lbnVzKVxyXG5cclxuICAgICAgICAvLyDnlKjmiLfkv6Hmga/orr7nva5cclxuICAgICAgICBzZXRVc2VySW5mbyhyZXMudXNlcilcclxuXHJcbiAgICAgICAgLy8g55So5oi35Lit5b+D5raI5oGv5ZKM6YCA5Ye654K55Ye75LqL5Lu25pa55rOVXHJcbiAgICAgICAgcmVuZGVyTXNnQW5kTG9nb3V0QnRuKHJlcy5zZXR0aW5ncylcclxuXHJcbiAgICAgICAgLy8g5riy5p+T55So5oi36K6+572u5L+h5oGv5YiX6KGoXHJcbiAgICAgICAgcmVuZGVyVXNlclNldHRpbmcocmVzLCBiYXNlKVxyXG5cclxuICAgICAgICAvLyDmlrDmiYvmjIflvJVcclxuICAgICAgICBndWlkYW5jZUVudHJ5KHJlcy51c2VyLCBiYXNlLmhvc3R1cmwpXHJcblxyXG4gICAgICAgIC8vIOiOt+WPluaOqOiNkOW6lOeUqFxyXG4gICAgICAgIGFqYXhHZXREZWZhdWx0QXBwKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiAoKSA9PiB7XHJcbiAgICAgIC8vIOWmguaenOi1sOWIsOi/memHjO+8jOivtOaYjuS4jeaUr+aMgeaWsOWvvOiIqu+8jOWKoOi9veiAgeWvvOiIqlxyXG4gICAgICB1dGlscy5yZW1vdmVFbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYmduYXYtYm94JykpXHJcbiAgICAgIGxvYWRPbGROYXYoYmFzZS5ob3N0dXJsKVxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBhamF4R2V0RGVmYXVsdEFwcCA9ICgpID0+IHtcclxuICBhamF4KHtcclxuICAgIHR5cGU6ICdHRVQnLFxyXG4gICAganNvbnA6ICdqc29ucENhbGxiYWNrOCcsXHJcbiAgICB1cmw6IGAke2Jhc2UuaG9zdHVybH0vZGVza3RvcC9iYWNrZW5kL2FwaS9wb3J0YWwvbmF2QXBwVm9zYCxcclxuICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgc2V0QXBwbGljYXRpb25zTGlzdChyZXMpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOivt+axguaOpeWPo+iOt+WPlumFjee9rlxyXG4gKi9cclxuY29uc3QgYWpheEdldENvbmZpZyA9ICgpID0+IHtcclxuICAvLyDojrflj5blr7zoiKrkuLvopoHkv6Hmga9cclxuICBhamF4R2V0T3RoZXJDb25maWcoKVxyXG4gIHJlbmRlcigpIC8vIOWIneWni+WMlua4suafk1xyXG59XHJcblxyXG4vKipcclxuICog55uR5ZCs5rWP6KeI5Zmo56qX5Y+j5aSn5bCP5Y+Y5YyW5bm25L2c5Ye65ZON5bqUXHJcbiAqL1xyXG5jb25zdCBfb25yZXNpemUgPSAoKSA9PiB7XHJcbiAgbGV0IHdpbldpZHRoID1cclxuICAgIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgJ3Jlc2l6ZScsXHJcbiAgICBkZWJvdW5jZSgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkZWJvdW5jZScpXHJcbiAgICAgIGxldCBfd2luV2lkdGggPVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXHJcblxyXG4gICAgICBpZiAoX3dpbldpZHRoICE9PSB3aW5XaWR0aCkge1xyXG4gICAgICAgIHdpbldpZHRoID0gX3dpbldpZHRoXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+WuveW6puWPkeeUn+S6huWPmOWMlicsIF93aW5XaWR0aCk7XHJcbiAgICAgICAgLy8gcmVuZGVyUHJpbWFyeU5hdkxpc3ROZXcoKVxyXG4gICAgICAgIHJlbmRlclByaW1hcnlOYXZMaXN0KClcclxuICAgICAgICAvLyByZW5kZXJTZWNvbmRhcnlOYXZMaXN0TmV3KClcclxuICAgICAgICByZW5kZXJTZWNvbmRhcnlOYXZMaXN0KClcclxuICAgICAgfVxyXG4gICAgfSwgMTAwKSxcclxuICAgIGZhbHNlXHJcbiAgKVxyXG59XHJcbmZ1bmN0aW9uIGdldEhpZGRlblByb3AoKSB7XHJcbiAgdmFyIHByZWZpeGVzID0gWyd3ZWJraXQnLCAnbW96JywgJ21zJywgJ28nXVxyXG4gIC8vIOWmguaenGhpZGRlbiDlsZ7mgKfmmK/ljp/nlJ/mlK/mjIHnmoTvvIzmiJHku6zlsLHnm7TmjqXov5Tlm55cclxuICBpZiAoJ2hpZGRlbicgaW4gZG9jdW1lbnQpIHtcclxuICAgIHJldHVybiAnaGlkZGVuJ1xyXG4gIH1cclxuXHJcbiAgLy8g5YW25LuW55qE5oOF5Ya15bCx5b6q546v546w5pyJ55qE5rWP6KeI5Zmo5YmN57yA77yM5ou85o6l5oiR5Lus5omA6ZyA6KaB55qE5bGe5oCnXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8g5aaC5p6c5b2T5YmN55qE5ou85o6l55qE5YmN57yA5ZyoIGRvY3VtZW505a+56LGh5Lit5a2Y5ZyoIOi/lOWbnuWNs+WPr1xyXG4gICAgaWYgKChwcmVmaXhlc1tpXSArICdIaWRkZW4nKSBpbiBkb2N1bWVudCkge1xyXG4gICAgICByZXR1cm4gcHJlZml4ZXNbaV0gKyAnSGlkZGVuJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5YW25LuW55qE5oOF5Ya1IOebtOaOpei/lOWbnm51bGxcclxuICByZXR1cm4gbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWaXNpYmlsaXR5U3RhdGUoKSB7XHJcbiAgdmFyIHByZWZpeGVzID0gWyd3ZWJraXQnLCAnbW96JywgJ21zJywgJ28nXVxyXG4gIGlmICgndmlzaWJpbGl0eVN0YXRlJyBpbiBkb2N1bWVudCkge1xyXG4gICAgcmV0dXJuICd2aXNpYmlsaXR5U3RhdGUnXHJcbiAgfVxyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoKHByZWZpeGVzW2ldICsgJ1Zpc2liaWxpdHlTdGF0ZScpIGluIGRvY3VtZW50KSB7XHJcbiAgICAgIHJldHVybiBwcmVmaXhlc1tpXSArICdWaXNpYmlsaXR5U3RhdGUnXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIOaJvuS4jeWIsOi/lOWbniBudWxsXHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5jb25zdCBfdmlzaWJpbGl0eWNoYW5nZSA9ICgpID0+IHtcclxuICB2YXIgdmlzUHJvcCA9IGdldEhpZGRlblByb3AoKVxyXG4gIGlmICh2aXNQcm9wKSB7XHJcbiAgICAvLyDmnInkupvmtY/op4jlmajkuZ/pnIDopoHlr7nov5nkuKrkuovku7bliqDliY3nvIDku6Xkvr/or4bliKvjgIJcclxuICAgIHZhciBldnRuYW1lID0gdmlzUHJvcC5yZXBsYWNlKC9bSHxoXWlkZGVuLywgJycpICsgJ3Zpc2liaWxpdHljaGFuZ2UnXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2dG5hbWUsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGRvY3VtZW50W2dldFZpc2liaWxpdHlTdGF0ZSgpXSA9PT0gJ3Zpc2libGUnKSB7XHJcbiAgICAgICAgcmVuZGVyUHJpbWFyeU5hdkxpc3QoKVxyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldEpzb25wSG9zdFVybCA9IChjYikgPT4ge1xyXG4gIGxldCBjdXJyZW50U2NyaXB0ID0gb2xkLmdldEN1cnJlbnRTY3JpcHQoKVxyXG4gIGxldCBfc3JjID0gY3VycmVudFNjcmlwdC5zcmNcclxuICBvbGQuZ2V0SnNvbnBIb3N0KF9zcmMsIG51bGwsICh1cmwpID0+IHtcclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgJiZcclxuICAgICAgICB1cmwuc3Vic3RyKDAsIDUpID09PSAnaHR0cDonXHJcbiAgICAgICkge1xyXG4gICAgICAgIC8vIOecn+WunueahGhvc3Rz77yM5Li65LqG5ZCO57ut5a+86Iiq5aS06Lez6L2s5Yiw55yf5q2j55qE6aG555uu5LiK5L2/55SoXHJcbiAgICAgICAgcmVhbEpzb25wSG9zdCA9IHVybFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWFsSnNvbnBIb3N0PScsIHJlYWxKc29ucEhvc3QpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBob3N0dXJsID0gdXJsLnJlcGxhY2UoL15odHRwKHM/KTovLCB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wpXHJcbiAgICBsZXQgaXNQbGF0Zm9ybSA9ICEhaG9zdHVybFxyXG4gICAgLy8g5by65Yi25L2/55SoaHR0cHPorr/pl65cclxuICAgIC8vIGhvc3R1cmwgPSBob3N0dXJsLnJlcGxhY2UoJ2h0dHA6Ly8nLCAnaHR0cHM6Ly8nKVxyXG4gICAgYmFzZS5ob3N0dXJsID0gaG9zdHVybFxyXG4gICAgaWYgKCFob3N0dXJsKSB7XHJcbiAgICAgIC8vIOagueaNrnVybOeahOWfn+WQjeivt+axgmNvbmZpZ+WIpOaWrSBUT0RPOlxyXG4gICAgICBiYXNlLmhvc3R1cmwgPSBvbGQuZ2V0SnNvbnBIb3N0SW5TY3JpcHQoX3NyYylcclxuICAgICAgYmFzZS5sb2dpbnN0YXR1cyA9IGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlt7LnmbvlvZVcclxuICAgICAgYmFzZS5sb2dpbnN0YXR1cyA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICAvLyDlj5Z1cmzmnIDlkI7kuIDkvY3vvIznnIvmmK/lkKbluKYvXHJcbiAgICBjb25zdCB0ID0gYmFzZS5ob3N0dXJsLmNoYXJBdChob3N0dXJsLmxlbmd0aCAtIDEpXHJcbiAgICBjb25zdCBsZW4gPSBiYXNlLmhvc3R1cmwubGVuZ3RoXHJcbiAgICAvLyDlpoLmnpzluKYv77yM57uf5LiA5Yig6Zmk5aSE55CGXHJcbiAgICBiYXNlLmhvc3R1cmwgPSB0ID09PSAnLycgPyBiYXNlLmhvc3R1cmwuc3Vic3RyaW5nKDAsIGxlbiAtIDEpIDogYmFzZS5ob3N0dXJsXHJcbiAgICAvLyBUT0RPIOeUqOS6juaYvuekuueUqOaIt+S/oeaBr++8jOiwg+ivleS4k+eUqERFTEVURVxyXG4gICAgLy8gYmFzZS5sb2dpbnN0YXR1cyA9IHRydWVcclxuICAgIGlmIChjYiAmJiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgY2IoaXNQbGF0Zm9ybSlcclxuICAgIH1cclxuICB9KVxyXG59XHJcbmNvbnN0IGNoYW5nZUxpc3RDdXJyZW50SXRlbSA9IChsaXN0LCB0aXRsZSkgPT4ge1xyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGxpc3RbaW5kZXhdXHJcbiAgICBpZiAoZWxlbWVudC50aXRsZSA9PT0gdGl0bGUpIHtcclxuICAgICAgZWxlbWVudC5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudC5jdXJyZW50ID0gZmFsc2VcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEViZ25hdmlnYXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKGV2ZW50cykge1xyXG4gICAgdGhpcy5uYW1lID0gJ2ViZ25hdmlnYXRpb24nXHJcbiAgICB0aGlzLnZlcnNpb24gPSAnMS4wLjAnXHJcblxyXG4gICAgdGhpcy5ldmVudHMgPSBldmVudHMgfHwge31cclxuXHJcbiAgICBfb25yZXNpemUoKVxyXG4gICAgX3Zpc2liaWxpdHljaGFuZ2UoKVxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiuoumYheiAhVxyXG4gICAqIEBwYXJhbSB7Kn0gbmFtZSDlkI3np7BcclxuICAgKiBAcGFyYW0geyp9IGNiIOWbnuiwg1xyXG4gICAqL1xyXG4gIG9uKG5hbWUsIGNiKSB7XHJcbiAgICA7KHRoaXMuZXZlbnRzW25hbWVdIHx8ICh0aGlzLmV2ZW50c1tuYW1lXSA9IFtdKSkucHVzaChjYilcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1bm9uOiAoKSA9PlxyXG4gICAgICAgIHRoaXMuZXZlbnRzW25hbWVdICYmXHJcbiAgICAgICAgdGhpcy5ldmVudHNbbmFtZV0uc3BsaWNlKHRoaXMuZXZlbnRzW25hbWVdLmluZGV4T2YoY2IpID4+PiAwLCAxKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Y+R5biD6ICFXHJcbiAgICogQHBhcmFtIHsqfSBuYW1lIOWQjeensFxyXG4gICAqIEBwYXJhbSAgey4uLmFueX0gYXJncyDlj4LmlbBcclxuICAgKi9cclxuICBlbWl0KG5hbWUsIC4uLmFyZ3MpIHtcclxuICAgIDsodGhpcy5ldmVudHNbbmFtZV0gfHwgW10pLmZvckVhY2goKGZuKSA9PiBmbiguLi5hcmdzKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPlumFjee9ruS/oeaBr1xyXG4gICAqL1xyXG4gIGdldCBjb25maWcoKSB7XHJcbiAgICByZXR1cm4gY29uZmlnXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5blubPlj7Dkv6Hmga9cclxuICAgKi9cclxuICBnZXRQbGF0Zm9ybShjYikge1xyXG4gICAgZ2V0SnNvbnBIb3N0VXJsKGNiKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yid5aeL5YyW5a+86Iiq5pa55rOVXHJcbiAgICogQHBhcmFtIHsqfSBvcHRpb25zIOWIneWni+WMluWPguaVsFxyXG4gICAqL1xyXG4gIGluaXQob3B0aW9ucykge1xyXG4gICAgLy8gaWXlhbzlrrnlpITnkIZcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF1cclxuICAgIGNvbnN0IGh0dHBFcXVpdiA9ICc8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2UsY2hyb21lPTFcIj4nXHJcbiAgICBpZiAoaGVhZC5pbm5lckhUTUwuaW5kZXhPZihodHRwRXF1aXYpID09PSAtMSkge1xyXG4gICAgICBoZWFkLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHR0cEVxdWl2KVxyXG4gICAgfVxyXG4gICAgc2V0T3B0aW9ucyhvcHRpb25zKVxyXG4gICAgaWYgKCFiYXNlLmhvc3R1cmwpIHtcclxuICAgICAgZ2V0SnNvbnBIb3N0VXJsKCgpID0+IHtcclxuICAgICAgICAvLyAvZGVza3RvcC9iYWNrZW5kL2xvZ2luL2dldExvZ2luU3RhdHVzXHJcblxyXG4gICAgICAgIC8vIOW8gOWni+i/m+ihjOaOpeWPo+ivt+axglxyXG4gICAgICAgIGFqYXhHZXRDb25maWcoKVxyXG4gICAgICAgIC8vIGFqYXhHZXRPdGhlckNvbmZpZygpXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyAvZGVza3RvcC9iYWNrZW5kL2xvZ2luL2dldExvZ2luU3RhdHVzXHJcblxyXG4gICAgICAvLyDlvIDlp4vov5vooYzmjqXlj6Por7fmsYJcclxuICAgICAgYWpheEdldENvbmZpZygpXHJcbiAgICAgIC8vIGFqYXhHZXRPdGhlckNvbmZpZygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiA1LjHjgIHliqjmgIHorr7nva7lupTnlKjlkI3np7BcclxuICAgKiBAcGFyYW0geyp9IG5hbWUgIOW6lOeUqOWQjeensFxyXG4gICAqL1xyXG4gIHNldEhpZ2hsaWdodChuZXdDb25maWcpIHtcclxuICAgIGxldCBhcHBOYXZMaXN0ID0gbmV3Q29uZmlnLmFwcE5hdkxpc3RcclxuICAgIGxldCBzZWNvbmRhcnlOYXZMaXN0ID0gbmV3Q29uZmlnLnNlY29uZGFyeU5hdkxpc3RcclxuICAgIGxldCB0ZW1wVGl0bGUsIHRlbXBUaXRsZVNlY29uZFxyXG4gICAgbGV0IGxpc3QgPSBjb25maWcucHJpbWFyeU5hdi5hcHBOYXZMaXN0XHJcbiAgICBsZXQgc2Vjb25kTGlzdCA9IGNvbmZpZy5zZWNvbmRhcnlOYXYuc2Vjb25kYXJ5TmF2TGlzdFxyXG4gICAgaWYgKHR5cGVvZiBhcHBOYXZMaXN0ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAvLyDorr7nva7nmoTmmK/lr7nosaEs6YCa6L+HdGl0bGXliKTmlq3lr7nosaFcclxuICAgICAgaWYgKGFwcE5hdkxpc3QpIHtcclxuICAgICAgICB0ZW1wVGl0bGUgPSBhcHBOYXZMaXN0LnRpdGxlIHx8ICcnXHJcbiAgICAgIH1cclxuICAgICAgLy8g5aaC5p6c5pyJ5LqM57qn5bqU55SoXHJcbiAgICAgIGlmIChzZWNvbmRhcnlOYXZMaXN0KSB7XHJcbiAgICAgICAgdGVtcFRpdGxlU2Vjb25kID0gc2Vjb25kYXJ5TmF2TGlzdC50aXRsZSB8fCAnJ1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcHBOYXZMaXN0ID09PSAnbnVtYmVyJyB8fCB0eXBlb2Ygc2Vjb25kYXJ5TmF2TGlzdCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgLy8g6K6+572u55qE5piv57Si5byV77yM5Zug5q2k5oiR5Lus6ZyA6KaB5L+u5pS557Si5byV6auY5Lqu77yM5Y+W5raI5YW25LuWXHJcbiAgICAgIGlmIChhcHBOYXZMaXN0ICYmIGFwcE5hdkxpc3QgPj0gbGlzdC5sZW5ndGgpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfkuLvlupTnlKjkv67mlLnntKLlvJXplb/luqbotoXov4fmnIDlpKfplb/luqYnLCBsaXN0Lmxlbmd0aClcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBpZiAoc2Vjb25kYXJ5TmF2TGlzdCAmJiBzZWNvbmRhcnlOYXZMaXN0ID49IHNlY29uZExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign5LqM57qn5bqU55So5L+u5pS557Si5byV6ZW/5bqm6LaF6L+H5pyA5aSn6ZW/5bqmJywgc2Vjb25kTGlzdC5sZW5ndGgpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFwcE5hdkxpc3QpIHtcclxuICAgICAgICB0ZW1wVGl0bGUgPSBsaXN0W2FwcE5hdkxpc3RdLnRpdGxlXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNlY29uZGFyeU5hdkxpc3QpIHtcclxuICAgICAgICB0ZW1wVGl0bGVTZWNvbmQgPSBzZWNvbmRMaXN0W3NlY29uZGFyeU5hdkxpc3RdLnRpdGxlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0ZW1wVGl0bGUpIHtcclxuICAgICAgY2hhbmdlTGlzdEN1cnJlbnRJdGVtKGxpc3QsIHRlbXBUaXRsZSlcclxuICAgICAgcmVuZGVyUHJpbWFyeU5hdkxpc3ROZXcobGlzdC5sZW5ndGgpXHJcbiAgICB9XHJcbiAgICBpZiAodGVtcFRpdGxlU2Vjb25kKSB7XHJcbiAgICAgIGNoYW5nZUxpc3RDdXJyZW50SXRlbShzZWNvbmRMaXN0LCB0ZW1wVGl0bGVTZWNvbmQpXHJcbiAgICAgIHJlbmRlclNlY29uZGFyeU5hdkxpc3ROZXcoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogNS4y44CB5Yqo5oCB6K6+572u5bqU55So5ZCN56ewXHJcbiAgICogQHBhcmFtIHsqfSBuYW1lICDlupTnlKjlkI3np7BcclxuICAgKi9cclxuICBzZXRBcHBOYW1lKG5hbWUpIHtcclxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ2FwcGxpY2F0aW9uJykge1xyXG4gICAgICAvLyDlupTnlKhsb2dvXHJcbiAgICAgIGNvbmZpZy5wcmltYXJ5TmF2LmFwcE5hbWUgPSBuYW1lXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlubPlj7Bsb2dvXHJcbiAgICAgIGNvbmZpZy5wcmltYXJ5TmF2LnBsYXRmb3JtTmFtZSA9IG5hbWVcclxuICAgIH1cclxuICAgIHJlbmRlckxvZ28odHJ1ZSlcclxuICB9XHJcbiAgLyoqXHJcbiAgICogNS4z44CB5Yqo5oCB6K6+572u5bqU55So562b6YCJXHJcbiAgICogQHBhcmFtIHsqfSBuYW1lICDlupTnlKjlkI3np7BcclxuICAgKi9cclxuICBzZXRBcHBMaXN0KGFwcGxpc3QpIHtcclxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ2FwcGxpY2F0aW9uJykge1xyXG4gICAgICBjb25maWcucHJpbWFyeU5hdi5hcHBMaXN0ID0gYXBwbGlzdFxyXG4gICAgfVxyXG4gICAgcmVuZGVyQXBwTGlzdCh0cnVlKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogNS4044CB5Yqo5oCB6K6+572u5Li75a+86IiqXHJcbiAgICogQHBhcmFtIHsqfSBuYW1lXHJcbiAgICovXHJcbiAgc2V0QXBwTmF2TGlzdChhcnJheSkge1xyXG4gICAgaWYgKFxyXG4gICAgICBjb25maWcudHlwZSA9PT0gJ2FwcGxpY2F0aW9uJyAmJlxyXG4gICAgICBjb25maWcucHJpbWFyeU5hdiAmJlxyXG4gICAgICBjb25maWcucHJpbWFyeU5hdi5hcHBOYXZMaXN0XHJcbiAgICApIHtcclxuICAgICAgY29uZmlnLnByaW1hcnlOYXYuYXBwTmF2TGlzdCA9IGFycmF5XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiYXNlLmRlZmF1bHROYXZMaXN0ID0gYXJyYXlcclxuICAgIH1cclxuICAgIHJlbmRlclByaW1hcnlOYXZMaXN0KCkgLy8gYXJyYXkubGVuZ3RoXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiA1LjXjgIHliqjmgIHorr7nva7mrKHlr7zoiKrlkI3np7BcclxuICAgKi9cclxuICBzZXRTZWNvbmRhcnlOYW1lKG5hbWUpIHtcclxuICAgIGNvbmZpZy5zZWNvbmRhcnlOYXYuc2Vjb25kYXJ5TmFtZSA9IG5hbWVcclxuICAgIHJlbmRlclNlY29uZGFyeU5hbWUodHJ1ZSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIDUuNuOAgeWKqOaAgeiuvue9ruasoeWvvOiIqlxyXG4gICAqIEBwYXJhbSB7Kn0gYXJyYXkg5qyh5a+86Iiq6I+c5Y2VXHJcbiAgICovXHJcbiAgc2V0U2Vjb25kYXJ5TmF2TGlzdChhcnJheSkge1xyXG4gICAgaWYgKGNvbmZpZy5zZWNvbmRhcnlOYXYgJiYgY29uZmlnLnNlY29uZGFyeU5hdi5zZWNvbmRhcnlOYXZMaXN0KSB7XHJcbiAgICAgIGNvbmZpZy5zZWNvbmRhcnlOYXYuc2Vjb25kYXJ5TmF2TGlzdCA9IGFycmF5XHJcbiAgICB9XHJcbiAgICByZW5kZXJTZWNvbmRhcnlOYXZMaXN0KGFycmF5Lmxlbmd0aClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIDUuN+OAgeWKqOaAgeiuvue9ruiHquWumuS5ieWFpeWPo1xyXG4gICAqIEBwYXJhbSB7Kn0gbmFtZVxyXG4gICAqL1xyXG4gIHNldFNldHRpbmdMaXN0KGFycmF5KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGNvbmZpZy50eXBlID09PSAnYXBwbGljYXRpb24nICYmXHJcbiAgICAgIGNvbmZpZy5vcGVyYXRpb24gJiZcclxuICAgICAgY29uZmlnLm9wZXJhdGlvbi5zZXR0aW5nTGlzdFxyXG4gICAgKSB7XHJcbiAgICAgIGNvbmZpZy5vcGVyYXRpb24uc2V0dGluZ0xpc3QgPSBhcnJheVxyXG4gICAgfVxyXG4gICAgcmVuZGVyU2V0dGluZ0xpc3QodHJ1ZSlcclxuICB9XHJcblxyXG4gIC8vIOmakOiXj+WvvOiIquagj1xyXG4gIGhpZGVOYXZCYXIoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWJnbmF2LWJveCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICB9XHJcblxyXG4gIC8vIOaYvuekuuWvvOiIquagj1xyXG4gIHNob3dOYXZCYXIoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWJnbmF2LWJveCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIOWvueWkluaatOmcsuS6huS4gOS4quWIt+aWsGFwcExpc3TnmoTmjqXlj6NcclxuICAgKi9cclxuICByZWZyZXNoQXBwTGlzdChmbGFnKSB7XHJcbiAgICByZW5kZXJBcHBMaXN0KGZsYWcpXHJcbiAgfVxyXG5cclxuICBoYW5kT3V0RnVuYyhmdW5jTmFtZSwgcGFyYW0sIG90aGVyUGFyYW0pIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1ldmFsXHJcbiAgICBldmFsKGZ1bmNOYW1lICsgJyhwYXJhbSxvdGhlclBhcmFtKTsnKVxyXG4gIH1cclxuXHJcbiAgYXBwSXRlbUNsaWNrKGkpIHtcclxuICAgIGFsZXJ0KGkpXHJcbiAgfVxyXG4gIHN3aXRjaCgpIHtcclxuICAgIGxldCBvcHRpb25zID0geyB1cmw6ICdzZGRkZDInLCBuYW1lOiAnYWRzZmFzZGYzJyB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXJCYXNlVGVtcChvcHRpb25zKVxyXG4gICAgdGhpcy5zd2l0Y2hUaGVtZSgpXHJcbiAgfVxyXG5cclxuICBzd2l0Y2hUaGVtZSgpIHtcclxuICAgIC8vICQoJy5lYmduYXYnKS5pdGVtKDApLmNsYXNzTGlzdC5hZGQoJ3JlZCcpO1xyXG4gICAgdXRpbHMuaGFuZGxlQ2xhc3MoJCgnLmViZ25hdicpWzBdLCAnYWRkJywgJ3JlZCcpXHJcblxyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2VUaGVtZScsICd3aGl0ZScpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlj6/ku6Xlr7nlpJbmmrTpnLLnmoTliIfmjaLkuLvpophcclxuICAgKiBAcGFyYW0geyp9IHRoZW1lIOS4u+mimOWPguaVsOaUr+aMgSAnZGVmYXVsdO+8jHRoZW1lZGFya++8jHRoZW1lYmx1Ze+8jHRoZW1lZ3JlZW7vvIwx77yMMu+8jDPvvIw0J1xyXG4gICAqL1xyXG4gIHN3aXRjaFRoZW1lKHRoZW1lKSB7XHJcbiAgICBkZWJ1Z2dlclxyXG4gICAgLy8g6buY6K6kZGVmYXVsdDrnuq/nmb3vvIx0aGVtZWRhcms66ZuF6buR77yMdGhlbWVibHVlOuWkqeiTnVxyXG4gICAgaWYgKFxyXG4gICAgICB0aGVtZSAhPT0gJ2RlZmF1bHQnICYmXHJcbiAgICAgIHRoZW1lICE9PSAndGhlbWVkYXJrJyAmJlxyXG4gICAgICB0aGVtZSAhPT0gJ3RoZW1lYmx1ZScgJiZcclxuICAgICAgdGhlbWUgIT09ICd0aGVtZWdyZWVuJ1xyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSBbJzEnLCAnMicsICczJywgJzQnXVxyXG4gICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgJzEnOiAndGhlbWVkYXJrJyxcclxuICAgICAgICAnMic6ICdkZWZhdWx0JyxcclxuICAgICAgICAnMyc6ICd0aGVtZWJsdWUnLFxyXG4gICAgICAgICc0JzogJ3RoZW1lZ3JlZW4nXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdCA9IHR5cGUuZmluZChpdGVtID0+IGl0ZW0gPT09IHRoZW1lKVxyXG4gICAgICBpZiAoIXQpIHJldHVybiBmYWxzZVxyXG4gICAgICBjb25maWcudGhlbWUgPSBvYmpbdF1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbmZpZy50aGVtZSA9IHRoZW1lXHJcbiAgICB9XHJcbiAgICAvLyDop6blj5HlubPlj7DkuIvlj5HnmoTmjaLogqTmk43kvZxcclxuICAgIHdpbmRvdy5lYmduYXZpZ2F0aW9uLmVtaXQoJ3N3aXRjaFRoZW1lJywgdGhlbWUpXHJcbiAgICB3aW5kb3cuZWJnbmF2aWdhdGlvbi5oYW5kT3V0RnVuYygncmVuZGVyVGhlbWUnKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQmFzZVRlbXAob3B0aW9ucykge1xyXG4gICAgbGV0IGJhc2VUZW1wID0gdXRpbHMudGVtcGxhdGVSZW5kZXIodHBsLmJhc2VUZW1wLCBvcHRpb25zKVxyXG5cclxuICAgIGxldCAkZWJnbmF2ID0gJCgnLmViZ25hdicpLml0ZW0oMClcclxuXHJcbiAgICAkZWJnbmF2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoJGViZ25hdilcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGJhc2VUZW1wKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEViZ25hdmlnYXRpb24oKVxyXG4iLCIvKlxyXG4gKiDliqDovb3ogIHlr7zoiKpcclxuICovXHJcbmltcG9ydCB7IGxvYWRTdHlsZSB9IGZyb20gJy4vdXRpbHMvdXRpbHMnXHJcbmNvbnN0IGxvYWRTY3JpcHQgPSAodXJsLCBjYWxsYmFjaykgPT4ge1xyXG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxyXG4gIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCdcclxuICBzY3JpcHQuc3JjID0gdXJsXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXHJcbiAgaWYgKHNjcmlwdC5yZWFkeVN0YXRlKSB7XHJcbiAgICAvLyBJRVxyXG4gICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHNjcmlwdC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8IHNjcmlwdC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJykge1xyXG4gICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsXHJcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIOmdnklFXHJcbiAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2FkT2xkTmF2ID0gKGhvc3R1cmwpID0+IHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxyXG4gIGlmICghYm9keSkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxvYWRPbGROYXYoaG9zdHVybClcclxuICAgIH0sIDIwKVxyXG4gIH1cclxuICBsb2FkU3R5bGUoYCR7aG9zdHVybH0vY29tbW9uLXN0YXRpYy9qcy9jb21tb24vY29tbW9uLm5hdmJhci5jc3NgKVxyXG4gIGNvbnN0IHVybCA9ICcvL2Nkbi5ib290Y2RuLm5ldC9hamF4L2xpYnMvanF1ZXJ5LzEuMTAuMC9qcXVlcnkubWluLmpzJ1xyXG4gIGNvbnN0IG9sZE5hdlVybCA9IGAke2hvc3R1cmx9L2NvbW1vbi1zdGF0aWMvanMvY29tbW9uL2NvbW1vbi5uYXZiYXIuanNgXHJcbiAgaWYgKCF3aW5kb3cualF1ZXJ5KSB7XHJcbiAgICAvLyDliKTmlq3kuIvlvZPliY3pobXpnaLmmK/lkKblvJXlhaXnmoRqUXVlcnksIOiAgeWvvOiIqumcgOimgeS+nei1lmpRdWVyeVxyXG4gICAgbG9hZFNjcmlwdCh1cmwsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlZCcpXHJcbiAgICAgIGxvYWRTY3JpcHQob2xkTmF2VXJsKVxyXG4gICAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgbG9hZFNjcmlwdChvbGROYXZVcmwpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkT2xkTmF2XHJcbiIsIi8vIOWvvOiIquaVtOS9k+ahhuaetuaooeadv1xyXG5jb25zdCBnZXRCYXNlVGVtcGxhdGUgPSBgXHJcbjxkaXYgY2xhc3M9XCJlYmduYXYgcmVuZGVyXCIgaWQ9XCJlYmduYXYtYm94XCI+XHJcbiAgPGRpdiBjbGFzcz1cImViZ25hdi1wcmltYXJ5IGNsZWFyZml4XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZWJnbmF2LWxvZ29ib3hcIiBpZD1cImViZ25hdi1lYmduYXZMb2dvYm94XCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZWJnbmF2LXByaW1hcnktbmF2bGlzdFwiPlxyXG4gICAgICA8dWwgaWQ9XCJlYmduYXYtcHJpbWFyeU5hdkxpc3RcIiBjbGFzcz1cImNsZWFyZml4XCI+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJlYmduYXYtb3BlcmF0aW9uXCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cImNsZWFyZml4XCI+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiZWJnbmF2LW9wZXJhdGlvbi1zZXR0aW5nXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PGkgY2xhc3M9XCJlYmdpbmF2IGluYXYtc2V0dGluZ1wiPjwvaT48L2E+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJjaGlsZHJlblwiIGlkPVwiZWJnbmF2LWViZ25hdlNldHRpbmdcIj5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJlYmduYXYtb3BlcmF0aW9uLWFwcGVudHJ5XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PGkgY2xhc3M9XCJlYmdpbmF2IGluYXYtYXBwLWVudHJ5XCI+PC9pPjwvYT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlYmduYXYtYXBwZW50cnktYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlYmduYXYtYXBwZW50cnktYXBwbGljYXRpb25cIiBpZD1cImViZ25hdi1pc1BsYXRmb3JtXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWJnbmF2LWFwcGVudHJ5LXNlYXJjaFwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi5p+l5om+5bqU55SoXCIgY2xhc3M9XCJzZWFyY2gta2V5d29yZFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzZWFyY2gtYnV0dG9uXCI+PGkgY2xhc3M9XCJlYmdpbmF2IGluYXYtc2VhcmNoXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImViZ25hdi1hcHBlbnRyeS1saXN0XCIgaWQ9XCJlYmduYXYtZGVmYWx1dEFwcGxpY2F0aW9uc1wiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImViZ25hdi1hcHBlbnRyeS1idG5tb3JlXCI+XHJcbiAgICAgICAgICAgICAgPGEgaWQ9XCJzaG93LXNlYXJjaFwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj7mm7TlpJrlupTnlKg8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJlYmduYXYtb3BlcmF0aW9uLXVzZXJpbmZvXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJ1c2VyaW5mby1saW5rXCIgaWQ9XCJlYmduYXYtbmF2VXNlcmluZm9cIj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlYmduYXYtdXNlcmluZm8tYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlYmduYXYtdXNlcmluZm8tdXNlcmluZm9cIiBpZD1cImViZ25hdi1kZXRhaWxVc2VyaW5mb1wiID5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImViZ25hdi11c2VyaW5mby1saXN0XCIgaWQ9XCJ1c2VyLXNldHRpbmctbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNsZWFyZml4IGViZ25hdi11c2VyaW5mby1saXN0LXJvbGVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlYmduYXYtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZWJnaW5hdiBpbmF2LXN3aXRjaC1pZGVudGl0eVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICDouqvku73liIfmjaJcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImViZ25hdi1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxlbSBjbGFzcz1cImViZ2luYXYtaWRlbnRpdHlcIiBpZD1cImViZ2luYXYtcm9sZU5hbWVcIj48JXRoaXMuY3VycmVudE5hbWUlPjwvZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJlYmdpbmF2IGluYXYtdXNlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY2hpbGRyZW4gZWJnbmF2LWRlbnRpdHktbGlzdFwiIGlkPVwiZWJnbmF2LWViZ25hdlJvbGVMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2xlYXJmaXggcGVyc29uYWwtY2VudGVyXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZWJnbmF2LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImViZ2luYXYgaW5hdi11c2VyLWNlbnRlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICDkuKrkurrkuK3lv4NcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImViZ25hdi1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZWJnaW5hdiBpbmF2LXVzZXItcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNsZWFyZml4IG1lc3NhZ2VcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlYmduYXYtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZWJnaW5hdiBpbmF2LW1lc3NhZ2UtY2VudGVyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIOa2iOaBr+S4reW/g1xyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZWJnbmF2LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGVtIGNsYXNzPVwiZWJnaW5hdi1tZXNzYWdlXCIgaWQ9XCJlYmduYXYtbWVzc2FnZVVucmVhZE51bVwiPjg8L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZWJnaW5hdiBpbmF2LXVzZXItcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWJnbmF2LWxvZ291dFwiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj7pgIDlh7rnmbvlvZU8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJlYmduYXYtb3BlcmF0aW9uLWxvZ2luYnRuXCI+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJlYmduYXYtc2Vjb25kYXJ5XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZWJnbmF2LXNlY29uZGFyeS13YXJwIGNsZWFyZml4XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnktbmFtZVwiIGlkPVwiZWJnbmF2LXNlY29uZGFyeU5hbWVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImViZ25hdi1zZWNvbmRhcnktbmF2bGlzdFwiPlxyXG4gICAgICAgIDx1bCBpZD1cImViZ25hdi1zZWNvbmRhcnlOYXZMaXN0XCIgY2xhc3M9XCJjbGVhcmZpeFwiPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmBcclxuY29uc3QgZ2V0UHJpbWFyeVRlbXBsYXRlID0gYFxyXG48ZGl2IGNsYXNzPVwiZWJnbmF2MVwiPlxyXG4gIDxidXR0b24gb25jbGljaz1cImViZ25hdmlnYXRpb24uc3dpdGNoKClcIj5zd2l0Y2g8L2J1dHRvbj5cclxuPC9kaXY+YFxyXG4vLyDlr7zoiKroj5zljZXliJfooajmqKHmnb8s5pSv5oyB5LqM57qn6I+c5Y2VXHJcbmNvbnN0IGdldExpc3RUZW1wbGF0ZSA9IGBcclxuPCUgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHsgXHJcbiAgdmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG4gIHZhciBtZW51VHlwZSA9IHRoaXMudHlwZTtcclxuICB2YXIgbGlzdE9iaiA9IGl0ZW0ucGFyYW1zfHxcIlwiO1xyXG4gIGxldCBsaXN0RmxhZyA9IChsaXN0T2JqLmluZGV4T2YoJ3snKSA9PT0gMCk7XHJcbiU+XHJcbjxsaSB0eXBlPVwiPCUgbWVudVR5cGUgJT5cIiA8JSBpZihpdGVtLmN1cnJlbnQpIHslPmNsYXNzPVwiY3VycmVudFwiPCUgfSAlPiBcclxuIDwlIGlmKGl0ZW0ucHJvcGVydHkpIHslPmRhdGEtcHJvcGVydHk9XCI8JSBpdGVtLnByb3BlcnR5ICU+XCI8JSB9ICU+PlxyXG4gIDwlIFxyXG4gIGlmKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggIT0gMCl7XHJcbiAgICB2YXIgY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuO1xyXG4gICU+XHJcbiAgPCUgaWYoIWl0ZW0uZnVuY25hbWUpIHslPlxyXG4gICAgPGEgaHJlZj0nPCUgaXRlbS51cmwlPicgdGFyZ2V0PSc8JSBpdGVtLnRhcmdldCAlPic+XHJcbiAgPCUgfSBlbHNlIHslPiBcclxuICAgIDwlIGlmKGxpc3RGbGFnKXslPlxyXG4gICAgICA8YSBvbmNsaWNrPVwiY29tbW9uQ2xpY2soPCUgbWVudVR5cGUgJT4sPCUgaSAlPiwnPCUgaXRlbS51cmwgJT4nLCc8JSBpdGVtLmZ1bmNuYW1lICU+Jyw8JSBpdGVtLnBhcmFtcyAlPilcIj5cclxuICAgIDwlIH0gZWxzZSB7JT4gXHJcbiAgICAgIDxhIG9uY2xpY2s9XCJjb21tb25DbGljayg8JSBtZW51VHlwZSAlPiw8JSBpICU+LCc8JSBpdGVtLnVybCAlPicsJzwlIGl0ZW0uZnVuY25hbWUgJT4nLCc8JSBpdGVtLnBhcmFtcyAlPiknXCI+XHJcbiAgICAgIDwlIH0gJT5cclxuICA8JSB9ICU+XHJcbiAgPGkgY2xhc3M9XCJlYmdpbmF2IGluYXYtcmlnaHRcIj48L2k+XHJcbiAgPCUgaXRlbS50aXRsZSAlPlxyXG4gIDxpIGNsYXNzPVwiZWJnaW5hdiBpbmF2LWRvd25cIj48L2k+XHJcbiAgPC9hPlxyXG4gIDx1bCBjbGFzcz1cImNoaWxkcmVuXCI+XHJcbiAgICA8JSBcclxuICAgIGZvcih2YXIgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xyXG4gICAgICB2YXIgY2hpbGRyZW5MaXN0T2JqID0gY2hpbGRyZW5bal0ucGFyYW1zIHx8IFwiXCI7XHJcbiAgICAgIGxldCBjaGlsZExpc3RGbGFnID0gKGNoaWxkcmVuTGlzdE9iai5pbmRleE9mKCd7JykgPT09IDApO1xyXG4gICAgJT5cclxuICAgIDxsaSA8JSBpZihjaGlsZHJlbltqXS5jdXJyZW50KSB7JT5jbGFzcz1cImN1cnJlbnRcIjwlIH0gJT4gXHJcbiAgICAgIDwlIGlmKGNoaWxkcmVuW2pdLnByb3BlcnR5KSB7JT5kYXRhLXByb3BlcnR5PVwiPCUgY2hpbGRyZW5bal0ucHJvcGVydHkgJT5cIjwlIH0gJT4+XHJcbiAgICAgICAgPCUgaWYoIWNoaWxkcmVuW2pdLmZ1bmNuYW1lKSB7JT48YSBocmVmPSc8JSBjaGlsZHJlbltqXS51cmwlPicgdGFyZ2V0PSc8JSBjaGlsZHJlbltqXS50YXJnZXQgJT4nPlxyXG4gICAgICA8JSB9IGVsc2UgeyU+IFxyXG4gICAgICAgICAgICA8JSBpZihjaGlsZExpc3RGbGFnKXslPlxyXG4gICAgICAgICAgICAgIDxhIDwlIGlmKGNoaWxkcmVuW2pdLmN1cnJlbnQpIHslPnN0eWxlPSdjb2xvcjo8JWNoaWxkcmVuW2pdLmN1cnJlbnRDb2xvciU+ICFpbXBvcnRhbnQ7JyA8JSB9ICU+IFxyXG4gICAgICAgICAgICAgIG9uY2xpY2s9XCJjb21tb25DbGljayg8JSBtZW51VHlwZSAlPiwnPCUgaStcInxcIitqICU+JywgJzwlIGNoaWxkcmVuW2pdLnVybCAlPicsXHJcbiAgICAgICAgICAgICAgJzwlIGNoaWxkcmVuW2pdLmZ1bmNuYW1lICU+Jyw8JSBjaGlsZHJlbltqXS5wYXJhbXMgJT4pXCIgPlxyXG4gICAgICAgICAgICA8JSB9IGVsc2UgeyU+IFxyXG4gICAgICAgICAgICAgIDxhIDwlIGlmKGNoaWxkcmVuW2pdLmN1cnJlbnQpIHslPnN0eWxlPSdjb2xvcjo8JWNoaWxkcmVuW2pdLmN1cnJlbnRDb2xvciU+ICFpbXBvcnRhbnQ7JyA8JSB9ICU+IFxyXG4gICAgICAgICAgICAgIG9uY2xpY2s9XCJjb21tb25DbGljayg8JSBtZW51VHlwZSAlPiwnPCUgaStcInxcIitqICU+JywgJzwlIGNoaWxkcmVuW2pdLnVybCAlPicsXHJcbiAgICAgICAgICAgICAgJzwlIGNoaWxkcmVuW2pdLmZ1bmNuYW1lICU+JywnPCUgY2hpbGRyZW5bal0ucGFyYW1zICU+JylcIiA+XHJcbiAgICAgICAgICAgIDwlIH0gJT5cclxuICAgICAgICA8JSB9ICU+XHJcbiAgICAgICAgICA8JSBjaGlsZHJlbltqXS50aXRsZSAlPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2xpPlxyXG4gICAgPCVcclxuICAgIH1cclxuICAgICU+XHJcbiAgPC91bD5cclxuICA8JVxyXG4gIH0gZWxzZSB7XHJcbiAgJT5cclxuICAgIDwlIGlmKGl0ZW0udGl0bGUpIHslPlxyXG4gICAgICA8JSBpZighaXRlbS5mdW5jbmFtZSkgeyU+XHJcbiAgICAgICAgPGEgaHJlZj0nPCUgaXRlbS51cmwlPicgdGFyZ2V0PSc8JSBpdGVtLnRhcmdldCAlPic+XHJcbiAgICAgIDwlIH0gZWxzZSB7JT4gXHJcbiAgICAgICAgPCUgaWYobGlzdEZsYWcpIHslPlxyXG4gICAgICAgIDxhIG9uY2xpY2s9XCJjb21tb25DbGljayg8JSBtZW51VHlwZSAlPiw8JSBpICU+LCc8JSBpdGVtLnVybCAlPicsJzwlIGl0ZW0uZnVuY25hbWUgJT4nLDwlIGl0ZW0ucGFyYW1zICU+KVwiPlxyXG4gICAgICAgIDwlIH0gZWxzZSB7JT4gXHJcbiAgICAgICAgICA8YSBvbmNsaWNrPVwiY29tbW9uQ2xpY2soPCUgbWVudVR5cGUgJT4sPCUgaSAlPiwnPCUgaXRlbS51cmwgJT4nLCc8JSBpdGVtLmZ1bmNuYW1lICU+JywnPCUgaXRlbS5wYXJhbXMgJT4nKVwiPlxyXG4gICAgICAgIDwlIH0gJT5cclxuICAgICAgPCUgfSAlPlxyXG4gICAgICAgIDwlIGl0ZW0udGl0bGUgJT5cclxuICAgICAgPC9hPlxyXG4gICAgPCUgfSBlbHNlIHslPlxyXG4gICAgICA8JSBpZighaXRlbS5mdW5jbmFtZSkgeyU+PGEgaHJlZj0nPCUgaXRlbS51cmwlPicgdGFyZ2V0PSc8JSBpdGVtLnRhcmdldCAlPic+XHJcbiAgICAgIDwlIH0gZWxzZSB7JT4gXHJcbiAgICAgICAgPCUgaWYobGlzdEZsYWcpIHslPlxyXG4gICAgICAgIDxhIG9uY2xpY2s9XCJjb21tb25DbGljayg8JSBtZW51VHlwZSAlPiw8JSBpICU+LCc8JSBpdGVtLnVybCAlPicsJzwlIGl0ZW0uZnVuY25hbWUgJT4nLDwlIGl0ZW0ucGFyYW1zICU+KVwiPlxyXG4gICAgICAgIDwlIH0gZWxzZSB7JT4gXHJcbiAgICAgICAgICA8YSBvbmNsaWNrPVwiY29tbW9uQ2xpY2soPCUgbWVudVR5cGUgJT4sPCUgaSAlPiwnPCUgaXRlbS51cmwgJT4nLCc8JSBpdGVtLmZ1bmNuYW1lICU+JywnPCUgaXRlbS5wYXJhbXMgJT4nKVwiPlxyXG4gICAgICAgIDwlIH0gJT5cclxuICAgICAgPCUgfSAlPlxyXG4gICAgICAgIDwlIGl0ZW0ubmFtZSAlPlxyXG4gICAgICA8L2E+XHJcbiAgICA8JX0lPlxyXG4gIDwlIH0gJT5cclxuPC9saT5cclxuPCV9JT5cclxuYFxyXG5cclxuLy8g5a+86Iiq6I+c5Y2V5YiX6KGo5qih5p2/LOaUr+aMgeS6jOe6p+iPnOWNlVxyXG5jb25zdCBnZXRTZXR0aW5nTGlzdFRlbXBsYXRlID0gYFxyXG48JSBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykgeyBcclxuICB2YXIgaXRlbSA9IHRoaXNbaV07XHJcbiAgdmFyIG1lbnVUeXBlID0gdGhpcy50eXBlO1xyXG4gIHZhciBsaXN0T2JqID0gaXRlbS5wYXJhbXN8fFwiXCI7XHJcbiAgbGV0IGxpc3RGbGFnID0gKGxpc3RPYmouaW5kZXhPZigneycpID09PSAwKTtcclxuJT5cclxuPGxpIHR5cGU9XCI8JSBtZW51VHlwZSAlPlwiIDwlIGlmKGl0ZW0uY3VycmVudCkgeyU+Y2xhc3M9XCJjdXJyZW50XCI8JSB9ICU+IFxyXG4gPCUgaWYoaXRlbS5wcm9wZXJ0eSkgeyU+ZGF0YS1wcm9wZXJ0eT1cIjwlIGl0ZW0ucHJvcGVydHkgJT5cIjwlIH0gJT4+XHJcbiAgPCUgXHJcbiAgaWYoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCAhPSAwKXtcclxuICAgIHZhciBjaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW47XHJcbiAgJT5cclxuICA8JSBpZighaXRlbS5mdW5jbmFtZSkgeyU+XHJcbiAgICA8YSBocmVmPSc8JSBpdGVtLnVybCU+JyB0YXJnZXQ9JzwlIGl0ZW0udGFyZ2V0ICU+Jz5cclxuICA8JSB9IGVsc2UgeyU+IFxyXG4gICAgPCUgaWYobGlzdEZsYWcpeyU+XHJcbiAgICAgIDxhIG9uY2xpY2s9XCJjb21tb25DbGljayg8JSBtZW51VHlwZSAlPiw8JSBpICU+LCc8JSBpdGVtLnVybCAlPicsJzwlIGl0ZW0uZnVuY25hbWUgJT4nLDwlIGl0ZW0ucGFyYW1zICU+KVwiPlxyXG4gICAgPCUgfSBlbHNlIHslPiBcclxuICAgICAgPGEgb25jbGljaz1cImNvbW1vbkNsaWNrKDwlIG1lbnVUeXBlICU+LDwlIGkgJT4sJzwlIGl0ZW0udXJsICU+JywnPCUgaXRlbS5mdW5jbmFtZSAlPicsJzwlIGl0ZW0ucGFyYW1zICU+KSdcIj5cclxuICAgICAgPCUgfSAlPlxyXG4gIDwlIH0gJT5cclxuICA8aSBjbGFzcz1cImViZ2luYXYgaW5hdi1yaWdodFwiPjwvaT5cclxuICA8JSBpdGVtLnRpdGxlICU+XHJcbiAgPGkgY2xhc3M9XCJlYmdpbmF2IGluYXYtZG93bi1zZXR0aW5nXCI+PC9pPlxyXG4gIDwvYT5cclxuICA8dWwgY2xhc3M9XCJjaGlsZHJlbi1zZXR0aW5nXCI+XHJcbiAgICA8JSBcclxuICAgIGZvcih2YXIgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xyXG4gICAgICB2YXIgY2hpbGRyZW5MaXN0T2JqID0gY2hpbGRyZW5bal0ucGFyYW1zIHx8IFwiXCI7XHJcbiAgICAgIGxldCBjaGlsZExpc3RGbGFnID0gKGNoaWxkcmVuTGlzdE9iai5pbmRleE9mKCd7JykgPT09IDApO1xyXG4gICAgJT5cclxuICAgIDxsaSA8JSBpZihjaGlsZHJlbltqXS5jdXJyZW50KSB7JT5jbGFzcz1cImN1cnJlbnRcIjwlIH0gJT4gXHJcbiAgICAgIDwlIGlmKGNoaWxkcmVuW2pdLnByb3BlcnR5KSB7JT5kYXRhLXByb3BlcnR5PVwiPCUgY2hpbGRyZW5bal0ucHJvcGVydHkgJT5cIjwlIH0gJT4+XHJcbiAgICAgICAgPCUgaWYoIWNoaWxkcmVuW2pdLmZ1bmNuYW1lKSB7JT48YSBocmVmPSc8JSBjaGlsZHJlbltqXS51cmwlPicgdGFyZ2V0PSc8JSBjaGlsZHJlbltqXS50YXJnZXQgJT4nPlxyXG4gICAgICA8JSB9IGVsc2UgeyU+IFxyXG4gICAgICAgICAgICA8JSBpZihjaGlsZExpc3RGbGFnKXslPlxyXG4gICAgICAgICAgICAgIDxhIDwlIGlmKGNoaWxkcmVuW2pdLmN1cnJlbnQpIHslPnN0eWxlPSdjb2xvcjo8JWNoaWxkcmVuW2pdLmN1cnJlbnRDb2xvciU+ICFpbXBvcnRhbnQ7JyA8JSB9ICU+IFxyXG4gICAgICAgICAgICAgIG9uY2xpY2s9XCJjb21tb25DbGljayg8JSBtZW51VHlwZSAlPiwnPCUgaStcInxcIitqICU+JywgJzwlIGNoaWxkcmVuW2pdLnVybCAlPicsXHJcbiAgICAgICAgICAgICAgJzwlIGNoaWxkcmVuW2pdLmZ1bmNuYW1lICU+Jyw8JSBjaGlsZHJlbltqXS5wYXJhbXMgJT4pXCIgPlxyXG4gICAgICAgICAgICA8JSB9IGVsc2UgeyU+IFxyXG4gICAgICAgICAgICAgIDxhIDwlIGlmKGNoaWxkcmVuW2pdLmN1cnJlbnQpIHslPnN0eWxlPSdjb2xvcjo8JWNoaWxkcmVuW2pdLmN1cnJlbnRDb2xvciU+ICFpbXBvcnRhbnQ7JyA8JSB9ICU+IFxyXG4gICAgICAgICAgICAgIG9uY2xpY2s9XCJjb21tb25DbGljayg8JSBtZW51VHlwZSAlPiwnPCUgaStcInxcIitqICU+JywgJzwlIGNoaWxkcmVuW2pdLnVybCAlPicsXHJcbiAgICAgICAgICAgICAgJzwlIGNoaWxkcmVuW2pdLmZ1bmNuYW1lICU+JywnPCUgY2hpbGRyZW5bal0ucGFyYW1zICU+JylcIiA+XHJcbiAgICAgICAgICAgIDwlIH0gJT5cclxuICAgICAgICA8JSB9ICU+XHJcbiAgICAgICAgICA8JSBjaGlsZHJlbltqXS50aXRsZSAlPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2xpPlxyXG4gICAgPCVcclxuICAgIH1cclxuICAgICU+XHJcbiAgPC91bD5cclxuICA8JVxyXG4gIH0gZWxzZSB7XHJcbiAgJT5cclxuICAgIDwlIGlmKGl0ZW0udGl0bGUpIHslPlxyXG4gICAgICA8JSBpZighaXRlbS5mdW5jbmFtZSkgeyU+XHJcbiAgICAgICAgPGEgaHJlZj0nPCUgaXRlbS51cmwlPicgdGFyZ2V0PSc8JSBpdGVtLnRhcmdldCAlPic+XHJcbiAgICAgIDwlIH0gZWxzZSB7JT4gXHJcbiAgICAgICAgICAgIDwlIGlmKGxpc3RGbGFnKSB7JT5cclxuICAgICAgICAgICAgPGEgb25jbGljaz1cImNvbW1vbkNsaWNrKDwlIG1lbnVUeXBlICU+LDwlIGkgJT4sJzwlIGl0ZW0udXJsICU+JyxcclxuICAgICAgICAgICAgJzwlIGl0ZW0uZnVuY25hbWUgJT4nLDwlIGl0ZW0ucGFyYW1zICU+KVwiPlxyXG4gICAgICAgICAgICA8JSB9IGVsc2UgeyU+IFxyXG4gICAgICAgICAgICAgIDxhIG9uY2xpY2s9XCJjb21tb25DbGljayg8JSBtZW51VHlwZSAlPiw8JSBpICU+LCc8JSBpdGVtLnVybCAlPicsXHJcbiAgICAgICAgICAgICAgJzwlIGl0ZW0uZnVuY25hbWUgJT4nLCc8JSBpdGVtLnBhcmFtcyAlPicpXCI+XHJcbiAgICAgICAgICAgIDwlIH0gJT5cclxuICAgICAgPCUgfSAlPlxyXG4gICAgICAgIDwlIGl0ZW0udGl0bGUgJT5cclxuICAgICAgPC9hPlxyXG4gICAgPCUgfSBlbHNlIHslPlxyXG4gICAgICA8JSBpZighaXRlbS5mdW5jbmFtZSkgeyU+PGEgaHJlZj0nPCUgaXRlbS51cmwlPicgdGFyZ2V0PSc8JSBpdGVtLnRhcmdldCAlPic+XHJcbiAgICAgIDwlIH0gZWxzZSB7JT4gXHJcbiAgICAgICAgICAgIDwlIGlmKGxpc3RGbGFnKSB7JT5cclxuICAgICAgICAgICAgPGEgb25jbGljaz1cImNvbW1vbkNsaWNrKDwlIG1lbnVUeXBlICU+LDwlIGkgJT4sJzwlIGl0ZW0udXJsICU+JywnPCUgaXRlbS5mdW5jbmFtZSAlPicsPCUgaXRlbS5wYXJhbXMgJT4pXCI+XHJcbiAgICAgICAgICAgIDwlIH0gZWxzZSB7JT4gXHJcbiAgICAgICAgICAgICAgPGEgb25jbGljaz1cImNvbW1vbkNsaWNrKDwlIG1lbnVUeXBlICU+LDwlIGkgJT4sJzwlIGl0ZW0udXJsICU+JyxcclxuICAgICAgICAgICAgICAnPCUgaXRlbS5mdW5jbmFtZSAlPicsJzwlIGl0ZW0ucGFyYW1zICU+JylcIj5cclxuICAgICAgICAgICAgPCUgfSAlPlxyXG4gICAgICA8JSB9ICU+XHJcbiAgICAgICAgPCUgaXRlbS5uYW1lICU+XHJcbiAgICAgIDwvYT5cclxuICAgIDwlfSU+XHJcbiAgPCUgfSAlPlxyXG48L2xpPlxyXG48JSBcclxufVxyXG4lPlxyXG5gXHJcblxyXG4vLyDlr7zoiKroj5zljZXliJfooajkuK3nmoTmm7TlpJrmqKHmnb9cclxuY29uc3QgZ2V0TW9yZVRlbXBsYXRlID0gYFxyXG48bGk+XHJcbiAgPGEgaHJlZj1cIkphdmFTY3JpcHQ6O1wiPuabtOWkmjxpIGNsYXNzPVwiZWJnaW5hdiBpbmF2LWRvd25cIj48L2k+PC9hPlxyXG4gIDx1bCBjbGFzcz1cImNoaWxkcmVuIG1vcmUtY2hpbGRyZW5cIj48L3VsPlxyXG48L2xpPlxyXG5gXHJcbi8vIOS6jOe6p+iPnOWNleWQjeensOaooeadv1xyXG5jb25zdCBnZXRTZWNvbmRhcnlOYW1lVGVtcGxhdGUgPSBgXHJcbjxpIGNsYXNzPVwiZWJnaW5hdiBpbmF2LXNlY29uZGFyeS1uYW1lXCI+PC9pPjxzcGFuPjwlIHRoaXMgJT48L3NwYW4+XHJcbmBcclxuLy8g5bmz5Y+wbG9nb+WMuuaooeadv1xyXG5jb25zdCBnZXRQbGF0Zm9ybUxvZ29UZW1wbGF0ZSA9IGBcclxuPGEgaHJlZj1cIjwlIHRoaXMubG9nb0xpbmsgJT5cIiBjbGFzcz1cImViZ25hdi1sb2dvLWFcIiB0YXJnZXQ9XCJfc2VsZlwiPlxyXG4gIDwlIGlmKHRoaXMubG9nb1NyYykgeyAlPlxyXG4gICAgPGltZyBjbGFzcz1cImViZ25hdi1sb2dvLWltZ1wiIGFsdD1cIlwiIHNyYz1cIjwlIHRoaXMubG9nb1NyYyAlPlwiPlxyXG4gIDwlIH0gXHJcbiAgaWYodGhpcy5uYW1lKSB7ICU+XHJcbiAgPHNwYW4gY2xhc3M9XCJlYmduYXYtbG9nby10aXRsZVwiPjwlIHRoaXMubmFtZSAlPjwvc3Bhbj5cclxuICA8JSB9ICU+XHJcbjwvYT5cclxuYFxyXG4vLyDlupTnlKhsb2dv5Yy65qih5p2/XHJcbmNvbnN0IGdldEFwcGxpY2F0aW9uTG9nb1RlbXBsYXRlID0gYFxyXG48ZGl2IGNsYXNzPVwiZWJnbmF2LWFwcC1sb2dvXCI+XHJcbiAgPGEgaHJlZj1cIjwlIHRoaXMubG9nb0xpbmsgJT5cIiB0YXJnZXQ9XCJfc2VsZlwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJlYmduYXYtYXBwLWxvZ28tYVwiPjxpbWcgc3JjPVwiPCUgdGhpcy5sb2dvU3JjICU+XCIgYWx0PVwiXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJlYmduYXYtYXBwLW5hbWVcIj48JSB0aGlzLmFwcE5hbWUgJT48L3NwYW4+XHJcbiAgPC9hPlxyXG48L2Rpdj5cclxuYFxyXG4vLyDlupTnlKjlia/lr7zoiKrkuIvmi4nliJfooajmqKHmnb9cclxuY29uc3QgZ2V0QXBwTGlzdFRlbXBsYXRlID0gYFxyXG48ZGl2IGNsYXNzPVwiZWJnbmF2LWFwcC1saXN0XCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJlYmduYXYtYXBwLWxpc3Qtc2VwYXJhdG9yXCI+PC9zcGFuPlxyXG4gIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImViZ25hdi1hcHAtbGlzdC1jdXJyZW50XCI+XHJcbiAgICA8c3Bhbj48JSB0aGlzLmN1cnJlbnROYW1lICU+PC9zcGFuPjxpIGNsYXNzPVwiZWJnaW5hdiBpbmF2LWRvd25cIj48L2k+XHJcbiAgPC9hPlxyXG4gIDx1bCBjbGFzcz1cImNoaWxkcmVuXCI+XHJcbiAgICA8JSBcclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmFwcExpc3QubGVuZ3RoOyBpKyspIHsgXHJcbiAgICAgIHZhciBpdGVtID0gdGhpcy5hcHBMaXN0W2ldO1xyXG4gICAgICB2YXIgbWVudVR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICAgIHZhciBhcHBPYmogPSBpdGVtLnBhcmFtcyB8fCAnJztcclxuICAgICAgbGV0IGZsYWcgPSAoYXBwT2JqLmluZGV4T2YoJ3snKSA9PT0gMCk7XHJcbiAgICAlPlxyXG4gICAgPGxpIFxyXG4gICAgICA8JSBpZihpdGVtLmN1cnJlbnQpIHslPmNsYXNzPVwiY3VycmVudFwiPCUgfSAlPiBcclxuICAgICAgPCUgaWYoaXRlbS5wcm9wZXJ0eSkgeyU+ZGF0YS1wcm9wZXJ0eT1cIjwlIGl0ZW0ucHJvcGVydHkgJT5cIjwlIH0gJT4+XHJcbiAgICAgIDwlIGlmKCFpdGVtLmZ1bmNuYW1lKSB7JT48YSBocmVmPSc8JSBpdGVtLnVybCU+JyB0YXJnZXQ9JzwlIGl0ZW0udGFyZ2V0ICU+Jz48JSBpdGVtLnRpdGxlICU+PC9hPlxyXG4gICAgICA8JSB9IGVsc2UgeyU+IFxyXG4gICAgICAgIDwlIGlmKGZsYWcpIHslPlxyXG4gICAgICAgIDxhIG9uY2xpY2s9XCJjb21tb25DbGljayg8JSBtZW51VHlwZSAlPiw8JSBpICU+LCc8JSBpdGVtLnVybCAlPicsJzwlIGl0ZW0uZnVuY25hbWUgJT4nLFxyXG4gICAgICAgIDwlIGl0ZW0ucGFyYW1zICU+KVwiPlxyXG4gICAgICAgIDwlIH0gZWxzZSB7JT4gXHJcbiAgICAgICAgICA8YSBvbmNsaWNrPVwiY29tbW9uQ2xpY2soPCUgbWVudVR5cGUgJT4sPCUgaSAlPiwnPCUgaXRlbS51cmwgJT4nLCc8JSBpdGVtLmZ1bmNuYW1lICU+JyxcclxuICAgICAgICAgIDwlIGl0ZW0ucGFyYW1zICU+KVwiPlxyXG4gICAgICAgICAgPCUgfSAlPlxyXG4gICAgICA8JSBpdGVtLnRpdGxlICU+PC9hPlxyXG4gICAgICA8JSB9ICU+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8JVxyXG4gICAgfVxyXG4gICAgJT5cclxuICA8L3VsPlxyXG48L2Rpdj5cclxuYFxyXG4vLyDmjqjojZDlupTnlKjluKZpY29u5YiX6KGo5qih5p2/XHJcbmNvbnN0IGdldEFwcEljb25MaXN0VGVtcGxhdGUgPSBgXHJcbjx1bCBjbGFzcz1cImNsZWFyZml4XCI+XHJcbiAgPCUgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHsgXHJcbiAgICB2YXIgaXRlbSA9IHRoaXNbaV07XHJcbiAgJT5cclxuICA8bGk+PGEgaHJlZj1cIjwlIGl0ZW0udXJsICU+XCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCI8JSBpdGVtLmFwcE5hbWUgJT5cIiBkYXRhLWFwcGlkPVwiPCUgaXRlbS5pZCAlPlwiPlxyXG4gICAgPGltZyBzcmM9XCI8JSBpdGVtLnNyYyAlPlwiIGFsdD1cIjwlIGl0ZW0uYXBwTmFtZSAlPlwiPlxyXG4gICAgPHNwYW4+PCUgaXRlbS5hcHBOYW1lICU+PC9zcGFuPlxyXG4gIDwvYT48L2xpPlxyXG4gIDwlXHJcbiAgfVxyXG4gICU+XHJcbjwvdWw+XHJcbmBcclxuLy8g5a+86Iiq5LiK55So5oi35L+h5oGv5qih5p2/XHJcbmNvbnN0IGdldE5hdlVzZXJUZW1wbGF0ZSA9IGBcclxuPHNwYW4gY2xhc3M9XCJlYmduYXYtdXNlcmZhY2VcIiBpZD1cImViZ25hdi1oYXNOZXdNc2dcIj5cclxuPGltZyBzcmM9XCI8JSB0aGlzLnVzZXJQaG90byAlPlwiIGFsdD1cIjwlIHRoaXMudXNlck5hbWUgJT5cIj5cclxuPC9zcGFuPlxyXG48c3BhbiBjbGFzcz1cImViZ25hdi11c2VybmFtZVwiIGRhdGEtdXNlcklkPVwiPCUgdGhpcy51c2VySWQgJT5cIj48JSB0aGlzLnVzZXJOYW1lICU+PC9zcGFuPlxyXG48c3BhbiBjbGFzcz1cImViZ25hdi11c2VyZG93blwiPjxpIGNsYXNzPVwiZWJnaW5hdiBpbmF2LWFycm93LWRvd25cIj48L2k+PC9zcGFuPlxyXG5gXHJcbi8vIOeUqOaIt+ivpuaDheS4reeahOeUqOaIt+S/oeaBr+aooeadv1xyXG5jb25zdCBnZXRVc2VyaW5mb1RlbXBsYXRlID0gYFxyXG48c3Bhbj5cclxuPGltZyBzcmM9XCI8JSB0aGlzLnVzZXJQaG90byAlPlwiIGFsdD1cIjwlIHRoaXMudXNlck5hbWUgJT5cIj5cclxuPC9zcGFuPlxyXG48c3BhbiBjbGFzcz1cImViZ25hdi11c2VyaW5mby11c2VybmFtZSB0ZXh0LWVsbGlwc2lzXCIgdGl0bGU9XCI8JSB0aGlzLnVzZXJOYW1lICU+XCIgZGF0YS11c2VySWQ9XCI8JSB0aGlzLnVzZXJJZCAlPlwiPjwlIHRoaXMudXNlck5hbWUgJT48L3NwYW4+XHJcbjxzcGFuIGNsYXNzPVwiZWJnbmF2LXVzZXJpbmZvLWxvZ2lubmFtZSB0ZXh0LWVsbGlwc2lzXCI+PCUgdGhpcy5sb2dpbk5hbWUgJT48L3NwYW4+XHJcbmBcclxuY29uc3QgZ2V0TG9naW5CdG5UZW1wbGF0ZSA9IGBcclxuPGEgaHJlZj1cIi9kZXNrdG9wL2xvZ2luXCI+5qyi6L+O55m75b2VPC9hPlxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2V0QmFzZVRlbXBsYXRlLFxyXG4gIGdldFByaW1hcnlUZW1wbGF0ZSxcclxuICBnZXRMaXN0VGVtcGxhdGUsXHJcbiAgZ2V0TW9yZVRlbXBsYXRlLFxyXG4gIGdldFNlY29uZGFyeU5hbWVUZW1wbGF0ZSxcclxuICBnZXRQbGF0Zm9ybUxvZ29UZW1wbGF0ZSxcclxuICBnZXRBcHBsaWNhdGlvbkxvZ29UZW1wbGF0ZSxcclxuICBnZXRBcHBMaXN0VGVtcGxhdGUsXHJcbiAgZ2V0QXBwSWNvbkxpc3RUZW1wbGF0ZSxcclxuICBnZXROYXZVc2VyVGVtcGxhdGUsXHJcbiAgZ2V0VXNlcmluZm9UZW1wbGF0ZSxcclxuICBnZXRMb2dpbkJ0blRlbXBsYXRlLFxyXG4gIGdldFNldHRpbmdMaXN0VGVtcGxhdGVcclxufVxyXG4iLCJpbXBvcnQgYWpheCBmcm9tICcuL2h0dHAnXHJcbmltcG9ydCB7IGFsZXJ0VGlwcyB9IGZyb20gJy4vdXRpbHMnXHJcbmNvbnN0IHN0ckFzc2VydCA9IChzdHIpID0+IHtcclxuICByZXR1cm4gIShzdHIgPT0gbnVsbCB8fCBzdHIubGVuZ3RoIDwgMSlcclxufVxyXG5jb25zdCBhbGVydEVycm9ySWZTdHJFbXB0eSA9IChzdHIsIGVycm9yTXNnKSA9PiB7XHJcbiAgaWYgKCFzdHJBc3NlcnQoc3RyKSkge1xyXG4gICAgYWxlcnRUaXBzKHtcclxuICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICBtc2c6IGVycm9yTXNnLFxyXG4gICAgICBldmVudFR5cGU6ICdoaWRlVGlwcycsXHJcbiAgICAgIGJ0bk1zZzogJ+ehruWumidcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG4vLyDmmK/lkKblj6/ku6Xov5vlhaXlupTnlKhcclxuY29uc3QgYXBwRW50ZXJhYmxlID0gKHN0b3JlQXBwaWQsIGhvc3R1cmwsIGFwaVVybCwgY2FsbGJhY2spID0+IHtcclxuICAvLyAwIOaVj+aEn+aVsOaNruaOiOadg1xyXG4gIGxldCBlbmFibGUgPSBmYWxzZVxyXG4gIGFqYXgoe1xyXG4gICAgdHlwZTogJ0dFVCcsXHJcbiAgICB1cmw6IGhvc3R1cmwgKyBhcGlVcmwuYXBwRW50ZXJhYmxlLFxyXG4gICAganNvbnA6ICdqc29ucCcsXHJcbiAgICBhc3luYzogZmFsc2UsIC8vIOWQjOatpVxyXG4gICAgZGF0YTogeyBhcHBJZDogc3RvcmVBcHBpZCB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBpZiAocmVzdWx0WydzdWNjZXNzJ10gPT09IHRydWUpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHJlc3VsdFsnZGF0YSddXHJcbiAgICAgICAgaWYgKGRhdGFbJ2VuYWJsZSddID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgLy8g5Zug5pWP5oSf5pWw5o2u5o6I5p2D57y65aSx77yM5bqU55So5LiN5Y+v6K6/6ZeuXHJcbiAgICAgICAgICBsZXQgbXNnID0gJydcclxuICAgICAgICAgIGlmIChkYXRhWydpc0FkbWluJ10gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgbXNnID1cclxuICAgICAgICAgICAgICAn5bqU55So5pWw5o2u5p2D6ZmQ5Y+R55Sf5Y+Y5YyW77yM5Li65LqG5L+d5oqk5a2m5qCh55qE5pWw5o2u5a6J5YWo77yM6K+l5bqU55So5pqC5pe25YGc5q2i6K6/6Zeu77yM6K+35Yiw5bqU55So566h55CGLeW3sua3u+WKoOW6lOeUqC3mlbDmja7mnYPpmZDnrqHnkIbkuK3ov5vooYzlupTnlKjmlbDmja7mnYPpmZDlrqHmoLjjgIInXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtc2cgPVxyXG4gICAgICAgICAgICAgICflupTnlKjmlbDmja7mnYPpmZDlj5HnlJ/lj5jljJbvvIzkuLrkuobkv53miqTlrabmoKHnmoTmlbDmja7lronlhajvvIzor6XlupTnlKjmmoLml7blgZzmraLorr/pl67vvIzpnIDopoHlrabmoKHnrqHnkIblkZjlrqHmoLjlkI7miY3og73mraPluLjkvb/nlKjvvIzlpoLpnIDkvb/nlKjor7fogZTns7vlrabmoKHnrqHnkIblkZjjgIInXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhbGVydFRpcHMoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgIG1zZzogbXNnLFxyXG4gICAgICAgICAgICBldmVudFR5cGU6ICdoaWRlVGlwcycsXHJcbiAgICAgICAgICAgIGJ0bk1zZzogJ+ehruWumidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIOaOpeWPo+ato+W4uOS4lOW6lOeUqOaVj+aEn+aVsOaNruaOiOadg+ato+W4uFxyXG4gICAgICAgICAgZW5hYmxlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgIGNhbGxiYWNrKClcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnRUaXBzKHtcclxuICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgIG1zZzogcmVzdWx0Wydtc2cnXSxcclxuICAgICAgICAgIGV2ZW50VHlwZTogJ2hpZGVUaXBzJyxcclxuICAgICAgICAgIGJ0bk1zZzogJ+ehruWumidcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHt9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIGVuYWJsZVxyXG59XHJcbi8vIOWunueOsOWvueWJjeerr+Wtl+espuS4sui/m+ihjEdFVOe8lueggeeahOWHveaVsFxyXG5mdW5jdGlvbiBhcHBFbmNvZGVVUkwocykge1xyXG4gIHZhciByZWcgPSAvXltcXHUwMzkxLVxcdUZGRTUlXSskL1xyXG4gIHZhciB1cmxMZW5ndGggPSBzLmxlbmd0aFxyXG4gIHZhciBuZXdTID0gJydcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHVybExlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAocmVnLnRlc3Qocy5jaGFyQXQoaSkpKSB7XHJcbiAgICAgIG5ld1MgKz0gZXNjYXBlKHMuY2hhckF0KGkpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3UyArPSBzLmNoYXJBdChpKVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAobmV3Uy5pbmRleE9mKCdfYXBwX2VuY29kaW5nX3RhZ189JykgPT09IC0xKSB7XHJcbiAgICBpZiAobmV3Uy5pbmRleE9mKCc/JykgPj0gMCkge1xyXG4gICAgICBuZXdTID0gbmV3UyArICcmX2FwcF9lbmNvZGluZ190YWdfPTEnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdTID0gbmV3UyArICc/X2FwcF9lbmNvZGluZ190YWdfPTEnXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBlbmNvZGVVUkkobmV3UylcclxufVxyXG5cclxuY29uc3QgYXBwQ2xpY2sgPSAoZGF0YSkgPT4ge1xyXG4gIGlmICghYWxlcnRFcnJvcklmU3RyRW1wdHkoZGF0YS51cmwsICflupTnlKjmraPlnKjntKflvKDlvIDlj5HkuK0nKSkgcmV0dXJuXHJcbiAgaWYgKCFhbGVydEVycm9ySWZTdHJFbXB0eShkYXRhLm5hbWUsICflupTnlKjlkI3np7DplJnor68nKSkgcmV0dXJuXHJcbiAgaWYgKCFhbGVydEVycm9ySWZTdHJFbXB0eShkYXRhLmlkLCAn5bqU55So5qCH6K+G6ZSZ6K+vJykpIHJldHVyblxyXG4gIGlmICghYWxlcnRFcnJvcklmU3RyRW1wdHkoZGF0YS50YXJnZXQsICfot7PovazmlrnlvI/plJnor68nKSkgcmV0dXJuXHJcbiAgYWpheCh7XHJcbiAgICB1cmw6IGRhdGEuaG9zdHVybCArIGRhdGEuYXBpVXJsLmFwcFN0YXR1cyxcclxuICAgIHR5cGU6ICdwb3N0JyxcclxuICAgIC8vIGFzeW5jOiBmYWxzZSwgLy/kvb/nlKjlkIzmraXnmoTmlrnlvI8sdHJ1ZeS4uuW8guatpeaWueW8j1xyXG4gICAgZGF0YTogeyBhcHBJZDogZGF0YS5pZCB9LCAvLyDov5nph4zkvb/nlKhqc29u5a+56LGhXHJcbiAgICBqc29ucDogJ2pzb25wJywgLy8ganNvbnBcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgaWYgKHJlc1snY29kZSddKSB7XHJcbiAgICAgICAgYWxlcnRUaXBzKHtcclxuICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgIG1zZzogcmVzWydjb2RlJ10gIT09ICctNTEwMScgPyByZXNbJ21zZyddIDogJ+W6lOeUqOacquaOiOadgyzor7fogZTns7vnrqHnkIblkZgnLFxyXG4gICAgICAgICAgZXZlbnRUeXBlOiAnaGlkZVRpcHMnLFxyXG4gICAgICAgICAgYnRuTXNnOiAn56Gu5a6aJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlc1snZXhwaXJlZCddID09PSAxKSB7XHJcbiAgICAgICAgLy8gbGF5ZXIuYWxlcnQoJ+atpOW6lOeUqOW3sui/h+acnyzor7fogZTns7vnrqHnkIblkZgnKTtcclxuICAgICAgICBhbGVydFRpcHMoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgbXNnOiAn5q2k5bqU55So5bey6L+H5pyfLOivt+iBlOezu+euoeeQhuWRmCcsXHJcbiAgICAgICAgICBldmVudFR5cGU6ICdoaWRlVGlwcycsXHJcbiAgICAgICAgICBidG5Nc2c6ICfnoa7lrponXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICAvLyAzKSDlpoLmnpxVUkzkuI3mmK8v5byA5aS077yM5YiZ6KGo56S656ys5LiJ5pa55bqU55So77yM5Yik5pat5piv5ZCm5pyJaHR0cDrlpoLmnpzmsqHmnInvvIzliJnmi7zmjqXkuIrjgIJcclxuICAgICAgbGV0IGlzVGhpcmRBcHAgPSBkYXRhLnVybC5pbmRleE9mKCcvJykgIT09IDBcclxuICAgICAgaWYgKGlzVGhpcmRBcHApIHtcclxuICAgICAgICBpZiAoIS9eaHR0cChzKT8vZ2kudGVzdChkYXRhLnVybCkpIHtcclxuICAgICAgICAgIGRhdGEudXJsID0gJ2h0dHA6Ly8nICsgZGF0YS51cmxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDAg5pWP5oSf5pWw5o2u5o6I5p2DXHJcbiAgICAgICAgYXBwRW50ZXJhYmxlKGRhdGEuaWQsIGRhdGEuaG9zdHVybCwgZGF0YS5hcGlVcmwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vIDEpIOiOt+WPlnVybO+8jOWmguaenOayoeaciXVybO+8jOihqOekuuW6lOeUqOato+WcqOe0p+W8oOW8gOWPkeS4reOAglxyXG4gICAgICAgICAgaWYgKCFkYXRhLnVybCkge1xyXG4gICAgICAgICAgICAvLyBsYXllci5hbGVydCgn5bqU55So5q2j5Zyo57Sn5byg5byA5Y+R5LitJyk7XHJcbiAgICAgICAgICAgIGFsZXJ0VGlwcyh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgIG1zZzogJ+W6lOeUqOato+WcqOe0p+W8oOW8gOWPkeS4rScsXHJcbiAgICAgICAgICAgICAgZXZlbnRUeXBlOiAnaGlkZVRpcHMnLFxyXG4gICAgICAgICAgICAgIGJ0bk1zZzogJ+ehruWumidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gYXBwQ2xpY2tDb2xsZWN0b3JMb2coJHRoaXMpO1xyXG5cclxuICAgICAgICAgIGxldCB3aW5kb3dPcGVuID0gd2luZG93Lm9wZW4oZGF0YS51cmwsIGRhdGEudGFyZ2V0KVxyXG4gICAgICAgICAgaWYgKHdpbmRvd09wZW4gPT09IG51bGwgfHwgdHlwZW9mIHdpbmRvd09wZW4gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0VGlwcyh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgIG1zZzogJ+W8ueeql+iiq+a1j+iniOWZqOaLpuaIqu+8jOivt+iuvue9rua1j+iniOWZqOadg+mZkCcsXHJcbiAgICAgICAgICAgICAgZXZlbnRUeXBlOiAnaGlkZVRpcHMnLFxyXG4gICAgICAgICAgICAgIGJ0bk1zZzogJ+ehruWumidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyDmmK/lkKbmmK9hcHBlbmQtcGFyYW1cclxuICAgICAgaWYgKGRhdGEuYXBwZW5kUGFyYW0pIHtcclxuICAgICAgICBkYXRhLnVybCA9ICcvYXBwL2dldEludG8uZG8/dXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YS51cmwpXHJcbiAgICAgICAgZGF0YS51cmwgKz0gJyZhcHBlbmRQYXJhbXM9JyArIGRhdGEuYXBwZW5kUGFyYW1cclxuICAgICAgICB3aW5kb3cub3BlbihkYXRhLnVybCwgZGF0YS50YXJnZXQpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIDTvvInlhoXpg6jlupTnlKjot7PovazpnIDopoHmi7zmjqXlj4LmlbDvvIzpnIDopoHliKTmlq3lupTnlKjlnLDlnYDkuK3mmK/lkKblrZjlnKjlj4LmlbBhcHBlbmRUZXh0MlBhcmFtPWZhbHNl77yM5aaC5p6c5a2Y5Zyo5YiZ5Y675o6J77yM5ZCm5YiZ5ou85o6l5aaC5LiL5YaF5a6577yaXHJcbiAgICAgIC8vICAgJyZfYXBwX2VuY29kaW5nX3RhZ189MSZ0ZXh0PScgKyB0ZXh0ICsgJ1xyXG4gICAgICBpZiAoZGF0YS51cmwuaW5kZXhPZignJmFwcGVuZFRleHQyUGFyYW09ZmFsc2UnKSA+IDApIHtcclxuICAgICAgICBkYXRhLnVybCA9IGRhdGEudXJsLnJlcGxhY2UoJyZhcHBlbmRUZXh0MlBhcmFtPWZhbHNlJywgJycpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGRhdGEudXJsLmluZGV4T2YoJz8nKSA9PT0gLTEpIHtcclxuICAgICAgICAgIGRhdGEudXJsID1cclxuICAgICAgICAgICAgZGF0YS51cmwgK1xyXG4gICAgICAgICAgICBhcHBFbmNvZGVVUkwoXHJcbiAgICAgICAgICAgICAgJz9fYXBwX2VuY29kaW5nX3RhZ189MSZ0ZXh0PScgK1xyXG4gICAgICAgICAgICAgICAgZGF0YS5uYW1lICtcclxuICAgICAgICAgICAgICAgICcmX190aW1lX189JyArXHJcbiAgICAgICAgICAgICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRhdGEudXJsID1cclxuICAgICAgICAgICAgZGF0YS51cmwgK1xyXG4gICAgICAgICAgICBhcHBFbmNvZGVVUkwoXHJcbiAgICAgICAgICAgICAgJyZfYXBwX2VuY29kaW5nX3RhZ189MSZ0ZXh0PScgK1xyXG4gICAgICAgICAgICAgICAgZGF0YS5uYW1lICtcclxuICAgICAgICAgICAgICAgICcmX190aW1lX189JyArXHJcbiAgICAgICAgICAgICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB3aW5kb3cub3BlbihkYXRhLnVybCwgZGF0YS50YXJnZXQpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IHsgYXBwQ2xpY2sgfVxyXG4iLCJsZXQgZmVlZGJhY2tTY3JpcHRcclxubGV0IHJuQXV0aFNjcmlwdFxyXG5cclxuZnVuY3Rpb24gbG9hZEZlZWRiYWNrKCkge1xyXG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXHJcbiAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgZmVlZGJhY2tTY3JpcHQpXHJcbiAgaWYgKGRvY3VtZW50LmJvZHkpIHtcclxuICAgIC8vIOWIpOaWrWJvZHnmmK/lkKblrZjlnKjvvIzlpoLmnpzkuI3lrZjlnKjvvIznrYkzc+WQjumHjeaWsOWIpOaWrVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXHJcbiAgfSBlbHNlIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBsb2FkRmVlZGJhY2soKVxyXG4gICAgfSwgMzAwMClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRSTkF1dGgoKSB7XHJcbiAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcclxuICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBybkF1dGhTY3JpcHQpXHJcbiAgaWYgKGRvY3VtZW50LmJvZHkpIHtcclxuICAgIC8vIOWIpOaWrWJvZHnmmK/lkKblrZjlnKjvvIzlpoLmnpzkuI3lrZjlnKjvvIznrYkzc+WQjumHjeaWsOWIpOaWrVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXHJcbiAgfSBlbHNlIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBsb2FkUk5BdXRoKClcclxuICAgIH0sIDMwMDApXHJcbiAgfVxyXG59XHJcbmNvbnN0IHNldExvYWRGZWVkYmFjayA9IChkYXRhLCBqc29ucEhvc3QpID0+IHtcclxuICBmZWVkYmFja1NjcmlwdCA9IGAke2pzb25wSG9zdH0vY29tbW9uLXN0YXRpYy9qcy9jb21tb24vZmVlZGJhY2suanM/dD0ke25ldyBEYXRlKCkuZ2V0VGltZSgpfWAgLy8g5Zyo57q/5Y+N6aaISlPlnLDlnYBcclxuICBybkF1dGhTY3JpcHQgPSBgJHtqc29ucEhvc3R9L2NvbW1vbi1zdGF0aWMvanMvUk5BdXRoL2luZGV4LmpzP3Q9JHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gIC8vIOWunuWQjeiupOivgeWcsOWdgFxyXG4gIGlmIChkYXRhLmZlZWRiYWNrVXJsKSB7XHJcbiAgICBsb2FkRmVlZGJhY2soanNvbnBIb3N0KVxyXG4gICAgY29uc3QgZmVlZGJhY2tVc2VySW5mbyA9IHtcclxuICAgICAgc2Nob29sOiBkYXRhLnNjaG9vbCxcclxuICAgICAgdXNlcjogZGF0YS51c2VyLFxyXG4gICAgICBmZWVkYmFja1RpdGxlOiBkYXRhLmZlZWRiYWNrVGl0bGUsXHJcbiAgICAgIHhpYW94aW5UaXRsZTogZGF0YS54aWFveGluVGl0bGUsXHJcbiAgICAgIHhpYW94aW5Vcmw6IGRhdGEueGlhb3hpblVybCxcclxuICAgICAgZmVlZGJhY2tIZWxwVXJsOiBkYXRhLmZlZWRiYWNrSGVscFVybCxcclxuICAgICAgZmVlZGJhY2tIZWxwVGl0bGU6IGRhdGEuZmVlZGJhY2tIZWxwVGl0bGVcclxuICAgIH1cclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICdmZWVkYmFjay11c2VyLWluZm8nLFxyXG4gICAgICBKU09OLnN0cmluZ2lmeShmZWVkYmFja1VzZXJJbmZvKVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLy8g5aaC5p6c5rKh5pyJ6L+b6KGM5a6e5ZCN6K6k6K+B77yM5YiH6ZyA6KaB5a6e5ZCN6K6k6K+BXHJcbiAgaWYgKGRhdGEuaWZSZWFsTmFtZUF1dGhlZCA9PT0gZmFsc2UpIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fanNvbnBfY3NyZicsIGRhdGEuYXV0aExpbmspXHJcbiAgICBsb2FkUk5BdXRoKClcclxuICB9XHJcbiAgLy8g5pyq55m75b2VXHJcbiAgaWYgKCFkYXRhLnVzZXIpIHtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgc2V0TG9hZEZlZWRiYWNrXHJcbn1cclxuIiwiZnVuY3Rpb24gYWpheChwYXJhbXMpIHtcclxuICBwYXJhbXMgPSBwYXJhbXMgfHwge31cclxuICBwYXJhbXMuZGF0YSA9IHBhcmFtcy5kYXRhIHx8IHt9XHJcblxyXG4gIC8vIOiOt+WPlumaj+acuuaVsFxyXG4gIGZ1bmN0aW9uIHJhbmRvbSgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCArIDUwMClcclxuICB9XHJcblxyXG4gIC8vIOagvOW8j+WMluWPguaVsFxyXG4gIGZ1bmN0aW9uIGZvcm1hdFBhcmFtcyhkYXRhKSB7XHJcbiAgICB2YXIgYXJyID0gW11cclxuXHJcbiAgICBmb3IgKGxldCBuYW1lIGluIGRhdGEpIHtcclxuICAgICAgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCkg77ya55So5LqO5a+5IFVSSSDkuK3nmoTmn5DkuIDpg6jliIbov5vooYznvJbnoIFcclxuICAgICAgYXJyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFbbmFtZV0pKVxyXG4gICAgfVxyXG4gICAgLy8g5re75Yqg5LiA5Liq6ZqP5py65pWw5Y+C5pWw77yM6Ziy5q2i57yT5a2YXHJcbiAgICBhcnIucHVzaCgndj0nICsgcmFuZG9tKCkpXHJcbiAgICByZXR1cm4gYXJyLmpvaW4oJyYnKVxyXG4gIH1cclxuXHJcbiAgLy8gYWpheOivt+axglxyXG4gIGZ1bmN0aW9uIGpzb24ocGFyYW1zKSB7XHJcbiAgICAvLyDor7fmsYLmlrnlvI/vvIzpu5jorqTmmK9HRVRcclxuICAgIHBhcmFtcy50eXBlID0gKHBhcmFtcy50eXBlIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpXHJcbiAgICAvLyDpgb/lhY3mnInnibnmrorlrZfnrKbvvIzlv4XpobvmoLzlvI/ljJbkvKDovpPmlbDmja5cclxuICAgIHBhcmFtcy5kYXRhID0gZm9ybWF0UGFyYW1zKHBhcmFtcy5kYXRhKVxyXG4gICAgbGV0IHhociA9IG51bGxcclxuXHJcbiAgICAvLyDlrp7kvovljJZYTUxIdHRwUmVxdWVzdOWvueixoVxyXG4gICAgaWYgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCkge1xyXG4gICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSUU25Y+K5YW25Lul5LiL54mI5pysXHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gICAgICB4aHIgPSBuZXcgQWN0aXZlWE9iamNldCgnTWljcm9zb2Z0LlhNTEhUVFAnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOebkeWQrOS6i+S7tu+8jOWPquimgSByZWFkeVN0YXRlIOeahOWAvOWPmOWMlu+8jOWwseS8muiwg+eUqCByZWFkeXN0YXRlY2hhbmdlIOS6i+S7tlxyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gcmVhZHlTdGF0ZeWxnuaAp+ihqOekuuivt+axgi/lk43lupTov4fnqIvnmoTlvZPliY3mtLvliqjpmLbmrrXvvIw05Li65a6M5oiQ77yM5bey57uP5o6l5pS25Yiw5YWo6YOo5ZON5bqU5pWw5o2uXHJcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgIGxldCBzdGF0dXMgPSB4aHIuc3RhdHVzXHJcbiAgICAgICAgLy8gc3RhdHVz77ya5ZON5bqU55qESFRUUOeKtuaAgeegge+8jOS7pTLlvIDlpLTnmoTpg73mmK/miJDlip9cclxuXHJcbiAgICAgICAgaWYgKHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICBsZXQgcmVzcG9uc2UgPSAnJ1xyXG4gICAgICAgICAgLy8g5Yik5pat5o6l5Y+X5pWw5o2u55qE5YaF5a6557G75Z6LXHJcbiAgICAgICAgICBsZXQgdHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC10eXBlJylcclxuXHJcbiAgICAgICAgICBpZiAodHlwZS5pbmRleE9mKCd4bWwnKSAhPT0gLTEgJiYgeGhyLnJlc3BvbnNlWE1MKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlWE1MIC8vIERvY3VtZW505a+56LGh5ZON5bqUXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhcHBsaWNhdGlvbi9qc29uJykge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkgLy8gSlNPTuWTjeW6lFxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0IC8vIOWtl+espuS4suWTjeW6lFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8g5oiQ5Yqf5Zue6LCD5Ye95pWwXHJcbiAgICAgICAgICBwYXJhbXMuc3VjY2VzcyAmJiBwYXJhbXMuc3VjY2VzcyhyZXNwb25zZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGFyYW1zLmVycm9yICYmIHBhcmFtcy5lcnJvcihzdGF0dXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L+e5o6l5ZKM5Lyg6L6T5pWw5o2uXHJcbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdHRVQnKSB7XHJcbiAgICAgIC8vIOS4ieS4quWPguaVsO+8muivt+axguaWueW8j+OAgeivt+axguWcsOWdgChnZXTmlrnlvI/ml7bvvIzkvKDovpPmlbDmja7mmK/liqDlnKjlnLDlnYDlkI7nmoQp44CB5piv5ZCm5byC5q2l6K+35rGCKOWQjOatpeivt+axgueahOaDheWGteaegeWwkSnvvJtcclxuICAgICAgeGhyLm9wZW4ocGFyYW1zLnR5cGUsIHBhcmFtcy51cmwgKyAnPycgKyBwYXJhbXMuZGF0YSwgdHJ1ZSlcclxuICAgICAgeGhyLnNlbmQobnVsbClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHhoci5vcGVuKHBhcmFtcy50eXBlLCBwYXJhbXMudXJsLCB0cnVlKVxyXG4gICAgICAvLyDlv4XpobvvvIzorr7nva7mj5DkuqTml7bnmoTlhoXlrrnnsbvlnotcclxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZScsXHJcbiAgICAgICAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCdcclxuICAgICAgKVxyXG4gICAgICAvLyDkvKDovpPmlbDmja5cclxuICAgICAgeGhyLnNlbmQocGFyYW1zLmRhdGEpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBqc29ucOivt+axglxyXG4gIGZ1bmN0aW9uIGpzb25wKHBhcmFtcykge1xyXG4gICAgLy8g5Yib5bu6c2NyaXB05qCH562+5bm25Yqg5YWl5Yiw6aG16Z2i5LitXHJcbiAgICB2YXIgY2FsbGJhY2tOYW1lID0gcGFyYW1zLmpzb25wXHJcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF1cclxuICAgIC8vIOiuvue9ruS8oOmAkue7meWQjuWPsOeahOWbnuiwg+WPguaVsOWQjVxyXG5cclxuICAgIHBhcmFtcy5kYXRhWydjYWxsYmFjayddID0gY2FsbGJhY2tOYW1lXHJcbiAgICBsZXQgZGF0YSA9IGZvcm1hdFBhcmFtcyhwYXJhbXMuZGF0YSlcclxuICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxyXG4gICAgLy8gbGV0IHJlc3BvbnNlRGF0YVxyXG5cclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxyXG5cclxuICAgIC8vIOWIm+W7umpzb25w5Zue6LCD5Ye95pWwXHJcbiAgICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IGZ1bmN0aW9uIChqc29uKSB7XHJcbiAgICAgIGhlYWQucmVtb3ZlQ2hpbGQoc2NyaXB0KVxyXG4gICAgICBjbGVhclRpbWVvdXQoc2NyaXB0LnRpbWVyKVxyXG4gICAgICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IG51bGxcclxuICAgICAgLy8gcmVzcG9uc2VEYXRhID0ganNvblxyXG4gICAgICBwYXJhbXMuc3VjY2VzcyAmJiBwYXJhbXMuc3VjY2Vzcyhqc29uKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWPkemAgeivt+axglxyXG4gICAgc2NyaXB0LnNyYyA9IHBhcmFtcy51cmwgKyAnPycgKyBkYXRhXHJcbiAgICAvLyDnu5lzY3JpcHTlhYPntKDmt7vliqBsb2Fk5ZKMZXJyb3Lkuovku7ZcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAnZXJyb3InLFxyXG4gICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXRcclxuXHJcbiAgICAgICAgICBpZiAodGFyZ2V0ID09PSBzY3JpcHQpIHtcclxuICAgICAgICAgICAgc2NyaXB0LnRpbWVyICYmIGNsZWFyVGltZW91dChzY3JpcHQudGltZXIpXHJcbiAgICAgICAgICAgIHBhcmFtcy5lcnJvciAmJlxyXG4gICAgICAgICAgICAgIHBhcmFtcy5lcnJvcihcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnanPliqDovb3lh7rplJknXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHBhcmFtc1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRydWVcclxuICAgIClcclxuXHJcbiAgICAvLyDkuLrkuoblvpfnn6XmraTmrKHor7fmsYLmmK/lkKbmiJDlip/vvIzorr7nva7otoXml7blpITnkIZcclxuICAgIGlmIChwYXJhbXMudGltZSkge1xyXG4gICAgICBzY3JpcHQudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IG51bGxcclxuICAgICAgICBoZWFkLnJlbW92ZUNoaWxkKHNjcmlwdClcclxuICAgICAgICBwYXJhbXMuZXJyb3IgJiZcclxuICAgICAgICAgIHBhcmFtcy5lcnJvcih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfotoXml7YnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9LCBwYXJhbXMudGltZSlcclxuICAgIH1cclxuICB9XHJcbiAgLy8g5Yik5pat5pivYWpheOivt+axgui/mOaYr2pzb25w6K+35rGCXHJcbiAgcGFyYW1zLmpzb25wID8ganNvbnAocGFyYW1zKSA6IGpzb24ocGFyYW1zKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhamF4XHJcbiIsIi8vIOm7mOiupOWktOWDj1xyXG5jb25zdCBhdmF0YXIgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFNEFBQUJPQ0FZQUFBQ09xaUFkQUFBSWhrbEVRVlI0WHUyY2E0eVVWeG5IZjgvc1pSWUs3RkpLTEFVV0tCV3FVRmhtb2FLMnNkcCswS1EyRlFuR3NtdU1mck1mVExUeGdpYkdSUEVTYXV5SGZ0U1k3bEFqcWJXcFRlcUhydGEwS3UzdURGQkFBY3R0Z1ZJRGxOMUNZUyt6ODVobkxqRE16dVY5MzNuZnVXdzRueWFaYzU3em5QOTV6bnVlODl5RUdyWG9icDJUYkdGOVNMbGJoUlVJSzFFV0lzd1NaYllLczQwMVVTNnBjQW5sTXNJWmxNT2lIRWtLaDBJVERQWnNsUGRyc1FTcDFxUzdkbW5UK0YwOEFEeW95bWNFdWhXYUs1bGZJS0VRRStHdlFIL3IyN3k2Wll0TVZrTFQ2ZGpBZ2V1TDYxcUJYbFVlQXhZNFpjeGp2N01pUEt2UTF4dVJmUjVwT0JvV0dIRFJtRDZNc0UyVmp6dml4T2RPSXZ3TFpYdFB0N3prTStrVU9kK0I2NHZyRndWK3FFcFhFQXk3cFNuQ1hvV2Y5RWJrajI3SGx1cnZHM0I5KzNRbENaNjJiNWlmRFBwSXE1OW1IdTlkSzRmOW9Ga3hjTHNPYXV2WUtEOENuZ0JhL1dBcVFCcmp3STV3R3ovZXNrcnN0K2RXRVhEUDdOTmxNc2tmVURaNDVxQVdBNFVCYmVKTFgxa3J4NzFPN3htNG5USGRsSVRmQUIxZUo2L3h1T0VRZkgxcnR6enZoUTlQd0VWaitoMkZud2R4dVhoWlJBVmpWT0I3UGQzeVM3YzBYQUducXZMc0huWWtsVys1bmFpZSs0ZUVYejIyamlkRVJKM3k2Umc0QTIxbm5OOHFmTlVwOFVicUovQzdyUkcrNWhROHg4RHRqT3VUMDAzUzhqZldKRzlyUkw3dFpNTWRBWmY1cHYzQ0NjRkc3eVB3WFNmZnZMTEE3ZHlybTVLVFBEY05MZ0tuZTZxaEpqWnY3U3A5MjVZRUxxV25KWWczc01yaEZLejhmc1BhVEtTVW5sY1V1TXlMNEIvQWVxK3p1eGszc3dVV3RjUENkcGc3QThJWmc5TllBaTVlaFRNamNIb0Vya3k0b1ZwUjM4RndHNThzOXNJb0NseGZUSDhLYkt0b2FnZURaN1RBbWdXd2ZCNkV5bnc0a2dwSEw4QmJaK0ZxZFFEYzN0c3RQeWkwaklLc1poN3Nid1g5OWpUcHVtOHB0RFE1UURpbnk4UWt2SDRpTFlVQnQzR2FXVlBJTUZBUXVHaE1YOUdBclJ3cjU4UDZSU0JscjZmQzBLakM0R2s0ZkM1ZzZLQy90MXNleXA5bEN0dG1UME5UdDJoZ3pTVHRnVHU5ZzVabHpNQjc5VmdWSkUvWW5HL1Btd0pjTks1N2dqUkMyamZ0a1krNlA1N0ZkdEdPN1l2L0R2YWJaOGJRbm9pc3krWGhCdURNM0szdzU4QkVEZmhZSjN6NE5uOW4rTzk1ZUdQSVg1b0ZqdWJuYzgzd053SVgxMzhHNlNNd2xlUFIxZVZ2VDdjUTJHMzd3b0ZnVlJYellmUkU1Qk5aM3E0Qlo5NG9sTDF1bVhiVGY4VnRjRytubXhITys3NDVCRWZPTysvdnFhZlFsZldlWFFNdUd0Y2Rxamg2NEhxYUZQajA4clNDRzBRejFlUnZSNE9nZkoybUNFLzJSTVJjQkdrdmx6bUx4NVp6S21pLzU2YlZNRE1ncjhTVmNYaitRTERBQVdmRFIxbHNUdThVY05HNG1uZjlsYUNuL1hJWE5JV0NtV1V5Q2I4UDlFT1Q1bHVFaDNvaTBwOEZicnNxM3c5bVNkZXBUaFBnZnRZVGtXMHA0UHBpdXRzMGhhQ0Jtd1pIMVNCNm83ZGJOb3BGRGRIQ2hVb0RZSnlBM3VpWFErWlNTRERCUEtuVzk4MG1iWGgxSkNNZFRmQ2dSQWYxR3lxcDBJWEFXeU1yd0xuZ2lQSzQ5TVgwMThBM0EwY3RNMEdqUHJueThIbEsrdUw2TXNwbnF3VmNJejd5cDJBai9NVWt6Z3lXOTFRTE9KdW40Y3hLVThIWkw5R1lIbGRZV2szZ2JLNEdNbVFXRURoT0dIRG5GSHcyOURqYmhnWXduUmRjaU1CNSs4YU5vb1NkTGRYL1huWHVyQ204WUdHczVzQmxPYXREOTJCeEtUSGdhbmxVL1pmZjZsRE1IdFZqS011cU0rVTBtVVU0WGhOMVpCckF0Ny9xQ3ZBMEFNM012eWtGdUtwUHJsemc1czJFMjJmRHJUT2h2UTNhV3FBbE5OWFlhVWJLaVNTTVRzRElLTHgzQmQ2OUJCZXUxR3dibnFycUk5K1dhZXFIS2IvTGJvVmJLalNqZnpBT3g5OUxlL09yRkV1UzJxblVJLytabUZwQ1duL1FlOWZhQkd2dmdMdm0rVzgrTjRsOCt3THNld2ZHcTVBQ1orRWhWVEZrTHVtQURaM1FWbEd1WVBtdEhVM0F3QkNjSEM3ZjEyc1B5MWhNR1RLTlFGQ21jeU8rWVRHc21PK1ZUVy9qanB5RGdWUGdPSVRjM1RScDA3bU5pY2JWZDJkTms4RDlkNmFEQld2UkxBanh0V013NlRONklseDMxdmh0UHJmZCtOVHkyb0dXM1NnRDcrOUgvWlc4Rzl5RGZqdWs3NjNCOFN3bTFYWnMzelJYdXovdFJvZDA1cmo2RWdLeFpDN2NYMmNQT0R1eWZsd1lVMElnVWhlRUQwRTNwbkk4c2lyNDI5T3Q4Tmh0KytKQkgxU1ZRa0UzR2FtcktNeXJubzVvUHJpbUpOdE42N1VWRGZOS0FWZEJZS0c5Q0I1ZDViOXk2M1doK2VOTVNYN2hvUGNYaGtEeHdNS00xSGtLWmUyNkExYmY3dGN5ZzZGejRGM1krNDU3Mm1WRFdUUGZPay9CMDE5WVhmbmIwLzJTM0kyd3QrMmZ2SVNDT1FtZXpoeFpWK0g2WnVYNDNOM3VGbEdyM2k4ZmNtMVZjUmF1bjVLNmRFVUh4d2tpcXo0RTZ4YldDZ3AzOCs0NUF3Zi81M2lNdXdTUkZIZ3VVcEpNYnpQOXJSSGF5WXZ3bXZNU0J1NVNrZ3lBVkJMY0dLODdxZkR3OEVlZ1kwWWp3QWJEVitHbC96amdWUmdJaDduUGRSS2NrWGFhZHJsNVRmMHB2Y1dnTVdYNE9mc0lsVzdlMHk2emRETmxNa29tK2dZWm9scHVoVzcvZHhBcnJDSFlYSzZzaHFNVXRIS3A1VDBSdCt6WHRuL1VVcGVMTk45U3k2OUpYb2xpQnRNRk9OK0xHUmg0cGNwbjFQTWJOVit3aXBtWkFpdWZrUVd2V01HV3pnN1l1QVRNUWxLUHpadzR1MC9DVUFGL1JLQUZXM0xCS0ZZaXlCNzZHeFpCWjUzcGRFTVhZZUIwd1FkK2RVb0U1WUtYS2F0UnNDalZ3am5wbDBTdGRUdlQyZXlsY0tadytkSHFGNlhLQXBqUjgzWVZxeFN4ZEM3Y3N5RHRwYTltTTIvLy9yTnc0bUxSV1FlMW1TMDFLWU9XWmNsSjRUMExjN0FjaDBVZC91ZXFadm13bk5YVHcrblVTd3VQS05McW8vQmVMbk5tR0pBRVQ1Y3FnbUFYaDRXdkxtNVB4NHkwVnVpZ0hrK2tRVG8xa3M3TEwrWEZ0MmdGcmFkU2ovazc2NmE0Nkp3d3pMOEYybWZBckZhWUZVNFhhckhBbStaTWxtRWlFM0JqaFZzdWo4SGxjUmk1Q3VjK2dQZkh5bjhBNnI2NGFQNFNicGF6TGIrcEpYdmNMS0JjSVlBM1MzWlhDR0IydUtWN2hscFluOHdyRWkra2lzUFB5aTBTRDF4V3VKUmJKRDRrSEVyV3NFajgvd0ZiRklKMVdmYXkvUUFBQUFCSlJVNUVya0pnZ2c9PSdcclxuLy8g5pqC5peg5pWw5o2uXHJcbmNvbnN0IG5vRGF0YSA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZBQUFBQlFDQVlBQUFDT0VmS3RBQUFJdEVsRVFWUjRYdTJjZlV4VFZ4VEE3MnRwWVZBb3JSVkdReEFsTUdZaVRtV1pacExnRjNHWmk4QkVjRWIvTURIeEQvM0R4UGlWQU5VbVJGTVQvekJCallFWUVzZWl3eEFUc3dwK05JWUVpS1VtS0V4aFlzVUJGckNVYW1TVnRtODViOTZzSy8xNHIvZTlVWnIza3FhRjNuUHV1YjkzN3JuM25udGZLU1JlUkFRb0ltbFJHSWtBQ1oxQUJDZ0NKQ1JBS0M1Nm9BaVFrQUNodU9pQklrQkNBb1Rpb2dkR0swQ2FwaVdFdHZFaVRsR1VseGRGUVpUdzZvRVZGUlhTa3BLU3J4SVNFbkpvbW80VDBuQzJ1dVBpNGx3Mm02My84T0hEdjdPVjRWS09WNERWMWRYcjh2THkxdVRuNTg4bUpTWE51d2ZTTkUxUFRVM1JRME5EY1YxZFhmZnI2K3Q1aDhnYndPenM3SVJqeDQ1VmJkeTRVWmFYbHdjM2tUZmRYRHdpUUZuYWJEWkw3dDY5TzNuaXhJa1dRbDF6eEhscjVPTEZpeFU2blc3WHpwMDdKUnFOaHViYlVCSjlWcXRWMnRUVTVLeXRyVzFHQ1BFYUUza0ZXRnRiVzFWWldTbU5Ob0JEUTBQU2E5ZXVUZGZVMVB3aUFvekFGVVdBRVVEekZSRUJpZ0FSc3Rsc2FHcHFpaEJGYVBHTWpBeWtWQ3JuRklvSkQzenk1QWthSHg5SE1wbE1FSWl6czdObzJiSmxhT25TcGJFSnNLK3ZENzE1OHdaSkpNTE1yNzFlTDhyTnpVVlpXVm14Q2ZEOSsvZm8zYnQzZ2dKVXE5VW9QajQrTmdFSzBtOVpLbzJKR01peXJZSVVFd0VTWWhVQmlnQVJFZ2VSTUY0QTJaaFF5UVJ4R2tNSVVKeElod0dvMVdvVFQ1NDgrVk93ZEZhVUxPVitKZ3luL0NkVU16TXpQL042dlpCWEJJQ2wwWm9QYkc1dWRsNjRjS0hWWnJONXRWb3ROVG82NmtJSWVVaUJFaVZVRFFaRGNXSmlZcTdINC9GUUZFWEo1WExwOXUzYlVYcDZPcWxkdk1vL2UvWU0zYnQzRDNTNlB5bVd4TWZIMnk5ZHVtVHM2ZW41UUZKWnhBQXJLaW8rTHlzckswOUtTcUxsY3JrWEZ2TmpZMk4wdEFKOCtQQWhySk9aOXNLNjJlbDB4bHNzbGc2RHdXQ1pGNEI2dlg1amJtN3U4clMwdEk5Z0FBQzBXcTBvbWdGQ3NnRmZkcnRkYXJmYnB5NWZ2dHpTMDlNekd5bkVpRHh3elpvMXlrT0hEdTFRcVZTeTVPUmtacE1tSEVENEhsNUNYZ2tKQ1FHVEZkQ0Z3UU56Y25LWTZpRWpCTFpNVEV6STJ0cmEycHVhbWdZaXRTc2lnTlhWMWQvazUrZC9uWjZlL2hHbnA4SUJIQmdZRURTZEJmV0RoMlZtWnM1aDRROFFRd1NBRXhNVGZ4NDhlUEFXUWlpaW5VVE9BR0gvdDZhbVprZEtTa3F5V3EzMlFEekJkelJVRjRaNTRPVGtKSkpLcFpIZTdKQnlIbzhIWldkbkIweW9CZ000TXpORE9aMU9xckd4OFZaN2UvdG9KSVp4QnJoNzkrN2wyN1p0MjZCV3EyY2h1OHdXNE11WEw1bU10SkFKVlFBWWFBWVFDS0JQTEpUMzkvYy8wK2wwZC84UGdKS0xGeStXYVRTYTlFV0xGcmtCbm05TWlmWkJCTWRBREFwdUpuaWcwK2wwTnpZMnRwaE1KZ2RYaUp3OGNNK2VQVmxidDI3OUhyb3VaSDVqQVNDMHdXYXp5UWNIQjgwNm5hNUxVSURuenAzN0xpc3JLMGVqMFh6RThCYXlCMkxiSFE2SHhPRnd2RDk5K3ZTdlZxdjFMeTRRV1h0Z2NYR3hadCsrZldXcHFha1NoVUpCeHhKQUdNRW5KeWZsOSsvZk56VTBORHdWQkdCZFhWM1JraVZMVnNMVXhiOENOcU13RjZQNExodHFFTUZlK1BidDJ6aUh3ekcrZi8vK20xek96N0R5d0lLQ2dxUWpSNDVVS0pYS0JEeHg5bThrbmdlV2w1Y2pqVWJETndNaWZUQUhOWmxNekR3eDJPVnl1YWpwNlducDlldlhiOSs4ZWZNVjJ3cFpBVHh3NE1DcW9xS2liNVZLNVVjOGRmR3RBSHZneU1nSTJyUnBFMnVBTUNkVUtCUnNiWjFUYm5wNm1wWHNpeGN2a05sc0RyaG43S3ZBNFhESVhyMTZOWFQ4K1BIZldDbG1lUWhTZnVYS2xSOFJRcW1RL3ZHTmZZRzZjcWp2QTVVdktTa0oyN0JBamVudTdrWVdpNFgxeEJ4dU1ndmJLWWp2WjgrZWJlM3Q3UjFuQXpHc0IybzBtbVM5WGw5VldGZ29TVWxKK2MvZ3dhYUNZR1dnUWRncjFxOWZ6MGtWZ0docGFVSEp5Y2xNdCtSampZMTcwZE9uVCtPTlJxUHg2dFdyZzJ5TUNnc1E5anBPblRwVnRYbnpacWxLcGFKaHljVEhCZDIzczdPVE9Va0FYc2psQW1BM2J0eGdrZ044QVFSN1FHOUhSNGZjWkRJWjYrdnIvMkJqRTJ1QUd6WnNZQUJ5NmFLaERJQllDdXZqc2JFeFZGVlZ4V21KQjJ2cTF0Wld0RzdkT2liZThtVVRPRWRuWitmQ0FBaGRCZ1lCR0IyM2JOa1NNQWtRN0FaQWFtcDRlSmdac1BpOEZoUkFQUCtDT0FqbkJtSDZrNWlZR0pZSGdETWFqV2pWcWxVTWREN2lINjUwUVFKMHVWem93WU1IRER5SWhZRU9TT0lHQXJ5MnRqWUVCeWtMQ3d0NTY3b0xGaUQyUWppMUFOTVM4S2FWSzFjeW5vVkJRbnl6MiswSVZoTVFNK0g4MytyVnE1bVl5VmZzVzlBQU1VU0E5L3o1Y3lhMndRVWVpYWNXSHo1OFFKQ3VoeEVYY241dzhRMFBkQzY0THV3YjhBQVdUQ1VBRm95eTRKWFFJQml0d1J0VktoVURrYytZNXg5d0Z6UkEzQmdNMHJkeDBEQWhQQzRtQVlZZGhnVXNFQk1lS0NDZnNLb3h3RHQzN2hnYkdocWlleVVTdGpYelVBQURQSFBtak5GaXNZZ0F1ZDRERVNCWFluN2xSWUFpUUVJQ2hPS2lCNG9BQ1FrUWlndm1nWHE5dnJLb3FDZ3VMUzJORm5JcFJkaCtZbkZvMjZOSGoyUUdnNkd0dTdzYlQyTkNudG9LbHBHR1J5cmhSV20xV3RuUm8wZC9LQ2dvV0xSaXhRbzNYeWw5NHRieXJBRFczSzlmdjZaNmUzdTk1OCtmdi8zNDhlTUpoQkFjSlFPQWNBZ0k5akxnODMrQStnTUVhUENET2I3UHBMcDM3ZHIxUldscGFYRkdSZ1ljME9ablU0Um5BS1RxNEhqSDhQQ3czR3cyUDZtcnErdjRCTTlmTGNDRDl1T3oxdi8rdGd0TjAzQk9mTzZ6b3YrbzhPemR1L2ZMdFd2WEZpZ1VDc1duVS9ta05rZU52RVFpb2QxdXQ2dXZyKzlGYzNPemVYUjBGQUFGZTdDWjB1bDBzenFkam9Ibzc0SHlFSUp1dFZxZENOdWNIbzlIbUtlbTV3a3BSVkgwek16TXpNaklDT3pVNC9BVnpCcjZFMERtYkYrZ0dBajlIbDZCSUlFUXJ6OWNNMC9NQWxVYkRoeHVPNDZGakk1UTI1cndIVE9RK0x5SDNRYU5JaUFrcHVEQkFyOEhkUnl1UURCUURCOTdLZFlUVEIvOFA2SkQzQ1FVd3NqNmpxait3T2FNdHNGMGNRVVl5aVovaVBCM0lMRCtkWkxhNEg5amZQL0duOE85UjN5ZlNJMlB1T0tnRVpxbVE5b0VBWi8zU2drVVJoMUFncmJNaTZnSWtCQzdDRkFFU0VpQVVQeHZydmllbk9BUzZFWUFBQUFBU1VWT1JLNUNZSUk9J1xyXG5leHBvcnQge1xyXG4gIGF2YXRhcixcclxuICBub0RhdGFcclxufVxyXG4iLCJpbXBvcnQgYWpheCBmcm9tICcuL2h0dHAnXHJcbmNvbnN0IGNyZWF0ZUpzb25wTG9nb3V0ID0gKHVybCwgY2FsbGJhY2spID0+IHtcclxuICBhamF4KHtcclxuICAgIHVybDogdXJsLFxyXG4gICAgdHlwZTogJ0dFVCcsXHJcbiAgICBkYXRhVHlwZTogJ2pzb25wJyxcclxuICAgIGpzb25wOiAnY2FsbGJhY2snLFxyXG4gICAgY3Jvc3NEb21haW46IHRydWUsXHJcbiAgICBjYWNoZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgY2FsbGJhY2soKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBjYWxsYmFjaygpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcbmNvbnN0IGRlc2t0b3BfbG9nb3V0ID0gZnVuY3Rpb24gKF9fbG9nb3V0VXJsKSB7XHJcbiAgbGV0IGxvZ291dFVybHMgPSBfX2xvZ291dFVybC5zcGxpdCgnOycpXHJcbiAgbGV0IGNsZWFyQ29va2llVXJsID0gbG9nb3V0VXJsc1swXSAvLyDmuIXpmaRjb29raWXnmoTlnLDlnYBcclxuICBsb2dvdXRVcmxzID0gbG9nb3V0VXJscy5zcGxpY2UoMSwgbG9nb3V0VXJscy5sZW5ndGgpXHJcbiAgbGV0IHJlZGlyZWN0VXJsID0gbG9nb3V0VXJsc1tsb2dvdXRVcmxzLmxlbmd0aCAtIDFdIC8vIOWQjuerr+aOpeWPo+acgOWQjuS4gOS4qum7mOiupOS4uuWMuuW5s+WPsOWcsOWdgFxyXG4gIGxldCBpbnZva2VkID0gMFxyXG4gIGNyZWF0ZUpzb25wTG9nb3V0KGNsZWFyQ29va2llVXJsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsb2dvdXRVcmxzLmZvckVhY2goKGxvZ291dFVybCwgaWR4KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGxvZ291dFVybCwgaWR4KVxyXG4gICAgICBjcmVhdGVKc29ucExvZ291dChsb2dvdXRVcmwpXHJcbiAgICAgIGludm9rZWQrK1xyXG4gICAgICBpZiAoaW52b2tlZCA9PT0gbG9nb3V0VXJscy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0VXJsXHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBiaW5kTG9nb3V0ID0gKHVybCkgPT4ge1xyXG4gIGRlc2t0b3BfbG9nb3V0KHVybClcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBiaW5kTG9nb3V0XHJcbn1cclxuIiwiaW1wb3J0IGFqYXggZnJvbSAnLi9odHRwJ1xyXG4vLyBpbXBvcnQgbG9hZE9sZE5hdiBmcm9tICcuLi9vbGROYXYnXHJcblxyXG5jb25zdCBnZXRDb29raWUgPSAoa2V5KSA9PiB7XHJcbiAgbGV0IGNrcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGt2ID0gY2tzW2ldLnNwbGl0KCc9JylcclxuXHJcbiAgICBpZiAoa3ZbMF0gPT09IGtleSkgcmV0dXJuIGt2WzFdXHJcbiAgfVxyXG4gIHJldHVybiAnJ1xyXG59XHJcblxyXG5jb25zdCBnZXRKc29ucEhvc3RJblNjcmlwdCA9IChzcmMpID0+IHtcclxuICBsZXQgcmVnID0gL14oPzooW0EtWmEtel0rKTopPyhcXC97MCwzfSkoWzAtOS5cXC1BLVphLXpdKykoPzo6KFxcZCspKT8oPzpcXC8oW14/I10qKSk/KD86XFw/KFteI10qKSk/KD86IyguKikpPyQvXHJcbiAgbGV0IG1hdGNoZXMgPSBzcmMubWF0Y2gocmVnKVxyXG4gIGxldCB1cmxcclxuXHJcbiAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlc1sxXSkge1xyXG4gICAgdXJsID0gbWF0Y2hlc1sxXSArICc6Ly8nICsgbWF0Y2hlc1szXVxyXG4gICAgaWYgKG1hdGNoZXNbNF0gJiYgbWF0Y2hlc1s0XSAhPT0gJzgwJykge1xyXG4gICAgICB1cmwgPSB1cmwgKyAnOicgKyBtYXRjaGVzWzRdXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdFxyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wb3J0KSB7XHJcbiAgICAgIHVybCA9IHVybCArICc6JyArIHdpbmRvdy5sb2NhdGlvbi5wb3J0XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1cmxcclxufVxyXG5cclxuY29uc3QgZ2V0Q3VycmVudFNjcmlwdCA9ICgpID0+IHtcclxuICBpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYykge1xyXG4gICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHRcclxuXHJcbiAgICBpZiAoc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScpIHtcclxuICAgICAgcmV0dXJuIHNjcmlwdFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgc2NyaXB0LnNyYyAmJlxyXG4gICAgICBzY3JpcHQuc3JjLmluZGV4T2YoJ2ViZ25hdmlnYXRpb24nKSAhPT0gLTEgJiZcclxuICAgICAgc2NyaXB0LnNyYy5pbmRleE9mKCdodHRwJykgPT09IDBcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gc2NyaXB0XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGb3IgSUU2LTkgYnJvd3NlcnMsIHRoZSBzY3JpcHQgb25sb2FkIGV2ZW50IG1heSBub3QgZmlyZSByaWdodFxyXG4gIC8vIGFmdGVyIHRoZSBzY3JpcHQgaXMgZXZhbHVhdGVkLiBLcmlzIFp5cCBmb3VuZCB0aGF0IGl0XHJcbiAgLy8gY291bGQgcXVlcnkgdGhlIHNjcmlwdCBub2RlcyBhbmQgdGhlIG9uZSB0aGF0IGlzIGluIFwiaW50ZXJhY3RpdmVcIlxyXG4gIC8vIG1vZGUgaW5kaWNhdGVzIHRoZSBjdXJyZW50IHNjcmlwdFxyXG4gIC8vIHJlZjogaHR0cDovL2dvby5nbC9KSGZGV1xyXG4gIGxldCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpXHJcblxyXG4gIGZvciAobGV0IGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICBsZXQgc2NyaXB0ID0gc2NyaXB0c1tpXVxyXG5cclxuICAgIGlmIChzY3JpcHQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xyXG4gICAgICBsZXQgaW50ZXJhY3RpdmVTY3JpcHQgPSBzY3JpcHRcclxuXHJcbiAgICAgIHJldHVybiBpbnRlcmFjdGl2ZVNjcmlwdFxyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICBzY3JpcHQuc3JjICYmXHJcbiAgICAgIHNjcmlwdC5zcmMuaW5kZXhPZignZWJnbmF2aWdhdGlvbicpICE9PSAtMSAmJlxyXG4gICAgICBzY3JpcHQuc3JjLmluZGV4T2YoJ2h0dHAnKSA9PT0gMFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBzY3JpcHRcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHsgc3JjOiAnJyB9XHJcbn1cclxuXHJcbi8vIOagueaNrnNjcmlwdOeahFVSTOWcsOWdgOiOt+WPluWFtmhvc3RcclxuY29uc3QgZ2V0SnNvbnBIb3N0ID0gKHNyYywgdGFyRG9tYWluLCBjYWxsYmFjaykgPT4ge1xyXG4gIC8vIOWFiOS7jmNvb2tpZeS4reWPllxyXG4gIGxldCBzZXJ2ZXJVcmwgPSBnZXRDb29raWUoJ2Vjc0Rlc2t0b3BTZXJ2ZXInKVxyXG4gIC8vIFRPRE8g5o+Q5Lqk55qE5pe25YCZ5LiN6KaB5bim5LiK5Y6777yM5LuF5LuF6LCD6K+V55qE5pe25YCZ5L2/55SoXHJcbiAgc2VydmVyVXJsID0gJ2h0dHA6Ly9qa3F4eC51ZHB0ZXN0LmxlZGMuY2hhbmd5YW4uY24nXHJcbiAgaWYgKHNlcnZlclVybCAhPT0gJycpIHtcclxuICAgIHNlcnZlclVybCA9IGRlY29kZVVSSUNvbXBvbmVudChzZXJ2ZXJVcmwpXHJcbiAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHNlcnZlclVybClcclxuICB9IGVsc2Uge1xyXG4gICAgLy8g5LuOY29va2ll5Lit5Y+W5LiN5Yiw77yM5YiZ5ZCR5pys5LiA57qn5a+86Iiq5qCP5omA5Zyo5Z+f5ZCN55Sz6K+36I635Y+WXHJcbiAgICBzZXJ2ZXJVcmwgPSBnZXRKc29ucEhvc3RJblNjcmlwdChzcmMpXHJcbiAgICAvLyDov5nph4zopoHmlLnmiJBodHRwc1xyXG4gICAgbGV0IHVybCA9XHJcbiAgICAgICh0YXJEb21haW4gPT09IHVuZGVmaW5lZCB8fCB0YXJEb21haW4gPT0gbnVsbCB8fCB0YXJEb21haW4ubGVuZ3RoIDwgMVxyXG4gICAgICAgID8gc2VydmVyVXJsXHJcbiAgICAgICAgOiB0YXJEb21haW4pICsgJy9kZXNrdG9wL2JhY2tlbmQvbG9naW4vb3BlckluQ2xvdWQuZG8nXHJcbiAgICAvLyDlvLrliLbkvb/nlKhodHRwc+iuv+mXrlxyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICAvLyB1cmwgPSB1cmwucmVwbGFjZSgnaHR0cDovLycsICdodHRwczovLycpXHJcbiAgICB9XHJcbiAgICBhamF4KHtcclxuICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgIGpzb25wOiAnanNvbnBDYWxsYmFja29wZXJJbkNsb3VkJyxcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIGRhdGE6IHsgZ2V0RGVza3RvcFNlcnZlcjogdHJ1ZSB9LFxyXG4gICAgICBzdWNjZXNzOiAocmV0KSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSByZXRbJ2RhdGEnXVxyXG4gICAgICAgIGxldCByZWRpckRvbWFpbiA9ICcnXHJcblxyXG4gICAgICAgIGlmIChkYXRhICE9IG51bGwgJiYgZGF0YVsncmVkaXJEb21haW4nXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICByZWRpckRvbWFpbiA9IGRhdGFbJ3JlZGlyRG9tYWluJ11cclxuICAgICAgICB9IC8vIOmcgOimgeWQkeS6keW5s+WPsOiOt+WPllxyXG5cclxuICAgICAgICBpZiAocmVkaXJEb21haW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgLy8g5ZCR5LqR5bmz5Y+w6I635Y+WXHJcbiAgICAgICAgICBnZXRKc29ucEhvc3Qoc3JjLCByZWRpckRvbWFpbiwgKHVybCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsLmxlbmd0aCA+IDApIHNlcnZlclVybCA9IHVybFxyXG4gICAgICAgICAgICBlbHNlIHNlcnZlclVybCA9IGdldEpzb25wSG9zdEluU2NyaXB0KHNyYykgLy8g5Y+W5LiN5Yiw77yM5YiZ6L+U5Zue6buY6K6k55qEXHJcblxyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHNlcnZlclVybClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIOW3sue7j+iOt+WPluWIsO+8jOi/lOWbnuWNs+WPr1xyXG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhkYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0SnNvbnBIb3N0IGVycm9yIHJlcycsIGVycilcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0SnNvbnBIb3N0LFxyXG4gIGdldENvb2tpZSxcclxuICBnZXRDdXJyZW50U2NyaXB0LFxyXG4gIGdldEpzb25wSG9zdEluU2NyaXB0XHJcbn1cclxuIiwiLyoqXHJcbiAqIOeugOaYk1hzc+i/h+a7pFxyXG4gKiBAcGFyYW0geyp9IHN0ciDooqvov4fmu6TnmoTlrZfnrKbkuLJcclxuICovXHJcbmNvbnN0IGVhc3lYc3MgPSBzdHIgPT4ge1xyXG4gIHZhciBsdCA9IC88L2dcclxuICB2YXIgZ3QgPSAvPi9nXHJcbiAgdmFyIGFwID0gLycvZ1xyXG4gIHZhciBpYyA9IC9cIi9nXHJcblxyXG4gIHJldHVybiBzdHJcclxuICAgIC5yZXBsYWNlKGx0LCAnJmx0OycpXHJcbiAgICAucmVwbGFjZShndCwgJyZndDsnKVxyXG4gICAgLnJlcGxhY2UoYXAsICcmIzM5OycpXHJcbiAgICAucmVwbGFjZShpYywgJyYjMzQ7JylcclxufVxyXG5cclxuLyoqXHJcbiAqIOaooeadv+i/h+a7pFxyXG4gKiBAcGFyYW0geyp9IHRlbXBsYXRlIOaooeadv+Wtl+espuS4slxyXG4gKiBAcGFyYW0geyp9IGRhdGEg5pWw5o2uXHJcbiAqL1xyXG5jb25zdCB0ZW1wbGF0ZUZpbHRlciA9IHRlbXBsYXRlID0+IHtcclxuICBsZXQgdG1wID0gdGVtcGxhdGVcclxuXHJcbiAgLy8g6L+H5ruk5o2i6KGMXHJcbiAgdG1wID0gdG1wLnJlcGxhY2UoL1xccnxcXG4vZywgJycpXHJcblxyXG4gIC8vIOi/h+a7pOi/nue7reepuuagvFxyXG4gIHRtcCA9IHRtcC5yZXBsYWNlKC9cXHMrL2csICcgJylcclxuXHJcbiAgLy8g6L+H5ruk5qCH562+6Ze055qE56m65qC8XHJcbiAgdG1wID0gdG1wLnJlcGxhY2UoL1xcPlxccytcXDwvZywgJz48JylcclxuXHJcbiAgcmV0dXJuIHRtcFxyXG59XHJcblN0cmluZy5wcm90b3R5cGUucmVwbGFjZUFsbCA9IGZ1bmN0aW9uIChzMSwgczIpIHtcclxuICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoczEsICdnbScpLCBzMilcclxufVxyXG4vKipcclxuICrlpITnkIbljZXlvJXlj7flj4zlvJXlj7dcclxuICogQHBhcmFtIHsqfSBhcHBMaXN0IOaYr+aIkeS7rOiPnOWNleeahOWIl+ihqFxyXG4gKi9cclxuZnVuY3Rpb24gZm9ybWF0UGFyYW1zKGFwcExpc3QpIHtcclxuICBsZXQgdHlwZSA9IGFwcExpc3QudHlwZVxyXG4gIGxldCBjdXJyZW50TmFtZSA9IGFwcExpc3QuY3VycmVudE5hbWVcclxuICBsZXQgbmV3RGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYXBwTGlzdCkpXHJcblxyXG4gIGRlbGV0ZSBuZXdEYXRhLnR5cGVcclxuICBkZWxldGUgbmV3RGF0YS5jdXJyZW50TmFtZVxyXG4gIGxldCBsaXN0ID0gbmV3RGF0YVxyXG4gIC8vIHJlbmRlckFwcExpc3TmuLLmn5PnmoTml7blgJnluKbnmoTlj4LmlbDkuI3mmK/kvKDpgJLov4fmnaXnmoTmlbDnu4TvvIznibnmrorlpITnkIZcclxuICBsZXQgc3BlY2lhbEZsYWcgPSBmYWxzZVxyXG5cclxuICBpZiAobmV3RGF0YS5hcHBMaXN0KSB7XHJcbiAgICBsaXN0ID0gbmV3RGF0YS5hcHBMaXN0XHJcbiAgICBzcGVjaWFsRmxhZyA9IHRydWVcclxuICB9XHJcbiAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgbGV0IHBhcmVudEpzb24gPSBpdGVtLnBhcmFtc1xyXG4gICAgaWYgKCEhcGFyZW50SnNvbiAmJiBwYXJlbnRKc29uLmxlbmd0aCA+IDApIHtcclxuICAgICAgaXRlbS5wYXJhbXMgPSBwYXJlbnRKc29uLnJlcGxhY2VBbGwoJ1wiJywgXCInXCIpXHJcbiAgICB9XHJcbiAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgaXRlbS5jaGlsZHJlbi5mb3JFYWNoKGNJdGVtID0+IHtcclxuICAgICAgICBsZXQgY2hpbGRyZW5KU29uUGFyYW0gPSBjSXRlbS5wYXJhbXNcclxuXHJcbiAgICAgICAgaWYgKCEhY2hpbGRyZW5KU29uUGFyYW0gJiYgY2hpbGRyZW5KU29uUGFyYW0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY0l0ZW0ucGFyYW1zID0gY2hpbGRyZW5KU29uUGFyYW0ucmVwbGFjZUFsbCgnXCInLCBcIidcIilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSlcclxuICBpZiAoc3BlY2lhbEZsYWcpIHtcclxuICAgIHJldHVybiB7IGFwcExpc3Q6IGxpc3QsIHR5cGUsIGN1cnJlbnROYW1lIH1cclxuICB9XHJcbiAgaWYgKHR5cGUpIHtcclxuICAgIGxpc3QudHlwZSA9IHR5cGVcclxuICB9XHJcbiAgaWYgKGN1cnJlbnROYW1lKSB7XHJcbiAgICBsaXN0LmN1cnJlbnROYW1lID0gY3VycmVudE5hbWVcclxuICB9XHJcbiAgcmV0dXJuIGxpc3RcclxufVxyXG5cclxuLyoqXHJcbiAqIOaooeadv+a4suafk1xyXG4gKiBAcGFyYW0geyp9IHRwbCDmqKHmnb9cclxuICogQHBhcmFtIHsqfSBkYXRhIOaVsOaNrlxyXG4gKi9cclxuY29uc3QgdGVtcGxhdGVSZW5kZXIgPSAodHBsLCBkYXRhLCB0eXBlKSA9PiB7XHJcbiAgbGV0IHJlZyA9IC88JShbXiU+XSspPyU+L2csXHJcbiAgICByZWdPdXQgPSAvKF4oICk/KGlmfGZvcnxlbHNlfHN3aXRjaHxjYXNlfGJyZWFrfHt8fSkpKC4qKT8vZyxcclxuICAgIGNvZGUgPSAndmFyIHI9W107XFxuJyxcclxuICAgIGN1cnNvciA9IDBcclxuXHJcbiAgbGV0IGFkZCA9IGZ1bmN0aW9uIChsaW5lLCBqcykge1xyXG4gICAganNcclxuICAgICAgPyAoY29kZSArPSBsaW5lLm1hdGNoKHJlZ091dCkgPyBsaW5lICsgJ1xcbicgOiAnci5wdXNoKCcgKyBsaW5lICsgJyk7XFxuJylcclxuICAgICAgOiAoY29kZSArPVxyXG4gICAgICAgICAgbGluZSAhPT0gJycgPyAnci5wdXNoKFwiJyArIGxpbmUucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpICsgJ1wiKTtcXG4nIDogJycpXHJcbiAgICByZXR1cm4gYWRkXHJcbiAgfVxyXG5cclxuICBsZXQgbWF0Y2ggPSBudWxsXHJcblxyXG4gIHdoaWxlICgobWF0Y2ggPSByZWcuZXhlYyh0cGwpKSkge1xyXG4gICAgYWRkKHRwbC5zbGljZShjdXJzb3IsIG1hdGNoLmluZGV4KSkobWF0Y2hbMV0sIHRydWUpXHJcbiAgICBjdXJzb3IgPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aFxyXG4gIH1cclxuICBhZGQodHBsLnN1YnN0cihjdXJzb3IsIHRwbC5sZW5ndGggLSBjdXJzb3IpKVxyXG4gIGNvZGUgKz0gJ3JldHVybiByLmpvaW4oXCJcIik7J1xyXG4gIGlmICh0eXBlID4gMCkge1xyXG4gICAgZGF0YS50eXBlID0gdHlwZVxyXG4gIH1cclxuICBsZXQgbmV3RGF0YSA9IGRhdGFcclxuXHJcbiAgaWYgKGRhdGEgJiYgZGF0YS50eXBlID4gMCkge1xyXG4gICAgbmV3RGF0YSA9IGZvcm1hdFBhcmFtcyhkYXRhKVxyXG4gIH1cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcclxuICByZXR1cm4gbmV3IEZ1bmN0aW9uKGNvZGUucmVwbGFjZSgvW1xcclxcdFxcbl0vZywgJycpKS5hcHBseShuZXdEYXRhKVxyXG4gIC8vIHJldHVybiBmblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xyXG4gIC8vIHRyeSB7XHJcbiAgLy8gICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbihjb2RlLnJlcGxhY2UoL1tcXHJcXHRcXG5dL2csICcnKSkuYXBwbHkobmV3RGF0YSlcclxuICAvLyAgIHJldHVybiBmblxyXG4gIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyh0cGwsIGRhdGEsIGVycm9yKVxyXG4gIC8vIH1cclxuICAvLyByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgvXFx7XFx7KFteXFx9XSopXFx9XFx9L2dpLCBmdW5jdGlvbiAoJCwgJDEpIHtcclxuICAvLyAgIGxldCBmbGF0T2JqID0gZmxhdHRlbk9iamVjdChkYXRhKTtcclxuXHJcbiAgLy8gICByZXR1cm4gZmxhdE9ialskMV0gIT09IHVuZGVmaW5lZCA/IGVhc3lYc3MoZmxhdE9ialskMV0pIDogJyc7XHJcbiAgLy8gfSk7XHJcbn1cclxuXHJcbmNvbnN0IHBvbGwgPSAobm9kZSwgY2FsbGJhY2spID0+IHtcclxuICBpZiAoY2FsbGJhY2suaXNDYWxsZWQpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgbGV0IGlzTG9hZGVkID0gZmFsc2VcclxuXHJcbiAgaWYgKC93ZWJraXQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcbiAgICAvLyB3ZWJraXRcclxuICAgIGlmIChub2RlWydzaGVldCddKSB7XHJcbiAgICAgIGlzTG9hZGVkID0gdHJ1ZVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAobm9kZVsnc2hlZXQnXSkge1xyXG4gICAgLy8gZm9yIEZpcmVmb3hcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChub2RlWydzaGVldCddLmNzc1J1bGVzKSB7XHJcbiAgICAgICAgaXNMb2FkZWQgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgIC8vIE5TX0VSUk9SX0RPTV9TRUNVUklUWV9FUlJcclxuICAgICAgaWYgKGV4LmNvZGUgPT09IDEwMDApIHtcclxuICAgICAgICBpc0xvYWRlZCA9IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzTG9hZGVkKSB7XHJcbiAgICAvLyBnaXZlIHRpbWUgdG8gcmVuZGVyLlxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNhbGxiYWNrKClcclxuICAgIH0sIDEpXHJcbiAgfSBlbHNlIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBwb2xsKG5vZGUsIGNhbGxiYWNrKVxyXG4gICAgfSwgMSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlT25sb2FkID0gKG5vZGUsIGNhbGxiYWNrKSA9PiB7XHJcbiAgLy8gZm9yIElFNi05IGFuZCBPcGVyYVxyXG4gIGlmIChub2RlLmF0dGFjaEV2ZW50KSB7XHJcbiAgICAvLyBOT1RJQ0U6XHJcbiAgICAvLyAxLiBcIm9ubG9hZFwiIHdpbGwgYmUgZmlyZWQgaW4gSUU2LTkgd2hlbiB0aGUgZmlsZSBpcyA0MDQsIGJ1dCBpblxyXG4gICAgLy8gdGhpcyBzaXR1YXRpb24sIE9wZXJhIGRvZXMgbm90aGluZywgc28gZmFsbGJhY2sgdG8gdGltZW91dC5cclxuICAgIC8vIDIuIFwib25lcnJvclwiIGRvZXNuJ3QgZmlyZSBpbiBhbnkgYnJvd3NlcnMhXHJcbiAgICBub2RlLmF0dGFjaEV2ZW50KCdvbmxvYWQnLCBjYWxsYmFjaylcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gcG9sbGluZyBmb3IgRmlyZWZveCwgQ2hyb21lLCBTYWZhcmlcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBwb2xsKG5vZGUsIGNhbGxiYWNrKVxyXG4gICAgfSwgMCkgLy8gZm9yIGNhY2hlXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICog5Yqo5oCB5o+S5YWlY3Nz6ZO+5o6l5Yiw6aG16Z2i5LitXHJcbiAqIEBwYXJhbSB7Kn0gdXJsIGNzc+mTvuaOpeWcsOWdgFxyXG4gKi9cclxuY29uc3QgbG9hZFN0eWxlID0gKHVybCwgY2IpID0+IHtcclxuICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxyXG4gIGxldCBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxyXG5cclxuICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnXHJcbiAgbGluay5yZWwgPSAnc3R5bGVzaGVldCdcclxuICBsaW5rLmhyZWYgPSB1cmxcclxuXHJcbiAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxyXG4gIHN0eWxlT25sb2FkKGxpbmssICgpID0+IHtcclxuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgY2IodHJ1ZSlcclxuICAgIH1cclxuICB9KVxyXG59XHJcbi8qKlxyXG4gKiDliqDovb1jc3Plt6Xlhbfku6PnoIFcclxuICogbm9SZW5kQ3NzIOaYr+WQpua4suafk2pz5YiwaHRtbOS4rVxyXG4gKiAqL1xyXG5jb25zdCBsb2FkU3R5bGVDc3MgPSAodXJsLCBjYiwgbm9SZW5kQ3NzID0gZmFsc2UpID0+IHtcclxuICBpZiAobm9SZW5kQ3NzKSB7XHJcbiAgICBjYih0cnVlKVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXHJcbiAgbGV0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdXHJcblxyXG4gIGxpbmsudHlwZSA9ICd0ZXh0L2NzcydcclxuICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0J1xyXG4gIGxpbmsuaHJlZiA9IHVybFxyXG5cclxuICBoZWFkLmFwcGVuZENoaWxkKGxpbmspXHJcbiAgc3R5bGVPbmxvYWQobGluaywgKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjYih0cnVlKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpgJrov4dpZCxjbGFzcyx0YWduYW1l6I635Y+W5a+55bqU5b6X5YWD57SgXHJcbiAqIEBwYXJhbSB7Kn0gc3RyIOWQjeensCNhYmMvLmFiYy9kaXZcclxuICovXHJcbmNvbnN0ICQgPSBzdHIgPT4ge1xyXG4gIGxldCBmc3RyID0gc3RyLnN1YnN0cigwLCAxKVxyXG5cclxuICBzd2l0Y2ggKGZzdHIpIHtcclxuICAgIGNhc2UgJyMnOlxyXG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3RyLnN1YnN0cigxKSlcclxuICAgIGNhc2UgJy4nOlxyXG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzdHIuc3Vic3RyKDEpKVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHN0cilcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjIflrprlhYPntKDmt7vliqBcXOWIoOmZpFxc5L+u5pS55qC35byP5ZCN56ewXHJcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCDlhYPntKDoioLngrlcclxuICogQHBhcmFtIHsqfSB0eXBlIOexu+Wei1xyXG4gKiBAcGFyYW0geyp9IGNsYXNzTmFtZSDmlrDmoLflvI/lkI3np7BcclxuICogQHBhcmFtIHsqfSBvbGRDbGFzc05hbWUgIOiiq+WIoOmZpOagt+W8j+WQjeensFxyXG4gKi9cclxuY29uc3QgaGFuZGxlQ2xhc3MgPSAoZWxlbWVudCwgdHlwZSwgY2xhc3NOYW1lLCBvbGRDbGFzc05hbWUpID0+IHtcclxuICBsZXQgY2xhc3NWYWwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKVxyXG5cclxuICBpZiAodHlwZSA9PT0gJ2RlbGV0ZScpIHtcclxuICAgIC8vIOWIoOmZpFxyXG4gICAgY2xhc3NWYWwgPSBjbGFzc1ZhbC5yZXBsYWNlKGNsYXNzTmFtZSwgJycpXHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnYWRkJykge1xyXG4gICAgLy8g5aKe5YqgXHJcbiAgICBjbGFzc1ZhbCA9IGNsYXNzVmFsLmNvbmNhdCgnICcgKyBjbGFzc05hbWUpXHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIOabv+aNolxyXG4gICAgY2xhc3NWYWwgPSBjbGFzc1ZhbC5yZXBsYWNlKG9sZENsYXNzTmFtZSwgY2xhc3NOYW1lKVxyXG4gIH1cclxuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc1ZhbClcclxufVxyXG5cclxuY29uc3QgZ2V0SG9zdFVybCA9ICgpID0+IHtcclxuICBsZXQgX2hvc3R1cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3RcclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wb3J0KSB7XHJcbiAgICBfaG9zdHVybCA9IF9ob3N0dXJsICsgJzonICsgd2luZG93LmxvY2F0aW9uLnBvcnRcclxuICB9XHJcblxyXG4gIHJldHVybiBfaG9zdHVybFxyXG59XHJcblxyXG5jb25zdCBnZXRDb29raWUgPSBrZXkgPT4ge1xyXG4gIGxldCBja3MgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJylcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBja3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBrdiA9IGNrc1tpXS5zcGxpdCgnPScpXHJcblxyXG4gICAgaWYgKGt2WzBdID09PSBrZXkpIHJldHVybiBrdlsxXVxyXG4gIH1cclxuICByZXR1cm4gJydcclxufVxyXG4vKipcclxuICog5Yqo5oCB5Yqg6L2954K55Ye75LqL5Lu25aSE55CG5pa55rOVXHJcbiAqIEBwYXJhbSB7Kn0gY29kZSDpnIDopoHmiafooYznmoTmlrnms5XnmoTlrZfnrKbkuLLooajovr5cclxuICovXHJcbmNvbnN0IGxvYWRTY3JpcHRTdHJpbmcgPSBjb2RlID0+IHtcclxuICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JykgLy8g5Yib5bu65LiA5Liqc2NyaXB05qCH562+XHJcblxyXG4gIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCdcclxuICB0cnkge1xyXG4gICAgLy8gSUXmtY/op4jlmajorqTkuLpzY3JpcHTmmK/nibnmrorlhYPntKAs5LiN6IO95YaN6K6/6Zeu5a2Q6IqC54K5O+aKpemUmTtcclxuICAgIHNjcmlwdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb2RlKSlcclxuICB9IGNhdGNoIChleCkge1xyXG4gICAgc2NyaXB0LnRleHQgPSBjb2RlXHJcbiAgfVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KVxyXG59XHJcblxyXG4vKipcclxuICog5Yig6Zmk6ZyA6KaB5pu/5o2i55qEY2xhc3NcclxuICogQHBhcmFtIHsqfSBjbHNOYW1lXHJcbiAqL1xyXG5jb25zdCBkZWxldGVEb21CeUNsYXNzTmFtZSA9IGNsc05hbWUgPT4ge1xyXG4gIGxldCBwYXJhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xzTmFtZSlcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8g5Yig6Zmk5YWD57SgIOWFg+e0oC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKOWFg+e0oCk7XHJcbiAgICBpZiAocGFyYXNbaV0gIT0gbnVsbCkge1xyXG4gICAgICBwYXJhc1tpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBhcmFzW2ldKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vKipcclxuICog5Yig6Zmk6ZyA6KaB5pu/5o2i55qEY2xhc3NcclxuICogQHBhcmFtIHsqfSBjbHNOYW1lXHJcbiAqL1xyXG5jb25zdCBjbGVhcklubmVySHRtbEJ5SWQgPSBpZCA9PiB7XHJcbiAgbGV0IHBhcmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXHJcblxyXG4gIHBhcmFzLmlubmVySFRNTCA9ICcnIC8vIOa4heepulxyXG59XHJcblxyXG4vKlxyXG4gICogYWxlcnQg5by55qGGXHJcbiovXHJcblxyXG5jb25zdCBhbGVydFRpcHMgPSAobXNnKSA9PiB7XHJcbiAgaWYgKCFtc2dbJ2FsZXJ0SWQnXSkge1xyXG4gICAgbXNnWydhbGVydElkJ10gPSAnJ1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgYWxlcnRUZW1wTGlzdCA9ICQoJyMnICsgbXNnWydhbGVydElkJ10pXHJcbiAgICBpZiAoYWxlcnRUZW1wTGlzdCAmJiBhbGVydFRlbXBMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoIW1zZ1snc3JjJ10pIHtcclxuICAgIG1zZ1snc3JjJ10gPSAnamF2YXNjcmlwdDo7J1xyXG4gIH1cclxuXHJcbiAgbGV0IHRpcHMgPSBgPGRpdiBjbGFzcz1cImVsLW1lc3NhZ2UtYm94X193cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZWwtbWVzc2FnZS1ib3hcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImVsLW1lc3NhZ2UtYm94X19oZWFkZXJcIj4ke21zZy50aXRsZX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImVsLW1lc3NhZ2UtYm94X19jb250ZW50XCI+JHttc2cubXNnfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZWwtbWVzc2FnZS1ib3hfX2J0bnNcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWwtbWVzc2FnZS1idG5cIiBpZD1cImVsLW1lc3NhZ2UtYnRuXCI+56Gu5a6aPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YFxyXG4gIGNvbnN0IG1lc3NhZ2VEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlbC1tZXNzYWdlLWJveF9fd3JhcHBlcicpWzBdXHJcbiAgbWVzc2FnZURvbSAmJiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1lc3NhZ2VEb20pXHJcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aXBzKVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbC1tZXNzYWdlLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbWVzc2FnZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VsLW1lc3NhZ2UtYm94X193cmFwcGVyJylbMF1cclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobWVzc2FnZURvbSlcclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5Yqg6L29anPlt6Xlhbfku6PnoIFcclxuICogbm9SZW5kZXJKcyDmmK/lkKbmuLLmn5Nqc+WIsGh0bWzkuK1cclxuICogKi9cclxuZnVuY3Rpb24gbG9hZFNjcmlwdCh1cmwsIGNhbGxiYWNrLCBub1JlbmRlckpzID0gZmFsc2UpIHtcclxuICBpZiAobm9SZW5kZXJKcykge1xyXG4gICAgY2FsbGJhY2sodHJ1ZSlcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JyksXHJcbiAgICBmbiA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9XHJcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xyXG4gIC8vIElFXHJcbiAgaWYgKHNjcmlwdC5yZWFkeVN0YXRlKSB7XHJcbiAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8IHNjcmlwdC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XHJcbiAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGxcclxuICAgICAgICBmbigpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8g5YW25LuW5rWP6KeI5ZmoXHJcbiAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBmbigpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHNjcmlwdC5zcmMgPSB1cmxcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdClcclxufVxyXG5cclxuLy8g5Yig6Zmk5YWD57SgXHJcbi8qKlxyXG4gKiDliKDpmaTlhYPntKBcclxuICogQHBhcmFtIHsqfSBfZWxlbWVudCDooqvliKDpmaTnmoTlhYPntKBcclxuICovXHJcbmNvbnN0IHJlbW92ZUVsZW1lbnQgPSAoX2VsZW1lbnQpID0+IHtcclxuICBjb25zdCBfcGFyZW50RWxlbWVudCA9IF9lbGVtZW50LnBhcmVudE5vZGVcclxuICBpZiAoX3BhcmVudEVsZW1lbnQpIHtcclxuICAgIF9wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKF9lbGVtZW50KVxyXG4gIH1cclxufVxyXG5cclxuLy8g6I635Y+WY3VycmVudCDlkI3np7BcclxuY29uc3QgZ2V0Q3VycmVudE5hbWUgPSAoZGF0YSwgZGVmID0gdHJ1ZSkgPT4ge1xyXG4gIGxldCBuYW1lID0gJydcclxuICBkYXRhLnNvbWUoaXRlbSA9PiB7XHJcbiAgICBpZiAoaXRlbS5jdXJyZW50KSB7XHJcbiAgICAgIG5hbWUgPSBpdGVtLnRpdGxlXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgfSlcclxuICAvLyDlpoLmnpzlgLzkuLrnqbosIGRlZuWIpOaWreaYr+WQpumcgOimgeWPluesrOS4gOS9jeWBmuS4uum7mOiupOWAvFxyXG4gIGlmICghbmFtZSAmJiBkZWYpIG5hbWUgPSBkYXRhWzBdLnRpdGxlXHJcbiAgcmV0dXJuIG5hbWVcclxufVxyXG5cclxuLy8g6K6+572uY3VycmVudCDlkI3np7BcclxuY29uc3Qgc2V0Q3VycmVudE5hbWUgPSAoZGF0YSwgbmFtZSkgPT4ge1xyXG4gIGlmICghbmFtZSkgcmV0dXJuICcnXHJcbiAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaWYgKGl0ZW0udGl0bGUgPT09IG5hbWUpIHtcclxuICAgICAgaXRlbS5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbS5jdXJyZW50ID0gZmFsc2VcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vLyDmlbDnu4Tljrvph41cclxuY29uc3QgYXJyVW5pcXVlID0gKGFycikgPT4ge1xyXG4gIGxldCBvYmogPSB7fVxyXG4gIGxldCByZXMgPSBbXVxyXG4gIGFyci5tYXAoaXRlbSA9PiB7XHJcbiAgICBpZiAoIW9ialtpdGVtLnRpdGxlXSkge1xyXG4gICAgICByZXMucHVzaChpdGVtKVxyXG4gICAgICBvYmpbaXRlbS50aXRsZV0gPSBpdGVtLnRpdGxlXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gcmVzXHJcbn1cclxuXHJcbi8vIOa4suafk+S4u+WvvOiIqu+8iOino+WGs2ll5rWP6KeI5Zmo5YW85a655oCn6Zeu6aKY77yJXHJcbmNvbnN0IHJlbmRlck5hdmJhckRvbSA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IGRvbSA9ICcnXHJcbiAgZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgZG9tICs9IHJuKGl0ZW0sIGluZGV4KVxyXG4gIH0pXHJcbiAgcmV0dXJuIGRvbVxyXG59XHJcblxyXG4vLyDmuLLmn5PmnInkuoznuqfoj5zljZXlkozml6Dkuozoj5zljZXnmoRkb21cclxuY29uc3Qgcm4gPSAoaXRlbSwgaW5kZXgpID0+IHtcclxuICBsZXQgbmFtZSA9IGl0ZW0ubmFtZSB8fCBpdGVtLnRpdGxlXHJcbiAgbGV0IGRvbVxyXG4gIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICBkb20gPSByZW5kZXJBcHBsaWNhdGlvbk5hdmJhclVsTGlzdChpdGVtLmNoaWxkcmVuKVxyXG4gIH1cclxuICBsZXQgcGFyZW50ID0gJydcclxuICBpZiAoZG9tKSB7XHJcbiAgICBwYXJlbnQgPSBgPGxpIGNsYXNzPVwiJHtpdGVtLmN1cnJlbnQgPyAnY3VycmVudCcgOiAnJ31cIiBoYXNDaGlsZHJlbk1vZHVsZXM9XCIke2l0ZW0uaGFzQ2hpbGRyZW5Nb2R1bGVzfVwiIGluZGV4PVwiJHtpbmRleH1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj4ke25hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjdXN0b21fbmF2YmFyX19jb250ZW50X2RhdGFcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPiR7SlNPTi5zdHJpbmdpZnkoaXRlbSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY2hpbGRyZW5cIiBpbmRleD1cIiR7aW5kZXh9XCI+JHtkb219PC91bD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIGBcclxuICB9IGVsc2Uge1xyXG4gICAgcGFyZW50ID0gYDxsaSBjbGFzcz1cIiR7aXRlbS5jdXJyZW50ID8gJ2N1cnJlbnQnIDogJyd9XCIgaGFzQ2hpbGRyZW5Nb2R1bGVzPVwiJHtpdGVtLmhhc0NoaWxkcmVuTW9kdWxlc31cIiBpbmRleD1cIiR7aW5kZXh9XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+JHtuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3VzdG9tX25hdmJhcl9fY29udGVudF9kYXRhXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj4ke0pTT04uc3RyaW5naWZ5KGl0ZW0pfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIGBcclxuICB9XHJcbiAgcmV0dXJuIHBhcmVudFxyXG59XHJcblxyXG4vLyDmuLLmn5NhcHBsaWNhdGlvbuW6lOeUqOS6jOe6p+WvvOiIqu+8iOino+WGs2ll5rWP6KeI5Zmo5YW85a655oCn6Zeu6aKY77yJXHJcbmNvbnN0IHJlbmRlckFwcGxpY2F0aW9uTmF2YmFyID0gKGN1cnJlbnROYW1lKSA9PiB7XHJcbiAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZWJnbmF2LWFwcC1saXN0XCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImViZ25hdi1hcHAtbGlzdC1zZXBhcmF0b3JcIj48L3NwYW4+XHJcbiAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJlYmduYXYtYXBwLWxpc3QtY3VycmVudFwiPlxyXG4gICAgICA8c3BhbiBpZD1cImViZ25hdi1hcHAtY3VycmVudC1uYW1lXCI+JHtjdXJyZW50TmFtZX08L3NwYW4+PGkgY2xhc3M9XCJlYmdpbmF2IGluYXYtZG93blwiPjwvaT5cclxuICAgIDwvYT5cclxuICAgIDx1bCBjbGFzcz1cImNoaWxkcmVuXCIgaWQ9XCJlYmduYXYtYXBwLWxpc3Qtc2VwYXJhdG9yLXVsXCI+PC91bD5cclxuICAgIDwvZGl2PmBcclxufVxyXG5cclxuY29uc3QgcmVuZGVyQXBwbGljYXRpb25OYXZiYXJVbExpc3QgPSAoYXBwTGlzdCkgPT4ge1xyXG4gIGxldCByZXNEb20gPSAnJ1xyXG4gIGFwcExpc3QgJiYgYXBwTGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgcmVzRG9tICs9IGA8bGlcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiJHtpdGVtLmN1cnJlbnQgPyAnY3VycmVudCcgOiAnJ31cIlxyXG4gICAgICAgICAgICAgICAgaW5kZXg9XCIke2luZGV4fVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPiR7aXRlbS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1c3RvbV9uYXZiYXJfX2NvbnRlbnRfZGF0YVwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+JHtKU09OLnN0cmluZ2lmeShpdGVtKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9saT5gXHJcbiAgfSlcclxuICByZXR1cm4gcmVzRG9tXHJcbn1cclxuLy8g5qC55o2u5b2T5YmN6aG16Z2i5qCP55uu5Zyw5Z2A5Yy56YWN5a+86Iiq6auY5Lqu5pi+56S6XHJcbmNvbnN0IGdldEJyb3dzZVVybElkQWN0aXZlTWVudSA9IChuYXZMaXN0KSA9PiB7XHJcbiAgY29uc3QgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2hcclxuICBpZiAoIW5hdkxpc3QubGVuZ3RoIHx8ICFocmVmKSByZXR1cm4gZmFsc2VcclxuICAvKipcclxuICAgKiDojrflj5bliLDlj4LmlbDpg6jliIbvvIzljrvpmaTpl67lj7fvvIzlpoIgP2lkPTImbWVudV9pZD00YlxyXG4gICAqIDHjgIHljrvpmaQ/ID0+IGlkPTImbWVudV9pZD00YlxyXG4gICAqIDLjgIHliIblibLlrZfnrKbkuLIgXCImXCIg5bm25Y+W5pWw57uE5Lit55qE56ys5LiA5L2NID0+IFsnaWQ9MicsICdtZW51X2lkPTRiJ11cclxuICAgKiAz44CB5YiG5Ymy5a2X56ym5LiyIFwiaWQ9MlwiID0+IFsnaWQnLCAnMiddXHJcbiAgKi9cclxuICBjb25zdCBbaWQsIHZhbHVlXSA9IGhyZWYuc2xpY2UoMSkuc3BsaXQoJyYnKVswXS5zcGxpdCgnPScpXHJcbiAgLy8g5Yik5pat5LiL5pyA57uI5ou/5Yiw5piv5ZCm5LulaWTlvIDlpLTnmoTmlbDmja5cclxuICBpZiAoIWlkIHx8IGlkICE9PSAnaWQnIHx8ICF2YWx1ZSkgcmV0dXJuIGZhbHNlXHJcbiAgbmF2TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaWYgKGl0ZW0uaWQgPT09IHZhbHVlKSB7XHJcbiAgICAgIGl0ZW0uY3VycmVudCA9IHRydWVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW0uY3VycmVudCA9IGZhbHNlXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBlYXN5WHNzLFxyXG4gIGxvYWRTdHlsZSxcclxuICB0ZW1wbGF0ZUZpbHRlcixcclxuICB0ZW1wbGF0ZVJlbmRlcixcclxuICAkLFxyXG4gIGhhbmRsZUNsYXNzLFxyXG4gIGdldEhvc3RVcmwsXHJcbiAgZ2V0Q29va2llLFxyXG4gIGRlbGV0ZURvbUJ5Q2xhc3NOYW1lLFxyXG4gIGxvYWRTY3JpcHRTdHJpbmcsXHJcbiAgY2xlYXJJbm5lckh0bWxCeUlkLFxyXG4gIGFsZXJ0VGlwcyxcclxuICBsb2FkU2NyaXB0LFxyXG4gIGxvYWRTdHlsZUNzcyxcclxuICBhcnJVbmlxdWUsXHJcbiAgcmVtb3ZlRWxlbWVudCxcclxuICBnZXRDdXJyZW50TmFtZSxcclxuICBzZXRDdXJyZW50TmFtZSxcclxuICByZW5kZXJOYXZiYXJEb20sXHJcbiAgcmVuZGVyQXBwbGljYXRpb25OYXZiYXIsXHJcbiAgZ2V0QnJvd3NlVXJsSWRBY3RpdmVNZW51LFxyXG4gIHJlbmRlckFwcGxpY2F0aW9uTmF2YmFyVWxMaXN0XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==