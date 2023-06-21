import { describe, expect, it } from "vitest";
import { CreateVehicle } from "./create-vehicle";
import { InMemoryVehicleRepository } from "test/database/in-memory-vehicle-repository";
import { makeDriver } from "test/factories/makeDriver";

const inMemoryVehicleRepository = new InMemoryVehicleRepository();
const createVehicle = new CreateVehicle(inMemoryVehicleRepository);

describe("Create vehicle", () => {
    it("should create a vehicle", async () => {
        const { vehicle } = await createVehicle.execute({
            licensePlate: "1239ASD",
            vehicleType: "Bitruck",
            driver: makeDriver(),
        });
        expect(vehicle).toHaveProperty("licensePlate");
    });
});
