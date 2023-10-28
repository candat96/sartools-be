import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as _ from 'lodash';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';
import { LoginRequest, RegisterRequest } from './dto/request';
import { LoginResponse, RegisterResponse } from './dto/response';
import { ApiResponse } from '../../common/classes/api-response';
import { ApiCode } from '../../common/constants/api-code';
import { ErrorCode } from '../../common/constants/error';
import { ApiException } from '../../common/exception/api-exception';
import { compare, hash } from '../../common/utils/utils';
import { Config } from '../../config/config';
import { Role, User, UserStatus } from '../database/model/entities';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    const { email, password: inputPassword } = dto;

    const user = await this.userRepository.findOneBy({
      email,
      role: Role.USER,
      status: UserStatus.ACTIVE,
      deletedAt: null,
    });
    if (!user) {
      throw new ApiException(HttpStatus.BAD_REQUEST, ErrorCode.USER_NOT_FOUND);
    }

    const { salt, password } = user;
    const isPasswordValid = await compare(inputPassword, salt, password);
    if (!isPasswordValid) {
      throw new ApiException(
        HttpStatus.BAD_REQUEST,
        ErrorCode.INVALID_PASSWORD,
      );
    }

    const info = _.omit(user, ['salt', 'password']);
    const token: string = this.jwtService.sign(info, {
      secret: Config.JWT_SECRET_KEY,
      expiresIn: Config.JWT_EXPIRED_TIME,
    });

    return {
      status: HttpStatus.OK,
      data: {
        token,
      },
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }

  async register(dto: RegisterRequest): Promise<ApiResponse<RegisterResponse>> {
    const user = await this.userRepository.findOneBy({
      email: dto.email,
      role: Role.USER,
      deletedAt: null,
    });
    if (user) {
      throw new ApiException(HttpStatus.BAD_REQUEST, ErrorCode.USER_EXISTED);
    }

    const salt = v4();
    const encryptedPassword: string = await hash(dto.password, salt);
    const data = await this.userRepository.save(
      this.userRepository.create({
        ...dto,
        salt,
        password: encryptedPassword,
        status: UserStatus.ACTIVE,
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
}
