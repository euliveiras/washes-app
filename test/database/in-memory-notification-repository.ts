import type { Notification } from "domain/modules/notification/entity/Notification";
import type { NotificationRepository } from "domain/modules/notification/repository/notification-repository";

export class InMemoryNotificationRepository implements NotificationRepository {
    private data: Notification[] = [];
    async create(notification: Notification): Promise<void> {
        this.data.push(notification);
    }
    findMany(query: {
        where: { recipientId: string; date: string };
    }): Promise<Notification[] | null> {
        throw new Error("Method not implemented.");
    }
    updateMany(
        query: { where: { recipientId: string; date: string } },
        data: Partial<Notification>
    ): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
