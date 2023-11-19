import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { PlayerCredentialsService } from 'src/modules/auth/player-credentials.service';
import { LoginDto, LoginResponse } from 'src/modules/auth/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly playerCredentialsService: PlayerCredentialsService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const { playerId, password } = loginDto;

    const playerCredentials =
      await this.playerCredentialsService.getByPlayerId(playerId);

    if (!playerCredentials) throw new BadRequestException('No player is found');

    const inputPasswordHash = await bcrypt.hash(
      password,
      playerCredentials.salt,
    );

    if (playerCredentials.passwordHash !== inputPasswordHash) {
      throw new BadRequestException('Password is wrong');
    }

    const jwtToken = await this.jwtService.signAsync(
      { playerId },
      {
        expiresIn: '1h',
      },
    );

    return {
      sessionId: jwtToken,
    };
  }
}
