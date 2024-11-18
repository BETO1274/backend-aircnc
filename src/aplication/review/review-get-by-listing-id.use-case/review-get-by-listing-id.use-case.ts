/* eslint-disable prettier/prettier */
import { ReviewRepository } from 'src/domain/reviews/review_repository';
import { ListingId } from 'src/domain/reviews/listing_id.vo';
import { Review } from 'src/domain/reviews/review.dominio'; 

export class ReviewGetByListingId {
  constructor(private readonly repository: ReviewRepository) {}

  async run(listing_id: string): Promise<Review[]> {
    return this.repository.getByListingId(new ListingId(listing_id));
  }
}
