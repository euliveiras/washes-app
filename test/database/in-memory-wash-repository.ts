import { Wash } from "domain/modules/wash/entities/Wash";
import type { WashRepository } from "domain/modules/wash/repositories/wash-repository";

export class InMemoryWashRepository implements WashRepository {
    private washes: Wash[] = [];
    async create(data: Wash): Promise<Wash> {
        const wash = new Wash(data);
        this.washes.push(wash);
        return wash;
    }

    async findById(id: string): Promise<Wash | null> {
        const findedWash = this.washes.find((w) => w.id === id);
        return findedWash || null;
    }
}
