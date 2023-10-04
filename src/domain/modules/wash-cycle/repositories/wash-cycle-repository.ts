import type { WashCycle } from "../entities/WashCycle";

export abstract class WashCycleRepository {
  abstract create(cycle: WashCycle): Promise<void>;
  abstract find(props: { washesId?: string[] }): Promise<WashCycle | null>;
  abstract findNextCycleByLicensePlate(id: string): Promise<WashCycle | null>;
  abstract update(id: string, data: WashCycle): Promise<WashCycle>;
}
