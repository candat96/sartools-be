import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('prod')
export class Prod extends BaseEntity {
  @Column({ nullable: true })
  typo: string;

  @Column({ nullable: true })
  colonne1: string;

  @Column({ nullable: true })
  dluo: number;
}