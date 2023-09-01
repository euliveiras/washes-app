import type { Wash } from "domain/modules/wash/entities/Wash";
import type {
  FindWashesMethodDTO,
  WashRepository,
} from "domain/modules/wash/repositories/wash-repository";
import { dateManipulator } from "domain/shared/date-manipulator";
import { PrismaWashMapper } from "../mappers/prisma-wash-mapper";
import { prisma } from "../prisma";

export class PrismaWashRepository implements WashRepository {
  async findWashes({
    filters,
    cursor,
    take = 10,
    skip = 1,
  }: FindWashesMethodDTO): Promise<Wash[]> {
    let washes;
    const startDate = filters.startDate
      ? dateManipulator.parseDateToString(new Date(filters.startDate))
      : undefined;
    const endDate = filters.endDate
      ? dateManipulator.parseDateToString(new Date(filters.endDate))
      : undefined;

    const scheduleDate = {} as { gte?: string; lte?: string };

    if (startDate && endDate) {
      scheduleDate.gte = startDate;
      scheduleDate.lte = endDate;
    }

    const where = {
      createdBy: filters.createdBy,
      vehicleId: filters.vehicleId,
      isCompleted: filters.isCompleted,
      scheduleDate,
    };

    if (cursor?.id) {
      washes = await prisma.wash.findMany({
        where,
        skip,
        cursor,
        take,
      });
    } else {
      washes = await prisma.wash.findMany({
        where,
        take,
      });
    }

    return washes.map((w) => PrismaWashMapper.toDomain(w));
  }
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
