import { randomUUID } from "crypto";
import type { Replace } from "../../driver/entities/Driver";

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
    constructor(
        data: Replace<UserProps, { id?: string; createdAt?: string; sessions?: string[] }>
    ) {
        this._props = {
            ...data,
            id: data.id ?? randomUUID(),
            sessions: data.sessions ?? [],
            createdAt: new Date().toISOString(),
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

    removeSession(id: string) {
        this._props.sessions = this._props.sessions.filter((sess) => sess !== id);
    }

    get id() {
        return this._props.id;
    }

    get username() {
        return this._props.username;
    }

    set username(str: string) {
        this._props.username = str;
    }

    get password() {
        return this._props.password;
    }

    set password(password: string) {
        this._props.password = password;
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

    get sessions() {
        return this._props.sessions;
    }
}
