import type { WashCycle as RawWashCycle } from "@prisma/client";
import { FormatField } from "domain/modules/wash-cycle/helpers/format-wash-cycle-fields";
import { WashCycle } from "domain/modules/wash-cycle/entities/WashCycle";

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
      endDate: washCycle.endDate,
      startDate: washCycle.startDate,
      vehicleId: washCycle.vehicleId,
      completedWashes: FormatField.arrayToString(washCycle.completedWashes),
      washesId: FormatField.arrayToString(washCycle.washesId),
    };
  }
}
