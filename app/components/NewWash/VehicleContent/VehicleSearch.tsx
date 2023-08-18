import { useFetcher } from "@remix-run/react";
import { searchEntity } from "~/components/SearchEntity/index";
import type { Vehicle } from ".";
import {
  Input,
  Text,
  FormLabel,
  FormControl,
  Grid,
  Flex,
  Divider,
} from "@chakra-ui/react";

type VehicleSearchProps = {
  setVehicle(v: Vehicle): void;
  vehicle: Vehicle;
};

export function VehicleSearch({ vehicle, setVehicle }: VehicleSearchProps) {
  const fetcher = useFetcher();
  const data = fetcher?.data?.results ?? null;

  function onQuery(e: string) {
    fetcher.submit(
      { query: "vehicle", licensePlate: e },
      { action: "/vehicle-search" },
    );
  }

  function onClick(e: Vehicle) {
    setVehicle({ ...e, create: false });
  }

  return (
    <Grid
      gap={4}
      gridAutoFlow="row"
      placeItems={["center", "center", "center"]}
      maxInlineSize="200px"
    >
      <searchEntity.Input onChange={onQuery} isDisabled={vehicle.create} />
      {fetcher?.data && (
        <>
          <Text
            inlineSize={"fit-content"}
            marginInline="auto"
            marginBlockStart={4}
            fontSize={"sm"}
            color="gray.400"
          >
            {data?.length === 0
              ? "nenhum resultado encontrado :("
              : `mostrando ${data?.length} resultados`}
          </Text>
          <searchEntity.Results show={fetcher?.data}>
            <Grid gap={4} maxBlockSize="260px" overflow="scroll">
              {data?.map((v, i) => {
                return (
                  <Flex
                    inlineSize={"100%"}
                    flexDir={"column"}
                    gap={6}
                    key={`${v.licensePlate} + ${i}`}
                  >
                    <FormControl as={Flex} flexDir="column" alignItems="center">
                      <FormLabel>Placa</FormLabel>
                      <Input
                        maxInlineSize={"200px"}
                        marginBlockEnd={data.length - 1 === i ? 4 : 0}
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
                    {data?.length - 1 !== i && (
                      <Divider alignSelf={"center"} inlineSize={"80%"} />
                    )}
                  </Flex>
                );
              })}
            </Grid>
          </searchEntity.Results>
        </>
      )}
    </Grid>
  );
}
