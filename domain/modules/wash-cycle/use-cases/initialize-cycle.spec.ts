import { describe, expect, it } from "vitest";
import { InitializeCycle } from "./initialize-cycle";
import { InMemoryWashCycleRepository } from "test/database/in-memory-wash-cycle-repository.ts";
import { dateManipulator } from "domain/shared/date-manipulator";
import { InMemoryWashRepository } from "test/database/in-memory-wash-repository";


describe("New wash", () => {
    it("should initialize a wash cycle", async () => {
        const inMemoryWashCycleRepo = new InMemoryWashCycleRepository();
        const inMemoryWashRepo = new InMemoryWashRepository();
        const initializeWash = new InitializeCycle(inMemoryWashCycleRepo, inMemoryWashRepo);
        const { washCycle } = await initializeWash.execute({
            endDate: new Date(2024, 1, 1).toISOString(),
            startDate: new Date().toISOString(),
            vehicleId: "some-vehicle-id",
        });

        expect(washCycle).toBeTruthy();
    });
    it("should initialize a wash cycle with four washes", async () => {
        const inMemoryWashCycleRepo = new InMemoryWashCycleRepository();
        const inMemoryWashRepo = new InMemoryWashRepository();
        const initializeWash = new InitializeCycle(inMemoryWashCycleRepo, inMemoryWashRepo);
        const startDate = dateManipulator.parseDateToString(new Date());
        const endDate = dateManipulator.addMonthsToDate(startDate, 1);
        const { washCycle } = await initializeWash.execute({
            endDate,
            startDate,
            vehicleId: "some-vehicle-id",
            washes: [
                { scheduledDate: startDate, isCompleted: true },
                { scheduledDate: dateManipulator.addDaysToDate(startDate, 7) },
                { scheduledDate: dateManipulator.addDaysToDate(startDate, 14) },
                { scheduledDate: dateManipulator.addDaysToDate(startDate, 21) },
            ],
        });
        expect(washCycle.washesId).toHaveLength(4);
    });
});
