import type { Organization } from "domain/modules/organization/entities/Organization";
import type { OrganizationRepository } from "domain/modules/organization/repositories/organization-repository";

export class InMemoryOrganizationRepository implements OrganizationRepository {
    private organization: Organization[] = [];

    async create(organization: Organization): Promise<void> {
        this.organization.push(organization);
    }
}
