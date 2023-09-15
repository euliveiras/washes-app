import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Grid,
  Input,
  Text,
} from "@chakra-ui/react";
import { Form as RemixForm, useActionData, useFetcher } from "@remix-run/react";
import { isToday } from "~/components/hooks/useDate";
import type { action as homeAction } from "app/routes/_auth.home";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { LinkHighlighted } from "~/components/LinkHighlighted";
import type { Wash } from ".";
import { washesDefaultValue } from ".";
import { Form } from "./Form";

type AddWashArg = {
  scheduleDate: string;
  note?: string;
  isCompleted: boolean;
};

type WashesContentProps = {
  addSingleWash(arg: AddWashArg, cycleId?: string): void;
  removeWash(id: number): void;
  washes: Wash[];
  licensePlate: string;
  setWashes(wash: {
    scheduleDate: string;
    note?: string;
    isCompleted: boolean;
  }): void;
  onNextStepClick(fn: Function): void;
};

export function WashesContent({
  washes: parentWashes,
  licensePlate,
  removeWash,
}: WashesContentProps) {
  const { data, submit } = useFetcher();
  const existTodayWash = data?.washes?.find(
    (w) => isToday(w.scheduleDate) && w,
  );
  const existWashCycle = data?.washCycle;
  const [washes, setWashes] = useState<Wash[] | undefined>(undefined);
  const actionData = useActionData();
  const homeActionData = useActionData<typeof homeAction>();

  function onChange(data: {
    note: string;
    isCompleted: boolean;
    id: number;
    scheduleDate: string;
    title: string;
  }) {
    setWashes((s) => {
      if (!s) return [data];
      const arr = [...s];
      const i = s?.findIndex((w) => w.id === data.id);
      if (i > -1) arr[i] = data;
      else arr.push(data);
      return arr;
    });
  }

  useEffect(() => {
    submit({ licensePlate }, { action: "/washes-search" });
  }, [submit, licensePlate]);

  useEffect(() => {
    if (parentWashes.length > 0) setWashes(parentWashes);
    else if (!existWashCycle) setWashes(washesDefaultValue);
    else if (!existTodayWash) setWashes([washesDefaultValue[0]]);
  }, [submit, licensePlate, existTodayWash, existWashCycle, parentWashes]);

  if (!washes || !data) return <Text>Carregando...</Text>;

  if (existTodayWash)
    return (
      <Flex flexDir={"column"} align="center" gap={4}>
        <Box>
          <Alert status="info">
            <AlertIcon />
            <Text>
              Há uma lavagem hoje para o veículo
              <LinkHighlighted to={`/vehicle/${licensePlate}`}>
                {licensePlate}
              </LinkHighlighted>
            </Text>
          </Alert>
        </Box>
        <Box
          key={existTodayWash.id}
          maxInlineSize={"320px"}
          marginInline={[0, 8]}
          border="4px"
          borderColor={"blue.400"}
          borderRadius="lg"
          paddingInline={4}
          paddingBlock={8}
        >
          <Form
            id={existTodayWash.id}
            onChange={onChange}
            isCompleted={true}
            title={existTodayWash.title}
            defaultDate={existTodayWash.scheduleDate}
            note={existTodayWash.note}
            removeWash={removeWash}
            disabled={true}
          />
        </Box>
        {!existTodayWash.isCompleted && (
          <RemixForm action="/home" method="POST">
            <Input type="hidden" name="id" value={existTodayWash.id} />
            <Input type="hidden" name="isCompleted" value={"true"} />
            <Button variant="solid" colorScheme={"blue"} type="submit">
              Confirmar lavagem?
            </Button>
          </RemixForm>
        )}
      </Flex>
    );

  return (
    <Container>
      {existWashCycle && (
        <Input
          type="hidden"
          className="cycleId"
          name="cycleId"
          value={existWashCycle.id}
          readOnly
        />
      )}
      <Grid
        gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
        gap={10}
        paddingBlockEnd={8}
        placeItems="center"
      >
        {washes?.map((w) => (
          <Box
            key={w.scheduleDate}
            maxInlineSize={"320px"}
            marginInline={[0, 8]}
            border="4px"
            borderColor={"blue.400"}
            borderRadius="lg"
            paddingInline={4}
            paddingBlock={8}
          >
            <Form
              id={w.id}
              onChange={onChange}
              isCompleted={w.isCompleted}
              title={w.title}
              defaultDate={w.scheduleDate}
              minDate={w.minDate}
              note={w.note ?? ""}
              removeWash={removeWash}
            />
          </Box>
        ))}
      </Grid>
    </Container>
  );
}
