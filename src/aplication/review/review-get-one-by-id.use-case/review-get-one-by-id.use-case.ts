/* eslint-disable prettier/prettier */
import { ReviewRepository } from 'src/domain/reviews/review_repository';
import { ReviewId } from 'src/domain/reviews/review_id.vo';
import { ReviewNotFoundError } from 'src/domain/reviews/reviewnotfounderror';
import { Review } from 'src/domain/reviews/review.dominio';

export class ReviewGetOneById {
  constructor(private readonly repository: ReviewRepository) {}

  async run(review_id: string): Promise<Review> {
    const review = await this.repository.getOneById(new ReviewId(review_id));

    if (!review) {
      throw new ReviewNotFoundError('Valoración no encontrada');
    }

    return review;
  }
}
