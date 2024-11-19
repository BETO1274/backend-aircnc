import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Item } from "./item.entity";
import { CreateItemDto } from "./create-item.dto";
@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
  ) {}

  async getAllItems(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const newItem = this.itemRepository.create(createItemDto);
    return this.itemRepository.save(newItem);
  }
}
