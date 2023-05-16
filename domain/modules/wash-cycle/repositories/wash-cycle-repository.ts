import type { WashCycle } from "../entities/WashCycle";

export abstract class WashCycleRepository {
    abstract create(cycle: WashCycle): Promise<WashCycle>;
    abstract find(id: string): Promise<WashCycle | null>;
}
