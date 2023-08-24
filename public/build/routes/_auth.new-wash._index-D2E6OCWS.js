import {
  LinkHighlighted
} from "/build/_shared/chunk-MRHMDKIA.js";
import {
  GenIcon,
  MdCheck,
  MdDirectionsCarFilled,
  MdPerson2,
  MdWaterDrop
} from "/build/_shared/chunk-GQH5STSJ.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  AbsoluteCenter,
  Alert,
  AlertIcon,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  Select,
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  Textarea,
  _typeof,
  useSteps,
  useToast
} from "/build/_shared/chunk-L3DHWCL6.js";
import {
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-CTXKJIOX.js";
import "/build/_shared/chunk-UVC3IK43.js";
import {
  Form,
  Link,
  init_dist,
  require_jsx_dev_runtime,
  require_react,
  useSubmit
} from "/build/_shared/chunk-H5BIVJJH.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/NewWash/Stepper/Stepper.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Stepper2({ steps: steps2, activeStep, setActiveStep }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Stepper,
    {
      index: activeStep,
      orientation: "vertical",
      blockSize: "100%",
      size: ["md", "md", "lg"],
      children: steps2.map(({ IconIncomplete, IconActive, label }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Step, { onClick: (e2) => setActiveStep(index), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StepIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          StepStatus,
          {
            complete: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StepIcon, {}, void 0, false, {
              fileName: "app/components/NewWash/Stepper/Stepper.tsx",
              lineNumber: 31,
              columnNumber: 25
            }, this),
            incomplete: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconIncomplete, { size: 20 }, void 0, false, {
              fileName: "app/components/NewWash/Stepper/Stepper.tsx",
              lineNumber: 32,
              columnNumber: 27
            }, this),
            active: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconActive, { size: 20 }, void 0, false, {
              fileName: "app/components/NewWash/Stepper/Stepper.tsx",
              lineNumber: 33,
              columnNumber: 23
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/Stepper/Stepper.tsx",
            lineNumber: 30,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/NewWash/Stepper/Stepper.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Box,
          {
            flexShrink: "0",
            paddingBlockStart: 1,
            display: ["none", "none", "none", "block"],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StepTitle, { children: label }, void 0, false, {
              fileName: "app/components/NewWash/Stepper/Stepper.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/Stepper/Stepper.tsx",
            lineNumber: 37,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StepSeparator, {}, void 0, false, {
          fileName: "app/components/NewWash/Stepper/Stepper.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this)
      ] }, index, true, {
        fileName: "app/components/NewWash/Stepper/Stepper.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this))
    },
    void 0,
    false,
    {
      fileName: "app/components/NewWash/Stepper/Stepper.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/Stepper/index.ts
var steps = [
  {
    label: "vehicle",
    IconIncomplete: MdDirectionsCarFilled,
    IconActive: MdDirectionsCarFilled,
    isNullable: false,
    modalTitle: "Escolher ve\xEDculo"
  },
  {
    label: "washes",
    IconIncomplete: MdWaterDrop,
    IconActive: MdWaterDrop,
    isNullable: false,
    modalTitle: "Cadastrar lavagens"
  },
  {
    label: "driver",
    IconIncomplete: MdPerson2,
    IconActive: MdPerson2,
    isNullable: true,
    modalTitle: "Escolher motorista"
  },
  {
    label: "summary",
    IconIncomplete: MdCheck,
    IconActive: MdCheck,
    isNullable: false,
    modalTitle: "Confirmar op\xE7\xF5es"
  }
];
function useStepper() {
  const { activeStep, goToNext, goToPrevious, setActiveStep } = useSteps({
    index: 0,
    count: steps.length
  });
  return {
    Stepper: Stepper2,
    activeStep,
    goToNext,
    goToPrevious,
    steps,
    setActiveStep
  };
}

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

// node_modules/date-fns/esm/addMilliseconds/index.js
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

// node_modules/date-fns/esm/_lib/defaultOptions/index.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
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

// node_modules/date-fns/esm/isDate/index.js
function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/esm/isValid/index.js
function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
    return false;
  }
  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}

// node_modules/date-fns/esm/subMilliseconds/index.js
function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

// node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js
var MILLISECONDS_IN_DAY = 864e5;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

// node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js
function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js
function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js
function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = /* @__PURE__ */ new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js
var MILLISECONDS_IN_WEEK = 6048e5;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

// node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js
function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js
function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js
function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = /* @__PURE__ */ new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCWeek/index.js
var MILLISECONDS_IN_WEEK2 = 6048e5;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK2) + 1;
}

// node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}

// node_modules/date-fns/esm/_lib/format/lightFormatters/index.js
var formatters = {
  // Year
  y: function y(date, token) {
    var signedYear = date.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
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
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
var lightFormatters_default = formatters;

// node_modules/date-fns/esm/_lib/format/formatters/index.js
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
  G: function G(date, token, localize3) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize3.era(era, {
          width: "abbreviated"
        });
      case "GGGGG":
        return localize3.era(era, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return localize3.era(era, {
          width: "wide"
        });
    }
  },
  // Year
  y: function y2(date, token, localize3) {
    if (token === "yo") {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize3.ordinalNumber(year, {
        unit: "year"
      });
    }
    return lightFormatters_default.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize3, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize3.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
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
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize3) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize3.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "QQQ":
        return localize3.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize3.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize3.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize3) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize3.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "qqq":
        return localize3.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize3.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize3.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function M2(date, token, localize3) {
    var month = date.getUTCMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters_default.M(date, token);
      case "Mo":
        return localize3.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "MMM":
        return localize3.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize3.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize3.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize3) {
    var month = date.getUTCMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize3.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "LLL":
        return localize3.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize3.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize3.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize3, options) {
    var week = getUTCWeek(date, options);
    if (token === "wo") {
      return localize3.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize3) {
    var isoWeek = getUTCISOWeek(date);
    if (token === "Io") {
      return localize3.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d2(date, token, localize3) {
    if (token === "do") {
      return localize3.ordinalNumber(date.getUTCDate(), {
        unit: "date"
      });
    }
    return lightFormatters_default.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize3) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === "Do") {
      return localize3.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize3) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize3.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize3.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize3.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize3.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize3, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize3.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize3.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize3.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize3.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize3.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize3, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize3.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize3.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize3.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize3.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize3.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize3) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize3.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      case "iii":
        return localize3.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize3.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize3.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize3.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function a2(date, token, localize3) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize3) {
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
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize3) {
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
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function h2(date, token, localize3) {
    if (token === "ho") {
      var hours = date.getUTCHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize3.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return lightFormatters_default.h(date, token);
  },
  // Hour [0-23]
  H: function H2(date, token, localize3) {
    if (token === "Ho") {
      return localize3.ordinalNumber(date.getUTCHours(), {
        unit: "hour"
      });
    }
    return lightFormatters_default.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize3) {
    var hours = date.getUTCHours() % 12;
    if (token === "Ko") {
      return localize3.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize3) {
    var hours = date.getUTCHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize3.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function m2(date, token, localize3) {
    if (token === "mo") {
      return localize3.ordinalNumber(date.getUTCMinutes(), {
        unit: "minute"
      });
    }
    return lightFormatters_default.m(date, token);
  },
  // Second
  s: function s2(date, token, localize3) {
    if (token === "so") {
      return localize3.ordinalNumber(date.getUTCSeconds(), {
        unit: "second"
      });
    }
    return lightFormatters_default.s(date, token);
  },
  // Fraction of second
  S: function S2(date, token) {
    return lightFormatters_default.S(date, token);
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
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
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
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
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
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || "";
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || "";
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
var formatters_default = formatters2;

// node_modules/date-fns/esm/_lib/format/longFormatters/index.js
var dateLongFormatter = function dateLongFormatter2(pattern, formatLong3) {
  switch (pattern) {
    case "P":
      return formatLong3.date({
        width: "short"
      });
    case "PP":
      return formatLong3.date({
        width: "medium"
      });
    case "PPP":
      return formatLong3.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong3.date({
        width: "full"
      });
  }
};
var timeLongFormatter = function timeLongFormatter2(pattern, formatLong3) {
  switch (pattern) {
    case "p":
      return formatLong3.time({
        width: "short"
      });
    case "pp":
      return formatLong3.time({
        width: "medium"
      });
    case "ppp":
      return formatLong3.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong3.time({
        width: "full"
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong3) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong3);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong3.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong3.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong3.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong3.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong3)).replace("{{time}}", timeLongFormatter(timePattern, formatLong3));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var longFormatters_default = longFormatters;

// node_modules/date-fns/esm/_lib/protectedTokens/index.js
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

// node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
var formatDistanceLocale = {
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
var formatDistance = function formatDistance2(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
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
var formatDistance_default = formatDistance;

// node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format3 = args.formats[width] || args.formats[args.defaultWidth];
    return format3;
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
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

// node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;

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

// node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
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
var formattingDayPeriodValues = {
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
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
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

// node_modules/date-fns/esm/locale/en-US/_lib/match/index.js
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

// node_modules/date-fns/esm/locale/en-US/index.js
var locale = {
  code: "en-US",
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
var en_US_default = locale;

// node_modules/date-fns/esm/_lib/defaultLocale/index.js
var defaultLocale_default = en_US_default;

// node_modules/date-fns/esm/format/index.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions2 = getDefaultOptions();
  var locale3 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : defaultLocale_default;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale3.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale3.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale3,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = longFormatters_default[firstCharacter];
      return longFormatter(substring, locale3.formatLong);
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
    var formatter = formatters_default[firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale3.localize, formatterOptions);
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

// node_modules/date-fns/esm/formatISO/index.js
function formatISO(date, options) {
  var _options$format, _options$representati;
  requiredArgs(1, arguments);
  var originalDate = toDate(date);
  if (isNaN(originalDate.getTime())) {
    throw new RangeError("Invalid time value");
  }
  var format3 = String((_options$format = options === null || options === void 0 ? void 0 : options.format) !== null && _options$format !== void 0 ? _options$format : "extended");
  var representation = String((_options$representati = options === null || options === void 0 ? void 0 : options.representation) !== null && _options$representati !== void 0 ? _options$representati : "complete");
  if (format3 !== "extended" && format3 !== "basic") {
    throw new RangeError("format must be 'extended' or 'basic'");
  }
  if (representation !== "date" && representation !== "time" && representation !== "complete") {
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  }
  var result = "";
  var tzOffset = "";
  var dateDelimiter = format3 === "extended" ? "-" : "";
  var timeDelimiter = format3 === "extended" ? ":" : "";
  if (representation !== "time") {
    var day = addLeadingZeros(originalDate.getDate(), 2);
    var month = addLeadingZeros(originalDate.getMonth() + 1, 2);
    var year = addLeadingZeros(originalDate.getFullYear(), 4);
    result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
  }
  if (representation !== "date") {
    var offset = originalDate.getTimezoneOffset();
    if (offset !== 0) {
      var absoluteOffset = Math.abs(offset);
      var hourOffset = addLeadingZeros(Math.floor(absoluteOffset / 60), 2);
      var minuteOffset = addLeadingZeros(absoluteOffset % 60, 2);
      var sign = offset < 0 ? "+" : "-";
      tzOffset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
    } else {
      tzOffset = "Z";
    }
    var hour = addLeadingZeros(originalDate.getHours(), 2);
    var minute = addLeadingZeros(originalDate.getMinutes(), 2);
    var second = addLeadingZeros(originalDate.getSeconds(), 2);
    var separator = result === "" ? "" : "T";
    var time = [hour, minute, second].join(timeDelimiter);
    result = "".concat(result).concat(separator).concat(time).concat(tzOffset);
  }
  return result;
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

// node_modules/date-fns/esm/locale/pt-BR/_lib/formatDistance/index.js
var formatDistanceLocale2 = {
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
var formatDistance3 = function formatDistance4(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale2[token];
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
var formatDistance_default2 = formatDistance3;

// node_modules/date-fns/esm/locale/pt-BR/_lib/formatLong/index.js
var dateFormats2 = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
};
var timeFormats2 = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
};
var dateTimeFormats2 = {
  full: "{{date}} '\xE0s' {{time}}",
  long: "{{date}} '\xE0s' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong2 = {
  date: buildFormatLongFn({
    formats: dateFormats2,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats2,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats2,
    defaultWidth: "full"
  })
};
var formatLong_default2 = formatLong2;

// node_modules/date-fns/esm/locale/pt-BR/_lib/formatRelative/index.js
var formatRelativeLocale2 = {
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
var formatRelative3 = function formatRelative4(token, date, _baseDate, _options) {
  var format3 = formatRelativeLocale2[token];
  if (typeof format3 === "function") {
    return format3(date);
  }
  return format3;
};
var formatRelative_default2 = formatRelative3;

// node_modules/date-fns/esm/locale/pt-BR/_lib/localize/index.js
var eraValues2 = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
};
var quarterValues2 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1\xBA trimestre", "2\xBA trimestre", "3\xBA trimestre", "4\xBA trimestre"]
};
var monthValues2 = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  wide: ["janeiro", "fevereiro", "mar\xE7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
};
var dayValues2 = {
  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
  abbreviated: ["domingo", "segunda", "ter\xE7a", "quarta", "quinta", "sexta", "s\xE1bado"],
  wide: ["domingo", "segunda-feira", "ter\xE7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\xE1bado"]
};
var dayPeriodValues2 = {
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
var formattingDayPeriodValues2 = {
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
var ordinalNumber3 = function ordinalNumber4(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  if ((options === null || options === void 0 ? void 0 : options.unit) === "week") {
    return number + "\xAA";
  }
  return number + "\xBA";
};
var localize2 = {
  ordinalNumber: ordinalNumber3,
  era: buildLocalizeFn({
    values: eraValues2,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues2,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback2(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues2,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues2,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues2,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues2,
    defaultFormattingWidth: "wide"
  })
};
var localize_default2 = localize2;

// node_modules/date-fns/esm/locale/pt-BR/_lib/match/index.js
var matchOrdinalNumberPattern2 = /^(\d+)[ºªo]?/i;
var parseOrdinalNumberPattern2 = /\d+/i;
var matchEraPatterns2 = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
};
var parseEraPatterns2 = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
};
var matchQuarterPatterns2 = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
};
var parseQuarterPatterns2 = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns2 = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
};
var parseMonthPatterns2 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i]
};
var matchDayPatterns2 = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
};
var parseDayPatterns2 = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
};
var matchDayPeriodPatterns2 = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
};
var parseDayPeriodPatterns2 = {
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
var match2 = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern2,
    parsePattern: parseOrdinalNumberPattern2,
    valueCallback: function valueCallback3(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns2,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns2,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns2,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns2,
    defaultParseWidth: "any",
    valueCallback: function valueCallback4(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns2,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns2,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns2,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns2,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns2,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns2,
    defaultParseWidth: "any"
  })
};
var match_default2 = match2;

// node_modules/date-fns/esm/locale/pt-BR/index.js
var locale2 = {
  code: "pt-BR",
  formatDistance: formatDistance_default2,
  formatLong: formatLong_default2,
  formatRelative: formatRelative_default2,
  localize: localize_default2,
  match: match_default2,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var pt_BR_default = locale2;

// src/domain/shared/date-manipulator.ts
function wrapper() {
  return {
    isAfter(date, dateToCompare) {
      const x2 = parseISO(date);
      const y3 = parseISO(dateToCompare);
      return isAfter(x2, y3);
    },
    isBefore(date, dateToCompare) {
      const x2 = this.parseISOStringToDate(date);
      const y3 = this.parseISOStringToDate(dateToCompare);
      return isBefore(x2, y3);
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
      return formatISO(date);
    },
    addDaysToDate(date, amount) {
      return this.parseDateToString(
        addDays(this.parseISOStringToDate(date), amount)
      );
    },
    isSunday(date) {
      return isSunday(this.parseISOStringToDate(date));
    },
    isSameDay(x2, y3) {
      return isSameDay(
        this.parseISOStringToDate(x2),
        this.parseISOStringToDate(y3)
      );
    },
    format(date, format3) {
      if (typeof date === "string") {
        return format(this.parseISOStringToDate(date), format3, {
          locale: pt_BR_default
        });
      }
      return format(date, format3);
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

// app/components/LinkBox/Container.tsx
init_dist();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Container({ to, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    Grid,
    {
      minInlineSize: "180px",
      minBlockSize: "150px",
      padding: 4,
      gridTemplateColumns: "80% 20%",
      gridTemplateRows: "1fr",
      placeItems: "center",
      as: Link,
      to,
      border: "2px",
      borderColor: "blue.400",
      borderRadius: "lg",
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/LinkBox/Container.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/components/LinkBox/Content.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Content({ children, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { ...rest, children }, void 0, false, {
    fileName: "app/components/LinkBox/Content.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/LinkBox/Icon.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function Icon({ icon }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { blockSize: "100%", justify: "center", align: "center", children: icon }, void 0, false, {
    fileName: "app/components/LinkBox/Icon.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/LinkBox/Title.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Title({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { color: "gray.500", fontSize: "md", fontWeight: "bold", children }, void 0, false, {
    fileName: "app/components/LinkBox/Title.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/components/LinkBox/index.ts
var LinkBox = {
  Container,
  Content,
  Icon,
  Title
};

// node_modules/react-icons/fa/index.esm.js
function FaExternalLinkAlt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" } }] })(props);
}

// app/components/WashBox/index.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function WashBox({ wash }) {
  const title = dateManipulator.format(wash.scheduleDate, "d/LL");
  const date = dateManipulator.format(wash.scheduleDate, "d 'de' MMMM, eeee");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LinkBox.Container, { to: `/wash/${wash.id}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LinkBox.Content, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LinkBox.Title, { children: title }, void 0, false, {
        fileName: "app/components/WashBox/index.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { fontSize: "lg", children: date }, void 0, false, {
        fileName: "app/components/WashBox/index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/WashBox/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LinkBox.Icon, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(FaExternalLinkAlt, { size: 16 }, void 0, false, {
      fileName: "app/components/WashBox/index.tsx",
      lineNumber: 23,
      columnNumber: 27
    }, this) }, void 0, false, {
      fileName: "app/components/WashBox/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/WashBox/index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/WashesContent/Container.tsx
var import_react9 = __toESM(require_react());
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function Container2({
  licensePlate,
  children,
  addError,
  removeError
}) {
  const { data, submit } = useFetcher();
  (0, import_react9.useEffect)(() => {
    submit({ licensePlate }, { action: "/washes-search" });
  }, [submit, licensePlate]);
  (0, import_react9.useEffect)(() => {
    if (typeof (data == null ? void 0 : data.washes) !== "undefined") {
      if (data.washes)
        addError();
      else
        removeError();
    }
  }, [data == null ? void 0 : data.washes, removeError, addError]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Grid, { blockSize: "100%", gridTemplateRows: "1fr auto", children: (data == null ? void 0 : data.washes) ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Alert, { status: "info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AlertIcon, {}, void 0, false, {
        fileName: "app/components/NewWash/WashesContent/Container.tsx",
        lineNumber: 40,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { children: [
        "H\xE1 lavagens ativas para o ve\xEDculo com placa",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LinkHighlighted, { to: `/vehicle/${licensePlate}`, children: licensePlate }, void 0, false, {
          fileName: "app/components/NewWash/WashesContent/Container.tsx",
          lineNumber: 43,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/NewWash/WashesContent/Container.tsx",
        lineNumber: 41,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NewWash/WashesContent/Container.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/NewWash/WashesContent/Container.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      Grid,
      {
        paddingBlockStart: 6,
        gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
        gap: 4,
        children: (data == null ? void 0 : data.washes) && (data == null ? void 0 : data.washes.map((w2) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(WashBox, { wash: w2 }, w2.id, false, {
            fileName: "app/components/NewWash/WashesContent/Container.tsx",
            lineNumber: 56,
            columnNumber: 24
          }, this);
        }))
      },
      void 0,
      false,
      {
        fileName: "app/components/NewWash/WashesContent/Container.tsx",
        lineNumber: 49,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/NewWash/WashesContent/Container.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    Grid,
    {
      gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
      gap: 10,
      paddingBlockEnd: 8,
      placeItems: "center",
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/NewWash/WashesContent/Container.tsx",
      lineNumber: 62,
      columnNumber: 11
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/NewWash/WashesContent/Container.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/NewWash/WashesContent/Container.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/WashesContent/Form.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
function Form2({
  isCompleted,
  id,
  onChange,
  note,
  title,
  defaultDate,
  minDate
}) {
  function onFormChange(e2) {
    var _a, _b, _c, _d, _e, _f;
    const form = new FormData(e2.currentTarget);
    const scheduleDate = (_b = (_a = form.get("scheduleDate")) == null ? void 0 : _a.toString()) != null ? _b : "";
    const note2 = (_d = (_c = form.get("note")) == null ? void 0 : _c.toString()) != null ? _d : "";
    const isCompleted2 = form.get("isCompleted") === "";
    const id2 = (_f = (_e = form.get("id")) == null ? void 0 : _e.toString()) != null ? _f : "";
    onChange({ note: note2, isCompleted: isCompleted2, id: Number(id2), scheduleDate, title });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    Form,
    {
      onChange: onFormChange,
      style: { blockSize: "100%", inlineSize: "100%" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Input, { type: "hidden", name: "id", value: id }, void 0, false, {
          fileName: "app/components/NewWash/WashesContent/Form.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          Flex,
          {
            maxInlineSize: "360px",
            flexDir: "column",
            gap: 6,
            marginInline: "auto",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { marginInline: "auto", marginBlockStart: 2, fontSize: "lg", children: title }, void 0, false, {
                fileName: "app/components/NewWash/WashesContent/Form.tsx",
                lineNumber: 55,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(FormControl, { as: Flex, flexDir: "column", align: "center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(FormLabel, { inlineSize: "fit-content", children: "data" }, void 0, false, {
                  fileName: "app/components/NewWash/WashesContent/Form.tsx",
                  lineNumber: 59,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  Input,
                  {
                    name: "scheduleDate",
                    inlineSize: "180px",
                    type: "date",
                    min: minDate,
                    defaultValue: defaultDate
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/NewWash/WashesContent/Form.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(FormHelperText, { color: "gray.400", children: "m\xEAs/dia/ano" }, void 0, false, {
                  fileName: "app/components/NewWash/WashesContent/Form.tsx",
                  lineNumber: 67,
                  columnNumber: 11
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/NewWash/WashesContent/Form.tsx",
                lineNumber: 58,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(FormControl, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(FormLabel, { inlineSize: "fit-content", marginInline: "auto", children: "notas" }, void 0, false, {
                  fileName: "app/components/NewWash/WashesContent/Form.tsx",
                  lineNumber: 71,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  Textarea,
                  {
                    name: "note",
                    noOfLines: 6,
                    placeholder: "escreva notas sobre esta lavagem",
                    resize: "none",
                    defaultValue: note
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/NewWash/WashesContent/Form.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/components/NewWash/WashesContent/Form.tsx",
                lineNumber: 70,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                FormControl,
                {
                  as: Flex,
                  inlineSize: "fit-content",
                  marginInline: "auto",
                  align: "center",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(FormLabel, { marginBlock: 0, marginInlineEnd: 6, children: "lavagem feita?" }, void 0, false, {
                      fileName: "app/components/NewWash/WashesContent/Form.tsx",
                      lineNumber: 88,
                      columnNumber: 11
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Checkbox, { defaultChecked: isCompleted, name: "isCompleted" }, void 0, false, {
                      fileName: "app/components/NewWash/WashesContent/Form.tsx",
                      lineNumber: 91,
                      columnNumber: 11
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/NewWash/WashesContent/Form.tsx",
                  lineNumber: 82,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/NewWash/WashesContent/Form.tsx",
            lineNumber: 49,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/NewWash/WashesContent/Form.tsx",
      lineNumber: 44,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/WashesContent/WashesContent.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
function WashesContent({
  washes,
  setWashes,
  licensePlate,
  addError,
  removeError
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    Container2,
    {
      licensePlate: licensePlate != null ? licensePlate : "",
      addError,
      removeError,
      children: washes == null ? void 0 : washes.map((w2) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          Box,
          {
            maxInlineSize: "320px",
            marginInline: [0, 8],
            border: "4px",
            borderColor: "blue.400",
            borderRadius: "lg",
            paddingInline: 4,
            paddingBlock: 8,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              Form2,
              {
                id: w2.id,
                onChange: setWashes,
                isCompleted: w2.isCompleted,
                title: w2.title,
                defaultDate: w2.scheduleDate,
                minDate: w2.minDate,
                note: (_a = w2.note) != null ? _a : ""
              },
              void 0,
              false,
              {
                fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
                lineNumber: 38,
                columnNumber: 11
              },
              this
            )
          },
          w2.scheduleDate,
          false,
          {
            fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
            lineNumber: 28,
            columnNumber: 9
          },
          this
        );
      })
    },
    void 0,
    false,
    {
      fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/WashesContent/index.tsx
var baseDate = /* @__PURE__ */ new Date();
var formatedDates = {
  minDate: format2(baseDate, "yyyy-MM-dd"),
  firstDate: format2(baseDate, "yyyy-MM-dd"),
  secDate: format2(addDays2(baseDate, 7), "yyyy-MM-dd"),
  thirdDate: format2(addDays2(baseDate, 14), "yyyy-MM-dd"),
  fourthDate: format2(addDays2(baseDate, 28), "yyyy-MM-dd")
};
var washesDefaultValue = [
  {
    id: 1,
    scheduleDate: formatedDates.firstDate,
    note: "",
    isCompleted: false,
    title: "primeira lavagem",
    minDate: formatedDates.minDate
  },
  {
    id: 2,
    scheduleDate: formatedDates.secDate,
    note: "",
    isCompleted: false,
    title: "segunda lavagem",
    minDate: formatedDates.minDate
  },
  {
    id: 3,
    scheduleDate: formatedDates.thirdDate,
    note: "",
    isCompleted: false,
    title: "terceira lavagem",
    minDate: formatedDates.minDate
  },
  {
    id: 4,
    scheduleDate: formatedDates.fourthDate,
    note: "",
    isCompleted: false,
    title: "quarta lavagem",
    minDate: formatedDates.minDate
  }
];

// app/components/NewWash/VehicleContent/NewVehicleForm.tsx
var import_react16 = __toESM(require_react());
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
var selectOptions = [
  "Extra leve",
  "Leve",
  "Vuc",
  "Toco",
  "Truck",
  "Bitruck",
  "Carreta"
];
function NewVehicleForm({
  addError,
  removeError,
  vehicle,
  onChange
}) {
  const timeoutId = (0, import_react16.useRef)(null);
  const secondTimeOutId = (0, import_react16.useRef)(null);
  const { data, submit } = useFetcher();
  const isDisabled = !vehicle.create;
  const error = (data == null ? void 0 : data.results.length) > 0 ? { message: "Placa j\xE1 existe" } : null;
  function onInputChange(e2) {
    secondTimeOutId.current && clearTimeout(secondTimeOutId.current);
    secondTimeOutId.current = setTimeout(() => {
      submit(
        { query: "vehicle", licensePlate: e2.target.value },
        { action: "/vehicle-search" }
      );
    }, 1e3);
  }
  console.log(data);
  function onFormChange(e2) {
    var _a, _b, _c;
    const form = new FormData(e2.currentTarget);
    const create = form.get("create") === "";
    const licensePlate = (_b = (_a = form.get("licensePlate")) == null ? void 0 : _a.toString()) != null ? _b : "";
    const type = (_c = form.get("type")) == null ? void 0 : _c.toString();
    if (create) {
      if (!licensePlate && !type) {
        onChange({ licensePlate: "", type: "", create });
        return;
      }
      timeoutId.current && clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        onChange({ licensePlate, type, create });
      }, 1e3);
    } else {
      onChange({ licensePlate: "", type: "", create });
    }
  }
  (0, import_react16.useEffect)(() => {
    if (typeof (data == null ? void 0 : data.results) !== "undefined") {
      if (data.results.length > 0)
        addError();
      else
        removeError();
    }
  }, [data == null ? void 0 : data.results, removeError, addError]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Form, { onChange: onFormChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Grid, { gridAutoRows: "min-content", placeContent: "center", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      FormControl,
      {
        as: Flex,
        blockSize: "min-content",
        gap: 4,
        paddingBlockStart: [0, 0, 1],
        align: "center",
        justify: "center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(FormLabel, { margin: 0, htmlFor: "vehicle_create", children: "Adicionar novo ve\xEDculo?" }, void 0, false, {
            fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
            lineNumber: 97,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            Checkbox,
            {
              defaultChecked: vehicle.create,
              id: "vehicle_create",
              name: "create",
              size: "lg",
              justifySelf: "center"
            },
            void 0,
            false,
            {
              fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
              lineNumber: 100,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
        lineNumber: 89,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Flex, { flexDir: "column", gap: 6, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        FormControl,
        {
          as: Grid,
          gridTemplateRows: "min-content",
          gridAutoFlow: ["row", "row", "column"],
          placeItems: "center",
          marginBlockStart: 8,
          gap: 4,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Flex, { flexDir: "column", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              FormLabel,
              {
                margin: 0,
                marginInline: "auto",
                htmlFor: "vehicle_licensePlate",
                children: "Ve\xEDculo"
              },
              void 0,
              false,
              {
                fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
                lineNumber: 118,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              Input,
              {
                id: "vehicle_licensePlate",
                name: "licensePlate",
                placeholder: "Placa",
                isDisabled,
                defaultValue: vehicle.licensePlate,
                onChange: onInputChange
              },
              void 0,
              false,
              {
                fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
                lineNumber: 125,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
            lineNumber: 117,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
          lineNumber: 109,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        Select,
        {
          isDisabled,
          id: "type",
          name: "type",
          placeholder: "Tipo do ve\xEDculo",
          defaultValue: vehicle.type,
          children: selectOptions.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: o == null ? void 0 : o.toString(), children: o }, o, false, {
            fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
            lineNumber: 144,
            columnNumber: 17
          }, this))
        },
        void 0,
        false,
        {
          fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
          lineNumber: 136,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
        lineNumber: 135,
        columnNumber: 11
      }, this),
      vehicle.create && error && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Alert, { status: "error", marginBlock: 4, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(AlertIcon, {}, void 0, false, {
          fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
          lineNumber: 152,
          columnNumber: 15
        }, this),
        error.message
      ] }, void 0, true, {
        fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
        lineNumber: 151,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
    lineNumber: 88,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/VehicleContent/VehicleDivider.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
function VehicleDivider() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    Box,
    {
      position: "relative",
      padding: 8,
      inlineSize: "100%",
      maxInlineSize: "360px",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Divider, {}, void 0, false, {
          fileName: "app/components/NewWash/VehicleContent/VehicleDivider.tsx",
          lineNumber: 10,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AbsoluteCenter, { bg: "white", px: "4", children: "ou" }, void 0, false, {
          fileName: "app/components/NewWash/VehicleContent/VehicleDivider.tsx",
          lineNumber: 11,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/NewWash/VehicleContent/VehicleDivider.tsx",
      lineNumber: 4,
      columnNumber: 5
    },
    this
  );
}

// app/components/SearchEntity/Results.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
function Results({ show, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    Flex,
    {
      inlineSize: "100%",
      flexDir: ["column"],
      position: "relative",
      _after: show ? {
        content: "''",
        display: "block",
        position: "absolute",
        insetInline: 0,
        bottom: 0,
        zIndex: 1,
        pointerEvents: "none",
        backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, 1) 90%)",
        blockSize: 12
      } : {},
      gap: 4,
      ...props,
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/SearchEntity/Results.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/components/SearchEntity/SearchInput.tsx
var import_react20 = __toESM(require_react());
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
function SearchInput({ onChange, ...rest }) {
  const timeoutId = (0, import_react20.useRef)(null);
  function onInputQueryChange(e2) {
    const value = e2.target.value;
    timeoutId.current && clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => onChange(value), 1e3);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(InputGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Input, { rounded: "full", onChange: onInputQueryChange, ...rest }, void 0, false, {
    fileName: "app/components/SearchEntity/SearchInput.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/SearchEntity/SearchInput.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/SearchEntity/SearchInput.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/components/SearchEntity/index.ts
var searchEntity = {
  Input: SearchInput,
  Results
};

// app/components/NewWash/VehicleContent/VehicleSearch.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
function VehicleSearch({ vehicle, setVehicle }) {
  var _a, _b;
  const fetcher = useFetcher();
  const data = (_b = (_a = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a.results) != null ? _b : null;
  function onQuery(e2) {
    fetcher.submit(
      { query: "vehicle", licensePlate: e2 },
      { action: "/vehicle-search" }
    );
  }
  function onClick(e2) {
    setVehicle({ ...e2, create: false });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    Grid,
    {
      gap: 4,
      gridAutoFlow: "row",
      placeItems: ["center", "center", "center"],
      maxInlineSize: "200px",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(searchEntity.Input, { onChange: onQuery, isDisabled: vehicle.create }, void 0, false, {
          fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
          lineNumber: 41,
          columnNumber: 7
        }, this),
        (fetcher == null ? void 0 : fetcher.data) && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            Text,
            {
              inlineSize: "fit-content",
              marginInline: "auto",
              marginBlockStart: 4,
              fontSize: "sm",
              color: "gray.400",
              children: (data == null ? void 0 : data.length) === 0 ? "nenhum resultado encontrado :(" : `mostrando ${data == null ? void 0 : data.length} resultados`
            },
            void 0,
            false,
            {
              fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
              lineNumber: 44,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(searchEntity.Results, { show: fetcher == null ? void 0 : fetcher.data, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Grid, { gap: 4, maxBlockSize: "260px", overflow: "scroll", children: data == null ? void 0 : data.map((v, i2) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              Flex,
              {
                inlineSize: "100%",
                flexDir: "column",
                gap: 6,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(FormControl, { as: Flex, flexDir: "column", alignItems: "center", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(FormLabel, { children: "Placa" }, void 0, false, {
                      fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                      lineNumber: 66,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                      Input,
                      {
                        maxInlineSize: "200px",
                        marginBlockEnd: data.length - 1 === i2 ? 4 : 0,
                        onClick: () => onClick(v),
                        readOnly: true,
                        value: v.licensePlate,
                        type: "button",
                        borderColor: (vehicle == null ? void 0 : vehicle.licensePlate) ? "blue.400" : "gray.200",
                        _hover: {
                          borderColor: (vehicle == null ? void 0 : vehicle.licensePlate) ? "blue.400" : "gray.300"
                        },
                        focusBorderColor: (vehicle == null ? void 0 : vehicle.licensePlate) ? "blue.400" : "gray.300"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                        lineNumber: 67,
                        columnNumber: 23
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                    lineNumber: 65,
                    columnNumber: 21
                  }, this),
                  (data == null ? void 0 : data.length) - 1 !== i2 && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Divider, { alignSelf: "center", inlineSize: "80%" }, void 0, false, {
                    fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                    lineNumber: 88,
                    columnNumber: 23
                  }, this)
                ]
              },
              `${v.licensePlate} + ${i2}`,
              true,
              {
                fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                lineNumber: 59,
                columnNumber: 19
              },
              this
            );
          }) }, void 0, false, {
            fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
            lineNumber: 55,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
      lineNumber: 35,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/VehicleContent/Container.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
function Container3({
  setVehicleData,
  vehicle,
  addError,
  removeError
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    Grid,
    {
      id: "vehicle",
      blockSize: "100%",
      inlineSize: "100%",
      paddingInline: 4,
      alignContent: "start",
      placeItems: "center",
      gap: 4,
      gridAutoFlow: ["row", "row", "column"],
      alignItems: "start",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(VehicleSearch, { setVehicle: setVehicleData, vehicle }, void 0, false, {
          fileName: "app/components/NewWash/VehicleContent/Container.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(VehicleDivider, {}, void 0, false, {
          fileName: "app/components/NewWash/VehicleContent/Container.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          NewVehicleForm,
          {
            vehicle,
            onChange: setVehicleData,
            addError,
            removeError
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/VehicleContent/Container.tsx",
            lineNumber: 34,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/NewWash/VehicleContent/Container.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/VehicleContent/index.tsx
var defaultVehicleState = {
  licensePlate: "",
  type: "",
  create: false
};
var VehicleContent = Container3;

// app/routes/_auth.new-wash._index.tsx
var import_react36 = __toESM(require_react());

// app/components/NewWash/footer.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
function NewWashFooter({
  goNext,
  goBack,
  containerProps,
  isNextButtonDisable,
  isPreviousButtonDisable,
  isLastStep,
  onFinish
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    Flex,
    {
      placeSelf: "flex-end",
      blockSize: "100%",
      align: "center",
      paddingBlockStart: 8,
      ...containerProps,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          Button,
          {
            colorScheme: "gray",
            variant: "ghost",
            mr: 3,
            marginInlineEnd: "0",
            onClick: () => goBack(),
            isDisabled: isPreviousButtonDisable,
            children: "voltar"
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/footer.tsx",
            lineNumber: 39,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          Divider,
          {
            blockSize: "100%",
            orientation: "vertical",
            inlineSize: "8px",
            borderColor: "gray.400"
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/footer.tsx",
            lineNumber: 49,
            columnNumber: 7
          },
          this
        ),
        !isLastStep ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          Button,
          {
            name: "step",
            variant: "ghost",
            colorScheme: "blue",
            onClick: () => goNext(),
            isDisabled: isNextButtonDisable,
            children: "pr\xF3ximo"
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/footer.tsx",
            lineNumber: 56,
            columnNumber: 9
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          Button,
          {
            name: "step",
            variant: "ghost",
            colorScheme: "blue",
            onClick: onFinish,
            children: "finalizar"
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/footer.tsx",
            lineNumber: 66,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/NewWash/footer.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/DriverContent/NewDriverForm.tsx
var import_react27 = __toESM(require_react());
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
function NewDriverForm({ driver, setDriverData }) {
  const timeoutId = (0, import_react27.useRef)(null);
  const isDisabled = !driver.create;
  function onFormChange(e2) {
    var _a, _b, _c, _d;
    const form = new FormData(e2.currentTarget);
    const create = form.get("create") === "";
    const driverName = (_b = (_a = form.get("name")) == null ? void 0 : _a.toString()) != null ? _b : "";
    const phone = (_d = (_c = form.get("phone")) == null ? void 0 : _c.toString()) != null ? _d : "";
    console.log(create, phone, driverName);
    if (create) {
      if (!driverName) {
        setDriverData({ name: "", create, phone: "" });
        return;
      }
      timeoutId.current && clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        setDriverData({ name: driverName, create, phone });
      }, 1e3);
    } else {
      setDriverData({ name: "", create, phone: "" });
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Box, { maxInlineSize: "260px", marginInline: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    Form,
    {
      onChange: onFormChange,
      style: { blockSize: "100%", inlineSize: "100%" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Flex, { flexDir: "column", blockSize: "100%", gap: 8, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          FormControl,
          {
            as: Flex,
            blockSize: "min-content",
            gap: 4,
            paddingBlockStart: [0, 0, 1],
            align: "center",
            justify: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(FormLabel, { margin: 0, htmlFor: "driver-create", children: "Adicionar motorista novo?" }, void 0, false, {
                fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
                lineNumber: 60,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                Checkbox,
                {
                  defaultChecked: driver.create,
                  id: "driver-create",
                  name: "create",
                  size: "lg",
                  justifySelf: "center"
                },
                void 0,
                false,
                {
                  fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
                  lineNumber: 63,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
            lineNumber: 52,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Flex, { flexDir: "column", gap: 8, inlineSize: "100%", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(FormControl, { as: Flex, flexDir: "column", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(FormLabel, { margin: 0, marginInline: "auto", htmlFor: "driver-name", children: "Motorista" }, void 0, false, {
              fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
              lineNumber: 73,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              Input,
              {
                id: "driver-name",
                name: "name",
                placeholder: "Nome",
                isDisabled,
                defaultValue: driver.create ? driver.name : ""
              },
              void 0,
              false,
              {
                fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
                lineNumber: 76,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(FormControl, { as: Flex, flexDir: "column", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              FormLabel,
              {
                margin: 0,
                marginInline: "auto",
                htmlFor: "driver-phone",
                children: "Telefone"
              },
              void 0,
              false,
              {
                fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
                lineNumber: 85,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              Input,
              {
                id: "driver-phone",
                name: "phone",
                placeholder: "telefone",
                isDisabled,
                defaultValue: driver.create ? driver.phone : ""
              },
              void 0,
              false,
              {
                fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
                lineNumber: 92,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
      lineNumber: 47,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/DriverContent/DriverContent.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
function Root({ setDriverData, driver }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Box, { paddingBlock: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(NewDriverForm, { driver, setDriverData }, void 0, false, {
    fileName: "app/components/NewWash/DriverContent/DriverContent.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/NewWash/DriverContent/DriverContent.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/DriverContent/index.tsx
var defaultDriverValue = {
  name: "",
  phone: "",
  create: false
};
var DriverContent = Root;

// app/components/NewWash/SummaryContent/Container.tsx
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime());
function Container4({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    Grid,
    {
      paddingInlineStart: 4,
      gridTemplateColumns: ["100%", "1fr 1fr"],
      gridTemplateRows: ["min-content", "1fr 1fr"],
      gap: 8,
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/NewWash/SummaryContent/Container.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}

// node_modules/react-icons/hi/index.esm.js
function HiExternalLink(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" } }, { "tag": "path", "attr": { "d": "M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" } }] })(props);
}

// app/components/NewWash/SummaryContent/DriverSummary.tsx
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime());
function DriverSummary({ driver, goTo }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    Flex,
    {
      flex: 1,
      align: "center",
      justify: "center",
      flexDir: "column",
      gap: 4,
      paddingBlock: 4,
      inlineSize: "100%",
      border: "1px",
      borderColor: "blue.400",
      borderWidth: "medium",
      borderRadius: "2xl",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Text, { as: "h2", fontSize: "md", marginInline: "auto", children: "Informa\xE7\xF5es do motorista" }, void 0, false, {
          fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          Flex,
          {
            flexDir: "column",
            gap: 4,
            blockSize: "fit-content",
            inlineSize: "100%",
            maxInlineSize: "200px",
            align: "center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              Button,
              {
                rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(HiExternalLink, { size: 20 }, void 0, false, {
                  fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                  lineNumber: 37,
                  columnNumber: 22
                }, this),
                variant: "outline",
                onClick: () => goTo(),
                inlineSize: "100%",
                minBlockSize: 12,
                blockSize: "fit-content",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                  Flex,
                  {
                    flexDir: "column",
                    gap: 1,
                    paddingBlock: 4,
                    align: "start",
                    marginInlineEnd: 4,
                    inlineSize: "100%",
                    children: driver.create ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Text, { fontSize: "md", children: "Matheus" }, void 0, false, {
                        fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Flex, { as: "span", gap: 1, inlineSize: "fit-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Text, { fontSize: "sm", fontWeight: "light", children: driver.name }, void 0, false, {
                        fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                        lineNumber: 56,
                        columnNumber: 19
                      }, this) }, void 0, false, {
                        fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                      lineNumber: 53,
                      columnNumber: 15
                    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                      Text,
                      {
                        textAlign: "left",
                        paddingBlock: 4,
                        fontSize: "sm",
                        whiteSpace: "break-spaces",
                        children: "Nenhum motorista fornecido"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                        lineNumber: 62,
                        columnNumber: 15
                      },
                      this
                    )
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                lineNumber: 36,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
            lineNumber: 28,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/SummaryContent/VehicleSummary.tsx
var import_jsx_dev_runtime21 = __toESM(require_jsx_dev_runtime());
function VehicleSummary({ goTo, vehicle }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    Flex,
    {
      align: "center",
      justify: "center",
      flexDir: "column",
      gap: 4,
      paddingBlock: [4, 8],
      paddingInline: [0, 4, 8],
      inlineSize: "100%",
      border: "1px",
      borderColor: "blue.400",
      borderWidth: "medium",
      borderRadius: "2xl",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Text, { as: "h2", fontSize: "md", marginInline: "auto", justifySelf: "start", children: "Informa\xE7\xF5es do Ve\xEDculo" }, void 0, false, {
          fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          Button,
          {
            rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(HiExternalLink, { size: 20 }, void 0, false, {
              fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
              lineNumber: 29,
              columnNumber: 20
            }, this),
            variant: "outline",
            onClick: () => goTo(),
            blockSize: "fit-content",
            inlineSize: "fit-content",
            minBlockSize: 12,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              Flex,
              {
                flexDir: "column",
                gap: 1,
                paddingBlock: 4,
                paddingInlineEnd: 1,
                inlineSize: "auto",
                align: "start",
                marginInlineEnd: "auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Flex, { as: "span", gap: 1, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Text, { fontSize: "md", children: "placa:" }, void 0, false, {
                      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                      lineNumber: 46,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Text, { fontWeight: "semibold", children: vehicle.licensePlate }, void 0, false, {
                      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                      lineNumber: 47,
                      columnNumber: 13
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Flex, { as: "span", gap: 1, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Text, { children: "tipo:" }, void 0, false, {
                      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                      lineNumber: 50,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Text, { fontSize: "sm", fontWeight: "light", children: vehicle.type }, void 0, false, {
                      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                      lineNumber: 51,
                      columnNumber: 13
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                lineNumber: 36,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
            lineNumber: 28,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/SummaryContent/WashesSummary.tsx
var import_jsx_dev_runtime22 = __toESM(require_jsx_dev_runtime());
function ScheduleDate({ date }) {
  const { format: format3 } = useDate();
  const text = format3(date, "d/MM");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { fontSize: "md", children: text }, void 0, false, {
    fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
}
function Note({ note }) {
  return note !== "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Flex, { gap: 2, fontSize: "sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { fontWeight: "semibold", children: "nota:" }, void 0, false, {
      fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { fontWeight: "light", children: note.slice(0, 5) + "..." }, void 0, false, {
      fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { children: "sem nota" }, void 0, false, {
    fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function WashesSummary({ goTo, washes }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    Flex,
    {
      paddingBlock: [4, 8],
      paddingInline: [0, 4, 8],
      gap: 4,
      align: "center",
      justify: "center",
      flexDir: "column",
      inlineSize: "100%",
      border: "1px",
      borderWidth: "medium",
      borderColor: "blue.400",
      borderRadius: "2xl",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { as: "h2", children: "Informa\xE7\xF5es das lavagens" }, void 0, false, {
          fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
          lineNumber: 42,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          Grid,
          {
            blockSize: "100%",
            inlineSize: "100%",
            gap: 4,
            gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
            placeItems: "center",
            children: washes.map((w2) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
              Button,
              {
                rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(HiExternalLink, { size: 20 }, void 0, false, {
                  fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                  lineNumber: 53,
                  columnNumber: 24
                }, this),
                inlineSize: "fit-content",
                blockSize: "fit-content",
                fontSize: "sm",
                padding: 4,
                onClick: () => goTo(),
                variant: "outline",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                  Flex,
                  {
                    flexDir: "column",
                    blockSize: "fit-content",
                    gap: 1,
                    paddingInlineEnd: 4,
                    marginInlineEnd: "auto",
                    align: "start",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ScheduleDate, { date: w2.scheduleDate }, void 0, false, {
                        fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                        lineNumber: 69,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Note, { note: w2.note }, void 0, false, {
                        fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                        lineNumber: 70,
                        columnNumber: 15
                      }, this),
                      w2.isCompleted && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Flex, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { fontStyle: "italic", fontSize: "sm", children: "lavagem j\xE1 feita" }, void 0, false, {
                        fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                        lineNumber: 73,
                        columnNumber: 19
                      }, this) }, void 0, false, {
                        fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                    lineNumber: 61,
                    columnNumber: 13
                  },
                  this
                )
              },
              w2.id,
              false,
              {
                fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                lineNumber: 51,
                columnNumber: 11
              },
              this
            ))
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
            lineNumber: 43,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/SummaryContent/index.tsx
var summary = {
  Driver: DriverSummary,
  Container: Container4,
  Vehicle: VehicleSummary,
  Washes: WashesSummary
};

// app/routes/_auth.new-wash._index.tsx
var import_node = __toESM(require_node());

// app/components/NewWash/Toast.tsx
var import_react33 = __toESM(require_react());
function useToast2() {
  const toastIdRef = (0, import_react33.useRef)("");
  const toast = useToast();
  function close() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }
  function showErrorToast(message) {
    toastIdRef.current = toast({
      description: message,
      isClosable: true,
      status: "error",
      title: "Erro"
    });
  }
  return { showErrorToast, close };
}

// app/routes/_auth.new-wash._index.tsx
var import_jsx_dev_runtime23 = __toESM(require_jsx_dev_runtime());
function auth_new_wash_index_default() {
  const { Stepper: Stepper3, activeStep, steps: steps2, goToPrevious, goToNext, setActiveStep } = useStepper();
  const { showErrorToast } = useToast2();
  const [error, setError] = (0, import_react36.useState)(false);
  const [vehicle, setVehicle] = (0, import_react36.useState)(defaultVehicleState);
  const [washes, setWashes] = (0, import_react36.useState)(washesDefaultValue);
  const [driver, setDriver] = (0, import_react36.useState)(defaultDriverValue);
  const submit = useSubmit();
  const data = useLoaderData();
  function addError() {
    setError(true);
  }
  function removeError() {
    setError(false);
  }
  function setDriverData(v) {
    setDriver(v);
  }
  function setVehicleData(v) {
    setVehicle(v);
  }
  function setWashesData(w2) {
    setWashes((s3) => {
      const arr = [...s3];
      const index = s3 == null ? void 0 : s3.findIndex((v) => v.id === w2.id);
      if (index > -1) {
        arr[index] = w2;
      }
      return arr;
    });
  }
  function onFinish() {
    const params = new URLSearchParams();
    params.set("vehicle", JSON.stringify(vehicle));
    params.set("driver", JSON.stringify(driver));
    params.set("washes", JSON.stringify(washes));
    submit(params);
  }
  (0, import_react36.useEffect)(() => {
    if (typeof data !== "undefined") {
      data.error && showErrorToast(data.message);
    }
  }, [data, showErrorToast]);
  const isVehicleDataValid = activeStep === 0 && vehicle.licensePlate && vehicle.type && typeof vehicle.create === "boolean";
  const isDriverValid = activeStep === 2;
  const isLastStep = activeStep < steps2.length + -1;
  const isWashesValid = activeStep === 1 && true;
  const canProceed = (isVehicleDataValid || isDriverValid || isWashesValid) && isLastStep;
  const canGoBack = activeStep > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    Grid,
    {
      blockSize: "100%",
      inlineSize: "100%",
      maxInlineSize: "90%",
      marginInline: "auto",
      gridAutoFlow: "column",
      gap: 1,
      gridTemplateColumns: "auto 1fr",
      gridTemplateRows: "100%",
      paddingBlock: [4, 8],
      paddingInline: 4,
      overflow: "hidden",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          Stepper3,
          {
            activeStep,
            setActiveStep,
            steps: steps2
          },
          void 0,
          false,
          {
            fileName: "app/routes/_auth.new-wash._index.tsx",
            lineNumber: 134,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          Grid,
          {
            gridTemplateColumns: "1fr",
            inlineSize: "100%",
            gridTemplateRows: "auto 1fr",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                Text,
                {
                  placeSelf: "center",
                  as: "h1",
                  fontSize: ["xl", "xl", "2xl"],
                  marginBlockEnd: 4,
                  whiteSpace: "nowrap",
                  children: steps2[activeStep].modalTitle
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 144,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Box, { inlineSize: "100%", marginInline: "auto", overflow: "scroll", children: [
                activeStep === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                  VehicleContent,
                  {
                    setVehicleData,
                    vehicle,
                    addError,
                    removeError
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 155,
                    columnNumber: 13
                  },
                  this
                ),
                activeStep === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                  WashesContent,
                  {
                    washes,
                    setWashes: setWashesData,
                    licensePlate: vehicle.licensePlate,
                    addError,
                    removeError
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 163,
                    columnNumber: 13
                  },
                  this
                ),
                activeStep === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(DriverContent, { driver, setDriverData }, void 0, false, {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 172,
                  columnNumber: 13
                }, this),
                activeStep === 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(summary.Container, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                    summary.Vehicle,
                    {
                      vehicle,
                      goTo: () => setActiveStep(0)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_auth.new-wash._index.tsx",
                      lineNumber: 176,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(summary.Washes, { washes, goTo: () => setActiveStep(1) }, void 0, false, {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 180,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(summary.Driver, { driver, goTo: () => setActiveStep(2) }, void 0, false, {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 181,
                    columnNumber: 15
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 175,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_auth.new-wash._index.tsx",
                lineNumber: 153,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                NewWashFooter,
                {
                  isNextButtonDisable: error || !canProceed,
                  isPreviousButtonDisable: !canGoBack,
                  goBack: goToPrevious,
                  goNext: goToNext,
                  onFinish,
                  isLastStep: steps2.length - 1 === activeStep
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 185,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_auth.new-wash._index.tsx",
            lineNumber: 139,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/_auth.new-wash._index.tsx",
      lineNumber: 121,
      columnNumber: 5
    },
    this
  );
}
export {
  auth_new_wash_index_default as default
};
//# sourceMappingURL=/build/routes/_auth.new-wash._index-D2E6OCWS.js.map
