import type { Vehicle } from "domain/modules/vehicle/entities/Vehicle";
import type { VehicleRepository } from "domain/modules/vehicle/repositories/vehicle-repository";

export class InMemoryVehicleRepository implements VehicleRepository {
    private data: Vehicle[] = [];

    async create(data: Vehicle): Promise<Vehicle> {
        this.data.push(data);
        return data;
    }

    async findByLicensePlate(plate: string): Promise<Vehicle | null> {
        const findedVehicle = this.data.find((i) => i.licensePlate === plate);

        if (!findedVehicle) {
            return null;
        }

        return findedVehicle;
    }
}
