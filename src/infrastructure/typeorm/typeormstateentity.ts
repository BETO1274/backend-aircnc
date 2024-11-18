/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Listings')
export class TypeOrmStateEntity {
  @PrimaryColumn()
  listing_id: string;

  @Column()
  user_id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column("float")
  price_per_night: number;

  @Column()
  num_bedrooms: number;

  @Column()
  num_bathrooms: number;

  @Column()
  max_guests: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
