import {
  ClientStyleContext
} from "/build/_shared/chunk-WTBARBAA.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-P62PNFZK.js";
import {
  CacheProvider,
  createCache,
  require_react_dom
} from "/build/_shared/chunk-YP433BXJ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BS5JQCTE.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/entry.client.tsx
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// app/createEmotionCache.ts
var defaultCache = createEmotionCache();
function createEmotionCache() {
  return createCache({ key: "cha" });
}

// app/entry.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ClientCacheProvider({ children }) {
  const [cache, setCache] = (0, import_react.useState)(defaultCache);
  function reset() {
    setCache(createEmotionCache());
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientStyleContext.Provider, { value: { reset }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CacheProvider, { value: cache, children }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
(0, import_react_dom.hydrate)(
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientCacheProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 29,
    columnNumber: 3
  }, this),
  document
);
//# sourceMappingURL=/build/entry.client-NTEBWIYL.js.map
