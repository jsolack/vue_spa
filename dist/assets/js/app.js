webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.baseURL = 'https://o2beta.gongos.com/vue_spa_rest_api/default/';

__WEBPACK_IMPORTED_MODULE_0_axios___default.a.interceptors.request.use(function (config) {
  if (typeof window === 'undefined') {
    return config;
  }
  var token = window.localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
});

var imgPath = 'https://o2beta.gongos.com/vue_spa_rest_api/static/images/api/';
var data = {};

var appService = {
  getCards: function getCards(categoryId) {
    return new Promise(function (resolve) {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/entries/category/' + categoryId + '.json').then(function (response) {
        data['data'] = response.data.content;
        data['imgPath'] = imgPath;
        for (var i = 0; i < data.data.length; i++) {
          data.data[i]['img'] = data.imgPath + data.data[i]['img'];
        }
        resolve(data);
      });
    });
  },
  getProfile: function getProfile() {
    return new Promise(function (resolve) {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/profile/profile.json').then(function (response) {
        resolve(response.data);
      });
    });
  },
  login: function login(credentials) {
    return new Promise(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/user/jwt?username=' + credentials.username + '&password=' + credentials.password).then(function (response) {
        resolve(response.data);
      }).catch(function (response) {
        reject(response.status);
      });
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (appService);

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(15);


// Vue $mount to element
__WEBPACK_IMPORTED_MODULE_0__app__["a" /* app */].$mount('#app');

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuex_index_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_Layout_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(52);
/* unused harmony reexport router */
/* unused harmony reexport store */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].options.delimiters = ['{%', '%}'];

var app = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"](_extends({
  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_2__theme_Layout_vue__["a" /* default */], {
  store: __WEBPACK_IMPORTED_MODULE_1__vuex_index_js__["a" /* default */]
}));



/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cards__ = __webpack_require__(39);






// extend vue with 'use'
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["default"]);

var state = {
  isAuthenticated: false
};

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({
  modules: {
    cardsModule: __WEBPACK_IMPORTED_MODULE_4__cards__["a" /* default */]
  },
  state: state,
  getters: {
    isAuthenticated: function isAuthenticated(state) {
      return state.isAuthenticated;
    }
  },
  actions: {
    logout: function logout(context) {
      context.commit('logout');
    },

    login: function login(context, credentials) {
      return new Promise(function (resolve) {
        __WEBPACK_IMPORTED_MODULE_2__app_service_js__["a" /* default */].login(credentials).then(function (data) {
          // commit the state and token to login mutation
          context.commit('login', data);
          resolve(data);
        }).catch(function () {
          resolve('error');
        });
      });
    },
    initAuth: function initAuth(context) {
      return new Promise(function (resolve) {
        if (typeof window !== 'undefined') {
          var exp = window.localStorage.getItem('tokenExpiration');
          var unixTimeStamp = new Date().getTime() / 1000;
          if (exp !== null && parseInt(exp) - unixTimeStamp > 0) {
            context.commit('initAuth');
          } else {
            window.localStorage.clear();
          }
          resolve();
        }
        resolve();
      });
    }
  },
  mutations: {
    logout: function logout(state) {
      if (typeof window !== 'undefined') {
        window.localStorage.clear();
      }
      state.isAuthenticated = false;
    },
    login: function login(state, data) {
      var token = data.token;
      var dToken = __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default()(token);
      var expiration = dToken.exp;
      // console.log(jwtDecode(token))
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('tokenExpiration', expiration);
      }
      state.isAuthenticated = true;
    },
    initAuth: function initAuth(state) {
      state.isAuthenticated = true;
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base64_url_decode = __webpack_require__(37);

function InvalidTokenError(message) {
  this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
};

module.exports.InvalidTokenError = InvalidTokenError;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var atob = __webpack_require__(38);

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service_js__ = __webpack_require__(6);


var state = {
  cards: [],
  categoryId: 'data'
};

var getters = {
  cards: function cards(state) {
    return state.cards;
  }
};

var actions = {
  updateCategory: function updateCategory(context, categoryId) {
    return new Promise(function (resolve) {
      __WEBPACK_IMPORTED_MODULE_0__app_service_js__["a" /* default */].getCards(categoryId).then(function (data) {
        context.commit('updateCategory', { categoryId: categoryId, cards: data });
        resolve();
      });
    });
  }
};

var mutations = {
  updateCategory: function updateCategory(state, category) {
    state.categoryId = category.categoryId;
    state.cards = category.cards.data;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  // wrap the elements of this module in a namespace
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b9910cd_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Layout_vue__ = __webpack_require__(51);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(41)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b9910cd_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Layout_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\Layout.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Layout.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b9910cd", Component.options)
  } else {
    hotAPI.reload("data-v-2b9910cd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppHeader_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Hero_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppFooter_vue__ = __webpack_require__(49);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    'app-header': __WEBPACK_IMPORTED_MODULE_0__AppHeader_vue__["a" /* default */],
    'hero': __WEBPACK_IMPORTED_MODULE_1__Hero_vue__["a" /* default */],
    'app-footer': __WEBPACK_IMPORTED_MODULE_2__AppFooter_vue__["a" /* default */]
  }
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AppHeader_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b465fbb_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AppHeader_vue__ = __webpack_require__(45);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AppHeader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b465fbb_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AppHeader_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\AppHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b465fbb", Component.options)
  } else {
    hotAPI.reload("data-v-5b465fbb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// mappGetters helper from vuex library

/* harmony default export */ __webpack_exports__["a"] = ({
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])(['isAuthenticated']))
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "navbar has-shadow",
    attrs: {
      "role": "navigation",
      "aria-label": "main navigation"
    }
  }, [_c('div', {
    staticClass: "navbar-brand"
  }, [_c('router-link', {
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_c('img', {
    staticClass: "image is-64x64",
    attrs: {
      "src": "/static/images/logo.png",
      "alt": "vue spa"
    }
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "navbar-item is-tab",
    attrs: {
      "to": "/category/data"
    }
  }, [_vm._v("\n      Dynamic Data\n    ")]), _vm._v(" "), _c('router-link', {
    staticClass: "navbar-item is-tab",
    attrs: {
      "to": {
        name: 'category',
        params: {
          id: 'automation'
        }
      }
    }
  }, [_vm._v("\n      Automation\n    ")]), _vm._v(" "), _c('router-link', {
    staticClass: "navbar-item is-tab",
    attrs: {
      "to": "/login"
    }
  }, [(_vm.isAuthenticated) ? _c('span', [_vm._v("Logout")]) : _c('span', [_vm._v("Login")])]), _vm._v(" "), _vm._m(0)], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "navbar-burger"
  }, [_c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span')])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5b465fbb", esExports)
  }
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hero_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8cfef746_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Hero_vue__ = __webpack_require__(48);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hero_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8cfef746_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Hero_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\Hero.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Hero.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8cfef746", Component.options)
  } else {
    hotAPI.reload("data-v-8cfef746", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      main_title: 'Data Tools',
      main_subtitle: 'Check it out'
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])(['isAuthenticated']))
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "hero"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("\n        " + _vm._s(_vm.main_title) + "\n      ")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [(_vm.isAuthenticated) ? _c('span', [_vm._v(_vm._s(_vm.main_subtitle))]) : _c('span', [_vm._v("Please log in")])])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8cfef746", esExports)
  }
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a13fbc9_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AppFooter_vue__ = __webpack_require__(50);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a13fbc9_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AppFooter_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\AppFooter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppFooter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a13fbc9", Component.options)
  } else {
    hotAPI.reload("data-v-3a13fbc9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "has-text-centered"
  }, [_vm._v("\n      Footer!\n      "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Link")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3a13fbc9", esExports)
  }
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "main-section"
  }, [_c('app-header'), _vm._v(" "), (['notfound'].indexOf(_vm.$route.name) === -1) ? _c('hero') : _vm._e(), _vm._v(" "), _c('section', [_c('div', {
    ref: "content",
    staticClass: "content"
  }, [_c('transition', {
    attrs: {
      "appear": "",
      "name": "slide-fade",
      "mode": "out-in"
    }
  }, [_c('router-view', {
    key: _vm.$route.params.id,
    staticClass: "data-items"
  })], 1)], 1)])], 1), _vm._v(" "), _c('app-footer')], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b9910cd", esExports)
  }
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_Category_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_Login_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_NotFound_vue__ = __webpack_require__(64);






// lazy loading components
// will only load components when needed
// const Category = () => System.import('./theme/Category.vue')
// const Login = () => System.import('./theme/Login.vue')
// const NotFound = () => System.import('./theme/NotFound.vue')

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
  // use base '/' url and pass hitory through JS instead of '/#/' url handling
  mode: 'history',
  // the class to pass of the active link
  // use 'exact' on the router-link component to exaclty match the path 
  linkActiveClass: 'is-active',
  // you can set the behavior of default scroll position when routing
  // you can return the savedPosition to scroll to a y from a saved var
  // if (savedPosition) { return savedPosition }
  // or you can return to a # position to scroll to that particular element
  // if (to.hash) { return { selector: to.hash } }
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    return { y: 0 };
  },
  // define the routes below
  // pass parameters ":<my parameter>"
  routes: [{ path: '/login', name: 'login', component: __WEBPACK_IMPORTED_MODULE_3__theme_Login_vue__["a" /* default */] }, { path: '/category/:id', name: 'category', component: __WEBPACK_IMPORTED_MODULE_2__theme_Category_vue__["a" /* default */] }, { path: '/', redirect: '/category/data' },
  // wildcard path used here for a 404 page
  { path: '*', name: 'notfound', component: __WEBPACK_IMPORTED_MODULE_4__theme_NotFound_vue__["a" /* default */] }]
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dcfc1c3e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__ = __webpack_require__(60);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dcfc1c3e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\Category.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Category.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dcfc1c3e", Component.options)
  } else {
    hotAPI.reload("data-v-dcfc1c3e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Card_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_images_loaded__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_images_loaded___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_images_loaded__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  directives: {
    imagesLoaded: __WEBPACK_IMPORTED_MODULE_1_vue_images_loaded___default.a
  },
  components: {
    'app-card': __WEBPACK_IMPORTED_MODULE_0__Card_vue__["a" /* default */]
  },
  data: function data() {
    return {
      contentLoaded: false,
      imgFlag: false
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapGetters"])(['isAuthenticated']), Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapGetters"])('cardsModule', ['cards'])),
  methods: {
    loadCards: function loadCards() {
      var _this = this;

      this.imgFlag = false;
      if (this.$route.params.id === 'data') {
        this.categoryId = 'data';
      } else {
        this.categoryId = 'automation';
      }
      this.$store.dispatch('cardsModule/updateCategory', this.categoryId).then(function () {
        _this.contentLoaded = true;
      });
    },
    loaded: function loaded(instance) {
      var self = this;
      setTimeout(function () {
        self.imgFlag = true;
      }, 800);
    }
  },
  watch: {
    '$route': function $route(to, from) {
      // this.id = to.params.id
      this.loadCards();
    }
  },
  created: function created() {
    var _this2 = this;

    this.$store.dispatch('initAuth').then(function () {
      if (_this2.isAuthenticated) {
        _this2.loadCards();
      } else {
        _this2.$router.push({ name: 'login', query: { redirect: '/' } });
      }
    });
    // this is how you would grab vars from the query
    // this.$route.query.page returns the "page" var if valid 
    // console.log(this.$route.query.page)
  }
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Card_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4432971a_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Card_vue__ = __webpack_require__(58);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(56)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4432971a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4432971a_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Card_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\Card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4432971a", Component.options)
  } else {
    hotAPI.reload("data-v-4432971a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['link']
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_vm._t("card-image"), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_vm._t("card-title"), _vm._v(" "), _vm._t("card-content")], 2), _vm._v(" "), _c('footer', {
    staticClass: "card-footer"
  }, [_c('a', {
    staticClass: "card-footer-item",
    attrs: {
      "disabled": "",
      "href": _vm.link,
      "target": "_blank"
    }
  }, [_vm._v("Read More")])])], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4432971a", esExports)
  }
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(3)):"function"==typeof define&&define.amd?define(["vue"],e):"object"==typeof exports?exports.VueImagesLoaded=e(require("vue")):t.VueImagesLoaded=e(t.Vue)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){var r,o,i;!function(s,u){o=[t,e,n(13),n(14),n(43),n(44)],r=u,i="function"==typeof r?r.apply(e,o):r,!(void 0!==i&&(t.exports=i))}(this,function(t,e,n,r,o,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function u(t,e){var n=t.length;if(n!=e.length)return!1;for(var r=0;r<n;r++){var o=t[r],i=e[r];if(o.img!==i.img||o.src!==i.src)return!1}return!0}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("function"!=typeof t)throw"imageLoaded directive error: objet "+t+" should be a function "+e}function f(t,e){var n=e.value,r=e.arg,o=e.modifiers;if(!r)return c(n),void t.on("always",function(t){return setTimeout(function(){return n(t)})});var i=!!o&&!!(0,h.default)(o).length,s=i?o:n,u=i?function(t){return n}:function(t){return n[t]},f=function(){var e=u(a);c(e,i?"":"property "+a+" of "+n),t[r](a,function(t,n){return setTimeout(function(){return e(t,n)})})};for(var a in s)f()}function a(t,e){var n=(0,d.default)(t),r=n.images.map(function(t){return{img:t.img,src:t.img.src}}),o=t.__imagesLoaded__.context;u(o,r)||(f(n,e),(0,p.default)(t.__imagesLoaded__,{context:r,imageLoaded:n}))}Object.defineProperty(e,"__esModule",{value:!0});var p=s(n),h=s(r),d=s(o),l=s(i);e.default={bind:function(t){t.__imagesLoaded__={context:[]}},inserted:function(t,e){a(t,e)},componentUpdated:function(t,e){l.default.nextTick(function(){a(t,e)})},unbind:function(t,e){t.__imagesLoaded__=null}},t.exports=e.default})},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){t.exports=!n(2)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(4),o=n(1),i=n(21),s=n(25),u="prototype",c=function(t,e,n){var f,a,p,h=t&c.F,d=t&c.G,l=t&c.S,v=t&c.P,m=t&c.B,g=t&c.W,y=d?o:o[e]||(o[e]={}),x=y[u],b=d?r:l?r[e]:(r[e]||{})[u];d&&(n=e);for(f in n)a=!h&&b&&void 0!==b[f],a&&f in y||(p=a?b[f]:n[f],y[f]=d&&"function"!=typeof b[f]?n[f]:m&&a?i(p,r):g&&b[f]==p?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(p):v&&"function"==typeof p?i(Function.call,p):p,v&&((y.virtual||(y.virtual={}))[f]=p,t&c.R&&x&&!x[f]&&s(x,f,p)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(30),o=n(23);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(8),o=n(6);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(6);t.exports=function(t){return Object(r(t))}},function(t,e,n){t.exports={default:n(15),__esModule:!0}},function(t,e,n){t.exports={default:n(16),__esModule:!0}},function(t,e,n){n(40),t.exports=n(1).Object.assign},function(t,e,n){n(41),t.exports=n(1).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(11),o=n(37),i=n(36);t.exports=function(t){return function(e,n,s){var u,c=r(e),f=o(c.length),a=i(s,f);if(t&&n!=n){for(;f>a;)if(u=c[a++],u!=u)return!0}else for(;f>a;a++)if((t||a in c)&&c[a]===n)return t||a||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(17);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(5),o=n(4).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(28),o=n(33);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(3)&&!n(2)(function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(9),o=n(29),i=n(31),s=n(12),u=n(8),c=Object.assign;t.exports=!c||n(2)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=s(t),c=arguments.length,f=1,a=o.f,p=i.f;c>f;)for(var h,d=u(arguments[f++]),l=a?r(d).concat(a(d)):r(d),v=l.length,m=0;v>m;)p.call(d,h=l[m++])&&(n[h]=d[h]);return n}:c},function(t,e,n){var r=n(18),o=n(26),i=n(38),s=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(24),o=n(11),i=n(19)(!1),s=n(34)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),c=0,f=[];for(n in u)n!=s&&r(u,n)&&f.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~i(f,n)||f.push(n));return f}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(7),o=n(1),i=n(2);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],s={};s[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",s)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(35)("keys"),o=n(39);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(4),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var r=n(10),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(10),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(7);r(r.S+r.F,"Object",{assign:n(27)})},function(t,e,n){var r=n(12),o=n(9);n(32)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){var r,o;!function(i,s){r=s,o="function"==typeof r?r.call(e,n,e,t):r,!(void 0!==o&&(t.exports=o))}("undefined"!=typeof window?window:this,function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var n=this._events=this._events||{},r=n[t]=n[t]||[];return r.indexOf(e)==-1&&r.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var n=this._onceEvents=this._onceEvents||{},r=n[t]=n[t]||{};return r[e]=!0,this}},e.off=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var r=n.indexOf(e);return r!=-1&&n.splice(r,1),this}},e.emitEvent=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var r=0,o=n[r];e=e||[];for(var i=this._onceEvents&&this._onceEvents[t];o;){var s=i&&i[o];s&&(this.off(t,o),delete i[o]),o.apply(this,e),r+=s?0:1,o=n[r]}return this}},t})},function(t,e,n){var r,o;/*!
	 * imagesLoaded v4.1.1
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */
!function(i,s){"use strict";r=[n(42)],o=function(t){return s(i,t)}.apply(e,r),!(void 0!==o&&(t.exports=o))}(window,function(t,e){"use strict";function n(t,e){for(var n in e)t[n]=e[n];return t}function r(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var n=0;n<t.length;n++)e.push(t[n]);else e.push(t);return e}function o(t,e,i){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=r(t),this.options=n({},this.options),"function"==typeof e?i=e:n(this.options,e),i&&this.on("always",i),this.getImages(),u&&(this.jqDeferred=new u.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,i)}function i(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var u=t.jQuery,c=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&f[e]){for(var n=t.querySelectorAll("img"),r=0;r<n.length;r++){var o=n[r];this.addImage(o)}if("string"==typeof this.options.background){var i=t.querySelectorAll(this.options.background);for(r=0;r<i.length;r++){var s=i[r];this.addElementBackgroundImages(s)}}}};var f={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var n=/url\((['"])?(.*?)\1\)/gi,r=n.exec(e.backgroundImage);null!==r;){var o=r&&r[2];o&&this.addBackground(o,t),r=n.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new i(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var n=new s(t,e);this.images.push(n)},o.prototype.check=function(){function t(t,n,r){setTimeout(function(){e.progress(t,n,r)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&c&&c.log("progress: "+n,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},i.prototype=Object.create(e.prototype),i.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},i.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},i.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(i.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(u=e,u.fn.imagesLoaded=function(t,e){var n=new o(this,t,e);return n.jqDeferred.promise(u(this))})},o.makeJQueryPlugin(),o})},function(e,n){e.exports=t}])});
//# sourceMappingURL=vueimagesloaded.js.map

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "columns"
  }, _vm._l((_vm.cards), function(card) {
    return (_vm.contentLoaded && _vm.isAuthenticated) ? _c('div', {
      key: card.id,
      staticClass: "column is-9-mobile is-offset-2-mobile is-3-desktop is-6-tablet"
    }, [_c('app-card', {
      attrs: {
        "link": card.link
      }
    }, [_c('div', {
      staticClass: "card-image",
      slot: "card-image"
    }, [_c('figure', {
      class: ['image', card.img_class]
    }, [_c('div', {
      directives: [{
        name: "images-loaded",
        rawName: "v-images-loaded",
        value: (_vm.loaded),
        expression: "loaded"
      }]
    }, [_c('transition', {
      attrs: {
        "name": "fade"
      }
    }, [_c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.imgFlag),
        expression: "imgFlag"
      }],
      attrs: {
        "src": card.img,
        "alt": card.title
      }
    })])], 1), _vm._v(" "), _c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (!_vm.imgFlag),
        expression: "!imgFlag"
      }],
      attrs: {
        "src": "/static/images/loading.gif",
        "alt": "loading..."
      }
    })])]), _vm._v(" "), _c('h3', {
      slot: "card-title"
    }, [_vm._v(_vm._s(card.title))]), _vm._v(" "), _c('p', {
      slot: "card-content"
    }, [_vm._v(_vm._s(card.card_content))])])], 1) : _vm._e()
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-dcfc1c3e", esExports)
  }
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ec9ddfd4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__(63);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ec9ddfd4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ec9ddfd4", Component.options)
  } else {
    hotAPI.reload("data-v-ec9ddfd4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      username: '',
      password: '',
      // isAuthenticated: false,
      // profile: {},
      // profileFlag: false,
      isAuthenticating: false,
      loginError: false
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])(['isAuthenticated'])),
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])({
    logout: 'logout'
  }), {
    login: function login() {
      var _this = this;

      this.isAuthenticating = true;
      this.$store.dispatch('login', { username: this.username, password: this.password }).then(function (data) {
        _this.isAuthenticating = false;
        if (data === 'error') {
          _this.loginError = true;
        } else {
          _this.isAuthenticating = false;
          _this.username = '';
          _this.password = '';
          var self = _this;
          setTimeout(function () {
            self.$router.push(self.$route.query.redirect || '/');
          }, 1000);
        }
      });
    }
  }),
  created: function created() {
    this.$store.dispatch('initAuth');
  }
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('transition-group', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.isAuthenticated) ? _c('div', {
    key: "logout",
    staticClass: "hero is-medium is-success is-bold "
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("\n          Hello Authenticated User\n        ")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("\n          Looking good\n        ")]), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": function($event) {
        _vm.logout()
      }
    }
  }, [_vm._v("\n          Logout\n        ")])])])]) : _c('div', {
    key: "login",
    staticClass: "hero is-medium is-primary is-bold is-medium"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h2', {
    staticClass: "title"
  }, [_vm._v("Login")]), _vm._v(" "), _c('div', {
    staticClass: "field is-horizontal"
  }, [_c('div', {
    staticClass: "field-label is-normal"
  }, [_c('label', {
    staticClass: "label has-text-white"
  }, [_vm._v("Email")])]), _vm._v(" "), _c('div', {
    staticClass: "field-body"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "enter your email"
    },
    domProps: {
      "value": (_vm.username)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && $event.keyCode !== 13) { return null; }
        _vm.login()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.username = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "field is-horizontal"
  }, [_c('div', {
    staticClass: "field-label is-normal"
  }, [_c('label', {
    staticClass: "label has-text-white"
  }, [_vm._v("Password")])]), _vm._v(" "), _c('div', {
    staticClass: "field-body"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "input",
    attrs: {
      "type": "password",
      "placeholder": "enter your password"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && $event.keyCode !== 13) { return null; }
        _vm.login()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "field is-horizontal"
  }, [_c('div', {
    staticClass: "field-label"
  }), _vm._v(" "), _c('div', {
    staticClass: "field-body"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('button', {
    class: ['button', {
      'is-loading': _vm.isAuthenticating
    }],
    on: {
      "click": function($event) {
        _vm.login()
      }
    }
  }, [_vm._v("\n                  Login\n                ")])])])])])])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loginError),
      expression: "loginError"
    }],
    key: "loginErrorModal",
    staticClass: "modal is-active",
    on: {
      "close": function($event) {
        _vm.loginError = false
      }
    }
  }, [_c('div', {
    staticClass: "modal-background",
    on: {
      "click": function($event) {
        _vm.loginError = false
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "box has-text-centered"
  }, [_c('h2', [_c('span', {
    staticClass: "has-text-danger"
  }, [_vm._v("X")]), _vm._v(" There was a problem logging you in :(")])])]), _vm._v(" "), _c('button', {
    staticClass: "modal-close is-large",
    attrs: {
      "aria-label": "close"
    },
    on: {
      "click": function($event) {
        _vm.loginError = false
      }
    }
  })])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ec9ddfd4", esExports)
  }
}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ea60465c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_NotFound_vue__ = __webpack_require__(65);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ea60465c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_NotFound_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\NotFound.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NotFound.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ea60465c", Component.options)
  } else {
    hotAPI.reload("data-v-ea60465c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "hero is-danger is-fullheight is-marginless is-paddingless"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container has-text-centered"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("\n        Oh oh, something went wrong\n      ")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("\n        Click to go back home\n      ")]), _vm._v(" "), _c('router-link', {
    staticClass: "button",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("\n        Go Home\n      ")])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ea60465c", esExports)
  }
}

/***/ })
],[14]);