import { Tbody, Td } from "@chakra-ui/react";
import type { ReactNode } from "react";

type TableCellsProps = {
  children: ReactNode;
};

export function TableData({ children }: { children: ReactNode }){
	return <Td>{children}</Td>
}

export function Body({ children }: TableCellsProps) {
  return <Tbody>{children}</Tbody>;
}

