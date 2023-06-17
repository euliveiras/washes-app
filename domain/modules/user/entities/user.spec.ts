import { describe, expect, it } from "vitest";
import { User } from "./user";

describe("User", () => {
    it("should create a user", () => {
        const user = new User({
            username: "euliveiras",
            password: "my-pswd",
            role: "ADMIN",
            email: "my-email",
        });

        expect(user).toBeInstanceOf(User);
    });
});
