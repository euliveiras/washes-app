import { Text } from "@chakra-ui/react";
import type { HeadersFunction, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { validateSessionId } from "src/infra/http/helpers/validate-session-id";
import { commitSession, getSession } from "~/sessions";

export const headers: HeadersFunction = ({  parentHeaders }) => {
  const maxAge =
    parentHeaders.get("Cache-control") ?? `max-age=${60 * 60}`;

  return {
    "Cache-Control": maxAge,
  };
};

export async function loader({ request }: LoaderArgs) {
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

  return json(
    { user },
  );
}

export default function () {
  const data = useLoaderData<typeof loader>();
  return <Text>home</Text>;
}
