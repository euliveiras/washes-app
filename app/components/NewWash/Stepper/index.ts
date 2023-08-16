import {
  MdDirectionsCarFilled,
  MdCheck,
  MdWaterDrop,
  MdPerson2,
} from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { useSteps } from "@chakra-ui/react";
import { Stepper } from "./Stepper";
import type { IconType } from "react-icons";

export interface StepsType {
  label:
    | "vehicle"
    | "washes"
    | "driver"
    | "organization"
    | "summary";
  isNullable: boolean;
  IconActive: IconType;
  IconIncomplete: IconType;
  modalTitle:
    | "Escolher veículo"
    | "Cadastrar lavagens"
    | "Escolher motorista"
    | "Escolher organização"
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
    label: "organization",
    IconIncomplete: GoOrganization,
    IconActive: GoOrganization,
    isNullable: true,
    modalTitle: "Escolher organização",
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
    index: 1,
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
