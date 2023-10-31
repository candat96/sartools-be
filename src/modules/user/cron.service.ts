import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UserService } from './user.service';
import { FRANCE_TIME_ZONE } from '../../common/constants/timezone';

@Injectable()
export class CronService {
  constructor(private readonly userService: UserService) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT, {
    name: 'Inactive user',
    timeZone: FRANCE_TIME_ZONE,
  })
  async inactiveUser() {
    await this.userService.inactiveUser();
  }
}
