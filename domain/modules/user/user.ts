import { randomUUID } from "crypto";
import type { Replace } from "../driver/entities/Driver";

type UserProps = {
    id: string;
    username: string;
    password: string;
    email: string;
    sessions: string[];
    role: "ADMIN" | "COLAB";
};

export class User {
    private _props: UserProps;
    constructor(data: Replace<UserProps, { id?: string }>) {
        this._props = {
            ...data,
            id: data.id ?? randomUUID(),
            sessions: [],
        };
    }

    get username() {
        return this._props.username
    }

    set username (str: string) {
        this._props.username = str;
    }

    get password () {
        return this._props.username
    }

    set password(password: string){
        // hash
    }
}
