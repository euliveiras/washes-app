import { PrismaWashCycleRepository } from "../../database/prisma/repositories/wash-cycle-repository";
import { PrismaWashRepository } from "../../database/prisma/repositories/washes-repository";
import { InitializeCycle } from "../../../domain/modules/wash-cycle/use-cases/initialize-cycle";
import type { AsyncWrapperError } from "../utils/async-wrapper";
import { asyncWrapper } from "../utils/async-wrapper";
import { HttpMapper } from "../mappers/http-mapper";

type WashesDTO = {
  scheduleDate: string;
  note?: string;
  isCompleted: boolean;
}[];
type ControllerDTO = {
  vehicleId: string;
  createdBy: string;
  washes: WashesDTO;
};

async function controller({ createdBy, vehicleId, washes }: ControllerDTO) {
  const washCycleRepo = new PrismaWashCycleRepository();
  const washRepo = new PrismaWashRepository();
  const initializeCycle = new InitializeCycle(washCycleRepo, washRepo);

  const data = await initializeCycle.execute({
    createdBy,
    vehicleId,
    washes,
  });

  return {
    washCycle: HttpMapper.washCycle(data.washCycle),
    washes: data.washes?.map((w) => HttpMapper.wash(w)),
  };
}

interface InitializeCycleDTO extends AsyncWrapperError {
  washes: any;
  washCycle: any;
}

export function initializeCycleController(
  data: ControllerDTO,
): InitializeCycleDTO {
  return asyncWrapper(() => controller(data));
}
