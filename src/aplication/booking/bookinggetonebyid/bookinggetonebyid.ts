/* eslint-disable prettier/prettier */
import { BookingRepository } from 'src/domain/booking/booking_repository';
import { BookingId } from 'src/domain/booking/booking_id.vo';
import { BookingNotFoundError } from 'src/domain/booking/BookingNotFoundError';
import { Booking } from 'src/domain/booking/booking.domain';

export class BookingGetOneById {
  constructor(private readonly repository: BookingRepository) {}

  async run(booking_id: string): Promise<Booking> {
    const booking = await this.repository.getOneById(new BookingId(booking_id));

    if (!booking) {
      throw new BookingNotFoundError('Reserva no encontrada');
    }

    return booking;
  }
}
