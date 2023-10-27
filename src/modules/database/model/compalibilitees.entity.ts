import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('compatibilitees')
export class Compatibilitees extends BaseEntity {
  @Column({ nullable: true })
  compat: string;

  @Column({ nullable: true })
  code1: number;
}