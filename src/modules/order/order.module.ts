import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Order } from './order.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OfferModule } from 'src/modules/offer/offer.module';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Order]), OfferModule],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
