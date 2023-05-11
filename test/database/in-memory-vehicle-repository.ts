import { Vehicle } from "domain/modules/vehicle/entities/Vehicle";
import type { CreateVehicleProps } from "domain/modules/vehicle/interfaces/create-vehicle";
import type { VehicleRepository } from "domain/modules/vehicle/repositories/vehicle-repository";
import { makeVehicle } from "test/factories/makeVehicle";

export class InMemoryVehicleRepository implements VehicleRepository {
    private data: Vehicle[] = [];

    async create(data: CreateVehicleProps): Promise<Vehicle> {
        const vehicle = new Vehicle(data);
        return vehicle;
    }

    async findByLicensePlate(plate: string): Promise<Vehicle | null> {
        const vehicle = makeVehicle();
        this.data.push(vehicle);

        const findedVehicle = this.data.find((i) => i.licensePlate === plate);

        if (!findedVehicle) {
            return null;
        }

        return findedVehicle;
    }
}
