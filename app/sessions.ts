import { createCookieSessionStorage } from "@vercel/remix"; // or cloudflare/deno

type SessionData = {
    token: string;
};

type SessionFlashData = {
    error: string;
};

export const { commitSession, destroySession, getSession } = createCookieSessionStorage<
    SessionData,
    SessionFlashData
>({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
        name: "__session",

        // all of these are optional
        // Expires can also be set (although maxAge overrides it when used in combination).
        // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
        //
        // expires: new Date(Date.now() + 60_000),
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
        sameSite: "lax",
        secrets: ["s3cret1"],
        secure: false,
    },
});
