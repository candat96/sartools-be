import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CronService } from './cron.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Config } from '../../config/config';
import { User } from '../database/model/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({ secret: Config.JWT_SECRET }),
    ScheduleModule.forRoot(),
  ],
  controllers: [UserController],
  providers: [UserService, CronService],
})
export class UserModule {}
