import type { Vehicle } from "../../../domain/modules/vehicle/entities/Vehicle";
import { CreateVehicle } from "../../../domain/modules/vehicle/use-cases/create-vehicle";
import { PrismaVehicleRepository } from "../../database/prisma/repositories/vehicle-repository";
import { HttpMapper } from "../mappers/http-mapper";
import { asyncWrapper } from "../utils/async-wrapper";
import type { AsyncWrapperError } from "../utils/async-wrapper";
import { AppError } from "../errors/app-error";

const createVehicleRepository = new PrismaVehicleRepository();
const createVehicleService = new CreateVehicle(createVehicleRepository);

type CreateVehicleControllerDTO = {
  licensePlate: Vehicle["licensePlate"];
  type: Vehicle["vehicleType"];
  driver?: { name: string; phone: string };
};

async function controller(data: CreateVehicleControllerDTO) {
  if (!data) throw new AppError("Data DTO is required", 400);
  const driver = data.driver
    ? {
        ...data.driver,
        phones: [data.driver?.phone],
      }
    : undefined;
  const { vehicle } = await createVehicleService.execute({
    licensePlate: data.licensePlate,
    vehicleType: data.type,
    driver,
  });

  if (!vehicle) throw new AppError("Vehicle creation service error", 400);

  return { vehicle: HttpMapper.vehicle(vehicle) };
}

interface VehicleDTO extends AsyncWrapperError {
  vehicle: {
    licensePlate: string;
    type: string;
  };
}

export async function createVehicleController(
  data: CreateVehicleControllerDTO,
): Promise<VehicleDTO> {
  return asyncWrapper(() => controller(data));
}
