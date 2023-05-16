import { describe, expect, it } from "vitest";
import { Wash } from "./Wash";

describe("Wash", () => {
    it("should create a wash", () => {
        const wash = new Wash({
            cycleId: "some-cycle-id",
            id: "some-id",
            isCompleted: false,
            note: "",
            scheduleDate: new Date().toISOString(),
            vehicleId: "some-vehicle-id",
        });

        expect(wash).toBeTruthy();
    });
});
