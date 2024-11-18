/* eslint-disable prettier/prettier */

import { InjectRepository } from "@nestjs/typeorm";
import { StateRepository } from "src/domain/state/state_repository";
import { Repository } from "typeorm";
import { TypeOrmStateEntity } from "./typeormstateentity";
import { State } from "src/domain/state/state.domain";
import { ListingId } from "src/domain/state/state_listing_id.vo";
import { UserId } from "src/domain/state/state_user_id.vo";
import { Title } from "src/domain/state/state_title.vo";
import { Description } from "src/domain/state/state_description.vo";
import { Address } from "src/domain/state/state_address.vo";
import { Latitude } from "src/domain/state/state_latitude.vo";
import { Longitude } from "src/domain/state/state_longitude.vo";
import { PricePerNight } from "src/domain/state/state_price_per_night.vo";
import { NumBedrooms } from "src/domain/state/state_num_bedrooms.vo";
import { NumBathrooms } from "src/domain/state/state_num_bathrooms.vo";
import { MaxGuests } from "src/domain/state/state_max_guests.vo";
import { CreatedAt } from "src/domain/state/state_created_at.vo"; 
import { UpdatedAt } from "src/domain/state/state_updated_at.vo";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TypeOrmStateRepository implements StateRepository {
    constructor(@InjectRepository(TypeOrmStateEntity) private readonly repository: Repository<TypeOrmStateEntity>) { }

    private mapToDomain(state: TypeOrmStateEntity): State {
        return new State(
            new ListingId(state.listing_id),
            new UserId(state.user_id),
            new Title(state.title),
            new Description(state.description),
            new Address(state.address),
            new Latitude(state.latitude),
            new Longitude(state.longitude),
            new PricePerNight(state.price_per_night),
            new NumBedrooms(state.num_bedrooms),
            new NumBathrooms(state.num_bathrooms),
            new MaxGuests(state.max_guests),
            new CreatedAt(state.created_at),
            new UpdatedAt(state.updated_at),
        );
    }

    async getAll(): Promise<State[]> {
        const states = await this.repository.find();
        return states.map((state) => this.mapToDomain(state));
    }

    async getOneById(listing_id: ListingId): Promise<State | null> {
        const state = await this.repository.findOne({
            where: {
                listing_id: listing_id.value
            }
        });
        if (!state) return null;
        return this.mapToDomain(state);
    }

    async getPropertiesByUserId(userId: UserId): Promise<State[]> {
        const states = await this.repository.find({
            where: {
                user_id: userId.value
            }
        });
        return states.map((state) => this.mapToDomain(state));
    }

    async create(state: State): Promise<void> {
        await this.repository.save({
            listing_id: state.listing_id.value,
            user_id: state.user_id.value,
            title: state.title.value,
            description: state.description.value,
            address: state.address.value,
            latitude: state.latitude.value,
            longitude: state.longitude.value,
            price_per_night: state.price_per_night.value,
            num_bedrooms: state.num_bedrooms.value,
            num_bathrooms: state.num_bathrooms.value,
            max_guests: state.max_guests.value,
            created_at: state.created_at.value,
            updated_at: state.updated_at.value,
        });
    }

    async edit(state: State): Promise<void> {
        await this.repository.update(state.listing_id.value, {
            title: state.title.value,
            description: state.description.value,
            address: state.address.value,
            latitude: state.latitude.value,
            longitude: state.longitude.value,
            price_per_night: state.price_per_night.value,
            num_bedrooms: state.num_bedrooms.value,
            num_bathrooms: state.num_bathrooms.value,
            max_guests: state.max_guests.value,
            created_at: state.created_at.value,
            updated_at: state.updated_at.value,
        });
    }

    async delete(listing_id: ListingId): Promise<void> {
        await this.repository.delete(listing_id.value);
    }
}
