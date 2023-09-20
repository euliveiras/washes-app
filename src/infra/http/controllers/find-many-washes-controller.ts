import { PrismaWashRepository } from "../../database/prisma/repositories/washes-repository";
import { FindWashes } from "domain/modules/wash/use-cases/find-washes";
import { HttpMapper } from "../mappers/http-mapper";
import { asyncWrapper } from "../utils/async-wrapper";
import { AppError } from "../errors/app-error";

type DTO = {
  filters: {
    vehicleId?: string;
    status?: "ALL" | "COMPLETED" | "INCOMPLETED";
    startDate?: string;
    endDate?: string;
    createdBy: string;
  };
  cursor?: { id?: string };
  take?: number;
  skip?: number;
};

async function controller({
  filters: { createdBy, endDate, startDate, status: washStatus, vehicleId },
  skip,
  cursor,
  take,
}: DTO) {
  const washRepo = new PrismaWashRepository();
  const findWashes = new FindWashes(washRepo);

  if (!createdBy)
    throw new AppError("Você precisar fornecer o campo 'createdBy", 400);

  const isCompleted =
    washStatus === "ALL" || !washStatus
      ? undefined
      : washStatus === "COMPLETED";

  const { washes } = await findWashes.execute({
    filters: {
      createdBy,
      vehicleId,
      endDate,
      startDate,
      isCompleted,
    },
    skip,
    take,
    cursor,
  });

  return { washes: washes.map((w) => HttpMapper.wash(w)) };
}

export const findManyWashesController = (data: DTO) => {
  return asyncWrapper(() => controller(data));
};
