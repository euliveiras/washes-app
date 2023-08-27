import type { Wash } from "domain/modules/wash/entities/Wash";
import type { WashRepository } from "domain/modules/wash/repositories/wash-repository";
import { PrismaWashMapper } from "../mappers/prisma-wash-mapper";
import { prisma } from "../prisma";

export class PrismaWashRepository implements WashRepository {
  async findWashesByCycleId(id: string): Promise<Wash[]> {
    const washes = await prisma.wash.findMany({
      where: { cycleId: id },
    });

    return washes.map((w) => PrismaWashMapper.toDomain(w));
  }
  async create(wash: Wash) {
    const data = PrismaWashMapper.toPrisma(wash);
    await prisma.wash.create({ data });
  }
  async createMany(washes: Wash[]) {
    const data = washes.map((w) => PrismaWashMapper.toPrisma(w));
    await prisma.wash.createMany({ data });
  }
  async findById(id: string): Promise<Wash | null> {}
  async update(id: string, data: Partial<Wash>): Promise<Wash | null> {}
}
