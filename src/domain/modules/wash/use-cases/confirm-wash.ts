import type { WashCycleRepository } from "domain/modules/wash-cycle/repositories/wash-cycle-repository";
import type { WashRepository } from "../repositories/wash-repository";

export class ConfirmWash {
    constructor(private washesRepo: WashRepository, private washesCycleRepo: WashCycleRepository) {}
    async execute(washId: string): Promise<void> {
        const wash = await this.washesRepo.update(washId, { isCompleted: true });

        if (!wash) {
            throw new Error("wash not founded");
        }

        const washCycle = await this.washesCycleRepo.find(wash?.cycleId);

        if (washCycle && washCycle.washesId.includes(wash.id)) {
            washCycle.addCompletedWashId(wash.id);
        }
    }
}
