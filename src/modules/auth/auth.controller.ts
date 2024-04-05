import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  ChangePasswordRequest,
  LoginRequest,
  RegisterRequest,
  SendResetPasswordEmailRequest,
} from './dto/request';
import { LoginResponse, RegisterResponse } from './dto/response';
import { ApiResponse } from '../../common/classes/api-response';
import { AuthDecorator } from '../../common/decorator/auth.decorator';
import { AuthGuard } from '../../common/guards/auth.guard';
import { ResetPasswordRequest } from '../admin/user/dto/request';

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
      return await this.authService.register(body);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Post('change-password')
  @ApiOperation({
    summary: 'User change password',
    description: 'User change password',
  })
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async changePassword(
    @AuthDecorator() auth: any,
    @Body() body: ChangePasswordRequest,
  ): Promise<ApiResponse<any>> {
    try {
      return await this.authService.changePassword(auth.id, body);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Post('password/reset/email')
  @ApiOperation({
    summary: 'Send email to reset password',
    description: 'Send email to reset password',
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async sendResetPasswordEmail(
    @Body() { email }: SendResetPasswordEmailRequest,
  ): Promise<ApiResponse<any>> {
    try {
      return await this.authService.sendResetPasswordEmail(email);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
