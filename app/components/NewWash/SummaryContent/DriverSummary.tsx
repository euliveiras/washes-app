import { Text, Box, Checkbox } from "@chakra-ui/react";
import type { Driver } from "../DriverContent";

type DriverSummaryProps = {
  driver: Driver;
};

export function DriverSummary({ driver }: DriverSummaryProps) {
  return driver.create ? (
    <Box>
      <Checkbox isChecked={driver.create} readOnly />
      <Text>{driver.name}</Text>
      <Text>{driver.phone}</Text>
    </Box>
  ) : (
    <Text>Nenhum motorista fornecido</Text>
  );
}
