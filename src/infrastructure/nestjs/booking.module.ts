/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { TypeOrmBookingRepository } from '../typeorm/typeormbookingrepository';
import { BookingGetAll } from 'src/aplication/booking/bookinggetall/bookinggetall';
import { BookingGetOneById } from 'src/aplication/booking/bookinggetonebyid/bookinggetonebyid';
import { BookingCreate } from 'src/aplication/booking/bookingcreate/bookingcreate';
import { BookingEdit } from 'src/aplication/booking/bookingedit/bookingedit';
import { BookingDelete } from 'src/aplication/booking/bookingdelete/bookingdelete';
import { BookingGetByUserId } from 'src/aplication/booking/bookinggetbyuserid/bookinggetbyuserid';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmBookingEntity } from '../typeorm/typeorm_booking_entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([TypeOrmBookingEntity])],
  controllers: [BookingController],
  providers: [
    {
      provide: 'BookingRepository',
      useClass: TypeOrmBookingRepository,
    },
    {
      provide: 'BookingGetAll',
      useFactory: (repository: TypeOrmBookingRepository) => new BookingGetAll(repository),
      inject: ['BookingRepository'],
    },
    {
      provide: 'BookingGetOneById',
      useFactory: (repository: TypeOrmBookingRepository) => new BookingGetOneById(repository),
      inject: ['BookingRepository'],
    },
    {
      provide: 'BookingCreate',
      useFactory: (repository: TypeOrmBookingRepository) => new BookingCreate(repository),
      inject: ['BookingRepository'],
    },
    {
      provide: 'BookingEdit',
      useFactory: (repository: TypeOrmBookingRepository) => new BookingEdit(repository),
      inject: ['BookingRepository'],
    },
    {
      provide: 'BookingDelete',
      useFactory: (repository: TypeOrmBookingRepository) => new BookingDelete(repository),
      inject: ['BookingRepository'],
    },
    {
      provide: 'BookingGetByUserId',
      useFactory: (repository: TypeOrmBookingRepository) => new BookingGetByUserId(repository),
      inject: ['BookingRepository'],
    },
  ],
})
export class BookingModule {}
