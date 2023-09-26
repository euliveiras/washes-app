import {
  LuPlus
} from "/build/_shared/chunk-GY2OSEAB.js";
import {
  GenIcon,
  MdDensityMedium,
  MdOutlineNotificationsNone,
  MdOutlineSearch
} from "/build/_shared/chunk-XO5BRP32.js";
import {
  require_edge
} from "/build/_shared/chunk-J5LZUC2L.js";
import {
  Avatar,
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
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "/build/_shared/chunk-FQ5UBCHZ.js";
import {
  Link,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-RPYEFABZ.js";
import "/build/_shared/chunk-6Y4MOXXW.js";
import {
  Outlet,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EDULEWIV.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_auth.tsx
var import_remix = __toESM(require_edge());

// node_modules/react-icons/bi/index.esm.js
function BiHomeAlt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z" } }] })(props);
}

// app/components/Header.tsx
var import_react7 = __toESM(require_react());

// app/components/SearchInput.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SearchInput({ inputGroupProps, inputProps }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    InputGroup,
    {
      display: ["none", "none", "block"],
      role: "group",
      sx: { "input:focus ~ div": { svg: { color: "blackAlpha.900" } } },
      maxInlineSize: 96,
      ...inputGroupProps,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Input,
          {
            placeholder: "Procure qualquer coisa",
            borderRadius: "full",
            focusBorderColor: "blackAlpha.900",
            type: "search",
            name: "query",
            ...inputProps
          },
          void 0,
          false,
          {
            fileName: "app/components/SearchInput.tsx",
            lineNumber: 19,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputRightElement, { pointerEvents: "none", fontSize: 26, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Icon,
          {
            color: "gray.200",
            as: MdOutlineSearch,
            transitionDuration: "200ms",
            transitionProperty: "all",
            _groupHover: { color: "gray.300" }
          },
          void 0,
          false,
          {
            fileName: "app/components/SearchInput.tsx",
            lineNumber: 28,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/SearchInput.tsx",
          lineNumber: 27,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/SearchInput.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// node_modules/react-icons/rx/index.esm.js
function RxChevronDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 15 15", "fill": "none" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "clipRule": "evenodd", "d": "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z", "fill": "currentColor" } }] })(props);
}

// app/components/Avatar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Avatar2({ containerProps, avatarProps, user }) {
  const { submit } = useFetcher();
  function signOut() {
    submit({}, { action: "/session-sign-out", method: "POST" });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    HStack,
    {
      paddingInline: 2,
      display: ["none", "none", "flex"],
      ...containerProps,
      children: [
        user && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Menu, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MenuButton, { as: Button, variant: "ghost", rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RxChevronDown, {}, void 0, false, {
            fileName: "app/components/Avatar.tsx",
            lineNumber: 38,
            columnNumber: 62
          }, this), children: user.username }, void 0, false, {
            fileName: "app/components/Avatar.tsx",
            lineNumber: 38,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MenuList, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MenuItem, { children: "Configura\xE7\xF5es" }, void 0, false, {
              fileName: "app/components/Avatar.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MenuItem, { as: Text, color: "red.400", onClick: signOut, children: "Sair" }, void 0, false, {
              fileName: "app/components/Avatar.tsx",
              lineNumber: 43,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Avatar.tsx",
            lineNumber: 41,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Avatar.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Avatar, { size: "md", name: "Natan", ...avatarProps }, void 0, false, {
          fileName: "app/components/Avatar.tsx",
          lineNumber: 49,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Avatar.tsx",
      lineNumber: 31,
      columnNumber: 5
    },
    this
  );
}

// app/components/Drawer.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Drawer2({ isOpen, onClose, finalFocusRef, user }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    Drawer,
    {
      isOpen,
      placement: "right",
      onClose,
      finalFocusRef,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ModalOverlay, {}, void 0, false, {
          fileName: "app/components/Drawer.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DrawerContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ModalCloseButton, { top: 4 }, void 0, false, {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            ModalHeader,
            {
              as: HStack,
              inlineSize: "min-content",
              paddingBlock: 2,
              paddingInline: 4,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                Avatar2,
                {
                  containerProps: {
                    display: "flex"
                  },
                  user
                },
                void 0,
                false,
                {
                  fileName: "app/components/Drawer.tsx",
                  lineNumber: 42,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/Drawer.tsx",
              lineNumber: 36,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ModalBody, {}, void 0, false, {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ModalFooter, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { variant: "outline", mr: 3, onClick: onClose, children: "Cancel" }, void 0, false, {
              fileName: "app/components/Drawer.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { colorScheme: "blue", children: "Save" }, void 0, false, {
              fileName: "app/components/Drawer.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Drawer.tsx",
          lineNumber: 34,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Drawer.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}

// app/components/Header.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function Header({ label, user }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = (0, import_react7.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    Grid,
    {
      maxH: "120px",
      inlineSize: "100%",
      gridAutoFlow: "column",
      gridAutoRows: "min-content",
      gridAutoColumns: "1fr",
      paddingBlock: 4,
      paddingInline: 1,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HStack, { spacing: [6], children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HStack, { spacing: 1, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              IconButton,
              {
                variant: "ghost",
                "aria-label": "go to home",
                fontSize: "32px",
                isRound: true,
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BiHomeAlt, { size: 30 }, void 0, false, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 46,
                  columnNumber: 19
                }, this),
                as: Link,
                to: "/home"
              },
              void 0,
              false,
              {
                fileName: "app/components/Header.tsx",
                lineNumber: 41,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { letterSpacing: "wider", fontWeight: "bold", fontSize: "md", children: label }, void 0, false, {
              fileName: "app/components/Header.tsx",
              lineNumber: 50,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Header.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SearchInput, { inputProps: { isDisabled: true } }, void 0, false, {
            fileName: "app/components/Header.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Header.tsx",
          lineNumber: 39,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HStack, { justifySelf: "flex-end", spacing: 1, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            Button,
            {
              as: Link,
              marginInline: 1,
              variant: "solid",
              colorScheme: "blue",
              borderRadius: "full",
              blockSize: 10,
              inlineSize: [10, "auto"],
              sx: { span: { marginInlineEnd: ["0"] } },
              leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LuPlus, { size: "1.25em" }, void 0, false, {
                fileName: "app/components/Header.tsx",
                lineNumber: 66,
                columnNumber: 21
              }, this),
              to: "/new-wash",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { display: ["none", "block"], children: "Nova lavagem" }, void 0, false, {
                fileName: "app/components/Header.tsx",
                lineNumber: 71,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 57,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            IconButton,
            {
              variant: "ghost",
              colorScheme: "blackAlpha",
              "aria-label": "open notifications",
              fontSize: "26px",
              isRound: true,
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MdOutlineNotificationsNone, {}, void 0, false, {
                fileName: "app/components/Header.tsx",
                lineNumber: 79,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 73,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Divider, { borderLeftWidth: 2, orientation: "vertical" }, void 0, false, {
            fileName: "app/components/Header.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Avatar2, { user }, void 0, false, {
            fileName: "app/components/Header.tsx",
            lineNumber: 82,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            IconButton,
            {
              display: ["flex", "flex", "none"],
              variant: "ghost",
              "aria-label": "open side menu",
              fontSize: "24px",
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MdDensityMedium, {}, void 0, false, {
                fileName: "app/components/Header.tsx",
                lineNumber: 88,
                columnNumber: 17
              }, this),
              onClick: onOpen,
              ref: btnRef
            },
            void 0,
            false,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 83,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            Drawer2,
            {
              finalFocusRef: btnRef,
              isOpen,
              onClose,
              user
            },
            void 0,
            false,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 92,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/Header.tsx",
          lineNumber: 56,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 30,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_auth.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function auth_default() {
  const { path, user } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    Grid,
    {
      gridTemplateRows: "auto 1fr",
      gridTemplateColumns: "100%",
      blockSize: "100dvh",
      gap: 2,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Header, { label: path != null ? path : "/", user }, void 0, false, {
          fileName: "app/routes/_auth.tsx",
          lineNumber: 57,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/routes/_auth.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 51,
      columnNumber: 5
    },
    this
  );
}
export {
  auth_default as default
};
//# sourceMappingURL=/build/routes/_auth-4AELTAEF.js.map
