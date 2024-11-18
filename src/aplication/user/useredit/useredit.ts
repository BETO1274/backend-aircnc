/* eslint-disable prettier/prettier */
import { User } from "../../../domain/user/user.domain";
import { Bio } from "../../../domain/user/user_bio.vo";
import { CreateAt } from "../../../domain/user/user_create_at.vo";
import { Email } from "../../../domain/user/user_email.vo";
import { UserId } from "../../../domain/user/user_id.vo";
import { IsOwner } from "../../../domain/user/user_is_owner.vo";
import { Password } from "../../../domain/user/user_password.vo";
import { ProfilePicture } from "../../../domain/user/user_profile_picture.vo";
import { UserRepository } from "../../../domain/user/user_repository";
import { UpdatedAt } from "../../../domain/user/user_updated_at.vo";
import { UserName } from "../../../domain/user/user_username.vo";

export class UserEdit{

constructor(private repository:UserRepository){}

async run (
    user_id:string,
    username:string,
    email:string,
    password:string,
    profile_picture:string,
    bio:string,
    is_owner:boolean,
    create_at:Date,
    updated_at:Date,

 ):Promise<void>{
    const user = new User(
        new UserId(user_id),
        new UserName(username),
        new Email(email),
        new Password(password),
        new ProfilePicture(profile_picture),
        new Bio(bio),
        new IsOwner(is_owner),
        new CreateAt(create_at),
        new UpdatedAt(updated_at),

    );

    return this.repository.edit(user)


 }

} 