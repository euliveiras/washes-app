import { hashManipulator } from "domain/shared/utils/hash-manipulator";
import type { UserRepository } from "../repositories/user-repository";
import { User } from "../entities/User";

export class CreateSession {
    constructor(private userDB: UserRepository) {}

    async execute({
        email,
        password,
    }: {
        email: string;
        password: string;
    }): Promise<{ token: string; user: User }> {
        const user = await this.userDB.find({ email });

        if (!user) {
            console.log("user not founded");
            throw new Error("Credentials not valid");
        }

        const isPasswordValid = await hashManipulator.compareStrToHashedStr(
            password,
            user.password
        );

        if (!isPasswordValid) {
            console.log("password not valid");
            throw new Error("Credentials not valid");
        }

        const token = user.createSession();

        await this.userDB.update(user.id, { sessions: user.sessions });

        return { token, user };
    }
}
