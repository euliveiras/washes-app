import { describe, expect, it } from "vitest";
import { CreateWash } from "./create-wash";
import { InMemoryWashRepository } from "test/database/in-memory-wash-repository";
import { WashCycle } from "domain/modules/wash-cycle/entities/WashCycle";
import { InMemoryWashCycleRepository } from "test/database/in-memory-wash-cycle-repository.ts";
import { Wash } from "../entities/Wash";
import { InitializeCycle } from "domain/modules/wash-cycle/use-cases/initialize-cycle";

describe("New wash", () => {
    it("should create a new wash", async () => {
        const inMemoryWashRepo = new InMemoryWashRepository();
        const inMemoryWashCycleRepo = new InMemoryWashCycleRepository();
        const createWash = new CreateWash(inMemoryWashRepo, inMemoryWashCycleRepo);
        const initializeCycle = new InitializeCycle(inMemoryWashCycleRepo);

        const { washCycle } = await initializeCycle.execute({
            startDate: new Date().toISOString(),
            endDate: new Date("2023, 10, 1").toISOString(),
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
