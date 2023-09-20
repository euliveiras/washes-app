import { ValidateSession } from "domain/modules/user/use-cases/validate-session";
import { PrismaUserRepository } from "src/infra/database/prisma/repositories/user-repository";
import { toHttp } from "../mappers/http-mapper";

export async function validateSessionId({ sessionId }: { sessionId: string }) {
  try {
    const prismaUserRepository = new PrismaUserRepository();
    const validateSession = new ValidateSession(prismaUserRepository);

    const { user } = await validateSession.execute(sessionId);

    return { user: toHttp(user) };
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { error: err.message };
    }
    return { error: "something went wrong" };
  }
}
