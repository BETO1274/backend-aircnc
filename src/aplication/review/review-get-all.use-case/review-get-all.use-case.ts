/* eslint-disable prettier/prettier */
import { ReviewRepository } from 'src/domain/reviews/review_repository';
import { Review } from 'src/domain/reviews/review.dominio';
export class ReviewGetAll {
  constructor(private readonly repository: ReviewRepository) {}

  async run(): Promise<Review[]> {
    return this.repository.getAll();
  }
}
