import { Text, Box, Grid } from "@chakra-ui/react";
import { useStepper } from "~/components/NewWash/Stepper";
import { washContent } from "~/components/NewWash/WashesContent";
import {
  defaultVehicleState,
  VehicleContent,
} from "~/components/NewWash/VehicleContent/";
import type { Vehicle } from "~/components/NewWash/VehicleContent/";
import { useState } from "react";
import { NewWashFooter } from "~/components/NewWash/footer";
import { useDate } from "~/components/hooks/useDate";

export type Wash = {
  id: string | number;
  scheduleDate: string;
  note: string;
  isCompleted: boolean;
  title: string;
};

export default function () {
  const { Stepper, steps, activeStep, goToPrevious, goToNext, setActiveStep } =
    useStepper();
  const { addDays, format } = useDate();
  const baseDate = new Date();
  const minDate = format(baseDate, "yyyy-MM-dd");
  const firstDate = format(baseDate, "yyyy-MM-dd");
  const secDate = format(addDays(baseDate, 7), "yyyy-MM-dd");
  const thirdDate = format(addDays(baseDate, 14), "yyyy-MM-dd");
  const fourthDate = format(addDays(baseDate, 28), "yyyy-MM-dd");

  const defaultValues = [
    {
      id: 1,
      scheduleDate: firstDate,
      note: "",
      isCompleted: false,
      title: "primeira lavagem",
    },
    {
      id: 2,
      scheduleDate: secDate,
      note: "",
      isCompleted: false,
      title: "segunda lavagem",
    },
    {
      id: 3,
      scheduleDate: thirdDate,
      note: "",
      isCompleted: false,
      title: "terceira lavagem",
    },
    {
      id: 4,
      scheduleDate: fourthDate,
      note: "",
      isCompleted: false,
      title: "quarta lavagem",
    },
  ];

  const [vehicle, setVehicle] = useState<Vehicle>(defaultVehicleState);
  const [washes, setWashes] = useState<Wash[]>(defaultValues);

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

  const isVehicleDataValid =
    vehicle.licensePlate && vehicle.type && typeof vehicle.create === "boolean";

  console.log(vehicle);

  return (
    <Grid paddingInline={4} gridTemplateRows="1fr auto" inlineSize={"100%"}>
      <Grid
        gridAutoFlow="column"
        gap={1}
        gridTemplateColumns={"auto 1fr"}
        gridTemplateRows={"100%"}
        paddingBlockStart={[4, 4, 8]}
        paddingBlockEnd={8}
        blockSize="100%"
      >
        <Stepper activeStep={activeStep} steps={steps} />
        <Grid
          blockSize="100%"
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
          <Box inlineSize={"100%"} marginInline="auto">
            {activeStep === 0 && (
              <VehicleContent
                setVehicleData={setVehicleData}
                vehicle={vehicle}
              />
            )}
            {activeStep === 1 && (
              <washContent.Container licensePlate={vehicle?.licensePlate ?? ""}>
                {washes?.map((w) => (
                  <Box
                    key={w.scheduleDate}
                    maxInlineSize={"320px"}
                    marginInline={[0, 8]}
                    border="4px"
                    borderColor={"blue.400"}
                    borderRadius="lg"
                    paddingInline={4}
                    paddingBlock={8}
                  >
                    <washContent.Form
                      id={w.id}
                      onChange={setWashesData}
                      isCompleted={w.isCompleted}
                      title={w.title}
                      defaultDate={w.scheduleDate}
                      minDate={minDate}
                      note={w.note ?? ""}
                    />
                  </Box>
                ))}
              </washContent.Container>
            )}
          </Box>
          <NewWashFooter
            isNextButtonDisable={!isVehicleDataValid}
            isPreviousButtonDisable={steps.length <= activeStep}
            goBack={goToPrevious}
            goNext={goToNext}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
