import { Organization } from "../entities/Organization";
import type { OrganizationRepository } from "../repositories/organization-repository";

type CreateOrganizationDTO = {
    type: "Cooperativa" | "Empresa";
    name: string;
    phone: string[];
};
export class CreateOrganization {
    constructor(private organizationDb: OrganizationRepository) {}

    async execute(data: CreateOrganizationDTO): Promise<{ organization: Organization }> {
        const organization = new Organization(data);

        await this.organizationDb.create(organization);

        return { organization };
    }
}
