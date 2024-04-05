import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Config } from '../../config/config';
import { User } from '../database/model/entities';
import { MailjetService } from '../../common/services/mailjet.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({ secret: Config.JWT_SECRET }),
  ],
  controllers: [AuthController],
  providers: [AuthService, MailjetService],
})
export class AuthModule {}
