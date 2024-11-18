/* eslint-disable prettier/prettier */
import { PhotoId } from "./photo_id.vo";
import { ListingId } from "../state/state_listing_id.vo"; 
import { PhotoUrl } from "./photo_url.vo";
import { PhotoCreatedAt } from "./photo_created_at.vo";

export class Photo {
  photo_id: PhotoId;
  listing_id: ListingId;
  photo_url: PhotoUrl;
  created_at: PhotoCreatedAt;

  constructor(
    photo_id: PhotoId,
    listing_id: ListingId,
    photo_url: PhotoUrl,
    created_at: PhotoCreatedAt
  ) {
    this.photo_id = photo_id;
    this.listing_id = listing_id;
    this.photo_url = photo_url;
    this.created_at = created_at;
  }

  public toPlainObject() {
    return {
      photo_id: this.photo_id.value,
      listing_id: this.listing_id.value,
      photo_url: this.photo_url.value,
      created_at: this.created_at.value,
    };
  }
}
