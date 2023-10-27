import { Role, UserStatus } from '../../model/user.entity';

export const Users = [
  {
    name: 'Admin',
    email: 'admin@sartools.com',
    salt: '3e6cdd10-0135-40e8-878d-7da9e31ef448',
    password:
      '$2a$12$j0U.4Gz4nt6kXzMFC5Yi4OOq1cktUTJRWGeNX2Z.nG4mzAEU/ur72',
    company: null,
    startDate: null,
    endDate: null,
    avatar: null,
    status: UserStatus.ACTIVE,
    position: null,
    role: Role.ADMIN,
  },
];
