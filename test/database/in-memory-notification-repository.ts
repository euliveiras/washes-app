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
            if (
                query.where.recipientId === notification.recipientId &&
                query.where.date === notification.createdAt
            ) {
                return notification;
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
            recipientId: notification?.recipientId,
            createdAt: notification?.createdAt,
            readAt: notification?.readAt,
            ...data,
        });

        this.data[index] = updatedNotification;

        return updatedNotification;
    }

    updateMany(
        query: { where: { id: string; recipientId: string; date: string } },
        data: Partial<Notification>
    ): Promise<Notification> {
        throw new Error("Method not implemented.");
    }
}
