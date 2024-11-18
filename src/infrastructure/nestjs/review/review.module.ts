/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmReviewEntity } from 'src/infrastructure/typeorm/typeorm-review.entity'; 
import { TypeOrmReviewRepository } from 'src/infrastructure/typeorm/typeorm-review.repository'; 
import { ReviewCreate } from 'src/aplication/review/review-create.use-case/review-create.use-case'; 
import { ReviewDelete } from 'src/aplication/review/review-delete.use-case/review-delete.use-case'; 
import { ReviewEdit } from 'src/aplication/review/review-edit.use-case/review-edit.use-case'; 
import { ReviewGetAll } from 'src/aplication/review/review-get-all.use-case/review-get-all.use-case'; 
import { ReviewGetByUserId } from 'src/aplication/review/review-get-by-user-id.use-case/review-get-by-user-id.use-case'; 
import { ReviewGetByListingId } from 'src/aplication/review/review-get-by-listing-id.use-case/review-get-by-listing-id.use-case'; 
import { ReviewGetOneById } from 'src/aplication/review/review-get-one-by-id.use-case/review-get-one-by-id.use-case'; 
import { ReviewController } from './review.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOrmReviewEntity])],
  controllers: [ReviewController],
  providers: [
    {
      provide: 'ReviewRepository',
      useClass: TypeOrmReviewRepository,
    },
    {
      provide: 'ReviewCreate',
      useFactory: (repository: TypeOrmReviewRepository) => new ReviewCreate(repository),
      inject: ['ReviewRepository'],
    },
    {
      provide: 'ReviewDelete',
      useFactory: (repository: TypeOrmReviewRepository) => new ReviewDelete(repository),
      inject: ['ReviewRepository'],
    },
    {
      provide: 'ReviewEdit',
      useFactory: (repository: TypeOrmReviewRepository) => new ReviewEdit(repository),
      inject: ['ReviewRepository'],
    },
    {
      provide: 'ReviewGetAll',
      useFactory: (repository: TypeOrmReviewRepository) => new ReviewGetAll(repository),
      inject: ['ReviewRepository'],
    },
    {
      provide: 'ReviewGetByUserId',
      useFactory: (repository: TypeOrmReviewRepository) => new ReviewGetByUserId(repository),
      inject: ['ReviewRepository'],
    },
    {
      provide: 'ReviewGetByListingId',
      useFactory: (repository: TypeOrmReviewRepository) => new ReviewGetByListingId(repository),
      inject: ['ReviewRepository'],
    },
    {
      provide: 'ReviewGetOneById',
      useFactory: (repository: TypeOrmReviewRepository) => new ReviewGetOneById(repository),
      inject: ['ReviewRepository'],
    },
  ],
})
export class ReviewModule {}
