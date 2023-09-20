import { Grid } from "@chakra-ui/react";
import type { Vehicle } from ".";
import { NewVehicleForm } from "./NewVehicleForm";
import { VehicleDivider } from "./VehicleDivider";
import { VehicleSearch } from "./VehicleSearch";

type VehicleContentProps = {
  setVehicleData(v: Vehicle): void;
  vehicle: Vehicle;
  addError(): void;
  removeError(): void;
};

export function Container({
  setVehicleData,
  vehicle,
  addError,
  removeError,
}: VehicleContentProps) {
  return (
    <Grid
      id="vehicle"
      blockSize="100%"
      inlineSize={"100%"}
      paddingInline={4}
      alignContent="start"
      placeItems={"center"}
      gap={4}
      gridAutoFlow={["row", "row", "column"]}
      alignItems="start"
    >
      <VehicleSearch setVehicle={setVehicleData} vehicle={vehicle} />
      <VehicleDivider />
      <NewVehicleForm
        vehicle={vehicle}
        onChange={setVehicleData}
        addError={addError}
        removeError={removeError}
      />
    </Grid>
  );
}
