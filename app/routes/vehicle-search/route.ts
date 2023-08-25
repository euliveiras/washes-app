import type { LoaderArgs } from "@remix-run/node";
import { json } from "react-router";
import { findVehicleControler } from "src/infra/http/controllers/find-vehicle-controller";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  const licensePlate = url.searchParams.get("licensePlate");

  if (typeof query !== "string" || query == "" || !licensePlate)
    return json(null);

  const { vehicle } = await findVehicleControler({ licensePlate });

  return json({ results: vehicle ? [vehicle] : []});
}
