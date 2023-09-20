import type { Wash } from "../entities/Wash";
import type { WashRepository } from "../repositories/wash-repository";

export class FindWashesByCycleId {
  constructor(private washRepo: WashRepository) {}

  async execute(id: string): Promise<{ washes: Wash[] }> {
    const washes = await this.washRepo.findWashesByCycleId(id);
    return { washes };
  }
}
