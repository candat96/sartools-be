import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tableau1_2')
export class Tableau12 extends BaseEntity {
  @Column({ nullable: true })
  temperature: string;
}