import { expect, it, describe } from "vitest";
import { ReadNotification } from "./read-notification";
import { InMemoryNotificationRepository } from "test/database/in-memory-notification-repository";
import { SendNotification } from "./send-notification";
import { makeNotification } from "test/factories/makeNotification";

describe("Read notification", () => {
    it("should mark notification as readed", async () => {
        const inMemoryNotificationRepo = new InMemoryNotificationRepository();
        const sendNotification = new SendNotification(inMemoryNotificationRepo);
        const readNotification = new ReadNotification(inMemoryNotificationRepo);

        await sendNotification.execute(makeNotification({ date: new Date(2019, 3, 9) }));
        await sendNotification.execute(makeNotification({ date: new Date(2019, 4, 6) }));
        const { notification } = await sendNotification.execute(
            makeNotification({ date: new Date(2020, 2, 3) })
        );

        const { notification: readedNotification } = await readNotification.execute({
            id: notification.id,
        });

        expect(readedNotification).toHaveProperty("readAt");
    });
});
