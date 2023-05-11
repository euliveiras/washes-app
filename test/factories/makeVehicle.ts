import type { VehicleProps } from "domain/modules/vehicle/entities/Vehicle";
import { Vehicle } from "domain/modules/vehicle/entities/Vehicle";

type OverrideProps = Partial<VehicleProps>;

export function makeVehicle(override?: OverrideProps) {
    return new Vehicle({
        driverId: "some-driver-id",
        id: "some-id",
        licensePlate: "some-license-plate",
        proprietaryId: "some-proprietary-id",
        vehicleType: "some-type",
        ...override,
    });
}
