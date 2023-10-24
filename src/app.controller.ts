import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ApiResponse } from './common/classes/api-response';

@Controller()
@ApiTags('Common')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health-check')
  @ApiOperation({
    summary: 'Health check',
    description: 'Health check',
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  healthCheck(): ApiResponse<string> {
    return this.appService.healthCheck();
  }
}
