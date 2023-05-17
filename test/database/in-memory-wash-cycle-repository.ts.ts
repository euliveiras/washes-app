import type { WashCycle } from "domain/modules/wash-cycle/entities/WashCycle";
import type { WashCycleRepository } from "domain/modules/wash-cycle/repositories/wash-cycle-repository";

export class InMemoryWashCycleRepository implements WashCycleRepository {
    private cycles: WashCycle[] = [];
    async create(data: WashCycle): Promise<void> {
        this.cycles.push(data);
    }
    async find(id: string): Promise<WashCycle | null> {
        const washCycle = this.cycles.find((cycle) => cycle.id === id);
        return washCycle ?? null;
    }
}
