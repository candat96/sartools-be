import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule, DashboardModule],
  controllers: [],
  providers: [],
})
export class AdminModule {}
