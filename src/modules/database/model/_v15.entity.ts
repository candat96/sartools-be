import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('_v15')
export class _V15 extends BaseEntity {
  @Column({ nullable: true })
  _v15: number;
}
