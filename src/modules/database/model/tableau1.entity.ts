import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tableau1')
export class Tableau1 extends BaseEntity {
  @Column({ nullable: true })
  eaf: string;
}
