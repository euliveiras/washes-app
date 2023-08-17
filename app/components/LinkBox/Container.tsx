import type { ReactNode } from "react";
import { Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type BoxContainerProps = {
  children: ReactNode;
  to: string;
};

export function Container({ to, children }: BoxContainerProps) {
  return (
    <Grid
      minInlineSize={"180px"}
      minBlockSize="150px"
      padding={4}
      gridTemplateColumns="80% 20%"
      gridTemplateRows={"1fr"}
      placeItems="center"
      as={Link}
      to={to}
      border="2px"
      borderColor={"blue.400"}
borderRadius="lg"
    >
      {children}
    </Grid>
  );
}
