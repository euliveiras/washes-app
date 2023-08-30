import type { ReactNode } from "react";
import { table } from "app/components/Table";

export { Actions } from "./Actions";
export { Driver } from "./Driver";
export { LicensePlate } from "./LicensePlate";
export { Note } from "./Note";
export { ScheduledDate } from "./ScheduledDate";
export { Status } from "./Status";

export function Head({ children }: { children: ReactNode }) {
  return <table.Head>{children}</table.Head>;
}
