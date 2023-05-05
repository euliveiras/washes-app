export type VehicleProps = {
    id: String;
    licensePlate: String;
    proprietaryId: String;
    driverId: String;
    vehicleType: String;
};

export class Vehicle {
    private _props: VehicleProps;

    constructor(props: VehicleProps) {
        this.validateDriverId(props.driverId);
        this._props = props;
    }

    private validateDriverId(driverId: String) {
        if (!driverId) {
            throw new Error("It must have at least one driverId");
        }
    }

    public get id() {
        return this._props.id;
    }

    public get licensePlate() {
        return this._props.licensePlate;
    }

    public get proprietaryId() {
        return this._props.proprietaryId;
    }

    public get vehicleType() {
        return this._props.vehicleType;
    }

    public get driverId() {
        return this._props.driverId;
    }
}
