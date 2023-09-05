import {
  Box,
  Link as Link2
} from "/build/_shared/chunk-HKFCHMVY.js";
import {
  Link,
  init_dist,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EDULEWIV.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/LinkHighlighted.tsx
init_dist();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function LinkHighlighted({ to, children, LinkProps }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { marginInline: 1, ...LinkProps, as: Link, to, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Box,
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
    false,
    {
      fileName: "app/components/LinkHighlighted.tsx",
      lineNumber: 15,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/LinkHighlighted.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

export {
  LinkHighlighted
};
//# sourceMappingURL=/build/_shared/chunk-DLIGFWH4.js.map
