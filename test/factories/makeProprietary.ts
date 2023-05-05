import type { ProprietaryProps } from "domain/entities/Proprietary";
import { Proprietary } from "domain/entities/Proprietary";

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
