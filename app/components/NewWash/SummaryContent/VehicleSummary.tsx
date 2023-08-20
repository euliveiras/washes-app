import { Text, Box, Checkbox } from "@chakra-ui/react";
import type { Vehicle } from "../VehicleContent";

type VehicleSummaryProps = {
  vehicle: Vehicle;
};

export function VehicleSummary({ vehicle }: VehicleSummaryProps) {
  return vehicle.create ? (
    <Box>
      <Checkbox isChecked={vehicle.create} readOnly />
      <Text>{vehicle.licensePlate}</Text>
      <Text>{vehicle.type}</Text>
    </Box>
  ) : (
    <Text>Nenhum motorista fornecido</Text>
  );
}
