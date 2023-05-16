import { addMonths, formatISO, isAfter, isBefore, isDate, parseISO } from "date-fns";

type DateManipulator = {
    isAfter(dateX: string, dateY: string): boolean;
    isBefore(dateX: string, dateY: string): boolean;
    parseISOStringToDate(str: string): Date;
    addMonthsToDate(date: string, month: number): string;
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
            return this.parseDateToString(addMonths(this.parseISOStringToDate(date), amount));
        },
        parseDateToString(date: Date): string {
            return formatISO(date);
        },
    };
}

export const dateManipulator = wrapper();
