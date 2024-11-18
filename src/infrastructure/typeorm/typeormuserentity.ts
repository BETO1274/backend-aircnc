/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Users')
export class TypeOrmUserEntity{
@PrimaryColumn()
user_id:string;

@Column()
username:string;

@Column()
email:string;

@Column()
password:string;

@Column()
profile_picture:string;

@Column()
bio:string;

@Column()
is_owner:boolean;

@Column()
created_at:Date;

@Column()
updated_at:Date;
}
