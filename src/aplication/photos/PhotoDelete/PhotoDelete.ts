/* eslint-disable prettier/prettier */
import { PhotoId } from "src/domain/photos/photo_id.vo";
import { PhotoRepository } from "src/domain/photos/photo_repository";

export class PhotoDelete {
  constructor(private repository: PhotoRepository) {}

  async run(photo_id: string): Promise<void> {
    return this.repository.delete(new PhotoId(photo_id));
  }
}
