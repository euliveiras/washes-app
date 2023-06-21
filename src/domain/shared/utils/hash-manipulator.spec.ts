import { describe, expect, it } from "vitest";
import { hashManipulator } from "./hash-manipulator";

describe("Hash manipulator", () => {
    it("should create a hash from a str", async () => {
        const hash = await hashManipulator.generateHashFromStr("random-id");

        expect(hash).toBeDefined();
    });
    it("should return true if hash contains the given str", async () => {
        const hash = await hashManipulator.generateHashFromStr("random-id");

        await expect(
            hashManipulator.compareStrToHashedStr("random-id", hash)
        ).resolves.toBeTruthy();
    });
});
