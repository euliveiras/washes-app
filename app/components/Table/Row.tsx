import { Tr } from "@chakra-ui/react";
import type { TableRowProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

type RowProps = TableRowProps & {
  children: ReactNode;
};
export function Row({ children, ...rest }: RowProps) {
  return <Tr {...rest}>{children}</Tr>;
}
