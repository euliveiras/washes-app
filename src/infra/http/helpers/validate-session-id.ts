import type { User } from "domain/modules/user/entities/User";
import { ValidateSession } from "domain/modules/user/use-cases/validate-session";
import { PrismaUserRepository } from "src/infra/database/prisma/repositories/user-repository";

export async function validateSessionId({ sessionId }: { sessionId: string }) {
    try {
        const prismaUserRepository = new PrismaUserRepository();
        const validateSession = new ValidateSession(prismaUserRepository);

        const { user } = await validateSession.execute(sessionId);

        return { user };
    } catch (err: unknown) {
        if (err instanceof Error) {
            return { error: err.message };
        }
        return { error: "something went wrong" };
    }
}
