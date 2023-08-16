import { Text, AlertIcon, Box, Alert, Grid, Flex } from "@chakra-ui/react";
import type { Wash } from "domain/modules/wash/entities/Wash";
import type { WashCycle } from "domain/modules/wash-cycle/entities/WashCycle";
import { LinkHighlighted } from "~/components/LinkHighlighted";
import { WashBox } from "~/components/WashBox";

type WashesContentProps = {
  washes: Wash[];
  washCycle: WashCycle;
};

export function WashesContent({ washes, washCycle }: WashesContentProps) {
  return (
    <Grid blockSize="100%" gridTemplateRows={"1fr auto"}>
      <Box>
        {washCycle && washes && (
          <Alert status="info">
            <AlertIcon />
            <Text>
              Há lavagens ativas para o veículo com placa{" "}
              <LinkHighlighted to={`/vehicle/${washCycle.vehicleId}`}>
                {washCycle.vehicleId}
              </LinkHighlighted>
            </Text>
          </Alert>
        )}
      </Box>
      <Flex
paddingBlockStart={6}
flexDir={"column"}
gap={4}
>
        {washes &&
          washes.map((w) => {
            return <WashBox key={w.id} wash={w} />;
          })}
      </Flex>
    </Grid>
  );
}
