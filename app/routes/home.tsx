import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getSession } from "~/sessions";

export async function loader({ request }: LoaderArgs) {
    const session = await getSession(request.headers.get("Cookie"));

    if (!session.has("token")) {
        return redirect("/sign-in");
    }
    return json({});
}
export default function () {
    return <h1>home</h1>;
}
