import { PrismaWashRepository } from "../../database/prisma/repositories/washes-repository";
import { UpdateWash } from "../../../domain/modules/wash/use-cases/update-wash";
import { asyncWrapper } from "../utils/async-wrapper";
import { AppError } from "../errors/app-error";
import { HttpMapper } from "../mappers/http-mapper";

type DTO = {
  id: string;
  data: {
    isCompleted?: boolean;
    note?: string;
    scheduleDate?: string;
  };
};

async function controller({ data, id }: DTO) {
  const washRepo = new PrismaWashRepository();
  const updateWash = new UpdateWash(washRepo);

  if (!id) throw new AppError("Você fornecer o id da lavagem", 400);

  if (typeof data.isCompleted === "boolean" || data.note || data.scheduleDate) {
    const { wash } = await updateWash.execute({ data, id });

    return { wash: HttpMapper.wash(wash) };
  }

  throw new AppError(
    "Você precisar fornecer pelo menos um campo para update",
    400,
  );
}

export const updateWashController = (data: DTO) => {
  return asyncWrapper(() => controller(data));
};
