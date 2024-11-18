/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import { BookingRepository } from 'src/domain/booking/booking_repository';
import { Repository } from 'typeorm';
import { TypeOrmBookingEntity } from './typeorm_booking_entity'; 
import { Booking } from 'src/domain/booking/booking.domain';
import { UserId } from 'src/domain/user/user_id.vo';
import { BookingId } from 'src/domain/booking/booking_id.vo';
import { ListingId } from 'src/domain/booking/booking_listing_id.vo';
import { StartDate } from 'src/domain/booking/booking_start_date.vo';
import { EndDate } from 'src/domain/booking/booking_end_date.vo'; 
import { TotalPrice } from 'src/domain/booking/booking_total_price.vo'; 
import { CreatedAt } from 'src/domain/booking/booking_created_at.vo';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmBookingRepository implements BookingRepository {
  constructor(@InjectRepository(TypeOrmBookingEntity) private readonly repository: Repository<TypeOrmBookingEntity>) {}

  private mapToDomain(booking: TypeOrmBookingEntity): Booking {
    return new Booking(
      new BookingId(booking.booking_id),
      new ListingId(booking.listing_id),
      new UserId(booking.user_id),
      new StartDate(booking.start_date),
      new EndDate(booking.end_date),
      new TotalPrice(booking.total_price),
      new CreatedAt(booking.created_at),
    );
  }

  async getAll(): Promise<Booking[]> {
    const bookings = await this.repository.find();
    return bookings.map((booking) => this.mapToDomain(booking));
  }

  async getOneById(booking_id: BookingId): Promise<Booking | null> {
    const booking = await this.repository.findOne({ where: { booking_id: booking_id.value } });
    return booking ? this.mapToDomain(booking) : null;
  }

  async getBookingsByUser(user_id: UserId): Promise<Booking[]> {
    const bookings = await this.repository.find({ where: { user_id: user_id.value } });
    return bookings.map((booking) => this.mapToDomain(booking));
  }

  async create(booking: Booking): Promise<void> {

    await this.repository.save({
        booking_id: booking.booking_id.value,
        listing_id: booking.listing_id.value,
        user_id: booking.user_id.value,
        start_date: booking.start_date.value,
        end_date: booking.end_date.value,
        total_price: booking.total_price.value,
        created_at: booking.created_at.value,
    });
  }

  async edit(booking: Booking): Promise<void> {
    await this.repository.update(booking.booking_id.value, {
      listing_id: booking.listing_id.value,
      user_id: booking.user_id.value,
      start_date: booking.start_date.value,
      end_date: booking.end_date.value,
      total_price: booking.total_price.value,
      created_at: booking.created_at.value,
    });
  }

  async delete(booking_id: BookingId): Promise<void> {
    await this.repository.delete(booking_id.value);
  }
}
