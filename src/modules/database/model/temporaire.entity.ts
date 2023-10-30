import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('temporaire')
export class Temporaire extends BaseEntity {
  @Column({ nullable: true })
  t: string;

  @Column({ nullable: true })
  passages: number;
}
