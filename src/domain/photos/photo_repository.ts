/* eslint-disable prettier/prettier */
import { Photo } from "./photo.domain";
import { PhotoId } from "./photo_id.vo";
import { ListingId } from "../state/state_listing_id.vo"; 

export interface PhotoRepository {
  create(photo: Photo): Promise<void>;
  getAll(): Promise<Photo[]>;
  getOneById(id: PhotoId): Promise<Photo | null>;
  getPhotosByListingId(listingId: ListingId): Promise<Photo[]>;
  edit(photo: Photo): Promise<void>;
  delete(id: PhotoId): Promise<void>;
}
