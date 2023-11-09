import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tableau_s')
export class TableauS extends BaseEntity {
  @Column({ nullable: true })
  s: string;

  @Column({ nullable: true })
  coef: string;
}
