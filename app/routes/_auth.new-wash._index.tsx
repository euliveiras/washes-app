import { Text, Box, Grid } from "@chakra-ui/react";
import { useStepper } from "~/components/NewWash/Stepper";
import type { Wash } from "~/components/NewWash/WashesContent";
import {
  WashesContent,
  washesDefaultValue,
} from "~/components/NewWash/WashesContent";
import {
  defaultVehicleState,
  VehicleContent,
} from "~/components/NewWash/VehicleContent/";
import type { Vehicle } from "~/components/NewWash/VehicleContent/";
import type { Vehicle as DomainVehicle } from "domain/modules/vehicle/entities/Vehicle";
import { useEffect, useState } from "react";
import { NewWashFooter } from "~/components/NewWash/footer";
import type { Driver } from "~/components/NewWash/DriverContent";
import {
  defaultDriverValue,
  DriverContent,
} from "~/components/NewWash/DriverContent";
import { summary } from "~/components/NewWash/SummaryContent";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { useToast } from "~/components/NewWash/Toast";
import { createVehicleController } from "src/infra/http/controllers/create-vehicle-controller";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.searchParams);
  const vehicle = JSON.parse(params.get("vehicle") ?? "null") as Vehicle | null;
  const washes = params.get("washes") as Wash[] | null;
  const driver = JSON.parse(params.get("driver") ?? "null") as Driver | null;

  if (!vehicle)
    return json({
      error: true,
      message: "Você precisa fornecer o veículo",
    });

  const { error, vehicle: created } = await createVehicleController({
    type: vehicle.type as DomainVehicle["vehicleType"],
    licensePlate: vehicle.licensePlate,
    driver: driver?.create ? driver : undefined,
  });

  console.log(error, created);

  return json({ error: false, message: "" });
}

export default function () {
  const { Stepper, activeStep, steps, goToPrevious, goToNext, setActiveStep } =
    useStepper();
  const { showErrorToast } = useToast();
  const [error, setError] = useState<boolean>(false);
  const [vehicle, setVehicle] = useState<Vehicle>(defaultVehicleState);
  const [washes, setWashes] = useState<Wash[]>(washesDefaultValue);
  const [driver, setDriver] = useState<Driver>(defaultDriverValue);
  const submit = useSubmit();
  const data = useLoaderData<typeof loader>();

  function addError() {
    setError(true);
  }

  function removeError() {
    setError(false);
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

  function onFinish() {
    const params = new URLSearchParams();

    params.set("vehicle", JSON.stringify(vehicle));
    params.set("driver", JSON.stringify(driver));
    params.set("washes", JSON.stringify(washes));

    submit(params);
  }

  useEffect(() => {
    if (typeof data !== "undefined") {
      data.error && showErrorToast(data.message);
    }
  }, [data, showErrorToast]);

  const isVehicleDataValid =
    activeStep === 0 &&
    vehicle.licensePlate &&
    vehicle.type &&
    typeof vehicle.create === "boolean";
  const isDriverValid = activeStep === 2;
  const isLastStep = activeStep < steps.length + -1;
  const isWashesValid = activeStep === 1 && true;

  const canProceed =
    (isVehicleDataValid || isDriverValid || isWashesValid) && isLastStep;

  const canGoBack = activeStep > 0;

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
              addError={addError}
              removeError={removeError}
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
          goNext={goToNext}
          onFinish={onFinish}
          isLastStep={steps.length - 1 === activeStep}
        />
      </Grid>
    </Grid>
  );
}
