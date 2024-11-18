/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { BookingCreate } from 'src/aplication/booking/bookingcreate/bookingcreate';
import { BookingGetAll } from 'src/aplication/booking/bookinggetall/bookinggetall';
import { BookingGetOneById } from 'src/aplication/booking/bookinggetonebyid/bookinggetonebyid';
import { BookingEdit } from 'src/aplication/booking/bookingedit/bookingedit';
import { BookingDelete } from 'src/aplication/booking/bookingdelete/bookingdelete';
import { BookingGetByUserId } from 'src/aplication/booking/bookinggetbyuserid/bookinggetbyuserid';
import { BookingNotFoundError } from 'src/domain/booking/bookingnotfounderror';
import { Edit, FindByUser, FindOneParams, Save } from './bookingvalidations';

@Controller('bookings')
export class BookingController {
  constructor(
    @Inject('BookingGetAll') private readonly bookingGetAll: BookingGetAll,
    @Inject('BookingGetOneById') private readonly bookingGetOneById: BookingGetOneById,
    @Inject('BookingCreate') private readonly bookingCreate: BookingCreate,
    @Inject('BookingEdit') private readonly bookingEdit: BookingEdit,
    @Inject('BookingDelete') private readonly bookingDelete: BookingDelete,
    @Inject('BookingGetByUserId') private readonly bookingGetByUserId: BookingGetByUserId
  ) {}

  @Get()
  async getAll() {
    return (await this.bookingGetAll.run()).map((booking)=>booking.toPlainObject());
  }

  @Get('user/:user_id')
  async getBookingsByUser(@Param() params:FindByUser ) {
    return (await this.bookingGetByUserId.run(params.user_id)).map((booking)=>booking.toPlainObject());
  }

  @Get(':booking_id')
  async getOneById(@Param() params: FindOneParams) {
    try {
      return ((await this.bookingGetOneById.run(params.booking_id)).toPlainObject());
    } catch (error) {
      if (error instanceof BookingNotFoundError) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Post()
  async create(@Body() saveBooking: Save) {
    await this.bookingCreate.run(
        saveBooking.booking_id,
      saveBooking.listing_id,
      saveBooking.user_id,
      saveBooking.start_date,
      saveBooking.end_date,
      saveBooking.total_price,
      saveBooking.created_at
    );
  }

  @Put(':booking_id')
  async edit(@Param() params: FindOneParams, @Body() saveBooking: Edit) {
    await this.bookingEdit.run(
      params.booking_id,
      saveBooking.listing_id,
      saveBooking.user_id,
      saveBooking.start_date,
      saveBooking.end_date,
      saveBooking.total_price,
      saveBooking.created_at
    );
  }

  @Delete(':booking_id')
  async delete(@Param() params: FindOneParams) {
    await this.bookingDelete.run(params.booking_id);
  }
}
