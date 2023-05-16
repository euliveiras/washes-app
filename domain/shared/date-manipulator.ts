type IDateManipulator = {
    isAfter(dateX: string, dateY: string): boolean;
    isBefore(dateX: string, dateY: string): boolean;
};

function wrapper(): IDateManipulator {
    return {
        isAfter(dateX: string, dateY: string): boolean {
            return true;
        },
        isBefore(dateX: string, dateY: string): boolean {
            return true;
        },
    };
}

export const dateManipulator = wrapper()