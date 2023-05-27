import { WashRepository } from "domain/modules/wash/repositories/wash-repository";
import { WashCycle } from "../entities/WashCycle";
import type { InitializeCycleProps } from "../interfaces/initialize-cycle";
import type { WashCycleRepository } from "../repositories/wash-cycle-repository";
import { Wash } from "domain/modules/wash/entities/Wash";

export class InitializeCycle {
    constructor(private db: WashCycleRepository, private washRepository: WashRepository) {}
    async execute({
        endDate,
        startDate,
        vehicleId,
        note,
        washes: washesData,
    }: InitializeCycleProps): Promise<{ washCycle: WashCycle }> {
        const washCycle = new WashCycle({ endDate, startDate, vehicleId, note });

        if (washesData) {
            await Promise.all(
                washesData.map(async (w) => {
                    const wash = new Wash({
                        scheduleDate: w.scheduledDate,
                        cycleId: washCycle.id,
                        vehicleId,
                        isCompleted: w.isCompleted ?? false,
                    });
                    await this.washRepository.create(wash);
                    washCycle.addWashId(wash.id);
                })
            );
        }
        await this.db.create(washCycle);
        return { washCycle };
    }
}
