import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Location, View } from './entities';

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export enum Platform {
  ANDROID = 'ANDROID',
  IOS = 'IOS',
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

  @Column({ nullable: false })
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

  @Column({ nullable: true })
  phone: string;

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

  @Column({ nullable: true, type: 'enum', enum: Platform })
  platform: Platform;

  @Column({ nullable: false, default: false })
  isDeleted: boolean;

  @OneToMany(() => View, (view) => view.user, {
    cascade: true,
  })
  views: View[];

  @OneToMany(() => Location, (location) => location.user, {
    cascade: true,
  })
  locations: Location[];
}
