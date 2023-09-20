import type { VehicleRepository } from "../repositories/vehicle-repository";

type FindLicensePlateProps = {
  plate: string;
};
export class FindUniqueLicensePlate {
  constructor(private db: VehicleRepository) {}
  async execute({ plate }: FindLicensePlateProps) {
    const data = await this.db.findByLicensePlate(plate);

    return data;
  }
}
