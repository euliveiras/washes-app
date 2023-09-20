import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
  useActionData
} from "/build/_shared/chunk-RPYEFABZ.js";
import {
  Form,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EDULEWIV.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/sign-up.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function sign_up_default() {
  const data = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Sign up" }, void 0, false, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    data ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: { color: "red" }, children: data.error }, void 0, false, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 42,
      columnNumber: 21
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
        "username",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "username" }, void 0, false, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 46,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
        "email",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "email" }, void 0, false, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 50,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
        "password",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "password" }, void 0, false, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Logar" }, void 0, false, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/sign-in", children: "logar" }, void 0, false, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/sign-up.tsx",
    lineNumber: 40,
    columnNumber: 9
  }, this);
}
export {
  sign_up_default as default
};
//# sourceMappingURL=/build/routes/sign-up-NKVPYVAI.js.map
