import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserStatus } from '../../../database/model/entities';

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

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  position: string;
}