/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PhotoRepository } from "src/domain/photos/photo_repository";
import { TypeOrmPhotoEntity } from "./typeormphotoentity";
import { Photo } from "src/domain/photos/photo.domain";
import { PhotoId } from "src/domain/photos/photo_id.vo";
import { ListingId } from "src/domain/state/state_listing_id.vo"; 
import { PhotoUrl } from "src/domain/photos/photo_url.vo";
import { PhotoCreatedAt } from "src/domain/photos/photo_created_at.vo";

@Injectable()
export class TypeOrmPhotoRepository implements PhotoRepository {
  constructor(
    @InjectRepository(TypeOrmPhotoEntity)
    private readonly repository: Repository<TypeOrmPhotoEntity>
  ) {}

  private mapToDomain(entity: TypeOrmPhotoEntity): Photo {
    return new Photo(
      new PhotoId(entity.photo_id),
      new ListingId(entity.listing_id),
      new PhotoUrl(entity.photo_url),
      new PhotoCreatedAt(entity.created_at)
    );
  }

  async create(photo: Photo): Promise<void> {
    await this.repository.save({
      photo_id: photo.photo_id.value,
      listing_id: photo.listing_id.value,
      photo_url: photo.photo_url.value,
      created_at: photo.created_at.value,
    });
  }

  async getAll(): Promise<Photo[]> {
    const entities = await this.repository.find();
    return entities.map(this.mapToDomain);
  }

  async getOneById(id: PhotoId): Promise<Photo | null> {
    const entity = await this.repository.findOne({ where: { photo_id: id.value } });
    return entity ? this.mapToDomain(entity) : null;
  }

  async getPhotosByListingId(listingId: ListingId): Promise<Photo[]> {
    const entities = await this.repository.find({ where: { listing_id: listingId.value } });
    return entities.map(this.mapToDomain);
  }

  async edit(photo: Photo): Promise<void> {
    await this.repository.update(photo.photo_id.value, {
      listing_id: photo.listing_id.value,
      photo_url: photo.photo_url.value,
      created_at: photo.created_at.value,
    });
  }

  async delete(id: PhotoId): Promise<void> {
    await this.repository.delete(id.value);
  }
}
