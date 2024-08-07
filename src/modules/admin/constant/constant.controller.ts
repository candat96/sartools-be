import { Roles } from '@common/decorator/role.decorator';
import { AuthGuard } from '@common/guards/auth.guard';
import { RolesGuard } from '@common/guards/roles.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
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
import {
  AddConstantRequest,
  DeleteConstantRequest,
  GetConstantRequest,
  UpdateConstantRequest,
} from './dto/request';
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
  async getConstant(@Query() { type }: GetConstantRequest) {
    try {
      return await this.constantService.getConstant(type);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Add constant',
    description: 'Add constant',
  })
  @Roles([Role.ADMIN])
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async addConstant(@Body() body: AddConstantRequest) {
    try {
      return await this.constantService.addConstant(body);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update constant',
    description: 'Update constant',
  })
  @Roles([Role.ADMIN])
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async updateConstant(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateConstantRequest,
  ) {
    try {
      return await this.constantService.updateConstant(id, body);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete constant',
    description: 'Delete constant',
  })
  @Roles([Role.ADMIN])
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async deleteConstant(
    @Param('id', ParseIntPipe) id: number,
    @Body() { type }: DeleteConstantRequest,
  ) {
    try {
      return await this.constantService.deleteConstant(id, type);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
