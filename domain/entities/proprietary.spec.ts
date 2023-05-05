import { makeProprietary } from "test/factories/makeProprietary";
import { describe, expect, it } from "vitest";
import { Proprietary } from "./Proprietary";

describe("Proprietary", () => {
    it("should create a proprietary", () => {
        const proprietary = makeProprietary();

        expect(proprietary).toBeInstanceOf(Proprietary);
    });
});
