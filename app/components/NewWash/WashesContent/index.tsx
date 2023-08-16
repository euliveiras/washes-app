import {
  Text,
  AlertIcon,
  Box,
  Alert,
  Grid,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Divider,
} from "@chakra-ui/react";
import type { Wash } from "domain/modules/wash/entities/Wash";
import type { WashCycle } from "domain/modules/wash-cycle/entities/WashCycle";
import { LinkHighlighted } from "~/components/LinkHighlighted";
import { WashBox } from "~/components/WashBox";
import { FormEvent } from "react";
import { useSearchParams } from "@remix-run/react";

type WashesContentProps = {
  washes: Wash[];
  washCycle: WashCycle;
};

type NewWashFormProps = {
  title: string;
  defaultDate?: string;
  label: string;
};

function NewWashForm({ title, defaultDate, label }: NewWashFormProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  function onFormChange(e: FormEvent<HTMLFormElement>) {
    const form = new FormData(e.currentTarget);
    const scheduleDate = form.get("scheduleDate");
    const note = form.get("note");
    const isCompleted = form.get("isCompleted") === "";

    console.log(scheduleDate, note, isCompleted, label);
  }

  const dateFormatted = defaultDate;

  return (
    <form
      onChange={onFormChange}
      style={{ blockSize: "100%", inlineSize: "100%" }}
    >
      <Flex
        maxInlineSize={"360px"}
        flexDir={"column"}
        gap={6}
        marginInline="auto"
      >
        <Text marginInline={"auto"} marginBlockStart={2} fontSize={"lg"}>
          {title}
        </Text>
        <FormControl as={Flex} flexDir="column" align="center">
          <FormLabel inlineSize={"fit-content"}>data</FormLabel>
          <Input
            name="scheduleDate"
            inlineSize={"180px"}
            type="date"
            defaultValue={dateFormatted}
          />
        </FormControl>

        <FormControl>
          <FormLabel inlineSize={"fit-content"} marginInline={"auto"}>
            notas
          </FormLabel>
          <Textarea
            name="note"
            noOfLines={6}
            placeholder="escreva notas sobre esta lavagem"
            resize="none"
          />
        </FormControl>
        <FormControl
          as={Flex}
          inlineSize="fit-content"
          marginInline={"auto"}
          align={"center"}
        >
          <FormLabel marginBlock={0} marginInlineEnd={6}>
            lavagem feita?
          </FormLabel>
          <Checkbox name="isCompleted" />
        </FormControl>
      </Flex>
    </form>
  );
}

export function WashesContent({ washes, washCycle }: WashesContentProps) {
  return (
    <Grid blockSize="100%" gridTemplateRows={"1fr auto"}>
      {washCycle && washes ? (
        <>
          <Box>
            <Alert status="info">
              <AlertIcon />
              <Text>
                Há lavagens ativas para o veículo com placa
                <LinkHighlighted to={`/vehicle/${washCycle.vehicleId}`}>
                  {washCycle.vehicleId}
                </LinkHighlighted>
              </Text>
            </Alert>
          </Box>
          <Grid
            paddingBlockStart={6}
            gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
            gap={4}
          >
            {washes &&
              washes.map((w) => {
                return <WashBox key={w.id} wash={w} />;
              })}
          </Grid>
        </>
      ) : (
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
          gap={10}
          paddingBlockEnd={8}
placeItems="center"
        >
          <Box
maxInlineSize={"320px"}
            marginInline={[0, 8]}
            border="4px"
            borderColor={"blue.400"}
            borderRadius="lg"
            paddingInline={4}
            paddingBlock={8}
          >
            <NewWashForm key="first" title="primeira lavagem" label="first" />
          </Box>
          <Box
            marginInline={[0, 8]}
            border="4px"
            borderColor={"blue.400"}
            borderRadius="lg"
            paddingInline={4}
            paddingBlock={8}
          >
            <NewWashForm key="sec" title="segunda lavagem" label="second" />
          </Box>
          <Box
            marginInline={[0, 8]}
            border="4px"
            borderColor={"blue.400"}
            borderRadius="lg"
            paddingInline={4}
            paddingBlock={8}
          >
            <NewWashForm key="third" title="terceira lavagem" label="third" />
          </Box>
          <Box
            marginInline={[0, 8]}
            border="4px"
            borderColor={"blue.400"}
            borderRadius="lg"
            paddingInline={4}
            paddingBlock={8}
          >
            <NewWashForm key="fourth" title="quarta lavagem" label="fourth" />
          </Box>
        </Grid>
      )}
    </Grid>
  );
}
