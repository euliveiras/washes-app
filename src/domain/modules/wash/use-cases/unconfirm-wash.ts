import type { Wash } from "domain/modules/wash/entities/Wash";
import type { WashCycleRepository } from "domain/modules/wash-cycle/repositories/wash-cycle-repository";
import type { WashRepository } from "../repositories/wash-repository";
import { AppError } from "src/infra/http/errors/app-error";

export class UnconfirmWash {
  constructor(
    private washesRepo: WashRepository,
    private washesCycleRepo: WashCycleRepository,
  ) {}
  async execute(id: string): Promise<{ wash: Wash }> {
    const wash = await this.washesRepo.updateWash({
      id,
      data: { isCompleted: false },
    });

    if (!wash) {
      throw new Error("wash not founded");
    }

    const washCycle = await this.washesCycleRepo.find(wash?.cycleId);

    if (!washCycle) {
      await this.washesRepo.updateWash({
        id,
        data: { isCompleted: true },
      });
      throw new AppError("Something went wrong with wash cycle update");
    }

    washCycle.removeCompletedWash(wash.id);
    await this.washesCycleRepo.update(washCycle.id, washCycle);

    return { wash };
  }
}
