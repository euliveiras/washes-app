import {
  MdDirectionsCarFilled,
  MdCheck,
  MdWaterDrop,
  MdPerson2,
} from "react-icons/md";
import { useSteps } from "@chakra-ui/react";
import { Stepper } from "./Stepper";
import type { IconType } from "react-icons";

export interface StepsType {
  label:
    | "vehicle"
    | "washes"
    | "driver"
    | "summary";
  isNullable: boolean;
  IconActive: IconType;
  IconIncomplete: IconType;
  modalTitle:
    | "Escolher veículo"
    | "Cadastrar lavagens"
    | "Escolher motorista"
    | "Confirmar opções";
}

const steps: StepsType[] = [
  {
    label: "vehicle",
    IconIncomplete: MdDirectionsCarFilled,
    IconActive: MdDirectionsCarFilled,
    isNullable: false,
    modalTitle: "Escolher veículo",
  },
  {
    label: "washes",
    IconIncomplete: MdWaterDrop,
    IconActive: MdWaterDrop,
    isNullable: false,
    modalTitle: "Cadastrar lavagens",
  },
  {
    label: "driver",
    IconIncomplete: MdPerson2,
    IconActive: MdPerson2,
    isNullable: true,
    modalTitle: "Escolher motorista",
  },
  {
    label: "summary",
    IconIncomplete: MdCheck,
    IconActive: MdCheck,
    isNullable: false,
    modalTitle: "Confirmar opções",
  },
];

export function useStepper() {
  const { activeStep, goToNext, goToPrevious, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return {
    Stepper: Stepper,
    activeStep,
    goToNext,
    goToPrevious,
    steps,
    setActiveStep,
  };
}
