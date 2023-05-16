import type { WashCycleRepository } from "domain/modules/wash-cycle/repositories/wash-cycle-repository";
import { Wash } from "../entities/Wash";
import type { CreateWashProps } from "../interfaces/create-wash";
import type { WashRepository } from "../repositories/wash-repository";

export class CreateWash {
    constructor(private washesRepo: WashRepository, private washesCycleRepo: WashCycleRepository) {}
    async execute(data: CreateWashProps): Promise<{ wash: Wash }> {
        const findedWashCycle = await this.washesCycleRepo.find(data.cycleId);
        if (!findedWashCycle) {
            throw new Error("Wash cycle not founded");
        }
        const wash = new Wash(data);
        await this.washesRepo.create(wash);
        return { wash };
    }
}
