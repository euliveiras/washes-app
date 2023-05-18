export type Replace<T, R> = Omit<T, keyof R> & R;

export type DriverProps = {
    name: string;
    phones?: string[];
    organizationId?: string;
};

export class Driver {
    private _props: DriverProps;
    constructor(
        props: Replace<DriverProps, { id?: string; vehicleIds?: string[]; phones?: string[] }>
    ) {
        this._props = {
            ...props,
            phones: props.phones ?? [],
        };
    }

    public get name() {
        return this._props.name;
    }

    private set name(name) {
        this._props.name = name;
    }

    public get phones() {
        return this._props.phones;
    }

    public addPhone(phone: string) {
        this._props.phones?.push(phone);
    }

    public get organizationId() {
        return this._props.organizationId;
    }

    public set organizationId(id: string | undefined) {
        this._props.organizationId = id;
    }
}
