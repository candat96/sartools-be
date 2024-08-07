import { ApiResponse } from '@common/classes/api-response';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginRequest } from './dto/request';
import { LoginResponse } from './dto/response';

@ApiTags('Admin - Authentication')
@Controller('admin/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({
    summary: 'Admin login',
    description: 'Admin login',
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async login(@Body() body: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    try {
      return await this.authService.login(body);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
