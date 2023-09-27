import { FindWashById } from "../../../../domain/modules/wash/use-cases/find-wash-by-id";
import { PrismaWashRepository } from "../repositories/washes-repository";
import {
  asyncWrapper,
  AsyncWrapperError,
} from "../../../http/utils/async-wrapper";
import { HttpMapper } from "../";
type DTO = {
  id: string;
};

async function controller({ id }: DTO) {
  const washRepo = new PrismaWashRepository();
  const findWash = new FindWashById(washRepo);

  if (!id) throw new AppError("Você precisar fornecer o campo 'createdBy", 400);

  const { wash } = await findWash.execute(id);

  return { wash: HttpMapper.wash(wash) };
}

export const updateWashController = (data: DTO) => {
  return asyncWrapper(() => controller(data));
};
