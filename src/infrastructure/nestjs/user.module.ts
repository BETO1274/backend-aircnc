/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmUserRepository } from '../typeorm/typeormuserrepository';
import { UserGetAll } from 'src/aplication/user/usergetall/usergetall';
import { UserGetOneById } from 'src/aplication/user/usergetonebyid/usergetonebyid';
import { UserCreate } from 'src/aplication/user/usercreate/usercreate';
import { UserDelete } from 'src/aplication/user/userdelete/userdelete';
import { UserEdit } from 'src/aplication/user/useredit/useredit';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmUserEntity } from '../typeorm/typeormuserentity';


@Module({
  imports:[TypeOrmModule.forFeature([TypeOrmUserEntity]),],
  controllers: [UserController],
providers:[
{
provide:'UserRepository',
useClass:TypeOrmUserRepository,

},

{
provide:"UserGetAll",
useFactory:(repository:TypeOrmUserRepository)=> new UserGetAll(repository),
inject:['UserRepository']

},

{
  provide:"UserGetOneById",
  useFactory:(repository:TypeOrmUserRepository)=> new UserGetOneById(repository),
  inject:['UserRepository']
  
  },

  {
    provide:"UserCreate",
    useFactory:(repository:TypeOrmUserRepository)=> new UserCreate(repository),
    inject:['UserRepository']
    
    },
    {
      provide:"UserDelete",
      useFactory:(repository:TypeOrmUserRepository)=> new UserDelete(repository),
      inject:['UserRepository']
      
      },

      {
        provide:"UserEdit",
        useFactory:(repository:TypeOrmUserRepository)=> new UserEdit(repository),
        inject:['UserRepository']
        
        },


]

})
export class UserModule {}
