import {
  addMonths,
  formatISO,
  isAfter,
  isBefore,
  addDays,
  parseISO,
  isSunday,
  isSameDay,
  format as dateFnsFormat,
} from "date-fns";
import { ptBR } from "date-fns/locale";

type DateManipulator = {
  isAfter(dateX: string, dateY: string): boolean;
  isBefore(dateX: string, dateY: string): boolean;
  parseISOStringToDate(str: string): Date;
  addMonthsToDate(date: string, month: number): string;
  parseDateToString(date: Date): string;
  addDaysToDate(date: string, days: number): string;
  isSunday(date: string): boolean;
  isSameDay(date1: string, date2: string): boolean;
  format(date: string | Date, format: string): string;
};

function wrapper(): DateManipulator {
  return {
    isAfter(date: string, dateToCompare: string): boolean {
      const x = parseISO(date);
      const y = parseISO(dateToCompare);
      return isAfter(x, y);
    },
    isBefore(date: string, dateToCompare: string): boolean {
      const x = this.parseISOStringToDate(date);
      const y = this.parseISOStringToDate(dateToCompare);

      return isBefore(x, y);
    },
    parseISOStringToDate(str: string): Date {
      if (!str) {
        throw new Error("Date string is undefined");
      }
      return parseISO(str);
    },
    addMonthsToDate(date: string, amount: number): string {
      return this.parseDateToString(
        addMonths(this.parseISOStringToDate(date), amount),
      );
    },
    parseDateToString(date: Date): string {
      return formatISO(date);
    },
    addDaysToDate(date: string, amount): string {
      return this.parseDateToString(
        addDays(this.parseISOStringToDate(date), amount),
      );
    },
    isSunday(date: string): boolean {
      return isSunday(this.parseISOStringToDate(date));
    },
    isSameDay(x: string, y: string): boolean {
      return isSameDay(
        this.parseISOStringToDate(x),
        this.parseISOStringToDate(y),
      );
    },
    format(date, format) {
      if (typeof date === "string") {
        return dateFnsFormat(this.parseISOStringToDate(date), format, {
          locale: ptBR,
        });
      }
      return dateFnsFormat(date, format, {
        locale: ptBR,
      });
    },
  };
}

export const dateManipulator = wrapper();
