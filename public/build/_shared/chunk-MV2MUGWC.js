import {
  Box,
  Link as Link2
} from "http://localhost:3001/build/_shared/chunk-JWF4XJQI.js";
import {
  Link,
  init_dist2 as init_dist
} from "http://localhost:3001/build/_shared/chunk-6SJDMTBK.js";
import {
  require_jsx_runtime
} from "http://localhost:3001/build/_shared/chunk-OKS54H4S.js";
import {
  createHotContext
} from "http://localhost:3001/build/_shared/chunk-KFR6H6JJ.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "http://localhost:3001/build/_shared/chunk-CT6324V4.js";

// app/components/LinkHighlighted.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime = __toESM(require_jsx_runtime());
init_dist();
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/LinkHighlighted.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/LinkHighlighted.tsx"
  );
  import.meta.hot.lastModified = "1692151602861.2983";
}
function LinkHighlighted({
  to,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, {
    as: Link,
    to,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
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
    })
  });
}
_c = LinkHighlighted;
var _c;
$RefreshReg$(_c, "LinkHighlighted");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  LinkHighlighted
};
//# sourceMappingURL=http://localhost:3001/build/_shared/chunk-MV2MUGWC.js.map
