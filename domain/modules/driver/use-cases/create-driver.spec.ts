import { describe, expect, it } from "vitest";
import { CreateDriver } from "./create-driver";
import { Driver } from "../entities/Driver";
import { InMemoryDriverRepository } from "test/database/in-memory-driver-repository";
import { makeDriver } from "test/factories/makeDriver";

describe("Create driver", () => {
    it("should create a driver", async () => {
        const inMemoryDriverRepository = new InMemoryDriverRepository();
        const createDriver = new CreateDriver(inMemoryDriverRepository);

        const { driver } = await createDriver.execute(makeDriver());
        expect(driver).toBeInstanceOf(Driver);
    });
});
