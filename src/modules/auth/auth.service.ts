import { Config } from '../../config/config';
import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as _ from 'lodash';
import * as moment from 'moment-timezone';
import { IsNull, Repository } from 'typeorm';
import { v4 } from 'uuid';
import {
  ChangePasswordRequest,
  ConfigEnableAuthRequest,
  LoginRequest,
  RegisterRequest,
} from './dto/request';
import { LoginResponse, RegisterResponse } from './dto/response';
import { ApiResponse } from '../../common/classes/api-response';
import { ApiCode } from '../../common/constants/api-code';
import { Constant } from '../../common/constants/constant';
import { ErrorCode } from '../../common/constants/error';
import { FRANCE_TIME_ZONE } from '../../common/constants/timezone';
import { ApiException } from '../../common/exception/api-exception';
import { MailjetService } from '../../common/services/mailjet.service';
import { compare, hash } from '../../common/utils/utils';
import { EnableAuth, Role, User, UserStatus } from '../database/model/entities';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(EnableAuth)
    private readonly enableAuthRepository: Repository<EnableAuth>,
    private readonly jwtService: JwtService,
    private readonly mailjetService: MailjetService,
  ) {}

  async login(dto: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    const { email, password: inputPassword } = dto;

    const users = await this.userRepository.findBy({
      email,
      role: Role.USER,
    });
    if (!users.length) {
      throw new ApiException(HttpStatus.BAD_REQUEST, ErrorCode.USER_NOT_FOUND);
    }

    const user = users.find((item) => !item.isDeleted);
    const deletedUser = users.find((item) => item.isDeleted);
    if (!user && deletedUser) {
      throw new ApiException(HttpStatus.BAD_REQUEST, ErrorCode.USER_DELETED);
    }
    if (user.status !== UserStatus.ACTIVE) {
      throw new ApiException(HttpStatus.BAD_REQUEST, ErrorCode.USER_INACTIVED);
    }

    const { salt, password } = user;
    const isPasswordValid = await compare(inputPassword, salt, password);
    if (!isPasswordValid) {
      throw new ApiException(
        HttpStatus.BAD_REQUEST,
        ErrorCode.INVALID_PASSWORD,
      );
    }

    if (dto.platform) {
      user.platform = dto.platform;
      await this.userRepository.save(user);
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
      isDeleted: false,
    });
    if (user) {
      throw new ApiException(HttpStatus.BAD_REQUEST, ErrorCode.USER_EXISTED);
    }

    const salt = v4();
    const encryptedPassword: string = await hash(dto.password, salt);
    const startDate = moment().tz(FRANCE_TIME_ZONE).toDate();
    const endDate = moment(startDate)
      .tz(FRANCE_TIME_ZONE)
      .add(1, 'month')
      .toDate();
    const data = await this.userRepository.save(
      this.userRepository.create({
        ...dto,
        startDate,
        endDate,
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

  async changePassword(
    userId: number,
    dto: ChangePasswordRequest,
  ): Promise<ApiResponse<null>> {
    const user = await this.userRepository.findOneBy({
      id: userId,
      role: Role.USER,
      isDeleted: false,
    });

    const { salt, password } = user;
    const isPasswordValid = await compare(dto.oldPassword, salt, password);
    if (!isPasswordValid) {
      throw new ApiException(
        HttpStatus.BAD_REQUEST,
        ErrorCode.INVALID_PASSWORD,
      );
    }

    const newSalt = v4();
    const encryptedPassword: string = await hash(dto.newPassword, newSalt);

    await this.userRepository.save({
      ...user,
      salt: newSalt,
      password: encryptedPassword,
    });

    return {
      status: HttpStatus.OK,
      data: null,
      pagination: null,
      message: 'Success',
      code: ApiCode.SUCCESS,
    };
  }

  buildResetPasswordLink(token: string): string {
    return `${Config.SARTOOLS_WEB_DOMAIN}/reset-password?token=${token}`;
  }

  async sendResetPasswordEmail(email: string): Promise<ApiResponse<null>> {
    const user = await this.userRepository.findOneBy({
      email,
      role: Role.USER,
      isDeleted: false,
    });
    if (!user) {
      throw new ApiException(HttpStatus.BAD_REQUEST, ErrorCode.USER_NOT_FOUND);
    }

    const token = btoa(user.id.toString() + Config.JWT_SECRET_KEY);

    await this.mailjetService.sendEmail({
      fromEmail: Constant.SARTOOLS_EMAIL,
      fromName: Constant.SARTOOLS_NAME,
      toEmail: email,
      toName: user.name,
      link: this.buildResetPasswordLink(token),
    });

    return {
      status: HttpStatus.OK,
      data: null,
      pagination: null,
      message: 'Success',
      code: ApiCode.SUCCESS,
    };
  }

  async configEnableAuth(dto: ConfigEnableAuthRequest) {
    const { isEnable } = dto;

    const existed = await this.enableAuthRepository.findOneBy({
      deletedAt: IsNull(),
    });
    if (!existed) {
      const newRecord = await this.enableAuthRepository.save(
        this.enableAuthRepository.create({ isEnable: true }),
      );

      return {
        status: HttpStatus.OK,
        data: newRecord.isEnable,
        pagination: null,
        message: 'Success',
        code: ApiCode.SUCCESS,
      };
    }

    existed.isEnable = isEnable;
    const updated = await this.enableAuthRepository.save(existed);

    return {
      status: HttpStatus.OK,
      data: updated.isEnable,
      pagination: null,
      message: 'Success',
      code: ApiCode.SUCCESS,
    };
  }

  async getEnableAuth() {
    const enableAuth = await this.enableAuthRepository.findOneBy({
      deletedAt: IsNull(),
    });
    if (!enableAuth) {
      const newRecord = await this.enableAuthRepository.save(
        this.enableAuthRepository.create({ isEnable: true }),
      );

      return {
        status: HttpStatus.OK,
        data: newRecord.isEnable,
        pagination: null,
        message: 'Success',
        code: ApiCode.SUCCESS,
      };
    }

    return {
      status: HttpStatus.OK,
      data: enableAuth.isEnable,
      pagination: null,
      message: 'Success',
      code: ApiCode.SUCCESS,
    };
  }
}
