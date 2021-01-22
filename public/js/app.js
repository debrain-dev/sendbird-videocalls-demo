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

        /*
        const video = document.querySelectorAll('video');
        video.forEach((v) => {
          console.log('entro');
          const mediaStream = v.srcObject;
          const tracks = mediaStream.getTracks();
          tracks.forEach((track) => track.stop());
        });
        */
        navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        }).then(function (mediaStream) {
          var stream = mediaStream;
          var tracks = stream.getTracks();
          tracks[0].stop();
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
 * SendBird Call JavaScript SDK v1.5.1 production
 */

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}function u(e){try{return!!e()}catch(e){return!0}}function l(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}function r(e){return s.call(e).slice(8,-1)}function d(e){if(null==e)throw TypeError("Can't call method on "+e);return e}function h(e){return k(d(e))}function T(e){return"object"==typeof e?null!==e:"function"==typeof e}function O(e,t){if(!T(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!T(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!T(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!T(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}function D(e,t){return v.call(e,t)}function n(e){return y?_.createElement(e):{}}function R(e){if(!T(e))throw TypeError(String(e)+" is not an object");return e}function f(t,n){try{P(N,t,n)}catch(e){N[t]=n}return n}var i=function(e){return e&&e.Math==Math&&e},N=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof e&&e)||function(){return this}()||Function("return this")(),L=!u(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),a={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,p={f:o&&!a.call({1:2},1)?function(e){e=o(this,e);return!!e&&e.enumerable}:a},s={}.toString,c="".split,k=u(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==r(e)?c.call(e,""):Object(e)}:Object,v={}.hasOwnProperty,_=N.document,y=T(_)&&T(_.createElement),g=!L&&!u(function(){return 7!=Object.defineProperty(n("div"),"a",{get:function(){return 7}}).a}),m=Object.getOwnPropertyDescriptor,x={f:L?m:function(e,t){if(e=h(e),t=O(t,!0),g)try{return m(e,t)}catch(e){}if(D(e,t))return l(!p.f.call(e,t),e[t])}},E=Object.defineProperty,M={f:L?E:function(e,t,n){if(R(e),t=O(t,!0),R(n),g)try{return E(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},P=L?function(e,t,n){return M.f(e,t,l(1,n))}:function(e,t,n){return e[t]=n,e},C="__core-js_shared__",w=N[C]||f(C,{}),b=Function.toString;"function"!=typeof w.inspectSource&&(w.inspectSource=function(e){return b.call(e)});function I(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++H+Y).toString(36)}var A,S,U,V,F,j,B,G,z=w.inspectSource,W=N.WeakMap,q="function"==typeof W&&/native code/.test(z(W)),K=t(function(e){(e.exports=function(e,t){return w[e]||(w[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.8.1",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})}),H=0,Y=Math.random(),Z=K("keys"),$=function(e){return Z[e]||(Z[e]=I(e))},Q={},i=N.WeakMap;B=q?(A=w.state||(w.state=new i),S=A.get,U=A.has,V=A.set,F=function(e,t){return t.facade=e,V.call(A,e,t),t},j=function(e){return S.call(A,e)||{}},function(e){return U.call(A,e)}):(G=$("state"),Q[G]=!0,F=function(e,t){return t.facade=e,P(e,G,t),t},j=function(e){return D(e,G)?e[G]:{}},function(e){return D(e,G)});function J(e){return"function"==typeof e?e:void 0}function X(e,t){return arguments.length<2?J(fe[e])||J(N[e]):fe[e]&&fe[e][t]||N[e]&&N[e][t]}function ee(e){return isNaN(e=+e)?0:(0<e?ve:pe)(e)}function te(e){return 0<e?_e(ee(e),9007199254740991):0}function ne(e,t){return(e=ee(e))<0?ye(e+t,0):ge(e,t)}function re(e,t){var n,r=h(e),i=0,a=[];for(n in r)!D(Q,n)&&D(r,n)&&a.push(n);for(;t.length>i;)D(r,n=t[i++])&&(~me(a,n)||a.push(n));return a}function ie(e,t){var n,r,i,a=e.target,o=e.global,s=e.stat,c=o?N:s?N[a]||f(a,{}):(N[a]||{}).prototype;if(c)for(n in t){if(r=t[n],i=e.noTargetGet?(i=De(c,n))&&i.value:c[n],!Oe(o?n:a+(s?".":"#")+n,e.forced)&&void 0!==i){if(typeof r==typeof i)continue;!function(e,t){for(var n=be(t),r=M.f,i=x.f,a=0;a<n.length;a++){var o=n[a];D(e,o)||r(e,o,i(t,o))}}(r,i)}(e.sham||i&&i.sham)&&P(r,"sham",!0),he(c,n,r,e)}}function ae(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}function oe(r,i,e){if(ae(r),void 0===i)return r;switch(e){case 0:return function(){return r.call(i)};case 1:return function(e){return r.call(i,e)};case 2:return function(e,t){return r.call(i,e,t)};case 3:return function(e,t,n){return r.call(i,e,t,n)}}return function(){return r.apply(i,arguments)}}function se(e){return Object(d(e))}function ce(e){return D(xe,e)||(Le&&D(Me,e)?xe[e]=Me[e]:xe[e]=Pe("Symbol."+e)),xe[e]}function ue(e,t){var n;return Ne(e)&&("function"==typeof(n=e.constructor)&&(n===Array||Ne(n.prototype))||T(n)&&null===(n=n[Ue]))&&(n=void 0),new(void 0===n?Array:n)(0===t?0:t)}function le(e){throw e}var de={set:F,get:j,has:B,enforce:function(e){return B(e)?j(e):F(e,{})},getterFor:function(n){return function(e){var t;if(!T(e)||(t=j(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}},he=t(function(e){var t=de.get,s=de.enforce,c=String(String).split("String");(e.exports=function(e,t,n,r){var i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,o=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof t||D(n,"name")||P(n,"name",t),(r=s(n)).source||(r.source=c.join("string"==typeof t?t:""))),e!==N?(i?!o&&e[t]&&(a=!0):delete e[t],a?e[t]=n:P(e,t,n)):a?e[t]=n:f(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||z(this)})}),fe=N,pe=Math.ceil,ve=Math.floor,_e=Math.min,ye=Math.max,ge=Math.min,e=function(s){return function(e,t,n){var r,i=h(e),a=te(i.length),o=ne(n,a);if(s&&t!=t){for(;o<a;)if((r=i[o++])!=r)return!0}else for(;o<a;o++)if((s||o in i)&&i[o]===t)return s||o||0;return!s&&-1}},a={includes:e(!0),indexOf:e(!1)},me=a.indexOf,ke=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ee=ke.concat("length","prototype"),Ce={f:Object.getOwnPropertyNames||function(e){return re(e,Ee)}},we={f:Object.getOwnPropertySymbols},be=X("Reflect","ownKeys")||function(e){var t=Ce.f(R(e)),n=we.f;return n?t.concat(n(e)):t},Re=/#|\.prototype\./,C=function(e,t){e=Ae[Ie(e)];return e==Te||e!=Se&&("function"==typeof t?u(t):!!t)},Ie=C.normalize=function(e){return String(e).replace(Re,".").toLowerCase()},Ae=C.data={},Se=C.NATIVE="N",Te=C.POLYFILL="P",Oe=C,De=x.f,Ne=Array.isArray||function(e){return"Array"==r(e)},Le=!!Object.getOwnPropertySymbols&&!u(function(){return!String(Symbol())}),W=Le&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,xe=K("wks"),Me=N.Symbol,Pe=W?Me:Me&&Me.withoutSetter||I,Ue=ce("species"),Ve=[].push,q=function(h){var f=1==h,p=2==h,v=3==h,_=4==h,y=6==h,g=7==h,m=5==h||y;return function(e,t,n,r){for(var i,a,o=se(e),s=k(o),c=oe(t,n,3),u=te(s.length),l=0,r=r||ue,d=f?r(e,u):p||g?r(e,0):void 0;l<u;l++)if((m||l in s)&&(a=c(i=s[l],l,o),h))if(f)d[l]=a;else if(a)switch(h){case 3:return!0;case 5:return i;case 6:return l;case 2:Ve.call(d,i)}else switch(h){case 4:return!1;case 7:Ve.call(d,i)}return y?-1:v||_?_:d}},Fe={forEach:q(0),map:q(1),filter:q(2),some:q(3),every:q(4),find:q(5),findIndex:q(6),filterOut:q(7)},i=function(e,t){var n=[][e];return!!n&&u(function(){n.call(null,t||function(){throw 1},1)})},je=Object.defineProperty,Be={},e=function(e,t){if(D(Be,e))return Be[e];var n=[][e],r=!!D(t=t||{},"ACCESSORS")&&t.ACCESSORS,i=D(t,0)?t[0]:le,a=D(t,1)?t[1]:void 0;return Be[e]=!!n&&!u(function(){if(r&&!L)return 1;var e={length:-1};r?je(e,1,{enumerable:!0,get:le}):e[1]=1,n.call(e,i,a)})},Ge=Fe.forEach,C=i("forEach"),K=e("forEach"),ze=C&&K?[].forEach:function(e){return Ge(this,e,1<arguments.length?arguments[1]:void 0)};ie({target:"Array",proto:!0,forced:[].forEach!=ze},{forEach:ze});function We(){}function qe(e){return"<script>"+e+"</"+Qe+">"}var Ke,He=Object.keys||function(e){return re(e,ke)},Ye=L?Object.defineProperties:function(e,t){R(e);for(var n,r=He(t),i=r.length,a=0;a<i;)M.f(e,n=r[a++],t[n]);return e},Ze=X("document","documentElement"),$e="prototype",Qe="script",Je=$("IE_PROTO"),Xe=function(){try{Ke=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e;Xe=Ke?function(e){e.write(qe("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Ke):((e=n("iframe")).style.display="none",Ze.appendChild(e),e.src=String("javascript:"),(e=e.contentWindow.document).open(),e.write(qe("document.F=Object")),e.close(),e.F);for(var t=ke.length;t--;)delete Xe[$e][ke[t]];return Xe()};Q[Je]=!0;var et=Object.create||function(e,t){var n;return null!==e?(We[$e]=R(e),n=new We,We[$e]=null,n[Je]=e):n=Xe(),void 0===t?n:Ye(n,t)},tt=ce("unscopables"),nt=Array.prototype;null==nt[tt]&&M.f(nt,tt,{configurable:!0,value:et(null)});var W=function(e){nt[tt][e]=!0},rt={},q=!u(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}),it=$("IE_PROTO"),at=Object.prototype,ot=q?Object.getPrototypeOf:function(e){return e=se(e),D(e,it)?e[it]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?at:null},C=ce("iterator"),K=!1;[].keys&&("next"in(Mt=[].keys())?(_n=ot(ot(Mt)))!==Object.prototype&&(yn=_n):K=!0),null==yn&&(yn={}),D(yn,C)||P(yn,C,function(){return this});function st(e,t,n){e&&!D(e=n?e:e.prototype,ft)&&ht(e,ft,{configurable:!0,value:t})}function ct(){return this}function ut(e,t,n){return t+=" Iterator",e.prototype=et(pt,{next:l(1,n)}),st(e,t,!1),rt[t]=ct,e}function lt(){return this}function dt(e,t,n,r,i,a,o){function s(e){if(e===i&&p)return p;if(!yt&&e in h)return h[e];switch(e){case"keys":case mt:case kt:return function(){return new n(this,e)}}return function(){return new n(this)}}ut(n,t,r);var c,u,l=t+" Iterator",d=!1,h=e.prototype,f=h[gt]||h["@@iterator"]||i&&h[i],p=!yt&&f||s(i);if((r="Array"==t&&h.entries||f)&&(e=ot(r.call(new e)),_t!==Object.prototype&&e.next&&(ot(e)!==_t&&(vt?vt(e,_t):"function"!=typeof e[gt]&&P(e,gt,lt)),st(e,l,!0))),i==mt&&f&&f.name!==mt&&(d=!0,p=function(){return f.call(this)}),h[gt]!==p&&P(h,gt,p),rt[t]=p,i)if(c={values:s(mt),keys:a?p:s("keys"),entries:s(kt)},o)for(u in c)!yt&&!d&&u in h||he(h,u,c[u]);else ie({target:t,proto:!0,forced:yt||d},c);return c}var $={IteratorPrototype:yn,BUGGY_SAFARI_ITERATORS:K},ht=M.f,ft=ce("toStringTag"),pt=$.IteratorPrototype,vt=Object.setPrototypeOf||("__proto__"in{}?function(){var n,r=!1,e={};try{(n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),r=e instanceof Array}catch(e){}return function(e,t){return R(e),function(e){if(!T(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(t),r?n.call(e,t):e.__proto__=t,e}}():void 0),_t=$.IteratorPrototype,yt=$.BUGGY_SAFARI_ITERATORS,gt=ce("iterator"),mt="values",kt="entries",Et="Array Iterator",Ct=de.set,wt=de.getterFor(Et),bt=dt(Array,"Array",function(e,t){Ct(this,{type:Et,target:h(e),index:0,kind:t})},function(){var e=wt(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?{value:e.target=void 0,done:!0}:"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}},"values");rt.Arguments=rt.Array,W("keys"),W("values"),W("entries");function Rt(e){return void 0!==e&&(rt.Array===e||Tt[St]===e)}var It=!u(function(){return Object.isExtensible(Object.preventExtensions({}))}),At=t(function(e){function n(e){t(e,r,{value:{objectID:"O"+ ++i,weakData:{}}})}var t=M.f,r=I("meta"),i=0,a=Object.isExtensible||function(){return!0},o=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!T(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!D(e,r)){if(!a(e))return"F";if(!t)return"E";n(e)}return e[r].objectID},getWeakData:function(e,t){if(!D(e,r)){if(!a(e))return!0;if(!t)return!1;n(e)}return e[r].weakData},onFreeze:function(e){return It&&o.REQUIRED&&a(e)&&!D(e,r)&&n(e),e}};Q[r]=!0}),St=(At.REQUIRED,At.fastKey,At.getWeakData,At.onFreeze,ce("iterator")),Tt=Array.prototype,q={};q[ce("toStringTag")]="z";function Ot(e){if(null!=e)return e[Ft]||e["@@iterator"]||rt[Vt(e)]}function Dt(e){var t=e.return;return void 0!==t&&R(t.call(e)).value}function Nt(e,t){this.stopped=e,this.result=t}function Lt(e,t,n){function r(e){return a&&Dt(a),new Nt(!0,e)}function i(e){return h?(R(e),p?v(e[0],e[1],r):v(e[0],e[1])):p?v(e,r):v(e)}var a,o,s,c,u,l,d=n&&n.that,h=!(!n||!n.AS_ENTRIES),f=!(!n||!n.IS_ITERATOR),p=!(!n||!n.INTERRUPTED),v=oe(t,d,1+h+p);if(f)a=e;else{if("function"!=typeof(f=Ot(e)))throw TypeError("Target is not iterable");if(Rt(f)){for(o=0,s=te(e.length);o<s;o++)if((c=i(e[o]))&&c instanceof Nt)return c;return new Nt(!1)}a=f.call(e)}for(u=a.next;!(l=u.call(a)).done;){try{c=i(l.value)}catch(e){throw Dt(a),e}if("object"==typeof c&&c&&c instanceof Nt)return c}return new Nt(!1)}function xt(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}var Mt="[object z]"===String(q),Pt=ce("toStringTag"),Ut="Arguments"==r(function(){return arguments}()),Vt=Mt?r:function(e){var t;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(e=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),Pt))?e:Ut?r(t):"Object"==(e=r(t))&&"function"==typeof t.callee?"Arguments":e},Ft=ce("iterator"),jt=ce("iterator"),Bt=!1;try{var Gt=0,zt={next:function(){return{done:!!Gt++}},return:function(){Bt=!0}};zt[jt]=function(){return this},Array.from(zt,function(){throw 2})}catch(e){}function Wt(e,t){if(!t&&!Bt)return!1;var n=!1;try{var r={};r[jt]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(e){}return n}function qt(e,t,n){var r,i;return vt&&"function"==typeof(r=t.constructor)&&r!==n&&T(i=r.prototype)&&i!==n.prototype&&vt(e,i),e}function Kt(e,t,n){for(var r in t)he(e,r,t[r],n);return e}function Ht(e){var t=X(e),e=M.f;L&&t&&!t[ln]&&e(t,ln,{configurable:!0,get:function(){return this}})}var Yt,Zt,$t,Qt,Jt,Xt,en,tn,nn,rn,an,on,sn,cn,un,ln=ce("species"),dn=M.f,hn=At.fastKey,fn=de.set,pn=de.getterFor;Zt=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},$t={getConstructor:function(e,n,r,i){function a(e,t,n){var r,i=s(e),a=c(e,t);return a?a.value=n:(i.last=a={index:r=hn(t,!0),key:t,value:n,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=a),n&&(n.next=a),L?i.size++:e.size++,"F"!==r&&(i.index[r]=a)),e}var o=e(function(e,t){xt(e,o,n),fn(e,{type:n,index:et(null),first:void 0,last:void 0,size:0}),L||(e.size=0),null!=t&&Lt(t,e[i],{that:e,AS_ENTRIES:r})}),s=pn(n),c=function(e,t){var n,r=s(e),e=hn(t);if("F"!==e)return r.index[e];for(n=r.first;n;n=n.next)if(n.key==t)return n};return Kt(o.prototype,{clear:function(){for(var e=s(this),t=e.index,n=e.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete t[n.index],n=n.next;e.first=e.last=void 0,L?e.size=0:this.size=0},delete:function(e){var t,n=s(this),r=c(this,e);return r&&(t=r.next,e=r.previous,delete n.index[r.index],r.removed=!0,e&&(e.next=t),t&&(t.previous=e),n.first==r&&(n.first=t),n.last==r&&(n.last=e),L?n.size--:this.size--),!!r},forEach:function(e){for(var t,n=s(this),r=oe(e,1<arguments.length?arguments[1]:void 0,3);t=t?t.next:n.first;)for(r(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!c(this,e)}}),Kt(o.prototype,r?{get:function(e){e=c(this,e);return e&&e.value},set:function(e,t){return a(this,0===e?0:e,t)}}:{add:function(e){return a(this,e=0===e?0:e,e)}}),L&&dn(o.prototype,"size",{get:function(){return s(this).size}}),o},setStrong:function(e,t,n){var r=t+" Iterator",i=pn(t),a=pn(r);dt(e,t,function(e,t){fn(this,{type:r,target:e,state:i(e),kind:t,last:void 0})},function(){for(var e=a(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:{value:e.target=void 0,done:!0}},n?"entries":"values",!n,!0),Ht(t)}},nn=-1!==(Yt="Map").indexOf("Map"),rn=-1!==Yt.indexOf("Weak"),an=nn?"set":"add",on=N[Yt],sn=on&&on.prototype,un={},Oe(Yt,"function"!=typeof(cn=on)||!(rn||sn.forEach&&!u(function(){(new on).entries().next()})))?(cn=$t.getConstructor(Zt,Yt,nn,an),At.REQUIRED=!0):Oe(Yt,!0)&&(Jt=(Qt=new cn)[an](rn?{}:-0,1)!=Qt,Xt=u(function(){Qt.has(1)}),en=Wt(function(e){new on(e)}),tn=!rn&&u(function(){for(var e=new on,t=5;t--;)e[an](t,t);return!e.has(-0)}),en||(((cn=Zt(function(e,t){xt(e,cn,Yt);e=qt(new on,e,cn);return null!=t&&Lt(t,e[an],{that:e,AS_ENTRIES:nn}),e})).prototype=sn).constructor=cn),(Xt||tn)&&(vn("delete"),vn("has"),nn&&vn("get")),(tn||Jt)&&vn(an),rn&&sn.clear&&delete sn.clear),un[Yt]=cn,ie({global:!0,forced:cn!=on},un),st(cn,Yt),rn||$t.setStrong(cn,Yt,nn);function vn(e){var n=sn[e];he(sn,e,"add"==e?function(e){return n.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(rn&&!T(e))&&n.call(this,0===e?0:e)}:"get"==e?function(e){return rn&&!T(e)?void 0:n.call(this,0===e?0:e)}:"has"==e?function(e){return!(rn&&!T(e))&&n.call(this,0===e?0:e)}:function(e,t){return n.call(this,0===e?0:e,t),this})}var _n=Mt?{}.toString:function(){return"[object "+Vt(this)+"]"};Mt||he(Object.prototype,"toString",_n,{unsafe:!0});var C=function(a){return function(e,t){var n,r=String(d(e)),i=ee(t),e=r.length;return i<0||e<=i?a?"":void 0:(t=r.charCodeAt(i))<55296||56319<t||i+1===e||(n=r.charCodeAt(i+1))<56320||57343<n?a?r.charAt(i):t:a?r.slice(i,i+2):n-56320+(t-55296<<10)+65536}},yn={codeAt:C(!1),charAt:C(!0)},gn=yn.charAt,mn="String Iterator",kn=de.set,En=de.getterFor(mn);dt(String,"String",function(e){kn(this,{type:mn,string:String(e),index:0})},function(){var e=En(this),t=e.string,n=e.index;return n>=t.length?{value:void 0,done:!0}:(n=gn(t,n),e.index+=n.length,{value:n,done:!1})});var Cn,wn={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};for(Cn in wn){var bn=N[Cn],Rn=bn&&bn.prototype;if(Rn&&Rn.forEach!==ze)try{P(Rn,"forEach",ze)}catch(e){Rn.forEach=ze}}var In,An,Sn=ce("iterator"),Tn=ce("toStringTag"),On=bt.values;for(In in wn){var Dn=N[In],Nn=Dn&&Dn.prototype;if(Nn){if(Nn[Sn]!==On)try{P(Nn,Sn,On)}catch(e){Nn[Sn]=On}if(Nn[Tn]||P(Nn,Tn,In),wn[In])for(var Ln in bt)if(Nn[Ln]!==bt[Ln])try{P(Nn,Ln,bt[Ln])}catch(e){Nn[Ln]=bt[Ln]}}}function xn(e){return(xn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Mn(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}function Pn(s){return function(){var e=this,o=arguments;return new Promise(function(t,n){var r=s.apply(e,o);function i(e){Mn(r,t,n,i,a,"next",e)}function a(e){Mn(r,t,n,i,a,"throw",e)}i(void 0)})}}function Un(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Vn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Fn(e,t,n){return t&&Vn(e.prototype,t),n&&Vn(e,n),e}function jn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bn(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function Gn(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Bn(Object(n),!0).forEach(function(e){jn(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bn(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function zn(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&qn(e,t)}function Wn(e){return(Wn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function qn(e,t){return(qn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Kn(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function Hn(e,t,n){return(Hn=Kn()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);r=new(Function.bind.apply(e,r));return n&&qn(r,n.prototype),r}).apply(null,arguments)}function Yn(e){var r="function"==typeof Map?new Map:void 0;return(Yn=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return Hn(e,arguments,Wn(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),qn(n,e)})(e)}function Zn(e,t){if(null==e)return{};var n,r=function(e,t){if(null==e)return{};for(var n,r={},i=Object.keys(e),a=0;a<i.length;a++)n=i[a],0<=t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(e),a=0;a<i.length;a++)n=i[a],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}function $n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Qn(n){var r=Kn();return function(){var e,t=Wn(n);return e=r?(e=Wn(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!=typeof e&&"function"!=typeof e?$n(t):e}}function Jn(e,t){return er(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||nr(e,t)||ir()}function Xn(e){return function(e){if(Array.isArray(e))return rr(e)}(e)||tr(e)||nr(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function er(e){if(Array.isArray(e))return e}function tr(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function nr(e,t){if(e){if("string"==typeof e)return rr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?rr(e,t):void 0}}function rr(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ir(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ar(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=nr(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){o=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw i}}}}function or(e){e=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);if("object"!=typeof(t=n.call(e,t||"default")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}(e,"string");return"symbol"==typeof e?e:String(e)}function sr(e,t,n,r){var i=cr();if(r)for(var a=0;a<r.length;a++)i=r[a](i);var n=t(function(e){i.initializeInstanceElements(e,o.elements)},n),o=i.decorateClass(function(e){for(var t,n=[],r=function(e){return"method"===e.kind&&e.key===a.key&&e.placement===a.placement},i=0;i<e.length;i++){var a=e[i];if("method"===a.kind&&(t=n.find(r)))if(dr(a.descriptor)||dr(t.descriptor)){if(lr(a)||lr(t))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");t.descriptor=a.descriptor}else{if(lr(a)){if(lr(t))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");t.decorators=a.decorators}!function(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}(a,t)}else n.push(a)}return n}(n.d.map(ur)),e);return i.initializeClassElements(n.F,o.elements),i.runClassFinishers(n.F,o.finishers)}function cr(){cr=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(n,e){["method","field"].forEach(function(t){e.forEach(function(e){e.kind===t&&"own"===e.placement&&this.defineClassElement(n,e)},this)},this)},initializeClassElements:function(r,e){var i=r.prototype;["method","field"].forEach(function(n){e.forEach(function(e){var t=e.placement;e.kind!==n||"static"!==t&&"prototype"!==t||(t="static"===t?r:i,this.defineClassElement(t,e))},this)},this)},defineClassElement:function(e,t){var n,r=t.descriptor;"field"===t.kind&&(n=t.initializer,r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}),Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,i)},this),e.forEach(function(e){if(!lr(e))return n.push(e);e=this.decorateElement(e,i);n.push(e.element),n.push.apply(n,e.extras),r.push.apply(r,e.finishers)},this),!t)return{elements:n,finishers:r};t=this.decorateConstructor(n,t);return r.push.apply(r,t.finishers),t.finishers=r,t},addElementPlacement:function(e,t,n){t=t[e.placement];if(!n&&-1!==t.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");t.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,a=i.length-1;0<=a;a--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);o=this.fromElementDescriptor(e),o=this.toElementFinisherExtras((0,i[a])(o)||o);e=o.element,this.addElementPlacement(e,t),o.finisher&&r.push(o.finisher);var s=o.extras;if(s){for(var c=0;c<s.length;c++)this.addElementPlacement(s[c],t);n.push.apply(n,s)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;0<=r;r--){var i=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==i.finisher&&n.push(i.finisher),void 0!==i.elements){e=i.elements;for(var a=0;a<e.length-1;a++)for(var o=a+1;o<e.length;o++)if(e[a].key===e[o].key&&e[a].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return(er(e=e)||tr(e)||nr(e)||ir()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=or(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");r={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),r.initializer=e.initializer),r},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:hr(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){e={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");t=hr(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:t}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function ur(e){var t=or(e.key);"method"===e.kind?n={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?n={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?n={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(n={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:n};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function lr(e){return e.decorators&&e.decorators.length}function dr(e){return void 0!==e&&(void 0!==e.value||void 0!==e.writable)}function hr(e,t){e=e[t];if(void 0!==e&&"function"!=typeof e)throw new TypeError("Expected '"+t+"' to be a function");return e}(K=An=An||{})[K.DIAL_CANCELED=1800100]="DIAL_CANCELED",K[K.MY_USER_ID_NOT_ALLOWED=1800101]="MY_USER_ID_NOT_ALLOWED",K[K.ERR_REQUEST_FAILED=1800200]="ERR_REQUEST_FAILED",K[K.ERR_WEBSOCKET_CONNECTION_NOT_OPENED=1800201]="ERR_WEBSOCKET_CONNECTION_NOT_OPENED",K[K.ERR_WEBSOCKET_CONNECTION_FAILED=1800202]="ERR_WEBSOCKET_CONNECTION_FAILED",K[K.ERR_NO_RESPONSE_DUE_TO_TIMEOUT=1800203]="ERR_NO_RESPONSE_DUE_TO_TIMEOUT",K[K.ERR_REQUEST_FAILED_DUE_TO_WEBSOCKET_CONNECTION_LOST=1800204]="ERR_REQUEST_FAILED_DUE_TO_WEBSOCKET_CONNECTION_LOST",K[K.ERR_WRONG_RESPONSE=1800205]="ERR_WRONG_RESPONSE",K[K.ERR_QUERY_IN_PROGRESS=1800206]="ERR_QUERY_IN_PROGRESS",K[K.INTERNAL_SERVER_ERROR=1800207]="INTERNAL_SERVER_ERROR",K[K.ERR_MALFORMED_DATA=1800208]="ERR_MALFORMED_DATA",K[K.INVALID_PARAMETER_VALUE=1800300]="INVALID_PARAMETER_VALUE",K[K.INVALID_PARAMETER_TYPE=1800301]="INVALID_PARAMETER_TYPE",K[K.INSTANCE_NOT_INITIALIZED=1800302]="INSTANCE_NOT_INITIALIZED",K[K.USER_NOT_AUTHENTICATED=1800303]="USER_NOT_AUTHENTICATED",K[K.CAMERA_ALREADY_SWITCHING=1800400]="CAMERA_ALREADY_SWITCHING",K[K.ERR_CAMERA_SWITCH=1800401]="ERR_CAMERA_SWITCH",K[K.ERR_CHANGING_AUDIO_DEVICE=1800402]="ERR_CHANGING_AUDIO_DEVICE",K[K.ERR_CAPTURE_NOT_ALLOWED_ON_AUDIO_CALL=1800600]="ERR_CAPTURE_NOT_ALLOWED_ON_AUDIO_CALL",K[K.ERR_VIDEO_VIEW_NOT_READY=1800601]="ERR_VIDEO_VIEW_NOT_READY",K[K.ERR_VIDEO_CALL_NOT_CONNECTED_YET=1800602]="ERR_VIDEO_CALL_NOT_CONNECTED_YET",K[K.ERR_FAILED_TO_GET_IMAGE_FROM_VIDEO_STREAM=1800603]="ERR_FAILED_TO_GET_IMAGE_FROM_VIDEO_STREAM",K[K.ERR_SERVER_INTERNAL_ERROR=1400999]="ERR_SERVER_INTERNAL_ERROR",K[K.ERR_INVALID_CALL_STATUS=1400101]="ERR_INVALID_CALL_STATUS",K[K.ERR_CALL_DOES_NOT_EXIST=1400102]="ERR_CALL_DOES_NOT_EXIST",K[K.ERR_CALLEE_DOES_NOT_EXIST=1400103]="ERR_CALLEE_DOES_NOT_EXIST",K[K.ERR_DIAL_MYSELF=1400104]="ERR_DIAL_MYSELF",K[K.ERR_NO_PERMISSION=1400105]="ERR_NO_PERMISSION",K[K.ERR_CALLEE_NEVER_AUTHENTICATE=1400106]="ERR_CALLEE_NEVER_AUTHENTICATE",K[K.ERR_CALL_NOT_CONNECTED_YET=1800610]="ERR_CALL_NOT_CONNECTED_YET",K[K.ERR_WRONG_RECORDING_TYPE_FOR_AUDIO_CALL=1800611]="ERR_WRONG_RECORDING_TYPE_FOR_AUDIO_CALL",K[K.ERR_RECORDING_ALREADY_IN_PROGRESS=1800612]="ERR_RECORDING_ALREADY_IN_PROGRESS",K[K.ERR_FAILED_TO_OPEN_FILE=1800613]="ERR_FAILED_TO_OPEN_FILE",K[K.ERR_FAILED_TO_START_RECORDING=1800614]="ERR_FAILED_TO_START_RECORDING",K[K.ERR_FAILED_TO_STOP_RECORDING=1800615]="ERR_FAILED_TO_STOP_RECORDING",K[K.ERR_NOT_SUPPORTED_BROWSER_FOR_RECORDING=1800616]="ERR_NOT_SUPPORTED_BROWSER_FOR_RECORDING",K[K.ERR_INVALID_RECORDING_TYPE=1800617]="ERR_INVALID_RECORDING_TYPE",K[K.ERR_NOT_SUPPORTED_OS_VERSION_FOR_RECORDING=1800618]="ERR_NOT_SUPPORTED_OS_VERSION_FOR_RECORDING";function fr(e,t,n){(t=O(t))in e?M.f(e,t,l(0,n)):e[t]=n}var pr=function(){function e(){Un(this,e)}return Fn(e,null,[{key:"getErrorMessage",value:function(e){var t=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).invalidParameter,n=void 0===t?"":t;switch(e){case An.DIAL_CANCELED:return"Call canceled before receiving a callback.";case An.MY_USER_ID_NOT_ALLOWED:return"The caller can't dial their own user ID.";case An.ERR_REQUEST_FAILED:return"The http request failed.";case An.ERR_WEBSOCKET_CONNECTION_NOT_OPENED:return"Websocket connection not established.";case An.ERR_WEBSOCKET_CONNECTION_FAILED:return"Websocket connection failed.";case An.ERR_NO_RESPONSE_DUE_TO_TIMEOUT:return"The request failed to receive a response due to timeout.";case An.ERR_REQUEST_FAILED_DUE_TO_WEBSOCKET_CONNECTION_LOST:return"The request failed because the websocket connection is lost.";case An.ERR_WRONG_RESPONSE:return"The response contains an unexpected object type of data.";case An.ERR_QUERY_IN_PROGRESS:return"The previous query is still in progress.";case An.INTERNAL_SERVER_ERROR:return"An internal server error has occurred.";case An.ERR_MALFORMED_DATA:return"The data format of the response is invalid.";case An.INVALID_PARAMETER_VALUE:return"".concat(n," is an invalid or empty value.");case An.INVALID_PARAMETER_TYPE:return"The data type of ".concat(n," is invalid.");case An.INSTANCE_NOT_INITIALIZED:return"SendBirdCall instance not initialized.";case An.USER_NOT_AUTHENTICATED:return"The user is not authenticated.";case An.CAMERA_ALREADY_SWITCHING:return"Camera is already switching.";case An.ERR_CAMERA_SWITCH:return"A camera switch error has occurred.";case An.ERR_CHANGING_AUDIO_DEVICE:return"An error occurred while changing audio device.";case An.ERR_CAPTURE_NOT_ALLOWED_ON_AUDIO_CALL:return"Capturing a video view isn't allowed while on an audio call.";case An.ERR_VIDEO_VIEW_NOT_READY:return"A video view isn't ready to be captured.";case An.ERR_VIDEO_CALL_NOT_CONNECTED_YET:return"A video call isn't connected yet therefore can't capture a video view.";case An.ERR_FAILED_TO_GET_IMAGE_FROM_VIDEO_STREAM:return"An error occurred while getting an image form the video stream.";case An.ERR_CALL_NOT_CONNECTED_YET:return"A call isn’t connected yet therefore can’t start media recording.";case An.ERR_WRONG_RECORDING_TYPE_FOR_AUDIO_CALL:return"A wrong recording type is selected in an audio call.";case An.ERR_RECORDING_ALREADY_IN_PROGRESS:return"An ongoing recording session is already in progress.";case An.ERR_FAILED_TO_OPEN_FILE:return"Couldn't open a recording file due to an error.";case An.ERR_FAILED_TO_START_RECORDING:return"Couldn't start a recording session due to an error.";case An.ERR_FAILED_TO_STOP_RECORDING:return"Coudln't stop a recording session due to an error.";case An.ERR_NOT_SUPPORTED_BROWSER_FOR_RECORDING:return"The browser doesn't support media recording.";case An.ERR_INVALID_RECORDING_TYPE:return"Invalid recording type is selected.";case An.ERR_NOT_SUPPORTED_OS_VERSION_FOR_RECORDING:return"The operating system version doesn't support media recording.";default:return""}}}]),e}(),$=X("navigator","userAgent")||"",q=N.process,Mt=q&&q.versions,_n=Mt&&Mt.v8;_n?Rr=(Cr=_n.split("."))[0]+Cr[1]:$&&(!(Cr=$.match(/Edge\/(\d+)/))||74<=Cr[1])&&(Cr=$.match(/Chrome\/(\d+)/))&&(Rr=Cr[1]);var vr=Rr&&+Rr,_r=ce("species"),C=function(t){return 51<=vr||!u(function(){var e=[];return(e.constructor={})[_r]=function(){return{foo:1}},1!==e[t](Boolean).foo})},yr=ce("isConcatSpreadable"),gr=9007199254740991,mr="Maximum allowed index exceeded",K=51<=vr||!u(function(){var e=[];return e[yr]=!1,e.concat()[0]!==e}),q=C("concat");ie({target:"Array",proto:!0,forced:!K||!q},{concat:function(e){for(var t,n,r,i=se(this),a=ue(i,0),o=0,s=-1,c=arguments.length;s<c;s++)if(function(e){if(!T(e))return!1;var t=e[yr];return void 0!==t?!!t:Ne(e)}(r=-1===s?i:arguments[s])){if(n=te(r.length),gr<o+n)throw TypeError(mr);for(t=0;t<n;t++,o++)t in r&&fr(a,o,r[t])}else{if(gr<=o)throw TypeError(mr);fr(a,o++,r)}return a.length=o,a}});var kr=Fe.map,Mt=C("map"),_n=e("map");ie({target:"Array",proto:!0,forced:!Mt||!_n},{map:function(e){return kr(this,e,1<arguments.length?arguments[1]:void 0)}});function Er(){var e=R(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}var Cr="toString",wr=RegExp.prototype,br=wr[Cr],Rr=u(function(){return"/a/b"!=br.call({source:"a",flags:"b"})}),K=br.name!=Cr;(Rr||K)&&he(RegExp.prototype,Cr,function(){var e=R(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in wr)?Er.call(e):n)},{unsafe:!0});var Ir,Ar="".repeat||function(e){var t=String(d(this)),n="",r=ee(e);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;0<r;(r>>>=1)&&(t+=t))1&r&&(n+=t);return n},Sr=Math.ceil,q=function(i){return function(e,t,n){var r=String(d(e)),e=r.length,n=void 0===n?" ":String(n),t=te(t);return t<=e||""==n?r:(e=t-e,(n=Ar.call(n,Sr(e/n.length))).length>e&&(n=n.slice(0,e)),i?r+n:n+r)}},Mt={start:q(!1),end:q(!0)},_n=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test($),Tr=Mt.start;ie({target:"String",proto:!0,forced:_n},{padStart:function(e){return Tr(this,e,1<arguments.length?arguments[1]:void 0)}}),(Rr=Ir=Ir||{}).VERBOSE="VERBOSE",Rr.DEBUG="DEBUG",Rr.INFO="INFO",Rr.WARNING="WARNING",Rr.ERROR="ERROR",Rr.NONE="NONE";var Or={VERBOSE:{level:-1,name:Ir.VERBOSE,public:!1},DEBUG:{level:1,name:Ir.DEBUG,public:!1},INFO:{level:2,name:Ir.INFO,public:!0},WARNING:{level:3,name:Ir.WARNING,public:!0},ERROR:{level:4,name:Ir.ERROR,public:!0},NONE:{level:100,name:Ir.NONE,public:!0}},Dr=Fe.some,K=i("some"),Cr=e("some");ie({target:"Array",proto:!0,forced:!K||!Cr},{some:function(e){return Dr(this,e,1<arguments.length?arguments[1]:void 0)}});function Nr(e){var t,n,r,i,a,o,s,c=O(e,!1);if("string"==typeof c&&2<c.length)if(43===(t=(c=Ur(c)).charCodeAt(0))||45===t){if(88===(e=c.charCodeAt(2))||120===e)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+c}for(a=(i=c.slice(2)).length,o=0;o<a;o++)if((s=i.charCodeAt(o))<48||r<s)return NaN;return parseInt(i,n)}return+c}var q="[\t\n\v\f\r                　\u2028\u2029\ufeff]",Lr=RegExp("^"+q+q+"*"),xr=RegExp(q+q+"*$"),Mt=function(t){return function(e){e=String(d(e));return 1&t&&(e=e.replace(Lr,"")),2&t&&(e=e.replace(xr,"")),e}},_n={start:Mt(1),end:Mt(2),trim:Mt(3)},Rr=Ce.f,Mr=x.f,Pr=M.f,Ur=_n.trim,Vr="Number",Fr=N[Vr],jr=Fr.prototype,Br=r(et(jr))==Vr;if(Oe(Vr,!Fr(" 0o1")||!Fr("0b1")||Fr("+0x1"))){for(var Gr,zr=function(e){var e=arguments.length<1?0:e,t=this;return t instanceof zr&&(Br?u(function(){jr.valueOf.call(t)}):r(t)!=Vr)?qt(new Fr(Nr(e)),t,zr):Nr(e)},Wr=L?Rr(Fr):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),qr=0;Wr.length>qr;qr++)D(Fr,Gr=Wr[qr])&&!D(zr,Gr)&&Pr(zr,Gr,Mr(Fr,Gr));(zr.prototype=jr).constructor=zr,he(N,Vr,zr)}ie({target:"Number",stat:!0},{isNaN:function(e){return e!=e}});K=u(function(){He(1)});ie({target:"Object",stat:!0,forced:K},{keys:function(e){return He(se(e))}});function Kr(e,t){var n;return void 0===(e=R(e).constructor)||null==(n=R(e)[$r])?t:ae(n)}function Hr(e){var t;ni.hasOwnProperty(e)&&(t=ni[e],delete ni[e],t())}function Yr(e){return function(){Hr(e)}}var Zr,Cr=N.Promise,$r=ce("species"),q=/(iphone|ipod|ipad).*applewebkit/i.test($),Qr="process"==r(N.process),Jr=N.location,Mt=N.setImmediate,_n=N.clearImmediate,Xr=N.process,Rr=N.MessageChannel,ei=N.Dispatch,ti=0,ni={},ri="onreadystatechange",K=function(e){Hr(e.data)},$=function(e){N.postMessage(e+"",Jr.protocol+"//"+Jr.host)};Mt&&_n||(Mt=function(e){for(var t=[],n=1;n<arguments.length;)t.push(arguments[n++]);return ni[++ti]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},Zr(ti),ti},_n=function(e){delete ni[e]},Qr?Zr=function(e){Xr.nextTick(Yr(e))}:ei&&ei.now?Zr=function(e){ei.now(Yr(e))}:Rr&&!q?(hi=(Rr=new Rr).port2,Rr.port1.onmessage=K,Zr=oe(hi.postMessage,hi,1)):N.addEventListener&&"function"==typeof postMessage&&!N.importScripts&&Jr&&"file:"!==Jr.protocol&&!u($)?(Zr=$,N.addEventListener("message",K,!1)):Zr=ri in n("script")?function(e){Ze.appendChild(n("script"))[ri]=function(){Ze.removeChild(this),Hr(e)}}:function(e){setTimeout(Yr(e),0)});var ii,ai,oi,si,ci,ui,li,di,hi={set:Mt,clear:_n},$=x.f,fi=hi.set,K=N.MutationObserver||N.WebKitMutationObserver,Mt=N.document,pi=N.process,_n=N.Promise,$=$(N,"queueMicrotask"),$=$&&$.value;$||(ii=function(){var e,t;for(Qr&&(e=pi.domain)&&e.exit();ai;){t=ai.fn,ai=ai.next;try{t()}catch(e){throw ai?si():oi=void 0,e}}oi=void 0,e&&e.enter()},si=!q&&!Qr&&K&&Mt?(ci=!0,ui=Mt.createTextNode(""),new K(ii).observe(ui,{characterData:!0}),function(){ui.data=ci=!ci}):_n&&_n.resolve?(li=_n.resolve(void 0),di=li.then,function(){di.call(li,ii)}):Qr?function(){pi.nextTick(ii)}:function(){fi.call(N,ii)});function vi(e){var n,r;this.promise=new e(function(e,t){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=e,r=t}),this.resolve=ae(n),this.reject=ae(r)}function _i(e,t){return R(e),T(t)&&t.constructor===e?t:((0,(e=Si.f(e)).resolve)(t),e.promise)}function yi(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}}function gi(e){var t;return!(!T(e)||"function"!=typeof(t=e.then))&&t}function mi(d,h){var f;d.notified||(d.notified=!0,f=d.reactions,Ai(function(){for(var e=d.value,t=1==d.state,n=0;f.length>n;){var r,i,a,o=f[n++],s=t?o.ok:o.fail,c=o.resolve,u=o.reject,l=o.domain;try{s?(t||(2===d.rejection&&Hi(d),d.rejection=1),!0===s?r=e:(l&&l.enter(),r=s(e),l&&(l.exit(),a=!0)),r===o.promise?u(Pi("Promise-chain cycle")):(i=gi(r))?i.call(r,c,u):c(r)):u(e)}catch(e){l&&!a&&l.exit(),u(e)}}d.reactions=[],d.notified=!1,h&&!d.rejection&&qi(d)}))}function ki(e,t,n){var r,i;Gi?((r=Ui.createEvent("Event")).promise=t,r.reason=n,r.initEvent(e,!1,!0),N.dispatchEvent(r)):r={promise:t,reason:n},!zi&&(i=N["on"+e])?i(r):e===Wi&&function(e,t){var n=N.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}("Unhandled promise rejection",n)}function Ei(t,n,r){return function(e){t(n,e,r)}}function Ci(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=2,mi(e,!0))}var wi,bi,Ri,Ii,Ai=$||function(e){e={fn:e,next:void 0};oi&&(oi.next=e),ai||(ai=e,si()),oi=e},Si={f:function(e){return new vi(e)}},Ti=hi.set,Oi=ce("species"),Di="Promise",Ni=de.get,Li=de.set,xi=de.getterFor(Di),Mi=Cr,Pi=N.TypeError,Ui=N.document,Vi=N.process,Fi=X("fetch"),ji=Si.f,Bi=ji,Gi=!!(Ui&&Ui.createEvent&&N.dispatchEvent),zi="function"==typeof PromiseRejectionEvent,Wi="unhandledrejection",q=Oe(Di,function(){if(!(z(Mi)!==String(Mi))){if(66===vr)return!0;if(!Qr&&!zi)return!0}if(51<=vr&&/native code/.test(Mi))return!1;function e(e){e(function(){},function(){})}var t=Mi.resolve(1);return(t.constructor={})[Oi]=e,!(t.then(function(){})instanceof e)}),Mt=q||!Wt(function(e){Mi.all(e).catch(function(){})}),qi=function(i){Ti.call(N,function(){var e,t=i.facade,n=i.value,r=Ki(i);if(r&&(e=yi(function(){Qr?Vi.emit("unhandledRejection",n,t):ki(Wi,t,n)}),i.rejection=Qr||Ki(i)?2:1,e.error))throw e.value})},Ki=function(e){return 1!==e.rejection&&!e.parent},Hi=function(t){Ti.call(N,function(){var e=t.facade;Qr?Vi.emit("rejectionHandled",e):ki("rejectionhandled",e,t.value)})},Yi=function(n,e,t){if(!n.done){n.done=!0,t&&(n=t);try{if(n.facade===e)throw Pi("Promise can't be resolved itself");var r=gi(e);r?Ai(function(){var t={done:!1};try{r.call(e,Ei(Yi,t,n),Ei(Ci,t,n))}catch(e){Ci(t,e,n)}}):(n.value=e,n.state=1,mi(n,!1))}catch(e){Ci({done:!1},e,n)}}};function Zi(e,t){return RegExp(e,t)}q&&(Mi=function(e){xt(this,Mi,Di),ae(e),wi.call(this);var t=Ni(this);try{e(Ei(Yi,t),Ei(Ci,t))}catch(e){Ci(t,e)}},(wi=function(e){Li(this,{type:Di,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=Kt(Mi.prototype,{then:function(e,t){var n=xi(this),r=ji(Kr(this,Mi));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=Qr?Vi.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&mi(n,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),bi=function(){var e=new wi,t=Ni(e);this.promise=e,this.resolve=Ei(Yi,t),this.reject=Ei(Ci,t)},Si.f=ji=function(e){return e===Mi||e===Ri?new bi:Bi(e)},"function"==typeof Cr&&(Ii=Cr.prototype.then,he(Cr.prototype,"then",function(e,t){var n=this;return new Mi(function(e,t){Ii.call(n,e,t)}).then(e,t)},{unsafe:!0}),"function"==typeof Fi&&ie({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return _i(Mi,Fi.apply(N,arguments))}}))),ie({global:!0,wrap:!0,forced:q},{Promise:Mi}),st(Mi,Di,!1),Ht(Di),Ri=X(Di),ie({target:Di,stat:!0,forced:q},{reject:function(e){var t=ji(this);return t.reject.call(void 0,e),t.promise}}),ie({target:Di,stat:!0,forced:q},{resolve:function(e){return _i(this,e)}}),ie({target:Di,stat:!0,forced:Mt},{all:function(e){var s=this,t=ji(s),c=t.resolve,u=t.reject,n=yi(function(){var r=ae(s.resolve),i=[],a=0,o=1;Lt(e,function(e){var t=a++,n=!1;i.push(void 0),o++,r.call(s,e).then(function(e){n||(n=!0,i[t]=e,--o||c(i))},u)}),--o||c(i)});return n.error&&u(n.value),t.promise},race:function(e){var n=this,r=ji(n),i=r.reject,t=yi(function(){var t=ae(n.resolve);Lt(e,function(e){t.call(n,e).then(r.resolve,i)})});return t.error&&i(t.value),r.promise}});var K={UNSUPPORTED_Y:u(function(){var e=Zi("a","y");return e.lastIndex=2,null!=e.exec("abcd")}),BROKEN_CARET:u(function(){var e=Zi("^r","gy");return e.lastIndex=2,null!=e.exec("str")})},$i=RegExp.prototype.exec,Qi=String.prototype.replace,_n=$i,Ji=($=/a/,hi=/b*/g,$i.call($,"a"),$i.call(hi,"a"),0!==$.lastIndex||0!==hi.lastIndex),Xi=K.UNSUPPORTED_Y||K.BROKEN_CARET,ea=void 0!==/()??/.exec("")[1];(Ji||ea||Xi)&&(_n=function(e){var t,n,r,i,a=this,o=Xi&&a.sticky,s=Er.call(a),c=a.source,u=0,l=e;return o&&(-1===(s=s.replace("y","")).indexOf("g")&&(s+="g"),l=String(e).slice(a.lastIndex),0<a.lastIndex&&(!a.multiline||a.multiline&&"\n"!==e[a.lastIndex-1])&&(c="(?: "+c+")",l=" "+l,u++),n=new RegExp("^(?:"+c+")",s)),ea&&(n=new RegExp("^"+c+"$(?!\\s)",s)),Ji&&(t=a.lastIndex),r=$i.call(o?n:a,l),o?r?(r.input=r.input.slice(u),r[0]=r[0].slice(u),r.index=a.lastIndex,a.lastIndex+=r[0].length):a.lastIndex=0:Ji&&r&&(a.lastIndex=a.global?r.index+r[0].length:t),ea&&r&&1<r.length&&Qi.call(r[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r});var ta=_n;ie({target:"RegExp",proto:!0,forced:/./.exec!==ta},{exec:ta});function na(e,t,n){return t+(n?ua(e,t).length:1)}function ra(e,t){var n=e.exec;if("function"==typeof n){n=n.call(e,t);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return ta.call(e,t)}var ia=ce("species"),aa=!u(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),oa="$0"==="a".replace(/./,"$0"),Cr=ce("replace"),sa=!!/./[Cr]&&""===/./[Cr]("a","$0"),ca=!u(function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};e="ab".split(e);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}),q=function(n,e,t,r){var a,i,o=ce(n),s=!u(function(){var e={};return e[o]=function(){return 7},7!=""[n](e)}),c=s&&!u(function(){var e=!1,t=/a/;return"split"===n&&((t={constructor:{}}).constructor[ia]=function(){return t},t.flags="",t[o]=/./[o]),t.exec=function(){return e=!0,null},t[o](""),!e});s&&c&&("replace"!==n||aa&&oa&&!sa)&&("split"!==n||ca)||(a=/./[o],t=(c=t(o,""[n],function(e,t,n,r,i){return t.exec===ta?s&&!i?{done:!0,value:a.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}},{REPLACE_KEEPS_$0:oa,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:sa}))[0],i=c[1],he(String.prototype,n,t),he(RegExp.prototype,o,2==e?function(e,t){return i.call(e,this,t)}:function(e){return i.call(e,this)})),r&&P(RegExp.prototype[o],"sham",!0)},ua=yn.charAt;q("match",1,function(r,c,u){return[function(e){var t=d(this),n=null==e?void 0:e[r];return void 0!==n?n.call(e,t):new RegExp(e)[r](String(t))},function(e){var t=u(c,e,this);if(t.done)return t.value;var n=R(e),r=String(this);if(!n.global)return ra(n,r);for(var i=n.unicode,a=[],o=n.lastIndex=0;null!==(s=ra(n,r));){var s=String(s[0]);""===(a[o]=s)&&(n.lastIndex=na(r,te(n.lastIndex),i)),o++}return 0===o?null:a}]});var la=Math.max,da=Math.min,ha=Math.floor,fa=/\$([$&'`]|\d\d?|<[^>]*>)/g,pa=/\$([$&'`]|\d\d?)/g;q("replace",2,function(i,k,E,e){var C=e.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,w=e.REPLACE_KEEPS_$0,b=C?"$":"$0";return[function(e,t){var n=d(this),r=null==e?void 0:e[i];return void 0!==r?r.call(e,n,t):k.call(String(n),e,t)},function(e,t){if(!C&&w||"string"==typeof t&&-1===t.indexOf(b)){var n=E(k,e,this,t);if(n.done)return n.value}var r=R(e),i=String(this),a="function"==typeof t;a||(t=String(t));var o,s=r.global;s&&(o=r.unicode,r.lastIndex=0);for(var c=[];;){var u=ra(r,i);if(null===u)break;if(c.push(u),!s)break;""===String(u[0])&&(r.lastIndex=na(i,te(r.lastIndex),o))}for(var l,d="",h=0,f=0;f<c.length;f++){u=c[f];for(var p=String(u[0]),v=la(da(ee(u.index),i.length),0),_=[],y=1;y<u.length;y++)_.push(void 0===(l=u[y])?l:String(l));var g,m=u.groups,m=a?(g=[p].concat(_,v,i),void 0!==m&&g.push(m),String(t.apply(void 0,g))):function(a,o,s,c,u,e){var l=s+a.length,d=c.length,t=pa;void 0!==u&&(u=se(u),t=fa);return k.call(e,t,function(e,t){var n;switch(t.charAt(0)){case"$":return"$";case"&":return a;case"`":return o.slice(0,s);case"'":return o.slice(l);case"<":n=u[t.slice(1,-1)];break;default:var r=+t;if(0==r)return e;if(d<r){var i=ha(r/10);return 0===i?e:i<=d?void 0===c[i-1]?t.charAt(1):c[i-1]+t.charAt(1):e}n=c[r-1]}return void 0===n?"":n})}(p,i,v,_,m,t);h<=v&&(d+=i.slice(h,v)+m,h=v+p.length)}return d+i.slice(h)}]});var va=function(){zn(a,Yn(Error));var i=Qn(a);function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.message,r=t.error,t=Zn(t,["message","error"]);Un(this,a);t=n||pr.getErrorMessage(e,t);return(t=i.call(this,t)).code=e,t._error=r,t}return a}(),_a=function(){zn(t,va);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return t}();function ya(e){return function(t){e.then(function(e){return t(e)},function(e){return t(null,e)})}}function ga(t,e){if(Object.keys(t).some(function(e){return"string"!=typeof t[e]})){var n=Promise.reject(new _a(An.INVALID_PARAMETER_TYPE));return e&&ya(n)(e),[!1,n]}return[!0]}function ma(e,t){if(e.some(function(e){return"string"!=typeof e})){e=Promise.reject(new _a(An.INVALID_PARAMETER_TYPE));return t&&ya(e)(t),[!1,e]}return[!0]}function ka(e,t,n){return(t=e.match(t))&&t.length>=n&&parseInt(t[n],10)}function Ea(e,t,n){ba(e)&&n.delete(t)}var Ca,wa,ba=function(e){return void 0===e||Number.isNaN(e)||""===e||e===[]},Ra=new(function(){function e(){Un(this,e),this.level=Ir.NONE}return Fn(e,[{key:"setLoggerLevel",value:function(e){var t;return null!==(t=Or[e])&&void 0!==t&&t.public&&(this.level=e),this.level}},{key:"verbose",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._permit.apply(this,[Ir.VERBOSE].concat(t))}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._permit.apply(this,[Ir.DEBUG].concat(t))}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._permit.apply(this,[Ir.INFO].concat(t))}},{key:"warning",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._permit.apply(this,[Ir.WARNING].concat(t))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._permit.apply(this,[Ir.ERROR].concat(t))}},{key:"_enabledFor",value:function(e){try{return Or[this.level].level<=Or[e].level}catch(e){return!1}}},{key:"_getLogType",value:function(e){switch(e){case Ir.ERROR:return"error";case Ir.WARNING:return"warn";default:return"log"}}},{key:"_getTimeString",value:function(e){var t=e.getFullYear().toString().padStart(2,"0"),n=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getDate().toString().padStart(2,"0"),i=e.getHours().toString().padStart(2,"0"),a=e.getMinutes().toString().padStart(2,"0"),o=e.getSeconds().toString().padStart(2,"0"),e=e.getMilliseconds().toString().padStart(2,"0");return"[".concat(t,".").concat(n,".").concat(r," ").concat(i,":").concat(a,":").concat(o,":").concat(e,"]")}},{key:"_permit",value:function(e){for(var t,n,r=this._getLogType(e),i=new Date,a=arguments.length,o=new Array(1<a?a-1:0),s=1;s<a;s++)o[s-1]=arguments[s];this._enabledFor(e)&&console&&console[r]&&(n="".concat(this._getTimeString(i)," [").concat(e,"]"),(t=console)[r].apply(t,[n].concat(o))),this._logCollector&&(e={logDt:i.getTime(),logLevel:e,logMessage:this._makeSDKLogMessage.apply(this,o)},this._logCollector.addLog(e))}},{key:"_makeSDKLogMessage",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.map(function(e){return JSON.stringify(e)});return r.toString().replace(/"access_token":".*?"/gm,'"access_token":"*************"').replace(/"password":".*?"/gm,'"password":"*************"').replace(/"sbcall_session_token":".*?"/gm,'"sbcall_session_token":"*************"').replace(/"turn_urls":\[".*?"\]/gm,'"turn_urls":"[*************]"').replace(/(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/gm,"*************").replace(/((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}/gm,"*************")}},{key:"logCollector",set:function(e){this._logCollector=e}}]),e}()),Ia=function(){zn(t,va);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return t}(),Aa=function(){function t(e){Un(this,t);e=Gn(Gn({},t.default),e);this.localMediaView=e.localMediaView,this.remoteMediaView=e.remoteMediaView,this.videoEnabled=e.videoEnabled,this.audioEnabled=e.audioEnabled,this.videoWidth=e.videoWidth,this.videoHeight=e.videoHeight,this.videoFps=e.videoFps,this.frontCamera=e.frontCamera}return Fn(t,null,[{key:"default",get:function(){return{localMediaView:null,remoteMediaView:null,audioEnabled:!0,videoEnabled:!0,videoWidth:null,videoHeight:null,videoFps:null,frontCamera:!0}}}]),t}();(Mt=Ca=Ca||{}).NO_ANSWER="no_answer",Mt.CANCELED="canceled",Mt.DECLINED="declined",Mt.OTHER_DEVICE_ACCEPTED="other_device_accepted",Mt.COMPLETED="completed",Mt.CONNECTION_LOST="connection_lost",Mt.TIMED_OUT="timed_out",Mt.DIAL_FAILED="dial_failed",Mt.ACCEPT_FAILED="accept_failed",Mt.UNKNOWN="unknown",($=wa=wa||{}).CALLER="dc_caller",$.CALLEE="dc_callee";var Sa=Math.min,Ta=[].lastIndexOf,Oa=!!Ta&&1/[1].lastIndexOf(1,-0)<0,hi=i("lastIndexOf"),K=e("indexOf",{ACCESSORS:!0,1:0}),Da=Oa||!hi||!K?function(e){if(Oa)return Ta.apply(this,arguments)||0;var t=h(this),n=te(t.length),r=n-1;for(1<arguments.length&&(r=Sa(r,ee(arguments[1]))),r<0&&(r=n+r);0<=r;r--)if(r in t&&t[r]===e)return r||0;return-1}:Ta;ie({target:"Array",proto:!0,forced:Da!==[].lastIndexOf},{lastIndexOf:Da});function Na(e){var t;return T(e)&&(void 0!==(t=e[xa])?!!t:"RegExp"==r(e))}var La,xa=ce("match"),Ma=[].push,Pa=Math.min,Ua=4294967295,Va=!u(function(){return!RegExp(Ua,"y")});q("split",2,function(i,p,v){var _="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||1<".".split(/()()/).length||"".split(/.?/).length?function(e,t){var n=String(d(this)),r=void 0===t?Ua:t>>>0;if(0==r)return[];if(void 0===e)return[n];if(!Na(e))return p.call(n,e,r);for(var i,a,o,s=[],t=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),c=0,u=new RegExp(e.source,t+"g");(i=ta.call(u,n))&&!(c<(a=u.lastIndex)&&(s.push(n.slice(c,i.index)),1<i.length&&i.index<n.length&&Ma.apply(s,i.slice(1)),o=i[0].length,c=a,s.length>=r));)u.lastIndex===i.index&&u.lastIndex++;return c===n.length?!o&&u.test("")||s.push(""):s.push(n.slice(c)),s.length>r?s.slice(0,r):s}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:p.call(this,e,t)}:p;return[function(e,t){var n=d(this),r=null==e?void 0:e[i];return void 0!==r?r.call(e,n,t):_.call(String(n),e,t)},function(e,t){var n=v(_,e,this,t,_!==p);if(n.done)return n.value;var r=R(e),i=String(this),n=Kr(r,RegExp),a=r.unicode,e=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(Va?"y":"g"),o=new n(Va?r:"^(?:"+r.source+")",e),s=void 0===t?Ua:t>>>0;if(0==s)return[];if(0===i.length)return null===ra(o,i)?[i]:[];for(var c=0,u=0,l=[];u<i.length;){o.lastIndex=Va?u:0;var d,h=ra(o,Va?i:i.slice(u));if(null===h||(d=Pa(te(o.lastIndex+(Va?0:u)),i.length))===c)u=na(i,u,a);else{if(l.push(i.slice(c,u)),l.length===s)return l;for(var f=1;f<=h.length-1;f++)if(l.push(h[f]),l.length===s)return l;u=c=d}}return l.push(i.slice(c)),l}]},!Va),(_n=La=La||{}).REMOTE_AUDIO_AND_VIDEO="remote_audio_and_video",_n.REMOTE_AUDIO_ONLY="remote_audio_only",_n.LOCAL_REMOTE_AUDIOS="local_remote_audios",_n.LOCAL_AUDIO_REMOTE_AUDIO_AND_VIDEO="local_audio_remote_audio_and_video",_n.LOCAL_AUDIO_AND_VIDEO_REMOTE_AUDIO="local_audio_and_video_remote_audio";var Fa,ja=function(){function t(e){Un(this,t),this.recordingType=e.recordingType,this.callId=e.callId,e.fileName?"mp4"!==e.fileName.toLocaleLowerCase().split(".").reverse()[0]?this.fileName="".concat(e.fileName,".mp4"):this.fileName=e.fileName:this.fileName=t.defaultFileName(this.recordingType,this.callId)}return Fn(t,[{key:"isVideo",get:function(){return this.recordingType===La.LOCAL_AUDIO_AND_VIDEO_REMOTE_AUDIO||this.recordingType===La.LOCAL_AUDIO_REMOTE_AUDIO_AND_VIDEO||this.recordingType===La.REMOTE_AUDIO_AND_VIDEO}}],[{key:"defaultFileName",value:function(e,t){var n=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString(),r=(n=n.replace(/-|:/g,"")).lastIndexOf(".");return"".concat(e,"_").concat(t,"_").concat(n.substring(0,r),".mp4")}}]),t}();t(function(e){var t=function(o){var c,e=Object.prototype,u=e.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},r=t.iterator||"@@iterator",n=t.asyncIterator||"@@asyncIterator",i=t.toStringTag||"@@toStringTag";function a(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(e){a=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var i,a,o,s,t=t&&t.prototype instanceof _?t:_,t=Object.create(t.prototype),r=new R(r||[]);return t._invoke=(i=e,a=n,o=r,s=d,function(e,t){if(s===f)throw new Error("Generator is already running");if(s===p){if("throw"===e)throw t;return A()}for(o.method=e,o.arg=t;;){var n=o.delegate;if(n){var r=function e(t,n){var r=t.iterator[n.method];if(r===c){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=c,e(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}r=l(r,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,v;var r=r.arg;if(!r)return n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v;{if(!r.done)return r;n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=c)}n.delegate=null;return v}(n,o);if(r){if(r===v)continue;return r}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===d)throw s=p,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=f;r=l(i,a,o);if("normal"===r.type){if(s=o.done?p:h,r.arg!==v)return{value:r.arg,done:o.done}}else"throw"===r.type&&(s=p,o.method="throw",o.arg=r.arg)}}),t}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}o.wrap=s;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",v={};function _(){}function y(){}function g(){}var m={};m[r]=function(){return this};t=Object.getPrototypeOf,t=t&&t(t(I([])));t&&t!==e&&u.call(t,r)&&(m=t);var k=g.prototype=_.prototype=Object.create(m);function E(e){["next","throw","return"].forEach(function(t){a(e,t,function(e){return this._invoke(t,e)})})}function C(o,s){var t;this._invoke=function(n,r){function e(){return new s(function(e,t){!function t(e,n,r,i){e=l(o[e],o,n);if("throw"!==e.type){var a=e.arg,n=a.value;return n&&"object"==typeof n&&u.call(n,"__await")?s.resolve(n.__await).then(function(e){t("next",e,r,i)},function(e){t("throw",e,r,i)}):s.resolve(n).then(function(e){a.value=e,r(a)},function(e){return t("throw",e,r,i)})}i(e.arg)}(n,r,e,t)})}return t=t?t.then(e,e):e()}}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function b(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function I(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,e=function e(){for(;++n<t.length;)if(u.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=c,e.done=!0,e};return e.next=e}}return{next:A}}function A(){return{value:c,done:!0}}return((y.prototype=k.constructor=g).constructor=y).displayName=a(g,i,"GeneratorFunction"),o.isGeneratorFunction=function(e){e="function"==typeof e&&e.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},o.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,a(e,i,"GeneratorFunction")),e.prototype=Object.create(k),e},o.awrap=function(e){return{__await:e}},E(C.prototype),C.prototype[n]=function(){return this},o.AsyncIterator=C,o.async=function(e,t,n,r,i){void 0===i&&(i=Promise);var a=new C(s(e,t,n,r),i);return o.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),a(k,i,"Generator"),k[r]=function(){return this},k.toString=function(){return"[object Generator]"},o.keys=function(n){var e,r=[];for(e in n)r.push(e);return r.reverse(),function e(){for(;r.length;){var t=r.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},o.values=I,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(b),!e)for(var t in this)"t"===t.charAt(0)&&u.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=c)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,t){return a.type="throw",a.arg=n,r.next=e,t&&(r.method="next",r.arg=c),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var i=this.tryEntries[t],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var o=u.call(i,"catchLoc"),s=u.call(i,"finallyLoc");if(o&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&u.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),b(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r,i=n.completion;return"throw"===i.type&&(r=i.arg,b(n)),r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:I(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=c),v}},o}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}});(Cr=Fa=Fa||{}).DIALING="DIALING",Cr.RINGING="RINGING",Cr.RECONNECTING="RECONNECTING",Cr.RECONNECTED="RECONNECTED";var Ba,Ga,za=function(){function e(){Un(this,e),this.audioElms=new Map}var t,n;return Fn(e,[{key:"loadSound",value:(n=Pn(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("string"==typeof n&&n){e.next=2;break}return e.abrupt("return",!1);case 2:return(r=this._createAudio(t)).src=n,e.prev=4,e.next=7,r.play();case 7:r.pause(),r.currentTime=0,this.audioElms.set(t,r),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(4),Ra.error(e.t0),e.abrupt("return",!1);case 16:return e.abrupt("return",!0);case 17:case"end":return e.stop()}},e,this,[[4,12]])})),function(e,t){return n.apply(this,arguments)})},{key:"unloadSound",value:function(e){return!!this.audioElms.get(e)&&this.audioElms.delete(e)}},{key:"playSound",value:(t=Pn(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.audioElms.get(t)){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,n.play();case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(3),Ra.error(e.t0),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}},e,this,[[3,8]])})),function(e){return t.apply(this,arguments)})},{key:"stopSound",value:function(e){e=this.audioElms.get(e);return!!e&&e.pause()}},{key:"stopAllSound",value:function(){var e,t=ar(this.audioElms.values());try{for(t.s();!(e=t.n()).done;)e.value.pause()}catch(e){t.e(e)}finally{t.f()}}},{key:"isPlaying",value:function(e){e=this.audioElms.get(e);return e&&!e.paused}},{key:"_isLoop",value:function(e){return e===Fa.DIALING||e===Fa.RINGING}},{key:"_createAudio",value:function(e){var t=new Audio;return t.autoplay=!1,t.muted=!1,t.loop=this._isLoop(e),t}}]),e}();(Mt=Ba=Ba||{}).INFO="INFO",Mt.WARNING="WARNING",Mt.ERROR="ERROR",Mt.NONE="NONE",($=Ga=Ga||{}).RECORDING="recording",$.NONE="none";var Wa=a.indexOf,qa=[].indexOf,Ka=!!qa&&1/[1].indexOf(1,-0)<0,hi=i("indexOf"),K=e("indexOf",{ACCESSORS:!0,1:0});function Ha(a){return function(r){var i=r.descriptor.value;return r.descriptor.value=function(){if(Ha.checkIE())throw new Error(null!=a?a:"Method ".concat(r.key," is not supported in Internet Explorer"));for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.call.apply(i,[this].concat(t))},r}}ie({target:"Array",proto:!0,forced:Ka||!hi||!K},{indexOf:function(e){return Ka?qa.apply(this,arguments)||0:Wa(this,e,1<arguments.length?arguments[1]:void 0)}}),Ha.checkIE=function(){return!!window&&(0<window.navigator.userAgent.indexOf("MSIE ")||!!navigator.userAgent.match(/Trident.*rv:11\./))},Ha.messages={CALL_IS_NOT_SUPPORTED:"Call is not supported in Internet Explorer"};var Ya="1.5.1";for(var Za,$a=(function(e){var t,n,r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);r?(t=new Uint8Array(16),e.exports=function(){return r(t),t}):(n=new Array(16),e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n})}(Za={exports:{}}),Za.exports),Qa=[],Ja=0;Ja<256;++Ja)Qa[Ja]=(Ja+256).toString(16).substr(1);var Xa=function(e,t){return t=t||0,[Qa[e[t++]],Qa[e[t++]],Qa[e[t++]],Qa[e[t++]],"-",Qa[e[t++]],Qa[e[t++]],"-",Qa[e[t++]],Qa[e[t++]],"-",Qa[e[t++]],Qa[e[t++]],"-",Qa[e[t++]],Qa[e[t++]],Qa[e[t++]],Qa[e[t++]],Qa[e[t++]],Qa[e[t++]]].join("")};var eo=function(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||$a)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var a=0;a<16;++a)t[r+a]=i[a];return t||Xa(i)},to=function(){zn(t,va);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return t}(),no=Fe.filter,q=C("filter"),_n=e("filter");ie({target:"Array",proto:!0,forced:!q||!_n},{filter:function(e){return no(this,e,1<arguments.length?arguments[1]:void 0)}});function ro(){Un(this,ro)}var io=function(){zn(t,ro);var e=Qn(t);function t(){return Un(this,t),e.call(this)}return Fn(t,[{key:"getApiOption",value:function(){return{auth:this.getAuth(),path:this.getPath(),method:this.getMethod(),body:this.getData(),headers:this.getHeaders()}}},{key:"getAuth",value:function(){return!0}},{key:"getHeaders",value:function(){return{}}}]),t}(),ao=function(){zn(r,io);var n=Qn(r);function r(e){var t;return Un(this,r),(t=n.call(this)).stats=e,t}return Fn(r,[{key:"getData",value:function(){return{log_group:"sdk_webrtc_statistics_v1.1",log_data:this.stats}}},{key:"getPath",value:function(){return"/v1/sdk/logs"}},{key:"getMethod",value:function(){return"POST"}}]),r}(),oo=function(){zn(i,io);var r=Qn(i);function i(e,t){var n;return Un(this,i),(n=r.call(this)).version=1,n.isOverflowLogs=t,n.logs=e,n}return Fn(i,[{key:"getData",value:function(){return{version:this.version,is_overflow_logs:this.isOverflowLogs,logs:this.getLogsData()}}},{key:"getPath",value:function(){return"/v1/sdk/debug_logs"}},{key:"getMethod",value:function(){return"POST"}},{key:"getLogsData",value:function(){return this.logs.map(function(e){return{log_dt:e.logDt,log_level:e.logLevel,log_message:e.logMessage}})}}]),i}(),so=function(){zn(a,io);var i=Qn(a);function a(e,t,n){var r;return Un(this,a),(r=i.call(this)).appId=e,r.userId=t,r.accessToken=n,r}return Fn(a,[{key:"getAuth",value:function(){return!1}},{key:"getData",value:function(){return{app_id:this.appId,user_id:this.userId,access_token:this.accessToken}}},{key:"getPath",value:function(){return"/v1/users/".concat(encodeURIComponent(this.userId),"/login")}},{key:"getMethod",value:function(){return"POST"}}]),a}(),co=[].join,Cr=k!=Object,Mt=i("join",",");ie({target:"Array",proto:!0,forced:Cr||!Mt},{join:function(e){return co.call(h(this),void 0===e?",":e)}});var uo,lo,ho,fo=function(){function e(){Un(this,e)}return Fn(e,null,[{key:"createQuery",value:function(t){var n=this;return Object.keys(t).filter(function(e){return null!=t[e]}).map(function(e){return"".concat(encodeURIComponent(e),"=").concat(n.toQueryParam(t[e]))}).join("&")}},{key:"toQueryParam",value:function(e){return Array.isArray(e)?e.map(function(e){return encodeURIComponent(e.toString())}).join(","):encodeURIComponent(e.toString())}}]),e}(),po=function(){zn(a,io);var i=Qn(a);function a(e,t,n){var r;return Un(this,a),(r=i.call(this)).userId=e,r.params=t,r.next=n,r}return Fn(a,[{key:"getData",value:function(){}},{key:"getPath",value:function(){return"/v1/users/".concat(encodeURIComponent(this.userId),"/calls?").concat(this._createQuery())}},{key:"getMethod",value:function(){return"GET"}},{key:"_createQuery",value:function(){var e;return fo.createQuery({role:this.params.myRole,limit:this._applyLimitConstraints(null===(e=this.params)||void 0===e?void 0:e.limit),end_result:this.params.endResults,next:this.next})}},{key:"_applyLimitConstraints",value:function(e){return null!=e?Math.min(Math.max(e,10),100):void 0}}]),a}(),vo=function(){zn(r,io);var n=Qn(r);function r(e){var t;return Un(this,r),(t=n.call(this)).callId=e,t}return Fn(r,[{key:"getPath",value:function(){return"/v1/direct_calls".concat(this.getSubPath())}}]),r}();($=uo=uo||{}).CALL="CALL",$.SGNL="SGNL",$.COMM="COMM",$.UTIL="UTIL",(hi=lo=lo||{})[hi.WS=0]="WS",hi[hi.API=1]="API",hi[hi.BOTH=2]="BOTH",(K={}).API="api",K.CMD_RETRIEVING="cmd_retrieving",K.WEBHOOK="webhook",K.WS="ws",K.PUSH="push",(q=ho=ho||{}).REMOTE_PUSH="remote_push",q.VOIP_PUSH="voip_push",q.WEBHOOK="webhook",q.WS="ws";var _o,yo=function(){zn(n,ro);var t=Qn(n);function n(){var e;return Un(this,n),(e=t.call(this)).version=1,e.requestId=eo(),e}return Fn(n,[{key:"getApiOption",value:function(){return{auth:!0,path:"/v1/action/direct_call",method:"POST",headers:this.getHeaders(),body:{version:this.version,request_id:this.requestId,cmd:this.getCMD(),type:this.getType(),payload:this.getData()}}}},{key:"serialize",value:function(){return JSON.stringify({version:this.version,request_id:this.requestId,cmd:this.getCMD(),type:this.getType(),payload:this.getData()})}},{key:"requireResponse",value:function(){return!1}},{key:"getHeaders",value:function(){return{}}},{key:"sendStrategy",get:function(){return lo.WS}}]),n}(),go=function(){zn(r,ro);var n=Qn(r);function r(e){var t;return Un(this,r),(t=n.call(this)).cmd=e.cmd,t.type=e.type,t.payload=e.payload||{},t}return r}(),mo=function(){zn(t,go);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return Fn(t,[{key:"getCallId",value:function(){return this.payload.callId}}]),t}(),ko=function(){zn(r,ro);var n=Qn(r);function r(e){var t;return Un(this,r),(t=n.call(this)).version=e.version,t.messageId=e.message_id,t.cmd=e.cmd,t.type=e.type,t.deliveryInfo=e.delivery_info,t.sequenceNumber=e.sequence_number,t.payload=t.parseData(e.payload),t}return Fn(r,[{key:"getCallId",value:function(){return this.payload.callId}},{key:"isSequential",value:function(){return"number"==typeof this.sequenceNumber}}]),r}(),Eo=function(){zn(r,ro);var n=Qn(r);function r(e){var t;return Un(this,r),(t=n.call(this)).version=e.version,t.requestId=e.request_id,t.cmd=e.cmd,t.type=e.type,t.deliveryInfo=e.delivery_info,t.sequenceNumber=e.sequence_number,t.payload=t.parseData(e.payload),t}return Fn(r,[{key:"getCallId",value:function(){return this.payload.callId}},{key:"isSequential",value:function(){return"number"==typeof this.sequenceNumber}}]),r}(),Co=function(){zn(r,ro);var n=Qn(r);function r(e){var t;return Un(this,r),(t=n.call(this)).version=e.version,t.messageId=e.message_id,t.cmd=e.cmd,t.type=e.type,t.deliveryInfo=e.delivery_info,t.sequenceNumber=e.sequence_number,t.payload=t.parseData(e.payload),t}return Fn(r,[{key:"isSequential",value:function(){return"number"==typeof this.sequenceNumber}}]),r}(),wo=function(){zn(t,Co);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return Fn(t,[{key:"getCallId",value:function(){return this.payload.callId}}]),t}(),bo=function(){zn(r,vo);var n=Qn(r);function r(e){var t;return Un(this,r),(t=n.call(this,null)).callIds=e,t}return Fn(r,[{key:"requireResponse",value:function(){return!0}},{key:"getData",value:function(){}},{key:"getSubPath",value:function(){var e=this.callIds.join(",");return"/missed_signal?call_ids=".concat(encodeURIComponent(e))}},{key:"getMethod",value:function(){return"GET"}}]),r}(),Ro=function(){zn(t,vo);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return Fn(t,[{key:"getData",value:function(){return{}}},{key:"getSubPath",value:function(){return"/".concat(this.callId,"/custom_items")}},{key:"getMethod",value:function(){return"DELETE"}}]),t}(),Io=function(){zn(r,vo);var n=Qn(r);function r(e,t){return Un(this,r),(e=n.call(this,e)).keys=t,e}return Fn(r,[{key:"getData",value:function(){return{keys:this.keys}}},{key:"getSubPath",value:function(){return"/".concat(this.callId,"/custom_items")}},{key:"getMethod",value:function(){return"DELETE"}}]),r}(),Ao=function(){zn(r,vo);var n=Qn(r);function r(e,t){return Un(this,r),(e=n.call(this,e)).customItems=t,e}return Fn(r,[{key:"getData",value:function(){return{custom_items:this.customItems,mode:"upsert"}}},{key:"getSubPath",value:function(){return"/".concat(this.callId,"/custom_items")}},{key:"getMethod",value:function(){return"PUT"}}]),r}(),So=function(){zn(i,vo);var r=Qn(i);function i(e,t,n){return Un(this,i),(e=r.call(this,e)).userRole=t,e.callSummary=n,e}return Fn(i,[{key:"getData",value:function(){return{version:1,user_role:this.userRole,summary_data:this.callSummary}}},{key:"getSubPath",value:function(){return"/".concat(this.callId,"/summary")}},{key:"getMethod",value:function(){return"POST"}}]),i}();(_n=_o=_o||{}).DIAL="dial",_n.DIAL_ACK="dial_ack",_n.DIAL_RCV="dial_rcv",_n.CANCEL="cancel",_n.ACCEPT="accept",_n.ACCEPT_ACK="accept_ack",_n.OTHER_DEVICE_ACCEPTED="other_device_accepted",_n.DECLINE="decline",_n.DECLINE_ACK="decline_ack",_n.OFFER="offer",_n.ANSWER="answer",_n.CANDIDATE="candidate",_n.REMOVE_CANDIDATES="remove_candidates",_n.AUDIO="audio",_n.VIDEO="video",_n.CUSTOM_ITEMS_UPDATE="custom_items_update",_n.CUSTOM_ITEMS_DELETE="custom_items_delete",_n.RECORDING="recording",_n.END="end",_n.TIME_OUT="timeout",_n.CONNECTION_LOST="connection_lost",_n.UNKNOWN_END="unknown_end",_n.ALIVE="alive",_n.NO_ANSWER="no_answer",_n.CANCEL_ACK="cancel_ack",_n.END_ACK="end_ack",_n.TIMEOUT_ACK="timeout_ack",_n.NO_ANSWER_ACK="no_answer_ack",_n.CONNECTION_LOST_ACK="connection_lost_ack",_n.UNKNOWN_END_ACK="unknown_end_ack",_n.ALIVE_ACK="alive_ack",_n.CONNECTED="connected",_n.SNAPSHOT="snapshot",_n.TURN_CHANGED="turn_changed";var To=function(){zn(n,mo);var t=Qn(n);function n(e){return Un(this,n),jn($n(e=t.call(this,{type:_o.DECLINE_ACK,cmd:uo.SGNL,payload:e})),"type",_o.DECLINE_ACK),e}return n}(),Oo=function(){zn(n,mo);var t=Qn(n);function n(e){return Un(this,n),jn($n(e=t.call(this,{type:_o.SNAPSHOT,cmd:uo.SGNL,payload:e})),"type",_o.SNAPSHOT),e}return n}(),Do=function(){zn(a,ko);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.ACCEPT),e}return Fn(a,[{key:"parseData",value:function(e){return{callId:e.call_id,turnCredential:{username:e.turn_credential.username,password:e.turn_credential.password,turnUrls:e.turn_credential.turn_urls,transportPolicy:e.turn_credential.transport_policy},constraints:{audio:e.audio,video:e.video},capabilities:e.capabilities||[]}}}]),a}(),No=function(){zn(a,ko);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.OTHER_DEVICE_ACCEPTED),e}return Fn(a,[{key:"parseData",value:function(e){return{callId:e.call_id}}}]),a}(),Lo=t(function(e,t){var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;t.assign=function(e){for(var t,n,r=Array.prototype.slice.call(arguments,1);r.length;){var i=r.shift();if(i){if("object"!=typeof i)throw new TypeError(i+"must be non-object");for(var a in i)t=i,n=a,Object.prototype.hasOwnProperty.call(t,n)&&(e[a]=i[a])}}return e},t.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var r={arraySet:function(e,t,n,r,i){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+r),i);else for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){for(var t,n,r,i=0,a=0,o=e.length;a<o;a++)i+=e[a].length;for(r=new Uint8Array(i),a=t=0,o=e.length;a<o;a++)n=e[a],r.set(n,t),t+=n.length;return r}},i={arraySet:function(e,t,n,r,i){for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){return[].concat.apply([],e)}};t.setTyped=function(e){e?(t.Buf8=Uint8Array,t.Buf16=Uint16Array,t.Buf32=Int32Array,t.assign(t,r)):(t.Buf8=Array,t.Buf16=Array,t.Buf32=Array,t.assign(t,i))},t.setTyped(n)}),xo=(Lo.assign,Lo.shrinkBuf,Lo.setTyped,Lo.Buf8,Lo.Buf16,Lo.Buf32,0),Mo=1;function Po(e){for(var t=e.length;0<=--t;)e[t]=0}var Uo=0,Vo=29,Fo=256,jo=Fo+1+Vo,Bo=30,Go=19,zo=2*jo+1,Wo=15,qo=16,Ko=7,Ho=256,Yo=16,Zo=17,$o=18,Qo=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Jo=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Xo=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],es=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ts=new Array(2*(jo+2));Po(ts);var ns=new Array(2*Bo);Po(ns);var rs=new Array(512);Po(rs);var is=new Array(256);Po(is);var as=new Array(Vo);Po(as);var os,ss,cs,us=new Array(Bo);function ls(e,t,n,r,i){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=e&&e.length}function ds(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function hs(e){return e<256?rs[e]:rs[256+(e>>>7)]}function fs(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function ps(e,t,n){e.bi_valid>qo-n?(e.bi_buf|=t<<e.bi_valid&65535,fs(e,e.bi_buf),e.bi_buf=t>>qo-e.bi_valid,e.bi_valid+=n-qo):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)}function vs(e,t,n){ps(e,n[2*t],n[2*t+1])}function _s(e,t){for(var n=0;n|=1&e,e>>>=1,n<<=1,0<--t;);return n>>>1}function ys(e,t,n){for(var r,i=new Array(Wo+1),a=0,o=1;o<=Wo;o++)i[o]=a=a+n[o-1]<<1;for(r=0;r<=t;r++){var s=e[2*r+1];0!==s&&(e[2*r]=_s(i[s]++,s))}}function gs(e){for(var t=0;t<jo;t++)e.dyn_ltree[2*t]=0;for(t=0;t<Bo;t++)e.dyn_dtree[2*t]=0;for(t=0;t<Go;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*Ho]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function ms(e){8<e.bi_valid?fs(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function ks(e,t,n,r){var i=2*t,a=2*n;return e[i]<e[a]||e[i]===e[a]&&r[t]<=r[n]}function Es(e,t,n){for(var r=e.heap[n],i=n<<1;i<=e.heap_len&&(i<e.heap_len&&ks(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!ks(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r}function Cs(e,t,n){var r,i,a,o,s=0;if(0!==e.last_lit)for(;r=e.pending_buf[e.d_buf+2*s]<<8|e.pending_buf[e.d_buf+2*s+1],i=e.pending_buf[e.l_buf+s],s++,0==r?vs(e,i,t):(vs(e,(a=is[i])+Fo+1,t),0!==(o=Qo[a])&&ps(e,i-=as[a],o),vs(e,a=hs(--r),n),0!==(o=Jo[a])&&ps(e,r-=us[a],o)),s<e.last_lit;);vs(e,Ho,t)}function ws(e,v){var t,n,r,i=v.dyn_tree,a=v.stat_desc.static_tree,o=v.stat_desc.has_stree,s=v.stat_desc.elems,c=-1;for(e.heap_len=0,e.heap_max=zo,t=0;t<s;t++)0!==i[2*t]?(e.heap[++e.heap_len]=c=t,e.depth[t]=0):i[2*t+1]=0;for(;e.heap_len<2;)i[2*(r=e.heap[++e.heap_len]=c<2?++c:0)]=1,e.depth[r]=0,e.opt_len--,o&&(e.static_len-=a[2*r+1]);for(v.max_code=c,t=e.heap_len>>1;1<=t;t--)Es(e,i,t);for(r=s;t=e.heap[1],e.heap[1]=e.heap[e.heap_len--],Es(e,i,1),n=e.heap[1],e.heap[--e.heap_max]=t,e.heap[--e.heap_max]=n,i[2*r]=i[2*t]+i[2*n],e.depth[r]=(e.depth[t]>=e.depth[n]?e.depth[t]:e.depth[n])+1,i[2*t+1]=i[2*n+1]=r,e.heap[1]=r++,Es(e,i,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e){for(var t,n,r,i,a,o=v.dyn_tree,s=v.max_code,c=v.stat_desc.static_tree,u=v.stat_desc.has_stree,l=v.stat_desc.extra_bits,d=v.stat_desc.extra_base,h=v.stat_desc.max_length,f=0,p=0;p<=Wo;p++)e.bl_count[p]=0;for(o[2*e.heap[e.heap_max]+1]=0,t=e.heap_max+1;t<zo;t++)h<(p=o[2*o[2*(n=e.heap[t])+1]+1]+1)&&(p=h,f++),o[2*n+1]=p,s<n||(e.bl_count[p]++,i=0,d<=n&&(i=l[n-d]),a=o[2*n],e.opt_len+=a*(p+i),u&&(e.static_len+=a*(c[2*n+1]+i)));if(0!==f){do{for(p=h-1;0===e.bl_count[p];)p--}while(e.bl_count[p]--,e.bl_count[p+1]+=2,e.bl_count[h]--,0<(f-=2));for(p=h;0!==p;p--)for(n=e.bl_count[p];0!==n;)s<(r=e.heap[--t])||(o[2*r+1]!==p&&(e.opt_len+=(p-o[2*r+1])*o[2*r],o[2*r+1]=p),n--)}}(e),ys(i,c,e.bl_count)}function bs(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,u=4;for(0===o&&(c=138,u=3),t[2*(n+1)+1]=65535,r=0;r<=n;r++)i=o,o=t[2*(r+1)+1],++s<c&&i===o||(s<u?e.bl_tree[2*i]+=s:0!==i?(i!==a&&e.bl_tree[2*i]++,e.bl_tree[2*Yo]++):s<=10?e.bl_tree[2*Zo]++:e.bl_tree[2*$o]++,a=i,u=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4))}function Rs(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,u=4;for(0===o&&(c=138,u=3),r=0;r<=n;r++)if(i=o,o=t[2*(r+1)+1],!(++s<c&&i===o)){if(s<u)for(;vs(e,i,e.bl_tree),0!=--s;);else 0!==i?(i!==a&&(vs(e,i,e.bl_tree),s--),vs(e,Yo,e.bl_tree),ps(e,s-3,2)):s<=10?(vs(e,Zo,e.bl_tree),ps(e,s-3,3)):(vs(e,$o,e.bl_tree),ps(e,s-11,7));a=i,u=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4)}}Po(us);var Is=!1;function As(e,t,n,r){ps(e,(Uo<<1)+(r?1:0),3),r=t,t=n,n=!0,ms(e=e),n&&(fs(e,t),fs(e,~t)),Lo.arraySet(e.pending_buf,e.window,r,t,e.pending),e.pending+=t}var Ss={_tr_init:function(e){Is||(function(){for(var e,t,n,r=new Array(Wo+1),i=0,a=0;a<Vo-1;a++)for(as[a]=i,e=0;e<1<<Qo[a];e++)is[i++]=a;for(is[i-1]=a,a=n=0;a<16;a++)for(us[a]=n,e=0;e<1<<Jo[a];e++)rs[n++]=a;for(n>>=7;a<Bo;a++)for(us[a]=n<<7,e=0;e<1<<Jo[a]-7;e++)rs[256+n++]=a;for(t=0;t<=Wo;t++)r[t]=0;for(e=0;e<=143;)ts[2*e+1]=8,e++,r[8]++;for(;e<=255;)ts[2*e+1]=9,e++,r[9]++;for(;e<=279;)ts[2*e+1]=7,e++,r[7]++;for(;e<=287;)ts[2*e+1]=8,e++,r[8]++;for(ys(ts,jo+1,r),e=0;e<Bo;e++)ns[2*e+1]=5,ns[2*e]=_s(e,5);os=new ls(ts,Qo,Fo+1,jo,Wo),ss=new ls(ns,Jo,0,Bo,Wo),cs=new ls(new Array(0),Xo,0,Go,Ko)}(),Is=!0),e.l_desc=new ds(e.dyn_ltree,os),e.d_desc=new ds(e.dyn_dtree,ss),e.bl_desc=new ds(e.bl_tree,cs),e.bi_buf=0,e.bi_valid=0,gs(e)},_tr_stored_block:As,_tr_flush_block:function(e,t,n,r){var i,a,o=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){for(var t=4093624447,n=0;n<=31;n++,t>>>=1)if(1&t&&0!==e.dyn_ltree[2*n])return xo;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return Mo;for(n=32;n<Fo;n++)if(0!==e.dyn_ltree[2*n])return Mo;return xo}(e)),ws(e,e.l_desc),ws(e,e.d_desc),o=function(e){var t;for(bs(e,e.dyn_ltree,e.l_desc.max_code),bs(e,e.dyn_dtree,e.d_desc.max_code),ws(e,e.bl_desc),t=Go-1;3<=t&&0===e.bl_tree[2*es[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),i=e.opt_len+3+7>>>3,(a=e.static_len+3+7>>>3)<=i&&(i=a)):i=a=n+5,n+4<=i&&-1!==t?As(e,t,n,r):4===e.strategy||a===i?(ps(e,2+(r?1:0),3),Cs(e,ts,ns)):(ps(e,4+(r?1:0),3),function(e,t,n,r){var i;for(ps(e,t-257,5),ps(e,n-1,5),ps(e,r-4,4),i=0;i<r;i++)ps(e,e.bl_tree[2*es[i]+1],3);Rs(e,e.dyn_ltree,t-1),Rs(e,e.dyn_dtree,n-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,o+1),Cs(e,e.dyn_ltree,e.dyn_dtree)),gs(e),r&&ms(e)},_tr_tally:function(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,0===t?e.dyn_ltree[2*n]++:(e.matches++,t--,e.dyn_ltree[2*(is[n]+Fo+1)]++,e.dyn_dtree[2*hs(t)]++),e.last_lit===e.lit_bufsize-1},_tr_align:function(e){ps(e,2,3),vs(e,Ho,ts),16===(e=e).bi_valid?(fs(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}};var Ts=function(e,t,n,r){for(var i=65535&e|0,a=e>>>16&65535|0,o=0;0!==n;){for(o=2e3<n?2e3:n,n-=o;a=a+(i=i+t[r++]|0)|0,--o;);i%=65521,a%=65521}return i|a<<16|0};var Os=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();var Ds,Ns=function(e,t,n,r){var i=Os,a=r+n;e^=-1;for(var o=r;o<a;o++)e=e>>>8^i[255&(e^t[o])];return-1^e},Ls={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},xs=0,Ms=4,Ps=0,Us=-2,Vs=-1,Fs=4,js=2,Bs=8,Gs=9,zs=286,Ws=30,qs=19,Ks=2*zs+1,Hs=15,Ys=3,Zs=258,$s=Zs+Ys+1,Qs=42,Js=113,Xs=1,ec=2,tc=3,nc=4;function rc(e,t){return e.msg=Ls[t],t}function ic(e){return(e<<1)-(4<e?9:0)}function ac(e){for(var t=e.length;0<=--t;)e[t]=0}function oc(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),0!==n&&(Lo.arraySet(e.output,t.pending_buf,t.pending_out,n,e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,0===t.pending&&(t.pending_out=0))}function sc(e,t){Ss._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,oc(e.strm)}function cc(e,t){e.pending_buf[e.pending++]=t}function uc(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function lc(e,t){var n,r,i=e.max_chain_length,a=e.strstart,o=e.prev_length,s=e.nice_match,c=e.strstart>e.w_size-$s?e.strstart-(e.w_size-$s):0,u=e.window,l=e.w_mask,d=e.prev,h=e.strstart+Zs,f=u[a+o-1],p=u[a+o];e.prev_length>=e.good_match&&(i>>=2),s>e.lookahead&&(s=e.lookahead);do{if(u[(n=t)+o]===p&&u[n+o-1]===f&&u[n]===u[a]&&u[++n]===u[a+1]){for(a+=2,n++;u[++a]===u[++n]&&u[++a]===u[++n]&&u[++a]===u[++n]&&u[++a]===u[++n]&&u[++a]===u[++n]&&u[++a]===u[++n]&&u[++a]===u[++n]&&u[++a]===u[++n]&&a<h;);if(r=Zs-(h-a),a=h-Zs,o<r){if(e.match_start=t,s<=(o=r))break;f=u[a+o-1],p=u[a+o]}}}while((t=d[t&l])>c&&0!=--i);return o<=e.lookahead?o:e.lookahead}function dc(e){var t,n,r,i,a,o,s,c,u,l=e.w_size;do{if(u=e.window_size-e.lookahead-e.strstart,e.strstart>=l+(l-$s)){for(Lo.arraySet(e.window,e.window,l,l,0),e.match_start-=l,e.strstart-=l,e.block_start-=l,n=e.hash_size,t=n;r=e.head[--t],e.head[t]=l<=r?r-l:0,--n;);for(n=l,t=n;r=e.prev[--t],e.prev[t]=l<=r?r-l:0,--n;);u+=l}if(0===e.strm.avail_in)break;if(a=e.strm,o=e.window,s=e.strstart+e.lookahead,c=u,u=void 0,u=a.avail_in,c<u&&(u=c),n=0===u?0:(a.avail_in-=u,Lo.arraySet(o,a.input,a.next_in,u,s),1===a.state.wrap?a.adler=Ts(a.adler,o,u,s):2===a.state.wrap&&(a.adler=Ns(a.adler,o,u,s)),a.next_in+=u,a.total_in+=u,u),e.lookahead+=n,e.lookahead+e.insert>=Ys)for(i=e.strstart-e.insert,e.ins_h=e.window[i],e.ins_h=(e.ins_h<<e.hash_shift^e.window[i+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[i+Ys-1])&e.hash_mask,e.prev[i&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=i,i++,e.insert--,!(e.lookahead+e.insert<Ys)););}while(e.lookahead<$s&&0!==e.strm.avail_in)}function hc(e,t){for(var n,r;;){if(e.lookahead<$s){if(dc(e),e.lookahead<$s&&t===xs)return Xs;if(0===e.lookahead)break}if(n=0,e.lookahead>=Ys&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+Ys-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==n&&e.strstart-n<=e.w_size-$s&&(e.match_length=lc(e,n)),e.match_length>=Ys)if(r=Ss._tr_tally(e,e.strstart-e.match_start,e.match_length-Ys),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=Ys){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+Ys-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=Ss._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(sc(e,!1),0===e.strm.avail_out))return Xs}return e.insert=e.strstart<Ys-1?e.strstart:Ys-1,t===Ms?(sc(e,!0),0===e.strm.avail_out?tc:nc):e.last_lit&&(sc(e,!1),0===e.strm.avail_out)?Xs:ec}function fc(e,t){for(var n,r,i;;){if(e.lookahead<$s){if(dc(e),e.lookahead<$s&&t===xs)return Xs;if(0===e.lookahead)break}if(n=0,e.lookahead>=Ys&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+Ys-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=Ys-1,0!==n&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-$s&&(e.match_length=lc(e,n),e.match_length<=5&&(1===e.strategy||e.match_length===Ys&&4096<e.strstart-e.match_start)&&(e.match_length=Ys-1)),e.prev_length>=Ys&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-Ys,r=Ss._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-Ys),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+Ys-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=Ys-1,e.strstart++,r&&(sc(e,!1),0===e.strm.avail_out))return Xs}else if(e.match_available){if((r=Ss._tr_tally(e,0,e.window[e.strstart-1]))&&sc(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return Xs}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(r=Ss._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<Ys-1?e.strstart:Ys-1,t===Ms?(sc(e,!0),0===e.strm.avail_out?tc:nc):e.last_lit&&(sc(e,!1),0===e.strm.avail_out)?Xs:ec}function pc(e,t,n,r,i){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i}function vc(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Bs,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Lo.Buf16(2*Ks),this.dyn_dtree=new Lo.Buf16(2*(2*Ws+1)),this.bl_tree=new Lo.Buf16(2*(2*qs+1)),ac(this.dyn_ltree),ac(this.dyn_dtree),ac(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Lo.Buf16(Hs+1),this.heap=new Lo.Buf16(2*zs+1),ac(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Lo.Buf16(2*zs+1),ac(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function _c(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=js,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?Qs:Js,e.adler=2===t.wrap?0:1,t.last_flush=xs,Ss._tr_init(t),Ps):rc(e,Us)}function yc(e){var t=_c(e);return t===Ps&&((e=e.state).window_size=2*e.w_size,ac(e.head),e.max_lazy_match=Ds[e.level].max_lazy,e.good_match=Ds[e.level].good_length,e.nice_match=Ds[e.level].nice_length,e.max_chain_length=Ds[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=Ys-1,e.match_available=0,e.ins_h=0),t}function gc(e,t,n,r,i,a){if(!e)return Us;var o=1;if(t===Vs&&(t=6),r<0?(o=0,r=-r):15<r&&(o=2,r-=16),i<1||Gs<i||n!==Bs||r<8||15<r||t<0||9<t||a<0||Fs<a)return rc(e,Us);8===r&&(r=9);var s=new vc;return(e.state=s).strm=e,s.wrap=o,s.gzhead=null,s.w_bits=r,s.w_size=1<<s.w_bits,s.w_mask=s.w_size-1,s.hash_bits=i+7,s.hash_size=1<<s.hash_bits,s.hash_mask=s.hash_size-1,s.hash_shift=~~((s.hash_bits+Ys-1)/Ys),s.window=new Lo.Buf8(2*s.w_size),s.head=new Lo.Buf16(s.hash_size),s.prev=new Lo.Buf16(s.w_size),s.lit_bufsize=1<<i+6,s.pending_buf_size=4*s.lit_bufsize,s.pending_buf=new Lo.Buf8(s.pending_buf_size),s.d_buf=+s.lit_bufsize,s.l_buf=3*s.lit_bufsize,s.level=t,s.strategy=a,s.method=n,yc(e)}Ds=[new pc(0,0,0,0,function(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){if(e.lookahead<=1){if(dc(e),0===e.lookahead&&t===xs)return Xs;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+n;if((0===e.strstart||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,sc(e,!1),0===e.strm.avail_out))return Xs;if(e.strstart-e.block_start>=e.w_size-$s&&(sc(e,!1),0===e.strm.avail_out))return Xs}return e.insert=0,t===Ms?(sc(e,!0),0===e.strm.avail_out?tc:nc):(e.strstart>e.block_start&&(sc(e,!1),e.strm.avail_out),Xs)}),new pc(4,4,8,4,hc),new pc(4,5,16,8,hc),new pc(4,6,32,32,hc),new pc(4,4,16,16,fc),new pc(8,16,32,32,fc),new pc(8,16,128,128,fc),new pc(8,32,128,256,fc),new pc(32,128,258,1024,fc),new pc(32,258,258,4096,fc)];var mc={deflateInit:function(e,t){return gc(e,t,Bs,15,8,0)},deflateInit2:gc,deflateReset:yc,deflateResetKeep:_c,deflateSetHeader:function(e,t){return!e||!e.state||2!==e.state.wrap?Us:(e.state.gzhead=t,Ps)},deflate:function(e,t){var n,r,i,a;if(!e||!e.state||5<t||t<0)return e?rc(e,Us):Us;if(n=e.state,!e.output||!e.input&&0!==e.avail_in||666===n.status&&t!==Ms)return rc(e,0===e.avail_out?-5:Us);if(n.strm=e,o=n.last_flush,n.last_flush=t,n.status===Qs&&(2===n.wrap?(e.adler=0,cc(n,31),cc(n,139),cc(n,8),n.gzhead?(cc(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),cc(n,255&n.gzhead.time),cc(n,n.gzhead.time>>8&255),cc(n,n.gzhead.time>>16&255),cc(n,n.gzhead.time>>24&255),cc(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),cc(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(cc(n,255&n.gzhead.extra.length),cc(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=Ns(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(cc(n,0),cc(n,0),cc(n,0),cc(n,0),cc(n,0),cc(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),cc(n,3),n.status=Js)):(a=Bs+(n.w_bits-8<<4)<<8,a|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(a|=32),a+=31-a%31,n.status=Js,uc(n,a),0!==n.strstart&&(uc(n,e.adler>>>16),uc(n,65535&e.adler)),e.adler=1)),69===n.status)if(n.gzhead.extra){for(r=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>r&&(e.adler=Ns(e.adler,n.pending_buf,n.pending-r,r)),oc(e),r=n.pending,n.pending!==n.pending_buf_size));)cc(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>r&&(e.adler=Ns(e.adler,n.pending_buf,n.pending-r,r)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){r=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>r&&(e.adler=Ns(e.adler,n.pending_buf,n.pending-r,r)),oc(e),r=n.pending,n.pending===n.pending_buf_size)){i=1;break}}while(i=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,cc(n,i),0!==i);n.gzhead.hcrc&&n.pending>r&&(e.adler=Ns(e.adler,n.pending_buf,n.pending-r,r)),0===i&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){r=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>r&&(e.adler=Ns(e.adler,n.pending_buf,n.pending-r,r)),oc(e),r=n.pending,n.pending===n.pending_buf_size)){i=1;break}}while(i=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,cc(n,i),0!==i);n.gzhead.hcrc&&n.pending>r&&(e.adler=Ns(e.adler,n.pending_buf,n.pending-r,r)),0===i&&(n.status=103)}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&oc(e),n.pending+2<=n.pending_buf_size&&(cc(n,255&e.adler),cc(n,e.adler>>8&255),e.adler=0,n.status=Js)):n.status=Js),0!==n.pending){if(oc(e),0===e.avail_out)return n.last_flush=-1,Ps}else if(0===e.avail_in&&ic(t)<=ic(o)&&t!==Ms)return rc(e,-5);if(666===n.status&&0!==e.avail_in)return rc(e,-5);if(0!==e.avail_in||0!==n.lookahead||t!==xs&&666!==n.status){var o=2===n.strategy?function(e,t){for(var n;;){if(0===e.lookahead&&(dc(e),0===e.lookahead)){if(t===xs)return Xs;break}if(e.match_length=0,n=Ss._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(sc(e,!1),0===e.strm.avail_out))return Xs}return e.insert=0,t===Ms?(sc(e,!0),0===e.strm.avail_out?tc:nc):e.last_lit&&(sc(e,!1),0===e.strm.avail_out)?Xs:ec}(n,t):3===n.strategy?function(e,t){for(var n,r,i,a,o=e.window;;){if(e.lookahead<=Zs){if(dc(e),e.lookahead<=Zs&&t===xs)return Xs;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=Ys&&0<e.strstart&&(r=o[i=e.strstart-1])===o[++i]&&r===o[++i]&&r===o[++i]){for(a=e.strstart+Zs;r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&i<a;);e.match_length=Zs-(a-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=Ys?(n=Ss._tr_tally(e,1,e.match_length-Ys),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=Ss._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(sc(e,!1),0===e.strm.avail_out))return Xs}return e.insert=0,t===Ms?(sc(e,!0),0===e.strm.avail_out?tc:nc):e.last_lit&&(sc(e,!1),0===e.strm.avail_out)?Xs:ec}(n,t):Ds[n.level].func(n,t);if(o!==tc&&o!==nc||(n.status=666),o===Xs||o===tc)return 0===e.avail_out&&(n.last_flush=-1),Ps;if(o===ec&&(1===t?Ss._tr_align(n):5!==t&&(Ss._tr_stored_block(n,0,0,!1),3===t&&(ac(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),oc(e),0===e.avail_out))return n.last_flush=-1,Ps}return t!==Ms?Ps:n.wrap<=0?1:(2===n.wrap?(cc(n,255&e.adler),cc(n,e.adler>>8&255),cc(n,e.adler>>16&255),cc(n,e.adler>>24&255),cc(n,255&e.total_in),cc(n,e.total_in>>8&255),cc(n,e.total_in>>16&255),cc(n,e.total_in>>24&255)):(uc(n,e.adler>>>16),uc(n,65535&e.adler)),oc(e),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?Ps:1)},deflateEnd:function(e){var t;return e&&e.state?(t=e.state.status)!==Qs&&69!==t&&73!==t&&91!==t&&103!==t&&t!==Js&&666!==t?rc(e,Us):(e.state=null,t===Js?rc(e,-3):Ps):Us},deflateSetDictionary:function(e,t){var n,r,i,a,o,s,c,u=t.length;if(!e||!e.state)return Us;if(2===(a=(n=e.state).wrap)||1===a&&n.status!==Qs||n.lookahead)return Us;for(1===a&&(e.adler=Ts(e.adler,t,u,0)),n.wrap=0,u>=n.w_size&&(0===a&&(ac(n.head),n.strstart=0,n.block_start=0,n.insert=0),c=new Lo.Buf8(n.w_size),Lo.arraySet(c,t,u-n.w_size,n.w_size,0),t=c,u=n.w_size),o=e.avail_in,s=e.next_in,c=e.input,e.avail_in=u,e.next_in=0,e.input=t,dc(n);n.lookahead>=Ys;){for(r=n.strstart,i=n.lookahead-(Ys-1);n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+Ys-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,--i;);n.strstart=r,n.lookahead=Ys-1,dc(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=Ys-1,n.match_available=0,e.next_in=s,e.input=c,e.avail_in=o,n.wrap=a,Ps},deflateInfo:"pako deflate (from Nodeca project)"},kc=!0,Ec=!0;try{String.fromCharCode.apply(null,[0])}catch(e){kc=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){Ec=!1}for(var Cc=new Lo.Buf8(256),wc=0;wc<256;wc++)Cc[wc]=252<=wc?6:248<=wc?5:240<=wc?4:224<=wc?3:192<=wc?2:1;Cc[254]=Cc[254]=1;function bc(e,t){if(t<65534&&(e.subarray&&Ec||!e.subarray&&kc))return String.fromCharCode.apply(null,Lo.shrinkBuf(e,t));for(var n="",r=0;r<t;r++)n+=String.fromCharCode(e[r]);return n}var Rc={string2buf:function(e){for(var t,n,r,i,a=e.length,o=0,s=0;s<a;s++)55296==(64512&(n=e.charCodeAt(s)))&&s+1<a&&56320==(64512&(r=e.charCodeAt(s+1)))&&(n=65536+(n-55296<<10)+(r-56320),s++),o+=n<128?1:n<2048?2:n<65536?3:4;for(t=new Lo.Buf8(o),s=i=0;i<o;s++)55296==(64512&(n=e.charCodeAt(s)))&&s+1<a&&56320==(64512&(r=e.charCodeAt(s+1)))&&(n=65536+(n-55296<<10)+(r-56320),s++),n<128?t[i++]=n:(n<2048?t[i++]=192|n>>>6:(n<65536?t[i++]=224|n>>>12:(t[i++]=240|n>>>18,t[i++]=128|n>>>12&63),t[i++]=128|n>>>6&63),t[i++]=128|63&n);return t},buf2binstring:function(e){return bc(e,e.length)},binstring2buf:function(e){for(var t=new Lo.Buf8(e.length),n=0,r=t.length;n<r;n++)t[n]=e.charCodeAt(n);return t},buf2string:function(e,t){for(var n,r,i=t||e.length,a=new Array(2*i),o=0,s=0;s<i;)if((n=e[s++])<128)a[o++]=n;else if(4<(r=Cc[n]))a[o++]=65533,s+=r-1;else{for(n&=2===r?31:3===r?15:7;1<r&&s<i;)n=n<<6|63&e[s++],r--;1<r?a[o++]=65533:n<65536?a[o++]=n:(n-=65536,a[o++]=55296|n>>10&1023,a[o++]=56320|1023&n)}return bc(a,o)},utf8border:function(e,t){var n;for((t=t||e.length)>e.length&&(t=e.length),n=t-1;0<=n&&128==(192&e[n]);)n--;return!(n<0)&&0!==n&&n+Cc[e[n]]>t?n:t}};var Ic=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},Ac=Object.prototype.toString,Sc=0,Tc=-1,Oc=0,Dc=8;function Nc(e){if(!(this instanceof Nc))return new Nc(e);this.options=Lo.assign({level:Tc,method:Dc,chunkSize:16384,windowBits:15,memLevel:8,strategy:Oc,to:""},e||{});var t=this.options;if(t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ic,this.strm.avail_out=0,(e=mc.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy))!==Sc)throw new Error(Ls[e]);if(t.header&&mc.deflateSetHeader(this.strm,t.header),t.dictionary){t="string"==typeof t.dictionary?Rc.string2buf(t.dictionary):"[object ArrayBuffer]"===Ac.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary;if((e=mc.deflateSetDictionary(this.strm,t))!==Sc)throw new Error(Ls[e]);this._dict_set=!0}}function Lc(e,t){t=new Nc(t);if(t.push(e,!0),t.err)throw t.msg||Ls[t.err];return t.result}Nc.prototype.push=function(e,t){var n,r,i=this.strm,a=this.options.chunkSize;if(this.ended)return!1;r=t===~~t?t:!0===t?4:0,"string"==typeof e?i.input=Rc.string2buf(e):"[object ArrayBuffer]"===Ac.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new Lo.Buf8(a),i.next_out=0,i.avail_out=a),1!==(n=mc.deflate(i,r))&&n!==Sc)return this.onEnd(n),!(this.ended=!0)}while(0!==i.avail_out&&(0!==i.avail_in||4!==r&&2!==r)||("string"===this.options.to?this.onData(Rc.buf2binstring(Lo.shrinkBuf(i.output,i.next_out))):this.onData(Lo.shrinkBuf(i.output,i.next_out))),(0<i.avail_in||0===i.avail_out)&&1!==n);return 4===r?(n=mc.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Sc):2!==r||(this.onEnd(Sc),!(i.avail_out=0))},Nc.prototype.onData=function(e){this.chunks.push(e)},Nc.prototype.onEnd=function(e){e===Sc&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Lo.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};var Cr={Deflate:Nc,deflate:Lc,deflateRaw:function(e,t){return(t=t||{}).raw=!0,Lc(e,t)},gzip:function(e,t){return(t=t||{}).gzip=!0,Lc(e,t)}},xc=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],Mc=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],Pc=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],Uc=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64],Vc=function(e,t,n,r,i,a,o,s){for(var c,u,l,d,h,f,p,v,_,y=s.bits,g=0,m=0,k=0,E=0,C=0,w=0,b=0,R=0,I=0,A=0,S=null,T=0,O=new Lo.Buf16(16),D=new Lo.Buf16(16),N=null,L=0,g=0;g<=15;g++)O[g]=0;for(m=0;m<r;m++)O[t[n+m]]++;for(C=y,E=15;1<=E&&0===O[E];E--);if(E<C&&(C=E),0===E)return i[a++]=20971520,i[a++]=20971520,s.bits=1,0;for(k=1;k<E&&0===O[k];k++);for(C<k&&(C=k),g=R=1;g<=15;g++)if(R<<=1,(R-=O[g])<0)return-1;if(0<R&&(0===e||1!==E))return-1;for(D[1]=0,g=1;g<15;g++)D[g+1]=D[g]+O[g];for(m=0;m<r;m++)0!==t[n+m]&&(o[D[t[n+m]]++]=m);if(f=0===e?(S=N=o,19):1===e?(S=xc,T-=257,N=Mc,L-=257,256):(S=Pc,N=Uc,-1),g=k,h=a,b=m=A=0,l=-1,d=(I=1<<(w=C))-1,1===e&&852<I||2===e&&592<I)return 1;for(;;){for(p=g-b,_=o[m]<f?(v=0,o[m]):o[m]>f?(v=N[L+o[m]],S[T+o[m]]):(v=96,0),c=1<<g-b,u=1<<w,k=u;i[h+(A>>b)+(u-=c)]=p<<24|v<<16|_|0,0!==u;);for(c=1<<g-1;A&c;)c>>=1;if(0!==c?(A&=c-1,A+=c):A=0,m++,0==--O[g]){if(g===E)break;g=t[n+o[m]]}if(C<g&&(A&d)!==l){for(0===b&&(b=C),h+=k,R=1<<(w=g-b);w+b<E&&!((R-=O[w+b])<=0);)w++,R<<=1;if(I+=1<<w,1===e&&852<I||2===e&&592<I)return 1;i[l=A&d]=C<<24|w<<16|h-a|0}}return 0!==A&&(i[h+A]=g-b<<24|64<<16|0),s.bits=C,0},Fc=1,jc=2,Bc=0,Gc=-2,zc=1,Wc=852,qc=592;function Kc(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function Hc(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Lo.Buf16(320),this.work=new Lo.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function Yc(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=zc,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Lo.Buf32(Wc),t.distcode=t.distdyn=new Lo.Buf32(qc),t.sane=1,t.back=-1,Bc):Gc}function Zc(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,Yc(e)):Gc}function $c(e,t){var n,r;return e&&e.state?(r=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?Gc:(null!==r.window&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,Zc(e))):Gc}function Qc(e,t){var n;return e?(n=new Hc,(e.state=n).window=null,(t=$c(e,t))!==Bc&&(e.state=null),t):Gc}var Jc,Xc,eu=!0;function tu(e,t,n,r){var i=e.state;return null===i.window&&(i.wsize=1<<i.wbits,i.wnext=0,i.whave=0,i.window=new Lo.Buf8(i.wsize)),r>=i.wsize?(Lo.arraySet(i.window,t,n-i.wsize,i.wsize,0),i.wnext=0,i.whave=i.wsize):(r<(e=i.wsize-i.wnext)&&(e=r),Lo.arraySet(i.window,t,n-r,e,i.wnext),(r-=e)?(Lo.arraySet(i.window,t,n-r,r,0),i.wnext=r,i.whave=i.wsize):(i.wnext+=e,i.wnext===i.wsize&&(i.wnext=0),i.whave<i.wsize&&(i.whave+=e))),0}var nu={inflateReset:Zc,inflateReset2:$c,inflateResetKeep:Yc,inflateInit:function(e){return Qc(e,15)},inflateInit2:Qc,inflate:function(e,t){var n,r,i,a,o,s,c,u,l,d,I,h,f,p,v,_,y,g,m,k,E,C,w,b,R=0,A=new Lo.Buf8(4),S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return Gc;12===(n=e.state).mode&&(n.mode=13),o=e.next_out,i=e.output,c=e.avail_out,a=e.next_in,r=e.input,s=e.avail_in,u=n.hold,l=n.bits,d=s,I=c,C=Bc;e:for(;;)switch(n.mode){case zc:if(0===n.wrap){n.mode=13;break}for(;l<16;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}if(2&n.wrap&&35615===u){A[n.check=0]=255&u,A[1]=u>>>8&255,n.check=Ns(n.check,A,2,0),l=u=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&u)<<8)+(u>>8))%31){e.msg="incorrect header check",n.mode=30;break}if(8!=(15&u)){e.msg="unknown compression method",n.mode=30;break}if(l-=4,E=8+(15&(u>>>=4)),0===n.wbits)n.wbits=E;else if(E>n.wbits){e.msg="invalid window size",n.mode=30;break}n.dmax=1<<E,e.adler=n.check=1,n.mode=512&u?10:12,l=u=0;break;case 2:for(;l<16;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}if(n.flags=u,8!=(255&n.flags)){e.msg="unknown compression method",n.mode=30;break}if(57344&n.flags){e.msg="unknown header flags set",n.mode=30;break}n.head&&(n.head.text=u>>8&1),512&n.flags&&(A[0]=255&u,A[1]=u>>>8&255,n.check=Ns(n.check,A,2,0)),l=u=0,n.mode=3;case 3:for(;l<32;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}n.head&&(n.head.time=u),512&n.flags&&(A[0]=255&u,A[1]=u>>>8&255,A[2]=u>>>16&255,A[3]=u>>>24&255,n.check=Ns(n.check,A,4,0)),l=u=0,n.mode=4;case 4:for(;l<16;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}n.head&&(n.head.xflags=255&u,n.head.os=u>>8),512&n.flags&&(A[0]=255&u,A[1]=u>>>8&255,n.check=Ns(n.check,A,2,0)),l=u=0,n.mode=5;case 5:if(1024&n.flags){for(;l<16;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}n.length=u,n.head&&(n.head.extra_len=u),512&n.flags&&(A[0]=255&u,A[1]=u>>>8&255,n.check=Ns(n.check,A,2,0)),l=u=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&(s<(h=n.length)&&(h=s),h&&(n.head&&(E=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),Lo.arraySet(n.head.extra,r,a,h,E)),512&n.flags&&(n.check=Ns(n.check,r,h,a)),s-=h,a+=h,n.length-=h),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(0===s)break e;for(h=0;E=r[a+h++],n.head&&E&&n.length<65536&&(n.head.name+=String.fromCharCode(E)),E&&h<s;);if(512&n.flags&&(n.check=Ns(n.check,r,h,a)),s-=h,a+=h,E)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(0===s)break e;for(h=0;E=r[a+h++],n.head&&E&&n.length<65536&&(n.head.comment+=String.fromCharCode(E)),E&&h<s;);if(512&n.flags&&(n.check=Ns(n.check,r,h,a)),s-=h,a+=h,E)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;l<16;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}if(u!==(65535&n.check)){e.msg="header crc mismatch",n.mode=30;break}l=u=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=12;break;case 10:for(;l<32;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}e.adler=n.check=Kc(u),l=u=0,n.mode=11;case 11:if(0===n.havedict)return e.next_out=o,e.avail_out=c,e.next_in=a,e.avail_in=s,n.hold=u,n.bits=l,2;e.adler=n.check=1,n.mode=12;case 12:if(5===t||6===t)break e;case 13:if(n.last){u>>>=7&l,l-=7&l,n.mode=27;break}for(;l<3;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}switch(n.last=1&u,--l,3&(u>>>=1)){case 0:n.mode=14;break;case 1:if(!function(e){if(eu){var t;for(Jc=new Lo.Buf32(512),Xc=new Lo.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(Vc(Fc,e.lens,0,288,Jc,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;Vc(jc,e.lens,0,32,Xc,0,e.work,{bits:5}),eu=!1}e.lencode=Jc,e.lenbits=9,e.distcode=Xc,e.distbits=5}(n),n.mode=20,6!==t)break;u>>>=2,l-=2;break e;case 2:n.mode=17;break;case 3:e.msg="invalid block type",n.mode=30}u>>>=2,l-=2;break;case 14:for(u>>>=7&l,l-=7&l;l<32;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}if((65535&u)!=(u>>>16^65535)){e.msg="invalid stored block lengths",n.mode=30;break}if(n.length=65535&u,l=u=0,n.mode=15,6===t)break e;case 15:n.mode=16;case 16:if(h=n.length){if(s<h&&(h=s),c<h&&(h=c),0===h)break e;Lo.arraySet(i,r,a,h,o),s-=h,a+=h,c-=h,o+=h,n.length-=h;break}n.mode=12;break;case 17:for(;l<14;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}if(n.nlen=257+(31&u),u>>>=5,l-=5,n.ndist=1+(31&u),u>>>=5,l-=5,n.ncode=4+(15&u),u>>>=4,l-=4,286<n.nlen||30<n.ndist){e.msg="too many length or distance symbols",n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;l<3;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}n.lens[S[n.have++]]=7&u,u>>>=3,l-=3}for(;n.have<19;)n.lens[S[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,w={bits:n.lenbits},C=Vc(0,n.lens,0,19,n.lencode,0,n.work,w),n.lenbits=w.bits,C){e.msg="invalid code lengths set",n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;_=(R=n.lencode[u&(1<<n.lenbits)-1])>>>16&255,y=65535&R,!((v=R>>>24)<=l);){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}if(y<16)u>>>=v,l-=v,n.lens[n.have++]=y;else{if(16===y){for(b=v+2;l<b;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}if(u>>>=v,l-=v,0===n.have){e.msg="invalid bit length repeat",n.mode=30;break}E=n.lens[n.have-1],h=3+(3&u),u>>>=2,l-=2}else if(17===y){for(b=v+3;l<b;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}l-=v,E=0,h=3+(7&(u>>>=v)),u>>>=3,l-=3}else{for(b=v+7;l<b;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}l-=v,E=0,h=11+(127&(u>>>=v)),u>>>=7,l-=7}if(n.have+h>n.nlen+n.ndist){e.msg="invalid bit length repeat",n.mode=30;break}for(;h--;)n.lens[n.have++]=E}}if(30===n.mode)break;if(0===n.lens[256]){e.msg="invalid code -- missing end-of-block",n.mode=30;break}if(n.lenbits=9,w={bits:n.lenbits},C=Vc(Fc,n.lens,0,n.nlen,n.lencode,0,n.work,w),n.lenbits=w.bits,C){e.msg="invalid literal/lengths set",n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,w={bits:n.distbits},C=Vc(jc,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,w),n.distbits=w.bits,C){e.msg="invalid distances set",n.mode=30;break}if(n.mode=20,6===t)break e;case 20:n.mode=21;case 21:if(6<=s&&258<=c){e.next_out=o,e.avail_out=c,e.next_in=a,e.avail_in=s,n.hold=u,n.bits=l,function(e){var t,n,r,i,a,o,s=e.state,c=e.next_in,u=e.input,l=c+(e.avail_in-5),d=e.next_out,h=e.output,f=d-(I-e.avail_out),p=d+(e.avail_out-257),v=s.dmax,_=s.wsize,y=s.whave,g=s.wnext,m=s.window,k=s.hold,E=s.bits,C=s.lencode,w=s.distcode,b=(1<<s.lenbits)-1,R=(1<<s.distbits)-1;t:do{E<15&&(k+=u[c++]<<E,E+=8,k+=u[c++]<<E,E+=8),t=C[k&b];n:for(;;){if(k>>>=n=t>>>24,E-=n,0===(n=t>>>16&255))h[d++]=65535&t;else{if(!(16&n)){if(0==(64&n)){t=C[(65535&t)+(k&(1<<n)-1)];continue n}if(32&n){s.mode=12;break t}e.msg="invalid literal/length code",s.mode=30;break t}r=65535&t,(n&=15)&&(E<n&&(k+=u[c++]<<E,E+=8),r+=k&(1<<n)-1,k>>>=n,E-=n),E<15&&(k+=u[c++]<<E,E+=8,k+=u[c++]<<E,E+=8),t=w[k&R];r:for(;;){if(k>>>=n=t>>>24,E-=n,!(16&(n=t>>>16&255))){if(0==(64&n)){t=w[(65535&t)+(k&(1<<n)-1)];continue r}e.msg="invalid distance code",s.mode=30;break t}if(i=65535&t,E<(n&=15)&&(k+=u[c++]<<E,(E+=8)<n&&(k+=u[c++]<<E,E+=8)),v<(i+=k&(1<<n)-1)){e.msg="invalid distance too far back",s.mode=30;break t}if(k>>>=n,E-=n,(n=d-f)<i){if(n=i-n,y<n&&s.sane){e.msg="invalid distance too far back",s.mode=30;break t}if(o=m,(a=0)===g){if(a+=_-n,n<r){for(r-=n;h[d++]=m[a++],--n;);a=d-i,o=h}}else if(g<n){if(a+=_+g-n,(n-=g)<r){for(r-=n;h[d++]=m[a++],--n;);if(a=0,g<r){for(n=g,r-=n;h[d++]=m[a++],--n;);a=d-i,o=h}}}else if(a+=g-n,n<r){for(r-=n;h[d++]=m[a++],--n;);a=d-i,o=h}for(;2<r;)h[d++]=o[a++],h[d++]=o[a++],h[d++]=o[a++],r-=3;r&&(h[d++]=o[a++],1<r&&(h[d++]=o[a++]))}else{for(a=d-i;h[d++]=h[a++],h[d++]=h[a++],h[d++]=h[a++],r-=3,2<r;);r&&(h[d++]=h[a++],1<r&&(h[d++]=h[a++]))}break}}break}}while(c<l&&d<p);c-=r=E>>3,k&=(1<<(E-=r<<3))-1,e.next_in=c,e.next_out=d,e.avail_in=c<l?l-c+5:5-(c-l),e.avail_out=d<p?p-d+257:257-(d-p),s.hold=k,s.bits=E}(e),o=e.next_out,i=e.output,c=e.avail_out,a=e.next_in,r=e.input,s=e.avail_in,u=n.hold,l=n.bits,12===n.mode&&(n.back=-1);break}for(n.back=0;_=(R=n.lencode[u&(1<<n.lenbits)-1])>>>16&255,y=65535&R,!((v=R>>>24)<=l);){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}if(_&&0==(240&_)){for(g=v,m=_,k=y;_=(R=n.lencode[k+((u&(1<<g+m)-1)>>g)])>>>16&255,y=65535&R,!(g+(v=R>>>24)<=l);){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}u>>>=g,l-=g,n.back+=g}if(u>>>=v,l-=v,n.back+=v,n.length=y,0===_){n.mode=26;break}if(32&_){n.back=-1,n.mode=12;break}if(64&_){e.msg="invalid literal/length code",n.mode=30;break}n.extra=15&_,n.mode=22;case 22:if(n.extra){for(b=n.extra;l<b;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}n.length+=u&(1<<n.extra)-1,u>>>=n.extra,l-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;_=(R=n.distcode[u&(1<<n.distbits)-1])>>>16&255,y=65535&R,!((v=R>>>24)<=l);){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}if(0==(240&_)){for(g=v,m=_,k=y;_=(R=n.distcode[k+((u&(1<<g+m)-1)>>g)])>>>16&255,y=65535&R,!(g+(v=R>>>24)<=l);){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}u>>>=g,l-=g,n.back+=g}if(u>>>=v,l-=v,n.back+=v,64&_){e.msg="invalid distance code",n.mode=30;break}n.offset=y,n.extra=15&_,n.mode=24;case 24:if(n.extra){for(b=n.extra;l<b;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}n.offset+=u&(1<<n.extra)-1,u>>>=n.extra,l-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg="invalid distance too far back",n.mode=30;break}n.mode=25;case 25:if(0===c)break e;if(h=I-c,n.offset>h){if(h=n.offset-h,h>n.whave&&n.sane){e.msg="invalid distance too far back",n.mode=30;break}f=h>n.wnext?(h-=n.wnext,n.wsize-h):n.wnext-h,h>n.length&&(h=n.length),p=n.window}else p=i,f=o-n.offset,h=n.length;for(c<h&&(h=c),c-=h,n.length-=h;i[o++]=p[f++],--h;);0===n.length&&(n.mode=21);break;case 26:if(0===c)break e;i[o++]=n.length,c--,n.mode=21;break;case 27:if(n.wrap){for(;l<32;){if(0===s)break e;s--,u|=r[a++]<<l,l+=8}if(I-=c,e.total_out+=I,n.total+=I,I&&(e.adler=n.check=(n.flags?Ns:Ts)(n.check,i,I,o-I)),I=c,(n.flags?u:Kc(u))!==n.check){e.msg="incorrect data check",n.mode=30;break}l=u=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;l<32;){if(0===s)break e;s--,u+=r[a++]<<l,l+=8}if(u!==(4294967295&n.total)){e.msg="incorrect length check",n.mode=30;break}l=u=0}n.mode=29;case 29:C=1;break e;case 30:C=-3;break e;case 31:return-4;case 32:default:return Gc}return e.next_out=o,e.avail_out=c,e.next_in=a,e.avail_in=s,n.hold=u,n.bits=l,(n.wsize||I!==e.avail_out&&n.mode<30&&(n.mode<27||4!==t))&&tu(e,e.output,e.next_out,I-e.avail_out),d-=e.avail_in,I-=e.avail_out,e.total_in+=d,e.total_out+=I,n.total+=I,n.wrap&&I&&(e.adler=n.check=(n.flags?Ns:Ts)(n.check,i,I,e.next_out-I)),e.data_type=n.bits+(n.last?64:0)+(12===n.mode?128:0)+(20===n.mode||15===n.mode?256:0),(0==d&&0===I||4===t)&&C===Bc&&(C=-5),C},inflateEnd:function(e){if(!e||!e.state)return Gc;var t=e.state;return t.window&&(t.window=null),e.state=null,Bc},inflateGetHeader:function(e,t){return!e||!e.state||0==(2&(e=e.state).wrap)?Gc:((e.head=t).done=!1,Bc)},inflateSetDictionary:function(e,t){var n,r=t.length;return!e||!e.state||0!==(n=e.state).wrap&&11!==n.mode?Gc:11===n.mode&&Ts(1,t,r,0)!==n.check?-3:tu(e,t,r,r)?(n.mode=31,-4):(n.havedict=1,Bc)},inflateInfo:"pako inflate (from Nodeca project)"},ru={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};var iu=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1},au=Object.prototype.toString;function ou(e){if(!(this instanceof ou))return new ou(e);this.options=Lo.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ic,this.strm.avail_out=0;e=nu.inflateInit2(this.strm,t.windowBits);if(e!==ru.Z_OK)throw new Error(Ls[e]);if(this.header=new iu,nu.inflateGetHeader(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=Rc.string2buf(t.dictionary):"[object ArrayBuffer]"===au.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(e=nu.inflateSetDictionary(this.strm,t.dictionary))!==ru.Z_OK))throw new Error(Ls[e])}function su(e,t){t=new ou(t);if(t.push(e,!0),t.err)throw t.msg||Ls[t.err];return t.result}ou.prototype.push=function(e,t){var n,r,i,a,o,s=this.strm,c=this.options.chunkSize,u=this.options.dictionary,l=!1;if(this.ended)return!1;r=t===~~t?t:!0===t?ru.Z_FINISH:ru.Z_NO_FLUSH,"string"==typeof e?s.input=Rc.binstring2buf(e):"[object ArrayBuffer]"===au.call(e)?s.input=new Uint8Array(e):s.input=e,s.next_in=0,s.avail_in=s.input.length;do{if(0===s.avail_out&&(s.output=new Lo.Buf8(c),s.next_out=0,s.avail_out=c),(n=nu.inflate(s,ru.Z_NO_FLUSH))===ru.Z_NEED_DICT&&u&&(n=nu.inflateSetDictionary(this.strm,u)),n===ru.Z_BUF_ERROR&&!0===l&&(n=ru.Z_OK,l=!1),n!==ru.Z_STREAM_END&&n!==ru.Z_OK)return this.onEnd(n),!(this.ended=!0)}while(s.next_out&&(0!==s.avail_out&&n!==ru.Z_STREAM_END&&(0!==s.avail_in||r!==ru.Z_FINISH&&r!==ru.Z_SYNC_FLUSH)||("string"===this.options.to?(i=Rc.utf8border(s.output,s.next_out),a=s.next_out-i,o=Rc.buf2string(s.output,i),s.next_out=a,s.avail_out=c-a,a&&Lo.arraySet(s.output,s.output,i,a,0),this.onData(o)):this.onData(Lo.shrinkBuf(s.output,s.next_out)))),0===s.avail_in&&0===s.avail_out&&(l=!0),(0<s.avail_in||0===s.avail_out)&&n!==ru.Z_STREAM_END);return n===ru.Z_STREAM_END&&(r=ru.Z_FINISH),r===ru.Z_FINISH?(n=nu.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===ru.Z_OK):r!==ru.Z_SYNC_FLUSH||(this.onEnd(ru.Z_OK),!(s.avail_out=0))},ou.prototype.onData=function(e){this.chunks.push(e)},ou.prototype.onEnd=function(e){e===ru.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Lo.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};Mt={Inflate:ou,inflate:su,inflateRaw:function(e,t){return(t=t||{}).raw=!0,su(e,t)},ungzip:su},$={};(0,Lo.assign)($,Cr,Mt,ru);var cu=$.gzip,uu=$.ungzip,lu=function(){function e(){Un(this,e)}return Fn(e,null,[{key:"encode",value:function(e){return btoa(e)}},{key:"decode",value:function(e){return atob(e)}}]),e}(),du=function(){function e(){Un(this,e)}return Fn(e,null,[{key:"compress",value:function(e){e=cu(e,{to:"string"});return lu.encode(e)}},{key:"decompress",value:function(e){e=lu.decode(e);return uu(e,{to:"string"})}}]),e}(),hu=function(){zn(a,ko);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.ANSWER),e}return Fn(a,[{key:"parseData",value:function(e){return{callId:e.call_id,peerConnectionId:e.peer_connection_id,sdp:du.decompress(e.sdp)}}}]),a}(),fu=function(){zn(a,ko);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.AUDIO),e}return Fn(a,[{key:"parseData",value:function(e){return{callId:e.call_id,isEnabled:e.is_enabled}}}]),a}(),pu=function(){zn(a,ko);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.CANDIDATE),e}return Fn(a,[{key:"parseData",value:function(e){return{callId:e.call_id,peerConnectionId:e.peer_connection_id,candidate:{sdpMLineIndex:e.candidate.sdp_mline_index,sdpMid:e.candidate.sdp_mid,sdp:e.candidate.sdp}}}}]),a}(),vu=function(){zn(a,ko);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.CUSTOM_ITEMS_DELETE),e}return Fn(a,[{key:"parseData",value:function(e){return{callId:e.call_id,deleted:e.deleted,customItems:e.custom_items}}}]),a}(),_u=function e(t){Un(this,e),this.userId=t.user_id,this.nickname=t.nickname,this.profileUrl=t.profile_url,this.metaData=t.meta_data,this.isActive=t.is_active,this.role=t.role},yu=function(){zn(a,ko);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.DIAL),e}return Fn(a,[{key:"parseData",value:function(e){return{isVideoCall:e.is_video_call,callId:e.call_id,caller:new _u(e.caller),callee:new _u(e.callee),turnCredential:{username:e.turn_credential.username,password:e.turn_credential.password,turnUrls:e.turn_credential.turn_urls,transportPolicy:e.turn_credential.transport_policy},constraints:{audio:e.constraints.audio,video:e.constraints.video},customItems:e.custom_items,shortLivedToken:e.sbcall_short_lived_token,capabilities:e.capabilities||[]}}}]),a}(),gu=function(){zn(a,ko);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.DIAL_RCV),e}return Fn(a,[{key:"parseData",value:function(e){return{callId:e.call_id,calleeDeliveryInfo:e.callee_delivery_info,receivedType:e.received_type}}}]),a}(),mu=Fe.find,hi="find",ku=!0,K=e(hi);hi in[]&&Array(1)[hi](function(){ku=!1}),ie({target:"Array",proto:!0,forced:ku||!K},{find:function(e){return mu(this,e,1<arguments.length?arguments[1]:void 0)}}),W(hi);var Eu,Cu=function(){function n(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];Un(this,n),this.callId=t.call_id,this.isVideoCall=t.is_video_call,this._customItems=t.custom_items,this.userRole=t.user_role,this.startedAt=t.started_at,this.endedAt=t.ended_at,this._participants=t.participants.map(function(e){return new _u(e)}),this.endedBy=this._participants.find(function(e){return e.userId===t.ended_by}),this.duration=t.duration,this.endResult=t.end_result,this.callType=t.call_type,this._isFromServer=e}return Fn(n,[{key:"caller",get:function(){return this._participants.find(function(e){return e.role===wa.CALLER})}},{key:"callee",get:function(){return this._participants.find(function(e){return e.role===wa.CALLEE})}},{key:"customItems",get:function(){return Gn({},this._customItems)}},{key:"isFromServer",get:function(){return this._isFromServer}}]),n}(),wu=function(){zn(t,ko);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return Fn(t,[{key:"parseData",value:function(e){return{callId:e.call_id,endedCall:new Cu(e.ended_call)}}}]),t}(),bu=function(){zn(a,ko);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.OFFER),e}return Fn(a,[{key:"parseData",value:function(e){return{callId:e.call_id,peerConnectionId:e.peer_connection_id,sdp:du.decompress(e.sdp)}}}]),a}(),Ru=function(){zn(a,ko);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.RECORDING),e}return Fn(a,[{key:"parseData",value:function(e){return{callId:e.call_id,recordingId:e.recording_id,recordingType:e.recording_type,recordingStatus:e.recording_status}}}]),a}(),Iu=function(){zn(a,ko);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.REMOVE_CANDIDATES),e}return Fn(a,[{key:"parseData",value:function(e){return{callId:e.call_id,candidates:e.candidates.map(function(e){return{sdpMLineIndex:e.sdp_mline_index,sdpMid:e.sdp_mid,candidate:e.sdp}})}}}]),a}(),Au=function(){zn(a,ko);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.CUSTOM_ITEMS_UPDATE),e}return Fn(a,[{key:"parseData",value:function(e){return{callId:e.call_id,updated:e.updated,customItems:e.custom_items}}}]),a}(),Su=function(){zn(a,ko);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.VIDEO),e}return Fn(a,[{key:"parseData",value:function(e){return{callId:e.call_id,isEnabled:e.is_enabled}}}]),a}(),Tu=["turn_changed"],Ou=function(){zn(i,yo);var r=Qn(i);function i(e,t){var n;return Un(this,i),(n=r.call(this)).callId=e,n.constraints=t,n.capabilities=Tu,n}return Fn(i,[{key:"requireResponse",value:function(){return!0}},{key:"getCMD",value:function(){return uo.CALL}},{key:"getType",value:function(){return _o.ACCEPT}},{key:"getData",value:function(){return{call_id:this.callId,constraints:{audio:this.constraints.audio,video:this.constraints.video},capabilities:this.capabilities}}}]),i}(),Du=function(){zn(r,yo);var n=Qn(r);function r(e){var t;return Un(this,r),(t=n.call(this)).callId=e,t}return Fn(r,[{key:"getCMD",value:function(){return uo.SGNL}},{key:"getType",value:function(){return _o.ALIVE}},{key:"getData",value:function(){return{call_id:this.callId}}}]),r}(),Nu=function(){zn(a,yo);var i=Qn(a);function a(e,t,n){var r;return Un(this,a),(r=i.call(this)).callId=e,r.peerConnectionId=t,r.sdp=n,r}return Fn(a,[{key:"getCMD",value:function(){return uo.SGNL}},{key:"getType",value:function(){return _o.ANSWER}},{key:"getData",value:function(){var e={call_id:this.callId,sdp:du.compress(this.sdp)};return this.peerConnectionId?Gn(Gn({},e),{},{peer_connection_id:this.peerConnectionId}):e}}]),a}(),Lu=function(){zn(i,yo);var r=Qn(i);function i(e,t){var n;return Un(this,i),(n=r.call(this)).callId=e,n.isEnabled=t,n}return Fn(i,[{key:"getCMD",value:function(){return uo.COMM}},{key:"getType",value:function(){return _o.AUDIO}},{key:"getData",value:function(){return{call_id:this.callId,is_enabled:this.isEnabled}}}]),i}(),xu=function(){zn(r,yo);var n=Qn(r);function r(e){var t;return Un(this,r),(t=n.call(this)).callId=e,t}return Fn(r,[{key:"requireResponse",value:function(){return!0}},{key:"getCMD",value:function(){return uo.CALL}},{key:"getType",value:function(){return _o.CANCEL}},{key:"getData",value:function(){return{call_id:this.callId}}}]),r}(),Mu=function(){zn(s,yo);var o=Qn(s);function s(e,t,n,r,i){var a;return Un(this,s),jn($n(a=o.call(this)),"type",_o.CANDIDATE),a.callId=e,a.peerConnectionId=t,a.sdp=n,a.sdpMLineIndex=r,a.sdpMid=i,a}return Fn(s,[{key:"getCMD",value:function(){return uo.SGNL}},{key:"getType",value:function(){return _o.CANDIDATE}},{key:"getData",value:function(){var e={call_id:this.callId,candidate:{sdp:this.sdp,sdp_mline_index:this.sdpMLineIndex,sdp_mid:this.sdpMid}};return this.peerConnectionId?Gn(Gn({},e),{},{peer_connection_id:this.peerConnectionId}):e}}]),s}(),Pu=function(){zn(a,yo);var i=Qn(a);function a(e,t,n){var r;return Un(this,a),(r=i.call(this)).callId=e,r.reconnect=n,r.connectionType=t.connectionType,r.relayProtocol=t.relayProtocol,r.protocol=t.protocol,r}return Fn(a,[{key:"getCMD",value:function(){return uo.SGNL}},{key:"getType",value:function(){return _o.CONNECTED}},{key:"getData",value:function(){return{call_id:this.callId,connection:{connection_type:this.connectionType,relay_protocol:this.relayProtocol,protocol:this.protocol},reconnect:this.reconnect}}}]),a}(),Uu=function(){zn(r,yo);var n=Qn(r);function r(e){var t;return Un(this,r),(t=n.call(this)).callId=e,t}return Fn(r,[{key:"requireResponse",value:function(){return!0}},{key:"getCMD",value:function(){return uo.CALL}},{key:"getType",value:function(){return _o.CONNECTION_LOST}},{key:"getData",value:function(){return{call_id:this.callId}}}]),r}(),Vu=function(){zn(r,yo);var n=Qn(r);function r(e){var t;return Un(this,r),(t=n.call(this)).callId=e,t}return Fn(r,[{key:"requireResponse",value:function(){return!0}},{key:"getCMD",value:function(){return uo.CALL}},{key:"getType",value:function(){return _o.DECLINE}},{key:"getData",value:function(){return{call_id:this.callId}}}]),r}(),Fu=function(){zn(s,yo);var o=Qn(s);function s(e,t,n,r,i){var a;return Un(this,s),(a=o.call(this)).calleeId=e,a.isVideoCall=t,a.customItems=n,a.sendBirdChatOptions=r,a.constraints=i,a.capabilities=Tu,a}return Fn(s,[{key:"requireResponse",value:function(){return!0}},{key:"getCMD",value:function(){return uo.CALL}},{key:"getType",value:function(){return _o.DIAL}},{key:"getData",value:function(){var e;return{callee_id:this.calleeId,is_video_call:this.isVideoCall,custom_items:this.customItems,sb_chat:{channel_url:null===(e=this.sendBirdChatOptions)||void 0===e?void 0:e.channelUrl},constraints:{audio:this.constraints.audio,video:this.constraints.video},capabilities:this.capabilities}}}]),s}(),ju=function(){zn(o,yo);var a=Qn(o);function o(e,t,n,r){var i;return Un(this,o),(i=a.call(this)).callId=e,i.calleeDeliveryInfo=t,i.receivedType=n,i.shortLivedToken=r,i}return Fn(o,[{key:"getHeaders",value:function(){return{"SBCall-Short-Lived-Token":this.shortLivedToken}}},{key:"getData",value:function(){return{call_id:this.callId,callee_delivery_info:this.calleeDeliveryInfo,received_type:this.receivedType}}},{key:"getCMD",value:function(){return uo.CALL}},{key:"getType",value:function(){return _o.DIAL_RCV}},{key:"sendStrategy",get:function(){return lo.API}}]),o}(),Bu=function(){zn(r,yo);var n=Qn(r);function r(e){var t;return Un(this,r),(t=n.call(this)).callId=e,t}return Fn(r,[{key:"requireResponse",value:function(){return!0}},{key:"getCMD",value:function(){return uo.CALL}},{key:"getType",value:function(){return _o.END}},{key:"getData",value:function(){return{call_id:this.callId}}}]),r}(),Gu=function(){zn(r,yo);var n=Qn(r);function r(e){var t;return Un(this,r),(t=n.call(this)).callId=e,t}return Fn(r,[{key:"requireResponse",value:function(){return!0}},{key:"getCMD",value:function(){return uo.CALL}},{key:"getType",value:function(){return _o.NO_ANSWER}},{key:"getData",value:function(){return{call_id:this.callId}}}]),r}(),zu=function(){zn(a,yo);var i=Qn(a);function a(e,t,n){var r;return Un(this,a),(r=i.call(this)).callId=e,r.peerConnectionId=t,r.sdp=n,r}return Fn(a,[{key:"getCMD",value:function(){return uo.SGNL}},{key:"getType",value:function(){return _o.OFFER}},{key:"getData",value:function(){var e={call_id:this.callId,sdp:du.compress(this.sdp)};return this.peerConnectionId?Gn(Gn({},e),{},{peer_connection_id:this.peerConnectionId}):e}}]),a}(),Wu=function(){zn(o,yo);var a=Qn(o);function o(e,t,n,r){var i;return Un(this,o),(i=a.call(this)).callId=e,i.recordingId=t,i.recordingType=n,i.recordingStatus=r,i}return Fn(o,[{key:"getCMD",value:function(){return uo.COMM}},{key:"getType",value:function(){return _o.RECORDING}},{key:"getData",value:function(){return{call_id:this.callId,recording_id:this.recordingId,recording_type:this.recordingType,recording_status:this.recordingStatus}}}]),o}(),qu=function(){zn(i,yo);var r=Qn(i);function i(e,t){var n;return Un(this,i),(n=r.call(this)).callId=e,n.reason=t,n}return Fn(i,[{key:"requireResponse",value:function(){return!0}},{key:"getCMD",value:function(){return uo.CALL}},{key:"getType",value:function(){return _o.TIME_OUT}},{key:"getData",value:function(){return{call_id:this.callId,reason:this.reason}}}]),i}(),Ku=function(){zn(i,yo);var r=Qn(i);function i(e,t){var n;return Un(this,i),(n=r.call(this)).callId=e,n.isEnabled=t,n}return Fn(i,[{key:"getCMD",value:function(){return uo.COMM}},{key:"getType",value:function(){return _o.VIDEO}},{key:"getData",value:function(){return{call_id:this.callId,is_enabled:this.isEnabled}}}]),i}(),Hu=function(){zn(a,Eo);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.ACCEPT_ACK),e}return Fn(a,[{key:"parseData",value:function(e){return{callId:e.call_id}}}]),a}(),Yu=function(){zn(a,Eo);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.ALIVE_ACK),e}return Fn(a,[{key:"parseData",value:function(e){return{callId:e.call_id,alive_at:e.alive_at}}}]),a}(),Zu=function(){zn(a,Eo);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.DIAL_ACK),e}return Fn(a,[{key:"parseData",value:function(e){return{isVideoCall:e.is_video_call,callId:e.call_id,caller:new _u(e.caller),callee:new _u(e.callee)}}}]),a}(),$u=function(){zn(t,Eo);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return Fn(t,[{key:"parseData",value:function(e){return{callId:e.call_id,endedCall:new Cu(e.ended_call)}}}]),t}(),Qu=function(){zn(a,wo);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",_o.TURN_CHANGED),e}return Fn(a,[{key:"parseData",value:function(e){return{callId:e.call_id,turnCredential:{username:e.turn_credential.username,password:e.turn_credential.password,turnUrls:e.turn_credential.turn_urls,transportPolicy:e.turn_credential.transport_policy},eventId:e.event_id}}}]),a}(),Ju=function(){zn(t,Co);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return t}();(Eu=Eu||{}).LOG="log";var Xu,el=function(){zn(a,Ju);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",Eu.LOG),e}return Fn(a,[{key:"parseData",value:function(e){return{logLevel:e.log_level.toUpperCase()}}}]),a}(),tl=function(){zn(t,go);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return t}();(Xu=Xu||{}).CONNECTED="websocket_connected";function nl(e){var t,n,r,i,a,o,s=se(e),c="function"==typeof this?this:Array,u=arguments.length,l=1<u?arguments[1]:void 0,d=void 0!==l,e=Ot(s),h=0;if(d&&(l=oe(l,2<u?arguments[2]:void 0,2)),null==e||c==Array&&Rt(e))for(n=new c(t=te(s.length));h<t;h++)o=d?l(s[h],h):s[h],fr(n,h,o);else for(a=(i=e.call(s)).next,n=new c;!(r=a.call(i)).done;h++)o=d?function(t,e,n,r){try{return r?e(R(n)[0],n[1]):e(n)}catch(e){throw Dt(t),e}}(i,l,[r.value,h],!0):r.value,fr(n,h,o);return n.length=h,n}var rl=function(){zn(t,tl);var e=Qn(t);function t(){return Un(this,t),e.call(this,{type:Xu.CONNECTED})}return t}(),il=function(){function e(){Un(this,e)}return Fn(e,null,[{key:"createAuthRequest",value:function(e,t,n){return new so(e,t,n)}},{key:"createDial",value:function(e,t,n,r,i){return new Fu(e,t,n,r,i)}},{key:"createDialReceive",value:function(e,t,n,r){return new ju(e,t,n,r)}},{key:"createAccept",value:function(e,t){return new Ou(e,t)}},{key:"createDecline",value:function(e){return new Vu(e)}},{key:"createCancel",value:function(e){return new xu(e)}},{key:"createEnd",value:function(e){return new Bu(e)}},{key:"createTimeout",value:function(e,t){return new qu(e,t)}},{key:"createConnectionLost",value:function(e){return new Uu(e)}},{key:"createNoAnswer",value:function(e){return new Gu(e)}},{key:"createOffer",value:function(e,t,n){return new zu(e,t,n)}},{key:"createAnswer",value:function(e,t,n){return new Nu(e,t,n)}},{key:"createCandidate",value:function(e,t,n,r,i){return new Mu(e,t,n,r,i)}},{key:"createAudio",value:function(e,t){return new Lu(e,t)}},{key:"createVideo",value:function(e,t){return new Ku(e,t)}},{key:"createAlive",value:function(e){return new Du(e)}},{key:"createConnected",value:function(e,t,n){return new Pu(e,t,n)}},{key:"createStatsLogCommand",value:function(e){return new ao(e)}},{key:"createCallSummaryCommand",value:function(e,t,n){return new So(e,t,n)}},{key:"createUpdateCustomItems",value:function(e,t){return new Ao(e,t)}},{key:"createDeleteCustomItems",value:function(e,t){return new Io(e,t)}},{key:"createDeleteAllCustomItems",value:function(e){return new Ro(e)}},{key:"createRecording",value:function(e,t,n,r){return new Wu(e,t,n,r)}},{key:"createCommandList",value:function(e){return new bo(e)}},{key:"createUploadLogsCommand",value:function(e,t){return new oo(e,t)}},{key:"createAccepted",value:function(e){return new No({type:"other_device_accepted",payload:{call_id:e}})}},{key:"createDeclined",value:function(e,t){return new To({callId:e,endedCall:t})}},{key:"createWebSocketConnectedCommand",value:function(){return new rl}},{key:"createSnapshot",value:function(e,t){return new Oo(Gn({callId:e},t))}},{key:"parse",value:function(e){try{switch(e.type){case _o.DIAL_ACK:return new Zu(e);case _o.DIAL:return new yu(e);case _o.DIAL_RCV:return new gu(e);case _o.NO_ANSWER_ACK:return new $u(e);case _o.NO_ANSWER:return new wu(e);case _o.CANCEL_ACK:return new $u(e);case _o.CANCEL:return new wu(e);case _o.ACCEPT_ACK:return new Hu(e);case _o.ACCEPT:return new Do(e);case _o.OTHER_DEVICE_ACCEPTED:return new No(e);case _o.DECLINE_ACK:return new $u(e);case _o.DECLINE:return new wu(e);case _o.OFFER:return new bu(e);case _o.ANSWER:return new hu(e);case _o.CANDIDATE:return new pu(e);case _o.REMOVE_CANDIDATES:return new Iu(e);case _o.AUDIO:return new fu(e);case _o.VIDEO:return new Su(e);case _o.END_ACK:return new $u(e);case _o.END:return new wu(e);case _o.TIMEOUT_ACK:return new $u(e);case _o.TIME_OUT:return new wu(e);case _o.CONNECTION_LOST_ACK:return new $u(e);case _o.CONNECTION_LOST:return new wu(e);case _o.UNKNOWN_END_ACK:return new $u(e);case _o.UNKNOWN_END:return new wu(e);case _o.CUSTOM_ITEMS_UPDATE:return new Au(e);case _o.CUSTOM_ITEMS_DELETE:return new vu(e);case _o.ALIVE_ACK:return new Yu(e);case _o.RECORDING:return new Ru(e);case _o.TURN_CHANGED:return new Qu(e);case Eu.LOG:return new el(e);default:throw new Error("unhandled command data. ".concat(JSON.stringify(e)))}}catch(e){return void Ra.error(new _a(An.ERR_WRONG_RESPONSE,{error:e}))}}}]),e}(),al=function(){function t(e){Un(this,t),jn(this,"_isOverflowLogs",!1),jn(this,"_logs",[]),this.ctx=e}return Fn(t,[{key:"addLog",value:function(e){500<=this._logs.length&&(this._isOverflowLogs=!0,this._logs.shift()),this._logs.push(e)}},{key:"_flush",value:function(t){var e=this._logs.filter(function(e){return Or[e.logLevel].level>=Or[t].level}),e=il.createUploadLogsCommand(e,this._isOverflowLogs);this._isOverflowLogs=!1,this._logs=[],this.ctx.sender.send(e)}},{key:"onEvent",value:function(e){e.type===Eu.LOG?this._flush(e.payload.logLevel):console.error("Cannot reach here")}}]),t}(),q=!Wt(function(e){Array.from(e)});ie({target:"Array",stat:!0,forced:q},{from:nl});var _n=function(u){return function(e,t,n,r){ae(t);var i=se(e),a=k(i),o=te(i.length),s=u?o-1:0,c=u?-1:1;if(n<2)for(;;){if(s in a){r=a[s],s+=c;break}if(s+=c,u?s<0:o<=s)throw TypeError("Reduce of empty array with no initial value")}for(;u?0<=s:s<o;s+=c)s in a&&(r=t(r,a[s],s,i));return r}},Cr={left:_n(!1),right:_n(!0)},ol=Cr.left,Mt=i("reduce"),$=e("reduce",{1:0});ie({target:"Array",proto:!0,forced:!Mt||!$||!Qr&&79<vr&&vr<83},{reduce:function(e){return ol(this,e,arguments.length,1<arguments.length?arguments[1]:void 0)}});var sl=a.includes,K=e("indexOf",{ACCESSORS:!0,1:0});ie({target:"Array",proto:!0,forced:!K},{includes:function(e){return sl(this,e,1<arguments.length?arguments[1]:void 0)}}),W("includes");var hi=M.f,q=Function.prototype,cl=q.toString,ul=/^\s*function ([^ (]*)/;!L||"name"in q||hi(q,"name",{configurable:!0,get:function(){try{return cl.call(this).match(ul)[1]}catch(e){return""}}});var ll=p.f,_n=function(s){return function(e){for(var t,n=h(e),r=He(n),i=r.length,a=0,o=[];a<i;)t=r[a++],L&&!ll.call(n,t)||o.push(s?[t,n[t]]:n[t]);return o}},i={entries:_n(!0),values:_n(!1)},dl=i.values;ie({target:"Object",stat:!0},{values:function(e){return dl(e)}});var hl=ce("match");ie({target:"String",proto:!0,forced:!function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[hl]=!1,"/./"[t](n)}catch(e){}}return!1}("includes")},{includes:function(e){return!!~String(d(this)).indexOf(function(e){if(Na(e))throw TypeError("The method doesn't accept regular expressions");return e}(e),1<arguments.length?arguments[1]:void 0)}});var fl=i.entries;function pl(e,t){var a=0,o=null;if("number"==typeof e){if(!t)throw new Error("'obj' parameter is required");a=e,o=t}else{if(!e||t)throw new Error("'obj' parameter is required");o=e}return function(e){var i=e.descriptor.value;return e.descriptor.value=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[a];if("object"!==xn(r))throw new Error("'object' is expected");return Object.entries(o).forEach(function(e){var t=Jn(e,2),e=t[0],t=t[1];!r[e]||r[e]instanceof t||(r[e]=new t(r[e]))}),i.call.apply(i,[this].concat(t))},e}}ie({target:"Object",stat:!0},{entries:function(e){return fl(e)}});function vl(){var n=this;Un(this,vl),this.promise=new Promise(function(e,t){n.resolve=e,n.reject=t})}var Mt=function e(t){Un(this,e),this.ctx=t},_l=Object.assign,yl=Object.defineProperty,$=!_l||u(function(){if(L&&1!==_l({b:1},_l(yl({},"a",{enumerable:!0,get:function(){yl(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return 1;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=_l({},e)[n]||He(_l({},t)).join("")!=r})?function(e,t){for(var n=se(e),r=arguments.length,i=1,a=we.f,o=p.f;i<r;)for(var s,c=k(arguments[i++]),u=a?He(c).concat(a(c)):He(c),l=u.length,d=0;d<l;)s=u[d++],L&&!o.call(c,s)||(n[s]=c[s]);return n}:_l;ie({target:"Object",stat:!0,forced:Object.assign!==$},{assign:$}),ie({target:"Object",stat:!0},{fromEntries:function(e){var n={};return Lt(e,function(e,t){fr(n,e,t)},{AS_ENTRIES:!0}),n}});var gl=new Map([["candidate_type","first"],["network_type","first"]]),ml=["video_source_width","video_source_height","video_source_frames_per_second","network_type"];function kl(e,t,n){return 1===e?n:(t*(e-1)+n)/e}var El=function(){function n(e,t){Un(this,n),this.ctx=e,this._call=t,this._callLogStats={},this._callAudioLogStats={},this._callVideoLogStats={},this._callTransPortInfoLogStats={},this._callSummary={},this._updateCount=0,this._reconnectedCount=0,this._callSummaryAudioItems=new Map([["codec",{type:"first",measureCount:0}],["mos",{type:"avg",measureCount:0}],["rtt",{type:"avg",measureCount:0}],["packets_lost_rate",{type:"avg",measureCount:0}]]),this._callSummaryVideoItems=new Map([["codec",{type:"first",measureCount:0}],["freeze_count",{type:"snapshot",measureCount:0}],["jitter_buffer_delay",{type:"snapshot",measureCount:0}],["jitter_buffer_emitted_count",{type:"snapshot",measureCount:0}],["packets_lost_rate",{type:"avg",measureCount:0}],["received_frame_height",{type:"avg",measureCount:0}],["received_frame_width",{type:"avg",measureCount:0}],["rtt",{type:"avg",measureCount:0}],["sent_frame_height",{type:"avg",measureCount:0}],["sent_frame_width",{type:"avg",measureCount:0}],["total_decode_time",{type:"snapshot",measureCount:0}],["total_frames_duration",{type:"snapshot",measureCount:0}],["total_freezes_duration",{type:"snapshot",measureCount:0}],["total_inter_frame_delay",{type:"snapshot",measureCount:0}],["video_source_frames_per_second",{type:"avg",measureCount:0}],["video_source_height",{type:"avg",measureCount:0}],["video_source_width",{type:"avg",measureCount:0}]]),this._callStatsAudioItems=new Map([["mos",{type:"avg",measureCount:0}],["rtt",{type:"avg",measureCount:0}],["jitter",{type:"avg",measureCount:0}],["packets_lost_rate",{type:"avg",measureCount:0}],["packets_lost",{type:"sum"}]]),this._callStatsVideoItems=new Map([["rtt",{type:"avg",measureCount:0}],["video_source_width",{type:"avg",measureCount:0}],["video_source_height",{type:"avg",measureCount:0}],["video_source_frames_per_second",{type:"avg",measureCount:0}],["received_frame_width",{type:"avg",measureCount:0}],["received_frame_height",{type:"avg",measureCount:0}],["sent_frame_width",{type:"avg",measureCount:0}],["sent_frame_height",{type:"avg",measureCount:0}],["packets_lost_rate",{type:"avg",measureCount:0}],["packets_lost",{type:"sum"}],["packets_received",{type:"sum"}]])}return Fn(n,[{key:"setDialSentAt",value:function(){this._dialSentAt=Date.now()}},{key:"calcPdd",value:function(){this._pdd=Date.now()-this._dialSentAt}},{key:"setCallSetupStartTime",value:function(){this._callSetupStartAt=Date.now()}},{key:"calcCallSetupTime",value:function(){this._callSetupTime=Date.now()-this._callSetupStartAt}},{key:"increaseReconnectedCount",value:function(){this._reconnectedCount+=1}},{key:"updateStats",value:function(e,t,n,r){if(this._callSummary.transport_info_candidate_type||(this._callSummary.transport_info_candidate_type=t.get("candidate_type")),this._callSummary.network_type||(this._callSummary.network_type=t.get("network_type")),this._callSummary.audio_codec||(this._callSummary.audio_codec=n.get("codec")),this._callSummary.video_codec||(this._callSummary.video_codec=r.get("codec")),this._updateCallLogStats(e,t,n,r),this._updateCount+=1,this._updateCount>=this._call.options.statsIntervalValue/1e3){this._call.sendStatsLogCommand(this._getCallLogStats()),this._setCallSummaryValues(),this._updateCount=0;var i=ar(this._callStatsAudioItems);try{for(i.s();!(o=i.n()).done;){var a=Jn(o.value,2),o=a[0];"sum"===a[1].type&&(this._callAudioLogStats[o]=0)}}catch(e){i.e(e)}finally{i.f()}var s=ar(this._callStatsVideoItems);try{for(s.s();!(u=s.n()).done;){var c=Jn(u.value,2),u=c[0];"sum"===c[1].type&&(this._callVideoLogStats[u]=0)}}catch(e){s.e(e)}finally{s.f()}}}},{key:"_updateCallLogStats",value:function(e,t,n,r){if(e&&Object.assign(this._callLogStats,Object.fromEntries(e)),t&&Object.assign(this._callTransPortInfoLogStats,Object.fromEntries(t)),n){var i={},a=ar(n);try{for(a.s();!(o=a.n()).done;){var o,s=Jn(o.value,2),c=s[0],u=s[1];null!=u&&((o=this._callStatsAudioItems.get(c))&&("avg"===o.type?(s=this._getMeasureCount(o.measureCount),o.memeasureCount=s,this._callStatsAudioItems.set(c,o),u=kl(s,this._callAudioLogStats[c],u)):"sum"===o.type&&(u=(null!==(o=this._callAudioLogStats[c])&&void 0!==o?o:0)+u)),i[c]=u)}}catch(e){a.e(e)}finally{a.f()}Object.assign(this._callAudioLogStats,i)}if(r){var l={},d=ar(r);try{for(d.s();!(h=d.n()).done;){var h,f=Jn(h.value,2),p=f[0],v=f[1];null!=v&&((h=this._callStatsVideoItems.get(p))&&("avg"===h.type?(f=this._getMeasureCount(h.measureCount),h.memeasureCount=f,this._callStatsVideoItems.set(p,h),v=kl(f,this._callVideoLogStats[p],v)):"sum"===h.type&&(v=(null!==(h=this._callVideoLogStats[p])&&void 0!==h?h:0)+v)),l[p]=v)}}catch(e){d.e(e)}finally{d.f()}Object.assign(this._callVideoLogStats,l)}}},{key:"_getMeasureCount",value:function(e){e+=1;return e>this._call.options.statsIntervalValue/1e3&&(e=1),e}},{key:"_getCallLogStats",value:function(){var e=this._callLogStats,t={measure_count:this._updateCount,measure_interval:this._call.options.statsIntervalValue/1e3};return e.metadata=t,e.transport_info=this._callTransPortInfoLogStats,e.audio=this._callAudioLogStats,e.video=this._callVideoLogStats,e}},{key:"_setCallSummaryValues",value:function(){var e={};if(0<Object.keys(this._callTransPortInfoLogStats).length){var t=ar(gl);try{for(t.s();!(r=t.n()).done;){var n=Jn(r.value,2),r=n[0];"first"!==n[1]&&(n=r,-1===ml.indexOf(n)&&(n="transport_info_".concat(r)),e[n]=this._callTransPortInfoLogStats[r])}}catch(e){t.e(e)}finally{t.f()}}if(0<Object.keys(this._callAudioLogStats).length){var i=ar(this._callSummaryAudioItems);try{for(i.s();!(s=i.n()).done;){var a=Jn(s.value,2),o=a[0],s=a[1];"first"!==s.type&&(a=o,-1===ml.indexOf(a)&&(a="audio_".concat(o)),"avg"===s.type?this._callAudioLogStats[o]&&(s.measureCount+=1,e[a]=kl(s.measureCount,this._callSummary[a],this._callAudioLogStats[o])):e[a]=this._callAudioLogStats[o])}}catch(e){i.e(e)}finally{i.f()}}if(0<Object.keys(this._callVideoLogStats).length){var c=ar(this._callSummaryVideoItems);try{for(c.s();!(d=c.n()).done;){var u=Jn(d.value,2),l=u[0],d=u[1];"first"!==d.type&&(u=l,-1===ml.indexOf(u)&&(u="video_".concat(l)),"avg"===d.type?this._callVideoLogStats[l]&&(d.measureCount+=1,e[u]=kl(d.measureCount,this._callSummary[u],this._callVideoLogStats[l])):e[u]=this._callVideoLogStats[l])}}catch(e){c.e(e)}finally{c.f()}}Object.assign(this._callSummary,e)}},{key:"setBasicCallLogStats",value:function(){this._callLogStats.app_id=this.ctx.appId,this._callLogStats.call_id=this._call.callId,this._callLogStats.role=this._call.myRole,this._callLogStats.caller_id=this._call.caller.userId,this._callLogStats.callee_id=this._call.callee.userId,this._callLogStats.is_video_call=this._call.isVideoCall,this._callLogStats.browser_type=function(){var e=window.navigator,t={browser:null,version:null};if("undefined"==typeof window||!window.navigator)return t.browser="Not a browser.",t;if(e.mozGetUserMedia)t.browser="firefox",t.version=ka(e.userAgent,/Firefox\/(\d+)\./,1);else if(e.webkitGetUserMedia||!1===window.isSecureContext&&window.webkitRTCPeerConnection&&!window.RTCIceGatherer)t.browser="chrome",t.version=ka(e.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(e.mediaDevices&&e.userAgent.match(/Edge\/(\d+).(\d+)$/))t.browser="edge",t.version=ka(e.userAgent,/Edge\/(\d+).(\d+)$/,2);else{if(!window.RTCPeerConnection||!e.userAgent.match(/AppleWebKit\/(\d+)\./))return t.browser="Not a supported browser.",t;t.browser="safari",t.version=ka(e.userAgent,/AppleWebKit\/(\d+)\./,1),t.supportsUnifiedPlan=window.RTCRtpTransceiver&&"currentDirection"in window.RTCRtpTransceiver.prototype}return t}()}},{key:"getCallSummary",value:function(){return this._callSummary.pdd=this._pdd,this._call.endResult===Ca.COMPLETED&&(this._callSummary.setup_time=this._callSetupTime,this._callSummary.reconnection_count=this._reconnectedCount),this._callSummary}}]),n}();function Cl(e){return!!T(e)&&(e=Vt(e),D(Nl,e)||D(Ll,e))}var wl,bl=function(){function t(e){Un(this,t),this._rotatablePeerConnection=e,this.prevAudioTotalPacketsLost=0,this.prevAudioTotalPacketsReceived=0,this.prevVideoTotalPacketsLost=0,this.prevVideoTotalPacketsReceived=0}var e,n;return Fn(t,[{key:"getCandidateInfo",value:(n=Pn(regeneratorRuntime.mark(function e(){var t,n,r,i,a,o,s,c,u,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this._pc.rtcConnection){e.next=3;break}throw new Error("'getCandidateInfo()' is called without rtcConnection");case 3:return e.next=5,t.getStats();case 5:n=e.sent,i=n.entries(),a=0;case 8:if(!(a<n.size)){e.next=18;break}if(!(o=i.next()).value){e.next=15;break}if("candidate-pair"===(u=o.value[1]).type&&"succeeded"===u.state)return r=u.localCandidateId,e.abrupt("break",18);e.next=15;break;case 15:a++,e.next=8;break;case 18:s=0;case 19:if(!(s<n.size)){e.next=28;break}if(!(c=i.next()).value){e.next=25;break}if("local-candidate"===(l=c.value[1]).type&&l.id===r)return e.abrupt("return",{connectionType:null!==(u=l.candidateType)&&void 0!==u?u:"",protocol:null!==(u=l.protocol)&&void 0!==u?u:"",relayProtocol:null!==(l=l.relayProtocol)&&void 0!==l?l:""});e.next=25;break;case 25:s++,e.next=19;break;case 28:return e.abrupt("return",null);case 29:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})},{key:"getStats",value:(e=Pn(regeneratorRuntime.mark(function e(){var t,n,r,o,s,c,u,l,d,i,a,h,f,p=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this._pc.rtcConnection){e.next=3;break}throw new Error("'getStats()' is called without rtcConnection");case 3:return e.next=5,t.getStats();case 5:for(n=e.sent,r=new Map,o=new Map,s=new Map,c=new Map,u=new Map,l=new Map,i=n.entries(),a=0;a<n.size;a++)(h=i.next()).value&&("codec"===(h=h.value[1]).type&&u.set(h.id,h),"candidate-pair"===h.type&&"succeeded"===h.state&&(d=h.localCandidateId,r.set("webrtc_timestamp",h.time)),"media-source"===h.type&&l.set(h.kind,h));return n.forEach(function(e){var t,n,r,i,a;"local-candidate"===e.type&&e.id===d&&(o.set("network_type",e.networkType),o.set("protocol",e.protocol),o.set("candidate_type",e.candidateType)),"audio"!==e.kind&&"audio"!==e.mediaType||("outbound-rtp"===e.type&&(s.set("codec",null===(t=u.get(e.codecId))||void 0===t?void 0:t.mimeType),s.set("total_packets_sent",e.packetsSent),s.set("retransmitted_packets_sent",e.retransmittedPacketsSent)),"remote-inbound-rtp"===e.type&&s.set("rtt",1e3*e.roundTripTime),"inbound-rtp"===e.type&&(r=(n=e.packetsLost-p.prevAudioTotalPacketsLost)/(n+(e.packetsReceived-p.prevAudioTotalPacketsReceived))*100,i=e.packetsLost/(e.packetsLost+e.packetsReceived)*100,s.set("total_packets_received",e.packetsReceived),s.set("packets_lost",n),s.set("packets_lost_rate",r),s.set("total_packets_lost_rate",i),s.set("total_packets_lost",e.packetsLost),s.set("jitter",1e3*e.jitter),p.prevAudioTotalPacketsReceived=e.packetsReceived,p.prevAudioTotalPacketsLost=e.packetsLost),"track"===e.type&&e.remoteSource&&(s.set("jitter_buffer_delay",e.jitterBufferDelay),s.set("jitter_buffer_emitted_count",e.jitterBufferDelayEmittedCount))),"video"!==e.kind&&"video"!==e.mediaType||(c.set("video_source_width",null===(n=l.get("video"))||void 0===n?void 0:n.width),c.set("video_source_height",null===(r=l.get("video"))||void 0===r?void 0:r.height),c.set("video_source_frames_per_second",null===(i=l.get("video"))||void 0===i?void 0:i.framesPerSecond),"outbound-rtp"===e.type&&(c.set("codec",null===(a=u.get(e.codecId))||void 0===a?void 0:a.mimeType),c.set("fir_count",e.firCount),c.set("pli_count",e.pliCount),c.set("nack_count",e.nackCount),c.set("qpSum",e.qpSum),c.set("retransmitted_packets_sent",e.retransmittedBytesSent),c.set("quality_limitation_reason",e.qualityLimitationReason),c.set("quality_limiration_resolution_changes",e.qualityLimitationResolutionChanges)),"remote-inbound-rtp"===e.type&&c.set("rtt",1e3*e.roundTripTime),"inbound-rtp"===e.type&&(c.set("total_packets_lost",e.packetsLost),c.set("jitter",1e3*e.jitter),c.set("header_bytes_received",e.headerBytesReceived),c.set("key_frames_decoded",e.keyFramesDecoded),c.set("total_decode_time",e.totalDecodeTime),c.set("total_inter_frame_delay",e.totalInterFrameDelay),c.set("total_squared_inter_frame_delay",e.totalSquaredInterFrameDelay),i=(n=e.packetsLost-p.prevVideoTotalPacketsLost)/(n+(r=e.packetsReceived-p.prevVideoTotalPacketsReceived))*100,a=e.packetsLost/(e.packetsLost+e.packetsReceived)*100,c.set("total_packets_lost",e.packetsLost),c.set("total_packets_received",e.packetsReceived),c.set("packets_lost",n),c.set("packets_received",r),c.set("packets_lost_rate",i),c.set("total_packets_lost_rate",a),p.prevVideoTotalPacketsReceived=e.packetsReceived,p.prevVideoTotalPacketsLost=e.packetsLost),"track"===e.type&&(e.remoteSource?(c.set("jitter_buffer_delay",e.jitterBufferDelay),c.set("jitter_buffer_emitted_count",e.jitterBufferDelayEmittedCount),c.set("received_frame_width",e.frameWidth),c.set("received_frame_height",e.frameHeight),c.set("frames_received",e.framesReceived),c.set("frames_decoded",e.framesDecoded),c.set("frames_dropped",e.framesDropped),c.set("freeze_count",e.freezeCount),c.set("pause_count",e.pauseCount),c.set("total_freezes_duration",e.totalFreezesDuration),c.set("total_pauses_duration",e.totalPausesDuration),c.set("total_frames_duration",e.totalFramesDuration),c.set("sum_of_squared_frames_duration",e.sumOfSquaredFramesDuration)):(c.set("sent_frame_width",e.frameWidth),c.set("sent_frame_height",e.frameHeight))))}),0<r.size&&r.forEach(Ea),0<o.size&&o.forEach(Ea),0<s.size&&(f=function(e,t,n){if(!(ba(e)||ba(t)||ba(n))){var r,t=n+2*t+10,t=t<160?93.2-t/40:93.2-(t-120)/10;return(t-=2.5*e)<=0?r=1:0<t&&t<100?r=1+.035*t+7e-6*t*(t-60)*(100-t):100<=t&&(r=4.5),r}}(s.get("packets_lost"),s.get("jitter"),s.get("rtt")),s.set("mos",f),s.forEach(Ea)),0<c.size&&c.forEach(Ea),e.abrupt("return",{statsMap:r,transPortInfoMap:o,audioStatsMap:s,videoStatsMap:c});case 20:case"end":return e.stop()}},e,this)})),function(){return e.apply(this,arguments)})},{key:"_pc",get:function(){return this._rotatablePeerConnection.activePeerConnection}}]),t}(),K="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,W=M.f,Rl=N.Int8Array,Il=Rl&&Rl.prototype,hi=N.Uint8ClampedArray,q=hi&&hi.prototype,Al=Rl&&ot(Rl),Sl=Il&&ot(Il),_n=Object.prototype,Tl=_n.isPrototypeOf,i=ce("toStringTag"),Ol=I("TYPED_ARRAY_TAG"),Dl=K&&!!vt&&"Opera"!==Vt(N.opera),hi=!1,Nl={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},Ll={BigInt64Array:8,BigUint64Array:8};for(wl in Nl)N[wl]||(Dl=!1);if((!Dl||"function"!=typeof Al||Al===Function.prototype)&&(Al=function(){throw TypeError("Incorrect invocation")},Dl))for(wl in Nl)N[wl]&&vt(N[wl],Al);if((!Dl||!Sl||Sl===_n)&&(Sl=Al.prototype,Dl))for(wl in Nl)N[wl]&&vt(N[wl].prototype,Sl);if(Dl&&ot(q)!==Sl&&vt(q,Sl),L&&!D(Sl,i))for(wl in hi=!0,W(Sl,i,{get:function(){return T(this)?this[Ol]:void 0}}),Nl)N[wl]&&P(N[wl],Ol,wl);function xl(e){if(void 0===e)return 0;var t=ee(e),e=te(t);if(t!==e)throw RangeError("Wrong length or index");return e}function Ml(e){for(var t=se(this),n=te(t.length),r=arguments.length,i=ne(1<r?arguments[1]:void 0,n),a=void 0===(r=2<r?arguments[2]:void 0)?n:ne(r,n);i<a;)t[i++]=e;return t}function Pl(e){return[255&e]}function Ul(e){return[255&e,e>>8&255]}function Vl(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]}function Fl(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]}function jl(e){return ld(e,23,4)}function Bl(e){return ld(e,52,8)}function Gl(e,t,n,r){var i=xl(n),n=ed(e);if(i+t>n.byteLength)throw ud(ad);return e=ed(n.buffer).bytes,n=i+n.byteOffset,t=e.slice(n,n+t),r?t:t.reverse()}function zl(e,t,n,r,i,a){if(n=xl(n),e=ed(e),n+t>e.byteLength)throw ud(ad);for(var o=ed(e.buffer).bytes,s=n+e.byteOffset,c=r(+i),u=0;u<t;u++)o[s+u]=c[a?u:t-u-1]}var Wl={NATIVE_ARRAY_BUFFER_VIEWS:Dl,TYPED_ARRAY_TAG:hi&&Ol,aTypedArray:function(e){if(Cl(e))return e;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(e){if(vt){if(Tl.call(Al,e))return e}else for(var t in Nl)if(D(Nl,wl)){var n=N[t];if(n&&(e===n||Tl.call(n,e)))return e}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(e,t,n){if(L){if(n)for(var r in Nl){var i=N[r];i&&D(i.prototype,e)&&delete i.prototype[e]}Sl[e]&&!n||he(Sl,e,!n&&Dl&&Il[e]||t)}},exportTypedArrayStaticMethod:function(e,t,n){var r,i;if(L){if(vt){if(n)for(r in Nl)(i=N[r])&&D(i,e)&&delete i[e];if(Al[e]&&!n)return;try{return he(Al,e,!n&&Dl&&Rl[e]||t)}catch(e){}}for(r in Nl)!(i=N[r])||i[e]&&!n||he(i,e,t)}},isView:function(e){if(!T(e))return!1;e=Vt(e);return"DataView"===e||D(Nl,e)||D(Ll,e)},isTypedArray:Cl,TypedArray:Al,TypedArrayPrototype:Sl},_n=Wl.NATIVE_ARRAY_BUFFER_VIEWS,ql=N.ArrayBuffer,Kl=N.Int8Array,Hl=!_n||!u(function(){Kl(1)})||!u(function(){new Kl(-1)})||!Wt(function(e){new Kl,new Kl(null),new Kl(1.5),new Kl(e)},!0)||u(function(){return 1!==new Kl(new ql(2),1,void 0).length}),Yl=Math.abs,Zl=Math.pow,$l=Math.floor,Ql=Math.log,Jl=Math.LN2,q=function(e,t,n){var r,i,a=new Array(n),o=8*n-t-1,s=(1<<o)-1,c=s>>1,u=23===t?Zl(2,-24)-Zl(2,-77):0,l=e<0||0===e&&1/e<0?1:0,d=0;for((e=Yl(e))!=e||e===1/0?(i=e!=e?1:0,r=s):(r=$l(Ql(e)/Jl),e*(n=Zl(2,-r))<1&&(r--,n*=2),2<=(e+=1<=r+c?u/n:u*Zl(2,1-c))*n&&(r++,n/=2),s<=r+c?(i=0,r=s):1<=r+c?(i=(e*n-1)*Zl(2,t),r+=c):(i=e*Zl(2,c-1)*Zl(2,t),r=0));8<=t;a[d++]=255&i,i/=256,t-=8);for(r=r<<t|i,o+=t;0<o;a[d++]=255&r,r/=256,o-=8);return a[--d]|=128*l,a},W=function(e,t){var n,r=e.length,i=8*r-t-1,a=(1<<i)-1,o=a>>1,s=i-7,c=r-1,r=e[c--],u=127&r;for(r>>=7;0<s;u=256*u+e[c],c--,s-=8);for(n=u&(1<<-s)-1,u>>=-s,s+=t;0<s;n=256*n+e[c],c--,s-=8);if(0===u)u=1-o;else{if(u===a)return n?NaN:r?-1/0:1/0;n+=Zl(2,t),u-=o}return(r?-1:1)*n*Zl(2,u-t)},i=Ce.f,Xl=M.f,ed=de.get,td=de.set,nd="ArrayBuffer",rd="DataView",id="prototype",ad="Wrong index",od=N[nd],sd=od,cd=N[rd],hi=cd&&cd[id],_n=Object.prototype,ud=N.RangeError,ld=q,dd=W,W=function(e,t){Xl(e[id],t,{get:function(){return ed(this)[t]}})};if(K){if(!u(function(){od(1)})||!u(function(){new od(-1)})||u(function(){return new od,new od(1.5),new od(NaN),od.name!=nd})){for(var hd,fd=(sd=function(e){return xt(this,sd),new od(xl(e))})[id]=od[id],pd=i(od),vd=0;pd.length>vd;)(hd=pd[vd++])in sd||P(sd,hd,od[hd]);fd.constructor=sd}vt&&ot(hi)!==_n&&vt(hi,_n);var fd=new cd(new sd(2)),_d=hi.setInt8;fd.setInt8(0,2147483648),fd.setInt8(1,2147483649),!fd.getInt8(0)&&fd.getInt8(1)||Kt(hi,{setInt8:function(e,t){_d.call(this,e,t<<24>>24)},setUint8:function(e,t){_d.call(this,e,t<<24>>24)}},{unsafe:!0})}else sd=function(e){xt(this,sd,nd);e=xl(e);td(this,{bytes:Ml.call(new Array(e),0),byteLength:e}),L||(this.byteLength=e)},cd=function(e,t,n){xt(this,cd,rd),xt(e,sd,rd);var r=ed(e).byteLength,t=ee(t);if(t<0||r<t)throw ud("Wrong offset");if(r<t+(n=void 0===n?r-t:te(n)))throw ud("Wrong length");td(this,{buffer:e,byteLength:n,byteOffset:t}),L||(this.buffer=e,this.byteLength=n,this.byteOffset=t)},L&&(W(sd,"byteLength"),W(cd,"buffer"),W(cd,"byteLength"),W(cd,"byteOffset")),Kt(cd[id],{getInt8:function(e){return Gl(this,1,e)[0]<<24>>24},getUint8:function(e){return Gl(this,1,e)[0]},getInt16:function(e){e=Gl(this,2,e,1<arguments.length?arguments[1]:void 0);return(e[1]<<8|e[0])<<16>>16},getUint16:function(e){e=Gl(this,2,e,1<arguments.length?arguments[1]:void 0);return e[1]<<8|e[0]},getInt32:function(e){return Fl(Gl(this,4,e,1<arguments.length?arguments[1]:void 0))},getUint32:function(e){return Fl(Gl(this,4,e,1<arguments.length?arguments[1]:void 0))>>>0},getFloat32:function(e){return dd(Gl(this,4,e,1<arguments.length?arguments[1]:void 0),23)},getFloat64:function(e){return dd(Gl(this,8,e,1<arguments.length?arguments[1]:void 0),52)},setInt8:function(e,t){zl(this,1,e,Pl,t)},setUint8:function(e,t){zl(this,1,e,Pl,t)},setInt16:function(e,t){zl(this,2,e,Ul,t,2<arguments.length?arguments[2]:void 0)},setUint16:function(e,t){zl(this,2,e,Ul,t,2<arguments.length?arguments[2]:void 0)},setInt32:function(e,t){zl(this,4,e,Vl,t,2<arguments.length?arguments[2]:void 0)},setUint32:function(e,t){zl(this,4,e,Vl,t,2<arguments.length?arguments[2]:void 0)},setFloat32:function(e,t){zl(this,4,e,jl,t,2<arguments.length?arguments[2]:void 0)},setFloat64:function(e,t){zl(this,8,e,Bl,t,2<arguments.length?arguments[2]:void 0)}});st(sd,nd),st(cd,rd);function yd(e,t){if((e=function(e){e=ee(e);if(e<0)throw RangeError("The argument can't be less than 0");return e}(e))%t)throw RangeError("Wrong offset");return e}function gd(e){var t,n,r,i,a,o,s=se(e),c=arguments.length,u=1<c?arguments[1]:void 0,l=void 0!==u;if(null!=(e=Ot(s))&&!Rt(e))for(o=(a=e.call(s)).next,s=[];!(i=o.call(a)).done;)s.push(i.value);for(l&&2<c&&(u=oe(u,arguments[2],2)),n=te(s.length),r=new(kd(this))(n),t=0;t<n;t++)r[t]=l?u(s[t],t):s[t];return r}var md={ArrayBuffer:sd,DataView:cd},kd=Wl.aTypedArrayConstructor;t(function(e){function f(e,t){for(var n=0,r=t.length,i=new(o(e))(r);n<r;)i[n]=t[n++];return i}function t(e,t){y(e,t,{get:function(){return v(this)[t]}})}function p(e){var t;return e instanceof k||"ArrayBuffer"==(t=Vt(e))||"SharedArrayBuffer"==t}function r(e,t){return I(e)&&"symbol"!=typeof t&&t in e&&String(+t)==String(t)}function n(e,t){return r(e,t=O(t,!0))?l(2,e[t]):a(e,t)}function i(e,t,n){return!(r(e,t=O(t,!0))&&T(n)&&D(n,"value"))||D(n,"get")||D(n,"set")||n.configurable||D(n,"writable")&&!n.writable||D(n,"enumerable")&&!n.enumerable?y(e,t,n):(e[t]=n.value,e)}var s=Ce.f,c=Fe.forEach,v=de.get,_=de.set,y=M.f,a=x.f,g=Math.round,m=N.RangeError,k=md.ArrayBuffer,E=md.DataView,C=Wl.NATIVE_ARRAY_BUFFER_VIEWS,w=Wl.TYPED_ARRAY_TAG,b=Wl.TypedArray,R=Wl.TypedArrayPrototype,o=Wl.aTypedArrayConstructor,I=Wl.isTypedArray,A="BYTES_PER_ELEMENT",S="Wrong length";L?(C||(x.f=n,M.f=i,t(R,"buffer"),t(R,"byteOffset"),t(R,"byteLength"),t(R,"length")),ie({target:"Object",stat:!0,forced:!C},{getOwnPropertyDescriptor:n,defineProperty:i}),e.exports=function(e,t,r){function u(e,t){y(e,t,{get:function(){return function(e,t){e=v(e);return e.view[n](t*l+e.byteOffset,!0)}(this,t)},set:function(e){return function(e,t,n){e=v(e);r&&(n=(n=g(n))<0?0:255<n?255:255&n),e.view[i](t*l+e.byteOffset,n,!0)}(this,t,e)},enumerable:!0})}var l=e.match(/\d+$/)[0]/8,d=e+(r?"Clamped":"")+"Array",n="get"+e,i="set"+e,a=N[d],h=a,o=h&&h.prototype,e={};C?Hl&&(h=t(function(e,t,n,r){return xt(e,h,d),qt(T(t)?p(t)?void 0!==r?new a(t,yd(n,l),r):void 0!==n?new a(t,yd(n,l)):new a(t):I(t)?f(h,t):gd.call(h,t):new a(xl(t)),e,h)}),vt&&vt(h,b),c(s(a),function(e){e in h||P(h,e,a[e])}),h.prototype=o):(h=t(function(e,t,n,r){xt(e,h,d);var i,a,o,s=0,c=0;if(T(t)){if(!p(t))return I(t)?f(h,t):gd.call(h,t);i=t,c=yd(n,l);n=t.byteLength;if(void 0===r){if(n%l)throw m(S);if((a=n-c)<0)throw m(S)}else if(n<(a=te(r)*l)+c)throw m(S);o=a/l}else o=xl(t),i=new k(a=o*l);for(_(e,{buffer:i,byteOffset:c,byteLength:a,length:o,view:new E(i)});s<o;)u(e,s++)}),vt&&vt(h,b),o=h.prototype=et(R)),o.constructor!==h&&P(o,"constructor",h),w&&P(o,w,d),e[d]=h,ie({global:!0,forced:h!=a,sham:!C},e),A in h||P(h,A,l),A in o||P(o,A,l),Ht(d)}):e.exports=function(){}})("Uint8",function(r){return function(e,t,n){return r(this,e,t,n)}});var Ed=Math.min,Cd=[].copyWithin||function(e,t){var n=se(this),r=te(n.length),i=ne(e,r),a=ne(t,r),t=2<arguments.length?arguments[2]:void 0,o=Ed((void 0===t?r:ne(t,r))-a,r-i),s=1;for(a<i&&i<a+o&&(s=-1,a+=o-1,i+=o-1);0<o--;)a in n?n[i]=n[a]:delete n[i],i+=s,a+=s;return n},wd=Wl.aTypedArray;(0,Wl.exportTypedArrayMethod)("copyWithin",function(e,t){return Cd.call(wd(this),e,t,2<arguments.length?arguments[2]:void 0)});var bd=Fe.every,Rd=Wl.aTypedArray;(0,Wl.exportTypedArrayMethod)("every",function(e){return bd(Rd(this),e,1<arguments.length?arguments[1]:void 0)});var Id=Wl.aTypedArray;(0,Wl.exportTypedArrayMethod)("fill",function(e){return Ml.apply(Id(this),arguments)});var Ad=Fe.filter,Sd=Wl.aTypedArray,Td=Wl.aTypedArrayConstructor;(0,Wl.exportTypedArrayMethod)("filter",function(e){for(var t=Ad(Sd(this),e,1<arguments.length?arguments[1]:void 0),e=Kr(this,this.constructor),n=0,r=t.length,i=new(Td(e))(r);n<r;)i[n]=t[n++];return i});var Od=Fe.find,Dd=Wl.aTypedArray;(0,Wl.exportTypedArrayMethod)("find",function(e){return Od(Dd(this),e,1<arguments.length?arguments[1]:void 0)});var Nd=Fe.findIndex,Ld=Wl.aTypedArray;(0,Wl.exportTypedArrayMethod)("findIndex",function(e){return Nd(Ld(this),e,1<arguments.length?arguments[1]:void 0)});var xd=Fe.forEach,Md=Wl.aTypedArray;(0,Wl.exportTypedArrayMethod)("forEach",function(e){xd(Md(this),e,1<arguments.length?arguments[1]:void 0)});var Pd=a.includes,Ud=Wl.aTypedArray;(0,Wl.exportTypedArrayMethod)("includes",function(e){return Pd(Ud(this),e,1<arguments.length?arguments[1]:void 0)});var Vd=a.indexOf,Fd=Wl.aTypedArray;(0,Wl.exportTypedArrayMethod)("indexOf",function(e){return Vd(Fd(this),e,1<arguments.length?arguments[1]:void 0)});var fd=ce("iterator"),hi=N.Uint8Array,jd=bt.values,Bd=bt.keys,Gd=bt.entries,zd=Wl.aTypedArray,W=Wl.exportTypedArrayMethod,a=hi&&hi.prototype[fd],hi=!!a&&("values"==a.name||null==a.name),a=function(){return jd.call(zd(this))};W("entries",function(){return Gd.call(zd(this))}),W("keys",function(){return Bd.call(zd(this))}),W("values",a,!hi),W(fd,a,!hi);var Wd=Wl.aTypedArray,qd=[].join;(0,Wl.exportTypedArrayMethod)("join",function(e){return qd.apply(Wd(this),arguments)});var Kd=Wl.aTypedArray;(0,Wl.exportTypedArrayMethod)("lastIndexOf",function(e){return Da.apply(Kd(this),arguments)});var Hd=Fe.map,Yd=Wl.aTypedArray,Zd=Wl.aTypedArrayConstructor;(0,Wl.exportTypedArrayMethod)("map",function(e){return Hd(Yd(this),e,1<arguments.length?arguments[1]:void 0,function(e,t){return new(Zd(Kr(e,e.constructor)))(t)})});var $d=Cr.left,Qd=Wl.aTypedArray;(0,Wl.exportTypedArrayMethod)("reduce",function(e){return $d(Qd(this),e,arguments.length,1<arguments.length?arguments[1]:void 0)});var Jd=Cr.right,Xd=Wl.aTypedArray;(0,Wl.exportTypedArrayMethod)("reduceRight",function(e){return Jd(Xd(this),e,arguments.length,1<arguments.length?arguments[1]:void 0)});var eh=Wl.aTypedArray,a=Wl.exportTypedArrayMethod,th=Math.floor;a("reverse",function(){for(var e,t=eh(this).length,n=th(t/2),r=0;r<n;)e=this[r],this[r++]=this[--t],this[t]=e;return this});var nh=Wl.aTypedArray;(0,Wl.exportTypedArrayMethod)("set",function(e){nh(this);var t=yd(1<arguments.length?arguments[1]:void 0,1),n=this.length,r=se(e),i=te(r.length),a=0;if(n<i+t)throw RangeError("Wrong length");for(;a<i;)this[t+a]=r[a++]},u(function(){new Int8Array(1).set({})}));var rh=Wl.aTypedArray,ih=Wl.aTypedArrayConstructor,ah=[].slice;(0,Wl.exportTypedArrayMethod)("slice",function(e,t){for(var n=ah.call(rh(this),e,t),t=Kr(this,this.constructor),r=0,i=n.length,a=new(ih(t))(i);r<i;)a[r]=n[r++];return a},u(function(){new Int8Array(1).slice()}));var oh=Fe.some,sh=Wl.aTypedArray;(0,Wl.exportTypedArrayMethod)("some",function(e){return oh(sh(this),e,1<arguments.length?arguments[1]:void 0)});var ch=Wl.aTypedArray,uh=[].sort;(0,Wl.exportTypedArrayMethod)("sort",function(e){return uh.call(ch(this),e)});var lh=Wl.aTypedArray;(0,Wl.exportTypedArrayMethod)("subarray",function(e,t){var n=lh(this),r=n.length,e=ne(e,r);return new(Kr(n,n.constructor))(n.buffer,n.byteOffset+e*n.BYTES_PER_ELEMENT,te((void 0===t?r:ne(t,r))-e))});var dh=N.Int8Array,hh=Wl.aTypedArray,hi=Wl.exportTypedArrayMethod,fh=[].toLocaleString,ph=[].slice,vh=!!dh&&u(function(){fh.call(new dh(1))});hi("toLocaleString",function(){return fh.apply(vh?ph.call(hh(this)):hh(this),arguments)},u(function(){return[1,2].toLocaleString()!=new dh([1,2]).toLocaleString()})||!u(function(){dh.prototype.toLocaleString.call([1,2])}));var Cr=Wl.exportTypedArrayMethod,a=N.Uint8Array,hi=a&&a.prototype||{},_h=[].toString,yh=[].join;u(function(){_h.call({})})&&(_h=function(){return yh.call(this)}),Cr("toString",_h,hi.toString!=_h);function gh(e){return e+22+75*(e<26)}function mh(e){var t,n=[],r=(e=function(e){for(var t=[],n=0,r=e.length;n<r;){var i,a=e.charCodeAt(n++);55296<=a&&a<=56319&&n<r?56320==(64512&(i=e.charCodeAt(n++)))?t.push(((1023&a)<<10)+(1023&i)+65536):(t.push(a),n--):t.push(a)}return t}(e)).length,i=128,a=0,o=72;for(l=0;l<e.length;l++)(t=e[l])<128&&n.push(xh(t));var s=n.length,c=s;for(s&&n.push("-");c<r;){for(var u=Th,l=0;l<e.length;l++)i<=(t=e[l])&&t<u&&(u=t);var d=c+1;if(u-i>Lh((Th-a)/d))throw RangeError(Nh);for(a+=(u-i)*d,i=u,l=0;l<e.length;l++){if((t=e[l])<i&&++a>Th)throw RangeError(Nh);if(t==i){for(var h=a,f=36;;f+=36){var p=f<=o?1:o+26<=f?26:f-o;if(h<p)break;var v=h-p,_=36-p;n.push(xh(gh(p+v%_))),h=Lh(v/_)}n.push(xh(gh(h))),o=function(e,t,n){var r=0;for(e=n?Lh(e/700):e>>1,e+=Lh(e/t);455<e;r+=36)e=Lh(e/35);return Lh(r+36*e/(e+38))}(a,d,c==s),a=0,++c}}++a,++i}return n.join("")}function kh(e){var t=Ot(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return R(t.call(e))}function Eh(t){try{return decodeURIComponent(t)}catch(e){return t}}function Ch(e){var t,n=e.replace(Gh," "),r=4;try{return decodeURIComponent(n)}catch(e){for(;r;)n=n.replace((t=r--,zh[t-1]||(zh[t-1]=RegExp("((?:%[\\da-f]{2}){"+t+"})","gi"))),Eh);return n}}function wh(e){return qh[e]}function bh(e){return encodeURIComponent(e).replace(Wh,wh)}function Rh(e,t){if(t)for(var n,r=t.split("&"),i=0;i<r.length;)(n=r[i++]).length&&(n=n.split("="),e.push({key:Ch(n.shift()),value:Ch(n.join("="))}))}function Ih(e){this.entries.length=0,Rh(this.entries,e)}function Ah(e,t){if(e<t)throw TypeError("Not enough arguments")}var Sh=ce("iterator"),a=!u(function(){var e=new URL("b?a=1&b=2&c=3","http://a"),n=e.searchParams,r="";return e.pathname="c%20d",n.forEach(function(e,t){n.delete("b"),r+=t+e}),!n.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==n.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!n[Sh]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}),Th=2147483647,Oh=/[^\0-\u007E]/,Dh=/[.\u3002\uFF0E\uFF61]/g,Nh="Overflow: input needs wider integers to process",Lh=Math.floor,xh=String.fromCharCode,Mh=X("fetch"),Ph=X("Headers"),Cr=ce("iterator"),Uh="URLSearchParams",Vh=Uh+"Iterator",Fh=de.set,jh=de.getterFor(Uh),Bh=de.getterFor(Vh),Gh=/\+/g,zh=Array(4),Wh=/[!'()~]|%20/g,qh={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},Kh=ut(function(e,t){Fh(this,{type:Vh,iterator:kh(jh(e).entries),kind:t})},"Iterator",function(){var e=Bh(this),t=e.kind,n=e.iterator.next(),e=n.value;return n.done||(n.value="keys"===t?e.key:"values"===t?e.value:[e.key,e.value]),n}),Hh=function(){xt(this,Hh,Uh);var e,t,n,r,i,a,o,s,c=0<arguments.length?arguments[0]:void 0,u=[];if(Fh(this,{type:Uh,entries:u,updateURL:function(){},updateSearchParams:Ih}),void 0!==c)if(T(c))if("function"==typeof(e=Ot(c)))for(n=(t=e.call(c)).next;!(a=n.call(t)).done;){if((a=(i=(r=kh(R(a.value))).next).call(r)).done||(o=i.call(r)).done||!i.call(r).done)throw TypeError("Expected sequence with length 2");u.push({key:a.value+"",value:o.value+""})}else for(s in c)D(c,s)&&u.push({key:s,value:c[s]+""});else Rh(u,"string"==typeof c?"?"===c.charAt(0)?c.slice(1):c:c+"")},hi=Hh.prototype;Kt(hi,{append:function(e,t){Ah(arguments.length,2);var n=jh(this);n.entries.push({key:e+"",value:t+""}),n.updateURL()},delete:function(e){Ah(arguments.length,1);for(var t=jh(this),n=t.entries,r=e+"",i=0;i<n.length;)n[i].key===r?n.splice(i,1):i++;t.updateURL()},get:function(e){Ah(arguments.length,1);for(var t=jh(this).entries,n=e+"",r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){Ah(arguments.length,1);for(var t=jh(this).entries,n=e+"",r=[],i=0;i<t.length;i++)t[i].key===n&&r.push(t[i].value);return r},has:function(e){Ah(arguments.length,1);for(var t=jh(this).entries,n=e+"",r=0;r<t.length;)if(t[r++].key===n)return!0;return!1},set:function(e,t){Ah(arguments.length,1);for(var n,r=jh(this),i=r.entries,a=!1,o=e+"",s=t+"",c=0;c<i.length;c++)(n=i[c]).key===o&&(a?i.splice(c--,1):(a=!0,n.value=s));a||i.push({key:o,value:s}),r.updateURL()},sort:function(){for(var e,t,n=jh(this),r=n.entries,i=r.slice(),a=r.length=0;a<i.length;a++){for(e=i[a],t=0;t<a;t++)if(r[t].key>e.key){r.splice(t,0,e);break}t===a&&r.push(e)}n.updateURL()},forEach:function(e){for(var t,n=jh(this).entries,r=oe(e,1<arguments.length?arguments[1]:void 0,3),i=0;i<n.length;)r((t=n[i++]).value,t.key,this)},keys:function(){return new Kh(this,"keys")},values:function(){return new Kh(this,"values")},entries:function(){return new Kh(this,"entries")}},{enumerable:!0}),he(hi,Cr,hi.entries),he(hi,"toString",function(){for(var e,t=jh(this).entries,n=[],r=0;r<t.length;)e=t[r++],n.push(bh(e.key)+"="+bh(e.value));return n.join("&")},{enumerable:!0}),st(Hh,Uh),ie({global:!0,forced:!a},{URLSearchParams:Hh}),a||"function"!=typeof Mh||"function"!=typeof Ph||ie({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,n,r=[e];return 1<arguments.length&&(T(t=arguments[1])&&(n=t.body,Vt(n)===Uh&&((e=t.headers?new Ph(t.headers):new Ph).has("content-type")||e.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=et(t,{body:l(0,String(n)),headers:l(0,e)}))),r.push(t)),Mh.apply(this,r)}});function Yh(e,t){var n,r,i;if("["==t.charAt(0))return"]"==t.charAt(t.length-1)&&(n=Of(t.slice(1,-1)))?void(e.host=n):_f;if(Uf(e))return t=function(e){for(var t,n=[],r=e.toLowerCase().replace(Dh,".").split("."),i=0;i<r.length;i++)t=r[i],n.push(Oh.test(t)?"xn--"+mh(t):t);return n.join(".")}(t),Rf.test(t)||null===(n=Tf(t))?_f:void(e.host=n);if(If.test(t))return _f;for(n="",r=nl(t),i=0;i<r.length;i++)n+=Mf(r[i],Df);e.host=n}function Zh(e){var t,n,r,i;if("number"==typeof e){for(t=[],n=0;n<4;n++)t.unshift(e%256),e=ff(e/256);return t.join(".")}if("object"!=typeof e)return e;for(t="",r=function(e){for(var t=null,n=1,r=null,i=0,a=0;a<8;a++)0!==e[a]?(n<i&&(t=r,n=i),r=null,i=0):(null===r&&(r=a),++i);return n<i&&(t=r,n=i),t}(e),n=0;n<8;n++)i&&0===e[n]||(i=i&&!1,r===n?(t+=n?":":"::",i=!0):(t+=e[n].toString(16),n<7&&(t+=":")));return"["+t+"]"}function $h(e){return""!=e.username||""!=e.password}function Qh(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme}function Jh(e,t){return 2==e.length&&gf.test(e.charAt(0))&&(":"==(e=e.charAt(1))||!t&&"|"==e)}function Xh(e){var t;return 1<e.length&&Jh(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)}function ef(e){var t=e.path,n=t.length;!n||"file"==e.scheme&&1==n&&Jh(t[0],!0)||t.pop()}function tf(e,t,n,r){var i,a,o,s,c=n||Vf,u=0,l="",d=!1,h=!1,f=!1;for(n||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(Af,"")),t=t.replace(Sf,""),i=nl(t);u<=i.length;){switch(a=i[u],c){case Vf:if(!a||!gf.test(a)){if(n)return vf;c=jf;continue}l+=a.toLowerCase(),c=Ff;break;case Ff:if(a&&(mf.test(a)||"+"==a||"-"==a||"."==a))l+=a.toLowerCase();else{if(":"!=a){if(n)return vf;l="",c=jf,u=0;continue}if(n&&(Uf(e)!=D(Pf,l)||"file"==l&&($h(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=l,n)return void(Uf(e)&&Pf[e.scheme]==e.port&&(e.port=null));l="","file"==e.scheme?c=Qf:Uf(e)&&r&&r.scheme==e.scheme?c=Bf:Uf(e)?c=qf:"/"==i[u+1]?(c=Gf,u++):(e.cannotBeABaseURL=!0,e.path.push(""),c=np)}break;case jf:if(!r||r.cannotBeABaseURL&&"#"!=a)return vf;if(r.cannotBeABaseURL&&"#"==a){e.scheme=r.scheme,e.path=r.path.slice(),e.query=r.query,e.fragment="",e.cannotBeABaseURL=!0,c=ip;break}c="file"==r.scheme?Qf:zf;continue;case Bf:if("/"!=a||"/"!=i[u+1]){c=zf;continue}c=Kf,u++;break;case Gf:if("/"==a){c=Hf;break}c=tp;continue;case zf:if(e.scheme=r.scheme,a==nf)e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,e.path=r.path.slice(),e.query=r.query;else if("/"==a||"\\"==a&&Uf(e))c=Wf;else if("?"==a)e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,e.path=r.path.slice(),e.query="",c=rp;else{if("#"!=a){e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,e.path=r.path.slice(),e.path.pop(),c=tp;continue}e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,e.path=r.path.slice(),e.query=r.query,e.fragment="",c=ip}break;case Wf:if(!Uf(e)||"/"!=a&&"\\"!=a){if("/"!=a){e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,c=tp;continue}c=Hf}else c=Kf;break;case qf:if(c=Kf,"/"!=a||"/"!=l.charAt(u+1))continue;u++;break;case Kf:if("/"==a||"\\"==a)break;c=Hf;continue;case Hf:if("@"==a){d&&(l="%40"+l),d=!0,o=nl(l);for(var p=0;p<o.length;p++){var v=o[p];":"!=v||f?(v=Mf(v,xf),f?e.password+=v:e.username+=v):f=!0}l=""}else if(a==nf||"/"==a||"?"==a||"#"==a||"\\"==a&&Uf(e)){if(d&&""==l)return"Invalid authority";u-=nl(l).length+1,l="",c=Yf}else l+=a;break;case Yf:case Zf:if(n&&"file"==e.scheme){c=Xf;continue}if(":"!=a||h){if(a==nf||"/"==a||"?"==a||"#"==a||"\\"==a&&Uf(e)){if(Uf(e)&&""==l)return _f;if(n&&""==l&&($h(e)||null!==e.port))return;if(s=Yh(e,l))return s;if(l="",c=ep,n)return;continue}"["==a?h=!0:"]"==a&&(h=!1),l+=a}else{if(""==l)return _f;if(s=Yh(e,l))return s;if(l="",c=$f,n==Zf)return}break;case $f:if(!kf.test(a)){if(a==nf||"/"==a||"?"==a||"#"==a||"\\"==a&&Uf(e)||n){if(""!=l){var _=parseInt(l,10);if(65535<_)return yf;e.port=Uf(e)&&_===Pf[e.scheme]?null:_,l=""}if(n)return;c=ep;continue}return yf}l+=a;break;case Qf:if(e.scheme="file","/"==a||"\\"==a)c=Jf;else{if(!r||"file"!=r.scheme){c=tp;continue}if(a==nf)e.host=r.host,e.path=r.path.slice(),e.query=r.query;else if("?"==a)e.host=r.host,e.path=r.path.slice(),e.query="",c=rp;else{if("#"!=a){Xh(i.slice(u).join(""))||(e.host=r.host,e.path=r.path.slice(),ef(e)),c=tp;continue}e.host=r.host,e.path=r.path.slice(),e.query=r.query,e.fragment="",c=ip}}break;case Jf:if("/"==a||"\\"==a){c=Xf;break}r&&"file"==r.scheme&&!Xh(i.slice(u).join(""))&&(Jh(r.path[0],!0)?e.path.push(r.path[0]):e.host=r.host),c=tp;continue;case Xf:if(a==nf||"/"==a||"\\"==a||"?"==a||"#"==a){if(!n&&Jh(l))c=tp;else if(""==l){if(e.host="",n)return;c=ep}else{if(s=Yh(e,l))return s;if("localhost"==e.host&&(e.host=""),n)return;l="",c=ep}continue}l+=a;break;case ep:if(Uf(e)){if(c=tp,"/"!=a&&"\\"!=a)continue}else if(n||"?"!=a)if(n||"#"!=a){if(a!=nf&&(c=tp,"/"!=a))continue}else e.fragment="",c=ip;else e.query="",c=rp;break;case tp:if(a==nf||"/"==a||"\\"==a&&Uf(e)||!n&&("?"==a||"#"==a)){if(".."===(_=(_=l).toLowerCase())||"%2e."===_||".%2e"===_||"%2e%2e"===_?(ef(e),"/"==a||"\\"==a&&Uf(e)||e.path.push("")):"."===(_=l)||"%2e"===_.toLowerCase()?"/"==a||"\\"==a&&Uf(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&Jh(l)&&(e.host&&(e.host=""),l=l.charAt(0)+":"),e.path.push(l)),l="","file"==e.scheme&&(a==nf||"?"==a||"#"==a))for(;1<e.path.length&&""===e.path[0];)e.path.shift();"?"==a?(e.query="",c=rp):"#"==a&&(e.fragment="",c=ip)}else l+=Mf(a,Lf);break;case np:"?"==a?(e.query="",c=rp):"#"==a?(e.fragment="",c=ip):a!=nf&&(e.path[0]+=Mf(a,Df));break;case rp:n||"#"!=a?a!=nf&&("'"==a&&Uf(e)?e.query+="%27":e.query+="#"==a?"%23":Mf(a,Df)):(e.fragment="",c=ip);break;case ip:a!=nf&&(e.fragment+=Mf(a,Nf))}u++}}var nf,rf,af,of,hi={URLSearchParams:Hh,getState:jh},sf=yn.codeAt,cf=N.URL,uf=hi.URLSearchParams,lf=hi.getState,df=de.set,hf=de.getterFor("URL"),ff=Math.floor,pf=Math.pow,vf="Invalid scheme",_f="Invalid host",yf="Invalid port",gf=/[A-Za-z]/,mf=/[\d+-.A-Za-z]/,kf=/\d/,Ef=/^(0x|0X)/,Cf=/^[0-7]+$/,wf=/^\d+$/,bf=/^[\dA-Fa-f]+$/,Rf=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,If=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,Af=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,Sf=/[\u0009\u000A\u000D]/g,Tf=function(e){var t,n,r,i,a,o,s,c=e.split(".");if(c.length&&""==c[c.length-1]&&c.pop(),4<(t=c.length))return e;for(n=[],r=0;r<t;r++){if(""==(i=c[r]))return e;if(a=10,1<i.length&&"0"==i.charAt(0)&&(a=Ef.test(i)?16:8,i=i.slice(8==a?1:2)),""===i)o=0;else{if(!(10==a?wf:8==a?Cf:bf).test(i))return e;o=parseInt(i,a)}n.push(o)}for(r=0;r<t;r++)if(o=n[r],r==t-1){if(o>=pf(256,5-t))return null}else if(255<o)return null;for(s=n.pop(),r=0;r<n.length;r++)s+=n[r]*pf(256,3-r);return s},Of=function(e){function t(){return e.charAt(h)}var n,r,i,a,o,s,c,u=[0,0,0,0,0,0,0,0],l=0,d=null,h=0;if(":"==t()){if(":"!=e.charAt(1))return;h+=2,d=++l}for(;t();){if(8==l)return;if(":"!=t()){for(n=r=0;r<4&&bf.test(t());)n=16*n+parseInt(t(),16),h++,r++;if("."==t()){if(0==r)return;if(h-=r,6<l)return;for(i=0;t();){if(a=null,0<i){if(!("."==t()&&i<4))return;h++}if(!kf.test(t()))return;for(;kf.test(t());){if(o=parseInt(t(),10),null===a)a=o;else{if(0==a)return;a=10*a+o}if(255<a)return;h++}u[l]=256*u[l]+a,2!=++i&&4!=i||l++}if(4!=i)return;break}if(":"==t()){if(h++,!t())return}else if(t())return;u[l++]=n}else{if(null!==d)return;h++,d=++l}}if(null!==d)for(s=l-d,l=7;0!=l&&0<s;)c=u[l],u[l--]=u[d+s-1],u[d+--s]=c;else if(8!=l)return;return u},Df={},Nf=$({},Df,{" ":1,'"':1,"<":1,">":1,"`":1}),Lf=$({},Nf,{"#":1,"?":1,"{":1,"}":1}),xf=$({},Lf,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Mf=function(e,t){var n=sf(e,0);return 32<n&&n<127&&!D(t,e)?e:encodeURIComponent(e)},Pf={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Uf=function(e){return D(Pf,e.scheme)},Vf={},Ff={},jf={},Bf={},Gf={},zf={},Wf={},qf={},Kf={},Hf={},Yf={},Zf={},$f={},Qf={},Jf={},Xf={},ep={},tp={},np={},rp={},ip={},ap=function(e){var t,n=xt(this,ap,"URL"),r=1<arguments.length?arguments[1]:void 0,e=String(e),i=df(n,{type:"URL"});if(void 0!==r)if(r instanceof ap)t=hf(r);else if(o=tf(t={},String(r)))throw TypeError(o);if(o=tf(i,e,null,t))throw TypeError(o);var a=i.searchParams=new uf,o=lf(a);o.updateSearchParams(i.query),o.updateURL=function(){i.query=String(a)||null},L||(n.href=op.call(n),n.origin=sp.call(n),n.protocol=cp.call(n),n.username=up.call(n),n.password=lp.call(n),n.host=dp.call(n),n.hostname=hp.call(n),n.port=fp.call(n),n.pathname=pp.call(n),n.search=vp.call(n),n.searchParams=_p.call(n),n.hash=yp.call(n))},hi=ap.prototype,op=function(){var e=hf(this),t=e.scheme,n=e.username,r=e.password,i=e.host,a=e.port,o=e.path,s=e.query,c=e.fragment,u=t+":";return null!==i?(u+="//",$h(e)&&(u+=n+(r?":"+r:"")+"@"),u+=Zh(i),null!==a&&(u+=":"+a)):"file"==t&&(u+="//"),u+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(u+="?"+s),null!==c&&(u+="#"+c),u},sp=function(){var e=hf(this),t=e.scheme,n=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(e){return"null"}return"file"!=t&&Uf(e)?t+"://"+Zh(e.host)+(null!==n?":"+n:""):"null"},cp=function(){return hf(this).scheme+":"},up=function(){return hf(this).username},lp=function(){return hf(this).password},dp=function(){var e=hf(this),t=e.host,e=e.port;return null===t?"":null===e?Zh(t):Zh(t)+":"+e},hp=function(){var e=hf(this).host;return null===e?"":Zh(e)},fp=function(){var e=hf(this).port;return null===e?"":String(e)},pp=function(){var e=hf(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},vp=function(){var e=hf(this).query;return e?"?"+e:""},_p=function(){return hf(this).searchParams},yp=function(){var e=hf(this).fragment;return e?"#"+e:""},$=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};L&&Ye(hi,{href:$(op,function(e){var t=hf(this),e=String(e),e=tf(t,e);if(e)throw TypeError(e);lf(t.searchParams).updateSearchParams(t.query)}),origin:$(sp),protocol:$(cp,function(e){var t=hf(this);tf(t,String(e)+":",Vf)}),username:$(up,function(e){var t=hf(this),n=nl(String(e));if(!Qh(t)){t.username="";for(var r=0;r<n.length;r++)t.username+=Mf(n[r],xf)}}),password:$(lp,function(e){var t=hf(this),n=nl(String(e));if(!Qh(t)){t.password="";for(var r=0;r<n.length;r++)t.password+=Mf(n[r],xf)}}),host:$(dp,function(e){var t=hf(this);t.cannotBeABaseURL||tf(t,String(e),Yf)}),hostname:$(hp,function(e){var t=hf(this);t.cannotBeABaseURL||tf(t,String(e),Zf)}),port:$(fp,function(e){var t=hf(this);Qh(t)||(""==(e=String(e))?t.port=null:tf(t,e,$f))}),pathname:$(pp,function(e){var t=hf(this);t.cannotBeABaseURL||(t.path=[],tf(t,e+"",ep))}),search:$(vp,function(e){var t=hf(this);""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",tf(t,e,rp)),lf(t.searchParams).updateSearchParams(t.query)}),searchParams:$(_p),hash:$(yp,function(e){var t=hf(this);""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",tf(t,e,ip)):t.fragment=null})}),he(hi,"toJSON",function(){return op.call(this)},{enumerable:!0}),he(hi,"toString",function(){return op.call(this)},{enumerable:!0}),cf&&(rf=cf.createObjectURL,af=cf.revokeObjectURL,rf&&he(ap,"createObjectURL",function(e){return rf.apply(cf,arguments)}),af&&he(ap,"revokeObjectURL",function(e){return af.apply(cf,arguments)})),st(ap,"URL"),ie({global:!0,forced:!a,sham:!L},{URL:ap}),(hi=of=of||{})[hi.defaultVideoWidth=1280]="defaultVideoWidth",hi[hi.defaultVideoHeight=720]="defaultVideoHeight",hi[hi.defaultFrameRate=24]="defaultFrameRate";var gp,mp=null,kp=function(){function e(){Un(this,e)}return Fn(e,null,[{key:"transcodingToMP4",value:function(n){var e=URL.createObjectURL(new Blob(['importScripts("https://unpkg.com/ffmpeg.js@3.1.9001/ffmpeg-worker-mp4.js");'],{type:"application/javascript"})),i=new Worker(e);return new Promise(function(r,e){i.onmessage=function(e){var t=e.data;switch(t.type){case"ready":Ra.info("ffmpeg ready");break;case"stdout":case"stderr":Ra.info(t.data);break;case"error":Ra.error(t.data);break;case"done":var n=t.data.MEMFS[0].data;r(n),i.terminate()}};var t=new FileReader;t.onload=function(){i.postMessage({type:"run",arguments:"-i recording.webm -c:v copy output.mp4".split(" "),MEMFS:[{name:"recording.webm",data:new Uint8Array(t.result)}]})},t.readAsArrayBuffer(new Blob(n,{type:'video/mp4; codec="h264, mp4a402"'}))})}},{key:"downloadRecordedFile",value:function(e,t){var n=window.URL.createObjectURL(e),r=document.createElement("a");r.style.display="none",r.href=n,r.download=t,document.body.appendChild(r),r.click(),setTimeout(function(){document.body.removeChild(r),window.URL.revokeObjectURL(n)},100)}},{key:"getMergedAudioStream",value:function(e,t){var n=[],r=(mp=mp||new(window.AudioContext||window.webkitAudioContext)).createGain();r.connect(mp.destination),r.gain.value=1;var i=new MediaStream;i.addTrack(e),n.push(mp.createMediaStreamSource(i).connect(r));i=new MediaStream;i.addTrack(t),n.push(mp.createMediaStreamSource(i).connect(r));for(var a=mp.createMediaStreamDestination(),o=0,s=n;o<s.length;o++)s[o].connect(a);return a.stream.getAudioTracks()[0]}},{key:"getVideoStream",value:function(r){var i=document.createElement("canvas");i.width=of.defaultVideoWidth,i.height=of.defaultVideoHeight;var a=i.getContext("2d"),e=setInterval(function(){var e,t=r.videoWidth,n=r.videoHeight;n>i.height&&(e=r.videoWidth/r.videoHeight,t=(n=i.height)*e),a.drawImage(r,i.width/2-t/2,i.height/2-n/2,t,n)},10);return{stream:i.captureStream(),cleanup:function(){return clearInterval(e)}}}}]),e}(),Ep=function(){function e(){Un(this,e)}return Fn(e,null,[{key:"createStream",value:function(e,t){var n={mimeType:"video/webm"},r=e.localMediaView.srcObject,i=e.remoteMediaView.srcObject;switch(t){case La.REMOTE_AUDIO_AND_VIDEO:return{stream:i,options:n};case La.REMOTE_AUDIO_ONLY:n.mimeType="audio/webm";var a=new MediaStream;return a.addTrack(i.getAudioTracks()[0]),{stream:a,options:n};case La.LOCAL_REMOTE_AUDIOS:n.mimeType="audio/webm";var o=new MediaStream,a=kp.getMergedAudioStream(r.getAudioTracks()[0],i.getAudioTracks()[0]);return o.addTrack(a),{stream:o,options:n};case La.LOCAL_AUDIO_REMOTE_AUDIO_AND_VIDEO:var s=kp.getVideoStream(e.remoteMediaView),c=s.stream,u=s.cleanup,s=kp.getMergedAudioStream(r.getAudioTracks()[0],i.getAudioTracks()[0]);return c.addTrack(s),{stream:c,options:n,cleanup:u};case La.LOCAL_AUDIO_AND_VIDEO_REMOTE_AUDIO:s=kp.getVideoStream(e.localMediaView),c=s.stream,u=s.cleanup,s=kp.getMergedAudioStream(r.getAudioTracks()[0],i.getAudioTracks()[0]);return c.addTrack(s),{stream:c,options:n,cleanup:u};default:return Ra.error("Cannot reach here!"),{options:n}}}}]),e}(),Cp=function(){function n(e,t){Un(this,n),this.call=e,this.stateManager=t,this.timer=null}return Fn(n,[{key:"dialSent",value:function(){Ra.verbose("[".concat(this.type,"] dialSent"))}},{key:"dialFailed",value:function(){Ra.verbose("[".concat(this.type,"] dialFailed"))}},{key:"accept",value:function(e){Ra.verbose("[".concat(this.type,"] accept"))}},{key:"acceptSent",value:function(e){Ra.verbose("[".concat(this.type,"] acceptSent"))}},{key:"acceptFailed",value:function(){Ra.verbose("[".concat(this.type,"] acceptFailed"))}},{key:"receiveAccept",value:function(){Ra.verbose("[".concat(this.type,"] receiveAccept"))}},{key:"receiveAccepted",value:function(){Ra.verbose("[".concat(this.type,"] receiveAccepted"))}},{key:"end",value:function(){Ra.verbose("[".concat(this.type,"] end"))}},{key:"endSent",value:function(e){Ra.verbose("[".concat(this.type,"] endSent"))}},{key:"receiveOffer",value:function(){Ra.verbose("[".concat(this.type,"] receiveOffer"))}},{key:"receiveEnd",value:function(e){Ra.verbose("[".concat(this.type,"] receiveEnd"))}},{key:"timeout",value:function(){Ra.verbose("[".concat(this.type,"] timeout"))}},{key:"pcConnected",value:function(){Ra.verbose("[".concat(this.type,"] pc connected"))}},{key:"pcReconnecting",value:function(){Ra.verbose("[".concat(this.type,"] pc reconnecting"))}},{key:"closed",value:function(){Ra.verbose("[".concat(this.type,"] closed"))}},{key:"onStart",value:function(){}},{key:"onDestroy",value:function(){}},{key:"fireTimeout",value:function(){}},{key:"toggleVideo",value:function(e){Ra.verbose("[".concat(this.type,"] toggleVideo ").concat(e))}},{key:"toggleMicrophone",value:function(e){Ra.verbose("[".concat(this.type,"] toggleMicrophone ").concat(e))}},{key:"_createTimer",value:function(e,t){var n=this;this.timer?Ra.error("Only one timer allowed"):this.timer=setTimeout(function(){n._removeTimer(),e()},t)}},{key:"_removeTimer",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=null)}}]),n}();(a=gp=gp||{}).IDLE="idle",a.DIALING="dialing",a.RINGING="ringing",a.ACCEPTING="accepting",a.ESTABLISHED="established",a.CONNECTED="connected",a.RECONNECTING="reconnecting",a.ICERESTART="icerestart",a.ENDED="ended",a.ABORTED="aborted",a.CLOSING="closing",a.ENDING="ending",a.CANCELED="canceled";var wp,bp=function(){zn(t,Cp);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return Fn(t,[{key:"onStart",value:function(){this.call.stopToSendAlive(),this.call.fireOnEnded()}},{key:"dialSent",value:function(){this.call.sendCancelCommand().catch(function(e){return Ra.debug(e)})}},{key:"dialFailed",value:function(){this.stateManager.toEnded()}},{key:"endSent",value:function(e){this.call.setEndInfo(e.payload.endedCall),this.stateManager.toEnded()}},{key:"receiveEnd",value:function(e){this.call.setEndInfo(e.payload.endedCall),this.stateManager.toEnded()}},{key:"type",get:function(){return gp.ABORTED}}]),t}();(hi=wp=wp||{}).ACCEPTING="accepting_timeout",hi.ANSWERING="answering_timeout",hi.OFFERING="offering_timeout";var Rp=function(){zn(n,Cp);var e,t=Qn(n);function n(){return Un(this,n),t.apply(this,arguments)}return Fn(n,[{key:"onStart",value:function(){this.call.sendAcceptCommand().catch(function(e){return Ra.debug(e)}),this.call.startCallConnectionTimer()}},{key:"acceptSent",value:function(){this.stateManager.toEstablished()}},{key:"receiveOffer",value:(e=Pn(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.stateManager.toEstablished();case 1:case"end":return e.stop()}},e,this)})),function(){return e.apply(this,arguments)})},{key:"acceptFailed",value:function(){this.call.setEndResult(Ca.ACCEPT_FAILED),this.stateManager.toClosing()}},{key:"end",value:function(){this.call.sendEndCommand().catch(function(e){return Ra.debug(e)}),this.call.setEndResult(Ca.COMPLETED),this.stateManager.toClosing()}},{key:"fireTimeout",value:function(){this.call.sendTimeoutCommand(wp.ACCEPTING).catch(function(e){return Ra.debug(e)}),this.call.setEndResult(Ca.TIMED_OUT),this.stateManager.toClosing()}},{key:"receiveEnd",value:function(e){this.call.setEndResult(e.payload.endedCall.endResult),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"toggleMicrophone",value:function(e){this.call.toggleMicrophone(e),this.call.sendAudioCommand().catch(function(e){return Ra.debug(e)})}},{key:"toggleVideo",value:function(e){this.call.toggleVideo(e),this.call.sendVideoCommand().catch(function(e){return Ra.debug(e)})}},{key:"type",get:function(){return gp.ACCEPTING}}]),n}(),Ip=function(){zn(t,Cp);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return Fn(t,[{key:"onStart",value:function(){this.call.stopCallConnectionTimer(),this.call.fireOnRinging(),this.stateManager.toClosing()}},{key:"type",get:function(){return gp.CANCELED}}]),t}(),Ap=function(){zn(t,Cp);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return Fn(t,[{key:"onStart",value:function(){this.call.stopCallConnectionTimer(),this.call.stopToSendAlive(),this.call.stopCurrentRecording(),this.call.closeRTCConnection(),this.closed()}},{key:"endSent",value:function(e){this.call.setEndInfo(e.payload.endedCall)}},{key:"closed",value:function(){this.stateManager.toEnding()}},{key:"type",get:function(){return gp.CLOSING}}]),t}(),Sp=function(){zn(i,Cp);var r=Qn(i);function i(e,t,n){return Un(this,i),(t=r.call(this,e,t)).isReconnected=n,t}return Fn(i,[{key:"onStart",value:function(){this.call.stopCallConnectionTimer(),this.call.startGetWebRtcStats(),this.call.sendConnectedInfo(),this.isReconnected?(this.call.setIsReconnected(!0),this.call.fireOnReconnected(),this.call.playSound(Fa.RECONNECTED)):(this.call.calcCallSetupTime(),this.call.fireOnConnected())}},{key:"onDestroy",value:function(){this.call.stopGetWebRtcStats(),this.isReconnected&&this.call.stopSound(Fa.RECONNECTED)}},{key:"pcReconnecting",value:function(){this.stateManager.toReconnecting()}},{key:"end",value:function(){this.call.sendEndCommand().catch(function(e){return Ra.debug(e)}),this.call.setEndResult(Ca.COMPLETED),this.stateManager.toClosing()}},{key:"receiveEnd",value:function(e){this.call.setEndResult(e.payload.endedCall.endResult),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"toggleMicrophone",value:function(e){this.call.toggleMicrophone(e),this.call.sendAudioCommand().catch(function(e){return Ra.debug(e)})}},{key:"toggleVideo",value:function(e){this.call.toggleVideo(e),this.call.sendVideoCommand().catch(function(e){return Ra.debug(e)})}},{key:"type",get:function(){return gp.CONNECTED}}]),i}(),Tp=function(){zn(t,Cp);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return Fn(t,[{key:"onStart",value:function(){var e=this;this._createTimer(function(){e._noAnswer()},this._getTimeoutTime()),this.call.startToSendAlive(),this.call.playSound(Fa.DIALING)}},{key:"onDestroy",value:function(){this._removeTimer(),this.call.stopSound(Fa.DIALING)}},{key:"receiveAccept",value:function(){this.stateManager.toEstablished()}},{key:"end",value:function(){this.call.sendCancelCommand().catch(function(e){return Ra.debug(e)}),this.call.setEndResult(Ca.CANCELED),this.stateManager.toClosing()}},{key:"receiveEnd",value:function(e){this.call.setEndResult(e.payload.endedCall.endResult),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"_noAnswer",value:function(){this.call.sendNoAnswerCommand().catch(function(e){return Ra.debug(e)}),this.call.setEndResult(Ca.NO_ANSWER),this.stateManager.toClosing()}},{key:"_getTimeoutTime",value:function(){return this.call.options.ringingTimeoutValue}},{key:"toggleMicrophone",value:function(e){this.call.toggleMicrophone(e),this.call.sendAudioCommand().catch(function(e){return Ra.debug(e)})}},{key:"toggleVideo",value:function(e){this.call.toggleVideo(e),this.call.sendVideoCommand().catch(function(e){return Ra.debug(e)})}},{key:"type",get:function(){return gp.DIALING}}]),t}(),Op=function(){zn(t,Cp);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return Fn(t,[{key:"onStart",value:function(){this.call.stopAllSound()}},{key:"endSent",value:function(e){this.call.setEndInfo(e.payload.endedCall)}},{key:"type",get:function(){return gp.ENDED}}]),t}(),Dp=function(){zn(t,Cp);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return Fn(t,[{key:"onStart",value:function(){this.call.sendCallSummary(),this.call.fireOnEnded(),this.stateManager.toEnded()}},{key:"type",get:function(){return gp.ENDING}}]),t}(),Np=function(){zn(r,Cp);var n=Qn(r);function r(e,t){return Un(this,r),(t=n.call(this,e,t)).isInitiator=e.isCaller,t}return Fn(r,[{key:"onStart",value:function(){this.call.fireOnEstablished(),this.call.sendAudioCommand(),this.call.sendVideoCommand(),this.call.createPeerConnection(),this.isInitiator&&this.call.startCallConnectionTimer()}},{key:"onDestroy",value:function(){}},{key:"pcConnected",value:function(){this.stateManager.toConnected(!1)}},{key:"end",value:function(){this.call.sendEndCommand().catch(function(e){return Ra.debug(e)}),this.call.setEndResult(Ca.COMPLETED),this.stateManager.toClosing()}},{key:"fireTimeout",value:function(){this.call.sendTimeoutCommand(this.isInitiator?wp.OFFERING:wp.ANSWERING).catch(function(e){return Ra.debug(e)}),this.call.setEndResult(Ca.TIMED_OUT),this.stateManager.toClosing()}},{key:"receiveEnd",value:function(e){this.call.setEndResult(e.payload.endedCall.endResult),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"toggleMicrophone",value:function(e){this.call.toggleMicrophone(e),this.call.sendAudioCommand().catch(function(e){return Ra.debug(e)})}},{key:"toggleVideo",value:function(e){this.call.toggleVideo(e),this.call.sendVideoCommand().catch(function(e){return Ra.debug(e)})}},{key:"type",get:function(){return gp.ESTABLISHED}}]),r}(),Lp=function(){zn(t,Cp);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return Fn(t,[{key:"dialSent",value:function(){this.stateManager.toDialing()}},{key:"dialFailed",value:function(){this.call.setEndResult(Ca.DIAL_FAILED),this.stateManager.toClosing()}},{key:"end",value:function(){this.call.setEndResult(Ca.CANCELED),this.stateManager.toAborted()}},{key:"toggleMicrophone",value:function(e){this.call.toggleMicrophone(e)}},{key:"toggleVideo",value:function(e){this.call.toggleVideo(e)}},{key:"type",get:function(){return gp.IDLE}}]),t}(),xp=function(){zn(r,Cp);var n=Qn(r);function r(e,t){return Un(this,r),n.call(this,e,t)}return Fn(r,[{key:"onStart",value:function(){var e=this;this._createTimer(function(){e.call.sendConnectionLostCommand().catch(function(e){return Ra.debug(e)})},this._getTimeoutTime()),this.call.fireOnReconnecting(),this.call.playSound(Fa.RECONNECTING)}},{key:"onDestroy",value:function(){this._removeTimer(),this.call.stopSound(Fa.RECONNECTING)}},{key:"pcConnected",value:function(){this.stateManager.toConnected(!0)}},{key:"end",value:function(){this.call.sendEndCommand().catch(function(e){return Ra.debug(e)}),this.call.setEndResult(Ca.COMPLETED),this.stateManager.toClosing()}},{key:"endSent",value:function(e){this.call.setEndResult(Ca.CONNECTION_LOST),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"receiveEnd",value:function(e){this.call.setEndResult(e.payload.endedCall.endResult),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"_getTimeoutTime",value:function(){return 3e4}},{key:"toggleMicrophone",value:function(e){this.call.toggleMicrophone(e),this.call.sendAudioCommand().catch(function(e){return Ra.debug(e)})}},{key:"toggleVideo",value:function(e){this.call.toggleVideo(e),this.call.sendVideoCommand().catch(function(e){return Ra.debug(e)})}},{key:"type",get:function(){return gp.RECONNECTING}}]),r}(),Mp=function(){zn(t,Cp);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return Fn(t,[{key:"onStart",value:function(){var e=this;this._createTimer(function(){e._noAnswer()},this._getTimeoutTime()),this.call.startToSendAlive(),this.call.fireOnRinging(),this.call.playSound(Fa.RINGING)}},{key:"onDestroy",value:function(){this._removeTimer(),this.call.stopSound(Fa.RINGING)}},{key:"accept",value:function(e){this.stateManager.toAccepting()}},{key:"receiveAccepted",value:function(){this.call.setEndResult(Ca.OTHER_DEVICE_ACCEPTED),this.stateManager.toClosing()}},{key:"end",value:function(){this.call.sendDeclineCommand().catch(function(e){return Ra.debug(e)}),this.call.setEndResult(Ca.DECLINED),this.stateManager.toClosing()}},{key:"endSent",value:function(e){this.call.setEndResult(Ca.DECLINED),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"receiveEnd",value:function(e){this.call.setEndResult(e.payload.endedCall.endResult),this.call.setEndInfo(e.payload.endedCall),this.stateManager.toClosing()}},{key:"toggleMicrophone",value:function(e){this.call.toggleMicrophone(e)}},{key:"toggleVideo",value:function(e){this.call.toggleVideo(e)}},{key:"_noAnswer",value:function(){this.call.sendNoAnswerCommand().catch(function(e){return Ra.debug(e)}),this.call.setEndResult(Ca.NO_ANSWER),this.stateManager.toClosing()}},{key:"_getTimeoutTime",value:function(){return this.call.options.ringingTimeoutValue}},{key:"type",get:function(){return gp.RINGING}}]),t}(),Pp=function(){function t(e){Un(this,t),this.call=e,this._state=null}return Fn(t,[{key:"toAborted",value:function(){this._changeState(new bp(this.call,this))}},{key:"toAccepting",value:function(){this._changeState(new Rp(this.call,this))}},{key:"toCanceled",value:function(){this._changeState(new Ip(this.call,this))}},{key:"toClosing",value:function(){this._changeState(new Ap(this.call,this))}},{key:"toConnected",value:function(e){this._changeState(new Sp(this.call,this,e))}},{key:"toDialing",value:function(){this._changeState(new Tp(this.call,this))}},{key:"toEnded",value:function(){this._changeState(new Op(this.call,this))}},{key:"toEnding",value:function(){this._changeState(new Dp(this.call,this))}},{key:"toEstablished",value:function(){this._changeState(new Np(this.call,this))}},{key:"toIdle",value:function(){this._changeState(new Lp(this.call,this))}},{key:"toReconnecting",value:function(){this._changeState(new xp(this.call,this))}},{key:"toRinging",value:function(){this._changeState(new Mp(this.call,this))}},{key:"_changeState",value:function(e){this._state&&this._state.type===e.type?Ra.error(new Error("self-transition is not allowed")):(Ra.debug("state: ".concat(this._state?this._state.type:"null"," -> ").concat(e.type)),this._state&&this._state.onDestroy(),this._state=e,this._state.onStart())}},{key:"state",get:function(){return this._state}}]),t}(),a=C("slice"),hi=e("slice",{ACCESSORS:!0,0:0,1:2}),Up=ce("species"),Vp=[].slice,Fp=Math.max;ie({target:"Array",proto:!0,forced:!a||!hi},{slice:function(e,t){var n,r,i,a=h(this),o=te(a.length),s=ne(e,o),c=ne(void 0===t?o:t,o);if(Ne(a)&&(("function"==typeof(n=a.constructor)&&(n===Array||Ne(n.prototype))||T(n)&&null===(n=n[Up]))&&(n=void 0),n===Array||void 0===n))return Vp.call(a,s,c);for(r=new(void 0===n?Array:n)(Fp(c-s,0)),i=0;s<c;s++,i++)s in a&&fr(r,i,a[s]);return r.length=i,r}});var C=C("splice"),e=e("splice",{ACCESSORS:!0,0:0,1:2}),jp=Math.max,Bp=Math.min;ie({target:"Array",proto:!0,forced:!C||!e},{splice:function(e,t){var n,r,i,a,o,s,c=se(this),u=te(c.length),l=ne(e,u),e=arguments.length;if(0===e?n=r=0:r=1===e?(n=0,u-l):(n=e-2,Bp(jp(ee(t),0),u-l)),9007199254740991<u+n-r)throw TypeError("Maximum allowed length exceeded");for(i=ue(c,r),a=0;a<r;a++)(o=l+a)in c&&fr(i,a,c[o]);if(n<(i.length=r)){for(a=l;a<u-r;a++)s=a+n,(o=a+r)in c?c[s]=c[o]:delete c[s];for(a=u;u-r+n<a;a--)delete c[a-1]}else if(r<n)for(a=u-r;l<a;a--)s=a+n-1,(o=a+r-1)in c?c[s]=c[o]:delete c[s];for(a=0;a<n;a++)c[a+l]=arguments[a+2];return c.length=u-r+n,i}});var Gp,zp=function(){function e(){Un(this,e),jn(this,"_listeners",{}),jn(this,"on",this.addEventListener)}return Fn(e,[{key:"addEventListener",value:function(e,t){e in this._listeners||(this._listeners[e]=[]),this._listeners[e].push(t)}},{key:"once",value:function(t,n){function r(e){n(e),i.removeEventListener(t,r)}var i=this;this.on(t,r)}},{key:"removeEventListener",value:function(e,t){if(e in this._listeners)for(var n=this._listeners[e],r=0,i=n.length;r<i;r++)if(n[r]===t)return void n.splice(r,1)}},{key:"removeAllEventListeners",value:function(){this._listeners={}}},{key:"_dispatchEvent",value:function(e){if(e.type in this._listeners)for(var t=this._listeners[e.type].slice(),n=0,r=t.length;n<r;n++)t[n].call(this,e)}}]),e}(),Wp=function(){function t(e){Un(this,t),this._stateMutator=e}return Fn(t,[{key:"start",value:function(){this._onStart()}},{key:"destroy",value:function(){this._onDestroy()}},{key:"context",set:function(e){this._context=e}}]),t}(),qp=function(){zn(r,Wp);var n=Qn(r);function r(e){var t;return Un(this,r),(t=n.call(this,e))._stateMutator=e,t}return r}();(e=Gp=Gp||{}).IDLE="idle",e.OFFERING="offering",e.ANSWERING="answering",e.CONNECTED="connected",e.RECONNECTING="reconnecting",e.ICE_RESTART_OFFERING="iceRestartOffering",e.ICE_RESTART_ANSWERING="iceRestartAnswering",e.CLOSED="closed";var Kp,Hp=function(){zn(i,qp);var t,r=Qn(i);function i(e,t){var n;return Un(this,i),jn($n(n=r.call(this,e)),"type",Gp.ANSWERING),n._stateMutator=e,n._offerCommand=t,n}return Fn(i,[{key:"_onStart",value:function(){this._context.dispatchEvent({type:"answering"}),this._context.createRTCConnection(),this._offerCommand&&this.onOfferReceived(this._offerCommand)}},{key:"_onDestroy",value:function(){}},{key:"onOfferReceived",value:(t=Pn(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._context.setRemoteDescription("offer",t.payload.sdp);case 2:this._context.addTracks(),this._context.sendAnswer().catch(function(e){return Ra.debug(e)});case 4:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"onIceConnected",value:function(){this._stateMutator.toConnected(!1)}},{key:"onClose",value:function(){this._stateMutator.toClosed()}}]),i}(),Yp=function(){zn(a,qp);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",Gp.CLOSED),e}return Fn(a,[{key:"_onStart",value:function(){this._context.dispatchEvent({type:"closed"})}},{key:"_onDestroy",value:function(){}}]),a}(),Zp=function(){zn(i,qp);var t,r=Qn(i);function i(e,t){var n;return Un(this,i),jn($n(n=r.call(this,e)),"type",Gp.CONNECTED),n._stateMutator=e,n._isReconnected=t,n}return Fn(i,[{key:"_onStart",value:function(){this._context.dispatchEvent({type:"connected"})}},{key:"_onDestroy",value:function(){}},{key:"onOfferReceived",value:(t=Pn(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this._stateMutator.toReconnecting(t);case 1:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"onIceDisconnected",value:function(){this._stateMutator.toReconnecting()}},{key:"onIceFailed",value:function(){this._context.isInitiator?this._stateMutator.toIceRestartOffering():this._stateMutator.toIceRestartAnswering()}},{key:"onClose",value:function(){this._stateMutator.toClosed()}}]),i}(),$p=function(){zn(i,qp);var t,r=Qn(i);function i(e,t){var n;return Un(this,i),jn($n(n=r.call(this,e)),"type",Gp.ICE_RESTART_ANSWERING),n._stateMutator=e,n._offerCommand=t,n}return Fn(i,[{key:"_onStart",value:function(){this._context.dispatchEvent({type:"iceRestartAnswering"}),this._offerCommand&&this.onOfferReceived(this._offerCommand)}},{key:"_onDestroy",value:function(){}},{key:"onOfferReceived",value:(t=Pn(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._context.setRemoteDescription("offer",t.payload.sdp);case 2:this._context.sendAnswer().catch(function(e){return Ra.debug(e)});case 3:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"onIceConnected",value:function(){this._stateMutator.toConnected(!0)}},{key:"onClose",value:function(){this._stateMutator.toClosed()}}]),i}(),Qp=function(){zn(a,qp);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",Gp.ICE_RESTART_OFFERING),e}return Fn(a,[{key:"_onStart",value:function(){this._context.dispatchEvent({type:"iceRestartOffering"}),this._context.sendOffer(!0)}},{key:"_onDestroy",value:function(){}},{key:"onAnswerReceived",value:function(e){this._context.setRemoteDescription("answer",e.payload.sdp)}},{key:"onIceConnected",value:function(){this._stateMutator.toConnected(!0)}},{key:"onClose",value:function(){this._stateMutator.toClosed()}}]),a}(),Jp=function(){zn(a,qp);var t,i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",Gp.IDLE),e}return Fn(a,[{key:"_onStart",value:function(){}},{key:"_onDestroy",value:function(){}},{key:"createOffer",value:function(){this._stateMutator.toOffering()}},{key:"onOfferReceived",value:(t=Pn(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this._stateMutator.toAnswering(t);case 1:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"onClose",value:function(){this._stateMutator.toClosed()}}]),a}(),Xp=function(){zn(a,qp);var i=Qn(a);function a(){var e;Un(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn($n(e=i.call.apply(i,[this].concat(n))),"type",Gp.OFFERING),e}return Fn(a,[{key:"_onStart",value:function(){this._context.dispatchEvent({type:"offering"}),this._context.createRTCConnection(),this._context.addTracks()}},{key:"_onDestroy",value:function(){}},{key:"onAnswerReceived",value:function(e){this._context.setRemoteDescription("answer",e.payload.sdp)}},{key:"onIceConnected",value:function(){this._stateMutator.toConnected(!1)}},{key:"onClose",value:function(){this._stateMutator.toClosed()}}]),a}(),ev=function(){zn(i,qp);var r=Qn(i);function i(e,t){var n;return Un(this,i),jn($n(n=r.call(this,e)),"type",Gp.RECONNECTING),n._stateMutator=e,n._offerCommand=t,n}return Fn(i,[{key:"_onStart",value:function(){this._context.dispatchEvent({type:"reconnecting"}),this._offerCommand&&this.onOfferReceived(this._offerCommand)}},{key:"_onDestroy",value:function(){}},{key:"onOfferReceived",value:function(e){this._stateMutator.toIceRestartAnswering(e)}},{key:"onIceConnected",value:function(){this._stateMutator.toConnected(!0)}},{key:"onIceFailed",value:function(){this._context.isInitiator?this._stateMutator.toIceRestartOffering():this._stateMutator.toIceRestartAnswering()}},{key:"onClose",value:function(){this._stateMutator.toClosed()}}]),i}(),tv=function(){function t(e){Un(this,t),this._context=e}return Fn(t,[{key:"_changeState",value:function(e){this._state&&this._state.type===e.type?Ra.error(new Error("self-transition is not allowed")):(Ra.debug("state: ".concat(this._state?this._state.type:"null"," -> ").concat(e.type)),this._state&&this._state.destroy(),this._state=e,this._state.context=this._context,this._state.start())}},{key:"state",get:function(){return this._state}}]),t}(),nv=function(){zn(t,tv);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return Fn(t,[{key:"toIdle",value:function(){this._changeState(new Jp(this))}},{key:"toOffering",value:function(){this._changeState(new Xp(this))}},{key:"toAnswering",value:function(e){this._changeState(new Hp(this,e))}},{key:"toConnected",value:function(e){this._changeState(new Zp(this,e))}},{key:"toReconnecting",value:function(e){this._changeState(new ev(this,e))}},{key:"toIceRestartOffering",value:function(){this._changeState(new Qp(this))}},{key:"toIceRestartAnswering",value:function(e){this._changeState(new $p(this,e))}},{key:"toClosed",value:function(){this._changeState(new Yp(this))}},{key:"state",get:function(){return this._state}}]),t}(),rv=function(){function n(e,t){Un(this,n),this._context=e,this._stateMutator=t}return Fn(n,[{key:"state",get:function(){return this._stateMutator.state}}]),n}(),iv=function(){zn(r,rv);var n=Qn(r);function r(e){var t;return Un(this,r),(t=n.call(this,e,new nv(e)))._context=e,t._stateMutator.toIdle(),t}return Fn(r,[{key:"onOfferReceived",value:function(e){Ra.verbose("[".concat(this.state.type,"] onOfferReceived"));var t=this.state;switch(t.type){case Gp.IDLE:case Gp.ANSWERING:case Gp.CONNECTED:case Gp.RECONNECTING:case Gp.ICE_RESTART_ANSWERING:t.onOfferReceived(e);break;default:Ra.error("[".concat(this.state.type,"] onOfferReceived"))}}},{key:"onAnswerReceived",value:function(e){Ra.verbose("[".concat(this.state.type,"] onAnswerReceived"));var t=this.state;switch(t.type){case Gp.OFFERING:case Gp.ICE_RESTART_OFFERING:t.onAnswerReceived(e);break;default:Ra.error("[".concat(this.state.type,"] onAnswerReceived"))}}},{key:"onClose",value:function(){Ra.verbose("[".concat(this.state.type,"] onClose"));var e=this.state;switch(e.type){case Gp.IDLE:case Gp.OFFERING:case Gp.ANSWERING:case Gp.CONNECTED:case Gp.RECONNECTING:case Gp.ICE_RESTART_OFFERING:case Gp.ICE_RESTART_ANSWERING:e.onClose();break;default:Ra.error("[".concat(this.state.type,"] onClose"))}}},{key:"createOffer",value:function(){Ra.verbose("[".concat(this.state.type,"] createOffer"));var e=this.state;e.type===Gp.IDLE?e.createOffer():Ra.error("[".concat(this.state.type,"] createOffer"))}},{key:"onIceConnected",value:function(){Ra.verbose("[".concat(this.state.type,"] onIceConnected"));var e=this.state;switch(e.type){case Gp.OFFERING:case Gp.ANSWERING:case Gp.RECONNECTING:case Gp.ICE_RESTART_OFFERING:case Gp.ICE_RESTART_ANSWERING:e.onIceConnected();break;default:Ra.error("[".concat(this.state.type,"] onIceConnected"))}}},{key:"onIceDisconnected",value:function(){Ra.verbose("[".concat(this.state.type,"] onIceDisconnected"));var e=this.state;e.type===Gp.CONNECTED?e.onIceDisconnected():Ra.error("[".concat(this.state.type,"] onIceDisconnected"))}},{key:"onIceFailed",value:function(){Ra.verbose("[".concat(this.state.type,"] onIceFailed"));var e=this.state;switch(e.type){case Gp.CONNECTED:case Gp.RECONNECTING:e.onIceFailed();break;default:Ra.error("[".concat(this.state.type,"] onIceFailed"))}}},{key:"state",get:function(){return this._stateMutator.state}}]),r}();(e=Kp=Kp||{}).RELAY="relay",e.ALL="all";var av,ov=function(){zn(c,zp);var e,t,s=Qn(c);function c(e,t,n,r,i,a){var o;return Un(this,c),(o=s.call(this))._signalingClient=n,o._isInitiator=r,o._turnCredential=i,o._localConstraints=a,o.ctx=e,o.id=t,o._stateMachine=new iv({dispatchEvent:o._dispatchEvent.bind($n(o)),isInitiator:o._isInitiator,setRemoteDescription:o._setRemoteDescription.bind($n(o)),sendAnswer:o._sendAnswer.bind($n(o)),sendOffer:o._sendOffer.bind($n(o)),createRTCConnection:o._createRTCConnection.bind($n(o)),addTracks:o._addTracks.bind($n(o))}),o}return Fn(c,[{key:"onEvent",value:function(e){switch(e.type){case _o.CANDIDATE:return void this._receiveCandidate(e);case _o.OFFER:this._stateMachine.onOfferReceived(e);break;case _o.ANSWER:this._stateMachine.onAnswerReceived(e);break;default:Ra.error(new Error("unhandled call event ".concat(e)))}}},{key:"createOffer",value:function(){this._stateMachine.createOffer()}},{key:"close",value:function(){this._closeRTCConnection(),this._stateMachine.onClose()}},{key:"_createRTCConnection",value:function(){var t=this,e=new RTCPeerConnection({iceServers:[{username:this._turnCredential.username,credential:this._turnCredential.password,urls:this._turnCredential.turnUrls}],iceTransportPolicy:this._turnCredential.transportPolicy||Kp.ALL});e.onnegotiationneeded=function(){t._sendOffer(!1)},e.onicecandidate=function(e){e.candidate&&t._signalingClient.sendCandidate(e.candidate)},e.onconnectionstatechange=function(){return t._handleConnectionStateChange(e)},e.oniceconnectionstatechange=function(){return t._handleIceConnectionStateChange(e)},e.ontrack=function(e){return t._onRemoteTrack(e)},this._rtcConnection=e}},{key:"_closeRTCConnection",value:function(){this._rtcConnection&&(this._rtcConnection.onnegotiationneeded=null,this._rtcConnection.onicecandidate=null,this._rtcConnection.oniceconnectionstatechange=null,this._rtcConnection.onconnectionstatechange=null,this._rtcConnection.close(),this._rtcConnection=null)}},{key:"_addTracks",value:function(){var t=this,n=this.ctx.deviceManager.stream;n.getTracks().forEach(function(e){t._rtcConnection.addTrack(e,n)})}},{key:"_setRemoteDescription",value:function(e,t){t=new RTCSessionDescription({type:e,sdp:t});return this._rtcConnection.setRemoteDescription(t)}},{key:"_sendOffer",value:(t=Pn(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={iceRestart:t||!1},e.next=3,this._rtcConnection.createOffer(n);case 3:return n=e.sent,e.next=6,this._rtcConnection.setLocalDescription(n);case 6:return e.abrupt("return",this._signalingClient.sendOfferSdp(this._rtcConnection.localDescription));case 7:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"_sendAnswer",value:(e=Pn(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._rtcConnection.createAnswer();case 2:return(t=e.sent).sdp=t.sdp.replace("actpass","active"),e.next=6,this._rtcConnection.setLocalDescription(t);case 6:return e.abrupt("return",this._signalingClient.sendAnswerSdp(this._rtcConnection.localDescription));case 7:case"end":return e.stop()}},e,this)})),function(){return e.apply(this,arguments)})},{key:"_handleIceConnectionStateChange",value:function(e){switch(Ra.verbose("[".concat(this._state.type,"] iceConnectionState ").concat(e.iceConnectionState)),e.iceConnectionState){case"connected":this._stateMachine.onIceConnected();break;case"disconnected":this._stateMachine.onIceDisconnected();break;case"failed":this._stateMachine.onIceFailed()}}},{key:"_handleConnectionStateChange",value:function(e){Ra.verbose("[".concat(this._state.type,"] connectionState ").concat(e.connectionState))}},{key:"_receiveCandidate",value:function(e){e=e.payload.candidate;this._rtcConnection.addIceCandidate({sdpMLineIndex:e.sdpMLineIndex,sdpMid:e.sdpMid,candidate:e.sdp})}},{key:"replaceTrack",value:function(e){if(this._rtcConnection){var t=ar(this._rtcConnection.getSenders());try{for(t.s();!(n=t.n()).done;){var n=n.value;n.track&&n.track.kind===e.kind&&n.replaceTrack(e)}}catch(e){t.e(e)}finally{t.f()}}}},{key:"_onRemoteTrack",value:function(e){this._remoteStream=e.streams[0],this._dispatchEvent({type:"remoteStream"})}},{key:"_state",get:function(){return this._stateMachine.state}},{key:"isInitiator",get:function(){return this._isInitiator}},{key:"rtcConnection",get:function(){return this._rtcConnection}},{key:"remoteStream",get:function(){return this._remoteStream}}]),c}(),sv=function(){function r(e,t,n){Un(this,r),this.ctx=e,this.callId=t,this.peerConnectionId=n}return Fn(r,[{key:"sendOfferSdp",value:function(e){e=il.createOffer(this.callId,this.peerConnectionId,e.sdp);return this.ctx.sender.send(e)}},{key:"sendAnswerSdp",value:function(e){e=il.createAnswer(this.callId,this.peerConnectionId,e.sdp);return this.ctx.sender.send(e)}},{key:"sendCandidate",value:function(e){e=il.createCandidate(this.callId,this.peerConnectionId,e.candidate,e.sdpMLineIndex,e.sdpMid);return this.ctx.sender.send(e)}}]),r}(),cv=function(){zn(i,zp);var r=Qn(i);function i(e,t){var n;return Un(this,i),jn($n(n=r.call(this)),"_peerConnections",new Map),jn($n(n),"_unhandledCommands",[]),n._call=t,n.ctx=e,n}return Fn(i,[{key:"_activePC",get:function(){return this._peerConnections.get(this._activePCId)},set:function(e){this._peerConnections.has(e.id)||this._addPC(e),this._activePCId=e.id}},{key:"_preparingPC",get:function(){return this._peerConnections.get(this._preparingPCId)},set:function(e){this._peerConnections.has(e.id)||this._addPC(e),this._preparingPCId=e.id}},{key:"activePeerConnection",get:function(){return this._activePC}}]),Fn(i,[{key:"createPeerConnection",value:function(e,t,n,r){Ra.debug("Create new peer connection");var i=new sv(this.ctx,this._call.callId,e),r=new ov(this.ctx,e,i,n,t,{audio:!0,video:r});return this._activePC?(this._replacePreparing(r,n),this._dispatchUnhandledCommands(r)):(this._activePC=r,this._dispatchEvent({type:"initialized"}),this._dispatchUnhandledCommands(r),n&&this._activePC.createOffer()),r}},{key:"close",value:function(){this._deactivatePreparing(),this._deactivateActive()}},{key:"onEvent",value:function(e){var t=e.payload.peerConnectionId,n=this._peerConnections.get(t);this._isActive(t)||this._isPreparing(t)?n.onEvent(e):this._isInactive(t)||this._dispatchOnCreation(e)}},{key:"_addPC",value:function(e){this._peerConnections.set(e.id,e)}},{key:"_isActive",value:function(e){return e===this._activePCId}},{key:"_isPreparing",value:function(e){return e===this._preparingPCId}},{key:"_isInactive",value:function(e){return!this._isActive(e)&&!this._isPreparing(e)&&!!this._peerConnections.get(e)}},{key:"_deactivateActive",value:function(){Ra.debug("Close active pc if exist"),this._activePC&&(this._activePC.removeAllEventListeners(),this._activePC.close(),delete this._activePCId)}},{key:"_activatePreparing",value:function(){var e;Ra.debug("Activate preparing pc if exist"),this._preparingPC&&(e=this._activePC,this._activePC=this._preparingPC,delete this._preparingPCId,this._dispatchEvent({type:"replaced"}),e.removeAllEventListeners(),e.close())}},{key:"_deactivatePreparing",value:function(){Ra.debug("Close preparing pc if exist"),this._preparingPC&&(this._preparingPC.removeAllEventListeners(),this._preparingPC.close(),delete this._preparingPCId)}},{key:"_replacePreparing",value:function(e,t){var n=this;Ra.debug("Create preparing peer connection"),this._deactivatePreparing(),this._preparingPC=e;this._preparingPC.once("connected",function(){setTimeout(function(){n._activatePreparing()},2e3)}),t&&this._preparingPC.createOffer()}},{key:"_dispatchUnhandledCommands",value:function(t){this._unhandledCommands.filter(function(e){return e.payload.peerConnectionId===t.id}).forEach(function(e){return t.onEvent(e)}),this._unhandledCommands=this._unhandledCommands.filter(function(e){return e.payload.peerConnectionId!==t.id})}},{key:"_dispatchOnCreation",value:function(e){this._unhandledCommands.push(e)}}]),i}(),uv=sr(null,function(a,e){var n,t,r,i,o,s,c;return{F:function(){zn(i,e);var r=Qn(i);function i(e,t){var n;return Un(this,i),n=r.call(this,e),a($n(n)),n._options=t,n._localMediaView=null,n._remoteMediaView=null,n._caller=null,n._callee=null,n._localConstraints={audio:!0,video:void 0},n._remoteConstraints={audio:void 0,video:void 0},n._endResult=null,n._endInfo=null,n._customItems=null,n._remoteRecordingStatus=Ga.NONE,n._sendBirdChatOptions=null,n._callSummary=new El(e,$n(n)),n._stateManager=new Pp($n(n)),n._isReconnected=!1,n._rotatablePeerConnection=new cv(e,$n(n)),n._directCallStatsReporter=new bl(n._rotatablePeerConnection),n._rotatablePeerConnection.once("initialized",function(){n._onPeerConnectionInitialized()}),n._rotatablePeerConnection.on("replaced",function(){n._onPeerConnectionReplaced()}),n}return i}(),d:[{kind:"field",key:"_remoteCapabilities",value:function(){return[]}},{kind:"get",key:"_pc",value:function(){return this._rotatablePeerConnection.activePeerConnection}},{kind:"get",key:"callId",value:function(){return this._callId}},{kind:"get",key:"isVideoCall",value:function(){return this._isVideoCall}},{kind:"get",key:"isCaller",value:function(){return this._isCaller}},{kind:"get",key:"caller",value:function(){return this._caller}},{kind:"get",key:"callee",value:function(){return this._callee}},{kind:"get",key:"localUser",value:function(){return this._isCaller?this.caller:this.callee}},{kind:"get",key:"remoteUser",value:function(){return this._isCaller?this.callee:this.caller}},{kind:"get",key:"isLocalAudioEnabled",value:function(){return this._localConstraints.audio}},{kind:"get",key:"isRemoteAudioEnabled",value:function(){return this._remoteConstraints.audio}},{kind:"get",key:"isLocalVideoEnabled",value:function(){return this._localConstraints.video}},{kind:"get",key:"isRemoteVideoEnabled",value:function(){return this._remoteConstraints.video}},{kind:"get",key:"localRecordingStatus",value:function(){var e;return null!==(e=null===(e=this._record)||void 0===e?void 0:e.recordingStatus)&&void 0!==e?e:Ga.NONE}},{kind:"get",key:"remoteRecordingStatus",value:function(){return this._remoteRecordingStatus}},{kind:"get",key:"localMediaView",value:function(){return this._localMediaView}},{kind:"get",key:"remoteMediaView",value:function(){return this._remoteMediaView}},{kind:"get",key:"myRole",value:function(){return this._isCaller?wa.CALLER:wa.CALLEE}},{kind:"get",key:"endedBy",value:function(){return this._endInfo?this._endInfo.endedBy:void 0}},{kind:"get",key:"options",value:function(){return this._options}},{kind:"get",key:"isOngoing",value:function(){return!this.isEnded}},{kind:"get",key:"isEnded",value:function(){return!!this._endResult}},{kind:"get",key:"endResult",value:function(){return this._endResult}},{kind:"get",key:"_state",value:function(){return this._stateManager.state}},{kind:"get",key:"customItems",value:function(){return Gn({},this._customItems)}},{kind:"get",key:"rtcConnection",value:function(){var e;return null===(e=this._pc)||void 0===e?void 0:e.rtcConnection}},{kind:"get",key:"callLog",value:function(){var e=this._state.type;if(e!==gp.ENDING&&e!==gp.ENDED)return null;e=this._endInfo;return new Cu({call_id:(e||this).callId,is_video_call:(e||this).isVideoCall,custom_items:e?e.customItems:this._customItems,user_role:e?e.userRole:this.myRole,started_at:e?e.startedAt:this._startedAt||Date.now(),ended_at:e?e.endedAt:Date.now(),participants:e?e._participants:[this.caller,this.callee],ended_by:this.endedBy,duration:e?e.duration:this.getDuration(),end_result:(e||this).endResult,call_type:e?e.callType:"direct"},!1)}},{kind:"get",key:"_record",value:function(){return this.ctx.recordingManager.getRecord(this._recordId)}},{kind:"get",key:"_isTurnChangedSupported",value:function(){return Tu.includes("turn_changed")&&this._remoteCapabilities.includes("turn_changed")}},{kind:"method",key:"setLocalMediaView",value:(c=Pn(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._updateLocalMediaView(t);case 2:case"end":return e.stop()}},e,this)})),function(e){return c.apply(this,arguments)})},{kind:"method",key:"setRemoteMediaView",value:(s=Pn(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._updateRemoteMediaView(t);case 2:case"end":return e.stop()}},e,this)})),function(e){return s.apply(this,arguments)})},{kind:"method",key:"startDuration",value:function(){void 0===this._startedAt&&(this._startedAt=Date.now())}},{kind:"method",key:"getDuration",value:function(){return this._endInfo?this._endInfo.duration:void 0===this._startedAt?0:Date.now()-this._startedAt}},{kind:"method",key:"_send",value:function(e){return this.ctx.sender.send(e)}},{kind:"method",decorators:[pl({callOption:Aa})],key:"dial",value:function(e){var n=this,t=e.userId,r=e.isVideoCall,i=e.callOption,a=e.customItems,o=e.sendBirdChatOptions;this._isCaller=!0,this._stateManager.toIdle();e=new vl;return this._dialDeferred=e,this._isVideoCall=r,this._sendBirdChatOptions=o,this._getLocalMediaStream(),this._setLocalOption(i),this._setCustomItems(a),this._callSummary.setDialSentAt(),this.sendDialCommand(t).then(function(){var e;null!==(e=n._dialDeferred)&&void 0!==e&&e.resolve(),delete n._dialDeferred}).catch(function(e){var t;null!==(t=n._dialDeferred)&&void 0!==t&&t.reject(e),delete n._dialDeferred}),e.promise}},{kind:"method",key:"_dialed",value:function(e){this._isCaller=!1;e=e.payload;this._isVideoCall=e.isVideoCall,this._localConstraints.video=e.isVideoCall,this._remoteCapabilities=e.capabilities,this._initTurnCredential=e.turnCredential,this._isTurnChangedSupported&&(this._initTurnCredential.turnUrls=[this._initTurnCredential.turnUrls[0]]),this._setCallInfo(e.callId,e.caller,e.callee),this._setCustomItems(e.customItems),this._setRemoteOption(e.constraints),this._stateManager.toRinging()}},{kind:"method",key:"_dialSent",value:function(e){e=e.payload;this._setCallInfo(e.callId,e.caller,e.callee),this._callSummary.calcPdd(),this._state.dialSent()}},{kind:"method",decorators:[Ha(Ha.messages.CALL_IS_NOT_SUPPORTED),pl({callOption:Aa})],key:"accept",value:function(e){e=e.callOption;Ra.info("accept()"),this._getLocalMediaStream(),this._setLocalOption(e),this._callSummary.setCallSetupStartTime(),this._state.accept(e)}},{kind:"method",key:"_receiveAccept",value:function(e){e=e.payload;this._remoteCapabilities=e.capabilities,this._initTurnCredential=e.turnCredential,this._isTurnChangedSupported&&(this._initTurnCredential.turnUrls=[this._initTurnCredential.turnUrls[0]]),this._setRemoteOption(e.constraints),this._callSummary.setCallSetupStartTime(),this._state.receiveAccept()}},{kind:"method",key:"_canceled",value:function(e){e=e.payload.endedCall;this._setCallInfo(e.callId,e.caller,e.callee),this._setCustomItems(e.customItems),this.setEndResult(e.endResult),this.setEndInfo(e),this._stateManager.toCanceled()}},{kind:"method",key:"end",value:function(){Ra.info("end()"),this._dialDeferred&&(this._dialDeferred.reject(new to(An.DIAL_CANCELED)),delete this._dialDeferred),this._state.end()}},{kind:"method",key:"_setLocalOption",value:function(e){this._updateLocalMediaView(e.localMediaView),this._updateRemoteMediaView(e.remoteMediaView),this._localConstraints.audio=e.audioEnabled,this._localConstraints.video=e.videoEnabled}},{kind:"method",key:"_setRemoteOption",value:function(e){this._remoteConstraints=e}},{kind:"method",key:"_setCallInfo",value:function(e,t,n){this._callId=e,this._caller=t,this._callee=n}},{kind:"method",key:"setEndResult",value:function(e){this._endResult=e}},{kind:"method",key:"setEndInfo",value:function(e){this._endInfo=e}},{kind:"method",key:"_setRemoteAudioEnabled",value:function(e){var t=this._remoteConstraints.audio;this._remoteConstraints.audio=e,this.onRemoteAudioSettingsChanged&&t!==e&&this.onRemoteAudioSettingsChanged(this)}},{kind:"method",key:"_setRemoteVideoEnabled",value:function(e){var t=this._remoteConstraints.video;this._remoteConstraints.video=e,this.onRemoteVideoSettingsChanged&&t!==e&&this.onRemoteVideoSettingsChanged(this)}},{kind:"method",key:"_setCustomItems",value:function(e){this._customItems=e||{}}},{kind:"method",key:"_setRemoteRecordingStatus",value:function(e){var t=this._remoteRecordingStatus;(this._remoteRecordingStatus=e)!==t&&this.onRemoteRecordingStatusChanged&&this.onRemoteRecordingStatusChanged(this)}},{kind:"method",key:"closeRTCConnection",value:function(){this._revokeMediaAccess(),this._rotatablePeerConnection.removeAllEventListeners(),this._rotatablePeerConnection.close()}},{kind:"method",key:"startVideo",value:function(){Ra.info("startVideo()"),this._state.toggleVideo(!0)}},{kind:"method",key:"stopVideo",value:function(){Ra.info("stopVideo()"),this._state.toggleVideo(!1)}},{kind:"method",key:"_checkRecordingCondition",value:function(e){return this._state.type!==gp.CONNECTED?(Ra.error(pr.getErrorMessage(An.ERR_CALL_NOT_CONNECTED_YET)),!1):!(!this.isVideoCall&&e.isVideo)||(Ra.error(pr.getErrorMessage(An.ERR_WRONG_RECORDING_TYPE_FOR_AUDIO_CALL)),!1)}},{kind:"method",key:"startRecording",value:function(e){var t=this,n=new ja(e);if(!Object.values(La).includes(n.recordingType))return Ra.error(pr.getErrorMessage(An.ERR_INVALID_RECORDING_TYPE)),!1;try{!function(){if(!window.MediaRecorder){var e=pr.getErrorMessage(An.ERR_NOT_SUPPORTED_BROWSER_FOR_RECORDING);throw Ra.error(e),e}}()}catch(e){return}if(this._checkRecordingCondition(n))if(this._recordId)Ra.error(pr.getErrorMessage(An.ERR_RECORDING_ALREADY_IN_PROGRESS));else{var r=Ep.createStream(this,n.recordingType),i=r.stream,a=r.options,o=r.cleanup,s=this.ctx.recordingManager.startRecording(i,a,Gn(Gn({},n),{},{callId:this.callId}));if(s){var c=function(){t.sendRecordingCommand(s.recordId,e.recordingType,s.recordingStatus)};return s.on("start",c),s.on("stop",function(){o&&o(),c()}),s.on("pause",c),s.on("resume",c),s.on("error",c),this._recordId=s.recordId,s.recordId}}}},{kind:"method",key:"stopRecording",value:function(e){return e&&this._recordId===e?(this.ctx.recordingManager.stopRecording(e),delete this._recordId,!0):(Ra.error(pr.getErrorMessage(An.ERR_FAILED_TO_STOP_RECORDING)),!1)}},{kind:"method",key:"stopCurrentRecording",value:function(){return!!this._recordId&&this.stopRecording(this._recordId)}},{kind:"method",key:"toggleVideo",value:function(t){var e;this._localConstraints.video!==t&&(null!==(e=this._getLocalMediaStream())&&void 0!==e&&e.getTracks().forEach(function(e){e&&"video"===e.kind&&(e.enabled=t)}),this._localConstraints.video=t)}},{kind:"method",key:"muteMicrophone",value:function(){Ra.info("muteMicrophone()"),this._state.toggleMicrophone(!1)}},{kind:"method",key:"unmuteMicrophone",value:function(){Ra.info("unmuteMicrophone()"),this._state.toggleMicrophone(!0)}},{kind:"method",key:"toggleMicrophone",value:function(t){var e;this._localConstraints.audio!==t&&(null!==(e=this._getLocalMediaStream())&&void 0!==e&&e.getTracks().forEach(function(e){e&&"audio"===e.kind&&(e.enabled=t)}),this._localConstraints.audio=t)}},{kind:"method",key:"_validateCaptureAvailability",value:function(e){if(this._state.type!==gp.CONNECTED)throw new _a(An.ERR_VIDEO_CALL_NOT_CONNECTED_YET);if(!this.isVideoCall)throw new _a(An.ERR_CAPTURE_NOT_ALLOWED_ON_AUDIO_CALL);if(e instanceof HTMLAudioElement)throw new _a(An.ERR_VIDEO_VIEW_NOT_READY);if(null==e||!e.srcObject)throw new _a(An.ERR_VIDEO_VIEW_NOT_READY)}},{kind:"method",key:"captureLocalVideoView",value:function(e){var n=this,t=new Promise(function(e,t){n._validateCaptureAvailability(n._localMediaView),e(n._captureVideoView(n._localMediaView))});return e&&ya(t)(e),t}},{kind:"method",key:"captureRemoteVideoView",value:function(e){var n=this,t=new Promise(function(e,t){n._validateCaptureAvailability(n.remoteMediaView),e(n._captureVideoView(n._remoteMediaView))});return e&&ya(t)(e),t}},{kind:"method",key:"_captureVideoView",value:function(e){try{var t,n=document.createElement("canvas"),r=n.getContext("2d"),i=e;n.width=null!==(t=i.videoWidth)&&void 0!==t?t:640,n.height=null!==(t=i.videoHeight)&&void 0!==t?t:360,r.drawImage(i,0,0);i={width:n.width,height:n.height,data:n.toDataURL("image/jpeg",1)};return n.remove(),i}catch(e){throw Ra.error(e),new _a(An.ERR_FAILED_TO_GET_IMAGE_FROM_VIDEO_STREAM)}}},{kind:"method",key:"updateCustomItems",value:function(e,t){var n=this,r=Jn(ga(e,t),2)[1];if(r)return r;e=il.createUpdateCustomItems(this.callId,e),e=this._send(e).then(function(e){return n._setCustomItems(e.custom_items),{customItems:e.custom_items,affectedKeys:e.updated}}).catch(function(e){throw Ra.error("failed to update customItems"),e});return t&&ya(e)(t),e}},{kind:"method",key:"deleteCustomItems",value:function(e,t){var n=this,r=Jn(ma(e,t),2)[1];if(r)return r;e=il.createDeleteCustomItems(this.callId,e),e=this._send(e).then(function(e){return n._setCustomItems(e.custom_items),{customItems:e.custom_items,affectedKeys:e.deleted}}).catch(function(e){throw Ra.error("failed to delete customItems"),e});return t&&ya(e)(t),e}},{kind:"method",key:"deleteAllCustomItems",value:function(e){var t=this,n=il.createDeleteAllCustomItems(this.callId),n=this._send(n).then(function(e){return t._setCustomItems(e.custom_items),{customItems:e.custom_items,affectedKeys:e.deleted}}).catch(function(e){throw Ra.error("failed to delete all customItems"),e});return e&&ya(n)(e),n}},{kind:"method",key:"fireOnRinging",value:function(){Ra.info("onRinging"),this.onRinging&&this.onRinging()}},{kind:"method",key:"fireOnEstablished",value:function(){Ra.info("onEstablished"),this.onEstablished&&this.onEstablished(this)}},{kind:"method",key:"fireOnEnded",value:function(){switch(this.endResult){case Ca.NO_ANSWER:case Ca.CANCELED:case Ca.DECLINED:case Ca.OTHER_DEVICE_ACCEPTED:case Ca.COMPLETED:Ra.info("onEnded");break;case Ca.TIMED_OUT:Ra.warning("onEnded");break;case Ca.CONNECTION_LOST:case Ca.DIAL_FAILED:case Ca.ACCEPT_FAILED:case Ca.UNKNOWN:Ra.error("onEnded");break;default:Ra.info("onEnded")}this.onEnded&&this.onEnded(this)}},{kind:"method",key:"fireOnConnected",value:function(){Ra.info("onConnected"),this.onConnected&&this.onConnected(this)}},{kind:"method",key:"fireOnReconnecting",value:function(){Ra.info("onReconnecting"),this.onReconnecting&&this.onReconnecting(this)}},{kind:"method",key:"fireOnReconnected",value:function(){Ra.info("onReconnected"),this.onReconnected&&this.onReconnected(this)}},{kind:"method",key:"sendDialCommand",value:function(e){var t=this,e=il.createDial(e,this._isVideoCall,this._customItems,this._sendBirdChatOptions,this._localConstraints);return this._send(e).then(function(e){t.onEvent(e)}).catch(function(e){throw t._state.dialFailed(),e})}},{kind:"method",key:"sendAcceptCommand",value:function(){var t=this,e=il.createAccept(this.callId,this._localConstraints);return this._send(e).then(function(e){t.onEvent(e)}).catch(function(e){throw t._state.acceptFailed(),e})}},{kind:"method",key:"sendCancelCommand",value:function(){var t=this,e=il.createCancel(this.callId);return this._send(e).then(function(e){t.onEvent(e)})}},{kind:"method",key:"sendDeclineCommand",value:function(){var t=this,e=il.createDecline(this.callId);return this._send(e).then(function(e){t.onEvent(e)})}},{kind:"method",key:"sendEndCommand",value:function(){var t=this,e=il.createEnd(this.callId);return this._send(e).then(function(e){t.onEvent(e)})}},{kind:"method",key:"sendTimeoutCommand",value:function(e){var t=this,e=il.createTimeout(this.callId,e);return this._send(e).then(function(e){t.onEvent(e)})}},{kind:"method",key:"sendConnectionLostCommand",value:function(){var t=this,e=il.createConnectionLost(this.callId);return this._send(e).then(function(e){t.onEvent(e)})}},{kind:"method",key:"sendNoAnswerCommand",value:function(){var t=this,e=il.createNoAnswer(this.callId);return this._send(e).then(function(e){t.onEvent(e)})}},{kind:"method",key:"sendAliveCommand",value:function(){var e=il.createAlive(this.callId);return this._send(e)}},{kind:"method",key:"sendAudioCommand",value:function(){var e=il.createAudio(this.callId,this._localConstraints.audio);return this._send(e)}},{kind:"method",key:"sendVideoCommand",value:function(){var e=il.createVideo(this.callId,this._localConstraints.video);return this._send(e)}},{kind:"method",key:"sendStatsLogCommand",value:function(e){e=il.createStatsLogCommand(e);return this._send(e)}},{kind:"method",key:"sendCallSummaryCommand",value:function(e){e=il.createCallSummaryCommand(this._callId,this.myRole,e);return this._send(e)}},{kind:"method",key:"sendConnectedCommand",value:function(e,t,n){n=il.createConnected(e,t,n);return this._send(n)}},{kind:"method",key:"sendRecordingCommand",value:function(e,t,n){n=il.createRecording(this.callId,e,t,n);return this._send(n)}},{kind:"method",key:"startToSendAlive",value:function(){var e=this;this._aliveIntervalId=setInterval(function(){e.sendAliveCommand().catch(function(e){return Ra.debug(e)})},3e4)}},{kind:"method",key:"stopToSendAlive",value:function(){this._aliveIntervalId&&(clearInterval(this._aliveIntervalId),delete this._aliveIntervalId)}},{kind:"method",key:"startGetWebRtcStats",value:function(){var i=this;this._statsIntervalId||(this._callSummary.setBasicCallLogStats(),this._statsIntervalId=setInterval(function(){i._directCallStatsReporter.getStats().then(function(e){var t=e.statsMap,n=e.transPortInfoMap,r=e.audioStatsMap,e=e.videoStatsMap;i._callSummary.updateStats(t,n,r,e)})},1e3))}},{kind:"method",key:"stopGetWebRtcStats",value:function(){this._statsIntervalId&&(clearInterval(this._statsIntervalId),delete this._statsIntervalId)}},{kind:"method",key:"sendConnectedInfo",value:function(){var t=this;this._directCallStatsReporter.getCandidateInfo().then(function(e){e&&t.sendConnectedCommand(t.callId,e,t._isReconnected)})}},{kind:"method",key:"sendCallSummary",value:function(){this.callId&&this.sendCallSummaryCommand(this._callSummary.getCallSummary())}},{kind:"method",key:"startCallConnectionTimer",value:function(){var e=this;this._callConnectionTimer=setTimeout(function(){e._state.fireTimeout()},this._options.callConnectionTimeoutValue)}},{kind:"method",key:"stopCallConnectionTimer",value:function(){this._callConnectionTimer&&(clearTimeout(this._callConnectionTimer),delete this._callConnectionTimer)}},{kind:"method",key:"playSound",value:(o=Pn(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.ctx.soundManager.playSound(t));case 1:case"end":return e.stop()}},e,this)})),function(e){return o.apply(this,arguments)})},{kind:"method",key:"stopSound",value:function(e){return this.ctx.soundManager.stopSound(e)}},{kind:"method",key:"stopAllSound",value:function(){return this.ctx.soundManager.stopAllSound()}},{kind:"method",key:"_receiveAudio",value:function(e){this._setRemoteAudioEnabled(e.payload.isEnabled)}},{kind:"method",key:"_receiveVideo",value:function(e){this._setRemoteVideoEnabled(e.payload.isEnabled)}},{kind:"method",key:"_receiveCustomItemsUpdate",value:function(e){var t;this._setCustomItems(e.payload.customItems),null!==(t=this.onCustomItemsUpdated)&&void 0!==t&&t.call(this,this,e.payload.updated)}},{kind:"method",key:"_receiveCustomItemsDelete",value:function(e){var t;this._setCustomItems(e.payload.customItems),null!==(t=this.onCustomItemsDeleted)&&void 0!==t&&t.call(this,this,e.payload.deleted)}},{kind:"method",key:"_receiveRecording",value:function(e){this._setRemoteRecordingStatus(e.payload.recordingStatus)}},{kind:"method",key:"_receiveTurnChanged",value:function(e){var t;this._isTurnChangedSupported&&(e=(t=e.payload).turnCredential,t=t.eventId,this.createPeerConnection(t,e))}},{kind:"method",key:"_registerPCListeners",value:function(){var e=this,t=this._pc;t.on("connected",function(){e._onPeerConnectionConnected()}),t.on("reconnecting",function(){e._onPeerConnectionReconnecting()}),t.on("remoteStream",function(){e._onRemoteStream()})}},{kind:"method",key:"createPeerConnection",value:function(e,t){return this._rotatablePeerConnection.createPeerConnection(e,e?t:this._initTurnCredential,this._isCaller,this._isVideoCall)}},{kind:"method",key:"_onPeerConnectionConnected",value:function(){this._state.pcConnected()}},{kind:"method",key:"_onPeerConnectionReconnecting",value:function(){this._state.pcReconnecting()}},{kind:"method",key:"_onPeerConnectionInitialized",value:function(){this._registerPCListeners(),this._onRemoteStream()}},{kind:"method",key:"_onPeerConnectionReplaced",value:function(){this._onPeerConnectionInitialized(),this._onPeerConnectionConnected()}},{kind:"method",key:"_receiveSnapshot",value:function(e){Ra.verbose("snapshot is received");var t,n,r,i,a,o,s=e.payload,c=s.audioEnabled,u=s.videoEnabled,e=s.customItems,s=s.recording;"boolean"==typeof c&&this._setRemoteAudioEnabled(c),"boolean"==typeof u&&this._setRemoteVideoEnabled(u),s?this._setRemoteRecordingStatus(Ga.RECORDING):this._setRemoteRecordingStatus(Ga.NONE),e&&(t=e,n=Object.keys(t),r=this._customItems,i=Object.keys(r),u=n.filter(function(e){return!i.includes(e)||t[e]!==r[e]}),s=i.filter(function(e){return!n.includes(e)}),this._setCustomItems(e),0<u.length&&null!==(a=this.onCustomItemsUpdated)&&void 0!==a&&a.call(this,this,u),0<s.length&&null!==(o=this.onCustomItemsDeleted)&&void 0!==o&&o.call(this,this,s))}},{kind:"method",key:"_passToPeerConnection",value:function(e){return this._rotatablePeerConnection.onEvent(e)}},{kind:"method",key:"onEvent",value:function(e){switch(Ra.verbose("'onEvent' on ".concat(e.constructor.name)),e.type){case _o.DIAL:this._dialed(e);break;case _o.DIAL_ACK:this._dialSent(e);break;case _o.DIAL_RCV:break;case _o.ACCEPT:this._receiveAccept(e);break;case _o.ACCEPT_ACK:this._state.acceptSent(e);break;case _o.OTHER_DEVICE_ACCEPTED:this._state.receiveAccepted();break;case _o.CANCEL:this._canceled(e);break;case _o.DECLINE:case _o.END:case _o.TIME_OUT:case _o.NO_ANSWER:case _o.CONNECTION_LOST:case _o.UNKNOWN_END:this._state.receiveEnd(e);break;case _o.CANCEL_ACK:case _o.DECLINE_ACK:case _o.END_ACK:case _o.TIMEOUT_ACK:case _o.NO_ANSWER_ACK:case _o.CONNECTION_LOST_ACK:case _o.UNKNOWN_END_ACK:this._state.endSent(e);break;case _o.REMOVE_CANDIDATES:break;case _o.AUDIO:this._receiveAudio(e);break;case _o.VIDEO:this._receiveVideo(e);break;case _o.CUSTOM_ITEMS_UPDATE:this._receiveCustomItemsUpdate(e);break;case _o.CUSTOM_ITEMS_DELETE:this._receiveCustomItemsDelete(e);break;case _o.RECORDING:this._receiveRecording(e);break;case _o.TURN_CHANGED:this._receiveTurnChanged(e);break;case _o.SNAPSHOT:this._receiveSnapshot(e);break;case _o.CANDIDATE:this._passToPeerConnection(e);break;case _o.OFFER:this._passToPeerConnection(e),"accepting"===this._state.type&&this._state.receiveOffer(),this._startedAt||this.startDuration();break;case _o.ANSWER:this._passToPeerConnection(e),this._startedAt||this.startDuration();break;default:Ra.error(new Error("unhandled call event ".concat(e.type)))}}},{kind:"method",key:"_onAudioOutputChanged",value:(i=Pn(regeneratorRuntime.mark(function e(){var t,n,r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=this.ctx.deviceManager.getCurrentAudioOutputDevice(),e.next=3,null===(n=this._localMediaView)||void 0===n||null===(t=n.setSinkId)||void 0===t?void 0:t.call(n,i.deviceId);case 3:return e.next=5,null===(n=this._remoteMediaView)||void 0===n||null===(r=n.setSinkId)||void 0===r?void 0:r.call(n,i.deviceId);case 5:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{kind:"method",key:"_onLocalStream",value:function(){var e=this._getLocalMediaStream();if(this._localMediaView&&(this._localMediaView.srcObject=e),this._pc){var t=ar(e.getTracks());try{for(t.s();!(n=t.n()).done;){var n,r=n.value;r.enabled=null===(n=this._isMediaEnabled)||void 0===n?void 0:n.call(this,r.kind),this._pc.replaceTrack(r)}}catch(e){t.e(e)}finally{t.f()}}}},{kind:"method",key:"_onRemoteStream",value:function(){this._remoteMediaView&&(this._remoteMediaView.srcObject=this._pc.remoteStream)}},{kind:"method",key:"calcCallSetupTime",value:function(){this._callSummary.calcCallSetupTime()}},{kind:"method",key:"setIsReconnected",value:function(e){this._isReconnected=e,this._callSummary.increaseReconnectedCount()}},{kind:"method",key:"_isMediaEnabled",value:function(e){switch(e){case"audio":return this._localConstraints.audio;case"video":return this._localConstraints.video;default:return Ra.error(new Error("unrecognized media type ".concat(e))),!1}}},{kind:"method",key:"_updateLocalMediaView",value:(r=Pn(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this._localMediaView===t)return e.abrupt("return");e.next=2;break;case 2:if(this._localMediaView&&(this._localMediaView.srcObject=null),t){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,this._updateMediaView(t,this._getLocalMediaStream());case 7:this._localMediaView=e.sent;case 8:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})},{kind:"method",key:"_updateRemoteMediaView",value:(t=Pn(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this._remoteMediaView===t)return e.abrupt("return");e.next=2;break;case 2:if(this._remoteMediaView&&(this._remoteMediaView.srcObject=null),t){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,this._updateMediaView(t,null===(n=this._pc)||void 0===n?void 0:n.remoteStream);case 7:this._remoteMediaView=e.sent;case 8:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{kind:"method",key:"_updateMediaView",value:(n=Pn(regeneratorRuntime.mark(function e(t,n){var r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.ctx.deviceManager.getCurrentAudioOutputDevice())return e.next=4,null===(i=t.setSinkId)||void 0===i?void 0:i.call(t,r.deviceId);e.next=4;break;case 4:return n&&(t.srcObject=n),e.abrupt("return",t);case 6:case"end":return e.stop()}},e,this)})),function(e,t){return n.apply(this,arguments)})},{kind:"method",key:"_getLocalMediaStream",value:function(){return this._mediaAccess||this._grantMediaAccess(),this.ctx.deviceManager.stream}},{kind:"method",key:"_grantMediaAccess",value:function(){var e=this;this._mediaAccess=this.ctx.deviceManager.useMedia(this._localConstraints),this.ctx.deviceManager.on("streamChanged",function(){e._onLocalStream()}),this.ctx.deviceManager.on("audioOutputChanged",function(){e._onAudioOutputChanged()})}},{kind:"method",key:"_revokeMediaAccess",value:function(){this._mediaAccess&&(this._mediaAccess.dispose(),this._mediaAccess=null)}}]}},Mt),lv=function(){function r(e){var t=e.ringingTimeout,n=e.callConnectionTimeout,e=e.statsInterval;Un(this,r),this._ringingTimeout=t,this._callConnectionTimeout=n,this._statsInterval=e}return Fn(r,[{key:"ringingTimeoutValue",get:function(){return this._ringingTimeout}},{key:"callConnectionTimeoutValue",get:function(){return this._callConnectionTimeout}},{key:"statsIntervalValue",get:function(){return this._statsInterval}}]),r}(),dv=function(){function t(e){Un(this,t),this.ctx=e,this.options={ringingTimeout:6e4,callConnectionTimeout:6e4,statsInterval:3e3}}return Fn(t,[{key:"createDirectCall",value:function(){return new uv(this.ctx,new lv(this.options))}},{key:"setRingingTimeout",value:function(e){"number"==typeof e&&0<e&&(this.options.ringingTimeout=1e3*e)}},{key:"setStatsInterval",value:function(e){"number"==typeof e&&((e=e)<1&&(e=1),60<e&&(e=60),this.options.statsInterval=1e3*e)}},{key:"setCallConnectionTimeout",value:function(e){"number"==typeof e&&0<e&&(this.options.callConnectionTimeout=1e3*e)}}]),t}(),hv=function(){function t(e){Un(this,t),this.ctx=e,this._callFactory=new dv(e),this._calls=new Map,this.dialListeners=new Map}return Fn(t,[{key:"setRingingTimeout",value:function(e){this._callFactory.setRingingTimeout(e)}},{key:"setStatsInterval",value:function(e){this._callFactory.setStatsInterval(e)}},{key:"setCallConnectionTimeout",value:function(e){this._callFactory.setCallConnectionTimeout(e)}},{key:"getCall",value:function(e){return this._calls.get(e)}},{key:"_hasCall",value:function(e){return this._calls.has(e)}},{key:"getOngoingCallCount",value:function(){return Xn(this._calls.values()).reduce(function(e,t){return t.isOngoing?e+1:e},0)}},{key:"dial",value:function(e,t){var n=this,r=this._callFactory.createDirectCall(),e=r.dial(e).then(function(){return n._register(r.callId,r),r}).catch(function(e){throw Ra.error(e),e});return t&&ya(e)(t),r}},{key:"onEvent",value:function(e){switch(e.type){case _o.DIAL:this._onCallDialed(e);break;case _o.CANCEL:this._hasCall(e.getCallId())?this._passToCall(e):this._onCallCanceled(e);break;case Xu.CONNECTED:this._requestCommandLists();break;default:this._passToCall(e)}}},{key:"addListener",value:function(e,t){this.dialListeners.set(e,t)}},{key:"removeListener",value:function(e){this.dialListeners.delete(e)}},{key:"removeAllListeners",value:function(){this.dialListeners.clear()}},{key:"clear",value:function(){var e,t=ar(this._calls.values());try{for(t.s();!(e=t.n()).done;){var n=e.value;try{n.end()}catch(e){Ra.error("failed to clear call.")}}}catch(e){t.e(e)}finally{t.f()}this._calls.clear()}},{key:"_register",value:function(e,t){if(!e)throw new Error("call id is not set in call");if(!t)throw new Error("call is null");this._calls.set(e,t)}},{key:"_sendDialReceiveCommand",value:function(e){e=il.createDialReceive(e.getCallId(),e.deliveryInfo,e.receivedType,e.payload.shortLivedToken);return this.ctx.sender.send(e).catch(function(){})}},{key:"_onCallDialed",value:function(e){var t=this,n=this._callFactory.createDirectCall();this._sendDialReceiveCommand(e),this._register(e.getCallId(),n),n.onRinging=function(){return t._onCallRinging(n)},this._passToCall(e)}},{key:"_onCallCanceled",value:function(e){var t=this,n=this._callFactory.createDirectCall();this._register(e.getCallId(),n),n.onRinging=function(){return t._onCallRinging(n)},this._passToCall(e)}},{key:"_onCallRinging",value:function(e){var t=ar(this.dialListeners.values());try{for(t.s();!(n=t.n()).done;){var n=n.value;n.onRinging&&n.onRinging(e)}}catch(e){t.e(e)}finally{t.f()}}},{key:"_requestCommandLists",value:function(){var t=this;Ra.verbose("request command list");var e=Array.from(this._calls.keys()).filter(function(e){return!t._calls.get(e).isEnded}),e=il.createCommandList(e);this.ctx.sender.retrieveCommands(e)}},{key:"_passToCall",value:function(e){this._hasCall(e.getCallId())?this._calls.get(e.getCallId()).onEvent(e):Ra.debug("received command ".concat(e.type," for non-existing call ").concat(e.getCallId()))}}]),t}(),fv=function(){function t(e){Un(this,t),this.constraints=e,this.onDisposed=void 0}return Fn(t,[{key:"dispose",value:function(){var e;null!==(e=this.onDisposed)&&void 0!==e&&e.call(this)}}]),t}();function pv(e,t){var n,r,i,a;t.audio&&0===e.getAudioTracks().length&&e.addTrack((n=av=av||new(window.AudioContext||window.webkitAudioContext),i=n.createOscillator(),a=n.createMediaStreamDestination(),(r=n.createGain()).gain.setValueAtTime(0,n.currentTime),i.connect(r).connect(a),i.start(),a.stream.getAudioTracks()[0])),t.video&&0===e.getVideoTracks().length&&e.addTrack((i={width:of.defaultVideoWidth,height:of.defaultVideoHeight,frameRate:of.defaultFrameRate},a=i.width,t=i.height,e=i.frameRate,(i=document.createElement("canvas")).width=a,i.height=t,i.getContext("2d").fillRect(0,0,a,t),i.captureStream(e).getVideoTracks()[0]))}var vv=function(){zn(r,zp);var e,n=Qn(r);function r(e){var t;return Un(this,r),(t=n.call(this))._deviceManager=e,t.stream=void 0,t._mediaUpdates=[],t._audioContext=void 0,t}return Fn(r,[{key:"updateStream",value:(e=Pn(regeneratorRuntime.mark(function e(){var t,n,r,i,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.stream,n=this._deviceManager.mediaAccesses.some(function(e){return e.constraints.audio}),r=this._deviceManager.mediaAccesses.some(function(e){return e.constraints.video}),n||r){e.next=5;break}return e.abrupt("return");case 5:return 0<this._mediaUpdates.length&&(this._refreshMedia=!0),a=Date.now(),this._mediaUpdates.push(a),e.prev=8,e.next=11,this._deviceManager.getMediaConstraints({usingAudio:n,usingVideo:r});case 11:return a=e.sent,e.next=14,navigator.mediaDevices.getUserMedia(a);case 14:i=e.sent,e.next=20;break;case 17:e.prev=17,e.t0=e.catch(8),i=new MediaStream;case 20:pv(i,{audio:n,video:r}),this.stream=i,this._deviceManager.refreshMediaDevices({audio:n,video:r}),this._dispatchEvent({type:"changed"}),t&&t.getTracks().forEach(function(e){return e.stop()}),this._mediaUpdates.pop(),0===this._mediaUpdates.length&&this._refreshMedia&&(this._refreshMedia=!1,this.updateStream());case 27:case"end":return e.stop()}},e,this,[[8,17]])})),function(){return e.apply(this,arguments)})}]),r}();function _v(e,t){return(null==e?void 0:e.deviceId)===(null==t?void 0:t.deviceId)&&(null==e?void 0:e.label)===(null==t?void 0:t.label)&&(null==e?void 0:e.groupId)===(null==t?void 0:t.groupId)}var yv,gv,mv=function(){zn(a,zp);var t,n,e,r,i=Qn(a);function a(){var e;return Un(this,a),(e=i.call(this)).mediaAccesses=[],e._availableMediaDevices={audioinput:[],audiooutput:[],videoinput:[]},e._currentMediaDevices={audioinput:void 0,audiooutput:void 0,videoinput:void 0},e._sendbirdCallListeners=new Map,e._streamManager=new vv($n(e)),e._streamManager.on("changed",function(){e._dispatchEvent({type:"streamChanged"})}),navigator.mediaDevices.ondevicechange=function(){return e._onDeviceChanged()},e}return Fn(a,[{key:"_onDeviceChanged",value:function(){0!==this.mediaAccesses.length&&this.refreshMediaDevices({audio:this.mediaAccesses.some(function(e){return e.constraints.audio}),video:this.mediaAccesses.some(function(e){return e.constraints.video})})}},{key:"addSendBirdCallListener",value:function(e,t){this._sendbirdCallListeners.set(e,t)}},{key:"removeSendBirdCallListener",value:function(e){this._sendbirdCallListeners.delete(e)}},{key:"removeAllSendBirdCallListener",value:function(){this._sendbirdCallListeners.clear()}},{key:"getCurrentAudioInputDevice",value:function(){return this._currentMediaDevices.audioinput}},{key:"getCurrentAudioOutputDevice",value:function(){return this._currentMediaDevices.audiooutput}},{key:"getCurrentVideoInputDevice",value:function(){return this._currentMediaDevices.videoinput}},{key:"getAvailableAudioInputDevices",value:function(){return this._availableMediaDevices.audioinput}},{key:"getAvailableAudioOutputDevices",value:function(){return this._availableMediaDevices.audiooutput}},{key:"getAvailableVideoInputDevices",value:function(){return this._availableMediaDevices.videoinput}},{key:"_updateStream",value:(r=Pn(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._streamManager.updateStream());case 1:case"end":return e.stop()}},e,this)})),function(){return r.apply(this,arguments)})},{key:"_registerMediaAccess",value:function(e){var t=this;this.mediaAccesses.push(e),e.onDisposed=function(){return t.stopMedia(e)}}},{key:"useMedia",value:function(e){if(e.audio||e.video){e=new fv(e);return this._registerMediaAccess(e),this._updateStream(),e}Ra.error(new Error("you should set true for at least 1 media type."))}},{key:"stopMedia",value:function(e){this.mediaAccesses.splice(this.mediaAccesses.indexOf(e),1),this._updateStream()}},{key:"fetchMediaDevices",value:(e=Pn(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:return t=e.sent,e.abrupt("return",t.reduce(function(e,t){return e[t.kind].push(t),e},{audioinput:[],audiooutput:[],videoinput:[]}));case 4:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)})},{key:"getMediaConstraints",value:(n=Pn(regeneratorRuntime.mark(function e(t){var n,r,i,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.usingAudio,r=t.usingVideo,i={audio:!1,video:!1},e.next=4,this.fetchMediaDevices();case 4:return o=e.sent,a=o.audioinput,o=o.videoinput,n&&a.length&&(a=this.getCurrentAudioInputDevice(),i.audio={deviceId:null==a?void 0:a.deviceId}),r&&o.length&&(o=this.getCurrentVideoInputDevice(),i.video={deviceId:null==o?void 0:o.deviceId,width:of.defaultVideoWidth,height:of.defaultVideoHeight,frameRate:of.defaultFrameRate}),e.abrupt("return",i);case 10:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})},{key:"_updateCurrentMediaDevice",value:function(e,t){var n=this._availableMediaDevices[e],r=this._currentMediaDevices[e],i=n.find(function(e){return e.deviceId===(null==t?void 0:t.deviceId)});return i||(Ra.warning("Selected device is unavailable. fallback to default device."),i=(null!==i&&void 0!==i?i:0<n.length)?n[0]:null),!_v(r,this._currentMediaDevices[e]=i)}},{key:"_onAudioOutputChanged",value:function(){this._dispatchEvent({type:"audioOutputChanged"})}},{key:"selectDevice",value:function(e,t){t.kind===e?this._updateCurrentMediaDevice(e,t)&&("audioinput"!==e&&"videoinput"!==e||this._updateStream(),"audiooutput"===e&&this._onAudioOutputChanged()):Ra.error(new Error("Tried to select invalid device of type"))}},{key:"_updateAvailableDevices",value:function(e,t){var n,r,i=this._currentMediaDevices[e];if(!!function(e,t){if(e.length===t.length){for(var n=0;n<t.length;n++)if(!_v(e[n],t[n]))return;return 1}}(this._availableMediaDevices[e],t))return!1;var a;this._availableMediaDevices[e]=t,a=this._updateCurrentMediaDevice(e,i);var o,s=ar(this._sendbirdCallListeners.values());try{for(s.s();!(o=s.n()).done;){var c=o.value,u=this._currentMediaDevices[e];switch(e){case"audioinput":null!==(n=c.onAudioInputDeviceChanged)&&void 0!==n&&n.call(c,u,t);break;case"audiooutput":null!==(r=c.onAudioOutputDeviceChanged)&&void 0!==r&&r.call(c,u,t);break;case"videoinput":null!==(r=c.onVideoInputDeviceChanged)&&void 0!==r&&r.call(c,u,t)}}}catch(e){s.e(e)}finally{s.f()}return a}},{key:"refreshMediaDevices",value:(t=Pn(regeneratorRuntime.mark(function e(t){var n,r,i,a,o,s,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.audio,r=t.video,n||r){e.next=3;break}throw new Error("at least one of the audio or video must be true");case 3:return e.next=5,this.fetchMediaDevices();case 5:c=e.sent,i=c.audioinput,a=c.audiooutput,o=c.videoinput,c=s=!1,n&&(s=this._updateAvailableDevices("audioinput",i),c=this._updateAvailableDevices("audiooutput",a)),r&&(s=s||this._updateAvailableDevices("videoinput",o)),s&&this._updateStream(),c&&this._onAudioOutputChanged();case 15:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"stream",get:function(){return this._streamManager.stream}}]),a}(),kv="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==kv&&kv,Ev="URLSearchParams"in kv,Cv="Symbol"in kv&&"iterator"in Symbol,wv="FileReader"in kv&&"Blob"in kv&&function(){try{return new Blob,!0}catch(e){return!1}}(),bv="FormData"in kv,Rv="ArrayBuffer"in kv;function Iv(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function Av(e){return"string"!=typeof e&&(e=String(e)),e}function Sv(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return Cv&&(e[Symbol.iterator]=function(){return e}),e}function Tv(t){this.map={},t instanceof Tv?t.forEach(function(e,t){this.append(t,e)},this):Array.isArray(t)?t.forEach(function(e){this.append(e[0],e[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function Ov(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function Dv(n){return new Promise(function(e,t){n.onload=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function Nv(e){var t=new FileReader,n=Dv(t);return t.readAsArrayBuffer(e),n}function Lv(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function xv(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,(this._bodyInit=e)?"string"==typeof e?this._bodyText=e:wv&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:bv&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:Ev&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():Rv&&wv&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=Lv(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):Rv&&(ArrayBuffer.prototype.isPrototypeOf(e)||gv(e))?this._bodyArrayBuffer=Lv(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):Ev&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},wv&&(this.blob=function(){var e=Ov(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=Ov(this);return e?e:ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer)}return this.blob().then(Nv)}),this.text=function(){var e,t,n=Ov(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=Dv(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},bv&&(this.formData=function(){return this.text().then(Uv)}),this.json=function(){return this.text().then(JSON.parse)},this}Rv&&(yv=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],gv=ArrayBuffer.isView||function(e){return e&&-1<yv.indexOf(Object.prototype.toString.call(e))}),Tv.prototype.append=function(e,t){e=Iv(e),t=Av(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},Tv.prototype.delete=function(e){delete this.map[Iv(e)]},Tv.prototype.get=function(e){return e=Iv(e),this.has(e)?this.map[e]:null},Tv.prototype.has=function(e){return this.map.hasOwnProperty(Iv(e))},Tv.prototype.set=function(e,t){this.map[Iv(e)]=Av(t)},Tv.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},Tv.prototype.keys=function(){var n=[];return this.forEach(function(e,t){n.push(t)}),Sv(n)},Tv.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),Sv(t)},Tv.prototype.entries=function(){var n=[];return this.forEach(function(e,t){n.push([t,e])}),Sv(n)},Cv&&(Tv.prototype[Symbol.iterator]=Tv.prototype.entries);var Mv=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function Pv(e,t){if(!(this instanceof Pv))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var n,r=(t=t||{}).body;if(e instanceof Pv){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new Tv(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new Tv(t.headers)),this.method=(n=t.method||this.method||"GET",e=n.toUpperCase(),-1<Mv.indexOf(e)?e:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r),"GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache||((t=/([?&])_=[^&]*/).test(this.url)?this.url=this.url.replace(t,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime())}function Uv(e){var n=new FormData;return e.trim().split("&").forEach(function(e){var t;e&&(e=(t=e.split("=")).shift().replace(/\+/g," "),t=t.join("=").replace(/\+/g," "),n.append(decodeURIComponent(e),decodeURIComponent(t)))}),n}function Vv(e,t){if(!(this instanceof Vv))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t=t||{},this.type="default",this.status=void 0===t.status?200:t.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in t?t.statusText:"",this.headers=new Tv(t.headers),this.url=t.url||"",this._initBody(e)}Pv.prototype.clone=function(){return new Pv(this,{body:this._bodyInit})},xv.call(Pv.prototype),xv.call(Vv.prototype),Vv.prototype.clone=function(){return new Vv(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Tv(this.headers),url:this.url})},Vv.error=function(){var e=new Vv(null,{status:0,statusText:""});return e.type="error",e};var Fv=[301,302,303,307,308];Vv.redirect=function(e,t){if(-1===Fv.indexOf(t))throw new RangeError("Invalid status code");return new Vv(null,{status:t,headers:{location:e}})};var jv=kv.DOMException;try{new jv}catch(rc){(jv=function(e,t){this.message=e,this.name=t;e=Error(e);this.stack=e.stack}).prototype=Object.create(Error.prototype),jv.prototype.constructor=jv}function Bv(r,o){return new Promise(function(i,e){var t=new Pv(r,o);if(t.signal&&t.signal.aborted)return e(new jv("Aborted","AbortError"));var a=new XMLHttpRequest;function n(){a.abort()}a.onload=function(){var e,n,t={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",n=new Tv,e.replace(/\r?\n[\t ]+/g," ").split("\r").map(function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e}).forEach(function(e){var t=e.split(":"),e=t.shift().trim();e&&(t=t.join(":").trim(),n.append(e,t))}),n)};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var r="response"in a?a.response:a.responseText;setTimeout(function(){i(new Vv(r,t))},0)},a.onerror=function(){setTimeout(function(){e(new TypeError("Network request failed"))},0)},a.ontimeout=function(){setTimeout(function(){e(new TypeError("Network request failed"))},0)},a.onabort=function(){setTimeout(function(){e(new jv("Aborted","AbortError"))},0)},a.open(t.method,function(t){try{return""===t&&kv.location.href?kv.location.href:t}catch(e){return t}}(t.url),!0),"include"===t.credentials?a.withCredentials=!0:"omit"===t.credentials&&(a.withCredentials=!1),"responseType"in a&&(wv?a.responseType="blob":Rv&&t.headers.get("Content-Type")&&-1!==t.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),!o||"object"!=typeof o.headers||o.headers instanceof Tv?t.headers.forEach(function(e,t){a.setRequestHeader(t,e)}):Object.getOwnPropertyNames(o.headers).forEach(function(e){a.setRequestHeader(e,Av(o.headers[e]))}),t.signal&&(t.signal.addEventListener("abort",n),a.onreadystatechange=function(){4===a.readyState&&t.signal.removeEventListener("abort",n)}),a.send(void 0===t._bodyInit?null:t._bodyInit)})}Bv.polyfill=!0,kv.fetch||(kv.fetch=Bv,kv.Headers=Tv,kv.Request=Pv,kv.Response=Vv);function Gv(e){Un(this,Gv),this.userId=e.user_id,this.nickname=e.nickname,this.profileUrl=e.profile_url,this.metaData=e.meta_data,this.isActive=e.is_active}var zv=function(){var e;return null!==(e=window)&&void 0!==e&&e.fetch?(e=window).fetch.apply(e,arguments):Bv.apply(void 0,arguments)},Wv=function(){function e(){Un(this,e)}return Fn(e,null,[{key:"getOsVersion",value:function(){return"undefined"!=typeof navigator&&navigator.userAgent?navigator.userAgent.replace(/,/g,"."):"undefined"}}]),e}(),qv=function(){zn(t,va);var e=Qn(t);function t(){return Un(this,t),e.apply(this,arguments)}return t}(),Kv=function(){function t(e){Un(this,t),this.ctx=e,this.fetch=zv,this.sessionKey=null}var n;return Fn(t,[{key:"setSessionKey",value:function(e){this.sessionKey=e}},{key:"clearSessionKey",value:function(){this.sessionKey=null}},{key:"send",value:(n=Pn(regeneratorRuntime.mark(function e(t){var n,r,i,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.getApiOption){e.next=2;break}throw new Error("invalid api request ".concat(JSON.stringify(t)));case 2:if((n=t.getApiOption()).auth&&!this.sessionKey)throw new Error("tried to call private api without auth");e.next=5;break;case 5:return(r=Gn({"Content-Type":"application/json"},n.headers)).SendBird="JS,".concat(Wv.getOsVersion(),",").concat(Ya),r["SBCall-Client-Id"]=this.ctx.clientId,this.sessionKey&&(r["SBCall-Session-Token"]=this.sessionKey),e.next=11,this.fetch("".concat(this._getHost()).concat(n.path),{method:n.method,body:JSON.stringify(n.body),headers:r});case 11:return i=e.sent,e.next=14,i.text();case 14:o=e.sent,a=null,e.prev=16,a=JSON.parse(o),e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(16),new _a(An.ERR_MALFORMED_DATA);case 23:if(i.ok){e.next=33;break}if(a.error)throw new qv(a.code,a.message);e.next=28;break;case 28:if(500===i.status)throw new _a(An.INTERNAL_SERVER_ERROR);e.next=30;break;case 30:if(300<=i.status&&i.status<400)throw new _a(An.ERR_MALFORMED_DATA);e.next=32;break;case 32:throw new _a(An.ERR_REQUEST_FAILED);case 33:if(a.cmd)return o=il.parse(a),e.abrupt("return",o);e.next=36;break;case 36:return e.abrupt("return",a);case 37:case"end":return e.stop()}},e,this,[[16,20]])})),function(e){return n.apply(this,arguments)})},{key:"_getHost",value:function(){return"https://api-IDENTIFIER.calls.sendbird.com".replace("IDENTIFIER",this.ctx.appId)}}]),t}(),Hv=function(){function e(){Un(this,e)}return Fn(e,[{key:"parseToJson",value:function(e){try{return JSON.parse(e)}catch(e){return Ra.error("failed to parse JSON message",e),{}}}},{key:"validate",value:function(e){var t=e.cmd;return!(!e.request_id&&!t)}},{key:"parseCommand",value:function(e){return e.error?[!0,{requestId:e.request_id,message:e.message,code:e.code},null]:[!0,null,il.parse(e)]}},{key:"parse",value:function(e){e=this.parseToJson(e);return this.validate(e)?this.parseCommand(e):[!1,null,null]}}]),e}(),Yv=function(){function t(e){Un(this,t),this._requests=new Map,this.timeoutTime=e}return Fn(t,[{key:"has",value:function(e){return this._requests.has(e)}},{key:"get",value:function(e){return this._requests.get(e)}},{key:"register",value:function(e){if(!e)throw new Error("invalid request id");if(this._requests.has(e))throw new Error("duplicate requests");var t=new vl;return this._requests.set(e,{deferred:t,timer:this._createTimeoutTimer(e)}),t}},{key:"unregister",value:function(e){if(!this._requests.has(e))return null;var t=this._requests.get(e),n=t.timer,t=t.deferred;return clearTimeout(n),this._requests.delete(e),t}},{key:"_createTimeoutTimer",value:function(e){var t=this;return setTimeout(function(){t.unregister(e).reject(new _a(An.ERR_NO_RESPONSE_DUE_TO_TIMEOUT))},this._getTimeoutTime())}},{key:"rejectAll",value:function(e){var t=ar(this._requests.keys());try{for(t.s();!(n=t.n()).done;){var n=n.value,n=this._requests.get(n);clearTimeout(n.timer),n.deferred.reject(e)}}catch(e){t.e(e)}finally{t.f()}this._requests.clear()}},{key:"_getTimeoutTime",value:function(){return this.timeoutTime}}]),t}(),Zv=function(){function t(e){Un(this,t),this.ctx=e,this.ws=null,this.retryTimer=null,this.closed=!0,this.sessionKey=null,this._requestMap=new Yv(this._getTimeoutTime()),this.wsMessageParser=new Hv}return Fn(t,[{key:"connect",value:function(){var r=this;return new Promise(function(e,t){r.sessionKey||t(new Error("tried to connect to websocket server without auth")),r.ws=r._createWebSocket(),r.closed=!1,r.ws.onopen=function(){r._onOpen(),e()},r.ws.onmessage=function(e){var t=Jn(r.wsMessageParser.parse(e.data),3),n=t[0],e=t[1],t=t[2];n&&(e?r.processError(e):r.processCommand(t))},r.ws.onerror=function(e){return r._onError(e)},r.ws.onclose=function(){r._onClose(),t(new _a(An.ERR_WEBSOCKET_CONNECTION_FAILED))}})}},{key:"processError",value:function(e){var t=e.requestId,n=e.code,r=e.message,i=this._requestMap.unregister(t);i&&(Ra.debug(t,e.message),i.reject(new qv(n,{message:r})))}},{key:"processCommand",value:function(e){var t;e instanceof ko?this.ctx.router.routeDirectCallPeerCommand(e,ho.WS):e instanceof Eo?(t=this._requestMap.unregister(e.requestId))&&this.ctx.router.routeDirectCallResponseCommand(e,t):e instanceof wo?this.ctx.router.routeDirectCallServerCommand(e,ho.WS):e instanceof Ju&&this.ctx.router.routeLogServerCommand(e)}},{key:"setSessionKey",value:function(e){this.sessionKey=e}},{key:"clearSessionKey",value:function(){this.sessionKey=null}},{key:"deauthenticate",value:function(){this.disconnect(),this.clearSessionKey()}},{key:"disconnect",value:function(){this.ws&&(this.closed=!0,this._removeRetryTimer(),this.ws.onopen=null,this.ws.onmessage=null,this.ws.onerror=null,this.ws.onclose=null,this.ws.close(),this._requestMap.rejectAll(new _a(An.ERR_REQUEST_FAILED_DUE_TO_WEBSOCKET_CONNECTION_LOST)),this.ws=null)}},{key:"send",value:function(e){var t=e.requireResponse()?this._requestMap.register(e.requestId).promise:Promise.resolve(),e=e.serialize();return this.ws.send("".concat(e,"\n")),t}},{key:"isConnected",value:function(){return!!this.ws&&1===this.ws.readyState}},{key:"_onOpen",value:function(){this.ctx.router.routeWebSocketInternalCommand(il.createWebSocketConnectedCommand())}},{key:"_onError",value:function(e){Ra.error(e)}},{key:"_onClose",value:function(){this._startToReconnect()}},{key:"_createWebSocket",value:function(){var e="/?sbcall_session_token=".concat(encodeURIComponent(this.sessionKey),"&sbcall_client_id=").concat(encodeURIComponent(this.ctx.clientId),"&sendbird=").concat(encodeURIComponent(this._getVersion()));return new WebSocket(this._getHost()+e)}},{key:"_getVersion",value:function(){return"JS,".concat(Wv.getOsVersion(),",").concat(Ya)}},{key:"_getHost",value:function(){return"wss://ws-IDENTIFIER.calls.sendbird.com".replace("IDENTIFIER",this.ctx.appId)}},{key:"_startToReconnect",value:function(){this.closed||this.retryTimer||(this.retryTimer=setTimeout(this._reconnect.bind(this),this._getRetryTime()))}},{key:"_reconnect",value:function(){this._removeRetryTimer(),this.connect()}},{key:"_removeRetryTimer",value:function(){this.retryTimer&&(clearTimeout(this.retryTimer),this.retryTimer=null)}},{key:"_getTimeoutTime",value:function(){return 6e4}},{key:"_getRetryTime",value:function(){return 2e3}}]),t}(),$v=function e(t){Un(this,e),this.audioEnabled=t.is_audio_enabled,this.videoEnabled=t.is_video_enabled,this.customItems=null===(t=t.custom_items)||void 0===t?void 0:t.custom_items},Qv=function(){function t(e){Un(this,t),this.callId=e.call_id,this.callType=e.call_type,this.userRole=e.user_role,this.callerClientId=e.caller_client_id,this.calleeClientId=e.callee_client_id,this.signalSeq=e.signal_seq.map(il.parse).filter(function(e){return!!e}),this.signalSnapshot=new $v(e.signal_snapshot)}return Fn(t,[{key:"getAcceptResponse",value:function(){return this.signalSeq.find(function(e){return e.type===_o.ACCEPT_ACK})}},{key:"getDeclineResponse",value:function(){return this.signalSeq.find(function(e){return e.type===_o.DECLINE_ACK})}},{key:"commands",get:function(){return this.signalSeq}},{key:"snapshot",get:function(){return this.signalSnapshot}}]),t}(),Jv=function(){function t(e){Un(this,t),this.ctx=e,this.wsClient=new Zv(e),this.apiClient=new Kv(e)}var n;return Fn(t,[{key:"connectWs",value:function(){return this.wsClient.connect()}},{key:"sendAPI",value:function(e){return this.apiClient.send(e)}},{key:"sendWs",value:function(e){return this.wsClient.send(e)}},{key:"send",value:(n=Pn(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t instanceof yo)){e.next=11;break}if(t.sendStrategy===lo.API)return e.abrupt("return",this.sendAPI(t));e.next=3;break;case 3:if(t.sendStrategy!==lo.WS){e.next=7;break}if(this.wsClient.isConnected())return e.abrupt("return",this.sendWs(t));e.next=6;break;case 6:throw new _a(An.ERR_WEBSOCKET_CONNECTION_NOT_OPENED);case 7:if(t.sendStrategy!==lo.BOTH){e.next=11;break}if(this.wsClient.isConnected())return e.abrupt("return",this.sendWs(t));e.next=10;break;case 10:case 11:return e.abrupt("return",this.sendAPI(t));case 12:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})},{key:"setSessionKey",value:function(e){this.apiClient.setSessionKey(e),this.wsClient.setSessionKey(e)}},{key:"authenticate",value:function(e){var t=this,n=e.userId,e=e.accessToken,e=il.createAuthRequest(this.ctx.appId,n,e);return this.send(e).then(function(e){return t.setSessionKey(e.sbcall_session_token),{user:new Gv(e.user),statsInterval:e.stats_interval}}).catch(function(e){throw Ra.error("failed to authenticate user ".concat(n)),e})}},{key:"deauthenticate",value:function(){this.apiClient.clearSessionKey(),this.wsClient.deauthenticate()}},{key:"retrieveCommands",value:function(e){var t=this;return this.sendAPI(e).then(function(e){Ra.verbose("commandLists is received.");e=e.call_signal.map(function(e){return new Qv(e)});t._processCommandLists(e)}).catch(function(e){Ra.debug("failed to get commandLists",e)})}},{key:"_processCommandLists",value:function(e){var t=ar(e);try{for(t.s();!(r=t.n()).done;){var n=r.value;if(n.userRole!==wa.CALLER||this.ctx.clientId===n.callerClientId){if(n.userRole===wa.CALLEE&&this.ctx.clientId!==n.calleeClientId){var r=n.getAcceptResponse();if(r){var i=r.payload.callId,i=il.createAccepted(i);this.ctx.router.routeDirectCallPeerCommand(i,ho.WS);continue}i=n.getDeclineResponse();i&&(o=(a=i.payload).callId,a=a.endedCall,o=il.createDeclined(o,a),this.ctx.router.routeDirectCallInternalCommand(o))}var a=n.commands,o=n.snapshot;Ra.verbose("process commandList. length: ".concat(a.length));var s=ar(a);try{for(s.s();!(c=s.n()).done;){var c=c.value;this.wsClient.processCommand(c)}}catch(e){s.e(e)}finally{s.f()}o=il.createSnapshot(n.callId,o);this.ctx.router.routeDirectCallInternalCommand(o)}}}catch(e){t.e(e)}finally{t.f()}}}]),t}(),Xv=function(){zn(i,zp);var r=Qn(i);function i(e,t){var n;return Un(this,i),(n=r.call(this))._recordId=eo(),n._blobs=[],n._mediaRecorder=new MediaRecorder(e,t),n._mediaRecorder.ondataavailable=function(e){e.data&&0<e.data.size&&n._blobs.push(e.data)},n._mediaRecorder.onstart=function(){return n._onStart()},n._mediaRecorder.onstop=function(){return n._onStop()},n._mediaRecorder.onpause=function(){return n._onPause()},n._mediaRecorder.onresume=function(){return n._onResume()},n._mediaRecorder.onerror=function(){return n._onError()},n}return Fn(i,[{key:"startRecording",value:function(){try{this._mediaRecorder.start()}catch(e){return Ra.error("start recording failed with error : ",e),!1}return!0}},{key:"stopRecording",value:function(){try{this._mediaRecorder.stop()}catch(e){return Ra.error("stop recording failed with error : ",e),!1}return!0}},{key:"_onStart",value:function(){this._dispatchEvent({type:"start"})}},{key:"_onStop",value:function(){var t=this;this._dispatchEvent({type:"stop"}),kp.transcodingToMP4(this._blobs).then(function(e){t._onRecordingSucceeded(new Blob([e]))})}},{key:"_onPause",value:function(){this._dispatchEvent({type:"pause"})}},{key:"_onResume",value:function(){this._dispatchEvent({type:"resume"})}},{key:"_onError",value:function(){this._dispatchEvent({type:"error"}),this._onRecordingFailed(new _a(An.ERR_FAILED_TO_STOP_RECORDING))}},{key:"_onRecordingSucceeded",value:function(e){this._dispatchEvent({type:"succeeded",payload:e})}},{key:"_onRecordingFailed",value:function(e){this._dispatchEvent({type:"failed",payload:e})}},{key:"recordId",get:function(){return this._recordId}},{key:"recordingStatus",get:function(){switch(this._mediaRecorder.state){case"recording":return Ga.RECORDING;case"inactive":case"paused":default:return Ga.NONE}}}]),i}(),e_=function(){function e(){Un(this,e),this._listeners=new Map,this._recorders=new Map}return Fn(e,[{key:"getRecord",value:function(e){return this._recorders.get(e)}},{key:"addListener",value:function(e,t){this._listeners.set(e,t)}},{key:"removeListener",value:function(e){this._listeners.delete(e)}},{key:"removeAllListeners",value:function(){this._listeners.clear()}},{key:"_fireOnSucceeded",value:function(t,n){this._listeners.forEach(function(e){e.onRecordingSucceeded&&e.onRecordingSucceeded(n.callId,t,n.recordingOptions,n.fileName)})}},{key:"_fireOnFailed",value:function(t,n,r){this._listeners.forEach(function(e){e.onRecordingFailed&&e.onRecordingFailed(n.callId,t,r)})}},{key:"startRecording",value:function(e,t,n){var r=this,i=new Xv(e,t);if(i.startRecording())return this._recorders.set(i.recordId,i),i.on("succeeded",function(e){e=e.payload;kp.downloadRecordedFile(e,n.fileName),r._fireOnSucceeded(i.recordId,n)}),i.on("failed",function(e){e=e.payload;r._fireOnFailed(i.recordId,n,e)}),i}},{key:"stopRecording",value:function(e){if(0<this._recorders.size){e=this._recorders.get(e);return e?e.stopRecording():!1}return!1}},{key:"listeners",get:function(){return this._listeners}}]),e}(),t_=function(){function e(){Un(this,e),this.processed=new Map}return Fn(e,[{key:"process",value:function(e){return!e.messageId||(this._isProcessed(e)?(this.processed.delete(e.messageId),!1):(this._setProcessed(e),!0))}},{key:"_isProcessed",value:function(e){return this.processed.has(e.messageId)}},{key:"_setProcessed",value:function(e){this.processed.set(e.messageId,!0)}}]),e}(),n_=function(){function t(e){Un(this,t),this.active=!1,this.queue=[],this.name=e}return Fn(t,[{key:"acquire",value:function(){var n=this;return new Promise(function(e){function t(){n.active=!0,e()}n.active?n.queue.push(t):t()})}},{key:"release",value:function(){var e;this.active&&(this.active=!1,(e=this.queue.shift())&&e())}}]),t}(),r_=function(){function e(){Un(this,e),this.lastSeqNumber=-1,this.queue=new Map}var t,n;return Fn(e,[{key:"insert",value:(n=Pn(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.lastSeqNumber>=t.sequenceNumber)return e.abrupt("return");e.next=2;break;case 2:return this.queue.set(t.sequenceNumber,{command:t,handler:n}),Ra.verbose("".concat(t.constructor.name," is inserted")),e.next=6,this.flush();case 6:case"end":return e.stop()}},e,this)})),function(e,t){return n.apply(this,arguments)})},{key:"flush",value:(t=Pn(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:Ra.verbose("try flushing sequence queue"),t=this.next();case 2:if(t)return n=t.command,r=t.handler,Ra.verbose("flush ".concat(n.constructor.name)),e.next=7,r(n);e.next=10;break;case 7:t=this.next(),e.next=2;break;case 10:case"end":return e.stop()}},e,this)})),function(){return t.apply(this,arguments)})},{key:"next",value:function(){var e=this.lastSeqNumber+1;if(this.queue.has(e)){var t=this.queue.get(e),n=t.command,t=t.handler;return this.queue.delete(e),this.lastSeqNumber=e,{command:n,handler:t}}return null}}]),e}(),i_=function(){function e(){Un(this,e),this.sequences=new Map,this.lock=new n_}var n;return Fn(e,[{key:"insert",value:(n=Pn(regeneratorRuntime.mark(function e(t,n){var r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.lock.acquire();case 2:if(e.prev=2,Ra.verbose("try to insert in SequenceManager with ".concat(t.constructor.name)),r=t.getCallId(),t.isSequential()&&r){e.next=10;break}return Ra.verbose("not sequential; immediately flush ".concat(t.constructor.name)),this.lock.release(),n(t),e.abrupt("return");case 10:if(this.sequences.has(r))return i=this.sequences.get(r),e.next=14,i.insert(t,n);e.next=16;break;case 14:e.next=20;break;case 16:return i=new r_,this.sequences.set(r,i),e.next=20,i.insert(t,n);case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(2),Ra.warning("failed to SequenceManager.insert()",e.t0);case 25:return e.prev=25,this.lock.release(),e.finish(25);case 28:case"end":return e.stop()}},e,this,[[2,22,25,28]])})),function(e,t){return n.apply(this,arguments)})}]),e}(),a_=function(){zn(n,zp);var t=Qn(n);function n(){var e;return Un(this,n),(e=t.call(this))._sequenceManager=new i_,e._eventDeduplicator=new t_,e}return Fn(n,[{key:"routeWebSocketInternalCommand",value:function(e){this._dispatchEvent({type:"webSocketInternal",payload:e})}},{key:"routeLogServerCommand",value:function(e){this._dispatchEvent({type:"logServer",payload:e})}},{key:"routeDirectCallInternalCommand",value:function(e){this._dispatchEvent({type:"directCallInternal",payload:e})}},{key:"routeDirectCallPeerCommand",value:function(e,t){var n=this;this._eventDeduplicator.process(e)&&(e.receivedType=t,this._sequenceManager.insert(e,function(e){n._dispatchEvent({type:"directCallPeer",payload:e})}))}},{key:"routeDirectCallResponseCommand",value:function(e,n){this._sequenceManager.insert(e,function(){var t=Pn(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.resolve(t),e.abrupt("return",n.promise);case 2:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}())}},{key:"routeDirectCallServerCommand",value:function(e,t){var n=this;this._eventDeduplicator.process(e)&&(e.receivedType=t,this._sequenceManager.insert(e,function(e){n._dispatchEvent({type:"directCallServer",payload:e})}))}}]),n}(),o_=function(){function r(e,t,n){Un(this,r),this.isLoading=!1,this.hasNext=!0,this.userId=e,this.params=t,this.sender=n,this.nextToken=null}var t;return Fn(r,[{key:"next",value:(t=Pn(regeneratorRuntime.mark(function e(t){var n,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isLoading)throw new _a(An.ERR_QUERY_IN_PROGRESS);e.next=2;break;case 2:if(this.hasNext){e.next=4;break}return e.abrupt("return",[]);case 4:return this.isLoading=!0,n=this.sender.send(this._createCommand()).then(function(e){return r.nextToken=e.next,r.hasNext=e.has_next,r.isLoading=!1,e.calls.map(function(e){return new Cu(e,!0)})}),t&&ya(n)(t),e.abrupt("return",n);case 8:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"_createCommand",value:function(){return new po(this.userId,this.params,this.nextToken)}}]),r}(),s_=function(){function t(e){if(Un(this,t),jn(this,"ctx",{}),!e)throw new Ia(An.INVALID_PARAMETER_VALUE,{invalidParameter:"appId"});this.ctx.appId=e,this.user=null,this.init()}return Fn(t,[{key:"init",value:function(){this.ctx.clientId=eo();var e=new a_;this.ctx.router=e,this.ctx.sender=new Jv(this.ctx),this.ctx.deviceManager=new mv,this.ctx.recordingManager=new e_,this.ctx.soundManager=new za;var t=new hv(this.ctx);this.ctx.callManager=t,e.on("directCallInternal",function(e){e=e.payload;return t.onEvent(e)}),e.on("directCallPeer",function(e){e=e.payload;return t.onEvent(e)}),e.on("directCallServer",function(e){e=e.payload;return t.onEvent(e)}),e.on("webSocketInternal",function(e){e=e.payload;return t.onEvent(e)});var n=new al(this.ctx);Ra.logCollector=n,e.on("logServer",function(e){e=e.payload;return n.onEvent(e)})}},{key:"_checkAuthed",value:function(){if(!this.currentUser)throw new Ia(An.USER_NOT_AUTHENTICATED)}},{key:"authenticate",value:function(e,t){var n=this,r=e.userId,e=e.accessToken;if(Ra.info("authenticate()"),!r)throw new Ia(An.INVALID_PARAMETER_VALUE,{invalidParameter:"userId"});e=this.ctx.sender.authenticate({userId:r,accessToken:e}).then(function(e){return n.user=e.user,n.ctx.callManager.setStatsInterval(e.statsInterval),n.user});return t&&ya(e)(t),e}},{key:"deauthenticate",value:function(){Ra.info("deauthenticate()"),this.ctx.callManager&&this.ctx.callManager.clear(),this.ctx.sender.deauthenticate(),this.user=null}},{key:"connectWebSocket",value:function(){return this.ctx.sender.connectWs()}},{key:"handleWebhookData",value:function(e){e=e.sendbird_call;if(!e)throw new _a(An.ERR_MALFORMED_DATA);if(!e.cmd)throw new _a(An.ERR_MALFORMED_DATA);e=il.parse(e);e instanceof ko&&this.ctx.router.routeDirectCallPeerCommand(e,ho.WEBHOOK)}},{key:"addListener",value:function(e,t){if(!t)throw new Ia(An.INVALID_PARAMETER_VALUE,{invalidParameter:"listener"});this.ctx.callManager.addListener(e,t),this.ctx.deviceManager.addSendBirdCallListener(e,t)}},{key:"removeListener",value:function(e){this.ctx.callManager.removeListener(e),this.ctx.deviceManager.removeSendBirdCallListener(e)}},{key:"removeAllListeners",value:function(){this.ctx.callManager.removeAllListeners(),this.ctx.deviceManager.removeAllSendBirdCallListener()}},{key:"addRecordingListener",value:function(e,t){this.ctx.recordingManager.addListener(e,t)}},{key:"removeRecordingListener",value:function(e){this.ctx.recordingManager.removeListener(e)}},{key:"removeAllRecordingListeners",value:function(){this.ctx.recordingManager.removeAllListeners()}},{key:"useMedia",value:function(e){return this.ctx.deviceManager.useMedia(e)}},{key:"updateMediaDevices",value:function(e){return this.ctx.deviceManager.refreshMediaDevices(e)}},{key:"getCurrentAudioInputDevice",value:function(){return this.ctx.deviceManager.getCurrentAudioInputDevice()}},{key:"getAvailableAudioInputDevices",value:function(){return this.ctx.deviceManager.getAvailableAudioInputDevices()}},{key:"selectAudioInputDevice",value:function(e){return this.ctx.deviceManager.selectDevice("audioinput",e)}},{key:"getCurrentAudioOutputDevice",value:function(){return this.ctx.deviceManager.getCurrentAudioOutputDevice()}},{key:"getAvailableAudioOutputDevices",value:function(){return this.ctx.deviceManager.getAvailableAudioOutputDevices()}},{key:"selectAudioOutputDevice",value:function(e){return this.ctx.deviceManager.selectDevice("audiooutput",e)}},{key:"getCurrentVideoInputDevice",value:function(){return this.ctx.deviceManager.getCurrentVideoInputDevice()}},{key:"getAvailableVideoInputDevices",value:function(){return this.ctx.deviceManager.getAvailableVideoInputDevices()}},{key:"selectVideoInputDevice",value:function(e){return this.ctx.deviceManager.selectDevice("videoinput",e)}},{key:"getCall",value:function(e){return this.ctx.callManager.getCall(e)}},{key:"getOngoingCallCount",value:function(){return this.ctx.callManager.getOngoingCallCount()}},{key:"setRingingTimeout",value:function(e){this.ctx.callManager.setRingingTimeout(e)}},{key:"setCallConnectionTimeout",value:function(e){this.ctx.callManager.setCallConnectionTimeout(e)}},{key:"isPlaying",value:function(e){return this.ctx.soundManager.isPlaying(e)}},{key:"addDirectCallSound",value:function(e,t){return this.ctx.soundManager.loadSound(e,t)}},{key:"removeDirectCallSound",value:function(e){return this.ctx.soundManager.unloadSound(e)}},{key:"dial",value:function(e,t){Ra.info("dial()"),this._checkAuthed();var n=e.userId;if(this.user.userId===n)throw new to(An.MY_USER_ID_NOT_ALLOWED);return this.ctx.callManager.dial(e,t)}},{key:"updateCustomItems",value:function(e,t,n){var r=Jn(ga(t,n),2)[1];if(r)return r;r=this.ctx.callManager.getCall(e);if(r)return r.updateCustomItems(t,n);t=il.createUpdateCustomItems(e,t),t=this.ctx.sender.send(t).then(function(e){return{customItems:e.custom_items,affectedKeys:e.updated}}).catch(function(e){throw Ra.error("failed to update customItems"),e});return n&&ya(t)(n),t}},{key:"deleteCustomItems",value:function(e,t,n){var r=Jn(ma(t,n),2)[1];if(r)return r;r=this.ctx.callManager.getCall(e);if(r)return r.deleteCustomItems(t,n);t=il.createDeleteCustomItems(e,t),t=this.ctx.sender.send(t).then(function(e){return{customItems:e.custom_items,affectedKeys:e.deleted}}).catch(function(e){throw Ra.error("failed to delete customItems"),e});return n&&ya(t)(n),t}},{key:"deleteAllCustomItems",value:function(e,t){var n=this.ctx.callManager.getCall(e);if(n)return n.deleteAllCustomItems(t);e=il.createDeleteAllCustomItems(e),e=this.ctx.sender.send(e).then(function(e){return{customItems:e.custom_items,affectedKeys:e.deleted}}).catch(function(e){throw Ra.error("failed to delete all customItems"),e});return t&&ya(e)(t),e}},{key:"createDirectCallLogListQuery",value:function(e){return new o_(this.user.userId,e,this.ctx.sender)}},{key:"currentUser",get:function(){return this.user}}]),t}(),c_=null;function u_(){if(!c_)throw new Ia(An.INSTANCE_NOT_INITIALIZED)}return sr(null,function(e){function r(){Un(this,r),e(this)}return{F:r,d:[{kind:"get",static:!0,key:"sdkVersion",value:function(){return Ya}},{kind:"get",static:!0,key:"LoggerLevel",value:function(){return Ba}},{kind:"method",static:!0,key:"setLoggerLevel",value:function(e){return Ra.setLoggerLevel(Ir[e])}},{kind:"get",static:!0,key:"SoundType",value:function(){return Fa}},{kind:"get",static:!0,key:"DirectCallUserRole",value:function(){return wa}},{kind:"get",static:!0,key:"DirectCallEndResult",value:function(){return Ca}},{kind:"get",static:!0,key:"DirectCallOption",value:function(){return Aa}},{kind:"get",static:!0,key:"DirectCallRecordOption",value:function(){return ja}},{kind:"get",static:!0,key:"RecordingType",value:function(){return La}},{kind:"get",static:!0,key:"ErrorCode",value:function(){return An}},{kind:"method",static:!0,key:"init",value:function(e){if(!e)throw new Ia(An.INVALID_PARAMETER_VALUE,{invalidParameter:"appId"});if(!function(){if("undefined"==typeof window){var e="SendBirdCall needs 'window' in global";throw Ra.error(e),e}if(void 0===window.RTCPeerConnection){var t="SendBirdCall needs 'RTCPeerConnection' in global";throw Ra.error(t),t}if(t=(e=window.location).protocol,e=e.hostname,"file:"!==t&&"https:"!==t&&"127.0.0.1"!==e&&"localhost"!==e){var n="SendBirdCall needs https connection, except for 'localhost' or '127.0.0.1'";throw Ra.error(n),n}if(void 0===window.RTCPeerConnection.prototype.addTrack||void 0===window.RTCPeerConnection.prototype.getSenders){n="SendBirdCall can't support the browser using legacy WebRTC module";throw Ra.error(n),n}}(),c_&&c_.ctx.appId===e)return!1;var t=null,n=null,r=null;return c_&&(c_.deauthenticate(),n=new Map(c_.ctx.callManager.dialListeners),r=new Map(c_.ctx.recordingManager.listeners),c_.removeAllListeners(),c_.removeAllRecordingListeners(),t=c_),c_=new s_(e),t&&(n.forEach(function(e,t){c_.addListener(t,e)}),r.forEach(function(e,t){c_.addRecordingListener(t,e)})),!0}},{kind:"get",static:!0,key:"appId",value:function(){return null===c_||void 0===c_?void 0:c_.ctx.appId}},{kind:"get",static:!0,key:"currentUser",value:function(){return null===c_||void 0===c_?void 0:c_.currentUser}},{kind:"method",static:!0,key:"authenticate",value:function(e,t){u_();var n=e.userId,e=e.accessToken;return c_&&c_.user&&c_.user.userId!==n&&r.deauthenticate(),c_.authenticate({userId:n,accessToken:e},t)}},{kind:"method",static:!0,key:"deauthenticate",value:function(){u_(),c_.deauthenticate()}},{kind:"method",static:!0,key:"connectWebSocket",value:function(){return u_(),c_.connectWebSocket()}},{kind:"method",static:!0,key:"handleWebhookData",value:function(e){u_(),c_.handleWebhookData(e)}},{kind:"method",static:!0,key:"addListener",value:function(e,t){u_(),c_.addListener(e,t)}},{kind:"method",static:!0,key:"removeListener",value:function(e){u_(),c_.removeListener(e)}},{kind:"method",static:!0,key:"removeAllListeners",value:function(){u_(),c_.removeAllListeners()}},{kind:"method",static:!0,key:"addRecordingListener",value:function(e,t){u_(),c_.addRecordingListener(e,t)}},{kind:"method",static:!0,key:"removeRecordingListener",value:function(e){u_(),c_.removeRecordingListener(e)}},{kind:"method",static:!0,key:"removeAllRecordingListeners",value:function(){u_(),c_.removeAllRecordingListeners()}},{kind:"method",static:!0,key:"useMedia",value:function(e){return u_(),c_.useMedia(e)}},{kind:"method",static:!0,key:"updateMediaDevices",value:function(e){return u_(),c_.updateMediaDevices(e)}},{kind:"method",static:!0,key:"getCurrentAudioInputDevice",value:function(){return u_(),c_.getCurrentAudioInputDevice()}},{kind:"method",static:!0,key:"getAvailableAudioInputDevices",value:function(){return u_(),c_.getAvailableAudioInputDevices()}},{kind:"method",static:!0,key:"selectAudioInputDevice",value:function(e){return u_(),c_.selectAudioInputDevice(e)}},{kind:"method",static:!0,key:"getCurrentAudioOutputDevice",value:function(){return u_(),c_.getCurrentAudioOutputDevice()}},{kind:"method",static:!0,key:"getAvailableAudioOutputDevices",value:function(){return u_(),c_.getAvailableAudioOutputDevices()}},{kind:"method",static:!0,key:"selectAudioOutputDevice",value:function(e){return u_(),c_.selectAudioOutputDevice(e)}},{kind:"method",static:!0,key:"getCurrentVideoInputDevice",value:function(){return u_(),c_.getCurrentVideoInputDevice()}},{kind:"method",static:!0,key:"getAvailableVideoInputDevices",value:function(){return u_(),c_.getAvailableVideoInputDevices()}},{kind:"method",static:!0,key:"selectVideoInputDevice",value:function(e){return u_(),c_.selectVideoInputDevice(e)}},{kind:"method",static:!0,key:"getCall",value:function(e){return u_(),c_.getCall(e)}},{kind:"method",static:!0,key:"getOngoingCallCount",value:function(){return u_(),c_.getOngoingCallCount()}},{kind:"method",static:!0,key:"setRingingTimeout",value:function(e){u_(),c_.setRingingTimeout(e)}},{kind:"method",static:!0,key:"setCallConnectionTimeout",value:function(e){u_(),c_.setCallConnectionTimeout(e)}},{kind:"method",static:!0,key:"isPlaying",value:function(e){return u_(),c_.isPlaying(e)}},{kind:"method",static:!0,key:"addDirectCallSound",value:function(e,t){return u_(),c_.addDirectCallSound(e,t)}},{kind:"method",static:!0,key:"removeDirectCallSound",value:function(e){return u_(),c_.removeDirectCallSound(e)}},{kind:"method",decorators:[Ha(Ha.messages.CALL_IS_NOT_SUPPORTED)],static:!0,key:"dial",value:function(e,t){return u_(),c_.dial(e,t)}},{kind:"method",static:!0,key:"updateCustomItems",value:function(e,t,n){return u_(),c_.updateCustomItems(e,t,n)}},{kind:"method",static:!0,key:"deleteCustomItems",value:function(e,t,n){return u_(),c_.deleteCustomItems(e,t,n)}},{kind:"method",static:!0,key:"deleteAllCustomItems",value:function(e,t){return u_(),c_.deleteAllCustomItems(e,t)}},{kind:"method",static:!0,key:"createDirectCallLogListQuery",value:function(e){return u_(),c_.createDirectCallLogListQuery(e)}}]}})});
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