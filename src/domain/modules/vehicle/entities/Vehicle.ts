import type { Driver } from "domain/modules/driver/entities/Driver";

export type VehicleProps = {
  licensePlate: string;
  driver?: Driver;
  vehicleType:
    | "Extra leve"
    | "Leve"
    | "Vuc"
    | "Toco"
    | "Truck"
    | "Bitruck"
    | "Carreta";
};

type Replace<T, R> = Omit<T, keyof R> & R;

export class Vehicle {
  private _props: VehicleProps;

  constructor(props: Replace<VehicleProps, { id?: string }>) {
    this._props = {
      ...props,
    };
  }

  public get licensePlate() {
    return this._props.licensePlate;
  }

  public get vehicleType() {
    return this._props.vehicleType;
  }

  public get driver() {
    return this._props.driver;
  }
}
