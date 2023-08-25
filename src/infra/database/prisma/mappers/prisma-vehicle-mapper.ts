import type { Vehicle as Raw } from "@prisma/client";
import { Driver } from "domain/modules/driver/entities/Driver";
import { Vehicle } from "../../../../domain/modules/vehicle/entities/Vehicle";
export class PrismaVehicleMapper {
  static toDomain(raw: Raw) {
    return new Vehicle({
      id: raw.id,
      driver: JSON.parse(raw.driver),
      licensePlate: raw.licensePlate,
      vehicleType: raw.vehicleType as Vehicle["vehicleType"],
    });
  }
  static toPrisma(vehicle: Vehicle) {
    return {
      id: vehicle.id,
      driver: vehicle.driver
        ? JSON.stringify(new Driver(vehicle.driver))
        : undefined,
      licensePlate: vehicle.licensePlate,
      vehicleType: vehicle.vehicleType,
    };
  }
}
