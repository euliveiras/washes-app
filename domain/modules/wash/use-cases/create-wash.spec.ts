import { beforeAll, describe, expect, it } from "vitest";
import { CreateWash } from "./create-wash";
import { InMemoryWashRepository } from "test/database/in-memory-wash-repository";
import { InMemoryWashCycleRepository } from "test/database/in-memory-wash-cycle-repository.ts";
import { Wash } from "../entities/Wash";
import { InitializeCycle } from "domain/modules/wash-cycle/use-cases/initialize-cycle";
import { dateManipulator } from "domain/shared/date-manipulator";

let inMemoryWashRepo: InMemoryWashRepository;
let inMemoryWashCycleRepo: InMemoryWashCycleRepository;
let createWash: CreateWash;
let initializeCycle: InitializeCycle;
let date: Date;
let parsedDateToISOString: string;

describe("New wash", () => {
    beforeAll(() => {
        inMemoryWashRepo = new InMemoryWashRepository();
        inMemoryWashCycleRepo = new InMemoryWashCycleRepository();
        createWash = new CreateWash(inMemoryWashRepo, inMemoryWashCycleRepo);
        initializeCycle = new InitializeCycle(inMemoryWashCycleRepo, inMemoryWashRepo);
        date = new Date();
        parsedDateToISOString = dateManipulator.parseDateToString(date);
    });
    it("should create a new wash", async () => {
        const { washCycle } = await initializeCycle.execute({
            startDate: parsedDateToISOString,
            endDate: dateManipulator.addMonthsToDate(parsedDateToISOString, 1),
            vehicleId: "some-vehicle-id",
        });
        const { wash } = await createWash.execute({
            scheduleDate: dateManipulator.addDaysToDate(parsedDateToISOString, 2),
            vehicleId: "some-vehicle-id",
            cycleId: washCycle.id,
        });

        expect(wash).toBeInstanceOf(Wash);
    });
    it("should not create a wash when scheduled date is before start cycle date", async () => {
        const { washCycle } = await initializeCycle.execute({
            startDate: parsedDateToISOString,
            endDate: dateManipulator.addMonthsToDate(parsedDateToISOString, 1),
            vehicleId: "some-vehicle-id",
        });
        await expect(() =>
            createWash.execute({
                scheduleDate: new Date("2020, 05, 01").toISOString(),
                vehicleId: "some-vehicle-id",
                cycleId: washCycle.id,
            })
        ).rejects.toThrow();
    });
    it("should not create a wash when scheduled date is after end cycle date", async () => {
        const { washCycle } = await initializeCycle.execute({
            startDate: parsedDateToISOString,
            endDate: dateManipulator.addMonthsToDate(parsedDateToISOString, 1),
            vehicleId: "some-vehicle-id",
        });
        await expect(() =>
            createWash.execute({
                scheduleDate: dateManipulator.addMonthsToDate(parsedDateToISOString, 2),
                vehicleId: "some-vehicle-id",
                cycleId: washCycle.id,
            })
        ).rejects.toThrow();
    });
    it("it should add wash to wash-cycle", async () => {
        const { washCycle } = await initializeCycle.execute({
            startDate: parsedDateToISOString,
            endDate: dateManipulator.addMonthsToDate(parsedDateToISOString, 2),
            vehicleId: "some-vehicle-id",
        });
        const { wash } = await createWash.execute({
            scheduleDate: dateManipulator.addMonthsToDate(parsedDateToISOString, 1),
            vehicleId: "some-vehicle-id",
            cycleId: washCycle.id,
        });

        expect(washCycle.washesId).contains(wash.id);
    });
    it("it should throw an error when given date already has a scheduled wash", async () => {
        const { washCycle } = await initializeCycle.execute({
            startDate: parsedDateToISOString,
            endDate: dateManipulator.addMonthsToDate(parsedDateToISOString, 1),
            vehicleId: "some-vehicle-id",
        });
        await createWash.execute({
            scheduleDate: dateManipulator.addDaysToDate(parsedDateToISOString, 7),
            vehicleId: "some-vehicle-id",
            cycleId: washCycle.id,
        });

        await expect(() =>
            createWash.execute({
                scheduleDate: dateManipulator.addDaysToDate(parsedDateToISOString, 7),
                vehicleId: "some-vehicle-id",
                cycleId: washCycle.id,
            })
        ).rejects.toThrow();
    });
});
