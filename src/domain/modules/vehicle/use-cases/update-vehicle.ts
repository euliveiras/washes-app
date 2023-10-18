import { Driver } from "domain/modules/driver/entities/Driver";
import type { VehicleRepository } from "../repositories/vehicle-repository";

type UpdateVehicleProps = {
  id: string;
  data: { driver?: { name: string; phones?: string[] } };
};

export class UpdateVehicle {
  constructor(private db: VehicleRepository) {}
  async execute({ id, data }: UpdateVehicleProps) {
    const props = data;
    if (data.driver) props.driver = new Driver(data.driver);
    await this.db.update(id, props);
  }
}
