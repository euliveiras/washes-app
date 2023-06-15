import type { Organization } from "../entities/Organization";

export abstract class OrganizationRepository {
    abstract create(cycle: Organization): Promise<void>;
}
