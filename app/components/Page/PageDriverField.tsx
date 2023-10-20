import { Flex, Button, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "@remix-run/react";
import { InputWithLabel } from "../LabelWithInput";

export function PageDriverField({
  driver,
  licenseplate,
}: {
  driver: string;
  licenseplate: string;
}) {
  const [showForm, setShowForm] = useState(false);
  if (driver)
    return (
      <>
        <Text>Motorista</Text>
        <Text>{driver}</Text>
      </>
    );

  return showForm ? (
    <Flex as={Form} method="PUT" flexDir="column" gap={8}>
      <Flex
        flexDir="column"
        lineHeight={1}
        justify="space-between"
        blockSize={"100%"}
      >
        <Text
          color="blue.600"
          fontWeight={"bold"}
          fontSize="lg"
          marginBlockStart={[0, 0, 8]}
        >
          Motorista
        </Text>
        <Box>
          <InputWithLabel
            labelProps={{ label: "nome" }}
            inputProps={{ value: "", name: "DRIVER_NAME" }}
            editing={true}
          />
          <InputWithLabel
            labelProps={{ label: "telefone" }}
            inputProps={{ value: "", name: "DRIVER_PHONE" }}
            editing={true}
          />
          <input type="hidden" name="LICENSE_PLATE" value={licenseplate} />
        </Box>
      </Flex>
      <Button
        type="submit"
        name="ACTION"
        value="ADD_DRIVER"
        colorScheme={"blue"}
        variant="solid"
        size="sm"
        paddingInline={8}
        width={"fit-content"}
      >
        Salvar
      </Button>
    </Flex>
  ) : (
    <Button
      colorScheme={"blue"}
      variant="solid"
      size="sm"
      width={"fit-content"}
      paddingInline={8}
      onClick={() => setShowForm(true)}
    >
      Adicionar motorista
    </Button>
  );
}
