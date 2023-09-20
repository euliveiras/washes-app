import { Grid } from "@chakra-ui/react";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <Grid>{children}</Grid>;
}
