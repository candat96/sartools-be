import { CreateUserResponse } from '../../admin/user/dto/response';

export class LoginResponse {
  token: string;
}

export class RegisterResponse extends CreateUserResponse {}
