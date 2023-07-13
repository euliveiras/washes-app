import {
  GenIcon,
  MdDensityMedium,
  MdOutlineHome,
  MdOutlineNotificationsNone,
  MdOutlineSearch
} from "http://localhost:3001/build/_shared/chunk-QGLAYPUA.js";
import {
  Link,
  useLoaderData
} from "http://localhost:3001/build/_shared/chunk-ANXL52AQ.js";
import {
  Avatar,
  Button,
  Drawer,
  DrawerContent,
  Grid,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "http://localhost:3001/build/_shared/chunk-H7L7MQMR.js";
import "http://localhost:3001/build/_shared/chunk-DC5KBJVF.js";
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

// browser-route-module:routes/_auth.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime2 = __toESM(require_jsx_runtime());

// app/components/header.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime = __toESM(require_jsx_runtime());

// node_modules/react-icons/lu/index.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function LuPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "line", "attr": { "x1": "12", "x2": "12", "y1": "5", "y2": "19" } }, { "tag": "line", "attr": { "x1": "5", "x2": "19", "y1": "12", "y2": "12" } }] })(props);
}

// app/components/header.tsx
var import_react3 = __toESM(require_react());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/header.tsx"
  );
  import.meta.hot.lastModified = "1689207385877.437";
}
function Header({
  label
}) {
  _s();
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const btnRef = (0, import_react3.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, {
    outline: "1px solid pink",
    maxH: "120px",
    inlineSize: "100%",
    gridAutoFlow: "column",
    gridAutoRows: "min-content",
    paddingInline: 2,
    paddingBlock: 1,
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HStack, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HStack, {
        spacing: 1,
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
          variant: "ghost",
          "aria-label": "go to home",
          fontSize: "32px",
          isRound: true,
          icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MdOutlineHome, {}),
          as: Link,
          to: "/home"
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          fontWeight: "bold",
          fontSize: "md",
          children: label
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputGroup, {
        display: ["none", "block"],
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputRightElement, {
          fontSize: 26,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MdOutlineSearch, {})
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
          type: "search",
          name: "query"
        })]
      })]
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HStack, {
      justifySelf: "flex-end",
      spacing: 0,
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
        variant: "ghost",
        colorScheme: "blackAlpha",
        "aria-label": "open notifications",
        fontSize: "26px",
        isRound: true,
        icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MdOutlineNotificationsNone, {})
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        marginInline: 1,
        variant: "solid",
        colorScheme: "blue",
        borderRadius: "full",
        blockSize: 10,
        inlineSize: [10, "auto"],
        sx: {
          span: {
            marginInlineEnd: ["0"]
          }
        },
        leftIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuPlus, {
          size: "1.25em"
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          display: ["none", "block"],
          children: "Nova lavagem"
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HStack, {
        display: ["none", "none", "block"],
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
          size: "sm",
          name: "Natan"
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          children: "Natan"
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
        display: ["flex", "flex", "none"],
        variant: "ghost",
        "aria-label": "open side menu",
        fontSize: "24px",
        icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MdDensityMedium, {}),
        onClick: onOpen,
        ref: btnRef
      })]
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer, {
      isOpen,
      placement: "right",
      onClose,
      finalFocusRef: btnRef,
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DrawerContent, {
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalCloseButton, {
          top: 4
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ModalHeader, {
          as: HStack,
          inlineSize: "min-content",
          paddingBlock: 2,
          paddingInline: 4,
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
            size: "md",
            name: "Natan"
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            children: "Natan"
          })]
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalBody, {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
            placeholder: "Type here..."
          })
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ModalFooter, {
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            variant: "outline",
            mr: 3,
            onClick: onClose,
            children: "Cancel"
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            colorScheme: "blue",
            children: "Save"
          })]
        })]
      })]
    })]
  });
}
_s(Header, "O6IopkzzssCTT7bqNVIT0GeQ5us=", false, function() {
  return [useDisclosure];
});
_c = Header;
var _c;
$RefreshReg$(_c, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// browser-route-module:routes/_auth.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth.tsx"
  );
}
function stdin_default() {
  const { path } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Header, { label: path ?? "/" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Outlet, {})
  ] });
}
export {
  stdin_default as default
};
//# sourceMappingURL=http://localhost:3001/build/routes/_auth-VWTLETQA.js.map
