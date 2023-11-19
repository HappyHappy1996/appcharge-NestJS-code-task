import { Repository } from 'typeorm';
import {
  Injectable,
} from '@nestjs/common';

import { Offer } from 'src/modules/offer/offer.entity';

import {
  OfferDto,
} from 'src/modules/offer/offer.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(Offer)
    private repository: Repository<Offer>,
  ) {
  }

  async findAll(): Promise<Offer[]> {
    return this.repository.find();
  }

  async getById(id): Promise<Offer> {
    return this.repository.findOneBy({
      id
    });
  }

  async create(offerDto: OfferDto): Promise<Offer> {
    return this.repository.save(offerDto);
  }

  async update(offerDto: OfferDto): Promise<Offer> {
    return this.repository.save(offerDto);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
