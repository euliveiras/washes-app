import { randomUUID } from "crypto";

export type VehicleProps = {
    id?: string;
    licensePlate: string;
    driverId: string | null;
    vehicleType: string;
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

    public get driverId() {
        return this._props.driverId;
    }
}
