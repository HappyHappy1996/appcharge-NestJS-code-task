import {
  Body,
  ClassSerializerInterceptor,
  Controller, Delete,
  Get, NotFoundException,
  Param,
  ParseIntPipe,
  Post, Put,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { OfferService } from 'src/modules/offer/offer.service';
import {
  OfferDto,
} from 'src/modules/offer/offer.dto';
import { Offer } from 'src/modules/offer/offer.entity';
import { ApiTags } from '@nestjs/swagger';


@Controller('offers')
@ApiTags('offers')
@UseInterceptors(ClassSerializerInterceptor)
export class OfferController {
  constructor(
    private readonly service: OfferService,
  ) {
  }

  @Get('/')
  async list() {
    return this.service.findAll();
  }


  @Get(':offerId')
  async get(@Param('offerId', ParseIntPipe) offerId: number): Promise<Offer> {
    return this.service.getById(offerId);
  }

  @Post('/')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() offerDto: OfferDto) {
    return this.service.create(offerDto);
  }

  @Put(':offerId')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async update(@Param('offerId', ParseIntPipe) offerId: number, @Body() offerDto: OfferDto) {
    const offer = await this.service.getById(offerId);
    if (!offer) {
      throw new NotFoundException(`No offer with ${offerId} ID`);
    }
    return this.service.update(offerDto);
  }

  @Delete(':offerId')
  async delete(@Param('offerId', ParseIntPipe) offerId: number): Promise<void> {
    await this.service.remove(offerId);
  }
}
