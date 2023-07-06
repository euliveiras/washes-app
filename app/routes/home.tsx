import type { LoaderArgs } from "@remix-run/node";
import { Response, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { validateSessionId } from "src/infra/http/helpers/validate-session-id";
import { commitSession, getSession } from "~/sessions";

export async function loader({ request }: LoaderArgs) {
    const session = await getSession(request.headers.get("Cookie"));

    const token = session.get("token");

    if (!token) {
        throw redirect("/sign-in");
    }

    const { error, user } = await validateSessionId({ sessionId: token });

    if (error || !user) {
        session.unset("token")
        throw redirect("/sign-in", {
            status: 401,
            headers: {
                "Set-Cookie": await commitSession(session),
            },
        });
    }

    return json({ user });
}
export default function () {
    const data = useLoaderData<typeof loader>();
    console.log(data);
    return <h1>home</h1>;
}
