/* eslint-disable prettier/prettier */
import { Bio } from "./user_bio.vo";
import { CreateAt } from "./user_create_at.vo";
import { Email } from "./user_email.vo";
import { UserId } from "./user_id.vo";
import { IsOwner } from "./user_is_owner.vo";
import { Password } from "./user_password.vo";
import { ProfilePicture } from "./user_profile_picture.vo";
import { UpdatedAt } from "./user_updated_at.vo";
import { UserName } from "./user_username.vo";

export class User{


user_id:UserId;
username:UserName;
email:Email;
password:Password;
profile_picture:ProfilePicture;
bio:Bio;
is_owner:IsOwner;
created_at:CreateAt;
updated_at:UpdatedAt;

constructor(

user_id:UserId,
username:UserName,
email:Email,
password:Password,
profile_picture:ProfilePicture,
bio:Bio,
is_owner:IsOwner,
created_at:CreateAt,
updated_at:UpdatedAt,

){
    
    this.user_id=user_id;
    this.username=username;
    this.email=email;
    this.password=password;
    this.profile_picture=profile_picture;
    this.bio=bio;
    this.is_owner=is_owner;
    this.created_at=created_at;
    this.updated_at=updated_at;

}

public toPlainObject(){
return {
    user_id:this.user_id.value,
    username:this.username.value,
    email:this.email.value,
    password:this.password.value,
    profile_picture:this.profile_picture.value,
    bio:this.bio.value,
    is_owner:this.is_owner.value,
    created_at:this.created_at.value,
    updated_at:this.updated_at.value,
}

}
}