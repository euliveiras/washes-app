import { Table } from "./Table";
import {
  Actions,
  Driver,
  LicensePlate,
  Note,
  ScheduledDate,
  Status,
  Head,
} from "./Rows/Head";

import * as TableBody from "./Rows/Body";
import { Date as FilterDate, Search, Status as FilterStatus } from "./Filters";

export const washesTable = {
  filters: {
    Search,
    Date: FilterDate,
    Status: FilterStatus,
  },

  Table: Table,
  Head: Head,
  headData: {
    Actions,
    Driver,
    LicensePlate,
    Note,
    ScheduledDate,
    Status,
  },
  Body: TableBody.Body,
  Row: TableBody.Row,
  bodyData: {
    Actions: TableBody.Actions,
    Driver: TableBody.Driver,
    LicensePlate: TableBody.LicensePlate,
    Note: TableBody.Note,
    ScheduledDate: TableBody.ScheduledDate,
    Status: TableBody.Status,
  },
};
