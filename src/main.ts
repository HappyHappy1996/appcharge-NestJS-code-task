import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  if (process.env.API_DOCUMENTATION) {
    const config = new DocumentBuilder().addBearerAuth().build();

    const customOptions: SwaggerCustomOptions = {
      swaggerOptions: {
        filter: true,
        docExpansion: 'none',
        // persistAuthorization: true,
      },
    };

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document, customOptions);
  }

  const port = process.env.API_PORT;

  await app.listen(port);

  const logger = app['logger'];
  logger.log(`Started listening for HTTP traffic on port ${port}`);
}
bootstrap();
