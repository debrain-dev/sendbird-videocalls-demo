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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/js/__.js":
/*!*************************!*\
  !*** ./client/js/__.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns-tz */ "./node_modules/date-fns-tz/esm/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable camelcase */


var __ = {
  qs: function qs(node) {
    return document.querySelector(node);
  },
  qsa: function qsa(node) {
    return document.querySelectorAll(node);
  },
  hash: function hash(str) {
    return md5__WEBPACK_IMPORTED_MODULE_0___default()(str);
  },
  post: function post(path, payload) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var headers, token, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.qs('.loading').classList.add('active');

              headers = {
                'Content-Type': 'application/json'
              };
              token = localStorage.xibilla_token;

              if (token) {
                headers['x-token-auth'] = token;
              }

              _context.next = 6;
              return fetch("".concat(path), {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: headers
              });

            case 6:
              response = _context.sent;

              _this.qs('.loading').classList.remove('active');

              return _context.abrupt("return", response.json());

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  deleteReq: function deleteReq(path) {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var headers, token, response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this2.qs('.loading').classList.add('active');

              headers = {};
              token = localStorage.xibilla_token;

              if (token) {
                headers['x-token-auth'] = token;
              }

              _context2.next = 6;
              return fetch("".concat(path), {
                method: 'DELETE',
                headers: headers
              });

            case 6:
              response = _context2.sent;

              _this2.qs('.loading').classList.remove('active');

              return _context2.abrupt("return", response.json());

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  get: function get(path) {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var headers, token, response;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this3.qs('.loading').classList.add('active');

              headers = {};
              token = localStorage.xibilla_token;

              if (token) {
                headers['x-token-auth'] = token;
              }

              _context3.next = 6;
              return fetch("".concat(path), {
                method: 'GET',
                headers: headers
              });

            case 6:
              response = _context3.sent;

              _this3.qs('.loading').classList.remove('active');

              return _context3.abrupt("return", response.json());

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  html: function html(container, content) {
    document.querySelector(container).innerHTML = content;
  },
  date: function date(data) {
    var date = Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_1__["utcToZonedTime"])(new Date(data), 'America/Bogota');
    return Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_1__["format"])(date, 'MMM d, yyyy. h:mm aaaa');
  },
  dob: function dob(data) {
    var date = Date.parse(data.replaceAll('/', '-'));
    if (date) return Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_1__["format"])(date, 'MMM d, yyyy');
    return data;
  },
  number: function number(a) {
    return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  serialize: function serialize(selector) {
    var output = {};

    var _form = this.qs(selector);

    _form.querySelectorAll('input, select, textarea').forEach(function (el) {
      output[el.getAttribute('name')] = el.value;
    });

    return output;
  },
  email: function email(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (__);

/***/ }),

/***/ "./client/js/index.js":
/*!****************************!*\
  !*** ./client/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var sendbird_calls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sendbird-calls */ "./node_modules/sendbird-calls/SendBirdCall.min.js");
/* harmony import */ var sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sendbird_calls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./__ */ "./client/js/__.js");
function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"calling_element\">\n        <span class=\"label\">Incoming call from ", "...</span>\n        <div class=\"image\" style=\"background-color: ", ";\">\n          <img src=\"/img/", "\" alt=\"\">\n        </div>\n        <div class=\"buttons\">\n          <a class=\"hangup\" @click=", ">\n            <i class=\"mdi mdi-phone-hangup\"></i>\n          </a>\n          <a class=\"pickup\" @click=", ">\n            <i class=\"mdi mdi-phone\"></i>\n          </a>\n        </div>\n      </div>\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"calling_element\">\n        <span class=\"label\">Calling ", "...</span>\n        <div class=\"image\" style=\"background-color: ", ";\">\n          <img src=\"/img/", "\" alt=\"\">\n        </div>\n        <a class=\"hangup\" @click=", ">\n          <i class=\"mdi mdi-phone-hangup\"></i>\n        </a>\n      </div>\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      <section id=\"hero\">\n        <h1>Sendbird Video Calls Playground</h1>\n        <ul>\n          <li class=\"", "\"><img src=\"/img/person_1.svg\" /> <span> Hi, Ryan! - <a @click=\"", "\">Logout</a></span></li>\n          <li class=\"", "\"><img src=\"/img/person_2.svg\" /> <span> Hello, Victor! - <a @click=\"", "\">Logout</a></span></li>\n        </ul>\n      </section>\n\n      ", "\n      ", "\n      ", "\n      ", "\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        <section id=\"ringing_block\">\n          ", "\n        </section>\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        <section id=\"calling_block\">\n          ", "\n        </section>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        <section id=\"call_prompt\">\n          <a class=\"call_cta ", "\" @click=", ">\n            <span class=\"label\">Call ", "</span>\n            <img src=\"/img/person_", ".svg\" />\n          </a>\n\n        </section>\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        <section id=\"menu\">\n          <p>\n            Select your persona:\n          </p>\n          <ul>\n            <li>\n              <a @click=", "><img src=\"/img/person_1.svg\" alt=\"\"></a>\n              <span class=\"label\">Ryan</span>\n            </li>\n            <li>\n              <a @click=", "><img src=\"/img/person_2.svg\" alt=\"\"></a>\n              <span class=\"label\">Victor</span>\n            </li>\n          </ul>\n        </section>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint-disable camelcase */



window.app = {
  init: function init() {
    var _this = this;

    if (this.isSafari()) {
      ___WEBPACK_IMPORTED_MODULE_2__["default"].qs('#remote_video').setAttribute('controls', true);
    }

    this.config = {};
    this.config.user = '';
    this.config.status = 'logout';
    this.config.sb_app_id = '9E169047-FDA8-477E-80B2-8291C060F3B5';
    this.config.sb_token = 'de86e8fc33b0a8c39eff892d1f2810e91b7e6f64';
    this.dialParams = {
      userId: '',
      isVideoCall: true,
      callOption: {
        localMediaView: ___WEBPACK_IMPORTED_MODULE_2__["default"].qs('#local_video'),
        remoteMediaView: ___WEBPACK_IMPORTED_MODULE_2__["default"].qs('#remote_video'),
        audioEnabled: true,
        videoEnabled: true
      }
    };
    this.acceptParams = {
      callOption: {
        localMediaView: ___WEBPACK_IMPORTED_MODULE_2__["default"].qs('#local_video'),
        remoteMediaView: ___WEBPACK_IMPORTED_MODULE_2__["default"].qs('#remote_video'),
        audioEnabled: true,
        videoEnabled: true
      }
    }; // sendbird calls

    sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default.a.init(this.config.sb_app_id);
    sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default.a.addDirectCallSound(sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default.a.SoundType.DIALING, 'https://nyc3.digitaloceanspaces.com/archeio/sdk/common/audio/dialing.mp3');
    sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default.a.addDirectCallSound(sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default.a.SoundType.RINGING, 'https://nyc3.digitaloceanspaces.com/archeio/sdk/common/audio/ringing.mp3');
    sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default.a.addDirectCallSound(sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default.a.SoundType.RECONNECTING, 'https://nyc3.digitaloceanspaces.com/archeio/sdk/common/audio/reconnecting.mp3');
    sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default.a.addDirectCallSound(sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default.a.SoundType.RECONNECTED, 'https://nyc3.digitaloceanspaces.com/archeio/sdk/common/audio/reconnected.mp3');
    sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default.a.addListener(1, {
      onRinging: function onRinging(_call) {
        _this.call = _call;

        _this.handleIncomingCall();
      }
    });
    this.tpl();
  },
  isSafari: function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  },
  pickPersona: function pickPersona(persona, e) {
    var _this2 = this;

    e.preventDefault();
    this.config.user = persona;
    this.tpl();
    var authOption = {
      userId: persona,
      accessToken: this.config.sb_token,
      nickname: persona.charAt(0).toUpperCase() + persona.slice(1)
    };
    sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate(authOption, function (result, error) {
      if (error) {
        console.log(error);
      } else {
        sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default.a.connectWebSocket().then(function () {
          _this2.config.status = 'ready';

          _this2.tpl();

          console.log('socket connected');
        })["catch"](function () {
          console.log('socked connection error');
        });
      }
    });
  },
  logout: function logout(e) {
    e.preventDefault();
    this.config.user = '';
    this.config.status = 'logout';
    this.tpl();
  },
  onRemoteVideoSettingsChanged: function onRemoteVideoSettingsChanged(_call) {
    console.log('Information: remote video settings changed!', _call);
  },
  startCall: function startCall(e, callee) {
    var _this3 = this;

    e.preventDefault();
    this.usemedia = sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default.a.useMedia({
      audio: true,
      video: true
    });
    this.dialParams.userId = callee;
    this.call = sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default.a.dial(this.dialParams, function (_call, error) {
      if (error) {
        console.log('Information: there was an error making the call');
      }

      console.log('Information: call success!', _call);
      _this3.config.status = 'calling';

      _this3.tpl();
    });
    this.attachCallEvents();
  },
  handleIncomingCall: function handleIncomingCall() {
    this.usemedia = sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default.a.useMedia({
      audio: true,
      video: true
    });
    this.config.status = 'ringing';
    this.attachCallEvents();
    this.tpl();
  },
  attachCallEvents: function attachCallEvents() {
    var _this4 = this;

    this.call.onEstablished = function (__call) {
      console.log('Information: call stablished!', __call);
    };

    this.call.onConnected = function (__call) {
      console.log('Information: call connected!', __call);
      _this4.config.status = 'ongoing';

      _this4.tpl();

      _this4.call.unmuteMicrophone();

      ___WEBPACK_IMPORTED_MODULE_2__["default"].qs('#ongoing_call').classList.add('active');
    };

    this.call.onEnded = function (__call) {
      console.log('Information: call ended!', __call);

      ___WEBPACK_IMPORTED_MODULE_2__["default"].qs('#ongoing_call').classList.remove('active');

      _this4.config.status = 'ready';

      _this4.tpl();

      setTimeout(function () {
        // stop the microphone and camera
        var video = document.querySelectorAll('video');
        video.forEach(function (v) {
          console.log('entro');
          var mediaStream = v.srcObject;
          var tracks = mediaStream.getTracks();
          tracks.forEach(function (track) {
            return track.stop();
          });
          delete _this4.call;
        });
      }, 3000);
    };

    this.call.onRemoteAudioSettingsChanged = function (__call) {
      console.log('Information: remote audio settings changed!', __call);
    };

    this.call.onRemoteVideoSettingsChanged = function (__call) {
      console.log('Information: remote video settings changed!', __call);
    };
  },
  pickupCall: function pickupCall(e) {
    e.preventDefault();
    this.usemedia = sendbird_calls__WEBPACK_IMPORTED_MODULE_1___default.a.useMedia({
      audio: true,
      video: true
    });
    this.call.accept(this.acceptParams);
  },
  endCall: function endCall() {
    this.endCallStatic();
  },
  endCallStatic: function endCallStatic() {
    this.config.status = 'ready';
    this.call.end();
    this.tpl();
  },
  muteStatic: function muteStatic() {
    this.call.muteMicrophone();

    ___WEBPACK_IMPORTED_MODULE_2__["default"].qs('a.mute').classList.remove('active');

    ___WEBPACK_IMPORTED_MODULE_2__["default"].qs('a.unmute').classList.add('active');
  },
  unmuteStatic: function unmuteStatic() {
    this.call.unmuteMicrophone();

    ___WEBPACK_IMPORTED_MODULE_2__["default"].qs('a.unmute').classList.remove('active');

    ___WEBPACK_IMPORTED_MODULE_2__["default"].qs('a.mute').classList.add('active');
  },
  muteVideoStatic: function muteVideoStatic() {
    this.call.stopVideo();

    ___WEBPACK_IMPORTED_MODULE_2__["default"].qs('a.camera').classList.remove('active');

    ___WEBPACK_IMPORTED_MODULE_2__["default"].qs('a.no-camera').classList.add('active');
  },
  unmuteVideoStatic: function unmuteVideoStatic() {
    this.call.startVideo();

    ___WEBPACK_IMPORTED_MODULE_2__["default"].qs('a.no-camera').classList.remove('active');

    ___WEBPACK_IMPORTED_MODULE_2__["default"].qs('a.camera').classList.add('active');
  },
  tpl: function tpl() {
    var _this5 = this;

    var _this$config = this.config,
        user = _this$config.user,
        status = _this$config.status;
    console.log({
      status: status
    });
    var menu = '';

    if (status === 'logout') {
      menu = Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), function (e) {
        return _this5.pickPersona('ryan', e);
      }, function (e) {
        return _this5.pickPersona('victor', e);
      });
    }

    var call_prompt = '';
    var callee = user === 'victor' ? 'ryan' : 'victor';

    if (status === 'ready') {
      call_prompt = Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), user === 'victor' ? 'ryan' : 'victor', function (e) {
        return _this5.startCall(e, callee);
      }, user === 'victor' ? 'Ryan' : 'Victor', user === 'victor' ? '1' : '2');
    }

    var calling_block = '';

    if (status === 'calling') {
      calling_block = Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), this.tplCalling(this.dialParams.userId));
    }

    var ringing_block = '';

    if (status === 'ringing') {
      ringing_block = Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4(), this.tplRinging(this.call._caller.userId));
    }

    var template = Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5(), user === 'ryan' ? 'active' : '', function (e) {
      _this5.logout(e);
    }, user === 'victor' ? 'active' : '', function (e) {
      _this5.logout(e);
    }, menu, call_prompt, calling_block, ringing_block);
    Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["render"])(template, ___WEBPACK_IMPORTED_MODULE_2__["default"].qs('.wrapper'));
  },
  tplCalling: function tplCalling(user) {
    var _this6 = this;

    var name;
    var image;
    var color;

    if (user === 'ryan') {
      name = 'Ryan';
      image = 'person_1.svg';
      color = 'rgb(255, 187, 0)';
    }

    if (user === 'victor') {
      name = 'Victor';
      image = 'person_2.svg';
      color = 'hotpink';
    }

    return Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6(), name, color, image, function (e) {
      return _this6.endCall(e);
    });
  },
  tplRinging: function tplRinging(user) {
    var _this7 = this;

    var name;
    var image;
    var color;

    if (user === 'ryan') {
      name = 'Ryan';
      image = 'person_1.svg';
      color = 'rgb(255, 187, 0)';
    }

    if (user === 'victor') {
      name = 'Victor';
      image = 'person_2.svg';
      color = 'hotpink';
    }

    return Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject7(), name, color, image, function (e) {
      return _this7.endCall(e);
    }, function (e) {
      return _this7.pickupCall(e);
    });
  }
};
window.app.init();

/***/ }),

/***/ "./node_modules/charenc/charenc.js":
/*!*****************************************!*\
  !*** ./node_modules/charenc/charenc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ "./node_modules/crypt/crypt.js":
/*!*************************************!*\
  !*** ./node_modules/crypt/crypt.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ "./node_modules/date-fns-tz/esm/_lib/tzIntlTimeZoneName/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/_lib/tzIntlTimeZoneName/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tzIntlTimeZoneName; });
/**
 * Returns the formatted time zone name of the provided `timeZone` or the current
 * system time zone if omitted, accounting for DST according to the UTC value of
 * the date.
 */
function tzIntlTimeZoneName(length, date, options) {
  var dtf = getDTF(length, options.timeZone, options.locale)
  return dtf.formatToParts ? partsTimeZone(dtf, date) : hackyTimeZone(dtf, date)
}

function partsTimeZone(dtf, date) {
  var formatted = dtf.formatToParts(date)
  return formatted[formatted.length - 1].value
}

function hackyTimeZone(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, '')
  var tzNameMatch = / [\w-+ ]+$/.exec(formatted)
  return tzNameMatch ? tzNameMatch[0].substr(1) : ''
}

// If a locale has been provided `en-US` is used as a fallback in case it is an
// invalid locale, otherwise the locale is left undefined to use the system locale.
function getDTF(length, timeZone, locale) {
  if (locale && !locale.code) {
    throw new Error(
      "date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`"
    )
  }
  return new Intl.DateTimeFormat(locale ? [locale.code, 'en-US'] : undefined, {
    timeZone: timeZone,
    timeZoneName: length
  })
}


/***/ }),

/***/ "./node_modules/date-fns-tz/esm/_lib/tzParseTimezone/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/_lib/tzParseTimezone/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tzParseTimezone; });
/* harmony import */ var _tzTokenizeDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tzTokenizeDate/index.js */ "./node_modules/date-fns-tz/esm/_lib/tzTokenizeDate/index.js");


var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000

var patterns = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/,
  timezoneIANA: /(UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
}

// Parse various time zone offset formats to an offset in milliseconds
function tzParseTimezone(timezoneString, date) {
  var token
  var absoluteOffset

  // Z
  token = patterns.timezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  var hours

  // ±hh
  token = patterns.timezoneHH.exec(timezoneString)
  if (token) {
    hours = parseInt(token[2], 10)

    if (!validateTimezone(hours)) {
      return NaN
    }

    absoluteOffset = hours * MILLISECONDS_IN_HOUR
    return token[1] === '+' ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = patterns.timezoneHHMM.exec(timezoneString)
  if (token) {
    hours = parseInt(token[2], 10)
    var minutes = parseInt(token[3], 10)

    if (!validateTimezone(hours, minutes)) {
      return NaN
    }

    absoluteOffset =
      hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE
    return token[1] === '+' ? -absoluteOffset : absoluteOffset
  }

  // IANA time zone
  token = patterns.timezoneIANA.exec(timezoneString)
  if (token) {
    // var [fYear, fMonth, fDay, fHour, fMinute, fSecond] = tzTokenizeDate(date, timezoneString)
    var tokens = Object(_tzTokenizeDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date, timezoneString)
    var asUTC = Date.UTC(
      tokens[0],
      tokens[1] - 1,
      tokens[2],
      tokens[3],
      tokens[4],
      tokens[5]
    )
    var timestampWithMsZeroed = date.getTime() - (date.getTime() % 1000)
    return -(asUTC - timestampWithMsZeroed)
  }

  return 0
}

function validateTimezone(hours, minutes) {
  if (minutes != null && (minutes < 0 || minutes > 59)) {
    return false
  }

  return true
}


/***/ }),

/***/ "./node_modules/date-fns-tz/esm/_lib/tzTokenizeDate/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/_lib/tzTokenizeDate/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tzTokenizeDate; });
/**
 * Returns the [year, month, day, hour, minute, seconds] tokens of the provided
 * `date` as it will be rendered in the `timeZone`.
 */
function tzTokenizeDate(date, timeZone) {
  var dtf = getDateTimeFormat(timeZone)
  return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date)
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date)
  var filled = []
  for (var i = 0; i < formatted.length; i++) {
    var pos = typeToPos[formatted[i].type]

    if (pos >= 0) {
      filled[pos] = parseInt(formatted[i].value, 10)
    }
  }
  return filled
}

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, '')
  var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted)
  // var [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed
  // return [fYear, fMonth, fDay, fHour, fMinute, fSecond]
  return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]]
}

// Get a cached Intl.DateTimeFormat instance for the IANA `timeZone`. This can be used
// to get deterministic local date/time output according to the `en-US` locale which
// can be used to extract local time parts as necessary.
var dtfCache = {}
function getDateTimeFormat(timeZone) {
  if (!dtfCache[timeZone]) {
    // New browsers use `hourCycle`, IE and Chrome <73 does not support it and uses `hour12`
    var testDateFormatted = new Intl.DateTimeFormat('en-US', {
      hour12: false,
      timeZone: 'America/New_York',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(new Date('2014-06-25T04:00:00.123Z'))
    var hourCycleSupported =
      testDateFormatted === '06/25/2014, 00:00:00' ||
      testDateFormatted === '‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00'

    dtfCache[timeZone] = hourCycleSupported
      ? new Intl.DateTimeFormat('en-US', {
          hour12: false,
          timeZone: timeZone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      : new Intl.DateTimeFormat('en-US', {
          hourCycle: 'h23',
          timeZone: timeZone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
  }
  return dtfCache[timeZone]
}


/***/ }),

/***/ "./node_modules/date-fns-tz/esm/format/formatters/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/format/formatters/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_tzIntlTimeZoneName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/tzIntlTimeZoneName */ "./node_modules/date-fns-tz/esm/_lib/tzIntlTimeZoneName/index.js");
/* harmony import */ var _lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/tzParseTimezone */ "./node_modules/date-fns-tz/esm/_lib/tzParseTimezone/index.js");



var MILLISECONDS_IN_MINUTE = 60 * 1000

var formatters = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, localize, options) {
    var originalDate = options._originalDate || date
    var timezoneOffset = options.timeZone
      ? Object(_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_1__["default"])(options.timeZone, originalDate) / MILLISECONDS_IN_MINUTE
      : originalDate.getTimezoneOffset()

    if (timezoneOffset === 0) {
      return 'Z'
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset)

      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX': // Hours and minutes without `:` delimeter
        return formatTimezone(timezoneOffset)

      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, localize, options) {
    var originalDate = options._originalDate || date
    var timezoneOffset = options.timeZone
      ? Object(_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_1__["default"])(options.timeZone, originalDate) / MILLISECONDS_IN_MINUTE
      : originalDate.getTimezoneOffset()

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset)

      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx': // Hours and minutes without `:` delimeter
        return formatTimezone(timezoneOffset)

      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (GMT)
  O: function(date, token, localize, options) {
    var originalDate = options._originalDate || date
    var timezoneOffset = options.timeZone
      ? Object(_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_1__["default"])(options.timeZone, originalDate) / MILLISECONDS_IN_MINUTE
      : originalDate.getTimezoneOffset()

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':')
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (specific non-location)
  z: function(date, token, localize, options) {
    var originalDate = options._originalDate || date

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return Object(_lib_tzIntlTimeZoneName__WEBPACK_IMPORTED_MODULE_0__["default"])('short', originalDate, options)
      // Long
      case 'zzzz':
      default:
        return Object(_lib_tzIntlTimeZoneName__WEBPACK_IMPORTED_MODULE_0__["default"])('long', originalDate, options)
    }
  }
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : ''
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return sign + output
}

function formatTimezone(offset, dirtyDelimeter) {
  var delimeter = dirtyDelimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2)
  var minutes = addLeadingZeros(absOffset % 60, 2)
  return sign + hours + delimeter + minutes
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimeter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+'
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2)
  }
  return formatTimezone(offset, dirtyDelimeter)
}

function formatTimezoneShort(offset, dirtyDelimeter) {
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  if (minutes === 0) {
    return sign + String(hours)
  }
  var delimeter = dirtyDelimeter || ''
  return sign + String(hours) + delimeter + addLeadingZeros(minutes, 2)
}

/* harmony default export */ __webpack_exports__["default"] = (formatters);


/***/ }),

/***/ "./node_modules/date-fns-tz/esm/format/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/format/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
/* harmony import */ var date_fns_esm_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/esm/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatters */ "./node_modules/date-fns-tz/esm/format/formatters/index.js");
/* harmony import */ var _toDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate */ "./node_modules/date-fns-tz/esm/toDate/index.js");




var tzFormattingTokensRegExp = /([xXOz]+)|''|'(''|[^'])+('|$)/g

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 8     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 8     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Su            | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aaa  | AM, PM                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | PDT, EST, CEST                    | 6     |
 * |                                 | zzzz    | Pacific Daylight Time             | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 05/29/1453                        | 7     |
 * |                                 | PP      | May 29, 1453                      | 7     |
 * |                                 | PPP     | May 29th, 1453                    | 7     |
 * |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
 * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are created using the Intl browser API. The output is determined by the
 *    preferred standard of the current locale (en-US by default) which may not always give the expected result.
 *    For this reason it is recommended to supply a `locale` in the format options when formatting a time zone name.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. These tokens are often confused with others. See: https://git.io/fxCyr
 *
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole
 *   library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard
 *   #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). See [this
 *   post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link
 *   https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See
 *   [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {Boolean} [options.awareOfUnicodeTokens=false] - if true, allows usage of Unicode tokens causes confusion:
 *   - Some of the day of year tokens (`D`, `DD`) that are confused with the day of month tokens (`d`, `dd`).
 *   - Some of the local week-numbering year tokens (`YY`, `YYYY`) that are confused with the calendar year tokens
 *   (`yy`, `yyyy`). See: https://git.io/fxCyr
 * @param {String} [options.timeZone=''] - used to specify the IANA time zone offset of a date String.
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.awareOfUnicodeTokens` must be set to `true` to use `XX` token; see:
 *   https://git.io/fxCyr
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/esm/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = String(dirtyFormatStr)
  var options = dirtyOptions || {}

  var matches = formatStr.match(tzFormattingTokensRegExp)
  if (matches) {
    var date = Object(_toDate__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, options)
    formatStr = matches.reduce(function(result, token) {
      return token[0] === "'"
        ? result
        : result.replace(
            token,
            "'" + _formatters__WEBPACK_IMPORTED_MODULE_1__["default"][token[0]](date, token, null, options) + "'"
          )
    }, formatStr)
  }

  return Object(date_fns_esm_format__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, formatStr, options)
}


/***/ }),

/***/ "./node_modules/date-fns-tz/esm/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns-tz/esm/index.js ***!
  \***********************************************/
/*! exports provided: format, toDate, utcToZonedTime, zonedTimeToUtc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format/index.js */ "./node_modules/date-fns-tz/esm/format/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _format_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate/index.js */ "./node_modules/date-fns-tz/esm/toDate/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _utcToZonedTime_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utcToZonedTime/index.js */ "./node_modules/date-fns-tz/esm/utcToZonedTime/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcToZonedTime", function() { return _utcToZonedTime_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _zonedTimeToUtc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zonedTimeToUtc/index.js */ "./node_modules/date-fns-tz/esm/zonedTimeToUtc/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zonedTimeToUtc", function() { return _zonedTimeToUtc_index_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

// This file is generated automatically by `scripts/build/indices.js`. Please, don't change it.







/***/ }),

/***/ "./node_modules/date-fns-tz/esm/toDate/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/toDate/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toDate; });
/* harmony import */ var date_fns_esm_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/esm/_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var date_fns_esm_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/tzParseTimezone */ "./node_modules/date-fns-tz/esm/_lib/tzParseTimezone/index.js");




var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,
  timeZoneDelimeter: /[Z ]/i,

  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/, // 0 additional digits
    /^([+-]\d{3})$/, // 1 additional digit
    /^([+-]\d{4})$/ // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/, // 0 additional digits
    /^([+-]\d{5})/, // 1 additional digit
    /^([+-]\d{6})/ // 2 additional digits
  ],

  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,

  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

  // timezone tokens (to identify the presence of a tz)
  timezone: /([Z+-].*| UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
}

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 * If the function cannot parse the string or the values are invalid, it returns Invalid Date.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @param {String} [options.timeZone=''] - used to specify the IANA time zone offset of a date String.
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = toDate('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = toDate('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function toDate(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present'
    )
  }

  if (argument === null) {
    return new Date(NaN)
  }

  var options = dirtyOptions || {}

  var additionalDigits =
    options.additionalDigits == null
      ? DEFAULT_ADDITIONAL_DIGITS
      : Object(date_fns_esm_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.additionalDigits)
  if (
    additionalDigits !== 2 &&
    additionalDigits !== 1 &&
    additionalDigits !== 0
  ) {
    throw new RangeError('additionalDigits must be 0, 1 or 2')
  }

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === 'object' &&
      Object.prototype.toString.call(argument) === '[object Date]')
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (
    typeof argument === 'number' ||
    Object.prototype.toString.call(argument) === '[object Number]'
  ) {
    return new Date(argument)
  } else if (
    !(
      typeof argument === 'string' ||
      Object.prototype.toString.call(argument) === '[object String]'
    )
  ) {
    return new Date(NaN)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (isNaN(date)) {
    return new Date(NaN)
  }

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)

      if (isNaN(time)) {
        return new Date(NaN)
      }
    }

    if (dateStrings.timezone || options.timeZone) {
      offset = Object(_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_2__["default"])(
        dateStrings.timezone || options.timeZone,
        new Date(timestamp + time)
      )
      if (isNaN(offset)) {
        return new Date(NaN)
      }
      offset = Object(_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_2__["default"])(
        dateStrings.timezone || options.timeZone,
        new Date(timestamp + time + offset)
      )
      if (isNaN(offset)) {
        return new Date(NaN)
      }
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = Object(date_fns_esm_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(timestamp + time))
      offset = Object(date_fns_esm_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
        new Date(timestamp + time + offset)
      )
    }

    return new Date(timestamp + time + offset)
  } else {
    return new Date(NaN)
  }
}

function splitDateString(dateString) {
  var dateStrings = {}
  var array = dateString.split(patterns.dateTimeDelimeter)
  var timeString

  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
    dateStrings.timezone = array[2]
    if (patterns.timeZoneDelimeter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimeter)[0]
      timeString = dateString.substr(dateStrings.date.length, dateString.length)
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits]
  var patternYYYYY = patterns.YYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = patterns.MM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1

    if (!validateDate(year, month)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = patterns.DDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)

    if (!validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // yyyy-MM-dd or YYYYMMDD
  token = patterns.MMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)

    if (!validateDate(year, month, day)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = patterns.Www.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1

    if (!validateWeekDate(year, week)) {
      return new Date(NaN)
    }

    return dayOfISOWeekYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = patterns.WwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1

    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN)
    }

    return dayOfISOWeekYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime(timeString) {
  var token
  var hours
  var minutes

  // hh
  token = patterns.HH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))

    if (!validateTime(hours)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = patterns.HHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))

    if (!validateTime(hours, minutes)) {
      return NaN
    }

    return (
      (hours % 24) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE
    )
  }

  // hh:mm:ss or hhmmss
  token = patterns.HHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))

    if (!validateTime(hours, minutes, seconds)) {
      return NaN
    }

    return (
      (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
    )
  }

  // Invalid ISO-formatted time
  return null
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoWeekYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

// Validation functions

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}

function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false
  }

  if (date != null) {
    if (date < 1) {
      return false
    }

    var isLeapYear = isLeapYearIndex(year)
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false
    }
  }

  return true
}

function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false
  }

  var isLeapYear = isLeapYearIndex(year)
  if (isLeapYear && dayOfYear > 366) {
    return false
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false
  }

  return true
}

function validateWeekDate(year, week, day) {
  if (week < 0 || week > 52) {
    return false
  }

  if (day != null && (day < 0 || day > 6)) {
    return false
  }

  return true
}

function validateTime(hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false
  }

  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false
  }

  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false
  }

  return true
}


/***/ }),

/***/ "./node_modules/date-fns-tz/esm/utcToZonedTime/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/utcToZonedTime/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return utcToZonedTime; });
/* harmony import */ var _lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/tzParseTimezone */ "./node_modules/date-fns-tz/esm/_lib/tzParseTimezone/index.js");
/* harmony import */ var date_fns_esm_subMilliseconds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/esm/subMilliseconds */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate */ "./node_modules/date-fns-tz/esm/toDate/index.js");




/**
 * @name utcToZonedTime
 * @category Time Zone Helpers
 * @summary Get a date/time representing local time in a given time zone from the UTC date
 *
 * @description
 * Returns a date instance with values representing the local time in the time zone
 * specified of the UTC time from the date provided. In other words, when the new date
 * is formatted it will show the equivalent hours in the target time zone regardless
 * of the current system time zone.
 *
 * @param {Date|String|Number} date - the date with the relevant UTC time
 * @param {String} timeZone - the time zone to get local time for, can be an offset or IANA time zone
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the equivalent time in the time zone
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // In June 10am UTC is 6am in New York (-04:00)
 * const result = utcToZonedTime('2014-06-25T10:00:00.000Z', 'America/New_York')
 * //=> Jun 25 2014 06:00:00
 */
function utcToZonedTime(dirtyDate, timeZone, options) {
  var date = Object(_toDate__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, options)

  // This date has the UTC time values of the input date at the system time zone
  var utcDate = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  )
  // We just need to apply the offset indicated by the time zone to this localized date
  var offsetMilliseconds = Object(_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_0__["default"])(timeZone, utcDate)

  return offsetMilliseconds
    ? Object(date_fns_esm_subMilliseconds__WEBPACK_IMPORTED_MODULE_1__["default"])(utcDate, offsetMilliseconds)
    : utcDate
}


/***/ }),

/***/ "./node_modules/date-fns-tz/esm/zonedTimeToUtc/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/zonedTimeToUtc/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return zonedTimeToUtc; });
/* harmony import */ var date_fns_esm_lib_cloneObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/esm/_lib/cloneObject */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var date_fns_esm_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/esm/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _toDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate */ "./node_modules/date-fns-tz/esm/toDate/index.js");




/**
 * @name zonedTimeToUtc
 * @category Time Zone Helpers
 * @summary Get the UTC date/time from a date representing local time in a given time zone
 *
 * @description
 * Returns a date instance with the UTC time of the provided date of which the values
 * represented the local time in the time zone specified. In other words, if the input
 * date represented local time in time time zone, the timestamp of the output date will
 * give the equivalent UTC of that local time regardless of the current system time zone.
 *
 * @param {Date|String|Number} date - the date with values representing the local time
 * @param {String} timeZone - the time zone of this local time, can be an offset or IANA time zone
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the equivalent time in the time zone
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // In June 10am in Los Angeles is 5pm UTC
 * const result = zonedTimeToUtc(new Date(2014, 5, 25, 10, 0, 0), 'America/Los_Angeles')
 * //=> 2014-06-25T17:00:00.000Z
 */
function zonedTimeToUtc(date, timeZone, options) {
  if (date instanceof Date) {
    date = Object(date_fns_esm_format__WEBPACK_IMPORTED_MODULE_1__["default"])(date, "yyyy-MM-dd'T'HH:mm:ss.SSS")
  }
  var extendedOptions = Object(date_fns_esm_lib_cloneObject__WEBPACK_IMPORTED_MODULE_0__["default"])(options)
  extendedOptions.timeZone = timeZone
  return Object(_toDate__WEBPACK_IMPORTED_MODULE_2__["default"])(date, extendedOptions)
}


/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addLeadingZeros; });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assign; });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cloneObject; });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(dirtyObject) {
  return Object(_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dirtyObject);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
   * |  d  | Day of month                   |  D  | Day of year                    |
   * |  e  | Local day of week              |  E  | Day of week                    |
   * |  f  |                                |  F* | Day of week in month           |
   * |  g* | Modified Julian day            |  G  | Era                            |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  i! | ISO day of week                |  I! | ISO week of year               |
   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
   * |  m  | Minute                         |  M  | Month                          |
   * |  n  |                                |  N  |                                |
   * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
   * |  p! | Long localized time            |  P! | Long localized date            |
   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
   * |  u  | Extended year                  |  U* | Cyclic year                    |
   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
   * |  w  | Local week of year             |  W* | Week of month                  |
   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
   * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   *
   * Letters marked by ! are non-standard, but implemented by date-fns:
   * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
   *   i.e. 7 for Sunday, 1 for Monday, etc.
   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
   *   `R` is supposed to be used in conjunction with `I` and `i`
   *   for universal ISO week-numbering date, whereas
   *   `Y` is supposed to be used in conjunction with `w` and `e`
   *   for week-numbering date specific to the locale.
   * - `P` is long localized date format
   * - `p` is long localized time format
   */

};
var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = Object(_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = Object(_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = Object(_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = Object(_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = Object(_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ __webpack_exports__["default"] = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ __webpack_exports__["default"] = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTimezoneOffsetInMilliseconds; });
var MILLISECONDS_IN_MINUTE = 60000;

function getDateMillisecondsPart(date) {
  return date.getTime() % MILLISECONDS_IN_MINUTE;
}
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */


function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
  date.setSeconds(0, 0);
  var hasNegativeUTCOffset = baseTimezoneOffset > 0;
  var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset ? (MILLISECONDS_IN_MINUTE + getDateMillisecondsPart(date)) % MILLISECONDS_IN_MINUTE : getDateMillisecondsPart(date);
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUTCDayOfYear; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUTCISOWeek; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var diff = Object(_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date).getTime() - Object(_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUTCISOWeekYear; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = Object(_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = Object(_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUTCWeek; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var diff = Object(_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options).getTime() - Object(_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUTCWeekYear; });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = Object(_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = Object(_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/*! exports provided: isProtectedDayOfYearToken, isProtectedWeekYearToken, throwProtectedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProtectedDayOfYearToken", function() { return isProtectedDayOfYearToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProtectedWeekYearToken", function() { return isProtectedWeekYearToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwProtectedError", function() { return throwProtectedError; });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return requiredArgs; });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfUTCISOWeek; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfUTCISOWeekYear; });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var year = Object(_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = Object(_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfUTCWeek; });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfUTCWeekYear; });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.firstWeekContainsDate);
  var year = Object(_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = Object(_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toInteger; });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addMilliseconds; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var timestamp = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aaa  | AM, PM                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 05/29/1453                        | 7     |
 * |                                 | PP      | May 29, 1453                      | 7     |
 * |                                 | PPP     | May 29th, 1453                    | 7     |
 * |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
 * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!Object(_isValid_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = Object(_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_5__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_4__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && Object(_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_7__["isProtectedWeekYearToken"])(substring)) {
        Object(_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_7__["throwProtectedError"])(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && Object(_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_7__["isProtectedDayOfYearToken"])(substring)) {
        Object(_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_7__["throwProtectedError"])(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isValid; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  return !isNaN(date);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildFormatLongFn; });
function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildLocalizeFn; });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildMatchFn; });
function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildMatchPatternFn; });
function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatDistance; });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: Object(_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: Object(_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: Object(_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatRelative; });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.

};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: Object(_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return subMilliseconds; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toDate; });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/lit-html/lib/default-template-processor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lit-html/lib/default-template-processor.js ***!
  \*****************************************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === '@') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
        }
        const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
        return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options) {
        return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();
//# sourceMappingURL=default-template-processor.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/directive.js":
/*!************************************************!*\
  !*** ./node_modules/lit-html/lib/directive.js ***!
  \************************************************/
/*! exports provided: directive, isDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */
const directive = (f) => ((...args) => {
    const d = f(...args);
    directives.set(d, true);
    return d;
});
const isDirective = (o) => {
    return typeof o === 'function' && directives.has(o);
};
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/dom.js":
/*!******************************************!*\
  !*** ./node_modules/lit-html/lib/dom.js ***!
  \******************************************/
/*! exports provided: isCEPolyfill, reparentNodes, removeNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCEPolyfill", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = typeof window !== 'undefined' &&
    window.customElements != null &&
    window.customElements.polyfillWrapFlushCallback !==
        undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */
const reparentNodes = (container, start, end = null, before = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.insertBefore(start, before);
        start = n;
    }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */
const removeNodes = (container, start, end = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/part.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lib/part.js ***!
  \*******************************************/
/*! exports provided: noChange, nothing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
const nothing = {};
//# sourceMappingURL=part.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/parts.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/lib/parts.js ***!
  \********************************************/
/*! exports provided: isPrimitive, isIterable, AttributeCommitter, AttributePart, NodePart, BooleanAttributePart, PropertyCommitter, PropertyPart, EventPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */






const isPrimitive = (value) => {
    return (value === null ||
        !(typeof value === 'object' || typeof value === 'function'));
};
const isIterable = (value) => {
    return Array.isArray(value) ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */
class AttributeCommitter {
    constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        const parts = this.parts;
        // If we're assigning an attribute via syntax like:
        //    attr="${foo}"  or  attr=${foo}
        // but not
        //    attr="${foo} ${bar}" or attr="${foo} baz"
        // then we don't want to coerce the attribute value into one long
        // string. Instead we want to just return the value itself directly,
        // so that sanitizeDOMValue can get the actual value rather than
        // String(value)
        // The exception is if v is an array, in which case we do want to smash
        // it together into a string without calling String() on the array.
        //
        // This also allows trusted values (when using TrustedTypes) being
        // assigned to DOM sinks without being stringified in the process.
        if (l === 1 && strings[0] === '' && strings[1] === '') {
            const v = parts[0].value;
            if (typeof v === 'symbol') {
                return String(v);
            }
            if (typeof v === 'string' || !isIterable(v)) {
                return v;
            }
        }
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const part = parts[i];
            if (part !== undefined) {
                const v = part.value;
                if (isPrimitive(v) || !isIterable(v)) {
                    text += typeof v === 'string' ? v : String(v);
                }
                else {
                    for (const t of v) {
                        text += typeof t === 'string' ? t : String(t);
                    }
                }
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
/**
 * A Part that controls all or part of an attribute value.
 */
class AttributePart {
    constructor(committer) {
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
                this.committer.dirty = true;
            }
        }
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
            const directive = this.value;
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        this.committer.commit();
    }
}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */
class NodePart {
    constructor(options) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container) {
        this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part) {
        part.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        part.__insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref) {
        ref.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        if (this.startNode.parentNode === null) {
            return;
        }
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this.__commitText(value);
            }
        }
        else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__["TemplateResult"]) {
            this.__commitTemplateResult(value);
        }
        else if (value instanceof Node) {
            this.__commitNode(value);
        }
        else if (isIterable(value)) {
            this.__commitIterable(value);
        }
        else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]) {
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"];
            this.clear();
        }
        else {
            // Fallback, will render the string representation
            this.__commitText(value);
        }
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.
        const valueAsString = typeof value === 'string' ? value : String(value);
        if (node === this.endNode.previousSibling &&
            node.nodeType === 3 /* Node.TEXT_NODE */) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = valueAsString;
        }
        else {
            this.__commitNode(document.createTextNode(valueAsString));
        }
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] &&
            this.value.template === template) {
            this.value.update(value.values);
        }
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart {
    constructor(element, name, strings) {
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
            this.value = value;
        }
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
        super(element, name, strings);
        this.single =
            (strings.length === 2 && strings[0] === '' && strings[1] === '');
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(() => {
    try {
        const options = {
            get capture() {
                eventOptionsSupported = true;
                return false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.addEventListener('test', options, options);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.removeEventListener('test', options, options);
    }
    catch (_e) {
        // event options not supported
    }
})();
class EventPart {
    constructor(element, eventName, eventContext) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null ||
            oldListener != null &&
                (newListener.capture !== oldListener.capture ||
                    newListener.once !== oldListener.once ||
                    newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        if (shouldAddListener) {
            this.__options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
    handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        }
        else {
            this.value.handleEvent(event);
        }
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
    (eventOptionsSupported ?
        { capture: o.capture, passive: o.passive, once: o.once } :
        o.capture);
//# sourceMappingURL=parts.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/render.js":
/*!*********************************************!*\
  !*** ./node_modules/lit-html/lib/render.js ***!
  \*********************************************/
/*! exports provided: parts, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */



const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
const render = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
        parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](Object.assign({ templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__["templateFactory"] }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};
//# sourceMappingURL=render.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-factory.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-factory.js ***!
  \*******************************************************/
/*! exports provided: templateFactory, templateCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();
//# sourceMappingURL=template-factory.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-instance.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/lib/template-instance.js ***!
  \********************************************************/
/*! exports provided: TemplateInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, processor, options) {
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.commit();
            }
        }
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari does not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ?
            this.template.element.content.cloneNode(true) :
            document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while (partIndex < parts.length) {
            part = parts[partIndex];
            if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while (nodeIndex < part.index) {
                nodeIndex++;
                if (node.nodeName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === 'node') {
                const part = this.processor.handleTextExpression(this.options);
                part.insertAfterNode(node.previousSibling);
                this.__parts.push(part);
            }
            else {
                this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            }
            partIndex++;
        }
        if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"]) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}
//# sourceMappingURL=template-instance.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-result.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-result.js ***!
  \******************************************************/
/*! exports provided: TemplateResult, SVGTemplateResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */


/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = window.trustedTypes &&
    trustedTypes.createPolicy('lit-html', { createHTML: (s) => s });
const commentMarker = ` ${_template_js__WEBPACK_IMPORTED_MODULE_1__["marker"]} `;
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isCommentBinding = false;
        for (let i = 0; i < l; i++) {
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment position.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf('<!--');
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                s.indexOf('-->', commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);
            if (attributeMatch === null) {
                // We're only in this branch if we don't have a attribute-like
                // preceding sequence. For comments, this guards against unusual
                // attribute values like <div foo="<!--${'bar'}">. Cases like
                // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                // below.
                html += s + (isCommentBinding ? commentMarker : _template_js__WEBPACK_IMPORTED_MODULE_1__["nodeMarker"]);
            }
            else {
                // For attributes we use just a marker sentinel, and also append a
                // $lit$ suffix to the name to opt-out of attribute-specific parsing
                // that IE and Edge do for style and certain SVG attributes.
                html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                    attributeMatch[2] + _template_js__WEBPACK_IMPORTED_MODULE_1__["boundAttributeSuffix"] + attributeMatch[3] +
                    _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"];
            }
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        let value = this.getHTML();
        if (policy !== undefined) {
            // this is secure because `this.strings` is a TemplateStringsArray.
            // TODO: validate this when
            // https://github.com/tc39/proposal-array-is-template-object is
            // implemented.
            value = policy.createHTML(value);
        }
        template.innerHTML = value;
        return template;
    }
}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
        return template;
    }
}
//# sourceMappingURL=template-result.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template.js":
/*!***********************************************!*\
  !*** ./node_modules/lit-html/lib/template.js ***!
  \***********************************************/
/*! exports provided: marker, nodeMarker, markerRegex, boundAttributeSuffix, Template, isTemplatePartActive, createMarker, lastAttributeNameRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeMarker", function() { return nodeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerRegex", function() { return markerRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAttributeSuffix", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastAttributeNameRegex", function() { return lastAttributeNameRegex; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */
const boundAttributeSuffix = '$lit$';
/**
 * An updatable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings, values: { length } } = result;
        while (partIndex < length) {
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for (let i = 0; i < length; i++) {
                        if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                            count++;
                        }
                    }
                    while (count-- > 0) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = lastAttributeNameRegex.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split(markerRegex);
                        this.parts.push({ type: 'attribute', index, name, strings: statics });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const data = node.data;
                if (data.indexOf(marker) >= 0) {
                    const parent = node.parentNode;
                    const strings = data.split(markerRegex);
                    const lastIndex = strings.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (let i = 0; i < lastIndex; i++) {
                        let insert;
                        let s = strings[i];
                        if (s === '') {
                            insert = createMarker();
                        }
                        else {
                            const match = lastAttributeNameRegex.exec(s);
                            if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                s = s.slice(0, match.index) + match[1] +
                                    match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                            }
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({ type: 'node', index: ++index });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings[lastIndex] === '') {
                        parent.insertBefore(createMarker(), node);
                        nodesToRemove.push(node);
                    }
                    else {
                        node.data = strings[lastIndex];
                    }
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                if (node.data === marker) {
                    const parent = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent.insertBefore(createMarker(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({ type: 'node', index });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) {
                        node.data = '';
                    }
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({ type: 'node', index: -1 });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
const endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = 
// eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
//# sourceMappingURL=template.js.map

/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor, directive, isDirective, removeNodes, reparentNodes, noChange, nothing, AttributeCommitter, AttributePart, BooleanAttributePart, EventPart, isIterable, isPrimitive, NodePart, PropertyCommitter, PropertyPart, parts, render, templateCaches, templateFactory, TemplateInstance, SVGTemplateResult, TemplateResult, createMarker, isTemplatePartActive, Template, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/default-template-processor.js */ "./node_modules/lit-html/lib/default-template-processor.js");
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isIterable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["Template"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @packageDocumentation
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */




// TODO(justinfagnani): remove line when we get NodePart moving methods








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if (typeof window !== 'undefined') {
    (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.3.0');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
const svg = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "./node_modules/md5/md5.js":
/*!*********************************!*\
  !*** ./node_modules/md5/md5.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(/*! crypt */ "./node_modules/crypt/crypt.js"),
      utf8 = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").utf8,
      isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js"),
      bin = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ "./node_modules/sendbird-calls/SendBirdCall.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/sendbird-calls/SendBirdCall.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2016 SendBird DBA (Smile Family, Inc.)
 * SendBird Call JavaScript SDK v1.4.1 production
 */

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function v(s){return function(){var e=this,o=arguments;return new Promise(function(t,n){var r=s.apply(e,o);function i(e){u(r,t,n,i,a,"next",e)}function a(e){u(r,t,n,i,a,"throw",e)}i(void 0)})}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function t(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function _(i){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?t(Object(a),!0).forEach(function(e){var t,n,r;t=i,r=a[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(a,e))})}return i}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&a(i,n.prototype),i}).apply(null,arguments)}function n(e){var r="function"==typeof Map?new Map:void 0;return(n=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return o(e,arguments,c(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,e)})(e)}function l(e,t){if(null==e)return{};var n,r=function(e,t){if(null==e)return{};for(var n,r={},i=Object.keys(e),a=0;a<i.length;a++)n=i[a],0<=t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(e),a=0;a<i.length;a++)n=i[a],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(a){var o=i();return function(){var e,t,n,r,i=c(a);return t=o?(e=c(this).constructor,Reflect.construct(i,arguments,e)):i.apply(this,arguments),n=this,!(r=t)||"object"!=typeof r&&"function"!=typeof r?m(n):r}}function E(e,t){return d(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||f(e,t)||b()}function e(e){return function(e){if(Array.isArray(e))return w(e)}(e)||h(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e){if(Array.isArray(e))return e}function h(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function f(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function C(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=f(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}function R(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}(e,"string");return"symbol"==typeof t?t:String(t)}function I(e,t,n,r){var i=A();if(r)for(var a=0;a<r.length;a++)i=r[a](i);var o=t(function(e){i.initializeInstanceElements(e,s.elements)},n),s=i.decorateClass(function(e){for(var t,n=[],r=function(e){return"method"===e.kind&&e.key===a.key&&e.placement===a.placement},i=0;i<e.length;i++){var a=e[i];if("method"===a.kind&&(t=n.find(r)))if(O(a.descriptor)||O(t.descriptor)){if(S(a)||S(t))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");t.descriptor=a.descriptor}else{if(S(a)){if(S(t))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");t.decorators=a.decorators}!function(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}(a,t)}else n.push(a)}return n}(o.d.map(T)),e);return i.initializeClassElements(o.F,s.elements),i.runClassFinishers(o.F,s.finishers)}function A(){A=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(n,e){["method","field"].forEach(function(t){e.forEach(function(e){e.kind===t&&"own"===e.placement&&this.defineClassElement(n,e)},this)},this)},initializeClassElements:function(i,e){var a=i.prototype;["method","field"].forEach(function(r){e.forEach(function(e){var t,n=e.placement;e.kind!==r||"static"!==n&&"prototype"!==n||(t="static"===n?i:a,this.defineClassElement(t,e))},this)},this)},defineClassElement:function(e,t){var n,r=t.descriptor;"field"===t.kind&&(n=t.initializer,r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}),Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,i)},this),e.forEach(function(e){if(!S(e))return n.push(e);var t=this.decorateElement(e,i);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)},this),!t)return{elements:n,finishers:r};var a=this.decorateConstructor(n,t);return r.push.apply(r,a.finishers),a.finishers=r,a},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,a=i.length-1;0<=a;a--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var s=this.fromElementDescriptor(e),u=this.toElementFinisherExtras((0,i[a])(s)||s);e=u.element,this.addElementPlacement(e,t),u.finisher&&r.push(u.finisher);var c=u.extras;if(c){for(var l=0;l<c.length;l++)this.addElementPlacement(c[l],t);n.push.apply(n,c)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;0<=r;r--){var i=this.fromClassDescriptor(e),a=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==a.finisher&&n.push(a.finisher),void 0!==a.elements){e=a.elements;for(var o=0;o<e.length-1;o++)for(var s=o+1;s<e.length;s++)if(e[o].key===e[s].key&&e[o].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(d(t=e)||h(t)||f(t)||b()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=R(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var a={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),a.initializer=e.initializer),a},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:D(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=D(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function T(e){var t,n=R(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function S(e){return e.decorators&&e.decorators.length}function O(e){return void 0!==e&&(void 0!==e.value||void 0!==e.writable)}function D(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}var L,N;(N=L=L||{}).NO_ANSWER="no_answer",N.CANCELED="canceled",N.DECLINED="declined",N.OTHER_DEVICE_ACCEPTED="other_device_accepted",N.COMPLETED="completed",N.CONNECTION_LOST="connection_lost",N.TIMED_OUT="timed_out",N.DIAL_FAILED="dial_failed",N.ACCEPT_FAILED="accept_failed",N.UNKNOWN="unknown";var M,x,P=function(){function n(e){y(this,n);var t=_(_({},n.default),e);this.localMediaView=t.localMediaView,this.remoteMediaView=t.remoteMediaView,this.videoEnabled=t.videoEnabled,this.audioEnabled=t.audioEnabled,this.videoWidth=t.videoWidth,this.videoHeight=t.videoHeight,this.videoFps=t.videoFps,this.frontCamera=t.frontCamera}return s(n,null,[{key:"default",get:function(){return{localMediaView:null,remoteMediaView:null,audioEnabled:!0,videoEnabled:!0,videoWidth:null,videoHeight:null,videoFps:null,frontCamera:!0}}}]),n}();(x=M=M||{}).CALLER="dc_caller",x.CALLEE="dc_callee";var V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function U(e,t){return e(t={exports:{}},t.exports),t.exports}function F(e){return e&&e.Math==Math&&e}function j(e){try{return!!e()}catch(e){return!0}}function B(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}function z(e){return ne.call(e).slice(8,-1)}function G(e){if(null==e)throw TypeError("Can't call method on "+e);return e}function W(e){return ie(G(e))}function q(e){return"object"==typeof e?null!==e:"function"==typeof e}function K(e,t){if(!q(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!q(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!q(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!q(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}function H(e,t){return ae.call(e,t)}function Y(e){return se?oe.createElement(e):{}}function Z(e){if(!q(e))throw TypeError(String(e)+" is not an object");return e}function $(t,n){try{fe(Q,t,n)}catch(e){Q[t]=n}return n}var Q=F("object"==typeof globalThis&&globalThis)||F("object"==typeof window&&window)||F("object"==typeof self&&self)||F("object"==typeof V&&V)||Function("return this")(),X=!j(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),J={}.propertyIsEnumerable,ee=Object.getOwnPropertyDescriptor,te={f:ee&&!J.call({1:2},1)?function(e){var t=ee(this,e);return!!t&&t.enumerable}:J},ne={}.toString,re="".split,ie=j(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==z(e)?re.call(e,""):Object(e)}:Object,ae={}.hasOwnProperty,oe=Q.document,se=q(oe)&&q(oe.createElement),ue=!X&&!j(function(){return 7!=Object.defineProperty(Y("div"),"a",{get:function(){return 7}}).a}),ce=Object.getOwnPropertyDescriptor,le={f:X?ce:function(e,t){if(e=W(e),t=K(t,!0),ue)try{return ce(e,t)}catch(e){}if(H(e,t))return B(!te.f.call(e,t),e[t])}},de=Object.defineProperty,he={f:X?de:function(e,t,n){if(Z(e),t=K(t,!0),Z(n),ue)try{return de(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},fe=X?function(e,t,n){return he.f(e,t,B(1,n))}:function(e,t,n){return e[t]=n,e},pe="__core-js_shared__",ve=Q[pe]||$(pe,{}),_e=Function.toString;"function"!=typeof ve.inspectSource&&(ve.inspectSource=function(e){return _e.call(e)});function ye(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++De+Le).toString(36)}function ge(e){return Ne[e]||(Ne[e]=ye(e))}var me,ke,Ee,we,be,Ce,Re,Ie,Ae=ve.inspectSource,Te=Q.WeakMap,Se="function"==typeof Te&&/native code/.test(Ae(Te)),Oe=U(function(e){(e.exports=function(e,t){return ve[e]||(ve[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})}),De=0,Le=Math.random(),Ne=Oe("keys"),Me={},xe=Q.WeakMap;Re=Se?(me=new xe,ke=me.get,Ee=me.has,we=me.set,be=function(e,t){return we.call(me,e,t),t},Ce=function(e){return ke.call(me,e)||{}},function(e){return Ee.call(me,e)}):(Ie=ge("state"),Me[Ie]=!0,be=function(e,t){return fe(e,Ie,t),t},Ce=function(e){return H(e,Ie)?e[Ie]:{}},function(e){return H(e,Ie)});function Pe(e){return"function"==typeof e?e:void 0}function Ve(e,t){return arguments.length<2?Pe(Ye[e])||Pe(Q[e]):Ye[e]&&Ye[e][t]||Q[e]&&Q[e][t]}function Ue(e){return isNaN(e=+e)?0:(0<e?$e:Ze)(e)}function Fe(e){return 0<e?Qe(Ue(e),9007199254740991):0}function je(e,t){var n=Ue(e);return n<0?Xe(n+t,0):Je(n,t)}function Be(s){return function(e,t,n){var r,i=W(e),a=Fe(i.length),o=je(n,a);if(s&&t!=t){for(;o<a;)if((r=i[o++])!=r)return!0}else for(;o<a;o++)if((s||o in i)&&i[o]===t)return s||o||0;return!s&&-1}}function ze(e,t){var n,r=W(e),i=0,a=[];for(n in r)!H(Me,n)&&H(r,n)&&a.push(n);for(;t.length>i;)H(r,n=t[i++])&&(~tt(a,n)||a.push(n));return a}function Ge(e,t){var n=ct[ut(e)];return n==dt||n!=lt&&("function"==typeof t?j(t):!!t)}function We(e,t){var n,r,i,a,o=e.target,s=e.global,u=e.stat,c=s?Q:u?Q[o]||$(o,{}):(Q[o]||{}).prototype;if(c)for(n in t){if(i=t[n],r=e.noTargetGet?(a=ft(c,n))&&a.value:c[n],!ht(s?n:o+(u?".":"#")+n,e.forced)&&void 0!==r){if(typeof i==typeof r)continue;!function(e,t){for(var n=ot(t),r=he.f,i=le.f,a=0;a<n.length;a++){var o=n[a];H(e,o)||r(e,o,i(t,o))}}(i,r)}(e.sham||r&&r.sham)&&fe(i,"sham",!0),He(c,n,i,e)}}function qe(){var e=Z(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}var Ke={set:be,get:Ce,has:Re,enforce:function(e){return Re(e)?Ce(e):be(e,{})},getterFor:function(n){return function(e){var t;if(!q(e)||(t=Ce(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}},He=U(function(e){var t=Ke.get,s=Ke.enforce,u=String(String).split("String");(e.exports=function(e,t,n,r){var i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,o=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof t||H(n,"name")||fe(n,"name",t),s(n).source=u.join("string"==typeof t?t:"")),e!==Q?(i?!o&&e[t]&&(a=!0):delete e[t],a?e[t]=n:fe(e,t,n)):a?e[t]=n:$(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||Ae(this)})}),Ye=Q,Ze=Math.ceil,$e=Math.floor,Qe=Math.min,Xe=Math.max,Je=Math.min,et={includes:Be(!0),indexOf:Be(!1)},tt=et.indexOf,nt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],rt=nt.concat("length","prototype"),it={f:Object.getOwnPropertyNames||function(e){return ze(e,rt)}},at={f:Object.getOwnPropertySymbols},ot=Ve("Reflect","ownKeys")||function(e){var t=it.f(Z(e)),n=at.f;return n?t.concat(n(e)):t},st=/#|\.prototype\./,ut=Ge.normalize=function(e){return String(e).replace(st,".").toLowerCase()},ct=Ge.data={},lt=Ge.NATIVE="N",dt=Ge.POLYFILL="P",ht=Ge,ft=le.f;function pt(e,t){return RegExp(e,t)}var vt,_t,yt={UNSUPPORTED_Y:j(function(){var e=pt("a","y");return e.lastIndex=2,null!=e.exec("abcd")}),BROKEN_CARET:j(function(){var e=pt("^r","gy");return e.lastIndex=2,null!=e.exec("str")})},gt=RegExp.prototype.exec,mt=String.prototype.replace,kt=gt,Et=(vt=/a/,_t=/b*/g,gt.call(vt,"a"),gt.call(_t,"a"),0!==vt.lastIndex||0!==_t.lastIndex),wt=yt.UNSUPPORTED_Y||yt.BROKEN_CARET,bt=void 0!==/()??/.exec("")[1];(Et||bt||wt)&&(kt=function(e){var t,n,r,i,a=this,o=wt&&a.sticky,s=qe.call(a),u=a.source,c=0,l=e;return o&&(-1===(s=s.replace("y","")).indexOf("g")&&(s+="g"),l=String(e).slice(a.lastIndex),0<a.lastIndex&&(!a.multiline||a.multiline&&"\n"!==e[a.lastIndex-1])&&(u="(?: "+u+")",l=" "+l,c++),n=new RegExp("^(?:"+u+")",s)),bt&&(n=new RegExp("^"+u+"$(?!\\s)",s)),Et&&(t=a.lastIndex),r=gt.call(o?n:a,l),o?r?(r.input=r.input.slice(c),r[0]=r[0].slice(c),r.index=a.lastIndex,a.lastIndex+=r[0].length):a.lastIndex=0:Et&&r&&(a.lastIndex=a.global?r.index+r[0].length:t),bt&&r&&1<r.length&&mt.call(r[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r});var Ct=kt;We({target:"RegExp",proto:!0,forced:/./.exec!==Ct},{exec:Ct});function Rt(e){return H(xt,e)||(Nt&&H(Pt,e)?xt[e]=Pt[e]:xt[e]=Vt("Symbol."+e)),xt[e]}function It(n,e,t,r){var a,i,o,s,u=Rt(n),c=!j(function(){var e={};return e[u]=function(){return 7},7!=""[n](e)}),l=c&&!j(function(){var e=!1,t=/a/;return"split"===n&&((t={constructor:{}}).constructor[Ut]=function(){return t},t.flags="",t[u]=/./[u]),t.exec=function(){return e=!0,null},t[u](""),!e});c&&l&&("replace"!==n||Ft&&jt&&!zt)&&("split"!==n||Gt)||(a=/./[u],o=(i=t(u,""[n],function(e,t,n,r,i){return t.exec===Ct?c&&!i?{done:!0,value:a.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}},{REPLACE_KEEPS_$0:jt,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:zt}))[0],s=i[1],He(String.prototype,n,o),He(RegExp.prototype,u,2==e?function(e,t){return s.call(e,this,t)}:function(e){return s.call(e,this)})),r&&fe(RegExp.prototype[u],"sham",!0)}function At(e){var t;return q(e)&&(void 0!==(t=e[Wt])?!!t:"RegExp"==z(e))}function Tt(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}function St(e,t){var n,r=Z(e).constructor;return void 0===r||null==(n=Z(r)[qt])?t:Tt(n)}function Ot(s){return function(e,t){var n,r,i=String(G(e)),a=Ue(t),o=i.length;return a<0||o<=a?s?"":void 0:(n=i.charCodeAt(a))<55296||56319<n||a+1===o||(r=i.charCodeAt(a+1))<56320||57343<r?s?i.charAt(a):n:s?i.slice(a,a+2):r-56320+(n-55296<<10)+65536}}function Dt(e,t,n){return t+(n?Ht(e,t).length:1)}function Lt(e,t){var n=e.exec;if("function"==typeof n){var r=n.call(e,t);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==z(e))throw TypeError("RegExp#exec called on incompatible receiver");return Ct.call(e,t)}var Nt=!!Object.getOwnPropertySymbols&&!j(function(){return!String(Symbol())}),Mt=Nt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,xt=Oe("wks"),Pt=Q.Symbol,Vt=Mt?Pt:Pt&&Pt.withoutSetter||ye,Ut=Rt("species"),Ft=!j(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),jt="$0"==="a".replace(/./,"$0"),Bt=Rt("replace"),zt=!!/./[Bt]&&""===/./[Bt]("a","$0"),Gt=!j(function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}),Wt=Rt("match"),qt=Rt("species"),Kt={codeAt:Ot(!1),charAt:Ot(!0)},Ht=Kt.charAt,Yt=[].push,Zt=Math.min,$t=4294967295,Qt=!j(function(){return!RegExp($t,"y")});It("split",2,function(i,_,y){var g="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||1<".".split(/()()/).length||"".split(/.?/).length?function(e,t){var n=String(G(this)),r=void 0===t?$t:t>>>0;if(0==r)return[];if(void 0===e)return[n];if(!At(e))return _.call(n,e,r);for(var i,a,o,s=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),c=0,l=new RegExp(e.source,u+"g");(i=Ct.call(l,n))&&!(c<(a=l.lastIndex)&&(s.push(n.slice(c,i.index)),1<i.length&&i.index<n.length&&Yt.apply(s,i.slice(1)),o=i[0].length,c=a,s.length>=r));)l.lastIndex===i.index&&l.lastIndex++;return c===n.length?!o&&l.test("")||s.push(""):s.push(n.slice(c)),s.length>r?s.slice(0,r):s}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:_.call(this,e,t)}:_;return[function(e,t){var n=G(this),r=null==e?void 0:e[i];return void 0!==r?r.call(e,n,t):g.call(String(n),e,t)},function(e,t){var n=y(g,e,this,t,g!==_);if(n.done)return n.value;var r=Z(e),i=String(this),a=St(r,RegExp),o=r.unicode,s=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(Qt?"y":"g"),u=new a(Qt?r:"^(?:"+r.source+")",s),c=void 0===t?$t:t>>>0;if(0==c)return[];if(0===i.length)return null===Lt(u,i)?[i]:[];for(var l=0,d=0,h=[];d<i.length;){u.lastIndex=Qt?d:0;var f,p=Lt(u,Qt?i:i.slice(d));if(null===p||(f=Zt(Fe(u.lastIndex+(Qt?0:d)),i.length))===l)d=Dt(i,d,o);else{if(h.push(i.slice(l,d)),h.length===c)return h;for(var v=1;v<=p.length-1;v++)if(h.push(p[v]),h.length===c)return h;d=l=f}}return h.push(i.slice(l)),h}]},!Qt);function Xt(e){return Object(G(e))}function Jt(e,t,n){var r=K(t);r in e?he.f(e,r,B(0,n)):e[r]=n}function en(e,t){var n;return rn(e)&&("function"==typeof(n=e.constructor)&&(n===Array||rn(n.prototype))||q(n)&&null===(n=n[an]))&&(n=void 0),new(void 0===n?Array:n)(0===t?0:t)}var tn,nn,rn=Array.isArray||function(e){return"Array"==z(e)},an=Rt("species"),on=Ve("navigator","userAgent")||"",sn=Q.process,un=sn&&sn.versions,cn=un&&un.v8;cn?nn=(tn=cn.split("."))[0]+tn[1]:on&&(!(tn=on.match(/Edge\/(\d+)/))||74<=tn[1])&&(tn=on.match(/Chrome\/(\d+)/))&&(nn=tn[1]);function ln(t){return 51<=dn||!j(function(){var e=[];return(e.constructor={})[hn]=function(){return{foo:1}},1!==e[t](Boolean).foo})}var dn=nn&&+nn,hn=Rt("species"),fn=Rt("isConcatSpreadable"),pn=9007199254740991,vn="Maximum allowed index exceeded",_n=51<=dn||!j(function(){var e=[];return e[fn]=!1,e.concat()[0]!==e}),yn=ln("concat");We({target:"Array",proto:!0,forced:!_n||!yn},{concat:function(e){for(var t,n,r,i=Xt(this),a=en(i,0),o=0,s=-1,u=arguments.length;s<u;s++)if(function(e){if(!q(e))return!1;var t=e[fn];return void 0!==t?!!t:rn(e)}(r=-1===s?i:arguments[s])){if(n=Fe(r.length),pn<o+n)throw TypeError(vn);for(t=0;t<n;t++,o++)t in r&&Jt(a,o,r[t])}else{if(pn<=o)throw TypeError(vn);Jt(a,o++,r)}return a.length=o,a}});function gn(){}function mn(e){return"<script>"+e+"</"+Rn+">"}var kn,En=Object.keys||function(e){return ze(e,nt)},wn=X?Object.defineProperties:function(e,t){Z(e);for(var n,r=En(t),i=r.length,a=0;a<i;)he.f(e,n=r[a++],t[n]);return e},bn=Ve("document","documentElement"),Cn="prototype",Rn="script",In=ge("IE_PROTO"),An=function(){try{kn=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;An=kn?function(e){e.write(mn("")),e.close();var t=e.parentWindow.Object;return e=null,t}(kn):((t=Y("iframe")).style.display="none",bn.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(mn("document.F=Object")),e.close(),e.F);for(var n=nt.length;n--;)delete An[Cn][nt[n]];return An()};Me[In]=!0;var Tn=Object.create||function(e,t){var n;return null!==e?(gn[Cn]=Z(e),n=new gn,gn[Cn]=null,n[In]=e):n=An(),void 0===t?n:wn(n,t)},Sn=Rt("unscopables"),On=Array.prototype;null==On[Sn]&&he.f(On,Sn,{configurable:!0,value:Tn(null)});function Dn(e){On[Sn][e]=!0}var Ln,Nn,Mn,xn={},Pn=!j(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}),Vn=ge("IE_PROTO"),Un=Object.prototype,Fn=Pn?Object.getPrototypeOf:function(e){return e=Xt(e),H(e,Vn)?e[Vn]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?Un:null},jn=Rt("iterator"),Bn=!1;[].keys&&("next"in(Mn=[].keys())?(Nn=Fn(Fn(Mn)))!==Object.prototype&&(Ln=Nn):Bn=!0),null==Ln&&(Ln={}),H(Ln,jn)||fe(Ln,jn,function(){return this});function zn(e,t,n){e&&!H(e=n?e:e.prototype,Zn)&&Yn(e,Zn,{configurable:!0,value:t})}function Gn(){return this}function Wn(e,t,n){var r=t+" Iterator";return e.prototype=Tn($n,{next:B(1,n)}),zn(e,r,!1),xn[r]=Gn,e}function qn(){return this}function Kn(e,t,n,r,i,a,o){function s(e){if(e===i&&v)return v;if(!Jn&&e in f)return f[e];switch(e){case"keys":case tr:case nr:return function(){return new n(this,e)}}return function(){return new n(this)}}Wn(n,t,r);var u,c,l,d=t+" Iterator",h=!1,f=e.prototype,p=f[er]||f["@@iterator"]||i&&f[i],v=!Jn&&p||s(i),_="Array"==t&&f.entries||p;if(_&&(u=Fn(_.call(new e)),Xn!==Object.prototype&&u.next&&(Fn(u)!==Xn&&(Qn?Qn(u,Xn):"function"!=typeof u[er]&&fe(u,er,qn)),zn(u,d,!0))),i==tr&&p&&p.name!==tr&&(h=!0,v=function(){return p.call(this)}),f[er]!==v&&fe(f,er,v),xn[t]=v,i)if(c={values:s(tr),keys:a?v:s("keys"),entries:s(nr)},o)for(l in c)!Jn&&!h&&l in f||He(f,l,c[l]);else We({target:t,proto:!0,forced:Jn||h},c);return c}var Hn={IteratorPrototype:Ln,BUGGY_SAFARI_ITERATORS:Bn},Yn=he.f,Zn=Rt("toStringTag"),$n=Hn.IteratorPrototype,Qn=Object.setPrototypeOf||("__proto__"in{}?function(){var n,r=!1,e={};try{(n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),r=e instanceof Array}catch(e){}return function(e,t){return Z(e),function(e){if(!q(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(t),r?n.call(e,t):e.__proto__=t,e}}():void 0),Xn=Hn.IteratorPrototype,Jn=Hn.BUGGY_SAFARI_ITERATORS,er=Rt("iterator"),tr="values",nr="entries",rr="Array Iterator",ir=Ke.set,ar=Ke.getterFor(rr),or=Kn(Array,"Array",function(e,t){ir(this,{type:rr,target:W(e),index:0,kind:t})},function(){var e=ar(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?{value:e.target=void 0,done:!0}:"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}},"values");xn.Arguments=xn.Array,Dn("keys"),Dn("values"),Dn("entries");function sr(e,t){var n=[][e];return!!n&&j(function(){n.call(null,t||function(){throw 1},1)})}function ur(e){throw e}function cr(e,t){if(H(dr,e))return dr[e];var n=[][e],r=!!H(t=t||{},"ACCESSORS")&&t.ACCESSORS,i=H(t,0)?t[0]:ur,a=H(t,1)?t[1]:void 0;return dr[e]=!!n&&!j(function(){if(r&&!X)return 1;var e={length:-1};r?lr(e,1,{enumerable:!0,get:ur}):e[1]=1,n.call(e,i,a)})}var lr=Object.defineProperty,dr={},hr=Math.min,fr=[].lastIndexOf,pr=!!fr&&1/[1].lastIndexOf(1,-0)<0,vr=sr("lastIndexOf"),_r=cr("indexOf",{ACCESSORS:!0,1:0}),yr=pr||!vr||!_r?function(e,t){if(pr)return fr.apply(this,arguments)||0;var n=W(this),r=Fe(n.length),i=r-1;for(1<arguments.length&&(i=hr(i,Ue(t))),i<0&&(i=r+i);0<=i;i--)if(i in n&&n[i]===e)return i||0;return-1}:fr;We({target:"Array",proto:!0,forced:yr!==[].lastIndexOf},{lastIndexOf:yr});var gr={};gr[Rt("toStringTag")]="z";var mr="[object z]"===String(gr),kr=Rt("toStringTag"),Er="Arguments"==z(function(){return arguments}()),wr=mr?z:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),kr))?n:Er?z(t):"Object"==(r=z(t))&&"function"==typeof t.callee?"Arguments":r},br=mr?{}.toString:function(){return"[object "+wr(this)+"]"};mr||He(Object.prototype,"toString",br,{unsafe:!0});var Cr=Kt.charAt,Rr="String Iterator",Ir=Ke.set,Ar=Ke.getterFor(Rr);Kn(String,"String",function(e){Ir(this,{type:Rr,string:String(e),index:0})},function(){var e,t=Ar(this),n=t.string,r=t.index;return r>=n.length?{value:void 0,done:!0}:(e=Cr(n,r),t.index+=e.length,{value:e,done:!1})});var Tr=Math.max,Sr=Math.min,Or=Math.floor,Dr=/\$([$&'`]|\d\d?|<[^>]*>)/g,Lr=/\$([$&'`]|\d\d?)/g;It("replace",2,function(i,E,w,e){var b=e.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,C=e.REPLACE_KEEPS_$0,R=b?"$":"$0";return[function(e,t){var n=G(this),r=null==e?void 0:e[i];return void 0!==r?r.call(e,n,t):E.call(String(n),e,t)},function(e,t){if(!b&&C||"string"==typeof t&&-1===t.indexOf(R)){var n=w(E,e,this,t);if(n.done)return n.value}var r=Z(e),i=String(this),a="function"==typeof t;a||(t=String(t));var o,s=r.global;s&&(o=r.unicode,r.lastIndex=0);for(var u=[];;){var c=Lt(r,i);if(null===c)break;if(u.push(c),!s)break;""===String(c[0])&&(r.lastIndex=Dt(i,Fe(r.lastIndex),o))}for(var l,d="",h=0,f=0;f<u.length;f++){c=u[f];for(var p=String(c[0]),v=Tr(Sr(Ue(c.index),i.length),0),_=[],y=1;y<c.length;y++)_.push(void 0===(l=c[y])?l:String(l));var g,m=c.groups,k=a?(g=[p].concat(_,v,i),void 0!==m&&g.push(m),String(t.apply(void 0,g))):function(a,o,s,u,c,e){var l=s+a.length,d=u.length,t=Lr;void 0!==c&&(c=Xt(c),t=Dr);return E.call(e,t,function(e,t){var n;switch(t.charAt(0)){case"$":return"$";case"&":return a;case"`":return o.slice(0,s);case"'":return o.slice(l);case"<":n=c[t.slice(1,-1)];break;default:var r=+t;if(0==r)return e;if(d<r){var i=Or(r/10);return 0===i?e:i<=d?void 0===u[i-1]?t.charAt(1):u[i-1]+t.charAt(1):e}n=u[r-1]}return void 0===n?"":n})}(p,i,v,_,m,t);h<=v&&(d+=i.slice(h,v)+k,h=v+p.length)}return d+i.slice(h)}]});var Nr=Rt("iterator"),Mr=!1;try{var xr=0,Pr={next:function(){return{done:!!xr++}},return:function(){Mr=!0}};Pr[Nr]=function(){return this},Array.from(Pr,function(){throw 2})}catch(e){}function Vr(e,t){if(!t&&!Mr)return!1;var n=!1;try{var r={};r[Nr]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(e){}return n}function Ur(e){return q(e)&&H(ei,wr(e))}var Fr,jr="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,Br=he.f,zr=Q.Int8Array,Gr=zr&&zr.prototype,Wr=Q.Uint8ClampedArray,qr=Wr&&Wr.prototype,Kr=zr&&Fn(zr),Hr=Gr&&Fn(Gr),Yr=Object.prototype,Zr=Yr.isPrototypeOf,$r=Rt("toStringTag"),Qr=ye("TYPED_ARRAY_TAG"),Xr=jr&&!!Qn&&"Opera"!==wr(Q.opera),Jr=!1,ei={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8};for(Fr in ei)Q[Fr]||(Xr=!1);if((!Xr||"function"!=typeof Kr||Kr===Function.prototype)&&(Kr=function(){throw TypeError("Incorrect invocation")},Xr))for(Fr in ei)Q[Fr]&&Qn(Q[Fr],Kr);if((!Xr||!Hr||Hr===Yr)&&(Hr=Kr.prototype,Xr))for(Fr in ei)Q[Fr]&&Qn(Q[Fr].prototype,Hr);if(Xr&&Fn(qr)!==Hr&&Qn(qr,Hr),X&&!H(Hr,$r))for(Fr in Jr=!0,Br(Hr,$r,{get:function(){return q(this)?this[Qr]:void 0}}),ei)Q[Fr]&&fe(Q[Fr],Qr,Fr);function ti(e,t,n){for(var r in t)He(e,r,t[r],n);return e}function ni(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}function ri(e){if(void 0===e)return 0;var t=Ue(e),n=Fe(t);if(t!==n)throw RangeError("Wrong length or index");return n}function ii(e,t,n){for(var r=Xt(this),i=Fe(r.length),a=arguments.length,o=je(1<a?t:void 0,i),s=2<a?n:void 0,u=void 0===s?i:je(s,i);o<u;)r[o++]=e;return r}function ai(e){return[255&e]}function oi(e){return[255&e,e>>8&255]}function si(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]}function ui(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]}function ci(e){return ji(e,23,4)}function li(e){return ji(e,52,8)}function di(e,t){Ai(e[Li],t,{get:function(){return Ti(this)[t]}})}function hi(e,t,n,r){var i=ri(n),a=Ti(e);if(i+t>a.byteLength)throw Fi(Ni);var o=Ti(a.buffer).bytes,s=i+a.byteOffset,u=o.slice(s,s+t);return r?u:u.reverse()}function fi(e,t,n,r,i,a){var o=ri(n),s=Ti(e);if(o+t>s.byteLength)throw Fi(Ni);for(var u=Ti(s.buffer).bytes,c=o+s.byteOffset,l=r(+i),d=0;d<t;d++)u[c+d]=l[a?d:t-d-1]}var pi={NATIVE_ARRAY_BUFFER_VIEWS:Xr,TYPED_ARRAY_TAG:Jr&&Qr,aTypedArray:function(e){if(Ur(e))return e;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(e){if(Qn){if(Zr.call(Kr,e))return e}else for(var t in ei)if(H(ei,Fr)){var n=Q[t];if(n&&(e===n||Zr.call(n,e)))return e}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(e,t,n){if(X){if(n)for(var r in ei){var i=Q[r];i&&H(i.prototype,e)&&delete i.prototype[e]}Hr[e]&&!n||He(Hr,e,!n&&Xr&&Gr[e]||t)}},exportTypedArrayStaticMethod:function(e,t,n){var r,i;if(X){if(Qn){if(n)for(r in ei)(i=Q[r])&&H(i,e)&&delete i[e];if(Kr[e]&&!n)return;try{return He(Kr,e,!n&&Xr&&zr[e]||t)}catch(e){}}for(r in ei)!(i=Q[r])||i[e]&&!n||He(i,e,t)}},isView:function(e){var t=wr(e);return"DataView"===t||H(ei,t)},isTypedArray:Ur,TypedArray:Kr,TypedArrayPrototype:Hr},vi=pi.NATIVE_ARRAY_BUFFER_VIEWS,_i=Q.ArrayBuffer,yi=Q.Int8Array,gi=!vi||!j(function(){yi(1)})||!j(function(){new yi(-1)})||!Vr(function(e){new yi,new yi(null),new yi(1.5),new yi(e)},!0)||j(function(){return 1!==new yi(new _i(2),1,void 0).length}),mi=Math.abs,ki=Math.pow,Ei=Math.floor,wi=Math.log,bi=Math.LN2,Ci=function(e,t,n){var r,i,a,o=new Array(n),s=8*n-t-1,u=(1<<s)-1,c=u>>1,l=23===t?ki(2,-24)-ki(2,-77):0,d=e<0||0===e&&1/e<0?1:0,h=0;for((e=mi(e))!=e||e===1/0?(i=e!=e?1:0,r=u):(r=Ei(wi(e)/bi),e*(a=ki(2,-r))<1&&(r--,a*=2),2<=(e+=1<=r+c?l/a:l*ki(2,1-c))*a&&(r++,a/=2),u<=r+c?(i=0,r=u):1<=r+c?(i=(e*a-1)*ki(2,t),r+=c):(i=e*ki(2,c-1)*ki(2,t),r=0));8<=t;o[h++]=255&i,i/=256,t-=8);for(r=r<<t|i,s+=t;0<s;o[h++]=255&r,r/=256,s-=8);return o[--h]|=128*d,o},Ri=function(e,t){var n,r=e.length,i=8*r-t-1,a=(1<<i)-1,o=a>>1,s=i-7,u=r-1,c=e[u--],l=127&c;for(c>>=7;0<s;l=256*l+e[u],u--,s-=8);for(n=l&(1<<-s)-1,l>>=-s,s+=t;0<s;n=256*n+e[u],u--,s-=8);if(0===l)l=1-o;else{if(l===a)return n?NaN:c?-1/0:1/0;n+=ki(2,t),l-=o}return(c?-1:1)*n*ki(2,l-t)},Ii=it.f,Ai=he.f,Ti=Ke.get,Si=Ke.set,Oi="ArrayBuffer",Di="DataView",Li="prototype",Ni="Wrong index",Mi=Q[Oi],xi=Mi,Pi=Q[Di],Vi=Pi&&Pi[Li],Ui=Object.prototype,Fi=Q.RangeError,ji=Ci,Bi=Ri;if(jr){if(!j(function(){Mi(1)})||!j(function(){new Mi(-1)})||j(function(){return new Mi,new Mi(1.5),new Mi(NaN),Mi.name!=Oi})){for(var zi,Gi=(xi=function(e){return ni(this,xi),new Mi(ri(e))})[Li]=Mi[Li],Wi=Ii(Mi),qi=0;Wi.length>qi;)(zi=Wi[qi++])in xi||fe(xi,zi,Mi[zi]);Gi.constructor=xi}Qn&&Fn(Vi)!==Ui&&Qn(Vi,Ui);var Ki=new Pi(new xi(2)),Hi=Vi.setInt8;Ki.setInt8(0,2147483648),Ki.setInt8(1,2147483649),!Ki.getInt8(0)&&Ki.getInt8(1)||ti(Vi,{setInt8:function(e,t){Hi.call(this,e,t<<24>>24)},setUint8:function(e,t){Hi.call(this,e,t<<24>>24)}},{unsafe:!0})}else xi=function(e){ni(this,xi,Oi);var t=ri(e);Si(this,{bytes:ii.call(new Array(t),0),byteLength:t}),X||(this.byteLength=t)},Pi=function(e,t,n){ni(this,Pi,Di),ni(e,xi,Di);var r=Ti(e).byteLength,i=Ue(t);if(i<0||r<i)throw Fi("Wrong offset");if(r<i+(n=void 0===n?r-i:Fe(n)))throw Fi("Wrong length");Si(this,{buffer:e,byteLength:n,byteOffset:i}),X||(this.buffer=e,this.byteLength=n,this.byteOffset=i)},X&&(di(xi,"byteLength"),di(Pi,"buffer"),di(Pi,"byteLength"),di(Pi,"byteOffset")),ti(Pi[Li],{getInt8:function(e){return hi(this,1,e)[0]<<24>>24},getUint8:function(e){return hi(this,1,e)[0]},getInt16:function(e,t){var n=hi(this,2,e,1<arguments.length?t:void 0);return(n[1]<<8|n[0])<<16>>16},getUint16:function(e,t){var n=hi(this,2,e,1<arguments.length?t:void 0);return n[1]<<8|n[0]},getInt32:function(e,t){return ui(hi(this,4,e,1<arguments.length?t:void 0))},getUint32:function(e,t){return ui(hi(this,4,e,1<arguments.length?t:void 0))>>>0},getFloat32:function(e,t){return Bi(hi(this,4,e,1<arguments.length?t:void 0),23)},getFloat64:function(e,t){return Bi(hi(this,8,e,1<arguments.length?t:void 0),52)},setInt8:function(e,t){fi(this,1,e,ai,t)},setUint8:function(e,t){fi(this,1,e,ai,t)},setInt16:function(e,t,n){fi(this,2,e,oi,t,2<arguments.length?n:void 0)},setUint16:function(e,t,n){fi(this,2,e,oi,t,2<arguments.length?n:void 0)},setInt32:function(e,t,n){fi(this,4,e,si,t,2<arguments.length?n:void 0)},setUint32:function(e,t,n){fi(this,4,e,si,t,2<arguments.length?n:void 0)},setFloat32:function(e,t,n){fi(this,4,e,ci,t,2<arguments.length?n:void 0)},setFloat64:function(e,t,n){fi(this,8,e,li,t,2<arguments.length?n:void 0)}});zn(xi,Oi),zn(Pi,Di);function Yi(e,t){var n=function(e){var t=Ue(e);if(t<0)throw RangeError("The argument can't be less than 0");return t}(e);if(n%t)throw RangeError("Wrong offset");return n}function Zi(e){if(null!=e)return e[ra]||e["@@iterator"]||xn[wr(e)]}function $i(e){return void 0!==e&&(xn.Array===e||aa[ia]===e)}function Qi(r,i,e){if(Tt(r),void 0===i)return r;switch(e){case 0:return function(){return r.call(i)};case 1:return function(e){return r.call(i,e)};case 2:return function(e,t){return r.call(i,e,t)};case 3:return function(e,t,n){return r.call(i,e,t,n)}}return function(){return r.apply(i,arguments)}}function Xi(e,t,n){var r,i,a,o,s,u,c=Xt(e),l=arguments.length,d=1<l?t:void 0,h=void 0!==d,f=Zi(c);if(null!=f&&!$i(f))for(u=(s=f.call(c)).next,c=[];!(o=u.call(s)).done;)c.push(o.value);for(h&&2<l&&(d=Qi(d,n,2)),i=Fe(c.length),a=new(oa(this))(i),r=0;r<i;r++)a[r]=h?d(c[r],r):c[r];return a}function Ji(f){var p=1==f,v=2==f,_=3==f,y=4==f,g=6==f,m=5==f||g;return function(e,t,n,r){for(var i,a,o=Xt(e),s=ie(o),u=Qi(t,n,3),c=Fe(s.length),l=0,d=r||en,h=p?d(e,c):v?d(e,0):void 0;l<c;l++)if((m||l in s)&&(a=u(i=s[l],l,o),f))if(p)h[l]=a;else if(a)switch(f){case 3:return!0;case 5:return i;case 6:return l;case 2:sa.call(h,i)}else if(y)return!1;return g?-1:_||y?y:h}}function ea(e){var t=Ve(e),n=he.f;X&&t&&!t[ca]&&n(t,ca,{configurable:!0,get:function(){return this}})}function ta(e,t,n){var r,i;return Qn&&"function"==typeof(r=t.constructor)&&r!==n&&q(i=r.prototype)&&i!==n.prototype&&Qn(e,i),e}var na={ArrayBuffer:xi,DataView:Pi},ra=Rt("iterator"),ia=Rt("iterator"),aa=Array.prototype,oa=pi.aTypedArrayConstructor,sa=[].push,ua={forEach:Ji(0),map:Ji(1),filter:Ji(2),some:Ji(3),every:Ji(4),find:Ji(5),findIndex:Ji(6)},ca=Rt("species");U(function(e){function p(e,t){for(var n=0,r=t.length,i=new(o(e))(r);n<r;)i[n]=t[n++];return i}function t(e,t){g(e,t,{get:function(){return _(this)[t]}})}function v(e){var t;return e instanceof E||"ArrayBuffer"==(t=wr(e))||"SharedArrayBuffer"==t}function r(e,t){return A(e)&&"symbol"!=typeof t&&t in e&&String(+t)==String(t)}function n(e,t){return r(e,t=K(t,!0))?B(2,e[t]):a(e,t)}function i(e,t,n){return!(r(e,t=K(t,!0))&&q(n)&&H(n,"value"))||H(n,"get")||H(n,"set")||n.configurable||H(n,"writable")&&!n.writable||H(n,"enumerable")&&!n.enumerable?g(e,t,n):(e[t]=n.value,e)}var u=it.f,c=ua.forEach,_=Ke.get,y=Ke.set,g=he.f,a=le.f,m=Math.round,k=Q.RangeError,E=na.ArrayBuffer,w=na.DataView,b=pi.NATIVE_ARRAY_BUFFER_VIEWS,C=pi.TYPED_ARRAY_TAG,R=pi.TypedArray,I=pi.TypedArrayPrototype,o=pi.aTypedArrayConstructor,A=pi.isTypedArray,T="BYTES_PER_ELEMENT",S="Wrong length";X?(b||(le.f=n,he.f=i,t(I,"buffer"),t(I,"byteOffset"),t(I,"byteLength"),t(I,"length")),We({target:"Object",stat:!0,forced:!b},{getOwnPropertyDescriptor:n,defineProperty:i}),e.exports=function(e,t,a){function l(e,i){g(e,i,{get:function(){return e=i,(t=_(this)).view[n](e*d+t.byteOffset,!0);var e,t},set:function(e){return t=i,n=e,r=_(this),a&&(n=(n=m(n))<0?0:255<n?255:255&n),void r.view[o](t*d+r.byteOffset,n,!0);var t,n,r},enumerable:!0})}var d=e.match(/\d+$/)[0]/8,h=e+(a?"Clamped":"")+"Array",n="get"+e,o="set"+e,i=Q[h],f=i,r=f&&f.prototype,s={};b?gi&&(f=t(function(e,t,n,r){return ni(e,f,h),ta(q(t)?v(t)?void 0!==r?new i(t,Yi(n,d),r):void 0!==n?new i(t,Yi(n,d)):new i(t):A(t)?p(f,t):Xi.call(f,t):new i(ri(t)),e,f)}),Qn&&Qn(f,R),c(u(i),function(e){e in f||fe(f,e,i[e])}),f.prototype=r):(f=t(function(e,t,n,r){ni(e,f,h);var i,a,o,s=0,u=0;if(q(t)){if(!v(t))return A(t)?p(f,t):Xi.call(f,t);i=t,u=Yi(n,d);var c=t.byteLength;if(void 0===r){if(c%d)throw k(S);if((a=c-u)<0)throw k(S)}else if(c<(a=Fe(r)*d)+u)throw k(S);o=a/d}else o=ri(t),i=new E(a=o*d);for(y(e,{buffer:i,byteOffset:u,byteLength:a,length:o,view:new w(i)});s<o;)l(e,s++)}),Qn&&Qn(f,R),r=f.prototype=Tn(I)),r.constructor!==f&&fe(r,"constructor",f),C&&fe(r,C,h),s[h]=f,We({global:!0,forced:f!=i,sham:!b},s),T in f||fe(f,T,d),T in r||fe(r,T,d),ea(h)}):e.exports=function(){}})("Uint8",function(r){return function(e,t,n){return r(this,e,t,n)}});var la=Math.min,da=[].copyWithin||function(e,t,n){var r=Xt(this),i=Fe(r.length),a=je(e,i),o=je(t,i),s=2<arguments.length?n:void 0,u=la((void 0===s?i:je(s,i))-o,i-a),c=1;for(o<a&&a<o+u&&(c=-1,o+=u-1,a+=u-1);0<u--;)o in r?r[a]=r[o]:delete r[a],a+=c,o+=c;return r},ha=pi.aTypedArray;(0,pi.exportTypedArrayMethod)("copyWithin",function(e,t,n){return da.call(ha(this),e,t,2<arguments.length?n:void 0)});var fa=ua.every,pa=pi.aTypedArray;(0,pi.exportTypedArrayMethod)("every",function(e,t){return fa(pa(this),e,1<arguments.length?t:void 0)});var va=pi.aTypedArray;(0,pi.exportTypedArrayMethod)("fill",function(e){return ii.apply(va(this),arguments)});var _a=ua.filter,ya=pi.aTypedArray,ga=pi.aTypedArrayConstructor;(0,pi.exportTypedArrayMethod)("filter",function(e,t){for(var n=_a(ya(this),e,1<arguments.length?t:void 0),r=St(this,this.constructor),i=0,a=n.length,o=new(ga(r))(a);i<a;)o[i]=n[i++];return o});var ma=ua.find,ka=pi.aTypedArray;(0,pi.exportTypedArrayMethod)("find",function(e,t){return ma(ka(this),e,1<arguments.length?t:void 0)});var Ea=ua.findIndex,wa=pi.aTypedArray;(0,pi.exportTypedArrayMethod)("findIndex",function(e,t){return Ea(wa(this),e,1<arguments.length?t:void 0)});var ba=ua.forEach,Ca=pi.aTypedArray;(0,pi.exportTypedArrayMethod)("forEach",function(e,t){ba(Ca(this),e,1<arguments.length?t:void 0)});var Ra=et.includes,Ia=pi.aTypedArray;(0,pi.exportTypedArrayMethod)("includes",function(e,t){return Ra(Ia(this),e,1<arguments.length?t:void 0)});var Aa=et.indexOf,Ta=pi.aTypedArray;(0,pi.exportTypedArrayMethod)("indexOf",function(e,t){return Aa(Ta(this),e,1<arguments.length?t:void 0)});function Sa(){return La.call(xa(this))}var Oa=Rt("iterator"),Da=Q.Uint8Array,La=or.values,Na=or.keys,Ma=or.entries,xa=pi.aTypedArray,Pa=pi.exportTypedArrayMethod,Va=Da&&Da.prototype[Oa],Ua=!!Va&&("values"==Va.name||null==Va.name);Pa("entries",function(){return Ma.call(xa(this))}),Pa("keys",function(){return Na.call(xa(this))}),Pa("values",Sa,!Ua),Pa(Oa,Sa,!Ua);var Fa=pi.aTypedArray,ja=[].join;(0,pi.exportTypedArrayMethod)("join",function(e){return ja.apply(Fa(this),arguments)});var Ba=pi.aTypedArray;(0,pi.exportTypedArrayMethod)("lastIndexOf",function(e){return yr.apply(Ba(this),arguments)});var za=ua.map,Ga=pi.aTypedArray,Wa=pi.aTypedArrayConstructor;(0,pi.exportTypedArrayMethod)("map",function(e,t){return za(Ga(this),e,1<arguments.length?t:void 0,function(e,t){return new(Wa(St(e,e.constructor)))(t)})});function qa(c){return function(e,t,n,r){Tt(t);var i=Xt(e),a=ie(i),o=Fe(i.length),s=c?o-1:0,u=c?-1:1;if(n<2)for(;;){if(s in a){r=a[s],s+=u;break}if(s+=u,c?s<0:o<=s)throw TypeError("Reduce of empty array with no initial value")}for(;c?0<=s:s<o;s+=u)s in a&&(r=t(r,a[s],s,i));return r}}var Ka={left:qa(!1),right:qa(!0)},Ha=Ka.left,Ya=pi.aTypedArray;(0,pi.exportTypedArrayMethod)("reduce",function(e,t){return Ha(Ya(this),e,arguments.length,1<arguments.length?t:void 0)});var Za=Ka.right,$a=pi.aTypedArray;(0,pi.exportTypedArrayMethod)("reduceRight",function(e,t){return Za($a(this),e,arguments.length,1<arguments.length?t:void 0)});var Qa=pi.aTypedArray,Xa=pi.exportTypedArrayMethod,Ja=Math.floor;Xa("reverse",function(){for(var e,t=this,n=Qa(t).length,r=Ja(n/2),i=0;i<r;)e=t[i],t[i++]=t[--n],t[n]=e;return t});var eo=pi.aTypedArray;(0,pi.exportTypedArrayMethod)("set",function(e,t){eo(this);var n=Yi(1<arguments.length?t:void 0,1),r=this.length,i=Xt(e),a=Fe(i.length),o=0;if(r<a+n)throw RangeError("Wrong length");for(;o<a;)this[n+o]=i[o++]},j(function(){new Int8Array(1).set({})}));var to=pi.aTypedArray,no=pi.aTypedArrayConstructor,ro=[].slice;(0,pi.exportTypedArrayMethod)("slice",function(e,t){for(var n=ro.call(to(this),e,t),r=St(this,this.constructor),i=0,a=n.length,o=new(no(r))(a);i<a;)o[i]=n[i++];return o},j(function(){new Int8Array(1).slice()}));var io=ua.some,ao=pi.aTypedArray;(0,pi.exportTypedArrayMethod)("some",function(e,t){return io(ao(this),e,1<arguments.length?t:void 0)});var oo=pi.aTypedArray,so=[].sort;(0,pi.exportTypedArrayMethod)("sort",function(e){return so.call(oo(this),e)});var uo=pi.aTypedArray;(0,pi.exportTypedArrayMethod)("subarray",function(e,t){var n=uo(this),r=n.length,i=je(e,r);return new(St(n,n.constructor))(n.buffer,n.byteOffset+i*n.BYTES_PER_ELEMENT,Fe((void 0===t?r:je(t,r))-i))});var co=Q.Int8Array,lo=pi.aTypedArray,ho=pi.exportTypedArrayMethod,fo=[].toLocaleString,po=[].slice,vo=!!co&&j(function(){fo.call(new co(1))});ho("toLocaleString",function(){return fo.apply(vo?po.call(lo(this)):lo(this),arguments)},j(function(){return[1,2].toLocaleString()!=new co([1,2]).toLocaleString()})||!j(function(){co.prototype.toLocaleString.call([1,2])}));var _o=pi.exportTypedArrayMethod,yo=Q.Uint8Array,go=yo&&yo.prototype||{},mo=[].toString,ko=[].join;j(function(){mo.call({})})&&(mo=function(){return ko.call(this)}),_o("toString",mo,go.toString!=mo);var Eo={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},wo=Rt("iterator"),bo=Rt("toStringTag"),Co=or.values;for(var Ro in Eo){var Io=Q[Ro],Ao=Io&&Io.prototype;if(Ao){if(Ao[wo]!==Co)try{fe(Ao,wo,Co)}catch(e){Ao[wo]=Co}if(Ao[bo]||fe(Ao,bo,Ro),Eo[Ro])for(var To in or)if(Ao[To]!==or[To])try{fe(Ao,To,or[To])}catch(e){Ao[To]=or[To]}}}function So(t,e,n,r){try{return r?e(Z(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&Z(i.call(t)),e}}function Oo(e,t,n){var r,i,a,o,s,u,c=Xt(e),l="function"==typeof this?this:Array,d=arguments.length,h=1<d?t:void 0,f=void 0!==h,p=Zi(c),v=0;if(f&&(h=Qi(h,2<d?n:void 0,2)),null==p||l==Array&&$i(p))for(i=new l(r=Fe(c.length));v<r;v++)u=f?h(c[v],v):c[v],Jt(i,v,u);else for(s=(o=p.call(c)).next,i=new l;!(a=s.call(o)).done;v++)u=f?So(o,h,[a.value,v],!0):a.value,Jt(i,v,u);return i.length=v,i}function Do(e){return e+22+75*(e<26)}function Lo(e){var t,n=[],r=(e=function(e){for(var t=[],n=0,r=e.length;n<r;){var i,a=e.charCodeAt(n++);55296<=a&&a<=56319&&n<r?56320==(64512&(i=e.charCodeAt(n++)))?t.push(((1023&a)<<10)+(1023&i)+65536):(t.push(a),n--):t.push(a)}return t}(e)).length,i=128,a=0,o=72;for(l=0;l<e.length;l++)(t=e[l])<128&&n.push(Qo(t));var s=n.length,u=s;for(s&&n.push("-");u<r;){for(var c=Ko,l=0;l<e.length;l++)i<=(t=e[l])&&t<c&&(c=t);var d=u+1;if(c-i>$o((Ko-a)/d))throw RangeError(Zo);for(a+=(c-i)*d,i=c,l=0;l<e.length;l++){if((t=e[l])<i&&++a>Ko)throw RangeError(Zo);if(t==i){for(var h=a,f=36;;f+=36){var p=f<=o?1:o+26<=f?26:f-o;if(h<p)break;var v=h-p,_=36-p;n.push(Qo(Do(p+v%_))),h=$o(v/_)}n.push(Qo(Do(h))),o=function(e,t,n){var r=0;for(e=n?$o(e/700):e>>1,e+=$o(e/t);455<e;r+=36)e=$o(e/35);return $o(r+36*e/(e+38))}(a,d,u==s),a=0,++u}}++a,++i}return n.join("")}function No(e){var t=Zi(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return Z(t.call(e))}function Mo(t){try{return decodeURIComponent(t)}catch(e){return t}}function xo(e){var t=e.replace(os," "),n=4;try{return decodeURIComponent(t)}catch(e){for(;n;)t=t.replace(function(e){return ss[e-1]||(ss[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))}(n--),Mo);return t}}function Po(e){return cs[e]}function Vo(e){return encodeURIComponent(e).replace(us,Po)}function Uo(e,t){if(t)for(var n,r,i=t.split("&"),a=0;a<i.length;)(n=i[a++]).length&&(r=n.split("="),e.push({key:xo(r.shift()),value:xo(r.join("="))}))}function Fo(e){this.entries.length=0,Uo(this.entries,e)}function jo(e,t){if(e<t)throw TypeError("Not enough arguments")}var Bo=Rt("iterator"),zo=!j(function(){var e=new URL("b?a=1&b=2&c=3","http://a"),n=e.searchParams,r="";return e.pathname="c%20d",n.forEach(function(e,t){n.delete("b"),r+=t+e}),!n.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==n.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!n[Bo]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}),Go=Object.assign,Wo=Object.defineProperty,qo=!Go||j(function(){if(X&&1!==Go({b:1},Go(Wo({},"a",{enumerable:!0,get:function(){Wo(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return 1;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=Go({},e)[n]||En(Go({},t)).join("")!=r})?function(e,t){for(var n=Xt(e),r=arguments.length,i=1,a=at.f,o=te.f;i<r;)for(var s,u=ie(arguments[i++]),c=a?En(u).concat(a(u)):En(u),l=c.length,d=0;d<l;)s=c[d++],X&&!o.call(u,s)||(n[s]=u[s]);return n}:Go,Ko=2147483647,Ho=/[^\0-\u007E]/,Yo=/[.\u3002\uFF0E\uFF61]/g,Zo="Overflow: input needs wider integers to process",$o=Math.floor,Qo=String.fromCharCode,Xo=Ve("fetch"),Jo=Ve("Headers"),es=Rt("iterator"),ts="URLSearchParams",ns=ts+"Iterator",rs=Ke.set,is=Ke.getterFor(ts),as=Ke.getterFor(ns),os=/\+/g,ss=Array(4),us=/[!'()~]|%20/g,cs={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},ls=Wn(function(e,t){rs(this,{type:ns,iterator:No(is(e).entries),kind:t})},"Iterator",function(){var e=as(this),t=e.kind,n=e.iterator.next(),r=n.value;return n.done||(n.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),n}),ds=function(e){ni(this,ds,ts);var t,n,r,i,a,o,s,u,c,l=0<arguments.length?e:void 0,d=[];if(rs(this,{type:ts,entries:d,updateURL:function(){},updateSearchParams:Fo}),void 0!==l)if(q(l))if("function"==typeof(t=Zi(l)))for(r=(n=t.call(l)).next;!(i=r.call(n)).done;){if((s=(o=(a=No(Z(i.value))).next).call(a)).done||(u=o.call(a)).done||!o.call(a).done)throw TypeError("Expected sequence with length 2");d.push({key:s.value+"",value:u.value+""})}else for(c in l)H(l,c)&&d.push({key:c,value:l[c]+""});else Uo(d,"string"==typeof l?"?"===l.charAt(0)?l.slice(1):l:l+"")},hs=ds.prototype;ti(hs,{append:function(e,t){jo(arguments.length,2);var n=is(this);n.entries.push({key:e+"",value:t+""}),n.updateURL()},delete:function(e){jo(arguments.length,1);for(var t=is(this),n=t.entries,r=e+"",i=0;i<n.length;)n[i].key===r?n.splice(i,1):i++;t.updateURL()},get:function(e){jo(arguments.length,1);for(var t=is(this).entries,n=e+"",r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){jo(arguments.length,1);for(var t=is(this).entries,n=e+"",r=[],i=0;i<t.length;i++)t[i].key===n&&r.push(t[i].value);return r},has:function(e){jo(arguments.length,1);for(var t=is(this).entries,n=e+"",r=0;r<t.length;)if(t[r++].key===n)return!0;return!1},set:function(e,t){jo(arguments.length,1);for(var n,r=is(this),i=r.entries,a=!1,o=e+"",s=t+"",u=0;u<i.length;u++)(n=i[u]).key===o&&(a?i.splice(u--,1):(a=!0,n.value=s));a||i.push({key:o,value:s}),r.updateURL()},sort:function(){for(var e,t,n=is(this),r=n.entries,i=r.slice(),a=r.length=0;a<i.length;a++){for(e=i[a],t=0;t<a;t++)if(r[t].key>e.key){r.splice(t,0,e);break}t===a&&r.push(e)}n.updateURL()},forEach:function(e,t){for(var n,r=is(this).entries,i=Qi(e,1<arguments.length?t:void 0,3),a=0;a<r.length;)i((n=r[a++]).value,n.key,this)},keys:function(){return new ls(this,"keys")},values:function(){return new ls(this,"values")},entries:function(){return new ls(this,"entries")}},{enumerable:!0}),He(hs,es,hs.entries),He(hs,"toString",function(){for(var e,t=is(this).entries,n=[],r=0;r<t.length;)e=t[r++],n.push(Vo(e.key)+"="+Vo(e.value));return n.join("&")},{enumerable:!0}),zn(ds,ts),We({global:!0,forced:!zo},{URLSearchParams:ds}),zo||"function"!=typeof Xo||"function"!=typeof Jo||We({global:!0,enumerable:!0,forced:!0},{fetch:function(e,t){var n,r,i,a=[e];return 1<arguments.length&&(q(n=t)&&(r=n.body,wr(r)===ts&&((i=n.headers?new Jo(n.headers):new Jo).has("content-type")||i.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),n=Tn(n,{body:B(0,String(r)),headers:B(0,i)}))),a.push(n)),Xo.apply(this,a)}});function fs(e,t){var n,r,i;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return Fs;if(!(n=Js(t.slice(1,-1))))return Fs;e.host=n}else if(ou(e)){if(t=function(e){for(var t,n=[],r=e.toLowerCase().replace(Yo,".").split("."),i=0;i<r.length;i++)t=r[i],n.push(Ho.test(t)?"xn--"+Lo(t):t);return n.join(".")}(t),Ys.test(t))return Fs;if(null===(n=Xs(t)))return Fs;e.host=n}else{if(Zs.test(t))return Fs;for(n="",r=Oo(t),i=0;i<r.length;i++)n+=iu(r[i],eu);e.host=n}}function ps(e){var t,n,r,i;if("number"==typeof e){for(t=[],n=0;n<4;n++)t.unshift(e%256),e=Ps(e/256);return t.join(".")}if("object"!=typeof e)return e;for(t="",r=function(e){for(var t=null,n=1,r=null,i=0,a=0;a<8;a++)0!==e[a]?(n<i&&(t=r,n=i),r=null,i=0):(null===r&&(r=a),++i);return n<i&&(t=r,n=i),t}(e),n=0;n<8;n++)i&&0===e[n]||(i=i&&!1,r===n?(t+=n?":":"::",i=!0):(t+=e[n].toString(16),n<7&&(t+=":")));return"["+t+"]"}function vs(e){return""!=e.username||""!=e.password}function _s(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme}function ys(e,t){var n;return 2==e.length&&Bs.test(e.charAt(0))&&(":"==(n=e.charAt(1))||!t&&"|"==n)}function gs(e){var t;return 1<e.length&&ys(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)}function ms(e){var t=e.path,n=t.length;!n||"file"==e.scheme&&1==n&&ys(t[0],!0)||t.pop()}function ks(e,t,n,r){var i,a,o,s,u,c,l=n||su,d=0,h="",f=!1,p=!1,v=!1;for(n||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace($s,"")),t=t.replace(Qs,""),i=Oo(t);d<=i.length;){switch(a=i[d],l){case su:if(!a||!Bs.test(a)){if(n)return Us;l=cu;continue}h+=a.toLowerCase(),l=uu;break;case uu:if(a&&(zs.test(a)||"+"==a||"-"==a||"."==a))h+=a.toLowerCase();else{if(":"!=a){if(n)return Us;h="",l=cu,d=0;continue}if(n&&(ou(e)!=H(au,h)||"file"==h&&(vs(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=h,n)return void(ou(e)&&au[e.scheme]==e.port&&(e.port=null));h="","file"==e.scheme?l=ku:ou(e)&&r&&r.scheme==e.scheme?l=lu:ou(e)?l=pu:"/"==i[d+1]?(l=du,d++):(e.cannotBeABaseURL=!0,e.path.push(""),l=Ru)}break;case cu:if(!r||r.cannotBeABaseURL&&"#"!=a)return Us;if(r.cannotBeABaseURL&&"#"==a){e.scheme=r.scheme,e.path=r.path.slice(),e.query=r.query,e.fragment="",e.cannotBeABaseURL=!0,l=Au;break}l="file"==r.scheme?ku:hu;continue;case lu:if("/"!=a||"/"!=i[d+1]){l=hu;continue}l=vu,d++;break;case du:if("/"==a){l=_u;break}l=Cu;continue;case hu:if(e.scheme=r.scheme,a==ws)e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,e.path=r.path.slice(),e.query=r.query;else if("/"==a||"\\"==a&&ou(e))l=fu;else if("?"==a)e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,e.path=r.path.slice(),e.query="",l=Iu;else{if("#"!=a){e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,e.path=r.path.slice(),e.path.pop(),l=Cu;continue}e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,e.path=r.path.slice(),e.query=r.query,e.fragment="",l=Au}break;case fu:if(!ou(e)||"/"!=a&&"\\"!=a){if("/"!=a){e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,l=Cu;continue}l=_u}else l=vu;break;case pu:if(l=vu,"/"!=a||"/"!=h.charAt(d+1))continue;d++;break;case vu:if("/"==a||"\\"==a)break;l=_u;continue;case _u:if("@"==a){f&&(h="%40"+h),f=!0,o=Oo(h);for(var _=0;_<o.length;_++){var y,g=o[_];":"!=g||v?(y=iu(g,ru),v?e.password+=y:e.username+=y):v=!0}h=""}else if(a==ws||"/"==a||"?"==a||"#"==a||"\\"==a&&ou(e)){if(f&&""==h)return"Invalid authority";d-=Oo(h).length+1,h="",l=yu}else h+=a;break;case yu:case gu:if(n&&"file"==e.scheme){l=wu;continue}if(":"!=a||p){if(a==ws||"/"==a||"?"==a||"#"==a||"\\"==a&&ou(e)){if(ou(e)&&""==h)return Fs;if(n&&""==h&&(vs(e)||null!==e.port))return;if(s=fs(e,h))return s;if(h="",l=bu,n)return;continue}"["==a?p=!0:"]"==a&&(p=!1),h+=a}else{if(""==h)return Fs;if(s=fs(e,h))return s;if(h="",l=mu,n==gu)return}break;case mu:if(!Gs.test(a)){if(a==ws||"/"==a||"?"==a||"#"==a||"\\"==a&&ou(e)||n){if(""!=h){var m=parseInt(h,10);if(65535<m)return js;e.port=ou(e)&&m===au[e.scheme]?null:m,h=""}if(n)return;l=bu;continue}return js}h+=a;break;case ku:if(e.scheme="file","/"==a||"\\"==a)l=Eu;else{if(!r||"file"!=r.scheme){l=Cu;continue}if(a==ws)e.host=r.host,e.path=r.path.slice(),e.query=r.query;else if("?"==a)e.host=r.host,e.path=r.path.slice(),e.query="",l=Iu;else{if("#"!=a){gs(i.slice(d).join(""))||(e.host=r.host,e.path=r.path.slice(),ms(e)),l=Cu;continue}e.host=r.host,e.path=r.path.slice(),e.query=r.query,e.fragment="",l=Au}}break;case Eu:if("/"==a||"\\"==a){l=wu;break}r&&"file"==r.scheme&&!gs(i.slice(d).join(""))&&(ys(r.path[0],!0)?e.path.push(r.path[0]):e.host=r.host),l=Cu;continue;case wu:if(a==ws||"/"==a||"\\"==a||"?"==a||"#"==a){if(!n&&ys(h))l=Cu;else if(""==h){if(e.host="",n)return;l=bu}else{if(s=fs(e,h))return s;if("localhost"==e.host&&(e.host=""),n)return;h="",l=bu}continue}h+=a;break;case bu:if(ou(e)){if(l=Cu,"/"!=a&&"\\"!=a)continue}else if(n||"?"!=a)if(n||"#"!=a){if(a!=ws&&(l=Cu,"/"!=a))continue}else e.fragment="",l=Au;else e.query="",l=Iu;break;case Cu:if(a==ws||"/"==a||"\\"==a&&ou(e)||!n&&("?"==a||"#"==a)){if(".."===(c=(c=h).toLowerCase())||"%2e."===c||".%2e"===c||"%2e%2e"===c?(ms(e),"/"==a||"\\"==a&&ou(e)||e.path.push("")):"."===(u=h)||"%2e"===u.toLowerCase()?"/"==a||"\\"==a&&ou(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&ys(h)&&(e.host&&(e.host=""),h=h.charAt(0)+":"),e.path.push(h)),h="","file"==e.scheme&&(a==ws||"?"==a||"#"==a))for(;1<e.path.length&&""===e.path[0];)e.path.shift();"?"==a?(e.query="",l=Iu):"#"==a&&(e.fragment="",l=Au)}else h+=iu(a,nu);break;case Ru:"?"==a?(e.query="",l=Iu):"#"==a?(e.fragment="",l=Au):a!=ws&&(e.path[0]+=iu(a,eu));break;case Iu:n||"#"!=a?a!=ws&&("'"==a&&ou(e)?e.query+="%27":e.query+="#"==a?"%23":iu(a,eu)):(e.fragment="",l=Au);break;case Au:a!=ws&&(e.fragment+=iu(a,tu))}d++}}function Es(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}}var ws,bs,Cs,Rs,Is,As,Ts,Ss={URLSearchParams:ds,getState:is},Os=Kt.codeAt,Ds=Q.URL,Ls=Ss.URLSearchParams,Ns=Ss.getState,Ms=Ke.set,xs=Ke.getterFor("URL"),Ps=Math.floor,Vs=Math.pow,Us="Invalid scheme",Fs="Invalid host",js="Invalid port",Bs=/[A-Za-z]/,zs=/[\d+-.A-Za-z]/,Gs=/\d/,Ws=/^(0x|0X)/,qs=/^[0-7]+$/,Ks=/^\d+$/,Hs=/^[\dA-Fa-f]+$/,Ys=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,Zs=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,$s=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,Qs=/[\u0009\u000A\u000D]/g,Xs=function(e){var t,n,r,i,a,o,s,u=e.split(".");if(u.length&&""==u[u.length-1]&&u.pop(),4<(t=u.length))return e;for(n=[],r=0;r<t;r++){if(""==(i=u[r]))return e;if(a=10,1<i.length&&"0"==i.charAt(0)&&(a=Ws.test(i)?16:8,i=i.slice(8==a?1:2)),""===i)o=0;else{if(!(10==a?Ks:8==a?qs:Hs).test(i))return e;o=parseInt(i,a)}n.push(o)}for(r=0;r<t;r++)if(o=n[r],r==t-1){if(o>=Vs(256,5-t))return null}else if(255<o)return null;for(s=n.pop(),r=0;r<n.length;r++)s+=n[r]*Vs(256,3-r);return s},Js=function(e){function t(){return e.charAt(h)}var n,r,i,a,o,s,u,c=[0,0,0,0,0,0,0,0],l=0,d=null,h=0;if(":"==t()){if(":"!=e.charAt(1))return;h+=2,d=++l}for(;t();){if(8==l)return;if(":"!=t()){for(n=r=0;r<4&&Hs.test(t());)n=16*n+parseInt(t(),16),h++,r++;if("."==t()){if(0==r)return;if(h-=r,6<l)return;for(i=0;t();){if(a=null,0<i){if(!("."==t()&&i<4))return;h++}if(!Gs.test(t()))return;for(;Gs.test(t());){if(o=parseInt(t(),10),null===a)a=o;else{if(0==a)return;a=10*a+o}if(255<a)return;h++}c[l]=256*c[l]+a,2!=++i&&4!=i||l++}if(4!=i)return;break}if(":"==t()){if(h++,!t())return}else if(t())return;c[l++]=n}else{if(null!==d)return;h++,d=++l}}if(null!==d)for(s=l-d,l=7;0!=l&&0<s;)u=c[l],c[l--]=c[d+s-1],c[d+--s]=u;else if(8!=l)return;return c},eu={},tu=qo({},eu,{" ":1,'"':1,"<":1,">":1,"`":1}),nu=qo({},tu,{"#":1,"?":1,"{":1,"}":1}),ru=qo({},nu,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),iu=function(e,t){var n=Os(e,0);return 32<n&&n<127&&!H(t,e)?e:encodeURIComponent(e)},au={ftp:21,file:null,http:80,https:443,ws:80,wss:443},ou=function(e){return H(au,e.scheme)},su={},uu={},cu={},lu={},du={},hu={},fu={},pu={},vu={},_u={},yu={},gu={},mu={},ku={},Eu={},wu={},bu={},Cu={},Ru={},Iu={},Au={},Tu=function(e,t){var n,r,i=ni(this,Tu,"URL"),a=1<arguments.length?t:void 0,o=String(e),s=Ms(i,{type:"URL"});if(void 0!==a)if(a instanceof Tu)n=xs(a);else if(r=ks(n={},String(a)))throw TypeError(r);if(r=ks(s,o,null,n))throw TypeError(r);var u=s.searchParams=new Ls,c=Ns(u);c.updateSearchParams(s.query),c.updateURL=function(){s.query=String(u)||null},X||(i.href=Ou.call(i),i.origin=Du.call(i),i.protocol=Lu.call(i),i.username=Nu.call(i),i.password=Mu.call(i),i.host=xu.call(i),i.hostname=Pu.call(i),i.port=Vu.call(i),i.pathname=Uu.call(i),i.search=Fu.call(i),i.searchParams=ju.call(i),i.hash=Bu.call(i))},Su=Tu.prototype,Ou=function(){var e=xs(this),t=e.scheme,n=e.username,r=e.password,i=e.host,a=e.port,o=e.path,s=e.query,u=e.fragment,c=t+":";return null!==i?(c+="//",vs(e)&&(c+=n+(r?":"+r:"")+"@"),c+=ps(i),null!==a&&(c+=":"+a)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(c+="?"+s),null!==u&&(c+="#"+u),c},Du=function(){var e=xs(this),t=e.scheme,n=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(e){return"null"}return"file"!=t&&ou(e)?t+"://"+ps(e.host)+(null!==n?":"+n:""):"null"},Lu=function(){return xs(this).scheme+":"},Nu=function(){return xs(this).username},Mu=function(){return xs(this).password},xu=function(){var e=xs(this),t=e.host,n=e.port;return null===t?"":null===n?ps(t):ps(t)+":"+n},Pu=function(){var e=xs(this).host;return null===e?"":ps(e)},Vu=function(){var e=xs(this).port;return null===e?"":String(e)},Uu=function(){var e=xs(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},Fu=function(){var e=xs(this).query;return e?"?"+e:""},ju=function(){return xs(this).searchParams},Bu=function(){var e=xs(this).fragment;return e?"#"+e:""};X&&wn(Su,{href:Es(Ou,function(e){var t=xs(this),n=String(e),r=ks(t,n);if(r)throw TypeError(r);Ns(t.searchParams).updateSearchParams(t.query)}),origin:Es(Du),protocol:Es(Lu,function(e){var t=xs(this);ks(t,String(e)+":",su)}),username:Es(Nu,function(e){var t=xs(this),n=Oo(String(e));if(!_s(t)){t.username="";for(var r=0;r<n.length;r++)t.username+=iu(n[r],ru)}}),password:Es(Mu,function(e){var t=xs(this),n=Oo(String(e));if(!_s(t)){t.password="";for(var r=0;r<n.length;r++)t.password+=iu(n[r],ru)}}),host:Es(xu,function(e){var t=xs(this);t.cannotBeABaseURL||ks(t,String(e),yu)}),hostname:Es(Pu,function(e){var t=xs(this);t.cannotBeABaseURL||ks(t,String(e),gu)}),port:Es(Vu,function(e){var t=xs(this);_s(t)||(""==(e=String(e))?t.port=null:ks(t,e,mu))}),pathname:Es(Uu,function(e){var t=xs(this);t.cannotBeABaseURL||(t.path=[],ks(t,e+"",bu))}),search:Es(Fu,function(e){var t=xs(this);""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",ks(t,e,Iu)),Ns(t.searchParams).updateSearchParams(t.query)}),searchParams:Es(ju),hash:Es(Bu,function(e){var t=xs(this);""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",ks(t,e,Au)):t.fragment=null})}),He(Su,"toJSON",function(){return Ou.call(this)},{enumerable:!0}),He(Su,"toString",function(){return Ou.call(this)},{enumerable:!0}),Ds&&(bs=Ds.createObjectURL,Cs=Ds.revokeObjectURL,bs&&He(Tu,"createObjectURL",function(e){return bs.apply(Ds,arguments)}),Cs&&He(Tu,"revokeObjectURL",function(e){return Cs.apply(Ds,arguments)})),zn(Tu,"URL"),We({global:!0,forced:!zo,sham:!X},{URL:Tu}),(Is=Rs=Rs||{}).REMOTE_AUDIO_AND_VIDEO="remote_audio_and_video",Is.REMOTE_AUDIO_ONLY="remote_audio_only",Is.LOCAL_REMOTE_AUDIOS="local_remote_audios",Is.LOCAL_AUDIO_REMOTE_AUDIO_AND_VIDEO="local_audio_remote_audio_and_video",Is.LOCAL_AUDIO_AND_VIDEO_REMOTE_AUDIO="local_audio_and_video_remote_audio",(Ts=As=As||{})[Ts.defaultVideoWidth=1280]="defaultVideoWidth",Ts[Ts.defaultVideoHeight=720]="defaultVideoHeight",Ts[Ts.defaultFrameRate=24]="defaultFrameRate";var zu="toString",Gu=RegExp.prototype,Wu=Gu[zu],qu=j(function(){return"/a/b"!=Wu.call({source:"a",flags:"b"})}),Ku=Wu.name!=zu;(qu||Ku)&&He(RegExp.prototype,zu,function(){var e=Z(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in Gu)?qe.call(e):n)},{unsafe:!0});function Hu(c){return function(e,t,n){var r,i,a=String(G(e)),o=a.length,s=void 0===n?" ":String(n),u=Fe(t);return u<=o||""==s?a:(r=u-o,(i=$u.call(s,Qu(r/s.length))).length>r&&(i=i.slice(0,r)),c?a+i:i+a)}}var Yu,Zu,$u="".repeat||function(e){var t=String(G(this)),n="",r=Ue(e);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;0<r;(r>>>=1)&&(t+=t))1&r&&(n+=t);return n},Qu=Math.ceil,Xu={start:Hu(!1),end:Hu(!0)},Ju=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(on),ec=Xu.start;We({target:"String",proto:!0,forced:Ju},{padStart:function(e,t){return ec(this,e,1<arguments.length?t:void 0)}}),(Zu=Yu=Yu||{}).VERBOSE="VERBOSE",Zu.DEBUG="DEBUG",Zu.INFO="INFO",Zu.WARNING="WARNING",Zu.ERROR="ERROR",Zu.NONE="NONE";var tc,nc,rc,ic,ac,oc,sc,uc,cc,lc,dc,hc,fc,pc,vc,_c={VERBOSE:{level:-1,name:Yu.VERBOSE,public:!1},DEBUG:{level:1,name:Yu.DEBUG,public:!1},INFO:{level:2,name:Yu.INFO,public:!0},WARNING:{level:3,name:Yu.WARNING,public:!0},ERROR:{level:4,name:Yu.ERROR,public:!0},NONE:{level:100,name:Yu.NONE,public:!0}},yc=new(function(){function e(){y(this,e),this.level=Yu.NONE}return s(e,[{key:"setLoggerLevel",value:function(e){var t;return null!==(t=_c[e])&&void 0!==t&&t.public&&(this.level=e),this.level}},{key:"verbose",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._permit.apply(this,[Yu.VERBOSE].concat(t))}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._permit.apply(this,[Yu.DEBUG].concat(t))}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._permit.apply(this,[Yu.INFO].concat(t))}},{key:"warning",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._permit.apply(this,[Yu.WARNING].concat(t))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._permit.apply(this,[Yu.ERROR].concat(t))}},{key:"_enabledFor",value:function(e){try{return _c[this.level].level<=_c[e].level}catch(e){return!1}}},{key:"_getLogType",value:function(e){switch(e){case Yu.ERROR:return"error";case Yu.WARNING:return"warn";default:return"log"}}},{key:"_getTimeString",value:function(){var e=new Date,t=e.getFullYear().toString().padStart(2,"0"),n=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getDate().toString().padStart(2,"0"),i=e.getHours().toString().padStart(2,"0"),a=e.getMinutes().toString().padStart(2,"0"),o=e.getSeconds().toString().padStart(2,"0"),s=e.getMilliseconds().toString().padStart(2,"0");return"[".concat(t,".").concat(n,".").concat(r," ").concat(i,":").concat(a,":").concat(o,":").concat(s,"]")}},{key:"_permit",value:function(e){var t=this._getLogType(e);if(this._enabledFor(e)&&console&&console[t]){for(var n,r="".concat(this._getTimeString()," [").concat(e,"]"),i=arguments.length,a=new Array(1<i?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];(n=console)[t].apply(n,[r].concat(a))}}}]),e}()),gc=null,mc=function(){function _(){y(this,_)}return s(_,null,[{key:"defaultFileName",value:function(e,t){var n=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString(),r=(n=n.replace(/-|:/g,"")).lastIndexOf(".");return"".concat(e,"_").concat(t,"_").concat(n.substring(0,r),".mp4")}},{key:"downloadRecordedFile",value:function(e,t){var n=window.URL.createObjectURL(e),r=document.createElement("a");r.style.display="none",r.href=n,r.download=t,document.body.appendChild(r),r.click(),setTimeout(function(){document.body.removeChild(r),window.URL.revokeObjectURL(n)},100)}},{key:"getMergedAudioStream",value:function(e,t){var n=[],r=(gc=gc||new(window.AudioContext||window.webkitAudioContext)).createGain();r.connect(gc.destination),r.gain.value=1;var i=new MediaStream;i.addTrack(e),n.push(gc.createMediaStreamSource(i).connect(r));var a=new MediaStream;a.addTrack(t),n.push(gc.createMediaStreamSource(a).connect(r));for(var o=gc.createMediaStreamDestination(),s=0,u=n;s<u.length;s++){u[s].connect(o)}return o.stream.getAudioTracks()[0]}},{key:"getVideoStream",value:function(r){var i=document.createElement("canvas");i.width=As.defaultVideoWidth,i.height=As.defaultVideoHeight;var a=i.getContext("2d"),e=setInterval(function(){var e,t=r.videoWidth,n=r.videoHeight;n>i.height&&(e=r.videoWidth/r.videoHeight,t=(n=i.height)*e),a.drawImage(r,i.width/2-t/2,i.height/2-n/2,t,n)},10);return{stream:i.captureStream(),cleanup:function(){return clearInterval(e)}}}},{key:"createStream",value:function(e,t){var n={mimeType:"video/webm"},r=e.localMediaView.srcObject,i=e.remoteMediaView.srcObject;switch(t){case Rs.REMOTE_AUDIO_AND_VIDEO:return{stream:i,options:n};case Rs.REMOTE_AUDIO_ONLY:n.mimeType="audio/webm";var a=new MediaStream;return a.addTrack(i.getAudioTracks()[0]),{stream:a,options:n};case Rs.LOCAL_REMOTE_AUDIOS:n.mimeType="audio/webm";var o=new MediaStream,s=_.getMergedAudioStream(r.getAudioTracks()[0],i.getAudioTracks()[0]);return o.addTrack(s),{stream:o,options:n};case Rs.LOCAL_AUDIO_REMOTE_AUDIO_AND_VIDEO:var u=_.getVideoStream(e.remoteMediaView),c=u.stream,l=u.cleanup,d=_.getMergedAudioStream(r.getAudioTracks()[0],i.getAudioTracks()[0]);return c.addTrack(d),{stream:c,options:n,cleanup:l};case Rs.LOCAL_AUDIO_AND_VIDEO_REMOTE_AUDIO:var h=_.getVideoStream(e.localMediaView),f=h.stream,p=h.cleanup,v=_.getMergedAudioStream(r.getAudioTracks()[0],i.getAudioTracks()[0]);return f.addTrack(v),{stream:f,options:n,cleanup:p};default:return yc.error("Cannot reach here!"),{options:n}}}},{key:"transCodingToMP4",value:function(e,t,n){var r=new FileReader;r.onload=function(){t.postMessage({type:"run",arguments:"-i recording.webm -c:v copy ".concat(n).split(" "),MEMFS:[{name:"recording.webm",data:new Uint8Array(r.result)}]})},r.readAsArrayBuffer(new Blob(e,{type:'video/mp4; codec="h264, mp4a402"'}))}}]),_}(),kc=function e(t){y(this,e),this.recordingType=t.recordingType,this.callId=t.callId,t.fileName?"mp4"!==t.fileName.toLocaleLowerCase().split(".").reverse()[0]?this.fileName="".concat(t.fileName,".mp4"):this.fileName=t.fileName:this.fileName=mc.defaultFileName(this.recordingType,this.callId)},Ec=!j(function(){return Object.isExtensible(Object.preventExtensions({}))}),wc=U(function(e){function n(e){t(e,r,{value:{objectID:"O"+ ++i,weakData:{}}})}var t=he.f,r=ye("meta"),i=0,a=Object.isExtensible||function(){return!0},o=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!q(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!H(e,r)){if(!a(e))return"F";if(!t)return"E";n(e)}return e[r].objectID},getWeakData:function(e,t){if(!H(e,r)){if(!a(e))return!0;if(!t)return!1;n(e)}return e[r].weakData},onFreeze:function(e){return Ec&&o.REQUIRED&&a(e)&&!H(e,r)&&n(e),e}};Me[r]=!0}),bc=(wc.REQUIRED,wc.fastKey,wc.getWeakData,wc.onFreeze,U(function(e){function f(e,t){this.stopped=e,this.result=t}(e.exports=function(e,t,n,r,i){var a,o,s,u,c,l,d,h=Qi(t,n,r?2:1);if(i)a=e;else{if("function"!=typeof(o=Zi(e)))throw TypeError("Target is not iterable");if($i(o)){for(s=0,u=Fe(e.length);s<u;s++)if((c=r?h(Z(d=e[s])[0],d[1]):h(e[s]))&&c instanceof f)return c;return new f(!1)}a=o.call(e)}for(l=a.next;!(d=l.call(a)).done;)if("object"==typeof(c=So(a,h,d.value,r))&&c&&c instanceof f)return c;return new f(!1)}).stop=function(e){return new f(!0,e)}})),Cc=he.f,Rc=wc.fastKey,Ic=Ke.set,Ac=Ke.getterFor;nc=function(t){return function(e){return t(this,arguments.length?e:void 0)}},rc={getConstructor:function(e,n,r,i){function a(e,t,n){var r,i,a=s(e),o=u(e,t);return o?o.value=n:(a.last=o={index:i=Rc(t,!0),key:t,value:n,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=o),r&&(r.next=o),X?a.size++:e.size++,"F"!==i&&(a.index[i]=o)),e}var o=e(function(e,t){ni(e,o,n),Ic(e,{type:n,index:Tn(null),first:void 0,last:void 0,size:0}),X||(e.size=0),null!=t&&bc(t,e[i],e,r)}),s=Ac(n),u=function(e,t){var n,r=s(e),i=Rc(t);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==t)return n};return ti(o.prototype,{clear:function(){for(var e=s(this),t=e.index,n=e.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete t[n.index],n=n.next;e.first=e.last=void 0,X?e.size=0:this.size=0},delete:function(e){var t,n,r=s(this),i=u(this,e);return i&&(t=i.next,n=i.previous,delete r.index[i.index],i.removed=!0,n&&(n.next=t),t&&(t.previous=n),r.first==i&&(r.first=t),r.last==i&&(r.last=n),X?r.size--:this.size--),!!i},forEach:function(e,t){for(var n,r=s(this),i=Qi(e,1<arguments.length?t:void 0,3);n=n?n.next:r.first;)for(i(n.value,n.key,this);n&&n.removed;)n=n.previous},has:function(e){return!!u(this,e)}}),ti(o.prototype,r?{get:function(e){var t=u(this,e);return t&&t.value},set:function(e,t){return a(this,0===e?0:e,t)}}:{add:function(e){return a(this,e=0===e?0:e,e)}}),X&&Cc(o.prototype,"size",{get:function(){return s(this).size}}),o},setStrong:function(e,t,n){var r=t+" Iterator",i=Ac(t),a=Ac(r);Kn(e,t,function(e,t){Ic(this,{type:r,target:e,state:i(e),kind:t,last:void 0})},function(){for(var e=a(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:{value:e.target=void 0,done:!0}},n?"entries":"values",!n,!0),ea(t)}},cc=-1!==(tc="Map").indexOf("Map"),lc=-1!==tc.indexOf("Weak"),dc=cc?"set":"add",hc=Q[tc],fc=hc&&hc.prototype,vc={},ht(tc,"function"!=typeof(pc=hc)||!(lc||fc.forEach&&!j(function(){(new hc).entries().next()})))?(pc=rc.getConstructor(nc,tc,cc,dc),wc.REQUIRED=!0):ht(tc,!0)&&(ac=(ic=new pc)[dc](lc?{}:-0,1)!=ic,oc=j(function(){ic.has(1)}),sc=Vr(function(e){new hc(e)}),uc=!lc&&j(function(){for(var e=new hc,t=5;t--;)e[dc](t,t);return!e.has(-0)}),sc||(((pc=nc(function(e,t){ni(e,pc,tc);var n=ta(new hc,e,pc);return null!=t&&bc(t,n[dc],n,cc),n})).prototype=fc).constructor=pc),(oc||uc)&&(Tc("delete"),Tc("has"),cc&&Tc("get")),(uc||ac)&&Tc(dc),lc&&fc.clear&&delete fc.clear),vc[tc]=pc,We({global:!0,forced:pc!=hc},vc),zn(pc,tc),lc||rc.setStrong(pc,tc,cc);function Tc(e){var n=fc[e];He(fc,e,"add"==e?function(e){return n.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(lc&&!q(e))&&n.call(this,0===e?0:e)}:"get"==e?function(e){return lc&&!q(e)?void 0:n.call(this,0===e?0:e)}:"has"==e?function(e){return!(lc&&!q(e))&&n.call(this,0===e?0:e)}:function(e,t){return n.call(this,0===e?0:e,t),this})}var Sc,Oc;U(function(e){var t=function(o){var d,e=Object.prototype,l=e.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},i=t.iterator||"@@iterator",n=t.asyncIterator||"@@asyncIterator",r=t.toStringTag||"@@toStringTag";function s(e,t,n,r){var a,o,s,u,i=t&&t.prototype instanceof g?t:g,c=Object.create(i.prototype),l=new I(r||[]);return c._invoke=(a=e,o=n,s=l,u=f,function(e,t){if(u===v)throw new Error("Generator is already running");if(u===_){if("throw"===e)throw t;return T()}for(s.method=e,s.arg=t;;){var n=s.delegate;if(n){var r=function e(t,n){var r=t.iterator[n.method];if(r===d){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=d,e(t,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var i=h(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=d),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}(n,s);if(r){if(r===y)continue;return r}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(u===f)throw u=_,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);u=v;var i=h(a,o,s);if("normal"===i.type){if(u=s.done?_:p,i.arg===y)continue;return{value:i.arg,done:s.done}}"throw"===i.type&&(u=_,s.method="throw",s.arg=i.arg)}}),c}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}o.wrap=s;var f="suspendedStart",p="suspendedYield",v="executing",_="completed",y={};function g(){}function a(){}function u(){}var c={};c[i]=function(){return this};var m=Object.getPrototypeOf,k=m&&m(m(A([])));k&&k!==e&&l.call(k,i)&&(c=k);var E=u.prototype=g.prototype=Object.create(c);function w(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function b(u,c){var t;this._invoke=function(n,r){function e(){return new c(function(e,t){!function t(e,n,r,i){var a=h(u[e],u,n);if("throw"!==a.type){var o=a.arg,s=o.value;return s&&"object"==typeof s&&l.call(s,"__await")?c.resolve(s.__await).then(function(e){t("next",e,r,i)},function(e){t("throw",e,r,i)}):c.resolve(s).then(function(e){o.value=e,r(o)},function(e){return t("throw",e,r,i)})}i(a.arg)}(n,r,e,t)})}return t=t?t.then(e,e):e()}}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function A(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(l.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=d,e.done=!0,e};return r.next=r}}return{next:T}}function T(){return{value:d,done:!0}}return(a.prototype=E.constructor=u).constructor=a,u[r]=a.displayName="GeneratorFunction",o.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))},o.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,u):(e.__proto__=u,r in e||(e[r]="GeneratorFunction")),e.prototype=Object.create(E),e},o.awrap=function(e){return{__await:e}},w(b.prototype),b.prototype[n]=function(){return this},o.AsyncIterator=b,o.async=function(e,t,n,r,i){void 0===i&&(i=Promise);var a=new b(s(e,t,n,r),i);return o.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},w(E),E[r]="Generator",E[i]=function(){return this},E.toString=function(){return"[object Generator]"},o.keys=function(n){var r=[];for(var e in n)r.push(e);return r.reverse(),function e(){for(;r.length;){var t=r.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},o.values=A,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=d,this.done=!1,this.delegate=null,this.method="next",this.arg=d,this.tryEntries.forEach(R),!e)for(var t in this)"t"===t.charAt(0)&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=d)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,t){return a.type="throw",a.arg=n,r.next=e,t&&(r.method="next",r.arg=d),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var i=this.tryEntries[t],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var o=l.call(i,"catchLoc"),s=l.call(i,"finallyLoc");if(o&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&l.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),R(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r,i=n.completion;return"throw"===i.type&&(r=i.arg,R(n)),r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:A(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=d),y}},o}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}});(Oc=Sc=Sc||{}).DIALING="DIALING",Oc.RINGING="RINGING",Oc.RECONNECTING="RECONNECTING",Oc.RECONNECTED="RECONNECTED";var Dc,Lc,Nc,Mc,xc,Pc,Vc=function(){function e(){y(this,e),this.audioElms=new Map}var t,n;return s(e,[{key:"loadSound",value:(n=v(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("string"==typeof n&&n){e.next=2;break}return e.abrupt("return",!1);case 2:return(r=this._createAudio(t)).src=n,e.prev=4,e.next=7,r.play();case 7:r.pause(),r.currentTime=0,this.audioElms.set(t,r),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(4),yc.error(e.t0),e.abrupt("return",!1);case 16:return e.abrupt("return",!0);case 17:case"end":return e.stop()}},e,this,[[4,12]])})),function(e,t){return n.apply(this,arguments)})},{key:"unloadSound",value:function(e){return!!this.audioElms.get(e)&&this.audioElms.delete(e)}},{key:"playSound",value:(t=v(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.audioElms.get(t)){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,n.play();case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(3),yc.error(e.t0),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}},e,this,[[3,8]])})),function(e){return t.apply(this,arguments)})},{key:"stopSound",value:function(e){var t=this.audioElms.get(e);return!!t&&t.pause()}},{key:"stopAllSound",value:function(){var e,t=C(this.audioElms.values());try{for(t.s();!(e=t.n()).done;){e.value.pause()}}catch(e){t.e(e)}finally{t.f()}}},{key:"isPlaying",value:function(e){var t=this.audioElms.get(e);return t&&!t.paused}},{key:"_isLoop",value:function(e){return e===Sc.DIALING||e===Sc.RINGING}},{key:"_createAudio",value:function(e){var t=new Audio;return t.autoplay=!1,t.muted=!1,t.loop=this._isLoop(e),t}}]),e}();(Lc=Dc=Dc||{})[Lc.DIAL_CANCELED=1800100]="DIAL_CANCELED",Lc[Lc.MY_USER_ID_NOT_ALLOWED=1800101]="MY_USER_ID_NOT_ALLOWED",Lc[Lc.ERR_REQUEST_FAILED=1800200]="ERR_REQUEST_FAILED",Lc[Lc.ERR_WEBSOCKET_CONNECTION_NOT_OPENED=1800201]="ERR_WEBSOCKET_CONNECTION_NOT_OPENED",Lc[Lc.ERR_WEBSOCKET_CONNECTION_FAILED=1800202]="ERR_WEBSOCKET_CONNECTION_FAILED",Lc[Lc.ERR_NO_RESPONSE_DUE_TO_TIMEOUT=1800203]="ERR_NO_RESPONSE_DUE_TO_TIMEOUT",Lc[Lc.ERR_REQUEST_FAILED_DUE_TO_WEBSOCKET_CONNECTION_LOST=1800204]="ERR_REQUEST_FAILED_DUE_TO_WEBSOCKET_CONNECTION_LOST",Lc[Lc.ERR_WRONG_RESPONSE=1800205]="ERR_WRONG_RESPONSE",Lc[Lc.ERR_QUERY_IN_PROGRESS=1800206]="ERR_QUERY_IN_PROGRESS",Lc[Lc.INTERNAL_SERVER_ERROR=1800207]="INTERNAL_SERVER_ERROR",Lc[Lc.ERR_MALFORMED_DATA=1800208]="ERR_MALFORMED_DATA",Lc[Lc.INVALID_PARAMETER_VALUE=1800300]="INVALID_PARAMETER_VALUE",Lc[Lc.INVALID_PARAMETER_TYPE=1800301]="INVALID_PARAMETER_TYPE",Lc[Lc.INSTANCE_NOT_INITIALIZED=1800302]="INSTANCE_NOT_INITIALIZED",Lc[Lc.USER_NOT_AUTHENTICATED=1800303]="USER_NOT_AUTHENTICATED",Lc[Lc.CAMERA_ALREADY_SWITCHING=1800400]="CAMERA_ALREADY_SWITCHING",Lc[Lc.ERR_CAMERA_SWITCH=1800401]="ERR_CAMERA_SWITCH",Lc[Lc.ERR_CHANGING_AUDIO_DEVICE=1800402]="ERR_CHANGING_AUDIO_DEVICE",Lc[Lc.ERR_CAPTURE_NOT_ALLOWED_ON_AUDIO_CALL=1800600]="ERR_CAPTURE_NOT_ALLOWED_ON_AUDIO_CALL",Lc[Lc.ERR_VIDEO_VIEW_NOT_READY=1800601]="ERR_VIDEO_VIEW_NOT_READY",Lc[Lc.ERR_VIDEO_CALL_NOT_CONNECTED_YET=1800602]="ERR_VIDEO_CALL_NOT_CONNECTED_YET",Lc[Lc.ERR_FAILED_TO_GET_IMAGE_FROM_VIDEO_STREAM=1800603]="ERR_FAILED_TO_GET_IMAGE_FROM_VIDEO_STREAM",Lc[Lc.ERR_SERVER_INTERNAL_ERROR=1400999]="ERR_SERVER_INTERNAL_ERROR",Lc[Lc.ERR_INVALID_CALL_STATUS=1400101]="ERR_INVALID_CALL_STATUS",Lc[Lc.ERR_CALL_DOES_NOT_EXIST=1400102]="ERR_CALL_DOES_NOT_EXIST",Lc[Lc.ERR_CALLEE_DOES_NOT_EXIST=1400103]="ERR_CALLEE_DOES_NOT_EXIST",Lc[Lc.ERR_DIAL_MYSELF=1400104]="ERR_DIAL_MYSELF",Lc[Lc.ERR_NO_PERMISSION=1400105]="ERR_NO_PERMISSION",Lc[Lc.ERR_CALLEE_NEVER_AUTHENTICATE=1400106]="ERR_CALLEE_NEVER_AUTHENTICATE",Lc[Lc.ERR_CALL_NOT_CONNECTED_YET=1800610]="ERR_CALL_NOT_CONNECTED_YET",Lc[Lc.ERR_WRONG_RECORDING_TYPE_FOR_AUDIO_CALL=1800611]="ERR_WRONG_RECORDING_TYPE_FOR_AUDIO_CALL",Lc[Lc.ERR_RECORDING_ALREADY_IN_PROGRESS=1800612]="ERR_RECORDING_ALREADY_IN_PROGRESS",Lc[Lc.ERR_FAILED_TO_OPEN_FILE=1800613]="ERR_FAILED_TO_OPEN_FILE",Lc[Lc.ERR_FAILED_TO_START_RECORDING=1800614]="ERR_FAILED_TO_START_RECORDING",Lc[Lc.ERR_FAILED_TO_STOP_RECORDING=1800615]="ERR_FAILED_TO_STOP_RECORDING",Lc[Lc.ERR_NOT_SUPPORTED_BROWSER_FOR_RECORDING=1800616]="ERR_NOT_SUPPORTED_BROWSER_FOR_RECORDING",Lc[Lc.ERR_INVALID_RECORDING_TYPE=1800617]="ERR_INVALID_RECORDING_TYPE",Lc[Lc.ERR_NOT_SUPPORTED_OS_VERSION_FOR_RECORDING=1800618]="ERR_NOT_SUPPORTED_OS_VERSION_FOR_RECORDING",(Mc=Nc=Nc||{}).NONE="NONE",Mc.ERROR="ERROR",Mc.WARNING="WARNING",Mc.INFO="INFO",(Pc=xc=xc||{}).RECORDING="recording",Pc.NONE="none";var Uc=et.indexOf,Fc=[].indexOf,jc=!!Fc&&1/[1].indexOf(1,-0)<0,Bc=sr("indexOf"),zc=cr("indexOf",{ACCESSORS:!0,1:0});function Gc(a){return function(r){var i=r.descriptor.value;return r.descriptor.value=function(){if(Gc.checkIE())throw new Error(null!=a?a:"Method ".concat(r.key," is not supported in Internet Explorer"));for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.call.apply(i,[this].concat(t))},r}}We({target:"Array",proto:!0,forced:jc||!Bc||!zc},{indexOf:function(e,t){return jc?Fc.apply(this,arguments)||0:Uc(this,e,1<arguments.length?t:void 0)}}),It("match",1,function(r,c,l){return[function(e){var t=G(this),n=null==e?void 0:e[r];return void 0!==n?n.call(e,t):new RegExp(e)[r](String(t))},function(e){var t=l(c,e,this);if(t.done)return t.value;var n=Z(e),r=String(this);if(!n.global)return Lt(n,r);for(var i,a=n.unicode,o=[],s=n.lastIndex=0;null!==(i=Lt(n,r));){var u=String(i[0]);""===(o[s]=u)&&(n.lastIndex=Dt(r,Fe(n.lastIndex),a)),s++}return 0===s?null:o}]}),Gc.checkIE=function(){return!!window&&(0<window.navigator.userAgent.indexOf("MSIE ")||!!navigator.userAgent.match(/Trident.*rv:11\./))},Gc.messages={CALL_IS_NOT_SUPPORTED:"Call is not supported in Internet Explorer"};for(var Wc,qc=(function(e){var t,n,r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);r?(t=new Uint8Array(16),e.exports=function(){return r(t),t}):(n=new Array(16),e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n})}(Wc={exports:{}}),Wc.exports),Kc=[],Hc=0;Hc<256;++Hc)Kc[Hc]=(Hc+256).toString(16).substr(1);var Yc=function(e,t){var n=t||0;return[Kc[e[n++]],Kc[e[n++]],Kc[e[n++]],Kc[e[n++]],"-",Kc[e[n++]],Kc[e[n++]],"-",Kc[e[n++]],Kc[e[n++]],"-",Kc[e[n++]],Kc[e[n++]],"-",Kc[e[n++]],Kc[e[n++]],Kc[e[n++]],Kc[e[n++]],Kc[e[n++]],Kc[e[n++]]].join("")};var Zc=function(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||qc)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var a=0;a<16;++a)t[r+a]=i[a];return t||Yc(i)},$c=function(){function i(e){var t=e.ringingTimeout,n=e.callConnectionTimeout,r=e.statsInterval;y(this,i),this._ringingTimeout=t,this._callConnectionTimeout=n,this._statsInterval=r}return s(i,[{key:"ringingTimeoutValue",get:function(){return this._ringingTimeout}},{key:"callConnectionTimeoutValue",get:function(){return this._callConnectionTimeout}},{key:"statsIntervalValue",get:function(){return this._statsInterval}}]),i}(),Qc=ua.filter,Xc=ln("filter"),Jc=cr("filter");We({target:"Array",proto:!0,forced:!Xc||!Jc},{filter:function(e,t){return Qc(this,e,1<arguments.length?t:void 0)}});var el=ua.forEach,tl=sr("forEach"),nl=cr("forEach"),rl=tl&&nl?[].forEach:function(e,t){return el(this,e,1<arguments.length?t:void 0)};We({target:"Array",proto:!0,forced:[].forEach!=rl},{forEach:rl});var il=et.includes,al=cr("indexOf",{ACCESSORS:!0,1:0});We({target:"Array",proto:!0,forced:!al},{includes:function(e,t){return il(this,e,1<arguments.length?t:void 0)}}),Dn("includes");var ol=he.f,sl=Function.prototype,ul=sl.toString,cl=/^\s*function ([^ (]*)/;!X||"name"in sl||ol(sl,"name",{configurable:!0,get:function(){try{return ul.call(this).match(cl)[1]}catch(e){return""}}});var ll=j(function(){En(1)});We({target:"Object",stat:!0,forced:ll},{keys:function(e){return En(Xt(e))}});function dl(e){var t;Al.hasOwnProperty(e)&&(t=Al[e],delete Al[e],t())}function hl(e){return function(){dl(e)}}function fl(e){dl(e.data)}function pl(e){Q.postMessage(e+"",kl.protocol+"//"+kl.host)}var vl,_l,yl,gl=Q.Promise,ml=/(iphone|ipod|ipad).*applewebkit/i.test(on),kl=Q.location,El=Q.setImmediate,wl=Q.clearImmediate,bl=Q.process,Cl=Q.MessageChannel,Rl=Q.Dispatch,Il=0,Al={},Tl="onreadystatechange";El&&wl||(El=function(e){for(var t=[],n=1;n<arguments.length;)t.push(arguments[n++]);return Al[++Il]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},vl(Il),Il},wl=function(e){delete Al[e]},"process"==z(bl)?vl=function(e){bl.nextTick(hl(e))}:Rl&&Rl.now?vl=function(e){Rl.now(hl(e))}:Cl&&!ml?(yl=(_l=new Cl).port2,_l.port1.onmessage=fl,vl=Qi(yl.postMessage,yl,1)):!Q.addEventListener||"function"!=typeof postMessage||Q.importScripts||j(pl)||"file:"===kl.protocol?vl=Tl in Y("script")?function(e){bn.appendChild(Y("script"))[Tl]=function(){bn.removeChild(this),dl(e)}}:function(e){setTimeout(hl(e),0)}:(vl=pl,Q.addEventListener("message",fl,!1)));var Sl,Ol,Dl,Ll,Nl,Ml,xl,Pl,Vl={set:El,clear:wl},Ul=le.f,Fl=Vl.set,jl=Q.MutationObserver||Q.WebKitMutationObserver,Bl=Q.process,zl=Q.Promise,Gl="process"==z(Bl),Wl=Ul(Q,"queueMicrotask"),ql=Wl&&Wl.value;ql||(Sl=function(){var e,t;for(Gl&&(e=Bl.domain)&&e.exit();Ol;){t=Ol.fn,Ol=Ol.next;try{t()}catch(e){throw Ol?Ll():Dl=void 0,e}}Dl=void 0,e&&e.enter()},Ll=Gl?function(){Bl.nextTick(Sl)}:jl&&!ml?(Nl=!0,Ml=document.createTextNode(""),new jl(Sl).observe(Ml,{characterData:!0}),function(){Ml.data=Nl=!Nl}):zl&&zl.resolve?(xl=zl.resolve(void 0),Pl=xl.then,function(){Pl.call(xl,Sl)}):function(){Fl.call(Q,Sl)});function Kl(e){var n,r;this.promise=new e(function(e,t){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=e,r=t}),this.resolve=Tt(n),this.reject=Tt(r)}function Hl(e,t){if(Z(e),q(t)&&t.constructor===e)return t;var n=ad.f(e);return(0,n.resolve)(t),n.promise}function Yl(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}}function Zl(e){var t;return!(!q(e)||"function"!=typeof(t=e.then))&&t}function $l(d,h,f){var p;h.notified||(h.notified=!0,p=h.reactions,id(function(){for(var e=h.value,t=1==h.state,n=0;p.length>n;){var r,i,a,o=p[n++],s=t?o.ok:o.fail,u=o.resolve,c=o.reject,l=o.domain;try{s?(t||(2===h.rejection&&Id(d,h),h.rejection=1),!0===s?r=e:(l&&l.enter(),r=s(e),l&&(l.exit(),a=!0)),r===o.promise?c(fd("Promise-chain cycle")):(i=Zl(r))?i.call(r,u,c):u(r)):c(e)}catch(e){l&&!a&&l.exit(),c(e)}}h.reactions=[],h.notified=!1,f&&!h.rejection&&Cd(d,h)}))}function Ql(e,t,n){var r,i;kd?((r=pd.createEvent("Event")).promise=t,r.reason=n,r.initEvent(e,!1,!0),Q.dispatchEvent(r)):r={promise:t,reason:n},(i=Q["on"+e])?i(r):e===Ed&&function(e,t){var n=Q.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}("Unhandled promise rejection",n)}function Xl(t,n,r,i){return function(e){t(n,r,e,i)}}function Jl(e,t,n,r){t.done||(t.done=!0,r&&(t=r),t.value=n,t.state=2,$l(e,t,!0))}var ed,td,nd,rd,id=ql||function(e){var t={fn:e,next:void 0};Dl&&(Dl.next=t),Ol||(Ol=t,Ll()),Dl=t},ad={f:function(e){return new Kl(e)}},od=Vl.set,sd=Rt("species"),ud="Promise",cd=Ke.get,ld=Ke.set,dd=Ke.getterFor(ud),hd=gl,fd=Q.TypeError,pd=Q.document,vd=Q.process,_d=Ve("fetch"),yd=ad.f,gd=yd,md="process"==z(vd),kd=!!(pd&&pd.createEvent&&Q.dispatchEvent),Ed="unhandledrejection",wd=ht(ud,function(){if(!(Ae(hd)!==String(hd))){if(66===dn)return!0;if(!md&&"function"!=typeof PromiseRejectionEvent)return!0}if(51<=dn&&/native code/.test(hd))return!1;function e(e){e(function(){},function(){})}var t=hd.resolve(1);return(t.constructor={})[sd]=e,!(t.then(function(){})instanceof e)}),bd=wd||!Vr(function(e){hd.all(e).catch(function(){})}),Cd=function(n,r){od.call(Q,function(){var e,t=r.value;if(Rd(r)&&(e=Yl(function(){md?vd.emit("unhandledRejection",t,n):Ql(Ed,n,t)}),r.rejection=md||Rd(r)?2:1,e.error))throw e.value})},Rd=function(e){return 1!==e.rejection&&!e.parent},Id=function(e,t){od.call(Q,function(){md?vd.emit("rejectionHandled",e):Ql("rejectionhandled",e,t.value)})},Ad=function(n,r,e,t){if(!r.done){r.done=!0,t&&(r=t);try{if(n===e)throw fd("Promise can't be resolved itself");var i=Zl(e);i?id(function(){var t={done:!1};try{i.call(e,Xl(Ad,n,t,r),Xl(Jl,n,t,r))}catch(e){Jl(n,t,e,r)}}):(r.value=e,r.state=1,$l(n,r,!1))}catch(e){Jl(n,{done:!1},e,r)}}};wd&&(hd=function(e){ni(this,hd,ud),Tt(e),ed.call(this);var t=cd(this);try{e(Xl(Ad,this,t),Xl(Jl,this,t))}catch(e){Jl(this,t,e)}},(ed=function(){ld(this,{type:ud,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=ti(hd.prototype,{then:function(e,t){var n=dd(this),r=yd(St(this,hd));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=md?vd.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&$l(this,n,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),td=function(){var e=new ed,t=cd(e);this.promise=e,this.resolve=Xl(Ad,e,t),this.reject=Xl(Jl,e,t)},ad.f=yd=function(e){return e===hd||e===nd?new td:gd(e)},"function"==typeof gl&&(rd=gl.prototype.then,He(gl.prototype,"then",function(e,t){var n=this;return new hd(function(e,t){rd.call(n,e,t)}).then(e,t)},{unsafe:!0}),"function"==typeof _d&&We({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return Hl(hd,_d.apply(Q,arguments))}}))),We({global:!0,wrap:!0,forced:wd},{Promise:hd}),zn(hd,ud,!1),ea(ud),nd=Ve(ud),We({target:ud,stat:!0,forced:wd},{reject:function(e){var t=yd(this);return t.reject.call(void 0,e),t.promise}}),We({target:ud,stat:!0,forced:wd},{resolve:function(e){return Hl(this,e)}}),We({target:ud,stat:!0,forced:bd},{all:function(e){var s=this,t=yd(s),u=t.resolve,c=t.reject,n=Yl(function(){var r=Tt(s.resolve),i=[],a=0,o=1;bc(e,function(e){var t=a++,n=!1;i.push(void 0),o++,r.call(s,e).then(function(e){n||(n=!0,i[t]=e,--o||u(i))},c)}),--o||u(i)});return n.error&&c(n.value),t.promise},race:function(e){var n=this,r=yd(n),i=r.reject,t=Yl(function(){var t=Tt(n.resolve);bc(e,function(e){t.call(n,e).then(r.resolve,i)})});return t.error&&i(t.value),r.promise}});var Td=Rt("match");for(var Sd in We({target:"String",proto:!0,forced:!function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[Td]=!1,"/./"[t](n)}catch(e){}}return!1}("includes")},{includes:function(e,t){return!!~String(G(this)).indexOf(function(e){if(At(e))throw TypeError("The method doesn't accept regular expressions");return e}(e),1<arguments.length?t:void 0)}}),Eo){var Od=Q[Sd],Dd=Od&&Od.prototype;if(Dd&&Dd.forEach!==rl)try{fe(Dd,"forEach",rl)}catch(e){Dd.forEach=rl}}We({target:"Object",stat:!0,forced:Object.assign!==qo},{assign:qo}),We({target:"Object",stat:!0},{fromEntries:function(e){var n={};return bc(e,function(e,t){Jt(n,e,t)},void 0,!0),n}});var Ld=ua.some,Nd=sr("some"),Md=cr("some");We({target:"Array",proto:!0,forced:!Nd||!Md},{some:function(e,t){return Ld(this,e,1<arguments.length?t:void 0)}});function xd(n){return function(e){var t=String(G(e));return 1&n&&(t=t.replace(Ud,"")),2&n&&(t=t.replace(Fd,"")),t}}function Pd(e){var t,n,r,i,a,o,s,u,c=K(e,!1);if("string"==typeof c&&2<c.length)if(43===(t=(c=Wd(c)).charCodeAt(0))||45===t){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(o=(a=c.slice(2)).length,s=0;s<o;s++)if((u=a.charCodeAt(s))<48||i<u)return NaN;return parseInt(a,r)}return+c}var Vd="[\t\n\v\f\r                　\u2028\u2029\ufeff]",Ud=RegExp("^"+Vd+Vd+"*"),Fd=RegExp(Vd+Vd+"*$"),jd={start:xd(1),end:xd(2),trim:xd(3)},Bd=it.f,zd=le.f,Gd=he.f,Wd=jd.trim,qd="Number",Kd=Q[qd],Hd=Kd.prototype,Yd=z(Tn(Hd))==qd;if(ht(qd,!Kd(" 0o1")||!Kd("0b1")||Kd("+0x1"))){for(var Zd,$d=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof $d&&(Yd?j(function(){Hd.valueOf.call(n)}):z(n)!=qd)?ta(new Kd(Pd(t)),n,$d):Pd(t)},Qd=X?Bd(Kd):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),Xd=0;Qd.length>Xd;Xd++)H(Kd,Zd=Qd[Xd])&&!H($d,Zd)&&Gd($d,Zd,zd(Kd,Zd));($d.prototype=Hd).constructor=$d,He(Q,qd,$d)}We({target:"Number",stat:!0},{isNaN:function(e){return e!=e}});var Jd=function(){function e(){y(this,e)}return s(e,null,[{key:"getErrorMessage",value:function(e,t){var n=(1<arguments.length&&void 0!==t?t:{}).invalidParameter,r=void 0===n?"":n;switch(e){case Dc.DIAL_CANCELED:return"Call canceled before receiving a callback.";case Dc.MY_USER_ID_NOT_ALLOWED:return"The caller can't dial their own user ID.";case Dc.ERR_REQUEST_FAILED:return"The http request failed.";case Dc.ERR_WEBSOCKET_CONNECTION_NOT_OPENED:return"Websocket connection not established.";case Dc.ERR_WEBSOCKET_CONNECTION_FAILED:return"Websocket connection failed.";case Dc.ERR_NO_RESPONSE_DUE_TO_TIMEOUT:return"The request failed to receive a response due to timeout.";case Dc.ERR_REQUEST_FAILED_DUE_TO_WEBSOCKET_CONNECTION_LOST:return"The request failed because the websocket connection is lost.";case Dc.ERR_WRONG_RESPONSE:return"The response contains an unexpected object type of data.";case Dc.ERR_QUERY_IN_PROGRESS:return"The previous query is still in progress.";case Dc.INTERNAL_SERVER_ERROR:return"An internal server error has occurred.";case Dc.ERR_MALFORMED_DATA:return"The data format of the response is invalid.";case Dc.INVALID_PARAMETER_VALUE:return"".concat(r," is an invalid or empty value.");case Dc.INVALID_PARAMETER_TYPE:return"The data type of ".concat(r," is invalid.");case Dc.INSTANCE_NOT_INITIALIZED:return"SendBirdCall instance not initialized.";case Dc.USER_NOT_AUTHENTICATED:return"The user is not authenticated.";case Dc.CAMERA_ALREADY_SWITCHING:return"Camera is already switching.";case Dc.ERR_CAMERA_SWITCH:return"A camera switch error has occurred.";case Dc.ERR_CHANGING_AUDIO_DEVICE:return"An error occurred while changing audio device.";case Dc.ERR_CAPTURE_NOT_ALLOWED_ON_AUDIO_CALL:return"Capturing a video view isn't allowed while on an audio call.";case Dc.ERR_VIDEO_VIEW_NOT_READY:return"A video view isn't ready to be captured.";case Dc.ERR_VIDEO_CALL_NOT_CONNECTED_YET:return"A video call isn't connected yet therefore can't capture a video view.";case Dc.ERR_FAILED_TO_GET_IMAGE_FROM_VIDEO_STREAM:return"An error occurred while getting an image form the video stream.";case Dc.ERR_CALL_NOT_CONNECTED_YET:return"A call isn’t connected yet therefore can’t start media recording.";case Dc.ERR_WRONG_RECORDING_TYPE_FOR_AUDIO_CALL:return"A wrong recording type is selected in an audio call.";case Dc.ERR_RECORDING_ALREADY_IN_PROGRESS:return"An ongoing recording session is already in progress.";case Dc.ERR_FAILED_TO_OPEN_FILE:return"Couldn't open a recording file due to an error.";case Dc.ERR_FAILED_TO_START_RECORDING:return"Couldn't start a recording session due to an error.";case Dc.ERR_FAILED_TO_STOP_RECORDING:return"Coudln't stop a recording session due to an error.";case Dc.ERR_NOT_SUPPORTED_BROWSER_FOR_RECORDING:return"The browser doesn't support media recording.";case Dc.ERR_INVALID_RECORDING_TYPE:return"Invalid recording type is selected.";case Dc.ERR_NOT_SUPPORTED_OS_VERSION_FOR_RECORDING:return"The operating system version doesn't support media recording.";default:return""}}}]),e}(),eh=function(){g(u,n(Error));var s=k(u);function u(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.message,r=t.error,i=l(t,["message","error"]);y(this,u);var a,o=n||Jd.getErrorMessage(e,i);return(a=s.call(this,o)).code=e,a._error=r,a}return u}(),th=function(){g(t,eh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return t}();function nh(e){return function(t){e.then(function(e){return t(e)},function(e){return t(null,e)})}}function rh(t,e){if(Object.keys(t).some(function(e){return"string"!=typeof t[e]})){var n=Promise.reject(new th(Dc.INVALID_PARAMETER_TYPE));return e&&nh(n)(e),[!1,n]}return[!0]}function ih(e,t){if(e.some(function(e){return"string"!=typeof e})){var n=Promise.reject(new th(Dc.INVALID_PARAMETER_TYPE));return t&&nh(n)(t),[!1,n]}return[!0]}function ah(e,t,n){var r=e.match(t);return r&&r.length>=n&&parseInt(r[n],10)}function oh(e,t,n){sh(e)&&n.delete(t)}var sh=function(e){return void 0===e||Number.isNaN(e)||""===e||e===[]},uh=new Map([["candidate_type","first"],["network_type","first"]]),ch=["video_source_width","video_source_height","video_source_frames_per_second","network_type"];function lh(e,t,n){return 1===e?n:(t*(e-1)+n)/e}var dh=function(){function t(e){y(this,t),this._call=e,this._callLogStats={},this._callAudioLogStats={},this._callVideoLogStats={},this._callTransPortInfoLogStats={},this._callSummary={},this._updateCount=0,this._callSummaryAudioItems=new Map([["codec",{type:"first",measureCount:0}],["mos",{type:"avg",measureCount:0}],["rtt",{type:"avg",measureCount:0}],["packets_lost_rate",{type:"avg",measureCount:0}]]),this._callSummaryVideoItems=new Map([["codec",{type:"first",measureCount:0}],["freeze_count",{type:"snapshot",measureCount:0}],["jitter_buffer_delay",{type:"snapshot",measureCount:0}],["jitter_buffer_emitted_count",{type:"snapshot",measureCount:0}],["packets_lost_rate",{type:"avg",measureCount:0}],["received_frame_height",{type:"avg",measureCount:0}],["received_frame_width",{type:"avg",measureCount:0}],["rtt",{type:"avg",measureCount:0}],["sent_frame_height",{type:"avg",measureCount:0}],["sent_frame_width",{type:"avg",measureCount:0}],["total_decode_time",{type:"snapshot",measureCount:0}],["total_frames_duration",{type:"snapshot",measureCount:0}],["total_freezes_duration",{type:"snapshot",measureCount:0}],["total_inter_frame_delay",{type:"snapshot",measureCount:0}],["video_source_frames_per_second",{type:"avg",measureCount:0}],["video_source_height",{type:"avg",measureCount:0}],["video_source_width",{type:"avg",measureCount:0}]]),this._needCalcAvgAudioStatsItemKeys=new Map([["mos",0],["rtt",0],["jitter",0],["packets_lost_rate",0]]),this._needCalcAvgVideoStatsItemKeys=new Map([["rtt",0],["video_source_width",0],["video_source_height",0],["video_source_frames_per_second",0],["received_frame_width",0],["received_frame_height",0],["sent_frame_width",0],["sent_frame_height",0],["packets_lost_rate",0]])}return s(t,[{key:"setDialSentAt",value:function(){this._dialSentAt=Date.now()}},{key:"calcPdd",value:function(){this._pdd=Date.now()-this._dialSentAt}},{key:"setCallSetupStartTime",value:function(){this._callSetupStartAt=Date.now()}},{key:"calcCallSetupTime",value:function(){this._callSetupTime=Date.now()-this._callSetupStartAt}},{key:"increaseReconnectedCount",value:function(){this._reconnectedCount+=1}},{key:"updateStats",value:function(e,t,n,r){this._callSummary.transport_info_candidate_type||(this._callSummary.transport_info_candidate_type=t.get("candidate_type")),this._callSummary.network_type||(this._callSummary.network_type=t.get("network_type")),this._callSummary.audio_codec||(this._callSummary.audio_codec=n.get("codec")),this._callSummary.video_codec||(this._callSummary.video_codec=r.get("codec")),this._updateCallLogStats(e,t,n,r),this._updateCount+=1,this._updateCount>=this._call.options.statsIntervalValue/1e3&&(this._call.sendStatsLogCommand(this._getCallLogStats()),this._setCallSummaryValues(),this._updateCount=0)}},{key:"_updateCallLogStats",value:function(e,t,n,r){if(e&&Object.assign(this._callLogStats,Object.fromEntries(e)),t&&Object.assign(this._callTransPortInfoLogStats,Object.fromEntries(t)),n){var i,a={},o=C(n);try{for(o.s();!(i=o.n()).done;){var s,u=E(i.value,2),c=u[0],l=u[1];null!=l&&(this._needCalcAvgAudioStatsItemKeys.get(c)&&(s=this._getMeasureCount(this._needCalcAvgAudioStatsItemKeys.get(c)),this._needCalcAvgAudioStatsItemKeys.set(c,s),l=lh(s,this._callAudioLogStats[c],l)),a[c]=l)}}catch(e){o.e(e)}finally{o.f()}Object.assign(this._callAudioLogStats,a)}if(r){var d,h={},f=C(r);try{for(f.s();!(d=f.n()).done;){var p,v=E(d.value,2),_=v[0],y=v[1];null!=y&&(this._needCalcAvgVideoStatsItemKeys.get(_)&&(p=this._getMeasureCount(this._needCalcAvgVideoStatsItemKeys.get(_)),this._needCalcAvgAudioStatsItemKeys.set(_,p),y=lh(p,this._callVideoLogStats[_],y)),h[_]=y)}}catch(e){f.e(e)}finally{f.f()}Object.assign(this._callVideoLogStats,h)}}},{key:"_getMeasureCount",value:function(e){var t=e+1;return t>this._call.options.statsIntervalValue/1e3&&(t=1),t}},{key:"_getCallLogStats",value:function(){var e=this._callLogStats,t={measure_count:this._updateCount,measure_interval:this._call.options.statsIntervalValue/1e3};return e.metadata=t,e.transport_info=this._callTransPortInfoLogStats,e.audio=this._callAudioLogStats,e.video=this._callVideoLogStats,e}},{key:"_setCallSummaryValues",value:function(){var e={};if(0<Object.keys(this._callTransPortInfoLogStats).length){var t,n=C(uh);try{for(n.s();!(t=n.n()).done;){var r,i=E(t.value,2),a=i[0];"first"!==i[1]&&(r=a,-1===ch.indexOf(r)&&(r="transport_info_".concat(a)),e[r]=this._callTransPortInfoLogStats[a])}}catch(e){n.e(e)}finally{n.f()}}if(0<Object.keys(this._callAudioLogStats).length){var o,s=C(this._callSummaryAudioItems);try{for(s.s();!(o=s.n()).done;){var u,c=E(o.value,2),l=c[0],d=c[1];"first"!==d.type&&(u=l,-1===ch.indexOf(u)&&(u="audio_".concat(l)),"avg"===d.type?this._callAudioLogStats[l]&&(d.measureCount+=1,e[u]=lh(d.measureCount,this._callSummary[u],this._callAudioLogStats[l])):e[u]=this._callAudioLogStats[l])}}catch(e){s.e(e)}finally{s.f()}}if(0<Object.keys(this._callVideoLogStats).length){var h,f=C(this._callSummaryVideoItems);try{for(f.s();!(h=f.n()).done;){var p,v=E(h.value,2),_=v[0],y=v[1];"first"!==y.type&&(p=_,-1===ch.indexOf(p)&&(p="video_".concat(_)),"avg"===y.type?this._callVideoLogStats[_]&&(y.measureCount+=1,e[p]=lh(y.measureCount,this._callSummary[p],this._callVideoLogStats[_])):e[p]=this._callVideoLogStats[_])}}catch(e){f.e(e)}finally{f.f()}}Object.assign(this._callSummary,e)}},{key:"setBasicCallLogStats",value:function(){this._callLogStats.app_id=rg.appId,this._callLogStats.call_id=this._call.callId,this._callLogStats.role=this._call.myRole,this._callLogStats.caller_id=this._call.caller.userId,this._callLogStats.callee_id=this._call.callee.userId,this._callLogStats.is_video_call=this._call.isVideoCall,this._callLogStats.browser_type=function(){var e=window.navigator,t={browser:null,version:null};if("undefined"==typeof window||!window.navigator)return t.browser="Not a browser.",t;if(e.mozGetUserMedia)t.browser="firefox",t.version=ah(e.userAgent,/Firefox\/(\d+)\./,1);else if(e.webkitGetUserMedia||!1===window.isSecureContext&&window.webkitRTCPeerConnection&&!window.RTCIceGatherer)t.browser="chrome",t.version=ah(e.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(e.mediaDevices&&e.userAgent.match(/Edge\/(\d+).(\d+)$/))t.browser="edge",t.version=ah(e.userAgent,/Edge\/(\d+).(\d+)$/,2);else{if(!window.RTCPeerConnection||!e.userAgent.match(/AppleWebKit\/(\d+)\./))return t.browser="Not a supported browser.",t;t.browser="safari",t.version=ah(e.userAgent,/AppleWebKit\/(\d+)\./,1),t.supportsUnifiedPlan=window.RTCRtpTransceiver&&"currentDirection"in window.RTCRtpTransceiver.prototype}return t}()}},{key:"getCallSummary",value:function(){return this._callSummary.pdd=this._pdd,this._call.endResult===L.COMPLETED&&(this._callSummary.setup_time=this._callSetupTime,this._callSummary.reconnection_count=this._reconnectedCount),this._callSummary}}]),t}();function hh(){y(this,hh)}var fh,ph,vh=function(){function t(e){y(this,t),this.call=e,this.prevAudioTotalPacketsLost=0,this.prevAudioTotalPacketsReceived=0,this.prevVideoTotalPacketsLost=0,this.prevVideoTotalPacketsReceived=0,this.audioTotalPacketsLost=0,this.videoTotalPacketsReceived=0,this.videoTotalPacketsLost=0}var e,n;return s(t,[{key:"getCandidateInfo",value:(n=v(regeneratorRuntime.mark(function e(){var t,n,r,i,a,o,s,u,c,l,d,h,f,p,v;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.call.rtcConnection){e.next=3;break}throw new Error("'getCandidateInfo()' is called without rtcConnection");case 3:return e.next=5,t.getStats();case 5:n=e.sent,i=n.entries(),a=0;case 8:if(!(a<n.size)){e.next=18;break}if(!(o=i.next()).value){e.next=15;break}if("candidate-pair"===(s=o.value[1]).type&&"succeeded"===s.state)return r=s.localCandidateId,e.abrupt("break",18);e.next=15;break;case 15:a++,e.next=8;break;case 18:u=0;case 19:if(!(u<n.size)){e.next=28;break}if(!(c=i.next()).value){e.next=25;break}if("local-candidate"===(l=c.value[1]).type&&l.id===r)return e.abrupt("return",{connectionType:null!==(d=l.candidateType)&&void 0!==d?d:"",ip:null!==(h=l.ip)&&void 0!==h?h:"",port:null!==(f=l.port)&&void 0!==f?f:0,protocol:null!==(p=l.protocol)&&void 0!==p?p:"",relayProtocol:null!==(v=l.relayProtocol)&&void 0!==v?v:""});e.next=25;break;case 25:u++,e.next=19;break;case 28:return e.abrupt("return",null);case 29:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})},{key:"getStats",value:(e=v(regeneratorRuntime.mark(function e(){var t,n,r,h,f,p,v,_,y,i,a,o,s,u,g=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.call.rtcConnection){e.next=3;break}throw new Error("'getStats()' is called without rtcConnection");case 3:return e.next=5,t.getStats();case 5:for(n=e.sent,r=new Map,h=new Map,f=new Map,p=new Map,v=new Map,_=new Map,i=n.entries(),a=0;a<n.size;a++)(o=i.next()).value&&("codec"===(s=o.value[1]).type&&v.set(s.id,s),"candidate-pair"===s.type&&"succeeded"===s.state&&(y=s.localCandidateId,r.set("webrtc_timestamp",s.time)),"media-source"===s.type&&_.set(s.kind,s));return n.forEach(function(e){var t,n,r,i,a,o,s,u,c,l,d;"local-candidate"===e.type&&e.id===y&&(h.set("network_type",e.networkType),h.set("ip",e.ip),h.set("port",e.port),h.set("protocol",e.protocol),h.set("candidate_type",e.candidateType)),"audio"!==e.kind&&"audio"!==e.mediaType||("outbound-rtp"===e.type&&(f.set("codec",null===(t=v.get(e.codecId))||void 0===t?void 0:t.mimeType),f.set("total_packets_sent",e.packetsSent),f.set("retransmitted_packets_sent",e.retransmittedPacketsSent)),"remote-inbound-rtp"===e.type&&f.set("rtt",1e3*e.roundTripTime),"inbound-rtp"===e.type&&(r=(n=e.packetsLost-g.prevAudioTotalPacketsLost)/(n+(e.packetsReceived-g.prevAudioTotalPacketsReceived))*100,i=e.packetsLost/(e.packetsLost+e.packetsReceived)*100,f.set("total_packets_received",e.packetsReceived),g.audioTotalPacketsLost+=n,f.set("packets_lost",g.audioTotalPacketsLost),f.set("packets_lost_rate",r),f.set("total_packets_lost_rate",i),f.set("total_packets_lost",e.packetsLost),f.set("jitter",1e3*e.jitter),g.prevAudioTotalPacketsReceived=e.packetsReceived,g.prevAudioTotalPacketsLost=e.packetsLost),"track"===e.type&&e.remoteSource&&(f.set("jitter_buffer_delay",e.jitterBufferDelay),f.set("jitter_buffer_emitted_count",e.jitterBufferDelayEmittedCount))),"video"!==e.kind&&"video"!==e.mediaType||(p.set("video_source_width",null===(a=_.get("video"))||void 0===a?void 0:a.width),p.set("video_source_height",null===(o=_.get("video"))||void 0===o?void 0:o.height),p.set("video_source_frames_per_second",null===(s=_.get("video"))||void 0===s?void 0:s.framesPerSecond),"outbound-rtp"===e.type&&(p.set("codec",null===(u=v.get(e.codecId))||void 0===u?void 0:u.mimeType),p.set("fir_count",e.firCount),p.set("pli_count",e.pliCount),p.set("nack_count",e.nackCount),p.set("qpSum",e.qpSum),p.set("retransmitted_packets_sent",e.retransmittedBytesSent),p.set("quality_limitation_reason",e.qualityLimitationReason),p.set("quality_limiration_resolution_changes",e.qualityLimitationResolutionChanges)),"remote-inbound-rtp"===e.type&&p.set("rtt",1e3*e.roundTripTime),"inbound-rtp"===e.type&&(p.set("total_packets_lost",e.packetsLost),p.set("jitter",1e3*e.jitter),p.set("header_bytes_received",e.headerBytesReceived),p.set("key_frames_decoded",e.keyFramesDecoded),p.set("total_decode_time",e.totalDecodeTime),p.set("total_inter_frame_delay",e.totalInterFrameDelay),p.set("total_squared_inter_frame_delay",e.totalSquaredInterFrameDelay),l=(c=e.packetsLost-g.prevVideoTotalPacketsLost)/(c+(e.packetsReceived-g.prevVideoTotalPacketsReceived))*100,d=e.packetsLost/(e.packetsLost+e.packetsReceived)*100,p.set("total_packets_lost",e.packetsLost),p.set("total_packets_received",e.packetsReceived),p.set("packets_lost",g.videoTotalPacketsReceived),p.set("packets_received",g.videoTotalPacketsReceived),p.set("packets_lost_rate",l),p.set("total_packets_lost_rate",d),g.prevVideoTotalPacketsReceived=e.packetsReceived,g.prevVideoTotalPacketsLost=e.packetsLost),"track"===e.type&&(e.remoteSource?(p.set("jitter_buffer_delay",e.jitterBufferDelay),p.set("jitter_buffer_emitted_count",e.jitterBufferDelayEmittedCount),p.set("received_frame_width",e.frameWidth),p.set("received_frame_height",e.frameHeight),p.set("frames_received",e.framesReceived),p.set("frames_decoded",e.framesDecoded),p.set("frames_dropped",e.framesDropped),p.set("freeze_count",e.freezeCount),p.set("pause_count",e.pauseCount),p.set("total_freezes_duration",e.totalFreezesDuration),p.set("total_pauses_duration",e.totalPausesDuration),p.set("total_frames_duration",e.totalFramesDuration),p.set("sum_of_squared_frames_duration",e.sumOfSquaredFramesDuration)):(p.set("sent_frame_width",e.frameWidth),p.set("sent_frame_height",e.frameHeight))))}),0<r.size&&r.forEach(oh),0<h.size&&h.forEach(oh),0<f.size&&(u=function(e,t,n){if(!(sh(e)||sh(t)||sh(n))){var r,i=n+2*t+10,a=i<160?93.2-i/40:93.2-(i-120)/10;return(a-=2.5*e)<=0?r=1:0<a&&a<100?r=1+.035*a+7e-6*a*(a-60)*(100-a):100<=a&&(r=4.5),r}}(f.get("packets_lost"),f.get("jitter"),f.get("rtt")),f.set("mos",u),f.forEach(oh)),0<p.size&&p.forEach(oh),e.abrupt("return",{statsMap:r,transPortInfoMap:h,audioStatsMap:f,videoStatsMap:p});case 20:case"end":return e.stop()}},e,this)})),function(){return e.apply(this,arguments)})}]),t}();(ph=fh=fh||{})[ph.WS=0]="WS",ph[ph.API=1]="API",ph[ph.BOTH=2]="BOTH";var _h,yh,gh,mh,kh=function(){g(n,hh);var t=k(n);function n(){var e;return y(this,n),(e=t.call(this)).version=1,e.requestId=Zc(),e}return s(n,[{key:"getApiOption",value:function(){return{auth:!0,path:"/v1/action/direct_call",method:"POST",headers:this.getHeaders(),body:{version:this.version,request_id:this.requestId,cmd:this.getCMD(),type:this.getType(),payload:this.getData()}}}},{key:"serialize",value:function(){return JSON.stringify({version:this.version,request_id:this.requestId,cmd:this.getCMD(),type:this.getType(),payload:this.getData()})}},{key:"requireResponse",value:function(){return!1}},{key:"getHeaders",value:function(){return{}}},{key:"sendStrategy",get:function(){return fh.WS}}]),n}();(yh=_h=_h||{}).CALL="CALL",yh.SGNL="SGNL",yh.COMM="COMM",(mh=gh=gh||{}).DIAL="dial",mh.DIAL_ACK="dial_ack",mh.DIAL_RCV="dial_rcv",mh.CANCEL="cancel",mh.ACCEPT="accept",mh.ACCEPT_ACK="accept_ack",mh.OTHER_DEVICE_ACCEPTED="other_device_accepted",mh.DECLINE="decline",mh.OFFER="offer",mh.ANSWER="answer",mh.CANDIDATE="candidate",mh.REMOVE_CANDIDATES="remove_candidates",mh.AUDIO="audio",mh.VIDEO="video",mh.CUSTOM_ITEMS_UPDATE="custom_items_update",mh.CUSTOM_ITEMS_DELETE="custom_items_delete",mh.RECORDING="recording",mh.END="end",mh.TIME_OUT="timeout",mh.CONNECTION_LOST="connection_lost",mh.UNKNOWN_END="unknown_end",mh.ALIVE="alive",mh.NO_ANSWER="no_answer",mh.CANCEL_ACK="cancel_ack",mh.END_ACK="end_ack",mh.TIMEOUT_ACK="timeout_ack",mh.NO_ANSWER_ACK="no_answer_ack",mh.CONNECTION_LOST_ACK="connection_lost_ack",mh.UNKNOWN_END_ACK="unknown_end_ack",mh.ALIVE_ACK="alive_ack",mh.CONNECTED="connected",mh.WEBSOCKET_CONNECTED="websocket_connected",mh.DECLINE_ACK="decline_ack",mh.SNAPSHOT="snapshot";var Eh=function(){g(o,kh);var a=k(o);function o(e,t,n,r){var i;return y(this,o),(i=a.call(this)).callId=e,i.recordingId=t,i.recordingType=n,i.recordingStatus=r,i}return s(o,[{key:"getCMD",value:function(){return _h.COMM}},{key:"getType",value:function(){return gh.RECORDING}},{key:"getData",value:function(){return{call_id:this.callId,recording_id:this.recordingId,recording_type:this.recordingType,recording_status:this.recordingStatus}}}]),o}(),wh=function(){g(r,hh);var n=k(r);function r(e){var t;return y(this,r),(t=n.call(this)).version=e.version,t.messageId=e.message_id,t.cmd=e.cmd,t.type=e.type,t.deliveryInfo=e.delivery_info,t.sequenceNumber=e.sequence_number,t.payload=t.parseData(e.payload),t}return s(r,[{key:"getCallId",value:function(){return this.payload.callId}},{key:"isSequential",value:function(){return"number"==typeof this.sequenceNumber}}]),r}(),bh=function(){g(t,wh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{callId:e.call_id,recordingId:e.recording_id,recordingType:e.recording_type,recordingStatus:e.recording_status}}}]),t}(),Ch=function(){g(t,hh);var e=k(t);function t(){return y(this,t),e.call(this)}return s(t,[{key:"getApiOption",value:function(){return{auth:this.getAuth(),path:this.getPath(),method:this.getMethod(),body:this.getData(),headers:this.getHeaders()}}},{key:"getAuth",value:function(){return!0}},{key:"getHeaders",value:function(){return{}}}]),t}(),Rh=function(){g(a,Ch);var i=k(a);function a(e,t,n){var r;return y(this,a),(r=i.call(this)).appId=e,r.userId=t,r.accessToken=n,r}return s(a,[{key:"getAuth",value:function(){return!1}},{key:"getData",value:function(){return{app_id:this.appId,user_id:this.userId,access_token:this.accessToken}}},{key:"getPath",value:function(){return"/v1/users/".concat(encodeURIComponent(this.userId),"/login")}},{key:"getMethod",value:function(){return"POST"}}]),a}(),Ih=function(){g(a,Ch);var i=k(a);function a(e,t,n){var r;return y(this,a),(r=i.call(this)).callId=e,r.userRole=t,r.callSummary=n,r}return s(a,[{key:"getData",value:function(){return{version:1,user_role:this.userRole,summary_data:this.callSummary}}},{key:"getPath",value:function(){return"/v1/direct_calls/".concat(this.callId,"/summary")}},{key:"getMethod",value:function(){return"POST"}}]),a}(),Ah=[].join,Th=ie!=Object,Sh=sr("join",",");We({target:"Array",proto:!0,forced:Th||!Sh},{join:function(e){return Ah.call(W(this),void 0===e?",":e)}});var Oh=function(){g(r,Ch);var n=k(r);function r(e){var t;return y(this,r),(t=n.call(this)).callIds=e,t}return s(r,[{key:"requireResponse",value:function(){return!0}},{key:"getData",value:function(){}},{key:"getPath",value:function(){var e=this.callIds.join(",");return"/v1/direct_calls/missed_signal?call_ids=".concat(encodeURIComponent(e))}},{key:"getMethod",value:function(){return"GET"}}]),r}(),Dh=function(){g(r,Ch);var n=k(r);function r(e){var t;return y(this,r),(t=n.call(this)).callId=e,t}return s(r,[{key:"getData",value:function(){return{}}},{key:"getPath",value:function(){return"/v1/direct_calls/".concat(this.callId,"/custom_items")}},{key:"getMethod",value:function(){return"DELETE"}}]),r}(),Lh=function(){g(i,Ch);var r=k(i);function i(e,t){var n;return y(this,i),(n=r.call(this)).callId=e,n.keys=t,n}return s(i,[{key:"getData",value:function(){return{keys:this.keys}}},{key:"getPath",value:function(){return"/v1/direct_calls/".concat(this.callId,"/custom_items")}},{key:"getMethod",value:function(){return"DELETE"}}]),i}(),Nh=function(){g(o,kh);var a=k(o);function o(e,t,n,r){var i;return y(this,o),(i=a.call(this)).callId=e,i.calleeDeliveryInfo=t,i.receivedType=n,i.shortLivedToken=r,i}return s(o,[{key:"getHeaders",value:function(){return{"SBCall-Short-Lived-Token":this.shortLivedToken}}},{key:"getData",value:function(){return{call_id:this.callId,callee_delivery_info:this.calleeDeliveryInfo,received_type:this.receivedType}}},{key:"getCMD",value:function(){return _h.CALL}},{key:"getType",value:function(){return gh.DIAL_RCV}},{key:"sendStrategy",get:function(){return fh.API}}]),o}(),Mh=function(){g(r,Ch);var n=k(r);function r(e){var t;return y(this,r),(t=n.call(this)).stats=e,t}return s(r,[{key:"getData",value:function(){return{log_group:"sdk_webrtc_statistics_v1.1",log_data:this.stats}}},{key:"getPath",value:function(){return"/v1/sdk/logs"}},{key:"getMethod",value:function(){return"POST"}}]),r}(),xh=function(){g(i,Ch);var r=k(i);function i(e,t){var n;return y(this,i),(n=r.call(this)).callId=e,n.customItems=t,n}return s(i,[{key:"getData",value:function(){return{custom_items:this.customItems,mode:"upsert"}}},{key:"getPath",value:function(){return"/v1/direct_calls/".concat(this.callId,"/custom_items")}},{key:"getMethod",value:function(){return"PUT"}}]),i}(),Ph=function(){g(i,kh);var r=k(i);function i(e,t){var n;return y(this,i),(n=r.call(this)).callId=e,n.constraints=t,n}return s(i,[{key:"requireResponse",value:function(){return!0}},{key:"getCMD",value:function(){return _h.CALL}},{key:"getType",value:function(){return gh.ACCEPT}},{key:"getData",value:function(){return{call_id:this.callId,constraints:{audio:this.constraints.audio,video:this.constraints.video}}}}]),i}(),Vh=function(){g(t,wh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{callId:e.call_id,turnCredential:{username:e.turn_credential.username,password:e.turn_credential.password,turnUrls:e.turn_credential.turn_urls,transportPolicy:e.turn_credential.transport_policy},constraints:{audio:e.audio,video:e.video}}}}]),t}(),Uh=function(){g(r,hh);var n=k(r);function r(e){var t;return y(this,r),(t=n.call(this)).version=e.version,t.requestId=e.request_id,t.cmd=e.cmd,t.type=e.type,t.deliveryInfo=e.delivery_info,t.sequenceNumber=e.sequence_number,t.payload=t.parseData(e.payload),t}return s(r,[{key:"getCallId",value:function(){return this.payload.callId}},{key:"isSequential",value:function(){return"number"==typeof this.sequenceNumber}}]),r}(),Fh=function(){g(t,Uh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{callId:e.call_id}}}]),t}(),jh=function(){g(t,wh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{callId:e.call_id}}}]),t}(),Bh=function(){g(r,kh);var n=k(r);function r(e){var t;return y(this,r),(t=n.call(this)).callId=e,t}return s(r,[{key:"getCMD",value:function(){return _h.SGNL}},{key:"getType",value:function(){return gh.ALIVE}},{key:"getData",value:function(){return{call_id:this.callId}}}]),r}(),zh=function(){g(t,Uh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{callId:e.call_id,alive_at:e.alive_at}}}]),t}(),Gh=U(function(e,t){var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;t.assign=function(e){for(var t,n,r=Array.prototype.slice.call(arguments,1);r.length;){var i=r.shift();if(i){if("object"!=typeof i)throw new TypeError(i+"must be non-object");for(var a in i)t=i,n=a,Object.prototype.hasOwnProperty.call(t,n)&&(e[a]=i[a])}}return e},t.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var r={arraySet:function(e,t,n,r,i){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+r),i);else for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){for(var t,n,r,i=0,a=0,o=e.length;a<o;a++)i+=e[a].length;for(r=new Uint8Array(i),a=t=0,o=e.length;a<o;a++)n=e[a],r.set(n,t),t+=n.length;return r}},i={arraySet:function(e,t,n,r,i){for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){return[].concat.apply([],e)}};t.setTyped=function(e){e?(t.Buf8=Uint8Array,t.Buf16=Uint16Array,t.Buf32=Int32Array,t.assign(t,r)):(t.Buf8=Array,t.Buf16=Array,t.Buf32=Array,t.assign(t,i))},t.setTyped(n)}),Wh=(Gh.assign,Gh.shrinkBuf,Gh.setTyped,Gh.Buf8,Gh.Buf16,Gh.Buf32,0),qh=1;function Kh(e){for(var t=e.length;0<=--t;)e[t]=0}var Hh=0,Yh=29,Zh=256,$h=Zh+1+Yh,Qh=30,Xh=19,Jh=2*$h+1,ef=15,tf=16,nf=7,rf=256,af=16,of=17,sf=18,uf=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],cf=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],lf=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],df=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],hf=new Array(2*($h+2));Kh(hf);var ff=new Array(2*Qh);Kh(ff);var pf=new Array(512);Kh(pf);var vf=new Array(256);Kh(vf);var _f=new Array(Yh);Kh(_f);var yf,gf,mf,kf=new Array(Qh);function Ef(e,t,n,r,i){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=e&&e.length}function wf(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function bf(e){return e<256?pf[e]:pf[256+(e>>>7)]}function Cf(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function Rf(e,t,n){e.bi_valid>tf-n?(e.bi_buf|=t<<e.bi_valid&65535,Cf(e,e.bi_buf),e.bi_buf=t>>tf-e.bi_valid,e.bi_valid+=n-tf):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)}function If(e,t,n){Rf(e,n[2*t],n[2*t+1])}function Af(e,t){for(var n=0;n|=1&e,e>>>=1,n<<=1,0<--t;);return n>>>1}function Tf(e,t,n){for(var r,i=new Array(ef+1),a=0,o=1;o<=ef;o++)i[o]=a=a+n[o-1]<<1;for(r=0;r<=t;r++){var s=e[2*r+1];0!==s&&(e[2*r]=Af(i[s]++,s))}}function Sf(e){for(var t=0;t<$h;t++)e.dyn_ltree[2*t]=0;for(t=0;t<Qh;t++)e.dyn_dtree[2*t]=0;for(t=0;t<Xh;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*rf]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function Of(e){8<e.bi_valid?Cf(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function Df(e,t,n,r){var i=2*t,a=2*n;return e[i]<e[a]||e[i]===e[a]&&r[t]<=r[n]}function Lf(e,t,n){for(var r=e.heap[n],i=n<<1;i<=e.heap_len&&(i<e.heap_len&&Df(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!Df(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r}function Nf(e,t,n){var r,i,a,o,s=0;if(0!==e.last_lit)for(;r=e.pending_buf[e.d_buf+2*s]<<8|e.pending_buf[e.d_buf+2*s+1],i=e.pending_buf[e.l_buf+s],s++,0==r?If(e,i,t):(If(e,(a=vf[i])+Zh+1,t),0!==(o=uf[a])&&Rf(e,i-=_f[a],o),If(e,a=bf(--r),n),0!==(o=cf[a])&&Rf(e,r-=kf[a],o)),s<e.last_lit;);If(e,rf,t)}function Mf(e,t){var n,r,i,a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.has_stree,u=t.stat_desc.elems,c=-1;for(e.heap_len=0,e.heap_max=Jh,n=0;n<u;n++)0!==a[2*n]?(e.heap[++e.heap_len]=c=n,e.depth[n]=0):a[2*n+1]=0;for(;e.heap_len<2;)a[2*(i=e.heap[++e.heap_len]=c<2?++c:0)]=1,e.depth[i]=0,e.opt_len--,s&&(e.static_len-=o[2*i+1]);for(t.max_code=c,n=e.heap_len>>1;1<=n;n--)Lf(e,a,n);for(i=u;n=e.heap[1],e.heap[1]=e.heap[e.heap_len--],Lf(e,a,1),r=e.heap[1],e.heap[--e.heap_max]=n,e.heap[--e.heap_max]=r,a[2*i]=a[2*n]+a[2*r],e.depth[i]=(e.depth[n]>=e.depth[r]?e.depth[n]:e.depth[r])+1,a[2*n+1]=a[2*r+1]=i,e.heap[1]=i++,Lf(e,a,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){for(var n,r,i,a,o,s=t.dyn_tree,u=t.max_code,c=t.stat_desc.static_tree,l=t.stat_desc.has_stree,d=t.stat_desc.extra_bits,h=t.stat_desc.extra_base,f=t.stat_desc.max_length,p=0,v=0;v<=ef;v++)e.bl_count[v]=0;for(s[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;n<Jh;n++)f<(v=s[2*s[2*(r=e.heap[n])+1]+1]+1)&&(v=f,p++),s[2*r+1]=v,u<r||(e.bl_count[v]++,a=0,h<=r&&(a=d[r-h]),o=s[2*r],e.opt_len+=o*(v+a),l&&(e.static_len+=o*(c[2*r+1]+a)));if(0!==p){do{for(v=f-1;0===e.bl_count[v];)v--;e.bl_count[v]--,e.bl_count[v+1]+=2,e.bl_count[f]--,p-=2}while(0<p);for(v=f;0!==v;v--)for(r=e.bl_count[v];0!==r;)u<(i=e.heap[--n])||(s[2*i+1]!==v&&(e.opt_len+=(v-s[2*i+1])*s[2*i],s[2*i+1]=v),r--)}}(e,t),Tf(a,c,e.bl_count)}function xf(e,t,n){var r,i,a=-1,o=t[1],s=0,u=7,c=4;for(0===o&&(u=138,c=3),t[2*(n+1)+1]=65535,r=0;r<=n;r++)i=o,o=t[2*(r+1)+1],++s<u&&i===o||(s<c?e.bl_tree[2*i]+=s:0!==i?(i!==a&&e.bl_tree[2*i]++,e.bl_tree[2*af]++):s<=10?e.bl_tree[2*of]++:e.bl_tree[2*sf]++,a=i,c=(s=0)===o?(u=138,3):i===o?(u=6,3):(u=7,4))}function Pf(e,t,n){var r,i,a=-1,o=t[1],s=0,u=7,c=4;for(0===o&&(u=138,c=3),r=0;r<=n;r++)if(i=o,o=t[2*(r+1)+1],!(++s<u&&i===o)){if(s<c)for(;If(e,i,e.bl_tree),0!=--s;);else 0!==i?(i!==a&&(If(e,i,e.bl_tree),s--),If(e,af,e.bl_tree),Rf(e,s-3,2)):s<=10?(If(e,of,e.bl_tree),Rf(e,s-3,3)):(If(e,sf,e.bl_tree),Rf(e,s-11,7));a=i,c=(s=0)===o?(u=138,3):i===o?(u=6,3):(u=7,4)}}Kh(kf);var Vf=!1;function Uf(e,t,n,r){var i,a,o,s;Rf(e,(Hh<<1)+(r?1:0),3),a=t,o=n,s=!0,Of(i=e),s&&(Cf(i,o),Cf(i,~o)),Gh.arraySet(i.pending_buf,i.window,a,o,i.pending),i.pending+=o}var Ff={_tr_init:function(e){Vf||(function(){for(var e,t,n,r=new Array(ef+1),i=0,a=0;a<Yh-1;a++)for(_f[a]=i,e=0;e<1<<uf[a];e++)vf[i++]=a;for(vf[i-1]=a,a=n=0;a<16;a++)for(kf[a]=n,e=0;e<1<<cf[a];e++)pf[n++]=a;for(n>>=7;a<Qh;a++)for(kf[a]=n<<7,e=0;e<1<<cf[a]-7;e++)pf[256+n++]=a;for(t=0;t<=ef;t++)r[t]=0;for(e=0;e<=143;)hf[2*e+1]=8,e++,r[8]++;for(;e<=255;)hf[2*e+1]=9,e++,r[9]++;for(;e<=279;)hf[2*e+1]=7,e++,r[7]++;for(;e<=287;)hf[2*e+1]=8,e++,r[8]++;for(Tf(hf,$h+1,r),e=0;e<Qh;e++)ff[2*e+1]=5,ff[2*e]=Af(e,5);yf=new Ef(hf,uf,Zh+1,$h,ef),gf=new Ef(ff,cf,0,Qh,ef),mf=new Ef(new Array(0),lf,0,Xh,nf)}(),Vf=!0),e.l_desc=new wf(e.dyn_ltree,yf),e.d_desc=new wf(e.dyn_dtree,gf),e.bl_desc=new wf(e.bl_tree,mf),e.bi_buf=0,e.bi_valid=0,Sf(e)},_tr_stored_block:Uf,_tr_flush_block:function(e,t,n,r){var i,a,o=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){for(var t=4093624447,n=0;n<=31;n++,t>>>=1)if(1&t&&0!==e.dyn_ltree[2*n])return Wh;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return qh;for(n=32;n<Zh;n++)if(0!==e.dyn_ltree[2*n])return qh;return Wh}(e)),Mf(e,e.l_desc),Mf(e,e.d_desc),o=function(e){var t;for(xf(e,e.dyn_ltree,e.l_desc.max_code),xf(e,e.dyn_dtree,e.d_desc.max_code),Mf(e,e.bl_desc),t=Xh-1;3<=t&&0===e.bl_tree[2*df[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),i=e.opt_len+3+7>>>3,(a=e.static_len+3+7>>>3)<=i&&(i=a)):i=a=n+5,n+4<=i&&-1!==t?Uf(e,t,n,r):4===e.strategy||a===i?(Rf(e,2+(r?1:0),3),Nf(e,hf,ff)):(Rf(e,4+(r?1:0),3),function(e,t,n,r){var i;for(Rf(e,t-257,5),Rf(e,n-1,5),Rf(e,r-4,4),i=0;i<r;i++)Rf(e,e.bl_tree[2*df[i]+1],3);Pf(e,e.dyn_ltree,t-1),Pf(e,e.dyn_dtree,n-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,o+1),Nf(e,e.dyn_ltree,e.dyn_dtree)),Sf(e),r&&Of(e)},_tr_tally:function(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,0===t?e.dyn_ltree[2*n]++:(e.matches++,t--,e.dyn_ltree[2*(vf[n]+Zh+1)]++,e.dyn_dtree[2*bf(t)]++),e.last_lit===e.lit_bufsize-1},_tr_align:function(e){var t;Rf(e,2,3),If(e,rf,hf),16===(t=e).bi_valid?(Cf(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):8<=t.bi_valid&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}};var jf=function(e,t,n,r){for(var i=65535&e|0,a=e>>>16&65535|0,o=0;0!==n;){for(n-=o=2e3<n?2e3:n;a=a+(i=i+t[r++]|0)|0,--o;);i%=65521,a%=65521}return i|a<<16|0};var Bf=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();var zf,Gf=function(e,t,n,r){var i=Bf,a=r+n;e^=-1;for(var o=r;o<a;o++)e=e>>>8^i[255&(e^t[o])];return-1^e},Wf={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},qf=0,Kf=4,Hf=0,Yf=-2,Zf=-1,$f=4,Qf=2,Xf=8,Jf=9,ep=286,tp=30,np=19,rp=2*ep+1,ip=15,ap=3,op=258,sp=op+ap+1,up=42,cp=113,lp=1,dp=2,hp=3,fp=4;function pp(e,t){return e.msg=Wf[t],t}function vp(e){return(e<<1)-(4<e?9:0)}function _p(e){for(var t=e.length;0<=--t;)e[t]=0}function yp(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),0!==n&&(Gh.arraySet(e.output,t.pending_buf,t.pending_out,n,e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,0===t.pending&&(t.pending_out=0))}function gp(e,t){Ff._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,yp(e.strm)}function mp(e,t){e.pending_buf[e.pending++]=t}function kp(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function Ep(e,t){var n,r,i=e.max_chain_length,a=e.strstart,o=e.prev_length,s=e.nice_match,u=e.strstart>e.w_size-sp?e.strstart-(e.w_size-sp):0,c=e.window,l=e.w_mask,d=e.prev,h=e.strstart+op,f=c[a+o-1],p=c[a+o];e.prev_length>=e.good_match&&(i>>=2),s>e.lookahead&&(s=e.lookahead);do{if(c[(n=t)+o]===p&&c[n+o-1]===f&&c[n]===c[a]&&c[++n]===c[a+1]){a+=2,n++;do{}while(c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&a<h);if(r=op-(h-a),a=h-op,o<r){if(e.match_start=t,s<=(o=r))break;f=c[a+o-1],p=c[a+o]}}}while((t=d[t&l])>u&&0!=--i);return o<=e.lookahead?o:e.lookahead}function wp(e){var t,n,r,i,a,o,s,u,c,l,d=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=d+(d-sp)){for(Gh.arraySet(e.window,e.window,d,d,0),e.match_start-=d,e.strstart-=d,e.block_start-=d,t=n=e.hash_size;r=e.head[--t],e.head[t]=d<=r?r-d:0,--n;);for(t=n=d;r=e.prev[--t],e.prev[t]=d<=r?r-d:0,--n;);i+=d}if(0===e.strm.avail_in)break;if(o=e.strm,s=e.window,u=e.strstart+e.lookahead,c=i,l=void 0,l=o.avail_in,c<l&&(l=c),n=0===l?0:(o.avail_in-=l,Gh.arraySet(s,o.input,o.next_in,l,u),1===o.state.wrap?o.adler=jf(o.adler,s,l,u):2===o.state.wrap&&(o.adler=Gf(o.adler,s,l,u)),o.next_in+=l,o.total_in+=l,l),e.lookahead+=n,e.lookahead+e.insert>=ap)for(a=e.strstart-e.insert,e.ins_h=e.window[a],e.ins_h=(e.ins_h<<e.hash_shift^e.window[a+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[a+ap-1])&e.hash_mask,e.prev[a&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=a,a++,e.insert--,!(e.lookahead+e.insert<ap)););}while(e.lookahead<sp&&0!==e.strm.avail_in)}function bp(e,t){for(var n,r;;){if(e.lookahead<sp){if(wp(e),e.lookahead<sp&&t===qf)return lp;if(0===e.lookahead)break}if(n=0,e.lookahead>=ap&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+ap-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==n&&e.strstart-n<=e.w_size-sp&&(e.match_length=Ep(e,n)),e.match_length>=ap)if(r=Ff._tr_tally(e,e.strstart-e.match_start,e.match_length-ap),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=ap){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+ap-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=Ff._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(gp(e,!1),0===e.strm.avail_out))return lp}return e.insert=e.strstart<ap-1?e.strstart:ap-1,t===Kf?(gp(e,!0),0===e.strm.avail_out?hp:fp):e.last_lit&&(gp(e,!1),0===e.strm.avail_out)?lp:dp}function Cp(e,t){for(var n,r,i;;){if(e.lookahead<sp){if(wp(e),e.lookahead<sp&&t===qf)return lp;if(0===e.lookahead)break}if(n=0,e.lookahead>=ap&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+ap-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=ap-1,0!==n&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-sp&&(e.match_length=Ep(e,n),e.match_length<=5&&(1===e.strategy||e.match_length===ap&&4096<e.strstart-e.match_start)&&(e.match_length=ap-1)),e.prev_length>=ap&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-ap,r=Ff._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-ap),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+ap-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=ap-1,e.strstart++,r&&(gp(e,!1),0===e.strm.avail_out))return lp}else if(e.match_available){if((r=Ff._tr_tally(e,0,e.window[e.strstart-1]))&&gp(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return lp}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(r=Ff._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<ap-1?e.strstart:ap-1,t===Kf?(gp(e,!0),0===e.strm.avail_out?hp:fp):e.last_lit&&(gp(e,!1),0===e.strm.avail_out)?lp:dp}function Rp(e,t,n,r,i){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i}function Ip(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Xf,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Gh.Buf16(2*rp),this.dyn_dtree=new Gh.Buf16(2*(2*tp+1)),this.bl_tree=new Gh.Buf16(2*(2*np+1)),_p(this.dyn_ltree),_p(this.dyn_dtree),_p(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Gh.Buf16(ip+1),this.heap=new Gh.Buf16(2*ep+1),_p(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Gh.Buf16(2*ep+1),_p(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ap(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=Qf,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?up:cp,e.adler=2===t.wrap?0:1,t.last_flush=qf,Ff._tr_init(t),Hf):pp(e,Yf)}function Tp(e){var t,n=Ap(e);return n===Hf&&((t=e.state).window_size=2*t.w_size,_p(t.head),t.max_lazy_match=zf[t.level].max_lazy,t.good_match=zf[t.level].good_length,t.nice_match=zf[t.level].nice_length,t.max_chain_length=zf[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=ap-1,t.match_available=0,t.ins_h=0),n}function Sp(e,t,n,r,i,a){if(!e)return Yf;var o=1;if(t===Zf&&(t=6),r<0?(o=0,r=-r):15<r&&(o=2,r-=16),i<1||Jf<i||n!==Xf||r<8||15<r||t<0||9<t||a<0||$f<a)return pp(e,Yf);8===r&&(r=9);var s=new Ip;return(e.state=s).strm=e,s.wrap=o,s.gzhead=null,s.w_bits=r,s.w_size=1<<s.w_bits,s.w_mask=s.w_size-1,s.hash_bits=i+7,s.hash_size=1<<s.hash_bits,s.hash_mask=s.hash_size-1,s.hash_shift=~~((s.hash_bits+ap-1)/ap),s.window=new Gh.Buf8(2*s.w_size),s.head=new Gh.Buf16(s.hash_size),s.prev=new Gh.Buf16(s.w_size),s.lit_bufsize=1<<i+6,s.pending_buf_size=4*s.lit_bufsize,s.pending_buf=new Gh.Buf8(s.pending_buf_size),s.d_buf=+s.lit_bufsize,s.l_buf=3*s.lit_bufsize,s.level=t,s.strategy=a,s.method=n,Tp(e)}zf=[new Rp(0,0,0,0,function(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){if(e.lookahead<=1){if(wp(e),0===e.lookahead&&t===qf)return lp;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+n;if((0===e.strstart||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,gp(e,!1),0===e.strm.avail_out))return lp;if(e.strstart-e.block_start>=e.w_size-sp&&(gp(e,!1),0===e.strm.avail_out))return lp}return e.insert=0,t===Kf?(gp(e,!0),0===e.strm.avail_out?hp:fp):(e.strstart>e.block_start&&(gp(e,!1),e.strm.avail_out),lp)}),new Rp(4,4,8,4,bp),new Rp(4,5,16,8,bp),new Rp(4,6,32,32,bp),new Rp(4,4,16,16,Cp),new Rp(8,16,32,32,Cp),new Rp(8,16,128,128,Cp),new Rp(8,32,128,256,Cp),new Rp(32,128,258,1024,Cp),new Rp(32,258,258,4096,Cp)];var Op={deflateInit:function(e,t){return Sp(e,t,Xf,15,8,0)},deflateInit2:Sp,deflateReset:Tp,deflateResetKeep:Ap,deflateSetHeader:function(e,t){return!e||!e.state||2!==e.state.wrap?Yf:(e.state.gzhead=t,Hf)},deflate:function(e,t){var n,r,i,a,o;if(!e||!e.state||5<t||t<0)return e?pp(e,Yf):Yf;if(r=e.state,!e.output||!e.input&&0!==e.avail_in||666===r.status&&t!==Kf)return pp(e,0===e.avail_out?-5:Yf);if(r.strm=e,n=r.last_flush,r.last_flush=t,r.status===up&&(2===r.wrap?(e.adler=0,mp(r,31),mp(r,139),mp(r,8),r.gzhead?(mp(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),mp(r,255&r.gzhead.time),mp(r,r.gzhead.time>>8&255),mp(r,r.gzhead.time>>16&255),mp(r,r.gzhead.time>>24&255),mp(r,9===r.level?2:2<=r.strategy||r.level<2?4:0),mp(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(mp(r,255&r.gzhead.extra.length),mp(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(e.adler=Gf(e.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(mp(r,0),mp(r,0),mp(r,0),mp(r,0),mp(r,0),mp(r,9===r.level?2:2<=r.strategy||r.level<2?4:0),mp(r,3),r.status=cp)):(o=Xf+(r.w_bits-8<<4)<<8,o|=(2<=r.strategy||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(o|=32),o+=31-o%31,r.status=cp,kp(r,o),0!==r.strstart&&(kp(r,e.adler>>>16),kp(r,65535&e.adler)),e.adler=1)),69===r.status)if(r.gzhead.extra){for(i=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>i&&(e.adler=Gf(e.adler,r.pending_buf,r.pending-i,i)),yp(e),i=r.pending,r.pending!==r.pending_buf_size));)mp(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>i&&(e.adler=Gf(e.adler,r.pending_buf,r.pending-i,i)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){i=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>i&&(e.adler=Gf(e.adler,r.pending_buf,r.pending-i,i)),yp(e),i=r.pending,r.pending===r.pending_buf_size)){a=1;break}a=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,mp(r,a)}while(0!==a);r.gzhead.hcrc&&r.pending>i&&(e.adler=Gf(e.adler,r.pending_buf,r.pending-i,i)),0===a&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){i=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>i&&(e.adler=Gf(e.adler,r.pending_buf,r.pending-i,i)),yp(e),i=r.pending,r.pending===r.pending_buf_size)){a=1;break}a=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,mp(r,a)}while(0!==a);r.gzhead.hcrc&&r.pending>i&&(e.adler=Gf(e.adler,r.pending_buf,r.pending-i,i)),0===a&&(r.status=103)}else r.status=103;if(103===r.status&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&yp(e),r.pending+2<=r.pending_buf_size&&(mp(r,255&e.adler),mp(r,e.adler>>8&255),e.adler=0,r.status=cp)):r.status=cp),0!==r.pending){if(yp(e),0===e.avail_out)return r.last_flush=-1,Hf}else if(0===e.avail_in&&vp(t)<=vp(n)&&t!==Kf)return pp(e,-5);if(666===r.status&&0!==e.avail_in)return pp(e,-5);if(0!==e.avail_in||0!==r.lookahead||t!==qf&&666!==r.status){var s=2===r.strategy?function(e,t){for(var n;;){if(0===e.lookahead&&(wp(e),0===e.lookahead)){if(t===qf)return lp;break}if(e.match_length=0,n=Ff._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(gp(e,!1),0===e.strm.avail_out))return lp}return e.insert=0,t===Kf?(gp(e,!0),0===e.strm.avail_out?hp:fp):e.last_lit&&(gp(e,!1),0===e.strm.avail_out)?lp:dp}(r,t):3===r.strategy?function(e,t){for(var n,r,i,a,o=e.window;;){if(e.lookahead<=op){if(wp(e),e.lookahead<=op&&t===qf)return lp;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=ap&&0<e.strstart&&(r=o[i=e.strstart-1])===o[++i]&&r===o[++i]&&r===o[++i]){a=e.strstart+op;do{}while(r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&i<a);e.match_length=op-(a-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=ap?(n=Ff._tr_tally(e,1,e.match_length-ap),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=Ff._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(gp(e,!1),0===e.strm.avail_out))return lp}return e.insert=0,t===Kf?(gp(e,!0),0===e.strm.avail_out?hp:fp):e.last_lit&&(gp(e,!1),0===e.strm.avail_out)?lp:dp}(r,t):zf[r.level].func(r,t);if(s!==hp&&s!==fp||(r.status=666),s===lp||s===hp)return 0===e.avail_out&&(r.last_flush=-1),Hf;if(s===dp&&(1===t?Ff._tr_align(r):5!==t&&(Ff._tr_stored_block(r,0,0,!1),3===t&&(_p(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),yp(e),0===e.avail_out))return r.last_flush=-1,Hf}return t!==Kf?Hf:r.wrap<=0?1:(2===r.wrap?(mp(r,255&e.adler),mp(r,e.adler>>8&255),mp(r,e.adler>>16&255),mp(r,e.adler>>24&255),mp(r,255&e.total_in),mp(r,e.total_in>>8&255),mp(r,e.total_in>>16&255),mp(r,e.total_in>>24&255)):(kp(r,e.adler>>>16),kp(r,65535&e.adler)),yp(e),0<r.wrap&&(r.wrap=-r.wrap),0!==r.pending?Hf:1)},deflateEnd:function(e){var t;return e&&e.state?(t=e.state.status)!==up&&69!==t&&73!==t&&91!==t&&103!==t&&t!==cp&&666!==t?pp(e,Yf):(e.state=null,t===cp?pp(e,-3):Hf):Yf},deflateSetDictionary:function(e,t){var n,r,i,a,o,s,u,c,l=t.length;if(!e||!e.state)return Yf;if(2===(a=(n=e.state).wrap)||1===a&&n.status!==up||n.lookahead)return Yf;for(1===a&&(e.adler=jf(e.adler,t,l,0)),n.wrap=0,l>=n.w_size&&(0===a&&(_p(n.head),n.strstart=0,n.block_start=0,n.insert=0),c=new Gh.Buf8(n.w_size),Gh.arraySet(c,t,l-n.w_size,n.w_size,0),t=c,l=n.w_size),o=e.avail_in,s=e.next_in,u=e.input,e.avail_in=l,e.next_in=0,e.input=t,wp(n);n.lookahead>=ap;){for(r=n.strstart,i=n.lookahead-(ap-1);n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+ap-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,--i;);n.strstart=r,n.lookahead=ap-1,wp(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=ap-1,n.match_available=0,e.next_in=s,e.input=u,e.avail_in=o,n.wrap=a,Hf},deflateInfo:"pako deflate (from Nodeca project)"},Dp=!0,Lp=!0;try{String.fromCharCode.apply(null,[0])}catch(e){Dp=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){Lp=!1}for(var Np=new Gh.Buf8(256),Mp=0;Mp<256;Mp++)Np[Mp]=252<=Mp?6:248<=Mp?5:240<=Mp?4:224<=Mp?3:192<=Mp?2:1;Np[254]=Np[254]=1;function xp(e,t){if(t<65534&&(e.subarray&&Lp||!e.subarray&&Dp))return String.fromCharCode.apply(null,Gh.shrinkBuf(e,t));for(var n="",r=0;r<t;r++)n+=String.fromCharCode(e[r]);return n}var Pp={string2buf:function(e){for(var t,n,r,i,a=e.length,o=0,s=0;s<a;s++)55296==(64512&(n=e.charCodeAt(s)))&&s+1<a&&56320==(64512&(r=e.charCodeAt(s+1)))&&(n=65536+(n-55296<<10)+(r-56320),s++),o+=n<128?1:n<2048?2:n<65536?3:4;for(t=new Gh.Buf8(o),s=i=0;i<o;s++)55296==(64512&(n=e.charCodeAt(s)))&&s+1<a&&56320==(64512&(r=e.charCodeAt(s+1)))&&(n=65536+(n-55296<<10)+(r-56320),s++),n<128?t[i++]=n:(n<2048?t[i++]=192|n>>>6:(n<65536?t[i++]=224|n>>>12:(t[i++]=240|n>>>18,t[i++]=128|n>>>12&63),t[i++]=128|n>>>6&63),t[i++]=128|63&n);return t},buf2binstring:function(e){return xp(e,e.length)},binstring2buf:function(e){for(var t=new Gh.Buf8(e.length),n=0,r=t.length;n<r;n++)t[n]=e.charCodeAt(n);return t},buf2string:function(e,t){for(var n,r,i=t||e.length,a=new Array(2*i),o=0,s=0;s<i;)if((n=e[s++])<128)a[o++]=n;else if(4<(r=Np[n]))a[o++]=65533,s+=r-1;else{for(n&=2===r?31:3===r?15:7;1<r&&s<i;)n=n<<6|63&e[s++],r--;1<r?a[o++]=65533:n<65536?a[o++]=n:(n-=65536,a[o++]=55296|n>>10&1023,a[o++]=56320|1023&n)}return xp(a,o)},utf8border:function(e,t){var n;for((t=t||e.length)>e.length&&(t=e.length),n=t-1;0<=n&&128==(192&e[n]);)n--;return!(n<0)&&0!==n&&n+Np[e[n]]>t?n:t}};var Vp=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},Up=Object.prototype.toString,Fp=0,jp=-1,Bp=0,zp=8;function Gp(e){if(!(this instanceof Gp))return new Gp(e);this.options=Gh.assign({level:jp,method:zp,chunkSize:16384,windowBits:15,memLevel:8,strategy:Bp,to:""},e||{});var t=this.options;if(t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Vp,this.strm.avail_out=0,(n=Op.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy))!==Fp)throw new Error(Wf[n]);if(t.header&&Op.deflateSetHeader(this.strm,t.header),t.dictionary){var n,r="string"==typeof t.dictionary?Pp.string2buf(t.dictionary):"[object ArrayBuffer]"===Up.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary;if((n=Op.deflateSetDictionary(this.strm,r))!==Fp)throw new Error(Wf[n]);this._dict_set=!0}}function Wp(e,t){var n=new Gp(t);if(n.push(e,!0),n.err)throw n.msg||Wf[n.err];return n.result}Gp.prototype.push=function(e,t){var n,r,i=this.strm,a=this.options.chunkSize;if(this.ended)return!1;r=t===~~t?t:!0===t?4:0,"string"==typeof e?i.input=Pp.string2buf(e):"[object ArrayBuffer]"===Up.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new Gh.Buf8(a),i.next_out=0,i.avail_out=a),1!==(n=Op.deflate(i,r))&&n!==Fp)return this.onEnd(n),!(this.ended=!0);0!==i.avail_out&&(0!==i.avail_in||4!==r&&2!==r)||("string"===this.options.to?this.onData(Pp.buf2binstring(Gh.shrinkBuf(i.output,i.next_out))):this.onData(Gh.shrinkBuf(i.output,i.next_out)))}while((0<i.avail_in||0===i.avail_out)&&1!==n);return 4===r?(n=Op.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Fp):2!==r||(this.onEnd(Fp),!(i.avail_out=0))},Gp.prototype.onData=function(e){this.chunks.push(e)},Gp.prototype.onEnd=function(e){e===Fp&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Gh.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};var qp={Deflate:Gp,deflate:Wp,deflateRaw:function(e,t){return(t=t||{}).raw=!0,Wp(e,t)},gzip:function(e,t){return(t=t||{}).gzip=!0,Wp(e,t)}},Kp=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],Hp=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],Yp=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],Zp=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64],$p=function(e,t,n,r,i,a,o,s){for(var u,c,l,d,h,f,p,v,_,y=s.bits,g=0,m=0,k=0,E=0,w=0,b=0,C=0,R=0,I=0,A=0,T=null,S=0,O=new Gh.Buf16(16),D=new Gh.Buf16(16),L=null,N=0,g=0;g<=15;g++)O[g]=0;for(m=0;m<r;m++)O[t[n+m]]++;for(w=y,E=15;1<=E&&0===O[E];E--);if(E<w&&(w=E),0===E)return i[a++]=20971520,i[a++]=20971520,s.bits=1,0;for(k=1;k<E&&0===O[k];k++);for(w<k&&(w=k),g=R=1;g<=15;g++)if(R<<=1,(R-=O[g])<0)return-1;if(0<R&&(0===e||1!==E))return-1;for(D[1]=0,g=1;g<15;g++)D[g+1]=D[g]+O[g];for(m=0;m<r;m++)0!==t[n+m]&&(o[D[t[n+m]]++]=m);if(f=0===e?(T=L=o,19):1===e?(T=Kp,S-=257,L=Hp,N-=257,256):(T=Yp,L=Zp,-1),g=k,h=a,C=m=A=0,l=-1,d=(I=1<<(b=w))-1,1===e&&852<I||2===e&&592<I)return 1;for(;;){for(p=g-C,_=o[m]<f?(v=0,o[m]):o[m]>f?(v=L[N+o[m]],T[S+o[m]]):(v=96,0),u=1<<g-C,k=c=1<<b;i[h+(A>>C)+(c-=u)]=p<<24|v<<16|_|0,0!==c;);for(u=1<<g-1;A&u;)u>>=1;if(0!==u?(A&=u-1,A+=u):A=0,m++,0==--O[g]){if(g===E)break;g=t[n+o[m]]}if(w<g&&(A&d)!==l){for(0===C&&(C=w),h+=k,R=1<<(b=g-C);b+C<E&&!((R-=O[b+C])<=0);)b++,R<<=1;if(I+=1<<b,1===e&&852<I||2===e&&592<I)return 1;i[l=A&d]=w<<24|b<<16|h-a|0}}return 0!==A&&(i[h+A]=g-C<<24|64<<16|0),s.bits=w,0},Qp=1,Xp=2,Jp=0,ev=-2,tv=1,nv=852,rv=592;function iv(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function av(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Gh.Buf16(320),this.work=new Gh.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function ov(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=tv,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Gh.Buf32(nv),t.distcode=t.distdyn=new Gh.Buf32(rv),t.sane=1,t.back=-1,Jp):ev}function sv(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,ov(e)):ev}function uv(e,t){var n,r;return e&&e.state?(r=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?ev:(null!==r.window&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,sv(e))):ev}function cv(e,t){var n,r;return e?(r=new av,(e.state=r).window=null,(n=uv(e,t))!==Jp&&(e.state=null),n):ev}var lv,dv,hv=!0;function fv(e,t,n,r){var i,a=e.state;return null===a.window&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new Gh.Buf8(a.wsize)),r>=a.wsize?(Gh.arraySet(a.window,t,n-a.wsize,a.wsize,0),a.wnext=0,a.whave=a.wsize):(r<(i=a.wsize-a.wnext)&&(i=r),Gh.arraySet(a.window,t,n-r,i,a.wnext),(r-=i)?(Gh.arraySet(a.window,t,n-r,r,0),a.wnext=r,a.whave=a.wsize):(a.wnext+=i,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=i))),0}var pv={inflateReset:sv,inflateReset2:uv,inflateResetKeep:ov,inflateInit:function(e){return cv(e,15)},inflateInit2:cv,inflate:function(e,t){var n,r,i,a,o,s,u,c,l,d,h,f,p,v,_,y,g,m,k,E,w,b,C,R,I=0,A=new Gh.Buf8(4),T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return ev;12===(n=e.state).mode&&(n.mode=13),o=e.next_out,i=e.output,u=e.avail_out,a=e.next_in,r=e.input,s=e.avail_in,c=n.hold,l=n.bits,d=s,h=u,b=Jp;e:for(;;)switch(n.mode){case tv:if(0===n.wrap){n.mode=13;break}for(;l<16;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}if(2&n.wrap&&35615===c){A[n.check=0]=255&c,A[1]=c>>>8&255,n.check=Gf(n.check,A,2,0),l=c=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&c)<<8)+(c>>8))%31){e.msg="incorrect header check",n.mode=30;break}if(8!=(15&c)){e.msg="unknown compression method",n.mode=30;break}if(l-=4,w=8+(15&(c>>>=4)),0===n.wbits)n.wbits=w;else if(w>n.wbits){e.msg="invalid window size",n.mode=30;break}n.dmax=1<<w,e.adler=n.check=1,n.mode=512&c?10:12,l=c=0;break;case 2:for(;l<16;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}if(n.flags=c,8!=(255&n.flags)){e.msg="unknown compression method",n.mode=30;break}if(57344&n.flags){e.msg="unknown header flags set",n.mode=30;break}n.head&&(n.head.text=c>>8&1),512&n.flags&&(A[0]=255&c,A[1]=c>>>8&255,n.check=Gf(n.check,A,2,0)),l=c=0,n.mode=3;case 3:for(;l<32;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}n.head&&(n.head.time=c),512&n.flags&&(A[0]=255&c,A[1]=c>>>8&255,A[2]=c>>>16&255,A[3]=c>>>24&255,n.check=Gf(n.check,A,4,0)),l=c=0,n.mode=4;case 4:for(;l<16;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}n.head&&(n.head.xflags=255&c,n.head.os=c>>8),512&n.flags&&(A[0]=255&c,A[1]=c>>>8&255,n.check=Gf(n.check,A,2,0)),l=c=0,n.mode=5;case 5:if(1024&n.flags){for(;l<16;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}n.length=c,n.head&&(n.head.extra_len=c),512&n.flags&&(A[0]=255&c,A[1]=c>>>8&255,n.check=Gf(n.check,A,2,0)),l=c=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&(s<(f=n.length)&&(f=s),f&&(n.head&&(w=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),Gh.arraySet(n.head.extra,r,a,f,w)),512&n.flags&&(n.check=Gf(n.check,r,f,a)),s-=f,a+=f,n.length-=f),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(0===s)break e;for(f=0;w=r[a+f++],n.head&&w&&n.length<65536&&(n.head.name+=String.fromCharCode(w)),w&&f<s;);if(512&n.flags&&(n.check=Gf(n.check,r,f,a)),s-=f,a+=f,w)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(0===s)break e;for(f=0;w=r[a+f++],n.head&&w&&n.length<65536&&(n.head.comment+=String.fromCharCode(w)),w&&f<s;);if(512&n.flags&&(n.check=Gf(n.check,r,f,a)),s-=f,a+=f,w)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;l<16;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}if(c!==(65535&n.check)){e.msg="header crc mismatch",n.mode=30;break}l=c=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=12;break;case 10:for(;l<32;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}e.adler=n.check=iv(c),l=c=0,n.mode=11;case 11:if(0===n.havedict)return e.next_out=o,e.avail_out=u,e.next_in=a,e.avail_in=s,n.hold=c,n.bits=l,2;e.adler=n.check=1,n.mode=12;case 12:if(5===t||6===t)break e;case 13:if(n.last){c>>>=7&l,l-=7&l,n.mode=27;break}for(;l<3;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}switch(n.last=1&c,--l,3&(c>>>=1)){case 0:n.mode=14;break;case 1:if(!function(e){if(hv){var t;for(lv=new Gh.Buf32(512),dv=new Gh.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for($p(Qp,e.lens,0,288,lv,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;$p(Xp,e.lens,0,32,dv,0,e.work,{bits:5}),hv=!1}e.lencode=lv,e.lenbits=9,e.distcode=dv,e.distbits=5}(n),n.mode=20,6!==t)break;c>>>=2,l-=2;break e;case 2:n.mode=17;break;case 3:e.msg="invalid block type",n.mode=30}c>>>=2,l-=2;break;case 14:for(c>>>=7&l,l-=7&l;l<32;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}if((65535&c)!=(c>>>16^65535)){e.msg="invalid stored block lengths",n.mode=30;break}if(n.length=65535&c,l=c=0,n.mode=15,6===t)break e;case 15:n.mode=16;case 16:if(f=n.length){if(s<f&&(f=s),u<f&&(f=u),0===f)break e;Gh.arraySet(i,r,a,f,o),s-=f,a+=f,u-=f,o+=f,n.length-=f;break}n.mode=12;break;case 17:for(;l<14;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}if(n.nlen=257+(31&c),c>>>=5,l-=5,n.ndist=1+(31&c),c>>>=5,l-=5,n.ncode=4+(15&c),c>>>=4,l-=4,286<n.nlen||30<n.ndist){e.msg="too many length or distance symbols",n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;l<3;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}n.lens[T[n.have++]]=7&c,c>>>=3,l-=3}for(;n.have<19;)n.lens[T[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,C={bits:n.lenbits},b=$p(0,n.lens,0,19,n.lencode,0,n.work,C),n.lenbits=C.bits,b){e.msg="invalid code lengths set",n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;y=(I=n.lencode[c&(1<<n.lenbits)-1])>>>16&255,g=65535&I,!((_=I>>>24)<=l);){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}if(g<16)c>>>=_,l-=_,n.lens[n.have++]=g;else{if(16===g){for(R=_+2;l<R;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}if(c>>>=_,l-=_,0===n.have){e.msg="invalid bit length repeat",n.mode=30;break}w=n.lens[n.have-1],f=3+(3&c),c>>>=2,l-=2}else if(17===g){for(R=_+3;l<R;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}l-=_,w=0,f=3+(7&(c>>>=_)),c>>>=3,l-=3}else{for(R=_+7;l<R;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}l-=_,w=0,f=11+(127&(c>>>=_)),c>>>=7,l-=7}if(n.have+f>n.nlen+n.ndist){e.msg="invalid bit length repeat",n.mode=30;break}for(;f--;)n.lens[n.have++]=w}}if(30===n.mode)break;if(0===n.lens[256]){e.msg="invalid code -- missing end-of-block",n.mode=30;break}if(n.lenbits=9,C={bits:n.lenbits},b=$p(Qp,n.lens,0,n.nlen,n.lencode,0,n.work,C),n.lenbits=C.bits,b){e.msg="invalid literal/lengths set",n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,C={bits:n.distbits},b=$p(Xp,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,C),n.distbits=C.bits,b){e.msg="invalid distances set",n.mode=30;break}if(n.mode=20,6===t)break e;case 20:n.mode=21;case 21:if(6<=s&&258<=u){e.next_out=o,e.avail_out=u,e.next_in=a,e.avail_in=s,n.hold=c,n.bits=l,function(e,t){var n,r,i,a,o,s,u=e.state,c=e.next_in,l=e.input,d=c+(e.avail_in-5),h=e.next_out,f=e.output,p=h-(t-e.avail_out),v=h+(e.avail_out-257),_=u.dmax,y=u.wsize,g=u.whave,m=u.wnext,k=u.window,E=u.hold,w=u.bits,b=u.lencode,C=u.distcode,R=(1<<u.lenbits)-1,I=(1<<u.distbits)-1;t:do{w<15&&(E+=l[c++]<<w,w+=8,E+=l[c++]<<w,w+=8),n=b[E&R];n:for(;;){if(E>>>=r=n>>>24,w-=r,0===(r=n>>>16&255))f[h++]=65535&n;else{if(!(16&r)){if(0==(64&r)){n=b[(65535&n)+(E&(1<<r)-1)];continue n}if(32&r){u.mode=12;break t}e.msg="invalid literal/length code",u.mode=30;break t}i=65535&n,(r&=15)&&(w<r&&(E+=l[c++]<<w,w+=8),i+=E&(1<<r)-1,E>>>=r,w-=r),w<15&&(E+=l[c++]<<w,w+=8,E+=l[c++]<<w,w+=8),n=C[E&I];r:for(;;){if(E>>>=r=n>>>24,w-=r,!(16&(r=n>>>16&255))){if(0==(64&r)){n=C[(65535&n)+(E&(1<<r)-1)];continue r}e.msg="invalid distance code",u.mode=30;break t}if(a=65535&n,w<(r&=15)&&(E+=l[c++]<<w,(w+=8)<r&&(E+=l[c++]<<w,w+=8)),_<(a+=E&(1<<r)-1)){e.msg="invalid distance too far back",u.mode=30;break t}if(E>>>=r,w-=r,(r=h-p)<a){if(g<(r=a-r)&&u.sane){e.msg="invalid distance too far back",u.mode=30;break t}if(s=k,(o=0)===m){if(o+=y-r,r<i){for(i-=r;f[h++]=k[o++],--r;);o=h-a,s=f}}else if(m<r){if(o+=y+m-r,(r-=m)<i){for(i-=r;f[h++]=k[o++],--r;);if(o=0,m<i){for(i-=r=m;f[h++]=k[o++],--r;);o=h-a,s=f}}}else if(o+=m-r,r<i){for(i-=r;f[h++]=k[o++],--r;);o=h-a,s=f}for(;2<i;)f[h++]=s[o++],f[h++]=s[o++],f[h++]=s[o++],i-=3;i&&(f[h++]=s[o++],1<i&&(f[h++]=s[o++]))}else{for(o=h-a;f[h++]=f[o++],f[h++]=f[o++],f[h++]=f[o++],2<(i-=3););i&&(f[h++]=f[o++],1<i&&(f[h++]=f[o++]))}break}}break}}while(c<d&&h<v);c-=i=w>>3,E&=(1<<(w-=i<<3))-1,e.next_in=c,e.next_out=h,e.avail_in=c<d?d-c+5:5-(c-d),e.avail_out=h<v?v-h+257:257-(h-v),u.hold=E,u.bits=w}(e,h),o=e.next_out,i=e.output,u=e.avail_out,a=e.next_in,r=e.input,s=e.avail_in,c=n.hold,l=n.bits,12===n.mode&&(n.back=-1);break}for(n.back=0;y=(I=n.lencode[c&(1<<n.lenbits)-1])>>>16&255,g=65535&I,!((_=I>>>24)<=l);){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}if(y&&0==(240&y)){for(m=_,k=y,E=g;y=(I=n.lencode[E+((c&(1<<m+k)-1)>>m)])>>>16&255,g=65535&I,!(m+(_=I>>>24)<=l);){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}c>>>=m,l-=m,n.back+=m}if(c>>>=_,l-=_,n.back+=_,n.length=g,0===y){n.mode=26;break}if(32&y){n.back=-1,n.mode=12;break}if(64&y){e.msg="invalid literal/length code",n.mode=30;break}n.extra=15&y,n.mode=22;case 22:if(n.extra){for(R=n.extra;l<R;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}n.length+=c&(1<<n.extra)-1,c>>>=n.extra,l-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;y=(I=n.distcode[c&(1<<n.distbits)-1])>>>16&255,g=65535&I,!((_=I>>>24)<=l);){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}if(0==(240&y)){for(m=_,k=y,E=g;y=(I=n.distcode[E+((c&(1<<m+k)-1)>>m)])>>>16&255,g=65535&I,!(m+(_=I>>>24)<=l);){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}c>>>=m,l-=m,n.back+=m}if(c>>>=_,l-=_,n.back+=_,64&y){e.msg="invalid distance code",n.mode=30;break}n.offset=g,n.extra=15&y,n.mode=24;case 24:if(n.extra){for(R=n.extra;l<R;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}n.offset+=c&(1<<n.extra)-1,c>>>=n.extra,l-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg="invalid distance too far back",n.mode=30;break}n.mode=25;case 25:if(0===u)break e;if(f=h-u,n.offset>f){if((f=n.offset-f)>n.whave&&n.sane){e.msg="invalid distance too far back",n.mode=30;break}p=f>n.wnext?(f-=n.wnext,n.wsize-f):n.wnext-f,f>n.length&&(f=n.length),v=n.window}else v=i,p=o-n.offset,f=n.length;for(u<f&&(f=u),u-=f,n.length-=f;i[o++]=v[p++],--f;);0===n.length&&(n.mode=21);break;case 26:if(0===u)break e;i[o++]=n.length,u--,n.mode=21;break;case 27:if(n.wrap){for(;l<32;){if(0===s)break e;s--,c|=r[a++]<<l,l+=8}if(h-=u,e.total_out+=h,n.total+=h,h&&(e.adler=n.check=(n.flags?Gf:jf)(n.check,i,h,o-h)),h=u,(n.flags?c:iv(c))!==n.check){e.msg="incorrect data check",n.mode=30;break}l=c=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;l<32;){if(0===s)break e;s--,c+=r[a++]<<l,l+=8}if(c!==(4294967295&n.total)){e.msg="incorrect length check",n.mode=30;break}l=c=0}n.mode=29;case 29:b=1;break e;case 30:b=-3;break e;case 31:return-4;case 32:default:return ev}return e.next_out=o,e.avail_out=u,e.next_in=a,e.avail_in=s,n.hold=c,n.bits=l,(n.wsize||h!==e.avail_out&&n.mode<30&&(n.mode<27||4!==t))&&fv(e,e.output,e.next_out,h-e.avail_out),d-=e.avail_in,h-=e.avail_out,e.total_in+=d,e.total_out+=h,n.total+=h,n.wrap&&h&&(e.adler=n.check=(n.flags?Gf:jf)(n.check,i,h,e.next_out-h)),e.data_type=n.bits+(n.last?64:0)+(12===n.mode?128:0)+(20===n.mode||15===n.mode?256:0),(0==d&&0===h||4===t)&&b===Jp&&(b=-5),b},inflateEnd:function(e){if(!e||!e.state)return ev;var t=e.state;return t.window&&(t.window=null),e.state=null,Jp},inflateGetHeader:function(e,t){var n;return!e||!e.state||0==(2&(n=e.state).wrap)?ev:((n.head=t).done=!1,Jp)},inflateSetDictionary:function(e,t){var n,r=t.length;return!e||!e.state||0!==(n=e.state).wrap&&11!==n.mode?ev:11===n.mode&&jf(1,t,r,0)!==n.check?-3:fv(e,t,r,r)?(n.mode=31,-4):(n.havedict=1,Jp)},inflateInfo:"pako inflate (from Nodeca project)"},vv={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};var _v=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1},yv=Object.prototype.toString;function gv(e){if(!(this instanceof gv))return new gv(e);this.options=Gh.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Vp,this.strm.avail_out=0;var n=pv.inflateInit2(this.strm,t.windowBits);if(n!==vv.Z_OK)throw new Error(Wf[n]);if(this.header=new _v,pv.inflateGetHeader(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=Pp.string2buf(t.dictionary):"[object ArrayBuffer]"===yv.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(n=pv.inflateSetDictionary(this.strm,t.dictionary))!==vv.Z_OK))throw new Error(Wf[n])}function mv(e,t){var n=new gv(t);if(n.push(e,!0),n.err)throw n.msg||Wf[n.err];return n.result}gv.prototype.push=function(e,t){var n,r,i,a,o,s=this.strm,u=this.options.chunkSize,c=this.options.dictionary,l=!1;if(this.ended)return!1;r=t===~~t?t:!0===t?vv.Z_FINISH:vv.Z_NO_FLUSH,"string"==typeof e?s.input=Pp.binstring2buf(e):"[object ArrayBuffer]"===yv.call(e)?s.input=new Uint8Array(e):s.input=e,s.next_in=0,s.avail_in=s.input.length;do{if(0===s.avail_out&&(s.output=new Gh.Buf8(u),s.next_out=0,s.avail_out=u),(n=pv.inflate(s,vv.Z_NO_FLUSH))===vv.Z_NEED_DICT&&c&&(n=pv.inflateSetDictionary(this.strm,c)),n===vv.Z_BUF_ERROR&&!0===l&&(n=vv.Z_OK,l=!1),n!==vv.Z_STREAM_END&&n!==vv.Z_OK)return this.onEnd(n),!(this.ended=!0);s.next_out&&(0!==s.avail_out&&n!==vv.Z_STREAM_END&&(0!==s.avail_in||r!==vv.Z_FINISH&&r!==vv.Z_SYNC_FLUSH)||("string"===this.options.to?(i=Pp.utf8border(s.output,s.next_out),a=s.next_out-i,o=Pp.buf2string(s.output,i),s.next_out=a,s.avail_out=u-a,a&&Gh.arraySet(s.output,s.output,i,a,0),this.onData(o)):this.onData(Gh.shrinkBuf(s.output,s.next_out)))),0===s.avail_in&&0===s.avail_out&&(l=!0)}while((0<s.avail_in||0===s.avail_out)&&n!==vv.Z_STREAM_END);return n===vv.Z_STREAM_END&&(r=vv.Z_FINISH),r===vv.Z_FINISH?(n=pv.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===vv.Z_OK):r!==vv.Z_SYNC_FLUSH||(this.onEnd(vv.Z_OK),!(s.avail_out=0))},gv.prototype.onData=function(e){this.chunks.push(e)},gv.prototype.onEnd=function(e){e===vv.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Gh.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};var kv={Inflate:gv,inflate:mv,inflateRaw:function(e,t){return(t=t||{}).raw=!0,mv(e,t)},ungzip:mv},Ev={};(0,Gh.assign)(Ev,qp,kv,vv);var wv=Ev.gzip,bv=Ev.ungzip,Cv=function(){function e(){y(this,e)}return s(e,null,[{key:"encode",value:function(e){return btoa(e)}},{key:"decode",value:function(e){return atob(e)}}]),e}(),Rv=function(){function e(){y(this,e)}return s(e,null,[{key:"compress",value:function(e){var t=wv(e,{to:"string"});return Cv.encode(t)}},{key:"decompress",value:function(e){var t=Cv.decode(e);return bv(t,{to:"string"})}}]),e}(),Iv=function(){g(i,kh);var r=k(i);function i(e,t){var n;return y(this,i),(n=r.call(this)).callId=e,n.sdp=t,n}return s(i,[{key:"getCMD",value:function(){return _h.SGNL}},{key:"getType",value:function(){return gh.ANSWER}},{key:"getData",value:function(){return{call_id:this.callId,sdp:Rv.compress(this.sdp)}}}]),i}(),Av=function(){g(t,wh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{sdp:Rv.decompress(e.sdp),callId:e.call_id}}}]),t}(),Tv=function(){g(i,kh);var r=k(i);function i(e,t){var n;return y(this,i),(n=r.call(this)).callId=e,n.isEnabled=t,n}return s(i,[{key:"getCMD",value:function(){return _h.COMM}},{key:"getType",value:function(){return gh.AUDIO}},{key:"getData",value:function(){return{call_id:this.callId,is_enabled:this.isEnabled}}}]),i}(),Sv=function(){g(t,wh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{callId:e.call_id,isEnabled:e.is_enabled}}}]),t}(),Ov=function(){g(r,kh);var n=k(r);function r(e){var t;return y(this,r),(t=n.call(this)).callId=e,t}return s(r,[{key:"requireResponse",value:function(){return!0}},{key:"getCMD",value:function(){return _h.CALL}},{key:"getType",value:function(){return gh.CANCEL}},{key:"getData",value:function(){return{call_id:this.callId}}}]),r}(),Dv=function(){g(o,kh);var a=k(o);function o(e,t,n,r){var i;return y(this,o),(i=a.call(this)).callId=e,i.sdp=t,i.sdpMLineIndex=n,i.sdpMid=r,i}return s(o,[{key:"getCMD",value:function(){return _h.SGNL}},{key:"getType",value:function(){return gh.CANDIDATE}},{key:"getData",value:function(){return{call_id:this.callId,candidate:{sdp:this.sdp,sdp_mline_index:this.sdpMLineIndex,sdp_mid:this.sdpMid}}}}]),o}(),Lv=function(){g(t,wh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{callId:e.call_id,candidate:{sdpMLineIndex:e.candidate.sdp_mline_index,sdpMid:e.candidate.sdp_mid,sdp:e.candidate.sdp}}}}]),t}(),Nv=function(){g(a,kh);var i=k(a);function a(e,t,n){var r;return y(this,a),(r=i.call(this)).callId=e,r.reconnect=n,r.connectionType=t.connectionType,r.relayProtocol=t.relayProtocol,r.ip=t.ip,r.port=t.port,r.protocol=t.protocol,r}return s(a,[{key:"getCMD",value:function(){return _h.SGNL}},{key:"getType",value:function(){return gh.CONNECTED}},{key:"getData",value:function(){return{call_id:this.callId,connection:{connection_type:this.connectionType,relay_protocol:this.relayProtocol,ip:this.ip,port:this.port,protocol:this.protocol},reconnect:this.reconnect}}}]),a}(),Mv=function(){g(r,kh);var n=k(r);function r(e){var t;return y(this,r),(t=n.call(this)).callId=e,t}return s(r,[{key:"requireResponse",value:function(){return!0}},{key:"getCMD",value:function(){return _h.CALL}},{key:"getType",value:function(){return gh.CONNECTION_LOST}},{key:"getData",value:function(){return{call_id:this.callId}}}]),r}(),xv=function(){g(r,kh);var n=k(r);function r(e){var t;return y(this,r),(t=n.call(this)).callId=e,t}return s(r,[{key:"requireResponse",value:function(){return!0}},{key:"getCMD",value:function(){return _h.CALL}},{key:"getType",value:function(){return gh.DECLINE}},{key:"getData",value:function(){return{call_id:this.callId}}}]),r}(),Pv=function(){g(t,wh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{callId:e.call_id,deleted:e.deleted,customItems:e.custom_items}}}]),t}(),Vv=function(){g(o,kh);var a=k(o);function o(e,t,n,r){var i;return y(this,o),(i=a.call(this)).calleeId=e,i.isVideoCall=t,i.customItems=n,i.constraints=r,i}return s(o,[{key:"requireResponse",value:function(){return!0}},{key:"getCMD",value:function(){return _h.CALL}},{key:"getType",value:function(){return gh.DIAL}},{key:"getData",value:function(){return{callee_id:this.calleeId,is_video_call:this.isVideoCall,custom_items:this.customItems,constraints:{audio:this.constraints.audio,video:this.constraints.video}}}}]),o}(),Uv=function e(t){y(this,e),this.userId=t.user_id,this.nickname=t.nickname,this.profileUrl=t.profile_url,this.metaData=t.meta_data,this.isActive=t.is_active,this.role=t.role},Fv=function(){g(t,wh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{isVideoCall:e.is_video_call,callId:e.call_id,caller:new Uv(e.caller),callee:new Uv(e.callee),turnCredential:{username:e.turn_credential.username,password:e.turn_credential.password,turnUrls:e.turn_credential.turn_urls,transportPolicy:e.turn_credential.transport_policy},constraints:{audio:e.constraints.audio,video:e.constraints.video},customItems:e.custom_items,shortLivedToken:e.sbcall_short_lived_token}}}]),t}(),jv=function(){g(t,Uh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{callId:e.call_id,calleeDeliveryInfo:e.callee_delivery_info,receivedType:e.received_type}}}]),t}(),Bv=function(){g(t,Uh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{isVideoCall:e.is_video_call,callId:e.call_id,caller:new Uv(e.caller),callee:new Uv(e.callee)}}}]),t}(),zv=function(){g(r,kh);var n=k(r);function r(e){var t;return y(this,r),(t=n.call(this)).callId=e,t}return s(r,[{key:"requireResponse",value:function(){return!0}},{key:"getCMD",value:function(){return _h.CALL}},{key:"getType",value:function(){return gh.END}},{key:"getData",value:function(){return{call_id:this.callId}}}]),r}(),Gv=ua.find,Wv="find",qv=!0,Kv=cr(Wv);Wv in[]&&Array(1)[Wv](function(){qv=!1}),We({target:"Array",proto:!0,forced:qv||!Kv},{find:function(e,t){return Gv(this,e,1<arguments.length?t:void 0)}}),Dn(Wv);var Hv=ua.map,Yv=ln("map"),Zv=cr("map");We({target:"Array",proto:!0,forced:!Yv||!Zv},{map:function(e,t){return Hv(this,e,1<arguments.length?t:void 0)}});function $v(){var n=this;y(this,$v),this.promise=new Promise(function(e,t){n.resolve=e,n.reject=t})}function Qv(s){return function(e){for(var t,n=W(e),r=En(n),i=r.length,a=0,o=[];a<i;)t=r[a++],X&&!p_.call(n,t)||o.push(s?[t,n[t]]:n[t]);return o}}var Xv=function(){function n(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];y(this,n),this.callId=t.call_id,this.isVideoCall=t.is_video_call,this._customItems=t.custom_items,this.userRole=t.user_role,this.startedAt=t.started_at,this.endedAt=t.ended_at,this._participants=t.participants.map(function(e){return new Uv(e)}),this.endedBy=this._participants.find(function(e){return e.userId===t.ended_by}),this.duration=t.duration,this.endResult=t.end_result,this.callType=t.call_type,this._isFromServer=e}return s(n,[{key:"caller",get:function(){return this._participants.find(function(e){return e.role===M.CALLER})}},{key:"callee",get:function(){return this._participants.find(function(e){return e.role===M.CALLEE})}},{key:"customItems",get:function(){return _({},this._customItems)}},{key:"isFromServer",get:function(){return this._isFromServer}}]),n}(),Jv=function(){g(t,wh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{callId:e.call_id,endedCall:new Xv(e.ended_call)}}}]),t}(),e_=function(){g(t,Uh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{callId:e.call_id,endedCall:new Xv(e.ended_call)}}}]),t}(),t_=function(){g(r,kh);var n=k(r);function r(e){var t;return y(this,r),(t=n.call(this)).callId=e,t}return s(r,[{key:"requireResponse",value:function(){return!0}},{key:"getCMD",value:function(){return _h.CALL}},{key:"getType",value:function(){return gh.NO_ANSWER}},{key:"getData",value:function(){return{call_id:this.callId}}}]),r}(),n_=function(){g(i,kh);var r=k(i);function i(e,t){var n;return y(this,i),(n=r.call(this)).callId=e,n.sdp=t,n}return s(i,[{key:"getCMD",value:function(){return _h.SGNL}},{key:"getType",value:function(){return gh.OFFER}},{key:"getData",value:function(){return{call_id:this.callId,sdp:Rv.compress(this.sdp)}}}]),i}(),r_=function(){g(t,wh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{sdp:Rv.decompress(e.sdp),callId:e.call_id}}}]),t}(),i_=function(){g(t,wh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{callId:e.call_id,candidates:e.candidates.map(function(e){return{sdpMLineIndex:e.sdp_mline_index,sdpMid:e.sdp_mid,candidate:e.sdp}})}}}]),t}(),a_=function(){g(i,kh);var r=k(i);function i(e,t){var n;return y(this,i),(n=r.call(this)).callId=e,n.reason=t,n}return s(i,[{key:"requireResponse",value:function(){return!0}},{key:"getCMD",value:function(){return _h.CALL}},{key:"getType",value:function(){return gh.TIME_OUT}},{key:"getData",value:function(){return{call_id:this.callId,reason:this.reason}}}]),i}(),o_=function(){g(t,wh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{callId:e.call_id,updated:e.updated,customItems:e.custom_items}}}]),t}(),s_=function(){g(i,kh);var r=k(i);function i(e,t){var n;return y(this,i),(n=r.call(this)).callId=e,n.isEnabled=t,n}return s(i,[{key:"getCMD",value:function(){return _h.COMM}},{key:"getType",value:function(){return gh.VIDEO}},{key:"getData",value:function(){return{call_id:this.callId,is_enabled:this.isEnabled}}}]),i}(),u_=function(){g(t,wh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"parseData",value:function(e){return{callId:e.call_id,isEnabled:e.is_enabled}}}]),t}(),c_=function(){g(r,hh);var n=k(r);function r(e){var t;return y(this,r),(t=n.call(this)).version=e.version,t.messageId=e.message_id,t.cmd=e.cmd,t.type=e.type,t.sequenceNumber=e.sequence_number,t.payload=e.payload||{},t}return s(r,[{key:"getCallId",value:function(){return this.payload.callId}}]),r}(),l_=function(){g(n,c_);var t=k(n);function n(e){return y(this,n),t.call(this,{type:"decline_ack",cmd:_h.SGNL,payload:e})}return n}(),d_=function(){g(n,c_);var t=k(n);function n(e){return y(this,n),t.call(this,{type:"snapshot",cmd:_h.SGNL,payload:e})}return n}(),h_=function(){g(t,c_);var e=k(t);function t(){return y(this,t),e.call(this,{type:"websocket_connected",cmd:_h.SGNL})}return t}(),f_=function(){function e(){y(this,e)}return s(e,null,[{key:"createAuthRequest",value:function(e,t,n){return new Rh(e,t,n)}},{key:"createDial",value:function(e,t,n,r){return new Vv(e,t,n,r)}},{key:"createDialReceive",value:function(e,t,n,r){return new Nh(e,t,n,r)}},{key:"createAccept",value:function(e,t){return new Ph(e,t)}},{key:"createDecline",value:function(e){return new xv(e)}},{key:"createCancel",value:function(e){return new Ov(e)}},{key:"createEnd",value:function(e){return new zv(e)}},{key:"createTimeout",value:function(e,t){return new a_(e,t)}},{key:"createConnectionLost",value:function(e){return new Mv(e)}},{key:"createNoAnswer",value:function(e){return new t_(e)}},{key:"createOffer",value:function(e,t){return new n_(e,t)}},{key:"createAnswer",value:function(e,t){return new Iv(e,t)}},{key:"createCandidate",value:function(e,t,n,r){return new Dv(e,t,n,r)}},{key:"createAudio",value:function(e,t){return new Tv(e,t)}},{key:"createVideo",value:function(e,t){return new s_(e,t)}},{key:"createAlive",value:function(e){return new Bh(e)}},{key:"createConnected",value:function(e,t,n){return new Nv(e,t,n)}},{key:"createStatsLogCommand",value:function(e){return new Mh(e)}},{key:"createCallSummaryCommand",value:function(e,t,n){return new Ih(e,t,n)}},{key:"createUpdateCustomItems",value:function(e,t){return new xh(e,t)}},{key:"createDeleteCustomItems",value:function(e,t){return new Lh(e,t)}},{key:"createDeleteAllCustomItems",value:function(e){return new Dh(e)}},{key:"createRecording",value:function(e,t,n,r){return new Eh(e,t,n,r)}},{key:"createCommandList",value:function(e){return new Oh(e)}},{key:"createAccepted",value:function(e){return new jh({type:"other_device_accepted",payload:{call_id:e}})}},{key:"createDeclined",value:function(e,t){return new l_({callId:e,endedCall:t})}},{key:"createWebSocketConnection",value:function(){return new h_}},{key:"createSnapshot",value:function(e,t){return new d_(_({callId:e},t))}},{key:"parse",value:function(e){try{switch(e.type){case gh.DIAL_ACK:return new Bv(e);case gh.DIAL:return new Fv(e);case gh.DIAL_RCV:return new jv(e);case gh.NO_ANSWER_ACK:return new e_(e);case gh.NO_ANSWER:return new Jv(e);case gh.CANCEL_ACK:return new e_(e);case gh.CANCEL:return new Jv(e);case gh.ACCEPT_ACK:return new Fh(e);case gh.ACCEPT:return new Vh(e);case gh.OTHER_DEVICE_ACCEPTED:return new jh(e);case gh.DECLINE_ACK:return new e_(e);case gh.DECLINE:return new Jv(e);case gh.OFFER:return new r_(e);case gh.ANSWER:return new Av(e);case gh.CANDIDATE:return new Lv(e);case gh.REMOVE_CANDIDATES:return new i_(e);case gh.AUDIO:return new Sv(e);case gh.VIDEO:return new u_(e);case gh.END_ACK:return new e_(e);case gh.END:return new Jv(e);case gh.TIMEOUT_ACK:return new e_(e);case gh.TIME_OUT:return new Jv(e);case gh.CONNECTION_LOST_ACK:return new e_(e);case gh.CONNECTION_LOST:return new Jv(e);case gh.UNKNOWN_END_ACK:return new e_(e);case gh.UNKNOWN_END:return new Jv(e);case gh.CUSTOM_ITEMS_UPDATE:return new o_(e);case gh.CUSTOM_ITEMS_DELETE:return new Pv(e);case gh.ALIVE_ACK:return new zh(e);case gh.RECORDING:return new bh(e);default:throw new Error("unhandled command data. ".concat(JSON.stringify(e)))}}catch(e){return void yc.error(new th(Dc.ERR_WRONG_RESPONSE,{error:e}))}}}]),e}(),p_=te.f,v_={entries:Qv(!0),values:Qv(!1)},__=v_.entries;We({target:"Object",stat:!0},{entries:function(e){return __(e)}});var y_,g_;(g_=y_=y_||{}).IDLE="idle",g_.DIALING="dialing",g_.RINGING="ringing",g_.ACCEPTING="accepting",g_.OFFERING="offering",g_.ANSWERING="answering",g_.CONNECTED="connected",g_.RECONNECTING="reconnecting",g_.ICERESTART="icerestart",g_.ENDED="ended",g_.ABORTED="aborted",g_.CLOSING="closing",g_.ENDING="ending",g_.CANCELED="canceled";var m_,k_,E_=function(){function n(e,t){y(this,n),this.call=e,this.stateManager=t,this.timer=null}return s(n,[{key:"dial",value:function(){yc.verbose("[".concat(this.getType(),"] dial"))}},{key:"dialSent",value:function(){yc.verbose("[".concat(this.getType(),"] dialSent"))}},{key:"dialFailed",value:function(){yc.verbose("[".concat(this.getType(),"] dialFailed"))}},{key:"accept",value:function(){yc.verbose("[".concat(this.getType(),"] accept"))}},{key:"acceptSent",value:function(){yc.verbose("[".concat(this.getType(),"] acceptSent"))}},{key:"acceptFailed",value:function(){yc.verbose("[".concat(this.getType(),"] acceptFailed"))}},{key:"receiveAccept",value:function(){yc.verbose("[".concat(this.getType(),"] receiveAccept"))}},{key:"receiveAccepted",value:function(){yc.verbose("[".concat(this.getType(),"] receiveAccepted"))}},{key:"end",value:function(){yc.verbose("[".concat(this.getType(),"] end"))}},{key:"endSent",value:function(){yc.verbose("[".concat(this.getType(),"] endSent"))}},{key:"receiveEnd",value:function(){yc.verbose("[".concat(this.getType(),"] receiveEnd"))}},{key:"timeout",value:function(){yc.verbose("[".concat(this.getType(),"] timeout"))}},{key:"offer",value:function(){yc.verbose("[".concat(this.getType(),"] offer"))}},{key:"receiveOffer",value:function(){yc.verbose("[".concat(this.getType(),"] receiveOffer"))}},{key:"receiveAnswer",value:function(){yc.verbose("[".concat(this.getType(),"] receiveAnswer"))}},{key:"receiveCandidate",value:function(){yc.verbose("[".concat(this.getType(),"] receiveCandidate"))}},{key:"connected",value:function(){yc.verbose("[".concat(this.getType(),"] connected"))}},{key:"disconnected",value:function(){yc.verbose("[".concat(this.getType(),"] disconnected"))}},{key:"failed",value:function(){yc.verbose("[".concat(this.getType(),"] failed"))}},{key:"closed",value:function(){yc.verbose("[".concat(this.getType(),"] closed"))}},{key:"onStart",value:function(){}},{key:"onDestroy",value:function(){}},{key:"fireTimeout",value:function(){}},{key:"toggleVideo",value:function(e){yc.verbose("[".concat(this.getType(),"] toggleVideo ").concat(e))}},{key:"toggleMicrophone",value:function(e){yc.verbose("[".concat(this.getType(),"] toggleMicrophone ").concat(e))}},{key:"_createTimer",value:function(e,t){var n=this;this.timer=setTimeout(function(){n._removeTimer(),e()},t)}},{key:"_removeTimer",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=null)}}]),n}(),w_=function(){g(t,E_);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"getType",value:function(){return y_.ABORTED}},{key:"onStart",value:function(){this.call.stopToSendAlive(),this.call.fireOnEnded()}},{key:"dialSent",value:function(e){var t=e.payload;this.call.setCallInfo(t.callId,t.caller,t.callee),this.call.sendCancelCommand().catch(function(e){return yc.debug(e)})}},{key:"dialFailed",value:function(){this.stateManager.toEnded()}},{key:"endSent",value:function(e){this.call.setEndInfo(e.payload.endedCall),this.stateManager.toEnded()}},{key:"receiveEnd",value:function(e){this.call.setEndInfo(e.payload.endedCall),this.stateManager.toEnded()}}]),t}();(k_=m_=m_||{}).ACCEPTING="accepting_timeout",k_.ANSWERING="answering_timeout",k_.OFFERING="offering_timeout";var b_,C_,R_=function(){g(n,E_);var t,e=k(n);function n(){return y(this,n),e.apply(this,arguments)}return s(n,[{key:"getType",value:function(){return y_.ACCEPTING}},{key:"onStart",value:function(){this.call.startCallConnectionTimer()}},{key:"acceptSent",value:function(){this.stateManager.toAnswering()}},{key:"receiveOffer",value:(t=v(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.stateManager.toAnswering(t);case 1:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"acceptFailed",value:function(){this.call.setEndResult(L.ACCEPT_FAILED),this.stateManager.toClosing()}},{key:"end",value:function(){this.call.sendEndCommand().catch(function(e){return yc.debug(e)}),this.call.setEndResult(L.COMPLETED),this.stateManager.toClosing()}},{key:"fireTimeout",value:function(){this.call.sendTimeoutCommand(m_.ACCEPTING).catch(function(e){return yc.debug(e)}),this.call.setEndResult(L.TIMED_OUT),this.stateManager.toClosing()}},{key:"receiveEnd",value:function(e){this.call.setEndResult(e.payload.endedCall.endResult),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"toggleMicrophone",value:function(e){this.call.toggleMicrophone(e),this.call.sendAudioCommand().catch(function(e){return yc.debug(e)})}},{key:"toggleVideo",value:function(e){this.call.toggleVideo(e),this.call.sendVideoCommand().catch(function(e){return yc.debug(e)})}}]),n}(),I_=function(){g(a,E_);var t,i=k(a);function a(e,t,n){var r;return y(this,a),(r=i.call(this,e,t)).offerCommand=n,r}return s(a,[{key:"getType",value:function(){return y_.ANSWERING}},{key:"onStart",value:function(){this.call.fireOnEstablished(),this.call.createRTCConnection(),this.call.sendAudioCommand(),this.call.sendVideoCommand(),this._tryAnswer(this.offerCommand)}},{key:"onDestroy",value:function(){}},{key:"receiveOffer",value:function(e){this._tryAnswer(e)}},{key:"receiveAnswer",value:function(e){this.call.setRemoteDescription("answer",e.payload.sdp)}},{key:"receiveCandidate",value:function(e){var t=e.payload.candidate;this.call.addCandidate({sdpMLineIndex:t.sdpMLineIndex,sdpMid:t.sdpMid,candidate:t.sdp})}},{key:"connected",value:function(){this.stateManager.toConnected(!1)}},{key:"end",value:function(){this.call.sendEndCommand().catch(function(e){return yc.debug(e)}),this.call.setEndResult(L.COMPLETED),this.stateManager.toClosing()}},{key:"fireTimeout",value:function(){this.call.sendTimeoutCommand(m_.ANSWERING).catch(function(e){return yc.debug(e)}),this.call.setEndResult(L.TIMED_OUT),this.stateManager.toClosing()}},{key:"receiveEnd",value:function(e){this.call.setEndResult(e.payload.endedCall.endResult),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"_tryAnswer",value:(t=v(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return this.call.setStartedAt(),e.next=5,this.call.setRemoteDescription("offer",t.payload.sdp);case 5:return e.next=7,this.call.addTracks();case 7:this.call.sendAnswer().catch(function(e){return yc.debug(e)});case 8:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"toggleMicrophone",value:function(e){this.call.toggleMicrophone(e),this.call.sendAudioCommand().catch(function(e){return yc.debug(e)})}},{key:"toggleVideo",value:function(e){this.call.toggleVideo(e),this.call.sendVideoCommand().catch(function(e){return yc.debug(e)})}}]),a}(),A_=function(){g(t,E_);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"getType",value:function(){return y_.CANCELED}},{key:"onStart",value:function(){this.call.stopCallConnectionTimer(),this.call.fireOnRinging(),this.stateManager.toClosing()}}]),t}(),T_=function(){g(t,E_);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"getType",value:function(){return y_.CLOSING}},{key:"onStart",value:function(){this.call.stopCallConnectionTimer(),this.call.stopToSendAlive(),this.call.stopGetWebRtcStats(),this.call.closeRTCConnection()}},{key:"endSent",value:function(e){this.call.setEndInfo(e.payload.endedCall)}},{key:"closed",value:function(){this.stateManager.toEnding()}}]),t}(),S_=function(){g(a,E_);var t,i=k(a);function a(e,t,n){var r;return y(this,a),(r=i.call(this,e,t)).isReconnected=n,r}return s(a,[{key:"getType",value:function(){return y_.CONNECTED}},{key:"onStart",value:function(){this.call.stopCallConnectionTimer(),this.call.startGetWebRtcStats(),this.call.sendConnectedInfo(),this.isReconnected?(this.call.setIsReconnected(!0),this.call.increaseReconnectedCount(),this.call.fireOnReconnected(),this.call.playSound(Sc.RECONNECTED)):(this.call.calcCallSetupTime(),this.call.fireOnConnected())}},{key:"onDestroy",value:function(){this.call.stopSound(Sc.RECONNECTED)}},{key:"receiveOffer",value:function(e){this._tryAnswer(e)}},{key:"receiveAnswer",value:function(e){this.call.setRemoteDescription("answer",e.payload.sdp)}},{key:"receiveCandidate",value:function(e){var t=e.payload.candidate;this.call.addCandidate({sdpMLineIndex:t.sdpMLineIndex,sdpMid:t.sdpMid,candidate:t.sdp})}},{key:"disconnected",value:function(){this.stateManager.toReconnecting()}},{key:"failed",value:function(){this.stateManager.toReconnecting()}},{key:"end",value:function(){this.call.sendEndCommand().catch(function(e){return yc.debug(e)}),this.call.setEndResult(L.COMPLETED),this.stateManager.toClosing()}},{key:"receiveEnd",value:function(e){this.call.setEndResult(e.payload.endedCall.endResult),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"toggleMicrophone",value:function(e){this.call.toggleMicrophone(e),this.call.sendAudioCommand().catch(function(e){return yc.debug(e)})}},{key:"toggleVideo",value:function(e){this.call.toggleVideo(e),this.call.sendVideoCommand().catch(function(e){return yc.debug(e)})}},{key:"_tryAnswer",value:(t=v(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.call.setRemoteDescription("offer",t.payload.sdp);case 4:this.call.sendAnswer().catch(function(e){return yc.debug(e)});case 5:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})}]),a}(),O_=function(){g(t,E_);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"getType",value:function(){return y_.DIALING}},{key:"onStart",value:function(){var e=this;this._createTimer(function(){e._noAnswer()},this._getTimeoutTime()),this.call.startToSendAlive(),this.call.playSound(Sc.DIALING)}},{key:"onDestroy",value:function(){this._removeTimer(),this.call.stopSound(Sc.DIALING)}},{key:"receiveAccept",value:function(e){var t=e.payload;this.call.setTurnCredential(t.turnCredential),this.call.setRemoteOption(t.constraints),this.call.setCallSetupStartTime(),this.stateManager.toOffering()}},{key:"end",value:function(){this.call.sendCancelCommand().catch(function(e){return yc.debug(e)}),this.call.setEndResult(L.CANCELED),this.stateManager.toClosing()}},{key:"receiveEnd",value:function(e){this.call.setEndResult(e.payload.endedCall.endResult),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"_noAnswer",value:function(){this.call.sendNoAnswerCommand().catch(function(e){return yc.debug(e)}),this.call.setEndResult(L.NO_ANSWER),this.stateManager.toClosing()}},{key:"_getTimeoutTime",value:function(){return this.call.options.ringingTimeoutValue}},{key:"toggleMicrophone",value:function(e){this.call.toggleMicrophone(e),this.call.sendAudioCommand().catch(function(e){return yc.debug(e)})}},{key:"toggleVideo",value:function(e){this.call.toggleVideo(e),this.call.sendVideoCommand().catch(function(e){return yc.debug(e)})}}]),t}(),D_=function(){g(t,E_);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"getType",value:function(){return y_.ENDED}},{key:"onStart",value:function(){this.call.stopAllSound()}},{key:"endSent",value:function(e){this.call.setEndInfo(e.payload.endedCall)}}]),t}(),L_=function(){g(t,E_);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"getType",value:function(){return y_.ENDING}},{key:"onStart",value:function(){this.call.sendCallSummary(),this.call.fireOnEnded(),this.stateManager.toEnded()}}]),t}(),N_=function(){g(a,E_);var t,i=k(a);function a(e,t,n){var r;return y(this,a),(r=i.call(this,e,t)).offerCommand=n,r}return s(a,[{key:"getType",value:function(){return y_.ICERESTART}},{key:"onStart",value:function(){var e=this;this._createTimer(function(){e.call.sendConnectionLostCommand().catch(function(e){return yc.debug(e)})},this._getTimeoutTime()),this.offerCommand?this._tryAnswer(this.offerCommand):this.call.myRole===M.CALLER&&this.call.sendOffer(!0)}},{key:"onDestroy",value:function(){this._removeTimer()}},{key:"_getTimeoutTime",value:function(){return 3e4}},{key:"connected",value:function(){this.stateManager.toConnected(!0)}},{key:"receiveOffer",value:function(e){this._tryAnswer(e)}},{key:"receiveAnswer",value:function(e){this.call.setRemoteDescription("answer",e.payload.sdp)}},{key:"receiveCandidate",value:function(e){var t=e.payload.candidate;this.call.addCandidate({sdpMLineIndex:t.sdpMLineIndex,sdpMid:t.sdpMid,candidate:t.sdp})}},{key:"end",value:function(){this.call.sendEndCommand().catch(function(e){return yc.debug(e)}),this.call.setEndResult(L.COMPLETED),this.stateManager.toClosing()}},{key:"receiveEnd",value:function(e){this.call.setEndResult(e.payload.endedCall.endResult),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"_tryAnswer",value:(t=v(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.call.setRemoteDescription("offer",t.payload.sdp);case 4:this.call.sendAnswer().catch(function(e){return yc.debug(e)});case 5:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})}]),a}(),M_=function(){g(t,eh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return t}(),x_=function(){g(r,E_);var n=k(r);function r(e,t){return y(this,r),n.call(this,e,t)}return s(r,[{key:"getType",value:function(){return y_.IDLE}},{key:"dial",value:function(e,t,n,r,i){this.dialDeferred=i,this.call.setIsVideoCall(t),this.call.setLocalOption(n),this.call.setCustomItems(r),this.call.setDialSentAt(),this.call.sendDialCommand(e).then(function(){i.resolve()}).catch(function(e){i.reject(e)})}},{key:"dialSent",value:function(e){var t=e.payload;this.call.setCallInfo(t.callId,t.caller,t.callee),this.call.calcPdd(),this.stateManager.toDialing()}},{key:"dialFailed",value:function(){this.call.setEndResult(L.DIAL_FAILED),this.stateManager.toClosing()}},{key:"end",value:function(){this.call.setEndResult(L.CANCELED),this.dialDeferred.reject(new M_(Dc.DIAL_CANCELED)),this.stateManager.toAborted()}},{key:"toggleMicrophone",value:function(e){this.call.toggleMicrophone(e)}},{key:"toggleVideo",value:function(e){this.call.toggleVideo(e)}}]),r}(),P_=function(){g(t,E_);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"getType",value:function(){return y_.OFFERING}},{key:"onStart",value:function(){this.call.startCallConnectionTimer(),this.call.fireOnEstablished(),this.call.createRTCConnection(),this.call.addTracks(),this.call.sendAudioCommand(),this.call.sendVideoCommand()}},{key:"onDestroy",value:function(){}},{key:"receiveOffer",value:function(e){this.call.setRemoteDescription("offer",e.payload.sdp),this.call.sendAnswer().catch(function(e){return yc.debug(e)})}},{key:"receiveAnswer",value:function(e){this.call.setStartedAt(),this.call.setRemoteDescription("answer",e.payload.sdp)}},{key:"receiveCandidate",value:function(e){var t=e.payload.candidate;this.call.addCandidate({sdpMLineIndex:t.sdpMLineIndex,sdpMid:t.sdpMid,candidate:t.sdp})}},{key:"connected",value:function(){this.stateManager.toConnected(!1)}},{key:"end",value:function(){this.call.sendEndCommand().catch(function(e){return yc.debug(e)}),this.call.setEndResult(L.COMPLETED),this.stateManager.toClosing()}},{key:"fireTimeout",value:function(){this.call.sendTimeoutCommand(m_.OFFERING).catch(function(e){return yc.debug(e)}),this.call.setEndResult(L.TIMED_OUT),this.stateManager.toClosing()}},{key:"receiveEnd",value:function(e){this.call.setEndResult(e.payload.endedCall.endResult),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"toggleMicrophone",value:function(e){this.call.toggleMicrophone(e),this.call.sendAudioCommand().catch(function(e){return yc.debug(e)})}},{key:"toggleVideo",value:function(e){this.call.toggleVideo(e),this.call.sendVideoCommand().catch(function(e){return yc.debug(e)})}}]),t}(),V_=function(){g(r,E_);var n=k(r);function r(e,t){return y(this,r),n.call(this,e,t)}return s(r,[{key:"getType",value:function(){return y_.RECONNECTING}},{key:"onStart",value:function(){var e=this;this.call.stopGetWebRtcStats(),this._createTimer(function(){e.call.sendConnectionLostCommand().catch(function(e){return yc.debug(e)})},this._getTimeoutTime()),this.call.fireOnReconnecting(),this.call.playSound(Sc.RECONNECTING)}},{key:"onDestroy",value:function(){this._removeTimer(),this.call.stopSound(Sc.RECONNECTING)}},{key:"receiveOffer",value:function(e){this.stateManager.toIceRestart(e)}},{key:"receiveCandidate",value:function(e){var t=e.payload.candidate;this.call.addCandidate({sdpMLineIndex:t.sdpMLineIndex,sdpMid:t.sdpMid,candidate:t.sdp})}},{key:"connected",value:function(){this.stateManager.toConnected(!0)}},{key:"failed",value:function(){this.stateManager.toIceRestart()}},{key:"end",value:function(){this.call.sendEndCommand().catch(function(e){return yc.debug(e)}),this.call.setEndResult(L.COMPLETED),this.stateManager.toClosing()}},{key:"receiveEnd",value:function(e){this.call.setEndResult(e.payload.endedCall.endResult),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"_getTimeoutTime",value:function(){return 3e4}},{key:"toggleMicrophone",value:function(e){this.call.toggleMicrophone(e),this.call.sendAudioCommand().catch(function(e){return yc.debug(e)})}},{key:"toggleVideo",value:function(e){this.call.toggleVideo(e),this.call.sendVideoCommand().catch(function(e){return yc.debug(e)})}}]),r}(),U_=function(){g(t,E_);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return s(t,[{key:"getType",value:function(){return y_.RINGING}},{key:"onStart",value:function(){var e=this;this._createTimer(function(){e._noAnswer()},this._getTimeoutTime()),this.call.startToSendAlive(),this.call.fireOnRinging(),this.call.playSound(Sc.RINGING)}},{key:"onDestroy",value:function(){this._removeTimer(),this.call.stopSound(Sc.RINGING)}},{key:"accept",value:function(e){this.call.setLocalOption(e),this.call.setCallSetupStartTime(),this.call.sendAcceptCommand().catch(function(e){return yc.debug(e)}),this.stateManager.toAccepting()}},{key:"receiveAccepted",value:function(){this.call.setEndResult(L.OTHER_DEVICE_ACCEPTED),this.stateManager.toClosing()}},{key:"end",value:function(){this.call.sendDeclineCommand().catch(function(e){return yc.debug(e)}),this.call.setEndResult(L.DECLINED),this.stateManager.toClosing()}},{key:"endSent",value:function(e){this.call.setEndResult(L.DECLINED),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"receiveEnd",value:function(e){this.call.setEndResult(e.payload.endedCall.endResult),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"toggleMicrophone",value:function(e){this.call.toggleMicrophone(e)}},{key:"toggleVideo",value:function(e){this.call.toggleVideo(e)}},{key:"_noAnswer",value:function(){this.call.sendNoAnswerCommand().catch(function(e){return yc.debug(e)}),this.call.setEndResult(L.NO_ANSWER),this.stateManager.toClosing()}},{key:"_getTimeoutTime",value:function(){return this.call.options.ringingTimeoutValue}}]),t}(),F_=function(){function t(e){y(this,t),this.call=e,this._state=null}return s(t,[{key:"toAborted",value:function(){this._changeState(new w_(this.call,this))}},{key:"toAccepting",value:function(){this._changeState(new R_(this.call,this))}},{key:"toAnswering",value:function(e){this._changeState(new I_(this.call,this,e))}},{key:"toCanceled",value:function(){this._changeState(new A_(this.call,this))}},{key:"toClosing",value:function(){this._changeState(new T_(this.call,this))}},{key:"toConnected",value:function(e){this._changeState(new S_(this.call,this,e))}},{key:"toDialing",value:function(){this._changeState(new O_(this.call,this))}},{key:"toEnded",value:function(){this._changeState(new D_(this.call,this))}},{key:"toEnding",value:function(){this._changeState(new L_(this.call,this))}},{key:"toIceRestart",value:function(e){this._changeState(new N_(this.call,this,e))}},{key:"toIdle",value:function(){this._changeState(new x_(this.call,this))}},{key:"toOffering",value:function(){this._changeState(new P_(this.call,this))}},{key:"toReconnecting",value:function(){this._changeState(new V_(this.call,this))}},{key:"toRinging",value:function(){this._changeState(new U_(this.call,this))}},{key:"_changeState",value:function(e){this._state&&this._state.getType()===e.getType()?yc.error(new Error("self-transition is not allowed")):(yc.debug("state: ".concat(this._state?this._state.getType():"null"," -> ").concat(e.getType())),this._state&&this._state.onDestroy(),this._state=e,this._state.onStart())}},{key:"state",get:function(){return this._state}}]),t}();(C_=b_=b_||{}).RELAY="relay",C_.ALL="all";var j_=I(null,function(u,e){var t,n,r,i,a,o,s,c,l,d,h,f;return{F:function(){g(s,e);var o=k(s);function s(e,t,n,r,i){var a;return y(this,s),a=o.call(this,e),u(m(a)),a.onEstablished=null,a.onConnected=null,a.onReconnecting=null,a.onReconnected=null,a.onRemoteAudioSettingsChanged=null,a.onRemoteVideoSettingsChanged=null,a.onCustomItemsUpdated=null,a.onCustomItemsDeleted=null,a.onRemoteRecordingStatusChanged=null,a.onEnded=null,a.onRinging=null,a._deviceManager=t,a._soundManager=n,a.recordingManager=i,a._options=r,a._localMediaView=null,a._remoteMediaView=null,a._callId=null,a._caller=null,a._callee=null,a._isVideoCall=null,a._listeners=[],a._turnCredential=null,a._localConstraints={audio:!0,video:!0},a._remoteConstraints={audio:!0,video:!0},a._endResult=null,a._endInfo=null,a._startedAt=null,a._customItems=null,a._recorder=null,a._remoteRecordingStatus=xc.NONE,a._callConnectionTimer=null,a._aliveIntervalId=null,a._statsIntervalId=null,a._directCallStatsReporter=new vh(m(a)),a._callSummary=new dh(m(a)),a._isCaller=null,a._stateManager=new F_(m(a)),a._isReconnected=!1,a}return s}(),d:[{kind:"get",key:"callId",value:function(){return this._callId}},{kind:"get",key:"isVideoCall",value:function(){return this._isVideoCall}},{kind:"get",key:"caller",value:function(){return this._caller}},{kind:"get",key:"callee",value:function(){return this._callee}},{kind:"get",key:"localUser",value:function(){return this._isCaller?this.caller:this.callee}},{kind:"get",key:"remoteUser",value:function(){return this._isCaller?this.callee:this.caller}},{kind:"get",key:"isLocalAudioEnabled",value:function(){return this._localConstraints.audio}},{kind:"get",key:"isRemoteAudioEnabled",value:function(){return this._remoteConstraints.audio}},{kind:"get",key:"isLocalVideoEnabled",value:function(){return this._localConstraints.video}},{kind:"get",key:"isRemoteVideoEnabled",value:function(){return this._remoteConstraints.video}},{kind:"get",key:"localRecordingStatus",value:function(){var e,t;return null!==(e=null===(t=this._recorder)||void 0===t?void 0:t.recordingStatus)&&void 0!==e?e:xc.NONE}},{kind:"get",key:"remoteRecordingStatus",value:function(){return this._remoteRecordingStatus}},{kind:"get",key:"localMediaView",value:function(){return this._localMediaView}},{kind:"get",key:"remoteMediaView",value:function(){return this._remoteMediaView}},{kind:"get",key:"myRole",value:function(){return this._isCaller?M.CALLER:M.CALLEE}},{kind:"get",key:"endedBy",value:function(){return this._endInfo?this._endInfo.endedBy:void 0}},{kind:"get",key:"options",value:function(){return this._options}},{kind:"get",key:"isOngoing",value:function(){return!this.isEnded}},{kind:"get",key:"isEnded",value:function(){return!!this._endResult}},{kind:"get",key:"endResult",value:function(){return this._endResult}},{kind:"get",key:"_state",value:function(){return this._stateManager.state}},{kind:"get",key:"customItems",value:function(){return _({},this._customItems)}},{kind:"get",key:"rtcConnection",value:function(){return this._rtcConnection}},{kind:"get",key:"callLog",value:function(){var e=this._state.getType();if(e!==y_.ENDING&&e!==y_.ENDED)return null;var t=this._endInfo;return new Xv({call_id:t?t.callId:this.callId,is_video_call:t?t.isVideoCall:this.isVideoCall,custom_items:t?t.customItems:this._customItems,user_role:t?t.userRole:this.myRole,started_at:t?t.startedAt:this._startedAt||Date.now(),ended_at:t?t.endedAt:Date.now(),participants:t?t._participants:[this.caller,this.callee],ended_by:this.endedBy,duration:t?t.duration:this.getDuration(),end_result:t?t.endResult:this.endResult,call_type:t?t.callType:"direct"},!1)}},{kind:"method",key:"setLocalMediaView",value:(f=v(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._updateLocalMediaView(t);case 2:case"end":return e.stop()}},e,this)})),function(e){return f.apply(this,arguments)})},{kind:"method",key:"setRemoteMediaView",value:(h=v(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._updateRemoteMediaView(t);case 2:case"end":return e.stop()}},e,this)})),function(e){return h.apply(this,arguments)})},{kind:"method",key:"getDuration",value:function(){return this._endInfo?this._endInfo.duration:this._calcDuration()}},{kind:"method",key:"send",value:function(e){return this.sender.send(e)}},{kind:"method",decorators:[function(e,t){var a=0,o=null;if("number"==typeof e){if(!t)throw new Error("type parameter is required");a=e,o=t}else{if(!e||t)throw new Error("type parameter is required");o=e}return function(e){var i=e.descriptor.value;return e.descriptor.value=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[a];return r instanceof o||(t[a]=new o(r)),i.call.apply(i,[this].concat(t))},e}}(2,P)],key:"dial",value:function(e,t,n,r){this._isCaller=!0,this._stateManager.toIdle();var i=new $v;return this._state.dial(e,t,n,r,i),i.promise}},{kind:"method",key:"dialed",value:function(e){this._isCaller=!1;var t=e.payload;this.setIsVideoCall(t.isVideoCall),this.setCallInfo(t.callId,t.caller,t.callee),this.setCustomItems(t.customItems),this.setRemoteOption(t.constraints),this.setTurnCredential(t.turnCredential),this._stateManager.toRinging()}},{kind:"method",key:"canceled",value:function(e){var t=e.payload.endedCall;this.setIsVideoCall(t.isVideoCall),this.setCallInfo(t.callId,t.caller,t.callee),this.setCustomItems(t.customItems),this.setEndResult(t.endResult),this.setEndInfo(t),this._stateManager.toCanceled()}},{kind:"method",decorators:[Gc(Gc.messages.CALL_IS_NOT_SUPPORTED),function(e,t){var a=0,o=null;if("number"==typeof e){if(!t)throw new Error("'obj' parameter is required");a=e,o=t}else{if(!e||t)throw new Error("'obj' parameter is required");o=e}return function(e){var r=e.descriptor.value;return e.descriptor.value=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=t[a];if("object"!==p(i))throw new Error("'object' is expected");return Object.entries(o).forEach(function(e){var t=E(e,2),n=t[0],r=t[1];!i[n]||i[n]instanceof r||(i[n]=new r(i[n]))}),r.call.apply(r,[this].concat(t))},e}}({callOption:P})],key:"accept",value:function(e){var t=e.callOption;yc.info("accept()"),this._state.accept(t)}},{kind:"method",key:"end",value:function(){yc.info("end()"),this._state.end()}},{kind:"method",key:"setIsVideoCall",value:function(e){this._isVideoCall=e}},{kind:"method",key:"setLocalOption",value:function(e){this._updateLocalMediaView(e.localMediaView),this._updateRemoteMediaView(e.remoteMediaView),this._localConstraints.audio=e.audioEnabled,this._localConstraints.video=e.videoEnabled}},{kind:"method",key:"setRemoteOption",value:function(e){this._remoteConstraints=e}},{kind:"method",key:"setCallInfo",value:function(e,t,n){this._callId=e,this._caller=t,this._callee=n}},{kind:"method",key:"setTurnCredential",value:function(e){this._turnCredential=e}},{kind:"method",key:"setEndResult",value:function(e){this._endResult=e}},{kind:"method",key:"setEndInfo",value:function(e){this._endInfo=e}},{kind:"method",key:"setRemoteAudioEnabled",value:function(e){var t=this._remoteConstraints.audio;this._remoteConstraints.audio=e,this.onRemoteAudioSettingsChanged&&t!==e&&this.onRemoteAudioSettingsChanged(this)}},{kind:"method",key:"setRemoteVideoEnabled",value:function(e){var t=this._remoteConstraints.video;this._remoteConstraints.video=e,this.onRemoteVideoSettingsChanged&&t!==e&&this.onRemoteVideoSettingsChanged(this)}},{kind:"method",key:"setCustomItems",value:function(e){this._customItems=e||{}}},{kind:"method",key:"setRemoteRecordingStatus",value:function(e){var t=this._remoteRecordingStatus;(this._remoteRecordingStatus=e)!==t&&this.onRemoteRecordingStatusChanged&&this.onRemoteRecordingStatusChanged(this)}},{kind:"method",key:"closeRTCConnection",value:function(){this._revokeMediaAccess(),this._rtcConnection&&(this._rtcConnection.onnegotiationneeded=null,this._rtcConnection.onicecandidate=null,this._rtcConnection.oniceconnectionstatechange=null,this._rtcConnection.onconnectionstatechange=null,this._rtcConnection.close(),this._rtcConnection=null),this._state.closed()}},{kind:"method",key:"createRTCConnection",value:function(){var t=this,e=new RTCPeerConnection({iceServers:[{username:this._turnCredential.username,credential:this._turnCredential.password,urls:this._turnCredential.turnUrls}],iceTransportPolicy:this._turnCredential.transportPolicy||b_.ALL});e.onnegotiationneeded=function(){return t.handleNegotiation()},e.onicecandidate=function(e){return t.handleIceCandidate(e)},e.onconnectionstatechange=function(){return t.handleConnectionStateChange(e)},e.oniceconnectionstatechange=function(){return t.handleIceConnectionStateChange(e)},e.ontrack=function(e){return t.handleRemoteTrack(e)},this._rtcConnection=e}},{kind:"method",key:"handleNegotiation",value:(d=v(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.sendOffer(!1);case 1:case"end":return e.stop()}},e,this)})),function(){return d.apply(this,arguments)})},{kind:"method",key:"handleIceCandidate",value:function(e){var t;e.candidate&&(t=f_.createCandidate(this.callId,e.candidate.candidate,e.candidate.sdpMLineIndex,e.candidate.sdpMid),this.send(t))}},{kind:"method",key:"handleIceConnectionStateChange",value:function(e){switch(yc.verbose("[".concat(this._state.getType(),"] iceConnectionState ").concat(e.iceConnectionState)),e.iceConnectionState){case"connected":this._state.connected();break;case"disconnected":this._state.disconnected();break;case"failed":this._state.failed();break;case"closed":this._state.closed()}}},{kind:"method",key:"handleConnectionStateChange",value:function(e){switch(yc.verbose("[".concat(this._state.getType(),"] connectionState ").concat(e.connectionState)),e.connectionState){case"connected":this._state.connected();break;case"disconnected":this._state.disconnected();break;case"failed":this._state.failed();break;case"closed":this._state.closed()}}},{kind:"method",key:"handleRemoteTrack",value:function(e){this._remoteStream=e.streams[0],this._remoteMediaView&&(this._remoteMediaView.srcObject=this._remoteStream)}},{kind:"method",key:"addTracks",value:(l=v(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(t=this._getLocalMediaStream()).getTracks().forEach(function(e){n._rtcConnection.addTrack(e,t)});case 2:case"end":return e.stop()}},e,this)})),function(){return l.apply(this,arguments)})},{kind:"method",key:"startVideo",value:function(){yc.info("startVideo()"),this._state.toggleVideo(!0)}},{kind:"method",key:"stopVideo",value:function(){yc.info("stopVideo()"),this._state.toggleVideo(!1)}},{kind:"method",key:"startRecording",value:function(e){if(this._recorder)yc.error(Jd.getErrorMessage(Dc.ERR_RECORDING_ALREADY_IN_PROGRESS));else{var t=this.recordingManager.startRecording(this,e);if(t)return this.setLocalRecorder(t),t.recordId}}},{kind:"method",key:"stopRecording",value:function(e){var t;return e&&(null===(t=this._recorder)||void 0===t?void 0:t.recordId)===e?(this.recordingManager.stopRecording(e),!0):(yc.error(Jd.getErrorMessage(Dc.ERR_FAILED_TO_STOP_RECORDING)),!1)}},{kind:"method",key:"_stopCurrentRecording",value:function(){var e;if(!this._recorder)return!1;var t=null===(e=this._recorder)||void 0===e?void 0:e.recordId;return this.stopRecording(t)}},{kind:"method",key:"setLocalRecorder",value:function(e){this._recorder=e}},{kind:"method",key:"toggleVideo",value:function(t){var e;this._localConstraints.video!==t&&(null!==(e=this._deviceManager.getStream())&&void 0!==e&&e.getTracks().forEach(function(e){e&&"video"===e.kind&&(e.enabled=t)}),this._localConstraints.video=t)}},{kind:"method",key:"muteMicrophone",value:function(){yc.info("muteMicrophone()"),this._state.toggleMicrophone(!1)}},{kind:"method",key:"unmuteMicrophone",value:function(){yc.info("unmuteMicrophone()"),this._state.toggleMicrophone(!0)}},{kind:"method",key:"toggleMicrophone",value:function(t){var e;this._localConstraints.audio!==t&&(null!==(e=this._deviceManager.getStream())&&void 0!==e&&e.getTracks().forEach(function(e){e&&"audio"===e.kind&&(e.enabled=t)}),this._localConstraints.audio=t)}},{kind:"method",key:"_validateCaptureAvailability",value:function(e){if(this._state.getType()!==y_.CONNECTED)throw new th(Dc.ERR_VIDEO_CALL_NOT_CONNECTED_YET);if(!this.isVideoCall)throw new th(Dc.ERR_CAPTURE_NOT_ALLOWED_ON_AUDIO_CALL);if(e instanceof HTMLAudioElement)throw new th(Dc.ERR_VIDEO_VIEW_NOT_READY);if(null==e||!e.srcObject)throw new th(Dc.ERR_VIDEO_VIEW_NOT_READY)}},{kind:"method",key:"captureLocalVideoView",value:function(e){var n=this,t=new Promise(function(e,t){n._validateCaptureAvailability(n._localMediaView),e(n._captureVideoView(n._localMediaView))});return e&&nh(t)(e),t}},{kind:"method",key:"captureRemoteVideoView",value:function(e){var n=this,t=new Promise(function(e,t){n._validateCaptureAvailability(n.remoteMediaView),e(n._captureVideoView(n._remoteMediaView))});return e&&nh(t)(e),t}},{kind:"method",key:"_captureVideoView",value:function(e){try{var t,n,r=document.createElement("canvas"),i=r.getContext("2d"),a=e;r.width=null!==(t=a.videoWidth)&&void 0!==t?t:640,r.height=null!==(n=a.videoHeight)&&void 0!==n?n:360,i.drawImage(a,0,0);var o={width:r.width,height:r.height,data:r.toDataURL("image/jpeg",1)};return r.remove(),o}catch(e){throw yc.error(e),new th(Dc.ERR_FAILED_TO_GET_IMAGE_FROM_VIDEO_STREAM)}}},{kind:"method",key:"updateCustomItems",value:function(e,t){var n=this,r=E(rh(e,t),2)[1];if(r)return r;var i=f_.createUpdateCustomItems(this.callId,e),a=this.send(i).then(function(e){return n.setCustomItems(e.custom_items),{customItems:e.custom_items,affectedKeys:e.updated}}).catch(function(e){throw yc.error("failed to update customItems"),e});return t&&nh(a)(t),a}},{kind:"method",key:"deleteCustomItems",value:function(e,t){var n=this,r=E(ih(e,t),2)[1];if(r)return r;var i=f_.createDeleteCustomItems(this.callId,e),a=this.send(i).then(function(e){return n.setCustomItems(e.custom_items),{customItems:e.custom_items,affectedKeys:e.deleted}}).catch(function(e){throw yc.error("failed to delete customItems"),e});return t&&nh(a)(t),a}},{kind:"method",key:"deleteAllCustomItems",value:function(e){var t=this,n=f_.createDeleteAllCustomItems(this.callId),r=this.send(n).then(function(e){return t.setCustomItems(e.custom_items),{customItems:e.custom_items,affectedKeys:e.deleted}}).catch(function(e){throw yc.error("failed to delete all customItems"),e});return e&&nh(r)(e),r}},{kind:"method",key:"setRemoteDescription",value:function(e,t){var n=new RTCSessionDescription({type:e,sdp:t});return this._rtcConnection.setRemoteDescription(n)}},{kind:"method",key:"sendOffer",value:(c=v(regeneratorRuntime.mark(function e(t){var n,r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={iceRestart:t||!1},e.next=3,this._rtcConnection.createOffer(n);case 3:return r=e.sent,e.next=6,this._rtcConnection.setLocalDescription(r);case 6:i=f_.createOffer(this.callId,this._rtcConnection.localDescription.sdp),this.send(i);case 8:case"end":return e.stop()}},e,this)})),function(e){return c.apply(this,arguments)})},{kind:"method",key:"sendAnswer",value:(s=v(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._rtcConnection.createAnswer();case 2:return(t=e.sent).sdp=t.sdp.replace("actpass","active"),e.next=6,this._rtcConnection.setLocalDescription(t);case 6:n=f_.createAnswer(this.callId,this._rtcConnection.localDescription.sdp),this.send(n);case 8:case"end":return e.stop()}},e,this)})),function(){return s.apply(this,arguments)})},{kind:"method",key:"fireOnRinging",value:function(){yc.info("onRinging"),this.onRinging&&this.onRinging()}},{kind:"method",key:"fireOnEstablished",value:function(){yc.info("onEstablished"),this.onEstablished&&this.onEstablished(this)}},{kind:"method",key:"fireOnEnded",value:function(){switch(this.endResult){case L.NO_ANSWER:case L.CANCELED:case L.DECLINED:case L.OTHER_DEVICE_ACCEPTED:case L.COMPLETED:yc.info("onEnded");break;case L.TIMED_OUT:yc.warning("onEnded");break;case L.CONNECTION_LOST:case L.DIAL_FAILED:case L.ACCEPT_FAILED:case L.UNKNOWN:yc.error("onEnded");break;default:yc.info("onEnded")}this.onEnded&&this.onEnded(this),this._stopCurrentRecording()}},{kind:"method",key:"fireOnConnected",value:function(){yc.info("onConnected"),this.onConnected&&this.onConnected(this)}},{kind:"method",key:"fireOnReconnecting",value:function(){yc.info("onReconnecting"),this.onReconnecting&&this.onReconnecting(this)}},{kind:"method",key:"fireOnReconnected",value:function(){yc.info("onReconnected"),this.onReconnected&&this.onReconnected(this)}},{kind:"method",key:"addCandidate",value:function(e){this._rtcConnection.addIceCandidate(e)}},{kind:"method",key:"sendDialCommand",value:function(e){var t=this,n=f_.createDial(e,this._isVideoCall,this._customItems,this._localConstraints);return this.send(n).then(function(e){t.onEvent(e)}).catch(function(e){throw t._state.dialFailed(),e})}},{kind:"method",key:"sendAcceptCommand",value:function(){var t=this,e=f_.createAccept(this.callId,this._localConstraints);return this.send(e).then(function(e){t.onEvent(e)}).catch(function(e){throw t._state.acceptFailed(),e})}},{kind:"method",key:"sendCancelCommand",value:function(){var t=this,e=f_.createCancel(this.callId);return this.send(e).then(function(e){t.onEvent(e)})}},{kind:"method",key:"sendDeclineCommand",value:function(){var t=this,e=f_.createDecline(this.callId);return this.send(e).then(function(e){t.onEvent(e)})}},{kind:"method",key:"sendEndCommand",value:function(){var t=this,e=f_.createEnd(this.callId);return this.send(e).then(function(e){t.onEvent(e)})}},{kind:"method",key:"sendTimeoutCommand",value:function(e){var t=this,n=f_.createTimeout(this.callId,e);return this.send(n).then(function(e){t.onEvent(e)})}},{kind:"method",key:"sendConnectionLostCommand",value:function(){var t=this,e=f_.createConnectionLost(this.callId);return this.send(e).then(function(e){t.onEvent(e)})}},{kind:"method",key:"sendNoAnswerCommand",value:function(){var t=this,e=f_.createNoAnswer(this.callId);return this.send(e).then(function(e){t.onEvent(e)})}},{kind:"method",key:"sendAliveCommand",value:function(){var e=f_.createAlive(this.callId);return this.send(e)}},{kind:"method",key:"sendAudioCommand",value:function(){var e=f_.createAudio(this.callId,this._localConstraints.audio);return this.send(e)}},{kind:"method",key:"sendVideoCommand",value:function(){var e=f_.createVideo(this.callId,this._localConstraints.video);return this.send(e)}},{kind:"method",key:"sendStatsLogCommand",value:function(e){var t=f_.createStatsLogCommand(e);return this.send(t)}},{kind:"method",key:"sendCallSummaryCommand",value:function(e){var t=f_.createCallSummaryCommand(this._callId,this.myRole,e);return this.send(t)}},{kind:"method",key:"sendConnectedCommand",value:function(e,t,n){var r=f_.createConnected(e,t,n);return this.send(r)}},{kind:"method",key:"sendRecordingCommand",value:function(e,t,n){var r=f_.createRecording(this.callId,e,t,n);return this.send(r)}},{kind:"method",key:"startToSendAlive",value:function(){var e=this;this._aliveIntervalId=setInterval(function(){e.sendAliveCommand().catch(function(e){return yc.debug(e)})},3e4)}},{kind:"method",key:"stopToSendAlive",value:function(){this._aliveIntervalId&&(clearInterval(this._aliveIntervalId),this._aliveIntervalId=null)}},{kind:"method",key:"startGetWebRtcStats",value:function(){var a=this;this._statsIntervalId||(this._callSummary.setBasicCallLogStats(),this._statsIntervalId=setInterval(function(){a._directCallStatsReporter.getStats().then(function(e){var t=e.statsMap,n=e.transPortInfoMap,r=e.audioStatsMap,i=e.videoStatsMap;a._callSummary.updateStats(t,n,r,i)})},1e3))}},{kind:"method",key:"stopGetWebRtcStats",value:function(){this._statsIntervalId&&(clearInterval(this._statsIntervalId),this._statsIntervalId=null)}},{kind:"method",key:"sendConnectedInfo",value:function(){var t=this;this._directCallStatsReporter.getCandidateInfo().then(function(e){e&&t.sendConnectedCommand(t.callId,e,t._isReconnected)})}},{kind:"method",key:"sendCallSummary",value:function(){this.callId&&this.sendCallSummaryCommand(this._callSummary.getCallSummary())}},{kind:"method",key:"startCallConnectionTimer",value:function(){var e=this;this._callConnectionTimer=setTimeout(function(){e._state.fireTimeout()},this._options.callConnectionTimeoutValue)}},{kind:"method",key:"stopCallConnectionTimer",value:function(){this._callConnectionTimer&&(clearTimeout(this._callConnectionTimer),this._callConnectionTimer=null)}},{kind:"method",key:"playSound",value:(o=v(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._soundManager.playSound(t));case 1:case"end":return e.stop()}},e,this)})),function(e){return o.apply(this,arguments)})},{kind:"method",key:"stopSound",value:function(e){return this._soundManager.stopSound(e)}},{kind:"method",key:"stopAllSound",value:function(){return this._soundManager.stopAllSound()}},{kind:"method",key:"_receiveAudio",value:function(e){this.setRemoteAudioEnabled(e.payload.isEnabled)}},{kind:"method",key:"_receiveVideo",value:function(e){this.setRemoteVideoEnabled(e.payload.isEnabled)}},{kind:"method",key:"_receiveCustomItemsUpdate",value:function(e){var t;this.setCustomItems(e.payload.customItems),null!==(t=this.onCustomItemsUpdated)&&void 0!==t&&t.call(this,this,e.payload.updated)}},{kind:"method",key:"_receiveCustomItemsDelete",value:function(e){var t;this.setCustomItems(e.payload.customItems),null!==(t=this.onCustomItemsDeleted)&&void 0!==t&&t.call(this,this,e.payload.deleted)}},{kind:"method",key:"_receiveRecording",value:function(e){this.setRemoteRecordingStatus(e.payload.recordingStatus)}},{kind:"method",key:"_receiveSnapshot",value:function(e){yc.verbose("snapshot is received");var t,n,r,i,a,o,s,u,c=e.payload,l=c.audioEnabled,d=c.videoEnabled,h=c.customItems,f=c.recording;"boolean"==typeof l&&this.setRemoteAudioEnabled(l),"boolean"==typeof d&&this.setRemoteVideoEnabled(d),f?this.setRemoteRecordingStatus(xc.RECORDING):this.setRemoteRecordingStatus(xc.NONE),h&&(t=h,n=Object.keys(t),r=this._customItems,i=Object.keys(r),a=n.filter(function(e){return!i.includes(e)||t[e]!==r[e]}),o=i.filter(function(e){return!n.includes(e)}),this.setCustomItems(h),0<a.length&&null!==(s=this.onCustomItemsUpdated)&&void 0!==s&&s.call(this,this,a),0<o.length&&null!==(u=this.onCustomItemsDeleted)&&void 0!==u&&u.call(this,this,o))}},{kind:"method",key:"onEvent",value:function(e){switch(yc.verbose("'onEvent' on ".concat(e.constructor.name)),e.type){case gh.DIAL:this.dialed(e);break;case gh.DIAL_ACK:this._state.dialSent(e);break;case gh.DIAL_RCV:break;case gh.ACCEPT:this._state.receiveAccept(e);break;case gh.ACCEPT_ACK:this._state.acceptSent(e);break;case gh.OTHER_DEVICE_ACCEPTED:this._state.receiveAccepted();break;case gh.CANCEL:this.canceled(e);break;case gh.DECLINE:case gh.END:case gh.TIME_OUT:case gh.NO_ANSWER:case gh.CONNECTION_LOST:case gh.UNKNOWN_END:this._state.receiveEnd(e);break;case gh.CANCEL_ACK:case gh.DECLINE_ACK:case gh.END_ACK:case gh.TIMEOUT_ACK:case gh.NO_ANSWER_ACK:case gh.CONNECTION_LOST_ACK:case gh.UNKNOWN_END_ACK:this._state.endSent(e);break;case gh.OFFER:this._state.receiveOffer(e);break;case gh.ANSWER:this._state.receiveAnswer(e);break;case gh.CANDIDATE:this._state.receiveCandidate(e);break;case gh.REMOVE_CANDIDATES:break;case gh.AUDIO:this._receiveAudio(e);break;case gh.VIDEO:this._receiveVideo(e);break;case gh.CUSTOM_ITEMS_UPDATE:this._receiveCustomItemsUpdate(e);break;case gh.CUSTOM_ITEMS_DELETE:this._receiveCustomItemsDelete(e);break;case gh.RECORDING:this._receiveRecording(e);break;case gh.SNAPSHOT:this._receiveSnapshot(e);break;default:yc.error(new Error("unhandled call event ".concat(e.type)))}}},{kind:"method",key:"onStreamChanged",value:function(e){var t,n=C(e.getTracks());try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.enabled=this._isMediaEnabled(r.kind),this._rtcConnection){var i,a=C(this._rtcConnection.getSenders());try{for(a.s();!(i=a.n()).done;){var o=i.value;o.track&&o.track.kind===r.kind&&o.replaceTrack(r)}}catch(e){a.e(e)}finally{a.f()}}}}catch(e){n.e(e)}finally{n.f()}this._localMediaView&&(this._localMediaView.srcObject=e)}},{kind:"method",key:"onAudioOutputChanged",value:(a=v(regeneratorRuntime.mark(function e(t){var n,r,i,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=this._localMediaView)||void 0===n||null===(r=n.setSinkId)||void 0===r?void 0:r.call(n,t.deviceId);case 2:return e.next=4,null===(i=this._remoteMediaView)||void 0===i||null===(a=i.setSinkId)||void 0===a?void 0:a.call(i,t.deviceId);case 4:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)})},{kind:"method",key:"setStartedAt",value:function(){null==this._startedAt&&(this._startedAt=Date.now())}},{kind:"method",key:"_calcDuration",value:function(){return null==this._startedAt?0:Date.now()-this._startedAt}},{kind:"method",key:"setDialSentAt",value:function(){this._callSummary.setDialSentAt()}},{kind:"method",key:"calcPdd",value:function(){this._callSummary.calcPdd()}},{kind:"method",key:"setCallSetupStartTime",value:function(){this._callSummary.setCallSetupStartTime()}},{kind:"method",key:"calcCallSetupTime",value:function(){this._callSummary.calcCallSetupTime()}},{kind:"method",key:"setIsReconnected",value:function(e){this._isReconnected=e}},{kind:"method",key:"increaseReconnectedCount",value:function(){this._callSummary.increaseReconnectedCount()}},{kind:"method",key:"_isMediaEnabled",value:function(e){switch(e){case"audio":return this._localConstraints.audio;case"video":return this._localConstraints.video;default:return yc.error(new Error("unrecognized media type ".concat(e))),!1}}},{kind:"method",key:"_updateLocalMediaView",value:(i=v(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this._localMediaView===t)return e.abrupt("return");e.next=2;break;case 2:if(this._localMediaView&&(this._localMediaView.srcObject=null),t){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,this._updateMediaView(t,this._getLocalMediaStream());case 7:this._localMediaView=e.sent;case 8:case"end":return e.stop()}},e,this)})),function(e){return i.apply(this,arguments)})},{kind:"method",key:"_updateRemoteMediaView",value:(r=v(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this._remoteMediaView===t)return e.abrupt("return");e.next=2;break;case 2:if(this._remoteMediaView&&(this._remoteMediaView.srcObject=null),t){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,this._updateMediaView(t,this._remoteStream);case 7:this._remoteMediaView=e.sent;case 8:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})},{kind:"method",key:"_updateMediaView",value:(n=v(regeneratorRuntime.mark(function e(t,n){var r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this._deviceManager.getCurrentAudioOutputDevice())return e.next=4,null===(i=t.setSinkId)||void 0===i?void 0:i.call(t,r.deviceId);e.next=4;break;case 4:return n&&(t.srcObject=n),e.abrupt("return",t);case 6:case"end":return e.stop()}},e,this)})),function(e,t){return n.apply(this,arguments)})},{kind:"method",key:"_getLocalMediaStream",value:function(){return this._mediaAccess||this._grantMediaAccess(),this._deviceManager.getStream()}},{kind:"method",key:"_grantMediaAccess",value:(t=v(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this._mediaAccess=this._deviceManager.useMedia({audio:!0,video:this._isVideoCall}),this._mediaAccess.onStreamChanged=function(e){return t.onStreamChanged(e)},this._mediaAccess.onAudioOutputChanged=function(e){return t.onAudioOutputChanged(e)};case 3:case"end":return e.stop()}},e,this)})),function(){return t.apply(this,arguments)})},{kind:"method",key:"_revokeMediaAccess",value:function(){this._mediaAccess&&(this._mediaAccess.dispose(),this._mediaAccess=null)}}]}},function e(t){y(this,e),this.sender=t}),B_=function(){function r(e,t,n){y(this,r),this.sender=e,this.deviceManager=t,this.soundManager=new Vc,this.recordingManager=n,this.options={ringingTimeout:6e4,callConnectionTimeout:6e4,statsInterval:3e3}}var n;return s(r,[{key:"createDirectCall",value:function(){return new j_(this.sender,this.deviceManager,this.soundManager,new $c(this.options),this.recordingManager)}},{key:"setRingingTimeout",value:function(e){"number"==typeof e&&0<e&&(this.options.ringingTimeout=1e3*e)}},{key:"setStatsInterval",value:function(e){var t;"number"==typeof e&&((t=e)<1&&(t=1),60<t&&(t=60),this.options.statsInterval=1e3*t)}},{key:"setCallConnectionTimeout",value:function(e){"number"==typeof e&&0<e&&(this.options.callConnectionTimeout=1e3*e)}},{key:"loadSound",value:(n=v(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.soundManager.loadSound(t,n));case 1:case"end":return e.stop()}},e,this)})),function(e,t){return n.apply(this,arguments)})},{key:"unloadSound",value:function(e){return this.soundManager.unloadSound(e)}},{key:"isPlaying",value:function(e){return this.soundManager.isPlaying(e)}}]),r}(),z_=!Vr(function(e){Array.from(e)});We({target:"Array",stat:!0,forced:z_},{from:Oo});var G_=Ka.left,W_=sr("reduce"),q_=cr("reduce",{1:0});We({target:"Array",proto:!0,forced:!W_||!q_},{reduce:function(e,t){return G_(this,e,arguments.length,1<arguments.length?t:void 0)}});var K_=function(){function n(e,t){y(this,n),this.callFactory=e,this.sender=t,this.calls=new Map,this.dialListeners=new Map}return s(n,[{key:"getCall",value:function(e){return this.calls.get(e)}},{key:"_hasCall",value:function(e){return this.calls.has(e)}},{key:"getOngoingCallCount",value:function(){return e(this.calls.values()).reduce(function(e,t){return t.isOngoing?e+1:e},0)}},{key:"dial",value:function(e,t,n,r,i){var a=this,o=this.callFactory.createDirectCall(),s=o.dial(e,t,n,r).then(function(){return a._register(o.callId,o),o}).catch(function(e){throw yc.error(e),e});return i&&nh(s)(i),o}},{key:"onEvent",value:function(e){switch(e.type){case gh.DIAL:this._onCallDialed(e);break;case gh.CANCEL:this._hasCall(e.getCallId())?this._passToCall(e):this._onCallCanceled(e);break;case gh.WEBSOCKET_CONNECTED:this._requestCommandLists();break;default:this._passToCall(e)}}},{key:"addListener",value:function(e,t){this.dialListeners.set(e,t)}},{key:"removeListener",value:function(e){this.dialListeners.delete(e)}},{key:"removeAllListeners",value:function(){this.dialListeners.clear()}},{key:"clear",value:function(){var e,t=C(this.calls.values());try{for(t.s();!(e=t.n()).done;){var n=e.value;try{n.end()}catch(e){yc.error("failed to clear call.")}}}catch(e){t.e(e)}finally{t.f()}this.calls.clear()}},{key:"_register",value:function(e,t){if(!e)throw new Error("call id is not set in call");if(!t)throw new Error("call is null");this.calls.set(e,t)}},{key:"_sendDialReceiveCommand",value:function(e){var t=f_.createDialReceive(e.getCallId(),e.deliveryInfo,e.receivedType,e.payload.shortLivedToken);return this.sender.send(t).catch(function(){})}},{key:"_onCallDialed",value:function(e){var t=this,n=this.callFactory.createDirectCall();this._sendDialReceiveCommand(e),this._register(e.getCallId(),n),n.onRinging=function(){return t._onCallRinging(n)},this._passToCall(e)}},{key:"_onCallCanceled",value:function(e){var t=this,n=this.callFactory.createDirectCall();this._register(e.getCallId(),n),n.onRinging=function(){return t._onCallRinging(n)},this._passToCall(e)}},{key:"_onCallRinging",value:function(e){var t,n=C(this.dialListeners.values());try{for(n.s();!(t=n.n()).done;){var r=t.value;r.onRinging&&r.onRinging(e)}}catch(e){n.e(e)}finally{n.f()}}},{key:"_requestCommandLists",value:function(){var t=this;yc.verbose("request command list");var e=Array.from(this.calls.keys()).filter(function(e){return!t.calls.get(e).isEnded}),n=f_.createCommandList(e);this.sender.retrieveCommands(n)}},{key:"_passToCall",value:function(e){this._hasCall(e.getCallId())?this.calls.get(e.getCallId()).onEvent(e):yc.debug("received command ".concat(e.type," for non-existing call ").concat(e.getCallId()))}}]),n}(),H_=v_.values;We({target:"Object",stat:!0},{values:function(e){return H_(e)}});var Y_,Z_,$_=function e(r,i){var a=this;y(this,e);var t=URL.createObjectURL(new Blob(['importScripts("https://unpkg.com/ffmpeg.js@3.1.9001/ffmpeg-worker-mp4.js");'],{type:"application/javascript"}));this._workerClient=new Worker(t),this._workerClient.onmessage=function(e){var t=e.data;switch(t.type){case"ready":yc.info("ffmpeg ready");break;case"stdout":case"stderr":yc.info(t.data);break;case"error":yc.error(t.data);break;case"done":var n=t.data.MEMFS[0];mc.downloadRecordedFile(new Blob([n.data]),i),a._workerClient.terminate(),r.onRecordingSucceeded()}},this.postMessage=function(){var e;return(e=a._workerClient).postMessage.apply(e,arguments)}},Q_=function(){function r(e,t,n){y(this,r),this._recordId=Zc(),this._recordOption=new kc(t),this._recordingManager=n,this._call=e,this._worker=new $_(this,t.fileName)}return s(r,[{key:"_checkRecordingCondition",value:function(e,t){if(!Object.values(Rs).includes(t.recordingType))return yc.error(Jd.getErrorMessage(Dc.ERR_INVALID_RECORDING_TYPE)),!1;var n=e._state.getType();return window.MediaRecorder?n!==y_.CONNECTED?(yc.error(Jd.getErrorMessage(Dc.ERR_CALL_NOT_CONNECTED_YET)),!1):!!(e.isVideoCall||t.recordingType!==Rs.LOCAL_AUDIO_AND_VIDEO_REMOTE_AUDIO&&t.recordingType!==Rs.LOCAL_AUDIO_REMOTE_AUDIO_AND_VIDEO&&t.recordingType!==Rs.REMOTE_AUDIO_AND_VIDEO)||(yc.error(Jd.getErrorMessage(Dc.ERR_WRONG_RECORDING_TYPE_FOR_AUDIO_CALL)),!1):(yc.error(Jd.getErrorMessage(Dc.ERR_NOT_SUPPORTED_BROWSER_FOR_RECORDING)),!1)}},{key:"startRecording",value:function(){var t=this;if(!this._checkRecordingCondition(this._call,this._recordOption))return!1;var e=mc.createStream(this._call,this._recordOption.recordingType),n=e.stream,r=e.options,i=e.cleanup;return i&&(this._streamCleanup=i),this._recordBlobDatas=[],this._recorder=new MediaRecorder(n,r),this._recorder.ondataavailable=function(e){e.data&&0<e.data.size&&t._recordBlobDatas.push(e.data)},this._recorder.onstart=function(){return t._onStart()},this._recorder.onstop=function(){return t._onStop()},this._recorder.onpause=function(){return t._onPause()},this._recorder.onresume=function(){return t._onResume()},this._recorder.onerror=function(){return t._onError()},this._recorder.start(),!0}},{key:"_onStart",value:function(){this._sendRecordingCommand()}},{key:"_onStop",value:function(){yc.info("recording stop id = ".concat(this._recordId)),this._sendRecordingCommand(),this._call.setLocalRecorder(null),this._streamCleanup&&this._streamCleanup(),mc.transCodingToMP4(this._recordBlobDatas,this._worker,this._recordOption.fileName)}},{key:"_onPause",value:function(){this._sendRecordingCommand()}},{key:"_onResume",value:function(){this._sendRecordingCommand()}},{key:"_onError",value:function(){this._sendRecordingCommand(),this._call.setLocalRecorder(null),this.onRecordingFailed(new th(Dc.ERR_FAILED_TO_STOP_RECORDING))}},{key:"_sendRecordingCommand",value:function(){this._call.sendRecordingCommand(this.recordId,this.recordOption.recordingType,this.recordingStatus)}},{key:"stopRecording",value:function(){try{this._recorder.stop()}catch(e){return yc.error(e),!1}return!0}},{key:"onRecordingSucceeded",value:function(){this._recordingManager.fireOnRecordingSucceeded(this._call,this.recordId,this._recordOption)}},{key:"onRecordingFailed",value:function(e){this._recordingManager.fireOnRecordingFailed(this._call,this.recordId,e)}},{key:"recordId",get:function(){return this._recordId}},{key:"recordOption",get:function(){return this._recordOption}},{key:"recordingStatus",get:function(){switch(this._recorder.state){case"recording":return xc.RECORDING;case"inactive":case"paused":default:return xc.NONE}}}]),r}(),X_=function(){function e(){y(this,e),this._recordingListeners=new Map,this._recorders=new Map}return s(e,[{key:"addRecordingListener",value:function(e,t){this._recordingListeners.set(e,t)}},{key:"removeRecordingListener",value:function(e){this._recordingListeners.delete(e)}},{key:"removeAllRecordingListener",value:function(){this._recordingListeners.clear()}},{key:"fireOnRecordingSucceeded",value:function(t,n,r){this._recordingListeners.forEach(function(e){e.onRecordingSucceeded&&e.onRecordingSucceeded(t.callId,n,r,r.fileName)})}},{key:"fireOnRecordingFailed",value:function(t,n,r){this._recordingListeners.forEach(function(e){e.onRecordingFailed&&e.onRecordingFailed(t.callId,n,r)})}},{key:"startRecording",value:function(e,t){var n=new Q_(e,t,this);if(n.startRecording())return this._recorders.set(n.recordId,n),n}},{key:"stopRecording",value:function(e){if(0<this._recorders.size){var t=this._recorders.get(e);return t?t.stopRecording():!1}return!1}}]),e}(),J_="undefined"!=typeof self?self:globalThis,ey="URLSearchParams"in J_,ty="Symbol"in J_&&"iterator"in Symbol,ny="FileReader"in J_&&"Blob"in J_&&function(){try{return new Blob,!0}catch(e){return!1}}(),ry="FormData"in J_,iy="ArrayBuffer"in J_;function ay(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function oy(e){return"string"!=typeof e&&(e=String(e)),e}function sy(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return ty&&(e[Symbol.iterator]=function(){return e}),e}function uy(t){this.map={},t instanceof uy?t.forEach(function(e,t){this.append(t,e)},this):Array.isArray(t)?t.forEach(function(e){this.append(e[0],e[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function cy(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function ly(n){return new Promise(function(e,t){n.onload=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function dy(e){var t=new FileReader,n=ly(t);return t.readAsArrayBuffer(e),n}function hy(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function fy(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,(this._bodyInit=e)?"string"==typeof e?this._bodyText=e:ny&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:ry&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:ey&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():iy&&ny&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=hy(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):iy&&(ArrayBuffer.prototype.isPrototypeOf(e)||Z_(e))?this._bodyArrayBuffer=hy(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):ey&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},ny&&(this.blob=function(){var e=cy(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?cy(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(dy)}),this.text=function(){var e,t,n,r=cy(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=ly(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},ry&&(this.formData=function(){return this.text().then(_y)}),this.json=function(){return this.text().then(JSON.parse)},this}iy&&(Y_=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],Z_=ArrayBuffer.isView||function(e){return e&&-1<Y_.indexOf(Object.prototype.toString.call(e))}),uy.prototype.append=function(e,t){e=ay(e),t=oy(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},uy.prototype.delete=function(e){delete this.map[ay(e)]},uy.prototype.get=function(e){return e=ay(e),this.has(e)?this.map[e]:null},uy.prototype.has=function(e){return this.map.hasOwnProperty(ay(e))},uy.prototype.set=function(e,t){this.map[ay(e)]=oy(t)},uy.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},uy.prototype.keys=function(){var n=[];return this.forEach(function(e,t){n.push(t)}),sy(n)},uy.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),sy(t)},uy.prototype.entries=function(){var n=[];return this.forEach(function(e,t){n.push([t,e])}),sy(n)},ty&&(uy.prototype[Symbol.iterator]=uy.prototype.entries);var py=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function vy(e,t){var n,r,i,a=(t=t||{}).body;if(e instanceof vy){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new uy(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,a||null==e._bodyInit||(a=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new uy(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),-1<py.indexOf(r)?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&a)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(a),"GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache||((i=/([?&])_=[^&]*/).test(this.url)?this.url=this.url.replace(i,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime())}function _y(e){var i=new FormData;return e.trim().split("&").forEach(function(e){var t,n,r;e&&(n=(t=e.split("=")).shift().replace(/\+/g," "),r=t.join("=").replace(/\+/g," "),i.append(decodeURIComponent(n),decodeURIComponent(r)))}),i}function yy(e,t){t=t||{},this.type="default",this.status=void 0===t.status?200:t.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in t?t.statusText:"",this.headers=new uy(t.headers),this.url=t.url||"",this._initBody(e)}vy.prototype.clone=function(){return new vy(this,{body:this._bodyInit})},fy.call(vy.prototype),fy.call(yy.prototype),yy.prototype.clone=function(){return new yy(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new uy(this.headers),url:this.url})},yy.error=function(){var e=new yy(null,{status:0,statusText:""});return e.type="error",e};var gy=[301,302,303,307,308];yy.redirect=function(e,t){if(-1===gy.indexOf(t))throw new RangeError("Invalid status code");return new yy(null,{status:t,headers:{location:e}})};var my=J_.DOMException;function ky(i,o){return new Promise(function(r,e){var t=new vy(i,o);if(t.signal&&t.signal.aborted)return e(new my("Aborted","AbortError"));var a=new XMLHttpRequest;function n(){a.abort()}a.onload=function(){var e,i,t={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",i=new uy,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var t,n=e.split(":"),r=n.shift().trim();r&&(t=n.join(":").trim(),i.append(r,t))}),i)};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var n="response"in a?a.response:a.responseText;setTimeout(function(){r(new yy(n,t))},0)},a.onerror=function(){setTimeout(function(){e(new TypeError("Network request failed"))},0)},a.ontimeout=function(){setTimeout(function(){e(new TypeError("Network request failed"))},0)},a.onabort=function(){setTimeout(function(){e(new my("Aborted","AbortError"))},0)},a.open(t.method,function(t){try{return""===t&&J_.location.href?J_.location.href:t}catch(e){return t}}(t.url),!0),"include"===t.credentials?a.withCredentials=!0:"omit"===t.credentials&&(a.withCredentials=!1),"responseType"in a&&(ny?a.responseType="blob":iy&&t.headers.get("Content-Type")&&-1!==t.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),t.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),t.signal&&(t.signal.addEventListener("abort",n),a.onreadystatechange=function(){4===a.readyState&&t.signal.removeEventListener("abort",n)}),a.send(void 0===t._bodyInit?null:t._bodyInit)})}"function"!=typeof my&&((my=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),my.prototype.constructor=my),ky.polyfill=!0,J_.fetch||(J_.fetch=ky,J_.Headers=uy,J_.Request=vy,J_.Response=yy);var Ey,wy,by,Cy=function(){var e,t;return null!==(e=window)&&void 0!==e&&e.fetch?(t=window).fetch.apply(t,arguments):ky.apply(void 0,arguments)},Ry=function(){function e(){y(this,e)}return s(e,null,[{key:"getOsVersion",value:function(){return"undefined"!=typeof navigator&&navigator.userAgent?navigator.userAgent.replace(/,/g,"."):"undefined"}}]),e}(),Iy=function(){g(t,eh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return t}(),Ay="1.4.1",Ty=function(){function n(e,t){y(this,n),this.appId=e,this.clientId=t,this.fetch=Cy,this.sessionKey=null}var t;return s(n,[{key:"setSessionKey",value:function(e){this.sessionKey=e}},{key:"clearSessionKey",value:function(){this.sessionKey=null}},{key:"send",value:(t=v(regeneratorRuntime.mark(function e(t){var n,r,i,a,o,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.getApiOption){e.next=2;break}throw new Error("invalid api request ".concat(JSON.stringify(t)));case 2:if((n=t.getApiOption()).auth&&!this.sessionKey)throw new Error("tried to call private api without auth");e.next=5;break;case 5:return(r=_({"Content-Type":"application/json"},n.headers)).SendBird="JS,".concat(Ry.getOsVersion(),",").concat(Ay),r["SBCall-Client-Id"]=this.clientId,this.sessionKey&&(r["SBCall-Session-Token"]=this.sessionKey),e.next=11,this.fetch("".concat(this._getHost()).concat(n.path),{method:n.method,body:JSON.stringify(n.body),headers:r});case 11:return i=e.sent,e.next=14,i.text();case 14:a=e.sent,o=null,e.prev=16,o=JSON.parse(a),e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(16),new th(Dc.ERR_MALFORMED_DATA);case 23:if(i.ok){e.next=33;break}if(o.error)throw new Iy(o.code,o.message);e.next=28;break;case 28:if(500===i.status)throw new th(Dc.INTERNAL_SERVER_ERROR);e.next=30;break;case 30:if(300<=i.status&&i.status<400)throw new th(Dc.ERR_MALFORMED_DATA);e.next=32;break;case 32:throw new th(Dc.ERR_REQUEST_FAILED);case 33:if(o.cmd)return s=f_.parse(o),e.abrupt("return",s);e.next=36;break;case 36:return e.abrupt("return",o);case 37:case"end":return e.stop()}},e,this,[[16,20]])})),function(e){return t.apply(this,arguments)})},{key:"_getHost",value:function(){return"https://api-IDENTIFIER.calls.sendbird.com".replace("IDENTIFIER",this.appId)}}]),n}(),Sy=function(){function e(){y(this,e)}return s(e,[{key:"parseToJson",value:function(e){try{return JSON.parse(e)}catch(e){return yc.error("failed to parse JSON message",e),{}}}},{key:"validate",value:function(e){var t=e.cmd;return!(!e.request_id&&!t)}},{key:"parseCommand",value:function(e){return e.error?[!0,{requestId:e.request_id,message:e.message,code:e.code},null]:[!0,null,f_.parse(e)]}},{key:"parse",value:function(e){var t=this.parseToJson(e);return this.validate(t)?this.parseCommand(t):[!1,null,null]}}]),e}(),Oy=function(){function t(e){y(this,t),this._requests=new Map,this.timeoutTime=e}return s(t,[{key:"has",value:function(e){return this._requests.has(e)}},{key:"get",value:function(e){return this._requests.get(e)}},{key:"register",value:function(e){if(!e)throw new Error("invalid request id");if(this._requests.has(e))throw new Error("duplicate requests");var t=new $v;return this._requests.set(e,{deferred:t,timer:this._createTimeoutTimer(e)}),t}},{key:"unregister",value:function(e){if(!this._requests.has(e))return null;var t=this._requests.get(e),n=t.timer,r=t.deferred;return clearTimeout(n),this._requests.delete(e),r}},{key:"_createTimeoutTimer",value:function(e){var t=this;return setTimeout(function(){t.unregister(e).reject(new th(Dc.ERR_NO_RESPONSE_DUE_TO_TIMEOUT))},this._getTimeoutTime())}},{key:"rejectAll",value:function(e){var t,n=C(this._requests.keys());try{for(n.s();!(t=n.n()).done;){var r=t.value,i=this._requests.get(r);clearTimeout(i.timer),i.deferred.reject(e)}}catch(e){n.e(e)}finally{n.f()}this._requests.clear()}},{key:"_getTimeoutTime",value:function(){return this.timeoutTime}}]),t}();(Ey={}).API="api",Ey.CMD_RETRIEVING="cmd_retrieving",Ey.WEBHOOK="webhook",Ey.WS="ws",Ey.PUSH="push",(by=wy=wy||{}).REMOTE_PUSH="remote_push",by.VOIP_PUSH="voip_push",by.WEBHOOK="webhook",by.WS="ws";function Dy(e){y(this,Dy),this.userId=e.user_id,this.nickname=e.nickname,this.profileUrl=e.profile_url,this.metaData=e.meta_data,this.isActive=e.is_active}var Ly=function(){function r(e,t,n){y(this,r),this.appId=e,this.clientId=t,this.ws=null,this.retryTimer=null,this.closed=!0,this.sessionKey=null,this._requestMap=new Oy(this._getTimeoutTime()),this.wsMessageParser=new Sy,this.router=n}return s(r,[{key:"connect",value:function(){var a=this;return new Promise(function(e,t){a.sessionKey||t(new Error("tried to connect to websocket server without auth")),a.ws=a._createWebSocket(),a.closed=!1,a.ws.onopen=function(){a._onOpen(),e()},a.ws.onmessage=function(e){var t=E(a.wsMessageParser.parse(e.data),3),n=t[0],r=t[1],i=t[2];n&&(r?a.processError(r):a.processCommand(i))},a.ws.onerror=function(e){return a._onError(e)},a.ws.onclose=function(){a._onClose(),t(new th(Dc.ERR_WEBSOCKET_CONNECTION_FAILED))}})}},{key:"processError",value:function(e){var t=e.requestId,n=e.code,r=e.message,i=this._requestMap.unregister(t);i&&(yc.debug(t,e.message),i.reject(new Iy(n,{message:r})))}},{key:"processCommand",value:function(e){if(e instanceof wh)this.router.routeDirectCallPeerCommand(e,wy.WS);else if(e instanceof Uh){var t=this._requestMap.unregister(e.requestId);if(!t)return;this.router.routeDirectCallResponseCommand(e,t)}}},{key:"setSessionKey",value:function(e){this.sessionKey=e}},{key:"clearSessionKey",value:function(){this.sessionKey=null}},{key:"deauthenticate",value:function(){this.disconnect(),this.clearSessionKey()}},{key:"disconnect",value:function(){this.ws&&(this.closed=!0,this._removeRetryTimer(),this.ws.onopen=null,this.ws.onmessage=null,this.ws.onerror=null,this.ws.onclose=null,this.ws.close(),this._requestMap.rejectAll(new th(Dc.ERR_REQUEST_FAILED_DUE_TO_WEBSOCKET_CONNECTION_LOST)),this.ws=null)}},{key:"send",value:function(e){var t=e.requireResponse()?this._requestMap.register(e.requestId).promise:Promise.resolve(),n=e.serialize();return this.ws.send("".concat(n,"\n")),t}},{key:"isConnected",value:function(){return!!this.ws&&1===this.ws.readyState}},{key:"_onOpen",value:function(){this.router.routeInternalCommand(f_.createWebSocketConnection())}},{key:"_onError",value:function(e){yc.error(e)}},{key:"_onClose",value:function(){this._startToReconnect()}},{key:"_createWebSocket",value:function(){var e="/?sbcall_session_token=".concat(encodeURIComponent(this.sessionKey),"&sbcall_client_id=").concat(encodeURIComponent(this.clientId),"&sendbird=").concat(encodeURIComponent(this._getVersion()));return new WebSocket(this._getHost()+e)}},{key:"_getVersion",value:function(){return"JS,".concat(Ry.getOsVersion(),",").concat("1.4.1")}},{key:"_getHost",value:function(){return"wss://ws-IDENTIFIER.calls.sendbird.com".replace("IDENTIFIER",this.appId)}},{key:"_startToReconnect",value:function(){this.closed||this.retryTimer||(this.retryTimer=setTimeout(this._reconnect.bind(this),this._getRetryTime()))}},{key:"_reconnect",value:function(){this._removeRetryTimer(),this.connect()}},{key:"_removeRetryTimer",value:function(){this.retryTimer&&(clearTimeout(this.retryTimer),this.retryTimer=null)}},{key:"_getTimeoutTime",value:function(){return 6e4}},{key:"_getRetryTime",value:function(){return 2e3}}]),r}(),Ny=function e(t){var n;y(this,e),this.audioEnabled=t.is_audio_enabled,this.videoEnabled=t.is_video_enabled,this.customItems=null===(n=t.custom_items)||void 0===n?void 0:n.custom_items},My=function(){function t(e){y(this,t),this.callId=e.call_id,this.callType=e.call_type,this.userRole=e.user_role,this.callerClientId=e.caller_client_id,this.calleeClientId=e.callee_client_id,this.signalSeq=e.signal_seq.map(f_.parse).filter(function(e){return!!e}),this.signalSnapshot=new Ny(e.signal_snapshot)}return s(t,[{key:"getAcceptResponse",value:function(){return this.signalSeq.find(function(e){return e.type===gh.ACCEPT_ACK})}},{key:"getEndResponse",value:function(){return this.signalSeq.find(function(e){return e.type===gh.DECLINE_ACK})}},{key:"commands",get:function(){return this.signalSeq}},{key:"snapshot",get:function(){return this.signalSnapshot}}]),t}(),xy=function(){function r(e,t,n){y(this,r),this.appId=e,this.clientId=t,this.router=n,this.wsClient=new Ly(this.appId,this.clientId,n),this.apiClient=new Ty(this.appId,this.clientId)}var t;return s(r,[{key:"connectWs",value:function(){return this.wsClient.connect()}},{key:"sendAPI",value:function(e){return this.apiClient.send(e)}},{key:"sendWs",value:function(e){return this.wsClient.send(e)}},{key:"send",value:(t=v(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t instanceof kh)){e.next=11;break}if(t.sendStrategy===fh.API)return e.abrupt("return",this.sendAPI(t));e.next=3;break;case 3:if(t.sendStrategy!==fh.WS){e.next=7;break}if(this.wsClient.isConnected())return e.abrupt("return",this.sendWs(t));e.next=6;break;case 6:throw new th(Dc.ERR_WEBSOCKET_CONNECTION_NOT_OPENED);case 7:if(t.sendStrategy!==fh.BOTH){e.next=11;break}if(this.wsClient.isConnected())return e.abrupt("return",this.sendWs(t));e.next=10;break;case 10:case 11:return e.abrupt("return",this.sendAPI(t));case 12:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"setSessionKey",value:function(e){this.apiClient.setSessionKey(e),this.wsClient.setSessionKey(e)}},{key:"authenticate",value:function(e){var t=this,n=e.userId,r=e.accessToken,i=f_.createAuthRequest(this.appId,n,r);return this.send(i).then(function(e){return t.setSessionKey(e.sbcall_session_token),{user:new Dy(e.user),statsInterval:e.stats_interval}}).catch(function(e){throw yc.error("failed to authenticate user ".concat(n)),e})}},{key:"deauthenticate",value:function(){this.apiClient.clearSessionKey(),this.wsClient.deauthenticate()}},{key:"retrieveCommands",value:function(e){var n=this;return this.sendAPI(e).then(function(e){yc.verbose("commandLists is received.");var t=e.call_signal.map(function(e){return new My(e)});n._processCommandLists(t)}).catch(function(e){yc.debug("failed to get commandLists",e)})}},{key:"_processCommandLists",value:function(e){var t,n=C(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.userRole!==M.CALLER||this.clientId===r.callerClientId){if(r.userRole===M.CALLEE&&this.clientId!==r.calleeClientId){var i=r.getAcceptResponse();if(i){var a=i.payload.callId,o=f_.createAccepted(a);this.router.routeDirectCallPeerCommand(o,wy.WS);continue}var s,u,c,l,d=r.getEndResponse();d&&(u=(s=d.payload).callId,c=s.endedCall,l=f_.createDeclined(u,c),this.router.routeInternalCommand(l))}var h=r.commands,f=r.snapshot;yc.verbose("process commandList. length: ".concat(h.length));var p,v=C(h);try{for(v.s();!(p=v.n()).done;){var _=p.value;this.wsClient.processCommand(_)}}catch(e){v.e(e)}finally{v.f()}var y=f_.createSnapshot(r.callId,f);this.router.routeInternalCommand(y)}}}catch(e){n.e(e)}finally{n.f()}}}]),r}(),Py=ln("splice"),Vy=cr("splice",{ACCESSORS:!0,0:0,1:2}),Uy=Math.max,Fy=Math.min;We({target:"Array",proto:!0,forced:!Py||!Vy},{splice:function(e,t){var n,r,i,a,o,s,u=Xt(this),c=Fe(u.length),l=je(e,c),d=arguments.length;if(0===d?n=r=0:r=1===d?(n=0,c-l):(n=d-2,Fy(Uy(Ue(t),0),c-l)),9007199254740991<c+n-r)throw TypeError("Maximum allowed length exceeded");for(i=en(u,r),a=0;a<r;a++)(o=l+a)in u&&Jt(i,a,u[o]);if(n<(i.length=r)){for(a=l;a<c-r;a++)s=a+n,(o=a+r)in u?u[s]=u[o]:delete u[s];for(a=c;c-r+n<a;a--)delete u[a-1]}else if(r<n)for(a=c-r;l<a;a--)s=a+n-1,(o=a+r-1)in u?u[s]=u[o]:delete u[s];for(a=0;a<n;a++)u[a+l]=arguments[a+2];return u.length=c-r+n,i}});var jy=function(){function n(e){y(this,n),this._deviceManager=e,this.stream=void 0,this._mediaUpdates=[],this._audioContext=void 0}var e;return s(n,[{key:"updateStream",value:(e=v(regeneratorRuntime.mark(function e(){var t,n,r,i,a,o,s,u,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.stream&&this.stream.getTracks().forEach(function(e){return e.stop()}),t=this._deviceManager.mediaAccesses.some(function(e){return e.constraints.audio}),n=this._deviceManager.mediaAccesses.some(function(e){return e.constraints.video}),t||n){e.next=5;break}return e.abrupt("return");case 5:return 0<this._mediaUpdates.length&&(this._refreshMedia=!0),r=Date.now(),this._mediaUpdates.push(r),this.stream=new MediaStream,this._fillStream(this.stream,{audio:t,video:n}),e.prev=10,e.next=13,this._deviceManager.getMediaConstraints({usingAudio:t,usingVideo:n});case 13:return a=e.sent,e.next=16,navigator.mediaDevices.getUserMedia(a);case 16:i=e.sent,e.next=22;break;case 19:e.prev=19,e.t0=e.catch(10),i=new MediaStream;case 22:this._fillStream(i,{audio:t,video:n}),this.stream&&this.stream.getTracks().forEach(function(e){return e.stop()}),this.stream=i,this._deviceManager.refreshMediaDevices({audio:t,video:n}),o=C(this._deviceManager.mediaAccesses);try{for(o.s();!(s=o.n()).done;)c=s.value,null!==(u=c.onStreamChanged)&&void 0!==u&&u.call(c,this.stream)}catch(e){o.e(e)}finally{o.f()}this._mediaUpdates.pop(),0===this._mediaUpdates.length&&this._refreshMedia&&(this._refreshMedia=!1,this.updateStream());case 30:case"end":return e.stop()}},e,this,[[10,19]])})),function(){return e.apply(this,arguments)})},{key:"_fillStream",value:function(e,t){t.audio&&0===e.getAudioTracks().length&&e.addTrack(this._createSilence()),t.video&&0===e.getVideoTracks().length&&e.addTrack(n.createBlack({width:As.defaultVideoWidth,height:As.defaultVideoHeight,frameRate:As.defaultFrameRate}))}},{key:"_createSilence",value:function(){this._audioContext||(this._audioContext=new(window.AudioContext||window.webkitAudioContext));var e=this._audioContext,t=e.createOscillator(),n=e.createMediaStreamDestination(),r=e.createGain();return r.gain.setValueAtTime(0,e.currentTime),t.connect(r).connect(n),t.start(),n.stream.getAudioTracks()[0]}}],[{key:"createBlack",value:function(e){var t=e.width,n=e.height,r=e.frameRate,i=document.createElement("canvas");return i.width=t,i.height=n,i.getContext("2d").fillRect(0,0,t,n),i.captureStream(r).getVideoTracks()[0]}}]),n}(),By=function(){function t(e){y(this,t),this.constraints=e,this.onDisposed=void 0}return s(t,[{key:"dispose",value:function(){var e;null!==(e=this.onDisposed)&&void 0!==e&&e.call(this)}}]),t}();function zy(e,t){return(null==e?void 0:e.deviceId)===(null==t?void 0:t.deviceId)&&(null==e?void 0:e.label)===(null==t?void 0:t.label)&&(null==e?void 0:e.groupId)===(null==t?void 0:t.groupId)}var Gy=function(){function t(){var e=this;y(this,t),this.mediaAccesses=[],this._availableMediaDevices={audioinput:[],audiooutput:[],videoinput:[]},this._currentMediaDevices={audioinput:void 0,audiooutput:void 0,videoinput:void 0},this._sendbirdCallListeners=new Map,this._streamManager=new jy(this),navigator.mediaDevices.ondevicechange=function(){return e._onDeviceChanged()}}var n,r,e,i;return s(t,[{key:"_onDeviceChanged",value:function(){0!==this.mediaAccesses.length&&this.refreshMediaDevices({audio:this.mediaAccesses.some(function(e){return e.constraints.audio}),video:this.mediaAccesses.some(function(e){return e.constraints.video})})}},{key:"addSendBirdCallListener",value:function(e,t){this._sendbirdCallListeners.set(e,t)}},{key:"removeSendBirdCallListener",value:function(e){this._sendbirdCallListeners.delete(e)}},{key:"removeAllSendBirdCallListener",value:function(){this._sendbirdCallListeners.clear()}},{key:"getCurrentAudioInputDevice",value:function(){return this._currentMediaDevices.audioinput}},{key:"getCurrentAudioOutputDevice",value:function(){return this._currentMediaDevices.audiooutput}},{key:"getCurrentVideoInputDevice",value:function(){return this._currentMediaDevices.videoinput}},{key:"getAvailableAudioInputDevices",value:function(){return this._availableMediaDevices.audioinput}},{key:"getAvailableAudioOutputDevices",value:function(){return this._availableMediaDevices.audiooutput}},{key:"getAvailableVideoInputDevices",value:function(){return this._availableMediaDevices.videoinput}},{key:"getStream",value:function(){return this._streamManager.stream}},{key:"_updateStream",value:(i=v(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._streamManager.updateStream());case 1:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"_registerMediaAccess",value:function(e){var t=this;this.mediaAccesses.push(e),e.onDisposed=function(){return t.stopMedia(e)}}},{key:"useMedia",value:function(e){if(e.audio||e.video){var t=new By(e);return this._registerMediaAccess(t),this._updateStream(),t}yc.error(new Error("you should set true for at least 1 media type."))}},{key:"stopMedia",value:function(e){this.mediaAccesses.splice(this.mediaAccesses.indexOf(e),1),this._updateStream()}},{key:"fetchMediaDevices",value:(e=v(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:return t=e.sent,e.abrupt("return",t.reduce(function(e,t){return e[t.kind].push(t),e},{audioinput:[],audiooutput:[],videoinput:[]}));case 4:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)})},{key:"getMediaConstraints",value:(r=v(regeneratorRuntime.mark(function e(t){var n,r,i,a,o,s,u,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.usingAudio,r=t.usingVideo,i={audio:!1,video:!1},e.next=4,this.fetchMediaDevices();case 4:return a=e.sent,o=a.audioinput,s=a.videoinput,n&&o.length&&(u=this.getCurrentAudioInputDevice(),i.audio={deviceId:null==u?void 0:u.deviceId}),r&&s.length&&(c=this.getCurrentVideoInputDevice(),i.video={deviceId:null==c?void 0:c.deviceId,width:As.defaultVideoWidth,height:As.defaultVideoHeight,frameRate:As.defaultFrameRate}),e.abrupt("return",i);case 10:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})},{key:"_updateCurrentMediaDevice",value:function(e,t){var n=this._availableMediaDevices[e],r=this._currentMediaDevices[e],i=n.find(function(e){return e.deviceId===(null==t?void 0:t.deviceId)});return i||(yc.warning("Selected device is unavailable. fallback to default device."),i=(null!==i&&void 0!==i?i:0<n.length)?n[0]:null),!zy(r,this._currentMediaDevices[e]=i)}},{key:"_onAudioOutputChanged",value:function(){var e,t=C(this.mediaAccesses);try{for(t.s();!(e=t.n()).done;){var n,r=e.value;r.constraints.audio&&null!==(n=r.onAudioOutputChanged)&&void 0!==n&&n.call(r,this._currentMediaDevices.audiooutput)}}catch(e){t.e(e)}finally{t.f()}}},{key:"selectDevice",value:function(e,t){t.kind===e?this._updateCurrentMediaDevice(e,t)&&("audioinput"!==e&&"videoinput"!==e||this._updateStream(),"audiooutput"===e&&this._onAudioOutputChanged()):yc.error(new Error("Tried to select invalid device of type"))}},{key:"_updateAvailableDevices",value:function(e,t){var n,r,i,a=this._currentMediaDevices[e];if(!!function(e,t){if(e.length===t.length){for(var n=0;n<t.length;n++)if(!zy(e[n],t[n]))return;return 1}}(this._availableMediaDevices[e],t))return!1;var o;this._availableMediaDevices[e]=t,o=this._updateCurrentMediaDevice(e,a);var s,u=C(this._sendbirdCallListeners.values());try{for(u.s();!(s=u.n()).done;){var c=s.value,l=this._currentMediaDevices[e];switch(e){case"audioinput":null!==(n=c.onAudioInputDeviceChanged)&&void 0!==n&&n.call(c,l,t);break;case"audiooutput":null!==(r=c.onAudioOutputDeviceChanged)&&void 0!==r&&r.call(c,l,t);break;case"videoinput":null!==(i=c.onVideoInputDeviceChanged)&&void 0!==i&&i.call(c,l,t)}}}catch(e){u.e(e)}finally{u.f()}return o}},{key:"refreshMediaDevices",value:(n=v(regeneratorRuntime.mark(function e(t){var n,r,i,a,o,s,u,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.audio,r=t.video,n||r){e.next=3;break}throw new Error("at least one of the audio or video must be true");case 3:return e.next=5,this.fetchMediaDevices();case 5:i=e.sent,a=i.audioinput,o=i.audiooutput,s=i.videoinput,c=u=!1,n&&(u=this._updateAvailableDevices("audioinput",a),c=this._updateAvailableDevices("audiooutput",o)),r&&(u=u||this._updateAvailableDevices("videoinput",s)),u&&this._updateStream(),c&&this._onAudioOutputChanged();case 15:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(),Wy=function(){g(t,eh);var e=k(t);function t(){return y(this,t),e.apply(this,arguments)}return t}(),qy=function(){function t(e){y(this,t),this.active=!1,this.queue=[],this.name=e}return s(t,[{key:"acquire",value:function(){var n=this;return new Promise(function(e){function t(){n.active=!0,e()}n.active?n.queue.push(t):t()})}},{key:"release",value:function(){var e;this.active&&(this.active=!1,(e=this.queue.shift())&&e())}}]),t}(),Ky=function(){function e(){y(this,e),this.lastSeqNumber=-1,this.queue=new Map}var t,n;return s(e,[{key:"insert",value:(n=v(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.lastSeqNumber>=t.sequenceNumber)return e.abrupt("return");e.next=2;break;case 2:return this.queue.set(t.sequenceNumber,{command:t,handler:n}),yc.verbose("".concat(t.constructor.name," is inserted")),e.next=6,this.flush();case 6:case"end":return e.stop()}},e,this)})),function(e,t){return n.apply(this,arguments)})},{key:"flush",value:(t=v(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:yc.verbose("try flushing sequence queue"),t=this.next();case 2:if(t)return n=t.command,r=t.handler,yc.verbose("flush ".concat(n.constructor.name)),e.next=7,r(n);e.next=10;break;case 7:t=this.next(),e.next=2;break;case 10:case"end":return e.stop()}},e,this)})),function(){return t.apply(this,arguments)})},{key:"next",value:function(){var e=this.lastSeqNumber+1;if(this.queue.has(e)){var t=this.queue.get(e),n=t.command,r=t.handler;return this.queue.delete(e),this.lastSeqNumber=e,{command:n,handler:r}}return null}}]),e}(),Hy=function(){function e(){y(this,e),this.sequences=new Map,this.lock=new qy}var n;return s(e,[{key:"insert",value:(n=v(regeneratorRuntime.mark(function e(t,n){var r,i,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.lock.acquire();case 2:if(e.prev=2,yc.verbose("try to insert in SequenceManager with ".concat(t.constructor.name)),r=t.getCallId(),t instanceof c_||!t.isSequential()||!r)return yc.verbose("not sequential; immediately flush ".concat(t.constructor.name)),this.lock.release(),n(t),e.abrupt("return");e.next=10;break;case 10:if(this.sequences.has(r))return i=this.sequences.get(r),e.next=14,i.insert(t,n);e.next=16;break;case 14:e.next=20;break;case 16:return a=new Ky,this.sequences.set(r,a),e.next=20,a.insert(t,n);case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(2),yc.warning("failed to SequenceManager.insert()",e.t0);case 25:return e.prev=25,this.lock.release(),e.finish(25);case 28:case"end":return e.stop()}},e,this,[[2,22,25,28]])})),function(e,t){return n.apply(this,arguments)})}]),e}(),Yy=function(){function t(e){y(this,t),this.eventReceiver=e,this._sequenceManager=new Hy}return s(t,[{key:"routeInternalCommand",value:function(e){var t=this;this._sequenceManager.insert(e,function(e){return t.eventReceiver.onInternalCommandReceived(e)})}},{key:"routeDirectCallPeerCommand",value:function(e,t){var n=this;e.receivedType=t,this._sequenceManager.insert(e,function(e){return n.eventReceiver.onDirectCallPeerCommandReceived(e)})}},{key:"routeDirectCallResponseCommand",value:function(e,n){this._sequenceManager.insert(e,function(){var t=v(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.resolve(t),e.abrupt("return",n.promise);case 2:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}())}}]),t}(),Zy=function(){function e(){y(this,e),this.listeners=[]}return s(e,[{key:"listen",value:function(e){if(!e.onEvent)throw new Error("event listener must implement onEvent");this.listeners.push(e)}},{key:"dispatch",value:function(e){var t,n=C(this.listeners);try{for(n.s();!(t=n.n()).done;){t.value.onEvent(e)}}catch(e){n.e(e)}finally{n.f()}}}]),e}(),$y=function(){function e(){y(this,e),this.processed=new Map}return s(e,[{key:"process",value:function(e){return!e.messageId||(this._isProcessed(e)?(this.processed.delete(e.messageId),!1):(this._setProcessed(e),!0))}},{key:"_isProcessed",value:function(e){return this.processed.has(e.messageId)}},{key:"_setProcessed",value:function(e){this.processed.set(e.messageId,!0)}}]),e}(),Qy=function(){function t(e){y(this,t),this._eventDeduplicator=new $y,this._eventDispatcher=e}return s(t,[{key:"onDirectCallPeerCommandReceived",value:function(e){this._dispatchCommand(e)}},{key:"onInternalCommandReceived",value:function(e){this._dispatchCommand(e)}},{key:"_dispatchCommand",value:function(e){this._eventDeduplicator.process(e)&&this._eventDispatcher.dispatch(e)}}]),t}(),Xy=function(){function e(){y(this,e)}return s(e,null,[{key:"createQuery",value:function(t){var n=this;return Object.keys(t).filter(function(e){return null!=t[e]}).map(function(e){return"".concat(encodeURIComponent(e),"=").concat(n.toQueryParam(t[e]))}).join("&")}},{key:"toQueryParam",value:function(e){return Array.isArray(e)?e.map(function(e){return encodeURIComponent(e.toString())}).join(","):encodeURIComponent(e.toString())}}]),e}(),Jy=function(){g(a,Ch);var i=k(a);function a(e,t,n){var r;return y(this,a),(r=i.call(this)).userId=e,r.params=t,r.next=n,r}return s(a,[{key:"getData",value:function(){}},{key:"getPath",value:function(){return"/v1/users/".concat(encodeURIComponent(this.userId),"/calls?").concat(this._createQuery())}},{key:"getMethod",value:function(){return"GET"}},{key:"_createQuery",value:function(){var e;return Xy.createQuery({role:this.params.myRole,limit:this._applyLimitConstraints(null===(e=this.params)||void 0===e?void 0:e.limit),end_result:this.params.endResults,next:this.next})}},{key:"_applyLimitConstraints",value:function(e){return null!=e?Math.min(Math.max(e,10),100):void 0}}]),a}(),eg=function(){function r(e,t,n){y(this,r),this.isLoading=!1,this.hasNext=!0,this.userId=e,this.params=t,this.sender=n,this.nextToken=null}var t;return s(r,[{key:"next",value:(t=v(regeneratorRuntime.mark(function e(t){var n,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isLoading)throw new th(Dc.ERR_QUERY_IN_PROGRESS);e.next=2;break;case 2:if(this.hasNext){e.next=4;break}return e.abrupt("return",[]);case 4:return this.isLoading=!0,n=this.sender.send(this._createCommand()).then(function(e){return r.nextToken=e.next,r.hasNext=e.has_next,r.isLoading=!1,e.calls.map(function(e){return new Xv(e,!0)})}),t&&nh(n)(t),e.abrupt("return",n);case 8:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"_createCommand",value:function(){return new Jy(this.userId,this.params,this.nextToken)}}]),r}(),tg=function(){function e(){y(this,e),this.appId=null,this.clientId=null,this.user=null,this.eventDispatcher=null,this.eventReceiver=null,this.network=null,this.router=null,this.deviceManager=null,this.callFactory=null,this.recordingManager=null,this.callManager=null}return s(e,[{key:"init",value:function(e){if(this._checkPrerequisites(),!e)throw new Wy(Dc.INVALID_PARAMETER_VALUE,{invalidParameter:"appId"});this.appId=e,this.clientId=Zc(),this.eventDispatcher=new Zy,this.eventReceiver=new Qy(this.eventDispatcher),this.router=new Yy(this.eventReceiver),this.network=new xy(this.appId,this.clientId,this.router),this.deviceManager=new Gy,this.recordingManager=new X_,this.callFactory=new B_(this.network,this.deviceManager,this.recordingManager),this.callManager=new K_(this.callFactory,this.network),this.eventDispatcher.listen(this.callManager)}},{key:"authenticate",value:function(e,t){var n=this,r=e.userId,i=e.accessToken;if(yc.info("authenticate()"),this._checkInitialized(),!r)throw new Wy(Dc.INVALID_PARAMETER_VALUE,{invalidParameter:"userId"});var a=this.network.authenticate({userId:r,accessToken:i}).then(function(e){return n.user=e.user,n.callFactory.setStatsInterval(e.statsInterval),n.user});return t&&nh(a)(t),a}},{key:"connectWebSocket",value:function(){return this._checkInitialized(),this.network.connectWs()}},{key:"getCall",value:function(e){return this._checkInitialized(),this.callManager.getCall(e)}},{key:"addListener",value:function(e,t){if(this._checkInitialized(),!t)throw new Wy(Dc.INVALID_PARAMETER_VALUE,{invalidParameter:"listener"});this.callManager.addListener(e,t),this.deviceManager.addSendBirdCallListener(e,t)}},{key:"removeListener",value:function(e){this._checkInitialized(),this.callManager.removeListener(e),this.deviceManager.removeSendBirdCallListener(e)}},{key:"removeAllListeners",value:function(){this._checkInitialized(),this.callManager.removeAllListeners(),this.deviceManager.removeAllSendBirdCallListener()}},{key:"addRecordingListener",value:function(e,t){this._checkInitialized(),this.recordingManager.addRecordingListener(e,t)}},{key:"removeRecordingListener",value:function(e){this._checkInitialized(),this.recordingManager.removeRecordingListener(e)}},{key:"removeAllRecordingListeners",value:function(){this._checkInitialized(),this.recordingManager.removeAllRecordingListener()}},{key:"dial",value:function(e,t){var n=e.userId,r=e.isVideoCall,i=e.callOption,a=e.customItems;if(yc.info("dial()"),this._checkInitialized(),this._checkAuthed(),this.user.userId===n)throw new M_(Dc.MY_USER_ID_NOT_ALLOWED);return this.callManager.dial(n,r,i,a,t)}},{key:"createDirectCallLogListQuery",value:function(e){return this._checkInitialized(),new eg(this.user.userId,e,this.network)}},{key:"deauthenticate",value:function(){yc.info("deauthenticate()"),this._checkInitialized(),this.callManager&&this.callManager.clear(),this.network.deauthenticate(),this.user=null}},{key:"getCurrentAudioInputDevice",value:function(){return this._checkInitialized(),this.deviceManager.getCurrentAudioInputDevice()}},{key:"getAvailableAudioInputDevices",value:function(){return this._checkInitialized(),this.deviceManager.getAvailableAudioInputDevices()}},{key:"selectAudioInputDevice",value:function(e){return this._checkInitialized(),this.deviceManager.selectDevice("audioinput",e)}},{key:"getCurrentAudioOutputDevice",value:function(){return this._checkInitialized(),this.deviceManager.getCurrentAudioOutputDevice()}},{key:"getAvailableAudioOutputDevices",value:function(){return this._checkInitialized(),this.deviceManager.getAvailableAudioOutputDevices()}},{key:"selectAudioOutputDevice",value:function(e){return this._checkInitialized(),this.deviceManager.selectDevice("audiooutput",e)}},{key:"getCurrentVideoInputDevice",value:function(){return this._checkInitialized(),this.deviceManager.getCurrentVideoInputDevice()}},{key:"getAvailableVideoInputDevices",value:function(){return this._checkInitialized(),this.deviceManager.getAvailableVideoInputDevices()}},{key:"selectVideoInputDevice",value:function(e){return this._checkInitialized(),this.deviceManager.selectDevice("videoinput",e)}},{key:"updateMediaDevices",value:function(e){return this._checkInitialized(),this.deviceManager.refreshMediaDevices(e)}},{key:"updateCustomItems",value:function(e,t,n){var r=E(rh(t,n),2)[1];if(r)return r;var i=this.callManager.getCall(e);if(i)return i.updateCustomItems(t,n);var a=f_.createUpdateCustomItems(e,t),o=this.network.send(a).then(function(e){return{customItems:e.custom_items,affectedKeys:e.updated}}).catch(function(e){throw yc.error("failed to update customItems"),e});return n&&nh(o)(n),o}},{key:"deleteCustomItems",value:function(e,t,n){var r=E(ih(t,n),2)[1];if(r)return r;var i=this.callManager.getCall(e);if(i)return i.deleteCustomItems(t,n);var a=f_.createDeleteCustomItems(e,t),o=this.network.send(a).then(function(e){return{customItems:e.custom_items,affectedKeys:e.deleted}}).catch(function(e){throw yc.error("failed to delete customItems"),e});return n&&nh(o)(n),o}},{key:"deleteAllCustomItems",value:function(e,t){var n=this.callManager.getCall(e);if(n)return n.deleteAllCustomItems(t);var r=f_.createDeleteAllCustomItems(e),i=this.network.send(r).then(function(e){return{customItems:e.custom_items,affectedKeys:e.deleted}}).catch(function(e){throw yc.error("failed to delete all customItems"),e});return t&&nh(i)(t),i}},{key:"useMedia",value:function(e){return this._checkInitialized(),this.deviceManager.useMedia(e)}},{key:"getOngoingCallCount",value:function(){return this._checkInitialized(),this.callManager.getOngoingCallCount()}},{key:"setRingingTimeout",value:function(e){this.callFactory.setRingingTimeout(e)}},{key:"setCallConnectionTimeout",value:function(e){this.callFactory.setCallConnectionTimeout(e)}},{key:"handleWebhookData",value:function(e){this._checkInitialized();var t=e.sendbird_call;if(!t)throw new th(Dc.ERR_MALFORMED_DATA);if(!t.cmd)throw new th(Dc.ERR_MALFORMED_DATA);var n=f_.parse(t);n instanceof wh&&this.router.routeDirectCallPeerCommand(n,wy.WEBHOOK)}},{key:"addDirectCallSound",value:function(e,t){return this.callFactory.loadSound(e,t)}},{key:"removeDirectCallSound",value:function(e){return this.callFactory.unloadSound(e)}},{key:"isPlaying",value:function(e){return this.callFactory.isPlaying(e)}},{key:"_checkPrerequisites",value:function(){if("undefined"==typeof window){var e="SendBirdCall needs 'window' in global";throw yc.error(e),e}if(void 0===window.RTCPeerConnection){var t="SendBirdCall needs 'RTCPeerConnection' in global";throw yc.error(t),t}var n=window.location,r=n.protocol,i=n.hostname;if("file:"!==r&&"https:"!==r&&"127.0.0.1"!==i&&"localhost"!==i){var a="SendBirdCall needs https connection, except for 'localhost' or '127.0.0.1'";throw yc.error(a),a}if(void 0===window.RTCPeerConnection.prototype.addTrack||void 0===window.RTCPeerConnection.prototype.getSenders){var o="SendBirdCall can't support the browser using legacy WebRTC module";throw yc.error(o),o}}},{key:"_checkInitialized",value:function(){if(!this.appId)throw new Wy(Dc.INSTANCE_NOT_INITIALIZED)}},{key:"_checkAuthed",value:function(){if(!this.user)throw new Wy(Dc.USER_NOT_AUTHENTICATED)}},{key:"currentUser",get:function(){return this.user}}],[{key:"setLoggerLevel",value:function(e){return yc.setLoggerLevel(e)}}]),e}(),ng=null,rg=I(null,function(t){return{F:function e(){y(this,e),t(this)},d:[{kind:"get",static:!0,key:"sdkVersion",value:function(){return"1.4.1"}},{kind:"get",static:!0,key:"appId",value:function(){return null===ng||void 0===ng?void 0:ng.appId}},{kind:"get",static:!0,key:"currentUser",value:function(){return null===ng||void 0===ng?void 0:ng.currentUser}},{kind:"get",static:!0,key:"LoggerLevel",value:function(){return Nc}},{kind:"get",static:!0,key:"SoundType",value:function(){return Sc}},{kind:"get",static:!0,key:"DirectCallUserRole",value:function(){return M}},{kind:"get",static:!0,key:"DirectCallEndResult",value:function(){return L}},{kind:"get",static:!0,key:"DirectCallOption",value:function(){return P}},{kind:"get",static:!0,key:"DirectCallRecordOption",value:function(){return kc}},{kind:"get",static:!0,key:"RecordingType",value:function(){return Rs}},{kind:"get",static:!0,key:"ErrorCode",value:function(){return Dc}},{kind:"method",static:!0,key:"init",value:function(e){return(!ng||ng.appId!==e)&&(ng&&ng.deauthenticate(),(ng=new tg).init(e),!0)}},{kind:"method",static:!0,key:"authenticate",value:function(e,t){var n=e.userId,r=e.accessToken;return ng&&ng.user&&ng.user.userId!==n&&this.deauthenticate(),ng.authenticate({userId:n,accessToken:r},t)}},{kind:"method",static:!0,key:"deauthenticate",value:function(){ng&&ng.deauthenticate()}},{kind:"method",static:!0,key:"connectWebSocket",value:function(){return ng.connectWebSocket()}},{kind:"method",static:!0,key:"addListener",value:function(e,t){ng.addListener(e,t)}},{kind:"method",static:!0,key:"removeListener",value:function(e){ng.removeListener(e)}},{kind:"method",static:!0,key:"removeAllListeners",value:function(){ng.removeAllListeners()}},{kind:"method",static:!0,key:"addRecordingListener",value:function(e,t){ng.addRecordingListener(e,t)}},{kind:"method",static:!0,key:"removeRecordingListener",value:function(e){ng.removeRecordingListener(e)}},{kind:"method",static:!0,key:"removeAllRecordingListeners",value:function(){ng.removeAllRecordingListeners()}},{kind:"method",decorators:[Gc(Gc.messages.CALL_IS_NOT_SUPPORTED)],static:!0,key:"dial",value:function(e,t){return ng.dial(e,t)}},{kind:"method",static:!0,key:"createDirectCallLogListQuery",value:function(e){return ng.createDirectCallLogListQuery(e)}},{kind:"method",static:!0,key:"getCurrentAudioInputDevice",value:function(){return ng.getCurrentAudioInputDevice()}},{kind:"method",static:!0,key:"getAvailableAudioInputDevices",value:function(){return ng.getAvailableAudioInputDevices()}},{kind:"method",static:!0,key:"selectAudioInputDevice",value:function(e){return ng.selectAudioInputDevice(e)}},{kind:"method",static:!0,key:"getCurrentAudioOutputDevice",value:function(){return ng.getCurrentAudioOutputDevice()}},{kind:"method",static:!0,key:"getAvailableAudioOutputDevices",value:function(){return ng.getAvailableAudioOutputDevices()}},{kind:"method",static:!0,key:"selectAudioOutputDevice",value:function(e){return ng.selectAudioOutputDevice(e)}},{kind:"method",static:!0,key:"getCurrentVideoInputDevice",value:function(){return ng.getCurrentVideoInputDevice()}},{kind:"method",static:!0,key:"getAvailableVideoInputDevices",value:function(){return ng.getAvailableVideoInputDevices()}},{kind:"method",static:!0,key:"selectVideoInputDevice",value:function(e){return ng.selectVideoInputDevice(e)}},{kind:"method",static:!0,key:"updateMediaDevices",value:function(e){return ng.updateMediaDevices(e)}},{kind:"method",static:!0,key:"updateCustomItems",value:function(e,t,n){return ng.updateCustomItems(e,t,n)}},{kind:"method",static:!0,key:"deleteCustomItems",value:function(e,t,n){return ng.deleteCustomItems(e,t,n)}},{kind:"method",static:!0,key:"deleteAllCustomItems",value:function(e,t){return ng.deleteAllCustomItems(e,t)}},{kind:"method",static:!0,key:"getOngoingCallCount",value:function(){return ng.getOngoingCallCount()}},{kind:"method",static:!0,key:"setLoggerLevel",value:function(e){return tg.setLoggerLevel(Yu[e])}},{kind:"method",static:!0,key:"setRingingTimeout",value:function(e){ng.setRingingTimeout(e)}},{kind:"method",static:!0,key:"setCallConnectionTimeout",value:function(e){ng.setCallConnectionTimeout(e)}},{kind:"method",static:!0,key:"handleWebhookData",value:function(e){ng.handleWebhookData(e)}},{kind:"method",static:!0,key:"addDirectCallSound",value:function(e,t){return ng.addDirectCallSound(e,t)}},{kind:"method",static:!0,key:"removeDirectCallSound",value:function(e){return ng.removeDirectCallSound(e)}},{kind:"method",static:!0,key:"isPlaying",value:function(e){return ng.isPlaying(e)}},{kind:"method",static:!0,key:"getCall",value:function(e){return ng.getCall(e)}},{kind:"method",static:!0,key:"useMedia",value:function(e){return ng.useMedia(e)}}]}});return rg});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=app.js.map