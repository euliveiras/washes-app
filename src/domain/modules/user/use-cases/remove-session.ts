import type { User } from "../entities/User";
import type { UserRepository } from "../repositories/user-repository";

export class RemoveSession {
    constructor(private userDB: UserRepository) {}

    async execute(user: User): Promise<{ user: User }> {
        user.removeSession();

        await this.userDB.update(user.id, { sessionId: user.sessionId });

        return { user };
    }
}
