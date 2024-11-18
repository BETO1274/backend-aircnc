/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Inject, NotFoundException, Param,Post, Put } from '@nestjs/common';
import { UserCreate } from 'src/aplication/user/usercreate/usercreate';
import { UserGetAll } from 'src/aplication/user/usergetall/usergetall';
import { UserGetOneById } from 'src/aplication/user/usergetonebyid/usergetonebyid';
import { UserEdit } from 'src/aplication/user/useredit/useredit';
import { UserDelete } from 'src/aplication/user/userdelete/userdelete';
import { UserNotFoundError } from 'src/domain/user/usernotfounderror';
import { FindOneParams, Save } from './uservalidations';



@Controller('user')
export class UserController {
    constructor(@Inject('UserGetAll') private readonly userGetAll:UserGetAll,
                @Inject('UserGetOneById') private readonly userGetOneById:UserGetOneById,
                @Inject('UserCreate') private readonly userCreate:UserCreate,
                @Inject('UserEdit') private readonly useredit:UserEdit,
                @Inject('UserDelete') private readonly userDelete:UserDelete,
){}

@Get()
async getAll(){
    return ((await this.userGetAll.run()).map((user)=>user.toPlainObject()));
}

@Get(':user_id')
async getOneById(@Param() params:FindOneParams){

    try {
      return(await this.userGetOneById.run(params.user_id)).toPlainObject()
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        throw new NotFoundException('Usuario no encontrado');
      }
      throw error;
    }
  }

@Post()
async create (@Body() body:Save){
return await this.userCreate.run(
    body.user_id,
    body.username,
    body.email,
    body.password,
    body.profile_picture,
    body.bio,
    body.is_owner,
    new Date,
    new Date,
);

}

@Put(':user_id')
async edit (@Param() params:FindOneParams,@Body() body:Save){
return await this.userCreate.run(
    params.user_id,
    body.username,
    body.email,
    body.password,
    body.profile_picture,
    body.bio,
    body.is_owner,
    new Date,
    new Date,

);

}

@Delete(':user_id')
async delete(@Param() params:FindOneParams){

   return await this.userDelete.run(params.user_id)
   
    }

}





