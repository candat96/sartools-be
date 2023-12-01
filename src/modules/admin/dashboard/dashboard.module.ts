import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { Config } from '../../../config/config';
import { Location, User, View } from '../../database/model/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, View, Location]),
    JwtModule.register({ secret: Config.JWT_SECRET }),
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
