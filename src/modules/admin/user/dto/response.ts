import { Role, UserStatus } from '../../../database/model/entities';

export class CreateUserResponse {
  name: string;
  email: string;
  company: string;
  startDate: Date;
  endDate: Date;
  avatar: string;
  status: UserStatus;
  position: string;
  role: Role;
}

export class UpdateUserResponse extends CreateUserResponse {}