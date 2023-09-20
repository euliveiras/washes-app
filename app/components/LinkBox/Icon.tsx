import { Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

type BoxIconProps = {
  icon: ReactNode;
};

export function Icon({ icon }: BoxIconProps) {
  return (
    <Flex blockSize={"100%"} justify="center" align="center">
      {icon}
    </Flex>
  );
}
