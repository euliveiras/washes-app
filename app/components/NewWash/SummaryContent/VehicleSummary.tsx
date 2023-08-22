import { Text, Flex, Button } from "@chakra-ui/react";
import type { Vehicle } from "../VehicleContent";
import { HiExternalLink } from "react-icons/hi";

type VehicleSummaryProps = {
  vehicle: Vehicle;
  goTo(): void;
};

export function VehicleSummary({ goTo, vehicle }: VehicleSummaryProps) {
  return (
    <Flex
      align={"center"}
      justify="center"
      flexDir="column"
      gap={4}
      paddingBlock={[4, 8]}
      paddingInline={[0, 4, 8]}
      inlineSize="100%"
      border="1px"
      borderColor={"blue.400"}
      borderWidth="medium"
      borderRadius="2xl"
    >
      <Text as="h2" fontSize={"md"} marginInline="auto" justifySelf={"start"}>
        Informações do Veículo
      </Text>
      <Button
        rightIcon={<HiExternalLink size={20} />}
        variant="outline"
        onClick={() => goTo()}
        blockSize={"fit-content"}
        inlineSize={"fit-content"}
        minBlockSize={12}
      >
        <Flex
          flexDir="column"
          gap={1}
          paddingBlock={4}
          paddingInlineEnd={1}
          inlineSize="auto"
          align={"start"}
          marginInlineEnd={"auto"}
        >
          <Flex as="span" gap={1}>
            <Text fontSize={"md"}>placa:</Text>
            <Text fontWeight="semibold">{"JUAH9123"}</Text>
          </Flex>
          <Flex as="span" gap={1}>
            <Text>tipo:</Text>
            <Text fontSize={"sm"} fontWeight="light">
              {"Truck"}
            </Text>
          </Flex>
        </Flex>
      </Button>
    </Flex>
  );
}
