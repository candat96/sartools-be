import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tableau_mark')
export class TableauMark extends BaseEntity {
  @Column({ nullable: true })
  tradeMark: string;
}
