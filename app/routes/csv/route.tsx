import type { LoaderArgs } from "@vercel/remix";
import { redirect } from "@vercel/remix";
import { Response } from "@remix-run/node";
import { stringify } from "csv-stringify";
import { validateSessionId } from "src/infra/http/helpers/validate-session-id";
import { commitSession, getSession } from "~/sessions";
import type { Wash } from "@prisma/client";
import { findManyWashesController } from "src/infra/http/controllers/find-many-washes-controller";
import { format } from "app/components/hooks/useDate";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.searchParams);
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");
  const licensePlate = params.get("licensePlate") ?? undefined;
  const startDate = params.get("startDate") ?? undefined;
  const endDate = params.get("endDate") ?? undefined;
  const washStatus = params.get("status") ?? undefined;

  if (!token) {
    throw redirect("/sign-in");
  }

  const { error, user } = await validateSessionId({ sessionId: token });

  if (error || !user) {
    session.unset("token");
    throw redirect("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  const output = stringify({
    header: true,
    columns: {
      vehicleId: "placa",
      scheduleDate: "data de lavagem",
      status: "status",
    },
  });

  const dto = {
    filters: {
      createdBy: user.id,
      vehicleId: licensePlate !== "" ? licensePlate : undefined,
      startDate,
      endDate,
      status: washStatus as "ALL" | "COMPLETED" | "INCOMPLETED" | undefined,
    },
    take: 999999,
  };

  const { washes }: { washes: Partial<Wash[]> } =
    await findManyWashesController(dto);

  washes.forEach((w) =>
    output.write({
      vehicleId: w?.vehicleId,
      scheduleDate: format(w?.scheduleDate ?? new Date(), "d/LLLL"),
      status: w?.isCompleted ? "LAVADO" : "NÃO LAVADO",
    }),
  );

  const formattedStartDate = startDate
    ? format(new Date(startDate), "d-MMM")
    : format(new Date(), "d-MMM");

  const formattedEndDate = endDate
    ? "_" + format(new Date(endDate), "d-MMM")
    : "";
  const filename = formattedStartDate + formattedEndDate + ".csv";

  output.end();

  return new Response(output, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename=${filename}`,
    },
  });
}
