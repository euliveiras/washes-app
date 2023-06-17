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

        const isEmailAlreadyInUse = await this.userDB.find({ email: user.email });

        if (isEmailAlreadyInUse) throw new Error("Email is already in use");

        await this.userDB.create(user);

        return { user };
    }
}
