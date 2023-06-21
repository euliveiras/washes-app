import { expect, it, describe } from "vitest";
import { CreateUser } from "./create-user";
import { InMemoryUserRepository } from "test/database/in-memory-user-repository";
import { User } from "../entities/User";

describe("Create user", () => {
    it("should create a user", async () => {
        const inMemoryUserRepository = new InMemoryUserRepository();
        const createUser = new CreateUser(inMemoryUserRepository);

        const { user } = await createUser.execute({
            username: "euliveiras",
            password: "123456",
            email: "matheus.skm@hotmail.com",
            role: "ADMIN",
        });

        expect(user).toBeInstanceOf(User);
    });
    it("should not create a user if email is already in use", async () => {
        const inMemoryUserRepository = new InMemoryUserRepository();
        const createUser = new CreateUser(inMemoryUserRepository);

        await createUser.execute({
            username: "euliveiras",
            password: "123456",
            email: "matheus.skm@hotmail.com",
            role: "ADMIN",
        });

        await expect(
            createUser.execute({
                username: "euliveiras",
                password: "123456",
                email: "matheus.skm@hotmail.com",
                role: "ADMIN",
            })
        ).rejects.toThrow();
    });
});
