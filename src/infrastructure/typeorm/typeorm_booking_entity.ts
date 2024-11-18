/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Bookings')
export class TypeOrmBookingEntity {
  @PrimaryColumn()
  booking_id: string;

  @Column()
  listing_id: string;

  @Column()
  user_id: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  total_price: number;

  @Column()
  created_at: Date;
}
