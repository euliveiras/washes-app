import type { Vehicle } from "../entities/Vehicle";

export abstract class VehicleRepository {
  abstract create(vehicle: Vehicle): Promise<void>;
  abstract findByLicensePlate(plate: string): Promise<Vehicle | null>;
  abstract findManyLicensePlate(str: string): Promise<Vehicle[]>;
  abstract update(id: string, data: Partial<Vehicle>): Promise<void>;
}
