/* eslint-disable prettier/prettier */
import { State } from "../../../domain/state/state.domain";
import { ListingId } from "../../../domain/state/state_listing_id.vo";
import { StateRepository } from "src/domain/state/state_repository"; 
import { StateNotFoundError } from "src/domain/state/statenotfounderror";


export class StateGetOneById {
  constructor(private repository: StateRepository) {}

  async run(listingId: string): Promise<State> {
    const state = await this.repository.getOneById(new ListingId(listingId));

    if (!state) {
      throw new StateNotFoundError("propiedad no encontrada");
    }

    return state;
  }
}
