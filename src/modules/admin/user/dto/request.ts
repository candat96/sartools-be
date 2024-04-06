import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { SortOption, SortUserOptions } from '../../../../common/constants/enum';
import { toBoolean } from '../../../../common/utils/utils';
import { Position, UserStatus } from '../../../database/model/entities';

export class CreateUserRequest {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  company: string;

  @ApiProperty({ required: false, enum: Position })
  @IsOptional()
  @IsEnum(Position)
  position: Position;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  startDate: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  endDate: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty({ required: false, enum: UserStatus })
  @IsOptional()
  @IsEnum(UserStatus)
  status: UserStatus;
}

export class UpdateUserRequest {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  company: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  startDate: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  endDate: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  avatar: string;

  @ApiProperty({ required: false, enum: UserStatus })
  @IsOptional()
  @IsEnum(UserStatus)
  status: UserStatus;

  @ApiProperty({ required: false, enum: Position })
  @IsOptional()
  @IsEnum(Position)
  position: Position;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  phone: string;
}

export class GetUserRequest {
  @ApiPropertyOptional({ required: false })
  @IsOptional()
  @IsString()
  search: string;

  @ApiPropertyOptional({ required: false, default: 1 })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  page: number;

  @ApiPropertyOptional({ required: false, default: 13 })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  size: number;

  @ApiProperty({ required: false, enum: SortUserOptions })
  @IsOptional()
  @IsEnum(SortUserOptions)
  sortBy: SortUserOptions;

  @ApiProperty({ required: false, enum: SortOption })
  @IsOptional()
  @IsEnum(SortOption)
  sortOption: SortOption;

  @ApiProperty({ required: false, type: Boolean })
  @IsOptional()
  @Transform(({ value }) => toBoolean(value))
  getAll: boolean;
}

export class DeleteUserRequest {
  @ApiProperty({ required: true, type: () => [Number] })
  @IsNumber({}, { each: true })
  id: number[];
}

export class ResetPasswordRequest {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  password: string;
}
