import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tableau_r')
export class TableauR extends BaseEntity {
  @Column({ nullable: true })
  r: string;

  @Column({ nullable: true })
  mcd: string;
}
