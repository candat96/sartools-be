import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tableau_billes')
export class TableauBilles extends BaseEntity {
  @Column({ nullable: true })
  marque: string;

  @Column({ nullable: true })
  traitement: string;

  @Column({ nullable: true })
  usage: string;
}
