import { describe, expect, it } from "vitest";
import { CreateVehicle } from "./create-vehicle";
import { InMemoryVehicleRepository } from "test/database/in-memory-vehicle-repository";
import { FindLicensePlate } from "./find-license-plate";
import { Vehicle } from "../entities/Vehicle";
import { makeVehicle } from "test/factories/makeVehicle";

const inMemoryVehicleRepository = new InMemoryVehicleRepository();
const createVehicle = new CreateVehicle(inMemoryVehicleRepository);
const findLicensePlate = new FindLicensePlate(inMemoryVehicleRepository);

describe("Find license plate", () => {
    it("should find vehicle by a given license plate", async () => {
        const licensePlate = "123KASD";
        const mockedVehicle = makeVehicle({ licensePlate });

        await createVehicle.execute(mockedVehicle);

        const { vehicle } = await findLicensePlate.execute({ plate: licensePlate });
        
        expect(vehicle).toBeInstanceOf(Vehicle);
    });
});
