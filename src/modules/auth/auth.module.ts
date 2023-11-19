import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlayerCredentials } from './player-credentials.entity';

import { AuthService } from './auth.service';
import { PlayerCredentialsService } from './player-credentials.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConfig } from 'src/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([PlayerCredentials]),
    JwtModule.registerAsync({
      imports: [ConfigModule.forFeature(appConfig)],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('appConfig.authSecret'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, PlayerCredentialsService],
  controllers: [AuthController],
  exports: [JwtModule],
})
export class AuthModule {}
