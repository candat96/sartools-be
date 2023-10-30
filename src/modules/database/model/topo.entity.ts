import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('topo')
export class Topo extends BaseEntity {
  @Column({ nullable: true })
  echelle: number;

  @Column({ nullable: true })
  lecture: number;
}
