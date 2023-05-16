import { randomUUID } from "crypto";

export type WashProps = {
    id: string;
    vehicleId: string;
    scheduleDate: string;
    cycleId: string;
    note?: string;
    isCompleted: boolean;
};

export class Wash {
    private _props: WashProps;

    constructor(props: WashProps) {
        if (!props.id) {
            props.id = randomUUID();
        }
        this._props = props;
    }

    public get id() {
        return this._props.id;
    }

    public get vehicleId() {
        return this._props.vehicleId;
    }

    public get scheduleDate() {
        return this._props.scheduleDate;
    }

    public set scheduleDate(date: string) {
        this._props.scheduleDate = date;
    }

    public get cycleId() {
        return this._props.cycleId;
    }

    public get note() {
        return this._props.note;
    }

    public set note(note: string | undefined) {
        this._props.note = note;
    }

    public get isCompleted() {
        return this._props.isCompleted;
    }

    public set isCompleted(bool: boolean) {
        this._props.isCompleted = bool;
    }
}
