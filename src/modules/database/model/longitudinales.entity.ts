import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('longitudinales')
export class Longitudinales extends BaseEntity {
  @Column({ nullable: true })
  longitudinales: string;

  @Column({ nullable: true })
  modulo: string;

  @Column({ nullable: true })
  plein: number;

  @Column({ nullable: true })
  vide: number;

  @Column({ nullable: true })
  u: string;
}