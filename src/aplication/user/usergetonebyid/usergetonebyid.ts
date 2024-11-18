/* eslint-disable prettier/prettier */
import { User } from "../../../domain/user/user.domain";
import { UserId } from "../../../domain/user/user_id.vo";
import { UserRepository } from "../../../domain/user/user_repository";
import { UserNotFoundError } from "../../../domain/user/usernotfounderror";

export class UserGetOneById {
  constructor(private repository: UserRepository) {}

  async run(id: string): Promise<User> {
    const user = await this.repository.getOneById(new UserId(id));

    if (!user) {
      throw new UserNotFoundError("usuario no encontrado");
    }

    return user;
  }
}
