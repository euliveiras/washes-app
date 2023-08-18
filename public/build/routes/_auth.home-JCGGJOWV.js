import {
  Text
} from "http://localhost:3001/build/_shared/chunk-PJ2IAIPY.js";
import "http://localhost:3001/build/_shared/chunk-DC5KBJVF.js";
import "http://localhost:3001/build/_shared/chunk-PKOMFC7F.js";
import "http://localhost:3001/build/_shared/chunk-IJA4GF5B.js";
import {
  useLoaderData
} from "http://localhost:3001/build/_shared/chunk-ANXL52AQ.js";
import "http://localhost:3001/build/_shared/chunk-6SJDMTBK.js";
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

// browser-route-module:routes/_auth.home.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime = __toESM(require_jsx_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth.home.tsx"
  );
}
var headers = ({ parentHeaders }) => {
  const maxAge = parentHeaders.get("Cache-control") ?? `max-age=${60 * 60}`;
  return {
    "Cache-Control": maxAge
  };
};
function stdin_default() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "home" });
}
export {
  stdin_default as default,
  headers
};
//# sourceMappingURL=http://localhost:3001/build/routes/_auth.home-JCGGJOWV.js.map
