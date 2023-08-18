import {
  Text,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Divider,
  Flex,
  AbsoluteCenter,
  Box,
  Checkbox,
  Alert,
  AlertIcon,
  Select,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { Form, useFetcher } from "@remix-run/react";

type VehicleType =
  | "Extra leve"
  | "Leve"
  | "Vuc"
  | "Toco"
  | "Truck"
  | "Bitruck"
  | "Carreta";

const selectOptions: VehicleType[] = [
  "Extra leve",
  "Leve",
  "Vuc",
  "Toco",
  "Truck",
  "Bitruck",
  "Carreta",
];

export type Vehicle = {
  licensePlate?: string;
  type?: VehicleType;
  create?: boolean;
};

type NewVehicleFormProps = {
  vehicle: { licensePlate?: string; type?: VehicleType };
  isChecked: boolean;
  onCheckboxChange(e: ChangeEvent<HTMLInputElement>): void;
  setVehicleData(v: Vehicle | null): void;
};

function NewVehicleForm({
  isChecked,
  onCheckboxChange: fn,
  setVehicleData,
  vehicle,
}: NewVehicleFormProps) {
  const fetcher = useFetcher();
  const data = fetcher?.data?.results;
  const timeoutId = useRef<number | undefined>(null);
  const [licensePlate, setLicensePlate] = useState<string | null>(
    vehicle?.licensePlate ?? "",
  );
  const [type, setType] = useState<VehicleType | null>(vehicle?.type ?? null);

  function onChange(e: ChangeEvent<HTMLFormElement>) {
    const form = new FormData(e.currentTarget);
    const create = form.get("create") === "";
    const licensePlate = form.get("licensePlate")?.toString() ?? "";
    const type = form.get("type")?.toString() as VehicleType;
    setLicensePlate(licensePlate);
    setType(type);
    if (create && licensePlate && type) {
      timeoutId.current && clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        setVehicleData({ licensePlate, type, create });
      }, 1000);
    }
  }

  function onCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    if (checked && licensePlate && type) {
      setVehicleData({ licensePlate, type, create: true });
    } else {
      setVehicleData(null);
    }
    fn(e);
  }

  return (
    <Form onChange={onChange}>
      <Grid gridAutoRows={"min-content"} placeContent="center" gap={4}>
        <FormControl
          as={Flex}
          blockSize="min-content"
          gap={4}
          paddingBlockStart={[0, 0, 1]}
          align="center"
        >
          <FormLabel margin={0} htmlFor="vehicle_create">
            Adicionar novo veículo?
          </FormLabel>
          <Checkbox
            isChecked={isChecked}
            onChange={onCheckboxChange}
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
              <FormLabel margin={0} htmlFor="vehicle_licensePlate">
                Veículo
              </FormLabel>
              <Input
                id="vehicle_licensePlate"
                name="licensePlate"
                placeholder="Placa"
                isDisabled={!isChecked}
                value={licensePlate ?? ""}
              />
            </Flex>
          </FormControl>
          <FormControl>
            <Select
              isDisabled={!isChecked}
              id="type"
              name="type"
              placeholder="Tipo do veículo"
              value={type ?? ""}
            >
              {selectOptions.map((o) => (
                <option key={o} value={o?.toString()}>
                  {o}
                </option>
              ))}
            </Select>
          </FormControl>
          {isChecked && data?.length > 0 && (
            <Alert status="error" marginBlock={4}>
              <AlertIcon />
              Essa placa já existe
            </Alert>
          )}
        </Flex>
      </Grid>
    </Form>
  );
}

type VehicleContentProps = {
  vehicle?: Vehicle | null;
  setVehicleData(v: Partial<Vehicle>): void;
};

export function VehicleContent({
  setVehicleData,
  vehicle,
}: VehicleContentProps) {
  const [isChecked, setIsChecked] = useState<boolean | undefined | null>(
    vehicle?.create,
  );
  const fetcher = useFetcher();

  const results = fetcher.data?.results ?? null;
  const timeoutId = useRef<number | undefined>(null);

  function onQuery(e: ChangeEvent<HTMLInputElement>) {
    const licensePlate = e.target.value;
    timeoutId.current && clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      fetcher.submit(
        { query: "vehicle", licensePlate },
        { action: "/vehicle-search" },
      );
    }, 1000);
  }

  function onCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    setIsChecked(Boolean(e.target.checked));
  }

  function onClick(v: Vehicle) {
    setVehicleData({ ...v, create: false });
  }

  return (
    <Grid id="vehicle" gridTemplateRows={"1fr auto"} blockSize="100%">
      <Grid
        gridAutoRows={"min-content"}
        paddingBlockEnd={[8]}
        gap={4}
        gridAutoFlow={["row", "row", "column"]}
        placeItems={["center", "center", "start"]}
      >
        <Flex
          flexDir={["column"]}
          position="relative"
          _after={
            results && results?.length > 0
              ? {
                  content: "''",
                  display: "block",
                  position: "absolute",
                  insetInline: 0,
                  bottom: 0,
                  zIndex: 1,
                  pointerEvents: "none",
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, 1) 90%)",
                  blockSize: 4,
                }
              : {}
          }
          gap={4}
        >
          <FormControl>
            <Input
              placeholder="procurar entidade"
              _placeholder={{ textAlign: "center" }}
              maxInlineSize="280px"
              isDisabled={isChecked ?? false}
              marginInline="auto"
              rounded={"full"}
              onChange={onQuery}
            />
          </FormControl>
          {results && !isChecked && (
            <>
              <Text
                inlineSize={"fit-content"}
                marginInline="auto"
                marginBlock={4}
                fontSize={"sm"}
                color="gray.400"
              >
                {results?.length === 0
                  ? "nenhum resultado encontrado :("
                  : `mostrando ${results?.length} resultados`}
              </Text>
              <Grid gap={4} maxBlockSize={"240px"} overflow="scroll">
                {results?.map((v, i) => {
                  return (
                    <Flex
                      inlineSize={"100%"}
                      flexDir={"column"}
                      gap={6}
                      key={`${v.licensePlate} + ${i}`}
                    >
                      <FormControl
                        as={Flex}
                        flexDir="column"
                        alignItems="center"
                      >
                        <FormLabel>Placa</FormLabel>
                        <Input
                          maxInlineSize={"200px"}
                          marginBlockEnd={results.length - 1 === i ? 4 : 0}
                          onClick={() => onClick(v)}
                          readOnly
                          value={v.licensePlate}
                          type="button"
                          borderColor={
                            vehicle?.licensePlate ? "blue.400" : "gray.200"
                          }
                          _hover={{
                            borderColor: vehicle?.licensePlate
                              ? "blue.400"
                              : "gray.300",
                          }}
                          focusBorderColor={
                            vehicle?.licensePlate ? "blue.400" : "gray.300"
                          }
                        />
                      </FormControl>
                      {results.length - 1 !== i && (
                        <Divider alignSelf={"center"} inlineSize={"80%"} />
                      )}
                    </Flex>
                  );
                })}
              </Grid>
            </>
          )}
        </Flex>
        <Box position="relative" padding={4} inlineSize="60%">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            ou
          </AbsoluteCenter>
        </Box>
        <NewVehicleForm
          vehicle={{ licensePlate: vehicle?.licensePlate, type: vehicle?.type }}
          isChecked={isChecked ?? false}
          onCheckboxChange={onCheckboxChange}
          setVehicleData={setVehicleData}
        />
      </Grid>
    </Grid>
  );
}
