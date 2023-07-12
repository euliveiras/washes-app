import {
  ClientStyleContext,
  ServerStyleContext
} from "http://localhost:3001/build/_shared/chunk-EYPFEEA2.js";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration
} from "http://localhost:3001/build/_shared/chunk-ANXL52AQ.js";
import {
  ChakraProvider,
  extendTheme
} from "http://localhost:3001/build/_shared/chunk-3IKIBLBP.js";
import {
  withEmotionCache
} from "http://localhost:3001/build/_shared/chunk-DC5KBJVF.js";
import "http://localhost:3001/build/_shared/chunk-PKOMFC7F.js";
import {
  require_jsx_runtime
} from "http://localhost:3001/build/_shared/chunk-OKS54H4S.js";
import {
  Outlet
} from "http://localhost:3001/build/_shared/chunk-6SJDMTBK.js";
import {
  require_react
} from "http://localhost:3001/build/_shared/chunk-3YOGVSK4.js";
import {
  createHotContext
} from "http://localhost:3001/build/_shared/chunk-KFR6H6JJ.js";
import "http://localhost:3001/build/_shared/chunk-I54TBTTL.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "http://localhost:3001/build/_shared/chunk-CT6324V4.js";

// browser-route-module:root.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var meta = () => {
  return [{
    charset: "utf-8",
    title: "washes-app",
    viewport: "width=device-width,initial-scale=1"
  }];
};
var links = () => {
  return [{
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }, {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  }, {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  }];
};
var Document = _s(withEmotionCache(_c = _s(({
  children
}, emotionCache) => {
  _s();
  const serverStyleData = (0, import_react.useContext)(ServerStyleContext);
  const clientStyleData = (0, import_react.useContext)(ClientStyleContext);
  (0, import_react.useEffect)(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData?.reset();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Links, {}), serverStyleData?.map(({
        key,
        ids,
        css
      }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
        "data-emotion": `${key} ${ids.join(" ")}`,
        dangerouslySetInnerHTML: {
          __html: css
        }
      }, key))]
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
      children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollRestoration, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveReload, {})]
    })]
  });
}, "vFrPjx9OU/CyW6kig5dfFtYNdnQ=")), "vFrPjx9OU/CyW6kig5dfFtYNdnQ=");
_c2 = Document;
var theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        "minBlockSize": "100vh",
        "width": "100%",
        "backgroundColor": "#FFFFFF",
        "fontFamily": "Ubuntu, sans-serif"
      }
    }
  }
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChakraProvider, {
      theme,
      resetCSS: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
    })
  });
}
_c3 = App;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Document$withEmotionCache");
$RefreshReg$(_c2, "Document");
$RefreshReg$(_c3, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=http://localhost:3001/build/root-XHP2GVMM.js.map
