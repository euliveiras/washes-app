import type { Vehicle } from "../../../domain/modules/vehicle/entities/Vehicle";
import { PrismaVehicleRepository } from "../../database/prisma/repositories/vehicle-repository";
import { asyncWrapper } from "../utils/async-wrapper";
import type { AsyncWrapperError } from "../utils/async-wrapper";
import { AppError } from "../errors/app-error";
import { UpdateVehicle } from "../../../domain/modules/vehicle/use-cases/update-vehicle";

const prismaVehicleRepository = new PrismaVehicleRepository();
const updateVehicle = new UpdateVehicle(prismaVehicleRepository);

type UpdateVehicleControllerDTO = {
  licensePlate: Vehicle["licensePlate"];
  data: {
    driver?: { name: string; phones: string[] };
  };
};

async function controller({ data, licensePlate }: UpdateVehicleControllerDTO) {
  if (!licensePlate) throw new AppError("License plate is required");
  else if (!data.driver) throw new AppError("Data DTO is required", 400);
  await updateVehicle.execute({
    data,
    id: licensePlate,
  });
}

interface VehicleDTO extends AsyncWrapperError {}

export async function updateVehicleController(
  data: UpdateVehicleControllerDTO,
): Promise<VehicleDTO> {
  return asyncWrapper(() => controller(data));
}
