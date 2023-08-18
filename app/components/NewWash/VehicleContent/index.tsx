import { Container } from "./Container";

type VehicleType =
  | "Extra leve"
  | "Leve"
  | "Vuc"
  | "Toco"
  | "Truck"
  | "Bitruck"
  | "Carreta"
  | string;

export type Vehicle = {
  licensePlate: string;
  type: VehicleType;
  create: boolean;
};

export const defaultVehicleState = {
  licensePlate: "",
  type: "",
  create: false,
};

export const VehicleContent = Container;
