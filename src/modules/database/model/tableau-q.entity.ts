import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tableau_q')
export class TableauQ extends BaseEntity {
  @Column({ nullable: true })
  q: string;

  @Column({ nullable: true })
  mcd: string;
}
