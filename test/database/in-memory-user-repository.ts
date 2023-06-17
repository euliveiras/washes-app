import type { User } from "domain/modules/user/entities/User";
import type { UserRepository } from "domain/modules/user/repositories/user-repository";

export class InMemoryUserRepository implements UserRepository {
    private data: User[] = [];

    async create(data: User): Promise<void> {
        this.data.push(data);
    }

    async find(id: string): Promise<User | null> {
        const findedUser = this.data.find((i) => i.id === id);

        return findedUser ?? null;
    }
}
