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

// app/routes/vehicle-search/route.ts
var route_exports = {};
__export(route_exports, {
  loader: () => loader
});
var import_react_router = require("react-router"), vehicles = [
  {
    licensePlate: "12KJS0",
    type: "Leve"
  },
  {
    licensePlate: "KYHAS0",
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
async function loader({ request }) {
  let query = new URL(request.url).searchParams.get("query");
  return typeof query != "string" || query == "" ? (0, import_react_router.json)(null) : (0, import_react_router.json)(vehicles.filter((v) => v.licensePlate === query));
}

// app/routes/washes-search/route.ts
var route_exports2 = {};
__export(route_exports2, {
  loader: () => loader2
});
var import_react_router2 = require("react-router");

// src/domain/modules/wash-cycle/use-cases/find-next-cycle-by-license-plate.ts
var FindNextCycleByLicensePlate = class {
  constructor(washCycleRepo) {
    this.washCycleRepo = washCycleRepo;
  }
  async execute(licensePlate) {
    return { washCycle: await this.washCycleRepo.findNextCycleByLicensePlate(licensePlate) };
  }
};

// src/domain/modules/wash-cycle/helpers/format-wash-cycle-fields.ts
var FormatField = class {
  static stringToArray(arr, separator) {
    return arr.split(",");
  }
  static arrayToString(arr) {
    return arr.toString();
  }
};

// src/domain/modules/wash-cycle/entities/WashCycle.ts
var import_crypto = require("crypto");

// src/domain/shared/date-manipulator.ts
var import_date_fns = require("date-fns");
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
      return this.parseDateToString((0, import_date_fns.addMonths)(this.parseISOStringToDate(date), amount));
    },
    parseDateToString(date) {
      return (0, import_date_fns.formatISO)(date);
    },
    addDaysToDate(date, amount) {
      return this.parseDateToString((0, import_date_fns.addDays)(this.parseISOStringToDate(date), amount));
    },
    isSunday(date) {
      return (0, import_date_fns.isSunday)(this.parseISOStringToDate(date));
    },
    isSameDay(x, y) {
      return (0, import_date_fns.isSameDay)(this.parseISOStringToDate(x), this.parseISOStringToDate(y));
    }
  };
}
var dateManipulator = wrapper();

// src/domain/modules/wash-cycle/entities/WashCycle.ts
var WashCycle = class {
  constructor(props) {
    this.validateStartDate(props.startDate, props.endDate), this.validateEndDate(props.endDate, props.startDate), this._props = {
      ...props,
      id: props.id ?? (0, import_crypto.randomUUID)(),
      washesId: props.washesId ?? [],
      completedWashes: props.completedWashes ?? []
    };
  }
  get id() {
    return this._props.id;
  }
  get vehicleId() {
    return this._props.vehicleId;
  }
  get startDate() {
    return this._props.startDate;
  }
  set startDate(date) {
    this.validateStartDate(date), this._props.startDate = date;
  }
  validateStartDate(date, endDate) {
    var _a;
    if (dateManipulator.isAfter(date, ((_a = this._props) == null ? void 0 : _a.endDate) ?? endDate))
      throw new Error("Date cannot be before today");
  }
  get endDate() {
    return this._props.endDate;
  }
  set endDate(date) {
    this.validateEndDate(date), this._props.endDate = date;
  }
  validateEndDate(date, startDate) {
    var _a;
    if (dateManipulator.isBefore(date, ((_a = this._props) == null ? void 0 : _a.endDate) ?? startDate))
      throw new Error("End date cannot be before start date");
  }
  get note() {
    return this._props.note;
  }
  set note(note) {
    this._props.note = note;
  }
  get washesId() {
    return this._props.washesId;
  }
  addWashId(id) {
    this._props.washesId.push(id);
  }
  get completedWashes() {
    return this._props.completedWashes;
  }
  addCompletedWashId(id) {
    this._props.completedWashes.push(id);
  }
};

// src/infra/database/prisma/mappers/prisma-wash-cycle-mapper.ts
var PrismaWashCycleMapper = class {
  static toDomain(raw) {
    return new WashCycle({
      id: raw.id,
      endDate: raw.endDate,
      startDate: raw.startDate,
      vehicleId: raw.vehicleId,
      completedWashes: FormatField.stringToArray(raw.completedWashes, ","),
      washesId: FormatField.stringToArray(raw.washesId, ",")
    });
  }
  static toPrisma(washCycle) {
    return {
      id: washCycle.id,
      endDate: washCycle.endDate,
      startDate: washCycle.startDate,
      vehicleId: washCycle.vehicleId,
      completedWashes: FormatField.arrayToString(washCycle.completedWashes),
      washCycleesId: FormatField.arrayToString(washCycle.washesId)
    };
  }
};

// src/infra/database/prisma/prisma.ts
var import_client = require("@prisma/client"), globalForPrisma = global, prisma = globalForPrisma.prisma || new import_client.PrismaClient({ log: ["query", "info", "warn", "error"] });
globalForPrisma.prisma = prisma;

// src/infra/database/prisma/repositories/wash-cycle-repository.ts
var PrismaWashCycleRepository = class {
  async create(cycle) {
  }
  async find(id) {
  }
  async findNextCycleByLicensePlate(vehicleId) {
    let cycle = await prisma.washCycle.findFirst({
      where: { vehicleId }
    });
    return cycle ? PrismaWashCycleMapper.toDomain(cycle) : null;
  }
  async update(id, data) {
  }
};

// src/domain/modules/wash/entities/Wash.ts
var import_crypto2 = require("crypto"), Wash = class {
  constructor(props) {
    this._props = {
      ...props,
      id: props.id ?? (0, import_crypto2.randomUUID)(),
      isCompleted: typeof props.isCompleted == "boolean" ? props.isCompleted : !1
    };
  }
  get id() {
    return this._props.id;
  }
  get vehicleId() {
    return this._props.vehicleId;
  }
  get scheduleDate() {
    return this._props.scheduleDate;
  }
  set scheduleDate(date) {
    this._props.scheduleDate = date;
  }
  get cycleId() {
    return this._props.cycleId;
  }
  get note() {
    return this._props.note;
  }
  set note(note) {
    this._props.note = note;
  }
  get isCompleted() {
    return this._props.isCompleted;
  }
  set isCompleted(bool) {
    this._props.isCompleted = bool;
  }
  get createdBy() {
    return this._props.createdBy;
  }
};

// src/infra/database/prisma/mappers/prisma-wash-mapper.ts
var PrismaWashMapper = class {
  static toDomain(raw) {
    return new Wash({
      createdBy: raw.createdBy,
      cycleId: raw.cycleId,
      scheduleDate: raw.scheduleDate,
      vehicleId: raw.vehicleId,
      id: raw.id,
      isCompleted: raw.isCompleted,
      note: raw.note
    });
  }
  static toPrisma(wash) {
    return {
      createdBy: wash.createdBy,
      cycleId: wash.cycleId,
      scheduleDate: wash.scheduleDate,
      vehicleId: wash.vehicleId,
      id: wash.id,
      isCompleted: wash.isCompleted,
      note: wash.note
    };
  }
};

// src/infra/database/prisma/repositories/washes-repository.ts
var PrismaWashRepository = class {
  async findWashesByCycleId(cycleId) {
    return (await prisma.wash.findMany({
      where: { cycleId }
    })).map((w) => PrismaWashMapper.toDomain(w));
  }
  async create(wash) {
  }
  async findById(id) {
  }
  async update(id, data) {
  }
};

// src/domain/modules/wash/use-cases/find-washes-by-cycle-id.ts
var FindWashesByCycleId = class {
  constructor(washRepo) {
    this.washRepo = washRepo;
  }
  async execute(id) {
    return { washes: await this.washRepo.findWashesByCycleId(id) };
  }
};

// src/infra/http/controllers/get-next-washes-and-cycle.controller.ts
async function getNextWashesAndCycle(licensePlate) {
  try {
    let washCycleRepo = new PrismaWashCycleRepository(), washRepo = new PrismaWashRepository(), findNextCycleByLicensePlate = new FindNextCycleByLicensePlate(
      washCycleRepo
    ), findWashesByCycleId = new FindWashesByCycleId(washRepo), { washCycle } = await findNextCycleByLicensePlate.execute(
      licensePlate
    );
    if (!washCycle)
      return { washCycle: null, washes: [] };
    let { washes } = await findWashesByCycleId.execute(washCycle.id);
    return { washCycle, washes };
  } catch (e) {
    return e instanceof Error ? { error: e.message } : { error: "Unknow error" };
  }
}

// app/routes/washes-search/route.ts
async function loader2({ request }) {
  let query = new URL(request.url).searchParams.get("query");
  if (typeof query != "string" || query == "")
    return (0, import_react_router2.json)(null);
  let { error, washCycle, washes } = await getNextWashesAndCycle(query);
  return error ? (0, import_react_router2.json)({ error }) : (0, import_react_router2.json)({ washCycle, washes });
}

// app/routes/_auth.home.tsx
var auth_home_exports = {};
__export(auth_home_exports, {
  default: () => auth_home_default,
  headers: () => headers,
  loader: () => loader3
});
var import_react9 = require("@chakra-ui/react"), import_node2 = require("@remix-run/node"), import_react10 = require("@remix-run/react");

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

// src/domain/modules/user/entities/User.ts
var import_crypto3 = require("crypto"), User = class {
  constructor(data) {
    this._props = {
      ...data,
      id: data.id ?? (0, import_crypto3.randomUUID)(),
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  createSession() {
    this._props.sessionId = (0, import_crypto3.randomUUID)();
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
var import_node = require("@remix-run/node"), { commitSession, destroySession, getSession } = (0, import_node.createCookieSessionStorage)({
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
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), headers = ({ parentHeaders }) => ({
  "Cache-Control": parentHeaders.get("Cache-control") ?? "max-age=3600"
});
async function loader3({ request }) {
  let session = await getSession(request.headers.get("Cookie")), token = session.get("token");
  if (console.log("home loader"), !token)
    throw (0, import_node2.redirect)("/sign-in");
  let { error, user } = await validateSessionId({ sessionId: token });
  if (error || !user)
    throw session.unset("token"), (0, import_node2.redirect)("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  return (0, import_node2.json)(
    { user }
  );
}
function auth_home_default() {
  let data = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react9.Text, { children: "home" }, void 0, !1, {
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
  loader: () => loader4
});
var import_react12 = require("@chakra-ui/react"), import_bs2 = require("react-icons/bs"), import_md = require("react-icons/md"), import_node3 = require("@remix-run/node"), import_react13 = require("@remix-run/react");

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

// app/components/footer.tsx
var import_react11 = require("@chakra-ui/react"), import_bs = require("react-icons/bs"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.Center, { textAlign: "center", paddingBlock: 0.5, gap: 2, bg: "blue.500", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.Text, { fontSize: "xs", color: "white", children: [
      "Feito por",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react11.Link, { target: "_blank", href: "https://github.com/euliveiras", children: "@euliveiras" }, void 0, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_bs.BsMoonStars, { size: "12px", color: "white" }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/sign-in.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
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
  }) : (session.set("token", sessionId), (0, import_node3.redirect)("/home", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  }));
}
async function loader4({ request }) {
  let token = (await getSession(request.headers.get("Cookie"))).get("token");
  if (!token)
    return (0, import_node3.json)({});
  let { user } = await validateSessionId({ sessionId: token });
  return user ? (0, import_node3.redirect)("/home") : (0, import_node3.json)({});
}
function CustomInputGroup({
  icon,
  name,
  type,
  isError,
  isIdle,
  isSubmitting
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react12.InputGroup,
    {
      sx: {
        "--clr": isError ? "#E53E3E" : isSubmitting ? "#48BB78" : isIdle ? "#000000" : "#3182ce"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react12.InputRightElement, { fontSize: 26, children: icon }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 108,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_react12.Input,
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
            lineNumber: 109,
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
      lineNumber: 97,
      columnNumber: 5
    },
    this
  );
}
function sign_in_default() {
  let errors = (0, import_react13.useActionData)(), navigation = (0, import_react13.useNavigation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react12.Box, { h: "100dvh", w: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react12.Grid, { h: "100%", w: "100%", templateRows: "1fr auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react12.VStack, { paddingBlockStart: [32, 20], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react12.HStack, { spacing: "4px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_bs2.BsPerson, { size: "20px", color: "#000000", strokeWidth: "0.8px" }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react12.Text, { fontWeight: "bold", fontSize: "md", children: "/ login" }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_react12.VStack,
        {
          as: import_react13.Form,
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react12.FormControl, { isRequired: !0, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react12.FormLabel, { fontSize: "sm", children: "email" }, void 0, !1, {
                fileName: "app/routes/sign-in.tsx",
                lineNumber: 151,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                CustomInputGroup,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_md.MdOutlineEmail, { color: "var(--clr)" }, void 0, !1, {
                    fileName: "app/routes/sign-in.tsx",
                    lineNumber: 153,
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
                  lineNumber: 152,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 150,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react12.FormControl, { isRequired: !0, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react12.FormLabel, { fontSize: "sm", children: "password" }, void 0, !1, {
                fileName: "app/routes/sign-in.tsx",
                lineNumber: 162,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                CustomInputGroup,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_md.MdLockOutline, { color: "var(--clr)" }, void 0, !1, {
                    fileName: "app/routes/sign-in.tsx",
                    lineNumber: 164,
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
                  lineNumber: 163,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 161,
              columnNumber: 13
            }, this),
            (errors == null ? void 0 : errors.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react12.Text, { color: "red.500", children: errors == null ? void 0 : errors.error }, void 0, !1, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 172,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react12.Button,
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
                lineNumber: 173,
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
          lineNumber: 138,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 186,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 130,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 129,
    columnNumber: 5
  }, this);
}

// app/routes/sign-up.tsx
var sign_up_exports = {};
__export(sign_up_exports, {
  action: () => action2,
  default: () => sign_up_default
});
var import_node4 = require("@remix-run/node"), import_react14 = require("@remix-run/react");

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
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
async function action2({ request }) {
  let form = await request.formData(), username = form.get("username"), password = form.get("password"), email = form.get("email");
  if (typeof username != "string" || typeof password != "string" || typeof email != "string")
    return new import_node4.Response(JSON.stringify({ error: "credentials is invalid" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  let { error } = await createUserController({ email, password, username });
  return error ? (console.log(error), new import_node4.Response(null, {
    status: 400,
    statusText: error
  })) : (0, import_node4.redirect)("/sign-in", 201);
}
function sign_up_default() {
  let data = (0, import_react14.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Sign up" }, void 0, !1, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    data ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { style: { color: "red" }, children: data.error }, void 0, !1, {
      fileName: "app/routes/sign-up.tsx",
      lineNumber: 40,
      columnNumber: 21
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react14.Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { children: [
        "username",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "text", name: "username" }, void 0, !1, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 44,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { children: [
        "email",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "text", name: "email" }, void 0, !1, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 48,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { children: [
        "password",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "password", name: "password" }, void 0, !1, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 52,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "submit", children: "Logar" }, void 0, !1, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react14.Link, { to: "/sign-in", children: "logar" }, void 0, !1, {
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
  loader: () => loader5
});
var import_node5 = require("@remix-run/node");
async function loader5() {
  return (0, import_node5.redirect)("/home");
}

// app/routes/_auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => auth_default,
  headers: () => headers2,
  loader: () => loader6
});
var import_node6 = require("@remix-run/node"), import_node7 = require("@remix-run/node"), import_react33 = require("@remix-run/react");

// app/components/header.tsx
var import_react30 = require("@chakra-ui/react"), import_md4 = require("react-icons/md"), import_lu = require("react-icons/lu"), import_react31 = require("@remix-run/react"), import_react32 = require("react");

// app/components/SearchInput.tsx
var import_react15 = require("@chakra-ui/react"), import_md2 = require("react-icons/md"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function SearchInput() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_react15.InputGroup,
    {
      display: ["none", "none", "block"],
      role: "group",
      sx: { "input:focus ~ div": { svg: { color: "blackAlpha.900" } } },
      maxInlineSize: 96,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_react15.Input,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.InputRightElement, { pointerEvents: "none", fontSize: 26, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_react15.Icon,
          {
            color: "gray.200",
            as: import_md2.MdOutlineSearch,
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
var import_react17 = require("@chakra-ui/react");

// app/components/Avatar.tsx
var import_react16 = require("@chakra-ui/react"), import_rx = require("react-icons/rx"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Avatar({ containerProps, avatarProps, user }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_react16.HStack,
    {
      paddingInline: 2,
      display: ["none", "none", "flex"],
      ...containerProps,
      children: [
        user && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react16.Menu, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react16.MenuButton, { as: import_react16.Button, variant: "ghost", rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_rx.RxChevronDown, {}, void 0, !1, {
            fileName: "app/components/Avatar.tsx",
            lineNumber: 31,
            columnNumber: 62
          }, this), children: user.username }, void 0, !1, {
            fileName: "app/components/Avatar.tsx",
            lineNumber: 31,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react16.MenuList, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react16.MenuItem, { children: "Configura\xE7\xF5es" }, void 0, !1, {
              fileName: "app/components/Avatar.tsx",
              lineNumber: 35,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react16.MenuItem, { as: import_react16.Text, color: "red.400", children: "Sair" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react16.Avatar, { size: "md", name: "Natan", ...avatarProps }, void 0, !1, {
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
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Drawer({ isOpen, onClose, finalFocusRef, user }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    import_react17.Drawer,
    {
      isOpen,
      placement: "right",
      onClose,
      finalFocusRef,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react17.DrawerOverlay, {}, void 0, !1, {
          fileName: "app/components/Drawer.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react17.DrawerContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react17.DrawerCloseButton, { top: 4 }, void 0, !1, {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_react17.DrawerHeader,
            {
              as: import_react17.HStack,
              inlineSize: "min-content",
              paddingBlock: 2,
              paddingInline: 4,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react17.DrawerBody, {}, void 0, !1, {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react17.DrawerFooter, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react17.Button, { variant: "outline", mr: 3, onClick: onClose, children: "Cancel" }, void 0, !1, {
              fileName: "app/components/Drawer.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react17.Button, { colorScheme: "blue", children: "Save" }, void 0, !1, {
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

// app/components/NewWashModal/index.ts
var import_react28 = require("@chakra-ui/react"), import_react29 = require("react");

// app/components/NewWashModal/Modal.tsx
var import_react26 = require("@chakra-ui/react"), import_react27 = require("react");

// app/components/NewWashModal/Stepper/index.ts
var import_md3 = require("react-icons/md"), import_go = require("react-icons/go"), import_react19 = require("@chakra-ui/react");

// app/components/NewWashModal/Stepper/Stepper.tsx
var import_react18 = require("@chakra-ui/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Stepper({ steps: steps2, activeStep }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react18.Stepper, { index: activeStep, orientation: "vertical", blockSize: "100%", children: steps2.map(({ IconIncomplete, IconActive, label }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react18.Step, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react18.StepIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_react18.StepStatus,
      {
        complete: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react18.StepIcon, {}, void 0, !1, {
          fileName: "app/components/NewWashModal/Stepper/Stepper.tsx",
          lineNumber: 25,
          columnNumber: 25
        }, this),
        incomplete: IconIncomplete,
        active: IconActive
      },
      void 0,
      !1,
      {
        fileName: "app/components/NewWashModal/Stepper/Stepper.tsx",
        lineNumber: 24,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/NewWashModal/Stepper/Stepper.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react18.Box, { flexShrink: "0", display: ["none", "none", "none", "block"], children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react18.StepTitle, { children: label }, void 0, !1, {
      fileName: "app/components/NewWashModal/Stepper/Stepper.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NewWashModal/Stepper/Stepper.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react18.StepSeparator, {}, void 0, !1, {
      fileName: "app/components/NewWashModal/Stepper/Stepper.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this)
  ] }, index, !0, {
    fileName: "app/components/NewWashModal/Stepper/Stepper.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/NewWashModal/Stepper/Stepper.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/components/NewWashModal/Stepper/index.ts
var steps = [
  {
    label: "vehicle",
    IconIncomplete: import_md3.MdDirectionsCarFilled,
    IconActive: import_md3.MdDirectionsCarFilled,
    isNullable: !1,
    modalTitle: "Escolher ve\xEDculo"
  },
  {
    label: "washes",
    IconIncomplete: import_md3.MdWaterDrop,
    IconActive: import_md3.MdWaterDrop,
    isNullable: !1,
    modalTitle: "Cadastrar lavagens"
  },
  {
    label: "Motorista",
    IconIncomplete: import_md3.MdPerson2,
    IconActive: import_md3.MdPerson2,
    isNullable: !0,
    modalTitle: "Escolher motorista"
  },
  {
    label: "Organiza\xE7\xE3o",
    IconIncomplete: import_go.GoOrganization,
    IconActive: import_go.GoOrganization,
    isNullable: !0,
    modalTitle: "Escolher organiza\xE7\xE3o"
  },
  {
    label: "Finalizar",
    IconIncomplete: import_md3.MdCheck,
    IconActive: import_md3.MdCheck,
    isNullable: !1,
    modalTitle: "Confirmar op\xE7\xF5es"
  }
];
function useStepper() {
  let { activeStep, goToNext, goToPrevious, setActiveStep } = (0, import_react19.useSteps)({
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

// app/components/NewWashModal/VehicleContent/index.tsx
var import_react22 = require("@chakra-ui/react"), import_react_hook_form2 = require("react-hook-form");

// app/components/SearchEntity/index.ts
var import_react_hook_form = require("react-hook-form"), import_react_router_dom = require("react-router-dom");

// app/components/SearchEntity/SearchInput.tsx
var import_react20 = require("@chakra-ui/react"), import_react21 = require("react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function SearchInput2(searchInputProps) {
  let timeoutId = (0, import_react21.useRef)(null);
  function onInputQueryChange(e) {
    e.target.form && (timeoutId.current && clearTimeout(timeoutId.current), timeoutId.current = setTimeout(
      () => searchInputProps.onInputQueryChange(e.target.form),
      1e3
    ));
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.InputGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    import_react20.Input,
    {
      name: "query",
      rounded: "full",
      onChange: onInputQueryChange,
      ...searchInputProps
    },
    void 0,
    !1,
    {
      fileName: "app/components/SearchEntity/SearchInput.tsx",
      lineNumber: 26,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/SearchEntity/SearchInput.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/SearchEntity/SearchInput.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/components/SearchEntity/index.ts
function useSearchEntity() {
  let fetcher = (0, import_react_router_dom.useFetcher)(), useFormProps = (0, import_react_hook_form.useForm)();
  return {
    fetcher,
    useFormProps
  };
}

// app/components/NewWashModal/VehicleContent/index.tsx
var import_react23 = require("react"), import_react24 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), selectOptions = [
  "Extra leve",
  "Leve",
  "Vuc",
  "Toco",
  "Truck",
  "Bitruck",
  "Carreta"
];
function VehicleContent({
  searchInputProps,
  setVehicleErrors,
  setVehicleFn
}) {
  let { fetcher } = useSearchEntity(), {
    watch,
    setValue,
    register,
    setError,
    clearErrors,
    formState: { errors }
  } = (0, import_react_hook_form2.useForm)({
    defaultValues: {
      create: void 0,
      licensePlate: void 0,
      type: void 0
    }
  }), createVehicleFetcher = (0, import_react24.useFetcher)(), data = fetcher.data, timeoutId = (0, import_react23.useRef)(null), isCreateVehicleTrue = watch("create"), licensePlate = watch("licensePlate"), type = watch("type"), plaqueAlreadyExistsMessage = "Essa placa j\xE1 existe", vehicleIsRequiredMessage = "Placa e tipo do ve\xEDculo s\xE3o obrigat\xF3rios";
  function setVehicleData({
    licensePlate: licensePlate2,
    type: type2
  }) {
    setValue("licensePlate", licensePlate2), setValue("type", type2), setVehicleFn({ licensePlate: licensePlate2, type: type2, create: isCreateVehicleTrue });
  }
  function setCreateVehicle(v) {
    setValue("create", v);
  }
  function onCheckboxChange(e) {
    setVehicleData({ licensePlate: null, type: null }), setCreateVehicle(e.target.checked), clearErrors("licensePlate"), e.target.checked || createVehicleFetcher.submit(
      { query: "" },
      { action: "/vehicle-search", method: "get" }
    );
  }
  function onFormChange(e) {
    var _a;
    let form = new FormData(e.target.form), licensePlate2 = (_a = form.get("licensePlate")) == null ? void 0 : _a.toString(), type2 = form.get("type");
    timeoutId.current && clearTimeout(timeoutId.current), timeoutId.current = setTimeout(() => {
      setVehicleData({ licensePlate: licensePlate2, type: type2 }), createVehicleFetcher.submit(
        { query: e.target.value },
        { action: "/vehicle-search", method: "get" }
      );
    }, 1e3);
  }
  function onInputClick(v) {
    setVehicleErrors(vehicleIsRequiredMessage, "REMOVE"), setVehicleData(v);
  }
  return (0, import_react23.useEffect)(() => {
    var _a;
    ((_a = createVehicleFetcher.data) == null ? void 0 : _a.length) > 0 ? (setError("licensePlate", {
      type: "custom",
      message: plaqueAlreadyExistsMessage
    }), setVehicleErrors(plaqueAlreadyExistsMessage, "ADD")) : (!(createVehicleFetcher != null && createVehicleFetcher.data) || (createVehicleFetcher == null ? void 0 : createVehicleFetcher.data.length) === 0) && (clearErrors("licensePlate"), setVehicleErrors(plaqueAlreadyExistsMessage, "REMOVE"));
  }, [setError, createVehicleFetcher.data, clearErrors, setVehicleErrors]), (0, import_react23.useEffect)(() => {
    licensePlate === void 0 || licensePlate === "" || licensePlate === null || type === void 0 || type === "" || type === null ? setVehicleErrors(vehicleIsRequiredMessage, "ADD") : setVehicleErrors(vehicleIsRequiredMessage, "REMOVE");
  }, [licensePlate, type, setVehicleErrors]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    import_react22.Grid,
    {
      gridAutoRows: "min-content",
      paddingBlockEnd: [8],
      gap: 4,
      gridAutoFlow: ["row", "row", "column"],
      placeItems: ["center", "center", "start"],
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          import_react22.Flex,
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
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(fetcher.Form, { action: "/vehicle-search", method: "get", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                SearchInput2,
                {
                  onInputQueryChange: fetcher.submit,
                  placeholder: "procurar entidade",
                  _placeholder: { textAlign: "center" },
                  maxInlineSize: "280px",
                  marginInline: "auto",
                  isDisabled: isCreateVehicleTrue,
                  ...searchInputProps
                },
                void 0,
                !1,
                {
                  fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                  lineNumber: 186,
                  columnNumber: 13
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                lineNumber: 185,
                columnNumber: 11
              }, this),
              !isCreateVehicleTrue && data && (data == null ? void 0 : data.length) >= 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                  import_react22.Text,
                  {
                    inlineSize: "fit-content",
                    marginInline: "auto",
                    marginBlockEnd: 4,
                    fontSize: "sm",
                    color: "gray.400",
                    children: (data == null ? void 0 : data.length) === 0 ? "nenhum resultado encontrado :(" : `mostrando ${data == null ? void 0 : data.length} resultados`
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                    lineNumber: 198,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.Grid, { gap: 4, maxBlockSize: "240px", overflow: "scroll", children: data == null ? void 0 : data.map((v, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                  import_react22.Flex,
                  {
                    inlineSize: "100%",
                    flexDir: "column",
                    gap: 6,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                        import_react22.FormControl,
                        {
                          as: import_react22.Flex,
                          flexDir: "column",
                          alignItems: "center",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.FormLabel, { children: "Placa" }, void 0, !1, {
                              fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                              lineNumber: 223,
                              columnNumber: 25
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                              import_react22.Input,
                              {
                                maxInlineSize: "200px",
                                marginBlockEnd: data.length - 1 === i ? 4 : 0,
                                type: "button",
                                defaultValue: v.licensePlate,
                                borderColor: watch("licensePlate") === v.licensePlate ? "blue.400" : "gray.200",
                                _hover: {
                                  borderColor: watch("licensePlate") === v.licensePlate ? "blue.400" : "gray.300"
                                },
                                focusBorderColor: watch("licensePlate") === v.licensePlate ? "blue.400" : "gray.300",
                                onClick: () => onInputClick(v)
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                                lineNumber: 224,
                                columnNumber: 25
                              },
                              this
                            )
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                          lineNumber: 218,
                          columnNumber: 23
                        },
                        this
                      ),
                      data.length - 1 !== i && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.Divider, { alignSelf: "center", inlineSize: "80%" }, void 0, !1, {
                        fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                        lineNumber: 249,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  `${v.licensePlate} + ${i}`,
                  !0,
                  {
                    fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                    lineNumber: 212,
                    columnNumber: 21
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                  lineNumber: 209,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                lineNumber: 197,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
            lineNumber: 164,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.Box, { position: "relative", padding: 4, inlineSize: "60%", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.Divider, {}, void 0, !1, {
            fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
            lineNumber: 259,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.AbsoluteCenter, { bg: "white", px: "4", children: "ou" }, void 0, !1, {
            fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
            lineNumber: 260,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
          lineNumber: 258,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.Grid, { gridAutoRows: "min-content", placeContent: "center", gap: 4, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_react22.FormControl,
            {
              as: import_react22.Grid,
              blockSize: "min-content",
              gridTemplateColumns: "auto 1fr",
              gridTemplateRows: "min-content",
              gridAutoFlow: "column",
              placeItems: "center",
              gap: 4,
              paddingBlockStart: [0, 0, 1],
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.FormLabel, { margin: 0, htmlFor: "vehicle_create", children: "Adicionar novo ve\xEDculo?" }, void 0, !1, {
                  fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                  lineNumber: 275,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                  import_react22.Checkbox,
                  {
                    id: "vehicle_create",
                    size: "lg",
                    justifySelf: "center",
                    ...register("create"),
                    onChange: onCheckboxChange
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                    lineNumber: 278,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
              lineNumber: 265,
              columnNumber: 11
            },
            this
          ),
          isCreateVehicleTrue && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(createVehicleFetcher.Form, { onChange: onFormChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.Flex, { flexDir: "column", gap: 6, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              import_react22.FormControl,
              {
                as: import_react22.Grid,
                gridTemplateRows: "min-content",
                gridAutoFlow: ["row", "row", "column"],
                placeItems: "center",
                marginBlockStart: 8,
                gap: 4,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.Flex, { flexDir: "column", gap: 4, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.FormLabel, { margin: 0, htmlFor: "vehicle_licensePlate", children: "Ve\xEDculo" }, void 0, !1, {
                    fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                    lineNumber: 298,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                    import_react22.Input,
                    {
                      id: "vehicle_licensePlate",
                      name: "licensePlate",
                      placeholder: "Placa"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                      lineNumber: 301,
                      columnNumber: 21
                    },
                    this
                  ),
                  (errors == null ? void 0 : errors.licensePlate) && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.Alert, { status: "error", marginBlock: 4, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.AlertIcon, {}, void 0, !1, {
                      fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                      lineNumber: 308,
                      columnNumber: 25
                    }, this),
                    errors.licensePlate.message
                  ] }, void 0, !0, {
                    fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                    lineNumber: 307,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                  lineNumber: 297,
                  columnNumber: 19
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
                lineNumber: 289,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.Select, { id: "type", name: "type", placeholder: "Tipo do ve\xEDculo", children: selectOptions.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: o == null ? void 0 : o.toString(), children: o }, o, !1, {
              fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
              lineNumber: 317,
              columnNumber: 23
            }, this)) }, void 0, !1, {
              fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
              lineNumber: 315,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
              lineNumber: 314,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
            lineNumber: 288,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
            lineNumber: 287,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
          lineNumber: 264,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
      lineNumber: 157,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/NewWashModal/VehicleContent/index.tsx",
    lineNumber: 156,
    columnNumber: 5
  }, this);
}

// app/components/NewWashModal/WashesContent/index.tsx
var import_react25 = require("@chakra-ui/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function WashesContent(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react25.Text, { children: "washes content" }, void 0, !1, {
    fileName: "app/components/NewWashModal/WashesContent/index.tsx",
    lineNumber: 10,
    columnNumber: 1
  }, this) }, void 0, !1, {
    fileName: "app/components/NewWashModal/WashesContent/index.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/components/NewWashModal/Modal.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Modal({ isOpen, onClose, finalFocusRef }) {
  var _a, _b, _c, _d;
  let [errors, setErrors] = (0, import_react27.useState)({
    vehicle: { errors: ["Required"], label: "vehicle" },
    washes: { errors: ["Required"], label: "washes" },
    summary: { errors: ["Required"], label: "summary" }
  }), [vehicleData, setVehicleData] = (0, import_react27.useState)({}), { activeStep, goToNext, goToPrevious, Stepper: Stepper2, steps: steps2, setActiveStep } = useStepper();
  function setVehicle(v) {
    let { licensePlate, type } = v;
    !licensePlate || !type ? setVehicleErrors("Required", "ADD") : setVehicleErrors("Required", "REMOVE"), setVehicleData(v);
  }
  function onStepperFinish() {
    var _a2;
    setActiveStep(0), onClose(), (_a2 = finalFocusRef.current) == null || _a2.focus();
  }
  function setVehicleErrors(e, action3) {
    action3 === "ADD" ? setErrors((s) => {
      var _a2, _b2, _c2;
      if ((_b2 = (_a2 = s.vehicle) == null ? void 0 : _a2.errors) == null ? void 0 : _b2.find((str) => str === e))
        return s;
      let vehicle = s.vehicle;
      return (_c2 = vehicle == null ? void 0 : vehicle.errors) == null || _c2.push(e), {
        ...s,
        vehicle: { label: "vehicle", errors: (vehicle == null ? void 0 : vehicle.errors) ?? [e] }
      };
    }) : action3 === "REMOVE" && setErrors((s) => {
      var _a2, _b2, _c2;
      if (!((_b2 = (_a2 = s.vehicle) == null ? void 0 : _a2.errors) == null ? void 0 : _b2.find((str) => str === e)))
        return s;
      let { vehicle } = s, errors2 = ((_c2 = vehicle == null ? void 0 : vehicle.errors) == null ? void 0 : _c2.filter((str) => str !== e)) ?? [];
      return { ...s, vehicle: { label: "vehicle", errors: errors2 } };
    });
  }
  let canProceed = !(((_b = (_a = errors[steps2[activeStep].label]) == null ? void 0 : _a.errors) == null ? void 0 : _b.length) > 0);
  return console.log("errors:", errors), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    import_react26.Modal,
    {
      isCentered: !0,
      size: ["xs", "md", "2xl", "3xl"],
      isOpen,
      onClose,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react26.ModalOverlay, {}, void 0, !1, {
          fileName: "app/components/NewWashModal/Modal.tsx",
          lineNumber: 110,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react26.ModalContent, { blockSize: "90%", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react26.ModalHeader, { alignSelf: "center", children: steps2[activeStep].modalTitle }, void 0, !1, {
            fileName: "app/components/NewWashModal/Modal.tsx",
            lineNumber: 112,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react26.ModalCloseButton, { top: 4 }, void 0, !1, {
            fileName: "app/components/NewWashModal/Modal.tsx",
            lineNumber: 115,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            import_react26.ModalBody,
            {
              display: "grid",
              gridAutoFlow: "column",
              gap: "1.125em",
              gridTemplateColumns: "auto 1fr",
              gridTemplateRows: "100%",
              marginInline: [0, 0, 4],
              paddingBlockStart: [4, 4, 8],
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Stepper2, { activeStep, steps: steps2 }, void 0, !1, {
                  fileName: "app/components/NewWashModal/Modal.tsx",
                  lineNumber: 125,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react26.Box, { marginInline: [0, 0, 4], children: [
                  steps2[activeStep].label === "vehicle" && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                    VehicleContent,
                    {
                      setVehicleFn: setVehicle,
                      setVehicleErrors
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/NewWashModal/Modal.tsx",
                      lineNumber: 128,
                      columnNumber: 17
                    },
                    this
                  ),
                  steps2[activeStep].label === "washes" && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(WashesContent, {}, void 0, !1, {
                    fileName: "app/components/NewWashModal/Modal.tsx",
                    lineNumber: 133,
                    columnNumber: 56
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/NewWashModal/Modal.tsx",
                  lineNumber: 126,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/NewWashModal/Modal.tsx",
              lineNumber: 116,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react26.ModalFooter, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_react26.Button,
              {
                isDisabled: !steps2[activeStep].isNullable || steps2[activeStep].label === ((_d = errors[(_c = steps2[activeStep]) == null ? void 0 : _c.label]) == null ? void 0 : _d.label),
                colorScheme: "purple",
                variant: "ghost",
                mr: 3,
                size: "sm",
                onClick: goToNext,
                children: "pular"
              },
              "jump-btn",
              !1,
              {
                fileName: "app/components/NewWashModal/Modal.tsx",
                lineNumber: 138,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_react26.Button,
              {
                colorScheme: "gray",
                variant: "ghost",
                mr: 3,
                onClick: goToPrevious,
                marginInlineEnd: "0",
                children: "voltar"
              },
              "back-btn",
              !1,
              {
                fileName: "app/components/NewWashModal/Modal.tsx",
                lineNumber: 153,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_react26.Divider,
              {
                orientation: "vertical",
                inlineSize: "8px",
                borderColor: "gray.400"
              },
              void 0,
              !1,
              {
                fileName: "app/components/NewWashModal/Modal.tsx",
                lineNumber: 163,
                columnNumber: 13
              },
              this
            ),
            activeStep === steps2.length - 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_react26.Button,
              {
                variant: "ghost",
                colorScheme: "blue",
                onClick: onStepperFinish,
                children: "finalizar"
              },
              "finish-btn",
              !1,
              {
                fileName: "app/components/NewWashModal/Modal.tsx",
                lineNumber: 169,
                columnNumber: 15
              },
              this
            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_react26.Button,
              {
                isDisabled: steps2[activeStep].isNullable || !canProceed,
                variant: "ghost",
                colorScheme: "blue",
                onClick: goToNext,
                children: "pr\xF3ximo"
              },
              "next-btn",
              !1,
              {
                fileName: "app/components/NewWashModal/Modal.tsx",
                lineNumber: 178,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/NewWashModal/Modal.tsx",
            lineNumber: 137,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NewWashModal/Modal.tsx",
          lineNumber: 111,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/NewWashModal/Modal.tsx",
      lineNumber: 104,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/NewWashModal/Modal.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}

// app/components/NewWashModal/index.ts
function useNewWashModal() {
  let { isOpen, onOpen, onClose } = (0, import_react28.useDisclosure)(), ref = (0, import_react29.useRef)(null);
  return {
    isNewWashModalOpen: isOpen,
    onNewWashModalOpen: onOpen,
    onNewWashModalClose: onClose,
    newWashModalRef: ref,
    NewWashModal: Modal
  };
}

// app/components/header.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Header({ label, user }) {
  let { isOpen, onOpen, onClose } = (0, import_react30.useDisclosure)(), {
    isNewWashModalOpen,
    NewWashModal,
    onNewWashModalClose,
    newWashModalRef,
    onNewWashModalOpen
  } = useNewWashModal(), btnRef = (0, import_react32.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    import_react30.Grid,
    {
      maxH: "120px",
      inlineSize: "100%",
      gridAutoFlow: "column",
      gridAutoRows: "min-content",
      paddingInline: 2,
      paddingBlock: 4,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react30.HStack, { spacing: [6], children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react30.HStack, { spacing: 1, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_react30.IconButton,
              {
                variant: "ghost",
                "aria-label": "go to home",
                fontSize: "32px",
                isRound: !0,
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_md4.MdOutlineHome, {}, void 0, !1, {
                  fileName: "app/components/header.tsx",
                  lineNumber: 56,
                  columnNumber: 19
                }, this),
                as: import_react31.Link,
                to: "/home"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.tsx",
                lineNumber: 51,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react30.Text, { fontWeight: "bold", fontSize: "md", children: label }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/header.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SearchInput, {}, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/header.tsx",
          lineNumber: 49,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react30.HStack, { justifySelf: "flex-end", spacing: 1, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            import_react30.Button,
            {
              marginInline: 1,
              variant: "solid",
              colorScheme: "blue",
              borderRadius: "full",
              blockSize: 10,
              inlineSize: [10, "auto"],
              sx: { span: { marginInlineEnd: ["0"] } },
              leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_lu.LuPlus, { size: "1.25em" }, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 75,
                columnNumber: 21
              }, this),
              onClick: onNewWashModalOpen,
              ref: newWashModalRef,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react30.Text, { display: ["none", "block"], children: "Nova lavagem" }, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 79,
                columnNumber: 11
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/header.tsx",
              lineNumber: 67,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            import_react30.IconButton,
            {
              variant: "ghost",
              colorScheme: "blackAlpha",
              "aria-label": "open notifications",
              fontSize: "26px",
              isRound: !0,
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_md4.MdOutlineNotificationsNone, {}, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 87,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/header.tsx",
              lineNumber: 81,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react30.Divider, { borderLeftWidth: 2, orientation: "vertical" }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 89,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Avatar, { user }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 90,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            import_react30.IconButton,
            {
              display: ["flex", "flex", "none"],
              variant: "ghost",
              "aria-label": "open side menu",
              fontSize: "24px",
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_md4.MdDensityMedium, {}, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 96,
                columnNumber: 17
              }, this),
              onClick: onOpen,
              ref: btnRef
            },
            void 0,
            !1,
            {
              fileName: "app/components/header.tsx",
              lineNumber: 91,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
              fileName: "app/components/header.tsx",
              lineNumber: 100,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            NewWashModal,
            {
              finalFocusRef: newWashModalRef,
              isOpen: isNewWashModalOpen,
              onClose: onNewWashModalClose
            },
            void 0,
            !1,
            {
              fileName: "app/components/header.tsx",
              lineNumber: 106,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/header.tsx",
          lineNumber: 66,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/header.tsx",
      lineNumber: 41,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_auth.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), headers2 = ({ loaderHeaders }) => ({
  "Cache-Control": loaderHeaders.get("Cache-control") ?? "max-age=3600"
});
async function loader6({ request }) {
  let session = await getSession(request.headers.get("Cookie")), url = new URL(request.url), token = session.get("token");
  if (!token)
    throw (0, import_node6.redirect)("/sign-in");
  let { error, user } = await validateSessionId({ sessionId: token });
  if (error || !user)
    throw session.unset("token"), (0, import_node6.redirect)("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  return (0, import_node7.json)(
    { path: url.pathname, user },
    {
      headers: {
        "Cache-Control": `max-age=${60 * 60}`
      }
    }
  );
}
function auth_default() {
  let { path, user } = (0, import_react33.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Header, { label: path ?? "/", user }, void 0, !1, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react33.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => __default
});
var import_react34 = require("@chakra-ui/react"), import_react_router_dom2 = require("react-router-dom"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function __default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    import_react34.Grid,
    {
      placeContent: "center",
      placeItems: "center",
      blockSize: "100dvh",
      inlineSize: "100%",
      gap: 4,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react34.Text, { fontSize: "lg", children: "Essa p\xE1gina n\xE3o existe :(" }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 13,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react34.HStack, { spacing: 1, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react34.Text, { fontSize: "lg", children: "Go back" }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react34.Link, { as: import_react_router_dom2.Link, to: "/home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            import_react34.Box,
            {
              position: "relative",
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
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react34.Text, { fontSize: "lg", children: "/ home" }, void 0, !1, {
                fileName: "app/routes/$.tsx",
                lineNumber: 32,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/$.tsx",
              lineNumber: 17,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
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
var assets_manifest_default = { version: "4acf0989", entry: { module: "http://localhost:3001/build/entry.client-QMZKCUPP.js", imports: ["http://localhost:3001/build/_shared/chunk-EYPFEEA2.js", "http://localhost:3001/build/_shared/chunk-DC5KBJVF.js", "http://localhost:3001/build/_shared/chunk-PKOMFC7F.js", "http://localhost:3001/build/_shared/chunk-ANXL52AQ.js", "http://localhost:3001/build/_shared/chunk-6SJDMTBK.js", "http://localhost:3001/build/_shared/chunk-OKS54H4S.js", "http://localhost:3001/build/_shared/chunk-3YOGVSK4.js", "http://localhost:3001/build/_shared/chunk-KFR6H6JJ.js", "http://localhost:3001/build/_shared/chunk-I54TBTTL.js", "http://localhost:3001/build/_shared/chunk-CT6324V4.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/root-6QS4OETA.js", imports: ["http://localhost:3001/build/_shared/chunk-DLDEEFXR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/$-EXLJR26F.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/_auth-WMRE4PIX.js", imports: ["http://localhost:3001/build/_shared/chunk-DXSXC535.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.home": { id: "routes/_auth.home", parentId: "routes/_auth", path: "home", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/_auth.home-JVENGV5S.js", imports: ["http://localhost:3001/build/_shared/chunk-DLDEEFXR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/_index-M23M7LSB.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in": { id: "routes/sign-in", parentId: "root", path: "sign-in", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/sign-in-RY6DPFYR.js", imports: ["http://localhost:3001/build/_shared/chunk-DXSXC535.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up": { id: "routes/sign-up", parentId: "root", path: "sign-up", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/sign-up-P2IFJXMP.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/vehicle-search": { id: "routes/vehicle-search", parentId: "root", path: "vehicle-search", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/vehicle-search-QWXIDT3P.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/washes-search": { id: "routes/washes-search", parentId: "root", path: "washes-search", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/washes-search-HHKPA76Z.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: { runtime: "http://localhost:3001/build/_shared/chunk-KFR6H6JJ.js", routes: { "app/routes/_auth.tsx": { loaderHash: `export async function loader({
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
}` }, "app/routes/washes-search/route.ts": { loaderHash: `export async function loader({
  request
}: LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  if (typeof query !== "string" || query == "") return json(null);
  const {
    error,
    washCycle,
    washes
  } = await getNextWashesAndCycle(query);
  if (error) return json({
    error
  });
  return json({
    washCycle,
    washes
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
}` }, "app/routes/_index.tsx": { loaderHash: `export async function loader() {
  return redirect("/home");
}` }, "app/routes/vehicle-search/route.ts": { loaderHash: `export async function loader({
  request
}: LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  if (typeof query !== "string" || query == "") return json(null);
  return json(vehicles.filter(v => v.licensePlate === query));
}` } }, timestamp: 1691512660375 }, url: "http://localhost:3001/build/manifest-4ACF0989.js" };

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
  "routes/vehicle-search": {
    id: "routes/vehicle-search",
    parentId: "root",
    path: "vehicle-search",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/washes-search": {
    id: "routes/washes-search",
    parentId: "root",
    path: "washes-search",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports2
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
