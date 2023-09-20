import type { Driver } from "domain/modules/driver/entities/Driver";
import type { DriverRepository } from "domain/modules/driver/repositories/driver-repository";

export class InMemoryDriverRepository implements DriverRepository {
    private drivers: Driver[] = [];
    async create(driver: Driver): Promise<Driver> {
        this.drivers.push(driver);
        return driver;
    }
}
