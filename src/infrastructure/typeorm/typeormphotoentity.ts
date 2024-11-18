/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Photos')
export class TypeOrmPhotoEntity {
  @PrimaryColumn()
  photo_id: string;

  @Column()
  listing_id: string;

  @Column()
  photo_url: string;

  @Column()
  created_at: Date;
}
