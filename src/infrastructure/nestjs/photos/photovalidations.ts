/* eslint-disable prettier/prettier */
import { IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";

export class FindOneParams {
  @IsString()
  photo_id: string;
}

export class FindOneByListing{
@IsString()
listing_id:string;

}

export class Save {
  @IsString()
  photo_id: string;

  @IsString()
  listing_id: string;

  @IsString()
  photo_url: string;

  @IsDate()
  @Type(() => Date)
  created_at: Date;
}

export class Edit {
  @IsString()
  listing_id: string;

  @IsString()
  photo_url: string;

  @IsDate()
  @Type(() => Date)
  created_at: Date;
}
