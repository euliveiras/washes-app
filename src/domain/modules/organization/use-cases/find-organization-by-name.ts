import type { Organization } from "../entities/Organization";
import type { OrganizationRepository } from "../repositories/organization-repository";

export class FindOrganizationByName {
    constructor(private organizationDb: OrganizationRepository) {}

    async execute(name: string): Promise<{ organization: Organization | null }> {
        const organization = await this.organizationDb.findByName(name);

        return { organization };
    }
}
