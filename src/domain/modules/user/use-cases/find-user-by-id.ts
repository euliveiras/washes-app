import type { User } from "../entities/User";
import type { UserRepository } from "../repositories/user-repository";

export class FindUserById {
    constructor(private userDB: UserRepository) {}

    async execute(id: string): Promise<{ user: User }> {
        const user = await this.userDB.find({ id });

        if (!user) throw new Error("User not founded");

        return { user };
    }
}
