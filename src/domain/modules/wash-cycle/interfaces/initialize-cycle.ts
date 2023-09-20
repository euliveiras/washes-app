export type InitializeCycleProps = {
  vehicleId: string;
  washes?: {
    isCompleted?: boolean;
    scheduleDate: string;
    note?: string;
  }[];
  createdBy: string;
};
