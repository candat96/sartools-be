import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('primaire')
export class Primaire extends BaseEntity {
  @Column({ nullable: true })
  primaires: string;

  @Column({ nullable: true })
  density: number;

  @Column({ nullable: true })
  conso: number;
}