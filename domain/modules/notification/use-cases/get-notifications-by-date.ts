import type { NotificationRepository } from "../repository/notification-repository";
import type { Notification } from "../entity/Notification";
import { dateManipulator } from "domain/shared/date-manipulator";

type GetNotificationsByDateProps = {
    date: Date;
};

export class GetNotificationsByDate {
    constructor(private notificationDb: NotificationRepository) {}

    async execute(query: GetNotificationsByDateProps): Promise<{ notifications: Notification[] }> {
        const notifications = await this.notificationDb.findMany({
            where: {
                date: dateManipulator.parseDateToString(query.date),
            },
        });

        return { notifications };
    }
}
