import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Position, UserStatus } from '../../../database/model/entities';

export class CreateUserRequest {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  startDate: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  endDate: Date;
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
  @IsDate()
  startDate: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
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
}