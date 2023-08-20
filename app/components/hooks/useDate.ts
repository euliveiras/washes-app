import { dateManipulator } from "../../../src/domain/shared/date-manipulator";

export function format(date: Date | string, format?: string): string {
  return dateManipulator.format(date, format ?? "yyyy-MM-dd");
}
export function parseDateToString(date: Date): string {
  return dateManipulator.parseDateToString(date);
}

export function parseISOStringToDate(date: string): Date {
  return dateManipulator.parseISOStringToDate(date);
}

export function addDays(date: Date | string, days: number): Date {
  let formattedDate;
  if (date instanceof Date) {
    formattedDate = parseDateToString(date);
    const newDate = dateManipulator.addDaysToDate(formattedDate, days);
    return parseISOStringToDate(newDate);
  }
  const newDate = dateManipulator.addDaysToDate(date, days);
  return parseISOStringToDate(newDate);
}

export function useDate() {
  function format(date: Date | string, format?: string): string {
    return dateManipulator.format(date, format ?? "yyyy-MM-dd");
  }

  function parseDateToString(date: Date): string {
    return dateManipulator.parseDateToString(date);
  }

  function parseISOStringToDate(date: string): Date {
    return dateManipulator.parseISOStringToDate(date);
  }

  function addDays(date: Date | string, days: number): Date {
    let formattedDate;
    if (date instanceof Date) {
      formattedDate = parseDateToString(date);
      const newDate = dateManipulator.addDaysToDate(formattedDate, days);
      return parseISOStringToDate(newDate);
    }
    const newDate = dateManipulator.addDaysToDate(date, days);
    return parseISOStringToDate(newDate);
  }

  return { parseDateToString, parseISOStringToDate, addDays, format };
}
