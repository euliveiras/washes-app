import { beforeAll, describe, expect, it } from "vitest";
import { CreateWash } from "./create-wash";
import { InMemoryWashRepository } from "test/database/in-memory-wash-repository";
import { InMemoryWashCycleRepository } from "test/database/in-memory-wash-cycle-repository.ts";
import { InitializeCycle } from "domain/modules/wash-cycle/use-cases/initialize-cycle";
import { dateManipulator } from "domain/shared/date-manipulator";
import { ConfirmWash } from "./confirm-wash";

let inMemoryWashRepo: InMemoryWashRepository;
let inMemoryWashCycleRepo: InMemoryWashCycleRepository;
let initializeCycle: InitializeCycle;
let createWash: CreateWash;
let confirmWash: ConfirmWash;
let date: Date;
let parsedDateToISOString: string;

describe("Confirm wash", () => {
    beforeAll(() => {
        inMemoryWashRepo = new InMemoryWashRepository();
        inMemoryWashCycleRepo = new InMemoryWashCycleRepository();
        initializeCycle = new InitializeCycle(inMemoryWashCycleRepo, inMemoryWashRepo);
        createWash = new CreateWash(inMemoryWashRepo, inMemoryWashCycleRepo);
        confirmWash = new ConfirmWash(inMemoryWashRepo, inMemoryWashCycleRepo);
        date = new Date();
        parsedDateToISOString = dateManipulator.parseDateToString(date);
    });
    it("should confirm a wash", async () => {
        const { washCycle } = await initializeCycle.execute({
            startDate: parsedDateToISOString,
            endDate: dateManipulator.addMonthsToDate(parsedDateToISOString, 1),
            vehicleId: "some-vehicle-id",
        });
        const { wash } = await createWash.execute({
            scheduleDate: dateManipulator.addDaysToDate(parsedDateToISOString, 7),
            vehicleId: "some-vehicle-id",
            cycleId: washCycle.id,
        });
        await confirmWash.execute(wash.id);
        expect(wash.isCompleted).toBeTruthy();
        expect(washCycle.completedWashes.includes(wash.id)).toBeTruthy();
    });
});
