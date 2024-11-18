/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmStateEntity } from '../typeorm/typeormstateentity';
import { StateController } from './state.controller'; 
import { TypeOrmStateRepository } from '../typeorm/typeormstaterepository'; 
import { StateGetAll } from 'src/aplication/state/stategetall/stategetall';
import { StateGetOneById } from 'src/aplication/state/stategetonebyid/stategetonebyid';
import { StateCreate } from 'src/aplication/state/statecreate/statecreate';
import { StateDelete } from 'src/aplication/state/statedelete/statedelete'; 
import { StateEdit } from 'src/aplication/state/stateedit/stateedit'; 
import { StateGetPropertiesByUserId } from 'src/aplication/state/stategetuserid/stategetuserid'; 

@Module({
  imports: [TypeOrmModule.forFeature([TypeOrmStateEntity])],
  controllers: [StateController],
  providers: [
    {
      provide: 'StateRepository',
      useClass: TypeOrmStateRepository,
    },
    {
      provide: 'StateGetAll',
      useFactory: (repository: TypeOrmStateRepository) => new StateGetAll(repository),
      inject: ['StateRepository'],
    },
    {
      provide: 'StateGetOneById',
      useFactory: (repository: TypeOrmStateRepository) => new StateGetOneById(repository),
      inject: ['StateRepository'],
    },
    {
      provide: 'StateCreate',
      useFactory: (repository: TypeOrmStateRepository) => new StateCreate(repository),
      inject: ['StateRepository'],
    },
    {
      provide: 'StateDelete',
      useFactory: (repository: TypeOrmStateRepository) => new StateDelete(repository),
      inject: ['StateRepository'],
    },
    {
      provide: 'StateEdit',
      useFactory: (repository: TypeOrmStateRepository) => new StateEdit(repository),
      inject: ['StateRepository'],
    },
    {
      provide: 'StateGetPropertiesByUserId',
      useFactory: (repository: TypeOrmStateRepository) => new StateGetPropertiesByUserId(repository),
      inject: ['StateRepository'],
    },
  ],
})
export class StateModule {}
