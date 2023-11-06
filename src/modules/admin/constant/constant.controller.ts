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
import { ConstantService } from './constant.service';
import { GetConstantRequest } from './dto/request';
import { Roles } from '../../../common/decorator/role.decorator';
import { AuthGuard } from '../../../common/guards/auth.guard';
import { RolesGuard } from '../../../common/guards/roles.guard';
import { Role } from '../../database/model/entities';

@ApiTags('Admin - Constant')
@Controller('admin/constant')
export class ConstantController {
  constructor(private readonly constantService: ConstantService) {}

  @Get()
  @ApiOperation({
    summary: 'Get constant',
    description: 'Get constant',
  })
  @Roles([Role.ADMIN])
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async getUsers(@Query() { type }: GetConstantRequest) {
    try {
      return await this.constantService.getConstant(type);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
