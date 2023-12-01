import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CronService } from './cron.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MapboxService } from '../../common/services/mapbox.service';
import { Config } from '../../config/config';
import { Location, User } from '../database/model/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Location]),
    JwtModule.register({ secret: Config.JWT_SECRET }),
    ScheduleModule.forRoot(),
  ],
  controllers: [UserController],
  providers: [UserService, CronService, MapboxService],
})
export class UserModule {}
