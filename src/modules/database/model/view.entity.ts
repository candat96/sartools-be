import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Modules, User } from './entities';

@Entity('view')
export class View extends BaseEntity {
  @Column({ nullable: false, default: 1 })
  view: number;

  @Column({ nullable: false, type: 'bigint', default: 0 })
  time: number;

  @ManyToOne(() => User, (user) => user.views)
  user: User;

  @ManyToOne(() => Modules, (module) => module.views)
  module: Modules;
}
