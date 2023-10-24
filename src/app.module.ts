import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Config } from './config/config';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public'),
      exclude: ['/mobicare*'],
      serveStaticOptions: {
        index: [],
      },
      serveRoot: '/public',
    }),
    JwtModule.register({
      secret: Config.JWT_SECRET,
      signOptions: { expiresIn: '120s' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
