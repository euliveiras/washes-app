import { randomUUID } from "crypto";

export type WashCycleProps = {
    id?: string;
    vehicleId: string;
    startDate: string;
    endDate: string;
    note: string | null;
    washesId: string[];
    completedWashes: string[];
};

export class WashCycle {
    private _props: WashCycleProps;

    constructor(props: WashCycleProps) {
        if (!props.id) {
            props.id = randomUUID();
        }
        this.validateStartDate(props.startDate);
        this.validateEndDate(props.endDate);
        this._props = props;
    }

    public get vehicleId() {
        return this._props.vehicleId;
    }

    public get startDate() {
        return this._props.startDate;
    }

    public set startDate(date: string) {
        this._props.startDate = date;
    }

    private validateStartDate(date: string) {
        const newStartDate = new Date(date);
        const presentDate = new Date();
        if (presentDate > newStartDate) {
            throw new Error("Date cannot be before today");
        }
    }

    public get endDate() {
        return this._props.endDate;
    }

    public set endDate(date: string) {
        this.validateEndDate(date);
        this._props.endDate = date;
    }

    private validateEndDate(date: string) {
        const newEndDate = new Date(date);
        const startDate = new Date();
        if (startDate > newEndDate) {
            throw new Error("End date cannot be before start date");
        }
    }

    public get note() {
        return this._props.note;
    }

    public set note(note: string | null) {
        this._props.note = note;
    }

    public get washesId() {
        return this._props.washesId;
    }

    public addWashId(id: string) {
        this._props.washesId.push(id);
    }

    public get completedWashes() {
        return this._props.completedWashes;
    }

    public addCompletedWashId(id: string) {
        this._props.completedWashes.push(id);
    }
}
