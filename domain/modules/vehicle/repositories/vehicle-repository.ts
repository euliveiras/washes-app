import type { Vehicle } from "../entities/Vehicle";
import type { CreateVehicleProps } from "../interfaces/create-vehicle";

export abstract class VehicleRepository {
    abstract create(vehicle: CreateVehicleProps): Promise<Vehicle>;
    abstract findByLicensePlate(plate: string): Promise<Vehicle>;
}
