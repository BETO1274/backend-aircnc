/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { StateGetAll } from 'src/aplication/state/stategetall/stategetall'; 
import { StateGetOneById } from 'src/aplication/state/stategetonebyid/stategetonebyid'; 
import { StateCreate } from 'src/aplication/state/statecreate/statecreate'; 
import { StateEdit } from 'src/aplication/state/stateedit/stateedit'; 
import { StateDelete } from 'src/aplication/state/statedelete/statedelete'; 
import { StateGetPropertiesByUserId } from 'src/aplication/state/stategetuserid/stategetuserid'; 
import { StateNotFoundError } from 'src/domain/state/statenotfounderror'; 
import { FindOneParams,Save } from './statevalidations'; 

@Controller('state')
export class StateController {
  constructor(
    @Inject('StateGetAll') private readonly stateGetAll: StateGetAll,
    @Inject('StateGetOneById') private readonly stateGetOneById: StateGetOneById,
    @Inject('StateCreate') private readonly stateCreate: StateCreate,
    @Inject('StateEdit') private readonly stateEdit: StateEdit,
    @Inject('StateDelete') private readonly stateDelete: StateDelete,
    @Inject('StateGetPropertiesByUserId') private readonly stateGetPropertiesByUserId: StateGetPropertiesByUserId,
  ) {}

  @Get()
  async getAll() {
    return (await this.stateGetAll.run()).map((state) => state.toPlainObject());
  }

  @Get(':listing_id')
  async getOneById(@Param() params: FindOneParams) {
    try {
      return (await this.stateGetOneById.run(params.listing_id)).toPlainObject();
    } catch (error) {
      if (error instanceof StateNotFoundError) {
        throw new NotFoundException('Propiedad no encontrada');
      }
      throw error;
    }
  }

  @Get('user/:user_id')
  async getPropertiesByUserId(@Param('user_id') userId: string) {
    return (await this.stateGetPropertiesByUserId.run(userId)).map((state) => state.toPlainObject());
  }

  @Post()
  async create(@Body() body: Save) {
    return await this.stateCreate.run(
      body.listing_id,
      body.user_id,
      body.title,
      body.description,
      body.address,
      body.latitude,
      body.longitude,
      body.price_per_night,
      body.num_bedrooms,
      body.num_bathrooms,
      body.max_guests,
      new Date(),
      new Date(),
    );
  }

  @Put(':listing_id')
  async edit(@Param() params: FindOneParams, @Body() body: Save) {
    return await this.stateEdit.run(
      params.listing_id,
      body.user_id,
      body.title,
      body.description,
      body.address,
      body.latitude,
      body.longitude,
      body.price_per_night,
      body.num_bedrooms,
      body.num_bathrooms,
      body.max_guests,
      new Date(),
      new Date(),
    );
  }

  @Delete(':listing_id')
  async delete(@Param() params: FindOneParams) {
    return await this.stateDelete.run(params.listing_id);
  }
}
