/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './infrastructure/nestjs/user.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmUserEntity } from './infrastructure/typeorm/typeormuserentity';
import { TypeOrmStateEntity } from './infrastructure/typeorm/typeormstateentity';
import { TypeOrmPhotoEntity } from './infrastructure/typeorm/typeormphotoentity';
import { StateModule } from './infrastructure/nestjs/state.module';
import { PhotoModule } from './infrastructure/nestjs/photos.module';
import { BookingModule } from './infrastructure/nestjs/booking.module';
import { TypeOrmBookingEntity } from './infrastructure/typeorm/typeorm_booking_entity';


@Module({
  imports: [
    UserModule,
    StateModule,
    PhotoModule,
    BookingModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-us-west-1.pooler.supabase.com',
      port: 6543,
      username: 'postgres.ffenhqwkmshxesotaasr',
      password: 'MasterKey2020**',
      database: 'postgres',
      entities: [TypeOrmUserEntity,TypeOrmStateEntity,TypeOrmPhotoEntity,TypeOrmBookingEntity],
     
      })],
 
})
export class AppModule { }
