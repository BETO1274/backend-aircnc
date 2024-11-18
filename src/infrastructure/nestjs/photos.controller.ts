/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, Post, Put } from '@nestjs/common';
  import { PhotoCreate } from "src/aplication/photos/PhotoCreate/PhotoCreate"; 
  import { PhotoGetAll } from "src/aplication/photos/PhotoGetAll/PhotoGetAll"; 
  import { PhotoGetOneById } from "src/aplication/photos/PhotoGetOneById/PhotoGetOneById";
  import { PhotoGetByListingId } from "src/aplication/photos/PhotoGetByListingId/PhotoGetByListingId"; 
  import { PhotoEdit } from "src/aplication/photos/PhotoEdit/PhotoEdit";
  import { PhotoDelete } from "src/aplication/photos/PhotoDelete/PhotoDelete"; 
  import { Edit, FindOneByListing, FindOneParams, Save } from "./photovalidations"; 
import { PhotoNotFoundError } from "src/domain/photos/photonotfounderror";
  
  @Controller("photos")
  export class PhotosController {
    constructor(
      @Inject("PhotoCreate") private readonly photoCreate: PhotoCreate,
      @Inject("PhotoGetAll") private readonly photoGetAll: PhotoGetAll,
      @Inject("PhotoGetOneById")
      private readonly photoGetOneById: PhotoGetOneById,
      @Inject("PhotoGetByListingId")
      private readonly photoGetByListingId: PhotoGetByListingId,
      @Inject("PhotoEdit") private readonly photoEdit: PhotoEdit,
      @Inject("PhotoDelete") private readonly photoDelete: PhotoDelete
    ) {}
  
    @Get()
    async getAll() {
    return (await this.photoGetAll.run()).map((photo) => photo.toPlainObject());
    }
  
    @Get(":photo_id")
    async getOneById(@Param() params: FindOneParams) {
      try {
        return (
          await this.photoGetOneById.run(params.photo_id)
        ).toPlainObject();
      } catch (error) {
        if (error instanceof PhotoNotFoundError) {
            throw new NotFoundException('Foto no encontrada');
          }throw error;
      }
    }
  
    @Get("listing/:listing_id")
    async getByListingId(@Param() params: FindOneByListing) {
      return (
        await this.photoGetByListingId.run(params.listing_id)
      ).map((photo) => photo.toPlainObject());
    }
  
    @Post()
    async create(@Body() body: Save) {
      return await this.photoCreate.run(
        body.photo_id,
        body.listing_id,
        body.photo_url,
        body.created_at
      );
    }
  
    @Put(":photo_id")
    async edit(@Param() params: FindOneParams, @Body() body: Edit) {
      return await this.photoEdit.run(
        params.photo_id,
        body.listing_id,
        body.photo_url,
        body.created_at
      );
    }
  
    @Delete(":photo_id")
    async delete(@Param() params: FindOneParams) {
      return await this.photoDelete.run(params.photo_id);
    }
  }
  