import type { VehicleRepository } from "../repositories/vehicle-repository";

export class FindLicensePlate {
    constructor(private db: VehicleRepository) {}
    async execute(plate: string) {
        const vehicle = await this.db.findByLicensePlate(plate);

        return { vehicle };
    }
}
