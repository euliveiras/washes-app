import { describe, expect, it } from "vitest";
import { Vehicle } from "./Vehicle";
import { makeVehicle } from "test/factories/makeVehicle";
import { makeDriver } from "test/factories/makeDriver";

describe("Vehicle", () => {
    it("should create a Vehicle", () => {
        const vehicle = makeVehicle();

        expect(vehicle).toBeInstanceOf(Vehicle);
    });

    it("should create a Vehicle with given driver id", () => {
        const driver = makeDriver({ id: "john-doe-id" });
        const vehicle = makeVehicle({ driverId: driver.id });

        expect(vehicle).toHaveProperty("driverId", driver.id);
    });
});
