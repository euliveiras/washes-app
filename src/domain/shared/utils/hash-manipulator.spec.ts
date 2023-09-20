import { describe, expect, it } from "vitest";
import { HashManipulator } from "./hash-manipulator";

describe("Hash manipulator", () => {
    it("should create a hash from a str", async () => {
        const hash = await HashManipulator.generateHashFromStr("random-id");

        expect(hash).toBeDefined();
    });
    it("should return true if hash contains the given str", async () => {
        const hash = await HashManipulator.generateHashFromStr("random-id");

        await expect(
            HashManipulator.compareStrToHashedStr("random-id", hash)
        ).resolves.toBeTruthy();
    });
});
