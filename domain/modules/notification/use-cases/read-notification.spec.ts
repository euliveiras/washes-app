import { expect, it, describe } from "vitest";
import { ReadNotification } from "./read-notification";
import { InMemoryNotificationRepository } from "test/database/in-memory-notification-repository";
import { SendNotification } from "./send-notification";

describe("Read notification", () => {
    it("should mark notification as readed", async () => {
        const inMemoryNotificationRepo = new InMemoryNotificationRepository();
        const sendNotification = new SendNotification(inMemoryNotificationRepo);
        const readNotification = new ReadNotification(inMemoryNotificationRepo);

        await sendNotification.execute({
            date: new Date(2018, 5, 6),
            recipientId: "john-doe-id",
            content: "some-content",
        });
        await sendNotification.execute({
            date: new Date(2018, 5, 6),
            recipientId: "john-doe-id",
            content: "some-content",
        });

        const { notification } = await sendNotification.execute({
            date: new Date(2020, 2, 3),
            recipientId: "john-doe-id",
            content: "some-content",
        });

        const { notification: readedNotification } = await readNotification.execute({
            id: notification.id,
        });

        expect(readedNotification).toHaveProperty("readAt");
    });
});
