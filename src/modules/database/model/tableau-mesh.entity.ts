import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tableau_mesh')
export class TableauMesh extends BaseEntity {
  @Column({ nullable: true })
  mesh: number;

  @Column({ nullable: true })
  micrometre: number;
}