import { PrismaWashRepository } from "../../database/prisma/repositories/washes-repository";
import { PrismaWashCycleRepository } from "../../database/prisma/repositories/wash-cycle-repository";
import { UnconfirmWash } from "domain/modules/wash/use-cases/unconfirm-wash";
import { asyncWrapper } from "../utils/async-wrapper";
import { AppError } from "../errors/app-error";
import { HttpMapper } from "../mappers/http-mapper";

export const unconfirmWashController = ({ id }: { id: string }) =>
  asyncWrapper(async () => {
    const washRepo = new PrismaWashRepository();
    const washCycleRepo = new PrismaWashCycleRepository();
    const unconfirmWash = new UnconfirmWash(washRepo, washCycleRepo);

    if (!id)
      throw new AppError("Você precisar fornecer o campo 'createdBy", 400);

    const { wash } = await unconfirmWash.execute(id);

    return { wash: HttpMapper.wash(wash) };
  });
