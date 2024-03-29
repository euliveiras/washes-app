import type { User as RawUser } from "@prisma/client";
import { User } from "domain/modules/user/entities/User";

export class PrismaUserMapper {
    toDomain(raw: RawUser) {
        return new User({
            id: raw.id,
            username: raw.username,
            password: raw.password,
            email: raw.email,
            role: raw.role as "ADMIN" | "COLAB",
            createdAt: raw.createdAt,
            sessionId: raw.sessionId,
        });
    }
    toPrisma(user: User) {
        return {
            id: user.id,
            createdAt: user.createdAt,
            email: user.email,
            password: user.password,
            role: user.role,
            sessionId: user.sessionId,
            username: user.username,
        };
    }
}
