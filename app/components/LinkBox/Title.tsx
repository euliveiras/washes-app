import type { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <Text color="gray.500" fontSize={"md"} fontWeight={"bold"}>
      {children}
    </Text>
  );
}

