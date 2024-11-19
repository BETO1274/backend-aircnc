import { Controller, Get, Post, Body } from "@nestjs/common";
import { ItemsService } from "./items.service";
import { CreateItemDto } from "./create-item.dto";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async getAllItems() {
    return this.itemsService.getAllItems();
  }

  @Post()
  async createItem(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.createItem(createItemDto);
  }
}
