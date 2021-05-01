// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"Components/Background/Background.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"Components/Background/images/1.JPG":[function(require,module,exports) {
module.exports = "/1.ffc89471.JPG";
},{}],"Components/Background/images/2.JPG":[function(require,module,exports) {
module.exports = "/2.ba2663e4.JPG";
},{}],"Components/Background/images/3.JPG":[function(require,module,exports) {
module.exports = "/3.2c0ee53b.JPG";
},{}],"Components/Background/images/4.JPG":[function(require,module,exports) {
module.exports = "/4.3f01abe0.JPG";
},{}],"Components/Background/images/5.JPG":[function(require,module,exports) {
module.exports = "/5.9eee4ca8.JPG";
},{}],"Components/Background/Background.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./Background.css");

var _ = _interopRequireDefault(require("./images/1.JPG"));

var _2 = _interopRequireDefault(require("./images/2.JPG"));

var _3 = _interopRequireDefault(require("./images/3.JPG"));

var _4 = _interopRequireDefault(require("./images/4.JPG"));

var _5 = _interopRequireDefault(require("./images/5.JPG"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Background(_ref) {
  var _this = this;

  var element = _ref.element;
  var IMGS = [_.default, _2.default, _3.default, _4.default, _5.default];
  this.target = document.createElement('div');
  this.target.className = 'background';
  element.appendChild(this.target);

  this.render = function () {
    var random = Math.floor(Math.random() * 5);
    _this.target.style.backgroundImage = "url(".concat(IMGS[random], ")");
  };

  this.render();
}

var _default = Background;
exports.default = _default;
},{"./Background.css":"Components/Background/Background.css","./images/1.JPG":"Components/Background/images/1.JPG","./images/2.JPG":"Components/Background/images/2.JPG","./images/3.JPG":"Components/Background/images/3.JPG","./images/4.JPG":"Components/Background/images/4.JPG","./images/5.JPG":"Components/Background/images/5.JPG"}],"Components/Clock/Clock.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"Components/Clock/Clock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./Clock.css");

function Clock(_ref) {
  var _this = this;

  var element = _ref.element;
  this.target = document.createElement('div');
  element.appendChild(this.target);
  this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  this.target.className = 'clock';

  this.render = function () {
    _this.time = new Date();
    _this.target.innerHTML = "".concat(_this.time.getHours() < 10 ? '0' + _this.time.getHours() : _this.time.getHours(), ":").concat(_this.time.getMinutes() < 10 ? '0' + _this.time.getMinutes() : _this.time.getMinutes(), ":").concat(_this.time.getSeconds() < 10 ? '0' + _this.time.getSeconds() : _this.time.getSeconds(), "<div class='day'>").concat(_this.time.getFullYear(), " ").concat(_this.time.getMonth() + 1 < 10 ? '0' + (_this.time.getMonth() + 1) : _this.time.getMonth() + 1, " ").concat(_this.time.getDate() < 10 ? '0' + _this.time.getDate() : _this.time.getDate(), " ").concat(_this.days[_this.time.getDay()], "</div>");
  };

  this.render();
  setInterval(function () {
    return _this.render();
  }, 1000);
}

var _default = Clock;
exports.default = _default;
},{"./Clock.css":"Components/Clock/Clock.css"}],"Components/Greeting/Greeting.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"Components/Greeting/Greeting.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./Greeting.css");

function Greeting(_ref) {
  var _this = this;

  var element = _ref.element,
      initialState = _ref.initialState,
      onHandleSubmit = _ref.onHandleSubmit,
      onHandleClick = _ref.onHandleClick,
      onClickLogout = _ref.onClickLogout;
  this.state = initialState;
  this.parent = document.createElement('section');
  this.greet = document.createElement('h4');
  this.target = document.createElement('div');
  this.target2 = document.createElement('div');
  this.target.classList.add('greeting');
  this.target.classList.add('greeting-form');
  this.target2.className = 'greeting';
  this.parent.className = 'greeting-box';
  this.handleSubmit = onHandleSubmit;
  this.handleClick = onHandleClick;
  this.clickLogout = onClickLogout;

  this.setState = function (nextState) {
    _this.state = nextState;

    _this.render();
  };

  this.render = function () {
    var _this$state = _this.state,
        username = _this$state.username,
        todos = _this$state.todos,
        isCurrentUser = _this$state.isCurrentUser;
    _this.greet.innerHTML = '만나서 반가워요! 아래 기존 계정이 있다면 선택해주세요.<br>새로운 계정을 만들고 싶다면 새로운 계정을 입력해주세요.';
    _this.target.innerHTML = "<form class=\"js-name-form\"><input type='text' /><button type='submit'>Log in</button></form>";

    _this.target.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();

      _this.handleSubmit(_this.target.querySelector('input').value);
    }, false);

    if (username.length && !isCurrentUser) {
      _this.target2.innerHTML = "<div class='greeting list'> \u23EC \uCEE4\uC11C\uB97C \uC62C\uB824 \uB193\uC73C\uBA74 \uACC4\uC815 \uC804\uCCB4 \uBAA9\uB85D\uC744 \uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\u2728</div><ul>".concat(username.map(function (name) {
        return "<li>".concat(name, "</li>");
      }).join(''), "</ul>");
    } else if (!username.length) {
      _this.target2.innerHTML = "<div class='greeting list'> 🙅 아직 등록된 계정이 없습니다. 새로 등록해주세요.</div>";
    }

    if (_this.target2.querySelector('ul')) {
      _this.target2.querySelector('ul').addEventListener('click', _this.handleClick, false);
    }

    if (isCurrentUser) {
      _this.greet.innerText = "\uC548\uB155\uD558\uC138\uC694. ".concat(isCurrentUser, "\uB2D8! \uC624\uB298\uC758 todo list\uB97C \uC791\uC131\uD574\uBCF4\uC138\uC694.");
      _this.greet.innerHTML += '<button class="logout">⏪ Log out</button>';

      _this.greet.querySelector('.logout').addEventListener('click', _this.clickLogout, false);

      if (_this.parent.children.item(1) === _this.target) {
        _this.parent.removeChild(_this.target);

        _this.parent.removeChild(_this.target2);
      }
    } else {
      _this.parent.appendChild(_this.greet);

      _this.parent.appendChild(_this.target);

      _this.parent.appendChild(_this.target2);

      element.appendChild(_this.parent);
    }
  };

  this.render();
}

var _default = Greeting;
exports.default = _default;
},{"./Greeting.css":"Components/Greeting/Greeting.css"}],"config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var config = {
  API_KEY: '500e625ea1eda63ab16e1b6666c6ba0c'
};
var _default = config;
exports.default = _default;
},{}],"LocalAPI.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationInformation = exports.removeUserInformation = exports.setUserInformation = exports.getUserInformation = void 0;
//이미 저장된 username이 있는지 확인 후 해당 user의 todolist를 받기
var USERS = 'Users';
var CURRENT = 'CurrentUser';
var LOCATION = 'Location';
var getUserInformation = {
  getCurrentUser: function getCurrentUser() {
    var currentUser = localStorage.getItem(CURRENT);
    return currentUser;
  },
  getUserList: function getUserList() {
    var users = JSON.parse(localStorage.getItem(USERS));
    return users;
  },
  getUserTodolist: function getUserTodolist(user) {
    var userTodos = JSON.parse(localStorage.getItem(user));
    return userTodos;
  }
};
exports.getUserInformation = getUserInformation;
var setUserInformation = {
  setCurrentUser: function setCurrentUser(name) {
    localStorage.setItem(CURRENT, name);
  },
  setUserList: function setUserList(arr) {
    localStorage.setItem(USERS, JSON.stringify(arr));
  },
  setUserTodolist: function setUserTodolist(user, arr) {
    localStorage.setItem(user, JSON.stringify(arr));
  }
};
exports.setUserInformation = setUserInformation;
var removeUserInformation = {
  removeCurrentUser: function removeCurrentUser() {
    localStorage.removeItem(CURRENT);
  }
};
exports.removeUserInformation = removeUserInformation;
var locationInformation = {
  getLocation: function getLocation() {
    var location = JSON.parse(localStorage.getItem(LOCATION));
    return location;
  },
  setLocation: function setLocation(location) {
    localStorage.setItem(LOCATION, JSON.stringify(location));
  }
};
exports.locationInformation = locationInformation;
},{}],"WeatherAPI.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("./config"));

var _LocalAPI = require("./LocalAPI");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KEY = _config.default.API_KEY;

function getWeatherData() {
  var _locationInformation$ = _LocalAPI.locationInformation.getLocation(),
      latitude = _locationInformation$.latitude,
      longitude = _locationInformation$.longitude;

  if (latitude && longitude) {
    var res = fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(latitude, "&lon=").concat(longitude, "&appid=").concat(KEY, "&units=metric"));
    return res;
  }

  return null;
}

var _default = getWeatherData;
exports.default = _default;
},{"./config":"config.js","./LocalAPI":"LocalAPI.js"}],"Components/Location/Location.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"Components/Location/Location.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _WeatherAPI = _interopRequireDefault(require("../../WeatherAPI"));

require("./Location.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Location(_ref) {
  var _this = this;

  var element = _ref.element,
      initialState = _ref.initialState,
      onHandleGeoSuccess = _ref.onHandleGeoSuccess,
      onHandleGeoError = _ref.onHandleGeoError;
  this.state = initialState;
  this.target = document.createElement('div');
  this.target.className = 'weather';
  this.handleSuccess = onHandleGeoSuccess;
  this.handleError = onHandleGeoError;
  element.appendChild(this.target);

  this.setState = function (nextState) {
    _this.state = nextState;

    _this.render();
  };

  this.askForLocation = function () {
    navigator.geolocation.getCurrentPosition(_this.handleSuccess, _this.handleError);
  };

  this.render = function () {
    var userLocation = _this.state.isCurrentLocation;

    if (!userLocation) {
      _this.askForLocation();
    } else {
      var res = (0, _WeatherAPI.default)();
      res.then(function (respond) {
        return respond.json();
      }).then(function (data) {
        var _data$weather = _slicedToArray(data.weather, 1),
            condition = _data$weather[0].main;

        var temperature = data.main.temp;
        var humidity = data.main.humidity;
        var place = data.name;
        _this.target.innerHTML = "\uC624\uB298 \uB0A0\uC528 : ".concat(condition.includes('Cloud') ? '☁️ ' + condition : condition.includes('Clear') ? '☀️ ' + condition : condition.includes('Rain') ? '🌧 ' + condition : condition.includes('Snow') ? '❄️ ' + condition : condition, " \uD604\uC7AC \uC704\uCE58 : ").concat(place, " \uD604\uC7AC \uC628\uB3C4 : ").concat(temperature, "\u2103 \uD604\uC7AC \uC2B5\uB3C4 : ").concat(humidity, "%");
      }).catch(function (e) {
        return console.log(e);
      });
    }
  };

  this.render();
}

var _default = Location;
exports.default = _default;
},{"../../WeatherAPI":"WeatherAPI.js","./Location.css":"Components/Location/Location.css"}],"Components/Todolist/Todolist.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"Components/Todolist/Todolist.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LocalAPI = require("../../LocalAPI");

require("./Todolist.css");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Todolist(_ref) {
  var _this = this;

  var element = _ref.element,
      initialState = _ref.initialState;
  this.state = initialState;
  var todoView = new TodolistView({
    element: element,
    initialState: _objectSpread({}, this.state),
    onHandleSubmit: function onHandleSubmit(e, input) {
      e.preventDefault();

      if (input.value) {
        var _this$state$todos = _this.state.todos,
            pending = _this$state$todos.pending,
            finished = _this$state$todos.finished;
        !pending ? pending = [] : pending;
        !finished ? finished = [] : finished;
        pending.push(input.value);

        _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
          todos: {
            pending: pending,
            finished: finished
          }
        }));

        _LocalAPI.setUserInformation.setUserTodolist(_this.state.isCurrentUser, _this.state.todos);

        input.value = '';
      }
    },
    onHandlePendingClick: function onHandlePendingClick(e) {
      var todobox = document.querySelector('.pending').querySelector('ul');
      var delNode = e.target.parentNode;
      todobox.removeChild(delNode);
      var _this$state$todos2 = _this.state.todos,
          newTodo = _this$state$todos2.pending,
          newFinish = _this$state$todos2.finished;
      newTodo.splice(delNode.id, 1);

      if (e.target.className === 'finish-btn') {
        newFinish.push(delNode.innerText.slice(0, -3).trim());
      }

      _LocalAPI.setUserInformation.setUserTodolist(_this.state.isCurrentUser, _this.state.todos);

      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        todos: {
          pending: newTodo,
          finished: newFinish
        }
      }));
    },
    onHandleFinishedClick: function onHandleFinishedClick(e) {
      var todobox = document.querySelector('.finished').querySelector('ul');
      var delNode = e.target.parentNode;
      todobox.removeChild(delNode);
      var _this$state$todos3 = _this.state.todos,
          newPending = _this$state$todos3.pending,
          newFinish = _this$state$todos3.finished;
      newFinish.splice(delNode.id, 1);

      if (e.target.className === 'pending-btn') {
        newPending.push(delNode.innerText.slice(0, -4).trim());
      }

      _LocalAPI.setUserInformation.setUserTodolist(_this.state.isCurrentUser, _this.state.todos);

      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        todos: {
          pending: newPending,
          finished: newFinish
        }
      }));
    }
  });

  this.setState = function (nextState) {
    _this.state = nextState;
    todoView.setState(_objectSpread({}, _this.state));
  };
}

function TodolistView(_ref2) {
  var _this2 = this;

  var element = _ref2.element,
      initialState = _ref2.initialState,
      onHandleSubmit = _ref2.onHandleSubmit,
      onHandlePendingClick = _ref2.onHandlePendingClick,
      onHandleFinishedClick = _ref2.onHandleFinishedClick;
  this.state = initialState;
  this.handleSubmit = onHandleSubmit;
  this.handlePendingClick = onHandlePendingClick;
  this.handleFinishedClick = onHandleFinishedClick;
  this.todobox = document.createElement('div');
  this.todobox.classList.add('todolist');
  this.form = document.createElement('form');
  this.form.innerHTML = '<input type="text" placeholder="📚 할 일을 입력하세요." /><button type="submit">추가하기</button>';
  var input = this.form.querySelector('input');
  this.form.addEventListener('submit', function (e) {
    return _this2.handleSubmit(e, input);
  }, false);
  this.pending = document.createElement('div');
  this.pending.classList.add('pending');
  this.finished = document.createElement('div');
  this.finished.classList.add('finished');

  this.setState = function (nextState) {
    _this2.state = nextState;

    _this2.render();
  };

  this.render = function () {
    if (_this2.state.isCurrentUser) {
      _this2.todobox.appendChild(_this2.form);

      _this2.todobox.appendChild(_this2.pending);

      _this2.todobox.appendChild(_this2.finished);

      element.appendChild(_this2.todobox);
    } else {
      if (element.querySelector('.todolist')) {
        element.removeChild(_this2.todobox);
      }
    }

    var _this2$state$todos = _this2.state.todos,
        pending = _this2$state$todos.pending,
        finished = _this2$state$todos.finished;

    if (pending.length) {
      _this2.pending.innerHTML = "<h4>\uD83C\uDFC3 \uD574\uC57C \uD558\uB294 \uC77C</h4><ul>".concat(pending.map(function (x, idx) {
        return "<li id=".concat(idx, ">").concat(x, " <button class=\"delete-btn\">\u274C</button> <button class=\"finish-btn\">\u2705</button></li>");
      }).join(''), "</ul>");

      _this2.pending.querySelectorAll('button').forEach(function (btn) {
        return btn.addEventListener('click', _this2.handlePendingClick, false);
      });
    } else {
      _this2.pending.innerText = '';
    }

    if (finished.length) {
      _this2.finished.innerHTML = "<h4>\uD83C\uDFC6 \uC644\uB8CC\uD55C \uC77C</h4><ul>".concat(finished.map(function (x, idx) {
        return "<li id=".concat(idx, ">").concat(x, " <button class=\"delete-btn\">\u274C</button> <button class=\"pending-btn\">\uD83D\uDD19</button></li>");
      }).join(''), "</ul>");

      _this2.finished.querySelectorAll('button').forEach(function (btn) {
        return btn.addEventListener('click', _this2.handleFinishedClick, false);
      });
    } else {
      _this2.finished.innerText = '';
    }
  };

  this.render();
}

var _default = Todolist;
exports.default = _default;
},{"../../LocalAPI":"LocalAPI.js","./Todolist.css":"Components/Todolist/Todolist.css"}],"App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Background = _interopRequireDefault(require("./Components/Background/Background"));

var _Clock = _interopRequireDefault(require("./Components/Clock/Clock"));

var _Greeting = _interopRequireDefault(require("./Components/Greeting/Greeting"));

var _Location = _interopRequireDefault(require("./Components/Location/Location"));

var _Todolist = _interopRequireDefault(require("./Components/Todolist/Todolist"));

var _LocalAPI = require("./LocalAPI");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function App(element) {
  var _this = this;

  this.state = {
    username: [],
    todos: {
      pending: [],
      finished: []
    },
    isCurrentUser: null,
    isCurrentLocation: null
  };
  var clock = new _Clock.default({
    element: element
  });
  var background = new _Background.default({
    element: element
  });
  var location = new _Location.default({
    element: element,
    initialState: {
      isCurrentLocation: _LocalAPI.locationInformation.getLocation()
    },
    onHandleGeoSuccess: function onHandleGeoSuccess(e) {
      var latitude = e.coords.latitude;
      var longitude = e.coords.longitude;

      _LocalAPI.locationInformation.setLocation({
        latitude: latitude,
        longitude: longitude
      });

      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        isCurrentLocation: {
          latitude: latitude,
          longitude: longitude
        }
      }));
    },
    onHandleGeoError: function onHandleGeoError(e) {
      console.log(e);
    }
  });
  var greeting = new _Greeting.default({
    element: element,
    initialState: {
      username: this.state.username,
      todos: this.state.todos,
      isCurrentUser: this.state.isCurrentUser
    },
    onHandleSubmit: function onHandleSubmit(value) {
      if (!_this.state.username.includes(value) && value) {
        _this.setState({
          todos: _this.state.todos,
          username: [].concat(_toConsumableArray(_this.state.username), [value]),
          isCurrentUser: value
        });

        _LocalAPI.setUserInformation.setUserList(_this.state.username);

        _LocalAPI.setUserInformation.setCurrentUser(_this.state.isCurrentUser);
      } else if (_this.state.username.includes(value)) {
        alert('존재하는 계정입니다. 다른 계정을 사용해주세요.');
      } else if (!value) {
        alert('계정은 최소 한 글자 이상이어야 합니다.');
      }
    },
    onHandleClick: function onHandleClick(event) {
      var value = event.target.innerText;

      if (value && event.target.tagName === 'LI') {
        _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
          isCurrentUser: value
        }));

        _LocalAPI.setUserInformation.setCurrentUser(_this.state.isCurrentUser);
      }
    },
    onClickLogout: function onClickLogout() {
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        isCurrentUser: false
      }));

      _LocalAPI.removeUserInformation.removeCurrentUser();
    }
  });
  var todolist = new _Todolist.default({
    element: element,
    initialState: _objectSpread({}, this.state)
  });

  this.setState = function (nextState) {
    _this.state = nextState;

    var todos = _LocalAPI.getUserInformation.getUserTodolist(_this.state.isCurrentUser);

    !todos ? todos = {
      pending: [],
      finished: []
    } : todos;
    greeting.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
      todos: todos
    }));
    location.setState({
      isCurrentLocation: _this.state.isCurrentLocation
    });
    todolist.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
      todos: todos
    }));
  };

  var init = function init() {
    var userlist = _LocalAPI.getUserInformation.getUserList();

    var currentUser = _LocalAPI.getUserInformation.getCurrentUser();

    var currentLocation = _LocalAPI.locationInformation.getLocation();

    var todos = _LocalAPI.getUserInformation.getUserTodolist(currentUser);

    !userlist ? userlist = [] : userlist;
    !todos ? todos = _this.state.todos : todos;

    try {
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        username: userlist,
        isCurrentUser: currentUser,
        todos: todos,
        isCurrentLocation: currentLocation
      }));
    } catch (e) {
      alert('user 정보를 가져오는데 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  init();
}

var _default = App;
exports.default = _default;
},{"./Components/Background/Background":"Components/Background/Background.js","./Components/Clock/Clock":"Components/Clock/Clock.js","./Components/Greeting/Greeting":"Components/Greeting/Greeting.js","./Components/Location/Location":"Components/Location/Location.js","./Components/Todolist/Todolist":"Components/Todolist/Todolist.js","./LocalAPI":"LocalAPI.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _App.default(document.getElementById('app'));
},{"./App":"App.js"}],"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59657" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/nomad_challenge_2021.e31bb0bc.js.map