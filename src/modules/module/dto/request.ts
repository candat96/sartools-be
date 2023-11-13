import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

export class ViewModuleData {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  module: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => Number(value))
  time: number;
}

export class ViewModuleRequest {
  @ApiProperty({ required: true, type: [ViewModuleData] })
  @IsArray()
  @IsObject({ each: true })
  @Type(() => ViewModuleData)
  @ValidateNested({ each: true })
  view: ViewModuleData[];
}
