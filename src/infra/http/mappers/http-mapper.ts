import type { Vehicle } from "domain/modules/vehicle/entities/Vehicle";
import type { User } from "domain/modules/user/entities/User";

export function toHttp(user: User) {
  return {
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
}
