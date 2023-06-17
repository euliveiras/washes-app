import { expect, it, describe } from "vitest";
import { CreateUser } from "./create-user";
import { InMemoryUserRepository } from "test/database/in-memory-user-repository";
import { CreateSession } from "./create-session";
import { ValidateSession } from "./validate-session";

describe("Validate session token", () => {
    it("should validate session token", async () => {
        const inMemoryUserRepository = new InMemoryUserRepository();
        const createUser = new CreateUser(inMemoryUserRepository);
        const createSession = new CreateSession(inMemoryUserRepository);
        const validateSession = new ValidateSession();

        const { user } = await createUser.execute({
            username: "euliveiras",
            password: "123456123",
            email: "matheus.skm@hotmail.com",
            role: "ADMIN",
        });

        const { token } = await createSession.execute(user);

        const isTokenValid = validateSession.execute(token, user);

        expect(isTokenValid).toBeTruthy();
    });
    it("should throw if session token is invalid", async () => {
        const inMemoryUserRepository = new InMemoryUserRepository();
        const createUser = new CreateUser(inMemoryUserRepository);
        const createSession = new CreateSession(inMemoryUserRepository);
        const validateSession = new ValidateSession();

        const { user } = await createUser.execute({
            username: "euliveiras",
            password: "123456123",
            email: "matheus.skm@hotmail.com",
            role: "ADMIN",
        });

        await createSession.execute(user);

        expect(() => validateSession.execute("fake-id", user)).toThrow();
    });
});
