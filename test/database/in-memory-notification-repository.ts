import type { Notification } from "domain/modules/notification/entity/Notification";
import type { NotificationRepository } from "domain/modules/notification/repository/notification-repository";

export class InMemoryNotificationRepository implements NotificationRepository {
    private data: Notification[] = [];
    async create(notification: Notification): Promise<void> {
        this.data.push(notification);
    }
    async findMany(query: {
        where: { recipientId: string; date: string };
    }): Promise<Notification[]> {
        const notifications = this.data.filter((notification) => {
            if (query.where.date) {
                return query.where.date === notification.date ? notification : null;
            } else if (query.where.recipientId) {
                return query.where.recipientId === notification.recipientId ? notification : null;
            } else {
                return null;
            }
        });
        return notifications ?? [];
    }
    updateMany(
        query: { where: { recipientId: string; date: string } },
        data: Partial<Notification>
    ): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
