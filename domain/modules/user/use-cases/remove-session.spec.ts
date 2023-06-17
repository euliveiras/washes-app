import { expect, it, describe } from "vitest";
import { CreateUser } from "./create-user";
import { InMemoryUserRepository } from "test/database/in-memory-user-repository";
import { CreateSession } from "./create-session";
import { RemoveSession } from "./remove-session";

describe("Remove session", () => {
    it("should remove session token", async () => {
        const inMemoryUserRepository = new InMemoryUserRepository();
        const createUser = new CreateUser(inMemoryUserRepository);
        const createSession = new CreateSession(inMemoryUserRepository);
        const removeSession = new RemoveSession(inMemoryUserRepository);

        const { user } = await createUser.execute({
            username: "euliveiras",
            password: "123456123",
            email: "matheus.skm@hotmail.com",
            role: "ADMIN",
        });

        const { token } = await createSession.execute(user);
        await createSession.execute(user);
        await createSession.execute(user);

        const { user: userWithoutSession } = await removeSession.execute(token, user);

        expect(userWithoutSession.sessions).not.toContain(token);
    });
});
