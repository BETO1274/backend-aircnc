/* eslint-disable prettier/prettier */
import { BookingRepository } from 'src/domain/booking/booking_repository';
import { UserId } from 'src/domain/booking/booking_user_id.vo'; 
import { Booking } from 'src/domain/booking/booking.domain';

export class BookingGetByUserId {
  constructor(private readonly repository: BookingRepository) {}

  async run(user_id: string): Promise<Booking[]> {
    return this.repository.getBookingsByUser(new UserId(user_id));
  }
}
