import type { ProprietaryProps } from "domain/modules/proprietary/entities/Proprietary";
import { Proprietary } from "domain/modules/proprietary/entities/Proprietary";

type OverrideProps = Partial<ProprietaryProps>;

export function makeProprietary(override?: OverrideProps) {
    return new Proprietary({
        id: "some-id",
        name: "some-name",
        phone: ["12313213"],
        type: "some-type",
        ...override,
    });
}
