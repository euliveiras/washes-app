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
  action: () => action,
  default: () => NewWash
});
var import_react44 = require("@chakra-ui/react");

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
  children
}) {
  let { data, submit } = (0, import_react19.useFetcher)();
  return (0, import_react18.useEffect)(() => {
    submit({ licensePlate }, { action: "/washes-search" });
  }, [submit, licensePlate]), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react17.Grid, { blockSize: "100%", gridTemplateRows: "1fr auto", children: (data == null ? void 0 : data.washes.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react17.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react17.Alert, { status: "info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react17.AlertIcon, {}, void 0, !1, {
        fileName: "app/components/NewWash/WashesContent/Container.tsx",
        lineNumber: 30,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react17.Text, { children: [
        "H\xE1 lavagens ativas para o ve\xEDculo com placa",
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(LinkHighlighted, { to: `/vehicle/${licensePlate}`, children: licensePlate }, void 0, !1, {
          fileName: "app/components/NewWash/WashesContent/Container.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NewWash/WashesContent/Container.tsx",
        lineNumber: 31,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewWash/WashesContent/Container.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NewWash/WashesContent/Container.tsx",
      lineNumber: 28,
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
          lineNumber: 46,
          columnNumber: 24
        }, this)))
      },
      void 0,
      !1,
      {
        fileName: "app/components/NewWash/WashesContent/Container.tsx",
        lineNumber: 39,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/NewWash/WashesContent/Container.tsx",
    lineNumber: 27,
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
      lineNumber: 52,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/NewWash/WashesContent/Container.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/NewWash/WashesContent/Container.tsx",
    lineNumber: 25,
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
  licensePlate
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    Container2,
    {
      licensePlate: licensePlate ?? "",
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
              lineNumber: 34,
              columnNumber: 11
            },
            this
          )
        },
        w.scheduleDate,
        !1,
        {
          fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
          lineNumber: 24,
          columnNumber: 9
        },
        this
      ))
    },
    void 0,
    !1,
    {
      fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
      lineNumber: 20,
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
            lineNumber: 95,
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
              lineNumber: 98,
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
        lineNumber: 87,
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
                lineNumber: 116,
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
                lineNumber: 123,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
            lineNumber: 115,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
          lineNumber: 107,
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
            lineNumber: 142,
            columnNumber: 17
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
          lineNumber: 134,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
        lineNumber: 133,
        columnNumber: 11
      }, this),
      vehicle.create && error && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react23.Alert, { status: "error", marginBlock: 4, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react23.AlertIcon, {}, void 0, !1, {
          fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
          lineNumber: 150,
          columnNumber: 15
        }, this),
        error.message
      ] }, void 0, !0, {
        fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
    lineNumber: 86,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
    lineNumber: 85,
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
  let fetcher = (0, import_react30.useFetcher)(), data = (_a = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a.results;
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
          lineNumber: 43,
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
              lineNumber: 46,
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
                    lineNumber: 68,
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
                (data == null ? void 0 : data.length) - 1 !== i && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react31.Divider, { alignSelf: "center", inlineSize: "80%" }, void 0, !1, {
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
var import_react45 = require("react");

// app/components/NewWash/footer.tsx
var import_react33 = require("@chakra-ui/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function NewWashFooter({
  goNext,
  goBack,
  containerProps,
  isNextButtonDisable,
  isPreviousButtonDisable,
  isLastStep,
  onFinish
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
            lineNumber: 39,
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
            lineNumber: 49,
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
            onClick: onFinish,
            children: "finalizar"
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewWash/footer.tsx",
            lineNumber: 66,
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
            lineNumber: 56,
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
      lineNumber: 22,
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
                lineNumber: 58,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react34.Flex, { flexDir: "column", gap: 8, inlineSize: "100%", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react34.FormControl, { as: import_react34.Flex, flexDir: "column", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react34.FormLabel, { margin: 0, marginInline: "auto", htmlFor: "driver-name", children: "Motorista" }, void 0, !1, {
              fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
              lineNumber: 71,
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
                lineNumber: 83,
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
var import_react39 = require("@chakra-ui/react"), import_hi = require("react-icons/hi"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function DriverSummary({ driver, goTo }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    import_react39.Flex,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react39.Text, { as: "h2", fontSize: "md", marginInline: "auto", children: "Informa\xE7\xF5es do motorista" }, void 0, !1, {
          fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          import_react39.Flex,
          {
            flexDir: "column",
            gap: 4,
            blockSize: "fit-content",
            inlineSize: "100%",
            maxInlineSize: "200px",
            align: "center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              import_react39.Button,
              {
                rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_hi.HiExternalLink, { size: 20 }, void 0, !1, {
                  fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                  lineNumber: 37,
                  columnNumber: 22
                }, this),
                variant: "outline",
                onClick: () => goTo(),
                inlineSize: "100%",
                minBlockSize: 12,
                blockSize: "fit-content",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                  import_react39.Flex,
                  {
                    flexDir: "column",
                    gap: 1,
                    paddingBlock: 4,
                    align: "start",
                    marginInlineEnd: 4,
                    inlineSize: "100%",
                    children: driver.create ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react39.Text, { fontSize: "md", children: "Matheus" }, void 0, !1, {
                        fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react39.Flex, { as: "span", gap: 1, inlineSize: "fit-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react39.Text, { fontSize: "sm", fontWeight: "light", children: driver.name }, void 0, !1, {
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
                    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                      import_react39.Text,
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
                    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react40.Text, { fontWeight: "semibold", children: vehicle.licensePlate }, void 0, !1, {
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
                    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react40.Text, { fontSize: "sm", fontWeight: "light", children: vehicle.type }, void 0, !1, {
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
                      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Note, { note: w.note }, void 0, !1, {
                        fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                        lineNumber: 70,
                        columnNumber: 15
                      }, this),
                      w.isCompleted && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react41.Flex, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react41.Text, { fontStyle: "italic", fontSize: "sm", children: "lavagem j\xE1 feita" }, void 0, !1, {
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
  Container: Container4,
  Vehicle: VehicleSummary,
  Washes: WashesSummary
};

// app/routes/_auth.new-wash._index.tsx
var import_node2 = require("@remix-run/node"), import_react46 = require("@remix-run/react");

// app/components/hooks/useToast.ts
var import_react42 = require("react"), import_react43 = require("@chakra-ui/react"), useToast = () => {
  let toastIdRef = (0, import_react42.useRef)(""), toast = (0, import_react43.useToast)(), close = (0, import_react42.useCallback)(() => {
    toastIdRef.current && toast.close(toastIdRef.current);
  }, [toast]), showErrorToast = (0, import_react42.useCallback)(
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
  ), showSuccessToast = (0, import_react42.useCallback)(
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
      id: raw.id,
      driver: JSON.parse(raw.driver),
      licensePlate: raw.licensePlate,
      vehicleType: raw.vehicleType
    });
  }
  static toPrisma(vehicle) {
    return {
      id: vehicle.id,
      driver: vehicle.driver ? JSON.stringify(new Driver(vehicle.driver)) : void 0,
      licensePlate: vehicle.licensePlate,
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
  async findByLicensePlate(licensePlate) {
    let data = await prisma.vehicle.findUnique({ where: { licensePlate } });
    return data ? PrismaVehicleMapper.toDomain(data) : null;
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
  if (!data)
    throw new AppError("Data DTO is required", 400);
  let driver;
  data.driver && (driver = new Driver({
    name: data.driver.name,
    phones: [data.driver.phone]
  }));
  let { vehicle } = await createVehicleService.execute({
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
  get note() {
    return this._props.note;
  }
  set note(note) {
    this._props.note = note;
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
      endDate: washCycle.endDate,
      startDate: washCycle.startDate,
      vehicleId: washCycle.vehicleId,
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
  async find(id) {
  }
  async findNextCycleByLicensePlate(vehicleId) {
    let cycle = await prisma.washCycle.findFirst({
      where: { vehicleId }
    });
    return cycle ? PrismaWashCycleMapper.toDomain(cycle) : null;
  }
  async update(id, data) {
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
      note: raw.note
    });
  }
  static toPrisma(wash) {
    return console.log(wash), {
      createdBy: wash.createdBy,
      cycleId: wash.cycleId,
      scheduleDate: wash.scheduleDate,
      vehicleId: wash.vehicleId,
      id: wash.id,
      isCompleted: wash.isCompleted,
      note: wash.note
    };
  }
};

// src/infra/database/prisma/repositories/washes-repository.ts
var PrismaWashRepository = class {
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

// src/infra/http/helpers/validate-session-id.ts
async function validateSessionId({ sessionId }) {
  try {
    let prismaUserRepository = new PrismaUserRepository(), validateSession = new ValidateSession(prismaUserRepository), { user } = await validateSession.execute(sessionId);
    return { user: toHttp(user) };
  } catch (err) {
    return err instanceof Error ? { error: err.message } : { error: "something went wrong" };
  }
}

// app/routes/_auth.new-wash._index.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
async function action({ request }) {
  let jsonData = await request.json(), vehicle = jsonData == null ? void 0 : jsonData.vehicle, washes = jsonData == null ? void 0 : jsonData.washes, driver = jsonData == null ? void 0 : jsonData.driver;
  if (!vehicle)
    return (0, import_node2.json)(
      {
        error: !0,
        message: "Voc\xEA precisa fornecer o ve\xEDculo"
      },
      400
    );
  let token = (await getSession(request.headers.get("Cookie"))).get("token") ?? "", { user } = await validateSessionId({ sessionId: token });
  if (vehicle.create) {
    let createdVehicle = await createVehicleController({
      type: vehicle.type,
      licensePlate: vehicle.licensePlate,
      driver: driver != null && driver.create ? driver : null
    });
    if (createdVehicle.error)
      return (0, import_node2.json)(
        {
          error: !0,
          message: createdVehicle.error.message
        },
        createdVehicle.error.statusCode
      );
    let initializedCycle = initializeCycleController({
      createdBy: (user == null ? void 0 : user.id) ?? "",
      vehicleId: createdVehicle.vehicle.licensePlate,
      washes
    });
    if (initializedCycle.error)
      return (0, import_node2.json)(
        {
          error: !0,
          message: initializedCycle.error.message
        },
        initializedCycle.error.statusCode
      );
  } else {
    let initializeCycleData = initializeCycleController({
      createdBy: (user == null ? void 0 : user.id) ?? "",
      vehicleId: vehicle.licensePlate,
      washes
    });
    return initializeCycleData.error ? (0, import_node2.json)(
      {
        error: !0,
        message: initializeCycleData.error.message
      },
      initializeCycleData.error.statusCode
    ) : (0, import_node2.json)({ success: !0, message: "Lavagens criadas" }, 201);
  }
}
function NewWash() {
  let { Stepper: Stepper2, activeStep, steps: steps2, goToPrevious, goToNext, setActiveStep } = useStepper(), { showErrorToast, showSuccessToast } = useToast(), [error, setError] = (0, import_react45.useState)(!1), [vehicle, setVehicle] = (0, import_react45.useState)(defaultVehicleState), [washes, setWashes] = (0, import_react45.useState)(washesDefaultValue), [driver, setDriver] = (0, import_react45.useState)(defaultDriverValue), submit = (0, import_react46.useSubmit)(), navigate = (0, import_react46.useNavigate)(), data = (0, import_react46.useActionData)();
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
  function onFinish() {
    submit({ vehicle, driver, washes }, { method: "POST", encType: "application/json" });
  }
  (0, import_react45.useEffect)(() => {
    typeof data > "u" || data != null && data.success && (showSuccessToast({ message: data.message }), navigate("/home"));
  }, [data, showSuccessToast, navigate]), (0, import_react45.useEffect)(() => {
    typeof data < "u" && data != null && data.error && showErrorToast({ message: data.message });
  }, [data, showErrorToast]);
  let isVehicleDataValid = vehicle.licensePlate !== "" && vehicle.type !== "", isDriverValid = !0, lowerThanLastStep = activeStep < steps2.length - 1, canProceed = isVehicleDataValid && isDriverValid && !0 && lowerThanLastStep, canGoBack = activeStep > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    import_react44.Grid,
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
            lineNumber: 191,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          import_react44.Grid,
          {
            gridTemplateColumns: "1fr",
            inlineSize: "100%",
            gridTemplateRows: "auto 1fr",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
                import_react44.Text,
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
                  lineNumber: 201,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react44.Box, { inlineSize: "100%", marginInline: "auto", overflow: "scroll", children: [
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
                    lineNumber: 212,
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
                    lineNumber: 220,
                    columnNumber: 13
                  },
                  this
                ),
                activeStep === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DriverContent, { driver, setDriverData }, void 0, !1, {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 229,
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
                      lineNumber: 233,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(summary.Washes, { washes, goTo: () => setActiveStep(1) }, void 0, !1, {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 237,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(summary.Driver, { driver, goTo: () => setActiveStep(2) }, void 0, !1, {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 238,
                    columnNumber: 15
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 232,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.new-wash._index.tsx",
                lineNumber: 210,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
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
                !1,
                {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 242,
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
            lineNumber: 196,
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
      lineNumber: 178,
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
var import_react_router = require("react-router");

// src/domain/modules/vehicle/use-cases/find-license-plate.ts
var FindLicensePlate = class {
  constructor(db) {
    this.db = db;
  }
  async execute({ plate }) {
    return { vehicle: await this.db.findByLicensePlate(plate) };
  }
};

// src/infra/http/controllers/find-vehicle-controller.ts
async function controller3({ licensePlate }) {
  let prismaVehicleRepo = new PrismaVehicleRepository(), findVehicle = new FindLicensePlate(prismaVehicleRepo), { vehicle } = await findVehicle.execute({ plate: licensePlate });
  return { vehicle: vehicle ? HttpMapper.vehicle(vehicle) : null };
}
async function findVehicleControler(data) {
  return asyncWrapper(() => controller3(data));
}

// app/routes/vehicle-search/route.ts
async function loader({ request }) {
  let url = new URL(request.url), query = url.searchParams.get("query"), licensePlate = url.searchParams.get("licensePlate");
  if (typeof query != "string" || query == "" || !licensePlate)
    return (0, import_react_router.json)(null);
  let { vehicle } = await findVehicleControler({ licensePlate });
  return (0, import_react_router.json)({ results: vehicle ? [vehicle] : [] });
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
  loader: () => loader3
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
async function controller4({ licensePlate }) {
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
var getNextWashesAndCycle = (data) => asyncWrapper(() => controller4(data));

// app/routes/washes-search/route.ts
async function loader3({ request }) {
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
  default: () => auth_home_default,
  headers: () => headers,
  loader: () => loader4
});
var import_react47 = require("@chakra-ui/react"), import_node3 = require("@remix-run/node"), import_react48 = require("@remix-run/react");
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), headers = ({ parentHeaders }) => ({
  "Cache-Control": parentHeaders.get("Cache-control") ?? "max-age=3600"
});
async function loader4({ request }) {
  let session = await getSession(request.headers.get("Cookie")), token = session.get("token");
  if (console.log("home loader"), !token)
    throw (0, import_node3.redirect)("/sign-in");
  let { error, user } = await validateSessionId({ sessionId: token });
  if (error || !user)
    throw session.unset("token"), (0, import_node3.redirect)("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  return (0, import_node3.json)(
    { user }
  );
}
function auth_home_default() {
  let data = (0, import_react48.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react47.Text, { children: "home" }, void 0, !1, {
    fileName: "app/routes/_auth.home.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}

// app/routes/sign-in.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  action: () => action2,
  default: () => sign_in_default,
  loader: () => loader5
});
var import_react50 = require("@chakra-ui/react"), import_bs2 = require("react-icons/bs"), import_md2 = require("react-icons/md"), import_node4 = require("@remix-run/node"), import_react51 = require("@remix-run/react");

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
var import_react49 = require("@chakra-ui/react"), import_bs = require("react-icons/bs"), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react49.Center, { textAlign: "center", paddingBlock: 0.5, gap: 2, bg: "blue.500", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react49.Text, { fontSize: "xs", color: "white", children: [
      "Feito por",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react49.Link, { target: "_blank", href: "https://github.com/euliveiras", children: "@euliveiras" }, void 0, !1, {
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
async function action2({ request }) {
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
  }) : (session.set("token", sessionId), (0, import_node4.redirect)("/home", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  }));
}
async function loader5({ request }) {
  let token = (await getSession(request.headers.get("Cookie"))).get("token");
  if (!token)
    return (0, import_node4.json)({});
  let { user } = await validateSessionId({ sessionId: token });
  return user ? (0, import_node4.redirect)("/home") : (0, import_node4.json)({});
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
    import_react50.InputGroup,
    {
      sx: {
        "--clr": isError ? "#E53E3E" : isSubmitting ? "#48BB78" : isIdle ? "#000000" : "#3182ce"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react50.InputRightElement, { fontSize: 26, children: icon }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 108,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          import_react50.Input,
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
  let errors = (0, import_react51.useActionData)(), navigation = (0, import_react51.useNavigation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react50.Box, { h: "100vh", w: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react50.Grid, { h: "100%", w: "100%", templateRows: "1fr auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react50.VStack, { paddingBlockStart: [32, 20], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react50.HStack, { spacing: "4px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_bs2.BsPerson, { size: "20px", color: "#000000", strokeWidth: "0.8px" }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react50.Text, { fontWeight: "bold", fontSize: "md", children: "/ login" }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        import_react50.VStack,
        {
          as: import_react51.Form,
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react50.FormControl, { isRequired: !0, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react50.FormLabel, { fontSize: "sm", children: "email" }, void 0, !1, {
                fileName: "app/routes/sign-in.tsx",
                lineNumber: 151,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                CustomInputGroup,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_md2.MdOutlineEmail, { color: "var(--clr)" }, void 0, !1, {
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react50.FormControl, { isRequired: !0, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react50.FormLabel, { fontSize: "sm", children: "password" }, void 0, !1, {
                fileName: "app/routes/sign-in.tsx",
                lineNumber: 162,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                CustomInputGroup,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_md2.MdLockOutline, { color: "var(--clr)" }, void 0, !1, {
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
            (errors == null ? void 0 : errors.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react50.Text, { color: "red.500", children: errors == null ? void 0 : errors.error }, void 0, !1, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 172,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              import_react50.Button,
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Footer, {}, void 0, !1, {
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
  action: () => action3,
  default: () => sign_up_default
});
var import_node5 = require("@remix-run/node"), import_react52 = require("@remix-run/react");

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
async function action3({ request }) {
  let form = await request.formData(), username = form.get("username"), password = form.get("password"), email = form.get("email");
  if (typeof username != "string" || typeof password != "string" || typeof email != "string")
    return new import_node5.Response(JSON.stringify({ error: "credentials is invalid" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  console.log(email, password, username);
  let { error } = await createUserController({ email, password, username });
  return error ? (console.log(error), new import_node5.Response(null, {
    status: 400,
    statusText: error
  })) : (0, import_node5.redirect)("/sign-in", 201);
}
function sign_up_default() {
  let data = (0, import_react52.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h1", { children: "Sign up" }, void 0, !1, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    data ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { style: { color: "red" }, children: data.error }, void 0, !1, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 42,
      columnNumber: 21
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react52.Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { children: [
        "username",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "text", name: "username" }, void 0, !1, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 46,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { children: [
        "email",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "text", name: "email" }, void 0, !1, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 50,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { children: [
        "password",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "password", name: "password" }, void 0, !1, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("button", { type: "submit", children: "Logar" }, void 0, !1, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react52.Link, { to: "/sign-in", children: "logar" }, void 0, !1, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-up.tsx",
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  loader: () => loader6
});
var import_node6 = require("@remix-run/node");
async function loader6() {
  return (0, import_node6.redirect)("/home");
}

// app/routes/_auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => auth_default,
  headers: () => headers2,
  loader: () => loader7
});
var import_node7 = require("@remix-run/node"), import_node8 = require("@remix-run/node"), import_react59 = require("@remix-run/react");

// app/components/Header.tsx
var import_react56 = require("@chakra-ui/react"), import_bi = require("react-icons/bi"), import_md4 = require("react-icons/md"), import_lu = require("react-icons/lu"), import_react57 = require("@remix-run/react"), import_react58 = require("react");

// app/components/SearchInput.tsx
var import_react53 = require("@chakra-ui/react"), import_md3 = require("react-icons/md"), import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function SearchInput2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
    import_react53.InputGroup,
    {
      display: ["none", "none", "block"],
      role: "group",
      sx: { "input:focus ~ div": { svg: { color: "blackAlpha.900" } } },
      maxInlineSize: 96,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
          import_react53.Input,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react53.InputRightElement, { pointerEvents: "none", fontSize: 26, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
          import_react53.Icon,
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
var import_react55 = require("@chakra-ui/react");

// app/components/Avatar.tsx
var import_react54 = require("@chakra-ui/react"), import_rx = require("react-icons/rx"), import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function Avatar({ containerProps, avatarProps, user }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
    import_react54.HStack,
    {
      paddingInline: 2,
      display: ["none", "none", "flex"],
      ...containerProps,
      children: [
        user && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react54.Menu, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react54.MenuButton, { as: import_react54.Button, variant: "ghost", rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_rx.RxChevronDown, {}, void 0, !1, {
            fileName: "app/components/Avatar.tsx",
            lineNumber: 31,
            columnNumber: 62
          }, this), children: user.username }, void 0, !1, {
            fileName: "app/components/Avatar.tsx",
            lineNumber: 31,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react54.MenuList, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react54.MenuItem, { children: "Configura\xE7\xF5es" }, void 0, !1, {
              fileName: "app/components/Avatar.tsx",
              lineNumber: 35,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react54.MenuItem, { as: import_react54.Text, color: "red.400", children: "Sair" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react54.Avatar, { size: "md", name: "Natan", ...avatarProps }, void 0, !1, {
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
    import_react55.Drawer,
    {
      isOpen,
      placement: "right",
      onClose,
      finalFocusRef,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react55.DrawerOverlay, {}, void 0, !1, {
          fileName: "app/components/Drawer.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react55.DrawerContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react55.DrawerCloseButton, { top: 4 }, void 0, !1, {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            import_react55.DrawerHeader,
            {
              as: import_react55.HStack,
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react55.DrawerBody, {}, void 0, !1, {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react55.DrawerFooter, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react55.Button, { variant: "outline", mr: 3, onClick: onClose, children: "Cancel" }, void 0, !1, {
              fileName: "app/components/Drawer.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react55.Button, { colorScheme: "blue", children: "Save" }, void 0, !1, {
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
  let { isOpen, onOpen, onClose } = (0, import_react56.useDisclosure)(), btnRef = (0, import_react58.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
    import_react56.Grid,
    {
      maxH: "120px",
      inlineSize: "100%",
      gridAutoFlow: "column",
      gridAutoRows: "min-content",
      gridAutoColumns: "1fr",
      paddingBlock: 4,
      paddingInline: 1,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react56.HStack, { spacing: [6], children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react56.HStack, { spacing: 1, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
              import_react56.IconButton,
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
                as: import_react57.Link,
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react56.Text, { letterSpacing: "wider", fontWeight: "bold", fontSize: "md", children: label }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react56.HStack, { justifySelf: "flex-end", spacing: 1, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
            import_react56.Button,
            {
              as: import_react57.Link,
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
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react56.Text, { display: ["none", "block"], children: "Nova lavagem" }, void 0, !1, {
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
            import_react56.IconButton,
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react56.Divider, { borderLeftWidth: 2, orientation: "vertical" }, void 0, !1, {
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
            import_react56.IconButton,
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
var import_react60 = require("@chakra-ui/react"), import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), headers2 = ({ loaderHeaders }) => ({
  "Cache-Control": loaderHeaders.get("Cache-control") ?? "max-age=3600"
});
async function loader7({ request }) {
  let session = await getSession(request.headers.get("Cookie")), url = new URL(request.url), token = session.get("token");
  if (!token)
    throw (0, import_node7.redirect)("/sign-in");
  let { error, user } = await validateSessionId({ sessionId: token });
  if (error || !user)
    throw session.unset("token"), (0, import_node7.redirect)("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  return (0, import_node8.json)(
    { path: url.pathname, user },
    {
      headers: {
        "Cache-Control": `max-age=${60 * 60}`
      }
    }
  );
}
function auth_default() {
  let { path, user } = (0, import_react59.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react60.Grid, { gridTemplateRows: "auto 1fr", blockSize: "100vh", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Header, { label: path ?? "/", user }, void 0, !1, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react59.Outlet, {}, void 0, !1, {
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
var import_react61 = require("@chakra-ui/react");
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function __default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
    import_react61.Grid,
    {
      placeContent: "center",
      placeItems: "center",
      blockSize: "100dvh",
      inlineSize: "100%",
      gap: 4,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react61.Text, { fontSize: "lg", children: "Essa p\xE1gina n\xE3o existe :(" }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 13,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react61.HStack, { spacing: 1, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react61.Text, { fontSize: "lg", children: "Go back" }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(LinkHighlighted, { to: "/home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react61.Text, { fontSize: "lg", children: "/ home" }, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-FAPOEOMU.js", imports: ["/build/_shared/chunk-R5NLA4ZP.js", "/build/_shared/chunk-H6OBPNVQ.js", "/build/_shared/chunk-LTOX4GGY.js", "/build/_shared/chunk-OJCDOD5O.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FM3GVVCJ.js", imports: ["/build/_shared/chunk-LFA5YRFX.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-VHTQ6VPV.js", imports: ["/build/_shared/chunk-XXOGTOEO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_auth-2AMZ7Z77.js", imports: ["/build/_shared/chunk-K4PV3FFU.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.home": { id: "routes/_auth.home", parentId: "routes/_auth", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.home-4BKAXUEG.js", imports: ["/build/_shared/chunk-LFA5YRFX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.new-wash._index": { id: "routes/_auth.new-wash._index", parentId: "routes/_auth", path: "new-wash", index: !0, caseSensitive: void 0, module: "/build/routes/_auth.new-wash._index-KW2RWHW5.js", imports: ["/build/_shared/chunk-XXOGTOEO.js", "/build/_shared/chunk-LFA5YRFX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-QW5LNJTG.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/driver-search": { id: "routes/driver-search", parentId: "root", path: "driver-search", index: void 0, caseSensitive: void 0, module: "/build/routes/driver-search-L2FXCMML.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in": { id: "routes/sign-in", parentId: "root", path: "sign-in", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in-W3RKUMVS.js", imports: ["/build/_shared/chunk-K4PV3FFU.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up": { id: "routes/sign-up", parentId: "root", path: "sign-up", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up-LVBVNPMF.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/vehicle-search": { id: "routes/vehicle-search", parentId: "root", path: "vehicle-search", index: void 0, caseSensitive: void 0, module: "/build/routes/vehicle-search-T3SYH5Y2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/washes-search": { id: "routes/washes-search", parentId: "root", path: "washes-search", index: void 0, caseSensitive: void 0, module: "/build/routes/washes-search-ZLYUHAXX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "f92005c5", hmr: void 0, url: "/build/manifest-F92005C5.js" };

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
