import { FindNextCycleByLicensePlate } from "../../../domain/modules/wash-cycle/use-cases/find-next-cycle-by-license-plate";
import { PrismaWashCycleRepository } from "../../database/prisma/repositories/wash-cycle-repository";
import { PrismaWashRepository } from "../../database/prisma/repositories/washes-repository";
import { FindWashesByCycleId } from "domain/modules/wash/use-cases/find-washes-by-cycle-id";

export async function getNextWashesAndCycle(licensePlate: string) {
  try {
    const washCycleRepo = new PrismaWashCycleRepository();
    const washRepo = new PrismaWashRepository();
    const findNextCycleByLicensePlate = new FindNextCycleByLicensePlate(
      washCycleRepo,
    );
    const findWashesByCycleId = new FindWashesByCycleId(washRepo);

    const { washCycle } = await findNextCycleByLicensePlate.execute(
      licensePlate,
    );

    if (!washCycle) return { washCycle: null, washes: [] };

    const { washes } = await findWashesByCycleId.execute(washCycle.id);

    return { washCycle, washes };
  } catch (e: unknown) {
    if (e instanceof Error) {
      return { error: e.message };
    }

    return { error: "Unknow error" };
  }
}
