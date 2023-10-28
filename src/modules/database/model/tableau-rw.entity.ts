import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tableau_rw')
export class TableauRW extends BaseEntity {
  @Column({ nullable: true })
  rw: string;

  @Column({ nullable: true })
  mcd: string;
}
