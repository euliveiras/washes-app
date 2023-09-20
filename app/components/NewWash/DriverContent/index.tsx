import { Root } from "./DriverContent";

export type Driver = {
  name: string;
  phone: string;
  organizationId?: string;
  create: boolean;
};

export const defaultDriverValue = {
  name: "",
  phone: "",
  create: false,
} as Driver;

export const DriverContent = Root;
