import type { LoaderArgs } from "@remix-run/node";
import { dateManipulator } from "../../../src/domain/shared/date-manipulator";
import { json } from "react-router";
import { getNextWashesAndCycle } from "src/infra/http/controllers/get-next-washes-and-cycle.controller";

function getDate(date?: Date, days?: number) {
  const parsedDate = dateManipulator.parseDateToString(date ?? new Date());
  return dateManipulator.addDaysToDate(parsedDate, days ?? 0);
}

const mocks = {
  washCycles: [
    {
      id: "fake-cycle-id",
      vehicleId: "PO6778",
      startDate: getDate(),
      endDate: getDate(new Date(), 28),
      washesId: ["1", "2", "3", "4"],
      completedWashes: [],
    },
    {
      id: "fake-cycle-id2",
      vehicleId: "LAPW123",
      startDate: getDate(),
      endDate: getDate(new Date(), 28),
      washesId: ["1", "2", "3", "4"],
      completedWashes: [],
    },
    {
      id: "fake-cycle-id3",
      vehicleId: "HUHDWQE",
      startDate: getDate(),
      endDate: getDate(new Date(), 28),
      washesId: ["1", "2", "3", "4"],
      completedWashes: [],
    },
  ],
  washes: [
    {
      id: "1",
      vehicleId: "PO6778",
      scheduleDate: getDate(),
      cycleId: "fake-cycle-id",
      note: "Lavar caçamba do caminhão",
      isCompleted: false,
      createdBy: "fake-user",
    },
    {
      id: "2",
      vehicleId: "PO6778",
      scheduleDate: getDate(new Date(), 7),
      cycleId: "fake-cycle-id",
      note: "Lavar roda traseira",
      isCompleted: false,
      createdBy: "fake-user",
    },
    {
      id: "3",
      vehicleId: "PO6778",
      scheduleDate: getDate(new Date(), 14),
      cycleId: "fake-cycle-id",
      isCompleted: false,
      createdBy: "fake-user",
    },
    {
      id: "4",
      vehicleId: "PO6778",
      scheduleDate: getDate(new Date(), 22),
      cycleId: "fake-cycle-id",
      isCompleted: false,
      createdBy: "fake-user",
    },
    {
      id: "5",
      vehicleId: "LAPW123",
      scheduleDate: getDate(new Date(), 4),
      cycleId: "fake-cycle-id2",
      isCompleted: false,
      createdBy: "fake-user",
    },
    {
      id: "6",
      vehicleId: "HUHDWQE",
      scheduleDate: getDate(new Date(), 3),
      cycleId: "fake-cycle-id3",
      isCompleted: false,
      createdBy: "fake-user",
    },
  ],
};

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  console.log(query);
  if (typeof query !== "string" || query === "") return json(null);

  // const { error, washCycle, washes } = await getNextWashesAndCycle(query);
  const washes = mocks.washes.filter((w) => w.vehicleId === query);
  const washCycle = mocks.washCycles.find((w) => w.vehicleId === query);
  let error;

  if (!washCycle) error = null;

  if (error) return json({ error });

  return json({ washCycle, washes });
}
