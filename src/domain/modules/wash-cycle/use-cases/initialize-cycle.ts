import type { WashRepository } from "domain/modules/wash/repositories/wash-repository";
import { WashCycle } from "../entities/WashCycle";
import type { InitializeCycleProps } from "../interfaces/initialize-cycle";
import type { WashCycleRepository } from "../repositories/wash-cycle-repository";
import { Wash } from "domain/modules/wash/entities/Wash";
import { dateManipulator } from "domain/shared/date-manipulator";

function getMinMaxDate(dates: InitializeCycleProps["washes"]): any[] {
  const map = dates?.map((w) => w.scheduleDate);
  const arr = map?.reduce(
    (acc, v) => {
      if (!acc.min && !acc.max) {
        acc.min = v;
        acc.max = v;
      } else {
        if (!acc.min || !acc.max) return acc;
        const isBefore = dateManipulator.isBefore(v, acc.min);
        const isAfter = dateManipulator.isAfter(v, acc.max);
        if (isBefore) acc.min = v;
        if (isAfter) acc.max = v;
      }

      return acc;
    },
    { min: null, max: null } as { min: string | null; max: string | null },
  );
  return [arr?.min, arr?.max];
}

export class InitializeCycle {
  constructor(
    private db: WashCycleRepository,
    private washRepository: WashRepository,
  ) {}
  async execute({
    vehicleId,
    createdBy,
    washes: washesData,
  }: InitializeCycleProps): Promise<{ washCycle: WashCycle; washes?: Wash[] }> {
    const [startDate, endDate] = getMinMaxDate(washesData);
    const washCycle = new WashCycle({ endDate, startDate, vehicleId });
    let obj = { washes: [] as Wash[], washCycle };
    let data;

    if (washesData) {
      data = washesData.map(
        (w) =>
          new Wash({
            scheduleDate: w.scheduleDate,
            cycleId: washCycle.id,
            note: w.note,
            vehicleId,
            isCompleted: w.isCompleted ?? false,
            createdBy,
          }),
      );
      data.forEach((v) => washCycle.addWashId(v.id));
      obj.washes = data;
    }

    await this.db.create(washCycle);
    data && (await this.washRepository.createMany(data));
    return obj;
  }
}
