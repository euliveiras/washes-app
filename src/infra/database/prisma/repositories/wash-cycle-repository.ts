import type { WashCycle } from "domain/modules/wash-cycle/entities/WashCycle";
import type { WashCycleRepository } from "domain/modules/wash-cycle/repositories/wash-cycle-repository";
import { PrismaWashCycleMapper } from "../mappers/prisma-wash-cycle-mapper";
import { prisma } from "../prisma";

export class PrismaWashCycleRepository implements WashCycleRepository {
  async create(cycle: WashCycle): Promise<void> {}

  async find(id: string): Promise<WashCycle | null> {}
  async findNextCycleByLicensePlate(
    vehicleId: string,
  ): Promise<WashCycle | null> {
    const cycle = await prisma.washCycle.findFirst({
      where: { vehicleId },
    });

    if (!cycle) return null;

    return PrismaWashCycleMapper.toDomain(cycle);
  }
  async update(id: string, data: Partial<WashCycle>): Promise<void> {}
}
