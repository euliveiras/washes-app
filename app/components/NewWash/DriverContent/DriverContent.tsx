import { Box } from "@chakra-ui/react";
import type { Driver } from ".";
import { NewDriverForm } from "./NewDriverForm";

type DriverContentProps = {
  driver: Driver;
  setDriverData(d: Driver): void;
};

export function Root({ setDriverData, driver }: DriverContentProps) {
  return (
    <Box paddingBlock={4}>
      <NewDriverForm driver={driver} setDriverData={setDriverData} />
    </Box>
  );
}
