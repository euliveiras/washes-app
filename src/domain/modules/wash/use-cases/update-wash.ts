import type {
  WashRepository,
  UpdateWashRepoAbstractMethodDTO,
} from "../repositories/wash-repository";

export class UpdateWash {
  constructor(private washRepo: WashRepository) {}

  async execute(dto: UpdateWashRepoAbstractMethodDTO) {
    const wash = await this.washRepo.updateWash(dto);
    return { wash };
  }
}
