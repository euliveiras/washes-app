import { Text, Flex, Button } from "@chakra-ui/react";
import type { Driver } from "../DriverContent";
import { HiExternalLink } from "react-icons/hi";

type DriverSummaryProps = {
  driver: Driver;
  goTo(): void;
};

export function DriverSummary({ driver, goTo }: DriverSummaryProps) {
  return (
    <Flex
      align={"center"}
justify="center"
      flexDir="column"
      gap={4}
paddingBlock={4}
      inlineSize="100%"
      border="1px"
      borderColor={"blue.400"}
      borderWidth="medium"
      borderRadius="2xl"
    >
      <Text as="h2" fontSize={"md"} marginInline="auto">
        Informações do motorista
      </Text>
      <Flex
        flexDir={"column"}
        gap={4}
        blockSize="fit-content"
        inlineSize={"fit-content"}
        align={"center"}
      >
        <Button
          rightIcon={<HiExternalLink size={20} />}
          variant="outline"
          onClick={() => goTo()}
          blockSize={"fit-content"}
          inlineSize="fit-content"
          minBlockSize={12}
        >
          {true ? (
            <Flex
              flexDir="column"
              gap={1}
              paddingBlock={4}
              inlineSize="fit-content"
              align={"start"}
              marginInlineEnd={4}
            >
              <Text fontSize={"md"}>{"Matheus"}</Text>
              <Flex as="span" gap={1} inlineSize="fit-content">
                <Text fontSize={"sm"} fontWeight={"light"}>
                  {"1239810938901"}
                </Text>
              </Flex>
            </Flex>
          ) : (
            <Text>Nenhum motorista fornecido</Text>
          )}
        </Button>
      </Flex>
    </Flex>
  );
}
