import { WashCycle } from "../entities/WashCycle";
import type { InitializeCycleProps } from "../interfaces/initialize-cycle";
import type { WashCycleRepository } from "../repositories/wash-cycle-repository";

export class InitializeCycle {
    constructor(private db: WashCycleRepository) {}
    async execute(data: InitializeCycleProps): Promise<{ washCycle: WashCycle }> {
        const washCycle = new WashCycle(data)
        await this.db.create(washCycle);
        return { washCycle };
    }
}
