/* eslint-disable prettier/prettier */
import { User } from "./user.domain";
import { UserId } from "./user_id.vo";

export interface UserRepository{

create(user:User):Promise<void>;
getAll():Promise<User[]>;
getOneById(id:UserId):Promise<User|null>;
edit(user:User):Promise<void>;
delete(id:UserId):Promise<void>;

}