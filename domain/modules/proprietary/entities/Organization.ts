export type OrganizationProps = {
    id: String;
    type: String;
    name: String;
    phone: String[];
};

export class Organization {
    private _props: OrganizationProps;

    constructor(props: OrganizationProps) {
        this._props = props;
    }

    public get id() {
        return this._props.id;
    }

    public get type() {
        return this._props.type;
    }

    public get name() {
        return this._props.name;
    }

    public get phone() {
        return this._props.phone;
    }
}
