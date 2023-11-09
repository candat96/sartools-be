import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('p-sat')
export class PSat extends BaseEntity {
  @Column({ nullable: true })
  tempAir: number;

  @Column({ nullable: true })
  pSatu: number;
}
