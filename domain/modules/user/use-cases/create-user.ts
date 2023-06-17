import { User } from "../entities/User";
import type { UserRepository } from "../repositories/user-repository";

type CreateUserDTO = {
    username: string;
    password: string;
    email: string;
    role: "ADMIN" | "COLAB";
};

export class CreateUser {
    constructor(private userDB: UserRepository) {}

    async execute(data: CreateUserDTO): Promise<{ user: User }> {
        const user = new User(data);

        await this.userDB.create(user);

        return { user };
    }
}
