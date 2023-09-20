import type { LoaderArgs } from "@vercel/remix";
import { json } from "react-router";
import { findUniqueVehicleController } from "src/infra/http/controllers/find-unique-vehicle-controller";
import { findVehicleController } from "src/infra/http/controllers/find-vehicle-controller";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const unique = url.searchParams.get("unique");
  const licensePlate = url.searchParams.get("licensePlate");

  if (!licensePlate) {
    return json({ results: [] });
  }

  if (unique) {
    const { vehicle } = await findUniqueVehicleController({ licensePlate });
    return json({ vehicle });
  }

  if (!licensePlate) return json(null);

  const { results } = await findVehicleController({ licensePlate });

  return json({ results });
}
