import { randomUUID } from "crypto";

export type OrganizationProps = {
    id: string;
    type: "Cooperativa" | "Empresa";
    name: string;
    phone: string[];
};

type Replace<T, R> = Omit<T, keyof R> & R;
export class Organization {
    private _props: OrganizationProps;

    constructor(props: Replace<OrganizationProps, { id?: string }>) {
        this._props = {
            ...props,
            id: props.id ?? randomUUID(),
        };
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
