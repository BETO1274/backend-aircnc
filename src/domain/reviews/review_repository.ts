/* eslint-disable prettier/prettier */
import { Review } from './review.dominio'; 
import { ReviewId } from './review_id.vo';
import { ListingId } from './listing_id.vo';
import { UserId } from './user_id.vo';

export interface ReviewRepository {

  create(review: Review): Promise<void>;
  getAll(): Promise<Review[]>;
  getOneById(reviewId: ReviewId): Promise<Review | null>;
  edit(review: Review): Promise<void>;
  delete(reviewId: ReviewId): Promise<void>;
  getByListingId(listingId: ListingId): Promise<Review[]>;
  getByUserId(userId: UserId): Promise<Review[]>;

}
