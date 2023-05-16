import { isAfter, isBefore, parseISO } from "date-fns";

type DateManipulator = {
    isAfter(dateX: string, dateY: string): boolean;
    isBefore(dateX: string, dateY: string): boolean;
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
    };
}

export const dateManipulator = wrapper();
