import { HttpStatus, Injectable } from '@nestjs/common';
import { ApiResponse } from './common/classes/api-response';
import { ApiCode } from './common/constants/api-code';

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
