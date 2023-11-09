import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tableau_liste_buses')
export class TableauListeBuses extends BaseEntity {
  @Column({ nullable: true })
  listeBuses: number;
}
