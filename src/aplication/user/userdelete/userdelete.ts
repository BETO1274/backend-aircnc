/* eslint-disable prettier/prettier */
import { UserId } from "../../../domain/user/user_id.vo";
import { UserRepository } from "../../../domain/user/user_repository";

export class UserDelete {
  constructor(private repository: UserRepository) {}
  async run(id: string): Promise<void> {
    await this.repository.delete(new UserId(id));
  }
}
