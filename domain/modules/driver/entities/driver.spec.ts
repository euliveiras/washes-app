import { makeDriver } from "test/factories/makeDriver";
import { describe, expect, it } from "vitest";

describe("Driver", () => {
    it("should create a Driver", () => {
        const driver = makeDriver();

        expect(driver).toHaveProperty("name", "John Doe");
    });
});
