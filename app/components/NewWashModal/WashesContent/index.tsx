import { Text, AlertIcon, Box, Alert, Grid, Flex } from "@chakra-ui/react";
import type { Wash } from "../../../../src/domain/modules/wash/entities/Wash";
import type { WashCycle } from "../../../../src/domain/modules/wash-cycle/entities/WashCycle";
import { LinkHighlighted } from "~/components/LinkHighlighted";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { ElementType, ReactNode } from "react";

type WashesContentProps = {
  washes: Wash[];
  washCycle: WashCycle;
};

type BoxContainerProps = {
  children: ReactNode;
  to: string;
};

type BoxIconProps = {
  icon: ReactNode;
};

function BoxTitle({ children }: { children: ReactNode }) {
  return (
    <Text color="gray.500" fontSize={"md"} fontWeight={"bold"}>
      {children}
    </Text>
  );
}

function BoxContent({ children }: { children: ReactNode }) {
  return <Box blockSize={"100%"}>{children}</Box>;
}

function BoxIcon({ icon }: BoxIconProps) {
  return (
    <Flex blockSize={"100%"} justify="center" align="center">
      {icon}
    </Flex>
  );
}

function BoxContainer({ to, children }: BoxContainerProps) {
  return (
    <Grid
      minInlineSize={"180px"}
      paddingBlock={4}
      gridTemplateColumns="80% 20%"
      gridTemplateRows={"1fr"}
      as={Link}
      to={to}
    >
      {children}
    </Grid>
  );
}

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
      <Box>
        {washes.map((w) => {
          return (
            <BoxContainer key={w.id} to={`/wash/${w.id}`}>
              <BoxContent>
                <BoxTitle>{w.scheduleDate}</BoxTitle>
                <Text>{w.note}</Text>
              </BoxContent>
              <BoxIcon icon={<FaExternalLinkAlt size={16} />} />
            </BoxContainer>
          );
        })}
      </Box>
    </Grid>
  );
}
