import { Grid } from "@chakra-ui/react";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <Grid
      paddingInlineStart={4}
      gridTemplateColumns={["1fr", "1fr 1fr"]}
      gridTemplateRows={["min-content", "1fr 1fr"]}
      gap={8}
    >
      {children}
    </Grid>
  );
}
