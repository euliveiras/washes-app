import type { User } from "../entities/User";
import type { UserRepository } from "../repositories/user-repository";

export class CreateSession {
    constructor(private userDB: UserRepository) {}

    async execute(user: User): Promise<{ token: string }> {
        const token = user.createSession();

        await this.userDB.update(user.id, { sessions: user.sessions });

        return { token };
    }
}
