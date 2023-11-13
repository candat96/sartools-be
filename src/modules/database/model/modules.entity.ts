import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { View } from './entities';

@Entity('modules')
export class Modules extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @OneToMany(() => View, (view) => view.module, {
    cascade: true,
  })
  views: View[];
}
