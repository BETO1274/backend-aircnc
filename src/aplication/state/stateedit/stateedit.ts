/* eslint-disable prettier/prettier */
import { State } from "../../../domain/state/state.domain";
import { ListingId } from "../../../domain/state/state_listing_id.vo";
import { UserId } from "src/domain/state/state_user_id.vo"; 
import { Title } from "../../../domain/state/state_title.vo";
import { Description } from "../../../domain/state/state_description.vo";
import { Address } from "../../../domain/state/state_address.vo";
import { Latitude } from "../../../domain/state/state_latitude.vo";
import { Longitude } from "../../../domain/state/state_longitude.vo";
import { PricePerNight } from "../../../domain/state/state_price_per_night.vo";
import { NumBedrooms } from "../../../domain/state/state_num_bedrooms.vo";
import { NumBathrooms } from "../../../domain/state/state_num_bathrooms.vo";
import { MaxGuests } from "../../../domain/state/state_max_guests.vo";
import { CreatedAt } from "../../../domain/state/state_created_at.vo";
import { UpdatedAt } from "../../../domain/state/state_updated_at.vo";
import { StateRepository } from "src/domain/state/state_repository";

export class StateEdit {
  constructor(private repository: StateRepository) {}

  async run(
    listing_id: string,
    user_id: string,
    title: string,
    description: string,
    address: string,
    latitude: string,
    longitude: string,
    price_per_night: number,
    num_bedrooms: number,
    num_bathrooms: number,
    max_guests: number,
    created_at: Date,
    updated_at: Date,
  ): Promise<void> {
    const state = new State(
      new ListingId(listing_id),
      new UserId(user_id),
      new Title(title),
      new Description(description),
      new Address(address),
      new Latitude(latitude),
      new Longitude(longitude),
      new PricePerNight(price_per_night),
      new NumBedrooms(num_bedrooms),
      new NumBathrooms(num_bathrooms),
      new MaxGuests(max_guests),
      new CreatedAt(created_at),
      new UpdatedAt(updated_at),
    );

    return this.repository.edit(state);
  }
}
