import {
  Controller,
  Get,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { DashboardService } from './dashboard.service';
import {
  BounceRequest,
  ModuleViewRequest,
  RegionRequest,
  RetentionRequest,
  UserStaticRequest,
  VisitWithinDayRequest,
} from './dto/request';
import {
  BounceResponse,
  ModuleViewResponse,
  PlatformResponse,
  RegionResponse,
  RetentionResponse,
  UserStaticResponse,
  VisitWithinDayResponse,
} from './dto/response';
import { ApiResponse } from '../../../common/classes/api-response';
import { Roles } from '../../../common/decorator/role.decorator';
import { AuthGuard } from '../../../common/guards/auth.guard';
import { RolesGuard } from '../../../common/guards/roles.guard';
import { Role } from '../../database/model/entities';

@ApiTags('Admin - Dashboard')
@Controller('admin/dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('static')
  @ApiOperation({
    summary: 'User static',
    description: 'User static',
  })
  @Roles([Role.ADMIN])
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async userStatic(
    @Query() query: UserStaticRequest,
  ): Promise<ApiResponse<UserStaticResponse>> {
    try {
      return await this.dashboardService.userStatic(query);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Get('visit')
  @ApiOperation({
    summary: 'Visit within day',
    description: 'Visit within day',
  })
  @Roles([Role.ADMIN])
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async visitWithinDay(
    @Query() query: VisitWithinDayRequest,
  ): Promise<ApiResponse<VisitWithinDayResponse[]>> {
    try {
      return await this.dashboardService.visitWithinDay(query);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Get('module-view')
  @ApiOperation({
    summary: 'View by modules',
    description: 'View by modules',
  })
  @Roles([Role.ADMIN])
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async moduleView(
    @Query() query: ModuleViewRequest,
  ): Promise<ApiResponse<ModuleViewResponse>> {
    try {
      return await this.dashboardService.moduleView(query);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Get('bounce')
  @ApiOperation({
    summary: 'Bounce rate',
    description: 'Bounce rate',
  })
  @Roles([Role.ADMIN])
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async bounce(
    @Query() query: BounceRequest,
  ): Promise<ApiResponse<BounceResponse>> {
    try {
      return await this.dashboardService.bounce(query);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Get('retention')
  @ApiOperation({
    summary: 'Retention rate',
    description: 'Retention rate',
  })
  @Roles([Role.ADMIN])
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async retention(
    @Query() query: RetentionRequest,
  ): Promise<ApiResponse<RetentionResponse>> {
    try {
      return await this.dashboardService.retention(query);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Get('region')
  @ApiOperation({
    summary: 'Region',
    description: 'Region',
  })
  @Roles([Role.ADMIN])
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async region(
    @Query() query: RegionRequest,
  ): Promise<ApiResponse<RegionResponse[]>> {
    try {
      return await this.dashboardService.region(query);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Get('platform')
  @ApiOperation({
    summary: 'Platform',
    description: 'Platform',
  })
  @Roles([Role.ADMIN])
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async platform(): Promise<ApiResponse<PlatformResponse[]>> {
    try {
      return await this.dashboardService.platform();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
