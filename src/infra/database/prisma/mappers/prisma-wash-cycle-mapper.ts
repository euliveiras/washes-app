import type { WashCycle as RawWashCycle } from "@prisma/client";
import { FormatField } from "domain/modules/wash-cycle/helpers/format-wash-cycle-fields";
import { WashCycle } from "domain/modules/wash-cycle/entities/WashCycle";
import { dateManipulator } from "domain/shared/date-manipulator";

export class PrismaWashCycleMapper {
  static toDomain(raw: RawWashCycle) {
    return new WashCycle({
      id: raw.id,
      endDate: raw.endDate,
      startDate: raw.startDate,
      vehicleId: raw.vehicleId,
      completedWashes: FormatField.stringToArray(raw.completedWashes, ","),
      washesId: FormatField.stringToArray(raw.washesId, ","),
    });
  }
  static toPrisma(washCycle: WashCycle) {
    return {
      id: washCycle.id,
      endDate: dateManipulator.parseDateToString(new Date(washCycle.endDate)),
      startDate: dateManipulator.parseDateToString(new Date(washCycle.startDate)),
      vehicleId: washCycle.vehicleId.toUpperCase(),
      completedWashes: FormatField.arrayToString(washCycle.completedWashes),
      washesId: FormatField.arrayToString(washCycle.washesId),
    };
  }
}
