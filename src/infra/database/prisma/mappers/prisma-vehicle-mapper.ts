import type { Vehicle as Raw } from "@prisma/client";
import { Vehicle } from "../../../../domain/modules/vehicle/entities/Vehicle";
export class PrismaVehicleMapper {
  static toDomain(raw: Raw) {
    return new Vehicle({
      driver: raw.driver ? JSON.parse(raw.driver) : undefined,
      licensePlate: raw.licensePlate,
      vehicleType: raw.vehicleType as Vehicle["vehicleType"],
    });
  }
  static toPrisma(vehicle: Vehicle) {
    const driver = vehicle.driver
      ? JSON.stringify({
          name: vehicle.driver.name,
          phones: vehicle.driver.phones,
        })
      : undefined;
    return {
      driver,
      licensePlate: vehicle.licensePlate.toUpperCase(),
      vehicleType: vehicle.vehicleType,
    };
  }
}
