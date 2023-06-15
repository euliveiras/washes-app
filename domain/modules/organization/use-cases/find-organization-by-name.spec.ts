import { describe, expect, it } from "vitest";
import { CreateOrganization } from "./create-organization";
import { InMemoryOrganizationRepository } from "test/database/in-memory-organization-repository";
import { FindOrganizationByName } from "./find-organization-by-name";

describe("Find organization by name", () => {
    it("should find a organization by name", async () => {
        const inMemoryOrganizationRepository = new InMemoryOrganizationRepository();
        const createOrganization = new CreateOrganization(inMemoryOrganizationRepository);
        const findByName = new FindOrganizationByName(inMemoryOrganizationRepository);

        await createOrganization.execute({
            name: "fake-org",
            phone: ["1231313"],
            type: "Cooperativa",
        });
        const { organization } = await findByName.execute("fake-org");

        expect(organization).toHaveProperty("name", "fake-org");
    });
});
