import type { LoaderArgs } from "@remix-run/node";
import { redirect, type ActionArgs, json } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { signInUserController } from "src/infra/http/controllers/sign-in-user-controller";
import { validateSessionId } from "src/infra/http/helpers/validate-session-id";
import { getSession, commitSession } from "~/sessions";

export async function action({ request }: ActionArgs) {
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");

    const session = await getSession(request.headers.get("Cookie"));

    if (typeof password !== "string" || typeof email !== "string") {
        return new Response(JSON.stringify({ error: "credentials is invalid" }), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    const { error, sessionId } = await signInUserController({ email, password });

    if (error || !sessionId) {
        console.log(error);
        return new Response(null, {
            status: 400,
            statusText: error,
        });
    }

    session.set("token", sessionId);

    return redirect("/home", {
        headers: {
            "Set-Cookie": await commitSession(session),
        },
    });
}

export async function loader({ request }: LoaderArgs) {
    const session = await getSession(request.headers.get("Cookie"));

    const token = session.get("token");

    if (!token) {
        // Redirect to the home page if they are already signed in.
        return json({});
    }

    const { user } = await validateSessionId({ sessionId: token });

    if (user) {
        return redirect("/home");
    }

    return json({});
}

export default function () {
    return (
        <Form method="POST">
            <label>
                email
                <input type="text" name="email" />
            </label>
            <label>
                password
                <input type="password" name="password" />
            </label>
            <button type="submit">Logar</button>
            <Link to="/sign-up">cadastre-se</Link>
        </Form>
    );
}
