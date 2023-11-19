import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Offer } from './offer.entity';

import { OfferService } from 'src/modules/offer/offer.service';
import { OfferController } from 'src/modules/offer/offer.controller';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Offer])],
  providers: [OfferService],
  controllers: [OfferController],
  exports: [OfferService],
})
export class OfferModule {}
