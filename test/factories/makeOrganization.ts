import type { OrganizationProps } from "domain/modules/organization/entities/Organization";
import { Organization } from "domain/modules/organization/entities/Organization";

type OverrideProps = Partial<OrganizationProps>;

export function makeOrganization(override?: OverrideProps) {
    return new Organization({
        id: "some-id",
        name: "some-name",
        phone: ["12313213"],
        type: "Cooperativa",
        ...override,
    });
}
