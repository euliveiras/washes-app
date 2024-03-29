import * as crypto from "crypto";
import { dateManipulator } from "domain/shared/date-manipulator";

export type WashCycleProps = {
  id: string;
  vehicleId: string;
  startDate: string;
  endDate: string;
  washesId: string[];
  completedWashes: string[];
};

export type Replace<T, R> = Omit<T, keyof R> & R;

export class WashCycle {
  private _props: WashCycleProps;

  constructor(
    props: Replace<
      WashCycleProps,
      { id?: string; washesId?: string[]; completedWashes?: string[] }
    >,
  ) {
    this.validateStartDate(props.startDate, props.endDate);
    this.validateEndDate(props.endDate, props.startDate);
    this._props = {
      ...props,
      id: props.id ?? crypto.randomUUID(),
      washesId: props.washesId ?? [],
      completedWashes: props.completedWashes ?? [],
    };
  }

  public get id() {
    return this._props.id;
  }

  public get vehicleId() {
    return this._props.vehicleId;
  }

  public get startDate() {
    return this._props.startDate;
  }

  public set startDate(date: string) {
    this.validateStartDate(date);
    this._props.startDate = date;
  }

  private validateStartDate(date: string, endDate?: string) {
    if (dateManipulator.isAfter(date, this._props?.endDate ?? endDate)) {
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

  private validateEndDate(date: string, startDate?: string) {
    if (dateManipulator.isBefore(date, this._props?.endDate ?? startDate)) {
      throw new Error("End date cannot be before start date");
    }
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

  public removeCompletedWash(id: string) {
    this._props.completedWashes = this._props.completedWashes.filter(
      (w) => w !== id,
    );
  }
}
