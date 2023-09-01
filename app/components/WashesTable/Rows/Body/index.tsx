import type { ReactNode } from "react";
import { table } from "app/components/Table";
import type { TableRowProps } from "@chakra-ui/react";

export { Actions } from "./Actions";
export { Driver } from "./Driver";
export { LicensePlate } from "./LicensePlate";
export { Note } from "./Note";
export { ScheduledDate } from "./ScheduledDate";
export { Status } from "./Status";

type RowProps = TableRowProps;

export function Row({ children, ...rest }: RowProps) {
  return <table.Row {...rest}>{children}</table.Row>;
}

export function Body({
  children,
  onIntersecting,
}: {
  children: ReactNode;
  onIntersecting(lastElement?: Element): void;
}) {
  return <table.Body onIntersecting={onIntersecting}>{children}</table.Body>;
}
