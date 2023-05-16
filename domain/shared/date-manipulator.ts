type IDateManipulator = {
    isAfter(dateX: string, dateY: string): boolean;
    isBefore(dateX: string, dateY: string): boolean;
};

export function dateManipulator(): IDateManipulator {
    return {
        isAfter(dateX: string, dateY: string): boolean {
            return true;
        },
        isBefore(dateX: string, dateY: string): boolean {
            return true;
        },
    };
}
