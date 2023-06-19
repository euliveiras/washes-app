import type { Notification } from "../entity/Notification";

export abstract class NotificationRepository {
    abstract create(notification: Notification): Promise<void>;
    abstract findMany(query: {
        where: {
            recipientId: string;
            date: string;
        };
    }): Promise<Notification[] | null>;
    abstract updateMany(
        query: {
            where: { recipientId: string; date: string };
        },
        data: Partial<Notification>
    ): Promise<void>;
}
