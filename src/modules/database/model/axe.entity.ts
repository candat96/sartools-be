import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('axe')
export class Axe extends BaseEntity {
  @Column({ nullable: true })
  axe: string;
}
