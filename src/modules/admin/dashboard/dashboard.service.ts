import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserStaticRequest } from './dto/request';
import { UserStaticResponse } from './dto/response';
import { ApiResponse } from '../../../common/classes/api-response';
import { ApiCode } from '../../../common/constants/api-code';
import { User } from '../../database/model/entities';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async userStatic(
    dto: UserStaticRequest,
  ): Promise<ApiResponse<UserStaticResponse[]>> {
    const { startDate, endDate } = dto;

    const data: UserStaticResponse[] = await this.userRepository
      .createQueryBuilder()
      .select('createdAt as date')
      .addSelect('COUNT(id) as total')
      .where('createdAt >= :startDate', { startDate })
      .andWhere('createdAt <= :endDate', { endDate })
      .groupBy('date')
      .getRawMany();

    return {
      status: HttpStatus.OK,
      data: data.map((item) => ({
        ...item,
        total: Number(item.total),
      })),
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }
}
