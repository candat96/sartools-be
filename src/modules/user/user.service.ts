import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as _ from 'lodash';
import * as moment from 'moment-timezone';
import { LessThanOrEqual, Repository } from 'typeorm';
import { SaveLocationRequest } from './dto/request';
import { GetUserProfileResponse } from './dto/response';
import { ApiResponse } from '../../common/classes/api-response';
import { ApiCode } from '../../common/constants/api-code';
import { ErrorCode } from '../../common/constants/error';
import { FRANCE_TIME_ZONE } from '../../common/constants/timezone';
import { ApiException } from '../../common/exception/api-exception';
import { Location, User, UserStatus } from '../database/model/entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async getUserProfile(
    userId: number,
  ): Promise<ApiResponse<GetUserProfileResponse>> {
    const user = await this.userRepository.findOneBy({
      id: userId,
    });
    if (user.endDate <= moment().tz(FRANCE_TIME_ZONE).toDate()) {
      throw new ApiException(HttpStatus.BAD_REQUEST, ErrorCode.USER_INACTIVED);
    }
    if (user.status === UserStatus.INACTIVE) {
      throw new ApiException(HttpStatus.BAD_REQUEST, ErrorCode.USER_INACTIVED);
    }
    if (user.isDeleted !== false) {
      throw new ApiException(HttpStatus.BAD_REQUEST, ErrorCode.USER_DELETED);
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
      isDeleted: false,
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

  async saveLocation(userId: number, dto: SaveLocationRequest) {
    const user = await this.userRepository.findOneBy({
      id: userId,
    });

    const { latitude, longitude } = dto;

    return {
      status: HttpStatus.OK,
      data: _.omit(
        await this.locationRepository.save(
          this.locationRepository.create({ user, latitude, longitude }),
        ),
        ['salt', 'password'],
      ),
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }
}
