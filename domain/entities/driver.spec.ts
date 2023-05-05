import { describe, expect, it } from "vitest";
import { Driver } from "./Driver";
import { makeVehicle } from "test/factories/makeVehicle";
import { makeDriver } from "test/factories/makeDriver";

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
    it("should create a driver with a given vehicle id", () => {
        const driver = makeDriver({ id: "john-doe-id" });
        const vehicle = makeVehicle({ driverId: driver.id });

        driver.vehicleIds.push(vehicle.id)

        expect(driver.vehicleIds).toContain(vehicle.id)
    });
});
