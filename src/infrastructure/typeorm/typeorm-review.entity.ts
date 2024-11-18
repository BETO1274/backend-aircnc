/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Reviews')
export class TypeOrmReviewEntity {
  @PrimaryColumn()
  review_id: string;

  @Column()
  listing_id: string;

  @Column()
  user_id: string;

  @Column({ type: 'int' })
  rating: number;

  @Column({ type: 'text' })
  comment: string;

  @Column({ type: 'timestamp' })
  created_at: Date;
}
