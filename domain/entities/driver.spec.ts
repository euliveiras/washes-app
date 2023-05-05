import { describe, expect, it } from "vitest";
import { Driver } from "./Driver";

describe("Driver", () => {
    it("should create a Driver", () => {
        const driver = new Driver({
            id: "some-id",
            name: "John Doe",
            phones: [12313123],
            vehicleIds: ["vehicle-id-1, vehicle-id-2"],
        });

        expect(driver).toHaveProperty("name", "John Doe");
    });
    it("should not create a Driver with minus than 3 characters in name", () => {
        expect(
            () =>
                new Driver({
                    id: "some-id",
                    name: "as",
                    phones: [12313123],
                    vehicleIds: ["vehicle-id-1, vehicle-id-2"],
                })
        ).toThrow();
    });
});
