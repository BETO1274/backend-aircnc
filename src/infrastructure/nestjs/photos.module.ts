/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PhotosController } from "./photos.controller"; 
import { TypeOrmPhotoEntity } from "../typeorm/typeormphotoentity"; 
import { TypeOrmPhotoRepository } from "../typeorm/typeormphotorepository"; 
import { PhotoCreate } from "src/aplication/photos/PhotoCreate/PhotoCreate"; 
import { PhotoGetAll } from "src/aplication/photos/PhotoGetAll/PhotoGetAll"; 
import { PhotoGetOneById } from "src/aplication/photos/PhotoGetOneById/PhotoGetOneById"; 
import { PhotoGetByListingId } from "src/aplication/photos/PhotoGetByListingId/PhotoGetByListingId";
import { PhotoEdit } from "src/aplication/photos/PhotoEdit/PhotoEdit";
import { PhotoDelete } from "src/aplication/photos/PhotoDelete/PhotoDelete"; 
import { BookingModule } from './booking.module';
@Module({
  imports: [TypeOrmModule.forFeature([TypeOrmPhotoEntity]), BookingModule],
  controllers: [PhotosController],
  providers: [
    {
      provide: "PhotoRepository",
      useClass: TypeOrmPhotoRepository,
    },
    {
      provide: "PhotoCreate",
      useFactory: (repository: TypeOrmPhotoRepository) =>
        new PhotoCreate(repository),
      inject: ["PhotoRepository"],
    },
    {
      provide: "PhotoGetAll",
      useFactory: (repository: TypeOrmPhotoRepository) =>
        new PhotoGetAll(repository),
      inject: ["PhotoRepository"],
    },
    {
      provide: "PhotoGetOneById",
      useFactory: (repository: TypeOrmPhotoRepository) =>
        new PhotoGetOneById(repository),
      inject: ["PhotoRepository"],
    },
    {
      provide: "PhotoGetByListingId",
      useFactory: (repository: TypeOrmPhotoRepository) =>
        new PhotoGetByListingId(repository),
      inject: ["PhotoRepository"],
    },
    {
      provide: "PhotoEdit",
      useFactory: (repository: TypeOrmPhotoRepository) =>
        new PhotoEdit(repository),
      inject: ["PhotoRepository"],
    },
    {
      provide: "PhotoDelete",
      useFactory: (repository: TypeOrmPhotoRepository) =>
        new PhotoDelete(repository),
      inject: ["PhotoRepository"],
    },
  ],
})
export class PhotoModule {}
