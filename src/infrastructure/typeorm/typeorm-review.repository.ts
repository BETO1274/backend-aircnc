/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewRepository } from 'src/domain/reviews/review_repository';
import { Repository } from 'typeorm';
import { TypeOrmReviewEntity } from './typeorm-review.entity';
import { Review } from 'src/domain/reviews/review.dominio'; 
import { UserId } from 'src/domain/reviews/user_id.vo'; 
import { ReviewId } from 'src/domain/reviews/review_id.vo';
import { ListingId } from 'src/domain/reviews/listing_id.vo'; 
import { Rating } from 'src/domain/reviews/rating.vo'; 
import { Comment } from 'src/domain/reviews/comment.vo';
import { CreatedAt } from 'src/domain/reviews/created_at.vo'; 
import { Injectable } from '@nestjs/common';
@Injectable()
export class TypeOrmReviewRepository implements ReviewRepository {
  constructor(
    @InjectRepository(TypeOrmReviewEntity)
    private readonly repository: Repository<TypeOrmReviewEntity>,
  ) {}

  private mapToDomain(review: TypeOrmReviewEntity): Review {
    return new Review(
      new ReviewId(review.review_id),
      new ListingId(review.listing_id),
      new UserId(review.user_id),
      new Rating(review.rating),
      new Comment(review.comment),
      new CreatedAt(review.created_at),
    );
  }

  async getAll(): Promise<Review[]> {
    const reviews = await this.repository.find();
    return reviews.map((review) => this.mapToDomain(review));
  }

  async getOneById(reviewId: ReviewId): Promise<Review | null> {
    const review = await this.repository.findOne({ where: { review_id: reviewId.value } });
    return review ? this.mapToDomain(review) : null;
  }

  async getByListingId(listingId: ListingId): Promise<Review[]> {
    const reviews = await this.repository.find({ where: { listing_id: listingId.value } });
    return reviews.map((review) => this.mapToDomain(review));
  }

  async getByUserId(userId: UserId): Promise<Review[]> {
    const reviews = await this.repository.find({ where: { user_id: userId.value } });
    return reviews.map((review) => this.mapToDomain(review));
  }

  async create(review: Review): Promise<void> {
    await this.repository.save({
      review_id: review.review_id.value,
      listing_id: review.listing_id.value,
      user_id: review.user_id.value,
      rating: review.rating.value,
      comment: review.comment.value,
      created_at: review.created_at.value,
    });
  }

  async edit(review: Review): Promise<void> {
    await this.repository.update(review.review_id.value, {
      listing_id: review.listing_id.value,
      user_id: review.user_id.value,
      rating: review.rating.value,
      comment: review.comment.value,
      created_at: review.created_at.value,
    });
  }

  async delete(reviewId: ReviewId): Promise<void> {
    await this.repository.delete(reviewId.value);
  }
}
