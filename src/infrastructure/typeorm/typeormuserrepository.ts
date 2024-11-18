/* eslint-disable prettier/prettier */
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "src/domain/user/user_repository";
import { Repository } from "typeorm";
import { TypeOrmUserEntity } from "./typeormuserentity";
import { User } from "src/domain/user/user.domain";
import { UserName } from "src/domain/user/user_username.vo";
import { Password } from "src/domain/user/user_password.vo";
import { Email } from "src/domain/user/user_email.vo";
import { UserId } from "src/domain/user/user_id.vo";
import { ProfilePicture } from "src/domain/user/user_profile_picture.vo";
import { Bio } from "src/domain/user/user_bio.vo";
import { IsOwner } from "src/domain/user/user_is_owner.vo";
import { CreateAt } from "src/domain/user/user_create_at.vo";
import { UpdatedAt } from "src/domain/user/user_updated_at.vo";
import { Injectable } from "@nestjs/common";


@Injectable()
export class TypeOrmUserRepository implements UserRepository {
    constructor(@InjectRepository(TypeOrmUserEntity) private readonly repository: Repository<TypeOrmUserEntity>) { }

    private mapToDomain(user: TypeOrmUserEntity) {
        return new User(
            new UserId(user.user_id),
            new UserName(user.username),
            new Email(user.email),
            new Password(user.password),
            new ProfilePicture(user.profile_picture),
            new Bio(user.bio),
            new IsOwner(user.is_owner),
            new CreateAt(user.created_at),
            new UpdatedAt(user.created_at)
        )

    }


    async getAll(): Promise<User[]> {
        const users = await this.repository.find();

        return users.map((user) => this.mapToDomain(user))
    }

    async getOneById(user_id: UserId): Promise<User | null> {
        const user = await this.repository.findOne({
            where: {
                user_id: user_id.value
            }
        })
        if (!user) return null

        return this.mapToDomain(user)
    }


    async create(user: User): Promise<void> {

        await this.repository.save({

            user_id: user.user_id.value,
            username: user.username.value,
            email: user.email.value,
            password: user.password.value,
            profile_picture: user.profile_picture.value,
            bio: user.bio.value,
            is_owner: user.is_owner.value,
            created_at: user.created_at.value,
            updated_at: user.updated_at.value

        });

    }

    async edit(user: User): Promise<void> {

        await this.repository.update(user.user_id.value, {

            username: user.username.value,
            email: user.email.value,
            password: user.password.value,
            profile_picture: user.profile_picture.value,
            bio: user.bio.value,
            is_owner: user.is_owner.value,
            created_at: user.created_at.value,
            updated_at: user.updated_at.value

        })
    }

    async delete(id: UserId): Promise<void> {
        await this.repository.delete(id.value)
    }

}