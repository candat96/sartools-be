import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

@Entity('user')
export class User extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  salt: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true, type: 'text' })
  company: string;

  @Column({ nullable: true })
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @Column({ nullable: true, type: 'text' })
  avatar: string;

  @Column({ nullable: false, default: UserStatus.INACTIVE })
  status: UserStatus;

  @Column({ nullable: true })
  position: string;

  @Column({ nullable: false, default: Role.USER })
  role: Role;
}