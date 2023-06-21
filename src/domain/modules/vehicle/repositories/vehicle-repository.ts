import type { Vehicle } from "../entities/Vehicle";

export abstract class VehicleRepository {
    abstract create(vehicle: Vehicle): Promise<Vehicle>;
    abstract findByLicensePlate(plate: string): Promise<Vehicle | null>;
}
