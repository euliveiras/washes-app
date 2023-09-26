import type { UserRepository } from "../repositories/user-repository";

export class RemoveSession {
  constructor(private userDB: UserRepository) {}

  async execute(props: { id?: string; sessionId?: string }) {
    await this.userDB.update(props, { sessionId: null });
  }
}

