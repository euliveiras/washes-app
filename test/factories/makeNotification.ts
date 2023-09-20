import { Notification } from "domain/modules/notification/entity/Notification";

type OverrideProps = Partial<Notification>;

export function makeNotification(override?: OverrideProps) {
    return new Notification({
        date: new Date(),
        content: "Lavagem às 4 horas de hoje, quarta-feira.",
        recipientId: "user-id",
        ...override,
    });
}
