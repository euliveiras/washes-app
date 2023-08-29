import { FindUniqueLicensePlate } from "domain/modules/vehicle/use-cases/find-unique-license-plate";
import { PrismaVehicleRepository } from "src/infra/database/prisma/repositories/vehicle-repository";
import { asyncWrapper } from "../utils/async-wrapper";
import { HttpMapper } from "../mappers/http-mapper";

type FindVehicleControllerDTO = {
  licensePlate: string;
};

async function controller({ licensePlate }: FindVehicleControllerDTO) {
  const prismaVehicleRepo = new PrismaVehicleRepository();

  const findVehicle = new FindUniqueLicensePlate(prismaVehicleRepo);
  const data = await findVehicle.execute({ plate: licensePlate });

  return { vehicle: data ? HttpMapper.vehicle(data) : null };
}

export async function findUniqueVehicleController(data: { licensePlate: string }) {
  return asyncWrapper(() => controller(data));
}
