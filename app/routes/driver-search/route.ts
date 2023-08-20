import type { LoaderArgs } from "@remix-run/node";
import { json } from "react-router";

const mocks = [{ name: "matheus", phones: ["12313123"] }];

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  if (typeof query !== "string" || query == "") return json(null);

  const results = mocks.filter((m) => m.name === query.toLowerCase());

  return json({results});
}
