import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponse } from './common/classes/api-response';
import { ApiCode } from './common/constants/api-code';
import { Module } from './modules/database/model/entities';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Module)
    private readonly moduleRepository: Repository<Module>
  ) {}

  healthCheck(): ApiResponse<string> {
    return {
      status: HttpStatus.OK,
      data: null,
      pagination: null,
      message: 'OK',
      code: ApiCode.SUCCESS,
    };
  }

  async getModules(): Promise<ApiResponse<Module[]>> {
    return {
      status: HttpStatus.OK,
      data: await this.moduleRepository.find(),
      pagination: null,
      message: 'OK',
      code: ApiCode.SUCCESS,
    };
  }
}
