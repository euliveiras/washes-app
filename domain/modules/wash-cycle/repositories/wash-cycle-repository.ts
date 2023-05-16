import type { WashCycle } from "../entities/WashCycle";
import type { InitializeCycleProps } from "../interfaces/initialize-cycle";

export abstract class WashCycleRepository {
    abstract create(cycle: InitializeCycleProps): Promise<WashCycle>;
}
