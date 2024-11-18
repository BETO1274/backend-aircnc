/* eslint-disable prettier/prettier */
import { Photo } from "src/domain/photos/photo.domain"; 
import { ListingId } from "src/domain/state/state_listing_id.vo";
import { PhotoRepository } from "src/domain/photos/photo_repository"; 
export class PhotoGetByListingId {
  constructor(private repository: PhotoRepository) {}

  async run(listing_id: string): Promise<Photo[]> {
    return this.repository.getPhotosByListingId(new ListingId(listing_id));
  }
}
