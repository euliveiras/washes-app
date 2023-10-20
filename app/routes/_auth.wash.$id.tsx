import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { format, parseDateToString } from "~/components/hooks/useDate";
import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import { findWashByIdController } from "src/infra/http/controllers/find-unique-wash-controller";
import {
  Box,
  Divider,
  Flex,
  Grid,
  IconButton,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import { findWashCycleController } from "src/infra/http/controllers/find-wash-cycle-controller";
import { washesTable } from "~/components/WashesTable";
import { confirmWashController } from "src/infra/http/controllers/confirm-wash-controller";
import { unconfirmWashController } from "src/infra/http/controllers/unconfirm-wash-controller";
import { updateVehicleController } from "src/infra/http/controllers/update-vehicle-controller";
import { InputWithLabel } from "~/components/LabelWithInput";
import { PageEditButton, PageLabel, PageTitle } from "~/components/Page";
import { updateWashController } from "src/infra/http/controllers/update-wash-controller";

export async function action({ request, params }: ActionArgs) {
  const form = await request.formData();
  const id = form.get("id")?.toString();
  const licensePlate = form.get("LICENSE_PLATE")?.toString();
  const action = form.get("ACTION")?.toString();
  const note = form.get("WASH_NOTE")?.toString();
  const scheduleDate = form.get("WASH_SCHEDULEDATE")?.toString();
  const driverName = form.get("DRIVER_NAME")?.toString();
  const driverPhone = form.get("DRIVER_PHONE")?.toString();
  const isCompleted = form.get("isCompleted");
  let error;

  if (!params.id) throw redirect("/home");

  if (action === "UPDATE_WASH" && note && scheduleDate) {
    const formattedDate = parseDateToString(
      new Date(format(scheduleDate, "yyyy-MM-dd")),
    );
    updateWashController({
      id: params.id,
      data: { note, scheduleDate: formattedDate },
    });
  }

  if (action === "ADD_DRIVER" && driverName && driverPhone && licensePlate) {
    const driver = { name: driverName, phones: [driverPhone] };
    await updateVehicleController({ data: { driver }, licensePlate });
    return json({});
  }

  if (!id) return json({ error: "" });

  if (typeof isCompleted === "undefined") return json({ error: "" });

  if (isCompleted === "true") {
    const data = await confirmWashController({ id });
    error = data.error;
  } else {
    const data = await unconfirmWashController({ id });
    error = data.error;
  }
  if (error) {
    return json({ error: { message: error.message } });
  }

  return json({});
}

export async function loader({ params }: LoaderArgs) {
  if (!params.id)
    return json(
      {
        error: true,
        message: "Id da lavagem nos parâmetros de rota é indefinido",
      },
      400,
    );

  const findedWashCycleData = await findWashCycleController({
    washesId: [params.id],
  });

  if (findedWashCycleData.error || !findedWashCycleData.washCycle) {
    return json(
      {
        error: {
          message: findedWashCycleData.error?.message,
        },
      },
      400,
    );
  }

  const promises = [];

  if (findedWashCycleData.washCycle.washesId) {
    for (const id of findedWashCycleData.washCycle?.washesId) {
      promises.push(findWashByIdController({ id: id }));
    }
  }

  const resolvedPromises = await Promise.all(promises);
  const cycleWashes = resolvedPromises.map(({ wash }) => wash);

  return json({
    wash: cycleWashes.find((w) => w?.id === params.id),
    cycleWashes,
    washCycle: findedWashCycleData.washCycle,
  });
}

function Plate({ plate }: { plate: string }) {
  return (
    <Box lineHeight={1}>
      <Text color="blue.600" fontWeight={"bold"} fontSize="lg">
        Placa
      </Text>
      <Flex align="center" gap={2}>
        <Text fontWeight={"semibold"}>{plate}</Text>
        <IconButton
          as={Link}
          to={`/vehicle/${plate}`}
          aria-label="go to licenseplate page"
          icon={<LiaExternalLinkAltSolid size={24} />}
          colorScheme="blue"
          variant="ghost"
        />
      </Flex>
    </Box>
  );
}

function WashDateInput({
  isEditing,
  date,
}: {
  isEditing: boolean;
  date: string;
}) {
  const formattedDate = format(date, "yyyy-MM-dd");
  const minDate = format(new Date(), "yyyy-MM-dd");
  return (
    <InputWithLabel
      labelProps={{ label: "data da lavagem" }}
      inputProps={{
        defaultValue: formattedDate,
        type: "date",
        min: minDate,
        marginInline: "auto",
        name: "WASH_SCHEDULEDATE",
      }}
      editing={isEditing}
    />
  );
}

function WashNote({ note, isEditing }: { note: string; isEditing: boolean }) {
  return (
    <Grid
      gridTemplateColumns={"30% 70%"}
      alignItems="center"
      placeContent={"space-between"}
      marginBlockStart={3}
      maxInlineSize={"460px"}
    >
      <Text fontWeight={"bold"} letterSpacing="tighter">
        nota
      </Text>
      <Textarea
        resize={"none"}
        name="WASH_NOTE"
        defaultValue={note}
        isDisabled={!isEditing}
        placeholder="escreva uma nota sobre esta lavagem"
      ></Textarea>
    </Grid>
  );
}

export default function () {
  const { wash, error, washCycle, cycleWashes } = useLoaderData() as {
    wash?: {
      id: string;
      vehicleId: string;
      scheduleDate: string;
      note: string;
      driver: string;
      isCompleted: boolean;
    };
    cycleWashes?: {
      id: string;
      vehicleId: string;
      scheduleDate: string;
      note: string;
      driver: string;
      isCompleted: boolean;
    }[];
    washCycle: {
      id: string;
      scheduleDate: string;
      createdBy: string;
      isCompleted: false;
      note: string;
      vehicleId: string;
    };
    error?: { message: string };
  };
  const [isEditing, setIsEditing] = useState(false);

  if (!wash || error) {
    return (
      <Text>
        {error?.message ??
          "Alguma coisa deu errado. Por favor, atualize a página"}
      </Text>
    );
  }

  const formattedDate = format(wash.scheduleDate, "d 'de' MMMM");
  const fetcher = useFetcher();

  function isEditingSetFn() {
    setIsEditing(bool => !bool);
  }

  return (
    <Grid
      gridTemplateColumns={"100%"}
      paddingBlock={4}
      paddingInline={[4, 4, 16]}
      gap={8}
      placeContent="center"
    >
      <Grid
        gap={12}
        gridAutoFlow={["row", "row", "column"]}
        gridAutoRows={["auto", "auto", "100%"]}
        alignItems="center"
      >
        <Flex
          id="WASH_FORM"
          as={fetcher.Form}
          onSubmit={isEditingSetFn}
          method="PUT"
          flexDir="column"
          gap={6}
        >
          <Box lineHeight={"shorter"}>
            <PageLabel label={"lavagem"} />
            <Flex align="center" gap={0}>
              <PageTitle title={formattedDate} />
              {isEditing ? (
                <PageEditButton
                  key="submit"
                  isEditing={isEditing}
                  type="submit"
                  name="ACTION"
                  value="UPDATE_WASH"
                  form="WASH_FORM"
                />
              ) : (
                <PageEditButton
                  key="button"
                  isEditing={isEditing}
                  onClick={isEditingSetFn}
                  type="button"
                />
              )}
            </Flex>
          </Box>
          <Box>
            <WashDateInput date={wash.scheduleDate} isEditing={isEditing} />
            <WashNote note={wash.note} isEditing={isEditing} />
          </Box>
        </Flex>
        <Plate plate={wash.vehicleId} />
      </Grid>
      <Divider marginBlockStart={4} />
      <Flex flexDir="column" gap={1} paddingBlockEnd={4}>
        <Text fontSize={"x-large"} fontWeight="semibold" color="blue.600">
          Ciclo de lavagem
        </Text>
        <washesTable.Table>
          <washesTable.Body>
            {cycleWashes?.map((w) => {
              if (w.id === wash.id)
                return (
                  <washesTable.Row key={w?.id} id={w?.id} fontSize={"lg"}>
                    <washesTable.bodyData.LicensePlate
                      fontWeight={"bold"}
                      licensePlate={w.vehicleId ?? ""}
                    />
                    <washesTable.bodyData.ScheduledDate
                      scheduledDate={w?.scheduleDate ?? ""}
                    />
                    <washesTable.bodyData.Status
                      status={w?.isCompleted === true ? "success" : "error"}
                      label={
                        w?.isCompleted === true ? "Confirmado" : "Atrasada"
                      }
                    />
                    <washesTable.bodyData.Note note={w?.note ?? ""} />
                    <washesTable.bodyData.Actions
                      isCompleted={w?.isCompleted}
                      id={w?.id}
                    />
                  </washesTable.Row>
                );
              else
                return (
                  <washesTable.Row key={w?.id} id={w?.id}>
                    <washesTable.bodyData.LicensePlate
                      licensePlate={w.vehicleId ?? ""}
                    />
                    <washesTable.bodyData.ScheduledDate
                      scheduledDate={w?.scheduleDate ?? ""}
                    />
                    <washesTable.bodyData.Status
                      status={w?.isCompleted === true ? "success" : "error"}
                      label={
                        w?.isCompleted === true ? "Confirmado" : "Atrasada"
                      }
                    />
                    <washesTable.bodyData.Note note={w?.note ?? ""} />
                    <washesTable.bodyData.Actions
                      isCompleted={w?.isCompleted}
                      id={w?.id}
                    />
                  </washesTable.Row>
                );
            })}
          </washesTable.Body>
        </washesTable.Table>
      </Flex>
    </Grid>
  );
}
