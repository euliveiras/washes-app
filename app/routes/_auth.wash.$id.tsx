import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { format } from "~/components/hooks/useDate";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { findWashByIdController } from "src/infra/http/controllers/find-unique-wash-controller";
import {
  Box,
  Button,
  Flex,
  Grid,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { MdModeEditOutline } from "react-icons/md";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { useState } from "react";
import { findWashCycleController } from "src/infra/http/controllers/find-wash-cycle-controller";
import { washesTable } from "~/components/WashesTable";
import { confirmWashController } from "src/infra/http/controllers/confirm-wash-controller";
import { unconfirmWashController } from "src/infra/http/controllers/unconfirm-wash-controller";

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const id = form.get("id")?.toString();
  const isCompleted = form.get("isCompleted");
  let error;

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

function PageLabel({ label }: { label: string }) {
  return (
    <Text color={"gray.500"} fontSize={"sm"} fontWeight={"semibold"}>
      {label}
    </Text>
  );
}

function PageTitle({ title }: { title: string }) {
  return (
    <Text fontSize={"xx-large"} fontWeight={"bold"}>
      {title}
    </Text>
  );
}

function PageEditButton({ isEditing }: { isEditing: boolean }) {
  const buttonProps = isEditing ? { color: "gray.400" } : { color: "blue.400" };
  const buttonText = isEditing ? "salvar" : "editar";
  return (
    <Button
      rightIcon={<MdModeEditOutline />}
      variant="ghost"
      fontSize={"sm"}
      {...buttonProps}
    >
      {buttonText}
    </Button>
  );
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
          aria-label="go to licenseplate page"
          icon={<LiaExternalLinkAltSolid size={24} />}
          colorScheme="blue"
          variant="ghost"
        />
      </Flex>
    </Box>
  );
}

function CustomInput({
  label,
  value,
  placeholder,
  editing = false,
}: {
  label: string;
  value: string;
  placeholder?: string;
  editing: boolean;
}) {
  return (
    <Grid
      gridTemplateColumns={"20% 60%"}
      alignItems="center"
      placeContent={"space-between"}
      marginBlockStart={6}
      maxInlineSize="100%"
    >
      <Text fontWeight={"bold"} letterSpacing="tighter">
        {label}
      </Text>
      <Input
        defaultValue={value}
        placeholder={placeholder}
        disabled={!editing}
      />
    </Grid>
  );
}

function Driver({ driver }: { driver: string }) {
  return driver ? (
    <>
      <Text>Motorista</Text>
      <Text>{driver}</Text>
    </>
  ) : (
    <Button colorScheme={"blue"} variant="outline" size="sm">
      Adicionar motorista
    </Button>
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
  const [isEditing] = useState(false);

  console.log(wash, washCycle, cycleWashes);

  if (!wash || error) {
    return (
      <Text>
        {error?.message ??
          "Alguma coisa deu errado. Por favor, atualize a página"}
      </Text>
    );
  }

  const formattedDate = format(wash.scheduleDate, "d 'de' MMMM");

  return (
    <Grid gridTemplateColumns={"100%"} padding={4}>
      <Grid gap={8}>
        <Box>
          <Box lineHeight={"shorter"}>
            <PageLabel label={"lavagem"} />
            <Flex align="center" gap={0}>
              <PageTitle title={formattedDate} />
              <PageEditButton isEditing={isEditing} />
            </Flex>
          </Box>
          <Box>
            <CustomInput
              label="data da lavagem"
              value={wash.scheduleDate}
              editing={isEditing}
            />
            <CustomInput
              label="nota"
              value={wash.note}
              placeholder={"adicione uma nota"}
              editing={isEditing}
            />
          </Box>
        </Box>
        <Box>
          <Driver driver={wash.driver} />
        </Box>
        <Box>
          <Plate plate={wash.vehicleId} />
        </Box>
      </Grid>
      <Flex flexDir="column" gap={1} paddingBlock={4}>
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
