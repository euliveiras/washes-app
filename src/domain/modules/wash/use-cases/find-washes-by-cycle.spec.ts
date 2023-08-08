import { describe, expect, it } from "vitest";
import { FindWashesByCycleId } from "./find-washes-by-cycle-id";
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
    const createWash = new CreateWash(
      inMemoryWashRepository,
      inMemoryWashCycleRepository,
    );
    const initializeCycle = new InitializeCycle(
      inMemoryWashCycleRepository,
      inMemoryWashRepository,
    );
    const findWashesByCycleId = new FindWashesByCycleId(inMemoryWashRepository);

    const {washCycle: secondCycle} = await initializeCycle.execute({
      startDate: dateManipulator.parseDateToString(new Date()),
      endDate: dateManipulator.addMonthsToDate(
        dateManipulator.parseDateToString(new Date()),
        1,
      ),
      vehicleId: "fake-id",
    });

    const { washCycle } = await initializeCycle.execute({
      startDate: dateManipulator.parseDateToString(new Date()),
      endDate: dateManipulator.addMonthsToDate(
        dateManipulator.parseDateToString(new Date()),
        1,
      ),
      vehicleId: "fake-id",
    });

    await createWash.execute({
      cycleId: washCycle.id,
      scheduleDate: dateManipulator.addDaysToDate(
        dateManipulator.parseDateToString(new Date()),
        1,
      ),
      vehicleId: "fake-id",
    });
    await createWash.execute({
      cycleId: washCycle.id,
      scheduleDate: dateManipulator.addDaysToDate(
        dateManipulator.parseDateToString(new Date()),
        2,
      ),
      vehicleId: "fake-id",
    });
    await createWash.execute({
      cycleId: secondCycle.id,
      scheduleDate: dateManipulator.addDaysToDate(
        dateManipulator.parseDateToString(new Date()),
        1,
      ),
      vehicleId: "fake-id",
    });
console.log(washCycle, secondCycle)

    const {washes} = await findWashesByCycleId.execute(washCycle.id);
    const {washes: secondCycleWashes} = await findWashesByCycleId.execute(secondCycle.id);

    expect(washes).toHaveLength(2)
    expect(secondCycleWashes).toHaveLength(1)
  });
});
