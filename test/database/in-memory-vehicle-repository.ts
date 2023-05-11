import { Vehicle } from "domain/modules/vehicle/entities/Vehicle";
import type { CreateVehicleProps } from "domain/modules/vehicle/interfaces/create-vehicle";
import type { VehicleRepository } from "domain/modules/vehicle/repositories/vehicle-repository";

export class InMemoryVehicleRepository implements VehicleRepository {
    async create(data: CreateVehicleProps): Promise<Vehicle> {
        const vehicle = new Vehicle(data);
        return vehicle;
    }
}
