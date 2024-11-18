/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsDate, IsNumber, IsString } from "class-validator";

export class FindOneParams {
  @IsString()
  listing_id: string;
}

export class Save {
  @IsString()
  listing_id: string;

  @IsString()
  user_id: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  address: string;

  @IsString()
  latitude: string;

  @IsString()
  longitude: string;

  @IsNumber()
  price_per_night: number;

  @IsNumber()
  num_bedrooms: number;

  @IsNumber()
  num_bathrooms: number;

  @IsNumber()
  max_guests: number;

  @IsDate()
  @Type(() => Date) // Convierte la cadena ISO a una instancia de Date
  created_at: Date;

  @IsDate()
  @Type(() => Date) // Convierte la cadena ISO a una instancia de Date
  updated_at: Date;
}

export class Edit {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  address: string;

  @IsString()
  latitude: string;

  @IsString()
  longitude: string;

  @IsNumber()
  price_per_night: number;

  @IsNumber()
  num_bedrooms: number;

  @IsNumber()
  num_bathrooms: number;

  @IsNumber()
  max_guests: number;

  @IsDate()
  @Type(() => Date) // Convierte la cadena ISO a una instancia de Date
  created_at: Date;

  @IsDate()
  @Type(() => Date) // Convierte la cadena ISO a una instancia de Date
  updated_at: Date;
}
