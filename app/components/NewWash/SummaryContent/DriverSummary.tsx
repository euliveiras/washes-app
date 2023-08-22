import { Text, Flex, Box, Checkbox, Button, FormLabel } from "@chakra-ui/react";
import type { Driver } from "../DriverContent";
import { HiExternalLink } from "react-icons/hi";

type DriverSummaryProps = {
  driver: Driver;
  goTo(): void;
};

export function DriverSummary({ driver, goTo }: DriverSummaryProps) {
  return (
    <Flex align={"center"} flexDir="column" gap={4}>
      <Text as="h2" fontSize={"md"} marginInline="auto">
        Informações do motorista
      </Text>
      <Flex flexDir={"column"} gap={4} blockSize="fit-content" align={"center"}>
        <Button
          rightIcon={<HiExternalLink size={20} />}
          variant="outline"
          onClick={() => goTo()}
          blockSize={"fit-content"}
          inlineSize="fit-content"
          minBlockSize={12}
        >
          {true ? (
            <Flex flexDir="column" gap={1} paddingBlock={4} inlineSize="auto" align={"start"} marginInlineEnd={4}>
              <Text>nome: {"Matheus"}</Text>
              <Text>telefone: {"1239810938901"}</Text>
            </Flex>
          ) : (
            <Text>Nenhum motorista fornecido</Text>
          )}
        </Button>
      </Flex>
    </Flex>
  );
}
