import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req,
  Res,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send('Get all items!!');
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `item ${id}`;
  }

  @Post()
  create(@Body() item: CreateItemDto): string {
    return `Name: ${item.name}\nDescription: ${item.description}\nQuantity: ${item.qty}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateItem: CreateItemDto): string {
    return `Update ${id}\n Name: ${updateItem.name}\nDescription: ${updateItem.description}\nQuantity: ${updateItem.qty}`;
  }
}
