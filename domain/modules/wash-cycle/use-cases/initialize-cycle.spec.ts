import { describe, expect, it } from "vitest";
import { InitializeCycle } from "./initialize-cycle";
import { InMemoryWashCycleRepository } from "test/database/in-memory-wash-cycle-repository.ts";

describe("New wash", () => {
    it("should initialize a wash cycle", async () => {
        const inMemoryWashCycleRepo = new InMemoryWashCycleRepository();
        const initializeWash = new InitializeCycle(inMemoryWashCycleRepo);
        const { washCycle } = await initializeWash.execute({
            endDate: new Date(2024, 1, 1).toISOString(),
            startDate: new Date().toISOString(),
            vehicleId: "some-vehicle-id",
        });

        expect(washCycle).toBeTruthy();
    });
});
