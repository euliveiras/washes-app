import type { User } from "domain/modules/user/entities/User";
import type { UserRepository } from "domain/modules/user/repositories/user-repository";
import { prisma } from "../prisma";
import { PrismaUserMapper } from "../mappers/prisma-user-mapper";

export class PrismaUserRepository implements UserRepository {
    private userMapper = new PrismaUserMapper();
    async create(user: User): Promise<void> {
        const mappedUSer = this.userMapper.toPrisma(user);
        await prisma.user.create({
            data: mappedUSer,
        });
    }

    async find({
        email,
        id,
        username,
    }: {
        username?: string | undefined;
        id?: string | undefined;
        email?: string | undefined;
    }): Promise<User | null> {
        const where = {
            email,
            id,
            username,
        };
        const user = await prisma.user.findUnique({ where });

        if (!user) {
            return null;
        }

        return this.userMapper.toDomain({
            ...user,
        });
    }
    async update(userId: string, data: Partial<User>): Promise<void> {
        await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                sessions: data.sessions?.toString(),
            },
        });
    }
}
