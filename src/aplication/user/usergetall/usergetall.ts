/* eslint-disable prettier/prettier */
import { User } from "../../../domain/user/user.domain";
import { UserRepository } from "../../../domain/user/user_repository";

export class UserGetAll{

constructor (private repository:UserRepository){}

async run():Promise<User[]>{
    return this.repository.getAll();
}

}