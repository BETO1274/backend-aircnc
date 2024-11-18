/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsDate, IsNumber, IsString } from "class-validator";

export class FindOneParams {
  @IsString()
  review_id: string;
}

export class Save {
  @IsString()
  review_id: string;

  @IsString()
  listing_id: string;

  @IsString()
  user_id: string;

  @IsString()
  comment: string;

  @IsNumber()
  rating: number;

  @IsDate()
  @Type(() => Date) // Convierte la cadena ISO a una instancia de Date
  created_at: Date;

}

export class Edit {
 
    @IsString()
    review_id: string;
  
    @IsString()
    listing_id: string;
  
    @IsString()
    user_id: string;
  
    @IsString()
    comment: string;
  
    @IsNumber()
    rating: number;
  
    @IsDate()
    @Type(() => Date) // Convierte la cadena ISO a una instancia de Date
    created_at: Date;
}
