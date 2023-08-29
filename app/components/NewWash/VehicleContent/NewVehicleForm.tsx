import {
  Alert,
  AlertIcon,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
} from "@chakra-ui/react";
import { Form, useFetcher } from "@remix-run/react";
import type { ChangeEvent } from "react";
import { useEffect, useRef } from "react";
import type { Vehicle } from ".";

const selectOptions = [
  "Extra leve",
  "Leve",
  "Vuc",
  "Toco",
  "Truck",
  "Bitruck",
  "Carreta",
];

type NewVehicleFormProps = {
  vehicle: Vehicle;
  onChange(v: Vehicle): void;
  addError(): void;
  removeError(): void;
};

export function NewVehicleForm({
  addError,
  removeError,
  vehicle,
  onChange,
}: NewVehicleFormProps) {
  const timeoutId = useRef<string>(null);
  const secondTimeOutId = useRef<string>(null);
  const { data, submit } = useFetcher();
  const isDisabled = !vehicle.create;
  const error =
    data?.vehicle ? { message: "Placa já existe" } : null;

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    secondTimeOutId.current && clearTimeout(secondTimeOutId.current);
    secondTimeOutId.current = setTimeout(() => {
      submit(
        { unique: "True", licensePlate: e.target.value },
        { action: "/vehicle-search" },
      );
    }, 1000);
  }

  function onFormChange(e: ChangeEvent<HTMLFormElement>) {
    const form = new FormData(e.currentTarget);
    const create = form.get("create") === "";
    const licensePlate = form.get("licensePlate")?.toString() ?? "";
    const type = form.get("type")?.toString() as Vehicle["type"];

    if (create) {
      if (!licensePlate && !type) {
        onChange({ licensePlate: "", type: "", create });
        return;
      }
      timeoutId.current && clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        onChange({ licensePlate, type, create });
      }, 1000);
    } else {
      onChange({ licensePlate: "", type: "", create });
    }
  }

  useEffect(() => {
    if (data?.vehicle) addError();
    else removeError();
  }, [data?.vehicle, removeError, addError]);

  return (
    <Form onChange={onFormChange}>
      <Grid gridAutoRows={"min-content"} placeContent="center" gap={4}>
        <FormControl
          as={Flex}
          blockSize="min-content"
          gap={4}
          paddingBlockStart={[0, 0, 1]}
          align="center"
          justify={"center"}
        >
          <FormLabel margin={0} htmlFor="vehicle_create">
            Adicionar novo veículo?
          </FormLabel>
          <Checkbox
            defaultChecked={vehicle.create}
            id="vehicle_create"
            name="create"
            size="lg"
            justifySelf={"center"}
          />
        </FormControl>
        <Flex flexDir={"column"} gap={6}>
          <FormControl
            as={Grid}
            gridTemplateRows={"min-content"}
            gridAutoFlow={["row", "row", "column"]}
            placeItems={"center"}
            marginBlockStart={8}
            gap={4}
          >
            <Flex flexDir={"column"} gap={4}>
              <FormLabel
                margin={0}
                marginInline="auto"
                htmlFor="vehicle_licensePlate"
              >
                Veículo
              </FormLabel>
              <Input
                id="vehicle_licensePlate"
                name="licensePlate"
                placeholder="Placa"
                isDisabled={isDisabled}
                defaultValue={vehicle.licensePlate}
                onChange={onInputChange}
              />
            </Flex>
          </FormControl>
          <FormControl>
            <Select
              isDisabled={isDisabled}
              id="type"
              name="type"
              placeholder="Tipo do veículo"
              defaultValue={vehicle.type}
            >
              {selectOptions.map((o) => (
                <option key={o} value={o?.toString()}>
                  {o}
                </option>
              ))}
            </Select>
          </FormControl>
          {vehicle.create && error && (
            <Alert status="error" marginBlock={4}>
              <AlertIcon />
              {error.message}
            </Alert>
          )}
        </Flex>
      </Grid>
    </Form>
  );
}
