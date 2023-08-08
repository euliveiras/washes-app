import {
  GenIcon,
  MdLockOutline,
  MdOutlineEmail
} from "http://localhost:3001/build/_shared/chunk-DXSXC535.js";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  VStack
} from "http://localhost:3001/build/_shared/chunk-DLDEEFXR.js";
import "http://localhost:3001/build/_shared/chunk-DC5KBJVF.js";
import "http://localhost:3001/build/_shared/chunk-PKOMFC7F.js";
import {
  useActionData
} from "http://localhost:3001/build/_shared/chunk-ANXL52AQ.js";
import {
  Form,
  useNavigation
} from "http://localhost:3001/build/_shared/chunk-6SJDMTBK.js";
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

// browser-route-module:routes/sign-in.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime2 = __toESM(require_jsx_runtime());

// node_modules/react-icons/bs/index.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function BsMoonStars(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" } }, { "tag": "path", "attr": { "d": "M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" } }] })(props);
}
function BsPerson(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" } }] })(props);
}

// app/components/footer.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime = __toESM(require_jsx_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/footer.tsx"
  );
  import.meta.hot.lastModified = "1689031804038.9783";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Center, {
    textAlign: "center",
    paddingBlock: 0.5,
    gap: 2,
    bg: "blue.500",
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
      fontSize: "xs",
      color: "white",
      children: ["Feito por", " ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
        target: "_blank",
        href: "https://github.com/euliveiras",
        children: "@euliveiras"
      })]
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BsMoonStars, {
      size: "12px",
      color: "white"
    })]
  });
}
_c = Footer;
var _c;
$RefreshReg$(_c, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// browser-route-module:routes/sign-in.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/sign-in.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/sign-in.tsx"
  );
}
function CustomInputGroup({
  icon,
  name,
  type,
  isError,
  isIdle,
  isSubmitting
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(InputGroup, {
    sx: {
      "--clr": isError ? "#E53E3E" : isSubmitting ? "#48BB78" : isIdle ? "#000000" : "#3182ce"
    },
    children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(InputRightElement, {
      fontSize: 26,
      children: icon
    }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Input, {
      _focusVisible: {
        borderColor: "var(--clr)",
        boxShadow: "0 0 0 1px var(--clr)"
      },
      type,
      border: "2px",
      borderColor: "var(--clr)",
      borderRadius: "xl",
      name
    })]
  });
}
_c2 = CustomInputGroup;
function stdin_default() {
  _s();
  const errors = useActionData();
  const navigation = useNavigation();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Box, {
    h: "100dvh",
    w: "100%",
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Grid, {
      h: "100%",
      w: "100%",
      templateRows: "1fr auto",
      children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(VStack, {
        paddingBlockStart: [32, 20],
        children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(HStack, {
          spacing: "4px",
          children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BsPerson, {
            size: "20px",
            color: "#000000",
            strokeWidth: "0.8px"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Text, {
            fontWeight: "bold",
            fontSize: "md",
            children: "/ login"
          })]
        }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(VStack, {
          as: Form,
          spacing: 6,
          border: "1px",
          borderColor: "blackAlpha.100",
          borderRadius: "sm",
          boxShadow: "dark-lg",
          minBlockSize: 96,
          maxInlineSize: [72, "none"],
          padding: 8,
          method: "POST",
          children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(FormControl, {
            isRequired: true,
            children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormLabel, {
              fontSize: "sm",
              children: "email"
            }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CustomInputGroup, {
              icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MdOutlineEmail, {
                color: "var(--clr)"
              }),
              name: "email",
              type: "email",
              isError: errors?.error,
              isSubmitting: navigation.state === "submitting",
              isIdle: navigation.state === "idle"
            })]
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(FormControl, {
            isRequired: true,
            children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormLabel, {
              fontSize: "sm",
              children: "password"
            }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CustomInputGroup, {
              icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MdLockOutline, {
                color: "var(--clr)"
              }),
              type: "password",
              name: "password",
              isError: errors?.error,
              isSubmitting: navigation.state === "submitting",
              isIdle: navigation.state === "idle"
            })]
          }), errors?.error && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Text, {
            color: "red.500",
            children: errors?.error
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, {
            marginBlockStart: 4,
            colorScheme: "blue",
            variant: "solid",
            paddingInline: 12,
            borderRadius: "full",
            size: "md",
            type: "submit",
            children: "Entrar"
          })]
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Footer, {})]
    })
  });
}
_s(stdin_default, "I53x0ogqmrPCtv95gYQQL5uQUYc=", false, function() {
  return [useActionData, useNavigation];
});
var _c2;
$RefreshReg$(_c2, "CustomInputGroup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  stdin_default as default
};
//# sourceMappingURL=http://localhost:3001/build/routes/sign-in-RY6DPFYR.js.map
