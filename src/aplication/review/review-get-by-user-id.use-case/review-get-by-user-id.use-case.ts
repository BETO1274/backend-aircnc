/* eslint-disable prettier/prettier */
import { ReviewRepository } from 'src/domain/reviews/review_repository';
import { UserId } from 'src/domain/reviews/user_id.vo';
import { Review } from 'src/domain/reviews/review.dominio'; 

export class ReviewGetByUserId {
  constructor(private readonly repository: ReviewRepository) {}

  async run(user_id: string): Promise<Review[]> {
    return this.repository.getByUserId(new UserId(user_id));
  }
}
