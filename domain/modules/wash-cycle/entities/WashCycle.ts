import { randomUUID } from "crypto";
import { dateManipulator } from "domain/shared/date-manipulator";

export type WashCycleProps = {
    id?: string;
    vehicleId: string;
    startDate: string;
    endDate: string;
    note?: string;
    washesId: string[];
    completedWashes: string[];
};

export type Replace<T, R> = Omit<T, keyof R> & R;

export class WashCycle {
    private _props: WashCycleProps;

    constructor(
        props: Replace<WashCycleProps, { washesId?: string[]; completedWashes?: string[] }>
    ) {
        this.validateStartDate(props.startDate);
        this.validateEndDate(props.endDate);
        this._props = {
            ...props,
            id: props.id ?? randomUUID(),
            washesId: props.washesId ?? [],
            completedWashes: props.completedWashes ?? [],
        };
    }

    public get vehicleId() {
        return this._props.vehicleId;
    }

    public get startDate() {
        return this._props.startDate;
    }

    public set startDate(date: string) {
        this.validateStartDate(date)
        this._props.startDate = date;
    }

    private validateStartDate(date: string) {
        const presentDate = new Date().toISOString();
        if (dateManipulator.isAfter(date, presentDate)) {
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
        const startDate = new Date().toISOString();
        if (dateManipulator.isBefore(date, startDate)) {
            throw new Error("End date cannot be before start date");
        }
    }

    public get note() {
        return this._props.note;
    }

    public set note(note: string | undefined) {
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
