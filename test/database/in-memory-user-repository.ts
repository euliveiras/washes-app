import { User } from "domain/modules/user/entities/User";
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
        const i = this.data.findIndex((u) => u.id === userId);
        const findedUser = this.data[i];

        if (i < 0) {
            throw new Error("User not finded");
        }

        this.data[i] = new User({
            id: findedUser.id,
            username: findedUser.username,
            password: findedUser.password,
            email: findedUser.email,
            sessionId: findedUser.sessionId,
            role: findedUser.role,
            createdAt: findedUser.createdAt,
            ...data,
        });
    }
    async findBySessionId(sessionId: string): Promise<User | null> {
        const user = this.data.find((u) => u.sessionId === sessionId);

        return user ?? null;
    }
}
