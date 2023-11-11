import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('module')
export class Module extends BaseEntity {
  @Column({ nullable: false })
  name: string;
}
