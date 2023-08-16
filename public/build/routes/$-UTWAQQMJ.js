import {
  LinkHighlighted
} from "http://localhost:3001/build/_shared/chunk-EOXYKIW2.js";
import {
  Grid,
  HStack,
  Text
} from "http://localhost:3001/build/_shared/chunk-WSTLIJHY.js";
import "http://localhost:3001/build/_shared/chunk-DC5KBJVF.js";
import "http://localhost:3001/build/_shared/chunk-PKOMFC7F.js";
import "http://localhost:3001/build/_shared/chunk-IJA4GF5B.js";
import "http://localhost:3001/build/_shared/chunk-6SJDMTBK.js";
import {
  require_jsx_runtime
} from "http://localhost:3001/build/_shared/chunk-OKS54H4S.js";
import "http://localhost:3001/build/_shared/chunk-3YOGVSK4.js";
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

// browser-route-module:routes/$.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime = __toESM(require_jsx_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/$.tsx"
  );
}
function stdin_default() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    Grid,
    {
      placeContent: "center",
      placeItems: "center",
      blockSize: "100dvh",
      inlineSize: "100%",
      gap: 4,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { fontSize: "lg", children: "Essa p\xE1gina n\xE3o existe :(" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HStack, { spacing: 1, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { fontSize: "lg", children: "Go back" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkHighlighted, { to: "/home", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { fontSize: "lg", children: "/ home" }) })
        ] })
      ]
    }
  );
}
export {
  stdin_default as default
};
//# sourceMappingURL=http://localhost:3001/build/routes/$-UTWAQQMJ.js.map
