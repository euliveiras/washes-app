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

  async find(props: {
    id?: string;
    washesId?: string[];
  }): Promise<WashCycle | null> {
    const where = { id: props.id, washesId: { contains: "" } };

    if (props.washesId) where.washesId.contains = props.washesId.toString();

    const cycle = await prisma.washCycle.findFirst({
      where,
    });

    if (!cycle) return null;

    return PrismaWashCycleMapper.toDomain(cycle);
  }
  async findNextCycleByLicensePlate(
    vehicleId: string,
  ): Promise<WashCycle | null> {
    const todayDate = new Date().toISOString();
    const cycle = await prisma.washCycle.findFirst({
      where: { AND: [{ vehicleId }, { endDate: { gte: todayDate } }] },
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
