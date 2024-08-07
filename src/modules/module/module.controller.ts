import { ApiResponse } from '@common/classes/api-response';
import { AuthDecorator } from '@common/decorator/auth.decorator';
import { AuthGuard } from '@common/guards/auth.guard';
import {
  Body,
  Controller,
  Get,
  Post,
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
import { ViewModuleRequest } from './dto/request';
import { ModuleService } from './module.service';
import { Modules } from '../database/model/entities';

@Controller('module')
@ApiTags('Module')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Get()
  @ApiOperation({
    summary: 'Get modules',
    description: 'Get modules',
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async getModules(): Promise<ApiResponse<Modules[]>> {
    return this.moduleService.getModules();
  }

  @Post()
  @ApiOperation({
    summary: 'View modules',
    description: 'View modules',
  })
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async viewModule(
    @AuthDecorator() auth: any,
    @Body() body: ViewModuleRequest,
  ) {
    try {
      return await this.moduleService.viewModule(auth.id, body);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
