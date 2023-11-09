import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { Config } from '../../../config/config';
import { User } from '../../database/model/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({ secret: Config.JWT_SECRET }),
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
