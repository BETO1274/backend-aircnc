/* eslint-disable prettier/prettier */
import { ReviewRepository } from 'src/domain/reviews/review_repository'; 
import { Review } from 'src/domain/reviews/review.dominio';
import { ReviewId } from 'src/domain/reviews/review_id.vo';
import { ListingId } from 'src/domain/reviews/listing_id.vo';
import { UserId } from 'src/domain/reviews/user_id.vo';
import { Rating } from 'src/domain/reviews/rating.vo';
import { Comment } from 'src/domain/reviews/comment.vo';
import { CreatedAt } from 'src/domain/reviews/created_at.vo';

export class ReviewCreate {
  constructor(private readonly repository: ReviewRepository) {}

  async run(
review_id: string, listing_id: string, user_id: string, rating: number, comment: string, created_at: Date  ): Promise<void> {
    const review = new Review(
      new ReviewId(review_id),
      new ListingId(listing_id),
      new UserId(user_id),
      new Rating(rating),
      new Comment(comment),
      new CreatedAt(created_at)
    );

    await this.repository.create(review);
  }
}
