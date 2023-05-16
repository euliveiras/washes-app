import { WashCycle } from "domain/modules/wash-cycle/entities/WashCycle";
import type { WashCycleRepository } from "domain/modules/wash-cycle/repositories/wash-cycle-repository";

export class InMemoryWashCycleRepository implements WashCycleRepository {
    private cycles: WashCycle[] = [];
    async create(data: WashCycle): Promise<WashCycle> {
        const washCycle = new WashCycle(data);
        this.cycles.push(washCycle);

        return washCycle;
    }
}
