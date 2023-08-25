import type { Wash } from "../entities/Wash";

export abstract class WashRepository {
  abstract create(wash: Wash): void;
  abstract createMany(washes: Wash[]): Promise<void>;
  abstract findById(id: string): Promise<Wash | null>;
  abstract update(id: string, data: Partial<Wash>): Promise<Wash | null>;
  abstract findWashesByCycleId(cycleId: string): Promise<Wash[]>;
}
