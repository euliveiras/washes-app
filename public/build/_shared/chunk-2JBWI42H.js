import {
  _typeof
} from "/build/_shared/chunk-FQ5UBCHZ.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(obj);
    }
    module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/date-fns/_lib/requiredArgs/index.js
var require_requiredArgs = __commonJS({
  "node_modules/date-fns/_lib/requiredArgs/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = requiredArgs2;
    function requiredArgs2(required, args) {
      if (args.length < required) {
        throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
      }
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/isDate/index.js
var require_isDate = __commonJS({
  "node_modules/date-fns/isDate/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isDate;
    var _typeof2 = _interopRequireDefault(require_typeof());
    var _index = _interopRequireDefault(require_requiredArgs());
    function isDate(value) {
      (0, _index.default)(1, arguments);
      return value instanceof Date || (0, _typeof2.default)(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/toDate/index.js
var require_toDate = __commonJS({
  "node_modules/date-fns/toDate/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toDate3;
    var _typeof2 = _interopRequireDefault(require_typeof());
    var _index = _interopRequireDefault(require_requiredArgs());
    function toDate3(argument) {
      (0, _index.default)(1, arguments);
      var argStr = Object.prototype.toString.call(argument);
      if (argument instanceof Date || (0, _typeof2.default)(argument) === "object" && argStr === "[object Date]") {
        return new Date(argument.getTime());
      } else if (typeof argument === "number" || argStr === "[object Number]") {
        return new Date(argument);
      } else {
        if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
          console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
          console.warn(new Error().stack);
        }
        return /* @__PURE__ */ new Date(NaN);
      }
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/isValid/index.js
var require_isValid = __commonJS({
  "node_modules/date-fns/isValid/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isValid;
    var _index = _interopRequireDefault(require_isDate());
    var _index2 = _interopRequireDefault(require_toDate());
    var _index3 = _interopRequireDefault(require_requiredArgs());
    function isValid(dirtyDate) {
      (0, _index3.default)(1, arguments);
      if (!(0, _index.default)(dirtyDate) && typeof dirtyDate !== "number") {
        return false;
      }
      var date = (0, _index2.default)(dirtyDate);
      return !isNaN(Number(date));
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/toInteger/index.js
var require_toInteger = __commonJS({
  "node_modules/date-fns/_lib/toInteger/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toInteger3;
    function toInteger3(dirtyNumber) {
      if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
        return NaN;
      }
      var number = Number(dirtyNumber);
      if (isNaN(number)) {
        return number;
      }
      return number < 0 ? Math.ceil(number) : Math.floor(number);
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/addMilliseconds/index.js
var require_addMilliseconds = __commonJS({
  "node_modules/date-fns/addMilliseconds/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = addMilliseconds;
    var _index = _interopRequireDefault(require_toInteger());
    var _index2 = _interopRequireDefault(require_toDate());
    var _index3 = _interopRequireDefault(require_requiredArgs());
    function addMilliseconds(dirtyDate, dirtyAmount) {
      (0, _index3.default)(2, arguments);
      var timestamp = (0, _index2.default)(dirtyDate).getTime();
      var amount = (0, _index.default)(dirtyAmount);
      return new Date(timestamp + amount);
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/subMilliseconds/index.js
var require_subMilliseconds = __commonJS({
  "node_modules/date-fns/subMilliseconds/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = subMilliseconds;
    var _index = _interopRequireDefault(require_addMilliseconds());
    var _index2 = _interopRequireDefault(require_requiredArgs());
    var _index3 = _interopRequireDefault(require_toInteger());
    function subMilliseconds(dirtyDate, dirtyAmount) {
      (0, _index2.default)(2, arguments);
      var amount = (0, _index3.default)(dirtyAmount);
      return (0, _index.default)(dirtyDate, -amount);
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/getUTCDayOfYear/index.js
var require_getUTCDayOfYear = __commonJS({
  "node_modules/date-fns/_lib/getUTCDayOfYear/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getUTCDayOfYear;
    var _index = _interopRequireDefault(require_toDate());
    var _index2 = _interopRequireDefault(require_requiredArgs());
    var MILLISECONDS_IN_DAY = 864e5;
    function getUTCDayOfYear(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate);
      var timestamp = date.getTime();
      date.setUTCMonth(0, 1);
      date.setUTCHours(0, 0, 0, 0);
      var startOfYearTimestamp = date.getTime();
      var difference = timestamp - startOfYearTimestamp;
      return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/startOfUTCISOWeek/index.js
var require_startOfUTCISOWeek = __commonJS({
  "node_modules/date-fns/_lib/startOfUTCISOWeek/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = startOfUTCISOWeek;
    var _index = _interopRequireDefault(require_toDate());
    var _index2 = _interopRequireDefault(require_requiredArgs());
    function startOfUTCISOWeek(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var weekStartsOn = 1;
      var date = (0, _index.default)(dirtyDate);
      var day = date.getUTCDay();
      var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
      date.setUTCDate(date.getUTCDate() - diff);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/getUTCISOWeekYear/index.js
var require_getUTCISOWeekYear = __commonJS({
  "node_modules/date-fns/_lib/getUTCISOWeekYear/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getUTCISOWeekYear;
    var _index = _interopRequireDefault(require_toDate());
    var _index2 = _interopRequireDefault(require_requiredArgs());
    var _index3 = _interopRequireDefault(require_startOfUTCISOWeek());
    function getUTCISOWeekYear(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate);
      var year = date.getUTCFullYear();
      var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
      fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
      fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
      var startOfNextYear = (0, _index3.default)(fourthOfJanuaryOfNextYear);
      var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
      fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
      fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
      var startOfThisYear = (0, _index3.default)(fourthOfJanuaryOfThisYear);
      if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
      } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
      } else {
        return year - 1;
      }
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/startOfUTCISOWeekYear/index.js
var require_startOfUTCISOWeekYear = __commonJS({
  "node_modules/date-fns/_lib/startOfUTCISOWeekYear/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = startOfUTCISOWeekYear;
    var _index = _interopRequireDefault(require_getUTCISOWeekYear());
    var _index2 = _interopRequireDefault(require_startOfUTCISOWeek());
    var _index3 = _interopRequireDefault(require_requiredArgs());
    function startOfUTCISOWeekYear(dirtyDate) {
      (0, _index3.default)(1, arguments);
      var year = (0, _index.default)(dirtyDate);
      var fourthOfJanuary = /* @__PURE__ */ new Date(0);
      fourthOfJanuary.setUTCFullYear(year, 0, 4);
      fourthOfJanuary.setUTCHours(0, 0, 0, 0);
      var date = (0, _index2.default)(fourthOfJanuary);
      return date;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/getUTCISOWeek/index.js
var require_getUTCISOWeek = __commonJS({
  "node_modules/date-fns/_lib/getUTCISOWeek/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getUTCISOWeek;
    var _index = _interopRequireDefault(require_toDate());
    var _index2 = _interopRequireDefault(require_startOfUTCISOWeek());
    var _index3 = _interopRequireDefault(require_startOfUTCISOWeekYear());
    var _index4 = _interopRequireDefault(require_requiredArgs());
    var MILLISECONDS_IN_WEEK = 6048e5;
    function getUTCISOWeek(dirtyDate) {
      (0, _index4.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate);
      var diff = (0, _index2.default)(date).getTime() - (0, _index3.default)(date).getTime();
      return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/defaultOptions/index.js
var require_defaultOptions = __commonJS({
  "node_modules/date-fns/_lib/defaultOptions/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getDefaultOptions = getDefaultOptions;
    exports.setDefaultOptions = setDefaultOptions;
    var defaultOptions = {};
    function getDefaultOptions() {
      return defaultOptions;
    }
    function setDefaultOptions(newOptions) {
      defaultOptions = newOptions;
    }
  }
});

// node_modules/date-fns/_lib/startOfUTCWeek/index.js
var require_startOfUTCWeek = __commonJS({
  "node_modules/date-fns/_lib/startOfUTCWeek/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = startOfUTCWeek;
    var _index = _interopRequireDefault(require_toDate());
    var _index2 = _interopRequireDefault(require_requiredArgs());
    var _index3 = _interopRequireDefault(require_toInteger());
    var _index4 = require_defaultOptions();
    function startOfUTCWeek(dirtyDate, options) {
      var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
      (0, _index2.default)(1, arguments);
      var defaultOptions = (0, _index4.getDefaultOptions)();
      var weekStartsOn = (0, _index3.default)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
      if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
      }
      var date = (0, _index.default)(dirtyDate);
      var day = date.getUTCDay();
      var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
      date.setUTCDate(date.getUTCDate() - diff);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/getUTCWeekYear/index.js
var require_getUTCWeekYear = __commonJS({
  "node_modules/date-fns/_lib/getUTCWeekYear/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getUTCWeekYear;
    var _index = _interopRequireDefault(require_toDate());
    var _index2 = _interopRequireDefault(require_requiredArgs());
    var _index3 = _interopRequireDefault(require_startOfUTCWeek());
    var _index4 = _interopRequireDefault(require_toInteger());
    var _index5 = require_defaultOptions();
    function getUTCWeekYear(dirtyDate, options) {
      var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate);
      var year = date.getUTCFullYear();
      var defaultOptions = (0, _index5.getDefaultOptions)();
      var firstWeekContainsDate = (0, _index4.default)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
      if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
      }
      var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
      firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
      firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
      var startOfNextYear = (0, _index3.default)(firstWeekOfNextYear, options);
      var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
      firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
      firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
      var startOfThisYear = (0, _index3.default)(firstWeekOfThisYear, options);
      if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
      } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
      } else {
        return year - 1;
      }
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/startOfUTCWeekYear/index.js
var require_startOfUTCWeekYear = __commonJS({
  "node_modules/date-fns/_lib/startOfUTCWeekYear/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = startOfUTCWeekYear;
    var _index = _interopRequireDefault(require_getUTCWeekYear());
    var _index2 = _interopRequireDefault(require_requiredArgs());
    var _index3 = _interopRequireDefault(require_startOfUTCWeek());
    var _index4 = _interopRequireDefault(require_toInteger());
    var _index5 = require_defaultOptions();
    function startOfUTCWeekYear(dirtyDate, options) {
      var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
      (0, _index2.default)(1, arguments);
      var defaultOptions = (0, _index5.getDefaultOptions)();
      var firstWeekContainsDate = (0, _index4.default)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
      var year = (0, _index.default)(dirtyDate, options);
      var firstWeek = /* @__PURE__ */ new Date(0);
      firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
      firstWeek.setUTCHours(0, 0, 0, 0);
      var date = (0, _index3.default)(firstWeek, options);
      return date;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/getUTCWeek/index.js
var require_getUTCWeek = __commonJS({
  "node_modules/date-fns/_lib/getUTCWeek/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getUTCWeek;
    var _index = _interopRequireDefault(require_toDate());
    var _index2 = _interopRequireDefault(require_startOfUTCWeek());
    var _index3 = _interopRequireDefault(require_startOfUTCWeekYear());
    var _index4 = _interopRequireDefault(require_requiredArgs());
    var MILLISECONDS_IN_WEEK = 6048e5;
    function getUTCWeek(dirtyDate, options) {
      (0, _index4.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate);
      var diff = (0, _index2.default)(date, options).getTime() - (0, _index3.default)(date, options).getTime();
      return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/addLeadingZeros/index.js
var require_addLeadingZeros = __commonJS({
  "node_modules/date-fns/_lib/addLeadingZeros/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = addLeadingZeros2;
    function addLeadingZeros2(number, targetLength) {
      var sign = number < 0 ? "-" : "";
      var output = Math.abs(number).toString();
      while (output.length < targetLength) {
        output = "0" + output;
      }
      return sign + output;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/format/lightFormatters/index.js
var require_lightFormatters = __commonJS({
  "node_modules/date-fns/_lib/format/lightFormatters/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = _interopRequireDefault(require_addLeadingZeros());
    var formatters2 = {
      // Year
      y: function y(date, token) {
        var signedYear = date.getUTCFullYear();
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, _index.default)(token === "yy" ? year % 100 : year, token.length);
      },
      // Month
      M: function M(date, token) {
        var month = date.getUTCMonth();
        return token === "M" ? String(month + 1) : (0, _index.default)(month + 1, 2);
      },
      // Day of the month
      d: function d(date, token) {
        return (0, _index.default)(date.getUTCDate(), token.length);
      },
      // AM or PM
      a: function a(date, token) {
        var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (token) {
          case "a":
          case "aa":
            return dayPeriodEnumValue.toUpperCase();
          case "aaa":
            return dayPeriodEnumValue;
          case "aaaaa":
            return dayPeriodEnumValue[0];
          case "aaaa":
          default:
            return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
      },
      // Hour [1-12]
      h: function h(date, token) {
        return (0, _index.default)(date.getUTCHours() % 12 || 12, token.length);
      },
      // Hour [0-23]
      H: function H(date, token) {
        return (0, _index.default)(date.getUTCHours(), token.length);
      },
      // Minute
      m: function m(date, token) {
        return (0, _index.default)(date.getUTCMinutes(), token.length);
      },
      // Second
      s: function s(date, token) {
        return (0, _index.default)(date.getUTCSeconds(), token.length);
      },
      // Fraction of second
      S: function S(date, token) {
        var numberOfDigits = token.length;
        var milliseconds = date.getUTCMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, _index.default)(fractionalSeconds, token.length);
      }
    };
    var _default = formatters2;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/format/formatters/index.js
var require_formatters = __commonJS({
  "node_modules/date-fns/_lib/format/formatters/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = _interopRequireDefault(require_getUTCDayOfYear());
    var _index2 = _interopRequireDefault(require_getUTCISOWeek());
    var _index3 = _interopRequireDefault(require_getUTCISOWeekYear());
    var _index4 = _interopRequireDefault(require_getUTCWeek());
    var _index5 = _interopRequireDefault(require_getUTCWeekYear());
    var _index6 = _interopRequireDefault(require_addLeadingZeros());
    var _index7 = _interopRequireDefault(require_lightFormatters());
    var dayPeriodEnum = {
      am: "am",
      pm: "pm",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    };
    var formatters2 = {
      // Era
      G: function G(date, token, localize2) {
        var era = date.getUTCFullYear() > 0 ? 1 : 0;
        switch (token) {
          case "G":
          case "GG":
          case "GGG":
            return localize2.era(era, {
              width: "abbreviated"
            });
          case "GGGGG":
            return localize2.era(era, {
              width: "narrow"
            });
          case "GGGG":
          default:
            return localize2.era(era, {
              width: "wide"
            });
        }
      },
      // Year
      y: function y(date, token, localize2) {
        if (token === "yo") {
          var signedYear = date.getUTCFullYear();
          var year = signedYear > 0 ? signedYear : 1 - signedYear;
          return localize2.ordinalNumber(year, {
            unit: "year"
          });
        }
        return _index7.default.y(date, token);
      },
      // Local week-numbering year
      Y: function Y(date, token, localize2, options) {
        var signedWeekYear = (0, _index5.default)(date, options);
        var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        if (token === "YY") {
          var twoDigitYear = weekYear % 100;
          return (0, _index6.default)(twoDigitYear, 2);
        }
        if (token === "Yo") {
          return localize2.ordinalNumber(weekYear, {
            unit: "year"
          });
        }
        return (0, _index6.default)(weekYear, token.length);
      },
      // ISO week-numbering year
      R: function R(date, token) {
        var isoWeekYear = (0, _index3.default)(date);
        return (0, _index6.default)(isoWeekYear, token.length);
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
      u: function u(date, token) {
        var year = date.getUTCFullYear();
        return (0, _index6.default)(year, token.length);
      },
      // Quarter
      Q: function Q(date, token, localize2) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch (token) {
          case "Q":
            return String(quarter);
          case "QQ":
            return (0, _index6.default)(quarter, 2);
          case "Qo":
            return localize2.ordinalNumber(quarter, {
              unit: "quarter"
            });
          case "QQQ":
            return localize2.quarter(quarter, {
              width: "abbreviated",
              context: "formatting"
            });
          case "QQQQQ":
            return localize2.quarter(quarter, {
              width: "narrow",
              context: "formatting"
            });
          case "QQQQ":
          default:
            return localize2.quarter(quarter, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Stand-alone quarter
      q: function q(date, token, localize2) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch (token) {
          case "q":
            return String(quarter);
          case "qq":
            return (0, _index6.default)(quarter, 2);
          case "qo":
            return localize2.ordinalNumber(quarter, {
              unit: "quarter"
            });
          case "qqq":
            return localize2.quarter(quarter, {
              width: "abbreviated",
              context: "standalone"
            });
          case "qqqqq":
            return localize2.quarter(quarter, {
              width: "narrow",
              context: "standalone"
            });
          case "qqqq":
          default:
            return localize2.quarter(quarter, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      // Month
      M: function M(date, token, localize2) {
        var month = date.getUTCMonth();
        switch (token) {
          case "M":
          case "MM":
            return _index7.default.M(date, token);
          case "Mo":
            return localize2.ordinalNumber(month + 1, {
              unit: "month"
            });
          case "MMM":
            return localize2.month(month, {
              width: "abbreviated",
              context: "formatting"
            });
          case "MMMMM":
            return localize2.month(month, {
              width: "narrow",
              context: "formatting"
            });
          case "MMMM":
          default:
            return localize2.month(month, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Stand-alone month
      L: function L(date, token, localize2) {
        var month = date.getUTCMonth();
        switch (token) {
          case "L":
            return String(month + 1);
          case "LL":
            return (0, _index6.default)(month + 1, 2);
          case "Lo":
            return localize2.ordinalNumber(month + 1, {
              unit: "month"
            });
          case "LLL":
            return localize2.month(month, {
              width: "abbreviated",
              context: "standalone"
            });
          case "LLLLL":
            return localize2.month(month, {
              width: "narrow",
              context: "standalone"
            });
          case "LLLL":
          default:
            return localize2.month(month, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      // Local week of year
      w: function w(date, token, localize2, options) {
        var week = (0, _index4.default)(date, options);
        if (token === "wo") {
          return localize2.ordinalNumber(week, {
            unit: "week"
          });
        }
        return (0, _index6.default)(week, token.length);
      },
      // ISO week of year
      I: function I(date, token, localize2) {
        var isoWeek = (0, _index2.default)(date);
        if (token === "Io") {
          return localize2.ordinalNumber(isoWeek, {
            unit: "week"
          });
        }
        return (0, _index6.default)(isoWeek, token.length);
      },
      // Day of the month
      d: function d(date, token, localize2) {
        if (token === "do") {
          return localize2.ordinalNumber(date.getUTCDate(), {
            unit: "date"
          });
        }
        return _index7.default.d(date, token);
      },
      // Day of year
      D: function D(date, token, localize2) {
        var dayOfYear = (0, _index.default)(date);
        if (token === "Do") {
          return localize2.ordinalNumber(dayOfYear, {
            unit: "dayOfYear"
          });
        }
        return (0, _index6.default)(dayOfYear, token.length);
      },
      // Day of week
      E: function E(date, token, localize2) {
        var dayOfWeek = date.getUTCDay();
        switch (token) {
          case "E":
          case "EE":
          case "EEE":
            return localize2.day(dayOfWeek, {
              width: "abbreviated",
              context: "formatting"
            });
          case "EEEEE":
            return localize2.day(dayOfWeek, {
              width: "narrow",
              context: "formatting"
            });
          case "EEEEEE":
            return localize2.day(dayOfWeek, {
              width: "short",
              context: "formatting"
            });
          case "EEEE":
          default:
            return localize2.day(dayOfWeek, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Local day of week
      e: function e(date, token, localize2, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch (token) {
          case "e":
            return String(localDayOfWeek);
          case "ee":
            return (0, _index6.default)(localDayOfWeek, 2);
          case "eo":
            return localize2.ordinalNumber(localDayOfWeek, {
              unit: "day"
            });
          case "eee":
            return localize2.day(dayOfWeek, {
              width: "abbreviated",
              context: "formatting"
            });
          case "eeeee":
            return localize2.day(dayOfWeek, {
              width: "narrow",
              context: "formatting"
            });
          case "eeeeee":
            return localize2.day(dayOfWeek, {
              width: "short",
              context: "formatting"
            });
          case "eeee":
          default:
            return localize2.day(dayOfWeek, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Stand-alone local day of week
      c: function c(date, token, localize2, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch (token) {
          case "c":
            return String(localDayOfWeek);
          case "cc":
            return (0, _index6.default)(localDayOfWeek, token.length);
          case "co":
            return localize2.ordinalNumber(localDayOfWeek, {
              unit: "day"
            });
          case "ccc":
            return localize2.day(dayOfWeek, {
              width: "abbreviated",
              context: "standalone"
            });
          case "ccccc":
            return localize2.day(dayOfWeek, {
              width: "narrow",
              context: "standalone"
            });
          case "cccccc":
            return localize2.day(dayOfWeek, {
              width: "short",
              context: "standalone"
            });
          case "cccc":
          default:
            return localize2.day(dayOfWeek, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      // ISO day of week
      i: function i(date, token, localize2) {
        var dayOfWeek = date.getUTCDay();
        var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch (token) {
          case "i":
            return String(isoDayOfWeek);
          case "ii":
            return (0, _index6.default)(isoDayOfWeek, token.length);
          case "io":
            return localize2.ordinalNumber(isoDayOfWeek, {
              unit: "day"
            });
          case "iii":
            return localize2.day(dayOfWeek, {
              width: "abbreviated",
              context: "formatting"
            });
          case "iiiii":
            return localize2.day(dayOfWeek, {
              width: "narrow",
              context: "formatting"
            });
          case "iiiiii":
            return localize2.day(dayOfWeek, {
              width: "short",
              context: "formatting"
            });
          case "iiii":
          default:
            return localize2.day(dayOfWeek, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // AM or PM
      a: function a(date, token, localize2) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch (token) {
          case "a":
          case "aa":
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            });
          case "aaa":
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            }).toLowerCase();
          case "aaaaa":
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "narrow",
              context: "formatting"
            });
          case "aaaa":
          default:
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // AM, PM, midnight, noon
      b: function b(date, token, localize2) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours === 12) {
          dayPeriodEnumValue = dayPeriodEnum.noon;
        } else if (hours === 0) {
          dayPeriodEnumValue = dayPeriodEnum.midnight;
        } else {
          dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        }
        switch (token) {
          case "b":
          case "bb":
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            });
          case "bbb":
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            }).toLowerCase();
          case "bbbbb":
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "narrow",
              context: "formatting"
            });
          case "bbbb":
          default:
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // in the morning, in the afternoon, in the evening, at night
      B: function B(date, token, localize2) {
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
          case "B":
          case "BB":
          case "BBB":
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            });
          case "BBBBB":
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "narrow",
              context: "formatting"
            });
          case "BBBB":
          default:
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Hour [1-12]
      h: function h(date, token, localize2) {
        if (token === "ho") {
          var hours = date.getUTCHours() % 12;
          if (hours === 0)
            hours = 12;
          return localize2.ordinalNumber(hours, {
            unit: "hour"
          });
        }
        return _index7.default.h(date, token);
      },
      // Hour [0-23]
      H: function H(date, token, localize2) {
        if (token === "Ho") {
          return localize2.ordinalNumber(date.getUTCHours(), {
            unit: "hour"
          });
        }
        return _index7.default.H(date, token);
      },
      // Hour [0-11]
      K: function K(date, token, localize2) {
        var hours = date.getUTCHours() % 12;
        if (token === "Ko") {
          return localize2.ordinalNumber(hours, {
            unit: "hour"
          });
        }
        return (0, _index6.default)(hours, token.length);
      },
      // Hour [1-24]
      k: function k(date, token, localize2) {
        var hours = date.getUTCHours();
        if (hours === 0)
          hours = 24;
        if (token === "ko") {
          return localize2.ordinalNumber(hours, {
            unit: "hour"
          });
        }
        return (0, _index6.default)(hours, token.length);
      },
      // Minute
      m: function m(date, token, localize2) {
        if (token === "mo") {
          return localize2.ordinalNumber(date.getUTCMinutes(), {
            unit: "minute"
          });
        }
        return _index7.default.m(date, token);
      },
      // Second
      s: function s(date, token, localize2) {
        if (token === "so") {
          return localize2.ordinalNumber(date.getUTCSeconds(), {
            unit: "second"
          });
        }
        return _index7.default.s(date, token);
      },
      // Fraction of second
      S: function S(date, token) {
        return _index7.default.S(date, token);
      },
      // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
      X: function X(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        if (timezoneOffset === 0) {
          return "Z";
        }
        switch (token) {
          case "X":
            return formatTimezoneWithOptionalMinutes2(timezoneOffset);
          case "XXXX":
          case "XX":
            return formatTimezone2(timezoneOffset);
          case "XXXXX":
          case "XXX":
          default:
            return formatTimezone2(timezoneOffset, ":");
        }
      },
      // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
      x: function x(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch (token) {
          case "x":
            return formatTimezoneWithOptionalMinutes2(timezoneOffset);
          case "xxxx":
          case "xx":
            return formatTimezone2(timezoneOffset);
          case "xxxxx":
          case "xxx":
          default:
            return formatTimezone2(timezoneOffset, ":");
        }
      },
      // Timezone (GMT)
      O: function O(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch (token) {
          case "O":
          case "OO":
          case "OOO":
            return "GMT" + formatTimezoneShort2(timezoneOffset, ":");
          case "OOOO":
          default:
            return "GMT" + formatTimezone2(timezoneOffset, ":");
        }
      },
      // Timezone (specific non-location)
      z: function z(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch (token) {
          case "z":
          case "zz":
          case "zzz":
            return "GMT" + formatTimezoneShort2(timezoneOffset, ":");
          case "zzzz":
          default:
            return "GMT" + formatTimezone2(timezoneOffset, ":");
        }
      },
      // Seconds timestamp
      t: function t(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = Math.floor(originalDate.getTime() / 1e3);
        return (0, _index6.default)(timestamp, token.length);
      },
      // Milliseconds timestamp
      T: function T(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = originalDate.getTime();
        return (0, _index6.default)(timestamp, token.length);
      }
    };
    function formatTimezoneShort2(offset, dirtyDelimiter) {
      var sign = offset > 0 ? "-" : "+";
      var absOffset = Math.abs(offset);
      var hours = Math.floor(absOffset / 60);
      var minutes = absOffset % 60;
      if (minutes === 0) {
        return sign + String(hours);
      }
      var delimiter = dirtyDelimiter || "";
      return sign + String(hours) + delimiter + (0, _index6.default)(minutes, 2);
    }
    function formatTimezoneWithOptionalMinutes2(offset, dirtyDelimiter) {
      if (offset % 60 === 0) {
        var sign = offset > 0 ? "-" : "+";
        return sign + (0, _index6.default)(Math.abs(offset) / 60, 2);
      }
      return formatTimezone2(offset, dirtyDelimiter);
    }
    function formatTimezone2(offset, dirtyDelimiter) {
      var delimiter = dirtyDelimiter || "";
      var sign = offset > 0 ? "-" : "+";
      var absOffset = Math.abs(offset);
      var hours = (0, _index6.default)(Math.floor(absOffset / 60), 2);
      var minutes = (0, _index6.default)(absOffset % 60, 2);
      return sign + hours + delimiter + minutes;
    }
    var _default = formatters2;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/format/longFormatters/index.js
var require_longFormatters = __commonJS({
  "node_modules/date-fns/_lib/format/longFormatters/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var dateLongFormatter = function dateLongFormatter2(pattern, formatLong2) {
      switch (pattern) {
        case "P":
          return formatLong2.date({
            width: "short"
          });
        case "PP":
          return formatLong2.date({
            width: "medium"
          });
        case "PPP":
          return formatLong2.date({
            width: "long"
          });
        case "PPPP":
        default:
          return formatLong2.date({
            width: "full"
          });
      }
    };
    var timeLongFormatter = function timeLongFormatter2(pattern, formatLong2) {
      switch (pattern) {
        case "p":
          return formatLong2.time({
            width: "short"
          });
        case "pp":
          return formatLong2.time({
            width: "medium"
          });
        case "ppp":
          return formatLong2.time({
            width: "long"
          });
        case "pppp":
        default:
          return formatLong2.time({
            width: "full"
          });
      }
    };
    var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong2) {
      var matchResult = pattern.match(/(P+)(p+)?/) || [];
      var datePattern = matchResult[1];
      var timePattern = matchResult[2];
      if (!timePattern) {
        return dateLongFormatter(pattern, formatLong2);
      }
      var dateTimeFormat;
      switch (datePattern) {
        case "P":
          dateTimeFormat = formatLong2.dateTime({
            width: "short"
          });
          break;
        case "PP":
          dateTimeFormat = formatLong2.dateTime({
            width: "medium"
          });
          break;
        case "PPP":
          dateTimeFormat = formatLong2.dateTime({
            width: "long"
          });
          break;
        case "PPPP":
        default:
          dateTimeFormat = formatLong2.dateTime({
            width: "full"
          });
          break;
      }
      return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
    };
    var longFormatters = {
      p: timeLongFormatter,
      P: dateTimeLongFormatter
    };
    var _default = longFormatters;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js
var require_getTimezoneOffsetInMilliseconds = __commonJS({
  "node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getTimezoneOffsetInMilliseconds2;
    function getTimezoneOffsetInMilliseconds2(date) {
      var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
      utcDate.setUTCFullYear(date.getFullYear());
      return date.getTime() - utcDate.getTime();
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/protectedTokens/index.js
var require_protectedTokens = __commonJS({
  "node_modules/date-fns/_lib/protectedTokens/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isProtectedDayOfYearToken = isProtectedDayOfYearToken;
    exports.isProtectedWeekYearToken = isProtectedWeekYearToken;
    exports.throwProtectedError = throwProtectedError;
    var protectedDayOfYearTokens = ["D", "DD"];
    var protectedWeekYearTokens = ["YY", "YYYY"];
    function isProtectedDayOfYearToken(token) {
      return protectedDayOfYearTokens.indexOf(token) !== -1;
    }
    function isProtectedWeekYearToken(token) {
      return protectedWeekYearTokens.indexOf(token) !== -1;
    }
    function throwProtectedError(token, format3, input) {
      if (token === "YYYY") {
        throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format3, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
      } else if (token === "YY") {
        throw new RangeError("Use `yy` instead of `YY` (in `".concat(format3, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
      } else if (token === "D") {
        throw new RangeError("Use `d` instead of `D` (in `".concat(format3, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
      } else if (token === "DD") {
        throw new RangeError("Use `dd` instead of `DD` (in `".concat(format3, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
      }
    }
  }
});

// node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js
var require_formatDistance = __commonJS({
  "node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var formatDistanceLocale2 = {
      lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
      },
      xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
      },
      halfAMinute: "half a minute",
      lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
      },
      xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
      },
      aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
      },
      xHours: {
        one: "1 hour",
        other: "{{count}} hours"
      },
      xDays: {
        one: "1 day",
        other: "{{count}} days"
      },
      aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
      },
      xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
      },
      aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
      },
      xMonths: {
        one: "1 month",
        other: "{{count}} months"
      },
      aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
      },
      xYears: {
        one: "1 year",
        other: "{{count}} years"
      },
      overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
      },
      almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
      }
    };
    var formatDistance3 = function formatDistance4(token, count, options) {
      var result;
      var tokenValue = formatDistanceLocale2[token];
      if (typeof tokenValue === "string") {
        result = tokenValue;
      } else if (count === 1) {
        result = tokenValue.one;
      } else {
        result = tokenValue.other.replace("{{count}}", count.toString());
      }
      if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
          return "in " + result;
        } else {
          return result + " ago";
        }
      }
      return result;
    };
    var _default = formatDistance3;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js
var require_buildFormatLongFn = __commonJS({
  "node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = buildFormatLongFn2;
    function buildFormatLongFn2(args) {
      return function() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format3 = args.formats[width] || args.formats[args.defaultWidth];
        return format3;
      };
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/en-US/_lib/formatLong/index.js
var require_formatLong = __commonJS({
  "node_modules/date-fns/locale/en-US/_lib/formatLong/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = _interopRequireDefault(require_buildFormatLongFn());
    var dateFormats2 = {
      full: "EEEE, MMMM do, y",
      long: "MMMM do, y",
      medium: "MMM d, y",
      short: "MM/dd/yyyy"
    };
    var timeFormats2 = {
      full: "h:mm:ss a zzzz",
      long: "h:mm:ss a z",
      medium: "h:mm:ss a",
      short: "h:mm a"
    };
    var dateTimeFormats2 = {
      full: "{{date}} 'at' {{time}}",
      long: "{{date}} 'at' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    };
    var formatLong2 = {
      date: (0, _index.default)({
        formats: dateFormats2,
        defaultWidth: "full"
      }),
      time: (0, _index.default)({
        formats: timeFormats2,
        defaultWidth: "full"
      }),
      dateTime: (0, _index.default)({
        formats: dateTimeFormats2,
        defaultWidth: "full"
      })
    };
    var _default = formatLong2;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js
var require_formatRelative = __commonJS({
  "node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var formatRelativeLocale2 = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P"
    };
    var formatRelative3 = function formatRelative4(token, _date, _baseDate, _options) {
      return formatRelativeLocale2[token];
    };
    var _default = formatRelative3;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js
var require_buildLocalizeFn = __commonJS({
  "node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = buildLocalizeFn2;
    function buildLocalizeFn2(args) {
      return function(dirtyIndex, options) {
        var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
        var valuesArray;
        if (context === "formatting" && args.formattingValues) {
          var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
          var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
          valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
          var _defaultWidth = args.defaultWidth;
          var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
          valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
        return valuesArray[index];
      };
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/en-US/_lib/localize/index.js
var require_localize = __commonJS({
  "node_modules/date-fns/locale/en-US/_lib/localize/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = _interopRequireDefault(require_buildLocalizeFn());
    var eraValues2 = {
      narrow: ["B", "A"],
      abbreviated: ["BC", "AD"],
      wide: ["Before Christ", "Anno Domini"]
    };
    var quarterValues2 = {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["Q1", "Q2", "Q3", "Q4"],
      wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    };
    var monthValues2 = {
      narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    };
    var dayValues2 = {
      narrow: ["S", "M", "T", "W", "T", "F", "S"],
      short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    };
    var dayPeriodValues2 = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      }
    };
    var formattingDayPeriodValues2 = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      }
    };
    var ordinalNumber3 = function ordinalNumber4(dirtyNumber, _options) {
      var number = Number(dirtyNumber);
      var rem100 = number % 100;
      if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
          case 1:
            return number + "st";
          case 2:
            return number + "nd";
          case 3:
            return number + "rd";
        }
      }
      return number + "th";
    };
    var localize2 = {
      ordinalNumber: ordinalNumber3,
      era: (0, _index.default)({
        values: eraValues2,
        defaultWidth: "wide"
      }),
      quarter: (0, _index.default)({
        values: quarterValues2,
        defaultWidth: "wide",
        argumentCallback: function argumentCallback2(quarter) {
          return quarter - 1;
        }
      }),
      month: (0, _index.default)({
        values: monthValues2,
        defaultWidth: "wide"
      }),
      day: (0, _index.default)({
        values: dayValues2,
        defaultWidth: "wide"
      }),
      dayPeriod: (0, _index.default)({
        values: dayPeriodValues2,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues2,
        defaultFormattingWidth: "wide"
      })
    };
    var _default = localize2;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/_lib/buildMatchFn/index.js
var require_buildMatchFn = __commonJS({
  "node_modules/date-fns/locale/_lib/buildMatchFn/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = buildMatchFn2;
    function buildMatchFn2(args) {
      return function(string) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) {
          return null;
        }
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var key = Array.isArray(parsePatterns) ? findIndex2(parsePatterns, function(pattern) {
          return pattern.test(matchedString);
        }) : findKey2(parsePatterns, function(pattern) {
          return pattern.test(matchedString);
        });
        var value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
          value,
          rest
        };
      };
    }
    function findKey2(object, predicate) {
      for (var key in object) {
        if (object.hasOwnProperty(key) && predicate(object[key])) {
          return key;
        }
      }
      return void 0;
    }
    function findIndex2(array, predicate) {
      for (var key = 0; key < array.length; key++) {
        if (predicate(array[key])) {
          return key;
        }
      }
      return void 0;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js
var require_buildMatchPatternFn = __commonJS({
  "node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = buildMatchPatternFn2;
    function buildMatchPatternFn2(args) {
      return function(string) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var matchResult = string.match(args.matchPattern);
        if (!matchResult)
          return null;
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult)
          return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
          value,
          rest
        };
      };
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/en-US/_lib/match/index.js
var require_match = __commonJS({
  "node_modules/date-fns/locale/en-US/_lib/match/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = _interopRequireDefault(require_buildMatchFn());
    var _index2 = _interopRequireDefault(require_buildMatchPatternFn());
    var matchOrdinalNumberPattern2 = /^(\d+)(th|st|nd|rd)?/i;
    var parseOrdinalNumberPattern2 = /\d+/i;
    var matchEraPatterns2 = {
      narrow: /^(b|a)/i,
      abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
      wide: /^(before christ|before common era|anno domini|common era)/i
    };
    var parseEraPatterns2 = {
      any: [/^b/i, /^(a|c)/i]
    };
    var matchQuarterPatterns2 = {
      narrow: /^[1234]/i,
      abbreviated: /^q[1234]/i,
      wide: /^[1234](th|st|nd|rd)? quarter/i
    };
    var parseQuarterPatterns2 = {
      any: [/1/i, /2/i, /3/i, /4/i]
    };
    var matchMonthPatterns2 = {
      narrow: /^[jfmasond]/i,
      abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
      wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    };
    var parseMonthPatterns2 = {
      narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
      any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    };
    var matchDayPatterns2 = {
      narrow: /^[smtwf]/i,
      short: /^(su|mo|tu|we|th|fr|sa)/i,
      abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
      wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    };
    var parseDayPatterns2 = {
      narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
      any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    };
    var matchDayPeriodPatterns2 = {
      narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
      any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    };
    var parseDayPeriodPatterns2 = {
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
    var match2 = {
      ordinalNumber: (0, _index2.default)({
        matchPattern: matchOrdinalNumberPattern2,
        parsePattern: parseOrdinalNumberPattern2,
        valueCallback: function valueCallback3(value) {
          return parseInt(value, 10);
        }
      }),
      era: (0, _index.default)({
        matchPatterns: matchEraPatterns2,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns2,
        defaultParseWidth: "any"
      }),
      quarter: (0, _index.default)({
        matchPatterns: matchQuarterPatterns2,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns2,
        defaultParseWidth: "any",
        valueCallback: function valueCallback3(index) {
          return index + 1;
        }
      }),
      month: (0, _index.default)({
        matchPatterns: matchMonthPatterns2,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns2,
        defaultParseWidth: "any"
      }),
      day: (0, _index.default)({
        matchPatterns: matchDayPatterns2,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns2,
        defaultParseWidth: "any"
      }),
      dayPeriod: (0, _index.default)({
        matchPatterns: matchDayPeriodPatterns2,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns2,
        defaultParseWidth: "any"
      })
    };
    var _default = match2;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/en-US/index.js
var require_en_US = __commonJS({
  "node_modules/date-fns/locale/en-US/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = _interopRequireDefault(require_formatDistance());
    var _index2 = _interopRequireDefault(require_formatLong());
    var _index3 = _interopRequireDefault(require_formatRelative());
    var _index4 = _interopRequireDefault(require_localize());
    var _index5 = _interopRequireDefault(require_match());
    var locale2 = {
      code: "en-US",
      formatDistance: _index.default,
      formatLong: _index2.default,
      formatRelative: _index3.default,
      localize: _index4.default,
      match: _index5.default,
      options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
      }
    };
    var _default = locale2;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/defaultLocale/index.js
var require_defaultLocale = __commonJS({
  "node_modules/date-fns/_lib/defaultLocale/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = _interopRequireDefault(require_en_US());
    var _default = _index.default;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/format/index.js
var require_format = __commonJS({
  "node_modules/date-fns/format/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = format3;
    var _index = _interopRequireDefault(require_isValid());
    var _index2 = _interopRequireDefault(require_subMilliseconds());
    var _index3 = _interopRequireDefault(require_toDate());
    var _index4 = _interopRequireDefault(require_formatters());
    var _index5 = _interopRequireDefault(require_longFormatters());
    var _index6 = _interopRequireDefault(require_getTimezoneOffsetInMilliseconds());
    var _index7 = require_protectedTokens();
    var _index8 = _interopRequireDefault(require_toInteger());
    var _index9 = _interopRequireDefault(require_requiredArgs());
    var _index10 = require_defaultOptions();
    var _index11 = _interopRequireDefault(require_defaultLocale());
    var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
    var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    var escapedStringRegExp = /^'([^]*?)'?$/;
    var doubleQuoteRegExp = /''/g;
    var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
    function format3(dirtyDate, dirtyFormatStr, options) {
      var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
      (0, _index9.default)(2, arguments);
      var formatStr = String(dirtyFormatStr);
      var defaultOptions = (0, _index10.getDefaultOptions)();
      var locale2 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _index11.default;
      var firstWeekContainsDate = (0, _index8.default)((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
      if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
      }
      var weekStartsOn = (0, _index8.default)((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
      if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
      }
      if (!locale2.localize) {
        throw new RangeError("locale must contain localize property");
      }
      if (!locale2.formatLong) {
        throw new RangeError("locale must contain formatLong property");
      }
      var originalDate = (0, _index3.default)(dirtyDate);
      if (!(0, _index.default)(originalDate)) {
        throw new RangeError("Invalid time value");
      }
      var timezoneOffset = (0, _index6.default)(originalDate);
      var utcDate = (0, _index2.default)(originalDate, timezoneOffset);
      var formatterOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale: locale2,
        _originalDate: originalDate
      };
      var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
          var longFormatter = _index5.default[firstCharacter];
          return longFormatter(substring, locale2.formatLong);
        }
        return substring;
      }).join("").match(formattingTokensRegExp).map(function(substring) {
        if (substring === "''") {
          return "'";
        }
        var firstCharacter = substring[0];
        if (firstCharacter === "'") {
          return cleanEscapedString(substring);
        }
        var formatter = _index4.default[firstCharacter];
        if (formatter) {
          if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0, _index7.isProtectedWeekYearToken)(substring)) {
            (0, _index7.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
          }
          if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0, _index7.isProtectedDayOfYearToken)(substring)) {
            (0, _index7.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
          }
          return formatter(utcDate, substring, locale2.localize, formatterOptions);
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        return substring;
      }).join("");
      return result;
    }
    function cleanEscapedString(input) {
      var matched = input.match(escapedStringRegExp);
      if (!matched) {
        return input;
      }
      return matched[1].replace(doubleQuoteRegExp, "'");
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/assign/index.js
var require_assign = __commonJS({
  "node_modules/date-fns/_lib/assign/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = assign;
    function assign(target, object) {
      if (target == null) {
        throw new TypeError("assign requires that input parameter not be null or undefined");
      }
      for (var property in object) {
        if (Object.prototype.hasOwnProperty.call(object, property)) {
          ;
          target[property] = object[property];
        }
      }
      return target;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/cloneObject/index.js
var require_cloneObject = __commonJS({
  "node_modules/date-fns/_lib/cloneObject/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = cloneObject2;
    var _index = _interopRequireDefault(require_assign());
    function cloneObject2(object) {
      return (0, _index.default)({}, object);
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/esm/_lib/toInteger/index.js
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

// node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}

// node_modules/date-fns/esm/toDate/index.js
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return /* @__PURE__ */ new Date(NaN);
  }
}

// node_modules/date-fns/esm/addDays/index.js
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

// node_modules/date-fns/esm/addMonths/index.js
function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  var dayOfMonth = date.getDate();
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

// node_modules/date-fns/esm/isSunday/index.js
function isSunday(dirtyDate) {
  requiredArgs(1, arguments);
  return toDate(dirtyDate).getDay() === 0;
}

// node_modules/date-fns/esm/startOfDay/index.js
function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/constants/index.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
var minTime = -maxTime;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;

// node_modules/date-fns/esm/isSameDay/index.js
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
  var dateRightStartOfDay = startOfDay(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

// node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format3 = args.formats[width] || args.formats[args.defaultWidth];
    return format3;
  };
}

// node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
  return function(dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

// node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
function buildMatchFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}

// node_modules/date-fns/esm/isAfter/index.js
function isAfter(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

// node_modules/date-fns/esm/isBefore/index.js
function isBefore(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

// node_modules/date-fns/esm/isToday/index.js
function isToday(dirtyDate) {
  requiredArgs(1, arguments);
  return isSameDay(dirtyDate, Date.now());
}

// node_modules/date-fns/esm/parseISO/index.js
function parseISO(argument, options) {
  var _options$additionalDi;
  requiredArgs(1, arguments);
  var additionalDigits = toInteger((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return /* @__PURE__ */ new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    var result = /* @__PURE__ */ new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
  var captures = dateString.match(regex);
  if (!captures)
    return {
      year: NaN,
      restDateString: ""
    };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  if (year === null)
    return /* @__PURE__ */ new Date(NaN);
  var captures = dateString.match(dateRegex);
  if (!captures)
    return /* @__PURE__ */ new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = /* @__PURE__ */ new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures)
    return NaN;
  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1e3;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z")
    return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures)
    return 0;
  var sign = captures[1] === "+" ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// node_modules/date-fns-tz/esm/format/index.js
var import_format = __toESM(require_format(), 1);

// node_modules/date-fns-tz/esm/_lib/tzIntlTimeZoneName/index.js
function tzIntlTimeZoneName(length, date, options) {
  var dtf = getDTF(length, options.timeZone, options.locale);
  return dtf.formatToParts ? partsTimeZone(dtf, date) : hackyTimeZone(dtf, date);
}
function partsTimeZone(dtf, date) {
  var formatted = dtf.formatToParts(date);
  for (var i = formatted.length - 1; i >= 0; --i) {
    if (formatted[i].type === "timeZoneName") {
      return formatted[i].value;
    }
  }
}
function hackyTimeZone(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, "");
  var tzNameMatch = / [\w-+ ]+$/.exec(formatted);
  return tzNameMatch ? tzNameMatch[0].substr(1) : "";
}
function getDTF(length, timeZone, locale2) {
  if (locale2 && !locale2.code) {
    throw new Error(
      "date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`"
    );
  }
  return new Intl.DateTimeFormat(locale2 ? [locale2.code, "en-US"] : void 0, {
    timeZone,
    timeZoneName: length
  });
}

// node_modules/date-fns-tz/esm/_lib/tzTokenizeDate/index.js
function tzTokenizeDate(date, timeZone) {
  var dtf = getDateTimeFormat(timeZone);
  return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function partsOffset(dtf, date) {
  try {
    var formatted = dtf.formatToParts(date);
    var filled = [];
    for (var i = 0; i < formatted.length; i++) {
      var pos = typeToPos[formatted[i].type];
      if (pos >= 0) {
        filled[pos] = parseInt(formatted[i].value, 10);
      }
    }
    return filled;
  } catch (error) {
    if (error instanceof RangeError) {
      return [NaN];
    }
    throw error;
  }
}
function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, "");
  var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
  return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]];
}
var dtfCache = {};
function getDateTimeFormat(timeZone) {
  if (!dtfCache[timeZone]) {
    var testDateFormatted = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z"));
    var hourCycleSupported = testDateFormatted === "06/25/2014, 00:00:00" || testDateFormatted === "\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";
    dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return dtfCache[timeZone];
}

// node_modules/date-fns-tz/esm/_lib/newDateUTC/index.js
function newDateUTC(fullYear, month, day, hour, minute, second, millisecond) {
  var utcDate = /* @__PURE__ */ new Date(0);
  utcDate.setUTCFullYear(fullYear, month, day);
  utcDate.setUTCHours(hour, minute, second, millisecond);
  return utcDate;
}

// node_modules/date-fns-tz/esm/_lib/tzParseTimezone/index.js
var MILLISECONDS_IN_HOUR = 36e5;
var MILLISECONDS_IN_MINUTE = 6e4;
var patterns2 = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function tzParseTimezone(timezoneString, date, isUtcDate) {
  var token;
  var absoluteOffset;
  if (!timezoneString) {
    return 0;
  }
  token = patterns2.timezoneZ.exec(timezoneString);
  if (token) {
    return 0;
  }
  var hours;
  token = patterns2.timezoneHH.exec(timezoneString);
  if (token) {
    hours = parseInt(token[1], 10);
    if (!validateTimezone2(hours)) {
      return NaN;
    }
    return -(hours * MILLISECONDS_IN_HOUR);
  }
  token = patterns2.timezoneHHMM.exec(timezoneString);
  if (token) {
    hours = parseInt(token[1], 10);
    var minutes = parseInt(token[2], 10);
    if (!validateTimezone2(hours, minutes)) {
      return NaN;
    }
    absoluteOffset = Math.abs(hours) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    return hours > 0 ? -absoluteOffset : absoluteOffset;
  }
  if (isValidTimezoneIANAString(timezoneString)) {
    date = new Date(date || Date.now());
    var utcDate = isUtcDate ? date : toUtcDate(date);
    var offset = calcOffset(utcDate, timezoneString);
    var fixedOffset = isUtcDate ? offset : fixOffset(date, offset, timezoneString);
    return -fixedOffset;
  }
  return NaN;
}
function toUtcDate(date) {
  return newDateUTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
}
function calcOffset(date, timezoneString) {
  var tokens = tzTokenizeDate(date, timezoneString);
  var asUTC = newDateUTC(
    tokens[0],
    tokens[1] - 1,
    tokens[2],
    tokens[3] % 24,
    tokens[4],
    tokens[5],
    0
  ).getTime();
  var asTS = date.getTime();
  var over = asTS % 1e3;
  asTS -= over >= 0 ? over : 1e3 + over;
  return asUTC - asTS;
}
function fixOffset(date, offset, timezoneString) {
  var localTS = date.getTime();
  var utcGuess = localTS - offset;
  var o2 = calcOffset(new Date(utcGuess), timezoneString);
  if (offset === o2) {
    return offset;
  }
  utcGuess -= o2 - offset;
  var o3 = calcOffset(new Date(utcGuess), timezoneString);
  if (o2 === o3) {
    return o2;
  }
  return Math.max(o2, o3);
}
function validateTimezone2(hours, minutes) {
  return -23 <= hours && hours <= 23 && (minutes == null || 0 <= minutes && minutes <= 59);
}
var validIANATimezoneCache = {};
function isValidTimezoneIANAString(timeZoneString) {
  if (validIANATimezoneCache[timeZoneString])
    return true;
  try {
    new Intl.DateTimeFormat(void 0, { timeZone: timeZoneString });
    validIANATimezoneCache[timeZoneString] = true;
    return true;
  } catch (error) {
    return false;
  }
}

// node_modules/date-fns-tz/esm/format/formatters/index.js
var MILLISECONDS_IN_MINUTE2 = 60 * 1e3;
var formatters = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, localize2, options) {
    var timezoneOffset = getTimeZoneOffset(options.timeZone, options._originalDate || date);
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, localize2, options) {
    var timezoneOffset = getTimeZoneOffset(options.timeZone, options._originalDate || date);
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, localize2, options) {
    var timezoneOffset = getTimeZoneOffset(options.timeZone, options._originalDate || date);
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, localize2, options) {
    var originalDate = options._originalDate || date;
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return tzIntlTimeZoneName("short", originalDate, options);
      case "zzzz":
      default:
        return tzIntlTimeZoneName("long", originalDate, options);
    }
  }
};
function getTimeZoneOffset(timeZone, originalDate) {
  var timeZoneOffset = timeZone ? tzParseTimezone(timeZone, originalDate, true) / MILLISECONDS_IN_MINUTE2 : originalDate.getTimezoneOffset();
  if (Number.isNaN(timeZoneOffset)) {
    throw new RangeError("Invalid time zone specified: " + timeZone);
  }
  return timeZoneOffset;
}
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}
function formatTimezone(offset, dirtyDelimeter) {
  var delimeter = dirtyDelimeter || "";
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(Math.floor(absOffset % 60), 2);
  return sign + hours + delimeter + minutes;
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimeter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimeter);
}
function formatTimezoneShort(offset, dirtyDelimeter) {
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimeter = dirtyDelimeter || "";
  return sign + String(hours) + delimeter + addLeadingZeros(minutes, 2);
}
var formatters_default = formatters;

// node_modules/date-fns-tz/esm/toDate/index.js
var import_toInteger4 = __toESM(require_toInteger(), 1);
var import_getTimezoneOffsetInMilliseconds = __toESM(require_getTimezoneOffsetInMilliseconds(), 1);

// node_modules/date-fns-tz/esm/_lib/tzPattern/index.js
var tzPattern = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
var tzPattern_default = tzPattern;

// node_modules/date-fns-tz/esm/toDate/index.js
var MILLISECONDS_IN_HOUR2 = 36e5;
var MILLISECONDS_IN_MINUTE3 = 6e4;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns3 = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
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
  // time zone tokens (to identify the presence of a tz)
  timeZone: tzPattern_default
};
function toDate2(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  if (argument === null) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : (0, import_toInteger4.default)(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (argument instanceof Date || typeof argument === "object" && Object.prototype.toString.call(argument) === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || Object.prototype.toString.call(argument) === "[object Number]") {
    return new Date(argument);
  } else if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var dateStrings = splitDateString2(argument);
  var parseYearResult = parseYear2(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;
  var date = parseDate2(restDateString, year);
  if (isNaN(date)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;
    if (dateStrings.time) {
      time = parseTime2(dateStrings.time);
      if (isNaN(time)) {
        return /* @__PURE__ */ new Date(NaN);
      }
    }
    if (dateStrings.timeZone || options.timeZone) {
      offset = tzParseTimezone(dateStrings.timeZone || options.timeZone, new Date(timestamp + time));
      if (isNaN(offset)) {
        return /* @__PURE__ */ new Date(NaN);
      }
    } else {
      offset = (0, import_getTimezoneOffsetInMilliseconds.default)(new Date(timestamp + time));
      offset = (0, import_getTimezoneOffsetInMilliseconds.default)(new Date(timestamp + time + offset));
    }
    return new Date(timestamp + time + offset);
  } else {
    return /* @__PURE__ */ new Date(NaN);
  }
}
function splitDateString2(dateString) {
  var dateStrings = {};
  var parts = patterns3.dateTimePattern.exec(dateString);
  var timeString;
  if (!parts) {
    parts = patterns3.datePattern.exec(dateString);
    if (parts) {
      dateStrings.date = parts[1];
      timeString = parts[2];
    } else {
      dateStrings.date = null;
      timeString = dateString;
    }
  } else {
    dateStrings.date = parts[1];
    timeString = parts[3];
  }
  if (timeString) {
    var token = patterns3.timeZone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timeZone = token[1].trim();
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear2(dateString, additionalDigits) {
  var patternYYY = patterns3.YYY[additionalDigits];
  var patternYYYYY = patterns3.YYYYY[additionalDigits];
  var token;
  token = patterns3.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  }
  token = patterns3.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  }
  return {
    year: null
  };
}
function parseDate2(dateString, year) {
  if (year === null) {
    return null;
  }
  var token;
  var date;
  var month;
  var week;
  if (dateString.length === 0) {
    date = /* @__PURE__ */ new Date(0);
    date.setUTCFullYear(year);
    return date;
  }
  token = patterns3.MM.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token[1], 10) - 1;
    if (!validateDate2(year, month)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month);
    return date;
  }
  token = patterns3.DDD.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    var dayOfYear = parseInt(token[1], 10);
    if (!validateDayOfYearDate2(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }
  token = patterns3.MMDD.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);
    if (!validateDate2(year, month, day)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, day);
    return date;
  }
  token = patterns3.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    if (!validateWeekDate2(year, week)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear2(year, week);
  }
  token = patterns3.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;
    if (!validateWeekDate2(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear2(year, week, dayOfWeek);
  }
  return null;
}
function parseTime2(timeString) {
  var token;
  var hours;
  var minutes;
  token = patterns3.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(",", "."));
    if (!validateTime2(hours)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR2;
  }
  token = patterns3.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(",", "."));
    if (!validateTime2(hours, minutes)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR2 + minutes * MILLISECONDS_IN_MINUTE3;
  }
  token = patterns3.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(",", "."));
    if (!validateTime2(hours, minutes, seconds)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR2 + minutes * MILLISECONDS_IN_MINUTE3 + seconds * 1e3;
  }
  return null;
}
function dayOfISOWeekYear2(isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex2(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate2(year, month, date) {
  if (month < 0 || month > 11) {
    return false;
  }
  if (date != null) {
    if (date < 1) {
      return false;
    }
    var isLeapYear = isLeapYearIndex2(year);
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false;
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false;
    }
  }
  return true;
}
function validateDayOfYearDate2(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false;
  }
  var isLeapYear = isLeapYearIndex2(year);
  if (isLeapYear && dayOfYear > 366) {
    return false;
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false;
  }
  return true;
}
function validateWeekDate2(year, week, day) {
  if (week < 0 || week > 52) {
    return false;
  }
  if (day != null && (day < 0 || day > 6)) {
    return false;
  }
  return true;
}
function validateTime2(hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false;
  }
  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false;
  }
  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false;
  }
  return true;
}

// node_modules/date-fns-tz/esm/format/index.js
var tzFormattingTokensRegExp = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var matches = formatStr.match(tzFormattingTokensRegExp);
  if (matches) {
    var date = toDate2(dirtyDate, options);
    formatStr = matches.reduce(function(result, token) {
      if (token[0] === "'") {
        return result;
      }
      var pos = result.indexOf(token);
      var precededByQuotedSection = result[pos - 1] === "'";
      var replaced = result.replace(
        token,
        "'" + formatters_default[token[0]](date, token, null, options) + "'"
      );
      return precededByQuotedSection ? replaced.substring(0, pos - 1) + replaced.substring(pos + 1) : replaced;
    }, formatStr);
  }
  return (0, import_format.default)(dirtyDate, formatStr, options);
}

// node_modules/date-fns-tz/esm/utcToZonedTime/index.js
function utcToZonedTime(dirtyDate, timeZone, options) {
  var date = toDate2(dirtyDate, options);
  var offsetMilliseconds = tzParseTimezone(timeZone, date, true);
  var d = new Date(date.getTime() - offsetMilliseconds);
  var resultDate = /* @__PURE__ */ new Date(0);
  resultDate.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  resultDate.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
  return resultDate;
}

// node_modules/date-fns-tz/esm/zonedTimeToUtc/index.js
var import_cloneObject = __toESM(require_cloneObject(), 1);
function zonedTimeToUtc(date, timeZone, options) {
  if (typeof date === "string" && !date.match(tzPattern_default)) {
    var extendedOptions = (0, import_cloneObject.default)(options);
    extendedOptions.timeZone = timeZone;
    return toDate2(date, extendedOptions);
  }
  var d = toDate2(date, options);
  var utc = newDateUTC(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    d.getHours(),
    d.getMinutes(),
    d.getSeconds(),
    d.getMilliseconds()
  ).getTime();
  var offsetMilliseconds = tzParseTimezone(timeZone, new Date(utc));
  return new Date(utc + offsetMilliseconds);
}

// node_modules/date-fns/esm/locale/pt-BR/_lib/formatDistance/index.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "menos de um segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "meio minuto",
  lessThanXMinutes: {
    one: "menos de um minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "cerca de 1 hora",
    other: "cerca de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 dia",
    other: "{{count}} dias"
  },
  aboutXWeeks: {
    one: "cerca de 1 semana",
    other: "cerca de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "cerca de 1 m\xEAs",
    other: "cerca de {{count}} meses"
  },
  xMonths: {
    one: "1 m\xEAs",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "cerca de 1 ano",
    other: "cerca de {{count}} anos"
  },
  xYears: {
    one: "1 ano",
    other: "{{count}} anos"
  },
  overXYears: {
    one: "mais de 1 ano",
    other: "mais de {{count}} anos"
  },
  almostXYears: {
    one: "quase 1 ano",
    other: "quase {{count}} anos"
  }
};
var formatDistance = function formatDistance2(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "em " + result;
    } else {
      return "h\xE1 " + result;
    }
  }
  return result;
};
var formatDistance_default = formatDistance;

// node_modules/date-fns/esm/locale/pt-BR/_lib/formatLong/index.js
var dateFormats = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
};
var timeFormats = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
};
var dateTimeFormats = {
  full: "{{date}} '\xE0s' {{time}}",
  long: "{{date}} '\xE0s' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatLong_default = formatLong;

// node_modules/date-fns/esm/locale/pt-BR/_lib/formatRelative/index.js
var formatRelativeLocale = {
  lastWeek: function lastWeek(date) {
    var weekday = date.getUTCDay();
    var last = weekday === 0 || weekday === 6 ? "\xFAltimo" : "\xFAltima";
    return "'" + last + "' eeee '\xE0s' p";
  },
  yesterday: "'ontem \xE0s' p",
  today: "'hoje \xE0s' p",
  tomorrow: "'amanh\xE3 \xE0s' p",
  nextWeek: "eeee '\xE0s' p",
  other: "P"
};
var formatRelative = function formatRelative2(token, date, _baseDate, _options) {
  var format3 = formatRelativeLocale[token];
  if (typeof format3 === "function") {
    return format3(date);
  }
  return format3;
};
var formatRelative_default = formatRelative;

// node_modules/date-fns/esm/locale/pt-BR/_lib/localize/index.js
var eraValues = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1\xBA trimestre", "2\xBA trimestre", "3\xBA trimestre", "4\xBA trimestre"]
};
var monthValues = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  wide: ["janeiro", "fevereiro", "mar\xE7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
};
var dayValues = {
  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
  abbreviated: ["domingo", "segunda", "ter\xE7a", "quarta", "quinta", "sexta", "s\xE1bado"],
  wide: ["domingo", "segunda-feira", "ter\xE7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\xE1bado"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "manh\xE3",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "manh\xE3",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "manh\xE3",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "da manh\xE3",
    afternoon: "da tarde",
    evening: "da tarde",
    night: "da noite"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "da manh\xE3",
    afternoon: "da tarde",
    evening: "da tarde",
    night: "da noite"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "da manh\xE3",
    afternoon: "da tarde",
    evening: "da tarde",
    night: "da noite"
  }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  if ((options === null || options === void 0 ? void 0 : options.unit) === "week") {
    return number + "\xAA";
  }
  return number + "\xBA";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var localize_default = localize;

// node_modules/date-fns/esm/locale/pt-BR/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)[ºªo]?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
};
var parseEraPatterns = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i]
};
var matchDayPatterns = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
};
var parseDayPatterns = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn|^meia[-\s]noite/i,
    noon: /^md|^meio[-\s]dia/i,
    morning: /manhã/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noite/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function valueCallback2(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var match_default = match;

// node_modules/date-fns/esm/locale/pt-BR/index.js
var locale = {
  code: "pt-BR",
  formatDistance: formatDistance_default,
  formatLong: formatLong_default,
  formatRelative: formatRelative_default,
  localize: localize_default,
  match: match_default,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var pt_BR_default = locale;

// src/domain/shared/date-manipulator.ts
var timezone = "UTC";
function wrapper() {
  return {
    toZonedTime(date) {
      return utcToZonedTime(date, timezone);
    },
    toUTC(date) {
      return zonedTimeToUtc(date, timezone);
    },
    isAfter(date, dateToCompare) {
      const x = parseISO(date);
      const y = parseISO(dateToCompare);
      return isAfter(x, y);
    },
    isBefore(date, dateToCompare) {
      const x = this.parseISOStringToDate(date);
      const y = this.parseISOStringToDate(dateToCompare);
      return isBefore(x, y);
    },
    parseISOStringToDate(str) {
      if (!str) {
        throw new Error("Date string is undefined");
      }
      return parseISO(str);
    },
    addMonthsToDate(date, amount) {
      return this.parseDateToString(
        addMonths(this.parseISOStringToDate(date), amount)
      );
    },
    parseDateToString(date) {
      return date.toISOString();
    },
    addDaysToDate(date, amount) {
      return this.parseDateToString(
        addDays(this.parseISOStringToDate(date), amount)
      );
    },
    isSunday(date) {
      return isSunday(this.parseISOStringToDate(date));
    },
    isSameDay(x, y) {
      return isSameDay(
        this.parseISOStringToDate(x),
        this.parseISOStringToDate(y)
      );
    },
    format(date, format3) {
      if (typeof date === "string") {
        return format(this.toZonedTime(date), format3, {
          locale: pt_BR_default
        });
      }
      return format(date, format3, {
        locale: pt_BR_default
      });
    },
    isToday(date) {
      if (typeof date === "string") {
        return isToday(this.toZonedTime(date));
      }
      return isToday(date);
    }
  };
}
var dateManipulator = wrapper();

// app/components/hooks/useDate.ts
function format2(date, format3) {
  return dateManipulator.format(date, format3 != null ? format3 : "yyyy-MM-dd");
}
function parseDateToString(date) {
  return dateManipulator.parseDateToString(date);
}
function parseISOStringToDate(date) {
  return dateManipulator.parseISOStringToDate(date);
}
function addDays2(date, days) {
  let formattedDate;
  if (date instanceof Date) {
    formattedDate = parseDateToString(date);
    const newDate2 = dateManipulator.addDaysToDate(formattedDate, days);
    return parseISOStringToDate(newDate2);
  }
  const newDate = dateManipulator.addDaysToDate(date, days);
  return parseISOStringToDate(newDate);
}
function isToday2(date) {
  return dateManipulator.isToday(date);
}
function useDate() {
  function format3(date, format4) {
    return dateManipulator.format(date, format4 != null ? format4 : "yyyy-MM-dd");
  }
  function parseDateToString2(date) {
    return dateManipulator.parseDateToString(date);
  }
  function parseISOStringToDate2(date) {
    return dateManipulator.parseISOStringToDate(date);
  }
  function addDays3(date, days) {
    let formattedDate;
    if (date instanceof Date) {
      formattedDate = parseDateToString2(date);
      const newDate2 = dateManipulator.addDaysToDate(formattedDate, days);
      return parseISOStringToDate2(newDate2);
    }
    const newDate = dateManipulator.addDaysToDate(date, days);
    return parseISOStringToDate2(newDate);
  }
  return { parseDateToString: parseDateToString2, parseISOStringToDate: parseISOStringToDate2, addDays: addDays3, format: format3 };
}

export {
  format2 as format,
  addDays2 as addDays,
  isToday2 as isToday,
  useDate
};
//# sourceMappingURL=/build/_shared/chunk-2JBWI42H.js.map
