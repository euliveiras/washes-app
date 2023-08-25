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
  const { vehicle } = await findVehicle.execute({ plate: licensePlate });

  return { vehicle: vehicle ? HttpMapper.vehicle(vehicle) : null };
}

export async function findVehicleControler(data: { licensePlate: string }) {
  return asyncWrapper(() => controller(data));
}
