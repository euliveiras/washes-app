import { format, addDays } from "~/components/hooks/useDate";
export { WashesContent } from "./WashesContent";

export type Wash = {
  id: number;
  scheduleDate: string;
  note: string;
  isCompleted: boolean;
  title: string;
  minDate?: string;
};

const baseDate = new Date();

export const errors = {
  activeWashesError: "há lavagens ativas para este veículo",
};

export const formatedDates = {
  minDate: format(baseDate, "yyyy-MM-dd"),
  firstDate: format(baseDate, "yyyy-MM-dd"),
  secDate: format(addDays(baseDate, 7), "yyyy-MM-dd"),
  thirdDate: format(addDays(baseDate, 14), "yyyy-MM-dd"),
  fourthDate: format(addDays(baseDate, 21), "yyyy-MM-dd"),
};

export function formatDate(date: Date) {
  return format(date, "yyyy-MM-dd");
}

export const washesDefaultValue = [
  {
    id: 1,
    scheduleDate: formatedDates.firstDate,
    note: "",
    isCompleted: false,
    title: "primeira lavagem",
    minDate: formatedDates.minDate,
  },
  {
    id: 2,
    scheduleDate: formatedDates.secDate,
    note: "",
    isCompleted: false,
    title: "segunda lavagem",
    minDate: formatedDates.minDate,
  },
  {
    id: 3,
    scheduleDate: formatedDates.thirdDate,
    note: "",
    isCompleted: false,
    title: "terceira lavagem",
    minDate: formatedDates.minDate,
  },
  {
    id: 4,
    scheduleDate: formatedDates.fourthDate,
    note: "",
    isCompleted: false,
    title: "quarta lavagem",
    minDate: formatedDates.minDate,
  },
];
