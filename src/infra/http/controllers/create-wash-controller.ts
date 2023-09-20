import { PrismaWashCycleRepository } from "../../database/prisma/repositories/wash-cycle-repository";
import { PrismaWashRepository } from "../../database/prisma/repositories/washes-repository";
import { CreateWash } from "../../../domain/modules/wash/use-cases/create-wash";
import type { AsyncWrapperError } from "../utils/async-wrapper";
import { asyncWrapper } from "../utils/async-wrapper";
import type { HttpWash } from "../mappers/http-mapper";
import { HttpMapper } from "../mappers/http-mapper";

type ControllerDTO = {
  vehicleId: string;
  scheduleDate: string;
  cycleId: string;
  note?: string;
  createdBy: string;
  isCompleted: boolean;
};

async function controller(data: ControllerDTO) {
  const washCycleRepo = new PrismaWashCycleRepository();
  const washRepo = new PrismaWashRepository();
  const createWash = new CreateWash(washRepo, washCycleRepo);

  const { wash } = await createWash.execute(data);

  return {
    washes: HttpMapper.wash(wash),
  };
}

interface InitializeCycleDTO extends AsyncWrapperError {
  wash: HttpWash;
}

export function createWashController(data: ControllerDTO): InitializeCycleDTO {
  return asyncWrapper(() => controller(data));
}

