import type { Wash } from "../entities/Wash";

export abstract class WashRepository {
    abstract create(wash: Wash): Promise<Wash>;
    abstract findById(id: string): Promise<Wash | null>;
    abstract update(id: string, data: Partial<Wash>): Promise<Wash | null>;
}
