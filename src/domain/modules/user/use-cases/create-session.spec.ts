import { expect, it, describe, vi } from "vitest";
import { CreateUser } from "./create-user";
import { InMemoryUserRepository } from "test/database/in-memory-user-repository";
import { CreateSession } from "./create-session";
import { HashManipulator } from "domain/shared/utils/hash-manipulator";

describe("Create user session token", () => {
    vi.spyOn(HashManipulator, "compareStrToHashedStr").mockImplementation(
        async (str1: string, str2: string) => {
            return str1 === str2;
        }
    );
    it("should create a user session token", async () => {
        const inMemoryUserRepository = new InMemoryUserRepository();
        const createUser = new CreateUser(inMemoryUserRepository);
        const createSession = new CreateSession(inMemoryUserRepository);

        const { user } = await createUser.execute({
            username: "euliveiras",
            password: "123456",
            email: "matheus.skm@hotmail.com",
            role: "ADMIN",
        });

        const { sessionId } = await createSession.execute(user);

        console.log(sessionId);
        expect(sessionId).toBeDefined();
    });
});
