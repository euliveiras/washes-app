import type { Vehicle } from "../../../domain/modules/vehicle/entities/Vehicle";
import { Driver } from "../../../domain/modules/driver/entities/Driver";
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
  driver: { name: string; phone: string } | null;
};

async function controller(data: CreateVehicleControllerDTO) {
  if (!data) throw new AppError("Data DTO is required", 400);
  let driver;
  if (data.driver) {
    driver = new Driver({
      name: data.driver.name,
      phones: [data.driver.phone],
    });
  }
  const {vehicle} = await createVehicleService.execute({
    licensePlate: data.licensePlate,
    vehicleType: data.type,
    driver: driver,
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
