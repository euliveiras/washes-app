import { randomUUID } from "crypto";
import type { Replace } from "../../driver/entities/Driver";
import { hashManipulator } from "domain/shared/utils/hash-manipulator";

type UserProps = {
    id: string;
    username: string;
    password: string;
    email: string;
    sessions: string[];
    role: "ADMIN" | "COLAB";
    createdAt: string;
};

export class User {
    private _props: UserProps;
    constructor(data: Replace<UserProps, { id?: string }>) {
        this._props = {
            ...data,
            id: data.id ?? randomUUID(),
            sessions: [],
            createdAt: new Date().toUTCString(),
        };
    }
    createSession() {
        const token = randomUUID();
        this._props.sessions.push(token);
        return token;
    }

    getSession(id: string) {
        const session = this._props.sessions.find((t) => t === id);
        return session;
    }

    hashString(pwd: string): Promise<string> {
        const hash = hashManipulator.generateHashFromStr(pwd)
        return hash;
    }

    get username() {
        return this._props.username;
    }

    set username(str: string) {
        this._props.username = str;
    }

    get password() {
        return this._props.username;
    }

    set password(password: string) {
        this.hashString(password)
            .then((p) => (this._props.password = p))
            .catch((err) => {
                throw new Error("error in setting password hashed");
            });
    }

    get email() {
        return this._props.email;
    }

    set email(str: string) {
        this._props.email = str;
    }

    get role() {
        return this._props.role;
    }

    set role(role: "ADMIN" | "COLAB") {
        this._props.role = role;
    }

    get createdAt() {
        return this._props.createdAt;
    }
}
