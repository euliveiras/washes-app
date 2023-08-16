import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Header } from "~/components/Header";
import type { HeadersFunction } from "@remix-run/node"; // or cloudflare/deno
import { commitSession, getSession } from "~/sessions";
import { validateSessionId } from "src/infra/http/helpers/validate-session-id";
import {Grid} from "@chakra-ui/react";

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  const maxAge = loaderHeaders.get("Cache-control") ?? `max-age=${60 * 60}`;

  return {
    "Cache-Control": maxAge,
  };
};

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const url = new URL(request.url);

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

  return json(
    { path: url.pathname, user },
    {
      headers: {
        "Cache-Control": `max-age=${60 * 60}`,
      },
    },
  );
}

export default function () {
  const { path, user } = useLoaderData<typeof loader>();
  return (
    <Grid gridTemplateRows={"auto 1fr"} blockSize="100vh">
      <Header label={path ?? "/"} user={user} />
      <Outlet />
    </Grid>
  );
}
