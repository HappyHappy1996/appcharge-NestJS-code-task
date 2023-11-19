import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderDto } from 'src/modules/order/order.dto';
import { OfferService } from 'src/modules/offer/offer.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private repository: Repository<Order>,
    private readonly offerService: OfferService,
  ) {}

  async makeOrder(orderDto: OrderDto): Promise<Order> {
    const offer = await this.offerService.getByOfferSetId(orderDto.offerSetId);

    if (!offer) throw new BadRequestException('No offer is found');

    // TODO: some actual credit card validation with calling 3rd party needs to happen here

    if (offer.availability > 0) {
      offer.availability -= 1;
    }

    // TODO: ideally both operations should be wrapped in a transaction
    const [order] = await Promise.all([
      this.repository.save(orderDto),
      this.offerService.update(offer),
    ]);

    return order as Order;
  }
}
