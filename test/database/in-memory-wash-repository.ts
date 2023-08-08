import type { Wash } from "domain/modules/wash/entities/Wash";
import type { WashRepository } from "domain/modules/wash/repositories/wash-repository";

export class InMemoryWashRepository implements WashRepository {
  private washes: Wash[] = [];

  async findWashesByCycleId(cycleId: string): Promise<Wash[]> {
    const washes = this.washes.filter((w) => w.cycleId === cycleId);
    return washes;
  }
  async create(wash: Wash): Promise<Wash> {
    this.washes.push(wash);
    return wash;
  }

  async findById(id: string): Promise<Wash | null> {
    const findedWash = this.washes.find((w) => w.id === id);
    return findedWash || null;
  }
  async update(
    id: string,
    { isCompleted, note, scheduleDate }: Partial<Wash>,
  ): Promise<Wash | null> {
    const i = this.washes.findIndex((w) => w.id === id);

    this.washes[i].isCompleted =
      typeof isCompleted === "boolean"
        ? isCompleted
        : this.washes[i].isCompleted;
    this.washes[i].note = note;
    this.washes[i].scheduleDate =
      typeof scheduleDate === "string"
        ? scheduleDate
        : this.washes[i].scheduleDate;

    return this.washes[i];
  }
}
