import { describe, expect, it } from "vitest";
import { FindWashById } from "./find-wash-by-id";
import { InMemoryWashRepository } from "test/database/in-memory-wash-repository";
import { Wash } from "../entities/Wash";
import { CreateWash } from "./create-wash";
import { InMemoryWashCycleRepository } from "test/database/in-memory-wash-cycle-repository.ts";
import { InitializeCycle } from "domain/modules/wash-cycle/use-cases/initialize-cycle";
import { dateManipulator } from "domain/shared/date-manipulator";

describe("Find wash by id", () => {
    it("should find a wash from a given id", async () => {
        const inMemoryWashRepository = new InMemoryWashRepository();
        const inMemoryWashCycleRepository = new InMemoryWashCycleRepository();
        const createWash = new CreateWash(inMemoryWashRepository, inMemoryWashCycleRepository);
        const initializeCycle = new InitializeCycle(inMemoryWashCycleRepository);
        const findWashById = new FindWashById(inMemoryWashRepository);

        const { washCycle } = await initializeCycle.execute({
            startDate: dateManipulator.parseDateToString(new Date()),
            endDate: dateManipulator.addMonthsToDate(
                dateManipulator.parseDateToString(new Date()),
                1
            ),
            vehicleId: "fake-id",
        });

        const { wash } = await createWash.execute({
            cycleId: washCycle.id,
            scheduleDate: dateManipulator.addDaysToDate(
                dateManipulator.parseDateToString(new Date()),
                1
            ),
            vehicleId: "fake-id",
        });

        const data = await findWashById.execute(wash.id);

        expect(data.wash).toBeInstanceOf(Wash);
    });
});
