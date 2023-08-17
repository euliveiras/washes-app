import { Box } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

type ContentProps = BoxProps;

export function Content({ children, ...rest }: ContentProps) {
  return (
    <Box {...rest}>
      {children}
    </Box>
  );
}
