import { FindWashById } from "../../../domain/modules/wash/use-cases/find-wash-by-id";
import { PrismaWashRepository } from "../../database/prisma/repositories/washes-repository";
import type { AsyncWrapperError } from "../utils/async-wrapper";
import { asyncWrapper } from "../utils/async-wrapper";
import { HttpMapper } from "../mappers/http-mapper";
import { AppError } from "../errors/app-error";
import type { Wash } from "domain/modules/wash/entities/Wash";

type DTO = {
  id: string;
};

async function controller({ id }: DTO) {
  const washRepo = new PrismaWashRepository();
  const findWash = new FindWashById(washRepo);

  if (!id) throw new AppError("Você precisar fornecer o campo 'id", 400);

  const { wash } = await findWash.execute(id);

  return { wash: wash ? HttpMapper.wash(wash) : null };
}

interface ReturnValue extends AsyncWrapperError {
  wash: Partial<Wash>;
}

export const findWashByIdController = ({
  id,
}: {
  id: string;
}): Promise<ReturnValue> => {
  return asyncWrapper(() => controller({ id }));
};
