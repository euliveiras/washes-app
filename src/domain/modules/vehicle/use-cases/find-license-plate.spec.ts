import { describe, expect, it } from "vitest";
import { CreateVehicle } from "./create-vehicle";
import { InMemoryVehicleRepository } from "test/database/in-memory-vehicle-repository";
import { FindLicensePlate } from "./find-license-plate";
import { Vehicle } from "../entities/Vehicle";
import { makeDriver } from "test/factories/makeDriver";

const inMemoryVehicleRepository = new InMemoryVehicleRepository();
const createVehicle = new CreateVehicle(inMemoryVehicleRepository);
const findLicensePlate = new FindLicensePlate(inMemoryVehicleRepository);

describe("Find license plate", () => {
    it("should find vehicle by a given license plate", async () => {
        const licensePlate = "123KASD";

        await createVehicle.execute({ licensePlate, driver: makeDriver(), vehicleType: "Bitruck" });

        const { vehicle } = await findLicensePlate.execute({ plate: licensePlate });

        expect(vehicle).toBeInstanceOf(Vehicle);
    });
});
