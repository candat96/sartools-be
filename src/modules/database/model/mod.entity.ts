import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('mod')
export class Mod extends BaseEntity {
  @Column({ nullable: true })
  modulation1: string;

  @Column({ nullable: true })
  plein1: number;

  @Column({ nullable: true })
  vide1: number;
}