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
};

export function Stepper({ steps, activeStep }: StepperProps) {
  return (
    <ChakraStepper index={activeStep} orientation="vertical" blockSize="100%">
      {steps.map(({ IconIncomplete, IconActive, label }, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={IconIncomplete}
              active={IconActive}
            />
          </StepIndicator>

          <Box flexShrink="0" display={["none", "none", "none", "block"]}>
            <StepTitle>{label}</StepTitle>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </ChakraStepper>
  );
}
