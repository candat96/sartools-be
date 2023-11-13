import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleController } from './module.controller';
import { ModuleService } from './module.service';
import { Config } from '../../config/config';
import { Modules, User, View } from '../database/model/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, View, Modules]),
    JwtModule.register({ secret: Config.JWT_SECRET }),
  ],
  controllers: [ModuleController],
  providers: [ModuleService],
})
export class ModuleModule {}
