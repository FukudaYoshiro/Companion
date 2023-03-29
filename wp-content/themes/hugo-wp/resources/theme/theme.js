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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 125);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(47);
var toPrimitive = __webpack_require__(30);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(14)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(57);
var defined = __webpack_require__(29);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(33)('wks');
var uid = __webpack_require__(21);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var ctx = __webpack_require__(56);
var hide = __webpack_require__(11);
var has = __webpack_require__(6);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(50);
var enumBugKeys = __webpack_require__(34);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(65);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(80);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33)('keys');
var uid = __webpack_require__(21);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(18) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(6);
var TAG = __webpack_require__(12)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(12);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var LIBRARY = __webpack_require__(18);
var wksExt = __webpack_require__(36);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (true) module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});


/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(17);
var dPs = __webpack_require__(71);
var enumBugKeys = __webpack_require__(34);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(48)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(75).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(29);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(130);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(18);
var $export = __webpack_require__(16);
var redefine = __webpack_require__(49);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(31);
var $iterCreate = __webpack_require__(70);
var setToStringTag = __webpack_require__(35);
var getPrototypeOf = __webpack_require__(58);
var ITERATOR = __webpack_require__(12)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(14)(function () {
  return Object.defineProperty(__webpack_require__(48)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(6);
var toIObject = __webpack_require__(9);
var arrayIndexOf = __webpack_require__(72)(false);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(50);
var hiddenKeys = __webpack_require__(34).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(25);
var createDesc = __webpack_require__(19);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(30);
var has = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(47);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ }),
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(69);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(51);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(6);
var toObject = __webpack_require__(41);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(24);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(137);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(141);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(24);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 61 */,
/* 62 */,
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
    var hotEmitter = require("webpack/hot/emitter");
    hotEmitter.on("webpackHotUpdate", function (currentHash) {
        document.querySelectorAll('link[href][rel=stylesheet]').forEach(function (link) {
            var url = new URL(link.href);
            url.searchParams.set('hash', Date.now());
            link.href = link.href.replace(url.toString());
        });
    });
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColibriFrontComponent = exports.ColibriFrontend = undefined;

var _colibri = __webpack_require__(104);

var _colibri2 = _interopRequireDefault(_colibri);

var _colibriKubeComponent = __webpack_require__(129);

var _colibriKubeComponent2 = _interopRequireDefault(_colibriKubeComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_colibri2.default.registerPlugin = function (name, plugin, autoload) {
  if (typeof name.componentName === 'function') {
    autoload = plugin;
    plugin = name;
    name = plugin.componentName();
  }

  _colibri2.default[name] = plugin;
  // Colibri[name].inherits(Colibri);
  _colibri2.default.Plugin.create(name);

  if (autoload !== false) {
    _colibri2.default.Plugin.autoload(name);
  }
};

exports.ColibriFrontend = _colibri2.default;
exports.ColibriFrontComponent = _colibriKubeComponent2.default;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67);
__webpack_require__(76);
module.exports = __webpack_require__(36).f('iterator');


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(68)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(46)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28);
var defined = __webpack_require__(29);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(40);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(35);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(12)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(17);
var getKeys = __webpack_require__(20);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(9);
var toLength = __webpack_require__(73);
var toAbsoluteIndex = __webpack_require__(74);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(28);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
var global = __webpack_require__(2);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(31);
var TO_STRING_TAG = __webpack_require__(12)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(78);
var step = __webpack_require__(79);
var Iterators = __webpack_require__(31);
var toIObject = __webpack_require__(9);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(46)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
__webpack_require__(87);
__webpack_require__(88);
__webpack_require__(89);
module.exports = __webpack_require__(3).Symbol;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(8);
var $export = __webpack_require__(16);
var redefine = __webpack_require__(49);
var META = __webpack_require__(83).KEY;
var $fails = __webpack_require__(14);
var shared = __webpack_require__(33);
var setToStringTag = __webpack_require__(35);
var uid = __webpack_require__(21);
var wks = __webpack_require__(12);
var wksExt = __webpack_require__(36);
var wksDefine = __webpack_require__(37);
var enumKeys = __webpack_require__(84);
var isArray = __webpack_require__(85);
var anObject = __webpack_require__(17);
var isObject = __webpack_require__(13);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(30);
var createDesc = __webpack_require__(19);
var _create = __webpack_require__(40);
var gOPNExt = __webpack_require__(86);
var $GOPD = __webpack_require__(53);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(20);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(52).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(25).f = $propertyIsEnumerable;
  __webpack_require__(42).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(18)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(21)('meta');
var isObject = __webpack_require__(13);
var has = __webpack_require__(6);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(14)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(20);
var gOPS = __webpack_require__(42);
var pIE = __webpack_require__(25);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(51);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(9);
var gOPN = __webpack_require__(52).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 87 */
/***/ (function(module, exports) {



/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37)('asyncIterator');


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37)('observable');


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(16);
var core = __webpack_require__(3);
var fails = __webpack_require__(14);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(24);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (name, definition) {

  if (true) {
    module.exports = definition();
  } else if (typeof define == 'function' && (0, _typeof3.default)(define.amd) == 'object') {
    define(definition);
  } else {
    this[name] = definition();
  }
})('Colibri', function () {
  var $ = jQuery;
  if (typeof jQuery === 'undefined') {
    throw new Error('Colibri requires jQuery');
  }

  ;(function ($) {
    var version = $.fn.jquery.split('.');
    if (version[0] === 1 && version[1] < 8) {
      throw new Error('Colibri requires at least jQuery v1.8');
    }
  })(jQuery);

  var _Colibri;

  var lib_prefix = "colibri.";

  ;(function () {
    // Inherits
    Function.prototype.inherits = function (parent) {
      var F = function F() {};
      F.prototype = parent.prototype;
      var f = new F();

      for (var prop in this.prototype) {
        f[prop] = this.prototype[prop];
      }
      this.prototype = f;
      this.prototype.super = parent.prototype;
    };

    // Core Class
    _Colibri = function Colibri(element, options) {
      options = (typeof options === 'undefined' ? 'undefined' : (0, _typeof3.default)(options)) === 'object' ? options : {};

      this.$element = $(element);
      var instanceId = this.$element.data('colibri-id');

      var instanceData = _Colibri.getData(instanceId);
      this.instance = instanceId;

      var elementData = this.$element.data();

      this.opts = $.extend(true, {}, this.defaults, $.fn[lib_prefix + this.namespace].options, elementData, instanceData, options);
      this.$target = typeof this.opts.target === 'string' ? $(this.opts.target) : null;
    };

    _Colibri.getData = function (id) {
      if (window.colibriData && window.colibriData[id]) {
        return window.colibriData[id];
      }

      return {};
    };

    _Colibri.isCustomizerPreview = function () {
      return !!window.colibriCustomizerPreviewData;
    };
    // Core Functionality
    _Colibri.prototype = {
      updateOpts: function updateOpts(updatedData) {
        var instanceId = this.instance;
        var instanceData = $.extend(true, {}, this.defaults, _Colibri.getData(instanceId));
        var updatedDataWithDefault = updatedData ? updatedData : {};
        this.opts = $.extend(true, this.opts, instanceData, updatedDataWithDefault);
      },
      getInstance: function getInstance() {
        return this.$element.data('fn.' + this.namespace);
      },
      hasTarget: function hasTarget() {
        return !(this.$target === null);
      },
      callback: function callback(type) {
        var args = [].slice.call(arguments).splice(1);

        // on element callback
        if (this.$element) {
          args = this._fireCallback($._data(this.$element[0], 'events'), type, this.namespace, args);
        }

        // on target callback
        if (this.$target) {
          args = this._fireCallback($._data(this.$target[0], 'events'), type, this.namespace, args);
        }

        // opts callback
        if (this.opts && this.opts.callbacks && $.isFunction(this.opts.callbacks[type])) {
          return this.opts.callbacks[type].apply(this, args);
        }

        return args;
      },
      _fireCallback: function _fireCallback(events, type, eventNamespace, args) {
        if (events && typeof events[type] !== 'undefined') {
          var len = events[type].length;
          for (var i = 0; i < len; i++) {
            var namespace = events[type][i].namespace;
            if (namespace === eventNamespace) {
              var value = events[type][i].handler.apply(this, args);
            }
          }
        }

        return typeof value === 'undefined' ? args : value;
      }
    };
  })();

  (function (Colibri) {
    Colibri.Plugin = {
      create: function create(classname, pluginname) {
        pluginname = typeof pluginname === 'undefined' ? classname.toLowerCase() : pluginname;
        pluginname = lib_prefix + pluginname;

        $.fn[pluginname] = function (method, options) {
          var args = Array.prototype.slice.call(arguments, 1);
          var name = 'fn.' + pluginname;
          var val = [];

          this.each(function () {
            var $this = $(this),
                data = $this.data(name);
            options = (typeof method === 'undefined' ? 'undefined' : (0, _typeof3.default)(method)) === 'object' ? method : options;

            if (!data) {
              // Initialization
              $this.data(name, {});
              data = new Colibri[classname](this, options);
              $this.data(name, data);
            }

            // Call methods
            if (typeof method === 'string') {
              if ($.isFunction(data[method])) {
                var methodVal = data[method].apply(data, args);
                if (methodVal !== undefined) {
                  val.push(methodVal);
                }
              } else {
                $.error('No such method "' + method + '" for ' + classname);
              }
            }
          });

          return val.length === 0 || val.length === 1 ? val.length === 0 ? this : val[0] : val;
        };

        $.fn[pluginname].options = {};

        return this;
      },
      autoload: function autoload(pluginname) {
        var arr = pluginname.split(',');
        var len = arr.length;

        for (var i = 0; i < len; i++) {
          var name = arr[i].toLowerCase().split(',').map(function (s) {
            return lib_prefix + s.trim();
          }).join(',');
          this.autoloadQueue.push(name);
        }

        return this;
      },
      autoloadQueue: [],
      startAutoload: function startAutoload() {
        if (!window.MutationObserver || this.autoloadQueue.length === 0) {
          return;
        }

        var self = this;
        var observer = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            var newNodes = mutation.addedNodes;
            if (newNodes.length === 0 || newNodes.length === 1 && newNodes.nodeType === 3) {
              return;
            }

            self.startAutoloadOnce();
          });
        });

        // pass in the target node, as well as the observer options
        observer.observe(document, {
          subtree: true,
          childList: true
        });
      },

      startAutoloadOnce: function startAutoloadOnce() {
        var self = this;
        var $nodes = $('[data-colibri-component]').not('[data-loaded]').not('[data-disabled]');
        $nodes.each(function () {
          var $el = $(this);
          var pluginname = lib_prefix + $el.data('colibri-component');

          if (self.autoloadQueue.indexOf(pluginname) !== -1) {
            $el.attr('data-loaded', true);
            try {
              $el[pluginname]();
            } catch (e) {
              console.error(e);
            }
          }
        });
      },
      watch: function watch() {
        Colibri.Plugin.startAutoloadOnce();
        Colibri.Plugin.startAutoload();
      }
    };

    $(window).on('load', function () {
      Colibri.Plugin.watch();
    });
  })(_Colibri);

  (function (Colibri) {
    Colibri.Animation = function (element, effect, callback) {
      this.namespace = 'animation';
      this.defaults = {};

      // Parent Constructor
      Colibri.apply(this, arguments);

      // Initialization
      this.effect = effect;
      this.completeCallback = typeof callback === 'undefined' ? false : callback;
      this.prefixes = ['', '-moz-', '-o-animation-', '-webkit-'];
      this.queue = [];

      this.start();
    };

    Colibri.Animation.prototype = {
      start: function start() {
        if (this.isSlideEffect()) {
          this.setElementHeight();
        }

        this.addToQueue();
        this.clean();
        this.animate();
      },
      addToQueue: function addToQueue() {
        this.queue.push(this.effect);
      },
      setElementHeight: function setElementHeight() {
        this.$element.height(this.$element.outerHeight());
      },
      removeElementHeight: function removeElementHeight() {
        this.$element.css('height', '');
      },
      isSlideEffect: function isSlideEffect() {
        return this.effect === 'slideDown' || this.effect === 'slideUp';
      },
      isHideableEffect: function isHideableEffect() {
        var effects = ['fadeOut', 'slideUp', 'flipOut', 'zoomOut', 'slideOutUp', 'slideOutRight', 'slideOutLeft'];

        return $.inArray(this.effect, effects) !== -1;
      },
      isToggleEffect: function isToggleEffect() {
        return this.effect === 'show' || this.effect === 'hide';
      },
      storeHideClasses: function storeHideClasses() {
        if (this.$element.hasClass('hide-sm')) {
          this.$element.data('hide-sm-class', true);
        } else if (this.$element.hasClass('hide-md')) {
          this.$element.data('hide-md-class', true);
        }
      },
      revertHideClasses: function revertHideClasses() {
        if (this.$element.data('hide-sm-class')) {
          this.$element.addClass('hide-sm').removeData('hide-sm-class');
        } else if (this.$element.data('hide-md-class')) {
          this.$element.addClass('hide-md').removeData('hide-md-class');
        } else {
          this.$element.addClass('hide');
        }
      },
      removeHideClass: function removeHideClass() {
        if (this.$element.data('hide-sm-class')) {
          this.$element.removeClass('hide-sm');
        } else {
          if (this.$element.data('hide-md-class')) {
            this.$element.removeClass('hide-md');
          } else {
            this.$element.removeClass('hide');
            this.$element.removeClass('force-hide');
          }
        }
      },
      animate: function animate() {
        this.storeHideClasses();
        if (this.isToggleEffect()) {
          return this.makeSimpleEffects();
        }

        this.$element.addClass('colibri-animated');
        this.$element.addClass(this.queue[0]);
        this.removeHideClass();

        var _callback = this.queue.length > 1 ? null : this.completeCallback;
        this.complete('AnimationEnd', $.proxy(this.makeComplete, this), _callback);
      },
      makeSimpleEffects: function makeSimpleEffects() {
        if (this.effect === 'show') {
          this.removeHideClass();
        } else if (this.effect === 'hide') {
          this.revertHideClasses();
        }

        if (typeof this.completeCallback === 'function') {
          this.completeCallback(this);
        }
      },
      makeComplete: function makeComplete() {
        if (this.$element.hasClass(this.queue[0])) {
          this.clean();
          this.queue.shift();

          if (this.queue.length) {
            this.animate();
          }
        }
      },
      complete: function complete(type, make, callback) {
        var events = type.split(' ').map(function (type) {
          return type.toLowerCase() + ' webkit' + type + ' o' + type + ' MS' + type;
        });

        this.$element.one(events.join(' '), $.proxy(function () {
          if (typeof make === 'function') {
            make();
          }
          if (this.isHideableEffect()) {
            this.revertHideClasses();
          }
          if (this.isSlideEffect()) {
            this.removeElementHeight();
          }
          if (typeof callback === 'function') {
            callback(this);
          }

          this.$element.off(event);
        }, this));
      },
      clean: function clean() {
        this.$element.removeClass('colibri-animated').removeClass(this.queue[0]);
      }
    };

    // Inheritance
    Colibri.Animation.inherits(Colibri);
  })(_Colibri);

  (function ($) {
    var animationName = lib_prefix + 'animation';
    $.fn[animationName] = function (effect, callback) {
      var name = 'fn.animation';

      return this.each(function () {
        var $this = $(this),
            data = $this.data(name);

        $this.data(name, {});
        $this.data(name, data = new _Colibri.Animation(this, effect, callback));
      });
    };

    $.fn[animationName].options = {};

    _Colibri.animate = function ($target, effect, callback) {
      $target[animationName](effect, callback);
      return $target;
    };
  })(jQuery);

  (function (Colibri) {
    Colibri.Detect = function () {};

    Colibri.Detect.prototype = {
      isMobile: function isMobile() {
        return (/(iPhone|iPod|BlackBerry|Android)/.test(navigator.userAgent)
        );
      },
      isDesktop: function isDesktop() {
        return !/(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent);
      },
      isMobileScreen: function isMobileScreen() {
        return $(window).width() <= 768;
      },
      isTabletScreen: function isTabletScreen() {
        return $(window).width() >= 768 && $(window).width() <= 1024;
      },
      isDesktopScreen: function isDesktopScreen() {
        return $(window).width() > 1024;
      }
    };
  })(_Colibri);

  (function (Colibri) {
    Colibri.Utils = function () {};

    Colibri.Utils.prototype = {
      disableBodyScroll: function disableBodyScroll() {
        var $body = $('html');
        var windowWidth = window.innerWidth;

        if (!windowWidth) {
          var documentElementRect = document.documentElement.getBoundingClientRect();
          windowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }

        var isOverflowing = document.body.clientWidth < windowWidth;
        var scrollbarWidth = this.measureScrollbar();

        $body.css('overflow', 'hidden');
        if (isOverflowing) {
          $body.css('padding-right', scrollbarWidth);
        }
      },
      measureScrollbar: function measureScrollbar() {
        var $body = $('body');
        var scrollDiv = document.createElement('div');
        scrollDiv.className = 'scrollbar-measure';

        $body.append(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        $body[0].removeChild(scrollDiv);
        return scrollbarWidth;
      },
      enableBodyScroll: function enableBodyScroll() {
        $('html').css({ 'overflow': '', 'padding-right': '' });
      }
    };
  })(_Colibri);

  return _Colibri;
});

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(43);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(44);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseHandler = function () {
  function BaseHandler(element, settings) {
    (0, _classCallCheck3.default)(this, BaseHandler);

    this.settings = settings;
    this.element = element;
    this.isPlaying = false;

    this.ready();
  }

  (0, _createClass3.default)(BaseHandler, [{
    key: 'ready',
    value: function ready() {}
  }, {
    key: 'play',
    value: function play() {}
  }, {
    key: 'pause',
    value: function pause() {}
  }, {
    key: 'isPaused',
    value: function isPaused() {}
  }, {
    key: 'setVideo',
    value: function setVideo(node) {
      node.className = 'colibri-video-background-item';
      this.element.innerHTML = '';
      this.element.appendChild(node);
      this.addResizeBind();
    }
  }, {
    key: 'trigger',
    value: function trigger(name) {
      var evt;

      if ('function' === typeof window.Event) {
        evt = new Event(name);
      } else {
        evt = document.createEvent('Event');
        evt.initEvent(name, true, true);
      }

      this.element.dispatchEvent(evt);
    }
  }, {
    key: 'loaded',
    value: function loaded() {
      this.trigger('video-bg-loaded');
    }
  }, {
    key: 'addResizeBind',
    value: function addResizeBind() {
      var _this = this;

      this.trigger('video-bg-resize');
      this.onResize(function () {
        _this.trigger('video-bg-resize');
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(callback) {
      jQuery(this.element).on('video-bg-loaded', callback);
    }
  }, {
    key: 'onResize',
    value: function onResize(callback) {
      var debounce = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

      callback = jQuery.debounce(callback, debounce);
      jQuery(window).resize(callback);
      jQuery(window).on('orientationchange', callback);
    }
  }], [{
    key: 'test',
    value: function test() {
      return false;
    }
  }]);
  return BaseHandler;
}();

exports.default = BaseHandler;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var linksDefineSamePage = function linksDefineSamePage(link1, link2) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$compareQuery = _ref.compareQuery,
      compareQuery = _ref$compareQuery === undefined ? false : _ref$compareQuery,
      _ref$compareHash = _ref.compareHash,
      compareHash = _ref$compareHash === undefined ? false : _ref$compareHash;

  if (!link1 || !link2) {
    return true;
  }
  var url1 = null;
  var url2 = null;
  try {
    url1 = new URL(link1);
    url2 = new URL(link2);
  } catch (e) {
    return false;
  }
  var result = url1.origin === url2.origin && url1.pathname === url2.pathname;

  if (compareQuery) {
    result = result && url1.search === url2.search;
  }

  if (compareHash) {
    result = result && url1.hash === url2.hash;
  }

  return result;
};

exports.default = linksDefineSamePage;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($, Colibri) {
  var className = 'offcanvas';

  var Component = function Component(element, options) {
    this.namespace = 'offcanvas';
    this.defaults = {
      target: null, // selector
      push: true, // boolean
      width: '250px', // string
      direction: 'left', // string: left or right
      toggleEvent: 'click',
      clickOutside: true, // boolean
      animationOpen: 'slideInLeft',
      animationClose: 'slideOutLeft',
      callbacks: ['open', 'opened', 'close', 'closed'],
      offcanvasOverlayId: null,
      $overlayElement: null,
      targetId: null
    };

    // Parent Constructor
    Colibri.apply(this, arguments);

    // Services
    this.utils = new Colibri.Utils();
    this.detect = new Colibri.Detect();

    // Initialization
    this.start();
  };

  // Functionality
  Component.prototype = {
    start: function start() {
      if (!this.hasTarget()) {
        return;
      }
      var overlayId = this.opts.offcanvasOverlayId;
      var $overlayElement = $('#' + overlayId + '.offscreen-overlay');
      this.opts.$overlayElement = $overlayElement;

      // this.stop();

      this.buildTargetWidth();
      this.buildAnimationDirection();

      this.$close = this.getCloseLink();
      this.$element.on(this.opts.toggleEvent + '.' + this.namespace, $.proxy(this.toggle, this));
      this.$target.addClass('offcanvas');
      this.$target.trigger('colibri.offcanvas.ready');

      this.moveOffcanvasToBody();

      this.addOffcanvasOverlayLogic();
    },
    stop: function stop() {
      this.closeAll();
      this.removeOffcanvasElements();
      this.$element.off('.' + this.namespace);
      if (this.$close) {
        this.$close.off('.' + this.namespace);
      }
      $(document).off('.' + this.namespace);
    },
    removeOffcanvasElements: function removeOffcanvasElements() {
      // var targetId = this.opts.targetId;
      // var $targetElement = $('#' + targetId + '.h-offcanvas-panel');

      this.$target.remove();
      this.opts.$overlayElement.remove();

      // if ($targetElement && $targetElement.length > 0) {
      //   for (var i = 0; i < $targetElement.length; i++) {
      //     var offcanvasPanel = $targetElement[i];
      //     var offcanvasPanelParent = offcanvasPanel.parentNode;
      //     if (offcanvasPanelParent && offcanvasPanelParent.tagName === 'BODY') {
      //       offcanvasPanelParent.removeChild(offcanvasPanel);
      //     }
      //   }
      // }
      //
      // var overlayElements = this.opts.$overlayElement;
      // if (overlayElements && overlayElements.length > 0) {
      //   for (var j = 0; j < overlayElements.length; j++) {
      //     var overlayElement = overlayElements[j];
      //     var overlayElementParent = overlayElement.parentNode;
      //     if (overlayElementParent && overlayElementParent.tagName === 'BODY') {
      //       overlayElementParent.removeChild(overlayElement);
      //     }
      //   }
      // }
    },
    moveOffcanvasToBody: function moveOffcanvasToBody() {
      var offcanvasPanel = this.$target[0];
      document.body.appendChild(offcanvasPanel);

      var overlayElement = this.opts.$overlayElement[0];
      document.body.appendChild(overlayElement);
    },
    addOffcanvasOverlayLogic: function addOffcanvasOverlayLogic() {
      var $overlayElement = this.opts.$overlayElement;
      var $offCanvasWrapper = this.$target;

      if ($offCanvasWrapper.length) {
        $overlayElement.on('scroll touchmove mousewheel', function (e) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        });

        $offCanvasWrapper.on('colibri.offcanvas.open', function () {
          $overlayElement.addClass('h-offcanvas-opened');
        });

        $offCanvasWrapper.on('colibri.offcanvas.close', function () {
          $overlayElement.removeClass('h-offcanvas-opened');
        });
      }
    },
    toggle: function toggle(e) {
      if (this.isOpened()) {
        this.close(e);
      } else {
        this.open(e);
      }
    },
    buildTargetWidth: function buildTargetWidth() {
      this.opts.width = $(window).width() < parseInt(this.opts.width) ? '100%' : this.opts.width;
    },
    buildAnimationDirection: function buildAnimationDirection() {
      if (this.opts.direction === 'right') {
        this.opts.animationOpen = 'slideInRight';
        this.opts.animationClose = 'slideOutRight';
      }
    },
    getCloseLink: function getCloseLink() {
      return this.$target.find('.close');
    },
    open: function open(e) {
      if (e) {
        e.preventDefault();
      }

      if (!this.isOpened()) {
        this.closeAll();
        this.callback('open');

        this.$target.addClass('offcanvas-' + this.opts.direction);
        this.$target.css('width', Math.min(parseInt(this.opts.width), window.innerWidth - 100));
        this.$target.css('right', '-' + Math.min(parseInt(this.opts.width), window.innerWidth - 100));

        this.pushBody();

        this.$target.trigger('colibri.offcanvas.open');
        // this.$target.animation(this.opts.animationOpen, $.proxy(this.onOpened, this));
        Colibri.animate(this.$target, this.opts.animationOpen, $.proxy(this.onOpened, this));
        this.$element.trigger('colibri.offcanvas.open');
      }
    },
    closeAll: function closeAll() {
      var $elms = $(document).find('.offcanvas');
      if ($elms.length !== 0) {
        $elms.each(function () {
          var $el = $(this);

          if ($el.hasClass('open')) {
            $el.css('width', '');
            //.animation('hide');
            Colibri.animate($el, 'hide');
            $el.removeClass('open offcanvas-left offcanvas-right');
          }
        });

        $(document).off('.' + this.namespace);
        $('body').css('left', '');
      }
    },
    close: function close(e) {
      if (e) {
        var $el = $(e.target);
        var isTag = $el[0].tagName === 'A' || $el[0].tagName === 'BUTTON' || $el.parents('a').length;
        if (isTag && $el.closest('.offcanvas').length !== 0 && !$el.hasClass('close')) {
          return;
        }

        e.preventDefault();
      }

      if (this.isOpened()) {
        // this.utils.enableBodyScroll();
        this.callback('close');
        this.pullBody();
        this.$target.trigger('colibri.offcanvas.close');
        // this.$target.animation(this.opts.animationClose, $.proxy(this.onClosed, this));
        Colibri.animate(this.$target, this.opts.animationClose, $.proxy(this.onClosed, this));
      }
    },
    isOpened: function isOpened() {
      return this.$target.hasClass('open');
    },
    onOpened: function onOpened() {
      //a11y = focus first link in offcanvas
      var isInsideCustomizer = window.wp && window.wp.customize;
      if (!isInsideCustomizer) {
        this.$target.find('a').eq(0).focus();
      }

      if (this.opts.clickOutside) {
        $(document).on('click.' + this.namespace + ' tap.' + this.namespace, $.proxy(this.close, this));
      }
      if (this.detect.isMobileScreen()) {
        $('html').addClass('no-scroll');
      }

      $(document).on('keyup.' + this.namespace, $.proxy(this.handleKeyboard, this));

      $(document).on('keydown.' + this.namespace, $.proxy(this.handleKeyDown, this));
      this.$close.on('click.' + this.namespace, $.proxy(this.close, this));

      // this.utils.disableBodyScroll();
      this.$target.addClass('open');
      this.callback('opened');
    },
    onClosed: function onClosed() {
      if (this.detect.isMobileScreen()) {
        $('html').removeClass('no-scroll');
      }

      this.$target.css('width', '').removeClass('offcanvas-' + this.opts.direction);

      this.$close.off('.' + this.namespace);
      $(document).off('.' + this.namespace);

      this.$target.removeClass('open');
      this.callback('closed');

      this.$target.trigger('colibri.offcanvas.closed');
    },
    handleKeyboard: function handleKeyboard(e) {
      if (e.which === 27) {
        if (document.activeElement) {
          if ($(document.activeElement).closest('.offcanvas').length) {
            this.$element.focus();
          }
        }
        this.close();
      }
    },
    handleKeyDown: function handleKeyDown(e) {

      if (e.which === 9) {
        var $links = this.$target.find('a:visible');
        var isShift = e.shiftKey;

        if ($links.last().is(e.target) && !isShift) {
          $links.first().focus();
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        if ($links.first().is(e.target) && isShift) {
          $links.last().focus();
          e.preventDefault();
          e.stopPropagation();
          return;
        }
      }
    },
    pullBody: function pullBody() {
      if (this.opts.push) {
        $('body').animate({ left: 0 }, 350, function () {
          $(this).removeClass('offcanvas-push-body');
        });
      }
    },
    pushBody: function pushBody() {
      if (this.opts.push) {
        var properties = this.opts.direction === 'left' ? { left: this.opts.width } : { left: '-' + this.opts.width };
        $('body').addClass('offcanvas-push-body').animate(properties, 200);
      }
    }
  };

  Component.inherits(Colibri);
  Colibri[className] = Component;

  Colibri.Plugin.create(className);
  Colibri.Plugin.autoload(className);
})(jQuery, Colibri);

/***/ }),
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
__webpack_require__(165);
__webpack_require__(166);
__webpack_require__(167);
__webpack_require__(168);
module.exports = __webpack_require__(169);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(63);

__webpack_require__(127);

__webpack_require__(128);

var _base = __webpack_require__(64);

var _customizableSlideshow = __webpack_require__(133);

var _customizableSlideshow2 = _interopRequireDefault(_customizableSlideshow);

var _customizableVideoBackground = __webpack_require__(144);

var _customizableVideoBackground2 = _interopRequireDefault(_customizableVideoBackground);

var _domready = __webpack_require__(38);

var _domready2 = _interopRequireDefault(_domready);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_base.ColibriFrontend.registerPlugin(_customizableSlideshow2.default);
_base.ColibriFrontend.registerPlugin(_customizableVideoBackground2.default);

_base.ColibriFrontend.getData = function (id) {
    if (window.hugoFrontendData && window.hugoFrontendData[id]) {
        return window.hugoFrontendData[id];
    }

    return {};
};

_base.ColibriFrontend.domReady = _domready2.default;

window.Colibri = _base.ColibriFrontend;

__webpack_require__(154);
__webpack_require__(155);
__webpack_require__(156);
__webpack_require__(107);

//
// // sticky
//
__webpack_require__(157);
__webpack_require__(158);
__webpack_require__(159);
__webpack_require__(160);
__webpack_require__(161);
__webpack_require__(107);

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lodash = __webpack_require__(103);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  if (!$.throttle) {
    $.throttle = function (fn, threshhold, scope) {
      threshhold || (threshhold = 250);
      var last, deferTimer;
      return function () {
        var context = scope || this;

        var now = +new Date(),
            args = arguments;
        if (last && now < last + threshhold) {
          // hold on to it
          clearTimeout(deferTimer);
          deferTimer = setTimeout(function () {
            last = now;
            fn.apply(context, args);
          }, threshhold);
        } else {
          last = now;
          fn.apply(context, args);
        }
      };
    };
  }

  if (!$.debounce) {
    $.debounce = _lodash2.default;
  }

  if (!$.event.special.tap) {
    $.event.special.tap = {
      setup: function setup(data, namespaces) {
        var $elem = $(this);
        $elem.bind('touchstart', $.event.special.tap.handler).bind('touchmove', $.event.special.tap.handler).bind('touchend', $.event.special.tap.handler);
      },
      teardown: function teardown(namespaces) {
        var $elem = $(this);
        $elem.unbind('touchstart', $.event.special.tap.handler).unbind('touchmove', $.event.special.tap.handler).unbind('touchend', $.event.special.tap.handler);
      },
      handler: function handler(event) {
        var $elem = $(this),
            handleObj = event.handleObj,
            result;
        $elem.data(event.type, 1);
        if (event.type === 'touchend' && !$elem.data('touchmove')) {
          event.type = 'tap';
          result = handleObj.handler.call(this, event);
        } else if ($elem.data('touchend')) {
          $elem.removeData('touchstart touchmove touchend');
        }

        return result;
      }
    };
  }

  //is not supported on ie
  if (!$.fn.respondToVisibility) {
    $.fn.respondToVisibility = function (callback) {

      //check for ie
      if (!('IntersectionObserver' in window) || !('IntersectionObserverEntry' in window) || !('intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
        return null;
      }

      var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          callback(entry.intersectionRatio > 0);
        });
      });
      observer.observe(this.get(0));
      return observer;
    };
  }
})(window.jQuery);

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Detect Element Resize
 *
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * version: 0.5.3
 **/

var attachEvent = document.attachEvent,
    stylesCreated = false;

function resetTriggers(element) {
  var triggers = element.__resizeTriggers__,
      expand = triggers.firstElementChild,
      contract = triggers.lastElementChild,
      expandChild = expand.firstElementChild;
  contract.scrollLeft = contract.scrollWidth;
  contract.scrollTop = contract.scrollHeight;
  expandChild.style.width = expand.offsetWidth + 1 + 'px';
  expandChild.style.height = expand.offsetHeight + 1 + 'px';
  expand.scrollLeft = expand.scrollWidth;
  expand.scrollTop = expand.scrollHeight;
}

function checkTriggers(element) {
  return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
}

function scrollListener(e) {
  var element = this;
  resetTriggers(this);
  if (this.__resizeRAF__) {
    cancelFrame(this.__resizeRAF__);
  }
  this.__resizeRAF__ = requestFrame(function () {
    if (checkTriggers(element)) {
      element.__resizeLast__.width = element.offsetWidth;
      element.__resizeLast__.height = element.offsetHeight;
      element.__resizeListeners__.forEach(function (fn) {
        fn.call(element, e);
      });
    }
  });
}

if (!attachEvent) {
  var requestFrame = function () {
    var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
      return window.setTimeout(fn, 20);
    };
    return function (fn) {
      return raf(fn);
    };
  }();

  var cancelFrame = function () {
    var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
    return function (id) {
      return cancel(id);
    };
  }();

  /* Detect CSS Animations support to detect element display/re-attach */
  var animation = false,
      animationstring = 'animation',
      keyframeprefix = '',
      animationstartevent = 'animationstart',
      domPrefixes = 'Webkit Moz O ms'.split(' '),
      startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
      pfx = '';
  {
    var elm = document.createElement('fakeelement');
    if (elm.style.animationName !== undefined) {
      animation = true;
    }

    if (animation === false) {
      for (var i = 0; i < domPrefixes.length; i++) {
        if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
          pfx = domPrefixes[i];
          animationstring = pfx + 'Animation';
          keyframeprefix = '-' + pfx.toLowerCase() + '-';
          animationstartevent = startEvents[i];
          animation = true;
          break;
        }
      }
    }
  }

  var animationName = 'resizeanim';
  var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
  var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
}

function createStyles() {
  if (!stylesCreated) {
    //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
    var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
    stylesCreated = true;
  }
}

window.addResizeListener = function (element, fn) {
  if (attachEvent) {
    element.attachEvent('onresize', fn);
  } else {
    if (!element.__resizeTriggers__) {
      if (getComputedStyle(element).position == 'static') {
        element.style.position = 'relative';
      }
      createStyles();
      element.__resizeLast__ = {};
      element.__resizeListeners__ = [];
      (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
      element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
      element.appendChild(element.__resizeTriggers__);
      resetTriggers(element);
      element.addEventListener('scroll', scrollListener, true);

      /* Listen for a css animation to detect element display/re-attach */
      animationstartevent && element.__resizeTriggers__.addEventListener(animationstartevent, function (e) {
        if (e.animationName == animationName) {
          resetTriggers(element);
        }
      });
    }
    element.__resizeListeners__.push(fn);
  }
};

window.removeResizeListener = function (element, fn) {
  if (attachEvent) {
    element.detachEvent('onresize', fn);
  } else {
    if (!(element && element.__resizeListeners__ && element.__resizeTriggers__)) {
      return;
    }
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
      element.removeEventListener('scroll', scrollListener);
      element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
    }
  }
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(43);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(44);

var _createClass3 = _interopRequireDefault(_createClass2);

var _colibri = __webpack_require__(104);

var _colibri2 = _interopRequireDefault(_colibri);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColibriFrontComponent = function () {
  (0, _createClass3.default)(ColibriFrontComponent, null, [{
    key: 'componentName',
    value: function componentName() {
      throw new TypeError('name getter should be implemented');
    }
  }]);

  function ColibriFrontComponent(element, options) {
    (0, _classCallCheck3.default)(this, ColibriFrontComponent);

    this.$ = jQuery;
    this.namespace = this.constructor.componentName();
    this.utils = new _colibri2.default.Utils();
    this.detect = new _colibri2.default.Detect();
    this.init();
    _colibri2.default.apply(this, arguments);
    this.start();

    if (this.isCustomizerPreview()) {
      this.wpCustomize(wp.customize);
    }
    return this;
  }

  (0, _createClass3.default)(ColibriFrontComponent, [{
    key: 'init',
    value: function init() {}
  }, {
    key: 'isCustomizerPreview',
    value: function isCustomizerPreview() {
      return _colibri2.default.isCustomizerPreview();
    }
  }, {
    key: 'wpCustomize',
    value: function wpCustomize(api) {}
  }, {
    key: 'wpSettingBind',
    value: function wpSettingBind(setting_id, callback) {
      window.wp.customize(setting_id, function (setting) {
        setting.bind(callback);
      });
    }
  }, {
    key: 'updateData',
    value: function updateData(data) {
      this.opts = jQuery.extend({}, this.opts, data);
      this.restart();
    }
  }, {
    key: 'restart',
    value: function restart() {}
  }, {
    key: 'start',
    value: function start() {}
  }]);
  return ColibriFrontComponent;
}();

exports.default = ColibriFrontComponent;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(131), __esModule: true };

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(132);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(16);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(8), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slideshow = __webpack_require__(134);

var _slideshow2 = _interopRequireDefault(_slideshow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomizableSlideshow = function (_Slideshow) {
    _inherits(CustomizableSlideshow, _Slideshow);

    function CustomizableSlideshow() {
        _classCallCheck(this, CustomizableSlideshow);

        return _possibleConstructorReturn(this, (CustomizableSlideshow.__proto__ || Object.getPrototypeOf(CustomizableSlideshow)).apply(this, arguments));
    }

    _createClass(CustomizableSlideshow, [{
        key: "start",
        value: function start() {
            _get(CustomizableSlideshow.prototype.__proto__ || Object.getPrototypeOf(CustomizableSlideshow.prototype), "start", this).call(this);

            if (!this.customizerBinded) {
                this.wpCustomize(wp.customize);
                this.customizerBinded = true;
            }
        }
    }, {
        key: "wpCustomize",
        value: function wpCustomize(api) {
            var _this2 = this;

            var _loop = function _loop(opt) {

                if (_this2.opts.wpSettings.hasOwnProperty(opt)) {
                    var setting = _this2.opts.wpSettings[opt];

                    _this2.wpSettingBind(setting, function (newValue) {
                        _this2.opts[opt] = parseInt(newValue);
                        _this2.stop();
                        setTimeout(function () {
                            _this2.start();
                        }, 100);
                    });
                }
            };

            for (var opt in this.opts.wpSettings) {
                _loop(opt);
            }
        }
    }, {
        key: "wpSettingBind",
        value: function wpSettingBind(setting_id, callback) {
            window.wp.customize(setting_id, function (setting) {
                setting.bind(callback);
            });
        }
    }]);

    return CustomizableSlideshow;
}(_slideshow2.default);

exports.default = CustomizableSlideshow;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(43);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(44);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(59);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(60);

var _inherits3 = _interopRequireDefault(_inherits2);

var _index = __webpack_require__(64);

var _lodash = __webpack_require__(103);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slideshow = function (_ColibriFrontComponen) {
  (0, _inherits3.default)(Slideshow, _ColibriFrontComponen);

  function Slideshow() {
    (0, _classCallCheck3.default)(this, Slideshow);
    return (0, _possibleConstructorReturn3.default)(this, (Slideshow.__proto__ || (0, _getPrototypeOf2.default)(Slideshow)).apply(this, arguments));
  }

  (0, _createClass3.default)(Slideshow, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.currentIndex = 0;
      this.interval = -1;

      this.debouncedRestart = (0, _lodash2.default)(function () {
        _this2.stop();

        _this2.start();
      }, 500);
    }
  }, {
    key: 'addImageEffect',
    value: function addImageEffect(image, index) {
      var duration = this.opts.slideDuration;
      var speed = this.opts.slideSpeed;
      var delay = duration - speed;
      if (delay < 0) {
        delay = 0;
      }

      this.$(image).css({
        transition: 'opacity ' + speed + 'ms ease ' + delay + 'ms',
        zIndex: this.$images.length - index
      });
    }
  }, {
    key: 'slideImage',
    value: function slideImage() {
      this.$images.eq(this.currentIndex).removeClass('current');

      var nextIndex = this.currentIndex + 1 === this.$images.length ? 0 : this.currentIndex + 1;

      this.$images.eq(nextIndex).addClass('current').removeClass('next');

      this.currentIndex = nextIndex;
      var futureIndex = this.currentIndex + 1 === this.$images.length ? 0 : this.currentIndex + 1;

      this.$images.eq(futureIndex).addClass('next');
    }
  }, {
    key: 'restart',
    value: function restart() {
      this.debouncedRestart();
    }
  }, {
    key: 'start',
    value: function start() {
      var _this3 = this;

      this.$images = this.$element.find('.slideshow-image');
      this.$images.removeClass('current');
      this.$images.eq(0).addClass('current');
      this.currentIndex = 0;

      this.$images.each(function (index, image) {
        _this3.addImageEffect(image, index);
      });

      this.interval = setInterval(function () {
        _this3.slideImage();
      }, parseInt(this.opts.slideDuration));
    }
  }, {
    key: 'stop',
    value: function stop() {
      clearInterval(this.interval);
      this.$images.css({
        transition: '',
        opacity: ''
      });
      this.$images.removeClass('current next');
      this.$images.eq(0).addClass('current');
      this.currentIndex = 0;
    }
  }], [{
    key: 'componentName',
    value: function componentName() {
      return 'slideshow';
    }
  }]);
  return Slideshow;
}(_index.ColibriFrontComponent);

exports.default = Slideshow;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(136);
module.exports = __webpack_require__(3).Object.getPrototypeOf;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(41);
var $getPrototypeOf = __webpack_require__(58);

__webpack_require__(90)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(138), __esModule: true };

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(139);
module.exports = __webpack_require__(3).Object.setPrototypeOf;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(16);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(140).set });


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(13);
var anObject = __webpack_require__(17);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(56)(Function.call, __webpack_require__(53).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(142), __esModule: true };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(143);
var $Object = __webpack_require__(3).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(16);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(40) });


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _videoBg = __webpack_require__(145);

var _videoBg2 = _interopRequireDefault(_videoBg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomizableVideoBackground = function (_VideoBackground) {
    _inherits(CustomizableVideoBackground, _VideoBackground);

    function CustomizableVideoBackground(element, options) {
        var _ret;

        _classCallCheck(this, CustomizableVideoBackground);

        var _this = _possibleConstructorReturn(this, (CustomizableVideoBackground.__proto__ || Object.getPrototypeOf(CustomizableVideoBackground)).call(this, element, options));

        return _ret = _this, _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CustomizableVideoBackground, [{
        key: "wpCustomize",
        value: function wpCustomize(api) {
            var _this2 = this;

            this.API_URL = hugo_wp_ADDITIONAL_JS_DATA.api_url;

            var _loop = function _loop(opt) {

                if (_this2.opts.wpSettings.hasOwnProperty(opt)) {
                    var setting = _this2.opts.wpSettings[opt];

                    _this2.wpSettingBind(setting, function (newValue) {
                        if (opt === "externalUrl") {
                            _this2.restartYouTubeVideo(newValue);
                        }

                        if (opt === "internalUrl") {
                            _this2.restartSelfHostedVideo(newValue);
                        }

                        if (opt === "videoType") {
                            var videoType = "native";
                            if (newValue == "external") videoType = "youtube";
                            _this2.changeProvider(videoType);
                        }

                        if (opt === "posterUrl") {
                            _this2.$element.css({
                                backgroundImage: "url(" + newValue + ")"
                            });
                            _this2.videoData.poster = newValue;
                        }
                    });
                }
            };

            for (var opt in this.opts.wpSettings) {
                _loop(opt);
            }
        }
    }, {
        key: "changeProvider",
        value: function changeProvider(newValue) {
            if (newValue === "youtube") {
                this.restartYouTubeVideo(wp.customize(this.opts.wpSettings['externalUrl']).get());
            } else {
                this.restartSelfHostedVideo(wp.customize(this.opts.wpSettings['internalUrl']).get());
            }
        }
    }, {
        key: "restartYouTubeVideo",
        value: function restartYouTubeVideo(value) {
            this.videoData.videoUrl = value;
            this.videoData.mimeType = "video/x-youtube";

            _get(CustomizableVideoBackground.prototype.__proto__ || Object.getPrototypeOf(CustomizableVideoBackground.prototype), "generateVideo", this).call(this);
        }
    }, {
        key: "restartSelfHostedVideo",
        value: function restartSelfHostedVideo(value) {
            var _this3 = this;

            if (!value) {
                this.videoData.videoUrl = "";
                this.videoData.mimeType = "video/mp4";
                _get(CustomizableVideoBackground.prototype.__proto__ || Object.getPrototypeOf(CustomizableVideoBackground.prototype), "generateVideo", this).call(this);
            } else {

                this.$.getJSON(this.API_URL + "/attachment-data/" + value, function (data) {
                    _this3.videoData.videoUrl = data.url;
                    _this3.videoData.mimeType = data.mime_type;

                    _get(CustomizableVideoBackground.prototype.__proto__ || Object.getPrototypeOf(CustomizableVideoBackground.prototype), "generateVideo", _this3).call(_this3);
                });
            }
        }
    }]);

    return CustomizableVideoBackground;
}(_videoBg2.default);

exports.default = CustomizableVideoBackground;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(43);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(44);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(59);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(60);

var _inherits3 = _interopRequireDefault(_inherits2);

var _index = __webpack_require__(64);

var _handlers = __webpack_require__(146);

var _handlers2 = _interopRequireDefault(_handlers);

var _isMobile = __webpack_require__(153);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoBackground = function (_ColibriFrontComponen) {
  (0, _inherits3.default)(VideoBackground, _ColibriFrontComponen);

  function VideoBackground() {
    (0, _classCallCheck3.default)(this, VideoBackground);
    return (0, _possibleConstructorReturn3.default)(this, (VideoBackground.__proto__ || (0, _getPrototypeOf2.default)(VideoBackground)).apply(this, arguments));
  }

  (0, _createClass3.default)(VideoBackground, [{
    key: 'init',
    value: function init() {
      this.videoData = {};
      this.handler = false;
      this.debouncedSetPosition = jQuery.debounce(this.updateVideoBackground.bind(this), 100);
    }
  }, {
    key: 'generateVideo',
    value: function generateVideo() {
      var _this2 = this;

      for (var handle in _handlers2.default) {
        if (_handlers2.default.hasOwnProperty(handle) && _handlers2.default[handle].test(this.videoData)) {
          this.$element.empty();
          this.handler = new _handlers2.default[handle](this.$element[0], this.videoData);
          break;
        }
      }

      this.handler.onLoad(function () {
        _this2.$element.children('iframe,video').addClass('h-hide-sm-force');
        _this2.debouncedSetPosition();
        _this2.handler.onResize(function () {
          return _this2.debouncedSetPosition();
        });
      });

      if (window.hop) {
        window.addResizeListener(this.$element.closest('.background-wrapper').parent()[0], this.debouncedSetPosition);
        this.debouncedSetPosition();
      }
    }
  }, {
    key: 'stopVideo',
    value: function stopVideo() {
      if (this.handler.stopVideo) {
        this.handler.stopVideo();
      }
    }
  }, {
    key: 'play',
    value: function play() {
      if (this.handler.play) {
        this.handler.play();
      }
    }
  }, {
    key: 'updateVideoBackground',
    value: function updateVideoBackground() {
      if (this.handler.updateVideoSize) {
        this.handler.updateVideoSize();
      }
      this.setPosition();
    }
  }, {
    key: 'setPosition',
    value: function setPosition() {
      var _this3 = this;

      this.handler.pause();
      if (this.$element.children('iframe,video').eq(0).css('display') === 'none') {
        return;
      }

      var $video = this.$element.children('iframe,video').eq(0),
          posX = $video.is('iframe') ? 50 : this.opts.positionX,
          posY = $video.is('iframe') ? 50 : this.opts.positionY,
          x = Math.max($video.width() - this.$element.width(), 0) * parseFloat(posX) / 100,
          y = Math.max($video.height() - this.$element.height(), 0) * parseFloat(posY) / 100;

      $video.css({
        transform: 'translate(-' + x + 'px,-' + y + 'px)',
        '-webkit-transform': 'translate(-' + x + 'px,-' + y + 'px)'
      });

      this.$element.addClass('visible');

      setTimeout(function () {
        _this3.handler.play();
      }, 100);
    }
  }, {
    key: 'start',
    value: function start() {
      this.videoData = {
        mimeType: this.opts.mimeType,
        poster: this.opts.poster,
        videoUrl: this.opts.video
      };

      if (!(0, _isMobile.isMobile)()) {
        this.generateVideo();
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      window.removeResizeListener(this.$element.closest('.background-wrapper').parent()[0], this.debouncedSetPosition);
    }
  }, {
    key: 'restart',
    value: function restart() {
      this.stop();
      this.start();
    }
  }], [{
    key: 'componentName',
    value: function componentName() {
      return 'video-background';
    }
  }]);
  return VideoBackground;
}(_index.ColibriFrontComponent);

exports.default = VideoBackground;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nativeHandler = __webpack_require__(147);

var _nativeHandler2 = _interopRequireDefault(_nativeHandler);

var _youtubeHandler = __webpack_require__(148);

var _youtubeHandler2 = _interopRequireDefault(_youtubeHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Handlers = {
  native: _nativeHandler2.default,
  youtube: _youtubeHandler2.default
};

exports.default = Handlers;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(43);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(44);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(59);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(60);

var _inherits3 = _interopRequireDefault(_inherits2);

var _baseHandler = __webpack_require__(105);

var _baseHandler2 = _interopRequireDefault(_baseHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NativeHandler = function (_BaseHandler) {
  (0, _inherits3.default)(NativeHandler, _BaseHandler);

  function NativeHandler() {
    (0, _classCallCheck3.default)(this, NativeHandler);
    return (0, _possibleConstructorReturn3.default)(this, (NativeHandler.__proto__ || (0, _getPrototypeOf2.default)(NativeHandler)).apply(this, arguments));
  }

  (0, _createClass3.default)(NativeHandler, [{
    key: 'isPaused',
    value: function isPaused() {
      return this.video.paused;
    }
  }, {
    key: 'ready',
    value: function ready() {
      var _this2 = this;

      if (this.settings.poster) {
        this.element.style.backgroundImage = 'url("' + this.settings.poster + '")';
      }

      if (!this.settings.videoUrl) {
        return;
      }

      var video = document.createElement('video');

      video.id = this.settings.id || '';

      // video.autoplay = 'autoplay';
      video.loop = 'loop';
      video.muted = 'muted';

      if (this.settings.width) {
        video.width = this.settings.width;
      }

      if (this.settings.height) {
        video.height = this.settings.height;
      }

      video.addEventListener('play', function () {
        _this2.trigger('play');
      });

      video.addEventListener('pause', function () {
        _this2.trigger('pause');
      });

      video.addEventListener('loadeddata', function () {
        _this2.loaded();
      });

      this.video = video;
      this.setVideo(video);
      video.src = this.settings.videoUrl;
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.video.pause();
    }
  }, {
    key: 'stopVideo',
    value: function stopVideo() {
      this.video.pause();
      this.video.currentTime = 0;
    }
  }, {
    key: 'play',
    value: function play() {
      this.video.play();
    }
  }], [{
    key: 'test',
    value: function test(settings) {
      var video = document.createElement('video');
      return video.canPlayType(settings.mimeType);
    }
  }]);
  return NativeHandler;
}(_baseHandler2.default);

exports.default = NativeHandler;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(43);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(44);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(59);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(149);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(60);

var _inherits3 = _interopRequireDefault(_inherits2);

var _baseHandler = __webpack_require__(105);

var _baseHandler2 = _interopRequireDefault(_baseHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VIDEO_ID_REGEX = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/; /** @global YT */

var YouTubeHandler = function (_BaseHandler) {
  (0, _inherits3.default)(YouTubeHandler, _BaseHandler);

  function YouTubeHandler(element, settings) {
    var _ret;

    (0, _classCallCheck3.default)(this, YouTubeHandler);

    var _this = (0, _possibleConstructorReturn3.default)(this, (YouTubeHandler.__proto__ || (0, _getPrototypeOf2.default)(YouTubeHandler)).call(this, element, settings));

    return _ret = _this, (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(YouTubeHandler, [{
    key: 'ready',
    value: function ready() {
      var _this2 = this;

      if (this.settings.poster) {
        this.element.style.backgroundImage = 'url("' + this.settings.poster + '")';
      }

      if ('YT' in window) {
        window.YT.ready(function () {
          _this2.loadVideo();
        });
      } else {
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.onload = function () {
          window.YT.ready(function () {
            _this2.loadVideo();
          });
        };

        document.getElementsByTagName('head')[0].appendChild(tag);
      }
    }
  }, {
    key: 'getVideoID',
    value: function getVideoID() {
      var matches = this.settings.videoUrl.match(VIDEO_ID_REGEX);

      if (matches && matches.length >= 2) {
        return matches[1];
      }

      return null;
    }
  }, {
    key: 'getYTOptions',
    value: function getYTOptions() {
      var _this3 = this;

      var options = {
        videoId: this.getVideoID(),
        events: {
          onReady: function onReady(e) {
            var ytVideo = e.target;

            //added mute param, not sure if this mute function call is needed anymore.
            ytVideo.mute();
            top.yt1 = ytVideo;
            ytVideo.setPlaybackQuality('auto');
            _this3.play();
            _this3.loaded();
          },
          onStateChange: function onStateChange(e) {
            if (window.YT.PlayerState.PLAYING === e.data) {
              _this3.trigger('play');
            } else if (window.YT.PlayerState.PAUSED === e.data) {
              _this3.trigger('pause');
            } else if (window.YT.PlayerState.ENDED === e.data) {
              e.target.playVideo();
            }
          },
          onError: function onError(e) {
            _this3.player.getIframe().style.display = 'none';
          }
        },
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          loop: 1,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,

          /**
           * Sometimes the mute function used in the onRead event did not work, but using this options the videos are
           * always muted
           */
          mute: 1
        }
      };

      if (this.settings.height) {
        options['height'] = this.settings.height;
      } else {
        options['height'] = 1080;
      }

      if (this.settings.width) {
        options['width'] = this.settings.width;
      } else {
        options['width'] = 1920;
      }
      // height: this.settings.height,
      // width: this.settings.width,

      return options;
    }
  }, {
    key: 'loadVideo',
    value: function loadVideo() {
      var video = document.createElement('div'),
          YT = window.YT;

      this.setVideo(video);
      this.player = new window.YT.Player(video, this.getYTOptions());
    }
  }, {
    key: 'updateVideoSize',
    value: function updateVideoSize() {
      if (!this.player) {
        return;
      }
      var $iframe = jQuery(this.player.getIframe()),
          size = this.calcVideosSize();
      $iframe.css(size);
      $iframe.addClass('ready');
    }
  }, {
    key: 'calcVideosSize',
    value: function calcVideosSize() {
      var width = jQuery(this.element).outerWidth(),
          height = jQuery(this.element).outerHeight(),
          aspectRatio = '16:9'.split(':'),
          proportion = aspectRatio[0] / aspectRatio[1],
          keepWidth = width / height > proportion,
          magnifier = 1;

      return {
        width: magnifier * (keepWidth ? width : height * proportion),
        height: magnifier * (keepWidth ? width / proportion : height)
      };
    }
  }, {
    key: 'play',
    value: function play() {
      if (!!this.player && !!this.player.playVideo) {
        if (!this.isPlaying) {
          this.isPlaying = true;
          this.player.playVideo();
        }
      }
    }
  }, {
    key: 'stopVideo',
    value: function stopVideo() {
      if (!!this.player && !!this.player.stopVideo) {
        if (this.isPlaying) {
          this.isPlaying = false;
          this.player.stopVideo();
        }
      }
    }
  }, {
    key: 'pause',
    value: function pause() {
      if (!!this.player && !!this.player.pauseVideo && !this.isPlaying) {
        this.isPlaying = false;
        this.player.pauseVideo();
      }
    }
  }, {
    key: 'isPaused',
    value: function isPaused() {
      return YT.PlayerState.PAUSED === this.player.getPlayerState();
    }
  }, {
    key: 'loaded',
    value: function loaded() {
      this.updateVideoSize();
      (0, _get3.default)(YouTubeHandler.prototype.__proto__ || (0, _getPrototypeOf2.default)(YouTubeHandler.prototype), 'loaded', this).call(this);
    }
  }, {
    key: 'addResizeBind',
    value: function addResizeBind() {
      var _this4 = this;

      this.onResize(function () {
        return _this4.updateVideoSize();
      }, 50);
      (0, _get3.default)(YouTubeHandler.prototype.__proto__ || (0, _getPrototypeOf2.default)(YouTubeHandler.prototype), 'addResizeBind', this).call(this);
    }
  }], [{
    key: 'test',
    value: function test(settings) {
      return 'video/x-youtube' === settings.mimeType;
    }
  }]);
  return YouTubeHandler;
}(_baseHandler2.default);

exports.default = YouTubeHandler;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(150);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(151), __esModule: true };

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(152);
var $Object = __webpack_require__(3).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(9);
var $getOwnPropertyDescriptor = __webpack_require__(53).f;

__webpack_require__(90)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = isMobile;
module.exports.isMobile = isMobile;

var mobileRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;

var tabletRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;

function isMobile(opts) {
  if (!opts) {
    opts = {};
  }
  var ua = opts.ua;
  if (!ua && typeof navigator !== 'undefined') {
    ua = navigator.userAgent;
  }
  if (ua && ua.headers && typeof ua.headers['user-agent'] === 'string') {
    ua = ua.headers['user-agent'];
  }
  if (typeof ua !== 'string') {
    return false;
  }

  return opts.tablet ? tabletRE.test(ua) : mobileRE.test(ua);
}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _linksDefineSamePage = __webpack_require__(106);

var _linksDefineSamePage2 = _interopRequireDefault(_linksDefineSamePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  function inCustomizer() {
    return Colibri.isCustomizerPreview();
  }

  if (window.location.hash === '#page-top') {
    changeUrlHash('', 5);
  }

  var __toCheckOnScroll = {
    items: {},
    eachCategory: function eachCategory(callback) {
      for (var id in this.items) {
        if (!this.items.hasOwnProperty(id)) {
          continue;
        }

        callback(this.items[id]);
      }
    },
    addItem: function addItem(id, item) {
      if (!this.items[id]) {
        this.items[id] = [];
      }

      this.items[id].push(item);
    },
    all: function all() {
      var result = [];

      for (var id in this.items) {
        if (!this.items.hasOwnProperty(id)) {
          continue;
        }

        result = result.concat(this.items[id]);
      }

      return result;
    }
  };
  var __alreadyScrolling = false;

  function getScrollToValue(elData) {
    var offset = !isNaN(parseFloat(elData.options.offset)) ? elData.options.offset : elData.options.offset.call(elData.target);
    var scrollToValue = elData.target.offset().top - offset - $('body').offset().top;

    return scrollToValue;
  }

  function changeUrlHash(hash, timeout) {
    if (hash === location.hash.replace('#', '') || hash === 'page-top' && '' === location.hash.replace('#', '')) {
      return;
    }

    setTimeout(function () {
      if (hash) {
        if (hash === 'page-top') {
          hash = ' ';
        } else {
          hash = '#' + hash;
        }
      } else {
        hash = ' ';
      }
      if (history && history.replaceState) {
        history.replaceState({}, '', hash);
      }
    }, timeout || 100);
    /* safari issue fixed by throtteling the event */
  }

  function scrollItem(elData) {
    if (__alreadyScrolling) {
      return;
    }

    __alreadyScrolling = true;
    var scrollToValue = getScrollToValue(elData);

    $('html, body').animate({ scrollTop: scrollToValue }, {
      easing: 'linear',
      complete: function complete() {
        // check for any updates
        var scrollToValue = getScrollToValue(elData);
        $('html, body').animate({ scrollTop: scrollToValue }, {
          easing: 'linear',
          duration: 100,
          complete: function complete() {
            __alreadyScrolling = false;
            changeUrlHash(elData.id, 5);
          }
        });
      }
    });
  }

  function getPageBaseUrl() {
    return [location.protocol, '//', location.host, location.pathname].join('');
  }

  function fallbackUrlParse(url) {
    return url.split('?')[0].split('#')[0];
  }

  function getABaseUrl(element) {
    var href = jQuery(element)[0].href || '';
    var url = '#';

    try {
      var _url = new window.URL(href);
      url = [_url.protocol, '//', _url.host, _url.pathname].join('');
    } catch (e) {
      url = fallbackUrlParse(href);
    }

    return url;
  }

  function getTargetForEl(element) {
    var targetId = (element.attr('href') || '').split('#').pop(),
        hrefBase = getABaseUrl(element),
        target = null,
        pageURL = getPageBaseUrl();

    if (hrefBase.length && hrefBase !== pageURL) {
      return target;
    }

    if (targetId.trim().length) {
      try {
        target = $('[id="' + targetId + '"]');
      } catch (e) {
        console.log('error scrollSpy', e);
      }
    }

    if (target && target.length) {
      return target;
    }

    return null;
  }

  $.fn.smoothScrollAnchor = function (options) {
    if (inCustomizer()) {
      return;
    }

    var elements = $(this);

    options = jQuery.extend({
      offset: function offset() {
        var $fixed = $('.h-navigation_sticky');
        if ($fixed.length) {
          return $fixed[0].getBoundingClientRect().height;
        }

        return 0;
      }
    }, options);

    elements.each(function () {
      var element = $(this);

      //if the target options is not set or the href is not for the same page don't add smoothscroll
      if (!options.target && !(0, _linksDefineSamePage2.default)(document.location.href, this.href)) {
        return;
      }

      var target = options.target || getTargetForEl(element);
      if (target && target.length && !target.attr('skip-smooth-scroll')) {
        var targetId = target.attr('id');
        var targetSel = null;
        if (targetId) {
          targetSel = '[id="' + targetId.trim() + '"]';
        }
        var elData = {
          element: element,
          options: options,
          target: target,
          targetSel: options.targetSel || targetSel,
          id: (target.attr('id') || '').trim()
        };

        element.off('click.smooth-scroll tap.smooth-scroll').on('click.smooth-scroll tap.smooth-scroll', function (event) {
          if ($(this).data('skip-smooth-scroll') || $(event.target).data('skip-smooth-scroll')) {
            return;
          }

          event.preventDefault();

          if (!$(this).data('allow-propagation')) {
            event.stopPropagation();
          }

          scrollItem(elData);

          if (elData.options.clickCallback) {
            elData.options.clickCallback.call(this, event);
          }
        });
      }
    });
  };

  $.fn.scrollSpy = function (options) {
    if (inCustomizer()) {
      return;
    }

    var elements = $(this);
    var id = 'spy-' + parseInt(Date.now() * Math.random());

    elements.each(function () {
      var element = $(this);
      var settings = jQuery.extend({
        onChange: function onChange() {},
        onLeave: function onLeave() {},
        clickCallback: function clickCallback() {},

        smoothScrollAnchor: false,
        offset: 0
      }, options);

      if (element.is('a') && (element.attr('href') || '').indexOf('#') !== -1) {
        var target = getTargetForEl(element);

        if (target && !target.attr('skip-scroll-spy')) {
          var elData = {
            element: element,
            options: settings,
            target: target,
            targetSel: '[id="' + target.attr('id').trim() + '"]',
            id: target.attr('id').trim()
          };
          __toCheckOnScroll.addItem(id, elData);
          element.data('scrollSpy', elData);

          if (options.smoothScrollAnchor) {
            element.smoothScrollAnchor(options);
          }
        }
      }
    });
  };

  function update() {
    __toCheckOnScroll.eachCategory(function (items) {
      var ordered = items.sort(function (itemA, itemB) {
        return itemA.target.offset().top - itemB.target.offset().top;
      });
      var lastItem = ordered.filter(function (item) {
        var scrollY = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        return item.target.offset().top <= scrollY + window.innerHeight * 0.25;
      }).pop();
      ordered.forEach(function (item) {
        if (lastItem && item.element.is(lastItem.element)) {
          changeUrlHash(item.id, 5);
          item.options.onChange.call(item.element);
        } else {
          item.options.onLeave.call(item.element);
        }
      });
    });
  }

  function goToCurrentHash() {
    var hash = window.location.hash.replace('#', '');
    var currentItem = __toCheckOnScroll.all().filter(function (item) {
      return item.targetSel === '[id="' + decodeURIComponent(hash).trim() + '"]';
    });

    $(window).on('load', function () {
      if (currentItem.length) {
        scrollItem(currentItem[0]);
      }
      update();
    });
  }

  if (!inCustomizer()) {
    $(window).scroll(update);

    $(window).bind('smoothscroll.update', update);

    $(window).bind('smoothscroll.update', goToCurrentHash);

    $(goToCurrentHash);
  }
})(jQuery);

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($, Colibri) {
  var className = 'dropdown-menu';

  var arrowRightSvg = '<svg aria-hidden="true" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>';
  var arrowDownSvg = '<svg aria-hidden="true" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>';
  var arrowUpSvg = '<svg aria-hidden="true" data-prefix="fas" data-icon="angle-up" class="svg-inline--fa fa-angle-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>';
  var Component = function Component(element, options) {
    this.namespace = className;
    this.defaults = {
      menuSelector: '.colibri-menu',
      offCanvasWrapper: '.colibri-menu-container',
      arrowSelector: 'svg.svg-inline--fa',
      linkSelector: '.menu-item-has-children > a, .page_item_has_children > a',
      menuLinkSelector: ' > .menu-item-has-children > a, > .page_item_has_children > a',
      subMenuLinkSelector: ' ul .menu-item-has-children > a, ul .page_item_has_children > a',
      $menu: null
    };

    // Parent Constructor
    Colibri.apply(this, arguments);

    // Initialization
    this.start();
  };

  Component.prototype = {
    start: function start() {
      var _this = this;

      var $menu = this.$element.find(this.opts.menuSelector).first();
      this.opts.$menu = $menu;

      this.stop();
      this.addListener();
      this.addFocusListener();
      this.addSvgArrows();
      this.addReverseMenuLogic();

      /** TODO @catalin table menu logic needs work because it does not work*/
      this.addTabletMenuLogic();

      $(document).ready(function () {
        _this.addMenuScrollSpy($menu);
      });
    },
    stop: function stop() {
      this.removeAllSvgArrows();
      this.removeListeners();
    },
    copyLiEventTaA: function copyLiEventTaA(e) {
      var tagName = '';
      if (e.target && e.target.tagName) {
        tagName = e.target.tagName;
      }
      if (tagName.toLowerCase() === 'a') {
        return;
      }
      var a = $(e.target).find('> a');
      a[0].click();
    },
    addListener: function addListener() {
      this.opts.$menu.find('li').on('click', this.copyLiEventTaA);
    },
    toggleFocus: function toggleFocus(item) {
      var enable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      while (this.opts.$menu[0] !== item) {
        if ('li' === item.tagName.toLowerCase()) {
          if (!enable) {
            item.classList.remove('hover');
          } else {
            item.classList.add('hover');
          }
        }
        item = item.parentElement;
      }
    },
    addFocusListener: function addFocusListener() {
      var _this2 = this;

      var links = this.opts.$menu.find('a');
      links.on('focus', function (event) {
        _this2.toggleFocus(event.currentTarget);
      });

      links.on('blur', function (event) {
        _this2.toggleFocus(event.currentTarget, false);
      });
    },
    addSvgArrows: function addSvgArrows() {
      /**
       * Some clients had 3 arrows when the page loaded, could not find the cause. Probably the start function was called more times
       *then stop function. Because of this the arrows are removed before they are added again
       */
      this.removeAllSvgArrows();
      var menuType = this.opts.data ? this.opts.data.type ? this.opts.data.type : null : null;
      switch (menuType) {
        case 'horizontal':
          this.addHorizontalMenuSvgArrows();
          break;
        case 'vertical':
          this.addVerticalMenuSvgArrow();
          break;
      }
    },
    addHorizontalMenuSvgArrows: function addHorizontalMenuSvgArrows() {
      var $menu = this.opts.$menu;
      var arrowSelector = this.opts.arrowSelector;
      var menuLinkSelector = this.opts.menuLinkSelector;
      var subMenuLinkSelector = this.opts.subMenuLinkSelector;

      $menu.find(menuLinkSelector).each(function () {
        if ($(this).children(arrowSelector).length === 0) {
          $(this).append(arrowDownSvg);
          // $(this).append(arrowUpSvg);
        }
      });
      $menu.find(subMenuLinkSelector).each(function () {
        if ($(this).children(arrowSelector).length === 0) {
          $(this).append(arrowRightSvg);
        }
      });
    },
    addVerticalMenuSvgArrow: function addVerticalMenuSvgArrow() {
      var $menu = this.opts.$menu;
      var arrowSelector = this.opts.arrowSelector;
      var linkSelector = this.opts.linkSelector;
      $menu.find(linkSelector).each(function () {
        if ($(this).children(arrowSelector).length === 0) {
          $(this).append(arrowRightSvg);
        }
      });
    },
    removeAllSvgArrows: function removeAllSvgArrows() {
      if (this.opts.$menu) {
        this.opts.$menu.find(this.opts.arrowSelector).remove();
      }
    },
    removeListeners: function removeListeners() {
      var $menu = this.opts.$menu;
      $menu.off('mouseover.navigation');
      $menu.find('li').off('click', this.copyLiEventTaA);
      this.removeTabletLogic();
    },
    removeTabletLogic: function removeTabletLogic() {
      var $menu = this.opts.$menu;
      $menu.off('tap.navigation');
    },
    addReverseMenuLogic: function addReverseMenuLogic() {
      var $menu = this.opts.$menu;
      var self = this;
      $menu.on('mouseover.navigation', 'li', function () {
        $menu.find('li.hover').removeClass('hover');
        self.setOpenReverseClass($menu, $(this));
      });
    },
    setOpenReverseClass: function setOpenReverseClass($menu, $item) {
      // level 0 - not in dropdown
      if (this.getItemLevel($menu, $item) > 0) {
        var $submenu = $item.children('ul');
        var subItemDoesNotFit = $submenu.length && $item.offset().left + $item.width() + 300 > window.innerWidth;
        var parentsAreReversed = $submenu.length && $item.closest('.open-reverse').length;

        if (subItemDoesNotFit || parentsAreReversed) {
          $submenu.addClass('open-reverse');
        } else {
          if ($submenu.length) {
            $submenu.removeClass('open-reverse');
          }
        }
      }
    },
    getItemLevel: function getItemLevel($menu, $item) {
      var menuSelector = this.opts.menuSelector;
      var temp2 = $item.parentsUntil(menuSelector);
      var temp = temp2.filter('li');
      return temp.length;
    },
    addTabletMenuLogic: function addTabletMenuLogic() {
      var self = this;
      var $menu = this.opts.$menu;
      if (!this.opts.clickOnLink) {
        this.opts.clickOnLink = this.clickOnLink.bind(this);
      }
      if (!this.opts.clickOnArrow) {
        this.opts.clickOnArrow = this.clickOnArrow.bind(this);
      }

      $menu.off('tap.navigation', this.opts.clickOnArrow);
      $menu.on('tap.navigation', 'li.menu-item > a svg', this.opts.clickOnArrow);

      $menu.off('tap.navigation', this.opts.clickOnLink);
      $menu.on('tap.navigation', 'li.menu-item > a', this.opts.clickOnLink);
    },
    clickOnLink: function clickOnLink(event) {
      var arrowWasClicked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var self = this;
      var $this = $(event.target);
      var $item = $this.closest('li');
      var $link = $this.closest('a');
      var $menu = this.opts.$menu;
      var $submenu = $item.children('ul');

      if ($submenu.length) {
        if (self.isSelectedItem($item)) {
          var href = $link.attr('href');

          // do nothing if nothing
          if (href.indexOf('#') === 0) {
            var anchor = href.replace('#', '').trim();

            if (!anchor || !$('#' + anchor).length) {
              return;
            }
          }
          event.stopPropagation();
          if (arrowWasClicked) {
            event.preventDefault();
          }
          self.deselectItems($menu, $item);
        } else {
          event.stopPropagation();
          event.preventDefault();
          self.selectItem($menu, $item);
        }
      } else {
        event.stopPropagation();
        if (arrowWasClicked || !arrowWasClicked && self.isSelectedItem($item)) {
          event.preventDefault();
        }
        self.deselectItems($menu, $item);
      }
    },
    clickOnArrow: function clickOnArrow(event) {
      this.clickOnLink(event, true);
    },
    selectItem: function selectItem($menu, $item) {
      this.deselectItems($menu, $item);
      $item.attr('data-selected-item', true);
      this.clearMenuHovers($menu, $item);
      $item.addClass('hover');
      this.setOpenReverseClass($menu, $item);
      var self = this;
      $('body').on('tap.navigation-clear-selection', '*', function () {
        var $this = jQuery(this);
        self.clearSelectionWhenTapOutside($this, $menu);
      });

      $(window).on('scroll.navigation-clear-selection', function () {
        var $this = jQuery(this);
        self.clearSelectionWhenTapOutside($this, $menu);
      });
    },
    deselectItems: function deselectItems($menu, $item) {
      $item.removeClass('hover');
      $menu.find('[data-selected-item]').each(function () {
        var $item = $(this);
        $item.removeAttr('data-selected-item');
        var $submenu = $menu.children('ul');

        //TODO @catalin, check if this mobile menu code is needed
        if ($menu.is('.mobile-menu')) {
          $submenu.slideDown();
        }
      });
    },
    isSelectedItem: function isSelectedItem($item) {
      return $item.is('[data-selected-item]');
    },
    clearMenuHovers: function clearMenuHovers($menu, except) {
      var self = this;
      $menu.find('li.hover').each(function () {
        if (except && self.containsSelectedItem($(this))) {
          return;
        }
        $(this).removeClass('hover');
      });
    },
    containsSelectedItem: function containsSelectedItem($item) {
      return $item.find('[data-selected-item]').length > 0 || $item.is('[data-selected-item]');
    },
    clearSelectionWhenTapOutside: function clearSelectionWhenTapOutside($this, $menu) {
      $('body').off('tap.navigation-clear-selection');
      $(window).off('scroll.navigation-clear-selection');
      if ($this.is($menu) || $.contains($menu[0], this)) {
        return;
      }
      this.clearMenuHovers($menu);
    },
    addMenuScrollSpy: function addMenuScrollSpy(startFrom) {
      var $menu = startFrom;
      if ($.fn.scrollSpy) {
        $menu.find('a').scrollSpy({
          onChange: function onChange() {
            $menu.find(' > .current-menu-item, > .current_page_item').removeClass('current-menu-item current_page_item');
            $(this).closest('li').addClass('current-menu-item current_page_item');
          },
          onLeave: function onLeave() {
            $(this).closest('li').removeClass('current-menu-item current_page_item');
          },

          smoothScrollAnchor: true,
          offset: function offset() {
            //offset is needed only for sticky menu
            var $fixed = $menu.closest('.h-navigation_sticky');
            if ($fixed.length) {
              return $fixed[0].getBoundingClientRect().height;
            }

            return 0;
          }
        });
      }

      $(window).trigger('smoothscroll.update');
    }
  };

  Component.inherits(Colibri);
  Colibri[className] = Component;

  Colibri.Plugin.create(className);
  Colibri.Plugin.autoload(className);
})(jQuery, Colibri);

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _linksDefineSamePage = __webpack_require__(106);

var _linksDefineSamePage2 = _interopRequireDefault(_linksDefineSamePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($, Colibri) {
  var className = 'accordion-menu';

  var arrowRightSvg = '<svg aria-hidden="true" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>';
  var arrowDownSvg = '<svg aria-hidden="true" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>';

  arrowRightSvg = '<div data-skip-smooth-scroll="1" class="h-global-transition-disable arrow-wrapper arrow-right">' + arrowRightSvg + '</div>';
  arrowDownSvg = '<div data-skip-smooth-scroll="1" class="h-global-transition-disable arrow-wrapper arrow-down">' + arrowDownSvg + '</div>';

  var Component = function Component(element, options) {
    this.namespace = className;
    this.defaults = {
      menuSelector: '.colibri-menu',
      offCanvasWrapper: '.colibri-menu-container',
      linkSelector: '.menu-item-has-children > a, .page_item_has_children > a',
      linkLeafsSelector: 'li:not(.menu-item-has-children):not(.page_item_has_children) > a',
      arrowSelector: ['.menu-item-has-children > a > .arrow-wrapper, .page_item_has_children > a > .arrow-wrapper', '.menu-item-has-children > a > svg, .page_item_has_children > a > svg'].join(','),
      linkSelectorInLink: 'svg',
      $menu: null
    };

    // Parent Constructor
    Colibri.apply(this, arguments);

    // Initialization
    this.initBindedFunctions();
    this.initEventListenersData();

    this.start();
  };

  Component.prototype = {
    start: function start() {
      var $menu = this.$element.find(this.opts.menuSelector).first();
      this.opts.$menu = $menu;
      this.addSvgArrows();

      this.opts.$menu.find('a').data('allow-propagation', true);

      this.removeEventListeners();
      this.addEventListeners();
      this.addFocusListener();
      this.addMenuScrollSpy($menu);
    },
    initBindedFunctions: function initBindedFunctions() {
      this.debounceApplyDropdownLogic = $.debounce(this.applyDropdownLogic.bind(this), 10);
      this.bindedLinkEventHandler = this.linkEventHandler.bind(this);
      this.bindedLinkArrowEventHandler = this.linkArrowEventHandler.bind(this);
    },
    initEventListenersData: function initEventListenersData() {
      var menuNamespace = '.accordion-menu';
      var events = ['click', 'tap'];
      var eventBase = events.map(function (event) {
        return '' + event + menuNamespace;
      });

      var linkSelectorEvent = eventBase.map(function (item) {
        return item + '.link-selector';
      }).join(' ');

      var arrowSelectorEvent = eventBase.map(function (item) {
        return item + '.arrow-selector';
      }).join(' ');

      var offCanvasEvent = eventBase.map(function (item) {
        return item + '.off-canvas';
      }).join(' ');

      this._eventOptions = {
        menuNamespace: menuNamespace,
        linkSelectorEvent: linkSelectorEvent,
        arrowSelectorEvent: arrowSelectorEvent,
        offCanvasEvent: offCanvasEvent
      };
    },
    toggleFocus: function toggleFocus(item) {
      while (this.opts.$menu[0] !== item) {
        if ('li' === item.tagName.toLowerCase()) {
          if (-1 !== item.className.indexOf('hover')) {
            item.className = item.className.replace(' hover', '');
          } else {
            item.className += ' hover';
          }
        }
        item = item.parentElement;
      }
    },
    addFocusListener: function addFocusListener() {
      var _this = this;

      var links = this.opts.$menu.find('a');

      links.on('focus', function (event) {
        _this.toggleFocus(event.currentTarget);
      });

      links.on('blur', function (event) {
        _this.toggleFocus(event.currentTarget, false);
      });
    },
    addEventListeners: function addEventListeners() {
      var $menu = this.opts.$menu;
      var eventOptions = this._eventOptions;
      $menu.on(eventOptions.arrowSelectorEvent, this.opts.arrowSelector, this.bindedLinkArrowEventHandler);

      if (window.wp && window.wp.customize) {
        $menu.off(eventOptions.linkSelectorEvent, this.opts.linkSelector);
      }

      $menu.on(eventOptions.linkSelectorEvent, this.opts.linkSelector, this.bindedLinkEventHandler);
      $menu.on(eventOptions.offCanvasEvent, this.opts.linkLeafsSelector, this.closeOffcanvasPanel);

      $(document).on('keyup.' + this.namespace, $.proxy(this.handleKeyboard, this));
    },
    removeEventListeners: function removeEventListeners() {
      var $menu = this.opts.$menu;
      var eventOptions = this._eventOptions;
      $menu.off(eventOptions.menuNamespace);
      $(document).on('keyup.' + this.namespace);
    },
    stop: function stop() {
      this.removeEventListeners();
      this.removeAllSvgArrows();
    },
    handleKeyboard: function handleKeyboard(e) {
      var item = e.target;
      if ($.contains(this.opts.$menu[0], item)) {
        if ($(item).siblings('ul').length) {
          if (e.which === 37) {
            this.closeDropDown($(item).closest('li'));
          }

          if (e.which === 39) {
            this.openDropDown($(item).closest('li'));
          }
        }
      }
    },
    openDropDown: function openDropDown(item) {
      if (!item) {
        return;
      }

      if ($(item).is('a')) {
        item = $(item).closest('li');
      } else {
        item = $(item);
      }

      item.addClass('open');

      item.children('ul').slideDown(100);
    },
    closeDropDown: function closeDropDown(item) {
      if (!item) {
        return;
      }

      if ($(item).is('a')) {
        item = $(item).closest('li');
      } else {
        item = $(item);
      }

      item.removeClass('open');
      item.children('ul').slideUp(100);
    },
    isDropDownOpen: function isDropDownOpen($parent) {
      return $parent.is('.open');
    },
    closeOffcanvasPanel: function closeOffcanvasPanel() {
      if (window.wp && window.wp.customize) {
        return;
      }

      //some mobile menus do not work without this timeout, because the panel gets hidden before the link logic happens
      //and some browser stop the link for security reasons because it got fired from hidden elements.
      setTimeout(function () {
        $('.offscreen-overlay').trigger('click');
      }, 500);
    },
    linkEventHandler: function linkEventHandler(event, isForArrow) {
      var inCustomizer = window.wp && window.wp.customize;
      if (inCustomizer) {
        event.preventDefault();
      }

      var $this = $(event.target);
      var $li = $this.closest('li');

      if (!isForArrow && $li.hasClass('open') && !inCustomizer) {
        this.closeOffcanvasPanel();
        return;
      }

      //when the arrows are clicked the link should not redirect you, or when the item li is not opened. also stop
      //propagation to the link event handler
      if (isForArrow || !isForArrow && !$li.hasClass('open')) {
        event.preventDefault();
        // do not trigger bubbling events e.g for offcanvas
        event.stopPropagation();
      }
      // event.stopPropagation();

      /**
       * For mobile devices the event handler function is called two times one for the click event and the other time for
       * tap event. Because of this we had to split the logic in things that needs to be called for every call and things
       * that needs to be called once when the tap/click events are called at the same time. We use the debounce function
       * to apply the dropdown logic only once
       */
      this.debounceApplyDropdownLogic(event, isForArrow);
    },
    linkArrowEventHandler: function linkArrowEventHandler(event) {
      this.linkEventHandler(event, true);
    },
    applyDropdownLogic: function applyDropdownLogic(event, isForArrow) {
      var $this = $(event.target);
      var $li = $this.closest('li');

      if (!($li.hasClass('menu-item-has-children') || $li.hasClass('page_item_has_children'))) {
        this.closeOffcanvasPanel();
        return;
      }

      if (isForArrow && this.isDropDownOpen($li)) {
        this.closeDropDown($li);
      } else {
        this.openDropDown($li);
      }
    },
    addSvgArrows: function addSvgArrows() {
      var $menu = this.opts.$menu;
      var linkSelectorInLink = this.opts.linkSelectorInLink;
      $menu.find(this.opts.linkSelector).each(function () {
        var _this2 = this;

        if ($(this).children(linkSelectorInLink).parent('.arrow-wrapper').length === 0) {
          $(this).children(linkSelectorInLink).remove();
          $(this).append(arrowRightSvg);
          $(this).append(arrowDownSvg);
        } else {
          if ($(this).children(linkSelectorInLink).length === 0) {
            $(this).append(arrowRightSvg);
            $(this).append(arrowDownSvg);
          }
        }

        setTimeout(function () {
          $(_this2).find('.h-global-transition-disable').removeClass('h-global-transition-disable');
        }, 1000);
      });
    },
    removeAllSvgArrows: function removeAllSvgArrows() {
      if (this.opts.$menu) {
        this.opts.$menu.find(this.opts.arrowSelector).remove();
      }
    },
    addMenuScrollSpy: function addMenuScrollSpy(startFrom) {
      var $menu = startFrom;
      var _offset = 20;
      var component = this;
      if ($.fn.scrollSpy) {
        var linkSelector = component.opts.linkSelector;
        var arrowSelector = component.opts.arrowSelector;
        $menu.find('a').not(linkSelector).not(arrowSelector).scrollSpy({
          onChange: function onChange() {
            $menu.find('.current-menu-item,.current_page_item').removeClass('current-menu-item current_page_item');
            $(this).closest('li').addClass('current-menu-item current_page_item');
          },
          onLeave: function onLeave() {
            $(this).closest('li').removeClass('current-menu-item current_page_item');
          },
          clickCallback: function clickCallback() {
            component.closeOffcanvasPanel();
          },

          smoothScrollAnchor: true,
          offset: function offset() {
            var $fixed = $menu.closest('[data-colibri-component="navigation"]');
            if ($fixed.length) {
              return $fixed[0].getBoundingClientRect().height + _offset;
            }

            return _offset;
          }
        });
      }

      $(window).trigger('smoothscroll.update');
    }
  };

  Component.inherits(Colibri);
  Colibri[className] = Component;

  Colibri.Plugin.create(className);
  Colibri.Plugin.autoload(className);
})(jQuery, Colibri);

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($, Colibri) {
  var className = 'navigation';

  var Component = function Component(element, options) {
    this.namespace = className;
    this.defaults = {
      data: {
        sticky: {
          className: 'h-navigation_sticky',
          startAfterNode: {
            enabled: false,
            selector: ''
          },
          animations: {
            enabled: false,
            currentInAnimationClass: '',
            currentOutAnimationClass: '',
            allInAnimationsClasses: '',
            allOutAnimationsClasses: '',
            duration: 0
          },
          zIndex: 9999,
          responsiveWidth: true,
          center: true,
          useShrink: true,
          toBottom: false,
          useNativeSticky: false,
          always: false
        },
        overlap: false,
        overlapIsActive: false
      }
    };
    // Parent Constructor
    Colibri.apply(this, arguments);
    this.computeOverlapPaddingDelayed = jQuery.debounce(this.computeOverlapPadding.bind(this), 10);
    //The script still is called two times but now both of the calls pass the check
    // if (!this.scriptCallIsValid()) {
    //   return;
    // }

    // Initialization
    this.start();
  };

  Component.prototype = {
    start: function start() {
      var data = {};
      if (this.opts.data) {
        data = this.opts.data;
      }
      if (data.sticky) {
        this.startSticky(data.sticky);
      }

      if (data.overlap) {
        this.startOverlap();
      }
    },


    //TODO @catalin this is a temporary workaround, until the issue: #0030376 is fixed
    scriptCallIsValid: function scriptCallIsValid() {
      var isInCustomizer = Colibri.isCustomizerPreview();
      if (!isInCustomizer) {
        return true;
      }
      var vueNavSelector = '.h-navigation_outer';
      var vueNav = $(this.$element).closest(vueNavSelector).get(0);
      if (!vueNav) {
        return true;
      }
      if (vueNav.__vue__) {
        return true;
      }
      return false;
    },
    startOverlap: function startOverlap() {
      var self = this;
      var $target = this.$element.closest('[data-colibri-navigation-overlap]');
      //for backward compatibility reasons
      if ($target.length === 0) {
        $target = this.$element;
      }
      this.overlapTarget = $target.get(0);
      this.overlapIsActive = true;
      $(window).bind('resize.overlap orientationchange.overlap', this.computeOverlapPaddingDelayed);
      window.addResizeListener(this.overlapTarget, this.computeOverlapPaddingDelayed);
      self.computeOverlapPadding();
    },
    stopOverlap: function stopOverlap() {
      this.overlapIsActive = false;
      if (this.$sheet) {
        document.head.removeChild(this.$sheet);
        this.$sheet = null;
      }
      $(window).off('.overlap');
      window.removeResizeListener(this.overlapTarget, this.computeOverlapPaddingDelayed);
    },
    computeOverlapPadding: function computeOverlapPadding() {
      if (!this.overlapIsActive) {
        return;
      }
      if (!this.$sheet) {
        this.$sheet = document.createElement('style');
        document.head.appendChild(this.$sheet);
      }
      var paddingTop = this.overlapTarget.offsetHeight + 'px !important;';
      this.$sheet.innerHTML = '.h-navigation-padding{padding-top:' + paddingTop + '}';
    },
    startSticky: function startSticky(data) {
      var self = this;

      this.$element.data('stickData', data);
      this.$element.fixTo('body', data);

      if (!Colibri.isCustomizerPreview()) {
        this.prepareSticky();
      }

      this.$element.bind('fixto-added.sticky', function () {
        self.$element.attr('data-in-sticky-state', true);
      });
      var navOuter = this.$element.closest('.h-navigation_outer');
      this.$element.bind('fixto-add.sticky', function () {
        self.clearResetTimeouts();
        var navOuter = self.$element.closest('.h-navigation_outer');
        navOuter.css('animation-duration', '');
        navOuter.css('min-height', navOuter[0].offsetHeight);
      });

      this.$element.bind('fixto-removed.sticky', function () {
        self.$element.removeAttr('data-in-sticky-state');
        self.resetParentHeight();
      });

      $(window).bind('resize.sticky orientationchange.sticky', function () {
        setTimeout(self.resizeCallback.bind(self), 50);
      });
      $(window).trigger('resize.sticky');
    },
    stopSticky: function stopSticky() {
      var instance = this.fixToInstance();
      if (instance) {
        instance.destroy();
        $(window).off('.sticky');
        this.$element.removeData('fixto-instance');
        this.resetParentHeight();
      }
    },
    resetParentHeight: function resetParentHeight() {
      this.clearResetTimeouts();
      var navOuter = this.$element.closest('.h-navigation_outer');
      var delay = parseFloat(this.$element.css('animation-duration')) * 1000;
      navOuter.css('animation-duration', '0s');
      this.resetTimeoutHeight = setTimeout(function () {
        navOuter.css('min-height', '');
      }, 1000);
      this.resetTimeoutAnimation = setTimeout(function () {
        navOuter.css('animation-duration', '');
      }, delay + 50);
    },
    clearResetTimeouts: function clearResetTimeouts() {
      clearTimeout(this.resetTimeoutHeight);
      clearTimeout(this.resetTimeoutAnimation);
    },
    stop: function stop() {
      this.stopSticky();
      this.stopOverlap();
    },
    prepareSticky: function prepareSticky() {
      var self = this;

      this.normal = this.$element.find('[data-nav-normal]');
      this.sticky = this.$element.find('[data-nav-sticky]');

      this.sticky.find('span[data-placeholder]').each(function () {
        $(this).parent().attr('data-placeholder', $(this).attr('data-placeholder'));
        $(this).remove();
      });

      if (!this.sticky.length || !this.sticky.children().length) {
        return;
      }

      this.$element.bind('fixto-added.sticky', function () {
        self.moveElementsToSticky();
      });

      this.$element.bind('fixto-removed.sticky', function () {
        self.moveElementsToNormal();
      });
    },
    moveElementsToSticky: function moveElementsToSticky() {
      var stickyEls = this.sticky.find('[data-placeholder]');
      var self = this;
      stickyEls.each(function (index, el) {
        $this = $(this);

        var type = $this.attr('data-placeholder');

        var content = self.normal.find('[data-placeholder-provider=' + type + '] .h-column__content >');
        var stickyEquiv = $this;

        if (stickyEquiv && content.length) {
          $(stickyEquiv).append(content);
        }
      });

      this.normal.hide();
      this.sticky.show();
    },
    moveElementsToNormal: function moveElementsToNormal() {
      var stickyEls = this.sticky.find('[data-placeholder]');
      var self = this;
      stickyEls.each(function (index, el) {
        $this = $(this);

        var type = $this.attr('data-placeholder');

        var content = self.sticky.find('[data-placeholder=' + type + '] >');
        var equiv = self.normal.find('[data-placeholder-provider=' + type + '] .h-column__content');

        if (equiv && content.length) {
          $(equiv).append(content);
        }
      });

      this.normal.show();
      this.sticky.hide();
    },
    fixToInstance: function fixToInstance() {
      var data = this.$element.data();
      if (data && data.fixtoInstance) {
        return data.fixtoInstance;
      }
      return false;
    },
    resizeCallback: function resizeCallback() {
      if (window.innerWidth < 1024) {
        var data = this.$element.data();
        var stickData = data.stickData;

        if (!stickData) {
          return;
        }

        var fixToInstance = data.fixtoInstance;
        if (!fixToInstance) {
          return true;
        }

        if (window.innerWidth <= 767) {
          if (!stickData.stickyOnMobile) {
            fixToInstance.stop();
          }
        } else {
          if (!stickData.stickyOnTablet) {
            fixToInstance.stop();
          }
        }
      } else {
        var data = this.$element.data();
        if (!data) {
          return;
        }

        var fixToInstance = data.fixtoInstance;
        if (!fixToInstance) {
          return true;
        }

        fixToInstance.refresh();
        fixToInstance.start();
      }
    }
  };
  Component.inherits(Colibri);
  Colibri[className] = Component;

  Colibri.Plugin.create(className);
  Colibri.Plugin.autoload(className);
})(jQuery, Colibri);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($, window, document) {
  // Start Computed Style. Please do not modify this module here. Modify it from its own repo. See address below.

  /*! Computed Style - v0.1.0 - 2012-07-19
   * https://github.com/bbarakaci/computed-style
   * Copyright (c) 2012 Burak Barakaci; Licensed MIT */
  var computedStyle = function () {
    var computedStyle = {
      getAll: function getAll(element) {
        return document.defaultView.getComputedStyle(element);
      },
      get: function get(element, name) {
        return this.getAll(element)[name];
      },
      toFloat: function toFloat(value) {
        return parseFloat(value, 10) || 0;
      },
      getFloat: function getFloat(element, name) {
        return this.toFloat(this.get(element, name));
      },
      _getAllCurrentStyle: function _getAllCurrentStyle(element) {
        return element.currentStyle;
      }
    };

    if (document.documentElement.currentStyle) {
      computedStyle.getAll = computedStyle._getAllCurrentStyle;
    }

    return computedStyle;
  }();

  // End Computed Style. Modify whatever you want to.

  var mimicNode = function () {
    /*
    Class Mimic Node
    Dependency : Computed Style
    Tries to mimick a dom node taking his styles, dimensions. May go to his repo if gets mature.
    */

    function MimicNode(element) {
      this.element = element;
      this.replacer = document.createElement('div');
      this.replacer.style.visibility = 'hidden';
      this.hide();
      element.parentNode.insertBefore(this.replacer, element);
    }

    MimicNode.prototype = {
      replace: function replace() {
        var rst = this.replacer.style;
        var styles = computedStyle.getAll(this.element);

        // rst.width = computedStyle.width(this.element) + 'px';
        // rst.height = this.element.offsetHeight + 'px';

        // Setting offsetWidth
        rst.width = this._width();
        rst.height = this._height();

        // Adopt margins
        rst.marginTop = styles.marginTop;
        rst.marginBottom = styles.marginBottom;
        rst.marginLeft = styles.marginLeft;
        rst.marginRight = styles.marginRight;

        // Adopt positioning
        rst.cssFloat = styles.cssFloat;
        rst.styleFloat = styles.styleFloat; //ie8;
        rst.position = styles.position;
        rst.top = styles.top;
        rst.right = styles.right;
        rst.bottom = styles.bottom;
        rst.left = styles.left;
        // rst.borderStyle = styles.borderStyle;

        rst.display = styles.display;
      },
      hide: function hide() {
        this.replacer.style.display = 'none';
      },
      _width: function _width() {
        return this.element.getBoundingClientRect().width + 'px';
      },
      _widthOffset: function _widthOffset() {
        return this.element.offsetWidth + 'px';
      },
      _height: function _height() {
        return jQuery(this.element).outerHeight() + 'px';
      },
      _heightOffset: function _heightOffset() {
        return this.element.offsetHeight + 'px';
      },
      destroy: function destroy() {
        $(this.replacer).remove();

        // set properties to null to break references
        for (var prop in this) {
          if (this.hasOwnProperty(prop)) {
            this[prop] = null;
          }
        }
      }
    };

    var bcr = document.documentElement.getBoundingClientRect();
    if (!bcr.width) {
      MimicNode.prototype._width = MimicNode.prototype._widthOffset;
      MimicNode.prototype._height = MimicNode.prototype._heightOffset;
    }

    return {
      MimicNode: MimicNode,
      computedStyle: computedStyle
    };
  }();

  // Class handles vendor prefixes
  function Prefix() {
    // Cached vendor will be stored when it is detected
    this._vendor = null;

    //this._dummy = document.createElement('div');
  }

  Prefix.prototype = {
    _vendors: {
      webkit: {
        cssPrefix: '-webkit-',
        jsPrefix: 'Webkit'
      },
      moz: {
        cssPrefix: '-moz-',
        jsPrefix: 'Moz'
      },
      ms: {
        cssPrefix: '-ms-',
        jsPrefix: 'ms'
      },
      opera: {
        cssPrefix: '-o-',
        jsPrefix: 'O'
      }
    },

    _prefixJsProperty: function _prefixJsProperty(vendor, prop) {
      return vendor.jsPrefix + prop[0].toUpperCase() + prop.substr(1);
    },
    _prefixValue: function _prefixValue(vendor, value) {
      return vendor.cssPrefix + value;
    },
    _valueSupported: function _valueSupported(prop, value, dummy) {
      // IE8 will throw Illegal Argument when you attempt to set a not supported value.
      try {
        dummy.style[prop] = value;
        return dummy.style[prop] === value;
      } catch (er) {
        return false;
      }
    },


    /**
     * Returns true if the property is supported
     * @param {string} prop Property name
     * @returns {boolean}
     */
    propertySupported: function propertySupported(prop) {
      // Supported property will return either inine style value or an empty string.
      // Undefined means property is not supported.
      return document.documentElement.style[prop] !== undefined;
    },


    /**
     * Returns prefixed property name for js usage
     * @param {string} prop Property name
     * @returns {string|null}
     */
    getJsProperty: function getJsProperty(prop) {
      // Try native property name first.
      if (this.propertySupported(prop)) {
        return prop;
      }

      // Prefix it if we know the vendor already
      if (this._vendor) {
        return this._prefixJsProperty(this._vendor, prop);
      }

      // We don't know the vendor, try all the possibilities
      var prefixed;
      for (var vendor in this._vendors) {
        prefixed = this._prefixJsProperty(this._vendors[vendor], prop);
        if (this.propertySupported(prefixed)) {
          // Vendor detected. Cache it.
          this._vendor = this._vendors[vendor];
          return prefixed;
        }
      }

      // Nothing worked
      return null;
    },


    /**
     * Returns supported css value for css property. Could be used to check support or get prefixed value string.
     * @param {string} prop Property
     * @param {string} value Value name
     * @returns {string|null}
     */
    getCssValue: function getCssValue(prop, value) {
      // Create dummy element to test value
      var dummy = document.createElement('div');

      // Get supported property name
      var jsProperty = this.getJsProperty(prop);

      // Try unprefixed value
      if (this._valueSupported(jsProperty, value, dummy)) {
        return value;
      }

      var prefixedValue;

      // If we know the vendor already try prefixed value
      if (this._vendor) {
        prefixedValue = this._prefixValue(this._vendor, value);
        if (this._valueSupported(jsProperty, prefixedValue, dummy)) {
          return prefixedValue;
        }
      }

      // Try all vendors
      for (var vendor in this._vendors) {
        prefixedValue = this._prefixValue(this._vendors[vendor], value);
        if (this._valueSupported(jsProperty, prefixedValue, dummy)) {
          // Vendor detected. Cache it.
          this._vendor = this._vendors[vendor];
          return prefixedValue;
        }
      }
      // No support for value
      return null;
    }
  };

  var prefix = new Prefix();

  // We will need this frequently. Lets have it as a global until we encapsulate properly.
  var transformJsProperty = prefix.getJsProperty('transform');

  // Will hold if browser creates a positioning context for fixed elements.
  var fixedPositioningContext;

  // Checks if browser creates a positioning context for fixed elements.
  // Transform rule will create a positioning context on browsers who follow the spec.
  // Ie for example will fix it according to documentElement
  // TODO: Other css rules also effects. perspective creates at chrome but not in firefox. transform-style preserve3d effects.
  function checkFixedPositioningContextSupport() {
    var support = false;
    var parent = document.createElement('div');
    var child = document.createElement('div');
    parent.appendChild(child);
    parent.style[transformJsProperty] = 'translate(0)';
    // Make sure there is space on top of parent
    parent.style.marginTop = '10px';
    parent.style.visibility = 'hidden';
    child.style.position = 'fixed';
    child.style.top = 0;
    document.body.appendChild(parent);
    var rect = child.getBoundingClientRect();
    // If offset top is greater than 0 meand transformed element created a positioning context.
    if (rect.top > 0) {
      support = true;
    }
    // Remove dummy content
    document.body.removeChild(parent);
    return support;
  }

  // It will return null if position sticky is not supported
  var nativeStickyValue = prefix.getCssValue('position', 'sticky');

  // It will return null if position fixed is not supported
  var fixedPositionValue = prefix.getCssValue('position', 'fixed');

  // Dirty business
  var ie = navigator.appName === 'Microsoft Internet Explorer';
  var ieversion;

  if (ie) {
    ieversion = parseFloat(navigator.appVersion.split('MSIE')[1]);
  }

  function FixTo(child, parent, options) {
    this.child = child;
    this._$child = $(child);
    this.parent = parent;
    this.options = {
      className: 'fixto-fixed',
      startAfterNode: {
        enabled: false,
        selector: ''
      },
      animations: {
        enabled: false,
        currentInAnimationClass: '',
        currentOutAnimationClass: '',
        allInAnimationsClasses: '',
        allOutAnimationsClasses: '',
        duration: 0
      },
      top: 0,
      zIndex: ''
    };
    this._setOptions(options);

    this._initAnimations();
  }

  FixTo.prototype = {
    // Returns the total outerHeight of the elements passed to mind option. Will return 0 if none.
    _mindtop: function _mindtop() {
      var top = 0;
      if (this._$mind) {
        var el;
        var rect;
        var height;
        for (var i = 0, l = this._$mind.length; i < l; i++) {
          el = this._$mind[i];
          rect = el.getBoundingClientRect();
          if (rect.height) {
            top += rect.height;
          } else {
            var styles = computedStyle.getAll(el);
            top += el.offsetHeight + computedStyle.toFloat(styles.marginTop) + computedStyle.toFloat(styles.marginBottom);
          }
        }
      }
      return top;
    },
    _updateOutAnimationDuration: function _updateOutAnimationDuration() {
      var animationDuration = this.options.animations.duration;
      if (isNaN(animationDuration)) {
        animationDuration = 0;
      }

      this._animationDuration = animationDuration;
    },
    _initAnimations: function _initAnimations() {
      var animations = this.options.animations;
      this._$child.removeClass(animations.allInAnimationsClasses);
      this._$child.removeClass(animations.allOutAnimationsClasses);

      var self = this;
      this._updateOutAnimationDuration();

      this._animationOutDebounce = $.debounce(function () {
        self._$child.removeClass(self.options.animations.allOutAnimationsClasses);
        self._inOutAnimation = false;
        self._unfix();
        self._removeTransitionFromOutAnimation();
      }, 100);

      this._animationInDebounce = $.debounce(function () {
        self._inInAnimation = false;
        self._$child.removeClass(self.options.animations.allInAnimationsClasses);
      }, this._animationDuration);
    },
    _removeTransitionFromOutAnimation: function _removeTransitionFromOutAnimation() {
      var noTransitionClass = 'h-global-transition-disable';
      this._$child.addClass(noTransitionClass);

      var childTransitionDuration = this._$child.css('transition-duration');
      var isNumberRegex = /\d+/;
      var transitionDurationInS = childTransitionDuration.match(isNumberRegex)[0];
      if (!transitionDurationInS) {
        transitionDurationInS = 0;
      }

      var transitionDurationInMs = transitionDurationInS * 1000;
      var transitionBuffer = 500;
      var transitionDuration = transitionDurationInMs + transitionBuffer;
      var self = this;
      setTimeout(function () {
        if (!self._$child) {
          return;
        }
        self._$child.removeClass(noTransitionClass);
      }, transitionDuration);
    },
    _passedStartAfterNode: function _passedStartAfterNode() {
      var $startAfterNode = this._$startAfterNode;
      if ($startAfterNode && $startAfterNode.length > 0) {
        var offsetTop = this._afterElementOffsetTop;
        var height = $startAfterNode.outerHeight();
        return this._scrollTop > offsetTop + height;
      }
      return true;
    },

    // Public method to stop the behaviour of this instance.
    stop: function stop() {
      this._stop();
      this._running = false;
    },


    // Public method starts the behaviour of this instance.
    start: function start() {
      // Start only if it is not running not to attach event listeners multiple times.
      if (!this._running) {
        this._start();
        this._running = true;
      }
    },


    //Public method to destroy fixto behaviour
    destroy: function destroy() {
      this.stop();

      this._destroy();

      // Remove jquery data from the element
      this._$child.removeData('fixto-instance');

      // set properties to null to break references
      for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
          this[prop] = null;
        }
      }
    },
    _setOptions: function _setOptions(options) {
      $.extend(true, this.options, options);
      if (this.options.mind) {
        this._$mind = $(this.options.mind);
      }
      if (this.options.startAfterNode.enabled && this.options.startAfterNode.selector) {
        this._$startAfterNode = $(this.options.startAfterNode.selector);
      }
    },
    setOptions: function setOptions(options) {
      this._setOptions(options);
      this.refresh();
    },


    // Methods could be implemented by subclasses

    _stop: function _stop() {},
    _start: function _start() {},
    _destroy: function _destroy() {},
    refresh: function refresh() {}
  };

  // Class FixToContainer
  function FixToContainer(child, parent, options) {
    /** FIXME If you have a saved navigation with sticky, when you enter the page, this class creates two objects
     * and because of that there are two events listeners. There should be only one instance of this class for each
     * navigation
     */
    //The script still is called two times but now both of the calls pass the check
    // if (!child || !this._scriptCallIsValid(child)) {
    //   return;
    // }
    FixTo.call(this, child, parent, options);
    this._replacer = new mimicNode.MimicNode(child);
    this._ghostNode = this._replacer.replacer;

    this._saveStyles();

    this._saveViewportHeight();

    // Create anonymous functions and keep references to register and unregister events.
    this._proxied_onscroll = this._bind(this._onscroll, this);
    this._proxied_onresize = this._bind(this._onresize, this);

    this.start();
  }

  FixToContainer.prototype = new FixTo();

  $.extend(FixToContainer.prototype, {
    // Returns an anonymous function that will call the given function in the given context
    _bind: function _bind(fn, context) {
      return function () {
        return fn.call(context);
      };
    },


    // at ie8 maybe only in vm window resize event fires everytime an element is resized.
    _toresize: ieversion === 8 ? document.documentElement : window,

    //TODO @catalin this is a temporary workaround, until the issue: #0030376 is fixed
    _scriptCallIsValid: function _scriptCallIsValid(child) {
      var isInCustomizer = Colibri.isCustomizerPreview();
      if (!isInCustomizer) {
        return true;
      }
      var vueNavSelector = '.h-navigation_outer';
      var vueNav = $(child).closest(vueNavSelector).get(0);
      if (!vueNav) {
        return true;
      }
      if (vueNav.__vue__) {
        return true;
      }
      return false;
    },

    _onscroll: function _onscroll() {
      /**
       * TODO @catalin, now sometimes the child height is 0, other times is correct that ruins the out animation logic,
       * until that is fixed this is a workaround to that problem. When the child height will always be correct remove
       * this condition.
       */
      this._scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      this._parentBottom = this.parent.offsetHeight + this._fullOffset('offsetTop', this.parent);
      if (this.options.startAfterNode && !this._passedStartAfterNode()) {
        if (this.fixed && !this._inOutAnimation) {
          this._unfixFromScrollListener();
        }
        return;
      }
      // if (this.options.mindBottomPadding !== false) {
      //     this._parentBottom -= computedStyle.getFloat(this.parent, 'paddingBottom');
      // }

      // if (this.options.toBottom) {
      //     this._fix();
      //     this._adjust();
      //     return
      // }

      // if (this.options.toBottom) {
      //     this.options.top = this._viewportHeight - computedStyle.toFloat(computedStyle.getAll(this.child).height) - this.options.topSpacing;
      // }
      if (!this.fixed) {
        var childStyles = computedStyle.getAll(this.child);

        if (this._scrollTop < this._parentBottom && this._scrollTop > this._fullOffset('offsetTop', this.child) - this.options.top - this._mindtop() && this._viewportHeight > this.child.offsetHeight + computedStyle.toFloat(childStyles.marginTop) + computedStyle.toFloat(childStyles.marginBottom) || this.options.toBottom) {
          this._fix();
          this._adjust();
        }
      } else {
        if (this.options.toBottom) {
          if (this._scrollTop >= this._fullOffset('offsetTop', this._ghostNode)) {
            this._unfixFromScrollListener();
            return;
          }
        } else {
          if (this._scrollTop > this._parentBottom || this._scrollTop <= this._fullOffset('offsetTop', this._ghostNode) - this.options.top - this._mindtop()) {
            this._unfixFromScrollListener();
            return;
          }
        }
        this._adjust();
      }
    },

    _adjust: function _adjust() {
      var top = 0;
      var mindTop = this._mindtop();
      var diff = 0;
      var childStyles = computedStyle.getAll(this.child);
      var context = null;

      if (fixedPositioningContext) {
        // Get positioning context.
        context = this._getContext();
        if (context) {
          // There is a positioning context. Top should be according to the context.
          top = Math.abs(context.getBoundingClientRect().top);
        }
      }

      diff = this._parentBottom - this._scrollTop - (this.child.offsetHeight + computedStyle.toFloat(childStyles.marginBottom) + mindTop + this.options.top);

      if (diff > 0) {
        diff = 0;
      }

      if (this.options.toBottom) {
        // this.child.style.top = (diff + mindTop + top + this.options.top) - computedStyle.toFloat(childStyles.marginTop) + 'px';
      } else {
        var _top = this.options.top;
        if (_top === 0) {
          _top = $('body').offset().top;
        }

        this.child.style.top = Math.round(diff + mindTop + top + _top - computedStyle.toFloat(childStyles.marginTop)) + 'px';
      }
    },

    // Calculate cumulative offset of the element.
    // Optionally according to context
    _fullOffset: function _fullOffset(offsetName, elm, context) {
      var offset = elm[offsetName];
      var offsetParent = elm.offsetParent;

      // Add offset of the ascendent tree until we reach to the document root or to the given context
      while (offsetParent !== null && offsetParent !== context) {
        offset = offset + offsetParent[offsetName];
        offsetParent = offsetParent.offsetParent;
      }

      return offset;
    },

    // Get positioning context of the element.
    // We know that the closest parent that a transform rule applied will create a positioning context.
    _getContext: function _getContext() {
      var parent;
      var element = this.child;
      var context = null;
      var styles;

      // Climb up the treee until reaching the context
      while (!context) {
        parent = element.parentNode;
        if (parent === document.documentElement) {
          return null;
        }

        styles = computedStyle.getAll(parent);
        // Element has a transform rule
        if (styles[transformJsProperty] !== 'none') {
          context = parent;
          break;
        }
        element = parent;
      }
      return context;
    },


    _fix: function _fix() {
      var child = this.child;
      var childStyle = child.style;
      var childStyles = computedStyle.getAll(child);
      var left = child.getBoundingClientRect().left;
      var width = childStyles.width;

      this._$child.trigger('fixto-add');

      this._saveStyles();

      if (document.documentElement.currentStyle) {
        // Function for ie<9. When hasLayout is not triggered in ie7, he will report currentStyle as auto, clientWidth as 0. Thus using offsetWidth.
        // Opera also falls here

        width = child.offsetWidth;
        if (childStyles.boxSizing !== 'border-box') {
          width = width - (computedStyle.toFloat(childStyles.paddingLeft) + computedStyle.toFloat(childStyles.paddingRight) + computedStyle.toFloat(childStyles.borderLeftWidth) + computedStyle.toFloat(childStyles.borderRightWidth));
        }

        width += 'px';
      }

      // Ie still fixes the container according to the viewport.
      if (fixedPositioningContext) {
        var context = this._getContext();
        // if(context) {
        //     // There is a positioning context. Left should be according to the context.
        //     left = child.getBoundingClientRect().left - context.getBoundingClientRect().left;
        // } else {
        left = this._$child.offset().left;
        // }
      }

      this._replacer.replace();

      childStyle.left =
      /*left + "px"; */left - computedStyle.toFloat(childStyles.marginLeft) + 'px';
      childStyle.width = width;

      childStyle.position = 'fixed';
      if (this.options.toBottom) {
        childStyle.top = '';
        childStyle.bottom = this.options.top + computedStyle.toFloat(childStyles.marginBottom) + 'px';
      } else {
        childStyle.bottom = '';
        var _top = this.options.top;

        if (_top === 0) {
          _top = $('body').offset().top;
        }
        childStyle.top = this._mindtop() + _top - computedStyle.toFloat(childStyles.marginTop) + 'px';
      }

      if (this.options.zIndex) {
        this.child.style.zIndex = this.options.zIndex;
      }

      this._$child.addClass(this.options.className);
      var animations = this.options.animations;
      this._$child.removeClass(animations.allInAnimationsClasses);
      if (animations.enabled) {
        this._$child.addClass(animations.currentInAnimationClass);
        if (!this._inInAnimation) {
          this._inInAnimation = true;
          this._animationInDebounce();
        }
      }
      this.fixed = true;
      this._$child.trigger('fixto-added');
    },
    _unfixFromScrollListener: function _unfixFromScrollListener() {
      this._$child.trigger('fixto-unnfix-from-scroll');
      if (this.options.animations.enabled) {
        this._unfixTriggerAnimation();
      } else {
        this._unfix();
      }
    },
    _getAfterElementOffsetTop: function _getAfterElementOffsetTop() {
      var $node = this._$startAfterNode;
      var defaultValue = 0;
      if ($node && $node.length > 0) {
        var elem = $node.get(0);
        var distance = 0;
        do {
          // Increase our distance counter
          distance += elem.offsetTop;

          // Set the element to it's parent
          elem = elem.offsetParent;
        } while (elem);
        distance = distance < defaultValue ? defaultValue : distance;
        return distance;
      }
      return defaultValue;
    },

    _unfix: function _unfix() {
      this._replacer.hide();
      var childStyle = this.child.style;
      childStyle.position = this._childOriginalPosition;
      childStyle.top = this._childOriginalTop;
      childStyle.bottom = this._childOriginalBottom;
      childStyle.width = this._childOriginalWidth;
      childStyle.left = this._childOriginalLeft;
      childStyle.zIndex = this._childOriginalZIndex;
      if (!this.options.always) {
        this._$child.removeClass(this.options.className);
        this._$child.trigger('fixto-removed');
      }
      this.fixed = false;
    },
    _unfixTriggerAnimation: function _unfixTriggerAnimation() {
      this._$child.trigger('fixto-animated-remove');
      this._animationInDebounce.flush();
      var animations = this.options.animations;
      this._$child.removeClass(animations.allInAnimationsClasses);
      this._$child.removeClass(animations.allOutAnimationsClasses);
      if (animations.enabled) {
        this._$child.addClass(animations.currentOutAnimationClass);
      }
      this._inOutAnimation = true;
      this._animationOutDebounce();
    },
    _saveStyles: function _saveStyles() {
      this._animationOutDebounce.flush();
      var childStyle = this.child.style;
      this._childOriginalPosition = childStyle.position;
      if (this.options.toBottom) {
        this._childOriginalTop = '';
        this._childOriginalBottom = childStyle.bottom;
      } else {
        this._childOriginalTop = childStyle.top;
        this._childOriginalBottom = '';
      }
      this._childOriginalWidth = childStyle.width;
      this._childOriginalLeft = childStyle.left;
      this._childOriginalZIndex = childStyle.zIndex;
      this._afterElementOffsetTop = this._getAfterElementOffsetTop();
    },
    _onresize: function _onresize() {
      this.refresh();
    },
    _saveViewportHeight: function _saveViewportHeight() {
      // ie8 doesn't support innerHeight
      this._viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    },
    _stop: function _stop() {
      // Unfix the container immediately.
      this._unfix();
      // remove event listeners
      $(window).unbind('scroll.fixto mousewheel', this._proxied_onscroll);
      $(this._toresize).unbind('resize.fixto', this._proxied_onresize);
    },
    _start: function _start() {
      // Trigger onscroll to have the effect immediately.
      this._onscroll();

      // Attach event listeners
      $(window).bind('scroll.fixto mousewheel', this._proxied_onscroll);
      $(this._toresize).bind('resize.fixto', this._proxied_onresize);
    },
    _destroy: function _destroy() {
      // Destroy mimic node instance
      this._replacer.destroy();
    },
    refresh: function refresh() {
      this._saveViewportHeight();
      this._unfix();
      this._onscroll();
    }
  });

  function NativeSticky(child, parent, options) {
    FixTo.call(this, child, parent, options);
    this.start();
  }

  NativeSticky.prototype = new FixTo();

  $.extend(NativeSticky.prototype, {
    _start: function _start() {
      var childStyles = computedStyle.getAll(this.child);

      this._childOriginalPosition = childStyles.position;
      this._childOriginalTop = childStyles.top;

      this.child.style.position = nativeStickyValue;
      this.refresh();
    },
    _stop: function _stop() {
      this.child.style.position = this._childOriginalPosition;
      this.child.style.top = this._childOriginalTop;
    },
    refresh: function refresh() {
      this.child.style.top = this._mindtop() + this.options.top + 'px';
    }
  });

  var fixTo = function fixTo(childElement, parentElement, options) {
    if (nativeStickyValue && !options || nativeStickyValue && options && options.useNativeSticky !== false) {
      // Position sticky supported and user did not disabled the usage of it.
      return new NativeSticky(childElement, parentElement, options);
    } else if (fixedPositionValue) {
      // Position fixed supported

      if (fixedPositioningContext === undefined) {
        // We don't know yet if browser creates fixed positioning contexts. Check it.
        fixedPositioningContext = checkFixedPositioningContextSupport();
      }

      return new FixToContainer(childElement, parentElement, options);
    } else {
      return 'Neither fixed nor sticky positioning supported';
    }
  };

  /*
  No support for ie lt 8
  */

  if (ieversion < 8) {
    fixTo = function fixTo() {
      return 'not supported';
    };
  }

  // Let it be a jQuery Plugin
  $.fn.fixTo = function (targetSelector, options) {
    var $targets = $(targetSelector);

    var i = 0;
    return this.each(function () {
      // Check the data of the element.
      var instance = $(this).data('fixto-instance');

      // If the element is not bound to an instance, create the instance and save it to elements data.
      if (!instance) {
        $(this).data('fixto-instance', fixTo(this, $targets[i], options));
      } else {
        // If we already have the instance here, expect that targetSelector parameter will be a string
        // equal to a public methods name. Run the method on the instance without checking if
        // it exists or it is a public method or not. Cause nasty errors when necessary.
        var method = targetSelector;
        instance[method].call(instance, options);
      }
      i++;
    });
  };

  /*
      Expose
  */

  return {
    FixToContainer: FixToContainer,
    fixTo: fixTo,
    computedStyle: computedStyle,
    mimicNode: mimicNode
  };
})(window.jQuery, window, document);

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($, Colibri) {
  var className = 'overlap';

  var Component = function Component(element, options) {
    this.namespace = className;
    this.defaults = {
      data: {}
    };

    // Parent Constructor
    Colibri.apply(this, arguments);

    // Initialization
    this.start();
  };

  Component.prototype = {
    start: function start() {
      var self = this;
      $(window).bind('resize.overlap orientationchange.overlap', function () {
        setTimeout(self.resizeCallback.bind(self), 50);
      });
      self.resizeCallback();
    },
    stop: function stop() {
      $(window).off('.overlap');
      if (this.$sheet) {
        document.head.removeChild(this.$sheet);
        this.$sheet = null;
      }
    },
    computePadding: function computePadding() {
      if (!this.$sheet) {
        this.$sheet = document.createElement('style');
        document.head.appendChild(this.$sheet);
      }
      var paddingTop = this.$element[0].getBoundingClientRect().height + 'px !important;';
      this.$sheet.innerHTML = '.h-navigation-padding{padding-top:' + paddingTop + '}';
    },
    resizeCallback: function resizeCallback() {
      this.computePadding();
    }
  };
  Component.inherits(Colibri);
  Colibri[className] = Component;

  Colibri.Plugin.create(className);
  Colibri.Plugin.autoload(className);
})(jQuery, Colibri);

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($, Colibri) {
  var className = 'masonry';

  var Component = function Component(element, options) {
    this.namespace = className;
    this.defaults = {};
    // Parent Constructor
    Colibri.apply(this, arguments);
    this.bindedRestart = $.debounce(this.restart.bind(this), 50);
    this.start();
  };

  function attributeExistsAndFalse($node, attrName) {
    if ($node[0].hasAttribute(attrName) && $node.attr(attrName) != 'true') {
      return true;
    }
  }
  function showMasonry($node) {
    // check for old version of masonry, atribute not used anymore//
    if (attributeExistsAndFalse($node, 'data-show-masonry') || attributeExistsAndFalse($node, 'show-masonry')) {
      return false;
    }
    return true;
  }
  Component.prototype = {
    start: function start() {
      var masonry = this.$element;

      if (this.opts.data && this.opts.data.targetSelector) {
        masonry = this.$element.find(this.opts.data.targetSelector);
      }

      this.$masonry = masonry;

      if (!showMasonry(this.$element)) {
        return;
      }

      this.$masonry.masonry({
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-item',
        percentPosition: true
      });
      this.addEventListeners();
      (function () {
        var images = masonry.find('img');
        var loadedImages = 0;
        var completed = 0;

        function imageLoaded() {
          loadedImages++;
          if (images.length === loadedImages) {
            try {
              masonry.data().masonry.layout();
            } catch (e) {
              console.error(e);
            }
          }
        }

        images.each(function () {
          if (this.complete) {
            completed++;
            imageLoaded();
          } else {
            $(this).on('load', imageLoaded);
            $(this).on('error', imageLoaded);
          }
        });
        if (images.length !== completed) {
          if (document.readyState == 'complete') {
            setTimeout(function () {
              masonry.data().masonry.layout();
            }, 10);
          }
        }

        $(window).on('load', function () {
          masonry.data().masonry.layout();
        });
      })();
    },
    stop: function stop() {
      this.removeEventListeners();
      try {
        this.$masonry.masonry('destroy');
      } catch (e) {}
    },
    restart: function restart() {
      this.stop();
      this.start();
    },
    addEventListeners: function addEventListeners() {
      this.$element.on('colibriContainerOpened', this.bindedRestart);
    },
    removeEventListeners: function removeEventListeners() {
      this.$element.off('colibriContainerOpened', this.bindedRestart);
    },
    loadImages: function loadImages() {}
  };

  Component.inherits(Colibri);
  Colibri[className] = Component;
  Colibri.Plugin.create(className);
  Colibri.Plugin.autoload(className);
})(jQuery, Colibri);

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(162);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($, Colibri) {
  var className = 'footer-parallax';

  var Component = function Component(element, options) {
    var _this = this;

    this.namespace = className;
    this.defaults = {
      activeClasses: {
        header: 'h-footer-parallax-header-class',
        content: 'h-footer-parallax-content-class',
        footer: 'h-footer-parallax',
        container: 'new-stacking-context'
      },
      selectors: {
        header: ' > .page-header,> .header',
        content: '> .page-content,> .content',
        container: '#page-top'
      }
    };

    this.bindedResizeListener = $.debounce(this.resizeListener.bind(this), 100);

    // Parent Constructor
    Colibri.apply(this, arguments);
    // Initialization
    this.scriptStarted = false;
    this.initMediaById();
    this.start();
    window.addResizeListener(this.$element.get(0), this.bindedResizeListener);
    //sometimes the size in the preview is not correct, so i force a refresh to have the correct content margin bottom
    setTimeout(function () {
      _this.bindedResizeListener();
    }, 5000);
  };

  Component.prototype = {
    start: function start() {
      this.scriptStarted = true;
      this.isEnabled = this.$element.attr('data-enabled');

      //backward compatible with the version with no attribute
      this.isEnabled = this.isEnabled !== undefined ? this.isEnabled == 'true' : true;
      if (this.getCurrentMedia() !== 'desktop' || !this.isEnabled) {
        return;
      }
      var selectors = this.opts.selectors;
      var activeClasses = this.opts.activeClasses;
      this.$container = $(selectors.container);
      this.$content = this.$container.find(selectors.content).first();
      this.$header = this.$container.find(selectors.header).first();

      this.$container.addClass(activeClasses.container);
      this.$header.addClass(activeClasses.header);
      this.$content.addClass(activeClasses.content);
      this.$element.addClass(activeClasses.footer);

      this.updateSiblingStyle();
    },
    stop: function stop() {
      this.scriptStarted = false;
      var activeClasses = this.opts.activeClasses;
      if (!this.$container) {
        return;
      }
      this.$container.removeClass(activeClasses.container);
      this.$header.removeClass(activeClasses.header);
      this.$content.removeClass(activeClasses.content);
      this.$element.removeClass(activeClasses.footer);
      this.$content.css('margin-bottom', '');
    },
    restart: function restart() {
      this.stop();
      this.start();
    },
    resizeListener: function resizeListener() {
      // if (!this.resizeInited) {
      //   this.resizeInited = true;
      //   return;
      // }
      this.updateSiblingStyle();
      if (this.getCurrentMedia() !== 'desktop') {
        this.stop();
      } else {
        if (this.isEnabled && !this.footerParallaxStarted()) {
          this.start();
        }
      }
    },
    footerParallaxStarted: function footerParallaxStarted() {
      return this.scriptStarted;
    },
    initMediaById: function initMediaById() {
      this.mediaById = {
        desktop: {
          min: 1024
        },
        tablet: {
          min: 768,
          max: 1023
        },
        mobile: {
          max: 767
        }
      };
    },
    isDragging: function isDragging() {
      return !!document.querySelector('body.h-ui-dragging');
    },
    getCurrentMedia: function getCurrentMedia() {
      var _this2 = this;

      var windowWidth = window.innerWidth;
      var media = null;
      (0, _keys2.default)(this.mediaById).forEach(function (mediaId) {
        var limits = _this2.mediaById[mediaId];
        if ((!limits.min || limits.min && windowWidth >= limits.min) && (!limits.max || limits.max && windowWidth <= limits.max)) {
          media = mediaId;
        }
      });
      return media;
    },
    updateSiblingStyle: function updateSiblingStyle() {

      if (!this.$content) {
        return;
      }

      if (!this.footerParallaxStarted()) {
        return;
      }
      var footerHeight = this.$element.outerHeight();
      this.$content.css('margin-bottom', footerHeight + 'px');
    }
  };

  Component.inherits(Colibri);
  Colibri[className] = Component;
  Colibri.Plugin.create(className);
  Colibri.Plugin.autoload(className);
})(jQuery, Colibri);

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(163), __esModule: true };

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(164);
module.exports = __webpack_require__(3).Object.keys;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(41);
var $keys = __webpack_require__(20);

__webpack_require__(90)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 165 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 166 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 167 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 168 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 169 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
