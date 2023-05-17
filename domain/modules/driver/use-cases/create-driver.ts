import { Driver } from "../entities/Driver";
import type { DriverRepository } from "../repositories/driver-repository";

type CreateDriverProps = {
    name: string;
    vehicleIds?: string[];
    phones?: string[];
    organizationId?: string;
};

export class CreateDriver {
    constructor(private driverRepo: DriverRepository) {}

    async execute(data: CreateDriverProps): Promise<{ driver: Driver }> {
        const driver = new Driver(data);
        await this.driverRepo.create(driver)
        return { driver };
    }
}
