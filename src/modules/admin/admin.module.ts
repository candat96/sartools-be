import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConstantModule } from './constant/constant.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule, DashboardModule, ConstantModule],
  controllers: [],
  providers: [],
})
export class AdminModule {}
