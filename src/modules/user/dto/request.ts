import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class SaveLocationRequest {
  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  longitude: number;
}
