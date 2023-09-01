import type { Vehicle } from "domain/modules/vehicle/entities/Vehicle";
import type { User } from "domain/modules/user/entities/User";
import type { Wash } from "domain/modules/wash/entities/Wash";
import type { WashCycle } from "domain/modules/wash-cycle/entities/WashCycle";

export function toHttp(user: User) {
  return {
    id: user.id,
    email: user.email,
    role: user.role,
    username: user.username,
  };
}

export class HttpMapper {
  static vehicle(v: Vehicle) {
    return {
      type: v.vehicleType,
      driver: v.driver ?? undefined,
      licensePlate: v.licensePlate,
    };
  }

  static washCycle(c: WashCycle): Partial<WashCycle> {
    return {
      id: c.id,
      startDate: c.startDate,
      endDate: c.endDate,
      note: c.note,
      completedWashes: c.completedWashes,
      washesId: c.washesId,
    };
  }

  static wash(w: Wash): Partial<Wash> {
    return {
      id: w.id,
      scheduleDate: w.scheduleDate,
      createdBy: w.createdBy,
      isCompleted: w.isCompleted,
      note: w.note,
      vehicleId: w.vehicleId,
    };
  }
}
