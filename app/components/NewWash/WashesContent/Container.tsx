import { Grid } from "@chakra-ui/react";
import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <Grid
      blockSize="100%"
      placeItems="center"
      gridAutoRows={"min-content"}
      gap={8}
    >
      {children}
    </Grid>
  );
}
