import type { User } from "domain/modules/user/entities/User";

export function toHttp(user: User) {
  return {
    email: user.email,
    role: user.role,
    username: user.username,
  };
}
