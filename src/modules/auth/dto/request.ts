import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { REGEX } from '../../../common/constants/regex';
import { Position } from '../../database/model/entities';

export class LoginRequest {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  @Matches(REGEX.EMAIL)
  email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  @Matches(REGEX.PASSWORD)
  password: string;
}

export class RegisterRequest {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  @Matches(REGEX.EMAIL)
  email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  @Matches(REGEX.PASSWORD)
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
  @IsString()
  province: string;
}
