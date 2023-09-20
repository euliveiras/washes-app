import { expect, it, describe, vi } from "vitest";
import { CreateUser } from "./create-user";
import { InMemoryUserRepository } from "test/database/in-memory-user-repository";
import { CreateSession } from "./create-session";
import { ValidateSession } from "./validate-session";
import { HashManipulator } from "domain/shared/utils/hash-manipulator";

describe("Validate session token", () => {
    vi.spyOn(HashManipulator, "compareStrToHashedStr").mockImplementation(
        async (str1: string, str2: string) => {
            return str1 === str2;
        }
    );
    it("should validate session token", async () => {
        const inMemoryUserRepository = new InMemoryUserRepository();
        const createUser = new CreateUser(inMemoryUserRepository);
        const createSession = new CreateSession(inMemoryUserRepository);
        const validateSession = new ValidateSession(inMemoryUserRepository);

        const { user } = await createUser.execute({
            username: "euliveiras",
            password: "123456123",
            email: "matheus.skm@hotmail.com",
            role: "ADMIN",
        });

        const { sessionId } = await createSession.execute(user);

        const { user: findedUser } = await validateSession.execute(sessionId);

        expect(findedUser).toBeTruthy();
    });
    it("should throw if session token is invalid", async () => {
        const inMemoryUserRepository = new InMemoryUserRepository();
        const createUser = new CreateUser(inMemoryUserRepository);
        const createSession = new CreateSession(inMemoryUserRepository);
        const validateSession = new ValidateSession(inMemoryUserRepository);

        const { user } = await createUser.execute({
            username: "euliveiras",
            password: "123456123",
            email: "matheus.skm@hotmail.com",
            role: "ADMIN",
        });

        await createSession.execute(user);

        expect(() => validateSession.execute("")).rejects.toThrow();
    });
});
