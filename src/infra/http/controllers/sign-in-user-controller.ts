import { CreateSession } from "domain/modules/user/use-cases/create-session";
import { PrismaUserRepository } from "src/infra/database/prisma/repositories/user-repository";

type SignInUserController = {
    email: string;
    password: string;
};
export async function signInUserController({ email, password }: SignInUserController) {
    try {
        const prismaUserRepository = new PrismaUserRepository();
        const createSession = new CreateSession(prismaUserRepository);
        const { token, user } = await createSession.execute({ email, password });

        return { token, user };
    } catch (err: unknown) {
        if (err instanceof Error) {
            return { error: err.message };
        }
        return { error: "something went wrong" };
    }
}
