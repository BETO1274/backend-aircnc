/* eslint-disable prettier/prettier */
import { State } from "./state.domain";
import { ListingId } from "./state_listing_id.vo";
import { UserId } from "../user/user_id.vo"; 

export interface StateRepository {

  create(state: State): Promise<void>;
  getAll(): Promise<State[]>;
  getOneById(listingId: ListingId): Promise<State | null>;
  edit(state: State): Promise<void>;
  delete(listingId: ListingId): Promise<void>;
  getPropertiesByUserId(userId: UserId): Promise<State[]>;

}
