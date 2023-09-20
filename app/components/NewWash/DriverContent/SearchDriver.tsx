import {
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Divider,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { useFetcher } from "@remix-run/react";
import type { Driver } from ".";
import { searchEntity } from "../../SearchEntity";

type SearchDriverProps = {
  setData(d: Driver): void;
  driver: Driver;
};

export function SearchDriver({ setData, driver }: SearchDriverProps) {
  const fetcher = useFetcher();

  function onQuery(e: string) {
    fetcher.submit({ query: e }, { action: "/driver-search" });
  }

  function selectDriver(d: Driver) {
    setData(d);
  }

  const results = fetcher?.data?.results;
  const showResults = results && !driver.create;
  const create = driver.create;

  return (
    <Box>
      <searchEntity.Input onChange={onQuery} isDisabled={create} />
      {showResults && (
        <>
          <Text
            inlineSize={"fit-content"}
            marginInline="auto"
            marginBlockStart={4}
            fontSize={"sm"}
            color="gray.400"
          >
            {results.length === 0
              ? "nenhum resultado encontrado :("
              : `mostrando ${results?.length} resultados`}
          </Text>
          <Grid gap={4} maxBlockSize="260px" overflow="scroll">
            {results?.map((d, i) => {
              return (
                <Flex
                  inlineSize={"100%"}
                  flexDir={"column"}
                  gap={6}
                  key={`${d.name} + ${i}`}
                >
                  <FormControl as={Flex} flexDir="column" alignItems="center">
                    <Text>{d.name}</Text>
                    <Text>{d.phone}</Text>
                    <Checkbox
                      maxInlineSize={"200px"}
                      marginBlockEnd={results.length - 1 === i ? 4 : 0}
                      onChange={(d) => console.log(d)}
                    />
                  </FormControl>
                  {results?.length - 1 !== i && (
                    <Divider alignSelf={"center"} inlineSize={"80%"} />
                  )}
                </Flex>
              );
            })}
          </Grid>
        </>
      )}
    </Box>
  );
}
