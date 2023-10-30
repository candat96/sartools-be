import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('prod')
export class Prod extends BaseEntity {
  @Column({ nullable: true })
  produit: string;
}
