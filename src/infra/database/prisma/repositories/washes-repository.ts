import type { Wash } from "domain/modules/wash/entities/Wash";
import type { WashRepository } from "domain/modules/wash/repositories/wash-repository";
import { PrismaWashMapper } from "../mappers/prisma-wash-mapper";
import { prisma } from "../prisma";

export class PrismaWashRepository implements WashRepository {
  async findWashesByCycleId(cycleId: string): Promise<Wash[]> {
    const washes = await prisma.wash.findMany({
      where: { cycleId },
    });

    return washes.map((w) => PrismaWashMapper.toDomain(w));
  }
  async create(wash: Wash): Promise<Wash> {}
  async findById(id: string): Promise<Wash | null> {}
  async update(id: string, data: Partial<Wash>): Promise<Wash | null> {}
}
