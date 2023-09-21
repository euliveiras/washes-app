import { redirect } from "@vercel/remix";
import type { ActionArgs } from "@vercel/remix";
import { Form, Link, useActionData } from "@remix-run/react";
import { createUserController } from "src/infra/http/controllers/create-user-controller";

export async function action({ request }: ActionArgs) {
  const form = await request.formData();

  const username = form.get("username");
  const password = form.get("password");
  const email = form.get("email");

  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    typeof email !== "string"
  ) {
    return new Response(JSON.stringify({ error: "credentials is invalid" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const { error } = await createUserController({ email, password, username });

  if (error) {
    return new Response(null, {
      status: 400,
      statusText: error,
    });
  }

  return redirect("/sign-in", 201);
}

export async function loader() {
  return redirect("/sign-in");
}

export default function () {
  const data = useActionData<typeof action>();

  return (
    <div>
      <h1>Sign up</h1>
      {data ? <p style={{ color: "red" }}>{data.error}</p> : null}
      <Form method="POST">
        <label>
          username
          <input type="text" name="username" />
        </label>
        <label>
          email
          <input type="text" name="email" />
        </label>
        <label>
          password
          <input type="password" name="password" />
        </label>
        <button type="submit">Logar</button>
        <Link to="/sign-in">logar</Link>
      </Form>
    </div>
  );
}
