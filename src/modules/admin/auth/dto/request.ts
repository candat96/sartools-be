import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { REGEX } from '../../../../common/constants/regex';

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
