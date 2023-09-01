import type { WashRepository } from "../repositories/wash-repository";

type FindWashesDTO = {
  filters: {
    vehicleId?: string;
    isCompleted?: boolean;
    startDate?: string;
    endDate?: string;
    createdBy: string;
  };
  cursor?: { id?: string };
  take?: number;
  skip?: number;
};

export class FindWashes {
  constructor(private washRepo: WashRepository) {}

  async execute(filters: FindWashesDTO) {
    const washes = await this.washRepo.findWashes(filters);
    return { washes };
  }
}
