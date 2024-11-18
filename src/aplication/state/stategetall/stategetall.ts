/* eslint-disable prettier/prettier */
import { State } from "../../../domain/state/state.domain";
import { StateRepository } from "src/domain/state/state_repository";

export class StateGetAll {
  constructor(private repository: StateRepository) {}

  async run(): Promise<State[]> {
    return this.repository.getAll();
  }
}
