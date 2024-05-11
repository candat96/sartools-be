import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('enable_auth')
export class EnableAuth extends BaseEntity {
  @Column({ nullable: false, type: 'boolean', default: true })
  isEnable: boolean;
}
