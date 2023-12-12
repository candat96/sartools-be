import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import {
  BounceRequest,
  ModuleViewRequest,
  RegionRequest,
  RetentionRequest,
  UserStaticRequest,
  VisitWithinDayRequest,
} from './dto/request';
import {
  StaticResponse,
  UserStaticResponse,
  ViewDataResponse,
  ModuleViewRawInterface,
  VisitWithinDayResponse,
  ModuleViewResponse,
  TotalModuleInterface,
  ModuleViewStatisticInterface,
  BounceResponse,
  UsedByDayRawInterface,
  UsedInterface,
  RetentionResponse,
  RegionResponse,
} from './dto/response';
import { ApiResponse } from '../../../common/classes/api-response';
import { ApiCode } from '../../../common/constants/api-code';
import { QueryOption } from '../../../common/constants/enum';
import { getYear } from '../../../common/utils/utils';
import { Location, User, View } from '../../database/model/entities';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(View)
    private readonly viewRepository: Repository<View>,
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async userStatic(
    dto: UserStaticRequest,
  ): Promise<ApiResponse<UserStaticResponse>> {
    const { from, to, option } = dto;
    const year = getYear();

    let queryString = 'DATE(createdAt)';
    switch (option) {
      case QueryOption.DAY:
        queryString = 'DATE(createdAt)';
        break;
      case QueryOption.WEEK:
        queryString = 'WEEK(createdAt)';
        break;
      case QueryOption.MONTH:
        queryString = 'MONTH(createdAt)';
        break;
      case QueryOption.YEAR:
        queryString = 'YEAR(createdAt)';
        break;
      default:
        break;
    }

    const data: StaticResponse[] = await this.userRepository
      .createQueryBuilder()
      .select(`${queryString} as date`)
      .addSelect('COUNT(id) as total')
      .where('createdAt >= :from', { from })
      .andWhere('createdAt <= :to', { to })
      .andWhere('isDeleted = false')
      .groupBy('date')
      .getRawMany();

    const totalUsers = await this.userRepository.count({
      where: { isDeleted: false },
    });
    const newUsers = await this.userRepository.countBy({
      createdAt: Between(from, to),
      isDeleted: false,
    });
    const viewData: ViewDataResponse = await this.viewRepository
      .createQueryBuilder()
      .select('SUM(view) as views')
      .addSelect('SUM(time) as time')
      .where('createdAt >= :from AND createdAt <= :to', {
        from,
        to,
      })
      .getRawOne();

    return {
      status: HttpStatus.OK,
      data: {
        static: data.map((item) => ({
          date:
            option === QueryOption.DAY
              ? new Date(item.date).toISOString()
              : option === QueryOption.YEAR
              ? item.date.toString()
              : `${item.date.toString()}/${year}`,
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
      .getRawMany()
      .then((d) =>
        d.map((item) => ({
          ...item,
          count: Number(item.count),
        })),
      );

    const data: VisitWithinDayResponse[] = Array.from(
      { length: 25 },
      (_, index: number) => {
        const hour = index.toString().padStart(2, '0');
        const existed = raw.find((item) => item.hour === hour);

        if (existed) return existed;

        return {
          hour,
          count: 0,
        };
      },
    );

    return {
      status: HttpStatus.OK,
      data,
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }

  async moduleView(
    dto: ModuleViewRequest,
  ): Promise<ApiResponse<ModuleViewResponse>> {
    const { from, to, page, size } = dto;

    const raw: ModuleViewRawInterface[] = await this.viewRepository
      .createQueryBuilder('v')
      .select(
        'm.name as name, SUM(v.view) as views, COUNT(DISTINCT v.userId) as users, SUM(v.time) as usageTime',
      )
      .leftJoin('v.module', 'm')
      .where('v.createdAt >= :from AND v.createdAt <= :to', { from, to })
      .groupBy('v.moduleId')
      .take(size)
      .skip((page - 1) * size)
      .getRawMany();

    const total: TotalModuleInterface = await this.viewRepository
      .createQueryBuilder('v')
      .select('COUNT(DISTINCT v.moduleId) as total')
      .where('v.createdAt >= :from AND v.createdAt <= :to', { from, to })
      .getRawOne();

    const statistic: ModuleViewStatisticInterface = await this.viewRepository
      .createQueryBuilder('v')
      .select(
        'SUM(v.view) as totalViews, COUNT(DISTINCT v.userId) as totalUsers, SUM(v.time) as totalUsageTime',
      )
      .where('v.createdAt >= :from AND v.createdAt <= :to', { from, to })
      .getRawOne();

    return {
      status: HttpStatus.OK,
      data: {
        views: raw.map((item) => ({
          name: item.name,
          views: Number(item.views),
          users: Number(item.users),
          viewsPerUser:
            item.views && item.users
              ? Number((Number(item.views) / Number(item.users)).toFixed(2))
              : null,
          averageUsageTime:
            item.usageTime && item.views
              ? Number((Number(item.usageTime) / Number(item.views)).toFixed(2))
              : null,
        })),
        totalViews: Number(statistic.totalViews),
        totalUsers: Number(statistic.totalUsers),
        viewsPerUser:
          statistic.totalViews && statistic.totalUsers
            ? Number(
                (
                  Number(statistic.totalViews) / Number(statistic.totalUsers)
                ).toFixed(2),
              )
            : null,
        averageUsageTime:
          statistic.totalUsageTime && statistic.totalViews
            ? Number(
                (
                  Number(statistic.totalUsageTime) /
                  Number(statistic.totalViews)
                ).toFixed(2),
              )
            : null,
      },
      pagination: {
        page,
        size,
        total: total?.total ? Number(total.total) : null,
      },
      message: null,
      code: ApiCode.SUCCESS,
    };
  }

  async bounce(dto: BounceRequest): Promise<ApiResponse<BounceResponse>> {
    const { from, to, option } = dto;
    const year = getYear();

    let queryString = 'DATE(createdAt)';
    switch (option) {
      case QueryOption.DAY:
        queryString = 'DATE(createdAt)';
        break;
      case QueryOption.WEEK:
        queryString = 'WEEK(createdAt)';
        break;
      case QueryOption.MONTH:
        queryString = 'MONTH(createdAt)';
        break;
      case QueryOption.YEAR:
        queryString = 'YEAR(createdAt)';
        break;
      default:
        break;
    }

    const raw: UsedByDayRawInterface[] = await this.viewRepository
      .createQueryBuilder('v')
      .select(`${queryString} AS date, COUNT(DISTINCT v.userId) AS count`)
      .where('v.createdAt >= :from AND v.createdAt <= :to', { from, to })
      .groupBy('date')
      .getRawMany();

    const used: UsedInterface = await this.viewRepository
      .createQueryBuilder('v')
      .select('COUNT(DISTINCT v.userId) AS count')
      .where('v.createdAt >= :from AND v.createdAt <= :to', { from, to })
      .getRawOne();

    const total: number = await this.userRepository.count({
      where: { isDeleted: false },
    });

    return {
      status: HttpStatus.OK,
      data: {
        bounce: raw.map((item) => ({
          date:
            option === QueryOption.DAY
              ? new Date(item.date).toISOString()
              : option === QueryOption.YEAR
              ? item.date.toString()
              : `${item.date.toString()}/${year}`,
          percent: Number(
            (((total - Number(item.count)) / total) * 100).toFixed(2),
          ),
        })),
        rate: Number((((total - Number(used.count)) / total) * 100).toFixed(2)),
      },
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }

  async retention(
    dto: RetentionRequest,
  ): Promise<ApiResponse<RetentionResponse>> {
    const { from, to, option } = dto;
    const year = getYear();

    let queryString = 'DATE(createdAt)';
    switch (option) {
      case QueryOption.DAY:
        queryString = 'DATE(createdAt)';
        break;
      case QueryOption.WEEK:
        queryString = 'WEEK(createdAt)';
        break;
      case QueryOption.MONTH:
        queryString = 'MONTH(createdAt)';
        break;
      case QueryOption.YEAR:
        queryString = 'YEAR(createdAt)';
        break;
      default:
        break;
    }

    const raw: UsedByDayRawInterface[] = await this.viewRepository
      .createQueryBuilder('v')
      .select(`${queryString} AS date, COUNT(DISTINCT v.userId) AS count`)
      .where('v.createdAt >= :from AND v.createdAt <= :to', { from, to })
      .groupBy('date')
      .getRawMany();

    const used: UsedInterface = await this.viewRepository
      .createQueryBuilder('v')
      .select('COUNT(DISTINCT v.userId) AS count')
      .where('v.createdAt >= :from AND v.createdAt <= :to', { from, to })
      .getRawOne();

    const total: number = await this.userRepository.count({
      where: { isDeleted: false },
    });

    return {
      status: HttpStatus.OK,
      data: {
        retention: raw.map((item) => ({
          date:
            option === QueryOption.DAY
              ? new Date(item.date).toISOString()
              : option === QueryOption.YEAR
              ? item.date.toString()
              : `${item.date.toString()}/${year}`,
          percent: Number(((Number(item.count) / total) * 100).toFixed(2)),
        })),
        rate: Number(((Number(used.count) / total) * 100).toFixed(2)),
      },
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }

  async region(dto: RegionRequest): Promise<ApiResponse<RegionResponse[]>> {
    const { from, to } = dto;

    const data: RegionResponse[] = await this.locationRepository
      .createQueryBuilder('l')
      .select(
        'l.regionId as regionId, l.regionName as regionName, l.countryId as countryId, l.countryName as countryName, COUNT(l.userId) as total',
      )
      .where('DATE(l.createdAt) >= :from AND DATE(l.createdAt) <= :to', { from, to })
      .groupBy('regionId')
      .addGroupBy('regionName')
      .addGroupBy('countryId')
      .addGroupBy('countryName')
      .orderBy('countryName', 'ASC')
      .addOrderBy('regionName', 'ASC')
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
