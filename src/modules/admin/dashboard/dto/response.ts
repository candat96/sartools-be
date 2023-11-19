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
