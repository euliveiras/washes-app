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
import { useForm } from "react-hook-form";
import { useSearchEntity } from "../../SearchEntity";
import { useRef } from "react";
import type { ChangeEvent } from "react";
import { useFetcher, useSearchParams } from "@remix-run/react";

type VehicleType =
  | "Extra leve"
  | "Leve"
  | "Vuc"
  | "Toco"
  | "Truck"
  | "Bitruck"
  | "Carreta";

type Vehicle = {
  licensePlate: string;
  type: VehicleType;
  create: boolean;
};

const selectOptions: VehicleType[] = [
  "Extra leve",
  "Leve",
  "Vuc",
  "Toco",
  "Truck",
  "Bitruck",
  "Carreta",
];

type UseFormFields = Vehicle & {
  queried: {
    licensePlate?: string | null;
    type?: Vehicle["type"] | null;
  };
};

export function VehicleContent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const vehicle = JSON.parse(searchParams.get("vehicle") ?? "[]");
  const { fetcher } = useSearchEntity<{
    licensePlate: string;
    type: Vehicle["type"];
  }>();
  const timeoutId = useRef<number | undefined>(null);

  const {
    watch,
    setValue,
    formState: { errors },
  } = useForm<UseFormFields>({
    defaultValues: {
      create: vehicle?.create,
      licensePlate: vehicle?.licensePlate,
      type: vehicle?.type,
      queried: {
        licensePlate: undefined,
        type: undefined,
      },
    },
  });
  const createVehicleFetcher = useFetcher();
  const data = fetcher.data;
  const isCreateVehicleTrue = watch("create");
  const newVehicle = {
    licensePlate: watch("licensePlate"),
    type: watch("type"),
  };
  const queried = watch("queried");

  function deleteVehicleParam() {
    setSearchParams((p) => {
      p.delete("vehicle");
      return p;
    });
  }

  function setVehicleParams(params: {
    licensePlate?: string | null;
    type?: Vehicle["type"] | null;
    create?: boolean;
  }) {
    setSearchParams((p) => {
      const vehicle = p.get("vehicle");
      if (!vehicle) {
        p.set("vehicle", JSON.stringify(params));
      } else {
        const obj = JSON.parse(vehicle);
        p.set("vehicle", JSON.stringify({ ...obj, ...params }));
      }
      return p;
    });
  }

  function onNewVehicleFormChange(e: ChangeEvent<HTMLFormElement>) {
    const form = new FormData(e.target.form);
    const create = form.get("create")?.toString() === "";
    const licensePlate =
      form.get("licensePlate")?.toString() ?? newVehicle?.licensePlate;
    const type =
      (form.get("type")?.toString() as Vehicle["type"]) ?? newVehicle?.type;
    setValue("licensePlate", licensePlate);
    setValue("type", type);
    setValue("create", create);

    if (create && licensePlate && type) {
      setVehicleParams({ licensePlate, type, create });
      return;
    }
    if (create && (!licensePlate || !type)) {
      deleteVehicleParam();
      return;
    }
    if (!create && queried.licensePlate && queried.type) {
      setVehicleParams({
        licensePlate: queried.licensePlate,
        type: queried.type,
      });
      return;
    }
  }

  function onQueryFormChange(e: ChangeEvent<HTMLFormElement>) {
    const form = new FormData(e.target.form);
    const query = form.get("query")?.toString() ?? "";
    timeoutId.current && clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      fetcher.submit({ query }, { action: "/vehicle-search", method: "get" });
      setValue("queried", { licensePlate: null, type: null });
      deleteVehicleParam();
    }, 1000);
  }

  function onInputClick(v: Partial<Vehicle>) {
    setValue("queried.licensePlate", v.licensePlate);
    setValue("queried.type", v.type);
    setValue("create", false);
    setSearchParams((p) => {
      const vehicle = p.get("vehicle");
      if (!vehicle) {
        p.append("vehicle", JSON.stringify(v));
      } else {
        const obj = JSON.parse(vehicle);
        p.set("vehicle", JSON.stringify({ ...obj, ...v }));
      }
      return p;
    });
  }

  return (
    <>
      <Grid
        gridAutoRows={"min-content"}
        paddingBlockEnd={[8]}
        gap={4}
        gridAutoFlow={["row", "row", "column"]}
        placeItems={["center", "center", "start"]}
        placeContent={["center", "center", "space-between"]}
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
          <fetcher.Form onChange={onQueryFormChange}>
            <FormControl>
              <Input
                name="query"
                placeholder="procurar entidade"
                _placeholder={{ textAlign: "center" }}
                maxInlineSize="280px"
                marginInline="auto"
                isDisabled={isCreateVehicleTrue}
                rounded={"full"}
              />
            </FormControl>
            {!isCreateVehicleTrue && data && data?.length >= 0 && (
              <>
                <Text
                  inlineSize={"fit-content"}
                  marginInline="auto"
                  marginBlock={4}
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
                              queried?.licensePlate === v.licensePlate
                                ? "blue.400"
                                : "gray.200"
                            }
                            _hover={{
                              borderColor:
                                queried?.licensePlate === v.licensePlate
                                  ? "blue.400"
                                  : "gray.300",
                            }}
                            focusBorderColor={
                              queried?.licensePlate === v.licensePlate
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
          </fetcher.Form>
        </Flex>
        <Box position="relative" padding={4} inlineSize="60%">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            ou
          </AbsoluteCenter>
        </Box>
        <Grid gridAutoRows={"min-content"} placeContent="center" gap={4}>
          <createVehicleFetcher.Form onChange={onNewVehicleFormChange}>
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
                id="vehicle_create"
                name="create"
                size="lg"
                justifySelf={"center"}
                defaultChecked={isCreateVehicleTrue}
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
                    defaultValue={newVehicle?.licensePlate ?? ""}
                    isDisabled={!isCreateVehicleTrue}
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
                <Select
                  defaultValue={newVehicle?.type ?? undefined}
                  id="type"
                  name="type"
                  placeholder="Tipo do veículo"
                  isDisabled={!isCreateVehicleTrue}
                >
                  {selectOptions.map((o) => (
                    <option key={o} value={o?.toString()}>
                      {o}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Flex>
          </createVehicleFetcher.Form>
        </Grid>
      </Grid>
    </>
  );
}
