import { describe, expect, it } from "vitest";
import { CreateOrganization } from "./create-organization";
import { InMemoryOrganizationRepository } from "test/database/in-memory-organization-repository";
import { Organization } from "../entities/Organization";

describe("New organization", () => {
    it("should create a organization", async () => {
        const inMemoryOrganizationRepository = new InMemoryOrganizationRepository();
        const createOrganization = new CreateOrganization(inMemoryOrganizationRepository);

        const { organization } = await createOrganization.execute({
            name: "fake-org",
            phone: ["12313"],
            type: "Cooperativa",
        });

        expect(organization).toBeInstanceOf(Organization);
    });
});
