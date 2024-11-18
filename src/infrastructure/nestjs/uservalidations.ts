/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import {  IsBoolean, IsDate, IsString} from "class-validator";

export class FindOneParams{

    @IsString()
    user_id:string;
}

export class Save{

@IsString()
user_id:string;

@IsString()
username:string;

@IsString()
email:string;

@IsString()
password:string;

@IsString()
profile_picture:string;

@IsString()
bio:string;

@IsBoolean()
is_owner:boolean;

@IsDate()
@Type(() => Date) // Convierte la cadena ISO a una instancia de Date
created_at: Date;

@IsDate()
@Type(() => Date) // Convierte la cadena ISO a una instancia de Date
updated_at: Date;

}

export class Edit{
    
    @IsString()
    username:string;
    
    @IsString()
    email:string;
    
    @IsString()
    password:string;
    
    @IsString()
    profile_picture:string;
    
    @IsString()
    bio:string;
    
    @IsBoolean()
    is_owner:boolean;
    
    @IsDate()
  @Type(() => Date) // Convierte la cadena ISO a una instancia de Date
  created_at: Date;

  @IsDate()
  @Type(() => Date) // Convierte la cadena ISO a una instancia de Date
  updated_at: Date;

}

