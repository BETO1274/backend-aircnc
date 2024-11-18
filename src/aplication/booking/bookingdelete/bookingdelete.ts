/* eslint-disable prettier/prettier */
import { BookingRepository } from 'src/domain/booking/booking_repository';
import { BookingId } from 'src/domain/booking/booking_id.vo';

export class BookingDelete {
  constructor(private readonly repository: BookingRepository) {}

  async run(booking_id: string): Promise<void> {
    await this.repository.delete(new BookingId(booking_id));
  }
}
