import { makeOrganization } from "test/factories/makeOrganization";
import { describe, expect, it } from "vitest";
import { Organization } from "./Organization";

describe("Organization", () => {
    it("should create a proprietary", () => {
        const proprietary = makeOrganization();

        expect(proprietary).toBeInstanceOf(Organization);
    });
});
