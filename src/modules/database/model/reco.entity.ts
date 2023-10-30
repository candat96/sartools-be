import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('reco')
export class Reco extends BaseEntity {
  @Column({ nullable: true })
  code: number;

  @Column({ nullable: true })
  reco: string;
}
