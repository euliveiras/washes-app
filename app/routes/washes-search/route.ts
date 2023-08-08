import type { LoaderArgs } from "@remix-run/node";
import { json } from "react-router";
import { getNextWashesAndCycle } from "src/infra/http/controllers/get-next-washes-and-cycle.controller";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  if (typeof query !== "string" || query == "") return json(null);

  const { error, washCycle, washes } = await getNextWashesAndCycle(query);

  if (error) return json({ error });

  return json({ washCycle, washes });
}
