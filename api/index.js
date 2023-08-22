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
var import_react4 = require("react"), import_react5 = require("@emotion/react"), import_react6 = require("@chakra-ui/react"), import_react7 = require("@chakra-ui/react"), import_react8 = require("@remix-run/react");
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.Meta, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.Links, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 67,
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
            lineNumber: 69,
            columnNumber: 13
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this);
  }
), theme = (0, import_react7.extendTheme)({
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.ChakraProvider, { theme, resetCSS: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.Outlet, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.ScrollRestoration, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.new-wash._index.tsx
var auth_new_wash_index_exports = {};
__export(auth_new_wash_index_exports, {
  default: () => auth_new_wash_index_default
});
var import_react42 = require("@chakra-ui/react");

// app/components/NewWash/Stepper/index.ts
var import_md = require("react-icons/md"), import_react10 = require("@chakra-ui/react");

// app/components/NewWash/Stepper/Stepper.tsx
var import_react9 = require("@chakra-ui/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Stepper({ steps: steps2, activeStep, setActiveStep }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_react9.Stepper,
    {
      index: activeStep,
      orientation: "vertical",
      blockSize: "100%",
      size: ["md", "md", "lg"],
      children: steps2.map(({ IconIncomplete, IconActive, label }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react9.Step, { onClick: (e) => setActiveStep(index), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react9.StepIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          import_react9.StepStatus,
          {
            complete: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react9.StepIcon, {}, void 0, !1, {
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
          import_react9.Box,
          {
            flexShrink: "0",
            paddingBlockStart: 1,
            display: ["none", "none", "none", "block"],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react9.StepTitle, { children: label }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react9.StepSeparator, {}, void 0, !1, {
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
  let { activeStep, goToNext, goToPrevious, setActiveStep } = (0, import_react10.useSteps)({
    index: 3,
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
var import_date_fns = require("date-fns"), import_locale = require("date-fns/locale");
function wrapper() {
  return {
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
      return (0, import_date_fns.formatISO)(date);
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
      return typeof date == "string" ? (0, import_date_fns.format)(this.parseISOStringToDate(date), format2, {
        locale: import_locale.ptBR
      }) : (0, import_date_fns.format)(date, format2);
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
var import_react22 = require("@chakra-ui/react");

// app/components/NewWash/WashesContent/Container.tsx
var import_react17 = require("@chakra-ui/react");

// app/components/LinkHighlighted.tsx
var import_react11 = require("@chakra-ui/react"), import_react_router_dom = require("react-router-dom"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function LinkHighlighted({ to, children, LinkProps }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.Link, { marginInline: 1, ...LinkProps, as: import_react_router_dom.Link, to, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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

// app/components/LinkBox/Container.tsx
var import_react12 = require("@chakra-ui/react"), import_react_router_dom2 = require("react-router-dom"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Container({ to, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react12.Grid,
    {
      minInlineSize: "180px",
      minBlockSize: "150px",
      padding: 4,
      gridTemplateColumns: "80% 20%",
      gridTemplateRows: "1fr",
      placeItems: "center",
      as: import_react_router_dom2.Link,
      to,
      border: "2px",
      borderColor: "blue.400",
      borderRadius: "lg",
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/LinkBox/Container.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/components/LinkBox/Content.tsx
var import_react13 = require("@chakra-ui/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Content({ children, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react13.Box, { ...rest, children }, void 0, !1, {
    fileName: "app/components/LinkBox/Content.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/LinkBox/Icon.tsx
var import_react14 = require("@chakra-ui/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Icon({ icon }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react14.Flex, { blockSize: "100%", justify: "center", align: "center", children: icon }, void 0, !1, {
    fileName: "app/components/LinkBox/Icon.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/LinkBox/Title.tsx
var import_react15 = require("@chakra-ui/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Title({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react15.Text, { color: "gray.500", fontSize: "md", fontWeight: "bold", children }, void 0, !1, {
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

// app/components/WashBox/index.tsx
var import_fa = require("react-icons/fa"), import_react16 = require("@chakra-ui/react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function WashBox({ wash }) {
  let title = dateManipulator.format(wash.scheduleDate, "d/LL"), date = dateManipulator.format(wash.scheduleDate, "d 'de' MMMM, eeee");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(LinkBox.Container, { to: `/wash/${wash.id}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(LinkBox.Content, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(LinkBox.Title, { children: title }, void 0, !1, {
        fileName: "app/components/WashBox/index.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react16.Text, { fontSize: "lg", children: date }, void 0, !1, {
        fileName: "app/components/WashBox/index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/WashBox/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(LinkBox.Icon, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_fa.FaExternalLinkAlt, { size: 16 }, void 0, !1, {
      fileName: "app/components/WashBox/index.tsx",
      lineNumber: 23,
      columnNumber: 27
    }, this) }, void 0, !1, {
      fileName: "app/components/WashBox/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/WashBox/index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/WashesContent/Container.tsx
var import_react18 = require("react"), import_react19 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Container2({
  licensePlate,
  children,
  addError,
  removeError
}) {
  let { data, submit } = (0, import_react19.useFetcher)();
  return (0, import_react18.useEffect)(() => {
    submit({ licensePlate }, { action: "/washes-search" });
  }, [submit, licensePlate]), (0, import_react18.useEffect)(() => {
    typeof (data == null ? void 0 : data.washes) < "u" && (data.washes ? addError() : removeError());
  }, [data == null ? void 0 : data.washes, removeError, addError]), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react17.Grid, { blockSize: "100%", gridTemplateRows: "1fr auto", children: data != null && data.washes ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react17.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react17.Alert, { status: "info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react17.AlertIcon, {}, void 0, !1, {
        fileName: "app/components/NewWash/WashesContent/Container.tsx",
        lineNumber: 40,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react17.Text, { children: [
        "H\xE1 lavagens ativas para o ve\xEDculo com placa",
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(LinkHighlighted, { to: `/vehicle/${licensePlate}`, children: licensePlate }, void 0, !1, {
          fileName: "app/components/NewWash/WashesContent/Container.tsx",
          lineNumber: 43,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NewWash/WashesContent/Container.tsx",
        lineNumber: 41,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewWash/WashesContent/Container.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NewWash/WashesContent/Container.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_react17.Grid,
      {
        paddingBlockStart: 6,
        gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
        gap: 4,
        children: (data == null ? void 0 : data.washes) && (data == null ? void 0 : data.washes.map((w) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(WashBox, { wash: w }, w.id, !1, {
          fileName: "app/components/NewWash/WashesContent/Container.tsx",
          lineNumber: 56,
          columnNumber: 24
        }, this)))
      },
      void 0,
      !1,
      {
        fileName: "app/components/NewWash/WashesContent/Container.tsx",
        lineNumber: 49,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/NewWash/WashesContent/Container.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    import_react17.Grid,
    {
      gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
      gap: 10,
      paddingBlockEnd: 8,
      placeItems: "center",
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/NewWash/WashesContent/Container.tsx",
      lineNumber: 62,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/NewWash/WashesContent/Container.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/NewWash/WashesContent/Container.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/WashesContent/Form.tsx
var import_react20 = require("@chakra-ui/react"), import_react21 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Form({
  isCompleted,
  id,
  onChange,
  note,
  title,
  defaultDate,
  minDate
}) {
  function onFormChange(e) {
    var _a, _b, _c;
    let form = new FormData(e.currentTarget), scheduleDate = ((_a = form.get("scheduleDate")) == null ? void 0 : _a.toString()) ?? "", note2 = ((_b = form.get("note")) == null ? void 0 : _b.toString()) ?? "", isCompleted2 = form.get("isCompleted") === "", id2 = ((_c = form.get("id")) == null ? void 0 : _c.toString()) ?? "";
    onChange({ note: note2, isCompleted: isCompleted2, id: Number(id2), scheduleDate, title });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    import_react21.Form,
    {
      onChange: onFormChange,
      style: { blockSize: "100%", inlineSize: "100%" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.Input, { type: "hidden", name: "id", value: id }, void 0, !1, {
          fileName: "app/components/NewWash/WashesContent/Form.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          import_react20.Flex,
          {
            maxInlineSize: "360px",
            flexDir: "column",
            gap: 6,
            marginInline: "auto",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.Text, { marginInline: "auto", marginBlockStart: 2, fontSize: "lg", children: title }, void 0, !1, {
                fileName: "app/components/NewWash/WashesContent/Form.tsx",
                lineNumber: 55,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.FormControl, { as: import_react20.Flex, flexDir: "column", align: "center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.FormLabel, { inlineSize: "fit-content", children: "data" }, void 0, !1, {
                  fileName: "app/components/NewWash/WashesContent/Form.tsx",
                  lineNumber: 59,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                  import_react20.Input,
                  {
                    name: "scheduleDate",
                    inlineSize: "180px",
                    type: "date",
                    min: minDate,
                    defaultValue: defaultDate
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/NewWash/WashesContent/Form.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.FormHelperText, { color: "gray.400", children: "m\xEAs/dia/ano" }, void 0, !1, {
                  fileName: "app/components/NewWash/WashesContent/Form.tsx",
                  lineNumber: 67,
                  columnNumber: 11
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/NewWash/WashesContent/Form.tsx",
                lineNumber: 58,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.FormControl, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.FormLabel, { inlineSize: "fit-content", marginInline: "auto", children: "notas" }, void 0, !1, {
                  fileName: "app/components/NewWash/WashesContent/Form.tsx",
                  lineNumber: 71,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                  import_react20.Textarea,
                  {
                    name: "note",
                    noOfLines: 6,
                    placeholder: "escreva notas sobre esta lavagem",
                    resize: "none",
                    defaultValue: note
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/NewWash/WashesContent/Form.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/NewWash/WashesContent/Form.tsx",
                lineNumber: 70,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                import_react20.FormControl,
                {
                  as: import_react20.Flex,
                  inlineSize: "fit-content",
                  marginInline: "auto",
                  align: "center",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.FormLabel, { marginBlock: 0, marginInlineEnd: 6, children: "lavagem feita?" }, void 0, !1, {
                      fileName: "app/components/NewWash/WashesContent/Form.tsx",
                      lineNumber: 88,
                      columnNumber: 11
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.Checkbox, { defaultChecked: isCompleted, name: "isCompleted" }, void 0, !1, {
                      fileName: "app/components/NewWash/WashesContent/Form.tsx",
                      lineNumber: 91,
                      columnNumber: 11
                    }, this)
                  ]
                },
                void 0,
                !0,
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
          !0,
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
    !0,
    {
      fileName: "app/components/NewWash/WashesContent/Form.tsx",
      lineNumber: 44,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/WashesContent/WashesContent.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function WashesContent({
  washes,
  setWashes,
  licensePlate,
  addError,
  removeError
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    Container2,
    {
      licensePlate: licensePlate ?? "",
      addError,
      removeError,
      children: washes == null ? void 0 : washes.map((w) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_react22.Box,
        {
          maxInlineSize: "320px",
          marginInline: [0, 8],
          border: "4px",
          borderColor: "blue.400",
          borderRadius: "lg",
          paddingInline: 4,
          paddingBlock: 8,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            Form,
            {
              id: w.id,
              onChange: setWashes,
              isCompleted: w.isCompleted,
              title: w.title,
              defaultDate: w.scheduleDate,
              minDate: w.minDate,
              note: w.note ?? ""
            },
            void 0,
            !1,
            {
              fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
              lineNumber: 38,
              columnNumber: 11
            },
            this
          )
        },
        w.scheduleDate,
        !1,
        {
          fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
          lineNumber: 28,
          columnNumber: 9
        },
        this
      ))
    },
    void 0,
    !1,
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
  minDate: format(baseDate, "yyyy-MM-dd"),
  firstDate: format(baseDate, "yyyy-MM-dd"),
  secDate: format(addDays2(baseDate, 7), "yyyy-MM-dd"),
  thirdDate: format(addDays2(baseDate, 14), "yyyy-MM-dd"),
  fourthDate: format(addDays2(baseDate, 28), "yyyy-MM-dd")
}, washesDefaultValue = [
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
var import_react32 = require("@chakra-ui/react");

// app/components/NewWash/VehicleContent/NewVehicleForm.tsx
var import_react23 = require("@chakra-ui/react"), import_react24 = require("@remix-run/react"), import_react25 = require("react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), selectOptions = [
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
  let timeoutId = (0, import_react25.useRef)(null), secondTimeOutId = (0, import_react25.useRef)(null), { data, submit } = (0, import_react24.useFetcher)(), isDisabled = !vehicle.create, error = (data == null ? void 0 : data.results.length) > 0 ? { message: "Placa j\xE1 existe" } : null;
  function onInputChange(e) {
    secondTimeOutId.current && clearTimeout(secondTimeOutId.current), secondTimeOutId.current = setTimeout(() => {
      submit(
        { query: "vehicle", licensePlate: e.target.value },
        { action: "/vehicle-search" }
      );
    }, 1e3);
  }
  console.log(data);
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
  return (0, import_react25.useEffect)(() => {
    typeof (data == null ? void 0 : data.results) < "u" && (data.results.length > 0 ? addError() : removeError());
  }, [data == null ? void 0 : data.results, removeError, addError]), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react24.Form, { onChange: onFormChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react23.Grid, { gridAutoRows: "min-content", placeContent: "center", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_react23.FormControl,
      {
        as: import_react23.Flex,
        blockSize: "min-content",
        gap: 4,
        paddingBlockStart: [0, 0, 1],
        align: "center",
        justify: "center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react23.FormLabel, { margin: 0, htmlFor: "vehicle_create", children: "Adicionar novo ve\xEDculo?" }, void 0, !1, {
            fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
            lineNumber: 97,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            import_react23.Checkbox,
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
              lineNumber: 100,
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
        lineNumber: 89,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react23.Flex, { flexDir: "column", gap: 6, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_react23.FormControl,
        {
          as: import_react23.Grid,
          gridTemplateRows: "min-content",
          gridAutoFlow: ["row", "row", "column"],
          placeItems: "center",
          marginBlockStart: 8,
          gap: 4,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react23.Flex, { flexDir: "column", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              import_react23.FormLabel,
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
                lineNumber: 118,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              import_react23.Input,
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
                lineNumber: 125,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
            lineNumber: 117,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
          lineNumber: 109,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react23.FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_react23.Select,
        {
          isDisabled,
          id: "type",
          name: "type",
          placeholder: "Tipo do ve\xEDculo",
          defaultValue: vehicle.type,
          children: selectOptions.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("option", { value: o == null ? void 0 : o.toString(), children: o }, o, !1, {
            fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
            lineNumber: 144,
            columnNumber: 17
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
          lineNumber: 136,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
        lineNumber: 135,
        columnNumber: 11
      }, this),
      vehicle.create && error && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react23.Alert, { status: "error", marginBlock: 4, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react23.AlertIcon, {}, void 0, !1, {
          fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
          lineNumber: 152,
          columnNumber: 15
        }, this),
        error.message
      ] }, void 0, !0, {
        fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
        lineNumber: 151,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
    lineNumber: 88,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/VehicleContent/VehicleDivider.tsx
var import_react26 = require("@chakra-ui/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function VehicleDivider() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    import_react26.Box,
    {
      position: "relative",
      padding: 8,
      inlineSize: "100%",
      maxInlineSize: "360px",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react26.Divider, {}, void 0, !1, {
          fileName: "app/components/NewWash/VehicleContent/VehicleDivider.tsx",
          lineNumber: 10,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react26.AbsoluteCenter, { bg: "white", px: "4", children: "ou" }, void 0, !1, {
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
var import_react30 = require("@remix-run/react");

// app/components/SearchEntity/Results.tsx
var import_react27 = require("@chakra-ui/react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Results({ show, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    import_react27.Flex,
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
var import_react28 = require("@chakra-ui/react"), import_react29 = require("react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function SearchInput({ onChange, ...rest }) {
  let timeoutId = (0, import_react29.useRef)(null);
  function onInputQueryChange(e) {
    let value = e.target.value;
    timeoutId.current && clearTimeout(timeoutId.current), timeoutId.current = setTimeout(() => onChange(value), 1e3);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react28.FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react28.InputGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react28.Input, { rounded: "full", onChange: onInputQueryChange, ...rest }, void 0, !1, {
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
var import_react31 = require("@chakra-ui/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function VehicleSearch({ vehicle, setVehicle }) {
  var _a;
  let fetcher = (0, import_react30.useFetcher)(), data = ((_a = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a.results) ?? null;
  function onQuery(e) {
    fetcher.submit(
      { query: "vehicle", licensePlate: e },
      { action: "/vehicle-search" }
    );
  }
  function onClick(e) {
    setVehicle({ ...e, create: !1 });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    import_react31.Grid,
    {
      gap: 4,
      gridAutoFlow: "row",
      placeItems: ["center", "center", "center"],
      maxInlineSize: "200px",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(searchEntity.Input, { onChange: onQuery, isDisabled: vehicle.create }, void 0, !1, {
          fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
          lineNumber: 41,
          columnNumber: 7
        }, this),
        (fetcher == null ? void 0 : fetcher.data) && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            import_react31.Text,
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
              lineNumber: 44,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(searchEntity.Results, { show: fetcher == null ? void 0 : fetcher.data, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react31.Grid, { gap: 4, maxBlockSize: "260px", overflow: "scroll", children: data == null ? void 0 : data.map((v, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            import_react31.Flex,
            {
              inlineSize: "100%",
              flexDir: "column",
              gap: 6,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react31.FormControl, { as: import_react31.Flex, flexDir: "column", alignItems: "center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react31.FormLabel, { children: "Placa" }, void 0, !1, {
                    fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                    lineNumber: 66,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                    import_react31.Input,
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
                      lineNumber: 67,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                  lineNumber: 65,
                  columnNumber: 21
                }, this),
                (data == null ? void 0 : data.length) - 1 !== i && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react31.Divider, { alignSelf: "center", inlineSize: "80%" }, void 0, !1, {
                  fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                  lineNumber: 88,
                  columnNumber: 23
                }, this)
              ]
            },
            `${v.licensePlate} + ${i}`,
            !0,
            {
              fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
              lineNumber: 59,
              columnNumber: 19
            },
            this
          )) }, void 0, !1, {
            fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
            lineNumber: 55,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
      lineNumber: 35,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/VehicleContent/Container.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function Container3({
  setVehicleData,
  vehicle,
  addError,
  removeError
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    import_react32.Grid,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(VehicleSearch, { setVehicle: setVehicleData, vehicle }, void 0, !1, {
          fileName: "app/components/NewWash/VehicleContent/Container.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(VehicleDivider, {}, void 0, !1, {
          fileName: "app/components/NewWash/VehicleContent/Container.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
}, VehicleContent = Container3;

// app/routes/_auth.new-wash._index.tsx
var import_react43 = require("react");

// app/components/NewWash/footer.tsx
var import_react33 = require("@chakra-ui/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function NewWashFooter({
  goNext,
  goBack,
  containerProps,
  isNextButtonDisable,
  isPreviousButtonDisable,
  isLastStep
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    import_react33.Flex,
    {
      placeSelf: "flex-end",
      blockSize: "100%",
      align: "center",
      paddingBlockStart: 8,
      ...containerProps,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          import_react33.Button,
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
            lineNumber: 37,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          import_react33.Divider,
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
            lineNumber: 47,
            columnNumber: 7
          },
          this
        ),
        isLastStep ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          import_react33.Button,
          {
            name: "step",
            variant: "ghost",
            colorScheme: "blue",
            onClick: () => goNext(),
            children: "finalizar"
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewWash/footer.tsx",
            lineNumber: 64,
            columnNumber: 9
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          import_react33.Button,
          {
            name: "step",
            variant: "ghost",
            colorScheme: "blue",
            onClick: () => goNext(),
            isDisabled: isNextButtonDisable,
            children: "pr\xF3ximo"
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewWash/footer.tsx",
            lineNumber: 54,
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
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/DriverContent/DriverContent.tsx
var import_react37 = require("@chakra-ui/react");

// app/components/NewWash/DriverContent/NewDriverForm.tsx
var import_react34 = require("@chakra-ui/react"), import_react35 = require("@remix-run/react"), import_react36 = require("react"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function NewDriverForm({ driver, setDriverData }) {
  let timeoutId = (0, import_react36.useRef)(null), isDisabled = !driver.create;
  function onFormChange(e) {
    var _a, _b;
    let form = new FormData(e.currentTarget), create = form.get("create") === "", driverName = ((_a = form.get("name")) == null ? void 0 : _a.toString()) ?? "", phone = ((_b = form.get("phone")) == null ? void 0 : _b.toString()) ?? "";
    if (console.log(create, phone, driverName), create) {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react34.Box, { maxInlineSize: "260px", marginInline: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    import_react35.Form,
    {
      onChange: onFormChange,
      style: { blockSize: "100%", inlineSize: "100%" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react34.Flex, { flexDir: "column", blockSize: "100%", gap: 8, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          import_react34.FormControl,
          {
            as: import_react34.Flex,
            blockSize: "min-content",
            gap: 4,
            paddingBlockStart: [0, 0, 1],
            align: "center",
            justify: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react34.FormLabel, { margin: 0, htmlFor: "driver-create", children: "Adicionar motorista novo?" }, void 0, !1, {
                fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
                lineNumber: 60,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                import_react34.Checkbox,
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
                  lineNumber: 63,
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
            lineNumber: 52,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react34.Flex, { flexDir: "column", gap: 8, inlineSize: "100%", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react34.FormControl, { as: import_react34.Flex, flexDir: "column", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react34.FormLabel, { margin: 0, marginInline: "auto", htmlFor: "driver-name", children: "Motorista" }, void 0, !1, {
              fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
              lineNumber: 73,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              import_react34.Input,
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
                lineNumber: 76,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react34.FormControl, { as: import_react34.Flex, flexDir: "column", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              import_react34.FormLabel,
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
                lineNumber: 85,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              import_react34.Input,
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
                lineNumber: 92,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
      lineNumber: 47,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/DriverContent/DriverContent.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function Root({ setDriverData, driver }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react37.Box, { paddingBlock: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(NewDriverForm, { driver, setDriverData }, void 0, !1, {
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
var import_react38 = require("@chakra-ui/react"), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function Container4({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    import_react38.Grid,
    {
      paddingInlineStart: 4,
      gridTemplateColumns: ["1fr", "1fr 1fr"],
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
var import_react39 = require("@chakra-ui/react"), import_hi = require("react-icons/hi"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function DriverSummary({ driver, goTo }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    import_react39.Flex,
    {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react39.Text, { as: "h2", fontSize: "md", marginInline: "auto", children: "Informa\xE7\xF5es do motorista" }, void 0, !1, {
          fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
          lineNumber: 24,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          import_react39.Flex,
          {
            flexDir: "column",
            gap: 4,
            blockSize: "fit-content",
            inlineSize: "fit-content",
            align: "center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              import_react39.Button,
              {
                rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_hi.HiExternalLink, { size: 20 }, void 0, !1, {
                  fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                  lineNumber: 35,
                  columnNumber: 22
                }, this),
                variant: "outline",
                onClick: () => goTo(),
                blockSize: "fit-content",
                inlineSize: "fit-content",
                minBlockSize: 12,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                  import_react39.Flex,
                  {
                    flexDir: "column",
                    gap: 1,
                    paddingBlock: 4,
                    inlineSize: "fit-content",
                    align: "start",
                    marginInlineEnd: 4,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react39.Text, { fontSize: "md", children: "Matheus" }, void 0, !1, {
                        fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                        lineNumber: 51,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react39.Flex, { as: "span", gap: 1, inlineSize: "fit-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react39.Text, { fontSize: "sm", fontWeight: "light", children: "1239810938901" }, void 0, !1, {
                        fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                      }, this) }, void 0, !1, {
                        fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                        lineNumber: 52,
                        columnNumber: 15
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                    lineNumber: 43,
                    columnNumber: 13
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                lineNumber: 34,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
            lineNumber: 27,
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
var import_react40 = require("@chakra-ui/react"), import_hi2 = require("react-icons/hi"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function VehicleSummary({ goTo, vehicle }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
    import_react40.Flex,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react40.Text, { as: "h2", fontSize: "md", marginInline: "auto", justifySelf: "start", children: "Informa\xE7\xF5es do Ve\xEDculo" }, void 0, !1, {
          fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          import_react40.Button,
          {
            rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_hi2.HiExternalLink, { size: 20 }, void 0, !1, {
              fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
              lineNumber: 29,
              columnNumber: 20
            }, this),
            variant: "outline",
            onClick: () => goTo(),
            blockSize: "fit-content",
            inlineSize: "fit-content",
            minBlockSize: 12,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
              import_react40.Flex,
              {
                flexDir: "column",
                gap: 1,
                paddingBlock: 4,
                paddingInlineEnd: 1,
                inlineSize: "auto",
                align: "start",
                marginInlineEnd: "auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react40.Flex, { as: "span", gap: 1, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react40.Text, { fontSize: "md", children: "placa:" }, void 0, !1, {
                      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                      lineNumber: 46,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react40.Text, { fontWeight: "semibold", children: "JUAH9123" }, void 0, !1, {
                      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                      lineNumber: 47,
                      columnNumber: 13
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react40.Flex, { as: "span", gap: 1, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react40.Text, { children: "tipo:" }, void 0, !1, {
                      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                      lineNumber: 50,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react40.Text, { fontSize: "sm", fontWeight: "light", children: "Truck" }, void 0, !1, {
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
var import_react41 = require("@chakra-ui/react"), import_hi3 = require("react-icons/hi");
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function ScheduleDate({ date }) {
  let { format: format2 } = useDate(), text = format2(date, "d/MM");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react41.Text, { fontSize: "md", children: text }, void 0, !1, {
    fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
}
function Note({ note }) {
  return note !== "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react41.Flex, { gap: 2, fontSize: "sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react41.Text, { fontWeight: "semibold", children: "nota:" }, void 0, !1, {
      fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react41.Text, { fontWeight: "light", children: note.slice(0, 5) + "..." }, void 0, !1, {
      fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react41.Text, { children: "sem nota" }, void 0, !1, {
    fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function WashesSummary({ goTo, washes }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    import_react41.Flex,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react41.Text, { as: "h2", children: "Informa\xE7\xF5es das lavagens" }, void 0, !1, {
          fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
          lineNumber: 42,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          import_react41.Grid,
          {
            blockSize: "100%",
            inlineSize: "100%",
            gap: 4,
            gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
            placeItems: "center",
            children: washes.map((w) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              import_react41.Button,
              {
                rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_hi3.HiExternalLink, { size: 20 }, void 0, !1, {
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
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                  import_react41.Flex,
                  {
                    flexDir: "column",
                    blockSize: "fit-content",
                    gap: 1,
                    paddingInlineEnd: 4,
                    marginInlineEnd: "auto",
                    align: "start",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ScheduleDate, { date: w.scheduleDate }, void 0, !1, {
                        fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                        lineNumber: 69,
                        columnNumber: 15
                      }, this),
                      w.isCompleted && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react41.Text, { children: "feita" }, void 0, !1, {
                        fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                        lineNumber: 70,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Note, { note: "Alguma nota aleat\xF3ria" }, void 0, !1, {
                        fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                        lineNumber: 71,
                        columnNumber: 15
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
  Container: Container4,
  Vehicle: VehicleSummary,
  Washes: WashesSummary
};

// app/routes/_auth.new-wash._index.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function auth_new_wash_index_default() {
  let { Stepper: Stepper2, activeStep, steps: steps2, goToPrevious, goToNext, setActiveStep } = useStepper(), [error, setError] = (0, import_react43.useState)(!1), [vehicle, setVehicle] = (0, import_react43.useState)(defaultVehicleState), [washes, setWashes] = (0, import_react43.useState)(washesDefaultValue), [driver, setDriver] = (0, import_react43.useState)(defaultDriverValue);
  function addError() {
    setError(!0);
  }
  function removeError() {
    setError(!1);
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
  let isVehicleDataValid = activeStep === 0 && vehicle.licensePlate && vehicle.type && typeof vehicle.create == "boolean", isDriverValid = activeStep === 2, isLastStep = activeStep < steps2.length + -1, canProceed = (isVehicleDataValid || isDriverValid || activeStep === 1 && !0) && isLastStep, canGoBack = activeStep > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    import_react42.Grid,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
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
            lineNumber: 86,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          import_react42.Grid,
          {
            gridTemplateColumns: "1fr",
            inlineSize: "100%",
            gridTemplateRows: "auto 1fr",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
                import_react42.Text,
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
                  lineNumber: 96,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react42.Box, { inlineSize: "100%", marginInline: "auto", overflow: "scroll", children: [
                activeStep === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
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
                    lineNumber: 107,
                    columnNumber: 13
                  },
                  this
                ),
                activeStep === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
                  WashesContent,
                  {
                    washes,
                    setWashes: setWashesData,
                    licensePlate: vehicle.licensePlate,
                    addError,
                    removeError
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 115,
                    columnNumber: 13
                  },
                  this
                ),
                activeStep === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DriverContent, { driver, setDriverData }, void 0, !1, {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 124,
                  columnNumber: 13
                }, this),
                activeStep === 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(summary.Container, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
                    summary.Vehicle,
                    {
                      vehicle,
                      goTo: () => setActiveStep(0)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_auth.new-wash._index.tsx",
                      lineNumber: 128,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(summary.Washes, { washes, goTo: () => setActiveStep(1) }, void 0, !1, {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 132,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(summary.Driver, { driver, goTo: () => setActiveStep(2) }, void 0, !1, {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 133,
                    columnNumber: 15
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 127,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.new-wash._index.tsx",
                lineNumber: 105,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
                NewWashFooter,
                {
                  isNextButtonDisable: error || !canProceed,
                  isPreviousButtonDisable: !canGoBack,
                  goBack: goToPrevious,
                  goNext: goToNext,
                  isLastStep: steps2.length - 1 === activeStep
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 137,
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
            lineNumber: 91,
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
      lineNumber: 73,
      columnNumber: 5
    },
    this
  );
}

// app/routes/vehicle-search/route.ts
var route_exports = {};
__export(route_exports, {
  loader: () => loader
});
var import_react_router = require("react-router"), vehicles = [
  {
    licensePlate: "HUHDWQE",
    type: "Leve"
  },
  {
    licensePlate: "LAPW123",
    type: "Leve"
  },
  {
    licensePlate: "PO6778",
    type: "Truck"
  },
  {
    licensePlate: "PO6778",
    type: "Truck"
  },
  {
    licensePlate: "PO6778",
    type: "Truck"
  },
  {
    licensePlate: "PO6778",
    type: "Truck"
  }
];
async function loader({ request }) {
  let url = new URL(request.url), query = url.searchParams.get("query"), licensePlate = url.searchParams.get("licensePlate");
  return typeof query != "string" || query == "" ? (0, import_react_router.json)(null) : (0, import_react_router.json)({ results: vehicles.filter((v) => v.licensePlate === licensePlate) });
}

// app/routes/driver-search/route.ts
var route_exports2 = {};
__export(route_exports2, {
  loader: () => loader2
});
var import_react_router2 = require("react-router"), mocks = [{ name: "matheus", phones: ["12313123"] }];
async function loader2({ request }) {
  let query = new URL(request.url).searchParams.get("query");
  if (typeof query != "string" || query == "")
    return (0, import_react_router2.json)(null);
  let results = mocks.filter((m) => m.name === query.toLowerCase());
  return (0, import_react_router2.json)({ results });
}

// app/routes/washes-search/route.ts
var route_exports3 = {};
__export(route_exports3, {
  loader: () => loader3,
  mocks: () => mocks2
});
var import_react_router3 = require("react-router");
function getDate(date, days) {
  let parsedDate = dateManipulator.parseDateToString(date ?? /* @__PURE__ */ new Date());
  return dateManipulator.addDaysToDate(parsedDate, days ?? 0);
}
var mocks2 = {
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
      isCompleted: !1,
      createdBy: "fake-user"
    },
    {
      id: "2",
      vehicleId: "PO6778",
      scheduleDate: getDate(/* @__PURE__ */ new Date(), 7),
      cycleId: "fake-cycle-id",
      note: "Lavar roda traseira",
      isCompleted: !1,
      createdBy: "fake-user"
    },
    {
      id: "3",
      vehicleId: "PO6778",
      scheduleDate: getDate(/* @__PURE__ */ new Date(), 14),
      cycleId: "fake-cycle-id",
      isCompleted: !1,
      createdBy: "fake-user"
    },
    {
      id: "4",
      vehicleId: "PO6778",
      scheduleDate: getDate(/* @__PURE__ */ new Date(), 22),
      cycleId: "fake-cycle-id",
      isCompleted: !1,
      createdBy: "fake-user"
    },
    {
      id: "5",
      vehicleId: "LAPW123",
      scheduleDate: getDate(/* @__PURE__ */ new Date(), 4),
      cycleId: "fake-cycle-id2",
      isCompleted: !1,
      createdBy: "fake-user"
    },
    {
      id: "6",
      vehicleId: "HUHDWQE",
      scheduleDate: getDate(/* @__PURE__ */ new Date(), 3),
      cycleId: "fake-cycle-id3",
      isCompleted: !1,
      createdBy: "fake-user"
    }
  ]
};
async function loader3({ request }) {
  let query = new URL(request.url).searchParams.get("licensePlate");
  if (typeof query != "string" || query === "")
    return (0, import_react_router3.json)([]);
  let washes = mocks2.washes.filter((w) => w.vehicleId === query), washCycle = mocks2.washCycles.find((w) => w.vehicleId === query), error;
  return error ? (0, import_react_router3.json)({ error }) : washCycle ? (0, import_react_router3.json)({ washCycle, washes }) : (0, import_react_router3.json)([]);
}

// app/routes/_auth.home.tsx
var auth_home_exports = {};
__export(auth_home_exports, {
  default: () => auth_home_default,
  headers: () => headers,
  loader: () => loader4
});
var import_react44 = require("@chakra-ui/react"), import_node2 = require("@remix-run/node"), import_react45 = require("@remix-run/react");

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

// src/infra/database/prisma/prisma.ts
var import_client = require("@prisma/client"), globalForPrisma = global, prisma = globalForPrisma.prisma || new import_client.PrismaClient({ log: ["query", "info", "warn", "error"] });
globalForPrisma.prisma = prisma;

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
  async update(userId, data) {
    await prisma.user.update({
      where: {
        id: userId
      },
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

// src/infra/http/mappers/http-mapper.ts
function toHttp(user) {
  return {
    email: user.email,
    role: user.role,
    username: user.username
  };
}

// src/infra/http/helpers/validate-session-id.ts
async function validateSessionId({ sessionId }) {
  try {
    let prismaUserRepository = new PrismaUserRepository(), validateSession = new ValidateSession(prismaUserRepository), { user } = await validateSession.execute(sessionId);
    return { user: toHttp(user) };
  } catch (err) {
    return err instanceof Error ? { error: err.message } : { error: "something went wrong" };
  }
}

// app/sessions.ts
var import_node = require("@remix-run/node"), { commitSession, destroySession, getSession } = (0, import_node.createCookieSessionStorage)({
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

// app/routes/_auth.home.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), headers = ({ parentHeaders }) => ({
  "Cache-Control": parentHeaders.get("Cache-control") ?? "max-age=3600"
});
async function loader4({ request }) {
  let session = await getSession(request.headers.get("Cookie")), token = session.get("token");
  if (console.log("home loader"), !token)
    throw (0, import_node2.redirect)("/sign-in");
  let { error, user } = await validateSessionId({ sessionId: token });
  if (error || !user)
    throw session.unset("token"), (0, import_node2.redirect)("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  return (0, import_node2.json)(
    { user }
  );
}
function auth_home_default() {
  let data = (0, import_react45.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react44.Text, { children: "home" }, void 0, !1, {
    fileName: "app/routes/_auth.home.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}

// app/routes/sign-in.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  action: () => action,
  default: () => sign_in_default,
  loader: () => loader5
});
var import_react47 = require("@chakra-ui/react"), import_bs2 = require("react-icons/bs"), import_md2 = require("react-icons/md"), import_node3 = require("@remix-run/node"), import_react48 = require("@remix-run/react");

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
    return await this.userDB.update(user.id, { sessionId: user.sessionId }), { sessionId: user.sessionId, user };
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
var import_react46 = require("@chakra-ui/react"), import_bs = require("react-icons/bs"), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react46.Center, { textAlign: "center", paddingBlock: 0.5, gap: 2, bg: "blue.500", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react46.Text, { fontSize: "xs", color: "white", children: [
      "Feito por",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react46.Link, { target: "_blank", href: "https://github.com/euliveiras", children: "@euliveiras" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_bs.BsMoonStars, { size: "12px", color: "white" }, void 0, !1, {
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
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
async function action({ request }) {
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
  }) : (session.set("token", sessionId), (0, import_node3.redirect)("/home", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  }));
}
async function loader5({ request }) {
  let token = (await getSession(request.headers.get("Cookie"))).get("token");
  if (!token)
    return (0, import_node3.json)({});
  let { user } = await validateSessionId({ sessionId: token });
  return user ? (0, import_node3.redirect)("/home") : (0, import_node3.json)({});
}
function CustomInputGroup({
  icon,
  name,
  type,
  isError,
  isIdle,
  isSubmitting
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
    import_react47.InputGroup,
    {
      sx: {
        "--clr": isError ? "#E53E3E" : isSubmitting ? "#48BB78" : isIdle ? "#000000" : "#3182ce"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react47.InputRightElement, { fontSize: 26, children: icon }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 109,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          import_react47.Input,
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
            lineNumber: 110,
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
      lineNumber: 98,
      columnNumber: 5
    },
    this
  );
}
function sign_in_default() {
  let errors = (0, import_react48.useActionData)(), navigation = (0, import_react48.useNavigation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react47.Box, { h: "100vh", w: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react47.Grid, { h: "100%", w: "100%", templateRows: "1fr auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react47.VStack, { paddingBlockStart: [32, 20], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react47.HStack, { spacing: "4px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_bs2.BsPerson, { size: "20px", color: "#000000", strokeWidth: "0.8px" }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react47.Text, { fontWeight: "bold", fontSize: "md", children: "/ login" }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 133,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        import_react47.VStack,
        {
          as: import_react48.Form,
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react47.FormControl, { isRequired: !0, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react47.FormLabel, { fontSize: "sm", children: "email" }, void 0, !1, {
                fileName: "app/routes/sign-in.tsx",
                lineNumber: 152,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                CustomInputGroup,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_md2.MdOutlineEmail, { color: "var(--clr)" }, void 0, !1, {
                    fileName: "app/routes/sign-in.tsx",
                    lineNumber: 154,
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
                  lineNumber: 153,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 151,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react47.FormControl, { isRequired: !0, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react47.FormLabel, { fontSize: "sm", children: "password" }, void 0, !1, {
                fileName: "app/routes/sign-in.tsx",
                lineNumber: 163,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                CustomInputGroup,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_md2.MdLockOutline, { color: "var(--clr)" }, void 0, !1, {
                    fileName: "app/routes/sign-in.tsx",
                    lineNumber: 165,
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
                  lineNumber: 164,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 162,
              columnNumber: 13
            }, this),
            (errors == null ? void 0 : errors.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react47.Text, { color: "red.500", children: errors == null ? void 0 : errors.error }, void 0, !1, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 173,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              import_react47.Button,
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
                lineNumber: 174,
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
          lineNumber: 139,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 132,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 187,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 131,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 130,
    columnNumber: 5
  }, this);
}

// app/routes/sign-up.tsx
var sign_up_exports = {};
__export(sign_up_exports, {
  action: () => action2,
  default: () => sign_up_default
});
var import_node4 = require("@remix-run/node"), import_react49 = require("@remix-run/react");

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
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
async function action2({ request }) {
  let form = await request.formData(), username = form.get("username"), password = form.get("password"), email = form.get("email");
  if (typeof username != "string" || typeof password != "string" || typeof email != "string")
    return new import_node4.Response(JSON.stringify({ error: "credentials is invalid" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  let { error } = await createUserController({ email, password, username });
  return error ? (console.log(error), new import_node4.Response(null, {
    status: 400,
    statusText: error
  })) : (0, import_node4.redirect)("/sign-in", 201);
}
function sign_up_default() {
  let data = (0, import_react49.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h1", { children: "Sign up" }, void 0, !1, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    data ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { style: { color: "red" }, children: data.error }, void 0, !1, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 40,
      columnNumber: 21
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react49.Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { children: [
        "username",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "text", name: "username" }, void 0, !1, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 44,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { children: [
        "email",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "text", name: "email" }, void 0, !1, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 48,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { children: [
        "password",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "password", name: "password" }, void 0, !1, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 52,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("button", { type: "submit", children: "Logar" }, void 0, !1, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react49.Link, { to: "/sign-in", children: "logar" }, void 0, !1, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-up.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  loader: () => loader6
});
var import_node5 = require("@remix-run/node");
async function loader6() {
  return (0, import_node5.redirect)("/home");
}

// app/routes/_auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => auth_default,
  headers: () => headers2,
  loader: () => loader7
});
var import_node6 = require("@remix-run/node"), import_node7 = require("@remix-run/node"), import_react56 = require("@remix-run/react");

// app/components/Header.tsx
var import_react53 = require("@chakra-ui/react"), import_bi = require("react-icons/bi"), import_md4 = require("react-icons/md"), import_lu = require("react-icons/lu"), import_react54 = require("@remix-run/react"), import_react55 = require("react");

// app/components/SearchInput.tsx
var import_react50 = require("@chakra-ui/react"), import_md3 = require("react-icons/md"), import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function SearchInput2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
    import_react50.InputGroup,
    {
      display: ["none", "none", "block"],
      role: "group",
      sx: { "input:focus ~ div": { svg: { color: "blackAlpha.900" } } },
      maxInlineSize: 96,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
          import_react50.Input,
          {
            placeholder: "Procure qualquer coisa",
            borderRadius: "full",
            focusBorderColor: "blackAlpha.900",
            type: "search",
            name: "query"
          },
          void 0,
          !1,
          {
            fileName: "app/components/SearchInput.tsx",
            lineNumber: 12,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react50.InputRightElement, { pointerEvents: "none", fontSize: 26, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
          import_react50.Icon,
          {
            color: "gray.200",
            as: import_md3.MdOutlineSearch,
            transitionDuration: "200ms",
            transitionProperty: "all",
            _groupHover: { color: "gray.300" }
          },
          void 0,
          !1,
          {
            fileName: "app/components/SearchInput.tsx",
            lineNumber: 20,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/SearchInput.tsx",
          lineNumber: 19,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/SearchInput.tsx",
      lineNumber: 6,
      columnNumber: 5
    },
    this
  );
}

// app/components/Drawer.tsx
var import_react52 = require("@chakra-ui/react");

// app/components/Avatar.tsx
var import_react51 = require("@chakra-ui/react"), import_rx = require("react-icons/rx"), import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function Avatar({ containerProps, avatarProps, user }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
    import_react51.HStack,
    {
      paddingInline: 2,
      display: ["none", "none", "flex"],
      ...containerProps,
      children: [
        user && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react51.Menu, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react51.MenuButton, { as: import_react51.Button, variant: "ghost", rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_rx.RxChevronDown, {}, void 0, !1, {
            fileName: "app/components/Avatar.tsx",
            lineNumber: 31,
            columnNumber: 62
          }, this), children: user.username }, void 0, !1, {
            fileName: "app/components/Avatar.tsx",
            lineNumber: 31,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react51.MenuList, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react51.MenuItem, { children: "Configura\xE7\xF5es" }, void 0, !1, {
              fileName: "app/components/Avatar.tsx",
              lineNumber: 35,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react51.MenuItem, { as: import_react51.Text, color: "red.400", children: "Sair" }, void 0, !1, {
              fileName: "app/components/Avatar.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Avatar.tsx",
            lineNumber: 34,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Avatar.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react51.Avatar, { size: "md", name: "Natan", ...avatarProps }, void 0, !1, {
          fileName: "app/components/Avatar.tsx",
          lineNumber: 40,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Avatar.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}

// app/components/Drawer.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function Drawer({ isOpen, onClose, finalFocusRef, user }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
    import_react52.Drawer,
    {
      isOpen,
      placement: "right",
      onClose,
      finalFocusRef,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react52.DrawerOverlay, {}, void 0, !1, {
          fileName: "app/components/Drawer.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react52.DrawerContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react52.DrawerCloseButton, { top: 4 }, void 0, !1, {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            import_react52.DrawerHeader,
            {
              as: import_react52.HStack,
              inlineSize: "min-content",
              paddingBlock: 2,
              paddingInline: 4,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react52.DrawerBody, {}, void 0, !1, {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react52.DrawerFooter, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react52.Button, { variant: "outline", mr: 3, onClick: onClose, children: "Cancel" }, void 0, !1, {
              fileName: "app/components/Drawer.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react52.Button, { colorScheme: "blue", children: "Save" }, void 0, !1, {
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
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function Header({ label, user }) {
  let { isOpen, onOpen, onClose } = (0, import_react53.useDisclosure)(), btnRef = (0, import_react55.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
    import_react53.Grid,
    {
      maxH: "120px",
      inlineSize: "100%",
      gridAutoFlow: "column",
      gridAutoRows: "min-content",
      gridAutoColumns: "1fr",
      paddingBlock: 4,
      paddingInline: 1,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react53.HStack, { spacing: [6], children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react53.HStack, { spacing: 1, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
              import_react53.IconButton,
              {
                variant: "ghost",
                "aria-label": "go to home",
                fontSize: "32px",
                isRound: !0,
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_bi.BiHomeAlt, { size: 30 }, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 46,
                  columnNumber: 19
                }, this),
                as: import_react54.Link,
                to: "/home"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Header.tsx",
                lineNumber: 41,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react53.Text, { letterSpacing: "wider", fontWeight: "bold", fontSize: "md", children: label }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 50,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(SearchInput2, {}, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 39,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react53.HStack, { justifySelf: "flex-end", spacing: 1, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
            import_react53.Button,
            {
              as: import_react54.Link,
              marginInline: 1,
              variant: "solid",
              colorScheme: "blue",
              borderRadius: "full",
              blockSize: 10,
              inlineSize: [10, "auto"],
              sx: { span: { marginInlineEnd: ["0"] } },
              leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_lu.LuPlus, { size: "1.25em" }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 66,
                columnNumber: 21
              }, this),
              to: "/new-wash",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react53.Text, { display: ["none", "block"], children: "Nova lavagem" }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 71,
                columnNumber: 11
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 57,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
            import_react53.IconButton,
            {
              variant: "ghost",
              colorScheme: "blackAlpha",
              "aria-label": "open notifications",
              fontSize: "26px",
              isRound: !0,
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_md4.MdOutlineNotificationsNone, {}, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 79,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 73,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react53.Divider, { borderLeftWidth: 2, orientation: "vertical" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Avatar, { user }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 82,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
            import_react53.IconButton,
            {
              display: ["flex", "flex", "none"],
              variant: "ghost",
              "aria-label": "open side menu",
              fontSize: "24px",
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_md4.MdDensityMedium, {}, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 88,
                columnNumber: 17
              }, this),
              onClick: onOpen,
              ref: btnRef
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 83,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
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
              lineNumber: 92,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 56,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 30,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_auth.tsx
var import_react57 = require("@chakra-ui/react"), import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), headers2 = ({ loaderHeaders }) => ({
  "Cache-Control": loaderHeaders.get("Cache-control") ?? "max-age=3600"
});
async function loader7({ request }) {
  let session = await getSession(request.headers.get("Cookie")), url = new URL(request.url), token = session.get("token");
  if (!token)
    throw (0, import_node6.redirect)("/sign-in");
  let { error, user } = await validateSessionId({ sessionId: token });
  if (error || !user)
    throw session.unset("token"), (0, import_node6.redirect)("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  return (0, import_node7.json)(
    { path: url.pathname, user },
    {
      headers: {
        "Cache-Control": `max-age=${60 * 60}`
      }
    }
  );
}
function auth_default() {
  let { path, user } = (0, import_react56.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react57.Grid, { gridTemplateRows: "auto 1fr", blockSize: "100vh", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Header, { label: path ?? "/", user }, void 0, !1, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react56.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => __default
});
var import_react58 = require("@chakra-ui/react");
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function __default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
    import_react58.Grid,
    {
      placeContent: "center",
      placeItems: "center",
      blockSize: "100dvh",
      inlineSize: "100%",
      gap: 4,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react58.Text, { fontSize: "lg", children: "Essa p\xE1gina n\xE3o existe :(" }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 13,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react58.HStack, { spacing: 1, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react58.Text, { fontSize: "lg", children: "Go back" }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(LinkHighlighted, { to: "/home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react58.Text, { fontSize: "lg", children: "/ home" }, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-NTEBWIYL.js", imports: ["/build/_shared/chunk-WTBARBAA.js", "/build/_shared/chunk-P62PNFZK.js", "/build/_shared/chunk-YP433BXJ.js", "/build/_shared/chunk-BS5JQCTE.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-EFJ2KTPD.js", imports: ["/build/_shared/chunk-NQK22EEQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-QKRNXDUO.js", imports: ["/build/_shared/chunk-BWPHFCGS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_auth-5LMNP5HG.js", imports: ["/build/_shared/chunk-M7KYBTZ4.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.home": { id: "routes/_auth.home", parentId: "routes/_auth", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.home-JYI2XTML.js", imports: ["/build/_shared/chunk-NQK22EEQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.new-wash._index": { id: "routes/_auth.new-wash._index", parentId: "routes/_auth", path: "new-wash", index: !0, caseSensitive: void 0, module: "/build/routes/_auth.new-wash._index-VGZ6LCPF.js", imports: ["/build/_shared/chunk-BWPHFCGS.js", "/build/_shared/chunk-NQK22EEQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-QW5LNJTG.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/driver-search": { id: "routes/driver-search", parentId: "root", path: "driver-search", index: void 0, caseSensitive: void 0, module: "/build/routes/driver-search-L2FXCMML.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in": { id: "routes/sign-in", parentId: "root", path: "sign-in", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in-CBTBVJ75.js", imports: ["/build/_shared/chunk-M7KYBTZ4.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up": { id: "routes/sign-up", parentId: "root", path: "sign-up", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up-65NJ2DF2.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/vehicle-search": { id: "routes/vehicle-search", parentId: "root", path: "vehicle-search", index: void 0, caseSensitive: void 0, module: "/build/routes/vehicle-search-T3SYH5Y2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/washes-search": { id: "routes/washes-search", parentId: "root", path: "washes-search", index: void 0, caseSensitive: void 0, module: "/build/routes/washes-search-ZLYUHAXX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "9f236586", hmr: void 0, url: "/build/manifest-9F236586.js" };

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
