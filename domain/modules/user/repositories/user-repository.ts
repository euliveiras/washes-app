import type { User } from "../entities/User";

export abstract class UserRepository {
    abstract create(user: User): Promise<void>;
    abstract find(query: { username?: string; id?: string; email?: string }): Promise<User | null>;
}
