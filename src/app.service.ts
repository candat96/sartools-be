import { ApiResponse } from '@common/classes/api-response';
import { ApiCode } from '@common/constants/api-code';
import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthCheck(): ApiResponse<string> {
    return {
      status: HttpStatus.OK,
      data: null,
      pagination: null,
      message: 'OK',
      code: ApiCode.SUCCESS,
    };
  }
}
