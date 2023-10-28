import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('transversales')
export class Transversales extends BaseEntity {
  @Column({ nullable: true })
  transversales: string;

  @Column({ nullable: true })
  modulo: string;

  @Column({ type: 'float', nullable: true })
  plein: number;

  @Column({ type: 'float', nullable: true })
  vide: number;

  @Column({ nullable: true })
  u: string;
}
