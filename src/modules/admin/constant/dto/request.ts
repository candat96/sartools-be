import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { Constant } from '../../../../common/constants/enum';

export class GetConstantRequest {
  @ApiProperty({ required: true, enum: Constant })
  @IsNotEmpty()
  @IsEnum(Constant)
  type: Constant;
}
