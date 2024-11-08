import { Config } from '@config/config';
import { AdminModule } from '@modules/admin/admin.module';
import { AuthModule } from '@modules/auth/auth.module';
import { ConstantModule } from '@modules/constant/constant.module';
import { DatabaseModule } from '@modules/database/database.module';
import { ModuleModule } from '@modules/module/module.module';
import { TelegramBotModule } from '@modules/telegram-bot/telegram-bot.module';
import { UserModule } from '@modules/user/user.module';
import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as childProcess from 'child_process';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Modules } from './modules/database/model/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Modules]),
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
    ConstantModule,
    UserModule,
    ModuleModule,
    TelegramBotModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  private logger = new Logger(AppModule.name);

  async onModuleInit() {
    this.logger.log('App is starting...');
    const command = 'yarn run seed:run';
    childProcess.execSync(command, { stdio: 'inherit' });

    this.logger.log('Seed command executed');
  }
}
