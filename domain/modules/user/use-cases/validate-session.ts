import type { User } from "../entities/User";

export class ValidateSession {
    execute(token: string, user: User): boolean {
        const isTokenValid = user.sessions.find((sess) => sess === token);

        if (!isTokenValid) throw new Error("Token is not valid");

        return true;
    }
}
