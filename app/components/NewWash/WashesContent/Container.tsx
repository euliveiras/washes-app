import {
  Text,
  AlertIcon,
  Box,
  Alert,
  Grid,
  Button,
  Flex,
  Input,
} from "@chakra-ui/react";
import { LinkHighlighted } from "~/components/LinkHighlighted";
import { WashBox } from "~/components/WashBox";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Form, useActionData, useFetcher } from "@remix-run/react";
import type { loader } from "~/routes/washes-search/route";
import { isToday } from "~/components/hooks/useDate";
import type { action } from "~/routes/_auth.home";

type WashesContentProps = {
  licensePlate: string;
  children: ReactNode;
  addError(): void;
  removeError(): void;
};

export function Container({
  addError,
  removeError,
  licensePlate,
  children,
}: WashesContentProps) {
  const { data, submit } = useFetcher<typeof loader>();
  const actionData = useActionData<typeof action>();

  useEffect(() => {
    submit({ licensePlate }, { action: "/washes-search" });
  }, [submit, licensePlate]);

  const todayWash = data?.washes?.find((w) => isToday(w.scheduleDate) && w);

  return (
    <Grid
      blockSize="100%"
      placeItems="center"
      gridAutoRows={"min-content"}
      gap={8}
    >
      {todayWash ? (
        <>
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
          <Flex
            as={Form}
            action="/home"
            method="POST"
            justify={"center"}
            align="center"
            gap={4}
            flexDir="column"
          >
            <Input type="hidden" readOnly name="id" value={todayWash.id} />
            <Input type="hidden" readOnly name="isCompleted" value={"true"} />
            <WashBox wash={todayWash} />
            <Button variant="solid" colorScheme={"blue"} type="submit">
              Confirmar lavagem?
            </Button>
          </Flex>
        </>
      ) : (
        <>
          <Grid
            gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
            gap={10}
            paddingBlockEnd={8}
            placeItems="center"
          >
            {children}
          </Grid>
        </>
      )}
    </Grid>
  );
}
