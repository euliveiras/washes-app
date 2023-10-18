import {
  washesTable
} from "/build/_shared/chunk-I7ELGWBU.js";
import {
  format
} from "/build/_shared/chunk-2JBWI42H.js";
import {
  GenIcon,
  MdModeEditOutline
} from "/build/_shared/chunk-S7SDDI2X.js";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  IconButton,
  Input,
  Text
} from "/build/_shared/chunk-FQ5UBCHZ.js";
import {
  useLoaderData
} from "/build/_shared/chunk-RPYEFABZ.js";
import "/build/_shared/chunk-6Y4MOXXW.js";
import {
  Form,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EDULEWIV.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_auth.wash.$id.tsx
var import_node = __toESM(require_node());

// node_modules/react-icons/lia/index.esm.js
function LiaExternalLinkAltSolid(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 32 32" }, "child": [{ "tag": "path", "attr": { "d": "M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 5 Z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 Z" } }] })(props);
}

// app/routes/_auth.wash.$id.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PageLabel({ label }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { color: "gray.500", fontSize: "sm", fontWeight: "semibold", children: label }, void 0, false, {
    fileName: "app/routes/_auth.wash.$id.tsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}
function PageTitle({ title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { fontSize: "xx-large", fontWeight: "bold", children: title }, void 0, false, {
    fileName: "app/routes/_auth.wash.$id.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}
function PageEditButton({ isEditing }) {
  const buttonProps = isEditing ? { color: "gray.400" } : { color: "blue.400" };
  const buttonText = isEditing ? "salvar" : "editar";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Button,
    {
      rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MdModeEditOutline, {}, void 0, false, {
        fileName: "app/routes/_auth.wash.$id.tsx",
        lineNumber: 112,
        columnNumber: 18
      }, this),
      variant: "ghost",
      fontSize: "sm",
      ...buttonProps,
      children: buttonText
    },
    void 0,
    false,
    {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 111,
      columnNumber: 5
    },
    this
  );
}
function Plate({ plate }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { lineHeight: 1, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { color: "blue.600", fontWeight: "bold", fontSize: "lg", children: "Placa" }, void 0, false, {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: "center", gap: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { fontWeight: "semibold", children: plate }, void 0, false, {
        fileName: "app/routes/_auth.wash.$id.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        IconButton,
        {
          "aria-label": "go to licenseplate page",
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiaExternalLinkAltSolid, { size: 24 }, void 0, false, {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 132,
            columnNumber: 17
          }, this),
          colorScheme: "blue",
          variant: "ghost"
        },
        void 0,
        false,
        {
          fileName: "app/routes/_auth.wash.$id.tsx",
          lineNumber: 130,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth.wash.$id.tsx",
    lineNumber: 124,
    columnNumber: 5
  }, this);
}
function CustomInput({
  label,
  value,
  placeholder,
  editing = false,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Grid,
    {
      gridTemplateColumns: "30% 70%",
      alignItems: "center",
      placeContent: "space-between",
      marginBlockStart: 3,
      maxInlineSize: "460px",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { fontWeight: "bold", letterSpacing: "tighter", children: label }, void 0, false, {
          fileName: "app/routes/_auth.wash.$id.tsx",
          lineNumber: 160,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Input,
          {
            defaultValue: value,
            placeholder,
            disabled: !editing,
            ...rest
          },
          void 0,
          false,
          {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 163,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 153,
      columnNumber: 5
    },
    this
  );
}
function Driver({ driver }) {
  const [showForm, setShowForm] = (0, import_react3.useState)(false);
  if (driver)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Motorista" }, void 0, false, {
        fileName: "app/routes/_auth.wash.$id.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: driver }, void 0, false, {
        fileName: "app/routes/_auth.wash.$id.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this);
  return showForm ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { as: Form, method: "PUT", flexDir: "column", gap: 8, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Flex,
      {
        flexDir: "column",
        lineHeight: 1,
        justify: "space-between",
        blockSize: "100%",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Text,
            {
              color: "blue.600",
              fontWeight: "bold",
              fontSize: "lg",
              marginBlockStart: [0, 0, 8],
              children: "Motorista"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_auth.wash.$id.tsx",
              lineNumber: 191,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CustomInput,
              {
                label: "nome",
                value: "",
                name: "DRIVER_NAME",
                editing: true
              },
              void 0,
              false,
              {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 200,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CustomInput,
              {
                label: "telefone",
                value: "",
                name: "DRIVER_PHONE",
                editing: true
              },
              void 0,
              false,
              {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 206,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 199,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/_auth.wash.$id.tsx",
        lineNumber: 185,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Button,
      {
        type: "submit",
        name: "ACTION",
        value: "ADD_DRIVER",
        colorScheme: "blue",
        variant: "solid",
        size: "sm",
        paddingInline: 8,
        width: "fit-content",
        children: "Salvar"
      },
      void 0,
      false,
      {
        fileName: "app/routes/_auth.wash.$id.tsx",
        lineNumber: 214,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/_auth.wash.$id.tsx",
    lineNumber: 184,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Button,
    {
      colorScheme: "blue",
      variant: "solid",
      size: "sm",
      width: "fit-content",
      paddingInline: 8,
      onClick: () => setShowForm(true),
      children: "Adicionar motorista"
    },
    void 0,
    false,
    {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 228,
      columnNumber: 5
    },
    this
  );
}
function auth_wash_id_default() {
  var _a;
  const { wash, error, washCycle, cycleWashes } = useLoaderData();
  const [isEditing] = (0, import_react3.useState)(false);
  console.log(wash, washCycle, cycleWashes);
  if (!wash || error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: (_a = error == null ? void 0 : error.message) != null ? _a : "Alguma coisa deu errado. Por favor, atualize a p\xE1gina" }, void 0, false, {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 275,
      columnNumber: 7
    }, this);
  }
  const formattedDate = format(wash.scheduleDate, "d 'de' MMMM");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Grid,
    {
      gridTemplateColumns: "100%",
      paddingBlock: 4,
      paddingInline: [4, 4, 16],
      gap: 8,
      placeContent: "center",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Grid,
          {
            gap: 12,
            gridAutoFlow: ["row", "row", "column"],
            gridAutoRows: ["auto", "auto", "100%"],
            alignItems: "center",
            justifyContent: "space-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { flexDir: "column", gap: 6, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { lineHeight: "shorter", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageLabel, { label: "lavagem" }, void 0, false, {
                    fileName: "app/routes/_auth.wash.$id.tsx",
                    lineNumber: 301,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: "center", gap: 0, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageTitle, { title: formattedDate }, void 0, false, {
                      fileName: "app/routes/_auth.wash.$id.tsx",
                      lineNumber: 303,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageEditButton, { isEditing }, void 0, false, {
                      fileName: "app/routes/_auth.wash.$id.tsx",
                      lineNumber: 304,
                      columnNumber: 15
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/_auth.wash.$id.tsx",
                    lineNumber: 302,
                    columnNumber: 13
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/_auth.wash.$id.tsx",
                  lineNumber: 300,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    CustomInput,
                    {
                      label: "data da lavagem",
                      value: wash.scheduleDate,
                      editing: isEditing
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_auth.wash.$id.tsx",
                      lineNumber: 308,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    CustomInput,
                    {
                      label: "nota",
                      value: wash.note,
                      placeholder: "adicione uma nota",
                      editing: isEditing
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_auth.wash.$id.tsx",
                      lineNumber: 313,
                      columnNumber: 13
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "app/routes/_auth.wash.$id.tsx",
                  lineNumber: 307,
                  columnNumber: 11
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 299,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Driver, { driver: wash.driver }, void 0, false, {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 321,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plate, { plate: wash.vehicleId }, void 0, false, {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 322,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 292,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, { marginBlockStart: 4 }, void 0, false, {
          fileName: "app/routes/_auth.wash.$id.tsx",
          lineNumber: 324,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { flexDir: "column", gap: 1, paddingBlockEnd: 4, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { fontSize: "x-large", fontWeight: "semibold", color: "blue.600", children: "Ciclo de lavagem" }, void 0, false, {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 326,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(washesTable.Table, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(washesTable.Body, { children: cycleWashes == null ? void 0 : cycleWashes.map((w) => {
            var _a2, _b, _c, _d, _e, _f;
            if (w.id === wash.id)
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(washesTable.Row, { id: w == null ? void 0 : w.id, fontSize: "lg", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  washesTable.bodyData.LicensePlate,
                  {
                    fontWeight: "bold",
                    licensePlate: (_a2 = w.vehicleId) != null ? _a2 : ""
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_auth.wash.$id.tsx",
                    lineNumber: 335,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  washesTable.bodyData.ScheduledDate,
                  {
                    scheduledDate: (_b = w == null ? void 0 : w.scheduleDate) != null ? _b : ""
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_auth.wash.$id.tsx",
                    lineNumber: 339,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  washesTable.bodyData.Status,
                  {
                    status: (w == null ? void 0 : w.isCompleted) === true ? "success" : "error",
                    label: (w == null ? void 0 : w.isCompleted) === true ? "Confirmado" : "Atrasada"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_auth.wash.$id.tsx",
                    lineNumber: 342,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(washesTable.bodyData.Note, { note: (_c = w == null ? void 0 : w.note) != null ? _c : "" }, void 0, false, {
                  fileName: "app/routes/_auth.wash.$id.tsx",
                  lineNumber: 348,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  washesTable.bodyData.Actions,
                  {
                    isCompleted: w == null ? void 0 : w.isCompleted,
                    id: w == null ? void 0 : w.id
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_auth.wash.$id.tsx",
                    lineNumber: 349,
                    columnNumber: 21
                  },
                  this
                )
              ] }, w == null ? void 0 : w.id, true, {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 334,
                columnNumber: 19
              }, this);
            else
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(washesTable.Row, { id: w == null ? void 0 : w.id, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  washesTable.bodyData.LicensePlate,
                  {
                    licensePlate: (_d = w.vehicleId) != null ? _d : ""
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_auth.wash.$id.tsx",
                    lineNumber: 358,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  washesTable.bodyData.ScheduledDate,
                  {
                    scheduledDate: (_e = w == null ? void 0 : w.scheduleDate) != null ? _e : ""
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_auth.wash.$id.tsx",
                    lineNumber: 361,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  washesTable.bodyData.Status,
                  {
                    status: (w == null ? void 0 : w.isCompleted) === true ? "success" : "error",
                    label: (w == null ? void 0 : w.isCompleted) === true ? "Confirmado" : "Atrasada"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_auth.wash.$id.tsx",
                    lineNumber: 364,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(washesTable.bodyData.Note, { note: (_f = w == null ? void 0 : w.note) != null ? _f : "" }, void 0, false, {
                  fileName: "app/routes/_auth.wash.$id.tsx",
                  lineNumber: 370,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  washesTable.bodyData.Actions,
                  {
                    isCompleted: w == null ? void 0 : w.isCompleted,
                    id: w == null ? void 0 : w.id
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_auth.wash.$id.tsx",
                    lineNumber: 371,
                    columnNumber: 21
                  },
                  this
                )
              ] }, w == null ? void 0 : w.id, true, {
                fileName: "app/routes/_auth.wash.$id.tsx",
                lineNumber: 357,
                columnNumber: 19
              }, this);
          }) }, void 0, false, {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 330,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/_auth.wash.$id.tsx",
            lineNumber: 329,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_auth.wash.$id.tsx",
          lineNumber: 325,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/_auth.wash.$id.tsx",
      lineNumber: 285,
      columnNumber: 5
    },
    this
  );
}
export {
  auth_wash_id_default as default
};
//# sourceMappingURL=/build/routes/_auth.wash.$id-XHRVBFQL.js.map
