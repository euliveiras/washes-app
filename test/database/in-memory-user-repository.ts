import type { User } from "domain/modules/user/entities/User";
import type { UserRepository } from "domain/modules/user/repositories/user-repository";

export class InMemoryUserRepository implements UserRepository {
    private data: User[] = [];

    async create(data: User): Promise<void> {
        this.data.push(data);
    }

    async find(query: { id?: string; email?: string; username?: string }): Promise<User | null> {
        const findedUser = this.data.find((i) => {
            return i.id === query.id || i.email === query.email;
        });

        return findedUser ?? null;
    }

    async update(userId: string, data: Partial<User>): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
