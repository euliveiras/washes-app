import type { Wash } from "../entities/Wash";

export type FindWashesMethodDTO = {
  filters: {
    vehicleId?: string;
    isCompleted?: boolean;
    startDate?: string;
    endDate?: string;
    createdBy: string;
  };
  cursor?: { id?: string };
  take?: number;
  skip?: number;
};

export type UpdateWashRepoAbstractMethodDTO = {
  id: string;
  data: { isCompleted?: boolean; scheduleDate?: string; note?: string };
};

export abstract class WashRepository {
  abstract create(wash: Wash): Promise<void>;
  abstract createMany(washes: Wash[]): Promise<void>;
  abstract findById(id: string): Promise<Wash | null>;
  abstract update(id: string, data: Partial<Wash>): Promise<Wash | null>;
  abstract findWashesByCycleId(cycleId: string): Promise<Wash[]>;
  abstract findWashes(data: FindWashesMethodDTO): Promise<Wash[]>;
  abstract updateWash(dto: UpdateWashRepoAbstractMethodDTO): Promise<Wash>;
}
