import { expect, it, describe } from "vitest";
import { CreateUser } from "./create-user";
import { InMemoryUserRepository } from "test/database/in-memory-user-repository";
import { CreateSession } from "./create-session";

describe("Create user session", () => {
    it("should create a user session", async () => {
        const inMemoryUserRepository = new InMemoryUserRepository();
        const createUser = new CreateUser(inMemoryUserRepository);
        const createSession = new CreateSession(inMemoryUserRepository);

        const { user } = await createUser.execute({
            username: "euliveiras",
            password: "123456",
            email: "matheus.skm@hotmail.com",
            role: "ADMIN",
        });

        const { token } = await createSession.execute(user);

        expect(token).toBeDefined();
    });
});
