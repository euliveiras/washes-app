import { describe, expect, it } from "vitest";
import { dateManipulator } from "./date-manipulator";

describe("Date manipulation", () => {
    it("should return true if a date is after another comparation date", () => {
        const dateX = new Date(2090, 4, 15).toISOString();
        const dateY = new Date().toISOString();
        expect(dateManipulator.isAfter(dateX, dateY)).toBeTruthy();
    });
    it("should return true if a date is before another comparation date", () => {
        const dateX = new Date(2090, 5, 15).toISOString();
        const dateY = new Date().toISOString();
        expect(dateManipulator.isBefore(dateY, dateX)).toBeTruthy();
    });

    it("should add a number of months to given date", () => {
        const date = dateManipulator.parseDateToString(new Date());
        const withMonthsAdd = dateManipulator.addMonthsToDate(date, 1);

        expect(dateManipulator.isBefore(date, withMonthsAdd)).toBeTruthy();
    });

    it("should parse a date to string", () => {
        expect(dateManipulator.parseDateToString(new Date())).toBeTypeOf("string");
    });
    it("should return true if date is sunday", () => {
        const date = dateManipulator.parseDateToString(new Date(2023, 4, 28));
        expect(dateManipulator.isSunday(date)).toBeTruthy();
    });
});
