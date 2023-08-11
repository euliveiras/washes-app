import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Divider,
  Box,
} from "@chakra-ui/react";
import type { RefObject } from "react";
import { useState } from "react";

import { useStepper } from "./Stepper";
import { VehicleContent } from "./VehicleContent";
import { WashesContent } from "./WashesContent";
import type { VehicleProps as VehicleEntityProps } from "domain/modules/vehicle/entities/Vehicle";

export type Vehicle = {
  licensePlate?: string | null;
  type?: VehicleEntityProps["vehicleType"] | null;
  create?: boolean;
};

type VehicleErrors = { label: "vehicle"; errors: string[] };
type WashErrors = { label: "washes"; errors: string[] };
type DriverErrors = { label: "driver"; errors: string[] };
type OrganizationErrors = { label: "organization"; errors: string[] };
type SummaryErrors = { label: "summary"; errors: string[] };

type Errors = {
  vehicle: VehicleErrors;
  washes: WashErrors;
  organization?: OrganizationErrors;
  driver?: DriverErrors;
  summary: SummaryErrors;
};

type ModalProps = {
  isOpen: boolean;
  onClose(): void;
  finalFocusRef: RefObject<HTMLElement>;
};

export function Modal({ isOpen, onClose, finalFocusRef }: ModalProps) {
  const [errors, setErrors] = useState<Errors>({
    vehicle: { errors: ["Required"], label: "vehicle" },
    washes: { errors: ["Required"], label: "washes" },
    summary: { errors: ["Required"], label: "summary" },
  });
  const [vehicleData, setVehicleData] = useState<Vehicle>({});
  const { activeStep, goToNext, goToPrevious, Stepper, steps, setActiveStep } =
    useStepper();

  function setVehicle(v: Vehicle) {
    const { licensePlate, type } = v;
    if (!licensePlate || !type) {
      setVehicleErrors("Required", "ADD");
    } else {
      setVehicleErrors("Required", "REMOVE");
    }
    setVehicleData(v);
  }

  function onStepperFinish() {
    setActiveStep(0);
    onClose();
    finalFocusRef.current?.focus();
  }

  function setVehicleErrors(e: string, action: "ADD" | "REMOVE") {
    if (action === "ADD") {
      setErrors((s) => {
        const error = s.vehicle?.errors?.find((str) => str === e);
        if (error) return s;
        const vehicle = s.vehicle;
        vehicle?.errors?.push(e);
        return {
          ...s,
          vehicle: { label: "vehicle", errors: vehicle?.errors ?? [e] },
        };
      });
    } else if (action === "REMOVE") {
      setErrors((s) => {
        const error = s.vehicle?.errors?.find((str) => str === e);
        if (!error) return s;
        const { vehicle } = s;
        const errors = vehicle?.errors?.filter((str) => str !== e) ?? [];
        return { ...s, vehicle: { label: "vehicle", errors } };
      });
    }
    return;
  }

  const canProceed =
    errors[steps[activeStep].label]?.errors?.length > 0 ? false : true;

  console.log("errors:", errors);

  return (
    <>
      <ChakraModal
        isCentered
        size={["xs", "md", "2xl", "3xl"]}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent blockSize={"90%"}>
          <ModalHeader alignSelf={"center"}>
            {steps[activeStep].modalTitle}
          </ModalHeader>
          <ModalCloseButton top={4} />
          <ModalBody
            display={"grid"}
            gridAutoFlow="column"
            gap="1.125em"
            gridTemplateColumns={"auto 1fr"}
            gridTemplateRows={"100%"}
            marginInline={[0, 0, 4]}
            paddingBlockStart={[4, 4, 8]}
          >
            <Stepper activeStep={activeStep} steps={steps} />
            <Box marginInline={[0, 0, 4]}>
              {steps[activeStep].label === "vehicle" && (
                <VehicleContent
                  vehicleData={vehicleData}
                  setVehicleFn={setVehicle}
                  setVehicleErrors={setVehicleErrors}
                />
              )}
              {steps[activeStep].label === "washes" && (
                <WashesContent
                  licensePlate={vehicleData.licensePlate ?? undefined}
                />
              )}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              key="jump-btn"
              isDisabled={
                !steps[activeStep].isNullable ||
                steps[activeStep].label ===
                  errors[steps[activeStep]?.label]?.label
              }
              colorScheme="purple"
              variant="ghost"
              mr={3}
              size="sm"
              onClick={goToNext}
            >
              pular
            </Button>
            <Button
              key="back-btn"
              colorScheme="gray"
              variant="ghost"
              mr={3}
              onClick={goToPrevious}
              marginInlineEnd="0"
            >
              voltar
            </Button>
            <Divider
              orientation="vertical"
              inlineSize={"8px"}
              borderColor="gray.400"
            />
            {activeStep === steps.length - 1 ? (
              <Button
                key="finish-btn"
                variant="ghost"
                colorScheme={"blue"}
                onClick={onStepperFinish}
              >
                finalizar
              </Button>
            ) : (
              <Button
                key="next-btn"
                isDisabled={steps[activeStep].isNullable || !canProceed}
                variant="ghost"
                colorScheme={"blue"}
                onClick={goToNext}
              >
                próximo
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
}
