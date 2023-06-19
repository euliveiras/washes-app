import { describe, it, expect } from "vitest";
import { Notification } from "./Notification";

describe("Notification entity", () => {
    it("should able to create a notification instance", () => {
        const notification = new Notification({
            content: "Lavagem hoje, quarta-feira, às 4 da tarde",
            recipientId: "fake-id",
        });

        expect(notification).toBeInstanceOf(Notification);
    });
});
