import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('longitudinales')
export class Longitudinales extends BaseEntity {
  @Column({ nullable: true })
  longitudinales: string;

  @Column({ nullable: true })
  modulo: string;

  @Column({ type: 'float', nullable: true })
  plein: number;

  @Column({ type: 'float', nullable: true })
  vide: number;

  @Column({ nullable: true })
  u: string;
}
