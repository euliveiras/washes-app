import type { LoaderArgs } from "@remix-run/node";
import { json } from "react-router";

const vehicles = [
  {
    licensePlate: "HUHDWQE",
    type: "Leve",
  },

  {
    licensePlate: "LAPW123",
    type: "Leve",
  },
  {
    licensePlate: "PO6778",
    type: "Truck",
  },
  {
    licensePlate: "PO6778",
    type: "Truck",
  },
  {
    licensePlate: "PO6778",
    type: "Truck",
  },
  {
    licensePlate: "PO6778",
    type: "Truck",
  },
];

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  if (typeof query !== "string" || query == "") return json(null);

  return json(vehicles.filter((v) => v.licensePlate === query));
}
