import type { Driver } from "../entities/Driver";

export abstract class DriverRepository {
    abstract create(data: Driver): Promise<Driver>;
}
