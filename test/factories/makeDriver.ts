import type { DriverProps } from "domain/entities/Driver";
import { Driver } from "domain/entities/Driver";

type OverrideProps = Partial<DriverProps>;

export function makeDriver(override?: OverrideProps) {
    return new Driver({
        id: "some-id",
        name: "John Doe",
        phones: [12312321313],
        vehicleIds: ["some-id"],
        ...override,
    });
}
