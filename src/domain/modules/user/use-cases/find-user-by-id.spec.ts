import { expect, it, describe } from "vitest";
import { InMemoryUserRepository } from "test/database/in-memory-user-repository";
import { FindUserById } from "./find-user-by-id";
import { CreateUser } from "./create-user";
import { User } from "../entities/User";

describe("Find user", () => {
    it("should find a user with a given id", async () => {
        const inMemoryRepo = new InMemoryUserRepository();
        const createUser = new CreateUser(inMemoryRepo);
        const findUserById = new FindUserById(inMemoryRepo);

        const { user } = await createUser.execute({
            email: "fake-email",
            password: "123",
            role: "COLAB",
            username: "jdoe",
        });
        const { user: findedUser } = await findUserById.execute(user.id);

        expect(findedUser).toBeInstanceOf(User);
        await expect(findUserById.execute("")).rejects.toThrow();
    });
});
