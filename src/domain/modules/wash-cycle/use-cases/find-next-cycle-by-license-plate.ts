import type { WashCycle } from "../entities/WashCycle";
import type { WashCycleRepository } from "../repositories/wash-cycle-repository";

export class FindNextCycleByLicensePlate {
    constructor(private washCycleRepo: WashCycleRepository) {}

    async execute(licensePlate: string): Promise<{ washCycle: WashCycle | null }> {
        const washCycle = await this.washCycleRepo.findNextCycleByLicensePlate(licensePlate);
        return { washCycle };
    }
}
