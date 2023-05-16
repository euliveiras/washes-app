import { Wash } from "../entities/Wash";
import type { CreateWashProps } from "../interfaces/create-wash";
import type { WashRepository } from "../repositories/wash-repository";

export class CreateWash {
    constructor(private db: WashRepository) {}
    async execute(data: CreateWashProps): Promise<{ wash: Wash }> {
        const wash = new Wash(data);
        return { wash };
    }
}
