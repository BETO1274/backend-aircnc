/* eslint-disable prettier/prettier */
import { State } from "../../../domain/state/state.domain";
import { UserId } from "src/domain/state/state_user_id.vo";
import { StateRepository } from "src/domain/state/state_repository"; 

export class StateGetPropertiesByUserId {
  constructor(private repository: StateRepository) {}

  async run(userId: string): Promise<State[]> {
    return this.repository.getPropertiesByUserId(new UserId(userId));
  }
}
