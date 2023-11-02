import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNotEmpty } from 'class-validator';
import { UserStaticOption } from '../../../../common/constants/enum';

export class UserStaticRequest {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsDateString()
  startDate: Date;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsDateString()
  endDate: Date;

  @ApiProperty({ required: true, enum: UserStaticOption })
  @IsNotEmpty()
  @IsEnum(UserStaticOption)
  option: UserStaticOption;
}
