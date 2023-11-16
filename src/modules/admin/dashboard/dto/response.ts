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
