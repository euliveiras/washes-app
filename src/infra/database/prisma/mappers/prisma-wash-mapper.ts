import type { Wash as RawWash } from "@prisma/client";
import { Wash } from "domain/modules/wash/entities/Wash";
import { dateManipulator } from "domain/shared/date-manipulator";

export class PrismaWashMapper {
  static toDomain(raw: RawWash) {
    return new Wash({
      createdBy: raw.createdBy,
      cycleId: raw.cycleId,
      scheduleDate: raw.scheduleDate,
      vehicleId: raw.vehicleId,
      id: raw.id,
      isCompleted: raw.isCompleted,
    });
  }
  static toPrisma(wash: Wash) {
    return {
      createdBy: wash.createdBy,
      cycleId: wash.cycleId,
      scheduleDate: dateManipulator.parseDateToString(new Date(wash.scheduleDate)),
      vehicleId: wash.vehicleId.toUpperCase(),
      id: wash.id,
      isCompleted: wash.isCompleted,
      note: wash.note,
    };
  }
}
