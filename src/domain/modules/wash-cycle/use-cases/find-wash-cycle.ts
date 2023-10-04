import type { WashCycle } from "../entities/WashCycle";
import type { WashCycleRepository } from "../repositories/wash-cycle-repository";

type Props = {
	washesId?: string[];
}

export class FindWashCycle {
    constructor(private washCycleRepo: WashCycleRepository) {}

    async execute(props: Props): Promise<{ washCycle: WashCycle | null }> {
        const washCycle = await this.washCycleRepo.find(props);
        return { washCycle };
    }
}
