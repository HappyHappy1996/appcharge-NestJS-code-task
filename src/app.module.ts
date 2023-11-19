import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OfferModule } from 'src/modules/offer/offer.module';
import { DatabaseModule } from './modules/database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {
  appConfig,
} from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
      ],
    }),
    DatabaseModule,
    OfferModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
