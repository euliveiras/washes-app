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
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.Links, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 65,
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
            lineNumber: 67,
            columnNumber: 13
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 62,
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
    lineNumber: 102,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 101,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.home.tsx
var auth_home_exports = {};
__export(auth_home_exports, {
  default: () => auth_home_default,
  loader: () => loader
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

// src/infra/database/prisma/prisma.ts
var import_client = require("@prisma/client"), globalForPrisma = global, prisma = globalForPrisma.prisma || new import_client.PrismaClient({ log: ["query", "info", "warn", "error"] });
globalForPrisma.prisma = prisma;

// src/domain/modules/user/entities/User.ts
var import_crypto = require("crypto"), User = class {
  constructor(data) {
    this._props = {
      ...data,
      id: data.id ?? (0, import_crypto.randomUUID)(),
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  createSession() {
    this._props.sessionId = (0, import_crypto.randomUUID)();
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

// src/infra/http/helpers/validate-session-id.ts
async function validateSessionId({ sessionId }) {
  try {
    let prismaUserRepository = new PrismaUserRepository(), validateSession = new ValidateSession(prismaUserRepository), { user } = await validateSession.execute(sessionId);
    return { user };
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
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
async function loader({ request }) {
  let session = await getSession(request.headers.get("Cookie")), token = session.get("token");
  if (!token)
    throw (0, import_node2.redirect)("/sign-in");
  let { error, user } = await validateSessionId({ sessionId: token });
  if (error || !user)
    throw session.unset("token"), (0, import_node2.redirect)("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  return (0, import_node2.json)({ user });
}
function auth_home_default() {
  let data = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react9.Text, { children: "home" }, void 0, !1, {
    fileName: "app/routes/_auth.home.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}

// app/routes/sign-in.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  action: () => action,
  default: () => sign_in_default,
  loader: () => loader2
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
async function loader2({ request }) {
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
  loader: () => loader3
});
var import_node5 = require("@remix-run/node");
async function loader3() {
  return (0, import_node5.redirect)("/home");
}

// app/routes/_auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => auth_default,
  loader: () => loader4
});
var import_node6 = require("@remix-run/node"), import_react18 = require("@remix-run/react");

// app/components/header.tsx
var import_react15 = require("@chakra-ui/react"), import_md2 = require("react-icons/md"), import_lu = require("react-icons/lu"), import_react16 = require("@remix-run/react"), import_react17 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Header({ label }) {
  let { isOpen, onOpen, onClose } = (0, import_react15.useDisclosure)(), btnRef = (0, import_react17.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_react15.Grid,
    {
      outline: "1px solid pink",
      maxH: "120px",
      inlineSize: "100%",
      gridAutoFlow: "column",
      gridAutoRows: "min-content",
      paddingInline: 2,
      paddingBlock: 1,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.HStack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.HStack, { spacing: 1, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_react15.IconButton,
              {
                variant: "ghost",
                "aria-label": "go to home",
                fontSize: "32px",
                isRound: !0,
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_md2.MdOutlineHome, {}, void 0, !1, {
                  fileName: "app/components/header.tsx",
                  lineNumber: 53,
                  columnNumber: 31
                }, this),
                as: import_react16.Link,
                to: "/home"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.tsx",
                lineNumber: 48,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.Text, { fontWeight: "bold", fontSize: "md", children: label }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 57,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/header.tsx",
            lineNumber: 47,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.InputGroup, { display: ["none", "block"], children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.InputRightElement, { fontSize: 26, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_md2.MdOutlineSearch, {}, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 63,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 62,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.Input, { type: "search", name: "query" }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 65,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/header.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/header.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.HStack, { justifySelf: "flex-end", spacing: 0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react15.IconButton,
            {
              variant: "ghost",
              colorScheme: "blackAlpha",
              "aria-label": "open notifications",
              fontSize: "26px",
              isRound: !0,
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_md2.MdOutlineNotificationsNone, {}, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 75,
                columnNumber: 27
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/header.tsx",
              lineNumber: 69,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react15.Button,
            {
              marginInline: 1,
              variant: "solid",
              colorScheme: "blue",
              borderRadius: "full",
              blockSize: 10,
              inlineSize: [10, "auto"],
              sx: { span: { marginInlineEnd: ["0"] } },
              leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_lu.LuPlus, { size: "1.25em" }, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 85,
                columnNumber: 31
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.Text, { display: ["none", "block"], children: "Nova lavagem" }, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 86,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/header.tsx",
              lineNumber: 77,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.HStack, { display: ["none", "none", "block"], children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.Avatar, { size: "sm", name: "Natan" }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 89,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.Text, { children: "Natan" }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 90,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/header.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react15.IconButton,
            {
              display: ["flex", "flex", "none"],
              variant: "ghost",
              "aria-label": "open side menu",
              fontSize: "24px",
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_md2.MdDensityMedium, {}, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 97,
                columnNumber: 27
              }, this),
              onClick: onOpen,
              ref: btnRef
            },
            void 0,
            !1,
            {
              fileName: "app/components/header.tsx",
              lineNumber: 92,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/header.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.Drawer, { isOpen, placement: "right", onClose, finalFocusRef: btnRef, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.DrawerOverlay, {}, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.DrawerContent, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.DrawerCloseButton, { top: 4 }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 105,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.DrawerHeader, { as: import_react15.HStack, inlineSize: "min-content", paddingBlock: 2, paddingInline: 4, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.Avatar, { size: "md", name: "Natan" }, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 107,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.Text, { children: "Natan" }, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 108,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/header.tsx",
              lineNumber: 106,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.DrawerBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.Input, { placeholder: "Type here..." }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 112,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 111,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.DrawerFooter, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.Button, { variant: "outline", mr: 3, onClick: onClose, children: "Cancel" }, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 116,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react15.Button, { colorScheme: "blue", children: "Save" }, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 119,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/header.tsx",
              lineNumber: 115,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/header.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/header.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/header.tsx",
      lineNumber: 38,
      columnNumber: 9
    },
    this
  );
}

// app/routes/_auth.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
async function loader4({ request }) {
  let url = new URL(request.url);
  return (0, import_node6.json)({ path: url.pathname });
}
function auth_default() {
  let { path } = (0, import_react18.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Header, { label: path ?? "/" }, void 0, !1, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react18.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => __default
});
var import_react19 = require("@chakra-ui/react"), import_react_router_dom = require("react-router-dom"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function __default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    import_react19.Grid,
    {
      placeContent: "center",
      placeItems: "center",
      blockSize: "100dvh",
      inlineSize: "100%",
      gap: 4,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react19.Text, { fontSize: "lg", children: "Essa p\xE1gina n\xE3o existe :(" }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 13,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react19.HStack, { spacing: 1, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react19.Text, { fontSize: "lg", children: "Go back" }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react19.Link, { as: import_react_router_dom.Link, to: "/home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_react19.Box,
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
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react19.Text, { fontSize: "lg", children: "/ home" }, void 0, !1, {
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
var assets_manifest_default = { version: "9eb09e82", entry: { module: "http://localhost:3001/build/entry.client-KGO76GHK.js", imports: ["http://localhost:3001/build/_shared/chunk-EYPFEEA2.js", "http://localhost:3001/build/_shared/chunk-ANXL52AQ.js", "http://localhost:3001/build/_shared/chunk-DC5KBJVF.js", "http://localhost:3001/build/_shared/chunk-PKOMFC7F.js", "http://localhost:3001/build/_shared/chunk-OKS54H4S.js", "http://localhost:3001/build/_shared/chunk-6SJDMTBK.js", "http://localhost:3001/build/_shared/chunk-3YOGVSK4.js", "http://localhost:3001/build/_shared/chunk-KFR6H6JJ.js", "http://localhost:3001/build/_shared/chunk-I54TBTTL.js", "http://localhost:3001/build/_shared/chunk-CT6324V4.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/root-D7LICQI4.js", imports: ["http://localhost:3001/build/_shared/chunk-H7L7MQMR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/$-67T54LCW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/_auth-VWTLETQA.js", imports: ["http://localhost:3001/build/_shared/chunk-QGLAYPUA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.home": { id: "routes/_auth.home", parentId: "routes/_auth", path: "home", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/_auth.home-R5UEITEX.js", imports: ["http://localhost:3001/build/_shared/chunk-H7L7MQMR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/_index-M23M7LSB.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in": { id: "routes/sign-in", parentId: "root", path: "sign-in", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/sign-in-DWG3SLOI.js", imports: ["http://localhost:3001/build/_shared/chunk-QGLAYPUA.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up": { id: "routes/sign-up", parentId: "root", path: "sign-up", index: void 0, caseSensitive: void 0, module: "http://localhost:3001/build/routes/sign-up-TS5WHRTR.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: { runtime: "http://localhost:3001/build/_shared/chunk-KFR6H6JJ.js", routes: { "app/routes/sign-in.tsx": { loaderHash: `export async function loader({
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
}` }, "app/routes/_auth.home.tsx": { loaderHash: `export async function loader({
  request
}: LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
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
    user
  });
}` }, "app/routes/_index.tsx": { loaderHash: `export async function loader() {
  return redirect("/home");
}` }, "app/routes/_auth.tsx": { loaderHash: `export async function loader({
  request
}: LoaderArgs) {
  const url = new URL(request.url);
  return json({
    path: url.pathname
  });
}` } }, timestamp: 1689220561130 }, url: "http://localhost:3001/build/manifest-9EB09E82.js" };

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
