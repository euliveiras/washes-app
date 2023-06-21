import { dateManipulator } from "domain/shared/date-manipulator";
import type { NotificationRepository } from "../repository/notification-repository";
import type { Notification } from "../entity/Notification";

type ReadNotificationProps = {
    id: string;
};

export class ReadNotification {
    constructor(private notificationDb: NotificationRepository) {}

    async execute(data: ReadNotificationProps): Promise<{ notification: Notification }> {
        const notification = await this.notificationDb.findByIdAndUpdate(data.id, {
            readAt: dateManipulator.parseDateToString(new Date()),
        });

        return { notification };
    }
}
