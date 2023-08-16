import {
  _typeof
} from "http://localhost:3001/build/_shared/chunk-IJA4GF5B.js";
import {
  createHotContext
} from "http://localhost:3001/build/_shared/chunk-KFR6H6JJ.js";
import "http://localhost:3001/build/_shared/chunk-I54TBTTL.js";
import {
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "http://localhost:3001/build/_shared/chunk-CT6324V4.js";

// browser-route-module:routes/washes-search/route.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// src/domain/shared/date-manipulator.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/date-fns/esm/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/date-fns/esm/addDays/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/date-fns/esm/_lib/toInteger/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
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

// node_modules/date-fns/esm/toDate/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/date-fns/esm/_lib/requiredArgs/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
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
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
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
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function isSunday(dirtyDate) {
  requiredArgs(1, arguments);
  return toDate(dirtyDate).getDay() === 0;
}

// node_modules/date-fns/esm/startOfDay/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/constants/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
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
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
  var dateRightStartOfDay = startOfDay(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

// node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}

// node_modules/date-fns/esm/formatISO/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function formatISO(date, options) {
  var _options$format, _options$representati;
  requiredArgs(1, arguments);
  var originalDate = toDate(date);
  if (isNaN(originalDate.getTime())) {
    throw new RangeError("Invalid time value");
  }
  var format = String((_options$format = options === null || options === void 0 ? void 0 : options.format) !== null && _options$format !== void 0 ? _options$format : "extended");
  var representation = String((_options$representati = options === null || options === void 0 ? void 0 : options.representation) !== null && _options$representati !== void 0 ? _options$representati : "complete");
  if (format !== "extended" && format !== "basic") {
    throw new RangeError("format must be 'extended' or 'basic'");
  }
  if (representation !== "date" && representation !== "time" && representation !== "complete") {
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  }
  var result = "";
  var tzOffset = "";
  var dateDelimiter = format === "extended" ? "-" : "";
  var timeDelimiter = format === "extended" ? ":" : "";
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
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function isAfter(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

// node_modules/date-fns/esm/isBefore/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function isBefore(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

// node_modules/date-fns/esm/parseISO/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
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

// src/domain/shared/date-manipulator.ts
function wrapper() {
  return {
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
      return this.parseDateToString(addMonths(this.parseISOStringToDate(date), amount));
    },
    parseDateToString(date) {
      return formatISO(date);
    },
    addDaysToDate(date, amount) {
      return this.parseDateToString(addDays(this.parseISOStringToDate(date), amount));
    },
    isSunday(date) {
      return isSunday(this.parseISOStringToDate(date));
    },
    isSameDay(x, y) {
      return isSameDay(this.parseISOStringToDate(x), this.parseISOStringToDate(y));
    }
  };
}
var dateManipulator = wrapper();

// browser-route-module:routes/washes-search/route.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/washes-search/route.ts"
  );
}
function getDate(date, days) {
  const parsedDate = dateManipulator.parseDateToString(date ?? /* @__PURE__ */ new Date());
  return dateManipulator.addDaysToDate(parsedDate, days ?? 0);
}
var mocks = {
  washCycles: [
    {
      id: "fake-cycle-id",
      vehicleId: "PO6778",
      startDate: getDate(),
      endDate: getDate(/* @__PURE__ */ new Date(), 28),
      washesId: ["1", "2", "3", "4"],
      completedWashes: []
    },
    {
      id: "fake-cycle-id2",
      vehicleId: "LAPW123",
      startDate: getDate(),
      endDate: getDate(/* @__PURE__ */ new Date(), 28),
      washesId: ["1", "2", "3", "4"],
      completedWashes: []
    },
    {
      id: "fake-cycle-id3",
      vehicleId: "HUHDWQE",
      startDate: getDate(),
      endDate: getDate(/* @__PURE__ */ new Date(), 28),
      washesId: ["1", "2", "3", "4"],
      completedWashes: []
    }
  ],
  washes: [
    {
      id: "1",
      vehicleId: "PO6778",
      scheduleDate: getDate(),
      cycleId: "fake-cycle-id",
      note: "Lavar ca\xE7amba do caminh\xE3o",
      isCompleted: false,
      createdBy: "fake-user"
    },
    {
      id: "2",
      vehicleId: "PO6778",
      scheduleDate: getDate(/* @__PURE__ */ new Date(), 7),
      cycleId: "fake-cycle-id",
      note: "Lavar roda traseira",
      isCompleted: false,
      createdBy: "fake-user"
    },
    {
      id: "3",
      vehicleId: "PO6778",
      scheduleDate: getDate(/* @__PURE__ */ new Date(), 14),
      cycleId: "fake-cycle-id",
      isCompleted: false,
      createdBy: "fake-user"
    },
    {
      id: "4",
      vehicleId: "PO6778",
      scheduleDate: getDate(/* @__PURE__ */ new Date(), 22),
      cycleId: "fake-cycle-id",
      isCompleted: false,
      createdBy: "fake-user"
    },
    {
      id: "5",
      vehicleId: "LAPW123",
      scheduleDate: getDate(/* @__PURE__ */ new Date(), 4),
      cycleId: "fake-cycle-id2",
      isCompleted: false,
      createdBy: "fake-user"
    },
    {
      id: "6",
      vehicleId: "HUHDWQE",
      scheduleDate: getDate(/* @__PURE__ */ new Date(), 3),
      cycleId: "fake-cycle-id3",
      isCompleted: false,
      createdBy: "fake-user"
    }
  ]
};
export {
  mocks
};
//# sourceMappingURL=http://localhost:3001/build/routes/washes-search-MIRG2EVD.js.map
