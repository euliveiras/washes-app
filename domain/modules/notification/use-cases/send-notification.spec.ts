import { expect, it, describe } from "vitest";
import { SendNotification } from "./send-notification";
import { InMemoryNotificationRepository } from "test/database/in-memory-notification-repository";

describe("Send notification", () => {
    it("should send a notification", async () => {
        const inMemoryNotificationRepo = new InMemoryNotificationRepository();
        const sendNotification = new SendNotification(inMemoryNotificationRepo);

        await expect(
            sendNotification.execute({
                content: "some-content",
                recipientId: "some-id",
            })
        ).resolves.toBeDefined();
    });
});
