import { expect, it, describe } from "vitest";
import { InMemoryNotificationRepository } from "test/database/in-memory-notification-repository";
import { GetNotificationsByDate } from "./get-notifications-by-date";
import { SendNotification } from "./send-notification";
import { makeNotification } from "test/factories/makeNotification";

describe("Get notifications", () => {
    it("get all notifications from the given date", async () => {
        const inMemoryNotificationRepo = new InMemoryNotificationRepository();
        const getNotifications = new GetNotificationsByDate(inMemoryNotificationRepo);
        const sendNotification = new SendNotification(inMemoryNotificationRepo);

        await sendNotification.execute(makeNotification({ date: new Date(2018, 5, 6) }));
        await sendNotification.execute(makeNotification({ date: new Date(2018, 5, 6) }));
        await sendNotification.execute(makeNotification({ date: new Date(2018, 5, 6) }));
        await sendNotification.execute(makeNotification());

        const { notifications } = await getNotifications.execute({ date: new Date(2018, 5, 6) });

        expect(notifications).toHaveLength(3);
    });
});
