import type { TableCellProps } from "@chakra-ui/react";
import { table } from "app/components/Table";

type Props = TableCellProps & {
  licensePlate: string;
};

export function LicensePlate({ licensePlate, ...rest }: Props) {
  return <table.Data {...rest}>{licensePlate}</table.Data>;
}
