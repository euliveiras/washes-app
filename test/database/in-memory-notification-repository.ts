import { Notification } from "domain/modules/notification/entity/Notification";
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

    async findByIdAndUpdate(id: string, data: Partial<Notification>): Promise<Notification> {
        const index = this.data.findIndex((notification) => notification.id === id);

        if (index < 0) {
            throw new Error("Notification not founded");
        }

        const notification = this.data[index];

        const updatedNotification = new Notification({
            id,
            content: notification?.content,
            date: notification?.date,
            recipientId: notification?.recipientId,
            createdAt: notification?.createdAt,
            readAt: notification?.readAt,
            ...data,
        });

        this.data[index] = updatedNotification;

        console.log(this.data)

        return updatedNotification;
    }

    updateMany(
        query: { where: { id: string; recipientId: string; date: string } },
        data: Partial<Notification>
    ): Promise<Notification> {
        throw new Error("Method not implemented.");
    }
}
