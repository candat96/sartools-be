import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as _ from 'lodash';
import * as moment from 'moment-timezone';
import { FindOptionsOrder, ILike, In, Repository } from 'typeorm';
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
import { SortOption, SortUserOptions } from '../../../common/constants/enum';
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
      isDeleted: false,
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
      .add(1, 'month')
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
      isDeleted: false,
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
    const { search, getAll, sortBy, sortOption, page = 1, size } = dto;

    let order: FindOptionsOrder<User> = { createdAt: 'DESC' };
    switch (true) {
      case sortBy === SortUserOptions.SERIAL && sortOption === SortOption.ASC:
        order = { id: 'ASC' };
        break;
      case sortBy === SortUserOptions.SERIAL && sortOption === SortOption.DESC:
        order = { id: 'DESC' };
        break;
      case sortBy === SortUserOptions.NAME && sortOption === SortOption.ASC:
        order = { name: 'ASC' };
        break;
      case sortBy === SortUserOptions.NAME && sortOption === SortOption.DESC:
        order = { name: 'DESC' };
        break;
      case sortBy === SortUserOptions.EMAIL && sortOption === SortOption.ASC:
        order = { email: 'ASC' };
        break;
      case sortBy === SortUserOptions.EMAIL && sortOption === SortOption.DESC:
        order = { email: 'DESC' };
        break;
      case sortBy === SortUserOptions.PHONE && sortOption === SortOption.ASC:
        order = { phone: 'ASC' };
        break;
      case sortBy === SortUserOptions.PHONE && sortOption === SortOption.DESC:
        order = { phone: 'DESC' };
        break;
      case sortBy === SortUserOptions.COMPANY && sortOption === SortOption.ASC:
        order = { company: 'ASC' };
        break;
      case sortBy === SortUserOptions.COMPANY && sortOption === SortOption.DESC:
        order = { company: 'DESC' };
        break;
      case sortBy === SortUserOptions.END_DATE && sortOption === SortOption.ASC:
        order = { endDate: 'ASC' };
        break;
      case sortBy === SortUserOptions.END_DATE &&
        sortOption === SortOption.DESC:
        order = { endDate: 'DESC' };
        break;
      case sortBy === SortUserOptions.STATUS && sortOption === SortOption.ASC:
        order = { status: 'ASC' };
        break;
      case sortBy === SortUserOptions.STATUS && sortOption === SortOption.DESC:
        order = { status: 'DESC' };
        break;
      case sortBy === SortUserOptions.POSITION && sortOption === SortOption.ASC:
        order = { position: 'ASC' };
        break;
      case sortBy === SortUserOptions.POSITION &&
        sortOption === SortOption.DESC:
        order = { position: 'DESC' };
        break;
      default:
        break;
    }

    const users = await this.userRepository.find(
      getAll
        ? {
            where: search
              ? [
                  {
                    name: ILike(`%${search}%`),
                    role: Role.USER,
                    isDeleted: false,
                  },
                  {
                    email: ILike(`%${search}%`),
                    role: Role.USER,
                    isDeleted: false,
                  },
                ]
              : { role: Role.USER, isDeleted: false },
            order,
          }
        : {
            where: search
              ? [
                  {
                    name: ILike(`%${search}%`),
                    role: Role.USER,
                    isDeleted: false,
                  },
                  {
                    email: ILike(`%${search}%`),
                    role: Role.USER,
                    isDeleted: false,
                  },
                ]
              : { role: Role.USER, isDeleted: false },
            order,
            take: size,
            skip: (page - 1) * size,
          },
    );

    const total = await this.userRepository.count({
      where: { role: Role.USER, isDeleted: false },
    });
    const data = users.map((item) => _.omit(item, ['salt', 'password']));

    return {
      status: HttpStatus.OK,
      data,
      pagination: {
        total,
        page,
        size: getAll ? null : size,
      },
      message: null,
      code: ApiCode.SUCCESS,
    };
  }

  async deleteUser(id: number[]): Promise<ApiResponse<null>> {
    const user = await this.userRepository.findBy({
      id: In(id),
      role: Role.USER,
      isDeleted: false,
    });
    if (!user || !user.length) {
      throw new ApiException(HttpStatus.BAD_REQUEST, ErrorCode.USER_NOT_FOUND);
    }

    await this.userRepository.save(
      user.map((item) => ({
        ...item,
        isDeleted: true,
      })),
    );

    return {
      status: HttpStatus.OK,
      data: null,
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }

  async resetPassword(
    id: number,
    password: string,
  ): Promise<ApiResponse<null>> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new ApiException(HttpStatus.BAD_REQUEST, ErrorCode.USER_NOT_FOUND);
    }

    const salt: string = v4();
    const encryptedPassword: string = await hash(password, salt);

    await this.userRepository.update(id, { salt, password: encryptedPassword });

    return {
      status: HttpStatus.OK,
      data: null,
      pagination: null,
      message: 'Success',
      code: ApiCode.SUCCESS,
    };
  }
}
