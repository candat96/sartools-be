import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDateString, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { QueryOption } from '../../../../common/constants/enum';

export class UserStaticRequest {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsDateString()
  from: Date;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsDateString()
  to: Date;

  @ApiProperty({ required: true, enum: QueryOption })
  @IsNotEmpty()
  @IsEnum(QueryOption)
  option: QueryOption;
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

export class ModuleViewRequest extends VisitWithinDayRequest {
  @ApiProperty({ required: true, default: 1 })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  page: number;

  @ApiProperty({ required: true, default: 20 })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  size: number;
}

export class BounceRequest extends UserStaticRequest {}
export class RetentionRequest extends UserStaticRequest {}

export class RegionRequest extends VisitWithinDayRequest {}
