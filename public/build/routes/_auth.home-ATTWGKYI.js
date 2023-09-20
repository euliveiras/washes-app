import {
  LuExternalLink
} from "/build/_shared/chunk-GY2OSEAB.js";
import {
  format
} from "/build/_shared/chunk-2JBWI42H.js";
import {
  MdClose,
  MdOutlineCheck
} from "/build/_shared/chunk-XO5BRP32.js";
import {
  require_edge
} from "/build/_shared/chunk-J5LZUC2L.js";
import {
  Alert,
  Box,
  Button,
  Divider,
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
  Link,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-RPYEFABZ.js";
import "/build/_shared/chunk-6Y4MOXXW.js";
import {
  Form,
  require_jsx_dev_runtime,
  require_react,
  useSearchParams,
  useSubmit
} from "/build/_shared/chunk-EDULEWIV.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_auth.home.tsx
var import_remix = __toESM(require_edge());

// app/components/Home/Container.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Container({ children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { ...props, children }, void 0, false, {
    fileName: "app/components/Home/Container.tsx",
    lineNumber: 7,
    columnNumber: 10
  }, this);
}

// app/components/Home/index.tsx
var home = {
  Container
};

// app/components/Table/Body.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function TableData({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Td, { children }, void 0, false, {
    fileName: "app/components/Table/Body.tsx",
    lineNumber: 11,
    columnNumber: 10
  }, this);
}
function Body({ children, onIntersecting }) {
  const ref = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    var _a, _b;
    const options = {
      rootMargin: "0px",
      threshold: 1
    };
    const element = (_b = (_a = ref.current) == null ? void 0 : _a.lastElementChild) != null ? _b : void 0;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          onIntersecting(element);
      });
    }, options);
    element && observer.observe(element);
    return () => element && observer.unobserve(element);
  }, [onIntersecting, ref]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tbody, { ref, children }, void 0, false, {
    fileName: "app/components/Table/Body.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}

// app/components/Table/Container.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Container2({
  children,
  containerProps,
  tableProps
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableContainer, { ...containerProps, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Table, { variant: "simple", ...tableProps, children }, void 0, false, {
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
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function HeadData({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Th, { children }, void 0, false, {
    fileName: "app/components/Table/Head.tsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
}
function Head({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Thead, { children }, void 0, false, {
    fileName: "app/components/Table/Head.tsx",
    lineNumber: 17,
    columnNumber: 10
  }, this);
}

// app/components/Table/Row.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Row({ children, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Tr, { ...rest, children }, void 0, false, {
    fileName: "app/components/Table/Row.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

// app/components/Table/index.tsx
var table = {
  Table: Container2,
  Head,
  Body,
  Row,
  Data: TableData,
  Label: HeadData
};

// app/components/WashesTable/Table.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function Table2({ children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(table.Table, { ...props, children }, void 0, false, {
    fileName: "app/components/WashesTable/Table.tsx",
    lineNumber: 12,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Head/Actions.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function Actions() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(table.Label, { children: "Actions" }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Head/Actions.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Head/Driver.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
function Driver() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(table.Label, { children: "Motorista" }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Head/Driver.tsx",
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

// app/components/WashesTable/Rows/Head/LicensePlate.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
function LicensePlate() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(table.Label, { children: "Placa" }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Head/LicensePlate.tsx",
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

// app/components/WashesTable/Rows/Head/Note.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
function Note() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(table.Label, { children: "Nota" }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Head/Note.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Head/ScheduledDate.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
function ScheduledDate() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(table.Label, { children: "Dia da lavagem" }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Head/ScheduledDate.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Head/Status.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
function Status() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(table.Label, { children: "Status" }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Head/Status.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Head/index.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
function Head2({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(table.Head, { children }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Head/index.tsx",
    lineNumber: 12,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Body/Actions.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
function CancelButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    IconButton,
    {
      type: "submit",
      value: "false",
      name: "isCompleted",
      "aria-label": "cancel-wash",
      colorScheme: "red",
      borderRadius: "full",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(MdClose, { size: 20 }, void 0, false, {
        fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this)
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    IconButton,
    {
      type: "submit",
      value: "true",
      name: "isCompleted",
      "aria-label": "confirm-wash",
      colorScheme: "green",
      borderRadius: "full",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(MdOutlineCheck, { size: 20 }, void 0, false, {
        fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}
function Actions2({ isCompleted, id }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(table.Data, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Flex, { as: Form, method: "PUT", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Input, { type: "hidden", readOnly: true, name: "id", value: id }, void 0, false, {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    typeof isCompleted === "undefined" && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(CancelButton, {}, void 0, false, {
        fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(ConfirmButton, {}, void 0, false, {
        fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this),
    isCompleted === true && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(CancelButton, {}, void 0, false, {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 50,
      columnNumber: 34
    }, this),
    isCompleted === false && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(ConfirmButton, {}, void 0, false, {
      fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
      lineNumber: 51,
      columnNumber: 35
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/Actions.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/components/WashesTable/Rows/Body/Driver.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
function Driver2({ driver }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(table.Data, { children: driver }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/Driver.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Body/LicensePlate.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
function LicensePlate2({ licensePlate }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(table.Data, { children: licensePlate }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/LicensePlate.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

// app/components/WashesTable/Rows/Body/Note.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
function Note2({ note }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(table.Data, { children: note }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/Note.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Body/ScheduledDate.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
function ScheduledDate2({ scheduledDate }) {
  const date = format(scheduledDate, "d 'de' MMMM',' RRRR");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(table.Data, { children: date }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/ScheduledDate.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Rows/Body/Status.tsx
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(table.Data, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Alert, { borderRadius: "full", justifyContent: "center", ...rest, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Text, { color, children: label }, void 0, false, {
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
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime());
function Row2({ children, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(table.Row, { ...rest, children }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/index.tsx",
    lineNumber: 15,
    columnNumber: 10
  }, this);
}
function Body2({
  children,
  onIntersecting
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(table.Body, { onIntersecting, children }, void 0, false, {
    fileName: "app/components/WashesTable/Rows/Body/index.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}

// app/components/WashesTable/Filters.tsx
var import_jsx_dev_runtime21 = __toESM(require_jsx_dev_runtime());
function Status3({ ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "COMPLETED", children: "Completa" }, void 0, false, {
          fileName: "app/components/WashesTable/Filters.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "INCOMPLETED", children: "Incompleta" }, void 0, false, {
          fileName: "app/components/WashesTable/Filters.tsx",
          lineNumber: 26,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "ALL", children: "Todas" }, void 0, false, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
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

// app/routes/_auth.home.tsx
var import_react13 = __toESM(require_react());
var import_jsx_dev_runtime22 = __toESM(require_jsx_dev_runtime());
function auth_home_default() {
  var _a;
  const { user, washes } = useLoaderData();
  const [params] = useSearchParams();
  const actionData = useActionData();
  const [data, setData] = (0, import_react13.useState)(washes);
  const submit = useSubmit();
  const ref = (0, import_react13.useRef)(null);
  const onLastRowIntersecting = (lastElement) => {
  };
  function onFilter() {
    var _a2;
    const form = new FormData((_a2 = ref == null ? void 0 : ref.current) != null ? _a2 : void 0);
    form.delete("cursor");
    submit(form, { preventScrollReset: true, replace: true });
    setData([]);
  }
  function onLoadMore() {
    var _a2;
    const form = new FormData((_a2 = ref == null ? void 0 : ref.current) != null ? _a2 : void 0);
    submit(form, { preventScrollReset: true, replace: true });
  }
  (0, import_react13.useEffect)(() => {
    if (actionData == null ? void 0 : actionData.wash) {
      setData((d) => {
        const arr = d;
        const index = arr.findIndex((v) => (v == null ? void 0 : v.id) === actionData.wash.id);
        if (index > -1)
          arr[index] = actionData.wash;
        return arr;
      });
    }
  }, [actionData]);
  (0, import_react13.useEffect)(() => {
    setData((d) => {
      const arr = [...d];
      washes.forEach((w) => {
        const i = arr.findIndex((v) => (v == null ? void 0 : v.id) === (w == null ? void 0 : w.id));
        if (i > -1)
          return;
        else
          arr.push(w);
      });
      return arr;
    });
  }, [washes]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    home.Container,
    {
      blockSize: "100%",
      inlineSize: "100%",
      paddingInline: [2, 2, 8],
      position: "relative",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { as: "h1", fontSize: "4xl", children: [
          "Ol\xE1, ",
          user.username
        ] }, void 0, true, {
          fileName: "app/routes/_auth.home.tsx",
          lineNumber: 162,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          Flex,
          {
            flexDir: ["column"],
            align: "center",
            paddingBlock: 6,
            gap: 6,
            inlineSize: "100%",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                Flex,
                {
                  as: Form,
                  preventScrollReset: true,
                  id: "filters",
                  ref,
                  flexDir: ["column", "column", "row"],
                  gap: 4,
                  align: "center",
                  justify: "space-evenly",
                  inlineSize: "100%",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                      Input,
                      {
                        type: "hidden",
                        readOnly: true,
                        name: "cursor",
                        value: (_a = data[data.length - 1]) == null ? void 0 : _a.id
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(washesTable.filters.Search, {}, void 0, false, {
                      fileName: "app/routes/_auth.home.tsx",
                      lineNumber: 189,
                      columnNumber: 11
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Flex, { gap: [2, 2, 6], align: "center", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(washesTable.filters.Date, { name: "startDate", size: "sm" }, void 0, false, {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 191,
                        columnNumber: 13
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { children: "at\xE9" }, void 0, false, {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 192,
                        columnNumber: 13
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(washesTable.filters.Date, { name: "endDate", size: "sm" }, void 0, false, {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 193,
                        columnNumber: 13
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/_auth.home.tsx",
                      lineNumber: 190,
                      columnNumber: 11
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                      washesTable.filters.Status,
                      {
                        name: "status",
                        inlineSize: "fit-content"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Flex, { gap: 4, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                        Button,
                        {
                          minInlineSize: "160px",
                          colorScheme: "gray",
                          borderRadius: "lg",
                          onClick: () => {
                            var _a2;
                            return (_a2 = ref.current) == null ? void 0 : _a2.reset();
                          },
                          children: "limpar campos"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/_auth.home.tsx",
                          lineNumber: 200,
                          columnNumber: 13
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                        Button,
                        {
                          minInlineSize: "160px",
                          variant: "solid",
                          colorScheme: "blue",
                          borderRadius: "lg",
                          onClick: onFilter,
                          children: "filtrar"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/_auth.home.tsx",
                          lineNumber: 208,
                          columnNumber: 13
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "app/routes/_auth.home.tsx",
                      lineNumber: 199,
                      columnNumber: 11
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 172,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Divider, {}, void 0, false, {
                fileName: "app/routes/_auth.home.tsx",
                lineNumber: 219,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Flex, { justify: "space-between", align: "center", inlineSize: "90%", children: [
                washes && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { fontWeight: "semibold", color: "gray.400", fontSize: "sm", children: data.length > 0 ? `showing ${data.length} results` : "nenhuma lavagem foi encontrada" }, void 0, false, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 222,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                  Button,
                  {
                    as: Link,
                    reloadDocument: true,
                    to: `/csv?${params}`,
                    variant: "outline",
                    borderRadius: "full",
                    rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(LuExternalLink, {}, void 0, false, {
                      fileName: "app/routes/_auth.home.tsx",
                      lineNumber: 234,
                      columnNumber: 24
                    }, this),
                    value: "EXPORT",
                    children: "baixar"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_auth.home.tsx",
                    lineNumber: 228,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/_auth.home.tsx",
                lineNumber: 220,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_auth.home.tsx",
            lineNumber: 165,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          washesTable.Table,
          {
            containerProps: { marginBlock: 4, marginBlockEnd: 8 },
            tableProps: { variant: "striped" },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(washesTable.Head, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(washesTable.Row, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(washesTable.headData.LicensePlate, {}, void 0, false, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 247,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(washesTable.headData.ScheduledDate, {}, void 0, false, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 248,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(washesTable.headData.Status, {}, void 0, false, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 249,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(washesTable.headData.Note, {}, void 0, false, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 250,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(washesTable.headData.Actions, {}, void 0, false, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 251,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_auth.home.tsx",
                lineNumber: 246,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/routes/_auth.home.tsx",
                lineNumber: 245,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(washesTable.Body, { onIntersecting: onLastRowIntersecting, children: data == null ? void 0 : data.map((w, i, arr) => {
                var _a2, _b, _c;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(washesTable.Row, { id: w == null ? void 0 : w.id, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                    washesTable.bodyData.LicensePlate,
                    {
                      licensePlate: (_a2 = w.vehicleId) != null ? _a2 : ""
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_auth.home.tsx",
                      lineNumber: 259,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                    washesTable.bodyData.ScheduledDate,
                    {
                      scheduledDate: (_b = w == null ? void 0 : w.scheduleDate) != null ? _b : ""
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_auth.home.tsx",
                      lineNumber: 262,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                    washesTable.bodyData.Status,
                    {
                      status: (w == null ? void 0 : w.isCompleted) === true ? "success" : "error",
                      label: (w == null ? void 0 : w.isCompleted) === true ? "Confirmado" : "Atrasada"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_auth.home.tsx",
                      lineNumber: 265,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(washesTable.bodyData.Note, { note: (_c = w == null ? void 0 : w.note) != null ? _c : "" }, void 0, false, {
                    fileName: "app/routes/_auth.home.tsx",
                    lineNumber: 269,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                    washesTable.bodyData.Actions,
                    {
                      isCompleted: w == null ? void 0 : w.isCompleted,
                      id: w == null ? void 0 : w.id
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_auth.home.tsx",
                      lineNumber: 270,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, w == null ? void 0 : w.id, true, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 258,
                  columnNumber: 15
                }, this);
              }) }, void 0, false, {
                fileName: "app/routes/_auth.home.tsx",
                lineNumber: 255,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_auth.home.tsx",
            lineNumber: 241,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Flex, { inlineSize: "100%", justify: "center", paddingBlockEnd: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Button, { variant: "solid", colorScheme: "blue", onClick: onLoadMore, children: "Carregar mais" }, void 0, false, {
          fileName: "app/routes/_auth.home.tsx",
          lineNumber: 280,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth.home.tsx",
          lineNumber: 279,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/_auth.home.tsx",
      lineNumber: 156,
      columnNumber: 5
    },
    this
  );
}
export {
  auth_home_default as default
};
//# sourceMappingURL=/build/routes/_auth.home-ATTWGKYI.js.map
