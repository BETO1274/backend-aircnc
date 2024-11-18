/* eslint-disable prettier/prettier */
import { BookingRepository } from 'src/domain/booking/booking_repository';
import { Booking } from 'src/domain/booking/booking.domain';
import { BookingId } from 'src/domain/booking/booking_id.vo';
import { ListingId } from 'src/domain/booking/booking_listing_id.vo'; 
import { UserId } from 'src/domain/booking/booking_user_id.vo'; 
import { StartDate } from 'src/domain/booking/booking_start_date.vo'; 
import { EndDate } from 'src/domain/booking/booking_end_date.vo';
import { TotalPrice } from 'src/domain/booking/booking_total_price.vo'; 
import { CreatedAt } from 'src/domain/booking/booking_created_at.vo'; 

export class BookingEdit {
  constructor(private readonly repository: BookingRepository) {}

  async run(
    booking_id: string,
    listing_id: string,
    user_id: string,
    start_date: Date,
    end_date: Date,
    total_price: number,
    created_at: Date
  ): Promise<void> {
    const booking = new Booking(
      new BookingId(booking_id),
      new ListingId(listing_id),
      new UserId(user_id),
      new StartDate(start_date),
      new EndDate(end_date),
      new TotalPrice(total_price),
      new CreatedAt(created_at)
    );

    await this.repository.edit(booking);
  }
}
