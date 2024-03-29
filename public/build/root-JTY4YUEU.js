import {
  ClientStyleContext,
  ServerStyleContext
} from "/build/_shared/chunk-JMTNRVKS.js";
import {
  ChakraProvider,
  extendTheme
} from "/build/_shared/chunk-FQ5UBCHZ.js";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-RPYEFABZ.js";
import {
  withEmotionCache
} from "/build/_shared/chunk-6Y4MOXXW.js";
import {
  Outlet,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EDULEWIV.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/root.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [
    {
      charset: "utf-8",
      title: "washes-app",
      viewport: "width=device-width,initial-scale=1"
    }
  ];
};
var links = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
    }
  ];
};
var Document = withEmotionCache(
  ({ children }, emotionCache) => {
    const serverStyleData = (0, import_react.useContext)(ServerStyleContext);
    const clientStyleData = (0, import_react.useContext)(ClientStyleContext);
    (0, import_react.useEffect)(() => {
      emotionCache.sheet.container = document.head;
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      });
      clientStyleData == null ? void 0 : clientStyleData.reset();
    }, []);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "meta",
          {
            name: "viewport",
            content: "width=device-width,initial-scale=1"
          },
          void 0,
          false,
          {
            fileName: "app/root.tsx",
            lineNumber: 66,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "style",
          {
            "data-emotion": `${key} ${ids.join(" ")}`,
            dangerouslySetInnerHTML: { __html: css }
          },
          key,
          false,
          {
            fileName: "app/root.tsx",
            lineNumber: 73,
            columnNumber: 13
          },
          this
        ))
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this);
  }
);
var theme = extendTheme({
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChakraProvider, { theme, resetCSS: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-JTY4YUEU.js.map
