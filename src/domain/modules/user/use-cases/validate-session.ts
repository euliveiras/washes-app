import type { User } from "../entities/User";
import type { UserRepository } from "../repositories/user-repository";

export class ValidateSession {
    constructor(private userDB: UserRepository) {}
    async execute(sessionId: string): Promise<{ user: User }> {
        const user = await this.userDB.findBySessionId(sessionId);

        if (!user) throw new Error("Token is invalid");

        return { user };
    }
}
