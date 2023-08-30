import { table } from "app/components/Table";
import type { ReactNode } from "react";
import type { TableContainerProps, TableProps } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  containerProps?: TableContainerProps;
  tableProps?: TableProps;
};

export function Table({ children, ...props }: Props) {
  return <table.Table {...props}>{children}</table.Table>;
}
