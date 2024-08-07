import { Platform } from '../../../database/model/entities';

export class StaticResponse {
  date: string;
  total: number;
}

export class UserStaticResponse {
  static: StaticResponse[];
  totalUsers: number;
  newUsers: number;
  views: number;
  averageEngagementTime: number;
}

export class VisitWithinDayResponse {
  hour: string;
  count: number;
}

export class ViewDataResponse {
  views: number;
  time: number;
}

export class ModuleViewRawInterface {
  name: string;
  views: number;
  users: number;
  usageTime: number;
}

export class TotalModuleInterface {
  total: number;
}

export class ModuleViewStatisticInterface {
  totalViews: number;
  totalUsers: number;
  totalUsageTime: number;
}

export class ModuleViewInterface {
  name: string;
  views: number;
  users: number;
  viewsPerUser: number;
  averageUsageTime: number;
}

export class ModuleViewResponse {
  views: ModuleViewInterface[];
  totalViews: number;
  totalUsers: number;
  viewsPerUser: number;
  averageUsageTime: number;
}

export class UsedInterface {
  count: number;
}

export class UsedByDayRawInterface extends UsedInterface {
  date: string;
}

export class PercentInterface {
  date: string;
  percent: number;
}

export class BounceResponse {
  bounce: PercentInterface[];
  rate: number;
}

export class RetentionResponse {
  retention: PercentInterface[];
  rate: number;
}

export class RegionResponse {
  regionId: string;
  regionName: string;
  countryId: string;
  countryName: string;
  total: number;
}

export class PlatformChartDto {
  platform: Platform;
  count: number;
}

export class PlatformResponse {
  chart: PlatformChartDto[];
  total: number;
}
