import type { LoaderArgs } from "@remix-run/node";
import { json } from "react-router";
import { getNextWashesAndCycle } from "src/infra/http/controllers/get-next-washes-and-cycle.controller";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const licensePlate = url.searchParams.get("licensePlate");

  if (typeof licensePlate !== "string" || licensePlate === "") return json([]);

  const { error, washCycle, washes } = await getNextWashesAndCycle({
    licensePlate,
  });

console.log(washCycle, washes)

  if (error) {
    return json({
      error: true,
      message: error.message,
    });
  }

  return json({ washCycle, washes });
}
