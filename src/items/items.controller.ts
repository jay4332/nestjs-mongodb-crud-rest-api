import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService){}

    @Get()
    findAll():Promise<Item[]> {
        // return 'Get All items';
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Item>{
        // return `Get Id: ${id}`;
        return this.itemsService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto):Promise<Item>{
        // return 'Create an item';
        // return `Name :${createItemDto.name}`;
        return this.itemsService.create(createItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item>{
        // return `Delete: ${id}`;
        return this.itemsService.delete(id);
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item>{
        // return `Update ${id} - Name: ${updateItemDto.name}`;
        return this.itemsService.update(id, updateItemDto);
    }
}
