import type { WashCycleRepository } from "domain/modules/wash-cycle/repositories/wash-cycle-repository";
import { Wash } from "../entities/Wash";
import type { CreateWashProps } from "../interfaces/create-wash";
import type { WashRepository } from "../repositories/wash-repository";
import { dateManipulator } from "domain/shared/date-manipulator";

export class CreateWash {
    constructor(private washesRepo: WashRepository, private washesCycleRepo: WashCycleRepository) {}
    async execute(data: CreateWashProps): Promise<{ wash: Wash }> {
        const findedWashCycle = await this.washesCycleRepo.find(data.cycleId);
        if (!findedWashCycle) {
            throw new Error("Wash cycle not founded");
        }

        const isScheduledDateBeforeCycleStart = dateManipulator.isBefore(
            data.scheduleDate,
            findedWashCycle.startDate
        );

        if (isScheduledDateBeforeCycleStart) {
            throw new Error("Wash schedule date must be after wash cycle start date");
        }

        const isScheduledDateAfterCycleEnd = dateManipulator.isAfter(
            data.scheduleDate,
            findedWashCycle.endDate
        );

        if (isScheduledDateAfterCycleEnd) {
            throw new Error("Wash schedule date must be before wash cycle end date");
        }

        const wash = new Wash(data);

        await this.washesRepo.create(wash);

        findedWashCycle.washesId.push(wash.id)

        await this.washesCycleRepo.update(findedWashCycle)

        return { wash };
    }
}
