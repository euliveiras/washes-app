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
  findByLicensePlate(plate: string): Promise<Vehicle> {
    throw new Error("Method not implemented.");
  }
}
