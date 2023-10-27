import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tableau_angle_2')
export class TableauAngle2 extends BaseEntity {
  @Column({ nullable: true })
  angles: string;

  @Column({ nullable: true })
  bande: string;
}