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

export class VisitWithinDayRequest {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsDateString()
  from: Date;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsDateString()
  to: Date;
}
