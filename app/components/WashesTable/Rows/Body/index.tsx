import type { ReactNode } from "react";
import { table } from "app/components/Table";
import type { TableRowProps } from "@chakra-ui/react";
import type { LinkProps } from "@remix-run/react";
import { useNavigate } from "@remix-run/react";

export { Actions } from "./Actions";
export { Driver } from "./Driver";
export { LicensePlate } from "./LicensePlate";
export { Note } from "./Note";
export { ScheduledDate } from "./ScheduledDate";
export { Status } from "./Status";

type RowProps = Partial<TableRowProps> & Partial<LinkProps>;

export function Row({ children, ...rest }: RowProps) {
  const navigate = useNavigate();

  function goTo() {
    const path = `/wash/${rest.id}`;
    navigate(path);
  }

  return (
    <table.Row cursor={"pointer"} {...rest} onClick={goTo}>
      {children}
    </table.Row>
  );
}

export function Body({
  children,
  onIntersecting,
}: {
  children: ReactNode;
  onIntersecting?(lastElement?: Element): void;
}) {
  return <table.Body onIntersecting={onIntersecting}>{children}</table.Body>;
}
