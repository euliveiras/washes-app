import type { User } from "../entities/User";
import type { UserRepository } from "../repositories/user-repository";

export class RemoveSession {
    constructor(private userDB: UserRepository) {}

    async execute(token: string, user: User): Promise<{ user: User }> {
        user.removeSession(token);

        await this.userDB.update(user.id, { sessions: user.sessions });

        return { user };
    }
}
