import { describe, expect, it } from "vitest";
import { CreateWash } from "./create-wash";
import { InMemoryWashRepository } from "test/database/in-memory-wash-repository";
import { WashCycle } from "domain/modules/wash-cycle/entities/WashCycle";
import { InMemoryWashCycleRepository } from "test/database/in-memory-wash-cycle-repository.ts";
import { Wash } from "../entities/Wash";
import { InitializeCycle } from "domain/modules/wash-cycle/use-cases/initialize-cycle";
import { dateManipulator } from "domain/shared/date-manipulator";

describe("New wash", () => {
    it("should create a new wash", async () => {
        const inMemoryWashRepo = new InMemoryWashRepository();
        const inMemoryWashCycleRepo = new InMemoryWashCycleRepository();
        const createWash = new CreateWash(inMemoryWashRepo, inMemoryWashCycleRepo);
        const initializeCycle = new InitializeCycle(inMemoryWashCycleRepo);
        const date = dateManipulator.parseDateToString(new Date());
        const { washCycle } = await initializeCycle.execute({
            startDate: date,
            endDate: dateManipulator.addMonthsToDate(date, 1),
            vehicleId: "some-vehicle-id",
        });
        const { wash } = await createWash.execute({
            scheduleDate: new Date("2023, 05, 01").toISOString(),
            vehicleId: "some-vehicle-id",
            cycleId: washCycle.id,
        });

        expect(wash).toBeInstanceOf(Wash);
    });
});
