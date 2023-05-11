export type VehicleProps = {
    id: string;
    licensePlate: string;
    driverId: string;
    vehicleType: string;
};

export class Vehicle {
    private _props: VehicleProps;

    constructor(props: VehicleProps) {
        this.validateDriverId(props.driverId);
        this._props = props;
    }

    private validateDriverId(driverId: string) {
        if (!driverId) {
            throw new Error("It must have at least one driverId");
        }
        return true;
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
