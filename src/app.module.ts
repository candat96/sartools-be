import { Module, OnModuleInit } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as childProcess from 'child_process';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './common/services/logger.service';
import { Config } from './config/config';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';

const logger = new LoggerService();
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public'),
      exclude: ['/sartools*'],
      serveStaticOptions: {
        index: [],
      },
      serveRoot: '/public',
    }),
    JwtModule.register({
      secret: Config.JWT_SECRET,
      signOptions: { expiresIn: '120s' },
    }),
    DatabaseModule,
    AdminModule,
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {
    logger.info('App is starting...');
    const command = 'yarn run seed:run';
    childProcess.execSync(command, { stdio: 'inherit' });

    logger.info('Seed command executed');
  }
}
