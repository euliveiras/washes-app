import {
  VehicleContent,
  WashesContent,
  useStepper
} from "http://localhost:3001/build/_shared/chunk-ZMLXUN7N.js";
import "http://localhost:3001/build/_shared/chunk-EOXYKIW2.js";
import {
  GenIcon,
  MdDensityMedium,
  MdOutlineHome,
  MdOutlineNotificationsNone,
  MdOutlineSearch
} from "http://localhost:3001/build/_shared/chunk-DXSXC535.js";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerContent,
  Grid,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "http://localhost:3001/build/_shared/chunk-WSTLIJHY.js";
import "http://localhost:3001/build/_shared/chunk-DC5KBJVF.js";
import "http://localhost:3001/build/_shared/chunk-PKOMFC7F.js";
import "http://localhost:3001/build/_shared/chunk-IJA4GF5B.js";
import {
  Link,
  useLoaderData
} from "http://localhost:3001/build/_shared/chunk-ANXL52AQ.js";
import {
  Outlet
} from "http://localhost:3001/build/_shared/chunk-6SJDMTBK.js";
import {
  require_jsx_runtime
} from "http://localhost:3001/build/_shared/chunk-OKS54H4S.js";
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
var import_jsx_runtime6 = __toESM(require_jsx_runtime());

// app/components/header.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime5 = __toESM(require_jsx_runtime());

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
var import_react10 = __toESM(require_react());

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
  import.meta.hot.lastModified = "1689301431000";
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

// node_modules/react-icons/rx/index.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function RxChevronDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 15 15", "fill": "none" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "clipRule": "evenodd", "d": "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z", "fill": "currentColor" } }] })(props);
}

// app/components/Avatar.tsx
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
  import.meta.hot.lastModified = "1689458964000";
}
function Avatar2({
  containerProps,
  avatarProps,
  user
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(HStack, {
    paddingInline: 2,
    display: ["none", "none", "flex"],
    ...containerProps,
    children: [user && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Menu, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MenuButton, {
        as: Button,
        variant: "ghost",
        rightIcon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RxChevronDown, {}),
        children: user.username
      }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(MenuList, {
        children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MenuItem, {
          children: "Configura\xE7\xF5es"
        }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MenuItem, {
          as: Text,
          color: "red.400",
          children: "Sair"
        })]
      })]
    }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Avatar, {
      size: "md",
      name: "Natan",
      ...avatarProps
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
  import.meta.hot.lastModified = "1689458931000";
}
function Drawer2({
  isOpen,
  onClose,
  finalFocusRef,
  user
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
          },
          user
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

// app/components/NewWashModal/index.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react7 = __toESM(require_react());

// app/components/NewWashModal/Modal.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var import_react5 = __toESM(require_react());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/NewWashModal/Modal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWashModal/Modal.tsx"
  );
  import.meta.hot.lastModified = "1691623566000";
}
function Modal2({
  isOpen,
  onClose,
  finalFocusRef
}) {
  var _a, _b, _c6, _d, _e;
  _s();
  const [errors, setErrors] = (0, import_react5.useState)({
    vehicle: {
      errors: ["Required"],
      label: "vehicle"
    },
    washes: {
      errors: ["Required"],
      label: "washes"
    },
    summary: {
      errors: ["Required"],
      label: "summary"
    }
  });
  const [vehicleData, setVehicleData] = (0, import_react5.useState)({});
  const {
    activeStep,
    goToNext,
    goToPrevious,
    Stepper,
    steps,
    setActiveStep
  } = useStepper();
  function setVehicle(v) {
    const {
      licensePlate,
      type
    } = v;
    if (!licensePlate || !type) {
      setVehicleErrors("Required", "ADD");
    } else {
      setVehicleErrors("Required", "REMOVE");
    }
    setVehicleData(v);
  }
  function onStepperFinish() {
    var _a2;
    setActiveStep(0);
    onClose();
    (_a2 = finalFocusRef.current) == null ? void 0 : _a2.focus();
  }
  function setVehicleErrors(e, action) {
    if (action === "ADD") {
      setErrors((s) => {
        var _a2, _b2, _c7, _d2;
        const error = (_b2 = (_a2 = s.vehicle) == null ? void 0 : _a2.errors) == null ? void 0 : _b2.find((str) => str === e);
        if (error)
          return s;
        const vehicle = s.vehicle;
        (_c7 = vehicle == null ? void 0 : vehicle.errors) == null ? void 0 : _c7.push(e);
        return {
          ...s,
          vehicle: {
            label: "vehicle",
            errors: (_d2 = vehicle == null ? void 0 : vehicle.errors) != null ? _d2 : [e]
          }
        };
      });
    } else if (action === "REMOVE") {
      setErrors((s) => {
        var _a2, _b2, _c7, _d2;
        const error = (_b2 = (_a2 = s.vehicle) == null ? void 0 : _a2.errors) == null ? void 0 : _b2.find((str) => str === e);
        if (!error)
          return s;
        const {
          vehicle
        } = s;
        const errors2 = (_d2 = (_c7 = vehicle == null ? void 0 : vehicle.errors) == null ? void 0 : _c7.filter((str) => str !== e)) != null ? _d2 : [];
        return {
          ...s,
          vehicle: {
            label: "vehicle",
            errors: errors2
          }
        };
      });
    }
    return;
  }
  const canProceed = ((_b = (_a = errors[steps[activeStep].label]) == null ? void 0 : _a.errors) == null ? void 0 : _b.length) > 0 ? false : true;
  console.log("errors:", errors);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Modal, {
      isCentered: true,
      size: ["xs", "md", "2xl", "3xl"],
      isOpen,
      onClose,
      children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ModalOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(ModalContent, {
        blockSize: "90%",
        children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ModalHeader, {
          alignSelf: "center",
          children: steps[activeStep].modalTitle
        }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ModalCloseButton, {
          top: 4
        }), /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(ModalBody, {
          display: "grid",
          gridAutoFlow: "column",
          gap: "1.125em",
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: "100%",
          marginInline: [0, 0, 4],
          paddingBlockStart: [4, 4, 8],
          children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Stepper, {
            activeStep,
            steps
          }), /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Box, {
            marginInline: [0, 0, 4],
            children: [steps[activeStep].label === "vehicle" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(VehicleContent, {
              vehicleData,
              setVehicleFn: setVehicle,
              setVehicleErrors
            }), steps[activeStep].label === "washes" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(WashesContent, {
              licensePlate: (_c6 = vehicleData.licensePlate) != null ? _c6 : void 0
            })]
          })]
        }), /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(ModalFooter, {
          children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
            isDisabled: !steps[activeStep].isNullable || steps[activeStep].label === ((_e = errors[(_d = steps[activeStep]) == null ? void 0 : _d.label]) == null ? void 0 : _e.label),
            colorScheme: "purple",
            variant: "ghost",
            mr: 3,
            size: "sm",
            onClick: goToNext,
            children: "pular"
          }, "jump-btn"), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
            colorScheme: "gray",
            variant: "ghost",
            mr: 3,
            onClick: goToPrevious,
            marginInlineEnd: "0",
            children: "voltar"
          }, "back-btn"), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Divider, {
            orientation: "vertical",
            inlineSize: "8px",
            borderColor: "gray.400"
          }), activeStep === steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
            variant: "ghost",
            colorScheme: "blue",
            onClick: onStepperFinish,
            children: "finalizar"
          }, "finish-btn") : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
            isDisabled: steps[activeStep].isNullable || !canProceed,
            variant: "ghost",
            colorScheme: "blue",
            onClick: goToNext,
            children: "pr\xF3ximo"
          }, "next-btn")]
        })]
      })]
    })
  });
}
_s(Modal2, "WsrXzjK3bUnWIl21irfroXjShag=", false, function() {
  return [useStepper];
});
_c4 = Modal2;
var _c4;
$RefreshReg$(_c4, "Modal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NewWashModal/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWashModal/index.ts"
  );
  import.meta.hot.lastModified = "1689460988000";
}
function useNewWashModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = (0, import_react7.useRef)(null);
  return {
    isNewWashModalOpen: isOpen,
    onNewWashModalOpen: onOpen,
    onNewWashModalClose: onClose,
    newWashModalRef: ref,
    NewWashModal: Modal2
  };
}

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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/header.tsx"
  );
  import.meta.hot.lastModified = "1692135929177.0476";
}
function Header({
  label,
  user
}) {
  _s2();
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const {
    isNewWashModalOpen,
    NewWashModal,
    onNewWashModalClose,
    newWashModalRef,
    onNewWashModalOpen
  } = useNewWashModal();
  const btnRef = (0, import_react10.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Grid, {
    maxH: "120px",
    inlineSize: "100%",
    gridAutoFlow: "column",
    gridAutoRows: "min-content",
    paddingInline: 2,
    paddingBlock: 4,
    children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(HStack, {
      spacing: [6],
      children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(HStack, {
        spacing: 1,
        children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsx)(IconButton, {
          variant: "ghost",
          "aria-label": "go to home",
          fontSize: "32px",
          isRound: true,
          icon: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(MdOutlineHome, {}),
          as: Link,
          to: "/home"
        }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Text, {
          fontWeight: "bold",
          fontSize: "md",
          children: label
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SearchInput, {})]
    }), /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(HStack, {
      justifySelf: "flex-end",
      spacing: 1,
      children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, {
        as: Link,
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
        leftIcon: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(LuPlus, {
          size: "1.25em"
        }),
        to: "/new-wash",
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Text, {
          display: ["none", "block"],
          children: "Nova lavagem"
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(IconButton, {
        variant: "ghost",
        colorScheme: "blackAlpha",
        "aria-label": "open notifications",
        fontSize: "26px",
        isRound: true,
        icon: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(MdOutlineNotificationsNone, {})
      }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Divider, {
        borderLeftWidth: 2,
        orientation: "vertical"
      }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Avatar2, {
        user
      }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(IconButton, {
        display: ["flex", "flex", "none"],
        variant: "ghost",
        "aria-label": "open side menu",
        fontSize: "24px",
        icon: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(MdDensityMedium, {}),
        onClick: onOpen,
        ref: btnRef
      }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Drawer2, {
        finalFocusRef: btnRef,
        isOpen,
        onClose,
        user
      })]
    })]
  });
}
_s2(Header, "HOSdJNnR9/O/an+AtwU71OkbW9M=", false, function() {
  return [useDisclosure, useNewWashModal];
});
_c5 = Header;
var _c5;
$RefreshReg$(_c5, "Header");
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Grid, { gridTemplateRows: "auto 1fr", blockSize: "100vh", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Header, { label: path ?? "/", user }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Outlet, {})
  ] });
}
export {
  stdin_default as default,
  headers
};
//# sourceMappingURL=http://localhost:3001/build/routes/_auth-ZHDK6DRU.js.map
