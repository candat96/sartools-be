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

export enum Position {
  DEFAULT = 'DEFAULT',
  DIRECTION = 'DIRECTION',
  TECHNICAL_DIRECTION = 'TECHNICAL_DIRECTION',
  COMMERCE = 'COMMERCE',
  MARKETING = 'MARKETING',
  EXPLOITATION = 'EXPLOITATION',
  APPLICATION = 'APPLICATION',
  DESIGN_OFFICE = 'DESIGN_OFFICE',
  MATERIAL = 'MATERIAL',
  RESEARCH_AND_DEVELOPMENT = 'RESEARCH_AND_DEVELOPMENT',
  TECHNICAL_ASSISTANCE = 'TECHNICAL_ASSISTANCE',
  OTHER = 'OTHER',
}

@Entity('user')
export class User extends BaseEntity {
  @Column({ nullable: true })
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

  @Column({
    nullable: false,
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.INACTIVE,
  })
  status: UserStatus;

  @Column({
    nullable: true,
    type: 'enum',
    enum: Position,
    default: Position.DEFAULT,
  })
  position: Position;

  @Column({ nullable: false, type: 'enum', enum: Role, default: Role.USER })
  role: Role;
}
