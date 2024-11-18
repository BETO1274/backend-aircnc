/* eslint-disable prettier/prettier */
import { IsString, IsDate, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class FindOneParams {
  @IsString()
  booking_id: string;
}

export class FindByUser{
    @IsString()
    user_id: string;
  }

export class Save {
  @IsString()
  booking_id: string;

  @IsString()
  listing_id: string;

  @IsString()
  user_id: string;

  @IsDate()
  @Type(() => Date)
  start_date: Date;

  @IsDate()
  @Type(() => Date)
  end_date: Date;

  @IsNumber()
  total_price: number;

  @IsDate()
  @Type(() => Date)
  created_at: Date;
}

export class Edit {
  @IsString()
  listing_id: string;

  @IsString()
  user_id: string;

  @IsDate()
  @Type(() => Date)
  start_date: Date;

  @IsDate()
  @Type(() => Date)
  end_date: Date;

  @IsNumber()
  total_price: number;

  @IsDate()
  @Type(() => Date)
  created_at: Date;
}
