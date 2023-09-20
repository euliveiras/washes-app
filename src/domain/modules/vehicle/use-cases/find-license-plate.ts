import type { VehicleRepository } from "../repositories/vehicle-repository";

type FindLicensePlateProps = {
  plate: string;
};
export class FindLicensePlate {
  constructor(private db: VehicleRepository) {}
  async execute({ plate }: FindLicensePlateProps) {
    const data = await this.db.findManyLicensePlate(plate);

    return data;
  }
}
