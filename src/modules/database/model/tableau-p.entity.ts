import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tableau_p')
export class TableauP extends BaseEntity {
  @Column({ nullable: true })
  p: string;

  @Column({ nullable: true })
  passages: number;
}
