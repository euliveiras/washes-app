import { PrismaUserRepository } from "../../database/prisma/repositories/user-repository";
import { RemoveSession } from "../../../domain/modules/user/use-cases/remove-session";
import type { AsyncWrapperError } from "../utils/async-wrapper";
import { asyncWrapper } from "../utils/async-wrapper";

export async function controller(props: { sessionId?: string }) {
  const prismaUserRepository = new PrismaUserRepository();
  const removeSession = new RemoveSession(prismaUserRepository);
  await removeSession.execute(props);
}

export const signOutController = (data: { sessionId: string }): AsyncWrapperError => {
  return asyncWrapper(() => controller(data));
};
