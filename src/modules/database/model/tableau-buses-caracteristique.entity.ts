import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tableau_buses_caracteristique')
export class TableauBusesCaracteristique extends BaseEntity {
  @Column({ nullable: true })
  orifice: number;

  @Column({ type: 'float', nullable: true })
  diametreBuse: number;

  @Column({ type: 'float', nullable: true })
  diametreBuseMM: number;

  @Column({ nullable: true })
  debitEau122bar: number;
}
