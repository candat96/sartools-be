import { Logger, VERSION_NEUTRAL, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as moment from 'moment-timezone';
import { AppModule } from './app.module';
import { FRANCE_TIME_ZONE } from './common/constants/timezone';
import { CustomValidationPipe } from './common/exception/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    abortOnError: true,
  });

  app.setGlobalPrefix('sartools/api');

  app.useGlobalPipes(new CustomValidationPipe({ whitelist: false }));

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: VERSION_NEUTRAL,
  });

  const timingVersion = moment()
    .tz(FRANCE_TIME_ZONE)
    .format('HH:mm:ss DD-MM-YYYY');

  const options = new DocumentBuilder()
    .setTitle('Sartools')
    .setDescription('Sartools API Docs')
    .setVersion(timingVersion)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('sartools/docs', app, document, {
    swaggerOptions: {
      defaultModelsExpandDepth: -1,
    },
  });

  const logger = new Logger('Sartools');
  const port = process.env.PORT || 8083;
  await app.listen(port, () => {
    logger.log(`Nest application is running on port ${port}`);
  });
}
bootstrap();
