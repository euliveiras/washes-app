import {
  format
} from "/build/_shared/chunk-2JBWI42H.js";
import {
  MdClose,
  MdOutlineCheck
} from "/build/_shared/chunk-S7SDDI2X.js";
import {
  Alert,
  Flex,
  IconButton,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "/build/_shared/chunk-FQ5UBCHZ.js";
import {
  Form,
  require_jsx_dev_runtime,
  require_react,
  useNavigate
} from "/build/_shared/chunk-EDULEWIV.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Table/Body.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function TableData({
  children,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Td, { ...rest, children }, void 0, false, {
    fileName: "app/components/Table/Body.tsx",
    lineNumber: 15,
    columnNumber: 10
  }, this);
}
function Body({ children, onIntersecting }) {
  const ref = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    var _a, _b;
    const options = {
      rootMargin: "0px",
      threshold: 1
    };
    const element = (_b = (_a = ref.current) == null ? void 0 : _a.lastElementChild) != null ? _b : void 0;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && onIntersecting)
          onIntersecting(element);
      });
    }, options);
    element && observer.observe(element);
    return () => element && observer.unobserve(element);
  }, [onIntersecting, ref]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tbody, { ref, children }, void 0, false, {
    fileName: "app/components/Table/Body.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}

// app/components/Table/Container.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Container({
  children,
  containerProps,
  tableProps
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableContainer, { ...containerProps, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Table, { variant: "simple", ...tableProps, children }, void 0, false, {
    fileName: "app/components/Table/Container.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Table/Container.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/components/Table/Head.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function HeadData({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Th, { children }, void 0, false, {
    fileName: "app/components/Table/Head.tsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
}
function Head({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Thead, { children }, void 0, false, {
    fileName: "app/components/Table/Head.tsx",
    lineNumber: 17,
    columnNumber: 10
  }, this);
}

// app/components/Table/Row.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function Row({ children, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tr, { ...rest, children }, void 0, false, {
    fileName: "app/components/Table/Row.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

// app/components/Table/index.tsx
var table = {
  Table: Container,
  Head,
  Body,
  Row,
  Data: TableData,
  Label: HeadData
};

// app/components/WashesTable/Table.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Table2({ children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(table.Table, { ...props, children }, void 0, false, {
    fileName: "app/components/WashesTable/Table.tsx",
    lineNumber: 12,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Head/Actions.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function Actions() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(table.Label, { children: "Actions" }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Head/Actions.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Head/Driver.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function Driver() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(table.Label, { children: "Motorista" }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Head/Driver.tsx",
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

// app/components/WashesTable/Rows/Head/LicensePlate.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
function LicensePlate() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(table.Label, { children: "Placa" }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Head/LicensePlate.tsx",
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

// app/components/WashesTable/Rows/Head/Note.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
function Note() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(table.Label, { children: "Nota" }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Head/Note.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Head/ScheduledDate.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
function ScheduledDate() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(table.Label, { children: "Dia da lavagem" }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Head/ScheduledDate.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Head/Status.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
function Status() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(table.Label, { children: "Status" }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Head/Status.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Head/index.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
function Head2({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(table.Head, { children }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Head/index.tsx",
    lineNumber: 12,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Body/Actions.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
function CancelButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    IconButton,
    {
      type: "submit",
      value: "false",
      name: "isCompleted",
      "aria-label": "cancel-wash",
      colorScheme: "red",
      borderRadius: "full",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(MdClose, { size: 20 }, void 0, false, {
        fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this),
      onClick: (e) => e.stopPropagation()
    },
    void 0,
    false,
    {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
}
function ConfirmButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    IconButton,
    {
      type: "submit",
      value: "true",
      name: "isCompleted",
      "aria-label": "confirm-wash",
      colorScheme: "green",
      borderRadius: "full",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(MdOutlineCheck, { size: 20 }, void 0, false, {
        fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      onClick: (e) => e.stopPropagation()
    },
    void 0,
    false,
    {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}
function Actions2({ isCompleted, id }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(table.Data, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Flex, { as: Form, method: "PUT", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Input, { type: "hidden", readOnly: true, name: "id", value: id }, void 0, false, {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    typeof isCompleted === "undefined" && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(CancelButton, {}, void 0, false, {
        fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ConfirmButton, {}, void 0, false, {
        fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this),
    isCompleted === true && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(CancelButton, {}, void 0, false, {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 52,
      columnNumber: 34
    }, this),
    isCompleted === false && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ConfirmButton, {}, void 0, false, {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 53,
      columnNumber: 35
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/components/WashesTable/Rows/Body/Driver.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
function Driver2({ driver }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(table.Data, { children: driver }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/Driver.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Body/LicensePlate.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
function LicensePlate2({ licensePlate, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(table.Data, { ...rest, children: licensePlate }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/LicensePlate.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Body/Note.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
function Note2({ note }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(table.Data, { children: note }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/Note.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Body/ScheduledDate.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
function ScheduledDate2({ scheduledDate }) {
  const date = format(scheduledDate, "d 'de' MMMM',' RRRR");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(table.Data, { children: date }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/ScheduledDate.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Body/Status.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
function Status2({ label, ...rest }) {
  function getTextColor(label2) {
    if (label2 === "Atrasada")
      return "red.400";
    else if (label2 === "Aguardando")
      return "blue.400";
    else
      return "green.400";
  }
  const color = getTextColor(label);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(table.Data, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Alert, { borderRadius: "full", justifyContent: "center", ...rest, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Text, { color, children: label }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/Status.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/Status.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/Status.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/components/WashesTable/Rows/Body/index.tsx
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime());
function Row2({ children, ...rest }) {
  const navigate = useNavigate();
  function goTo() {
    const path = `/wash/${rest.id}`;
    navigate(path);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(table.Row, { cursor: "pointer", ...rest, onClick: goTo, children }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/index.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
function Body2({
  children,
  onIntersecting
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(table.Body, { onIntersecting, children }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/index.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Filters.tsx
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime());
function Status3({ ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    Select,
    {
      maxInlineSize: "260px",
      minBlockSize: 12,
      placeholder: "Status da lavagem",
      variant: "outline",
      colorScheme: "gray",
      borderRadius: "full",
      display: "flex",
      alignItems: "center",
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("option", { value: "COMPLETED", children: "Completa" }, void 0, false, {
          fileName: "app/components/WashesTable/Filters.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("option", { value: "INCOMPLETED", children: "Incompleta" }, void 0, false, {
          fileName: "app/components/WashesTable/Filters.tsx",
          lineNumber: 26,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("option", { value: "ALL", children: "Todas" }, void 0, false, {
          fileName: "app/components/WashesTable/Filters.tsx",
          lineNumber: 27,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/WashesTable/Filters.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}
function Date({ ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    Input,
    {
      type: "date",
      variant: "outline",
      borderRadius: "full",
      maxInlineSize: "260px",
      minBlockSize: 12,
      ...rest
    },
    void 0,
    false,
    {
      fileName: "app/components/WashesTable/Filters.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  );
}
function Search({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    Input,
    {
      type: "text",
      name: "licensePlate",
      placeholder: "Procurar placa",
      variant: "outline",
      borderRadius: "full",
      maxInlineSize: "260px",
      minBlockSize: 12,
      ...props
    },
    void 0,
    false,
    {
      fileName: "app/components/WashesTable/Filters.tsx",
      lineNumber: 47,
      columnNumber: 5
    },
    this
  );
}

// app/components/WashesTable/index.tsx
var washesTable = {
  filters: {
    Search,
    Date,
    Status: Status3
  },
  Table: Table2,
  Head: Head2,
  headData: {
    Actions,
    Driver,
    LicensePlate,
    Note,
    ScheduledDate,
    Status
  },
  Body: Body2,
  Row: Row2,
  bodyData: {
    Actions: Actions2,
    Driver: Driver2,
    LicensePlate: LicensePlate2,
    Note: Note2,
    ScheduledDate: ScheduledDate2,
    Status: Status2
  }
};

export {
  washesTable
};
//# sourceMappingURL=/build/_shared/chunk-I7ELGWBU.js.map
