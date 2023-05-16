import type { Wash } from "../entities/Wash";

export abstract class WashRepository {
    abstract create(wash: Wash): Promise<Wash>;
}
