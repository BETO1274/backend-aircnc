/* eslint-disable prettier/prettier */
import { Photo } from "src/domain/photos/photo.domain" 
import { PhotoId } from "src/domain/photos/photo_id.vo" 
import { ListingId } from "src/domain/state/state_listing_id.vo" 
import { PhotoUrl } from "src/domain/photos/photo_url.vo" 
import { PhotoCreatedAt } from "src/domain/photos/photo_created_at.vo" 
import { PhotoRepository } from "src/domain/photos/photo_repository" 

export class PhotoCreate {
  constructor(private repository: PhotoRepository) {}

  async run(
    photo_id: string,
    listing_id: string,
    photo_url: string,
    created_at: Date
  ): Promise<void> {
    const photo = new Photo(
      new PhotoId(photo_id),
      new ListingId(listing_id),
      new PhotoUrl(photo_url),
      new PhotoCreatedAt(created_at)
    );

    return this.repository.create(photo);
  }
}
