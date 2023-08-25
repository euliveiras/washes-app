import type { Wash as RawWash } from "@prisma/client";
import { Wash } from "domain/modules/wash/entities/Wash";

export class PrismaWashMapper {
  static toDomain(raw: RawWash) {
    return new Wash({
      createdBy: raw.createdBy,
      cycleId: raw.cycleId,
      scheduleDate: raw.scheduleDate,
      vehicleId: raw.vehicleId,
      id: raw.id,
      isCompleted: raw.isCompleted,
      note: raw.note,
    });
  }
  static toPrisma(wash: Wash) {
console.log(wash)
    return {
      createdBy: wash.createdBy,
      cycleId: wash.cycleId,
      scheduleDate: wash.scheduleDate,
      vehicleId: wash.vehicleId,
      id: wash.id,
      isCompleted: wash.isCompleted,
      note: wash.note
    };
  }
}
