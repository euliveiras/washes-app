import { Text, Flex, Button } from "@chakra-ui/react";
import type { Vehicle } from "../VehicleContent";
import { HiExternalLink } from "react-icons/hi";

type VehicleSummaryProps = {
  vehicle: Vehicle;
  goTo(): void;
};

export function VehicleSummary({ goTo, vehicle }: VehicleSummaryProps) {
  return (
    <Flex align={"center"} flexDir="column" gap={4} inlineSize="100%">
      <Text as="h2" fontSize={"md"} marginInline="auto">
        Informações do Veículo
      </Text>
      <Button
        rightIcon={<HiExternalLink size={20} />}
        variant="outline"
        onClick={() => goTo()}
        blockSize={"fit-content"}
        inlineSize="100%"
        minBlockSize={12}
      >
        <Flex
          flexDir="column"
          gap={1}
          paddingBlock={4}
          inlineSize="auto"
          align={"start"}
          marginInlineEnd={"auto"}
        >
          <Text>placa: {"JUAH9123"}</Text>
          <Text>tipo: {"Truck"}</Text>
        </Flex>
      </Button>
    </Flex>
  );
}
