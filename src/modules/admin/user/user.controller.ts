import { Body, Controller, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserRequest, UpdateUserRequest } from './dto/request';
import { CreateUserResponse, UpdateUserResponse } from './dto/response';
import { UserService } from './user.service';
import { ApiResponse } from '../../../common/classes/api-response';
import { Roles } from '../../../common/decorator/role.decorator';
import { AuthGuard } from '../../../common/guards/auth.guard';
import { RolesGuard } from '../../../common/guards/roles.guard';
import { Role } from '../../database/model/user.entity';

@ApiTags('Admin - User')
@Controller('admin/user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new user',
    description: 'Create a new user',
  })
  @Roles([Role.ADMIN])
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async createUser(@Body() body: CreateUserRequest): Promise<ApiResponse<CreateUserResponse>> {
    try {
      return await this.userService.createUser(body);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update user',
    description: 'Update user',
  })
  @Roles([Role.ADMIN])
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async updateUser(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateUserRequest): Promise<ApiResponse<UpdateUserResponse>> {
    try {
      return await this.userService.updateUser(id, body);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}