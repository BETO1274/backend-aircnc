/* eslint-disable prettier/prettier */
import { ListingId } from "./state_listing_id.vo";
import { UserId } from "./state_user_id.vo";
import { Title } from "./state_title.vo";
import { Description } from "./state_description.vo";
import { Address } from "./state_address.vo";
import { Latitude } from "./state_latitude.vo";
import { Longitude } from "./state_longitude.vo";
import { PricePerNight } from "./state_price_per_night.vo";
import { NumBedrooms } from "./state_num_bedrooms.vo";
import { NumBathrooms } from "./state_num_bathrooms.vo";
import { MaxGuests } from "./state_max_guests.vo";
import { CreatedAt } from "./state_created_at.vo";
import { UpdatedAt } from "./state_updated_at.vo";

export class State {

  listing_id: ListingId;
  user_id: UserId;
  title: Title;
  description: Description;
  address: Address;
  latitude: Latitude;
  longitude: Longitude;
  price_per_night: PricePerNight;
  num_bedrooms: NumBedrooms;
  num_bathrooms: NumBathrooms;
  max_guests: MaxGuests;
  created_at: CreatedAt;
  updated_at: UpdatedAt;

  constructor(
    listing_id: ListingId,
    user_id: UserId,
    title: Title,
    description: Description,
    address: Address,
    latitude: Latitude,
    longitude: Longitude,
    price_per_night: PricePerNight,
    num_bedrooms: NumBedrooms,
    num_bathrooms: NumBathrooms,
    max_guests: MaxGuests,
    created_at: CreatedAt,
    updated_at: UpdatedAt
  ) {
    this.listing_id = listing_id;
    this.user_id = user_id;
    this.title = title;
    this.description = description;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
    this.price_per_night = price_per_night;
    this.num_bedrooms = num_bedrooms;
    this.num_bathrooms = num_bathrooms;
    this.max_guests = max_guests;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  public toPlainObject() {
    return {
      listing_id: this.listing_id.value,
      user_id: this.user_id.value,
      title: this.title.value,
      description: this.description.value,
      address: this.address.value,
      latitude: this.latitude.value,
      longitude: this.longitude.value,
      price_per_night: this.price_per_night.value,
      num_bedrooms: this.num_bedrooms.value,
      num_bathrooms: this.num_bathrooms.value,
      max_guests: this.max_guests.value,
      created_at: this.created_at.value,
      updated_at: this.updated_at.value,
    };
  }
}
