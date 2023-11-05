import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('axe')
export class Axe extends BaseEntity {
  @Column({ nullable: true })
  axe: string;

  @Column({ nullable: true })
  modulo: string;

  @Column({ nullable: true })
  plein: string;

  @Column({ nullable: true, type: 'float' })
  vide: number;

  @Column({ nullable: true })
  u: string;
}
