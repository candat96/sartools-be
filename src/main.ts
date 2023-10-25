import { VERSION_NEUTRAL, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as moment from 'moment-timezone';
import { AppModule } from './app.module';
import { VIETNAM_TIME_ZONE } from './common/constants/timezone';
import { CustomValidationPipe } from './common/exception/validation.pipe';
import { LoggerService } from './common/services/logger.service';

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
    .tz(VIETNAM_TIME_ZONE)
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

  const logger = new LoggerService();
  await app.listen(process.env.PORT || 3535, () => {
    logger.info('Nest application is running on port 3535');
  });
}
bootstrap();
