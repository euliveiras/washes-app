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
  Icon,
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
} from "http://localhost:3001/build/_shared/chunk-KVWZXKRC.js";
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
var import_jsx_runtime5 = __toESM(require_jsx_runtime());

// app/components/header.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime4 = __toESM(require_jsx_runtime());

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
var import_react6 = __toESM(require_react());

// app/components/SearchInput.tsx
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
    window.$RefreshRuntime$.register(type, '"app/components/SearchInput.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/SearchInput.tsx"
  );
  import.meta.hot.lastModified = "1689301431545.1545";
}
function SearchInput() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputGroup, {
    display: ["none", "none", "block"],
    role: "group",
    sx: {
      "input:focus ~ div": {
        svg: {
          color: "blackAlpha.900"
        }
      }
    },
    maxInlineSize: 96,
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
      placeholder: "Procure qualquer coisa",
      borderRadius: "full",
      focusBorderColor: "blackAlpha.900",
      type: "search",
      name: "query"
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputRightElement, {
      pointerEvents: "none",
      fontSize: 26,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
        color: "gray.200",
        as: MdOutlineSearch,
        transitionDuration: "200ms",
        transitionProperty: "all",
        _groupHover: {
          color: "gray.300"
        }
      })
    })]
  });
}
_c = SearchInput;
var _c;
$RefreshReg$(_c, "SearchInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Drawer.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime3 = __toESM(require_jsx_runtime());

// app/components/Avatar.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Avatar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Avatar.tsx"
  );
  import.meta.hot.lastModified = "1689285420154.6814";
}
function Avatar2({
  containerProps,
  textProps,
  avatarProps,
  user
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(HStack, {
    paddingInline: 2,
    display: ["none", "none", "flex"],
    ...containerProps,
    children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Avatar, {
      size: "md",
      name: "Natan",
      ...avatarProps
    }), user && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Text, {
      fontWeight: "bold",
      ...textProps,
      children: user.username
    })]
  });
}
_c2 = Avatar2;
var _c2;
$RefreshReg$(_c2, "Avatar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Drawer.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Drawer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Drawer.tsx"
  );
  import.meta.hot.lastModified = "1689277455263.503";
}
function Drawer2({
  isOpen,
  onClose,
  finalFocusRef
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Drawer, {
    isOpen,
    placement: "right",
    onClose,
    finalFocusRef,
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ModalOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(DrawerContent, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ModalCloseButton, {
        top: 4
      }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ModalHeader, {
        as: HStack,
        inlineSize: "min-content",
        paddingBlock: 2,
        paddingInline: 4,
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Avatar2, {
          containerProps: {
            display: "flex"
          }
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ModalBody, {}), /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(ModalFooter, {
        children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, {
          variant: "outline",
          mr: 3,
          onClick: onClose,
          children: "Cancel"
        }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, {
          colorScheme: "blue",
          children: "Save"
        })]
      })]
    })]
  });
}
_c3 = Drawer2;
var _c3;
$RefreshReg$(_c3, "Drawer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/header.tsx
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
  import.meta.hot.lastModified = "1689285449055.0781";
}
function Header({
  label,
  user
}) {
  _s();
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const btnRef = (0, import_react6.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Grid, {
    maxH: "120px",
    inlineSize: "100%",
    gridAutoFlow: "column",
    gridAutoRows: "min-content",
    paddingInline: 2,
    paddingBlock: 4,
    children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(HStack, {
      spacing: [6],
      children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(HStack, {
        spacing: 1,
        children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(IconButton, {
          variant: "ghost",
          "aria-label": "go to home",
          fontSize: "32px",
          isRound: true,
          icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MdOutlineHome, {}),
          as: Link,
          to: "/home"
        }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
          fontWeight: "bold",
          fontSize: "md",
          children: label
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SearchInput, {})]
    }), /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(HStack, {
      justifySelf: "flex-end",
      spacing: 1,
      children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(IconButton, {
        variant: "ghost",
        colorScheme: "blackAlpha",
        "aria-label": "open notifications",
        fontSize: "26px",
        isRound: true,
        icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MdOutlineNotificationsNone, {})
      }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
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
        leftIcon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(LuPlus, {
          size: "1.25em"
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
          display: ["none", "block"],
          children: "Nova lavagem"
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Avatar2, {
        user
      }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(IconButton, {
        display: ["flex", "flex", "none"],
        variant: "ghost",
        "aria-label": "open side menu",
        fontSize: "24px",
        icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MdDensityMedium, {}),
        onClick: onOpen,
        ref: btnRef
      }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Drawer2, {
        finalFocusRef: btnRef,
        isOpen,
        onClose
      })]
    })]
  });
}
_s(Header, "O6IopkzzssCTT7bqNVIT0GeQ5us=", false, function() {
  return [useDisclosure];
});
_c4 = Header;
var _c4;
$RefreshReg$(_c4, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// browser-route-module:routes/_auth.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth.tsx"
  );
}
var headers = ({ loaderHeaders }) => {
  const maxAge = loaderHeaders.get("Cache-control") ?? `max-age=${60 * 60}`;
  return {
    "Cache-Control": maxAge
  };
};
function stdin_default() {
  const { path, user } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Header, { label: path ?? "/", user }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Outlet, {})
  ] });
}
export {
  stdin_default as default,
  headers
};
//# sourceMappingURL=http://localhost:3001/build/routes/_auth-TLT7DRD2.js.map
