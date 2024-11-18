/* eslint-disable prettier/prettier */
import { BookingId } from './booking_id.vo';
import { ListingId } from './booking_listing_id.vo';
import { UserId } from './booking_user_id.vo';
import { StartDate } from './booking_start_date.vo';
import { EndDate } from './booking_end_date.vo';
import {TotalPrice } from './booking_total_price.vo';
import { CreatedAt } from './booking_created_at.vo';

export class Booking {
  constructor(
    public readonly booking_id: BookingId,
    public readonly listing_id: ListingId,
    public readonly user_id: UserId,
    public readonly start_date: StartDate,
    public readonly end_date: EndDate,
    public readonly total_price: TotalPrice,
    public readonly created_at: CreatedAt,
  ) {}

  toPlainObject() {
    return {
      booking_id: this.booking_id.value,
      listing_id: this.listing_id.value,
      user_id: this.user_id.value,
      start_date: this.start_date.value,
      end_date: this.end_date.value,
      total_price: this.total_price.value,
      created_at: this.created_at.value,
    };
  }
}
