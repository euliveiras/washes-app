import { Vehicle } from "../../../domain/modules/vehicle/entities/Vehicle";
import { Driver } from "../../../domain/modules/driver/entities/Driver";
import { CreateVehicle } from "../../../domain/modules/vehicle/use-cases/create-vehicle";
import { PrismaVehicleRepository } from "../../database/prisma/repositories/vehicle-repository";
import { HttpMapper } from "../mappers/http-mapper";
import { asyncWrapper } from "../utils/async-wrapper";
import { AppError } from "../errors/app-error";

const createVehicleRepository = new PrismaVehicleRepository();
const createVehicleService = new CreateVehicle(createVehicleRepository);

type CreateVehicleControllerDTO = {
  licensePlate: Vehicle["licensePlate"];
  type: Vehicle["vehicleType"];
  driver?: { name: string; phone: string };
};

async function controller(data: CreateVehicleControllerDTO) {
  const driver = data.driver
    ? new Driver({ name: data.driver.name, phones: [data.driver.phone] })
    : undefined;
  const vehicle = new Vehicle({ ...data, vehicleType: data.type, driver });
  //const created = await createVehicleService.execute(vehicle);
  return { vehicle };
}

export async function createVehicleController(
  data: CreateVehicleControllerDTO,
): Promise<{vehicle?: any} | { error: { message: string; statusCode: number}}> {
  return await asyncWrapper(() => controller(data));
}
