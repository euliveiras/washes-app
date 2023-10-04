import type { ActionArgs, LoaderArgs } from "@remix-run/node";
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
  let wash, error;

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
  return <Text>{label}</Text>;
}

function PageTitle({ title }: { title: string }) {
  return <Text>{title}</Text>;
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
    <>
      <Text>Placa</Text>
      <Flex>
        <Text>{plate}</Text>
        <IconButton
          aria-label="go to licenseplate page"
          icon={<LiaExternalLinkAltSolid size={24} />}
          colorScheme="blue"
          variant="ghost"
        />
      </Flex>
    </>
  );
}

function CustomInput({
  label,
  value,
  placeholder,
}: {
  label: string;
  value: string;
  placeholder?: string;
}) {
  return (
    <Flex>
      <Text>{label}</Text>
      <Input defaultValue={value} placeholder={placeholder} />
    </Flex>
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

  return (
    <Grid>
      <Grid>
        <Box>
          <Box>
            <PageLabel label={"lavagem"} />
            <Flex>
              <PageTitle title={wash.scheduleDate} />
              <PageEditButton isEditing={isEditing} />
            </Flex>
          </Box>
          <Box>
            <CustomInput label="data da lavagem" value={wash.scheduleDate} />
            <CustomInput
              label="nota"
              value={wash.note}
              placeholder={"adicione uma nota"}
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
      <Box>
        <Text>Ciclo de lavagem</Text>
        <washesTable.Table>
          <washesTable.Body>
            {cycleWashes?.map((w) => {
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
                    label={w?.isCompleted === true ? "Confirmado" : "Atrasada"}
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
      </Box>
    </Grid>
  );
}
