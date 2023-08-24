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
      flex={1}
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
        inlineSize={"100%"}
        maxInlineSize="200px"
        align={"center"}
      >
        <Button
          rightIcon={<HiExternalLink size={20} />}
          variant="outline"
          onClick={() => goTo()}
          inlineSize="100%"
          minBlockSize={12}
          blockSize="fit-content"
        >
          <Flex
            flexDir="column"
            gap={1}
            paddingBlock={4}
            align={"start"}
            marginInlineEnd={4}
            inlineSize="100%"
          >
            {driver.create ? (
              <>
                <Text fontSize={"md"}>{"Matheus"}</Text>
                <Flex as="span" gap={1} inlineSize="fit-content">
                  <Text fontSize={"sm"} fontWeight={"light"}>
                    {driver.name}
                  </Text>
                </Flex>
              </>
            ) : (
              <Text
                textAlign={"left"}
                paddingBlock={4}
                fontSize={"sm"}
                whiteSpace={"break-spaces"}
              >
                Nenhum motorista fornecido
              </Text>
            )}
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
}
