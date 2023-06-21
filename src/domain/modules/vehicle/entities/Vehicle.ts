import { randomUUID } from "crypto";
import type { Driver } from "domain/modules/driver/entities/Driver";

export type VehicleProps = {
    id?: string;
    licensePlate: string;
    driver: Driver;
    vehicleType: "Extra leve" | "Leve" | "Vuc" | "Toco" | "Truck" | "Bitruck" | "Carreta";
};

export class Vehicle {
    private _props: VehicleProps;

    constructor(props: VehicleProps) {
        if (!props.id) {
            props.id = randomUUID();
        }
        this._props = props;
    }

    public get id() {
        return this._props.id;
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
