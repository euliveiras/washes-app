import {
  LuExternalLink
} from "/build/_shared/chunk-YEYAHZMF.js";
import {
  require_edge
} from "/build/_shared/chunk-J5LZUC2L.js";
import {
  washesTable
} from "/build/_shared/chunk-I7ELGWBU.js";
import "/build/_shared/chunk-2JBWI42H.js";
import "/build/_shared/chunk-S7SDDI2X.js";
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Text
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

// app/routes/_auth.home.tsx
var import_react4 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function auth_home_default() {
  var _a;
  const { user, washes } = useLoaderData();
  const [params] = useSearchParams();
  const actionData = useActionData();
  const [data, setData] = (0, import_react4.useState)(washes);
  const submit = useSubmit();
  const ref = (0, import_react4.useRef)(null);
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
  (0, import_react4.useEffect)(() => {
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
  (0, import_react4.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    home.Container,
    {
      blockSize: "100%",
      inlineSize: "100%",
      paddingInline: [2, 2, 8],
      position: "relative",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { as: "h1", fontSize: "4xl", children: [
          "Ol\xE1, ",
          user.username
        ] }, void 0, true, {
          fileName: "app/routes/_auth.home.tsx",
          lineNumber: 162,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Flex,
          {
            flexDir: ["column"],
            align: "center",
            paddingBlock: 6,
            gap: 6,
            inlineSize: "100%",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(washesTable.filters.Search, {}, void 0, false, {
                      fileName: "app/routes/_auth.home.tsx",
                      lineNumber: 189,
                      columnNumber: 11
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { gap: [2, 2, 6], align: "center", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(washesTable.filters.Date, { name: "startDate", size: "sm" }, void 0, false, {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 191,
                        columnNumber: 13
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: "at\xE9" }, void 0, false, {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 192,
                        columnNumber: 13
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(washesTable.filters.Date, { name: "endDate", size: "sm" }, void 0, false, {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 193,
                        columnNumber: 13
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/_auth.home.tsx",
                      lineNumber: 190,
                      columnNumber: 11
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { gap: 4, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, {}, void 0, false, {
                fileName: "app/routes/_auth.home.tsx",
                lineNumber: 219,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { justify: "space-between", align: "center", inlineSize: "90%", children: [
                washes && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { fontWeight: "semibold", color: "gray.400", fontSize: "sm", children: data.length > 0 ? `showing ${data.length} results` : "nenhuma lavagem foi encontrada" }, void 0, false, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 222,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  Button,
                  {
                    as: Link,
                    reloadDocument: true,
                    to: `/csv?${params}`,
                    variant: "outline",
                    borderRadius: "full",
                    rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LuExternalLink, {}, void 0, false, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          washesTable.Table,
          {
            containerProps: { marginBlock: 4, marginBlockEnd: 8 },
            tableProps: { variant: "striped" },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(washesTable.Head, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(washesTable.Row, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(washesTable.headData.LicensePlate, {}, void 0, false, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 247,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(washesTable.headData.ScheduledDate, {}, void 0, false, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 248,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(washesTable.headData.Status, {}, void 0, false, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 249,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(washesTable.headData.Note, {}, void 0, false, {
                  fileName: "app/routes/_auth.home.tsx",
                  lineNumber: 250,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(washesTable.headData.Actions, {}, void 0, false, {
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(washesTable.Body, { onIntersecting: onLastRowIntersecting, children: data == null ? void 0 : data.map((w, i, arr) => {
                var _a2, _b, _c;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  washesTable.Row,
                  {
                    id: w == null ? void 0 : w.id,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                        washesTable.bodyData.LicensePlate,
                        {
                          licensePlate: (_a2 = w.vehicleId) != null ? _a2 : ""
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
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                        washesTable.bodyData.ScheduledDate,
                        {
                          scheduledDate: (_b = w == null ? void 0 : w.scheduleDate) != null ? _b : ""
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
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                        washesTable.bodyData.Status,
                        {
                          status: (w == null ? void 0 : w.isCompleted) === true ? "success" : "error",
                          label: (w == null ? void 0 : w.isCompleted) === true ? "Confirmado" : "Atrasada"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/_auth.home.tsx",
                          lineNumber: 268,
                          columnNumber: 17
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(washesTable.bodyData.Note, { note: (_c = w == null ? void 0 : w.note) != null ? _c : "" }, void 0, false, {
                        fileName: "app/routes/_auth.home.tsx",
                        lineNumber: 272,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                        washesTable.bodyData.Actions,
                        {
                          isCompleted: w == null ? void 0 : w.isCompleted,
                          id: w == null ? void 0 : w.id
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/_auth.home.tsx",
                          lineNumber: 273,
                          columnNumber: 17
                        },
                        this
                      )
                    ]
                  },
                  w == null ? void 0 : w.id,
                  true,
                  {
                    fileName: "app/routes/_auth.home.tsx",
                    lineNumber: 258,
                    columnNumber: 15
                  },
                  this
                );
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { inlineSize: "100%", justify: "center", paddingBlockEnd: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "solid", colorScheme: "blue", onClick: onLoadMore, children: "Carregar mais" }, void 0, false, {
          fileName: "app/routes/_auth.home.tsx",
          lineNumber: 283,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth.home.tsx",
          lineNumber: 282,
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
//# sourceMappingURL=/build/routes/_auth.home-WRGR6GPR.js.map
