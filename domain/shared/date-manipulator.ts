import { addMonths, formatISO, isAfter, isBefore, parseISO } from "date-fns";

type DateManipulator = {
    isAfter(dateX: string, dateY: string): boolean;
    isBefore(dateX: string, dateY: string): boolean;
    parseISOStringToDate(str: string): Date;
    addMonthsToDate(date: string, month: number): Date;
    parseDateToString(date: Date): string;
};

function wrapper(): DateManipulator {
    return {
        isAfter(date: string, dateToCompare: string): boolean {
            const x = parseISO(date);
            const y = parseISO(dateToCompare);
            return isAfter(x, y);
        },
        isBefore(date: string, dateToCompare: string): boolean {
            const x = parseISO(date);
            const y = parseISO(dateToCompare);
            return isBefore(x, y);
        },
        parseISOStringToDate(str: string): Date {
            return parseISO(str);
        },
        addMonthsToDate(date: string, amount: number): Date {
            return addMonths(this.parseISOStringToDate(date), amount);
        },
        parseDateToString(date: Date): string {
            return formatISO(date);
        },
    };
}

export const dateManipulator = wrapper();
