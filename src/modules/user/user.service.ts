import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as _ from 'lodash';
import * as moment from 'moment-timezone';
import { LessThanOrEqual, Repository } from 'typeorm';
import { GetUserProfileResponse } from './dto/response';
import { ApiResponse } from '../../common/classes/api-response';
import { ApiCode } from '../../common/constants/api-code';
import { FRANCE_TIME_ZONE } from '../../common/constants/timezone';
import { User, UserStatus } from '../database/model/entities';
import { ApiException } from '../../common/exception/api-exception';
import { ErrorCode } from '../../common/constants/error';

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
    if (user.status === UserStatus.INACTIVE) {
      throw new ApiException(HttpStatus.BAD_REQUEST, ErrorCode.USER_INACTIVE);
    }

    return {
      status: HttpStatus.OK,
      data: _.omit(user, ['salt', 'password']),
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }

  async inactiveUser() {
    const now = moment().tz(FRANCE_TIME_ZONE).toDate();
    const users = await this.userRepository.findBy({
      endDate: LessThanOrEqual(now),
      status: UserStatus.ACTIVE,
      deletedAt: null,
    });

    if (users && users.length) {
      await this.userRepository.save(
        users.map((item) => ({
          ...item,
          status: UserStatus.INACTIVE,
        })),
      );
    }
  }
}
