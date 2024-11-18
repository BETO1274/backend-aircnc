/* eslint-disable prettier/prettier */
import { Photo } from "src/domain/photos/photo.domain";
import { PhotoId } from "src/domain/photos/photo_id.vo";
import { PhotoRepository } from "src/domain/photos/photo_repository";
import { PhotoNotFoundError } from "src/domain/photos/photonotfounderror"; 

export class PhotoGetOneById {
  constructor(private repository: PhotoRepository) {}

  async run(photo_id: string): Promise<Photo> {
    const photo = await this.repository.getOneById(new PhotoId(photo_id));
    if (!photo) {
      throw new PhotoNotFoundError("Foto no encontrada");
    }

    return photo;
  }
}
