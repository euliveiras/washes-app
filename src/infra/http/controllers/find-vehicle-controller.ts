import { FindLicensePlate } from "domain/modules/vehicle/use-cases/find-license-plate";
import { PrismaVehicleRepository } from "src/infra/database/prisma/repositories/vehicle-repository";
import { asyncWrapper } from "../utils/async-wrapper";
import { HttpMapper } from "../mappers/http-mapper";

type FindVehicleControllerDTO = {
  licensePlate: string;
};

async function controller({ licensePlate }: FindVehicleControllerDTO) {
  const prismaVehicleRepo = new PrismaVehicleRepository();

  const findVehicle = new FindLicensePlate(prismaVehicleRepo);
  const data = await findVehicle.execute({ plate: licensePlate });

  return { results: data.map((v) => HttpMapper.vehicle(v)) };
}

export async function findVehicleController(data: { licensePlate: string }) {
  return asyncWrapper(() => controller(data));
}
