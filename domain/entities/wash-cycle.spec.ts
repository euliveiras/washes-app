import { describe, expect, it } from "vitest";
import { WashCycle } from "./WashCycle";

describe("Wash Cycle", () => {
    it("should create a wash cycle", () => {
        const cycle = new WashCycle({
            completedWashes: [],
            startDate: new Date().toISOString(),
            endDate: new Date("2070-05-07").toISOString(),
            id: "some-id",
            note: null,
            vehicleId: "some-id",
            washesId: [],
        });

        expect(cycle).toBeInstanceOf(WashCycle);
    });
});
