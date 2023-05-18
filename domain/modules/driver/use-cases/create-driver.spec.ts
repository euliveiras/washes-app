import { describe, expect, it } from "vitest";
import { CreateDriver } from "./create-driver";
import { Driver } from "../entities/Driver";
import { makeDriver } from "test/factories/makeDriver";

describe("Create driver", () => {
    it("should create a driver", async () => {
        const createDriver = new CreateDriver();

        const { driver } = await createDriver.execute(makeDriver());
        expect(driver).toBeInstanceOf(Driver);
    });
});
