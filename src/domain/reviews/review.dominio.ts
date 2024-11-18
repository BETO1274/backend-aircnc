/* eslint-disable prettier/prettier */
import { ReviewId } from './review_id.vo'; 
import { ListingId } from './listing_id.vo';
import { UserId } from './user_id.vo';
import { Rating } from './rating.vo'; 
import { Comment } from './comment.vo'; 
import { CreatedAt } from './created_at.vo';

export class Review {

  review_id: ReviewId;
  listing_id: ListingId;
  user_id: UserId;
  rating: Rating;
  comment: Comment;
  created_at: CreatedAt;

  constructor(
    review_id: ReviewId,
    listing_id: ListingId,
    user_id: UserId,
    rating: Rating,
    comment: Comment,
    created_at: CreatedAt
  ) {
    this.review_id = review_id;
    this.listing_id = listing_id;
    this.user_id = user_id;
    this.rating = rating;
    this.comment = comment;
    this.created_at = created_at;
  }

  public toPlainObject() {
    return {
      review_id: this.review_id.value,
      listing_id: this.listing_id.value,
      user_id: this.user_id.value,
      rating: this.rating.value,
      comment: this.comment.value,
      created_at: this.created_at.value,
    };
  }

  // Método estático para crear una nueva Review
  public static create(
    review_id: string,
    listing_id: string,
    user_id: string,
    rating: number,
    comment: string,
    created_at: Date
  ): Review {
    return new Review(
      new ReviewId(review_id),
      new ListingId(listing_id),
      new UserId(user_id),
      new Rating(rating),
      new Comment(comment),
      new CreatedAt(created_at)
    );
  }
}
