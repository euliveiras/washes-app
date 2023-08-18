import { Text, AlertIcon, Box, Alert, Grid } from "@chakra-ui/react";
import { LinkHighlighted } from "~/components/LinkHighlighted";
import { WashBox } from "~/components/WashBox";
import { useEffect } from "react";
import type { ReactNode } from "react";
import { useFetcher } from "@remix-run/react";
import type { loader } from "~/routes/washes-search/route";

type WashesContentProps = {
  licensePlate: string;
  children: ReactNode;
};

export function Container({
  licensePlate,
  children,
}: WashesContentProps) {
  const { data, submit, state } = useFetcher<typeof loader>();
  useEffect(() => {
    submit({ licensePlate }, { action: "/washes-search" });
  }, [submit, licensePlate]);

  console.log(data);

  return (
    <Grid blockSize="100%" gridTemplateRows={"1fr auto"}>
      {data?.washes ? (
        <>
          <Box>
            <Alert status="info">
              <AlertIcon />
              <Text>
                Há lavagens ativas para o veículo com placa
                <LinkHighlighted to={`/vehicle/${licensePlate}`}>
                  {licensePlate}
                </LinkHighlighted>
              </Text>
            </Alert>
          </Box>
          <Grid
            paddingBlockStart={6}
            gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
            gap={4}
          >
            {data?.washes &&
              data?.washes.map((w) => {
                return <WashBox key={w.id} wash={w} />;
              })}
          </Grid>
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
