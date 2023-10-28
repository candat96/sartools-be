import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as _ from 'lodash';
import { Repository } from 'typeorm';
import { GetUserProfileResponse } from './dto/response';
import { ApiResponse } from '../../common/classes/api-response';
import { ApiCode } from '../../common/constants/api-code';
import { User } from '../database/model/entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUserProfile(
    userId: number,
  ): Promise<ApiResponse<GetUserProfileResponse>> {
    const user = await this.userRepository.findOneBy({
      id: userId,
      deletedAt: null,
    });

    return {
      status: HttpStatus.OK,
      data: _.omit(user, ['salt', 'password']),
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }
}
