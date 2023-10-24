import { HttpStatus } from '@nestjs/common';
import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { ApiCode } from '../constants/api-code';

export class Pagination {
  @ApiProperty()
  @ApiResponseProperty()
  total: number;

  @ApiProperty()
  @ApiResponseProperty()
  page: number;

  @ApiProperty()
  @ApiResponseProperty()
  size: number;
}

export class ApiResponse<T> {
  @ApiProperty({ example: HttpStatus.OK })
  @ApiResponseProperty()
  status: HttpStatus;

  @ApiProperty()
  @ApiResponseProperty()
  data: T;

  @ApiProperty()
  @ApiResponseProperty()
  pagination?: Pagination;

  @ApiProperty({ required: false })
  @ApiResponseProperty()
  message?: string;

  @ApiProperty({
    required: false,
    example: ApiCode.SUCCESS,
  })
  @ApiResponseProperty()
  code?: ApiCode;
}
