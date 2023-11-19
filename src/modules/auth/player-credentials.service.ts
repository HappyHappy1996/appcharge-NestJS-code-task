import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { PlayerCredentials } from 'src/modules/auth/player-credentials.entity';

@Injectable()
export class PlayerCredentialsService {
  constructor(
    @InjectRepository(PlayerCredentials)
    private repository: Repository<PlayerCredentials>,
  ) {}

  async getByPlayerId(playerId: string): Promise<PlayerCredentials> {
    return this.repository.findOneBy({
      playerId,
    });
  }
}
