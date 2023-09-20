import type { Wash } from "../entities/Wash";
import type { WashRepository } from "../repositories/wash-repository";

export class FindWashById {
    constructor(private washRepo: WashRepository) {}

    async execute(id: string): Promise<{ wash: Wash | null }> {
        const wash = await this.washRepo.findById(id);
        return { wash: wash };
    }
}
