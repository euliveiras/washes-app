import type { CreateVehicleProps } from "../interfaces/create-vehicle";
import type { VehicleRepository } from "../repositories/vehicle-repository";

export class CreateVehicle {
    constructor(private db: VehicleRepository) {}
    async execute(data: CreateVehicleProps) {
        const vehicle = await this.db.create(data);
        return { vehicle };
    }
}
