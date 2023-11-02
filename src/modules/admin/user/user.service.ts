import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as _ from 'lodash';
import * as moment from 'moment-timezone';
import { ILike, In, Repository } from 'typeorm';
import { v4 } from 'uuid';
import {
  CreateUserRequest,
  GetUserRequest,
  UpdateUserRequest,
} from './dto/request';
import {
  CreateUserResponse,
  GetUserResponse,
  UpdateUserResponse,
} from './dto/response';
import { ApiResponse } from '../../../common/classes/api-response';
import { ApiCode } from '../../../common/constants/api-code';
import { ErrorCode } from '../../../common/constants/error';
import { FRANCE_TIME_ZONE } from '../../../common/constants/timezone';
import { ApiException } from '../../../common/exception/api-exception';
import { hash } from '../../../common/utils/utils';
import { Role, User } from '../../database/model/entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(
    dto: CreateUserRequest,
  ): Promise<ApiResponse<CreateUserResponse>> {
    const existed = await this.userRepository.findOneBy({
      email: dto.email,
      role: Role.USER,
      deletedAt: null,
    });
    if (existed) {
      throw new ApiException(HttpStatus.BAD_REQUEST, ErrorCode.USER_EXISTED);
    }

    if (dto.startDate && dto.endDate && dto.startDate >= dto.endDate) {
      throw new ApiException(
        HttpStatus.BAD_REQUEST,
        ErrorCode.INVALID_EFFECTIVE_TIME,
      );
    }

    const salt: string = v4();
    const encryptedPassword: string = await hash(dto.password, salt);
    const startDate = moment().tz(FRANCE_TIME_ZONE).toDate();
    const endDate = moment(startDate)
      .tz(FRANCE_TIME_ZONE)
      .add(2, 'days')
      .toDate();
    const data = await this.userRepository.save(
      this.userRepository.create({
        ...dto,
        startDate: dto.startDate ? dto.startDate : startDate,
        endDate: dto.endDate ? dto.endDate : endDate,
        salt,
        password: encryptedPassword,
      }),
    );

    return {
      status: HttpStatus.OK,
      data: _.omit(data, ['salt', 'password']),
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }

  async updateUser(
    id: number,
    dto: UpdateUserRequest,
  ): Promise<ApiResponse<UpdateUserResponse>> {
    const user = await this.userRepository.findOneBy({
      id,
      deletedAt: null,
    });
    if (!user) {
      throw new ApiException(HttpStatus.BAD_REQUEST, ErrorCode.USER_NOT_FOUND);
    }

    if (dto.startDate && dto.endDate && dto.startDate >= dto.endDate) {
      throw new ApiException(
        HttpStatus.BAD_REQUEST,
        ErrorCode.INVALID_EFFECTIVE_TIME,
      );
    }

    await this.userRepository.update(id, dto);

    return {
      status: HttpStatus.OK,
      data: _.omit(await this.userRepository.findOneBy({ id }), [
        'salt',
        'password',
      ]),
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }

  async getUsers(dto: GetUserRequest): Promise<ApiResponse<GetUserResponse[]>> {
    const { search, page, size } = dto;

    const users = await this.userRepository.find({
      where: search
        ? [
            {
              name: ILike(`%${search}%`),
              role: Role.USER,
              deletedAt: null,
            },
            {
              email: ILike(`%${search}%`),
              role: Role.USER,
              deletedAt: null,
            },
          ]
        : { role: Role.USER, deletedAt: null },
      take: size,
      skip: (page - 1) * size,
    });

    const total = await this.userRepository.count({
      where: { role: Role.USER, deletedAt: null },
    });
    const data = users.map((item) => _.omit(item, ['salt', 'password']));

    return {
      status: HttpStatus.OK,
      data,
      pagination: {
        total,
        page,
        size,
      },
      message: null,
      code: ApiCode.SUCCESS,
    };
  }

  async deleteUser(id: number[]): Promise<ApiResponse<any>> {
    const user = await this.userRepository.findBy({
      id: In(id),
      role: Role.USER,
      deletedAt: null,
    });
    if (!user || !user.length) {
      throw new ApiException(HttpStatus.BAD_REQUEST, ErrorCode.USER_NOT_FOUND);
    }

    await this.userRepository.softDelete(id);

    return {
      status: HttpStatus.OK,
      data: null,
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }
}
