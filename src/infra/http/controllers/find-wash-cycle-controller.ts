import { PrismaWashCycleRepository } from "../../database/prisma/repositories/wash-cycle-repository";
import { FindWashCycle } from "../../../domain/modules/wash-cycle/use-cases/find-wash-cycle";
import { HttpMapper } from "../mappers/http-mapper";
import type { AsyncWrapperError } from "../utils/async-wrapper";
import { asyncWrapper } from "../utils/async-wrapper";
import type { WashCycle } from "../../../domain/modules/wash-cycle/entities/WashCycle";
import { AppError } from "../errors/app-error";

type FindWashCycleProps = {
  washesId?: string[];
};

async function controller(props: FindWashCycleProps) {
  const washCycleRepo = new PrismaWashCycleRepository();
  const findWashCycle = new FindWashCycle(washCycleRepo);

  const { washCycle } = await findWashCycle.execute(props);

  if (!washCycle) throw new AppError("O ciclo de lavagem não foi encontrado");

  return {
    washCycle: HttpMapper.washCycle(washCycle),
  };
}

export const findWashCycleController = (
  data: FindWashCycleProps,
): Promise<AsyncWrapperError & { washCycle: Partial<WashCycle> }> => {
  return asyncWrapper(() => controller(data));
};
