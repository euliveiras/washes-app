import { redirect } from "@vercel/remix";
import type { ActionArgs } from "@vercel/remix";
import { signOutController } from "src/infra/http/controllers/sign-out-controller";
import { getSession } from "~/sessions";

export async function action({ request }: ActionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  const sessionId = session.get("token");

  if (!sessionId) return {};

  const { error } = signOutController({ sessionId });

  if (error) {
    return {};
  }

  session.unset("token");

  return redirect("/sign-in");
}
