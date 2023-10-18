import type { Vehicle } from "../entities/Vehicle";

type UpdateProps = {
  driver?: { name: string; phones?: string[] };
};

export abstract class VehicleRepository {
  abstract create(vehicle: Vehicle): Promise<void>;
  abstract findByLicensePlate(plate: string): Promise<Vehicle | null>;
  abstract findManyLicensePlate(str: string): Promise<Vehicle[]>;
  abstract update(id: string, data: UpdateProps): Promise<void>;
}
