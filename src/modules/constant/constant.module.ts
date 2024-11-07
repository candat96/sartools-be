import { ConstantModule as AdminConstantModule } from '@modules/admin/constant/constant.module';
import { ConstantController } from '@modules/constant/constant.controller';
import { ConstantService } from '@modules/constant/constant.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [AdminConstantModule],
  controllers: [ConstantController],
  providers: [ConstantService],
  exports: [ConstantService],
})
export class ConstantModule {}
