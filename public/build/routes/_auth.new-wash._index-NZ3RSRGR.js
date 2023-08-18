import {
  LinkHighlighted
} from "http://localhost:3001/build/_shared/chunk-SRNFPOD7.js";
import {
  dateManipulator
} from "http://localhost:3001/build/_shared/chunk-I35CEAMW.js";
import {
  GenIcon,
  MdCheck,
  MdDirectionsCarFilled,
  MdPerson2,
  MdWaterDrop
} from "http://localhost:3001/build/_shared/chunk-KVW2GNI7.js";
import {
  AbsoluteCenter,
  Alert,
  AlertIcon,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Select,
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  Textarea,
  useSteps
} from "http://localhost:3001/build/_shared/chunk-PJ2IAIPY.js";
import "http://localhost:3001/build/_shared/chunk-DC5KBJVF.js";
import "http://localhost:3001/build/_shared/chunk-PKOMFC7F.js";
import "http://localhost:3001/build/_shared/chunk-IJA4GF5B.js";
import {
  useFetcher
} from "http://localhost:3001/build/_shared/chunk-ANXL52AQ.js";
import {
  Form,
  Link,
  init_dist2 as init_dist
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

// browser-route-module:routes/_auth.new-wash._index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime11 = __toESM(require_jsx_runtime());

// app/components/NewWash/Stepper/index.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/react-icons/go/index.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function GoOrganization(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M6.25 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM5.5 9.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM6.25 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM9 12.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Zm.75-4.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM9 5.75A.75.75 0 0 1 9.75 5h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 9 5.75ZM13.25 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Zm-.75-2.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM13.25 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z" } }, { "tag": "path", "attr": { "d": "M2 20V3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17c0 .173-.022.34-.063.5H20a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.2-.4l-.5-.375a.75.75 0 0 1 .9-1.2l.5.375c.504.378.8.97.8 1.6v8a2 2 0 0 1-2 2h-3.562a.767.767 0 0 1-.166-.018c-.089.012-.18.018-.272.018h-3.75a.75.75 0 0 1-.75-.75V19h-3v2.25a.75.75 0 0 1-.75.75H4a2 2 0 0 1-2-2Zm2 .5h3v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25h3a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5Z" } }] })(props);
}

// app/components/NewWash/Stepper/Stepper.tsx
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
    window.$RefreshRuntime$.register(type, '"app/components/NewWash/Stepper/Stepper.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWash/Stepper/Stepper.tsx"
  );
  import.meta.hot.lastModified = "1692294142203.1226";
}
function Stepper2({
  steps: steps2,
  activeStep
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
    index: activeStep,
    orientation: "vertical",
    blockSize: "100%",
    size: "lg",
    children: steps2.map(({
      IconIncomplete,
      IconActive,
      label
    }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Step, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepIndicator, {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepStatus, {
          complete: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepIcon, {}),
          incomplete: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconIncomplete, {
            size: 20
          }),
          active: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconActive, {
            size: 20
          })
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        flexShrink: "0",
        paddingBlockStart: 1,
        display: ["none", "none", "none", "block"],
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepTitle, {
          children: label
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepSeparator, {})]
    }, index))
  });
}
_c = Stepper2;
var _c;
$RefreshReg$(_c, "Stepper");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NewWash/Stepper/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWash/Stepper/index.ts"
  );
  import.meta.hot.lastModified = "1692315146209.8052";
}
var steps = [
  {
    label: "vehicle",
    IconIncomplete: MdDirectionsCarFilled,
    IconActive: MdDirectionsCarFilled,
    isNullable: false,
    modalTitle: "Escolher ve\xEDculo"
  },
  {
    label: "washes",
    IconIncomplete: MdWaterDrop,
    IconActive: MdWaterDrop,
    isNullable: false,
    modalTitle: "Cadastrar lavagens"
  },
  {
    label: "driver",
    IconIncomplete: MdPerson2,
    IconActive: MdPerson2,
    isNullable: true,
    modalTitle: "Escolher motorista"
  },
  {
    label: "organization",
    IconIncomplete: GoOrganization,
    IconActive: GoOrganization,
    isNullable: true,
    modalTitle: "Escolher organiza\xE7\xE3o"
  },
  {
    label: "summary",
    IconIncomplete: MdCheck,
    IconActive: MdCheck,
    isNullable: false,
    modalTitle: "Confirmar op\xE7\xF5es"
  }
];
function useStepper() {
  const { activeStep, goToNext, goToPrevious, setActiveStep } = useSteps({
    index: 0,
    count: steps.length
  });
  return {
    Stepper: Stepper2,
    activeStep,
    goToNext,
    goToPrevious,
    steps,
    setActiveStep
  };
}

// app/components/NewWash/VehicleContent/index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_react4 = __toESM(require_react());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/NewWash/VehicleContent/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWash/VehicleContent/index.tsx"
  );
  import.meta.hot.lastModified = "1692327954938.7559";
}
var selectOptions = ["Extra leve", "Leve", "Vuc", "Toco", "Truck", "Bitruck", "Carreta"];
function NewVehicleForm({
  isChecked,
  onCheckboxChange: fn,
  setVehicleData,
  vehicle
}) {
  var _a, _b, _c11;
  _s();
  const fetcher = useFetcher();
  const data = (_a = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a.results;
  const timeoutId = (0, import_react4.useRef)(null);
  const [licensePlate, setLicensePlate] = (0, import_react4.useState)((_b = vehicle == null ? void 0 : vehicle.licensePlate) != null ? _b : "");
  const [type, setType] = (0, import_react4.useState)((_c11 = vehicle == null ? void 0 : vehicle.type) != null ? _c11 : null);
  function onChange(e) {
    var _a2, _b2, _c12;
    const form = new FormData(e.currentTarget);
    const create = form.get("create") === "";
    const licensePlate2 = (_b2 = (_a2 = form.get("licensePlate")) == null ? void 0 : _a2.toString()) != null ? _b2 : "";
    const type2 = (_c12 = form.get("type")) == null ? void 0 : _c12.toString();
    setLicensePlate(licensePlate2);
    setType(type2);
    if (create && licensePlate2 && type2) {
      timeoutId.current && clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        setVehicleData({
          licensePlate: licensePlate2,
          type: type2,
          create
        });
      }, 1e3);
    }
  }
  function onCheckboxChange(e) {
    const checked = e.target.checked;
    if (checked && licensePlate && type) {
      setVehicleData({
        licensePlate,
        type,
        create: true
      });
    } else {
      setVehicleData(null);
    }
    fn(e);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Form, {
    onChange,
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Grid, {
      gridAutoRows: "min-content",
      placeContent: "center",
      gap: 4,
      children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(FormControl, {
        as: Flex,
        blockSize: "min-content",
        gap: 4,
        paddingBlockStart: [0, 0, 1],
        align: "center",
        children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormLabel, {
          margin: 0,
          htmlFor: "vehicle_create",
          children: "Adicionar novo ve\xEDculo?"
        }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Checkbox, {
          isChecked,
          onChange: onCheckboxChange,
          id: "vehicle_create",
          name: "create",
          size: "lg",
          justifySelf: "center"
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Flex, {
        flexDir: "column",
        gap: 6,
        children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormControl, {
          as: Grid,
          gridTemplateRows: "min-content",
          gridAutoFlow: ["row", "row", "column"],
          placeItems: "center",
          marginBlockStart: 8,
          gap: 4,
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Flex, {
            flexDir: "column",
            gap: 4,
            children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormLabel, {
              margin: 0,
              htmlFor: "vehicle_licensePlate",
              children: "Ve\xEDculo"
            }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Input, {
              id: "vehicle_licensePlate",
              name: "licensePlate",
              placeholder: "Placa",
              isDisabled: !isChecked,
              value: licensePlate != null ? licensePlate : ""
            })]
          })
        }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormControl, {
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Select, {
            isDisabled: !isChecked,
            id: "type",
            name: "type",
            placeholder: "Tipo do ve\xEDculo",
            value: type != null ? type : "",
            children: selectOptions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", {
              value: o == null ? void 0 : o.toString(),
              children: o
            }, o))
          })
        }), isChecked && (data == null ? void 0 : data.length) > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Alert, {
          status: "error",
          marginBlock: 4,
          children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AlertIcon, {}), "Essa placa j\xE1 existe"]
        })]
      })]
    })
  });
}
_s(NewVehicleForm, "YOXWuODYCJRjwGSBy568//7O/lw=", false, function() {
  return [useFetcher];
});
_c2 = NewVehicleForm;
function VehicleContent({
  setVehicleData,
  vehicle
}) {
  var _a, _b;
  _s2();
  const [isChecked, setIsChecked] = (0, import_react4.useState)(vehicle == null ? void 0 : vehicle.create);
  const fetcher = useFetcher();
  const results = (_b = (_a = fetcher.data) == null ? void 0 : _a.results) != null ? _b : null;
  const timeoutId = (0, import_react4.useRef)(null);
  function onQuery(e) {
    const licensePlate = e.target.value;
    timeoutId.current && clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      fetcher.submit({
        query: "vehicle",
        licensePlate
      }, {
        action: "/vehicle-search"
      });
    }, 1e3);
  }
  function onCheckboxChange(e) {
    setIsChecked(Boolean(e.target.checked));
  }
  function onClick(v) {
    setVehicleData({
      ...v,
      create: false
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Grid, {
    id: "vehicle",
    gridTemplateRows: "1fr auto",
    blockSize: "100%",
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Grid, {
      gridAutoRows: "min-content",
      paddingBlockEnd: [8],
      gap: 4,
      gridAutoFlow: ["row", "row", "column"],
      placeItems: ["center", "center", "start"],
      children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Flex, {
        flexDir: ["column"],
        position: "relative",
        _after: results && (results == null ? void 0 : results.length) > 0 ? {
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
        children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormControl, {
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Input, {
            placeholder: "procurar entidade",
            _placeholder: {
              textAlign: "center"
            },
            maxInlineSize: "280px",
            isDisabled: isChecked != null ? isChecked : false,
            marginInline: "auto",
            rounded: "full",
            onChange: onQuery
          })
        }), results && !isChecked && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, {
          children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Text, {
            inlineSize: "fit-content",
            marginInline: "auto",
            marginBlock: 4,
            fontSize: "sm",
            color: "gray.400",
            children: (results == null ? void 0 : results.length) === 0 ? "nenhum resultado encontrado :(" : `mostrando ${results == null ? void 0 : results.length} resultados`
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Grid, {
            gap: 4,
            maxBlockSize: "240px",
            overflow: "scroll",
            children: results == null ? void 0 : results.map((v, i) => {
              return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Flex, {
                inlineSize: "100%",
                flexDir: "column",
                gap: 6,
                children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(FormControl, {
                  as: Flex,
                  flexDir: "column",
                  alignItems: "center",
                  children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormLabel, {
                    children: "Placa"
                  }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Input, {
                    maxInlineSize: "200px",
                    marginBlockEnd: results.length - 1 === i ? 4 : 0,
                    onClick: () => onClick(v),
                    readOnly: true,
                    value: v.licensePlate,
                    type: "button",
                    borderColor: (vehicle == null ? void 0 : vehicle.licensePlate) ? "blue.400" : "gray.200",
                    _hover: {
                      borderColor: (vehicle == null ? void 0 : vehicle.licensePlate) ? "blue.400" : "gray.300"
                    },
                    focusBorderColor: (vehicle == null ? void 0 : vehicle.licensePlate) ? "blue.400" : "gray.300"
                  })]
                }), results.length - 1 !== i && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Divider, {
                  alignSelf: "center",
                  inlineSize: "80%"
                })]
              }, `${v.licensePlate} + ${i}`);
            })
          })]
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Box, {
        position: "relative",
        padding: 4,
        inlineSize: "60%",
        children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Divider, {}), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AbsoluteCenter, {
          bg: "white",
          px: "4",
          children: "ou"
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(NewVehicleForm, {
        vehicle: {
          licensePlate: vehicle == null ? void 0 : vehicle.licensePlate,
          type: vehicle == null ? void 0 : vehicle.type
        },
        isChecked: isChecked != null ? isChecked : false,
        onCheckboxChange,
        setVehicleData
      })]
    })
  });
}
_s2(VehicleContent, "KYIPPIxBz2bFuZyZ4fSLu0K7Ihs=", false, function() {
  return [useFetcher];
});
_c22 = VehicleContent;
var _c2;
var _c22;
$RefreshReg$(_c2, "NewVehicleForm");
$RefreshReg$(_c22, "VehicleContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NewWash/WashesContent/index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/NewWash/WashesContent/Container.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime8 = __toESM(require_jsx_runtime());

// app/components/WashBox/index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime7 = __toESM(require_jsx_runtime());

// app/components/LinkBox/index.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/LinkBox/Container.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
init_dist();
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/LinkBox/Container.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/LinkBox/Container.tsx"
  );
  import.meta.hot.lastModified = "1692216207030.7793";
}
function Container({
  to,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Grid, {
    minInlineSize: "180px",
    minBlockSize: "150px",
    padding: 4,
    gridTemplateColumns: "80% 20%",
    gridTemplateRows: "1fr",
    placeItems: "center",
    as: Link,
    to,
    border: "2px",
    borderColor: "blue.400",
    borderRadius: "lg",
    children
  });
}
_c3 = Container;
var _c3;
$RefreshReg$(_c3, "Container");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/LinkBox/Content.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/LinkBox/Content.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/LinkBox/Content.tsx"
  );
  import.meta.hot.lastModified = "1692216426967.9558";
}
function Content({
  children,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
    ...rest,
    children
  });
}
_c4 = Content;
var _c4;
$RefreshReg$(_c4, "Content");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/LinkBox/Icon.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/LinkBox/Icon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/LinkBox/Icon.tsx"
  );
  import.meta.hot.lastModified = "1692191178418.7026";
}
function Icon({
  icon
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Flex, {
    blockSize: "100%",
    justify: "center",
    align: "center",
    children: icon
  });
}
_c5 = Icon;
var _c5;
$RefreshReg$(_c5, "Icon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/LinkBox/Title.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/LinkBox/Title.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/LinkBox/Title.tsx"
  );
  import.meta.hot.lastModified = "1692191169610.6123";
}
function Title({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Text, {
    color: "gray.500",
    fontSize: "md",
    fontWeight: "bold",
    children
  });
}
_c6 = Title;
var _c6;
$RefreshReg$(_c6, "Title");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/LinkBox/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/LinkBox/index.ts"
  );
  import.meta.hot.lastModified = "1692191335164.5112";
}
var LinkBox = {
  Container,
  Content,
  Icon,
  Title
};

// node_modules/react-icons/fa/index.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function FaExternalLinkAlt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" } }] })(props);
}

// app/components/WashBox/index.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/WashBox/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/WashBox/index.tsx"
  );
  import.meta.hot.lastModified = "1692216957537.4563";
}
function WashBox({
  wash
}) {
  const title = dateManipulator.format(wash.scheduleDate, "d/LL");
  const date = dateManipulator.format(wash.scheduleDate, "d 'de' MMMM, eeee");
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(LinkBox.Container, {
    to: `/wash/${wash.id}`,
    children: [/* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(LinkBox.Content, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LinkBox.Title, {
        children: title
      }), /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, {
        fontSize: "lg",
        children: date
      })]
    }), /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LinkBox.Icon, {
      icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FaExternalLinkAlt, {
        size: 16
      })
    })]
  });
}
_c7 = WashBox;
var _c7;
$RefreshReg$(_c7, "WashBox");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NewWash/WashesContent/Container.tsx
var import_react12 = __toESM(require_react());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/NewWash/WashesContent/Container.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWash/WashesContent/Container.tsx"
  );
  import.meta.hot.lastModified = "1692325232605.5793";
}
function Container2({
  licensePlate,
  children
}) {
  _s3();
  const {
    data,
    submit,
    state
  } = useFetcher();
  (0, import_react12.useEffect)(() => {
    submit({
      licensePlate
    }, {
      action: "/washes-search"
    });
  }, [submit, licensePlate]);
  console.log(data);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Grid, {
    blockSize: "100%",
    gridTemplateRows: "1fr auto",
    children: (data == null ? void 0 : data.washes) ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Box, {
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Alert, {
          status: "info",
          children: [/* @__PURE__ */ (0, import_jsx_runtime8.jsx)(AlertIcon, {}), /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Text, {
            children: ["H\xE1 lavagens ativas para o ve\xEDculo com placa", /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(LinkHighlighted, {
              to: `/vehicle/${licensePlate}`,
              children: licensePlate
            })]
          })]
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Grid, {
        paddingBlockStart: 6,
        gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
        gap: 4,
        children: (data == null ? void 0 : data.washes) && (data == null ? void 0 : data.washes.map((w) => {
          return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(WashBox, {
            wash: w
          }, w.id);
        }))
      })]
    }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, {
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Grid, {
        gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
        gap: 10,
        paddingBlockEnd: 8,
        placeItems: "center",
        children
      })
    })
  });
}
_s3(Container2, "zyTC4K4+ms2/WCH6qzSdgR9Y/RM=", false, function() {
  return [useFetcher];
});
_c8 = Container2;
var _c8;
$RefreshReg$(_c8, "Container");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NewWash/WashesContent/Form.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/NewWash/WashesContent/Form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWash/WashesContent/Form.tsx"
  );
  import.meta.hot.lastModified = "1692326308520.7886";
}
function Form2({
  id,
  onChange,
  title,
  defaultDate,
  minDate
}) {
  function onFormChange(e) {
    const form = new FormData(e.currentTarget);
    const scheduleDate = form.get("scheduleDate");
    const note = form.get("note");
    const isCompleted = form.get("isCompleted") === "";
    const id2 = form.get("id");
    console.log(id2, isCompleted, note, scheduleDate);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Form, {
    onChange: onFormChange,
    style: {
      blockSize: "100%",
      inlineSize: "100%"
    },
    children: [/* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Input, {
      type: "hidden",
      name: "id",
      value: id
    }), /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Flex, {
      maxInlineSize: "360px",
      flexDir: "column",
      gap: 6,
      marginInline: "auto",
      children: [/* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Text, {
        marginInline: "auto",
        marginBlockStart: 2,
        fontSize: "lg",
        children: title
      }), /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(FormControl, {
        as: Flex,
        flexDir: "column",
        align: "center",
        children: [/* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FormLabel, {
          inlineSize: "fit-content",
          children: "data"
        }), /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Input, {
          name: "scheduleDate",
          inlineSize: "180px",
          type: "date",
          min: minDate,
          defaultValue: defaultDate
        }), /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FormHelperText, {
          color: "gray.400",
          children: "m\xEAs/dia/ano"
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(FormControl, {
        children: [/* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FormLabel, {
          inlineSize: "fit-content",
          marginInline: "auto",
          children: "notas"
        }), /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Textarea, {
          name: "note",
          noOfLines: 6,
          placeholder: "escreva notas sobre esta lavagem",
          resize: "none"
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(FormControl, {
        as: Flex,
        inlineSize: "fit-content",
        marginInline: "auto",
        align: "center",
        children: [/* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FormLabel, {
          marginBlock: 0,
          marginInlineEnd: 6,
          children: "lavagem feita?"
        }), /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Checkbox, {
          name: "isCompleted"
        })]
      })]
    })]
  });
}
_c9 = Form2;
var _c9;
$RefreshReg$(_c9, "Form");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NewWash/WashesContent/index.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWash/WashesContent/index.tsx"
  );
  import.meta.hot.lastModified = "1692324856892.7954";
}
var washContent = {
  Container: Container2,
  Form: Form2
};

// browser-route-module:routes/_auth.new-wash._index.tsx
var import_react18 = __toESM(require_react());

// app/components/NewWash/footer.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/NewWash/footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWash/footer.tsx"
  );
  import.meta.hot.lastModified = "1692315031423.708";
}
function NewWashFooter({
  goNext,
  goBack,
  containerProps,
  isNextButtonDisable,
  isPreviousButtonDisable
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Flex, {
    placeSelf: "flex-end",
    blockSize: "100%",
    align: "center",
    paddingBlockStart: 8,
    ...containerProps,
    children: [/* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
      colorScheme: "purple",
      variant: "ghost",
      mr: 3,
      size: "sm",
      onClick: () => goNext(),
      isDisabled: isNextButtonDisable,
      children: "pular"
    }), /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
      colorScheme: "gray",
      variant: "ghost",
      mr: 3,
      marginInlineEnd: "0",
      onClick: () => goBack(),
      isDisabled: isPreviousButtonDisable,
      children: "voltar"
    }), /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Divider, {
      blockSize: "100%",
      orientation: "vertical",
      inlineSize: "8px",
      borderColor: "gray.400"
    }), /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
      name: "step",
      variant: "ghost",
      colorScheme: "blue",
      onClick: () => goNext(),
      isDisabled: isNextButtonDisable,
      children: "pr\xF3ximo"
    })]
  });
}
_c10 = NewWashFooter;
var _c10;
$RefreshReg$(_c10, "NewWashFooter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/hooks/useDate.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/hooks/useDate.ts"
  );
  import.meta.hot.lastModified = "1692279809093.7737";
}
function useDate() {
  function format(date, format2) {
    return dateManipulator.format(date, format2);
  }
  function parseDateToString(date) {
    return dateManipulator.parseDateToString(date);
  }
  function parseISOStringToDate(date) {
    return dateManipulator.parseISOStringToDate(date);
  }
  function addDays(date, days) {
    let formattedDate;
    if (date instanceof Date) {
      formattedDate = parseDateToString(date);
      const newDate2 = dateManipulator.addDaysToDate(formattedDate, days);
      return parseISOStringToDate(newDate2);
    }
    const newDate = dateManipulator.addDaysToDate(date, days);
    return parseISOStringToDate(newDate);
  }
  return { parseDateToString, parseISOStringToDate, addDays, format };
}

// browser-route-module:routes/_auth.new-wash._index.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth.new-wash._index.tsx"
  );
}
function stdin_default() {
  const { Stepper: Stepper3, steps: steps2, activeStep, goToPrevious, goToNext, setActiveStep } = useStepper();
  const { addDays, format } = useDate();
  const baseDate = /* @__PURE__ */ new Date();
  const minDate = format(baseDate, "yyyy-MM-dd");
  const firstDate = format(baseDate, "yyyy-MM-dd");
  const secDate = format(addDays(baseDate, 7), "yyyy-MM-dd");
  const thirdDate = format(addDays(baseDate, 14), "yyyy-MM-dd");
  const fourthDate = format(addDays(baseDate, 28), "yyyy-MM-dd");
  const defaultValues = [
    {
      id: 1,
      scheduleDate: firstDate,
      note: "",
      isCompleted: false,
      title: "primeira lavagem"
    },
    {
      id: 2,
      scheduleDate: secDate,
      note: "",
      isCompleted: false,
      title: "segunda lavagem"
    },
    {
      id: 3,
      scheduleDate: thirdDate,
      note: "",
      isCompleted: false,
      title: "terceira lavagem"
    },
    {
      id: 4,
      scheduleDate: fourthDate,
      note: "",
      isCompleted: false,
      title: "quarta lavagem"
    }
  ];
  const [vehicle, setVehicle] = (0, import_react18.useState)(void 0);
  const [washes, setWashes] = (0, import_react18.useState)(defaultValues);
  function setVehicleData(v) {
    setVehicle(v);
  }
  function setWashesData(w) {
    setWashes(w);
  }
  const isVehicleDataValid = vehicle?.licensePlate && vehicle?.type && typeof vehicle?.create === "boolean";
  console.log(vehicle);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    Grid,
    {
      paddingInline: [4, 8],
      gridTemplateRows: "1fr auto",
      inlineSize: "100%",
      children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        Grid,
        {
          gridAutoFlow: "column",
          gap: "1.125em",
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: "100%",
          marginInline: [0, 0, 4],
          paddingBlockStart: [4, 4, 8],
          paddingBlockEnd: 8,
          blockSize: "100%",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Stepper3, { activeStep, steps: steps2 }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Grid, { blockSize: "100%", inlineSize: "100%", gridTemplateRows: "auto 1fr", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                Text,
                {
                  placeSelf: "center",
                  as: "h1",
                  fontSize: "2xl",
                  marginBlockEnd: 4,
                  whiteSpace: "nowrap",
                  children: steps2[activeStep].modalTitle
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
                Box,
                {
                  inlineSize: "100%",
                  marginInline: "auto",
                  maxInlineSize: "container.md",
                  children: [
                    activeStep === 0 && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                      VehicleContent,
                      {
                        vehicle,
                        setVehicleData
                      }
                    ),
                    activeStep === 1 && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(washContent.Container, { licensePlate: vehicle?.licensePlate ?? "", children: washes?.map((w) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                      Box,
                      {
                        maxInlineSize: "320px",
                        marginInline: [0, 8],
                        border: "4px",
                        borderColor: "blue.400",
                        borderRadius: "lg",
                        paddingInline: 4,
                        paddingBlock: 8,
                        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                          washContent.Form,
                          {
                            id: w.id,
                            onChange: () => {
                            },
                            title: w.title,
                            defaultDate: w.scheduleDate,
                            minDate,
                            note: w.note ?? ""
                          }
                        )
                      },
                      w.scheduleDate
                    )) })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                NewWashFooter,
                {
                  isNextButtonDisable: !isVehicleDataValid,
                  isPreviousButtonDisable: steps2.length <= activeStep,
                  goBack: goToPrevious,
                  goNext: goToNext
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
export {
  stdin_default as default
};
//# sourceMappingURL=http://localhost:3001/build/routes/_auth.new-wash._index-NZ3RSRGR.js.map
