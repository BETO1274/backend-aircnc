/* eslint-disable prettier/prettier */
import { ReviewRepository } from "src/domain/reviews/review_repository"; 
import { ReviewId } from "src/domain/reviews/review_id.vo"; 

export class ReviewDelete {
  constructor(private readonly repository: ReviewRepository) {}

  async run(review_id: string): Promise<void> {
    await this.repository.delete(new ReviewId(review_id));
  }
}
