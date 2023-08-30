import type { ReactNode } from "react";
import { table } from "app/components/Table";

export { Actions } from "./Actions";
export { Driver } from "./Driver";
export { LicensePlate } from "./LicensePlate";
export { Note } from "./Note";
export { ScheduledDate } from "./ScheduledDate";
export { Status } from "./Status";

export function Row({ children }: { children: ReactNode }) {
  return <table.Row>{children}</table.Row>;
}

export function Body({ children }: { children: ReactNode }) {
  return <table.Body>{children}</table.Body>;
}
