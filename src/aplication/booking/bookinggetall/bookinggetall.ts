/* eslint-disable prettier/prettier */
import { BookingRepository } from 'src/domain/booking/booking_repository';
import { Booking } from 'src/domain/booking/booking.domain';

export class BookingGetAll {
  constructor(private readonly repository: BookingRepository) {}

  async run(): Promise<Booking[]> {
    return this.repository.getAll();
  }
}

