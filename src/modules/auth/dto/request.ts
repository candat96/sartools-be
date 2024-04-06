import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Position } from '../../database/model/entities';

export class SendResetPasswordEmailRequest {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  email: string;
}

export class LoginRequest extends SendResetPasswordEmailRequest {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class RegisterRequest extends LoginRequest {
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
  phone: string;
}

export class ChangePasswordRequest {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  oldPassword: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  newPassword: string;
}
