import type { TableContainerProps, TableProps } from "@chakra-ui/react";
import { TableContainer, Table } from "@chakra-ui/react";
import type { ReactNode } from "react";

type ContainerProps = {
  containerProps?: TableContainerProps;
  tableProps?: TableProps;
  children: ReactNode;
};
export function Container({
  children,
  containerProps,
  tableProps,
}: ContainerProps) {
  return (
    <TableContainer {...containerProps}>
      <Table variant="simple" {...tableProps}>
        {children}
      </Table>
    </TableContainer>
  );
}
