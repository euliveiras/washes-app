import type { Organization } from "domain/modules/organization/entities/Organization";
import type { OrganizationRepository } from "domain/modules/organization/repositories/organization-repository";

export class InMemoryOrganizationRepository implements OrganizationRepository {
    private organizations: Organization[] = [];

    async create(organization: Organization): Promise<void> {
        this.organizations.push(organization);
    }

    async findByName(name: string): Promise<Organization | null> {
        const organization = this.organizations.find((org) => org.name === name);
        return organization ?? null;
    }
}
