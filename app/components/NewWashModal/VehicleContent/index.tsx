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
import type { InputProps } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import type { Vehicle } from "../Modal";
import { SearchInput, useSearchEntity } from "../../SearchEntity";
import { useEffect, useRef } from "react";
import type { ChangeEvent } from "react";
import { useFetcher } from "@remix-run/react";

const selectOptions: Vehicle["type"][] = [
  "Extra leve",
  "Leve",
  "Vuc",
  "Toco",
  "Truck",
  "Bitruck",
  "Carreta",
];

type VehicleContentProps = {
  searchInputProps?: InputProps;
  setVehicleErrors(str: string, action: "ADD" | "REMOVE"): void;
  setVehicleFn(v: Vehicle): void;
};

export function VehicleContent({
  searchInputProps,
  setVehicleErrors,
  setVehicleFn,
}: VehicleContentProps) {
  const { fetcher } = useSearchEntity<{
    licensePlate: string;
    type: Vehicle["type"];
  }>();
  const {
    watch,
    setValue,
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<Vehicle>({
    defaultValues: {
      create: undefined,
      licensePlate: undefined,
      type: undefined,
    },
  });
  const createVehicleFetcher = useFetcher();
  const data = fetcher.data;
  const timeoutId = useRef<string | number | NodeJS.Timeout | undefined>(null);

  const isCreateVehicleTrue = watch("create");
  const licensePlate = watch("licensePlate");
  const type = watch("type");

  const plaqueAlreadyExistsMessage = "Essa placa já existe";
  const vehicleIsRequiredMessage = "Placa e tipo do veículo são obrigatórios";

  function setVehicleData({
    licensePlate,
    type,
  }: {
    licensePlate?: string | null;
    type?: Vehicle["type"] | null;
  }) {
    setValue("licensePlate", licensePlate);
    setValue("type", type);
    setVehicleFn({ licensePlate, type, create: isCreateVehicleTrue });
  }

  function setCreateVehicle(v: boolean) {
    setValue("create", v);
  }

  function onCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    setVehicleData({ licensePlate: null, type: null });
    setCreateVehicle(e.target.checked);
    clearErrors("licensePlate");

    if (!e.target.checked) {
      createVehicleFetcher.submit(
        { query: "" },
        { action: "/vehicle-search", method: "get" },
      );
    }
  }

  function onFormChange(e: ChangeEvent<HTMLFormElement>) {
    const form = new FormData(e.target.form);
    const licensePlate = form.get("licensePlate")?.toString();
    const type = form.get("type") as Vehicle["type"];

    timeoutId.current && clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setVehicleData({ licensePlate, type });
      createVehicleFetcher.submit(
        { query: e.target.value },
        { action: "/vehicle-search", method: "get" },
      );
    }, 1000);
  }

  function onInputClick(v: Vehicle) {
    setVehicleErrors(vehicleIsRequiredMessage, "REMOVE");
    setVehicleData(v);
  }

  useEffect(() => {
    if (createVehicleFetcher.data?.length > 0) {
      setError("licensePlate", {
        type: "custom",
        message: plaqueAlreadyExistsMessage,
      });
      setVehicleErrors(plaqueAlreadyExistsMessage, "ADD");
    } else if (
      !createVehicleFetcher?.data ||
      createVehicleFetcher?.data.length === 0
    ) {
      clearErrors("licensePlate");
      setVehicleErrors(plaqueAlreadyExistsMessage, "REMOVE");
    }
  }, [setError, createVehicleFetcher.data, clearErrors, setVehicleErrors]);

  useEffect(() => {
    const hasAInvalidField =
      licensePlate === undefined ||
      licensePlate === "" ||
      licensePlate === null ||
      type === undefined ||
      type === "" ||
      type === null;

    if (hasAInvalidField) {
      setVehicleErrors(vehicleIsRequiredMessage, "ADD");
    } else {
      setVehicleErrors(vehicleIsRequiredMessage, "REMOVE");
    }
  }, [licensePlate, type, setVehicleErrors]);

  return (
    <>
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
            typeof data !== "undefined" && data?.length > 0
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
          <fetcher.Form action="/vehicle-search" method="get">
            <SearchInput
              onInputQueryChange={fetcher.submit}
              placeholder="procurar entidade"
              _placeholder={{ textAlign: "center" }}
              maxInlineSize="280px"
              marginInline="auto"
              isDisabled={isCreateVehicleTrue}
              {...searchInputProps}
            />
          </fetcher.Form>
          {!isCreateVehicleTrue && data && data?.length >= 0 && (
            <>
              <Text
                inlineSize={"fit-content"}
                marginInline="auto"
                marginBlockEnd={4}
                fontSize={"sm"}
                color="gray.400"
              >
                {data?.length === 0
                  ? "nenhum resultado encontrado :("
                  : `mostrando ${data?.length} resultados`}
              </Text>
              <Grid gap={4} maxBlockSize={"240px"} overflow="scroll">
                {data?.map((v, i) => {
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
                          marginBlockEnd={data.length - 1 === i ? 4 : 0}
                          type="button"
                          defaultValue={v.licensePlate}
                          borderColor={
                            watch("licensePlate") === v.licensePlate
                              ? "blue.400"
                              : "gray.200"
                          }
                          _hover={{
                            borderColor:
                              watch("licensePlate") === v.licensePlate
                                ? "blue.400"
                                : "gray.300",
                          }}
                          focusBorderColor={
                            watch("licensePlate") === v.licensePlate
                              ? "blue.400"
                              : "gray.300"
                          }
                          onClick={() => onInputClick(v)}
                        />
                      </FormControl>
                      {data.length - 1 !== i && (
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
        <Grid gridAutoRows={"min-content"} placeContent="center" gap={4}>
          <FormControl
            as={Grid}
            blockSize="min-content"
            gridTemplateColumns={"auto 1fr"}
            gridTemplateRows={"min-content"}
            gridAutoFlow="column"
            placeItems={"center"}
            gap={4}
            paddingBlockStart={[0, 0, 1]}
          >
            <FormLabel margin={0} htmlFor="vehicle_create">
              Adicionar novo veículo?
            </FormLabel>
            <Checkbox
              id="vehicle_create"
              size="lg"
              justifySelf={"center"}
              {...register("create")}
              onChange={onCheckboxChange}
            />
          </FormControl>
          {isCreateVehicleTrue && (
            <createVehicleFetcher.Form onChange={onFormChange}>
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
                    />
                    {errors?.licensePlate && (
                      <Alert status="error" marginBlock={4}>
                        <AlertIcon />
                        {errors.licensePlate.message}
                      </Alert>
                    )}
                  </Flex>
                </FormControl>
                <FormControl>
                  <Select id="type" name="type" placeholder="Tipo do veículo">
                    {selectOptions.map((o) => (
                      <option key={o} value={o?.toString()}>
                        {o}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Flex>
            </createVehicleFetcher.Form>
          )}
        </Grid>
      </Grid>
    </>
  );
}
