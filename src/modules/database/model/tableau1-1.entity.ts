import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tableau1_1')
export class Tableau11 extends BaseEntity {
  @Column({ nullable: true })
  peroxyde: string;
}
