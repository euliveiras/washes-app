import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

export function Content({ children }: { children: ReactNode }) {
  return <Box blockSize={"100%"}>{children}</Box>;
}
