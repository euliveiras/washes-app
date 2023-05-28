import type { WashCycle } from "../entities/WashCycle";

export abstract class WashCycleRepository {
    abstract create(cycle: WashCycle): Promise<void>;
    abstract find(id: string): Promise<WashCycle | null>;
    abstract findNextCycleByLicensePlate(id: string): Promise<WashCycle | null>;
    abstract update(id: string, data: Partial<WashCycle>): Promise<void>;
}
