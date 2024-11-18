/* eslint-disable prettier/prettier */
import { Photo } from "src/domain/photos/photo.domain"; 
import { PhotoRepository } from "src/domain/photos/photo_repository";

export class PhotoGetAll {
  constructor(private repository: PhotoRepository) {}

  async run(): Promise<Photo[]> {
    return this.repository.getAll();
  }
}
