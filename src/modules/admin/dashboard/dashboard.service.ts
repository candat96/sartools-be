import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { UserStaticRequest, VisitWithinDayRequest } from './dto/request';
import {
  StaticResponse,
  UserStaticResponse,
  ViewDataResponse,
  VisitWithinDayResponse,
} from './dto/response';
import { ApiResponse } from '../../../common/classes/api-response';
import { ApiCode } from '../../../common/constants/api-code';
import { User, View } from '../../database/model/entities';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(View)
    private readonly viewRepository: Repository<View>,
  ) {}

  async userStatic(
    dto: UserStaticRequest,
  ): Promise<ApiResponse<UserStaticResponse>> {
    const { startDate, endDate } = dto;

    const data: StaticResponse[] = await this.userRepository
      .createQueryBuilder()
      .select('DATE(createdAt) as date')
      .addSelect('COUNT(id) as total')
      .where('createdAt >= :startDate', { startDate })
      .andWhere('createdAt <= :endDate', { endDate })
      .andWhere('isDeleted = false')
      .groupBy('date')
      .getRawMany();

    const totalUsers = await this.userRepository.count({
      where: { isDeleted: false },
    });
    const newUsers = await this.userRepository.countBy({
      createdAt: Between(startDate, endDate),
      isDeleted: false,
    });
    const viewData: ViewDataResponse = await this.viewRepository
      .createQueryBuilder()
      .select('SUM(view) as views')
      .addSelect('SUM(time) as time')
      .where('createdAt >= :startDate AND createdAt <= :endDate', {
        startDate,
        endDate,
      })
      .getRawOne();

    return {
      status: HttpStatus.OK,
      data: {
        static: data.map((item) => ({
          date: new Date(item.date).toISOString(),
          total: Number(item.total),
        })),
        totalUsers,
        newUsers,
        views: viewData?.views ? Number(viewData?.views) : null,
        averageEngagementTime:
          viewData.views && viewData.time
            ? Number(
                (Number(viewData.time) / Number(viewData.views)).toFixed(2),
              )
            : null,
      },
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }

  async visitWithinDay(
    dto: VisitWithinDayRequest,
  ): Promise<ApiResponse<VisitWithinDayResponse[]>> {
    const { from, to } = dto;

    const raw: VisitWithinDayResponse[] = await this.viewRepository
      .createQueryBuilder('v')
      .select('DATE_FORMAT(v.createdAt, "%H")', 'hour')
      .addSelect('COUNT(DISTINCT v.userId)', 'count')
      .where('v.createdAt >= :from AND v.createdAt <= :to', { from, to })
      .groupBy('hour')
      .getRawMany().then((d) => d.map((item) => ({
        ...item,
        count: Number(item.count),
      })));

    const data: VisitWithinDayResponse[] = Array.from({ length: 25 }, (_, index: number) => {
      const hour = index.toString().padStart(2, '0');
      const existed = raw.find((item) => item.hour === hour);

      if (existed) return existed;

      return {
        hour,
        count: 0
      };
    });

    return {
      status: HttpStatus.OK,
      data,
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }
}
