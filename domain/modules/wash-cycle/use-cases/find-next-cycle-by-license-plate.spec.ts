import { describe, expect, it } from "vitest";
import { FindNextCycleByLicensePlate } from "./find-next-cycle-by-license-plate";
import { InMemoryWashCycleRepository } from "test/database/in-memory-wash-cycle-repository.ts";
import { InitializeCycle } from "./initialize-cycle";
import { dateManipulator } from "domain/shared/date-manipulator";
import { makeVehicle } from "test/factories/makeVehicle";
import { InMemoryWashRepository } from "test/database/in-memory-wash-repository";

describe("Find next wash cycle by license plate", () => {
    it("should find the most recent wash cycle by license plate", async () => {
        const inMemoryWashCycleRepo = new InMemoryWashCycleRepository();
        const findNextWashCycleByLicensePlate = new FindNextCycleByLicensePlate(
            inMemoryWashCycleRepo
        );
        const inMemoryWashRepo = new InMemoryWashRepository()
        const initializeWashCycle = new InitializeCycle(inMemoryWashCycleRepo, inMemoryWashRepo);
        const startDate = dateManipulator.parseDateToString(new Date());
        const endDate = dateManipulator.addMonthsToDate(
            dateManipulator.parseDateToString(new Date()),
            1
        );
        const vehicle1 = makeVehicle();
        const vehicle2 = makeVehicle({ licensePlate: "0912KSAD" });
        await initializeWashCycle.execute({ startDate, endDate, vehicleId: vehicle1.licensePlate });
        await initializeWashCycle.execute({ startDate, endDate, vehicleId: vehicle1.licensePlate });
        await initializeWashCycle.execute({ startDate, endDate, vehicleId: vehicle2.licensePlate });

        const { washCycle } = await findNextWashCycleByLicensePlate.execute(vehicle2.licensePlate);
        expect(washCycle).toHaveProperty("vehicleId", vehicle2.licensePlate);
    });
});
