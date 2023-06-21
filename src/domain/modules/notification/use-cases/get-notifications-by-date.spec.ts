import { expect, it, describe } from "vitest";
import { InMemoryNotificationRepository } from "test/database/in-memory-notification-repository";
import { GetNotificationsByDate } from "./get-notifications-by-date";
import { SendNotification } from "./send-notification";

describe("Get notifications", () => {
    it("get all notifications from the given date", async () => {
        const inMemoryNotificationRepo = new InMemoryNotificationRepository();
        const getNotifications = new GetNotificationsByDate(inMemoryNotificationRepo);
        const sendNotification = new SendNotification(inMemoryNotificationRepo);

        await sendNotification.execute({
            recipientId: "john-doe-id",
            content: "some-content",
        });
        await sendNotification.execute({
            recipientId: "john-doe-id",
            content: "some-content",
        });
        await sendNotification.execute({
            recipientId: "john-oliver-id",
            content: "some-content",
        });

        const { notifications } = await getNotifications.execute({
            date: new Date(),
            recipiendId: "john-doe-id",
        });

        expect(notifications).toHaveLength(2);
    });
});
