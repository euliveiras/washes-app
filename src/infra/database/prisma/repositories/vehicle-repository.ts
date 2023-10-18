import type { Vehicle } from "../../../../domain/modules/vehicle/entities/Vehicle";
import type { VehicleRepository } from "../../../../domain/modules/vehicle/repositories/vehicle-repository";
import { prisma } from "../prisma";
import { PrismaVehicleMapper } from "../mappers/prisma-vehicle-mapper";

export class PrismaVehicleRepository implements VehicleRepository {
  async create(vehicle: Vehicle): Promise<void> {
    await prisma.vehicle.create({
      data: PrismaVehicleMapper.toPrisma(vehicle),
    });
  }

  async update(licensePlate: string, data: Partial<Vehicle>): Promise<void> {
    await prisma.vehicle.update({
      where: { licensePlate },
      data: { ...data, driver: JSON.stringify({ name: data.driver?.name, phones: data.driver?.phones }) },
    });
  }

  async findByLicensePlate(str: string): Promise<Vehicle | null> {
    const licensePlate = str.toUpperCase();
    const data = await prisma.vehicle.findUnique({
      where: { licensePlate },
    });

    if (!data) return null;
    return PrismaVehicleMapper.toDomain(data);
  }
  async findManyLicensePlate(str: string): Promise<Vehicle[]> {
    const licensePlate = str.toUpperCase();
    const data = await prisma.vehicle.findMany({
      where: {
        licensePlate: {
          contains: licensePlate,
        },
      },
    });

    return data.map((v) => PrismaVehicleMapper.toDomain(v));
  }
}
