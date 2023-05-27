export type InitializeCycleProps = {
    vehicleId: string;
    startDate: string;
    endDate: string;
    note?: string;
    washes?: {
        isCompleted?: boolean;
        scheduledDate: string;
    }[];
};
