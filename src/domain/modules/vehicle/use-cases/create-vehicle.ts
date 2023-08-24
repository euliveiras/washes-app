import { Driver } from "domain/modules/driver/entities/Driver";
import { Vehicle } from "../entities/Vehicle";
import type { CreateVehicleProps } from "../interfaces/create-vehicle";
import type { VehicleRepository } from "../repositories/vehicle-repository";

export class CreateVehicle {
  constructor(private db: VehicleRepository) {}
  async execute(data: CreateVehicleProps) {
    const vehicle = new Vehicle({
      ...data,
      driver: data.driver ? new Driver({ ...data.driver }) : undefined,
    });
    await this.db.create(vehicle);
    return { vehicle };
  }
}
