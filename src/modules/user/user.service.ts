import { ApiResponse } from '@common/classes/api-response';
import { ApiCode } from '@common/constants/api-code';
import { ErrorCode } from '@common/constants/error';
import { FRANCE_TIME_ZONE } from '@common/constants/timezone';
import { ApiException } from '@common/exception/api-exception';
import { MapboxService } from '@common/services/mapbox.service';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as _ from 'lodash';
import * as moment from 'moment-timezone';
import { LessThanOrEqual, Repository } from 'typeorm';
import { SaveLocationRequest } from './dto/request';
import { GetUserProfileResponse } from './dto/response';
import { Location, User, UserStatus } from '../database/model/entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
    private readonly mapboxService: MapboxService,
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
    const location = await this.mapboxService.reverseGeocoding(
      latitude,
      longitude,
    );

    let regionId = null;
    let regionName = null;
    let countryId = null;
    let countryName = null;

    const address = location.features.shift();
    if (address) {
      const region = address.context.find((item: any) =>
        item.id.includes('region'),
      );
      const place = address.context.find((item: any) =>
        item.id.includes('place'),
      );
      const country = address.context.find((item: any) =>
        item.id.includes('country'),
      );

      regionId = region ? region?.id : place ? place.id : null;
      regionName = region ? region?.text : place ? place.text : null;
      countryId = country?.id || null;
      countryName = country?.text || null;
    }

    return {
      status: HttpStatus.OK,
      data: _.omit(
        await this.locationRepository.save(
          this.locationRepository.create({
            user,
            latitude,
            longitude,
            regionId,
            regionName,
            countryId,
            countryName,
          }),
        ),
        ['salt', 'password'],
      ),
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }
}
