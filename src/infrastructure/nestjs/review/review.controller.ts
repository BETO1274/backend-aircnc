/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ReviewGetAll } from 'src/aplication/review/review-get-all.use-case/review-get-all.use-case'; 
import { ReviewGetOneById } from 'src/aplication/review/review-get-one-by-id.use-case/review-get-one-by-id.use-case'; 
import { ReviewCreate } from 'src/aplication/review/review-create.use-case/review-create.use-case'; 
import { ReviewEdit } from 'src/aplication/review/review-edit.use-case/review-edit.use-case'; 
import { ReviewDelete } from 'src/aplication/review/review-delete.use-case/review-delete.use-case'; 
import { ReviewNotFoundError } from 'src/domain/reviews/reviewnotfounderror'; 
import { FindOneParams, Save, Edit } from './reviewvalidations';

@Controller('review')
export class ReviewController {
  constructor(
    @Inject('ReviewGetAll') private readonly reviewGetAll: ReviewGetAll,
    @Inject('ReviewGetOneById') private readonly reviewGetOneById: ReviewGetOneById,
    @Inject('ReviewCreate') private readonly reviewCreate: ReviewCreate,
    @Inject('ReviewEdit') private readonly reviewEdit: ReviewEdit,
    @Inject('ReviewDelete') private readonly reviewDelete: ReviewDelete,
  ) {}

  @Get()
  async getAll() {
    return (await this.reviewGetAll.run()).map((review) => review.toPlainObject());
  }

  @Get(':review_id')
  async getOneById(@Param() params: FindOneParams) {
    try {
      return (await this.reviewGetOneById.run(params.review_id)).toPlainObject();
    } catch (error) {
      if (error instanceof ReviewNotFoundError) {
        throw new NotFoundException('Reseña no encontrada');
      }
      throw error;
    }
  }

  @Post()
  async create(@Body() body: Save) {
    return await this.reviewCreate.run(
      body.review_id,
      body.listing_id,
      body.user_id,
      body.rating,
      body.comment,
      new Date(),
      
    );
  }

  @Put(':review_id')
  async edit(@Param() params: FindOneParams, @Body() body: Edit) {
    return await this.reviewEdit.run(
      params.review_id,
      body.listing_id,
      body.user_id,
      body.rating,
      body.comment,
      new Date(),
    );
  }

  @Delete(':review_id')
  async delete(@Param() params: FindOneParams) {
    return await this.reviewDelete.run(params.review_id);
  }
}
