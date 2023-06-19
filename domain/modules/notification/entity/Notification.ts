import { randomUUID } from "crypto";
import type { Replace } from "domain/shared/types/replace";

type NotificationProps = {
    id: string;
    recipientId: string;
    content: string;
    readAt?: string | null;
    createdAt: string;
};

export class Notification {
    private _props: NotificationProps;

    constructor(data: Replace<NotificationProps, { id?: string; createdAt?: string }>) {
        this._props = {
            ...data,
            id: data.id ?? randomUUID(),
            createdAt: data.createdAt ?? new Date().toISOString(),
        };
    }

    get id() {
        return this._props.id;
    }

    get recipientId() {
        return this._props.recipientId;
    }

    set recipientId(id: string) {
        this._props.recipientId = id;
    }

    get content() {
        return this._props.content;
    }

    set content(content: string) {
        if (content.length > 255) throw new Error("Exceed limit of characters");
        this._props.content = content;
    }

    get readAt() {
        return this._props.readAt;
    }

    set readAt(date: string | null | undefined) {
        this._props.readAt = date;
    }

    get createdAt() {
        return this._props.createdAt;
    }
}
