import { expect, it, describe, vi } from "vitest";
import { CreateUser } from "./create-user";
import { InMemoryUserRepository } from "test/database/in-memory-user-repository";
import { CreateSession } from "./create-session";
import { RemoveSession } from "./remove-session";
import { HashManipulator } from "domain/shared/utils/hash-manipulator";

describe("Remove session token", () => {
    vi.spyOn(HashManipulator, "compareStrToHashedStr").mockImplementation(
        async (str1: string, str2: string) => {
            return str1 === str2;
        }
    );
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

        await createSession.execute(user);
        await createSession.execute(user);
        await createSession.execute(user);

        const { user: userWithoutSession } = await removeSession.execute(user);

        expect(userWithoutSession.sessionId).toBeFalsy();
    });
});
