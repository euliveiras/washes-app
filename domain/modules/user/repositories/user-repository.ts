import type { User } from "../entities/User";

export abstract class UserRepository {
    abstract create(user: User): Promise<void>;
}
