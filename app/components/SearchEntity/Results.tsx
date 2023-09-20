import { Flex } from "@chakra-ui/react";
import type { FlexProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

type ResultsProps = FlexProps & {
  children?: ReactNode;
  show: boolean;
};

export function Results({ show, children, ...props }: ResultsProps) {
  return (
    <Flex
      inlineSize={"100%"}
      flexDir={["column"]}
      position="relative"
      _after={
        show
          ? {
              content: "''",
              display: "none",
              position: "absolute",
              insetInline: 0,
              bottom: 0,
              zIndex: 1,
              pointerEvents: "none",
              backgroundImage:
                "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, 1) 90%)",
              blockSize: 12,
            }
          : {}
      }
      gap={4}
      {...props}
    >
      {children}
    </Flex>
  );
}
