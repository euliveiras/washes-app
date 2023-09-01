import type { LoaderArgs } from "@vercel/remix";
import { redirect } from "@vercel/remix";
import { Response } from "@remix-run/node";
import fs from "fs";
import { stringify } from "csv-stringify";
import { validateSessionId } from "src/infra/http/helpers/validate-session-id";
import { commitSession, getSession } from "~/sessions";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.searchParams);
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");

  if (!token) {
    throw redirect("/sign-in");
  }

  const { error, user } = await validateSessionId({ sessionId: token });

  if (error || !user) {
    session.unset("token");
    throw redirect("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  const output = stringify([
    ["1", "2", "3", "4"],
    ["a", "b", "c", "d"],
  ]);

  output.write({ ok: true });

  const body = fs.createWriteStream("csv");

  output.write(body);

  body.end();

  return new Response("asdsadsa", {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": "attachment; filename=washes.csv",
    },
  });
}
