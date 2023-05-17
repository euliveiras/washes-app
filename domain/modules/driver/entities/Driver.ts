import { randomUUID } from "crypto";

export type Replace<T, R> = Omit<T, keyof R> & R;

export type DriverProps = {
    id: string;
    name: string;
    vehicleIds: string[];
    phones: string[];
    organizationId?: string;
};

export class Driver {
    private _props: DriverProps;
    constructor(
        props: Replace<DriverProps, { id?: string; vehicleIds?: string[]; phones?: string[] }>
    ) {
        this.validateName(props.name);
        this._props = {
            ...props,
            vehicleIds: props.vehicleIds ?? [],
            phones: props.phones ?? [],
            id: props.id ?? randomUUID(),
        };
    }

    private validateName(name: string) {
        if (name.length < 3) {
            throw new Error("Name must have more than 2 words");
        }

        return true;
    }

    public addPhoneNumber(num: string) {
        this._props.phones.push(num);
    }

    public addVehicleId(id: string) {
        this._props.vehicleIds.push(id);
    }

    public get id() {
        return this._props.id;
    }

    public get name() {
        return this._props.name;
    }

    private set name(name) {
        this._props.name = name;
    }

    public get vehicleIds() {
        return this._props.vehicleIds;
    }

    public get phones() {
        return this._props.phones;
    }

    public get organizationId() {
        return this._props.organizationId;
    }

    public set organizationId(id: string | undefined) {
        this._props.organizationId = id;
    }
}
