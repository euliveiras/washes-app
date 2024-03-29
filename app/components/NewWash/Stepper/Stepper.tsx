import {
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper as ChakraStepper,
  Box,
} from "@chakra-ui/react";
import type { StepsType } from ".";

type StepperProps = {
  steps: StepsType[];
  activeStep: number;
  setActiveStep(number: number): void;
};

export function Stepper({ steps, activeStep, setActiveStep }: StepperProps) {
  return (
    <ChakraStepper
      index={activeStep}
      orientation="vertical"
      blockSize="100%"
      size={["md", "md", "lg"]}
    >
      {steps.map(({ IconIncomplete, IconActive, label }, index) => (
        <Step key={index} onClick={(e) => setActiveStep(index)}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<IconIncomplete size={20} />}
              active={<IconActive size={20} />}
            />
          </StepIndicator>

          <Box
            flexShrink="0"
            paddingBlockStart={1}
            display={["none", "none", "none", "block"]}
          >
            <StepTitle>{label}</StepTitle>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </ChakraStepper>
  );
}
