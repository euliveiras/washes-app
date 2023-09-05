import type { WashCycle } from "domain/modules/wash-cycle/entities/WashCycle";
import type { WashCycleRepository } from "domain/modules/wash-cycle/repositories/wash-cycle-repository";
import { PrismaWashCycleMapper } from "../mappers/prisma-wash-cycle-mapper";
import { prisma } from "../prisma";

export class PrismaWashCycleRepository implements WashCycleRepository {
  async create(cycle: WashCycle): Promise<void> {
    const data = PrismaWashCycleMapper.toPrisma(cycle);
    await prisma.washCycle.create({
      data,
    });
  }

  async find(id: string): Promise<WashCycle | null> {
    const cycle = await prisma.washCycle.findUnique({ where: { id } });

    if (!cycle) return null;

    return PrismaWashCycleMapper.toDomain(cycle);
  }
  async findNextCycleByLicensePlate(
    vehicleId: string,
  ): Promise<WashCycle | null> {
    const cycle = await prisma.washCycle.findFirst({
      where: { vehicleId },
    });

    if (!cycle) return null;

    return PrismaWashCycleMapper.toDomain(cycle);
  }

  async update(id: string, data: WashCycle): Promise<WashCycle> {
    const cycle = await prisma.washCycle.update({
      where: { id },
      data: { ...PrismaWashCycleMapper.toPrisma(data) },
    });

    return PrismaWashCycleMapper.toDomain(cycle);
  }
}
