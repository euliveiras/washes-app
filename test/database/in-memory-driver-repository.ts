import { Driver } from "domain/modules/driver/entities/Driver";
import type { DriverRepository } from "domain/modules/driver/repositories/driver-repository";

export class InMemoryDriverRepository implements DriverRepository {
    private drivers: Driver[] = [];
    async create(data: Driver): Promise<Driver> {
        const driver = new Driver(data);
        this.drivers.push(driver);
        return driver;
    }
}
