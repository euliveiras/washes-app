import { CreateUser } from "domain/modules/user/use-cases/create-user";
import { PrismaUserRepository } from "../../database/prisma/repositories/user-repository";
import { HashManipulator } from "domain/shared/utils/hash-manipulator";

type CreateUserController = {
    username: string;
    password: string;
    email: string;
};

export async function createUserController({ username, email, password }: CreateUserController) {
    try {
        const prismaUserRepository = new PrismaUserRepository();
        const createUser = new CreateUser(prismaUserRepository);
        const hashedPassword = await HashManipulator.generateHashFromStr(password);

        const { user } = await createUser.execute({
            username,
            password: hashedPassword,
            email,
            role: "COLAB",
        });

        return { user };
    } catch (err: unknown) {
        if (err instanceof Error) {
            return { error: err.message };
        }
        return { error: "something went wrong" };
    }
}
