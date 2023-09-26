import { HashManipulator } from "domain/shared/utils/hash-manipulator";
import type { UserRepository } from "../repositories/user-repository";
import type { User } from "../entities/User";

export class CreateSession {
    constructor(private userDB: UserRepository) {}

    async execute({
        email,
        password,
    }: {
        email: string;
        password: string;
    }): Promise<{ sessionId: string; user: User }> {
        const user = await this.userDB.find({ email });

        if (!user) {
            console.log("user not founded");
            throw new Error("Credentials not valid");
        }

        const isPasswordValid = await HashManipulator.compareStrToHashedStr(
            password,
            user.password
        );

        if (!isPasswordValid) {
            console.log("password not valid");
            throw new Error("Credentials not valid");
        }

	if(!user.sessionId) user.createSession();

        if (!user.sessionId) throw new Error("Something went wrong with creation of token");

        await this.userDB.update({ id: user.id }, { sessionId: user.sessionId });

        return { sessionId: user.sessionId, user };
    }
}
