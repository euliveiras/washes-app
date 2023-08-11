import {
  VehicleContent,
  useStepper
} from "http://localhost:3001/build/_shared/chunk-7ANU4K4S.js";
import "http://localhost:3001/build/_shared/chunk-DXSXC535.js";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Text
} from "http://localhost:3001/build/_shared/chunk-XR6MOOZN.js";
import "http://localhost:3001/build/_shared/chunk-DC5KBJVF.js";
import "http://localhost:3001/build/_shared/chunk-PKOMFC7F.js";
import "http://localhost:3001/build/_shared/chunk-IJA4GF5B.js";
import {
  Link
} from "http://localhost:3001/build/_shared/chunk-ANXL52AQ.js";
import {
  useSearchParams
} from "http://localhost:3001/build/_shared/chunk-6SJDMTBK.js";
import {
  require_jsx_runtime
} from "http://localhost:3001/build/_shared/chunk-OKS54H4S.js";
import "http://localhost:3001/build/_shared/chunk-3YOGVSK4.js";
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
var import_jsx_runtime = __toESM(require_jsx_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth.new-wash._index.tsx"
  );
}
var content = [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VehicleContent, {}, "vehicle-content")];
function stdin_default() {
  const [searchParams] = useSearchParams();
  const { Stepper, steps } = useStepper();
  const step = Number(searchParams.get("step") ?? 0);
  const stepValue = JSON.parse(searchParams.get(steps[step].label) ?? "null");
  const isEqualOrGreaterThanZero = step - 1 >= 0;
  const isLowerThanStepLength = step < steps.length - 1;
  const previousUrlParams = new URLSearchParams(searchParams);
  const nextUrlParams = new URLSearchParams(searchParams);
  previousUrlParams.set("step", (step - 1).toString());
  nextUrlParams.set("step", (step + 1).toString());
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, { paddingInline: 8, gridTemplateRows: "1fr auto", inlineSize: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      Grid,
      {
        gridAutoFlow: "column",
        gap: "1.125em",
        gridTemplateColumns: "auto 1fr",
        gridTemplateRows: "100%",
        marginInline: [0, 0, 4],
        paddingBlockStart: [4, 4, 8],
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, { activeStep: step, steps }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            Grid,
            {
              blockSize: "100%",
              inlineSize: "100%",
              paddingInline: 4,
              gridAutoRows: "min-content",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  Text,
                  {
                    placeSelf: "center",
                    as: "h1",
                    fontSize: "2xl",
                    marginBlockEnd: 4,
                    children: steps[step].modalTitle
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  Box,
                  {
                    inlineSize: "100%",
                    marginInline: "auto",
                    maxInlineSize: "container.md",
                    children: content[step]
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      Flex,
      {
        placeSelf: "flex-end",
        blockSize: "100%",
        align: "center",
        paddingBlock: 8,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Button,
            {
              as: Link,
              isDisabled: !steps[step].isNullable,
              colorScheme: "purple",
              variant: "ghost",
              mr: 3,
              size: "sm",
              to: `/new-wash?${nextUrlParams.toString()}`,
              children: "pular"
            },
            "jump-btn"
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Button,
            {
              as: Link,
              colorScheme: "gray",
              variant: "ghost",
              mr: 3,
              isDisabled: !isEqualOrGreaterThanZero,
              to: `/new-wash?${previousUrlParams.toString()}`,
              marginInlineEnd: "0",
              children: "voltar"
            },
            "back-btn"
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Divider,
            {
              blockSize: "100%",
              orientation: "vertical",
              inlineSize: "8px",
              borderColor: "gray.400"
            }
          ),
          step === steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { variant: "ghost", colorScheme: "blue", children: "finalizar" }, "finish-btn") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Button,
            {
              as: Link,
              isDisabled: !stepValue || !isLowerThanStepLength,
              variant: "ghost",
              colorScheme: "blue",
              to: `/new-wash?${nextUrlParams.toString()}`,
              children: "pr\xF3ximo"
            },
            "next-btn"
          )
        ]
      }
    )
  ] });
}
export {
  stdin_default as default
};
//# sourceMappingURL=http://localhost:3001/build/routes/_auth.new-wash._index-HLXPRSPB.js.map
