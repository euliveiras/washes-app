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
  InputGroup,
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
var import_jsx_runtime16 = __toESM(require_jsx_runtime());

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
  import.meta.hot.lastModified = "1692382515398.999";
}
function Stepper2({
  steps: steps2,
  activeStep
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
    index: activeStep,
    orientation: "vertical",
    blockSize: "100%",
    size: ["md", "md", "lg"],
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
var import_jsx_runtime7 = __toESM(require_jsx_runtime());

// app/components/WashBox/index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime6 = __toESM(require_jsx_runtime());

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
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Grid, {
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
_c2 = Container;
var _c2;
$RefreshReg$(_c2, "Container");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/LinkBox/Content.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Box, {
    ...rest,
    children
  });
}
_c3 = Content;
var _c3;
$RefreshReg$(_c3, "Content");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/LinkBox/Icon.tsx
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Flex, {
    blockSize: "100%",
    justify: "center",
    align: "center",
    children: icon
  });
}
_c4 = Icon;
var _c4;
$RefreshReg$(_c4, "Icon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/LinkBox/Title.tsx
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Text, {
    color: "gray.500",
    fontSize: "md",
    fontWeight: "bold",
    children
  });
}
_c5 = Title;
var _c5;
$RefreshReg$(_c5, "Title");
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(LinkBox.Container, {
    to: `/wash/${wash.id}`,
    children: [/* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(LinkBox.Content, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime6.jsx)(LinkBox.Title, {
        children: title
      }), /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Text, {
        fontSize: "lg",
        children: date
      })]
    }), /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(LinkBox.Icon, {
      icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FaExternalLinkAlt, {
        size: 16
      })
    })]
  });
}
_c6 = WashBox;
var _c6;
$RefreshReg$(_c6, "WashBox");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NewWash/WashesContent/Container.tsx
var import_react9 = __toESM(require_react());
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
var _s = $RefreshSig$();
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
  _s();
  const {
    data,
    submit,
    state
  } = useFetcher();
  (0, import_react9.useEffect)(() => {
    submit({
      licensePlate
    }, {
      action: "/washes-search"
    });
  }, [submit, licensePlate]);
  console.log(data);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Grid, {
    blockSize: "100%",
    gridTemplateRows: "1fr auto",
    children: (data == null ? void 0 : data.washes) ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Box, {
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Alert, {
          status: "info",
          children: [/* @__PURE__ */ (0, import_jsx_runtime7.jsx)(AlertIcon, {}), /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Text, {
            children: ["H\xE1 lavagens ativas para o ve\xEDculo com placa", /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LinkHighlighted, {
              to: `/vehicle/${licensePlate}`,
              children: licensePlate
            })]
          })]
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Grid, {
        paddingBlockStart: 6,
        gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
        gap: 4,
        children: (data == null ? void 0 : data.washes) && (data == null ? void 0 : data.washes.map((w) => {
          return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(WashBox, {
            wash: w
          }, w.id);
        }))
      })]
    }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, {
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Grid, {
        gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
        gap: 10,
        paddingBlockEnd: 8,
        placeItems: "center",
        children
      })
    })
  });
}
_s(Container2, "zyTC4K4+ms2/WCH6qzSdgR9Y/RM=", false, function() {
  return [useFetcher];
});
_c7 = Container2;
var _c7;
$RefreshReg$(_c7, "Container");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NewWash/WashesContent/Form.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
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
  import.meta.hot.lastModified = "1692361693063.9363";
}
function Form2({
  isCompleted,
  id,
  onChange,
  note,
  title,
  defaultDate,
  minDate
}) {
  function onFormChange(e) {
    var _a, _b, _c16, _d, _e, _f;
    const form = new FormData(e.currentTarget);
    const scheduleDate = (_b = (_a = form.get("scheduleDate")) == null ? void 0 : _a.toString()) != null ? _b : "";
    const note2 = (_d = (_c16 = form.get("note")) == null ? void 0 : _c16.toString()) != null ? _d : "";
    const isCompleted2 = form.get("isCompleted") === "";
    const id2 = (_f = (_e = form.get("id")) == null ? void 0 : _e.toString()) != null ? _f : "";
    onChange({
      note: note2,
      isCompleted: isCompleted2,
      id: Number(id2),
      scheduleDate,
      title
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Form, {
    onChange: onFormChange,
    style: {
      blockSize: "100%",
      inlineSize: "100%"
    },
    children: [/* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Input, {
      type: "hidden",
      name: "id",
      value: id
    }), /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Flex, {
      maxInlineSize: "360px",
      flexDir: "column",
      gap: 6,
      marginInline: "auto",
      children: [/* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Text, {
        marginInline: "auto",
        marginBlockStart: 2,
        fontSize: "lg",
        children: title
      }), /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(FormControl, {
        as: Flex,
        flexDir: "column",
        align: "center",
        children: [/* @__PURE__ */ (0, import_jsx_runtime8.jsx)(FormLabel, {
          inlineSize: "fit-content",
          children: "data"
        }), /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Input, {
          name: "scheduleDate",
          inlineSize: "180px",
          type: "date",
          min: minDate,
          defaultValue: defaultDate
        }), /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(FormHelperText, {
          color: "gray.400",
          children: "m\xEAs/dia/ano"
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(FormControl, {
        children: [/* @__PURE__ */ (0, import_jsx_runtime8.jsx)(FormLabel, {
          inlineSize: "fit-content",
          marginInline: "auto",
          children: "notas"
        }), /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Textarea, {
          name: "note",
          noOfLines: 6,
          placeholder: "escreva notas sobre esta lavagem",
          resize: "none",
          defaultValue: note
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(FormControl, {
        as: Flex,
        inlineSize: "fit-content",
        marginInline: "auto",
        align: "center",
        children: [/* @__PURE__ */ (0, import_jsx_runtime8.jsx)(FormLabel, {
          marginBlock: 0,
          marginInlineEnd: 6,
          children: "lavagem feita?"
        }), /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Checkbox, {
          defaultChecked: isCompleted,
          name: "isCompleted"
        })]
      })]
    })]
  });
}
_c8 = Form2;
var _c8;
$RefreshReg$(_c8, "Form");
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

// app/components/NewWash/VehicleContent/index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/NewWash/VehicleContent/Container.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime14 = __toESM(require_jsx_runtime());

// app/components/NewWash/VehicleContent/NewVehicleForm.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var import_react15 = __toESM(require_react());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/NewWash/VehicleContent/NewVehicleForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWash/VehicleContent/NewVehicleForm.tsx"
  );
  import.meta.hot.lastModified = "1692384235734.7947";
}
var selectOptions = ["Extra leve", "Leve", "Vuc", "Toco", "Truck", "Bitruck", "Carreta"];
function NewVehicleForm({
  vehicle,
  onChange
}) {
  _s2();
  const timeoutId = (0, import_react15.useRef)(null);
  const secondTimeOutId = (0, import_react15.useRef)(null);
  const {
    data,
    submit
  } = useFetcher();
  const isDisabled = !vehicle.create;
  const error = (data == null ? void 0 : data.results.length) > 0 ? {
    message: "Placa j\xE1 existe"
  } : null;
  function onInputChange(e) {
    secondTimeOutId.current && clearTimeout(secondTimeOutId.current);
    secondTimeOutId.current = setTimeout(() => {
      submit({
        query: "vehicle",
        licensePlate: e.target.value
      }, {
        action: "/vehicle-search"
      });
    }, 1e3);
  }
  console.log(data);
  function onFormChange(e) {
    var _a, _b, _c16;
    const form = new FormData(e.currentTarget);
    const create = form.get("create") === "";
    const licensePlate = (_b = (_a = form.get("licensePlate")) == null ? void 0 : _a.toString()) != null ? _b : "";
    const type = (_c16 = form.get("type")) == null ? void 0 : _c16.toString();
    if (create) {
      if (!licensePlate && !type) {
        onChange({
          licensePlate: "",
          type: "",
          create
        });
        return;
      }
      timeoutId.current && clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        onChange({
          licensePlate,
          type,
          create
        });
      }, 1e3);
    } else {
      onChange({
        licensePlate: "",
        type: "",
        create
      });
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Form, {
    onChange: onFormChange,
    children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Grid, {
      gridAutoRows: "min-content",
      placeContent: "center",
      gap: 4,
      children: [/* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(FormControl, {
        as: Flex,
        blockSize: "min-content",
        gap: 4,
        paddingBlockStart: [0, 0, 1],
        align: "center",
        justify: "center",
        children: [/* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FormLabel, {
          margin: 0,
          htmlFor: "vehicle_create",
          children: "Adicionar novo ve\xEDculo?"
        }), /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Checkbox, {
          defaultChecked: vehicle.create,
          id: "vehicle_create",
          name: "create",
          size: "lg",
          justifySelf: "center"
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Flex, {
        flexDir: "column",
        gap: 6,
        children: [/* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FormControl, {
          as: Grid,
          gridTemplateRows: "min-content",
          gridAutoFlow: ["row", "row", "column"],
          placeItems: "center",
          marginBlockStart: 8,
          gap: 4,
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Flex, {
            flexDir: "column",
            gap: 4,
            children: [/* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FormLabel, {
              margin: 0,
              marginInline: "auto",
              htmlFor: "vehicle_licensePlate",
              children: "Ve\xEDculo"
            }), /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Input, {
              id: "vehicle_licensePlate",
              name: "licensePlate",
              placeholder: "Placa",
              isDisabled,
              defaultValue: vehicle.licensePlate,
              onChange: onInputChange
            })]
          })
        }), /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FormControl, {
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Select, {
            isDisabled,
            id: "type",
            name: "type",
            placeholder: "Tipo do ve\xEDculo",
            defaultValue: vehicle.type,
            children: selectOptions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", {
              value: o == null ? void 0 : o.toString(),
              children: o
            }, o))
          })
        }), vehicle.create && error && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Alert, {
          status: "error",
          marginBlock: 4,
          children: [/* @__PURE__ */ (0, import_jsx_runtime9.jsx)(AlertIcon, {}), error.message]
        })]
      })]
    })
  });
}
_s2(NewVehicleForm, "JQ1F76xtZhIZLD1XtNxuVGnFLIE=", false, function() {
  return [useFetcher];
});
_c9 = NewVehicleForm;
var _c9;
$RefreshReg$(_c9, "NewVehicleForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NewWash/VehicleContent/VehicleDivider.tsx
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
    window.$RefreshRuntime$.register(type, '"app/components/NewWash/VehicleContent/VehicleDivider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWash/VehicleContent/VehicleDivider.tsx"
  );
  import.meta.hot.lastModified = "1692384253975.0972";
}
function VehicleDivider() {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Box, {
    position: "relative",
    padding: 8,
    inlineSize: "100%",
    maxInlineSize: "360px",
    children: [/* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Divider, {}), /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AbsoluteCenter, {
      bg: "white",
      px: "4",
      children: "ou"
    })]
  });
}
_c10 = VehicleDivider;
var _c10;
$RefreshReg$(_c10, "VehicleDivider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NewWash/VehicleContent/VehicleSearch.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime13 = __toESM(require_jsx_runtime());

// app/components/SearchEntity/index.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/SearchEntity/Results.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/SearchEntity/Results.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/SearchEntity/Results.tsx"
  );
  import.meta.hot.lastModified = "1692396223563.8762";
}
function Results({
  show,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Flex, {
    inlineSize: "100%",
    flexDir: ["column"],
    position: "relative",
    _after: show ? {
      content: "''",
      display: "block",
      position: "absolute",
      insetInline: 0,
      bottom: 0,
      zIndex: 1,
      pointerEvents: "none",
      backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, 1) 90%)",
      blockSize: 12
    } : {},
    gap: 4,
    ...props,
    children
  });
}
_c11 = Results;
var _c11;
$RefreshReg$(_c11, "Results");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/SearchEntity/SearchInput.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var import_react19 = __toESM(require_react());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/SearchEntity/SearchInput.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/SearchEntity/SearchInput.tsx"
  );
  import.meta.hot.lastModified = "1692370842709.1082";
}
function SearchInput({
  onChange,
  ...rest
}) {
  _s3();
  const timeoutId = (0, import_react19.useRef)(null);
  function onInputQueryChange(e) {
    const value = e.target.value;
    timeoutId.current && clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => onChange(value), 1e3);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(FormControl, {
    children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(InputGroup, {
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Input, {
        rounded: "full",
        onChange: onInputQueryChange,
        ...rest
      })
    })
  });
}
_s3(SearchInput, "5QBhy9IqvyfR8O0G07NTugK3hzU=");
_c12 = SearchInput;
var _c12;
$RefreshReg$(_c12, "SearchInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/SearchEntity/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/SearchEntity/index.ts"
  );
  import.meta.hot.lastModified = "1692370203083.2559";
}
var searchEntity = {
  Input: SearchInput,
  Results
};

// app/components/NewWash/VehicleContent/VehicleSearch.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/NewWash/VehicleContent/VehicleSearch.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWash/VehicleContent/VehicleSearch.tsx"
  );
  import.meta.hot.lastModified = "1692387653391.4963";
}
function VehicleSearch({
  vehicle,
  setVehicle
}) {
  var _a, _b;
  _s4();
  const fetcher = useFetcher();
  const data = (_b = (_a = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a.results) != null ? _b : null;
  function onQuery(e) {
    fetcher.submit({
      query: "vehicle",
      licensePlate: e
    }, {
      action: "/vehicle-search"
    });
  }
  function onClick(e) {
    setVehicle({
      ...e,
      create: false
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Grid, {
    gap: 4,
    gridAutoFlow: "row",
    placeItems: ["center", "center", "center"],
    maxInlineSize: "200px",
    children: [/* @__PURE__ */ (0, import_jsx_runtime13.jsx)(searchEntity.Input, {
      onChange: onQuery,
      isDisabled: vehicle.create
    }), (fetcher == null ? void 0 : fetcher.data) && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Text, {
        inlineSize: "fit-content",
        marginInline: "auto",
        marginBlockStart: 4,
        fontSize: "sm",
        color: "gray.400",
        children: (data == null ? void 0 : data.length) === 0 ? "nenhum resultado encontrado :(" : `mostrando ${data == null ? void 0 : data.length} resultados`
      }), /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(searchEntity.Results, {
        show: fetcher == null ? void 0 : fetcher.data,
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Grid, {
          gap: 4,
          maxBlockSize: "260px",
          overflow: "scroll",
          children: data == null ? void 0 : data.map((v, i) => {
            return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Flex, {
              inlineSize: "100%",
              flexDir: "column",
              gap: 6,
              children: [/* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(FormControl, {
                as: Flex,
                flexDir: "column",
                alignItems: "center",
                children: [/* @__PURE__ */ (0, import_jsx_runtime13.jsx)(FormLabel, {
                  children: "Placa"
                }), /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Input, {
                  maxInlineSize: "200px",
                  marginBlockEnd: data.length - 1 === i ? 4 : 0,
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
              }), (data == null ? void 0 : data.length) - 1 !== i && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Divider, {
                alignSelf: "center",
                inlineSize: "80%"
              })]
            }, `${v.licensePlate} + ${i}`);
          })
        })
      })]
    })]
  });
}
_s4(VehicleSearch, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c13 = VehicleSearch;
var _c13;
$RefreshReg$(_c13, "VehicleSearch");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NewWash/VehicleContent/Container.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/NewWash/VehicleContent/Container.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWash/VehicleContent/Container.tsx"
  );
  import.meta.hot.lastModified = "1692384594884.8096";
}
function Container3({
  setVehicleData,
  vehicle
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Grid, {
    id: "vehicle",
    blockSize: "100%",
    inlineSize: "100%",
    paddingInline: 4,
    alignContent: "start",
    placeItems: "center",
    gap: 4,
    gridAutoFlow: ["row", "row", "column"],
    alignItems: "start",
    children: [/* @__PURE__ */ (0, import_jsx_runtime14.jsx)(VehicleSearch, {
      setVehicle: setVehicleData,
      vehicle
    }), /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(VehicleDivider, {}), /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(NewVehicleForm, {
      vehicle,
      onChange: setVehicleData
    })]
  });
}
_c14 = Container3;
var _c14;
$RefreshReg$(_c14, "Container");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NewWash/VehicleContent/index.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWash/VehicleContent/index.tsx"
  );
  import.meta.hot.lastModified = "1692377474831.984";
}
var defaultVehicleState = {
  licensePlate: "",
  type: "",
  create: false
};
var VehicleContent = Container3;

// browser-route-module:routes/_auth.new-wash._index.tsx
var import_react25 = __toESM(require_react());

// app/components/NewWash/footer.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Flex, {
    placeSelf: "flex-end",
    blockSize: "100%",
    align: "center",
    paddingBlockStart: 8,
    ...containerProps,
    children: [/* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, {
      colorScheme: "purple",
      variant: "ghost",
      mr: 3,
      size: "sm",
      onClick: () => goNext(),
      isDisabled: isNextButtonDisable,
      children: "pular"
    }), /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, {
      colorScheme: "gray",
      variant: "ghost",
      mr: 3,
      marginInlineEnd: "0",
      onClick: () => goBack(),
      isDisabled: isPreviousButtonDisable,
      children: "voltar"
    }), /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Divider, {
      blockSize: "100%",
      orientation: "vertical",
      inlineSize: "8px",
      borderColor: "gray.400"
    }), /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, {
      name: "step",
      variant: "ghost",
      colorScheme: "blue",
      onClick: () => goNext(),
      isDisabled: isNextButtonDisable,
      children: "pr\xF3ximo"
    })]
  });
}
_c15 = NewWashFooter;
var _c15;
$RefreshReg$(_c15, "NewWashFooter");
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
  const [vehicle, setVehicle] = (0, import_react25.useState)(defaultVehicleState);
  const [washes, setWashes] = (0, import_react25.useState)(defaultValues);
  function setVehicleData(v) {
    setVehicle(v);
  }
  function setWashesData(w) {
    setWashes((s) => {
      const arr = [...s];
      const index = s?.findIndex((v) => v.id === w.id);
      if (index > -1) {
        arr[index] = w;
      }
      return arr;
    });
  }
  const isVehicleDataValid = vehicle.licensePlate && vehicle.type && typeof vehicle.create === "boolean";
  console.log(vehicle);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Grid, { paddingInline: 4, gridTemplateRows: "1fr auto", inlineSize: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    Grid,
    {
      gridAutoFlow: "column",
      gap: 1,
      gridTemplateColumns: "auto 1fr",
      gridTemplateRows: "100%",
      paddingBlockStart: [4, 4, 8],
      paddingBlockEnd: 8,
      blockSize: "100%",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Stepper3, { activeStep, steps: steps2 }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
          Grid,
          {
            blockSize: "100%",
            gridTemplateColumns: "1fr",
            inlineSize: "100%",
            gridTemplateRows: "auto 1fr",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                Text,
                {
                  placeSelf: "center",
                  as: "h1",
                  fontSize: ["xl", "xl", "2xl"],
                  marginBlockEnd: 4,
                  whiteSpace: "nowrap",
                  children: steps2[activeStep].modalTitle
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Box, { inlineSize: "100%", marginInline: "auto", children: [
                activeStep === 0 && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  VehicleContent,
                  {
                    setVehicleData,
                    vehicle
                  }
                ),
                activeStep === 1 && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(washContent.Container, { licensePlate: vehicle?.licensePlate ?? "", children: washes?.map((w) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  Box,
                  {
                    maxInlineSize: "320px",
                    marginInline: [0, 8],
                    border: "4px",
                    borderColor: "blue.400",
                    borderRadius: "lg",
                    paddingInline: 4,
                    paddingBlock: 8,
                    children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                      washContent.Form,
                      {
                        id: w.id,
                        onChange: setWashesData,
                        isCompleted: w.isCompleted,
                        title: w.title,
                        defaultDate: w.scheduleDate,
                        minDate,
                        note: w.note ?? ""
                      }
                    )
                  },
                  w.scheduleDate
                )) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                NewWashFooter,
                {
                  isNextButtonDisable: !isVehicleDataValid,
                  isPreviousButtonDisable: steps2.length <= activeStep,
                  goBack: goToPrevious,
                  goNext: goToNext
                }
              )
            ]
          }
        )
      ]
    }
  ) });
}
export {
  stdin_default as default
};
//# sourceMappingURL=http://localhost:3001/build/routes/_auth.new-wash._index-4BFUIWCY.js.map
