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
