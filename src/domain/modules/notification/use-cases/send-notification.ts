import type { NotificationRepository } from "../repository/notification-repository";
import { Notification } from "../entity/Notification";

type SendNotificationProps = {
    recipientId: string;
    content: string;
};

export class SendNotification {
    constructor(private notificationDb: NotificationRepository) {}

    async execute(data: SendNotificationProps): Promise<{ notification: Notification }> {
        const notification = new Notification(data);

        await this.notificationDb.create(notification);

        return { notification };
    }
}
