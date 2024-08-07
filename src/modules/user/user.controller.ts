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
import { SaveLocationRequest } from './dto/request';
import { GetUserProfileResponse } from './dto/response';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({
    summary: 'Get user profile',
    description: 'Get user profile',
  })
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async getUserProfile(
    @AuthDecorator() auth: any,
  ): Promise<ApiResponse<GetUserProfileResponse>> {
    try {
      return await this.userService.getUserProfile(auth.id);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Post('location')
  @ApiOperation({
    summary: 'Save location',
    description: 'Save location',
  })
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async saveLocation(
    @AuthDecorator() auth: any,
    @Body() body: SaveLocationRequest,
  ) {
    try {
      return await this.userService.saveLocation(auth.id, body);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
