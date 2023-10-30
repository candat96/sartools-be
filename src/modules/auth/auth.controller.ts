import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginRequest, RegisterRequest } from './dto/request';
import { LoginResponse, RegisterResponse } from './dto/response';
import { ApiResponse } from '../../common/classes/api-response';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({
    summary: 'User login',
    description: 'User login',
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async login(@Body() body: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    try {
      console.log('@@== LOGIN INPUT: ', body);
      return await this.authService.login(body);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Post('register')
  @ApiOperation({
    summary: 'User register',
    description: 'User register',
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async register(
    @Body() body: RegisterRequest,
  ): Promise<ApiResponse<RegisterResponse>> {
    try {
      console.log('@@== REGISTER INPUT: ', body);
      return await this.authService.register(body);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
