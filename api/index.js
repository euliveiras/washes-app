var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  dev: () => dev,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_react3 = require("@remix-run/react");

// app/context.tsx
var import_react = require("react"), ServerStyleContext = (0, import_react.createContext)(null), ClientStyleContext = (0, import_react.createContext)(null);

// app/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache")), defaultCache = createEmotionCache();
function createEmotionCache() {
  return (0, import_cache.default)({ key: "cha" });
}

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, { value: null, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, { value: chunks.styles, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("react"), import_react5 = require("@emotion/react"), import_react6 = require("@chakra-ui/react"), import_react7 = require("@chakra-ui/react"), import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => [{
  charset: "utf-8",
  title: "washes-app",
  viewport: "width=device-width,initial-scale=1"
}], links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  }
], Document = (0, import_react5.withEmotionCache)(
  ({ children }, emotionCache) => {
    let serverStyleData = (0, import_react4.useContext)(ServerStyleContext), clientStyleData = (0, import_react4.useContext)(ClientStyleContext);
    return (0, import_react4.useEffect)(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData == null || clientStyleData.reset();
    }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.Meta, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.Links, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "style",
          {
            "data-emotion": `${key} ${ids.join(" ")}`,
            dangerouslySetInnerHTML: { __html: css }
          },
          key,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 68,
            columnNumber: 13
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this);
  }
), theme = (0, import_react7.extendTheme)({
  styles: {
    global: {
      "html, body": {
        minBlockSize: "100vh",
        width: "100%",
        backgroundColor: "#FFFFFF",
        fontFamily: "Ubuntu, sans-serif"
      }
    }
  }
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.ChakraProvider, { theme, resetCSS: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 103,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 102,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.new-wash._index.tsx
var auth_new_wash_index_exports = {};
__export(auth_new_wash_index_exports, {
  default: () => auth_new_wash_index_default,
  loader: () => loader2
});
var import_react21 = require("@chakra-ui/react"), import_react22 = require("@remix-run/react");

// app/components/NewWash/Stepper/index.ts
var import_md = require("react-icons/md"), import_go = require("react-icons/go"), import_react10 = require("@chakra-ui/react");

// app/components/NewWash/Stepper/Stepper.tsx
var import_react9 = require("@chakra-ui/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Stepper({ steps: steps2, activeStep }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_react9.Stepper,
    {
      index: activeStep,
      orientation: "vertical",
      blockSize: "100%",
      size: "lg",
      children: steps2.map(({ IconIncomplete, IconActive, label }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react9.Step, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react9.StepIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          import_react9.StepStatus,
          {
            complete: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react9.StepIcon, {}, void 0, !1, {
              fileName: "app/components/NewWash/Stepper/Stepper.tsx",
              lineNumber: 30,
              columnNumber: 25
            }, this),
            incomplete: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconIncomplete, { size: 20 }, void 0, !1, {
              fileName: "app/components/NewWash/Stepper/Stepper.tsx",
              lineNumber: 31,
              columnNumber: 27
            }, this),
            active: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconActive, { size: 20 }, void 0, !1, {
              fileName: "app/components/NewWash/Stepper/Stepper.tsx",
              lineNumber: 32,
              columnNumber: 23
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewWash/Stepper/Stepper.tsx",
            lineNumber: 29,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/NewWash/Stepper/Stepper.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react9.Box, { flexShrink: "0", paddingBlockStart: 1, display: ["none", "none", "none", "block"], children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react9.StepTitle, { children: label }, void 0, !1, {
          fileName: "app/components/NewWash/Stepper/Stepper.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/NewWash/Stepper/Stepper.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react9.StepSeparator, {}, void 0, !1, {
          fileName: "app/components/NewWash/Stepper/Stepper.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, index, !0, {
        fileName: "app/components/NewWash/Stepper/Stepper.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this))
    },
    void 0,
    !1,
    {
      fileName: "app/components/NewWash/Stepper/Stepper.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/Stepper/index.ts
var steps = [
  {
    label: "vehicle",
    IconIncomplete: import_md.MdDirectionsCarFilled,
    IconActive: import_md.MdDirectionsCarFilled,
    isNullable: !1,
    modalTitle: "Escolher ve\xEDculo"
  },
  {
    label: "washes",
    IconIncomplete: import_md.MdWaterDrop,
    IconActive: import_md.MdWaterDrop,
    isNullable: !1,
    modalTitle: "Cadastrar lavagens"
  },
  {
    label: "driver",
    IconIncomplete: import_md.MdPerson2,
    IconActive: import_md.MdPerson2,
    isNullable: !0,
    modalTitle: "Escolher motorista"
  },
  {
    label: "organization",
    IconIncomplete: import_go.GoOrganization,
    IconActive: import_go.GoOrganization,
    isNullable: !0,
    modalTitle: "Escolher organiza\xE7\xE3o"
  },
  {
    label: "summary",
    IconIncomplete: import_md.MdCheck,
    IconActive: import_md.MdCheck,
    isNullable: !1,
    modalTitle: "Confirmar op\xE7\xF5es"
  }
];
function useStepper() {
  let { activeStep, goToNext, goToPrevious, setActiveStep } = (0, import_react10.useSteps)({
    index: 1,
    count: steps.length
  });
  return {
    Stepper,
    activeStep,
    goToNext,
    goToPrevious,
    steps,
    setActiveStep
  };
}

// app/components/NewWash/VehicleContent/index.tsx
var import_react11 = require("@chakra-ui/react"), import_react_hook_form = require("react-hook-form");

// app/components/SearchEntity/index.ts
var import_react_router_dom = require("react-router-dom");
function useSearchEntity() {
  return {
    fetcher: (0, import_react_router_dom.useFetcher)()
  };
}

// app/components/NewWash/VehicleContent/index.tsx
var import_react12 = require("react"), import_react13 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), selectOptions = [
  "Extra leve",
  "Leve",
  "Vuc",
  "Toco",
  "Truck",
  "Bitruck",
  "Carreta"
];
function VehicleContent() {
  let [searchParams, setSearchParams] = (0, import_react13.useSearchParams)(), vehicle = JSON.parse(searchParams.get("vehicle") ?? "[]"), { fetcher } = useSearchEntity(), timeoutId = (0, import_react12.useRef)(null), {
    watch,
    setValue,
    formState: { errors }
  } = (0, import_react_hook_form.useForm)({
    defaultValues: {
      create: vehicle == null ? void 0 : vehicle.create,
      licensePlate: vehicle == null ? void 0 : vehicle.licensePlate,
      type: vehicle == null ? void 0 : vehicle.type,
      queried: {
        licensePlate: void 0,
        type: void 0
      }
    }
  }), createVehicleFetcher = (0, import_react13.useFetcher)(), data = fetcher.data, isCreateVehicleTrue = watch("create"), newVehicle = {
    licensePlate: watch("licensePlate"),
    type: watch("type")
  }, queried = watch("queried");
  function deleteVehicleParam() {
    setSearchParams((p) => (p.delete("vehicle"), p));
  }
  function setVehicleParams(params) {
    setSearchParams((p) => {
      let vehicle2 = p.get("vehicle");
      if (!vehicle2)
        p.set("vehicle", JSON.stringify(params));
      else {
        let obj = JSON.parse(vehicle2);
        p.set("vehicle", JSON.stringify({ ...obj, ...params }));
      }
      return p;
    });
  }
  function onNewVehicleFormChange(e) {
    var _a, _b, _c;
    let form = new FormData(e.target.form), create = ((_a = form.get("create")) == null ? void 0 : _a.toString()) === "", licensePlate = ((_b = form.get("licensePlate")) == null ? void 0 : _b.toString()) ?? (newVehicle == null ? void 0 : newVehicle.licensePlate), type = ((_c = form.get("type")) == null ? void 0 : _c.toString()) ?? (newVehicle == null ? void 0 : newVehicle.type);
    if (setValue("licensePlate", licensePlate), setValue("type", type), setValue("create", create), create && licensePlate && type) {
      setVehicleParams({ licensePlate, type, create });
      return;
    }
    if (create && (!licensePlate || !type)) {
      deleteVehicleParam();
      return;
    }
    if (!create && queried.licensePlate && queried.type) {
      setVehicleParams({
        licensePlate: queried.licensePlate,
        type: queried.type
      });
      return;
    }
  }
  function onQueryFormChange(e) {
    var _a;
    let query = ((_a = new FormData(e.target.form).get("query")) == null ? void 0 : _a.toString()) ?? "";
    timeoutId.current && clearTimeout(timeoutId.current), timeoutId.current = setTimeout(() => {
      fetcher.submit({ query }, { action: "/vehicle-search", method: "get" }), setValue("queried", { licensePlate: null, type: null }), deleteVehicleParam();
    }, 1e3);
  }
  function onInputClick(v) {
    setValue("queried.licensePlate", v.licensePlate), setValue("queried.type", v.type), setValue("create", !1), setSearchParams((p) => {
      let vehicle2 = p.get("vehicle");
      if (!vehicle2)
        p.append("vehicle", JSON.stringify(v));
      else {
        let obj = JSON.parse(vehicle2);
        p.set("vehicle", JSON.stringify({ ...obj, ...v }));
      }
      return p;
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    import_react11.Grid,
    {
      gridAutoRows: "min-content",
      paddingBlockEnd: [8],
      gap: 4,
      gridAutoFlow: ["row", "row", "column"],
      placeItems: ["center", "center", "start"],
      placeContent: ["center", "center", "space-between"],
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_react11.Flex,
          {
            flexDir: ["column"],
            position: "relative",
            _after: typeof data < "u" && (data == null ? void 0 : data.length) > 0 ? {
              content: "''",
              display: "block",
              position: "absolute",
              insetInline: 0,
              bottom: 0,
              zIndex: 1,
              pointerEvents: "none",
              backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, 1) 90%)",
              blockSize: 4
            } : {},
            gap: 4,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(fetcher.Form, { onChange: onQueryFormChange, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_react11.Input,
                {
                  name: "query",
                  placeholder: "procurar entidade",
                  _placeholder: { textAlign: "center" },
                  maxInlineSize: "280px",
                  marginInline: "auto",
                  isDisabled: isCreateVehicleTrue,
                  rounded: "full"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/NewWash/VehicleContent/index.tsx",
                  lineNumber: 199,
                  columnNumber: 15
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/NewWash/VehicleContent/index.tsx",
                lineNumber: 198,
                columnNumber: 13
              }, this),
              !isCreateVehicleTrue && data && (data == null ? void 0 : data.length) >= 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_react11.Text,
                  {
                    inlineSize: "fit-content",
                    marginInline: "auto",
                    marginBlock: 4,
                    fontSize: "sm",
                    color: "gray.400",
                    children: (data == null ? void 0 : data.length) === 0 ? "nenhum resultado encontrado :(" : `mostrando ${data == null ? void 0 : data.length} resultados`
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/NewWash/VehicleContent/index.tsx",
                    lineNumber: 211,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.Grid, { gap: 4, maxBlockSize: "240px", overflow: "scroll", children: data == null ? void 0 : data.map((v, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_react11.Flex,
                  {
                    inlineSize: "100%",
                    flexDir: "column",
                    gap: 6,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                        import_react11.FormControl,
                        {
                          as: import_react11.Flex,
                          flexDir: "column",
                          alignItems: "center",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.FormLabel, { children: "Placa" }, void 0, !1, {
                              fileName: "app/components/NewWash/VehicleContent/index.tsx",
                              lineNumber: 236,
                              columnNumber: 27
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                              import_react11.Input,
                              {
                                maxInlineSize: "200px",
                                marginBlockEnd: data.length - 1 === i ? 4 : 0,
                                type: "button",
                                defaultValue: v.licensePlate,
                                borderColor: (queried == null ? void 0 : queried.licensePlate) === v.licensePlate ? "blue.400" : "gray.200",
                                _hover: {
                                  borderColor: (queried == null ? void 0 : queried.licensePlate) === v.licensePlate ? "blue.400" : "gray.300"
                                },
                                focusBorderColor: (queried == null ? void 0 : queried.licensePlate) === v.licensePlate ? "blue.400" : "gray.300",
                                onClick: () => onInputClick(v)
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/components/NewWash/VehicleContent/index.tsx",
                                lineNumber: 237,
                                columnNumber: 27
                              },
                              this
                            )
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "app/components/NewWash/VehicleContent/index.tsx",
                          lineNumber: 231,
                          columnNumber: 25
                        },
                        this
                      ),
                      data.length - 1 !== i && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.Divider, { alignSelf: "center", inlineSize: "80%" }, void 0, !1, {
                        fileName: "app/components/NewWash/VehicleContent/index.tsx",
                        lineNumber: 262,
                        columnNumber: 27
                      }, this)
                    ]
                  },
                  `${v.licensePlate} + ${i}`,
                  !0,
                  {
                    fileName: "app/components/NewWash/VehicleContent/index.tsx",
                    lineNumber: 225,
                    columnNumber: 23
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/components/NewWash/VehicleContent/index.tsx",
                  lineNumber: 222,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/NewWash/VehicleContent/index.tsx",
                lineNumber: 210,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/NewWash/VehicleContent/index.tsx",
              lineNumber: 197,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewWash/VehicleContent/index.tsx",
            lineNumber: 176,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.Box, { position: "relative", padding: 4, inlineSize: "60%", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.Divider, {}, void 0, !1, {
            fileName: "app/components/NewWash/VehicleContent/index.tsx",
            lineNumber: 273,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.AbsoluteCenter, { bg: "white", px: "4", children: "ou" }, void 0, !1, {
            fileName: "app/components/NewWash/VehicleContent/index.tsx",
            lineNumber: 274,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NewWash/VehicleContent/index.tsx",
          lineNumber: 272,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.Grid, { gridAutoRows: "min-content", placeContent: "center", gap: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(createVehicleFetcher.Form, { onChange: onNewVehicleFormChange, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react11.FormControl,
            {
              as: import_react11.Flex,
              blockSize: "min-content",
              gap: 4,
              paddingBlockStart: [0, 0, 1],
              align: "center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.FormLabel, { margin: 0, htmlFor: "vehicle_create", children: "Adicionar novo ve\xEDculo?" }, void 0, !1, {
                  fileName: "app/components/NewWash/VehicleContent/index.tsx",
                  lineNumber: 287,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_react11.Checkbox,
                  {
                    id: "vehicle_create",
                    name: "create",
                    size: "lg",
                    justifySelf: "center",
                    defaultChecked: isCreateVehicleTrue
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/NewWash/VehicleContent/index.tsx",
                    lineNumber: 290,
                    columnNumber: 15
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/NewWash/VehicleContent/index.tsx",
              lineNumber: 280,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.Flex, { flexDir: "column", gap: 6, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_react11.FormControl,
              {
                as: import_react11.Grid,
                gridTemplateRows: "min-content",
                gridAutoFlow: ["row", "row", "column"],
                placeItems: "center",
                marginBlockStart: 8,
                gap: 4,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.Flex, { flexDir: "column", gap: 4, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.FormLabel, { margin: 0, htmlFor: "vehicle_licensePlate", children: "Ve\xEDculo" }, void 0, !1, {
                    fileName: "app/components/NewWash/VehicleContent/index.tsx",
                    lineNumber: 308,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    import_react11.Input,
                    {
                      id: "vehicle_licensePlate",
                      name: "licensePlate",
                      placeholder: "Placa",
                      defaultValue: (newVehicle == null ? void 0 : newVehicle.licensePlate) ?? "",
                      isDisabled: !isCreateVehicleTrue
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/NewWash/VehicleContent/index.tsx",
                      lineNumber: 311,
                      columnNumber: 19
                    },
                    this
                  ),
                  (errors == null ? void 0 : errors.licensePlate) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.Alert, { status: "error", marginBlock: 4, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.AlertIcon, {}, void 0, !1, {
                      fileName: "app/components/NewWash/VehicleContent/index.tsx",
                      lineNumber: 320,
                      columnNumber: 23
                    }, this),
                    errors.licensePlate.message
                  ] }, void 0, !0, {
                    fileName: "app/components/NewWash/VehicleContent/index.tsx",
                    lineNumber: 319,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/NewWash/VehicleContent/index.tsx",
                  lineNumber: 307,
                  columnNumber: 17
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/NewWash/VehicleContent/index.tsx",
                lineNumber: 299,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_react11.Select,
              {
                defaultValue: (newVehicle == null ? void 0 : newVehicle.type) ?? void 0,
                id: "type",
                name: "type",
                placeholder: "Tipo do ve\xEDculo",
                isDisabled: !isCreateVehicleTrue,
                children: selectOptions.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: o == null ? void 0 : o.toString(), children: o }, o, !1, {
                  fileName: "app/components/NewWash/VehicleContent/index.tsx",
                  lineNumber: 335,
                  columnNumber: 21
                }, this))
              },
              void 0,
              !1,
              {
                fileName: "app/components/NewWash/VehicleContent/index.tsx",
                lineNumber: 327,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/NewWash/VehicleContent/index.tsx",
              lineNumber: 326,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/NewWash/VehicleContent/index.tsx",
            lineNumber: 298,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NewWash/VehicleContent/index.tsx",
          lineNumber: 279,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/NewWash/VehicleContent/index.tsx",
          lineNumber: 278,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/NewWash/VehicleContent/index.tsx",
      lineNumber: 168,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/NewWash/VehicleContent/index.tsx",
    lineNumber: 167,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/WashesContent/index.tsx
var import_react20 = require("@chakra-ui/react");

// app/components/LinkHighlighted.tsx
var import_react14 = require("@chakra-ui/react"), import_react_router_dom2 = require("react-router-dom"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function LinkHighlighted({ to, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Link, { as: import_react_router_dom2.Link, to, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react14.Box,
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
    !1,
    {
      fileName: "app/components/LinkHighlighted.tsx",
      lineNumber: 13,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/LinkHighlighted.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/LinkBox/Container.tsx
var import_react15 = require("@chakra-ui/react"), import_react_router_dom3 = require("react-router-dom"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Container({ to, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_react15.Grid,
    {
      minInlineSize: "180px",
      paddingBlock: 4,
      gridTemplateColumns: "80% 20%",
      gridTemplateRows: "1fr",
      as: import_react_router_dom3.Link,
      to,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/LinkBox/Container.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/components/LinkBox/Content.tsx
var import_react16 = require("@chakra-ui/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Content({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react16.Box, { blockSize: "100%", children }, void 0, !1, {
    fileName: "app/components/LinkBox/Content.tsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

// app/components/LinkBox/Icon.tsx
var import_react17 = require("@chakra-ui/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Icon({ icon }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react17.Flex, { blockSize: "100%", justify: "center", align: "center", children: icon }, void 0, !1, {
    fileName: "app/components/LinkBox/Icon.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/LinkBox/Title.tsx
var import_react18 = require("@chakra-ui/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Title({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react18.Text, { color: "gray.500", fontSize: "md", fontWeight: "bold", children }, void 0, !1, {
    fileName: "app/components/LinkBox/Title.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/components/LinkBox/index.ts
var LinkBox = {
  Container,
  Content,
  Icon,
  Title
};

// app/components/WashBox/index.tsx
var import_fa = require("react-icons/fa"), import_react19 = require("@chakra-ui/react");

// src/domain/shared/date-manipulator.ts
var import_date_fns = require("date-fns"), import_locale = require("date-fns/locale");
function wrapper() {
  return {
    isAfter(date, dateToCompare) {
      let x = (0, import_date_fns.parseISO)(date), y = (0, import_date_fns.parseISO)(dateToCompare);
      return (0, import_date_fns.isAfter)(x, y);
    },
    isBefore(date, dateToCompare) {
      let x = this.parseISOStringToDate(date), y = this.parseISOStringToDate(dateToCompare);
      return (0, import_date_fns.isBefore)(x, y);
    },
    parseISOStringToDate(str) {
      if (!str)
        throw new Error("Date string is undefined");
      return (0, import_date_fns.parseISO)(str);
    },
    addMonthsToDate(date, amount) {
      return this.parseDateToString(
        (0, import_date_fns.addMonths)(this.parseISOStringToDate(date), amount)
      );
    },
    parseDateToString(date) {
      return (0, import_date_fns.formatISO)(date);
    },
    addDaysToDate(date, amount) {
      return this.parseDateToString(
        (0, import_date_fns.addDays)(this.parseISOStringToDate(date), amount)
      );
    },
    isSunday(date) {
      return (0, import_date_fns.isSunday)(this.parseISOStringToDate(date));
    },
    isSameDay(x, y) {
      return (0, import_date_fns.isSameDay)(
        this.parseISOStringToDate(x),
        this.parseISOStringToDate(y)
      );
    },
    format(date, format) {
      return typeof date == "string" ? (0, import_date_fns.format)(this.parseISOStringToDate(date), format, {
        locale: import_locale.ptBR
      }) : (0, import_date_fns.format)(date, format);
    }
  };
}
var dateManipulator = wrapper();

// app/components/WashBox/index.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function WashBox({ wash }) {
  let title = dateManipulator.format(wash.scheduleDate, "d/LL"), date = dateManipulator.format(wash.scheduleDate, "d 'de' MMMM, eeee");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(LinkBox.Container, { to: `/wash/${wash.id}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(LinkBox.Content, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(LinkBox.Title, { children: title }, void 0, !1, {
        fileName: "app/components/WashBox/index.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react19.Text, { fontSize: "lg", children: date }, void 0, !1, {
        fileName: "app/components/WashBox/index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/WashBox/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(LinkBox.Icon, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_fa.FaExternalLinkAlt, { size: 16 }, void 0, !1, {
      fileName: "app/components/WashBox/index.tsx",
      lineNumber: 23,
      columnNumber: 27
    }, this) }, void 0, !1, {
      fileName: "app/components/WashBox/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/WashBox/index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/WashesContent/index.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function WashesContent({ washes, washCycle }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.Grid, { blockSize: "100%", gridTemplateRows: "1fr auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.Box, { children: washCycle && washes && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.Alert, { status: "info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.AlertIcon, {}, void 0, !1, {
        fileName: "app/components/NewWash/WashesContent/index.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.Text, { children: [
        "H\xE1 lavagens ativas para o ve\xEDculo com placa",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(LinkHighlighted, { to: `/vehicle/${washCycle.vehicleId}`, children: washCycle.vehicleId }, void 0, !1, {
          fileName: "app/components/NewWash/WashesContent/index.tsx",
          lineNumber: 21,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NewWash/WashesContent/index.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewWash/WashesContent/index.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/NewWash/WashesContent/index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      import_react20.Flex,
      {
        paddingBlockStart: 6,
        flexDir: "column",
        gap: 4,
        children: washes && washes.map((w) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(WashBox, { wash: w }, w.id, !1, {
          fileName: "app/components/NewWash/WashesContent/index.tsx",
          lineNumber: 35,
          columnNumber: 20
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/components/NewWash/WashesContent/index.tsx",
        lineNumber: 28,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/NewWash/WashesContent/index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.new-wash._index.tsx
var import_node = require("@remix-run/node");

// app/routes/washes-search/route.ts
var route_exports = {};
__export(route_exports, {
  loader: () => loader,
  mocks: () => mocks
});
var import_react_router = require("react-router");
function getDate(date, days) {
  let parsedDate = dateManipulator.parseDateToString(date ?? /* @__PURE__ */ new Date());
  return dateManipulator.addDaysToDate(parsedDate, days ?? 0);
}
var mocks = {
  washCycles: [
    {
      id: "fake-cycle-id",
      vehicleId: "PO6778",
      startDate: getDate(),
      endDate: getDate(/* @__PURE__ */ new Date(), 28),
      washesId: ["1", "2", "3", "4"],
      completedWashes: []
    },
    {
      id: "fake-cycle-id2",
      vehicleId: "LAPW123",
      startDate: getDate(),
      endDate: getDate(/* @__PURE__ */ new Date(), 28),
      washesId: ["1", "2", "3", "4"],
      completedWashes: []
    },
    {
      id: "fake-cycle-id3",
      vehicleId: "HUHDWQE",
      startDate: getDate(),
      endDate: getDate(/* @__PURE__ */ new Date(), 28),
      washesId: ["1", "2", "3", "4"],
      completedWashes: []
    }
  ],
  washes: [
    {
      id: "1",
      vehicleId: "PO6778",
      scheduleDate: getDate(),
      cycleId: "fake-cycle-id",
      note: "Lavar ca\xE7amba do caminh\xE3o",
      isCompleted: !1,
      createdBy: "fake-user"
    },
    {
      id: "2",
      vehicleId: "PO6778",
      scheduleDate: getDate(/* @__PURE__ */ new Date(), 7),
      cycleId: "fake-cycle-id",
      note: "Lavar roda traseira",
      isCompleted: !1,
      createdBy: "fake-user"
    },
    {
      id: "3",
      vehicleId: "PO6778",
      scheduleDate: getDate(/* @__PURE__ */ new Date(), 14),
      cycleId: "fake-cycle-id",
      isCompleted: !1,
      createdBy: "fake-user"
    },
    {
      id: "4",
      vehicleId: "PO6778",
      scheduleDate: getDate(/* @__PURE__ */ new Date(), 22),
      cycleId: "fake-cycle-id",
      isCompleted: !1,
      createdBy: "fake-user"
    },
    {
      id: "5",
      vehicleId: "LAPW123",
      scheduleDate: getDate(/* @__PURE__ */ new Date(), 4),
      cycleId: "fake-cycle-id2",
      isCompleted: !1,
      createdBy: "fake-user"
    },
    {
      id: "6",
      vehicleId: "HUHDWQE",
      scheduleDate: getDate(/* @__PURE__ */ new Date(), 3),
      cycleId: "fake-cycle-id3",
      isCompleted: !1,
      createdBy: "fake-user"
    }
  ]
};
async function loader({ request }) {
  let query = new URL(request.url).searchParams.get("query");
  if (typeof query != "string" || query === "")
    return (0, import_react_router.json)(null);
  let washes = mocks.washes.filter((w) => w.vehicleId === query), washCycle = mocks.washCycles.find((w) => w.vehicleId === query), error;
  return washCycle || (error = null), error ? (0, import_react_router.json)({ error }) : (0, import_react_router.json)({ washCycle, washes });
}

// app/routes/_auth.new-wash._index.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
async function loader2({ request }) {
  let url = new URL(request.url), vehicle = JSON.parse(url.searchParams.get("vehicle") ?? "null");
  if (!(vehicle != null && vehicle.licensePlate) || !vehicle.type)
    return (0, import_node.json)({});
  let washCycle = mocks.washCycles.find(
    (w) => w.vehicleId === vehicle.licensePlate
  ), washes = mocks.washes.filter(
    (w) => w.vehicleId === vehicle.licensePlate
  );
  return (0, import_node.json)({ washes, washCycle });
}
function auth_new_wash_index_default() {
  let data = (0, import_react22.useLoaderData)(), [searchParams] = (0, import_react22.useSearchParams)(), { Stepper: Stepper2, steps: steps2 } = useStepper(), step = Number(searchParams.get("step") ?? 0), stepValue = JSON.parse(searchParams.get(steps2[step].label) ?? "null"), isEqualOrGreaterThanZero = step - 1 >= 0, isLowerThanStepLength = step < steps2.length - 1, previousUrlParams = new URLSearchParams(searchParams), nextUrlParams = new URLSearchParams(searchParams);
  return previousUrlParams.set("step", (step - 1).toString()), nextUrlParams.set("step", (step + 1).toString()), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react21.Grid, { paddingInline: 8, gridTemplateRows: "1fr auto", inlineSize: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      import_react21.Grid,
      {
        gridAutoFlow: "column",
        gap: "1.125em",
        gridTemplateColumns: "auto 1fr",
        gridTemplateRows: "100%",
        marginInline: [0, 0, 4],
        paddingBlockStart: [4, 4, 8],
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Stepper2, { activeStep: step, steps: steps2 }, void 0, !1, {
            fileName: "app/routes/_auth.new-wash._index.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_react21.Grid,
            {
              blockSize: "100%",
              inlineSize: "100%",
              paddingInline: 4,
              gridAutoRows: "min-content",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                  import_react21.Text,
                  {
                    placeSelf: "center",
                    as: "h1",
                    fontSize: "2xl",
                    marginBlockEnd: 4,
                    children: steps2[step].modalTitle
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                  import_react21.Box,
                  {
                    inlineSize: "100%",
                    marginInline: "auto",
                    maxInlineSize: "container.md",
                    children: [
                      steps2[step].label === "vehicle" && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(VehicleContent, {}, void 0, !1, {
                        fileName: "app/routes/_auth.new-wash._index.tsx",
                        lineNumber: 70,
                        columnNumber: 49
                      }, this),
                      steps2[step].label === "washes" && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(WashesContent, { washCycle: data.washCycle, washes: data.washes }, void 0, !1, {
                        fileName: "app/routes/_auth.new-wash._index.tsx",
                        lineNumber: 72,
                        columnNumber: 15
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/_auth.new-wash._index.tsx",
              lineNumber: 51,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_auth.new-wash._index.tsx",
        lineNumber: 42,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      import_react21.Flex,
      {
        placeSelf: "flex-end",
        blockSize: "100%",
        align: "center",
        paddingBlock: 8,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_react21.Button,
            {
              as: import_react22.Link,
              isDisabled: !steps2[step].isNullable,
              colorScheme: "purple",
              variant: "ghost",
              mr: 3,
              size: "sm",
              to: `/new-wash?${nextUrlParams.toString()}`,
              children: "pular"
            },
            "jump-btn",
            !1,
            {
              fileName: "app/routes/_auth.new-wash._index.tsx",
              lineNumber: 84,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_react21.Button,
            {
              as: import_react22.Link,
              colorScheme: "gray",
              variant: "ghost",
              mr: 3,
              isDisabled: !isEqualOrGreaterThanZero,
              to: `/new-wash?${previousUrlParams.toString()}`,
              marginInlineEnd: "0",
              children: "voltar"
            },
            "back-btn",
            !1,
            {
              fileName: "app/routes/_auth.new-wash._index.tsx",
              lineNumber: 96,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_react21.Divider,
            {
              blockSize: "100%",
              orientation: "vertical",
              inlineSize: "8px",
              borderColor: "gray.400"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_auth.new-wash._index.tsx",
              lineNumber: 108,
              columnNumber: 9
            },
            this
          ),
          step === steps2.length - 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react21.Button, { variant: "ghost", colorScheme: "blue", children: "finalizar" }, "finish-btn", !1, {
            fileName: "app/routes/_auth.new-wash._index.tsx",
            lineNumber: 115,
            columnNumber: 11
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_react21.Button,
            {
              as: import_react22.Link,
              isDisabled: !stepValue || !isLowerThanStepLength,
              variant: "ghost",
              colorScheme: "blue",
              to: `/new-wash?${nextUrlParams.toString()}`,
              children: "pr\xF3ximo"
            },
            "next-btn",
            !1,
            {
              fileName: "app/routes/_auth.new-wash._index.tsx",
              lineNumber: 119,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_auth.new-wash._index.tsx",
        lineNumber: 78,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.new-wash._index.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/vehicle-search/route.ts
var route_exports2 = {};
__export(route_exports2, {
  loader: () => loader3
});
var import_react_router2 = require("react-router"), vehicles = [
  {
    licensePlate: "HUHDWQE",
    type: "Leve"
  },
  {
    licensePlate: "LAPW123",
    type: "Leve"
  },
  {
    licensePlate: "PO6778",
    type: "Truck"
  },
  {
    licensePlate: "PO6778",
    type: "Truck"
  },
  {
    licensePlate: "PO6778",
    type: "Truck"
  },
  {
    licensePlate: "PO6778",
    type: "Truck"
  }
];
async function loader3({ request }) {
  let query = new URL(request.url).searchParams.get("query");
  return typeof query != "string" || query == "" ? (0, import_react_router2.json)(null) : (0, import_react_router2.json)(vehicles.filter((v) => v.licensePlate === query));
}

// app/routes/_auth.home.tsx
var auth_home_exports = {};
__export(auth_home_exports, {
  default: () => auth_home_default,
  headers: () => headers,
  loader: () => loader4
});
var import_react23 = require("@chakra-ui/react"), import_node3 = require("@remix-run/node"), import_react24 = require("@remix-run/react");

// src/domain/modules/user/use-cases/validate-session.ts
var ValidateSession = class {
  constructor(userDB) {
    this.userDB = userDB;
  }
  async execute(sessionId) {
    let user = await this.userDB.findBySessionId(sessionId);
    if (!user)
      throw new Error("Token is invalid");
    return { user };
  }
};

// src/infra/database/prisma/prisma.ts
var import_client = require("@prisma/client"), globalForPrisma = global, prisma = globalForPrisma.prisma || new import_client.PrismaClient({ log: ["query", "info", "warn", "error"] });
globalForPrisma.prisma = prisma;

// src/domain/modules/user/entities/User.ts
var import_crypto = require("crypto"), User = class {
  constructor(data) {
    this._props = {
      ...data,
      id: data.id ?? (0, import_crypto.randomUUID)(),
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  createSession() {
    this._props.sessionId = (0, import_crypto.randomUUID)();
  }
  // getSession(id: string) {
  //     const session = this._props.sessions.find((t) => t === id);
  //     return session;
  // }
  removeSession() {
    this._props.sessionId = null;
  }
  get id() {
    return this._props.id;
  }
  get username() {
    return this._props.username;
  }
  set username(str) {
    this._props.username = str;
  }
  get password() {
    return this._props.password;
  }
  set password(password) {
    this._props.password = password;
  }
  get email() {
    return this._props.email;
  }
  set email(str) {
    this._props.email = str;
  }
  get role() {
    return this._props.role;
  }
  set role(role) {
    this._props.role = role;
  }
  get createdAt() {
    return this._props.createdAt;
  }
  get sessionId() {
    return this._props.sessionId;
  }
};

// src/infra/database/prisma/mappers/prisma-user-mapper.ts
var PrismaUserMapper = class {
  toDomain(raw) {
    return new User({
      id: raw.id,
      username: raw.username,
      password: raw.password,
      email: raw.email,
      role: raw.role,
      createdAt: raw.createdAt,
      sessionId: raw.sessionId
    });
  }
  toPrisma(user) {
    return {
      id: user.id,
      createdAt: user.createdAt,
      email: user.email,
      password: user.password,
      role: user.role,
      sessionId: user.sessionId,
      username: user.username
    };
  }
};

// src/infra/database/prisma/repositories/user-repository.ts
var PrismaUserRepository = class {
  constructor() {
    this.userMapper = new PrismaUserMapper();
  }
  async create(user) {
    let mappedUSer = this.userMapper.toPrisma(user);
    await prisma.user.create({
      data: mappedUSer
    });
  }
  async find({
    email,
    id,
    username
  }) {
    let where = {
      email,
      id,
      username
    }, user = await prisma.user.findUnique({ where });
    return user ? this.userMapper.toDomain({
      ...user
    }) : null;
  }
  async update(userId, data) {
    await prisma.user.update({
      where: {
        id: userId
      },
      data
    });
  }
  async findBySessionId(sessionId) {
    let user = await prisma.user.findUnique({
      where: {
        sessionId
      }
    });
    return user ? this.userMapper.toDomain({
      ...user
    }) : null;
  }
};

// src/infra/http/mappers/http-mapper.ts
function toHttp(user) {
  return {
    email: user.email,
    role: user.role,
    username: user.username
  };
}

// src/infra/http/helpers/validate-session-id.ts
async function validateSessionId({ sessionId }) {
  try {
    let prismaUserRepository = new PrismaUserRepository(), validateSession = new ValidateSession(prismaUserRepository), { user } = await validateSession.execute(sessionId);
    return { user: toHttp(user) };
  } catch (err) {
    return err instanceof Error ? { error: err.message } : { error: "something went wrong" };
  }
}

// app/sessions.ts
var import_node2 = require("@remix-run/node"), { commitSession, destroySession, getSession } = (0, import_node2.createCookieSessionStorage)({
  // a Cookie from `createCookie` or the CookieOptions to create one
  cookie: {
    name: "__session",
    // all of these are optional
    // Expires can also be set (although maxAge overrides it when used in combination).
    // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
    //
    // expires: new Date(Date.now() + 60_000),
    httpOnly: !0,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1"],
    secure: !1
  }
});

// app/routes/_auth.home.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), headers = ({ parentHeaders }) => ({
  "Cache-Control": parentHeaders.get("Cache-control") ?? "max-age=3600"
});
async function loader4({ request }) {
  let session = await getSession(request.headers.get("Cookie")), token = session.get("token");
  if (console.log("home loader"), !token)
    throw (0, import_node3.redirect)("/sign-in");
  let { error, user } = await validateSessionId({ sessionId: token });
  if (error || !user)
    throw session.unset("token"), (0, import_node3.redirect)("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  return (0, import_node3.json)(
    { user }
  );
}
function auth_home_default() {
  let data = (0, import_react24.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react23.Text, { children: "home" }, void 0, !1, {
    fileName: "app/routes/_auth.home.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}

// app/routes/sign-in.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  action: () => action,
  default: () => sign_in_default,
  loader: () => loader5
});
var import_react26 = require("@chakra-ui/react"), import_bs2 = require("react-icons/bs"), import_md2 = require("react-icons/md"), import_node4 = require("@remix-run/node"), import_react27 = require("@remix-run/react");

// src/domain/shared/utils/hash-manipulator.ts
var import_bcrypt = __toESM(require("bcrypt")), HashManipulator = class {
  static async compareStrToHashedStr(str1, hash) {
    let bool = await import_bcrypt.default.compare(str1, hash);
    if (typeof bool > "u")
      throw new Error("Something went wrong in hash process");
    return bool;
  }
  static async generateHashFromStr(str) {
    let hash = await import_bcrypt.default.hash(str, 10);
    if (!hash)
      throw new Error("Something went wrong in hash process");
    return hash;
  }
};

// src/domain/modules/user/use-cases/create-session.ts
var CreateSession = class {
  constructor(userDB) {
    this.userDB = userDB;
  }
  async execute({
    email,
    password
  }) {
    let user = await this.userDB.find({ email });
    if (!user)
      throw console.log("user not founded"), new Error("Credentials not valid");
    if (!await HashManipulator.compareStrToHashedStr(
      password,
      user.password
    ))
      throw console.log("password not valid"), new Error("Credentials not valid");
    if (user.sessionId || user.createSession(), !user.sessionId)
      throw new Error("Something went wrong with creation of token");
    return await this.userDB.update(user.id, { sessionId: user.sessionId }), { sessionId: user.sessionId, user };
  }
};

// src/infra/http/controllers/sign-in-user-controller.ts
async function signInUserController({ email, password }) {
  try {
    let prismaUserRepository = new PrismaUserRepository(), createSession = new CreateSession(prismaUserRepository), { sessionId, user } = await createSession.execute({ email, password });
    return { sessionId, user };
  } catch (err) {
    return err instanceof Error ? { error: err.message } : { error: "something went wrong" };
  }
}

// app/components/Footer.tsx
var import_react25 = require("@chakra-ui/react"), import_bs = require("react-icons/bs"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react25.Center, { textAlign: "center", paddingBlock: 0.5, gap: 2, bg: "blue.500", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react25.Text, { fontSize: "xs", color: "white", children: [
      "Feito por",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react25.Link, { target: "_blank", href: "https://github.com/euliveiras", children: "@euliveiras" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_bs.BsMoonStars, { size: "12px", color: "white" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/sign-in.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
async function action({ request }) {
  let form = await request.formData(), email = form.get("email"), password = form.get("password"), session = await getSession(request.headers.get("Cookie"));
  if (typeof password != "string" || typeof email != "string")
    return new Response(JSON.stringify({ error: "credentials is invalid" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  let { error, sessionId } = await signInUserController({ email, password });
  return error || !sessionId ? new Response(JSON.stringify({ error }), {
    status: 400,
    headers: {
      "Content-Type": "application/json"
    }
  }) : (session.set("token", sessionId), (0, import_node4.redirect)("/home", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  }));
}
async function loader5({ request }) {
  let token = (await getSession(request.headers.get("Cookie"))).get("token");
  if (!token)
    return (0, import_node4.json)({});
  let { user } = await validateSessionId({ sessionId: token });
  return user ? (0, import_node4.redirect)("/home") : (0, import_node4.json)({});
}
function CustomInputGroup({
  icon,
  name,
  type,
  isError,
  isIdle,
  isSubmitting
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    import_react26.InputGroup,
    {
      sx: {
        "--clr": isError ? "#E53E3E" : isSubmitting ? "#48BB78" : isIdle ? "#000000" : "#3182ce"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react26.InputRightElement, { fontSize: 26, children: icon }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 109,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_react26.Input,
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
          !1,
          {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 110,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 98,
      columnNumber: 5
    },
    this
  );
}
function sign_in_default() {
  let errors = (0, import_react27.useActionData)(), navigation = (0, import_react27.useNavigation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react26.Box, { h: "100vh", w: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react26.Grid, { h: "100%", w: "100%", templateRows: "1fr auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react26.VStack, { paddingBlockStart: [32, 20], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react26.HStack, { spacing: "4px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_bs2.BsPerson, { size: "20px", color: "#000000", strokeWidth: "0.8px" }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react26.Text, { fontWeight: "bold", fontSize: "md", children: "/ login" }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 133,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        import_react26.VStack,
        {
          as: import_react27.Form,
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react26.FormControl, { isRequired: !0, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react26.FormLabel, { fontSize: "sm", children: "email" }, void 0, !1, {
                fileName: "app/routes/sign-in.tsx",
                lineNumber: 152,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                CustomInputGroup,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_md2.MdOutlineEmail, { color: "var(--clr)" }, void 0, !1, {
                    fileName: "app/routes/sign-in.tsx",
                    lineNumber: 154,
                    columnNumber: 23
                  }, this),
                  name: "email",
                  type: "email",
                  isError: errors == null ? void 0 : errors.error,
                  isSubmitting: navigation.state === "submitting",
                  isIdle: navigation.state === "idle"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/sign-in.tsx",
                  lineNumber: 153,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 151,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react26.FormControl, { isRequired: !0, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react26.FormLabel, { fontSize: "sm", children: "password" }, void 0, !1, {
                fileName: "app/routes/sign-in.tsx",
                lineNumber: 163,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                CustomInputGroup,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_md2.MdLockOutline, { color: "var(--clr)" }, void 0, !1, {
                    fileName: "app/routes/sign-in.tsx",
                    lineNumber: 165,
                    columnNumber: 23
                  }, this),
                  type: "password",
                  name: "password",
                  isError: errors == null ? void 0 : errors.error,
                  isSubmitting: navigation.state === "submitting",
                  isIdle: navigation.state === "idle"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/sign-in.tsx",
                  lineNumber: 164,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 162,
              columnNumber: 13
            }, this),
            (errors == null ? void 0 : errors.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react26.Text, { color: "red.500", children: errors == null ? void 0 : errors.error }, void 0, !1, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 173,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_react26.Button,
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
              !1,
              {
                fileName: "app/routes/sign-in.tsx",
                lineNumber: 174,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 139,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 132,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 187,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 131,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 130,
    columnNumber: 5
  }, this);
}

// app/routes/sign-up.tsx
var sign_up_exports = {};
__export(sign_up_exports, {
  action: () => action2,
  default: () => sign_up_default
});
var import_node5 = require("@remix-run/node"), import_react28 = require("@remix-run/react");

// src/domain/modules/user/use-cases/create-user.ts
var CreateUser = class {
  constructor(userDB) {
    this.userDB = userDB;
  }
  async execute(data) {
    let user = new User(data);
    if (await this.userDB.find({ email: user.email }))
      throw new Error("Email is already in use");
    return await this.userDB.create(user), { user };
  }
};

// src/infra/http/controllers/create-user-controller.ts
async function createUserController({ username, email, password }) {
  try {
    let prismaUserRepository = new PrismaUserRepository(), createUser = new CreateUser(prismaUserRepository), hashedPassword = await HashManipulator.generateHashFromStr(password), { user } = await createUser.execute({
      username,
      password: hashedPassword,
      email,
      role: "COLAB"
    });
    return { user };
  } catch (err) {
    return err instanceof Error ? { error: err.message } : { error: "something went wrong" };
  }
}

// app/routes/sign-up.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
async function action2({ request }) {
  let form = await request.formData(), username = form.get("username"), password = form.get("password"), email = form.get("email");
  if (typeof username != "string" || typeof password != "string" || typeof email != "string")
    return new import_node5.Response(JSON.stringify({ error: "credentials is invalid" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  let { error } = await createUserController({ email, password, username });
  return error ? (console.log(error), new import_node5.Response(null, {
    status: 400,
    statusText: error
  })) : (0, import_node5.redirect)("/sign-in", 201);
}
function sign_up_default() {
  let data = (0, import_react28.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { children: "Sign up" }, void 0, !1, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    data ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { style: { color: "red" }, children: data.error }, void 0, !1, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 40,
      columnNumber: 21
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react28.Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("label", { children: [
        "username",
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "text", name: "username" }, void 0, !1, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 44,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("label", { children: [
        "email",
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "text", name: "email" }, void 0, !1, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 48,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("label", { children: [
        "password",
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "password", name: "password" }, void 0, !1, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 52,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { type: "submit", children: "Logar" }, void 0, !1, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react28.Link, { to: "/sign-in", children: "logar" }, void 0, !1, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-up.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  loader: () => loader6
});
var import_node6 = require("@remix-run/node");
async function loader6() {
  return (0, import_node6.redirect)("/home");
}

// app/routes/_auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => auth_default,
  headers: () => headers2,
  loader: () => loader7
});
var import_node7 = require("@remix-run/node"), import_node8 = require("@remix-run/node"), import_react35 = require("@remix-run/react");

// app/components/Header.tsx
var import_react32 = require("@chakra-ui/react"), import_md4 = require("react-icons/md"), import_lu = require("react-icons/lu"), import_react33 = require("@remix-run/react"), import_react34 = require("react");

// app/components/SearchInput.tsx
var import_react29 = require("@chakra-ui/react"), import_md3 = require("react-icons/md"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function SearchInput() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    import_react29.InputGroup,
    {
      display: ["none", "none", "block"],
      role: "group",
      sx: { "input:focus ~ div": { svg: { color: "blackAlpha.900" } } },
      maxInlineSize: 96,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          import_react29.Input,
          {
            placeholder: "Procure qualquer coisa",
            borderRadius: "full",
            focusBorderColor: "blackAlpha.900",
            type: "search",
            name: "query"
          },
          void 0,
          !1,
          {
            fileName: "app/components/SearchInput.tsx",
            lineNumber: 12,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react29.InputRightElement, { pointerEvents: "none", fontSize: 26, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          import_react29.Icon,
          {
            color: "gray.200",
            as: import_md3.MdOutlineSearch,
            transitionDuration: "200ms",
            transitionProperty: "all",
            _groupHover: { color: "gray.300" }
          },
          void 0,
          !1,
          {
            fileName: "app/components/SearchInput.tsx",
            lineNumber: 20,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/SearchInput.tsx",
          lineNumber: 19,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/SearchInput.tsx",
      lineNumber: 6,
      columnNumber: 5
    },
    this
  );
}

// app/components/Drawer.tsx
var import_react31 = require("@chakra-ui/react");

// app/components/Avatar.tsx
var import_react30 = require("@chakra-ui/react"), import_rx = require("react-icons/rx"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function Avatar({ containerProps, avatarProps, user }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    import_react30.HStack,
    {
      paddingInline: 2,
      display: ["none", "none", "flex"],
      ...containerProps,
      children: [
        user && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react30.Menu, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react30.MenuButton, { as: import_react30.Button, variant: "ghost", rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_rx.RxChevronDown, {}, void 0, !1, {
            fileName: "app/components/Avatar.tsx",
            lineNumber: 31,
            columnNumber: 62
          }, this), children: user.username }, void 0, !1, {
            fileName: "app/components/Avatar.tsx",
            lineNumber: 31,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react30.MenuList, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react30.MenuItem, { children: "Configura\xE7\xF5es" }, void 0, !1, {
              fileName: "app/components/Avatar.tsx",
              lineNumber: 35,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react30.MenuItem, { as: import_react30.Text, color: "red.400", children: "Sair" }, void 0, !1, {
              fileName: "app/components/Avatar.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Avatar.tsx",
            lineNumber: 34,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Avatar.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react30.Avatar, { size: "md", name: "Natan", ...avatarProps }, void 0, !1, {
          fileName: "app/components/Avatar.tsx",
          lineNumber: 40,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Avatar.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}

// app/components/Drawer.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function Drawer({ isOpen, onClose, finalFocusRef, user }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    import_react31.Drawer,
    {
      isOpen,
      placement: "right",
      onClose,
      finalFocusRef,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react31.DrawerOverlay, {}, void 0, !1, {
          fileName: "app/components/Drawer.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react31.DrawerContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react31.DrawerCloseButton, { top: 4 }, void 0, !1, {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            import_react31.DrawerHeader,
            {
              as: import_react31.HStack,
              inlineSize: "min-content",
              paddingBlock: 2,
              paddingInline: 4,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
                Avatar,
                {
                  containerProps: {
                    display: "flex"
                  },
                  user
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Drawer.tsx",
                  lineNumber: 42,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/Drawer.tsx",
              lineNumber: 36,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react31.DrawerBody, {}, void 0, !1, {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react31.DrawerFooter, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react31.Button, { variant: "outline", mr: 3, onClick: onClose, children: "Cancel" }, void 0, !1, {
              fileName: "app/components/Drawer.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react31.Button, { colorScheme: "blue", children: "Save" }, void 0, !1, {
              fileName: "app/components/Drawer.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Drawer.tsx",
          lineNumber: 34,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Drawer.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}

// app/components/Header.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function Header({ label, user }) {
  let { isOpen, onOpen, onClose } = (0, import_react32.useDisclosure)(), btnRef = (0, import_react34.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    import_react32.Grid,
    {
      maxH: "120px",
      inlineSize: "100%",
      gridAutoFlow: "column",
      gridAutoRows: "min-content",
      paddingInline: 2,
      paddingBlock: 4,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react32.HStack, { spacing: [6], children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react32.HStack, { spacing: 1, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              import_react32.IconButton,
              {
                variant: "ghost",
                "aria-label": "go to home",
                fontSize: "32px",
                isRound: !0,
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_md4.MdOutlineHome, {}, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 48,
                  columnNumber: 19
                }, this),
                as: import_react33.Link,
                to: "/home"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Header.tsx",
                lineNumber: 43,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react32.Text, { fontWeight: "bold", fontSize: "md", children: label }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SearchInput, {}, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 41,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react32.HStack, { justifySelf: "flex-end", spacing: 1, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_react32.Button,
            {
              as: import_react33.Link,
              marginInline: 1,
              variant: "solid",
              colorScheme: "blue",
              borderRadius: "full",
              blockSize: 10,
              inlineSize: [10, "auto"],
              sx: { span: { marginInlineEnd: ["0"] } },
              leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_lu.LuPlus, { size: "1.25em" }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 68,
                columnNumber: 21
              }, this),
              to: "/new-wash",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react32.Text, { display: ["none", "block"], children: "Nova lavagem" }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 73,
                columnNumber: 11
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 59,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_react32.IconButton,
            {
              variant: "ghost",
              colorScheme: "blackAlpha",
              "aria-label": "open notifications",
              fontSize: "26px",
              isRound: !0,
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_md4.MdOutlineNotificationsNone, {}, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 81,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 75,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react32.Divider, { borderLeftWidth: 2, orientation: "vertical" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 83,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Avatar, { user }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 84,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_react32.IconButton,
            {
              display: ["flex", "flex", "none"],
              variant: "ghost",
              "aria-label": "open side menu",
              fontSize: "24px",
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_md4.MdDensityMedium, {}, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 90,
                columnNumber: 17
              }, this),
              onClick: onOpen,
              ref: btnRef
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 85,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            Drawer,
            {
              finalFocusRef: btnRef,
              isOpen,
              onClose,
              user
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 94,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 33,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_auth.tsx
var import_react36 = require("@chakra-ui/react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), headers2 = ({ loaderHeaders }) => ({
  "Cache-Control": loaderHeaders.get("Cache-control") ?? "max-age=3600"
});
async function loader7({ request }) {
  let session = await getSession(request.headers.get("Cookie")), url = new URL(request.url), token = session.get("token");
  if (!token)
    throw (0, import_node7.redirect)("/sign-in");
  let { error, user } = await validateSessionId({ sessionId: token });
  if (error || !user)
    throw session.unset("token"), (0, import_node7.redirect)("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  return (0, import_node8.json)(
    { path: url.pathname, user },
    {
      headers: {
        "Cache-Control": `max-age=${60 * 60}`
      }
    }
  );
}
function auth_default() {
  let { path, user } = (0, import_react35.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react36.Grid, { gridTemplateRows: "auto 1fr", blockSize: "100vh", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Header, { label: path ?? "/", user }, void 0, !1, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react35.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => __default
});
var import_react37 = require("@chakra-ui/react");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function __default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    import_react37.Grid,
    {
      placeContent: "center",
      placeItems: "center",
      blockSize: "100dvh",
      inlineSize: "100%",
      gap: 4,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react37.Text, { fontSize: "lg", children: "Essa p\xE1gina n\xE3o existe :(" }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 13,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react37.HStack, { spacing: 1, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react37.Text, { fontSize: "lg", children: "Go back" }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(LinkHighlighted, { to: "/home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react37.Text, { fontSize: "lg", children: "/ home" }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 17,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 16,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/$.tsx",
          lineNumber: 14,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/$.tsx",
      lineNumber: 6,
      columnNumber: 5
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "f1f57a36", entry: { module: "http://localhost:3001/build/entry.client-BART2GMV.js", imports: ["http://localhost:3001/build/_shared/chunk-XO3EGWRB.js", "http://localhost:3001/build/_shared/chunk-DC5KBJVF.js", "http://localhost:3001/build/_shared/chunk-PKOMFC7F.js", "http://localhost:3001/build/_shared/chunk-ANXL52AQ.js", "http://localhost:3001/build/_shared/chunk-6SJDMTBK.js", "http://localhost:3001/build/_shared/chunk-OKS54H4S.js", "http://localhost:3001/build/_shared/chunk-3YOGVSK4.js", "http://localhost:3001/build/_shared/chunk-KFR6H6JJ.js", "http://localhost:3001/build/_shared/chunk-I54TBTTL.js", "http://localhost:3001/build/_shared/chunk-CT6324V4.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/root-RPVXUQJF.js", imports: ["http://localhost:3001/build/_shared/chunk-JWF4XJQI.js", "http://localhost:3001/build/_shared/chunk-IJA4GF5B.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/$-L6MWMPAM.js", imports: ["http://localhost:3001/build/_shared/chunk-MV2MUGWC.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/_auth-KA3CYUZ6.js", imports: ["http://localhost:3001/build/_shared/chunk-DXSXC535.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.home": { id: "routes/_auth.home", parentId: "routes/_auth", path: "home", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/_auth.home-COEBBGXT.js", imports: ["http://localhost:3001/build/_shared/chunk-JWF4XJQI.js", "http://localhost:3001/build/_shared/chunk-IJA4GF5B.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.new-wash._index": { id: "routes/_auth.new-wash._index", parentId: "routes/_auth", path: "new-wash", index: !0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/_auth.new-wash._index-BUITSFJX.js", imports: ["http://localhost:3001/build/_shared/chunk-MV2MUGWC.js", "http://localhost:3001/build/_shared/chunk-JWF4XJQI.js", "http://localhost:3001/build/_shared/chunk-IJA4GF5B.js", "http://localhost:3001/build/../../domain/shared/date-manipulator"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/_index-M23M7LSB.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in": { id: "routes/sign-in", parentId: "root", path: "sign-in", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/sign-in-OBMEPTOF.js", imports: ["http://localhost:3001/build/_shared/chunk-DXSXC535.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up": { id: "routes/sign-up", parentId: "root", path: "sign-up", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/sign-up-P2IFJXMP.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/vehicle-search": { id: "routes/vehicle-search", parentId: "root", path: "vehicle-search", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/vehicle-search-6CUZ7OJ2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/washes-search": { id: "routes/washes-search", parentId: "root", path: "washes-search", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/washes-search-5TZMZXOI.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: { runtime: "http://localhost:3001/build/_shared/chunk-KFR6H6JJ.js", routes: { "app/routes/_auth.tsx": { loaderHash: `export async function loader({
  request
}: LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const url = new URL(request.url);
  const token = session.get("token");
  if (!token) {
    throw redirect("/sign-in");
  }
  const {
    error,
    user
  } = await validateSessionId({
    sessionId: token
  });
  if (error || !user) {
    session.unset("token");
    throw redirect("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  return json({
    path: url.pathname,
    user
  }, {
    headers: {
      "Cache-Control": \`max-age=\${60 * 60}\`
    }
  });
}` }, "app/routes/_auth.home.tsx": { loaderHash: `export async function loader({
  request
}: LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");
  console.log("home loader");
  if (!token) {
    throw redirect("/sign-in");
  }
  const {
    error,
    user
  } = await validateSessionId({
    sessionId: token
  });
  if (error || !user) {
    session.unset("token");
    throw redirect("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  return json({
    user
  });
}` }, "app/routes/sign-in.tsx": { loaderHash: `export async function loader({
  request
}: LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");
  if (!token) {
    // Redirect to the home page if they are already signed in.
    return json({});
  }
  const {
    user
  } = await validateSessionId({
    sessionId: token
  });
  if (user) {
    return redirect("/home");
  }
  return json({});
}` }, "app/routes/_auth.new-wash._index.tsx": { loaderHash: `export async function loader({
  request
}: LoaderArgs) {
  const url = new URL(request.url);
  const vehicle = JSON.parse(url.searchParams.get("vehicle") ?? "null");
  if (!vehicle?.licensePlate || !vehicle.type) return json({});
  const washCycle = mocks.washCycles.find(w => w.vehicleId === vehicle.licensePlate);
  const washes = mocks.washes.filter(w => w.vehicleId === vehicle.licensePlate);
  return json({
    washes,
    washCycle
  });
}` }, "app/routes/vehicle-search/route.ts": { loaderHash: `export async function loader({
  request
}: LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  if (typeof query !== "string" || query == "") return json(null);
  return json(vehicles.filter(v => v.licensePlate === query));
}` }, "app/routes/washes-search/route.ts": { loaderHash: `export async function loader({
  request
}: LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  if (typeof query !== "string" || query === "") return json(null);

  // const { error, washCycle, washes } = await getNextWashesAndCycle(query);
  const washes = mocks.washes.filter(w => w.vehicleId === query);
  const washCycle = mocks.washCycles.find(w => w.vehicleId === query);
  let error;
  if (!washCycle) error = null;
  if (error) return json({
    error
  });
  return json({
    washCycle,
    washes
  });
}` }, "app/routes/_index.tsx": { loaderHash: `export async function loader() {
  return redirect("/home");
}` } }, timestamp: 1692195230117 }, url: "http://localhost:3001/build/manifest-F1F57A36.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "http://localhost:3001/build/", entry = { module: entry_server_exports }, dev = { websocketPort: 3002 }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_auth.new-wash._index": {
    id: "routes/_auth.new-wash._index",
    parentId: "routes/_auth",
    path: "new-wash",
    index: !0,
    caseSensitive: void 0,
    module: auth_new_wash_index_exports
  },
  "routes/vehicle-search": {
    id: "routes/vehicle-search",
    parentId: "root",
    path: "vehicle-search",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/washes-search": {
    id: "routes/washes-search",
    parentId: "root",
    path: "washes-search",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/_auth.home": {
    id: "routes/_auth.home",
    parentId: "routes/_auth",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: auth_home_exports
  },
  "routes/sign-in": {
    id: "routes/sign-in",
    parentId: "root",
    path: "sign-in",
    index: void 0,
    caseSensitive: void 0,
    module: sign_in_exports
  },
  "routes/sign-up": {
    id: "routes/sign-up",
    parentId: "root",
    path: "sign-up",
    index: void 0,
    caseSensitive: void 0,
    module: sign_up_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/_auth": {
    id: "routes/_auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  dev,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
