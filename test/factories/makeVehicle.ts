import type { VehicleProps } from "domain/modules/vehicle/entities/Vehicle";
import { Vehicle } from "domain/modules/vehicle/entities/Vehicle";
import { makeDriver } from "./makeDriver";

type OverrideProps = Partial<VehicleProps>;

export function makeVehicle(override?: OverrideProps) {
    return new Vehicle({
        driver: makeDriver(),
        id: "some-id",
        licensePlate: "some-license-plate",
        vehicleType: "Bitruck",
        ...override,
    });
}
