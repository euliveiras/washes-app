import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

type ContainerProps = BoxProps;

export function Container({ children, ...props }: ContainerProps) {
  return <Box {...props}>{children}</Box>;
}
