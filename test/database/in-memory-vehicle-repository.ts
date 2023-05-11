import { Vehicle } from "domain/modules/vehicle/entities/Vehicle";
import type { CreateVehicleProps } from "domain/modules/vehicle/interfaces/create-vehicle";
import type { VehicleRepository } from "domain/modules/vehicle/repositories/vehicle-repository";

export class InMemoryVehicleRepository implements VehicleRepository {
    private data: Vehicle[] = [];

    async create(data: CreateVehicleProps): Promise<Vehicle> {
        const vehicle = new Vehicle(data);
        this.data.push(vehicle);
        return vehicle;
    }

    async findByLicensePlate(plate: string): Promise<Vehicle | null> {
        const findedVehicle = this.data.find((i) => i.licensePlate === plate);

        if (!findedVehicle) {
            return null;
        }

        return findedVehicle;
    }
}
