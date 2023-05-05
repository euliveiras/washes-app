export type DriverProps = {
    id: String;
    name: String;
    vehicleIds: String[];
    phones: Number[];
};

export class Driver {
    private _props: DriverProps;
    constructor(props: DriverProps) {
        this.validateName(props.name);
        this._props = props;
    }

    private validateName(name: String) {
        if (name.length < 3) {
            throw new Error("Name must have more than 2 words");
        }

        return true;
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

    private set vehicleIds(ids: String[]) {
        this._props.vehicleIds = ids;
    }

    public get phones() {
        return this._props.phones;
    }

    private set phones(phones: Number[]) {
        this._props.phones = phones;
    }
}
