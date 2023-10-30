import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('convert')
export class Convert extends BaseEntity {
  @Column({ nullable: true })
  litres: string;

  @Column({ nullable: true })
  gramme: string;

  @Column({ nullable: true })
  metre: string;

  @Column({ type: 'float', nullable: true })
  coef: number;
}
