import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  GenIcon,
  MdLockOutline,
  MdOutlineEmail
} from "/build/_shared/chunk-XO5BRP32.js";
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
} from "/build/_shared/chunk-FQ5UBCHZ.js";
import {
  useActionData
} from "/build/_shared/chunk-RPYEFABZ.js";
import "/build/_shared/chunk-6Y4MOXXW.js";
import {
  Form,
  require_jsx_dev_runtime,
  useNavigation
} from "/build/_shared/chunk-EDULEWIV.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/react-icons/bs/index.esm.js
function BsMoonStars(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" } }, { "tag": "path", "attr": { "d": "M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" } }] })(props);
}
function BsPerson(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" } }] })(props);
}

// app/routes/sign-in.tsx
var import_node = __toESM(require_node());

// app/components/Footer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Center, { textAlign: "center", paddingBlock: 0.5, gap: 2, bg: "blue.500", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { fontSize: "xs", color: "white", children: [
      "Feito por",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { target: "_blank", href: "https://github.com/euliveiras", children: "@euliveiras" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BsMoonStars, { size: "12px", color: "white" }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/sign-in.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function CustomInputGroup({
  icon,
  name,
  type,
  isError,
  isIdle,
  isSubmitting
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    InputGroup,
    {
      sx: {
        "--clr": isError ? "#E53E3E" : isSubmitting ? "#48BB78" : isIdle ? "#000000" : "#3182ce"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InputRightElement, { fontSize: 26, children: icon }, void 0, false, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 108,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Input,
          {
            _focusVisible: {
              borderColor: "var(--clr)",
              boxShadow: "0 0 0 1px var(--clr)"
            },
            type,
            border: "2px",
            borderColor: "var(--clr)",
            borderRadius: "xl",
            name
          },
          void 0,
          false,
          {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 109,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 97,
      columnNumber: 5
    },
    this
  );
}
function sign_in_default() {
  const errors = useActionData();
  const navigation = useNavigation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { h: "100vh", w: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Grid, { h: "100%", w: "100%", templateRows: "1fr auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VStack, { paddingBlockStart: [32, 20], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HStack, { spacing: "4px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BsPerson, { size: "20px", color: "#000000", strokeWidth: "0.8px" }, void 0, false, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { fontWeight: "bold", fontSize: "md", children: "/ login" }, void 0, false, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        VStack,
        {
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
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { isRequired: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormLabel, { fontSize: "sm", children: "email" }, void 0, false, {
                fileName: "app/routes/sign-in.tsx",
                lineNumber: 151,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                CustomInputGroup,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MdOutlineEmail, { color: "var(--clr)" }, void 0, false, {
                    fileName: "app/routes/sign-in.tsx",
                    lineNumber: 153,
                    columnNumber: 23
                  }, this),
                  name: "email",
                  type: "email",
                  isError: errors == null ? void 0 : errors.error,
                  isSubmitting: navigation.state === "submitting",
                  isIdle: navigation.state === "idle"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/sign-in.tsx",
                  lineNumber: 152,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 150,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { isRequired: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormLabel, { fontSize: "sm", children: "password" }, void 0, false, {
                fileName: "app/routes/sign-in.tsx",
                lineNumber: 162,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                CustomInputGroup,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MdLockOutline, { color: "var(--clr)" }, void 0, false, {
                    fileName: "app/routes/sign-in.tsx",
                    lineNumber: 164,
                    columnNumber: 23
                  }, this),
                  type: "password",
                  name: "password",
                  isError: errors == null ? void 0 : errors.error,
                  isSubmitting: navigation.state === "submitting",
                  isIdle: navigation.state === "idle"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/sign-in.tsx",
                  lineNumber: 163,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 161,
              columnNumber: 13
            }, this),
            (errors == null ? void 0 : errors.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { color: "red.500", children: errors == null ? void 0 : errors.error }, void 0, false, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 172,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              Button,
              {
                marginBlockStart: 4,
                colorScheme: "blue",
                variant: "solid",
                paddingInline: 12,
                borderRadius: "full",
                size: "md",
                type: "submit",
                children: "Entrar"
              },
              void 0,
              false,
              {
                fileName: "app/routes/sign-in.tsx",
                lineNumber: 173,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 138,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 186,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 130,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 129,
    columnNumber: 5
  }, this);
}
export {
  sign_in_default as default
};
//# sourceMappingURL=/build/routes/sign-in-PZT5WAYX.js.map
