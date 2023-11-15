import { Role, UserStatus } from '../../model/user.entity';

export const Users = [
  {
    name: 'Admin 1',
    email: 'sar.tools@sar.fr',
    salt: '98c3960e-5d04-402f-b191-58b1dcffc408',
    password: '$2a$12$1KRw54xnP/EJZ1wM9wFrqurHe3ugWnUmaKXUa18cFTqLh.yQlaKry',
    company: null,
    startDate: null,
    endDate: null,
    avatar: null,
    status: UserStatus.ACTIVE,
    position: null,
    role: Role.ADMIN,
  },
  {
    name: 'Admin 2',
    email: 'contact@roadcare.ai',
    salt: '6d81e36c-3e72-43c7-b278-198c6aaf56e8',
    password: '$2a$12$7cfnR8Vbb7e7xxrFbPY4fuCWSZruQVQR0jU6fGY4UQ2f5bZerheYC',
    company: null,
    startDate: null,
    endDate: null,
    avatar: null,
    status: UserStatus.ACTIVE,
    position: null,
    role: Role.ADMIN,
  },
];
