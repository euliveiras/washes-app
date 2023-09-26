import type { User } from "../entities/User";

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract find(query: {
    username?: string;
    id?: string;
    email?: string;
  }): Promise<User | null>;
  abstract update(props: Partial<User>, data: Partial<User>): Promise<void>;
  abstract findBySessionId(sessionId: string): Promise<User | null>;
}
