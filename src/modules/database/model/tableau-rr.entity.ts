import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tableau_rr')
export class TableauRR extends BaseEntity {
  @Column({ nullable: true })
  rr: string;

  @Column({ nullable: true })
  mcd: string;
}
