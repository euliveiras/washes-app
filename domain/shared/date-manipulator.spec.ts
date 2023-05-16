import { describe, expect, it } from "vitest";
import { dateManipulator } from "./date-manipulator";

describe("Date manipulation", () => {
    it("should return true a date is after another comparation date", () => {
        const dateX = new Date(2023, 5, 15).toISOString();
        const dateY = new Date().toISOString();
        expect(dateManipulator.isAfter(dateX, dateY)).toBeTruthy();
    });
});
