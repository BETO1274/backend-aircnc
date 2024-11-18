/* eslint-disable prettier/prettier */
import { ListingId } from "../../../domain/state/state_listing_id.vo";
import { StateRepository } from "src/domain/state/state_repository";
export class StateDelete {
  constructor(private repository: StateRepository) {}

  async run(listingId: string): Promise<void> {
    await this.repository.delete(new ListingId(listingId));
  }
}
