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
  async findByLicensePlate(licensePlate: string): Promise<Vehicle | null> {
    const data = await prisma.vehicle.findUnique({ where: { licensePlate } });

    if (!data) return null;
    return PrismaVehicleMapper.toDomain(data);
  }
}
