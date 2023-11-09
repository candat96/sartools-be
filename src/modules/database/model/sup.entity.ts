import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('sup')
export class Sup extends BaseEntity {
  @Column({ nullable: true })
  support: string;
}
