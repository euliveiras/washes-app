import {
  Link,
  useActionData
} from "http://localhost:3001/build/_shared/chunk-ANXL52AQ.js";
import {
  require_jsx_runtime
} from "http://localhost:3001/build/_shared/chunk-OKS54H4S.js";
import {
  Form
} from "http://localhost:3001/build/_shared/chunk-6SJDMTBK.js";
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

// browser-route-module:routes/sign-up.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime = __toESM(require_jsx_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/sign-up.tsx"
  );
}
function stdin_default() {
  const data = useActionData();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Sign up" }),
    data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { color: "red" }, children: data.error }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
        "username",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "text", name: "username" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
        "email",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "text", name: "email" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
        "password",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "password", name: "password" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "submit", children: "Logar" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { to: "/sign-in", children: "logar" })
    ] })
  ] });
}
export {
  stdin_default as default
};
//# sourceMappingURL=http://localhost:3001/build/routes/sign-up-TS5WHRTR.js.map
