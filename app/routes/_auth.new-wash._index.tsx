import { Text, Box, Grid } from "@chakra-ui/react";
import { useStepper } from "~/components/NewWash/Stepper";
import type { Wash } from "~/components/NewWash/WashesContent";
import { WashesContent } from "~/components/NewWash/WashesContent";
import {
  defaultVehicleState,
  VehicleContent,
} from "~/components/NewWash/VehicleContent/";
import type { Vehicle } from "~/components/NewWash/VehicleContent/";
import type { Vehicle as DomainVehicle } from "domain/modules/vehicle/entities/Vehicle";
import { useCallback, useEffect, useState } from "react";
import { NewWashFooter } from "~/components/NewWash/footer";
import type { Driver } from "~/components/NewWash/DriverContent";
import {
  defaultDriverValue,
  DriverContent,
} from "~/components/NewWash/DriverContent";
import { summary } from "~/components/NewWash/SummaryContent";
import type { ActionArgs } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { useActionData, useNavigate, useSubmit } from "@remix-run/react";
import { useToast } from "~/components/hooks/useToast";
import { createVehicleController } from "src/infra/http/controllers/create-vehicle-controller";
import { initializeCycleController } from "src/infra/http/controllers/create-wash-cycle-controller";
import { getSession } from "~/sessions";
import { validateSessionId } from "src/infra/http/helpers/validate-session-id";
import { createWashController } from "src/infra/http/controllers/create-wash-controller";

export async function action({ request }: ActionArgs) {
  const jsonData = await request.json();
  let vehicle = jsonData?.vehicle as Vehicle | null;
  const washes = jsonData?.washes as Wash[];
  const driver = jsonData?.driver as {
    name: string;
    phone: string;
    create: boolean;
  };
  const cycleId = jsonData?.cycleId as string;

  if (!vehicle) {
    return json(
      {
        error: true,
        message: "Você precisa fornecer o veículo",
      },
      400,
    );
  }

  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token") ?? "";
  const { user } = await validateSessionId({ sessionId: token });

  if (!user) throw redirect("/sign-up");

  if (vehicle.create) {
    const createdVehicle = await createVehicleController({
      type: vehicle.type as DomainVehicle["vehicleType"],
      licensePlate: vehicle.licensePlate,
      driver: driver,
    });

    if (createdVehicle.error) {
      return json(
        {
          error: true,
          message: createdVehicle.error.message,
        },
        createdVehicle.error.statusCode,
      );
    }

    vehicle = { ...vehicle, licensePlate: createdVehicle.vehicle.licensePlate };
  }

  if (cycleId) {
    const data = washes[0];
    const { error } = createWashController({
      cycleId,
      createdBy: user.id,
      scheduleDate: data.scheduleDate,
      vehicleId: vehicle.licensePlate,
      note: data.note,
      isCompleted: data.isCompleted,
    });
    if (error) {
      return json(
        {
          error: true,
          message: error.message,
        },
        error.statusCode,
      );
    }
  } else {
    const initializeCycleData = initializeCycleController({
      createdBy: user?.id ?? "",
      vehicleId: vehicle.licensePlate,
      washes,
    });

    if (initializeCycleData.error) {
      return json(
        {
          error: true,
          message: initializeCycleData.error.message,
        },
        initializeCycleData.error.statusCode,
      );
    }
  }

  return json({ success: true, message: "Lavagens criadas" }, 201);
}

export default function NewWash() {
  const { Stepper, activeStep, steps, goToPrevious, goToNext, setActiveStep } =
    useStepper();
  const { showErrorToast, showSuccessToast } = useToast();
  const [error, setError] = useState<boolean>(false);
  const [vehicle, setVehicle] = useState<Vehicle>(defaultVehicleState);
  const [washes, setWashes] = useState<Wash[]>([]);
  const [cycleId, setCycleId] = useState<string | null>(null);
  const [driver, setDriver] = useState<Driver>(defaultDriverValue);
  const submit = useSubmit();
  const navigate = useNavigate();
  const data = useActionData<typeof action>();

  const addError = useCallback(() => {
    setError(true);
  }, []);

  const removeError = useCallback(() => {
    setError(false);
  }, []);

  function getWashesFormData(element: HTMLFormElement) {
    const form = new FormData(element);
    const scheduleDate = form.get("scheduleDate")?.toString() ?? "";
    const note = form.get("note")?.toString() ?? "";
    const isCompleted = form.get("isCompleted") === "";
    const title = form.get("title")?.toString() ?? "";
    const id = Number(form.get("id"));
    return { scheduleDate, id, note, isCompleted, title };
  }

  function onNextStepButtonClick(fn?: Function) {
    // washes step
    if (activeStep === 1) {
      const forms = document.querySelectorAll(".wash-form");
      const input = document.querySelector(".cycleId") as HTMLInputElement;
      const arr = [] as {
        scheduleDate: string;
        note: string;
        isCompleted: boolean;
        title: string;
        id: number;
      }[];
      forms.forEach((f) => arr.push(getWashesFormData(f as HTMLFormElement)));
      setWashes(arr);
      setCycleId(input?.value);
    }
    goToNext();
  }

  function setDriverData(v: Driver) {
    setDriver(v);
  }

  function setVehicleData(v: Vehicle) {
    setVehicle(v);
  }

  function setWashesData(w: Wash) {
    setWashes((s) => {
      const arr = [...s];
      const index = s?.findIndex((v) => v.id === w.id);
      if (index > -1) {
        arr[index] = w;
      }
      return arr;
    });
  }

  function removeWash(id: number) {
    setWashes((s) => {
      const arr = s.filter((w) => w.id !== id);
      return arr;
    });
  }

  function addSingleWash(
    wash: {
      scheduleDate: string;
      note: string;
      isCompleted: boolean;
    },
    cycleId: string,
  ) {
    setWashes([{ ...wash, id: 1, title: "" }]);
    setCycleId(cycleId);
  }

  function onFinish() {
    const params = { vehicle, driver, washes, cycleId };
    submit(params, { method: "POST", encType: "application/json" });
  }

  useEffect(() => {
    if (typeof data === "undefined") return;
    if (data?.success) {
      showSuccessToast({ message: data.message });
      navigate("/home");
    }
  }, [data, showSuccessToast, navigate]);

  useEffect(() => {
    if (typeof data !== "undefined") {
      data?.error && showErrorToast({ message: data.message });
    }
  }, [data, showErrorToast]);

  const isVehicleDataValid = vehicle.licensePlate !== "" && vehicle.type !== "";
  const isDriverValid = true;
  const lowerThanLastStep = activeStep < steps.length - 1;

  const canProceed = isVehicleDataValid && isDriverValid && lowerThanLastStep;

  const canGoBack = activeStep > 0;

  console.log(washes);

  return (
    <Grid
      blockSize="100%"
      inlineSize="100%"
      maxInlineSize={"90%"}
      marginInline="auto"
      gridAutoFlow="column"
      gap={1}
      gridTemplateColumns={"auto 1fr"}
      gridTemplateRows={"100%"}
      paddingBlock={[4, 8]}
      paddingInline={4}
      overflow="hidden"
    >
      <Stepper
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        steps={steps}
      />
      <Grid
        gridTemplateColumns={"1fr"}
        inlineSize={"100%"}
        gridTemplateRows="auto 1fr"
      >
        <Text
          placeSelf={"center"}
          as="h1"
          fontSize={["xl", "xl", "2xl"]}
          marginBlockEnd={4}
          whiteSpace="nowrap"
        >
          {steps[activeStep].modalTitle}
        </Text>
        <Box inlineSize={"100%"} marginInline="auto" overflow={"scroll"}>
          {activeStep === 0 && (
            <VehicleContent
              setVehicleData={setVehicleData}
              vehicle={vehicle}
              addError={addError}
              removeError={removeError}
            />
          )}
          {activeStep === 1 && (
            <WashesContent
              washes={washes}
              setWashes={setWashesData}
              licensePlate={vehicle.licensePlate}
              addSingleWash={addSingleWash}
              removeWash={removeWash}
              onNextStepClick={onNextStepButtonClick}
            />
          )}
          {activeStep === 2 && (
            <DriverContent driver={driver} setDriverData={setDriverData} />
          )}
          {activeStep === 3 && (
            <summary.Container>
              <summary.Vehicle
                vehicle={vehicle}
                goTo={() => setActiveStep(0)}
              />
              <summary.Washes washes={washes} goTo={() => setActiveStep(1)} />
              <summary.Driver driver={driver} goTo={() => setActiveStep(2)} />
            </summary.Container>
          )}
        </Box>
        <NewWashFooter
          isNextButtonDisable={error || !canProceed}
          isPreviousButtonDisable={!canGoBack}
          goBack={goToPrevious}
          onFinish={onFinish}
          isLastStep={steps.length - 1 === activeStep}
          onNextStepClick={onNextStepButtonClick}
        />
      </Grid>
    </Grid>
  );
}
