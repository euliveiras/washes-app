import type { Wash } from "domain/modules/wash/entities/Wash";
import type { WashRepository } from "domain/modules/wash/repositories/wash-repository";

export class InMemoryWashRepository implements WashRepository {
    async create(data: Wash): Promise<Wash> {
        throw new Error("Method not implemented.");
    }
}