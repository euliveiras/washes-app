import {
  Flex,
Box,
  FormControl,
  FormLabel,
  Checkbox,
  Input,
} from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import type { ChangeEvent } from "react";
import { useRef } from "react";
import type { Driver } from ".";

type NewDriverFormProps = {
  driver: Driver;
  setDriverData(d: Driver): void;
};

export function NewDriverForm({ driver, setDriverData }: NewDriverFormProps) {
  const timeoutId = useRef<string>(null);
  const isDisabled = !driver.create;

  function onFormChange(e: ChangeEvent<HTMLFormElement>) {
    const form = new FormData(e.currentTarget);
    const create = form.get("create") === "";
    const driverName = form.get("name")?.toString() ?? "";
    const phone = form.get("phone")?.toString() ?? "";

    if (create) {
      if (!driverName) {
        setDriverData({ name: "", create, phone: "" });
        return;
      }
      timeoutId.current && clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        setDriverData({ name: driverName, create, phone });
      }, 1000);
    } else {
      setDriverData({ name: "", create, phone: "" });
    }
  }

  return (
    <Box maxInlineSize={"260px"} marginInline="auto">
      <Form
        onChange={onFormChange}
        style={{ blockSize: "100%", inlineSize: "100%" }}
      >
          <Flex flexDir={"column"} blockSize={"100%"} gap={8}>
            <FormControl
              as={Flex}
              blockSize="min-content"
              gap={4}
              paddingBlockStart={[0, 0, 1]}
              align="center"
              justify={"center"}
            >
              <FormLabel margin={0} htmlFor="driver-create">
                Adicionar motorista novo?
              </FormLabel>
              <Checkbox
                defaultChecked={driver.create}
                id="driver-create"
                name="create"
                size="lg"
                justifySelf={"center"}
              />
            </FormControl>
            <Flex flexDir={"column"} gap={8} inlineSize="100%">
              <FormControl as={Flex} flexDir={"column"} gap={4}>
                <FormLabel margin={0} marginInline="auto" htmlFor="driver-name">
                  Motorista
                </FormLabel>
                <Input
                  id="driver-name"
                  name="name"
                  placeholder="Nome"
                  isDisabled={isDisabled}
                  defaultValue={driver.create ? driver.name : ""}
                />
              </FormControl>
              <FormControl as={Flex} flexDir={"column"} gap={4}>
                <FormLabel
                  margin={0}
                  marginInline="auto"
                  htmlFor="driver-phone"
                >
                  Telefone
                </FormLabel>
                <Input
                  id="driver-phone"
                  name="phone"
                  placeholder="telefone"
                  isDisabled={isDisabled}
                  defaultValue={driver.create ? driver.phone : ""}
                />
              </FormControl>
            </Flex>
          </Flex>
      </Form>
    </Box>
  );
}
