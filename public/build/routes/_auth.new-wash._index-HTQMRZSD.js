import {
  LinkHighlighted
} from "/build/_shared/chunk-DLIGFWH4.js";
import {
  addDays,
  dateManipulator,
  format,
  useDate
} from "/build/_shared/chunk-FZFY6NW6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  GenIcon,
  MdCheck,
  MdDirectionsCarFilled,
  MdPerson2,
  MdWaterDrop
} from "/build/_shared/chunk-XO5BRP32.js";
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
  useSteps,
  useToast
} from "/build/_shared/chunk-HKFCHMVY.js";
import {
  useActionData,
  useFetcher
} from "/build/_shared/chunk-RPYEFABZ.js";
import "/build/_shared/chunk-6Y4MOXXW.js";
import {
  Form,
  Link,
  init_dist,
  require_jsx_dev_runtime,
  require_react,
  useNavigate,
  useSubmit
} from "/build/_shared/chunk-EDULEWIV.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/NewWash/Stepper/Stepper.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Stepper2({ steps: steps2, activeStep, setActiveStep }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Stepper,
    {
      index: activeStep,
      orientation: "vertical",
      blockSize: "100%",
      size: ["md", "md", "lg"],
      children: steps2.map(({ IconIncomplete, IconActive, label }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Step, { onClick: (e) => setActiveStep(index), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StepIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          StepStatus,
          {
            complete: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StepIcon, {}, void 0, false, {
              fileName: "app/components/NewWash/Stepper/Stepper.tsx",
              lineNumber: 31,
              columnNumber: 25
            }, this),
            incomplete: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconIncomplete, { size: 20 }, void 0, false, {
              fileName: "app/components/NewWash/Stepper/Stepper.tsx",
              lineNumber: 32,
              columnNumber: 27
            }, this),
            active: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconActive, { size: 20 }, void 0, false, {
              fileName: "app/components/NewWash/Stepper/Stepper.tsx",
              lineNumber: 33,
              columnNumber: 23
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/Stepper/Stepper.tsx",
            lineNumber: 30,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/NewWash/Stepper/Stepper.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Box,
          {
            flexShrink: "0",
            paddingBlockStart: 1,
            display: ["none", "none", "none", "block"],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StepTitle, { children: label }, void 0, false, {
              fileName: "app/components/NewWash/Stepper/Stepper.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/Stepper/Stepper.tsx",
            lineNumber: 37,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StepSeparator, {}, void 0, false, {
          fileName: "app/components/NewWash/Stepper/Stepper.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this)
      ] }, index, true, {
        fileName: "app/components/NewWash/Stepper/Stepper.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this))
    },
    void 0,
    false,
    {
      fileName: "app/components/NewWash/Stepper/Stepper.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/Stepper/index.ts
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

// app/components/LinkBox/Container.tsx
init_dist();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Container({ to, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    Grid,
    {
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
    },
    void 0,
    false,
    {
      fileName: "app/components/LinkBox/Container.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/components/LinkBox/Content.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Content({ children, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { ...rest, children }, void 0, false, {
    fileName: "app/components/LinkBox/Content.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/LinkBox/Icon.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function Icon({ icon }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { blockSize: "100%", justify: "center", align: "center", children: icon }, void 0, false, {
    fileName: "app/components/LinkBox/Icon.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/LinkBox/Title.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Title({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { color: "gray.500", fontSize: "md", fontWeight: "bold", children }, void 0, false, {
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

// node_modules/react-icons/fa/index.esm.js
function FaExternalLinkAlt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" } }] })(props);
}

// app/components/WashBox/index.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function WashBox({ wash }) {
  const title = dateManipulator.format(wash.scheduleDate, "d/LL");
  const date = dateManipulator.format(wash.scheduleDate, "d 'de' MMMM, eeee");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LinkBox.Container, { to: `/wash/${wash.id}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LinkBox.Content, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LinkBox.Title, { children: title }, void 0, false, {
        fileName: "app/components/WashBox/index.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { fontSize: "lg", children: date }, void 0, false, {
        fileName: "app/components/WashBox/index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/WashBox/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LinkBox.Icon, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(FaExternalLinkAlt, { size: 16 }, void 0, false, {
      fileName: "app/components/WashBox/index.tsx",
      lineNumber: 23,
      columnNumber: 27
    }, this) }, void 0, false, {
      fileName: "app/components/WashBox/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/WashBox/index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/WashesContent/Container.tsx
var import_react9 = __toESM(require_react());
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function Container2({
  addError,
  removeError,
  licensePlate,
  children
}) {
  const { data, submit } = useFetcher();
  (0, import_react9.useEffect)(() => {
    submit({ licensePlate }, { action: "/washes-search" });
  }, [submit, licensePlate]);
  (0, import_react9.useEffect)(() => {
    if ((data == null ? void 0 : data.washes.length) > 0)
      addError();
    else
      removeError();
  }, [data, addError, removeError]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Grid, { blockSize: "100%", gridTemplateRows: "1fr auto", children: (data == null ? void 0 : data.washes.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Alert, { status: "info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AlertIcon, {}, void 0, false, {
        fileName: "app/components/NewWash/WashesContent/Container.tsx",
        lineNumber: 39,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { children: [
        "H\xE1 lavagens ativas para o ve\xEDculo com placa",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LinkHighlighted, { to: `/vehicle/${licensePlate}`, children: licensePlate }, void 0, false, {
          fileName: "app/components/NewWash/WashesContent/Container.tsx",
          lineNumber: 42,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/NewWash/WashesContent/Container.tsx",
        lineNumber: 40,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NewWash/WashesContent/Container.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/NewWash/WashesContent/Container.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      Grid,
      {
        paddingBlockStart: 6,
        gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
        gap: 4,
        children: (data == null ? void 0 : data.washes) && (data == null ? void 0 : data.washes.map((w) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(WashBox, { wash: w }, w.id, false, {
            fileName: "app/components/NewWash/WashesContent/Container.tsx",
            lineNumber: 55,
            columnNumber: 24
          }, this);
        }))
      },
      void 0,
      false,
      {
        fileName: "app/components/NewWash/WashesContent/Container.tsx",
        lineNumber: 48,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/NewWash/WashesContent/Container.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    Grid,
    {
      gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
      gap: 10,
      paddingBlockEnd: 8,
      placeItems: "center",
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/NewWash/WashesContent/Container.tsx",
      lineNumber: 61,
      columnNumber: 11
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/NewWash/WashesContent/Container.tsx",
    lineNumber: 60,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/NewWash/WashesContent/Container.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/WashesContent/Form.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
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
    var _a, _b, _c, _d, _e, _f;
    const form = new FormData(e.currentTarget);
    const scheduleDate = (_b = (_a = form.get("scheduleDate")) == null ? void 0 : _a.toString()) != null ? _b : "";
    const note2 = (_d = (_c = form.get("note")) == null ? void 0 : _c.toString()) != null ? _d : "";
    const isCompleted2 = form.get("isCompleted") === "";
    const id2 = (_f = (_e = form.get("id")) == null ? void 0 : _e.toString()) != null ? _f : "";
    onChange({ note: note2, isCompleted: isCompleted2, id: Number(id2), scheduleDate, title });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    Form,
    {
      onChange: onFormChange,
      style: { blockSize: "100%", inlineSize: "100%" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Input, { type: "hidden", name: "id", value: id }, void 0, false, {
          fileName: "app/components/NewWash/WashesContent/Form.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          Flex,
          {
            maxInlineSize: "360px",
            flexDir: "column",
            gap: 6,
            marginInline: "auto",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { marginInline: "auto", marginBlockStart: 2, fontSize: "lg", children: title }, void 0, false, {
                fileName: "app/components/NewWash/WashesContent/Form.tsx",
                lineNumber: 55,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(FormControl, { as: Flex, flexDir: "column", align: "center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(FormLabel, { inlineSize: "fit-content", children: "data" }, void 0, false, {
                  fileName: "app/components/NewWash/WashesContent/Form.tsx",
                  lineNumber: 59,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  Input,
                  {
                    name: "scheduleDate",
                    inlineSize: "180px",
                    type: "date",
                    min: minDate,
                    defaultValue: defaultDate
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/NewWash/WashesContent/Form.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(FormHelperText, { color: "gray.400", children: "m\xEAs/dia/ano" }, void 0, false, {
                  fileName: "app/components/NewWash/WashesContent/Form.tsx",
                  lineNumber: 67,
                  columnNumber: 11
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/NewWash/WashesContent/Form.tsx",
                lineNumber: 58,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(FormControl, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(FormLabel, { inlineSize: "fit-content", marginInline: "auto", children: "notas" }, void 0, false, {
                  fileName: "app/components/NewWash/WashesContent/Form.tsx",
                  lineNumber: 71,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  Textarea,
                  {
                    name: "note",
                    noOfLines: 6,
                    placeholder: "escreva notas sobre esta lavagem",
                    resize: "none",
                    defaultValue: note
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/NewWash/WashesContent/Form.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/components/NewWash/WashesContent/Form.tsx",
                lineNumber: 70,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                FormControl,
                {
                  as: Flex,
                  inlineSize: "fit-content",
                  marginInline: "auto",
                  align: "center",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(FormLabel, { marginBlock: 0, marginInlineEnd: 6, children: "lavagem feita?" }, void 0, false, {
                      fileName: "app/components/NewWash/WashesContent/Form.tsx",
                      lineNumber: 88,
                      columnNumber: 11
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Checkbox, { defaultChecked: isCompleted, name: "isCompleted" }, void 0, false, {
                      fileName: "app/components/NewWash/WashesContent/Form.tsx",
                      lineNumber: 91,
                      columnNumber: 11
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/NewWash/WashesContent/Form.tsx",
                  lineNumber: 82,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/NewWash/WashesContent/Form.tsx",
            lineNumber: 49,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/NewWash/WashesContent/Form.tsx",
      lineNumber: 44,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/WashesContent/WashesContent.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
function WashesContent({
  washes,
  setWashes,
  licensePlate,
  addError,
  removeError
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    Container2,
    {
      addError,
      removeError,
      licensePlate: licensePlate != null ? licensePlate : "",
      children: washes == null ? void 0 : washes.map((w) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          Box,
          {
            maxInlineSize: "320px",
            marginInline: [0, 8],
            border: "4px",
            borderColor: "blue.400",
            borderRadius: "lg",
            paddingInline: 4,
            paddingBlock: 8,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              Form2,
              {
                id: w.id,
                onChange: setWashes,
                isCompleted: w.isCompleted,
                title: w.title,
                defaultDate: w.scheduleDate,
                minDate: w.minDate,
                note: (_a = w.note) != null ? _a : ""
              },
              void 0,
              false,
              {
                fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
                lineNumber: 38,
                columnNumber: 11
              },
              this
            )
          },
          w.scheduleDate,
          false,
          {
            fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
            lineNumber: 28,
            columnNumber: 9
          },
          this
        );
      })
    },
    void 0,
    false,
    {
      fileName: "app/components/NewWash/WashesContent/WashesContent.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/WashesContent/index.tsx
var baseDate = /* @__PURE__ */ new Date();
var formatedDates = {
  minDate: format(baseDate, "yyyy-MM-dd"),
  firstDate: format(baseDate, "yyyy-MM-dd"),
  secDate: format(addDays(baseDate, 7), "yyyy-MM-dd"),
  thirdDate: format(addDays(baseDate, 14), "yyyy-MM-dd"),
  fourthDate: format(addDays(baseDate, 28), "yyyy-MM-dd")
};
var washesDefaultValue = [
  {
    id: 1,
    scheduleDate: formatedDates.firstDate,
    note: "",
    isCompleted: false,
    title: "primeira lavagem",
    minDate: formatedDates.minDate
  },
  {
    id: 2,
    scheduleDate: formatedDates.secDate,
    note: "",
    isCompleted: false,
    title: "segunda lavagem",
    minDate: formatedDates.minDate
  },
  {
    id: 3,
    scheduleDate: formatedDates.thirdDate,
    note: "",
    isCompleted: false,
    title: "terceira lavagem",
    minDate: formatedDates.minDate
  },
  {
    id: 4,
    scheduleDate: formatedDates.fourthDate,
    note: "",
    isCompleted: false,
    title: "quarta lavagem",
    minDate: formatedDates.minDate
  }
];

// app/components/NewWash/VehicleContent/NewVehicleForm.tsx
var import_react16 = __toESM(require_react());
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
var selectOptions = [
  "Extra leve",
  "Leve",
  "Vuc",
  "Toco",
  "Truck",
  "Bitruck",
  "Carreta"
];
function NewVehicleForm({
  addError,
  removeError,
  vehicle,
  onChange
}) {
  const timeoutId = (0, import_react16.useRef)(null);
  const secondTimeOutId = (0, import_react16.useRef)(null);
  const { data, submit } = useFetcher();
  const isDisabled = !vehicle.create;
  const error = (data == null ? void 0 : data.vehicle) ? { message: "Placa j\xE1 existe" } : null;
  function onInputChange(e) {
    secondTimeOutId.current && clearTimeout(secondTimeOutId.current);
    secondTimeOutId.current = setTimeout(() => {
      submit(
        { unique: "True", licensePlate: e.target.value },
        { action: "/vehicle-search" }
      );
    }, 1e3);
  }
  function onFormChange(e) {
    var _a, _b, _c;
    const form = new FormData(e.currentTarget);
    const create = form.get("create") === "";
    const licensePlate = (_b = (_a = form.get("licensePlate")) == null ? void 0 : _a.toString()) != null ? _b : "";
    const type = (_c = form.get("type")) == null ? void 0 : _c.toString();
    if (create) {
      if (!licensePlate && !type) {
        onChange({ licensePlate: "", type: "", create });
        return;
      }
      timeoutId.current && clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        onChange({ licensePlate, type, create });
      }, 1e3);
    } else {
      onChange({ licensePlate: "", type: "", create });
    }
  }
  (0, import_react16.useEffect)(() => {
    if (data == null ? void 0 : data.vehicle)
      addError();
    else
      removeError();
  }, [data == null ? void 0 : data.vehicle, removeError, addError]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Form, { onChange: onFormChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Grid, { gridAutoRows: "min-content", placeContent: "center", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      FormControl,
      {
        as: Flex,
        blockSize: "min-content",
        gap: 4,
        paddingBlockStart: [0, 0, 1],
        align: "center",
        justify: "center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(FormLabel, { margin: 0, htmlFor: "vehicle_create", children: "Adicionar novo ve\xEDculo?" }, void 0, false, {
            fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
            lineNumber: 93,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            Checkbox,
            {
              defaultChecked: vehicle.create,
              id: "vehicle_create",
              name: "create",
              size: "lg",
              justifySelf: "center"
            },
            void 0,
            false,
            {
              fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
              lineNumber: 96,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
        lineNumber: 85,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Flex, { flexDir: "column", gap: 6, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        FormControl,
        {
          as: Grid,
          gridTemplateRows: "min-content",
          gridAutoFlow: ["row", "row", "column"],
          placeItems: "center",
          marginBlockStart: 8,
          gap: 4,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Flex, { flexDir: "column", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              FormLabel,
              {
                margin: 0,
                marginInline: "auto",
                htmlFor: "vehicle_licensePlate",
                children: "Ve\xEDculo"
              },
              void 0,
              false,
              {
                fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
                lineNumber: 114,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              Input,
              {
                id: "vehicle_licensePlate",
                name: "licensePlate",
                placeholder: "Placa",
                isDisabled,
                defaultValue: vehicle.licensePlate,
                onChange: onInputChange
              },
              void 0,
              false,
              {
                fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
                lineNumber: 121,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
            lineNumber: 113,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
          lineNumber: 105,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        Select,
        {
          isDisabled,
          id: "type",
          name: "type",
          placeholder: "Tipo do ve\xEDculo",
          defaultValue: vehicle.type,
          children: selectOptions.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: o == null ? void 0 : o.toString(), children: o }, o, false, {
            fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this))
        },
        void 0,
        false,
        {
          fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
          lineNumber: 132,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this),
      vehicle.create && error && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Alert, { status: "error", marginBlock: 4, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(AlertIcon, {}, void 0, false, {
          fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
          lineNumber: 148,
          columnNumber: 15
        }, this),
        error.message
      ] }, void 0, true, {
        fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
        lineNumber: 147,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
    lineNumber: 84,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/NewWash/VehicleContent/NewVehicleForm.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/VehicleContent/VehicleDivider.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
function VehicleDivider() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    Box,
    {
      position: "relative",
      padding: 8,
      inlineSize: "100%",
      maxInlineSize: "360px",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Divider, {}, void 0, false, {
          fileName: "app/components/NewWash/VehicleContent/VehicleDivider.tsx",
          lineNumber: 10,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AbsoluteCenter, { bg: "white", px: "4", children: "ou" }, void 0, false, {
          fileName: "app/components/NewWash/VehicleContent/VehicleDivider.tsx",
          lineNumber: 11,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/NewWash/VehicleContent/VehicleDivider.tsx",
      lineNumber: 4,
      columnNumber: 5
    },
    this
  );
}

// app/components/SearchEntity/Results.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
function Results({ show, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    Flex,
    {
      inlineSize: "100%",
      flexDir: ["column"],
      position: "relative",
      _after: show ? {
        content: "''",
        display: "none",
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
    },
    void 0,
    false,
    {
      fileName: "app/components/SearchEntity/Results.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/components/SearchEntity/SearchInput.tsx
var import_react20 = __toESM(require_react());
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
function SearchInput({ onChange, ...rest }) {
  const timeoutId = (0, import_react20.useRef)(null);
  function onInputQueryChange(e) {
    const value = e.target.value;
    timeoutId.current && clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => onChange(value), 1e3);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(InputGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Input, { rounded: "full", onChange: onInputQueryChange, ...rest }, void 0, false, {
    fileName: "app/components/SearchEntity/SearchInput.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/SearchEntity/SearchInput.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/SearchEntity/SearchInput.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/components/SearchEntity/index.ts
var searchEntity = {
  Input: SearchInput,
  Results
};

// app/components/NewWash/VehicleContent/VehicleSearch.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
function VehicleSearch({ vehicle, setVehicle }) {
  var _a;
  const fetcher = useFetcher();
  const data = (_a = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a.results;
  function onQuery(e) {
    fetcher.submit(
      { many: "True", licensePlate: e },
      { action: "/vehicle-search" }
    );
  }
  function onClick(e) {
    setVehicle({ ...e, create: false });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    Grid,
    {
      gap: 4,
      gridAutoFlow: "row",
      placeItems: ["center", "center", "center"],
      maxInlineSize: "200px",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(searchEntity.Input, { onChange: onQuery, isDisabled: vehicle.create }, void 0, false, {
          fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
          lineNumber: 43,
          columnNumber: 7
        }, this),
        (fetcher == null ? void 0 : fetcher.data) && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            Text,
            {
              inlineSize: "fit-content",
              marginInline: "auto",
              marginBlockStart: 4,
              fontSize: "sm",
              color: "gray.400",
              children: (data == null ? void 0 : data.length) === 0 ? "nenhum resultado encontrado :(" : `mostrando ${data == null ? void 0 : data.length} resultados`
            },
            void 0,
            false,
            {
              fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
              lineNumber: 46,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(searchEntity.Results, { show: fetcher == null ? void 0 : fetcher.data, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Grid, { gap: 4, maxBlockSize: "260px", overflow: "scroll", children: data == null ? void 0 : data.map((v, i) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              Flex,
              {
                inlineSize: "100%",
                flexDir: "column",
                gap: 6,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(FormControl, { as: Flex, flexDir: "column", alignItems: "center", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(FormLabel, { children: "Placa" }, void 0, false, {
                      fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                      lineNumber: 68,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                      Input,
                      {
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
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                        lineNumber: 69,
                        columnNumber: 23
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                    lineNumber: 67,
                    columnNumber: 21
                  }, this),
                  (data == null ? void 0 : data.length) - 1 !== i && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Divider, { alignSelf: "center", inlineSize: "80%" }, void 0, false, {
                    fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                    lineNumber: 90,
                    columnNumber: 23
                  }, this)
                ]
              },
              `${v.licensePlate} + ${i}`,
              true,
              {
                fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
                lineNumber: 61,
                columnNumber: 19
              },
              this
            );
          }) }, void 0, false, {
            fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
            lineNumber: 57,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/NewWash/VehicleContent/VehicleSearch.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/VehicleContent/Container.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
function Container3({
  setVehicleData,
  vehicle,
  addError,
  removeError
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    Grid,
    {
      id: "vehicle",
      blockSize: "100%",
      inlineSize: "100%",
      paddingInline: 4,
      alignContent: "start",
      placeItems: "center",
      gap: 4,
      gridAutoFlow: ["row", "row", "column"],
      alignItems: "start",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(VehicleSearch, { setVehicle: setVehicleData, vehicle }, void 0, false, {
          fileName: "app/components/NewWash/VehicleContent/Container.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(VehicleDivider, {}, void 0, false, {
          fileName: "app/components/NewWash/VehicleContent/Container.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          NewVehicleForm,
          {
            vehicle,
            onChange: setVehicleData,
            addError,
            removeError
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/VehicleContent/Container.tsx",
            lineNumber: 34,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/NewWash/VehicleContent/Container.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/VehicleContent/index.tsx
var defaultVehicleState = {
  licensePlate: "",
  type: "",
  create: false
};
var VehicleContent = Container3;

// app/routes/_auth.new-wash._index.tsx
var import_react36 = __toESM(require_react());

// app/components/NewWash/footer.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
function NewWashFooter({
  goNext,
  goBack,
  containerProps,
  isNextButtonDisable,
  isPreviousButtonDisable,
  isLastStep,
  onFinish
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    Flex,
    {
      placeSelf: "flex-end",
      blockSize: "100%",
      align: "center",
      paddingBlockStart: 8,
      ...containerProps,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          Button,
          {
            colorScheme: "gray",
            variant: "ghost",
            mr: 3,
            marginInlineEnd: "0",
            onClick: () => goBack(),
            isDisabled: isPreviousButtonDisable,
            children: "voltar"
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/footer.tsx",
            lineNumber: 39,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          Divider,
          {
            blockSize: "100%",
            orientation: "vertical",
            inlineSize: "8px",
            borderColor: "gray.400"
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/footer.tsx",
            lineNumber: 49,
            columnNumber: 7
          },
          this
        ),
        !isLastStep ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          Button,
          {
            name: "step",
            variant: "ghost",
            colorScheme: "blue",
            onClick: () => goNext(),
            isDisabled: isNextButtonDisable,
            children: "pr\xF3ximo"
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/footer.tsx",
            lineNumber: 56,
            columnNumber: 9
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          Button,
          {
            name: "step",
            variant: "ghost",
            colorScheme: "blue",
            onClick: onFinish,
            children: "finalizar"
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/footer.tsx",
            lineNumber: 66,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/NewWash/footer.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/DriverContent/NewDriverForm.tsx
var import_react27 = __toESM(require_react());
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
function NewDriverForm({ driver, setDriverData }) {
  const timeoutId = (0, import_react27.useRef)(null);
  const isDisabled = !driver.create;
  function onFormChange(e) {
    var _a, _b, _c, _d;
    const form = new FormData(e.currentTarget);
    const create = form.get("create") === "";
    const driverName = (_b = (_a = form.get("name")) == null ? void 0 : _a.toString()) != null ? _b : "";
    const phone = (_d = (_c = form.get("phone")) == null ? void 0 : _c.toString()) != null ? _d : "";
    if (create) {
      if (!driverName) {
        setDriverData({ name: "", create, phone: "" });
        return;
      }
      timeoutId.current && clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        setDriverData({ name: driverName, create, phone });
      }, 1e3);
    } else {
      setDriverData({ name: "", create, phone: "" });
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Box, { maxInlineSize: "260px", marginInline: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    Form,
    {
      onChange: onFormChange,
      style: { blockSize: "100%", inlineSize: "100%" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Flex, { flexDir: "column", blockSize: "100%", gap: 8, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          FormControl,
          {
            as: Flex,
            blockSize: "min-content",
            gap: 4,
            paddingBlockStart: [0, 0, 1],
            align: "center",
            justify: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(FormLabel, { margin: 0, htmlFor: "driver-create", children: "Adicionar motorista novo?" }, void 0, false, {
                fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
                lineNumber: 58,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                Checkbox,
                {
                  defaultChecked: driver.create,
                  id: "driver-create",
                  name: "create",
                  size: "lg",
                  justifySelf: "center"
                },
                void 0,
                false,
                {
                  fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
                  lineNumber: 61,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
            lineNumber: 50,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Flex, { flexDir: "column", gap: 8, inlineSize: "100%", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(FormControl, { as: Flex, flexDir: "column", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(FormLabel, { margin: 0, marginInline: "auto", htmlFor: "driver-name", children: "Motorista" }, void 0, false, {
              fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
              lineNumber: 71,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              Input,
              {
                id: "driver-name",
                name: "name",
                placeholder: "Nome",
                isDisabled,
                defaultValue: driver.create ? driver.name : ""
              },
              void 0,
              false,
              {
                fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
                lineNumber: 74,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(FormControl, { as: Flex, flexDir: "column", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              FormLabel,
              {
                margin: 0,
                marginInline: "auto",
                htmlFor: "driver-phone",
                children: "Telefone"
              },
              void 0,
              false,
              {
                fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
                lineNumber: 83,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              Input,
              {
                id: "driver-phone",
                name: "phone",
                placeholder: "telefone",
                isDisabled,
                defaultValue: driver.create ? driver.phone : ""
              },
              void 0,
              false,
              {
                fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
                lineNumber: 90,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
      lineNumber: 45,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/NewWash/DriverContent/NewDriverForm.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/DriverContent/DriverContent.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
function Root({ setDriverData, driver }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Box, { paddingBlock: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(NewDriverForm, { driver, setDriverData }, void 0, false, {
    fileName: "app/components/NewWash/DriverContent/DriverContent.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/NewWash/DriverContent/DriverContent.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/NewWash/DriverContent/index.tsx
var defaultDriverValue = {
  name: "",
  phone: "",
  create: false
};
var DriverContent = Root;

// app/components/NewWash/SummaryContent/Container.tsx
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime());
function Container4({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    Grid,
    {
      paddingInlineStart: 4,
      gridTemplateColumns: ["100%", "1fr 1fr"],
      gridTemplateRows: ["min-content", "1fr 1fr"],
      gap: 8,
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/NewWash/SummaryContent/Container.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}

// node_modules/react-icons/hi/index.esm.js
function HiExternalLink(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" } }, { "tag": "path", "attr": { "d": "M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" } }] })(props);
}

// app/components/NewWash/SummaryContent/DriverSummary.tsx
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime());
function DriverSummary({ driver, goTo }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    Flex,
    {
      flex: 1,
      align: "center",
      justify: "center",
      flexDir: "column",
      gap: 4,
      paddingBlock: 4,
      inlineSize: "100%",
      border: "1px",
      borderColor: "blue.400",
      borderWidth: "medium",
      borderRadius: "2xl",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Text, { as: "h2", fontSize: "md", marginInline: "auto", children: "Informa\xE7\xF5es do motorista" }, void 0, false, {
          fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          Flex,
          {
            flexDir: "column",
            gap: 4,
            blockSize: "fit-content",
            inlineSize: "100%",
            maxInlineSize: "200px",
            align: "center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              Button,
              {
                rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(HiExternalLink, { size: 20 }, void 0, false, {
                  fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                  lineNumber: 37,
                  columnNumber: 22
                }, this),
                variant: "outline",
                onClick: () => goTo(),
                inlineSize: "100%",
                minBlockSize: 12,
                blockSize: "fit-content",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                  Flex,
                  {
                    flexDir: "column",
                    gap: 1,
                    paddingBlock: 4,
                    align: "start",
                    marginInlineEnd: 4,
                    inlineSize: "100%",
                    children: driver.create ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Text, { fontSize: "md", children: "Matheus" }, void 0, false, {
                        fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Flex, { as: "span", gap: 1, inlineSize: "fit-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Text, { fontSize: "sm", fontWeight: "light", children: driver.name }, void 0, false, {
                        fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                        lineNumber: 56,
                        columnNumber: 19
                      }, this) }, void 0, false, {
                        fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                      lineNumber: 53,
                      columnNumber: 15
                    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                      Text,
                      {
                        textAlign: "left",
                        paddingBlock: 4,
                        fontSize: "sm",
                        whiteSpace: "break-spaces",
                        children: "Nenhum motorista fornecido"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                        lineNumber: 62,
                        columnNumber: 15
                      },
                      this
                    )
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
                lineNumber: 36,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
            lineNumber: 28,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/NewWash/SummaryContent/DriverSummary.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/SummaryContent/VehicleSummary.tsx
var import_jsx_dev_runtime21 = __toESM(require_jsx_dev_runtime());
function VehicleSummary({ goTo, vehicle }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    Flex,
    {
      align: "center",
      justify: "center",
      flexDir: "column",
      gap: 4,
      paddingBlock: [4, 8],
      paddingInline: [0, 4, 8],
      inlineSize: "100%",
      border: "1px",
      borderColor: "blue.400",
      borderWidth: "medium",
      borderRadius: "2xl",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Text, { as: "h2", fontSize: "md", marginInline: "auto", justifySelf: "start", children: "Informa\xE7\xF5es do Ve\xEDculo" }, void 0, false, {
          fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          Button,
          {
            rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(HiExternalLink, { size: 20 }, void 0, false, {
              fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
              lineNumber: 29,
              columnNumber: 20
            }, this),
            variant: "outline",
            onClick: () => goTo(),
            blockSize: "fit-content",
            inlineSize: "fit-content",
            minBlockSize: 12,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              Flex,
              {
                flexDir: "column",
                gap: 1,
                paddingBlock: 4,
                paddingInlineEnd: 1,
                inlineSize: "auto",
                align: "start",
                marginInlineEnd: "auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Flex, { as: "span", gap: 1, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Text, { fontSize: "md", children: "placa:" }, void 0, false, {
                      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                      lineNumber: 46,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Text, { fontWeight: "semibold", children: vehicle.licensePlate }, void 0, false, {
                      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                      lineNumber: 47,
                      columnNumber: 13
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Flex, { as: "span", gap: 1, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Text, { children: "tipo:" }, void 0, false, {
                      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                      lineNumber: 50,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Text, { fontSize: "sm", fontWeight: "light", children: vehicle.type }, void 0, false, {
                      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                      lineNumber: 51,
                      columnNumber: 13
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
                lineNumber: 36,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
            lineNumber: 28,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/NewWash/SummaryContent/VehicleSummary.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/SummaryContent/WashesSummary.tsx
var import_jsx_dev_runtime22 = __toESM(require_jsx_dev_runtime());
function ScheduleDate({ date }) {
  const { format: format2 } = useDate();
  const text = format2(date, "d/MM");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { fontSize: "md", children: text }, void 0, false, {
    fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
}
function Note({ note }) {
  return note !== "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Flex, { gap: 2, fontSize: "sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { fontWeight: "semibold", children: "nota:" }, void 0, false, {
      fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { fontWeight: "light", children: note.slice(0, 5) + "..." }, void 0, false, {
      fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { children: "sem nota" }, void 0, false, {
    fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function WashesSummary({ goTo, washes }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    Flex,
    {
      paddingBlock: [4, 8],
      paddingInline: [0, 4, 8],
      gap: 4,
      align: "center",
      justify: "center",
      flexDir: "column",
      inlineSize: "100%",
      border: "1px",
      borderWidth: "medium",
      borderColor: "blue.400",
      borderRadius: "2xl",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { as: "h2", children: "Informa\xE7\xF5es das lavagens" }, void 0, false, {
          fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
          lineNumber: 42,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          Grid,
          {
            blockSize: "100%",
            inlineSize: "100%",
            gap: 4,
            gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
            placeItems: "center",
            children: washes.map((w) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
              Button,
              {
                rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(HiExternalLink, { size: 20 }, void 0, false, {
                  fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                  lineNumber: 53,
                  columnNumber: 24
                }, this),
                inlineSize: "fit-content",
                blockSize: "fit-content",
                fontSize: "sm",
                padding: 4,
                onClick: () => goTo(),
                variant: "outline",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                  Flex,
                  {
                    flexDir: "column",
                    blockSize: "fit-content",
                    gap: 1,
                    paddingInlineEnd: 4,
                    marginInlineEnd: "auto",
                    align: "start",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ScheduleDate, { date: w.scheduleDate }, void 0, false, {
                        fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                        lineNumber: 69,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Note, { note: w.note }, void 0, false, {
                        fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                        lineNumber: 70,
                        columnNumber: 15
                      }, this),
                      w.isCompleted && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Flex, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { fontStyle: "italic", fontSize: "sm", children: "lavagem j\xE1 feita" }, void 0, false, {
                        fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                        lineNumber: 73,
                        columnNumber: 19
                      }, this) }, void 0, false, {
                        fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                    lineNumber: 61,
                    columnNumber: 13
                  },
                  this
                )
              },
              w.id,
              false,
              {
                fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
                lineNumber: 51,
                columnNumber: 11
              },
              this
            ))
          },
          void 0,
          false,
          {
            fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
            lineNumber: 43,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/NewWash/SummaryContent/WashesSummary.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}

// app/components/NewWash/SummaryContent/index.tsx
var summary = {
  Driver: DriverSummary,
  Container: Container4,
  Vehicle: VehicleSummary,
  Washes: WashesSummary
};

// app/routes/_auth.new-wash._index.tsx
var import_node = __toESM(require_node());

// app/components/hooks/useToast.ts
var import_react33 = __toESM(require_react());
var useToast2 = () => {
  const toastIdRef = (0, import_react33.useRef)("");
  const toast = useToast();
  const close = (0, import_react33.useCallback)(() => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }, [toast]);
  const showErrorToast = (0, import_react33.useCallback)(
    ({
      message,
      title,
      ...rest
    }) => {
      toastIdRef.current = toast({
        description: message,
        isClosable: true,
        status: "error",
        title: title != null ? title : "Erro",
        position: "top",
        ...rest
      });
    },
    [toast]
  );
  const showSuccessToast = (0, import_react33.useCallback)(
    ({
      message,
      title,
      ...rest
    }) => {
      toastIdRef.current = toast({
        description: message,
        isClosable: true,
        status: "success",
        title: title != null ? title : "Tudo certo",
        position: "top",
        ...rest
      });
    },
    [toast]
  );
  return { showErrorToast, close, showSuccessToast };
};

// app/routes/_auth.new-wash._index.tsx
var import_jsx_dev_runtime23 = __toESM(require_jsx_dev_runtime());
function NewWash() {
  const { Stepper: Stepper3, activeStep, steps: steps2, goToPrevious, goToNext, setActiveStep } = useStepper();
  const { showErrorToast, showSuccessToast } = useToast2();
  const [error, setError] = (0, import_react36.useState)(false);
  const [vehicle, setVehicle] = (0, import_react36.useState)(defaultVehicleState);
  const [washes, setWashes] = (0, import_react36.useState)(washesDefaultValue);
  const [driver, setDriver] = (0, import_react36.useState)(defaultDriverValue);
  const submit = useSubmit();
  const navigate = useNavigate();
  const data = useActionData();
  const addError = (0, import_react36.useCallback)(() => {
    setError(true);
  }, []);
  const removeError = (0, import_react36.useCallback)(() => {
    setError(false);
  }, []);
  function setDriverData(v) {
    setDriver(v);
  }
  function setVehicleData(v) {
    setVehicle(v);
  }
  function setWashesData(w) {
    setWashes((s) => {
      const arr = [...s];
      const index = s == null ? void 0 : s.findIndex((v) => v.id === w.id);
      if (index > -1) {
        arr[index] = w;
      }
      return arr;
    });
  }
  function onFinish() {
    const params = { vehicle, driver, washes };
    submit(params, { method: "POST", encType: "application/json" });
  }
  (0, import_react36.useEffect)(() => {
    if (typeof data === "undefined")
      return;
    if (data == null ? void 0 : data.success) {
      showSuccessToast({ message: data.message });
      navigate("/home");
    }
  }, [data, showSuccessToast, navigate]);
  (0, import_react36.useEffect)(() => {
    if (typeof data !== "undefined") {
      (data == null ? void 0 : data.error) && showErrorToast({ message: data.message });
    }
  }, [data, showErrorToast]);
  const isVehicleDataValid = vehicle.licensePlate !== "" && vehicle.type !== "";
  const isDriverValid = true;
  const lowerThanLastStep = activeStep < steps2.length - 1;
  const isWashesValid = true;
  const canProceed = isVehicleDataValid && isDriverValid && isWashesValid && lowerThanLastStep;
  const canGoBack = activeStep > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    Grid,
    {
      blockSize: "100%",
      inlineSize: "100%",
      maxInlineSize: "90%",
      marginInline: "auto",
      gridAutoFlow: "column",
      gap: 1,
      gridTemplateColumns: "auto 1fr",
      gridTemplateRows: "100%",
      paddingBlock: [4, 8],
      paddingInline: 4,
      overflow: "hidden",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          Stepper3,
          {
            activeStep,
            setActiveStep,
            steps: steps2
          },
          void 0,
          false,
          {
            fileName: "app/routes/_auth.new-wash._index.tsx",
            lineNumber: 190,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          Grid,
          {
            gridTemplateColumns: "1fr",
            inlineSize: "100%",
            gridTemplateRows: "auto 1fr",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                Text,
                {
                  placeSelf: "center",
                  as: "h1",
                  fontSize: ["xl", "xl", "2xl"],
                  marginBlockEnd: 4,
                  whiteSpace: "nowrap",
                  children: steps2[activeStep].modalTitle
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 200,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Box, { inlineSize: "100%", marginInline: "auto", overflow: "scroll", children: [
                activeStep === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                  VehicleContent,
                  {
                    setVehicleData,
                    vehicle,
                    addError,
                    removeError
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 211,
                    columnNumber: 13
                  },
                  this
                ),
                activeStep === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                  WashesContent,
                  {
                    washes,
                    setWashes: setWashesData,
                    licensePlate: vehicle.licensePlate,
                    addError,
                    removeError
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 219,
                    columnNumber: 13
                  },
                  this
                ),
                activeStep === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(DriverContent, { driver, setDriverData }, void 0, false, {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 228,
                  columnNumber: 13
                }, this),
                activeStep === 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(summary.Container, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                    summary.Vehicle,
                    {
                      vehicle,
                      goTo: () => setActiveStep(0)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_auth.new-wash._index.tsx",
                      lineNumber: 232,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(summary.Washes, { washes, goTo: () => setActiveStep(1) }, void 0, false, {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 236,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(summary.Driver, { driver, goTo: () => setActiveStep(2) }, void 0, false, {
                    fileName: "app/routes/_auth.new-wash._index.tsx",
                    lineNumber: 237,
                    columnNumber: 15
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 231,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_auth.new-wash._index.tsx",
                lineNumber: 209,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                NewWashFooter,
                {
                  isNextButtonDisable: error || !canProceed,
                  isPreviousButtonDisable: !canGoBack,
                  goBack: goToPrevious,
                  goNext: goToNext,
                  onFinish,
                  isLastStep: steps2.length - 1 === activeStep
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_auth.new-wash._index.tsx",
                  lineNumber: 241,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_auth.new-wash._index.tsx",
            lineNumber: 195,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/_auth.new-wash._index.tsx",
      lineNumber: 177,
      columnNumber: 5
    },
    this
  );
}
export {
  NewWash as default
};
//# sourceMappingURL=/build/routes/_auth.new-wash._index-HTQMRZSD.js.map
