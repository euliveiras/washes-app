var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_react3 = require("@remix-run/react");

// app/context.tsx
var import_react = require("react"), ServerStyleContext = (0, import_react.createContext)(null), ClientStyleContext = (0, import_react.createContext)(null);

// app/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache")), defaultCache = createEmotionCache();
function createEmotionCache() {
  return (0, import_cache.default)({ key: "cha" });
}

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, { value: null, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, { value: chunks.styles, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("react"), import_react5 = require("@emotion/react"), import_react6 = require("@chakra-ui/react"), import_react7 = require("@remix-run/react");
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => [
  {
    charset: "utf-8",
    title: "washes-app",
    viewport: "width=device-width,initial-scale=1"
  }
], links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  }
], Document = (0, import_react5.withEmotionCache)(
  ({ children }, emotionCache) => {
    let serverStyleData = (0, import_react4.useContext)(ServerStyleContext), clientStyleData = (0, import_react4.useContext)(ClientStyleContext);
    return (0, import_react4.useEffect)(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData == null || clientStyleData.reset();
    }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "meta",
          {
            name: "viewport",
            content: "width=device-width,initial-scale=1"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 66,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.Meta, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.Links, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "style",
          {
            "data-emotion": `${key} ${ids.join(" ")}`,
            dangerouslySetInnerHTML: { __html: css }
          },
          key,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 73,
            columnNumber: 13
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this);
  }
), theme = (0, import_react6.extendTheme)({
  styles: {
    global: {
      "html, body": {
        minBlockSize: "100vh",
        width: "100%",
        backgroundColor: "#FFFFFF",
        fontFamily: "Ubuntu, sans-serif"
      }
    }
  }
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.ScrollRestoration, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.ChakraProvider, { theme, resetCSS: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.new-wash._index.tsx
var auth_new_wash_index_exports = {};
__export(auth_new_wash_index_exports, {
  action: () => action,
  default: () => NewWash
});
var import_react38 = require("@chakra-ui/react");

// app/components/NewWash/Stepper/index.ts
var import_md = require("react-icons/md"), import_react9 = require("@chakra-ui/react");

// app/components/NewWash/Stepper/Stepper.tsx
var import_react8 = require("@chakra-ui/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Stepper({ steps: steps2, activeStep, setActiveStep }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_react8.Stepper,
    {
      index: activeStep,
      orientation: "vertical",
      blockSize: "100%",
      size: ["md", "md", "lg"],
      children: steps2.map(({ IconIncomplete, IconActive, label }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react8.Step, { onClick: (e) => setActiveStep(index), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react8.StepIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          import_react8.StepStatus,
          {
            complete: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react8.StepIcon, {}, void 0, !1, {
              fileName: "app/components/NewWash/Stepper/Stepper.tsx",
              lineNumber: 31,
              columnNumber: 25
            }, this),
            incomplete: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconIncomplete, { size: 20 }, void 0, !1, {
              fileName: "app/components/NewWash/Stepper/Stepper.tsx",
              lineNumber: 32,
              columnNumber: 27
            }, this),
            active: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconActive, { size: 20 }, void 0, !1, {
              fileName: "app/components/NewWash/Stepper/Stepper.tsx",
              lineNumber: 33,
              columnNumber: 23
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewWash/Stepper/Stepper.tsx",
            lineNumber: 30,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/NewWash/Stepper/Stepper.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          import_react8.Box,
          {
            flexShrink: "0",
            paddingBlockStart: 1,
            display: ["none", "none", "none", "block"],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react8.StepTitle, { children: label }, void 0, !1, {
              fileName: "app/components/NewWash/Stepper/Stepper.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewWash/Stepper/Stepper.tsx",
            lineNumber: 37,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react8.StepSeparator, {}, void 0, !1, {
          fileName: "app/components/NewWash/Stepper/Stepper.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this)
      ] }, index, !0, {
        fileName: "app/components/NewWash/Stepper/Stepper.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this))
    },
    void 0,
    !1,
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
    IconIncomplete: import_md.MdDirectionsCarFilled,
    IconActive: import_md.MdDirectionsCarFilled,
    isNullable: !1,
    modalTitle: "Escolher ve\xEDculo"
  },
  {
    label: "washes",
    IconIncomplete: import_md.MdWaterDrop,
    IconActive: import_md.MdWaterDrop,
    isNullable: !1,
    modalTitle: "Cadastrar lavagens"
  },
  {
    label: "driver",
    IconIncomplete: import_md.MdPerson2,
    IconActive: import_md.MdPerson2,
    isNullable: !0,
    modalTitle: "Escolher motorista"
  },
  {
    label: "summary",
    IconIncomplete: import_md.MdCheck,
    IconActive: import_md.MdCheck,
    isNullable: !1,
    modalTitle: "Confirmar op\xE7\xF5es"
  }
];
function useStepper() {
  let { activeStep, goToNext, goToPrevious, setActiveStep } = (0, import_react9.useSteps)({
    index: 0,
    count: steps.length
  });
  return {
    Stepper,
    activeStep,
    goToNext,
    goToPrevious,
    steps,
    setActiveStep
  };
}

// src/domain/shared/date-manipulator.ts
var import_date_fns = require("date-fns"), import_date_fns_tz = require("date-fns-tz"), import_locale = require("date-fns/locale"), timezone = "UTC";
function wrapper() {
  return {
    toZonedTime(date) {
      return (0, import_date_fns_tz.utcToZonedTime)(date, timezone);
    },
    toUTC(date) {
      return (0, import_date_fns_tz.zonedTimeToUtc)(date, timezone);
    },
    isAfter(date, dateToCompare) {
      let x = (0, import_date_fns.parseISO)(date), y = (0, import_date_fns.parseISO)(dateToCompare);
      return (0, import_date_fns.isAfter)(x, y);
    },
    isBefore(date, dateToCompare) {
      let x = this.parseISOStringToDate(date), y = this.parseISOStringToDate(dateToCompare);
      return (0, import_date_fns.isBefore)(x, y);
    },
    parseISOStringToDate(str) {
      if (!str)
        throw new Error("Date string is undefined");
      return (0, import_date_fns.parseISO)(str);
    },
    addMonthsToDate(date, amount) {
      return this.parseDateToString(
        (0, import_date_fns.addMonths)(this.parseISOStringToDate(date), amount)
      );
    },
    parseDateToString(date) {
      return date.toISOString();
    },
    addDaysToDate(date, amount) {
      return this.parseDateToString(
        (0, import_date_fns.addDays)(this.parseISOStringToDate(date), amount)
      );
    },
    isSunday(date) {
      return (0, import_date_fns.isSunday)(this.parseISOStringToDate(date));
    },
    isSameDay(x, y) {
      return (0, import_date_fns.isSameDay)(
        this.parseISOStringToDate(x),
        this.parseISOStringToDate(y)
      );
    },
    format(date, format2) {
      return typeof date == "string" ? (0, import_date_fns_tz.format)(this.toZonedTime(date), format2, {
        locale: import_locale.ptBR
      }) : (0, import_date_fns_tz.format)(date, format2, {
        locale: import_locale.ptBR
      });
    },
    isToday(date) {
      return typeof date == "string" ? (0, import_date_fns.isToday)(this.toZonedTime(date)) : (0, import_date_fns.isToday)(date);
    }
  };
}
var dateManipulator = wrapper();

// app/components/hooks/useDate.ts
function format(date, format2) {
  return dateManipulator.format(date, format2 ?? "yyyy-MM-dd");
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
    let newDate2 = dateManipulator.addDaysToDate(formattedDate, days);
    return parseISOStringToDate(newDate2);
  }
  let newDate = dateManipulator.addDaysToDate(date, days);
  return parseISOStringToDate(newDate);
}
function isToday(date) {
  return dateManipulator.isToday(date);
}
function useDate() {
  function format2(date, format3) {
    return dateManipulator.format(date, format3 ?? "yyyy-MM-dd");
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
      let newDate2 = dateManipulator.addDaysToDate(formattedDate, days);
      return parseISOStringToDate2(newDate2);
    }
    let newDate = dateManipulator.addDaysToDate(date, days);
    return parseISOStringToDate2(newDate);
  }
  return { parseDateToString: parseDateToString2, parseISOStringToDate: parseISOStringToDate2, addDays: addDays3, format: format2 };
}

// app/components/NewWash/WashesContent/WashesContent.tsx
var import_react14 = require("@chakra-ui/react"), import_react15 = require("@remix-run/react");
var import_react16 = require("react");

// app/components/NewWash/WashesContent/Container.tsx
var import_react10 = require("@chakra-ui/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Container({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    import_react10.Grid,
    {
      blockSize: "100%",
      placeItems: "center",
      gridAutoRows: "min-content",
      gap: 8,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/NewWash/WashesContent/Container.tsx",
      lineNumber: 6,
      columnNumber: 5
    },
    this
  );
}

// app/components/LinkHighlighted.tsx
var import_react11 = require("@chakra-ui/react"), import_react_router_dom = require("react-router-dom"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function LinkHighlighted({ to, children, LinkProps }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react11.Link, { marginInline: 1, ...LinkProps, as: import_react_router_dom.Link, to, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react11.Box,
    {
      position: "relative",
      inlineSize: "fit-content",
      zIndex: 1,
      _before: {
        content: "''",
        position: "absolute",
        width: "calc(100% + 4px)",
        height: "60%",
        left: "-2px",
        bottom: "0",
        zIndex: "-1",
        transform: "rotate(-2deg)",
        bgColor: "#D6BCFA"
      },
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/LinkHighlighted.tsx",
      lineNumber: 15,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/LinkHighlighted.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/WashesContent/Form.tsx
var import_react12 = require("@chakra-ui/react"), import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Form({
  isCompleted,
  id,
  onChange,
  note,
  title,
  defaultDate,
  minDate,
  removeWash,
  cycleId,
  disabled = !1
}) {
  let scheduleDate = format(defaultDate);
  function onFormChange(e) {
    var _a, _b, _c;
    let form = new FormData(e.currentTarget), scheduleDate2 = ((_a = form.get("scheduleDate")) == null ? void 0 : _a.toString()) ?? "", note2 = ((_b = form.get("note")) == null ? void 0 : _b.toString()) ?? "", isCompleted2 = form.get("isCompleted") === "", id2 = ((_c = form.get("id")) == null ? void 0 : _c.toString()) ?? "";
    onChange && onChange({ note: note2, isCompleted: isCompleted2, id: Number(id2), scheduleDate: scheduleDate2, title });
  }
  function onClick() {
    removeWash(Number(id));
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_react12.Box,
    {
      as: import_react13.Form,
      onChange: onFormChange,
      className: "wash-form",
      blockSize: "100%",
      inlineSize: "100%",
      position: "relative",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react12.CloseButton, { onClick, position: "absolute", right: 0, top: -4 }, void 0, !1, {
          fileName: "app/components/NewWash/WashesContent/Form.tsx",
          lineNumber: 68,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react12.Input, { type: "hidden", name: "id", value: id }, void 0, !1, {
          fileName: "app/components/NewWash/WashesContent/Form.tsx",
          lineNumber: 69,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react12.Input, { type: "hidden", name: "cycleId", value: cycleId }, void 0, !1, {
          fileName: "app/components/NewWash/WashesContent/Form.tsx",
          lineNumber: 70,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_react12.Flex,
          {
            maxInlineSize: "360px",
            flexDir: "column",
            gap: 6,
            marginInline: "auto",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react12.Text, { marginInline: "auto", marginBlockStart: 2, fontSize: "lg", children: title }, void 0, !1, {
                fileName: "app/components/NewWash/WashesContent/Form.tsx",
                lineNumber: 77,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react12.FormControl, { as: import_react12.Flex, flexDir: "column", align: "center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react12.FormLabel, { inlineSize: "fit-content", children: "data" }, void 0, !1, {
                  fileName: "app/components/NewWash/WashesContent/Form.tsx",
                  lineNumber: 81,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  import_react12.Input,
                  {
                    name: "scheduleDate",
                    inlineSize: "180px",
                    type: "date",
                    defaultValue: scheduleDate,
                    disabled
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/NewWash/WashesContent/Form.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react12.FormHelperText, { color: "gray.400", children: "m\xEAs/dia/ano" }, void 0, !1, {
                  fileName: "app/components/NewWash/WashesContent/Form.tsx",
                  lineNumber: 90,
                  columnNumber: 11
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/NewWash/WashesContent/Form.tsx",
                lineNumber: 80,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react12.FormControl, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react12.FormLabel, { inlineSize: "fit-content", marginInline: "auto", children: "notas" }, void 0, !1, {
                  fileName: "app/components/NewWash/WashesContent/Form.tsx",
                  lineNumber: 94,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  import_react12.Textarea,
                  {
                    name: "note",
                    noOfLines: 6,
                    placeholder: "escreva notas sobre esta lavagem",
                    resize: "none",
                    defaultValue: note,
                    disabled
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/NewWash/WashesContent/Form.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/NewWash/WashesContent/Form.tsx",
                lineNumber: 93,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_react12.FormControl,
                {
                  as: import_react12.Flex,
                  inlineSize: "fit-content",
                  marginInline: "auto",
                  align: "center",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react12.FormLabel, { marginBlock: 0, marginInlineEnd: 6, children: "lavagem feita?" }, void 0, !1, {
                      fileName: "app/components/NewWash/WashesContent/Form.tsx",
                      lineNumber: 112,
                      columnNumber: 11
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      import_react12.Checkbox,
                      {
                        defaultChecked: isCompleted,
                        name: "isCompleted",
                        disabled
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/NewWash/WashesContent/Form.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/NewWash/WashesContent/Form.tsx",
                  lineNumber: 106,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/NewWash/WashesContent/Form.tsx",
            lineNumber: 71,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/NewWash/WashesContent/Form.tsx",
      lineNumber: 60,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/WashesContent/WashesContent.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function WashesContent({
  washes: parentWashes,
  licensePlate,
  removeWash
}) {
  var _a;
  let { data, submit } = (0, import_react15.useFetcher)(), existTodayWash = (_a = data == null ? void 0 : data.washes) == null ? void 0 : _a.find(
    (w) => isToday(w.scheduleDate) && w
  ), existWashCycle = data == null ? void 0 : data.washCycle, [washes, setWashes] = (0, import_react16.useState)(void 0), actionData = (0, import_react15.useActionData)(), homeActionData = (0, import_react15.useActionData)();
  function onChange(data2) {
    setWashes((s) => {
      if (!s)
        return [data2];
      let arr = [...s], i = s == null ? void 0 : s.findIndex((w) => w.id === data2.id);
      return i > -1 ? arr[i] = data2 : arr.push(data2), arr;
    });
  }
  return (0, import_react16.useEffect)(() => {
    submit({ licensePlate }, { action: "/washes-search" });
  }, [submit, licensePlate]), (0, import_react16.useEffect)(() => {
    parentWashes.length > 0 ? setWashes(parentWashes) : existWashCycle ? existTodayWash || setWashes([washesDefaultValue[0]]) : setWashes(washesDefaultValue);
  }, [submit, licensePlate, existTodayWash, existWashCycle, parentWashes]), !washes || !data ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react14.Text, { children: "Carregando..." }, void 0, !1, {
    fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
    lineNumber: 81,
    columnNumber: 32
  }, this) : existTodayWash ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react14.Flex, { flexDir: "column", align: "center", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react14.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react14.Alert, { status: "info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react14.AlertIcon, {}, void 0, !1, {
        fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react14.Text, { children: [
        "H\xE1 uma lavagem hoje para o ve\xEDculo",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LinkHighlighted, { to: `/vehicle/${licensePlate}`, children: licensePlate }, void 0, !1, {
          fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_react14.Box,
      {
        maxInlineSize: "320px",
        marginInline: [0, 8],
        border: "4px",
        borderColor: "blue.400",
        borderRadius: "lg",
        paddingInline: 4,
        paddingBlock: 8,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          Form,
          {
            id: existTodayWash.id,
            onChange,
            isCompleted: !0,
            title: existTodayWash.title,
            defaultDate: existTodayWash.scheduleDate,
            note: existTodayWash.note,
            removeWash,
            disabled: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
            lineNumber: 107,
            columnNumber: 11
          },
          this
        )
      },
      existTodayWash.id,
      !1,
      {
        fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
        lineNumber: 97,
        columnNumber: 9
      },
      this
    ),
    !existTodayWash.isCompleted && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.Form, { action: "/home", method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react14.Input, { type: "hidden", name: "id", value: existTodayWash.id }, void 0, !1, {
        fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react14.Input, { type: "hidden", name: "isCompleted", value: "true" }, void 0, !1, {
        fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react14.Button, { variant: "solid", colorScheme: "blue", type: "submit", children: "Confirmar lavagem?" }, void 0, !1, {
        fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
      lineNumber: 119,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Container, { children: [
    existWashCycle && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_react14.Input,
      {
        type: "hidden",
        className: "cycleId",
        name: "cycleId",
        value: existWashCycle.id,
        readOnly: !0
      },
      void 0,
      !1,
      {
        fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
        lineNumber: 133,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_react14.Grid,
      {
        gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
        gap: 10,
        paddingBlockEnd: 8,
        placeItems: "center",
        children: washes == null ? void 0 : washes.map((w) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_react14.Box,
          {
            maxInlineSize: "320px",
            marginInline: [0, 8],
            border: "4px",
            borderColor: "blue.400",
            borderRadius: "lg",
            paddingInline: 4,
            paddingBlock: 8,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              Form,
              {
                id: w.id,
                onChange,
                isCompleted: w.isCompleted,
                title: w.title,
                defaultDate: w.scheduleDate,
                minDate: w.minDate,
                note: w.note ?? "",
                removeWash
              },
              void 0,
              !1,
              {
                fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
                lineNumber: 158,
                columnNumber: 13
              },
              this
            )
          },
          w.scheduleDate,
          !1,
          {
            fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
            lineNumber: 148,
            columnNumber: 11
          },
          this
        ))
      },
      void 0,
      !1,
      {
        fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
        lineNumber: 141,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
    lineNumber: 131,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/WashesContent/index.tsx
var baseDate = /* @__PURE__ */ new Date();
var formatedDates = {
  minDate: format(baseDate, "yyyy-MM-dd"),
  firstDate: format(baseDate, "yyyy-MM-dd"),
  secDate: format(addDays2(baseDate, 7), "yyyy-MM-dd"),
  thirdDate: format(addDays2(baseDate, 14), "yyyy-MM-dd"),
  fourthDate: format(addDays2(baseDate, 21), "yyyy-MM-dd")
};
var washesDefaultValue = [
  {
    id: 1,
    scheduleDate: formatedDates.firstDate,
    note: "",
    isCompleted: !1,
    title: "primeira lavagem",
    minDate: formatedDates.minDate
  },
  {
    id: 2,
    scheduleDate: formatedDates.secDate,
    note: "",
    isCompleted: !1,
    title: "segunda lavagem",
    minDate: formatedDates.minDate
  },
  {
    id: 3,
    scheduleDate: formatedDates.thirdDate,
    note: "",
    isCompleted: !1,
    title: "terceira lavagem",
    minDate: formatedDates.minDate
  },
  {
    id: 4,
    scheduleDate: formatedDates.fourthDate,
    note: "",
    isCompleted: !1,
    title: "quarta lavagem",
    minDate: formatedDates.minDate
  }
];

// app/components/NewWash/VehicleContent/Container.tsx
var import_react26 = require("@chakra-ui/react");

// app/components/NewWash/VehicleContent/NewVehicleForm.tsx
var import_react17 = require("@chakra-ui/react"), import_react18 = require("@remix-run/react"), import_react19 = require("react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), selectOptions = [
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
  let timeoutId = (0, import_react19.useRef)(null), secondTimeOutId = (0, import_react19.useRef)(null), { data, submit } = (0, import_react18.useFetcher)(), isDisabled = !vehicle.create, error = data != null && data.vehicle ? { message: "Placa j\xE1 existe" } : null;
  function onInputChange(e) {
    secondTimeOutId.current && clearTimeout(secondTimeOutId.current), secondTimeOutId.current = setTimeout(() => {
      submit(
        { unique: "True", licensePlate: e.target.value },
        { action: "/vehicle-search" }
      );
    }, 1e3);
  }
  function onFormChange(e) {
    var _a, _b;
    let form = new FormData(e.currentTarget), create = form.get("create") === "", licensePlate = ((_a = form.get("licensePlate")) == null ? void 0 : _a.toString()) ?? "", type = (_b = form.get("type")) == null ? void 0 : _b.toString();
    if (create) {
      if (!licensePlate && !type) {
        onChange({ licensePlate: "", type: "", create });
        return;
      }
      timeoutId.current && clearTimeout(timeoutId.current), timeoutId.current = setTimeout(() => {
        onChange({ licensePlate, type, create });
      }, 1e3);
    } else
      onChange({ licensePlate: "", type: "", create });
  }
  return (0, import_react19.useEffect)(() => {
    data != null && data.vehicle ? addError() : removeError();
  }, [data == null ? void 0 : data.vehicle, removeError, addError]), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react18.Form, { onChange: onFormChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react17.Grid, { gridAutoRows: "min-content", placeContent: "center", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_react17.FormControl,
      {
        as: import_react17.Flex,
        blockSize: "min-content",
        gap: 4,
        paddingBlockStart: [0, 0, 1],
        align: "center",
        justify: "center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react17.FormLabel, { margin: 0, htmlFor: "vehicle_create", children: "Adicionar novo ve\xEDculo?" }, void 0, !1, {
            fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
            lineNumber: 93,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_react17.Checkbox,
            {
              defaultChecked: vehicle.create,
              id: "vehicle_create",
              name: "create",
              size: "lg",
              justifySelf: "center"
            },
            void 0,
            !1,
            {
              fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
              lineNumber: 96,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
        lineNumber: 85,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react17.Flex, { flexDir: "column", gap: 6, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_react17.FormControl,
        {
          as: import_react17.Grid,
          gridTemplateRows: "min-content",
          gridAutoFlow: ["row", "row", "column"],
          placeItems: "center",
          marginBlockStart: 8,
          gap: 4,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react17.Flex, { flexDir: "column", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              import_react17.FormLabel,
              {
                margin: 0,
                marginInline: "auto",
                htmlFor: "vehicle_licensePlate",
                children: "Ve\xEDculo"
              },
              void 0,
              !1,
              {
                fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
                lineNumber: 114,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              import_react17.Input,
              {
                id: "vehicle_licensePlate",
                name: "licensePlate",
                placeholder: "Placa",
                isDisabled,
                defaultValue: vehicle.licensePlate,
                onChange: onInputChange
              },
              void 0,
              !1,
              {
                fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
                lineNumber: 121,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
            lineNumber: 113,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
          lineNumber: 105,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react17.FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_react17.Select,
        {
          isDisabled,
          id: "type",
          name: "type",
          placeholder: "Tipo do ve\xEDculo",
          defaultValue: vehicle.type,
          children: selectOptions.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: o == null ? void 0 : o.toString(), children: o }, o, !1, {
            fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
          lineNumber: 132,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this),
      vehicle.create && error && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react17.Alert, { status: "error", marginBlock: 4, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react17.AlertIcon, {}, void 0, !1, {
          fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
          lineNumber: 148,
          columnNumber: 15
        }, this),
        error.message
      ] }, void 0, !0, {
        fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
        lineNumber: 147,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
    lineNumber: 84,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/VehicleContent/VehicleDivider.tsx
var import_react20 = require("@chakra-ui/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function VehicleDivider() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    import_react20.Box,
    {
      position: "relative",
      padding: 8,
      inlineSize: "100%",
      maxInlineSize: "360px",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react20.Divider, {}, void 0, !1, {
          fileName: "app/components/NewWash/VehicleContent/VehicleDivider.tsx",
          lineNumber: 10,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react20.AbsoluteCenter, { bg: "white", px: "4", children: "ou" }, void 0, !1, {
          fileName: "app/components/NewWash/VehicleContent/VehicleDivider.tsx",
          lineNumber: 11,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/NewWash/VehicleContent/VehicleDivider.tsx",
      lineNumber: 4,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/VehicleContent/VehicleSearch.tsx
var import_react24 = require("@remix-run/react");

// app/components/SearchEntity/Results.tsx
var import_react21 = require("@chakra-ui/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Results({ show, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    import_react21.Flex,
    {
      inlineSize: "100%",
      flexDir: ["column"],
      position: "relative",
      _after: show ? {
        content: "''",
        display: "none",
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
    !1,
    {
      fileName: "app/components/SearchEntity/Results.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/components/SearchEntity/SearchInput.tsx
var import_react22 = require("@chakra-ui/react"), import_react23 = require("react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function SearchInput({ onChange, ...rest }) {
  let timeoutId = (0, import_react23.useRef)(null);
  function onInputQueryChange(e) {
    let value = e.target.value;
    timeoutId.current && clearTimeout(timeoutId.current), timeoutId.current = setTimeout(() => onChange(value), 1e3);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react22.FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react22.InputGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react22.Input, { rounded: "full", onChange: onInputQueryChange, ...rest }, void 0, !1, {
    fileName: "app/components/SearchEntity/SearchInput.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/SearchEntity/SearchInput.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, !1, {
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
var import_react25 = require("@chakra-ui/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function VehicleSearch({ vehicle, setVehicle }) {
  var _a;
  let fetcher = (0, import_react24.useFetcher)(), data = (_a = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a.results;
  function onQuery(e) {
    fetcher.submit(
      { many: "True", licensePlate: e },
      { action: "/vehicle-search" }
    );
  }
  function onClick(e) {
    setVehicle({ ...e, create: !1 });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    import_react25.Grid,
    {
      gap: 4,
      gridAutoFlow: "row",
      placeItems: ["center", "center", "center"],
      maxInlineSize: "200px",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(searchEntity.Input, { onChange: onQuery, isDisabled: vehicle.create }, void 0, !1, {
          fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
          lineNumber: 43,
          columnNumber: 7
        }, this),
        (fetcher == null ? void 0 : fetcher.data) && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_react25.Text,
            {
              inlineSize: "fit-content",
              marginInline: "auto",
              marginBlockStart: 4,
              fontSize: "sm",
              color: "gray.400",
              children: (data == null ? void 0 : data.length) === 0 ? "nenhum resultado encontrado :(" : `mostrando ${data == null ? void 0 : data.length} resultados`
            },
            void 0,
            !1,
            {
              fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
              lineNumber: 46,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(searchEntity.Results, { show: fetcher == null ? void 0 : fetcher.data, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react25.Grid, { gap: 4, maxBlockSize: "260px", overflow: "scroll", children: data == null ? void 0 : data.map((v, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_react25.Flex,
            {
              inlineSize: "100%",
              flexDir: "column",
              gap: 6,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react25.FormControl, { as: import_react25.Flex, flexDir: "column", alignItems: "center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react25.FormLabel, { children: "Placa" }, void 0, !1, {
                    fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                    lineNumber: 68,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                    import_react25.Input,
                    {
                      maxInlineSize: "200px",
                      marginBlockEnd: data.length - 1 === i ? 4 : 0,
                      onClick: () => onClick(v),
                      readOnly: !0,
                      value: v.licensePlate,
                      type: "button",
                      borderColor: vehicle != null && vehicle.licensePlate ? "blue.400" : "gray.200",
                      _hover: {
                        borderColor: vehicle != null && vehicle.licensePlate ? "blue.400" : "gray.300"
                      },
                      focusBorderColor: vehicle != null && vehicle.licensePlate ? "blue.400" : "gray.300"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                      lineNumber: 69,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                  lineNumber: 67,
                  columnNumber: 21
                }, this),
                (data == null ? void 0 : data.length) - 1 !== i && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react25.Divider, { alignSelf: "center", inlineSize: "80%" }, void 0, !1, {
                  fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                  lineNumber: 90,
                  columnNumber: 23
                }, this)
              ]
            },
            `${v.licensePlate} + ${i}`,
            !0,
            {
              fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
              lineNumber: 61,
              columnNumber: 19
            },
            this
          )) }, void 0, !1, {
            fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
            lineNumber: 57,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/VehicleContent/Container.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Container2({
  setVehicleData,
  vehicle,
  addError,
  removeError
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    import_react26.Grid,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(VehicleSearch, { setVehicle: setVehicleData, vehicle }, void 0, !1, {
          fileName: "app/components/NewWash/VehicleContent/Container.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(VehicleDivider, {}, void 0, !1, {
          fileName: "app/components/NewWash/VehicleContent/Container.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          NewVehicleForm,
          {
            vehicle,
            onChange: setVehicleData,
            addError,
            removeError
          },
          void 0,
          !1,
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
    !0,
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
  create: !1
}, VehicleContent = Container2;

// app/routes/_auth.new-wash._index.tsx
var import_react39 = require("react");

// app/components/NewWash/footer.tsx
var import_react27 = require("@chakra-ui/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function NewWashFooter({
  goBack,
  containerProps,
  isNextButtonDisable,
  isPreviousButtonDisable,
  isLastStep,
  onFinish,
  onNextStepClick
}) {
  function onNextStepButtonClick() {
    onNextStepClick();
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    import_react27.Flex,
    {
      placeSelf: "flex-end",
      blockSize: "100%",
      align: "center",
      paddingBlockStart: 8,
      ...containerProps,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          import_react27.Button,
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
          !1,
          {
            fileName: "app/components/NewWash/footer.tsx",
            lineNumber: 42,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          import_react27.Divider,
          {
            blockSize: "100%",
            orientation: "vertical",
            inlineSize: "8px",
            borderColor: "gray.400"
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewWash/footer.tsx",
            lineNumber: 52,
            columnNumber: 7
          },
          this
        ),
        isLastStep ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          import_react27.Button,
          {
            name: "step",
            variant: "ghost",
            colorScheme: "blue",
            onClick: onFinish,
            children: "finalizar"
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewWash/footer.tsx",
            lineNumber: 69,
            columnNumber: 9
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          import_react27.Button,
          {
            name: "step",
            variant: "ghost",
            colorScheme: "blue",
            onClick: onNextStepButtonClick,
            isDisabled: isNextButtonDisable,
            children: "pr\xF3ximo"
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewWash/footer.tsx",
            lineNumber: 59,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/NewWash/footer.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/DriverContent/DriverContent.tsx
var import_react31 = require("@chakra-ui/react");

// app/components/NewWash/DriverContent/NewDriverForm.tsx
var import_react28 = require("@chakra-ui/react"), import_react29 = require("@remix-run/react"), import_react30 = require("react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function NewDriverForm({ driver, setDriverData }) {
  let timeoutId = (0, import_react30.useRef)(null), isDisabled = !driver.create;
  function onFormChange(e) {
    var _a, _b;
    let form = new FormData(e.currentTarget), create = form.get("create") === "", driverName = ((_a = form.get("name")) == null ? void 0 : _a.toString()) ?? "", phone = ((_b = form.get("phone")) == null ? void 0 : _b.toString()) ?? "";
    if (create) {
      if (!driverName) {
        setDriverData({ name: "", create, phone: "" });
        return;
      }
      timeoutId.current && clearTimeout(timeoutId.current), timeoutId.current = setTimeout(() => {
        setDriverData({ name: driverName, create, phone });
      }, 1e3);
    } else
      setDriverData({ name: "", create, phone: "" });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react28.Box, { maxInlineSize: "260px", marginInline: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    import_react29.Form,
    {
      onChange: onFormChange,
      style: { blockSize: "100%", inlineSize: "100%" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react28.Flex, { flexDir: "column", blockSize: "100%", gap: 8, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_react28.FormControl,
          {
            as: import_react28.Flex,
            blockSize: "min-content",
            gap: 4,
            paddingBlockStart: [0, 0, 1],
            align: "center",
            justify: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react28.FormLabel, { margin: 0, htmlFor: "driver-create", children: "Adicionar motorista novo?" }, void 0, !1, {
                fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
                lineNumber: 58,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                import_react28.Checkbox,
                {
                  defaultChecked: driver.create,
                  id: "driver-create",
                  name: "create",
                  size: "lg",
                  justifySelf: "center"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
                  lineNumber: 61,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
            lineNumber: 50,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react28.Flex, { flexDir: "column", gap: 8, inlineSize: "100%", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react28.FormControl, { as: import_react28.Flex, flexDir: "column", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react28.FormLabel, { margin: 0, marginInline: "auto", htmlFor: "driver-name", children: "Motorista" }, void 0, !1, {
              fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
              lineNumber: 71,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_react28.Input,
              {
                id: "driver-name",
                name: "name",
                placeholder: "Nome",
                isDisabled,
                defaultValue: driver.create ? driver.name : ""
              },
              void 0,
              !1,
              {
                fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
                lineNumber: 74,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react28.FormControl, { as: import_react28.Flex, flexDir: "column", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_react28.FormLabel,
              {
                margin: 0,
                marginInline: "auto",
                htmlFor: "driver-phone",
                children: "Telefone"
              },
              void 0,
              !1,
              {
                fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
                lineNumber: 83,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_react28.Input,
              {
                id: "driver-phone",
                name: "phone",
                placeholder: "telefone",
                isDisabled,
                defaultValue: driver.create ? driver.phone : ""
              },
              void 0,
              !1,
              {
                fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
                lineNumber: 90,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
      lineNumber: 45,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/DriverContent/DriverContent.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Root({ setDriverData, driver }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react31.Box, { paddingBlock: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(NewDriverForm, { driver, setDriverData }, void 0, !1, {
    fileName: "app/components/NewWash/DriverContent/DriverContent.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/NewWash/DriverContent/DriverContent.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/DriverContent/index.tsx
var defaultDriverValue = {
  name: "",
  phone: "",
  create: !1
}, DriverContent = Root;

// app/components/NewWash/SummaryContent/Container.tsx
var import_react32 = require("@chakra-ui/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function Container3({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    import_react32.Grid,
    {
      paddingInlineStart: 4,
      gridTemplateColumns: ["100%", "1fr 1fr"],
      gridTemplateRows: ["min-content", "1fr 1fr"],
      gap: 8,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/NewWash/SummaryContent/Container.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/SummaryContent/DriverSummary.tsx
var import_react33 = require("@chakra-ui/react"), import_hi = require("react-icons/hi"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function DriverSummary({ driver, goTo }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    import_react33.Flex,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react33.Text, { as: "h2", fontSize: "md", marginInline: "auto", children: "Informa\xE7\xF5es do motorista" }, void 0, !1, {
          fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          import_react33.Flex,
          {
            flexDir: "column",
            gap: 4,
            blockSize: "fit-content",
            inlineSize: "100%",
            maxInlineSize: "200px",
            align: "center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              import_react33.Button,
              {
                rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_hi.HiExternalLink, { size: 20 }, void 0, !1, {
                  fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                  lineNumber: 37,
                  columnNumber: 22
                }, this),
                variant: "outline",
                onClick: () => goTo(),
                inlineSize: "100%",
                minBlockSize: 12,
                blockSize: "fit-content",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                  import_react33.Flex,
                  {
                    flexDir: "column",
                    gap: 1,
                    paddingBlock: 4,
                    align: "start",
                    marginInlineEnd: 4,
                    inlineSize: "100%",
                    children: driver.create ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react33.Text, { fontSize: "md", children: "Matheus" }, void 0, !1, {
                        fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react33.Flex, { as: "span", gap: 1, inlineSize: "fit-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react33.Text, { fontSize: "sm", fontWeight: "light", children: driver.name }, void 0, !1, {
                        fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                        lineNumber: 56,
                        columnNumber: 19
                      }, this) }, void 0, !1, {
                        fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                      lineNumber: 53,
                      columnNumber: 15
                    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                      import_react33.Text,
                      {
                        textAlign: "left",
                        paddingBlock: 4,
                        fontSize: "sm",
                        whiteSpace: "break-spaces",
                        children: "Nenhum motorista fornecido"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                        lineNumber: 62,
                        columnNumber: 15
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                lineNumber: 36,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
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
    !0,
    {
      fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/SummaryContent/VehicleSummary.tsx
var import_react34 = require("@chakra-ui/react"), import_hi2 = require("react-icons/hi"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function VehicleSummary({ goTo, vehicle }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    import_react34.Flex,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react34.Text, { as: "h2", fontSize: "md", marginInline: "auto", justifySelf: "start", children: "Informa\xE7\xF5es do Ve\xEDculo" }, void 0, !1, {
          fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          import_react34.Button,
          {
            rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_hi2.HiExternalLink, { size: 20 }, void 0, !1, {
              fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
              lineNumber: 29,
              columnNumber: 20
            }, this),
            variant: "outline",
            onClick: () => goTo(),
            blockSize: "fit-content",
            inlineSize: "fit-content",
            minBlockSize: 12,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              import_react34.Flex,
              {
                flexDir: "column",
                gap: 1,
                paddingBlock: 4,
                paddingInlineEnd: 1,
                inlineSize: "auto",
                align: "start",
                marginInlineEnd: "auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react34.Flex, { as: "span", gap: 1, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react34.Text, { fontSize: "md", children: "placa:" }, void 0, !1, {
                      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                      lineNumber: 46,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react34.Text, { fontWeight: "semibold", children: vehicle.licensePlate }, void 0, !1, {
                      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                      lineNumber: 47,
                      columnNumber: 13
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react34.Flex, { as: "span", gap: 1, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react34.Text, { children: "tipo:" }, void 0, !1, {
                      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                      lineNumber: 50,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react34.Text, { fontSize: "sm", fontWeight: "light", children: vehicle.type }, void 0, !1, {
                      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                      lineNumber: 51,
                      columnNumber: 13
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                lineNumber: 36,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
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
    !0,
    {
      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/SummaryContent/WashesSummary.tsx
var import_react35 = require("@chakra-ui/react"), import_hi3 = require("react-icons/hi");
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function ScheduleDate({ date }) {
  let { format: format2 } = useDate(), text = format2(date, "d/MM");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react35.Text, { fontSize: "md", children: text }, void 0, !1, {
    fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
}
function Note({ note }) {
  return note !== "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react35.Flex, { gap: 2, fontSize: "sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react35.Text, { fontWeight: "semibold", children: "nota:" }, void 0, !1, {
      fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react35.Text, { fontWeight: "light", children: note.slice(0, 5) + "..." }, void 0, !1, {
      fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react35.Text, { children: "sem nota" }, void 0, !1, {
    fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function WashesSummary({ goTo, washes }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    import_react35.Flex,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react35.Text, { as: "h2", children: "Informa\xE7\xF5es das lavagens" }, void 0, !1, {
          fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
          lineNumber: 42,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          import_react35.Grid,
          {
            blockSize: "100%",
            inlineSize: "100%",
            gap: 4,
            gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
            placeItems: "center",
            children: washes.map((w) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              import_react35.Button,
              {
                rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_hi3.HiExternalLink, { size: 20 }, void 0, !1, {
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
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                  import_react35.Flex,
                  {
                    flexDir: "column",
                    blockSize: "fit-content",
                    gap: 1,
                    paddingInlineEnd: 4,
                    marginInlineEnd: "auto",
                    align: "start",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ScheduleDate, { date: w.scheduleDate }, void 0, !1, {
                        fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                        lineNumber: 69,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Note, { note: w.note }, void 0, !1, {
                        fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                        lineNumber: 70,
                        columnNumber: 15
                      }, this),
                      w.isCompleted && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react35.Flex, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react35.Text, { fontStyle: "italic", fontSize: "sm", children: "lavagem j\xE1 feita" }, void 0, !1, {
                        fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                        lineNumber: 73,
                        columnNumber: 19
                      }, this) }, void 0, !1, {
                        fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                    lineNumber: 61,
                    columnNumber: 13
                  },
                  this
                )
              },
              w.id,
              !1,
              {
                fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                lineNumber: 51,
                columnNumber: 11
              },
              this
            ))
          },
          void 0,
          !1,
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
    !0,
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
  Container: Container3,
  Vehicle: VehicleSummary,
  Washes: WashesSummary
};

// app/routes/_auth.new-wash._index.tsx
var import_remix2 = require("@vercel/remix"), import_react40 = require("@remix-run/react");

// app/components/hooks/useToast.ts
var import_react36 = require("react"), import_react37 = require("@chakra-ui/react"), useToast = () => {
  let toastIdRef = (0, import_react36.useRef)(""), toast = (0, import_react37.useToast)(), close = (0, import_react36.useCallback)(() => {
    toastIdRef.current && toast.close(toastIdRef.current);
  }, [toast]), showErrorToast = (0, import_react36.useCallback)(
    ({
      message,
      title,
      ...rest
    }) => {
      toastIdRef.current = toast({
        description: message,
        isClosable: !0,
        status: "error",
        title: title ?? "Erro",
        position: "top",
        ...rest
      });
    },
    [toast]
  ), showSuccessToast = (0, import_react36.useCallback)(
    ({
      message,
      title,
      ...rest
    }) => {
      toastIdRef.current = toast({
        description: message,
        isClosable: !0,
        status: "success",
        title: title ?? "Tudo certo",
        position: "top",
        ...rest
      });
    },
    [toast]
  );
  return { showErrorToast, close, showSuccessToast };
};

// src/domain/modules/driver/entities/Driver.ts
var Driver = class {
  constructor(props) {
    this._props = {
      ...props,
      phones: props.phones ?? []
    };
  }
  get name() {
    return this._props.name;
  }
  set name(name) {
    this._props.name = name;
  }
  get phones() {
    return this._props.phones;
  }
  addPhone(phone) {
    var _a;
    (_a = this._props.phones) == null || _a.push(phone);
  }
  get organizationId() {
    return this._props.organizationId;
  }
  set organizationId(id) {
    this._props.organizationId = id;
  }
};

// src/domain/modules/vehicle/entities/Vehicle.ts
var Vehicle = class {
  constructor(props) {
    this._props = {
      ...props
    };
  }
  get licensePlate() {
    return this._props.licensePlate;
  }
  get vehicleType() {
    return this._props.vehicleType;
  }
  get driver() {
    return this._props.driver;
  }
};

// src/domain/modules/vehicle/use-cases/create-vehicle.ts
var CreateVehicle = class {
  constructor(db) {
    this.db = db;
  }
  async execute(data) {
    let vehicle = new Vehicle({
      ...data,
      driver: data.driver ? new Driver({ ...data.driver }) : void 0
    });
    return await this.db.create(vehicle), { vehicle };
  }
};

// src/infra/database/prisma/prisma.ts
var import_client = require("@prisma/client"), globalForPrisma = global, prisma = globalForPrisma.prisma || new import_client.PrismaClient({ log: ["query", "info", "warn", "error"] });
globalForPrisma.prisma = prisma;

// src/infra/database/prisma/mappers/prisma-vehicle-mapper.ts
var PrismaVehicleMapper = class {
  static toDomain(raw) {
    return new Vehicle({
      driver: raw.driver ? JSON.parse(raw.driver) : void 0,
      licensePlate: raw.licensePlate,
      vehicleType: raw.vehicleType
    });
  }
  static toPrisma(vehicle) {
    return {
      driver: vehicle.driver ? JSON.stringify({
        name: vehicle.driver.name,
        phones: vehicle.driver.phones
      }) : void 0,
      licensePlate: vehicle.licensePlate.toUpperCase(),
      vehicleType: vehicle.vehicleType
    };
  }
};

// src/infra/database/prisma/repositories/vehicle-repository.ts
var PrismaVehicleRepository = class {
  async create(vehicle) {
    await prisma.vehicle.create({
      data: PrismaVehicleMapper.toPrisma(vehicle)
    });
  }
  async findByLicensePlate(str) {
    let licensePlate = str.toUpperCase(), data = await prisma.vehicle.findUnique({
      where: { licensePlate }
    });
    return data ? PrismaVehicleMapper.toDomain(data) : null;
  }
  async findManyLicensePlate(str) {
    let licensePlate = str.toUpperCase();
    return (await prisma.vehicle.findMany({
      where: {
        licensePlate: {
          contains: licensePlate
        }
      }
    })).map((v) => PrismaVehicleMapper.toDomain(v));
  }
};

// src/infra/http/mappers/http-mapper.ts
function toHttp(user) {
  return {
    id: user.id,
    email: user.email,
    role: user.role,
    username: user.username
  };
}
var HttpMapper = class {
  static vehicle(v) {
    return {
      type: v.vehicleType,
      driver: v.driver ?? void 0,
      licensePlate: v.licensePlate
    };
  }
  static washCycle(c) {
    return {
      id: c.id,
      startDate: c.startDate,
      endDate: c.endDate,
      note: c.note,
      completedWashes: c.completedWashes,
      washesId: c.washesId
    };
  }
  static wash(w) {
    return {
      id: w.id,
      scheduleDate: w.scheduleDate,
      createdBy: w.createdBy,
      isCompleted: w.isCompleted,
      note: w.note,
      vehicleId: w.vehicleId
    };
  }
};

// src/infra/http/errors/app-error.ts
var AppError = class extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message, this.statusCode = statusCode ?? 400;
  }
};

// src/infra/http/utils/async-wrapper.ts
function asyncWrapper(fn) {
  try {
    return fn();
  } catch (err) {
    return console.log(err), err instanceof AppError ? { error: { message: err.message, statusCode: err.statusCode } } : err instanceof Error ? { error: { message: err.message, statusCode: 500 } } : { error: { message: "something went wrong", statusCode: 500 } };
  }
}

// src/infra/http/controllers/create-vehicle-controller.ts
var createVehicleRepository = new PrismaVehicleRepository(), createVehicleService = new CreateVehicle(createVehicleRepository);
async function controller(data) {
  var _a;
  if (!data)
    throw new AppError("Data DTO is required", 400);
  let driver = data.driver ? {
    ...data.driver,
    phones: [(_a = data.driver) == null ? void 0 : _a.phone]
  } : void 0, { vehicle } = await createVehicleService.execute({
    licensePlate: data.licensePlate,
    vehicleType: data.type,
    driver
  });
  if (!vehicle)
    throw new AppError("Vehicle creation service error", 400);
  return { vehicle: HttpMapper.vehicle(vehicle) };
}
async function createVehicleController(data) {
  return asyncWrapper(() => controller(data));
}

// src/domain/modules/wash-cycle/helpers/format-wash-cycle-fields.ts
var FormatField = class {
  static stringToArray(arr, separator) {
    return arr.split(",");
  }
  static arrayToString(arr) {
    return arr.toString();
  }
};

// src/domain/modules/wash-cycle/entities/WashCycle.ts
var crypto = __toESM(require("crypto"));
var WashCycle = class {
  constructor(props) {
    this.validateStartDate(props.startDate, props.endDate), this.validateEndDate(props.endDate, props.startDate), this._props = {
      ...props,
      id: props.id ?? crypto.randomUUID(),
      washesId: props.washesId ?? [],
      completedWashes: props.completedWashes ?? []
    };
  }
  get id() {
    return this._props.id;
  }
  get vehicleId() {
    return this._props.vehicleId;
  }
  get startDate() {
    return this._props.startDate;
  }
  set startDate(date) {
    this.validateStartDate(date), this._props.startDate = date;
  }
  validateStartDate(date, endDate) {
    var _a;
    if (dateManipulator.isAfter(date, ((_a = this._props) == null ? void 0 : _a.endDate) ?? endDate))
      throw new Error("Date cannot be before today");
  }
  get endDate() {
    return this._props.endDate;
  }
  set endDate(date) {
    this.validateEndDate(date), this._props.endDate = date;
  }
  validateEndDate(date, startDate) {
    var _a;
    if (dateManipulator.isBefore(date, ((_a = this._props) == null ? void 0 : _a.endDate) ?? startDate))
      throw new Error("End date cannot be before start date");
  }
  get washesId() {
    return this._props.washesId;
  }
  addWashId(id) {
    this._props.washesId.push(id);
  }
  get completedWashes() {
    return this._props.completedWashes;
  }
  addCompletedWashId(id) {
    this._props.completedWashes.push(id);
  }
  removeCompletedWash(id) {
    this._props.completedWashes = this._props.completedWashes.filter(
      (w) => w !== id
    );
  }
};

// src/infra/database/prisma/mappers/prisma-wash-cycle-mapper.ts
var PrismaWashCycleMapper = class {
  static toDomain(raw) {
    return new WashCycle({
      id: raw.id,
      endDate: raw.endDate,
      startDate: raw.startDate,
      vehicleId: raw.vehicleId,
      completedWashes: FormatField.stringToArray(raw.completedWashes, ","),
      washesId: FormatField.stringToArray(raw.washesId, ",")
    });
  }
  static toPrisma(washCycle) {
    return {
      id: washCycle.id,
      endDate: dateManipulator.parseDateToString(new Date(washCycle.endDate)),
      startDate: dateManipulator.parseDateToString(new Date(washCycle.startDate)),
      vehicleId: washCycle.vehicleId.toUpperCase(),
      completedWashes: FormatField.arrayToString(washCycle.completedWashes),
      washesId: FormatField.arrayToString(washCycle.washesId)
    };
  }
};

// src/infra/database/prisma/repositories/wash-cycle-repository.ts
var PrismaWashCycleRepository = class {
  async create(cycle) {
    let data = PrismaWashCycleMapper.toPrisma(cycle);
    await prisma.washCycle.create({
      data
    });
  }
  async find(props) {
    let where = { id: props.id, washesId: { contains: "" } };
    props.washesId && (where.washesId.contains = props.washesId.toString());
    let cycle = await prisma.washCycle.findFirst({
      where
    });
    return cycle ? PrismaWashCycleMapper.toDomain(cycle) : null;
  }
  async findNextCycleByLicensePlate(vehicleId) {
    let todayDate = (/* @__PURE__ */ new Date()).toISOString(), cycle = await prisma.washCycle.findFirst({
      where: { AND: [{ vehicleId }, { endDate: { gte: todayDate } }] }
    });
    return cycle ? PrismaWashCycleMapper.toDomain(cycle) : null;
  }
  async update(id, data) {
    let cycle = await prisma.washCycle.update({
      where: { id },
      data: { ...PrismaWashCycleMapper.toPrisma(data) }
    });
    return PrismaWashCycleMapper.toDomain(cycle);
  }
};

// src/domain/modules/wash/entities/Wash.ts
var crypto2 = __toESM(require("crypto")), Wash = class {
  constructor(props) {
    this._props = {
      ...props,
      id: props.id ?? crypto2.randomUUID(),
      isCompleted: typeof props.isCompleted == "boolean" ? props.isCompleted : !1
    };
  }
  get id() {
    return this._props.id;
  }
  get vehicleId() {
    return this._props.vehicleId;
  }
  get scheduleDate() {
    return this._props.scheduleDate;
  }
  set scheduleDate(date) {
    this._props.scheduleDate = date;
  }
  get cycleId() {
    return this._props.cycleId;
  }
  get note() {
    return this._props.note;
  }
  set note(note) {
    this._props.note = note;
  }
  get isCompleted() {
    return this._props.isCompleted;
  }
  set isCompleted(bool) {
    this._props.isCompleted = bool;
  }
  get createdBy() {
    return this._props.createdBy;
  }
};

// src/infra/database/prisma/mappers/prisma-wash-mapper.ts
var PrismaWashMapper = class {
  static toDomain(raw) {
    return new Wash({
      createdBy: raw.createdBy,
      cycleId: raw.cycleId,
      scheduleDate: raw.scheduleDate,
      vehicleId: raw.vehicleId,
      id: raw.id,
      isCompleted: raw.isCompleted,
      note: raw.note ?? void 0
    });
  }
  static toPrisma(wash) {
    return {
      createdBy: wash.createdBy,
      cycleId: wash.cycleId,
      scheduleDate: dateManipulator.parseDateToString(new Date(wash.scheduleDate)),
      vehicleId: wash.vehicleId.toUpperCase(),
      id: wash.id,
      isCompleted: wash.isCompleted,
      note: wash.note
    };
  }
};

// src/infra/database/prisma/repositories/washes-repository.ts
var PrismaWashRepository = class {
  async updateWash({
    id,
    data
  }) {
    let wash = await prisma.wash.update({ where: { id }, data });
    return PrismaWashMapper.toDomain(wash);
  }
  async findWashes({
    filters,
    cursor,
    take = 10,
    skip = 1
  }) {
    let washes, startDate = filters.startDate ? dateManipulator.parseDateToString(new Date(filters.startDate)) : dateManipulator.parseDateToString(/* @__PURE__ */ new Date()), endDate = filters.endDate ? dateManipulator.parseDateToString(new Date(filters.endDate)) : void 0, scheduleDate = {};
    startDate && (scheduleDate.gte = startDate), endDate && (scheduleDate.lte = endDate);
    let where = {
      createdBy: filters.createdBy,
      vehicleId: filters.vehicleId,
      isCompleted: filters.isCompleted,
      scheduleDate
    };
    return cursor != null && cursor.id ? washes = await prisma.wash.findMany({
      where,
      skip,
      cursor,
      take,
      orderBy: { scheduleDate: "asc" }
    }) : washes = await prisma.wash.findMany({
      where,
      take,
      orderBy: { scheduleDate: "asc" }
    }), washes.map((w) => PrismaWashMapper.toDomain(w));
  }
  async findWashesByCycleId(id) {
    return (await prisma.wash.findMany({
      where: { cycleId: id }
    })).map((w) => PrismaWashMapper.toDomain(w));
  }
  async create(wash) {
    let data = PrismaWashMapper.toPrisma(wash);
    await prisma.wash.create({ data });
  }
  async createMany(washes) {
    let data = washes.map((w) => PrismaWashMapper.toPrisma(w));
    await prisma.wash.createMany({ data });
  }
  async findById(id) {
    let wash = await prisma.wash.findUnique({ where: { id } });
    return wash ? PrismaWashMapper.toDomain(wash) : null;
  }
  async update(id, data) {
  }
};

// src/domain/modules/wash-cycle/use-cases/initialize-cycle.ts
function getMinMaxDate(dates) {
  let map = dates == null ? void 0 : dates.map((w) => w.scheduleDate), arr = map == null ? void 0 : map.reduce(
    (acc, v) => {
      if (!acc.min && !acc.max)
        acc.min = v, acc.max = v;
      else {
        if (!acc.min || !acc.max)
          return acc;
        let isBefore2 = dateManipulator.isBefore(v, acc.min), isAfter2 = dateManipulator.isAfter(v, acc.max);
        isBefore2 && (acc.min = v), isAfter2 && (acc.max = v);
      }
      return acc;
    },
    { min: null, max: null }
  );
  return [arr == null ? void 0 : arr.min, arr == null ? void 0 : arr.max];
}
var InitializeCycle = class {
  constructor(db, washRepository) {
    this.db = db;
    this.washRepository = washRepository;
  }
  async execute({
    vehicleId,
    createdBy,
    washes: washesData
  }) {
    let [startDate, endDate] = getMinMaxDate(washesData), washCycle = new WashCycle({ endDate, startDate, vehicleId }), obj = { washes: [], washCycle }, data;
    return washesData && (data = washesData.map(
      (w) => new Wash({
        scheduleDate: w.scheduleDate,
        cycleId: washCycle.id,
        note: w.note,
        vehicleId,
        isCompleted: w.isCompleted ?? !1,
        createdBy
      })
    ), data.forEach((v) => washCycle.addWashId(v.id)), obj.washes = data), await this.db.create(washCycle), data && await this.washRepository.createMany(data), obj;
  }
};

// src/infra/http/controllers/create-wash-cycle-controller.ts
async function controller2({ createdBy, vehicleId, washes }) {
  var _a;
  let washCycleRepo = new PrismaWashCycleRepository(), washRepo = new PrismaWashRepository(), data = await new InitializeCycle(washCycleRepo, washRepo).execute({
    createdBy,
    vehicleId,
    washes
  });
  return {
    washCycle: HttpMapper.washCycle(data.washCycle),
    washes: (_a = data.washes) == null ? void 0 : _a.map((w) => HttpMapper.wash(w))
  };
}
function initializeCycleController(data) {
  return asyncWrapper(() => controller2(data));
}

// app/sessions.ts
var import_remix = require("@vercel/remix"), { commitSession, destroySession, getSession } = (0, import_remix.createCookieSessionStorage)({
  // a Cookie from `createCookie` or the CookieOptions to create one
  cookie: {
    name: "__session",
    // all of these are optional
    // Expires can also be set (although maxAge overrides it when used in combination).
    // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
    //
    // expires: new Date(Date.now() + 60_000),
    httpOnly: !0,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1"],
    secure: !1
  }
});

// src/domain/modules/user/use-cases/validate-session.ts
var ValidateSession = class {
  constructor(userDB) {
    this.userDB = userDB;
  }
  async execute(sessionId) {
    let user = await this.userDB.findBySessionId(sessionId);
    if (!user)
      throw new Error("Token is invalid");
    return { user };
  }
};

// src/domain/modules/user/entities/User.ts
var import_crypto = require("crypto"), User = class {
  constructor(data) {
    this._props = {
      ...data,
      id: data.id ?? (0, import_crypto.randomUUID)(),
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  createSession() {
    this._props.sessionId = (0, import_crypto.randomUUID)();
  }
  // getSession(id: string) {
  //     const session = this._props.sessions.find((t) => t === id);
  //     return session;
  // }
  removeSession() {
    this._props.sessionId = null;
  }
  get id() {
    return this._props.id;
  }
  get username() {
    return this._props.username;
  }
  set username(str) {
    this._props.username = str;
  }
  get password() {
    return this._props.password;
  }
  set password(password) {
    this._props.password = password;
  }
  get email() {
    return this._props.email;
  }
  set email(str) {
    this._props.email = str;
  }
  get role() {
    return this._props.role;
  }
  set role(role) {
    this._props.role = role;
  }
  get createdAt() {
    return this._props.createdAt;
  }
  get sessionId() {
    return this._props.sessionId;
  }
};

// src/infra/database/prisma/mappers/prisma-user-mapper.ts
var PrismaUserMapper = class {
  toDomain(raw) {
    return new User({
      id: raw.id,
      username: raw.username,
      password: raw.password,
      email: raw.email,
      role: raw.role,
      createdAt: raw.createdAt,
      sessionId: raw.sessionId
    });
  }
  toPrisma(user) {
    return {
      id: user.id,
      createdAt: user.createdAt,
      email: user.email,
      password: user.password,
      role: user.role,
      sessionId: user.sessionId,
      username: user.username
    };
  }
};

// src/infra/database/prisma/repositories/user-repository.ts
var PrismaUserRepository = class {
  constructor() {
    this.userMapper = new PrismaUserMapper();
  }
  async create(user) {
    let mappedUSer = this.userMapper.toPrisma(user);
    await prisma.user.create({
      data: mappedUSer
    });
  }
  async find({
    email,
    id,
    username
  }) {
    let where = {
      email,
      id,
      username
    }, user = await prisma.user.findUnique({ where });
    return user ? this.userMapper.toDomain({
      ...user
    }) : null;
  }
  async update(props, data) {
    await prisma.user.update({
      where: props,
      data
    });
  }
  async findBySessionId(sessionId) {
    let user = await prisma.user.findUnique({
      where: {
        sessionId
      }
    });
    return user ? this.userMapper.toDomain({
      ...user
    }) : null;
  }
};

// src/infra/http/helpers/validate-session-id.ts
async function validateSessionId({ sessionId }) {
  try {
    let prismaUserRepository = new PrismaUserRepository(), validateSession = new ValidateSession(prismaUserRepository), { user } = await validateSession.execute(sessionId);
    return { user: toHttp(user) };
  } catch (err) {
    return err instanceof Error ? { error: err.message } : { error: "something went wrong" };
  }
}

// src/domain/modules/wash/use-cases/create-wash.ts
var CreateWash = class {
  constructor(washesRepo, washesCycleRepo) {
    this.washesRepo = washesRepo;
    this.washesCycleRepo = washesCycleRepo;
  }
  async execute(data) {
    let findedWashCycle = await this.washesCycleRepo.find(data.cycleId);
    if (!findedWashCycle)
      throw new Error("Wash cycle not founded");
    if (dateManipulator.isBefore(
      data.scheduleDate,
      findedWashCycle.startDate
    ))
      throw new Error("Wash schedule date must be after wash cycle start date");
    if (await Promise.all(
      findedWashCycle.washesId.map(async (w) => {
        let wash2 = await this.washesRepo.findById(w);
        if (wash2 && dateManipulator.isSameDay(wash2 == null ? void 0 : wash2.scheduleDate, data.scheduleDate))
          throw new Error("There is already a wash for this date");
      })
    ), dateManipulator.isAfter(
      data.scheduleDate,
      findedWashCycle.endDate
    ))
      throw new Error("Wash schedule date must be before wash cycle end date");
    let wash = new Wash(data);
    return await this.washesRepo.create(wash), findedWashCycle.washesId.push(wash.id), wash.isCompleted && findedWashCycle.addCompletedWashId(wash.id), await this.washesCycleRepo.update(findedWashCycle.id, findedWashCycle), { wash };
  }
};

// src/infra/http/controllers/create-wash-controller.ts
async function controller3(data) {
  let washCycleRepo = new PrismaWashCycleRepository(), washRepo = new PrismaWashRepository(), createWash = new CreateWash(washRepo, washCycleRepo), { wash } = await createWash.execute(data);
  return {
    washes: HttpMapper.wash(wash)
  };
}
function createWashController(data) {
  return asyncWrapper(() => controller3(data));
}

// app/routes/_auth.new-wash._index.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
async function action({ request }) {
  let jsonData = await request.json(), vehicle = jsonData == null ? void 0 : jsonData.vehicle, washes = jsonData == null ? void 0 : jsonData.washes, driver = jsonData == null ? void 0 : jsonData.driver, cycleId = jsonData == null ? void 0 : jsonData.cycleId;
  if (!vehicle)
    return (0, import_remix2.json)(
      {
        error: !0,
        message: "Voc\xEA precisa fornecer o ve\xEDculo"
      },
      400
    );
  let token = (await getSession(request.headers.get("Cookie"))).get("token") ?? "", { user } = await validateSessionId({ sessionId: token });
  if (!user)
    throw (0, import_remix2.redirect)("/sign-up");
  if (vehicle.create) {
    let createdVehicle = await createVehicleController({
      type: vehicle.type,
      licensePlate: vehicle.licensePlate,
      driver
    });
    if (createdVehicle.error)
      return (0, import_remix2.json)(
        {
          error: !0,
          message: createdVehicle.error.message
        },
        createdVehicle.error.statusCode
      );
    vehicle = { ...vehicle, licensePlate: createdVehicle.vehicle.licensePlate };
  }
  if (cycleId) {
    let data = washes[0], { error } = createWashController({
      cycleId,
      createdBy: user.id,
      scheduleDate: data.scheduleDate,
      vehicleId: vehicle.licensePlate,
      note: data.note,
      isCompleted: data.isCompleted
    });
    if (error)
      return (0, import_remix2.json)(
        {
          error: !0,
          message: error.message
        },
        error.statusCode
      );
  } else {
    let initializeCycleData = initializeCycleController({
      createdBy: (user == null ? void 0 : user.id) ?? "",
      vehicleId: vehicle.licensePlate,
      washes
    });
    if (initializeCycleData.error)
      return (0, import_remix2.json)(
        {
          error: !0,
          message: initializeCycleData.error.message
        },
        initializeCycleData.error.statusCode
      );
  }
  return (0, import_remix2.json)({ success: !0, message: "Lavagens criadas" }, 201);
}
function NewWash() {
  let { Stepper: Stepper2, activeStep, steps: steps2, goToPrevious, goToNext, setActiveStep } = useStepper(), { showErrorToast, showSuccessToast } = useToast(), [error, setError] = (0, import_react39.useState)(!1), [vehicle, setVehicle] = (0, import_react39.useState)(defaultVehicleState), [washes, setWashes] = (0, import_react39.useState)([]), [cycleId, setCycleId] = (0, import_react39.useState)(null), [driver, setDriver] = (0, import_react39.useState)(defaultDriverValue), submit = (0, import_react40.useSubmit)(), navigate = (0, import_react40.useNavigate)(), data = (0, import_react40.useActionData)(), addError = (0, import_react39.useCallback)(() => {
    setError(!0);
  }, []), removeError = (0, import_react39.useCallback)(() => {
    setError(!1);
  }, []);
  function getWashesFormData(element) {
    var _a, _b, _c;
    let form = new FormData(element), scheduleDate = ((_a = form.get("scheduleDate")) == null ? void 0 : _a.toString()) ?? "", note = ((_b = form.get("note")) == null ? void 0 : _b.toString()) ?? "", isCompleted = form.get("isCompleted") === "", title = ((_c = form.get("title")) == null ? void 0 : _c.toString()) ?? "", id = Number(form.get("id"));
    return { scheduleDate, id, note, isCompleted, title };
  }
  function onNextStepButtonClick(fn) {
    if (activeStep === 1) {
      let forms = document.querySelectorAll(".wash-form"), input = document.querySelector(".cycleId"), arr = [];
      forms.forEach((f) => arr.push(getWashesFormData(f))), setWashes(arr), setCycleId(input == null ? void 0 : input.value);
    }
    goToNext();
  }
  function setDriverData(v) {
    setDriver(v);
  }
  function setVehicleData(v) {
    setVehicle(v);
  }
  function setWashesData(w) {
    setWashes((s) => {
      let arr = [...s], index = s == null ? void 0 : s.findIndex((v) => v.id === w.id);
      return index > -1 && (arr[index] = w), arr;
    });
  }
  function removeWash(id) {
    setWashes((s) => s.filter((w) => w.id !== id));
  }
  function addSingleWash(wash, cycleId2) {
    setWashes([{ ...wash, id: 1, title: "" }]), setCycleId(cycleId2);
  }
  function onFinish() {
    submit({ vehicle, driver, washes, cycleId }, { method: "POST", encType: "application/json" });
  }
  (0, import_react39.useEffect)(() => {
    typeof data > "u" || data != null && data.success && (showSuccessToast({ message: data.message }), navigate("/home"));
  }, [data, showSuccessToast, navigate]), (0, import_react39.useEffect)(() => {
    typeof data < "u" && data != null && data.error && showErrorToast({ message: data.message });
  }, [data, showErrorToast]);
  let isVehicleDataValid = vehicle.licensePlate !== "" && vehicle.type !== "", isDriverValid = !0, lowerThanLastStep = activeStep < steps2.length - 1, canProceed = isVehicleDataValid && isDriverValid && lowerThanLastStep, canGoBack = activeStep > 0;
  return console.log(washes), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    import_react38.Grid,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          Stepper2,
          {
            activeStep,
            setActiveStep,
            steps: steps2
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.new-wash._index.tsx",
            lineNumber: 247,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          import_react38.Grid,
          {
            gridTemplateColumns: "1fr",
            inlineSize: "100%",
            gridTemplateRows: "auto 1fr",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                import_react38.Text,
                {
                  placeSelf: "center",
                  as: "h1",
                  fontSize: ["xl", "xl", "2xl"],
                  marginBlockEnd: 4,
                  whiteSpace: "nowrap",
                  children: steps2[activeStep].modalTitle
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 257,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react38.Box, { inlineSize: "100%", marginInline: "auto", overflow: "scroll", children: [
                activeStep === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                  VehicleContent,
                  {
                    setVehicleData,
                    vehicle,
                    addError,
                    removeError
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 268,
                    columnNumber: 13
                  },
                  this
                ),
                activeStep === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                  WashesContent,
                  {
                    washes,
                    setWashes: setWashesData,
                    licensePlate: vehicle.licensePlate,
                    addSingleWash,
                    removeWash,
                    onNextStepClick: onNextStepButtonClick
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 276,
                    columnNumber: 13
                  },
                  this
                ),
                activeStep === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(DriverContent, { driver, setDriverData }, void 0, !1, {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 286,
                  columnNumber: 13
                }, this),
                activeStep === 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(summary.Container, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                    summary.Vehicle,
                    {
                      vehicle,
                      goTo: () => setActiveStep(0)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_auth.new-wash._index.tsx",
                      lineNumber: 290,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(summary.Washes, { washes, goTo: () => setActiveStep(1) }, void 0, !1, {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 294,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(summary.Driver, { driver, goTo: () => setActiveStep(2) }, void 0, !1, {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 295,
                    columnNumber: 15
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 289,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.new-wash._index.tsx",
                lineNumber: 266,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                NewWashFooter,
                {
                  isNextButtonDisable: error || !canProceed,
                  isPreviousButtonDisable: !canGoBack,
                  goBack: goToPrevious,
                  onFinish,
                  isLastStep: steps2.length - 1 === activeStep,
                  onNextStepClick: onNextStepButtonClick
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 299,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_auth.new-wash._index.tsx",
            lineNumber: 252,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_auth.new-wash._index.tsx",
      lineNumber: 234,
      columnNumber: 5
    },
    this
  );
}

// app/routes/session-sign-out/index.ts
var session_sign_out_exports = {};
__export(session_sign_out_exports, {
  action: () => action2
});
var import_remix3 = require("@vercel/remix");

// src/domain/modules/user/use-cases/remove-session.ts
var RemoveSession = class {
  constructor(userDB) {
    this.userDB = userDB;
  }
  async execute(props) {
    await this.userDB.update(props, { sessionId: null });
  }
};

// src/infra/http/controllers/sign-out-controller.ts
async function controller4(props) {
  let prismaUserRepository = new PrismaUserRepository();
  await new RemoveSession(prismaUserRepository).execute(props);
}
var signOutController = (data) => asyncWrapper(() => controller4(data));

// app/routes/session-sign-out/index.ts
async function action2({ request }) {
  let session = await getSession(request.headers.get("Cookie")), sessionId = session.get("token");
  if (!sessionId)
    return {};
  let { error } = signOutController({ sessionId });
  return error ? {} : (session.unset("token"), (0, import_remix3.redirect)("/sign-in"));
}

// app/routes/_auth.wash.$id.tsx
var auth_wash_id_exports = {};
__export(auth_wash_id_exports, {
  action: () => action3,
  default: () => auth_wash_id_default,
  loader: () => loader
});
var import_react51 = require("@remix-run/react"), import_node = require("@remix-run/node");

// src/domain/modules/wash/use-cases/find-wash-by-id.ts
var FindWashById = class {
  constructor(washRepo) {
    this.washRepo = washRepo;
  }
  async execute(id) {
    return { wash: await this.washRepo.findById(id) };
  }
};

// src/infra/http/controllers/find-unique-wash-controller.ts
async function controller5({ id }) {
  let washRepo = new PrismaWashRepository(), findWash = new FindWashById(washRepo);
  if (!id)
    throw new AppError("Voc\xEA precisar fornecer o campo 'id", 400);
  let { wash } = await findWash.execute(id);
  return { wash: wash ? HttpMapper.wash(wash) : null };
}
var findWashByIdController = ({
  id
}) => asyncWrapper(() => controller5({ id }));

// app/routes/_auth.wash.$id.tsx
var import_react52 = require("@chakra-ui/react"), import_md3 = require("react-icons/md"), import_lia = require("react-icons/lia"), import_react53 = require("react");

// src/domain/modules/wash-cycle/use-cases/find-wash-cycle.ts
var FindWashCycle = class {
  constructor(washCycleRepo) {
    this.washCycleRepo = washCycleRepo;
  }
  async execute(props) {
    return { washCycle: await this.washCycleRepo.find(props) };
  }
};

// src/infra/http/controllers/find-wash-cycle-controller.ts
async function controller6(props) {
  let washCycleRepo = new PrismaWashCycleRepository(), findWashCycle = new FindWashCycle(washCycleRepo), { washCycle } = await findWashCycle.execute(props);
  if (!washCycle)
    throw new AppError("O ciclo de lavagem n\xE3o foi encontrado");
  return {
    washCycle: HttpMapper.washCycle(washCycle)
  };
}
var findWashCycleController = (data) => asyncWrapper(() => controller6(data));

// app/components/Table/Body.tsx
var import_react41 = require("@chakra-ui/react"), import_react42 = require("react"), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function TableData({
  children,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react41.Td, { ...rest, children }, void 0, !1, {
    fileName: "app/components/Table/Body.tsx",
    lineNumber: 15,
    columnNumber: 10
  }, this);
}
function Body({ children, onIntersecting }) {
  let ref = (0, import_react42.useRef)(null);
  return (0, import_react42.useEffect)(() => {
    var _a;
    let options = {
      rootMargin: "0px",
      threshold: 1
    }, element = ((_a = ref.current) == null ? void 0 : _a.lastElementChild) ?? void 0, observer = new IntersectionObserver((entries) => {
      entries.forEach((entry2) => {
        entry2.isIntersecting && onIntersecting && onIntersecting(element);
      });
    }, options);
    return element && observer.observe(element), () => element && observer.unobserve(element);
  }, [onIntersecting, ref]), /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react41.Tbody, { ref, children }, void 0, !1, {
    fileName: "app/components/Table/Body.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}

// app/components/Table/Container.tsx
var import_react43 = require("@chakra-ui/react"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function Container4({
  children,
  containerProps,
  tableProps
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react43.TableContainer, { ...containerProps, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react43.Table, { variant: "simple", ...tableProps, children }, void 0, !1, {
    fileName: "app/components/Table/Container.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Table/Container.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/components/Table/Head.tsx
var import_react44 = require("@chakra-ui/react"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function HeadData({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react44.Th, { children }, void 0, !1, {
    fileName: "app/components/Table/Head.tsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
}
function Head({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react44.Thead, { children }, void 0, !1, {
    fileName: "app/components/Table/Head.tsx",
    lineNumber: 17,
    columnNumber: 10
  }, this);
}

// app/components/Table/Row.tsx
var import_react45 = require("@chakra-ui/react"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function Row({ children, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react45.Tr, { ...rest, children }, void 0, !1, {
    fileName: "app/components/Table/Row.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

// app/components/Table/index.tsx
var table = {
  Table: Container4,
  Head,
  Body,
  Row,
  Data: TableData,
  Label: HeadData
};

// app/components/WashesTable/Table.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function Table2({ children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(table.Table, { ...props, children }, void 0, !1, {
    fileName: "app/components/WashesTable/Table.tsx",
    lineNumber: 12,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Head/Actions.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function Actions() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(table.Label, { children: "Actions" }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Head/Actions.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Head/Driver.tsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function Driver2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(table.Label, { children: "Motorista" }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Head/Driver.tsx",
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

// app/components/WashesTable/Rows/Head/LicensePlate.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function LicensePlate() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(table.Label, { children: "Placa" }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Head/LicensePlate.tsx",
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

// app/components/WashesTable/Rows/Head/Note.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function Note2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(table.Label, { children: "Nota" }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Head/Note.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Head/ScheduledDate.tsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function ScheduledDate() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(table.Label, { children: "Dia da lavagem" }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Head/ScheduledDate.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Head/Status.tsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function Status() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(table.Label, { children: "Status" }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Head/Status.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Head/index.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function Head2({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(table.Head, { children }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Head/index.tsx",
    lineNumber: 12,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Body/index.tsx
var import_react49 = require("@remix-run/react");

// app/components/WashesTable/Rows/Body/Actions.tsx
var import_react46 = require("@chakra-ui/react");
var import_md2 = require("react-icons/md"), import_react47 = require("@remix-run/react"), import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function CancelButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
    import_react46.IconButton,
    {
      type: "submit",
      value: "false",
      name: "isCompleted",
      "aria-label": "cancel-wash",
      colorScheme: "red",
      borderRadius: "full",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_md2.MdClose, { size: 20 }, void 0, !1, {
        fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this),
      onClick: (e) => e.stopPropagation()
    },
    void 0,
    !1,
    {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
}
function ConfirmButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
    import_react46.IconButton,
    {
      type: "submit",
      value: "true",
      name: "isCompleted",
      "aria-label": "confirm-wash",
      colorScheme: "green",
      borderRadius: "full",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_md2.MdOutlineCheck, { size: 20 }, void 0, !1, {
        fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      onClick: (e) => e.stopPropagation()
    },
    void 0,
    !1,
    {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}
function Actions2({ isCompleted, id }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(table.Data, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react46.Flex, { as: import_react47.Form, method: "PUT", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react46.Input, { type: "hidden", readOnly: !0, name: "id", value: id }, void 0, !1, {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    typeof isCompleted > "u" && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_jsx_dev_runtime34.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(CancelButton, {}, void 0, !1, {
        fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(ConfirmButton, {}, void 0, !1, {
        fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this),
    isCompleted === !0 && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(CancelButton, {}, void 0, !1, {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 52,
      columnNumber: 34
    }, this),
    isCompleted === !1 && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(ConfirmButton, {}, void 0, !1, {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 53,
      columnNumber: 35
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/components/WashesTable/Rows/Body/Driver.tsx
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime");
function Driver3({ driver }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(table.Data, { children: driver }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Body/Driver.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Body/LicensePlate.tsx
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function LicensePlate2({ licensePlate, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(table.Data, { ...rest, children: licensePlate }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Body/LicensePlate.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Body/Note.tsx
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function Note3({ note }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(table.Data, { children: note }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Body/Note.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Body/ScheduledDate.tsx
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function ScheduledDate2({ scheduledDate }) {
  let date = format(scheduledDate, "d 'de' MMMM',' RRRR");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(table.Data, { children: date }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Body/ScheduledDate.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Body/Status.tsx
var import_react48 = require("@chakra-ui/react");
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime");
function Status2({ label, ...rest }) {
  function getTextColor(label2) {
    return label2 === "Atrasada" ? "red.400" : label2 === "Aguardando" ? "blue.400" : "green.400";
  }
  let color = getTextColor(label);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(table.Data, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react48.Alert, { borderRadius: "full", justifyContent: "center", ...rest, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react48.Text, { color, children: label }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Body/Status.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Body/Status.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Body/Status.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/components/WashesTable/Rows/Body/index.tsx
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
function Row2({ children, ...rest }) {
  let navigate = (0, import_react49.useNavigate)();
  function goTo() {
    let path = `/wash/${rest.id}`;
    navigate(path);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(table.Row, { cursor: "pointer", ...rest, onClick: goTo, children }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Body/index.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
function Body2({
  children,
  onIntersecting
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(table.Body, { onIntersecting, children }, void 0, !1, {
    fileName: "app/components/WashesTable/Rows/Body/index.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Filters.tsx
var import_react50 = require("@chakra-ui/react"), import_jsx_dev_runtime41 = require("react/jsx-dev-runtime");
function Status3({ ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
    import_react50.Select,
    {
      maxInlineSize: "260px",
      minBlockSize: 12,
      placeholder: "Status da lavagem",
      variant: "outline",
      colorScheme: "gray",
      borderRadius: "full",
      display: "flex",
      alignItems: "center",
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("option", { value: "COMPLETED", children: "Completa" }, void 0, !1, {
          fileName: "app/components/WashesTable/Filters.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("option", { value: "INCOMPLETED", children: "Incompleta" }, void 0, !1, {
          fileName: "app/components/WashesTable/Filters.tsx",
          lineNumber: 26,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("option", { value: "ALL", children: "Todas" }, void 0, !1, {
          fileName: "app/components/WashesTable/Filters.tsx",
          lineNumber: 27,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/WashesTable/Filters.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}
function Date2({ ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
    import_react50.Input,
    {
      type: "date",
      variant: "outline",
      borderRadius: "full",
      maxInlineSize: "260px",
      minBlockSize: 12,
      ...rest
    },
    void 0,
    !1,
    {
      fileName: "app/components/WashesTable/Filters.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  );
}
function Search({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
    import_react50.Input,
    {
      type: "text",
      name: "licensePlate",
      placeholder: "Procurar placa",
      variant: "outline",
      borderRadius: "full",
      maxInlineSize: "260px",
      minBlockSize: 12,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/WashesTable/Filters.tsx",
      lineNumber: 47,
      columnNumber: 5
    },
    this
  );
}

// app/components/WashesTable/index.tsx
var washesTable = {
  filters: {
    Search,
    Date: Date2,
    Status: Status3
  },
  Table: Table2,
  Head: Head2,
  headData: {
    Actions,
    Driver: Driver2,
    LicensePlate,
    Note: Note2,
    ScheduledDate,
    Status
  },
  Body: Body2,
  Row: Row2,
  bodyData: {
    Actions: Actions2,
    Driver: Driver3,
    LicensePlate: LicensePlate2,
    Note: Note3,
    ScheduledDate: ScheduledDate2,
    Status: Status2
  }
};

// src/domain/modules/wash/use-cases/confirm-wash.ts
var ConfirmWash = class {
  constructor(washesRepo, washesCycleRepo) {
    this.washesRepo = washesRepo;
    this.washesCycleRepo = washesCycleRepo;
  }
  async execute(id) {
    let wash = await this.washesRepo.updateWash({
      id,
      data: { isCompleted: !0 }
    });
    if (!wash)
      throw new Error("wash not founded");
    let washCycle = await this.washesCycleRepo.find(wash == null ? void 0 : wash.cycleId);
    if (!washCycle)
      throw await this.washesRepo.updateWash({
        id,
        data: { isCompleted: !1 }
      }), new AppError("Something went wrong with wash cycle update");
    return washCycle.addCompletedWashId(wash.id), await this.washesCycleRepo.update(washCycle.id, washCycle), { wash };
  }
};

// src/infra/http/controllers/confirm-wash-controller.ts
var confirmWashController = ({ id }) => asyncWrapper(async () => {
  let washRepo = new PrismaWashRepository(), washCycleRepo = new PrismaWashCycleRepository(), confirmWash = new ConfirmWash(washRepo, washCycleRepo);
  if (!id)
    throw new AppError("Voc\xEA precisar fornecer o campo 'createdBy", 400);
  let { wash } = await confirmWash.execute(id);
  return { wash: HttpMapper.wash(wash) };
});

// src/domain/modules/wash/use-cases/unconfirm-wash.ts
var UnconfirmWash = class {
  constructor(washesRepo, washesCycleRepo) {
    this.washesRepo = washesRepo;
    this.washesCycleRepo = washesCycleRepo;
  }
  async execute(id) {
    let wash = await this.washesRepo.updateWash({
      id,
      data: { isCompleted: !1 }
    });
    if (!wash)
      throw new Error("wash not founded");
    let washCycle = await this.washesCycleRepo.find(wash == null ? void 0 : wash.cycleId);
    if (!washCycle)
      throw await this.washesRepo.updateWash({
        id,
        data: { isCompleted: !0 }
      }), new AppError("Something went wrong with wash cycle update");
    return washCycle.removeCompletedWash(wash.id), await this.washesCycleRepo.update(washCycle.id, washCycle), { wash };
  }
};

// src/infra/http/controllers/unconfirm-wash-controller.ts
var unconfirmWashController = ({ id }) => asyncWrapper(async () => {
  let washRepo = new PrismaWashRepository(), washCycleRepo = new PrismaWashCycleRepository(), unconfirmWash = new UnconfirmWash(washRepo, washCycleRepo);
  if (!id)
    throw new AppError("Voc\xEA precisar fornecer o campo 'createdBy", 400);
  let { wash } = await unconfirmWash.execute(id);
  return { wash: HttpMapper.wash(wash) };
});

// app/routes/_auth.wash.$id.tsx
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
async function action3({ request }) {
  var _a;
  let form = await request.formData(), id = (_a = form.get("id")) == null ? void 0 : _a.toString(), isCompleted = form.get("isCompleted"), error;
  return id ? typeof isCompleted > "u" ? (0, import_node.json)({ error: "" }) : (isCompleted === "true" ? error = (await confirmWashController({ id })).error : error = (await unconfirmWashController({ id })).error, error ? (0, import_node.json)({ error: { message: error.message } }) : (0, import_node.json)({})) : (0, import_node.json)({ error: "" });
}
async function loader({ params }) {
  var _a, _b;
  if (!params.id)
    return (0, import_node.json)(
      {
        error: !0,
        message: "Id da lavagem nos par\xE2metros de rota \xE9 indefinido"
      },
      400
    );
  let findedWashCycleData = await findWashCycleController({
    washesId: [params.id]
  });
  if (findedWashCycleData.error || !findedWashCycleData.washCycle)
    return (0, import_node.json)(
      {
        error: {
          message: (_a = findedWashCycleData.error) == null ? void 0 : _a.message
        }
      },
      400
    );
  let promises = [];
  if (findedWashCycleData.washCycle.washesId)
    for (let id of (_b = findedWashCycleData.washCycle) == null ? void 0 : _b.washesId)
      promises.push(findWashByIdController({ id }));
  let cycleWashes = (await Promise.all(promises)).map(({ wash }) => wash);
  return (0, import_node.json)({
    wash: cycleWashes.find((w) => (w == null ? void 0 : w.id) === params.id),
    cycleWashes,
    washCycle: findedWashCycleData.washCycle
  });
}
function PageLabel({ label }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Text, { color: "gray.500", fontSize: "sm", fontWeight: "semibold", children: label }, void 0, !1, {
    fileName: "app/routes/_auth.wash.$id.tsx",
    lineNumber: 91,
    columnNumber: 5
  }, this);
}
function PageTitle({ title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Text, { fontSize: "xx-large", fontWeight: "bold", children: title }, void 0, !1, {
    fileName: "app/routes/_auth.wash.$id.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}
function PageEditButton({ isEditing }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
    import_react52.Button,
    {
      rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_md3.MdModeEditOutline, {}, void 0, !1, {
        fileName: "app/routes/_auth.wash.$id.tsx",
        lineNumber: 110,
        columnNumber: 18
      }, this),
      variant: "ghost",
      fontSize: "sm",
      ...isEditing ? { color: "gray.400" } : { color: "blue.400" },
      children: isEditing ? "salvar" : "editar"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 109,
      columnNumber: 5
    },
    this
  );
}
function Plate({ plate }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Box, { lineHeight: 1, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Text, { color: "blue.600", fontWeight: "bold", fontSize: "lg", children: "Placa" }, void 0, !1, {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Flex, { align: "center", gap: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Text, { fontWeight: "semibold", children: plate }, void 0, !1, {
        fileName: "app/routes/_auth.wash.$id.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
        import_react52.IconButton,
        {
          "aria-label": "go to licenseplate page",
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_lia.LiaExternalLinkAltSolid, { size: 24 }, void 0, !1, {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 130,
            columnNumber: 17
          }, this),
          colorScheme: "blue",
          variant: "ghost"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_auth.wash.$id.tsx",
          lineNumber: 128,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.wash.$id.tsx",
    lineNumber: 122,
    columnNumber: 5
  }, this);
}
function CustomInput({
  label,
  value,
  placeholder,
  editing = !1
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
    import_react52.Grid,
    {
      gridTemplateColumns: "30% 70%",
      alignItems: "center",
      placeContent: "space-between",
      marginBlockStart: 3,
      maxInlineSize: "460px",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Text, { fontWeight: "bold", letterSpacing: "tighter", children: label }, void 0, !1, {
          fileName: "app/routes/_auth.wash.$id.tsx",
          lineNumber: 158,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
          import_react52.Input,
          {
            defaultValue: value,
            placeholder,
            disabled: !editing
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 161,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 151,
      columnNumber: 5
    },
    this
  );
}
function Driver4({ driver }) {
  let [showForm, setShowForm] = (0, import_react53.useState)(!1);
  return driver ? /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_jsx_dev_runtime42.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Text, { children: "Motorista" }, void 0, !1, {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 175,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Text, { children: driver }, void 0, !1, {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 176,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.wash.$id.tsx",
    lineNumber: 174,
    columnNumber: 7
  }, this) : showForm ? /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
    import_react52.Flex,
    {
      flexDir: "column",
      lineHeight: 1,
      justify: "space-between",
      blockSize: "100%",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
          import_react52.Text,
          {
            color: "blue.600",
            fontWeight: "bold",
            fontSize: "lg",
            marginBlockStart: [0, 0, 8],
            children: "Motorista"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 187,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Box, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(CustomInput, { label: "nome", value: "", editing: !0 }, void 0, !1, {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 196,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(CustomInput, { label: "telefone", value: "", editing: !0 }, void 0, !1, {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 197,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.wash.$id.tsx",
          lineNumber: 195,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 181,
      columnNumber: 5
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
    import_react52.Button,
    {
      colorScheme: "blue",
      variant: "outline",
      size: "sm",
      maxInlineSize: "260px",
      onClick: () => setShowForm(!0),
      children: "Adicionar motorista"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 201,
      columnNumber: 5
    },
    this
  );
}
function auth_wash_id_default() {
  let { wash, error, washCycle, cycleWashes } = (0, import_react51.useLoaderData)(), [isEditing] = (0, import_react53.useState)(!1);
  if (console.log(wash, washCycle, cycleWashes), !wash || error)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Text, { children: (error == null ? void 0 : error.message) ?? "Alguma coisa deu errado. Por favor, atualize a p\xE1gina" }, void 0, !1, {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 247,
      columnNumber: 7
    }, this);
  let formattedDate = format(wash.scheduleDate, "d 'de' MMMM");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
    import_react52.Grid,
    {
      gridTemplateColumns: "100%",
      paddingBlock: 4,
      paddingInline: [4, 4, 16],
      gap: 8,
      placeContent: "center",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
          import_react52.Grid,
          {
            gap: 12,
            gridAutoFlow: ["row", "row", "column"],
            gridAutoRows: ["auto", "auto", "100%"],
            alignItems: "center",
            justifyContent: "space-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Box, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Box, { lineHeight: "shorter", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(PageLabel, { label: "lavagem" }, void 0, !1, {
                    fileName: "app/routes/_auth.wash.$id.tsx",
                    lineNumber: 273,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Flex, { align: "center", gap: 0, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(PageTitle, { title: formattedDate }, void 0, !1, {
                      fileName: "app/routes/_auth.wash.$id.tsx",
                      lineNumber: 275,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(PageEditButton, { isEditing }, void 0, !1, {
                      fileName: "app/routes/_auth.wash.$id.tsx",
                      lineNumber: 276,
                      columnNumber: 15
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/_auth.wash.$id.tsx",
                    lineNumber: 274,
                    columnNumber: 13
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/_auth.wash.$id.tsx",
                  lineNumber: 272,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Box, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
                    CustomInput,
                    {
                      label: "data da lavagem",
                      value: wash.scheduleDate,
                      editing: isEditing
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_auth.wash.$id.tsx",
                      lineNumber: 280,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
                    CustomInput,
                    {
                      label: "nota",
                      value: wash.note,
                      placeholder: "adicione uma nota",
                      editing: isEditing
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_auth.wash.$id.tsx",
                      lineNumber: 285,
                      columnNumber: 13
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/_auth.wash.$id.tsx",
                  lineNumber: 279,
                  columnNumber: 11
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 271,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Driver4, { driver: wash.driver }, void 0, !1, {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 293,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Plate, { plate: wash.vehicleId }, void 0, !1, {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 294,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 264,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Flex, { flexDir: "column", gap: 1, paddingBlockEnd: 4, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react52.Text, { fontSize: "x-large", fontWeight: "semibold", color: "blue.600", children: "Ciclo de lavagem" }, void 0, !1, {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 297,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(washesTable.Table, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(washesTable.Body, { children: cycleWashes == null ? void 0 : cycleWashes.map((w) => w.id === wash.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(washesTable.Row, { id: w == null ? void 0 : w.id, fontSize: "lg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
              washesTable.bodyData.LicensePlate,
              {
                fontWeight: "bold",
                licensePlate: w.vehicleId ?? ""
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 306,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
              washesTable.bodyData.ScheduledDate,
              {
                scheduledDate: (w == null ? void 0 : w.scheduleDate) ?? ""
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 310,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
              washesTable.bodyData.Status,
              {
                status: (w == null ? void 0 : w.isCompleted) === !0 ? "success" : "error",
                label: (w == null ? void 0 : w.isCompleted) === !0 ? "Confirmado" : "Atrasada"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 313,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(washesTable.bodyData.Note, { note: (w == null ? void 0 : w.note) ?? "" }, void 0, !1, {
              fileName: "app/routes/_auth.wash.$id.tsx",
              lineNumber: 319,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
              washesTable.bodyData.Actions,
              {
                isCompleted: w == null ? void 0 : w.isCompleted,
                id: w == null ? void 0 : w.id
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 320,
                columnNumber: 21
              },
              this
            )
          ] }, w == null ? void 0 : w.id, !0, {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 305,
            columnNumber: 19
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(washesTable.Row, { id: w == null ? void 0 : w.id, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
              washesTable.bodyData.LicensePlate,
              {
                licensePlate: w.vehicleId ?? ""
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 329,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
              washesTable.bodyData.ScheduledDate,
              {
                scheduledDate: (w == null ? void 0 : w.scheduleDate) ?? ""
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 332,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
              washesTable.bodyData.Status,
              {
                status: (w == null ? void 0 : w.isCompleted) === !0 ? "success" : "error",
                label: (w == null ? void 0 : w.isCompleted) === !0 ? "Confirmado" : "Atrasada"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 335,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(washesTable.bodyData.Note, { note: (w == null ? void 0 : w.note) ?? "" }, void 0, !1, {
              fileName: "app/routes/_auth.wash.$id.tsx",
              lineNumber: 341,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
              washesTable.bodyData.Actions,
              {
                isCompleted: w == null ? void 0 : w.isCompleted,
                id: w == null ? void 0 : w.id
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 342,
                columnNumber: 21
              },
              this
            )
          ] }, w == null ? void 0 : w.id, !0, {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 328,
            columnNumber: 19
          }, this)) }, void 0, !1, {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 301,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 300,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.wash.$id.tsx",
          lineNumber: 296,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 257,
      columnNumber: 5
    },
    this
  );
}

// app/routes/vehicle-search/route.ts
var route_exports = {};
__export(route_exports, {
  loader: () => loader2
});
var import_react_router = require("react-router");

// src/domain/modules/vehicle/use-cases/find-unique-license-plate.ts
var FindUniqueLicensePlate = class {
  constructor(db) {
    this.db = db;
  }
  async execute({ plate }) {
    return await this.db.findByLicensePlate(plate);
  }
};

// src/infra/http/controllers/find-unique-vehicle-controller.ts
async function controller7({ licensePlate }) {
  let prismaVehicleRepo = new PrismaVehicleRepository(), data = await new FindUniqueLicensePlate(prismaVehicleRepo).execute({ plate: licensePlate });
  return { vehicle: data ? HttpMapper.vehicle(data) : null };
}
async function findUniqueVehicleController(data) {
  return asyncWrapper(() => controller7(data));
}

// src/domain/modules/vehicle/use-cases/find-license-plate.ts
var FindLicensePlate = class {
  constructor(db) {
    this.db = db;
  }
  async execute({ plate }) {
    return await this.db.findManyLicensePlate(plate);
  }
};

// src/infra/http/controllers/find-vehicle-controller.ts
async function controller8({ licensePlate }) {
  let prismaVehicleRepo = new PrismaVehicleRepository();
  return { results: (await new FindLicensePlate(prismaVehicleRepo).execute({ plate: licensePlate })).map((v) => HttpMapper.vehicle(v)) };
}
async function findVehicleController(data) {
  return asyncWrapper(() => controller8(data));
}

// app/routes/vehicle-search/route.ts
async function loader2({ request }) {
  let url = new URL(request.url), unique = url.searchParams.get("unique"), licensePlate = url.searchParams.get("licensePlate");
  if (!licensePlate)
    return (0, import_react_router.json)({ results: [] });
  if (unique) {
    let { vehicle } = await findUniqueVehicleController({ licensePlate });
    return (0, import_react_router.json)({ vehicle });
  }
  if (!licensePlate)
    return (0, import_react_router.json)(null);
  let { results } = await findVehicleController({ licensePlate });
  return (0, import_react_router.json)({ results });
}

// app/routes/driver-search/route.ts
var route_exports2 = {};
__export(route_exports2, {
  loader: () => loader3
});
var import_react_router2 = require("react-router"), mocks = [{ name: "matheus", phones: ["12313123"] }];
async function loader3({ request }) {
  let query = new URL(request.url).searchParams.get("query");
  if (typeof query != "string" || query == "")
    return (0, import_react_router2.json)(null);
  let results = mocks.filter((m) => m.name === query.toLowerCase());
  return (0, import_react_router2.json)({ results });
}

// app/routes/washes-search/route.ts
var route_exports3 = {};
__export(route_exports3, {
  loader: () => loader4
});
var import_react_router3 = require("react-router");

// src/domain/modules/wash-cycle/use-cases/find-next-cycle-by-license-plate.ts
var FindNextCycleByLicensePlate = class {
  constructor(washCycleRepo) {
    this.washCycleRepo = washCycleRepo;
  }
  async execute(licensePlate) {
    return { washCycle: await this.washCycleRepo.findNextCycleByLicensePlate(licensePlate) };
  }
};

// src/domain/modules/wash/use-cases/find-washes-by-cycle-id.ts
var FindWashesByCycleId = class {
  constructor(washRepo) {
    this.washRepo = washRepo;
  }
  async execute(id) {
    return { washes: await this.washRepo.findWashesByCycleId(id) };
  }
};

// src/infra/http/controllers/get-next-washes-and-cycle.controller.ts
async function controller9({ licensePlate }) {
  let washCycleRepo = new PrismaWashCycleRepository(), washRepo = new PrismaWashRepository(), findNextCycleByLicensePlate = new FindNextCycleByLicensePlate(
    washCycleRepo
  ), findWashesByCycleId = new FindWashesByCycleId(washRepo), { washCycle } = await findNextCycleByLicensePlate.execute(licensePlate);
  if (!washCycle)
    return { washCycle: null, washes: [] };
  let { washes } = await findWashesByCycleId.execute(washCycle.id);
  return {
    washCycle: HttpMapper.washCycle(washCycle),
    washes: washes.map((w) => HttpMapper.wash(w))
  };
}
var getNextWashesAndCycle = (data) => asyncWrapper(() => controller9(data));

// app/routes/washes-search/route.ts
async function loader4({ request }) {
  let licensePlate = new URL(request.url).searchParams.get("licensePlate");
  if (typeof licensePlate != "string" || licensePlate === "")
    return (0, import_react_router3.json)([]);
  let { error, washCycle, washes } = await getNextWashesAndCycle({
    licensePlate
  });
  return error ? (0, import_react_router3.json)({
    error: !0,
    message: error.message
  }) : (0, import_react_router3.json)({ washCycle, washes });
}

// app/routes/_auth.home.tsx
var auth_home_exports = {};
__export(auth_home_exports, {
  action: () => action4,
  default: () => auth_home_default,
  loader: () => loader5
});
var import_react55 = require("@chakra-ui/react"), import_remix4 = require("@vercel/remix"), import_react56 = require("@remix-run/react");

// src/domain/modules/wash/use-cases/find-washes.ts
var FindWashes = class {
  constructor(washRepo) {
    this.washRepo = washRepo;
  }
  async execute(filters) {
    return { washes: await this.washRepo.findWashes(filters) };
  }
};

// src/infra/http/controllers/find-many-washes-controller.ts
async function controller10({
  filters: { createdBy, endDate, startDate, status: washStatus, vehicleId },
  skip,
  cursor,
  take
}) {
  let washRepo = new PrismaWashRepository(), findWashes = new FindWashes(washRepo);
  if (!createdBy)
    throw new AppError("Voc\xEA precisar fornecer o campo 'createdBy", 400);
  let isCompleted = washStatus === "ALL" || !washStatus ? void 0 : washStatus === "COMPLETED", { washes } = await findWashes.execute({
    filters: {
      createdBy,
      vehicleId,
      endDate,
      startDate,
      isCompleted
    },
    skip,
    take,
    cursor
  });
  return { washes: washes.map((w) => HttpMapper.wash(w)) };
}
var findManyWashesController = (data) => asyncWrapper(() => controller10(data));

// app/components/Home/Container.tsx
var import_react54 = require("@chakra-ui/react"), import_jsx_dev_runtime43 = require("react/jsx-dev-runtime");
function Container5({ children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_react54.Box, { ...props, children }, void 0, !1, {
    fileName: "app/components/Home/Container.tsx",
    lineNumber: 7,
    columnNumber: 10
  }, this);
}

// app/components/Home/index.tsx
var home = {
  Container: Container5
};

// app/routes/_auth.home.tsx
var import_lu = require("react-icons/lu"), import_react57 = require("react");
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
async function action4({ request }) {
  var _a;
  let form = await request.formData(), id = (_a = form.get("id")) == null ? void 0 : _a.toString(), isCompleted = form.get("isCompleted"), wash, error;
  if (!id)
    return (0, import_remix4.json)({ error: "" });
  if (typeof isCompleted > "u")
    return (0, import_remix4.json)({ error: "" });
  if (isCompleted === "true") {
    let data = await confirmWashController({ id });
    wash = data.wash, error = data.error;
  } else {
    let data = await unconfirmWashController({ id });
    wash = data.wash, error = data.error;
  }
  return error ? (0, import_remix4.json)({ error: { message: error.message } }) : (0, import_remix4.json)({ wash });
}
async function loader5({ request }) {
  let url = new URL(request.url), params = new URLSearchParams(url.searchParams), session = await getSession(request.headers.get("Cookie")), licensePlate = params.get("licensePlate") ?? void 0, startDate = params.get("startDate") ?? void 0, endDate = params.get("endDate") ?? void 0, washStatus = params.get("status") ?? void 0, cursor = params.get("cursor") ?? void 0, token = session.get("token");
  if (!token)
    throw (0, import_remix4.redirect)("/sign-in");
  let { error, user } = await validateSessionId({ sessionId: token });
  if (error || !user)
    throw session.unset("token"), (0, import_remix4.redirect)("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  let dto = {
    filters: {
      createdBy: user.id,
      vehicleId: licensePlate !== "" ? licensePlate : void 0,
      startDate,
      endDate,
      status: washStatus
    },
    take: 4,
    cursor: { id: cursor }
  }, { washes } = await findManyWashesController(dto);
  return (0, import_remix4.json)({ user, washes });
}
function auth_home_default() {
  var _a;
  let { user, washes } = (0, import_react56.useLoaderData)(), [params] = (0, import_react56.useSearchParams)(), actionData = (0, import_react56.useActionData)(), [data, setData] = (0, import_react57.useState)(washes), submit = (0, import_react56.useSubmit)(), ref = (0, import_react57.useRef)(null), onLastRowIntersecting = (lastElement) => {
  };
  function onFilter() {
    let form = new FormData((ref == null ? void 0 : ref.current) ?? void 0);
    form.delete("cursor"), submit(form, { preventScrollReset: !0, replace: !0 }), setData([]);
  }
  function onLoadMore() {
    let form = new FormData((ref == null ? void 0 : ref.current) ?? void 0);
    submit(form, { preventScrollReset: !0, replace: !0 });
  }
  return (0, import_react57.useEffect)(() => {
    actionData != null && actionData.wash && setData((d) => {
      let arr = d, index = arr.findIndex((v) => (v == null ? void 0 : v.id) === actionData.wash.id);
      return index > -1 && (arr[index] = actionData.wash), arr;
    });
  }, [actionData]), (0, import_react57.useEffect)(() => {
    setData((d) => {
      let arr = [...d];
      return washes.forEach((w) => {
        arr.findIndex((v) => (v == null ? void 0 : v.id) === (w == null ? void 0 : w.id)) > -1 || arr.push(w);
      }), arr;
    });
  }, [washes]), /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
    home.Container,
    {
      blockSize: "100%",
      inlineSize: "100%",
      paddingInline: [2, 2, 8],
      position: "relative",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react55.Text, { as: "h1", fontSize: "4xl", children: [
          "Ol\xE1, ",
          user.username
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.home.tsx",
          lineNumber: 162,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
          import_react55.Flex,
          {
            flexDir: ["column"],
            align: "center",
            paddingBlock: 6,
            gap: 6,
            inlineSize: "100%",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
                import_react55.Flex,
                {
                  as: import_react56.Form,
                  preventScrollReset: !0,
                  id: "filters",
                  ref,
                  flexDir: ["column", "column", "row"],
                  gap: 4,
                  align: "center",
                  justify: "space-evenly",
                  inlineSize: "100%",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
                      import_react55.Input,
                      {
                        type: "hidden",
                        readOnly: !0,
                        name: "cursor",
                        value: (_a = data[data.length - 1]) == null ? void 0 : _a.id
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(washesTable.filters.Search, {}, void 0, !1, {
                      fileName: "app/routes/_auth.home.tsx",
                      lineNumber: 189,
                      columnNumber: 11
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react55.Flex, { gap: [2, 2, 6], align: "center", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(washesTable.filters.Date, { name: "startDate", size: "sm" }, void 0, !1, {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 191,
                        columnNumber: 13
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react55.Text, { children: "at\xE9" }, void 0, !1, {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 192,
                        columnNumber: 13
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(washesTable.filters.Date, { name: "endDate", size: "sm" }, void 0, !1, {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 193,
                        columnNumber: 13
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/_auth.home.tsx",
                      lineNumber: 190,
                      columnNumber: 11
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
                      washesTable.filters.Status,
                      {
                        name: "status",
                        inlineSize: "fit-content"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react55.Flex, { gap: 4, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
                        import_react55.Button,
                        {
                          minInlineSize: "160px",
                          colorScheme: "gray",
                          borderRadius: "lg",
                          onClick: () => {
                            var _a2;
                            return (_a2 = ref.current) == null ? void 0 : _a2.reset();
                          },
                          children: "limpar campos"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/_auth.home.tsx",
                          lineNumber: 200,
                          columnNumber: 13
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
                        import_react55.Button,
                        {
                          minInlineSize: "160px",
                          variant: "solid",
                          colorScheme: "blue",
                          borderRadius: "lg",
                          onClick: onFilter,
                          children: "filtrar"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/_auth.home.tsx",
                          lineNumber: 208,
                          columnNumber: 13
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "app/routes/_auth.home.tsx",
                      lineNumber: 199,
                      columnNumber: 11
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 172,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react55.Divider, {}, void 0, !1, {
                fileName: "app/routes/_auth.home.tsx",
                lineNumber: 219,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react55.Flex, { justify: "space-between", align: "center", inlineSize: "90%", children: [
                washes && /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react55.Text, { fontWeight: "semibold", color: "gray.400", fontSize: "sm", children: data.length > 0 ? `showing ${data.length} results` : "nenhuma lavagem foi encontrada" }, void 0, !1, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 222,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
                  import_react55.Button,
                  {
                    as: import_react56.Link,
                    reloadDocument: !0,
                    to: `/csv?${params}`,
                    variant: "outline",
                    borderRadius: "full",
                    rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_lu.LuExternalLink, {}, void 0, !1, {
                      fileName: "app/routes/_auth.home.tsx",
                      lineNumber: 234,
                      columnNumber: 24
                    }, this),
                    value: "EXPORT",
                    children: "baixar"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_auth.home.tsx",
                    lineNumber: 228,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.home.tsx",
                lineNumber: 220,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_auth.home.tsx",
            lineNumber: 165,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
          washesTable.Table,
          {
            containerProps: { marginBlock: 4, marginBlockEnd: 8 },
            tableProps: { variant: "striped" },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(washesTable.Head, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(washesTable.Row, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(washesTable.headData.LicensePlate, {}, void 0, !1, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 247,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(washesTable.headData.ScheduledDate, {}, void 0, !1, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 248,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(washesTable.headData.Status, {}, void 0, !1, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 249,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(washesTable.headData.Note, {}, void 0, !1, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 250,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(washesTable.headData.Actions, {}, void 0, !1, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 251,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.home.tsx",
                lineNumber: 246,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/routes/_auth.home.tsx",
                lineNumber: 245,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(washesTable.Body, { onIntersecting: onLastRowIntersecting, children: data == null ? void 0 : data.map((w, i, arr) => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
                washesTable.Row,
                {
                  id: w == null ? void 0 : w.id,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
                      washesTable.bodyData.LicensePlate,
                      {
                        licensePlate: w.vehicleId ?? ""
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 262,
                        columnNumber: 17
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
                      washesTable.bodyData.ScheduledDate,
                      {
                        scheduledDate: (w == null ? void 0 : w.scheduleDate) ?? ""
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 265,
                        columnNumber: 17
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
                      washesTable.bodyData.Status,
                      {
                        status: (w == null ? void 0 : w.isCompleted) === !0 ? "success" : "error",
                        label: (w == null ? void 0 : w.isCompleted) === !0 ? "Confirmado" : "Atrasada"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 268,
                        columnNumber: 17
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(washesTable.bodyData.Note, { note: (w == null ? void 0 : w.note) ?? "" }, void 0, !1, {
                      fileName: "app/routes/_auth.home.tsx",
                      lineNumber: 272,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
                      washesTable.bodyData.Actions,
                      {
                        isCompleted: w == null ? void 0 : w.isCompleted,
                        id: w == null ? void 0 : w.id
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 273,
                        columnNumber: 17
                      },
                      this
                    )
                  ]
                },
                w == null ? void 0 : w.id,
                !0,
                {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 258,
                  columnNumber: 15
                },
                this
              )) }, void 0, !1, {
                fileName: "app/routes/_auth.home.tsx",
                lineNumber: 255,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_auth.home.tsx",
            lineNumber: 241,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react55.Flex, { inlineSize: "100%", justify: "center", paddingBlockEnd: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react55.Button, { variant: "solid", colorScheme: "blue", onClick: onLoadMore, children: "Carregar mais" }, void 0, !1, {
          fileName: "app/routes/_auth.home.tsx",
          lineNumber: 283,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.home.tsx",
          lineNumber: 282,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_auth.home.tsx",
      lineNumber: 156,
      columnNumber: 5
    },
    this
  );
}

// app/routes/sign-in.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  action: () => action5,
  default: () => sign_in_default,
  loader: () => loader6
});
var import_react59 = require("@chakra-ui/react"), import_bs2 = require("react-icons/bs"), import_md4 = require("react-icons/md"), import_remix5 = require("@vercel/remix"), import_react60 = require("@remix-run/react");

// src/domain/shared/utils/hash-manipulator.ts
var import_bcrypt = __toESM(require("bcrypt")), HashManipulator = class {
  static async compareStrToHashedStr(str1, hash) {
    let bool = await import_bcrypt.default.compare(str1, hash);
    if (typeof bool > "u")
      throw new Error("Something went wrong in hash process");
    return bool;
  }
  static async generateHashFromStr(str) {
    let hash = await import_bcrypt.default.hash(str, 10);
    if (!hash)
      throw new Error("Something went wrong in hash process");
    return hash;
  }
};

// src/domain/modules/user/use-cases/create-session.ts
var CreateSession = class {
  constructor(userDB) {
    this.userDB = userDB;
  }
  async execute({
    email,
    password
  }) {
    let user = await this.userDB.find({ email });
    if (!user)
      throw console.log("user not founded"), new Error("Credentials not valid");
    if (!await HashManipulator.compareStrToHashedStr(
      password,
      user.password
    ))
      throw console.log("password not valid"), new Error("Credentials not valid");
    if (user.sessionId || user.createSession(), !user.sessionId)
      throw new Error("Something went wrong with creation of token");
    return await this.userDB.update({ id: user.id }, { sessionId: user.sessionId }), { sessionId: user.sessionId, user };
  }
};

// src/infra/http/controllers/sign-in-user-controller.ts
async function signInUserController({ email, password }) {
  try {
    let prismaUserRepository = new PrismaUserRepository(), createSession = new CreateSession(prismaUserRepository), { sessionId, user } = await createSession.execute({ email, password });
    return { sessionId, user };
  } catch (err) {
    return err instanceof Error ? { error: err.message } : { error: "something went wrong" };
  }
}

// app/components/Footer.tsx
var import_react58 = require("@chakra-ui/react"), import_bs = require("react-icons/bs"), import_jsx_dev_runtime45 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react58.Center, { textAlign: "center", paddingBlock: 0.5, gap: 2, bg: "blue.500", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react58.Text, { fontSize: "xs", color: "white", children: [
      "Feito por",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react58.Link, { target: "_blank", href: "https://github.com/euliveiras", children: "@euliveiras" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_bs.BsMoonStars, { size: "12px", color: "white" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/sign-in.tsx
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime");
async function action5({ request }) {
  let form = await request.formData(), email = form.get("email"), password = form.get("password"), session = await getSession(request.headers.get("Cookie"));
  if (typeof password != "string" || typeof email != "string")
    return new Response(JSON.stringify({ error: "credentials is invalid" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  let { error, sessionId } = await signInUserController({ email, password });
  return error || !sessionId ? new Response(JSON.stringify({ error }), {
    status: 400,
    headers: {
      "Content-Type": "application/json"
    }
  }) : (session.set("token", sessionId), (0, import_remix5.redirect)("/home", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  }));
}
async function loader6({ request }) {
  let token = (await getSession(request.headers.get("Cookie"))).get("token");
  if (!token)
    return (0, import_remix5.json)({});
  let { user } = await validateSessionId({ sessionId: token });
  return user ? (0, import_remix5.redirect)("/home") : (0, import_remix5.json)({});
}
function CustomInputGroup({
  icon,
  name,
  type,
  isError,
  isIdle,
  isSubmitting
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
    import_react59.InputGroup,
    {
      sx: {
        "--clr": isError ? "#E53E3E" : isSubmitting ? "#48BB78" : isIdle ? "#000000" : "#3182ce"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react59.InputRightElement, { fontSize: 26, children: icon }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 108,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
          import_react59.Input,
          {
            _focusVisible: {
              borderColor: "var(--clr)",
              boxShadow: "0 0 0 1px var(--clr)"
            },
            type,
            border: "2px",
            borderColor: "var(--clr)",
            borderRadius: "xl",
            name
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 109,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 97,
      columnNumber: 5
    },
    this
  );
}
function sign_in_default() {
  let errors = (0, import_react60.useActionData)(), navigation = (0, import_react60.useNavigation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react59.Box, { h: "100dvh", w: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react59.Grid, { h: "100%", w: "100%", templateRows: "1fr auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react59.VStack, { paddingBlockStart: [32, 20], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react59.HStack, { spacing: "4px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_bs2.BsPerson, { size: "20px", color: "#000000", strokeWidth: "0.8px" }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react59.Text, { fontWeight: "bold", fontSize: "md", children: "/ login" }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
        import_react59.VStack,
        {
          as: import_react60.Form,
          spacing: 6,
          border: "1px",
          borderColor: "blackAlpha.100",
          borderRadius: "sm",
          boxShadow: "dark-lg",
          minBlockSize: 96,
          maxInlineSize: [72, "none"],
          padding: 8,
          method: "POST",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react59.FormControl, { isRequired: !0, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react59.FormLabel, { fontSize: "sm", children: "email" }, void 0, !1, {
                fileName: "app/routes/sign-in.tsx",
                lineNumber: 151,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
                CustomInputGroup,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_md4.MdOutlineEmail, { color: "var(--clr)" }, void 0, !1, {
                    fileName: "app/routes/sign-in.tsx",
                    lineNumber: 153,
                    columnNumber: 23
                  }, this),
                  name: "email",
                  type: "email",
                  isError: errors == null ? void 0 : errors.error,
                  isSubmitting: navigation.state === "submitting",
                  isIdle: navigation.state === "idle"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/sign-in.tsx",
                  lineNumber: 152,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 150,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react59.FormControl, { isRequired: !0, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react59.FormLabel, { fontSize: "sm", children: "password" }, void 0, !1, {
                fileName: "app/routes/sign-in.tsx",
                lineNumber: 162,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
                CustomInputGroup,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_md4.MdLockOutline, { color: "var(--clr)" }, void 0, !1, {
                    fileName: "app/routes/sign-in.tsx",
                    lineNumber: 164,
                    columnNumber: 23
                  }, this),
                  type: "password",
                  name: "password",
                  isError: errors == null ? void 0 : errors.error,
                  isSubmitting: navigation.state === "submitting",
                  isIdle: navigation.state === "idle"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/sign-in.tsx",
                  lineNumber: 163,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 161,
              columnNumber: 13
            }, this),
            (errors == null ? void 0 : errors.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react59.Text, { color: "red.500", children: errors == null ? void 0 : errors.error }, void 0, !1, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 172,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
              import_react59.Button,
              {
                marginBlockStart: 4,
                colorScheme: "blue",
                variant: "solid",
                paddingInline: 12,
                borderRadius: "full",
                size: "md",
                type: "submit",
                children: "Entrar"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/sign-in.tsx",
                lineNumber: 173,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 138,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 186,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 130,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 129,
    columnNumber: 5
  }, this);
}

// app/routes/sign-up.tsx
var sign_up_exports = {};
__export(sign_up_exports, {
  action: () => action6,
  default: () => sign_up_default,
  loader: () => loader7
});
var import_remix6 = require("@vercel/remix"), import_react61 = require("@remix-run/react");

// src/domain/modules/user/use-cases/create-user.ts
var CreateUser = class {
  constructor(userDB) {
    this.userDB = userDB;
  }
  async execute(data) {
    let user = new User(data);
    if (await this.userDB.find({ email: user.email }))
      throw new Error("Email is already in use");
    return await this.userDB.create(user), { user };
  }
};

// src/infra/http/controllers/create-user-controller.ts
async function createUserController({ username, email, password }) {
  try {
    let prismaUserRepository = new PrismaUserRepository(), createUser = new CreateUser(prismaUserRepository), hashedPassword = await HashManipulator.generateHashFromStr(password), { user } = await createUser.execute({
      username,
      password: hashedPassword,
      email,
      role: "COLAB"
    });
    return { user };
  } catch (err) {
    return err instanceof Error ? { error: err.message } : { error: "something went wrong" };
  }
}

// app/routes/sign-up.tsx
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime");
async function action6({ request }) {
  let form = await request.formData(), username = form.get("username"), password = form.get("password"), email = form.get("email");
  if (typeof username != "string" || typeof password != "string" || typeof email != "string")
    return new Response(JSON.stringify({ error: "credentials is invalid" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  let { error } = await createUserController({ email, password, username });
  return error ? new Response(null, {
    status: 400,
    statusText: error
  }) : (0, import_remix6.redirect)("/sign-in", 201);
}
async function loader7() {
  return (0, import_remix6.redirect)("/sign-in");
}
function sign_up_default() {
  let data = (0, import_react61.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("h1", { children: "Sign up" }, void 0, !1, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    data ? /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("p", { style: { color: "red" }, children: data.error }, void 0, !1, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 48,
      columnNumber: 15
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react61.Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("label", { children: [
        "username",
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("input", { type: "text", name: "username" }, void 0, !1, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("label", { children: [
        "email",
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("input", { type: "text", name: "email" }, void 0, !1, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("label", { children: [
        "password",
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("input", { type: "password", name: "password" }, void 0, !1, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("button", { type: "submit", children: "Logar" }, void 0, !1, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react61.Link, { to: "/sign-in", children: "logar" }, void 0, !1, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-up.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  loader: () => loader8
});
var import_remix7 = require("@vercel/remix");
async function loader8() {
  return (0, import_remix7.redirect)("/home");
}

// app/routes/_auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => auth_default,
  headers: () => headers,
  loader: () => loader9
});
var import_remix8 = require("@vercel/remix"), import_react69 = require("@remix-run/react");

// app/components/Header.tsx
var import_react66 = require("@chakra-ui/react"), import_bi = require("react-icons/bi"), import_md6 = require("react-icons/md"), import_lu2 = require("react-icons/lu"), import_react67 = require("@remix-run/react"), import_react68 = require("react");

// app/components/SearchInput.tsx
var import_react62 = require("@chakra-ui/react"), import_md5 = require("react-icons/md"), import_jsx_dev_runtime48 = require("react/jsx-dev-runtime");
function SearchInput2({ inputGroupProps, inputProps }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
    import_react62.InputGroup,
    {
      display: ["none", "none", "block"],
      role: "group",
      sx: { "input:focus ~ div": { svg: { color: "blackAlpha.900" } } },
      maxInlineSize: 96,
      ...inputGroupProps,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
          import_react62.Input,
          {
            placeholder: "Procure qualquer coisa",
            borderRadius: "full",
            focusBorderColor: "blackAlpha.900",
            type: "search",
            name: "query",
            ...inputProps
          },
          void 0,
          !1,
          {
            fileName: "app/components/SearchInput.tsx",
            lineNumber: 19,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_react62.InputRightElement, { pointerEvents: "none", fontSize: 26, children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
          import_react62.Icon,
          {
            color: "gray.200",
            as: import_md5.MdOutlineSearch,
            transitionDuration: "200ms",
            transitionProperty: "all",
            _groupHover: { color: "gray.300" }
          },
          void 0,
          !1,
          {
            fileName: "app/components/SearchInput.tsx",
            lineNumber: 28,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/SearchInput.tsx",
          lineNumber: 27,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/SearchInput.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/components/Drawer.tsx
var import_react65 = require("@chakra-ui/react");

// app/components/Avatar.tsx
var import_react63 = require("@chakra-ui/react"), import_rx = require("react-icons/rx"), import_react64 = require("@remix-run/react"), import_jsx_dev_runtime49 = require("react/jsx-dev-runtime");
function Avatar({ containerProps, avatarProps, user }) {
  let { submit } = (0, import_react64.useFetcher)();
  function signOut() {
    submit({}, { action: "/session-sign-out", method: "POST" });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
    import_react63.HStack,
    {
      paddingInline: 2,
      display: ["none", "none", "flex"],
      ...containerProps,
      children: [
        user && /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react63.Menu, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react63.MenuButton, { as: import_react63.Button, variant: "ghost", rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_rx.RxChevronDown, {}, void 0, !1, {
            fileName: "app/components/Avatar.tsx",
            lineNumber: 38,
            columnNumber: 62
          }, this), children: user.username }, void 0, !1, {
            fileName: "app/components/Avatar.tsx",
            lineNumber: 38,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react63.MenuList, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react63.MenuItem, { as: import_react64.Link, to: "/configuration", children: "Configura\xE7\xF5es" }, void 0, !1, {
              fileName: "app/components/Avatar.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react63.MenuItem, { as: import_react63.Text, color: "red.400", onClick: signOut, children: "Sair" }, void 0, !1, {
              fileName: "app/components/Avatar.tsx",
              lineNumber: 45,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Avatar.tsx",
            lineNumber: 41,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Avatar.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react63.Avatar, { size: "md", name: "Natan", ...avatarProps }, void 0, !1, {
          fileName: "app/components/Avatar.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Avatar.tsx",
      lineNumber: 31,
      columnNumber: 5
    },
    this
  );
}

// app/components/Drawer.tsx
var import_jsx_dev_runtime50 = require("react/jsx-dev-runtime");
function Drawer({ isOpen, onClose, finalFocusRef, user }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
    import_react65.Drawer,
    {
      isOpen,
      placement: "right",
      onClose,
      finalFocusRef,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_react65.DrawerOverlay, {}, void 0, !1, {
          fileName: "app/components/Drawer.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_react65.DrawerContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_react65.DrawerCloseButton, { top: 4 }, void 0, !1, {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
            import_react65.DrawerHeader,
            {
              as: import_react65.HStack,
              inlineSize: "min-content",
              paddingBlock: 2,
              paddingInline: 4,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
                Avatar,
                {
                  containerProps: {
                    display: "flex"
                  },
                  user
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Drawer.tsx",
                  lineNumber: 42,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/Drawer.tsx",
              lineNumber: 36,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_react65.DrawerBody, {}, void 0, !1, {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_react65.DrawerFooter, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_react65.Button, { variant: "outline", mr: 3, onClick: onClose, children: "Cancel" }, void 0, !1, {
              fileName: "app/components/Drawer.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_react65.Button, { colorScheme: "blue", children: "Save" }, void 0, !1, {
              fileName: "app/components/Drawer.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Drawer.tsx",
          lineNumber: 34,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Drawer.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}

// app/components/Header.tsx
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime");
function Header({ user }) {
  let { isOpen, onOpen, onClose } = (0, import_react66.useDisclosure)(), location = (0, import_react67.useLocation)(), btnRef = (0, import_react68.useRef)(null), str = "/" + location.pathname.split("/")[1];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
    import_react66.Grid,
    {
      maxH: "120px",
      inlineSize: "100%",
      gridAutoFlow: "column",
      gridAutoRows: "min-content",
      gridAutoColumns: "1fr",
      paddingBlock: 4,
      paddingInline: 1,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react66.HStack, { spacing: [6], children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react66.HStack, { spacing: 1, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
              import_react66.IconButton,
              {
                variant: "ghost",
                "aria-label": "go to home",
                fontSize: "32px",
                isRound: !0,
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_bi.BiHomeAlt, { size: 30 }, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 48,
                  columnNumber: 19
                }, this),
                as: import_react67.Link,
                to: "/home"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Header.tsx",
                lineNumber: 43,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
              import_react66.Text,
              {
                letterSpacing: "wider",
                fontWeight: "bold",
                fontSize: ["sm", "md"],
                children: str
              },
              void 0,
              !1,
              {
                fileName: "app/components/Header.tsx",
                lineNumber: 52,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(SearchInput2, { inputProps: { isDisabled: !0 } }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 41,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react66.HStack, { justifySelf: "flex-end", spacing: 1, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
            import_react66.Button,
            {
              as: import_react67.Link,
              marginInline: 1,
              variant: "solid",
              colorScheme: "blue",
              borderRadius: "full",
              blockSize: 10,
              inlineSize: [10, "auto"],
              sx: { span: { marginInlineEnd: ["0"] } },
              leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_lu2.LuPlus, { size: "1.25em" }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 72,
                columnNumber: 21
              }, this),
              to: "/new-wash",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react66.Text, { display: ["none", "block"], children: "Nova lavagem" }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 77,
                columnNumber: 11
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 63,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
            import_react66.IconButton,
            {
              variant: "ghost",
              colorScheme: "blackAlpha",
              "aria-label": "open notifications",
              fontSize: "26px",
              isRound: !0,
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_md6.MdOutlineNotificationsNone, {}, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 85,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 79,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react66.Divider, { borderLeftWidth: 2, orientation: "vertical" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 87,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(Avatar, { user }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 88,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
            import_react66.IconButton,
            {
              display: ["flex", "flex", "none"],
              variant: "ghost",
              "aria-label": "open side menu",
              fontSize: "24px",
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_md6.MdDensityMedium, {}, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 94,
                columnNumber: 17
              }, this),
              onClick: onOpen,
              ref: btnRef
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 89,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
            Drawer,
            {
              finalFocusRef: btnRef,
              isOpen,
              onClose,
              user
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 98,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 62,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 32,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_auth.tsx
var import_react70 = require("@chakra-ui/react"), import_jsx_dev_runtime52 = require("react/jsx-dev-runtime"), headers = ({ loaderHeaders }) => ({
  "Cache-Control": loaderHeaders.get("Cache-control") ?? "max-age=3600"
});
async function loader9({ request }) {
  let session = await getSession(request.headers.get("Cookie")), url = new URL(request.url), token = session.get("token");
  if (!token)
    throw (0, import_remix8.redirect)("/sign-in");
  let { error, user } = await validateSessionId({ sessionId: token });
  if (error || !user)
    throw session.unset("token"), (0, import_remix8.redirect)("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  return (0, import_remix8.json)(
    { user },
    {
      headers: {
        "Cache-Control": `max-age=${60 * 60}`
      }
    }
  );
}
function auth_default() {
  let { user } = (0, import_react69.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
    import_react70.Grid,
    {
      gridTemplateRows: "auto 1fr",
      gridTemplateColumns: "100%",
      blockSize: "100dvh",
      gap: 2,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(Header, { user }, void 0, !1, {
          fileName: "app/routes/_auth.tsx",
          lineNumber: 57,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react69.Outlet, {}, void 0, !1, {
          fileName: "app/routes/_auth.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 51,
      columnNumber: 5
    },
    this
  );
}

// app/routes/csv/route.tsx
var route_exports4 = {};
__export(route_exports4, {
  loader: () => loader10
});
var import_remix9 = require("@vercel/remix"), import_node2 = require("@remix-run/node"), import_csv_stringify = require("csv-stringify");
async function loader10({ request }) {
  let url = new URL(request.url), params = new URLSearchParams(url.searchParams), session = await getSession(request.headers.get("Cookie")), token = session.get("token"), licensePlate = params.get("licensePlate") ?? void 0, startDate = params.get("startDate") ?? void 0, endDate = params.get("endDate") ?? void 0, washStatus = params.get("status") ?? void 0;
  if (!token)
    throw (0, import_remix9.redirect)("/sign-in");
  let { error, user } = await validateSessionId({ sessionId: token });
  if (error || !user)
    throw session.unset("token"), (0, import_remix9.redirect)("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  let output = (0, import_csv_stringify.stringify)({
    header: !0,
    columns: {
      vehicleId: "placa",
      scheduleDate: "data de lavagem",
      status: "status"
    }
  }), dto = {
    filters: {
      createdBy: user.id,
      vehicleId: licensePlate !== "" ? licensePlate : void 0,
      startDate,
      endDate,
      status: washStatus
    },
    take: 999999
  }, { washes } = await findManyWashesController(dto);
  washes.forEach(
    (w) => output.write({
      vehicleId: w == null ? void 0 : w.vehicleId,
      scheduleDate: format((w == null ? void 0 : w.scheduleDate) ?? /* @__PURE__ */ new Date(), "d/LLLL"),
      status: w != null && w.isCompleted ? "LAVADO" : "N\xC3O LAVADO"
    })
  );
  let formattedStartDate = startDate ? format(new Date(startDate), "d-MMM") : format(/* @__PURE__ */ new Date(), "d-MMM"), formattedEndDate = endDate ? "_" + format(new Date(endDate), "d-MMM") : "", filename = formattedStartDate + formattedEndDate + ".csv";
  return output.end(), new import_node2.Response(output, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename=${filename}`
    }
  });
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => __default
});
var import_react71 = require("@chakra-ui/react");
var import_jsx_dev_runtime53 = require("react/jsx-dev-runtime");
function __default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
    import_react71.Grid,
    {
      placeContent: "center",
      placeItems: "center",
      blockSize: "100dvh",
      inlineSize: "100%",
      gap: 4,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_react71.Text, { fontSize: "lg", children: "Essa p\xE1gina n\xE3o existe :(" }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 13,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_react71.HStack, { spacing: 1, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_react71.Text, { fontSize: "lg", children: "Go back" }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(LinkHighlighted, { to: "/home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_react71.Text, { fontSize: "lg", children: "/ home" }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 17,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 16,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/$.tsx",
          lineNumber: 14,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/$.tsx",
      lineNumber: 6,
      columnNumber: 5
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-A3MWFENP.js", imports: ["/build/_shared/chunk-JMTNRVKS.js", "/build/_shared/chunk-RPYEFABZ.js", "/build/_shared/chunk-6Y4MOXXW.js", "/build/_shared/chunk-EDULEWIV.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-JTY4YUEU.js", imports: ["/build/_shared/chunk-FQ5UBCHZ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-JUBXRLZY.js", imports: ["/build/_shared/chunk-FVT23FZR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_auth-4DME7Z7U.js", imports: ["/build/_shared/chunk-YEYAHZMF.js", "/build/_shared/chunk-J5LZUC2L.js", "/build/_shared/chunk-S7SDDI2X.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.home": { id: "routes/_auth.home", parentId: "routes/_auth", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.home-WRGR6GPR.js", imports: ["/build/_shared/chunk-I7ELGWBU.js", "/build/_shared/chunk-2JBWI42H.js", "/build/_shared/chunk-FQ5UBCHZ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.new-wash._index": { id: "routes/_auth.new-wash._index", parentId: "routes/_auth", path: "new-wash", index: !0, caseSensitive: void 0, module: "/build/routes/_auth.new-wash._index-O47O6BQ6.js", imports: ["/build/_shared/chunk-FVT23FZR.js", "/build/_shared/chunk-2JBWI42H.js", "/build/_shared/chunk-FQ5UBCHZ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.wash.$id": { id: "routes/_auth.wash.$id", parentId: "routes/_auth", path: "wash/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.wash.$id-SSHYUHFN.js", imports: ["/build/_shared/chunk-I7ELGWBU.js", "/build/_shared/chunk-2JBWI42H.js", "/build/_shared/chunk-FQ5UBCHZ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-QW5LNJTG.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/csv": { id: "routes/csv", parentId: "root", path: "csv", index: void 0, caseSensitive: void 0, module: "/build/routes/csv-6WKVSB6D.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/driver-search": { id: "routes/driver-search", parentId: "root", path: "driver-search", index: void 0, caseSensitive: void 0, module: "/build/routes/driver-search-L2FXCMML.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/session-sign-out": { id: "routes/session-sign-out", parentId: "root", path: "session-sign-out", index: void 0, caseSensitive: void 0, module: "/build/routes/session-sign-out-7JIPKAHA.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in": { id: "routes/sign-in", parentId: "root", path: "sign-in", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in-SEJGWUX2.js", imports: ["/build/_shared/chunk-J5LZUC2L.js", "/build/_shared/chunk-S7SDDI2X.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up": { id: "routes/sign-up", parentId: "root", path: "sign-up", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up-IDSYCLRE.js", imports: ["/build/_shared/chunk-J5LZUC2L.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/vehicle-search": { id: "routes/vehicle-search", parentId: "root", path: "vehicle-search", index: void 0, caseSensitive: void 0, module: "/build/routes/vehicle-search-T3SYH5Y2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/washes-search": { id: "routes/washes-search", parentId: "root", path: "washes-search", index: void 0, caseSensitive: void 0, module: "/build/routes/washes-search-ZLYUHAXX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "8592aabe", hmr: void 0, url: "/build/manifest-8592AABE.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !1, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_auth.new-wash._index": {
    id: "routes/_auth.new-wash._index",
    parentId: "routes/_auth",
    path: "new-wash",
    index: !0,
    caseSensitive: void 0,
    module: auth_new_wash_index_exports
  },
  "routes/session-sign-out": {
    id: "routes/session-sign-out",
    parentId: "root",
    path: "session-sign-out",
    index: void 0,
    caseSensitive: void 0,
    module: session_sign_out_exports
  },
  "routes/_auth.wash.$id": {
    id: "routes/_auth.wash.$id",
    parentId: "routes/_auth",
    path: "wash/:id",
    index: void 0,
    caseSensitive: void 0,
    module: auth_wash_id_exports
  },
  "routes/vehicle-search": {
    id: "routes/vehicle-search",
    parentId: "root",
    path: "vehicle-search",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/driver-search": {
    id: "routes/driver-search",
    parentId: "root",
    path: "driver-search",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/washes-search": {
    id: "routes/washes-search",
    parentId: "root",
    path: "washes-search",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports3
  },
  "routes/_auth.home": {
    id: "routes/_auth.home",
    parentId: "routes/_auth",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: auth_home_exports
  },
  "routes/sign-in": {
    id: "routes/sign-in",
    parentId: "root",
    path: "sign-in",
    index: void 0,
    caseSensitive: void 0,
    module: sign_in_exports
  },
  "routes/sign-up": {
    id: "routes/sign-up",
    parentId: "root",
    path: "sign-up",
    index: void 0,
    caseSensitive: void 0,
    module: sign_up_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/_auth": {
    id: "routes/_auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/csv": {
    id: "routes/csv",
    parentId: "root",
    path: "csv",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports4
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
