import {
  ClientStyleContext
} from "http://localhost:3001/build/_shared/chunk-EYPFEEA2.js";
import {
  CacheProvider,
  createCache
} from "http://localhost:3001/build/_shared/chunk-DC5KBJVF.js";
import {
  require_react_dom
} from "http://localhost:3001/build/_shared/chunk-PKOMFC7F.js";
import {
  RemixBrowser
} from "http://localhost:3001/build/_shared/chunk-ANXL52AQ.js";
import "http://localhost:3001/build/_shared/chunk-6SJDMTBK.js";
import {
  require_jsx_runtime
} from "http://localhost:3001/build/_shared/chunk-OKS54H4S.js";
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

// app/entry.client.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// app/createEmotionCache.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/createEmotionCache.ts"
  );
  import.meta.hot.lastModified = "1688687246401.261";
}
var defaultCache = createEmotionCache();
function createEmotionCache() {
  return createCache({ key: "cha" });
}

// app/entry.client.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/entry.client.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/entry.client.tsx"
  );
  import.meta.hot.lastModified = "1688687361718.5706";
}
function ClientCacheProvider({
  children
}) {
  _s();
  const [cache, setCache] = (0, import_react.useState)(defaultCache);
  function reset() {
    setCache(createEmotionCache());
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientStyleContext.Provider, {
    value: {
      reset
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CacheProvider, {
      value: cache,
      children
    })
  });
}
_s(ClientCacheProvider, "tcIOn6Sd77WzbBr/Pv1kFwXQ8Ls=");
_c = ClientCacheProvider;
(0, import_react_dom.hydrate)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientCacheProvider, {
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemixBrowser, {})
}), document);
var _c;
$RefreshReg$(_c, "ClientCacheProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
//# sourceMappingURL=http://localhost:3001/build/entry.client-QMZKCUPP.js.map
