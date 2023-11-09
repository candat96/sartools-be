import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('primaire')
export class Primaire extends BaseEntity {
  @Column({ nullable: true })
  primaires: string;

  @Column({ type: 'float', nullable: true })
  density: number;

  @Column({ type: 'float', nullable: true })
  conso: number;
}
