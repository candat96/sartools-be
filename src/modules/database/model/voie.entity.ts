import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('voie')
export class Voie extends BaseEntity {
  @Column({ nullable: true })
  road: number;

  @Column({ nullable: true })
  bandes1: number;

  @Column({ nullable: true })
  bandes2: number;

  @Column({ nullable: true })
  bandes3: number;
}