import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('type_voie')
export class TypeVoie extends BaseEntity {
  @Column({ nullable: true })
  type: string;

  @Column({ type: 'float', nullable: true })
  u: number;
}
