import type { DriverProps } from "domain/modules/driver/entities/Driver";
import { Driver } from "domain/modules/driver/entities/Driver";

type OverrideProps = Partial<DriverProps>;

export function makeDriver(override?: OverrideProps) {
    return new Driver({
        name: "John Doe",
        phones: ["12313131"],
        organizationId: "some-organization",
        ...override,
    });
}
