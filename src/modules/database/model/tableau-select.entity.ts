import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tableau_select')
export class TableauSelect extends BaseEntity {
  @Column({ nullable: true })
  selection: string;
}
